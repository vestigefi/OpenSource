from pyteal import *
from global_keys import *

UINT64_MAX = Int(2**64 - 1)


### VEST staking part ###
@Subroutine(TealType.none)
def add_vest_rewards(amount):
    """
    We add an amount of the supply token to the VEST stakers
    reward per tok. We scale this with a uint64max before we divide
    to preserve accuracy.
    """
    actions = Seq(
        # Track new rewards
        App.globalPut(
            outstanding_vest_rewards_key,
            App.globalGet(outstanding_vest_rewards_key) + amount,
        ),
        # If no VEST is staked we give the amount to liquidity providers
        If(App.globalGet(total_vest_stake_key) == Int(0))
        .Then(
            App.globalPut(
                liquidity_key,
                App.globalGet(liquidity_key) + amount,
            ),
        )
        .Else(
            # new_reward_per_tok = old_reward_per_tok + (amount * uint64max) / total_vest_stake
            App.globalPut(
                vest_reward_per_tok_key,
                BytesOr(  # This is just to pad it into (at least) 16 bytes.
                    BytesAdd(
                        App.globalGet(vest_reward_per_tok_key),
                        BytesDiv(
                            BytesMul(Itob(amount), Itob(UINT64_MAX)),
                            Itob(App.globalGet(total_vest_stake_key)),
                        ),
                    ),
                    BytesZero(Int(16)),
                ),
            )
        ),
    )

    return actions


@Subroutine(TealType.none)
def move_unclaimed_vest_rewards():
    """
    This subroutine moves unclaimed VEST rewards to users local state.
    This also puts values into the local key `vest_reward_per_tok_lkey`.
    """
    rewards = ScratchVar()

    actions = Seq(
        # (user_rewards_per_tok - current_rewards_per_tok) * user_vest_stake / uint64max
        # This should always fit into a uint64 (since rewards can never be more than all of an asset, which is a uint64)
        # (or well they can be more than all of an asset, but that problem is a looong way out... This is reasonable.)
        # and will therefore never overflow 16 bytes, and will always divide into 8 bytes.
        # This also truncates, which means that an atomic unit will be rounded away quite often.
        # This rounded away unit is not accounted for in App.globalGet(outstanding_vest_rewards_key), and I don't think
        # it's possible to account for them there. They will be lost unless manually moved...
        rewards.store(
            BytesOr(  # This is just to pad it into (at least) 16 bytes.
                BytesDiv(
                    BytesMul(
                        BytesMinus(
                            App.globalGet(vest_reward_per_tok_key),
                            App.localGet(Txn.sender(), vest_reward_per_tok_lkey),
                        ),
                        Itob(App.localGet(Txn.sender(), vest_stake_lkey)),
                    ),
                    Itob(UINT64_MAX),
                ),
                BytesZero(Int(16)),
            )
        ),
        # We extract the last 8 bytes as an int
        rewards.store(ExtractUint64(rewards.load(), Len(rewards.load()) - Int(8))),
        # The user has claimed the rewards into unclaimed rewards
        App.localPut(
            Txn.sender(),
            unclaimed_vest_rewards_lkey,
            App.localGet(Txn.sender(), unclaimed_vest_rewards_lkey) + rewards.load(),
        ),
        # Refresh the users reward_per_tok
        App.localPut(
            Txn.sender(),
            vest_reward_per_tok_lkey,
            App.globalGet(vest_reward_per_tok_key),
        ),
    )
    return actions


@router.method(no_op=CallConfig.CALL)
def add_vest_stake(payment: abi.AssetTransferTransaction):
    """
    Add VEST to users local state.
    """
    ptxn = payment.get()

    actions = Seq(
        Assert(
            ptxn.xfer_asset() == App.globalGet(vest_asset_id_key),
            payment.get().asset_receiver() == Global.current_application_address(),
        ),
        # We softclaim the user rewards and move them to state, to be allowed to update their stake.
        # This also updates the `rewards_per_tok_lkey`.
        move_unclaimed_vest_rewards(),
        # Add stake to user
        App.localPut(
            Txn.sender(),
            vest_stake_lkey,
            App.localGet(Txn.sender(), vest_stake_lkey) + ptxn.asset_amount(),
        ),
        # Add stake to global state
        App.globalPut(
            total_vest_stake_key,
            App.globalGet(total_vest_stake_key) + ptxn.asset_amount(),
        ),
    )

    return actions


@router.method(no_op=CallConfig.CALL)
def remove_vest_stake(amount_out: abi.Uint64):
    """
    This function removes `amount_out` of a users staked vest and sends it back.
    It does not claim rewards, but it does move unclaimed rewards to local state.
    """
    actions = Seq(
        # We softclaim the user rewards and move them to state, to be allowed to update their stake.
        # This also updates the `rewards_per_tok_lkey`.
        move_unclaimed_vest_rewards(),
        # Remove stake from user, will underflow if amount_out > current_stake
        App.localPut(
            Txn.sender(),
            vest_stake_lkey,
            App.localGet(Txn.sender(), vest_stake_lkey) - amount_out.get(),
        ),
        # Remove stake from global state
        App.globalPut(
            total_vest_stake_key,
            App.globalGet(total_vest_stake_key) - amount_out.get(),
        ),
        # Send the removed stake to the user.
        InnerTxnBuilder.Begin(),
        set_payment_fields(
            App.globalGet(vest_asset_id_key), Txn.sender(), amount_out.get()
        ),
        InnerTxnBuilder.Submit(),
    )

    return actions


@router.method(no_op=CallConfig.CALL)
def claim_vest_rewards():
    """
    This function sends the user their unclaimed rewards from VEST staking.
    """
    actions = Seq(
        # Move any unclaimed rewards to local state
        move_unclaimed_vest_rewards(),
        # Make sure there are unclaimed rewards (Int(0) is False.)
        Assert(App.localGet(Txn.sender(), unclaimed_vest_rewards_lkey)),
        # Send rewards
        InnerTxnBuilder.Begin(),
        set_payment_fields(
            App.globalGet(supply_asset_key),
            Txn.sender(),
            App.localGet(Txn.sender(), unclaimed_vest_rewards_lkey),
        ),
        InnerTxnBuilder.Submit(),
        # Reset their unclaimed rewards counter
        App.localPut(Txn.sender(), unclaimed_vest_rewards_lkey, Int(0)),
        # The rewards are no longer outstanding
        App.globalPut(
            outstanding_vest_rewards_key,
            App.globalGet(outstanding_vest_rewards_key)
            - App.localGet(Txn.sender(), unclaimed_vest_rewards_lkey),
        ),
    )
    return actions


@router.method(opt_in=CallConfig.CALL)
def optin():
    actions = Seq(
        Assert(App.localGet(Txn.sender(), vest_reward_per_tok_lkey) == Int(0)),
        App.localPut(Txn.sender(), unclaimed_vest_rewards_lkey, Int(0)),
        App.localPut(Txn.sender(), vest_reward_per_tok_lkey, BytesZero(Int(16))),
        App.localPut(Txn.sender(), vest_stake_lkey, Int(0)),
    )

    return actions
