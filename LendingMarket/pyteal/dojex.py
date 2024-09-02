from feature_gates import FeatureGates
FeatureGates.set("sourcemap_enabled", True)

import json  # noqa: E402
from pyteal import *  # noqa: E402
from utils import set_payment_fields, get_asset_holdings, AggregateTuple  # noqa: E402

# Global state keys
from global_keys import *  # noqa: E402

VERSION = 1.0
BPS_SCALE = Int(10000)
UINT64_MAX = Int(2**64 - 1)


@Subroutine(TealType.none)
def is_admin():
    return Assert(Txn.sender() == App.globalGet(admin_account_key))


# TODO: better update
handle_update = Seq(
    is_admin(),
    Assert(
        Sha512_256(Txn.approval_program()) == App.globalGet(update_programhash_key),
        Sha512_256(Txn.clear_state_program()) == App.globalGet(update_clearhash_key),
        App.globalGet(update_timestamp_key) > Int(0),  # it was actually set.
        Global.latest_timestamp() > App.globalGet(update_timestamp_key),
    ),
    App.globalDel(update_timestamp_key),
    App.globalDel(update_programhash_key),
    App.globalDel(update_clearhash_key),
    Approve(),
)

on_create = Seq(App.globalPut(admin_account_key, Txn.sender()), Approve())

router = Router(
    name="unnamed-perpetuals",
    descr="""
    ## Credit to chat gpt for this text, might be a bit too long to live here but it feels nice 
    ## to help people understand what my code is aiming to do.

    A blockchain-based perpetual futures program enables traders to speculate 
    on the future price movements of an asset without owning the underlying asset. 
    This program uses automated market makers (AMMs) through a decentralized 
    aggregator to enter and close positions. AMMs use a mathematical formula to 
    determine the prices of assets based on their supply and demand. In DeFi protocols, 
    AMMs allow for efficient and automated trading without traditional order books 
    or centralized intermediaries.

    The program's supply side provides a token that users can borrow to short an asset. 
    When a user borrows the token, it is immediately sold through a decentralized aggregator 
    into a designated collateral token. This mechanism eliminates the need for a traditional 
    order book and allows for easy shorting of an asset. Since the swapping is managed by the 
    program, with the help of an on-chain aggregator, and the funds always stay inside the 
    smart contract, the risk of an undercollateralized loan is minimized.

    However, a concern arises regarding the potential for someone to manipulate the price of 
    the asset on-chain. To address this issue, the program utilizes a fully on-chain oracle 
    to calculate price impacts and swaps. The oracle ensures that all operations, such as new 
    orders, liquidations, and collateral removal, are within designated parameters and not 
    subject to market manipulation. This mechanism makes the program more secure and transparent.

    In summary, this blockchain-based perpetual futures program allows for easy speculation on 
    an asset's price movements through the use of AMMs and a decentralized aggregator. The 
    program's supply side provides a token that can be borrowed by users, and the swapping is 
    managed by the program to reduce the risk of undercollateralized loans. The program also 
    uses an on-chain oracle to ensure that all operations are within designated parameters 
    and not subject to market manipulation, making the program more secure and transparent.
    """,
    bare_calls=BareCallActions(
        # Allow this app to be created with a no-op call
        no_op=OnCompleteAction(
            action=Seq(
                on_create,
                Approve(),
            ),
            call_config=CallConfig.CREATE,
        ),
        update_application=OnCompleteAction(
            action=handle_update, call_config=CallConfig.CALL
        ),
    ),
)


@router.method(no_op=CallConfig.CALL)
def change_admin(new_address: abi.Address):
    return Seq(is_admin(), App.globalPut(admin_account_key, new_address.get()))


### Model code ###
@router.method(no_op=CallConfig.CALL)
def add_liquidity(payment: abi.Transaction):
    """
    Add liquidity. The liquidity assethas the app id specified in the global key `supply_asset_key`.
    The first argument is an abi transaction, which has to be pay if the supply asset is
    algo and has to be an axfer if the supply asset isn't algo.
    The foreign assets array requires the contract shares, key `liquidity_token_id_key`,
    as well as the axfer asset (if any).
    """
    new_shares = ScratchVar()
    amount = ScratchVar()
    contract_shares = AssetHolding().balance(
        Global.current_application_address(), App.globalGet(liquidity_token_id_key)
    )
    actions = Seq(
        contract_shares,
        # Get the amount of new liquidity added
        amount.store(
            If(App.globalGet(supply_asset_key) == Int(0))
            .Then(
                Assert(
                    payment.get().receiver() == Global.current_application_address()
                ),
                payment.get().amount(),
            )
            .Else(  # If it's axfer we also check asset id
                Assert(
                    payment.get().asset_receiver()
                    == Global.current_application_address(),
                    payment.get().xfer_asset() == App.globalGet(supply_asset_key),
                ),
                payment.get().asset_amount(),
            )
        ),
        # If there are no shares we mint one share for each atomic unit of the asset.
        # Otherwise you get a proportional share of the total shares
        If(contract_shares.value() == UINT64_MAX)
        .Then(new_shares.store(amount.load()))
        .Else(  # new_shares = new_algo  * total_shares / total_algo
            new_shares.store(
                WideRatio(
                    [
                        amount.load(),
                        UINT64_MAX - contract_shares.value(),
                    ],
                    [
                        App.globalGet(liquidity_key)
                    ],  # This could be zero in case of bad debt or all supply withdrawn, but that's fine cuz it makes the ctc fail.
                )
            ),
        ),
        # Put the new total amount of liquidity and send shares.
        App.globalPut(liquidity_key, App.globalGet(liquidity_key) + amount.load()),
        Assert(new_shares.load() > Int(0)),
        # We send the user their shares
        InnerTxnBuilder.Begin(),
        set_payment_fields(
            App.globalGet(liquidity_token_id_key),
            Txn.sender(),
            new_shares.load(),
        ),
        InnerTxnBuilder.Submit(),
        # uipt sets new interest rate, since we have more liquidity
        update_interest_per_tok(),
    )

    return actions


@router.method(no_op=CallConfig.CALL)
def remove_liquidity(repayment: abi.AssetTransferTransaction):
    """
    Unmint liquidity tokens. The only argument is an axfer with the tokens to unmint.
    The foreign assets array requires the contract shares, key `liquidity_token_id_key`,
    as well as the supplied asset (if not algo).
    """
    amount_out = ScratchVar()
    contract_shares = AssetHolding().balance(
        Global.current_application_address(), App.globalGet(liquidity_token_id_key)
    )
    actions = Seq(
        # Assert that we're being paid LP tokens.
        Assert(repayment.get().xfer_asset() == App.globalGet(liquidity_token_id_key)),
        contract_shares,
        # You get your proportion of the total liquidity relative your shares
        # amount_out = shares_in * total_liquidity / total shares
        # This rounds down, so no "remove 1 atomic unit and get 1 atomic unit" bug or whatever
        amount_out.store(
            WideRatio(
                [repayment.get().asset_amount(), App.globalGet(liquidity_key)],
                # We add repayment.asset_amount since the total shares should include what the user is redeeming
                [UINT64_MAX - contract_shares.value() + repayment.get().asset_amount()],
            )
        ),
        # Assert that we can cover this withdrawal.
        Assert(
            # The user should get at least one token
            amount_out.load() > Int(0),
            # The protocol can afford this withdrawal
            App.globalGet(liquidity_key)
            - amount_out.load()
            - App.globalGet(outstanding_liquidity_key)
            >= Int(0),
        ),
        # Update interest and then total liquidity
        update_interest_per_tok(),
        App.globalPut(liquidity_key, App.globalGet(liquidity_key) - amount_out.load()),
        # Pay withdrawn amount
        InnerTxnBuilder.Begin(),
        set_payment_fields(
            App.globalGet(supply_asset_key), Txn.sender(), amount_out.load()
        ),
        InnerTxnBuilder.Submit(),
    )
    return actions


@Subroutine(TealType.none)
def update_interest_per_tok():
    """
    This subroutine updates interest_per_tok by adding `APR * time_delta` to
    the global key `interest_per_tok_key`. Executing this before changing any
    amounts (which in turn impact the APR) ensures that the correct APR is applied.
    It is therefore important that this is ran before any changes to supplied or
    outstanding liquidity.
    """
    ratio = ScratchVar()

    apr = Seq(
        ratio.store(
            WideRatio(
                [BPS_SCALE, App.globalGet(outstanding_liquidity_key)],
                [App.globalGet(liquidity_key)],
            )
        ),
        # https://www.desmos.com/calculator/lrnrhgv7mw
        If(ratio.load() > App.globalGet(slope_midpoint_key))
        .Then(
            (ratio.load() - App.globalGet(slope_midpoint_key))
            * (ratio.load() - App.globalGet(slope_midpoint_key))
            * (App.globalGet(slope_c_key) - App.globalGet(slope_b_key))
            / (
                (BPS_SCALE - App.globalGet(slope_midpoint_key))
                * (BPS_SCALE - App.globalGet(slope_midpoint_key))
            )
            + App.globalGet(slope_b_key),
        )
        .Else(
            App.globalGet(slope_a_key)
            - (App.globalGet(slope_a_key) - App.globalGet(slope_b_key))
            * ratio.load()
            / (BPS_SCALE - App.globalGet(slope_midpoint_key))
        ),
    )

    actions = Seq(
        # This check ensures that we don't divide by zero.
        If(App.globalGet(liquidity_key) == Int(0)).Then(Return()),
        App.globalPut(
            interest_per_tok_key,
            # new_reward_per_tok = old_reward_per_tok + (borrowed_amt * ((APR * 365 * 24 * 3600) * 2**64) * time_delta) / borrowed_amt
            # new_reward_per_tok = old_reward_per_tok + ((APR * 365 * 24 * 3600) * 2**64) * time_delta
            BytesOr(  # This is just to pad it into (at least) 16 bytes.
                BytesAdd(
                    App.globalGet(interest_per_tok_key),
                    BytesMul(
                        # Convert APR to percentage per second. UINT64_MAX / (365*24*3600 * BPS_SCALE) = 58494241
                        Itob(apr * Int(58494241)),
                        Itob(
                            Global.latest_timestamp()
                            - App.globalGet(interest_last_update_key)
                        ),
                    ),
                ),
                BytesZero(Int(16)),
            ),
        ),
    )
    return actions


@Subroutine(TealType.none)
def move_interest(
    order_interest_per_tok: ScratchVar,
    borrow_amt: ScratchVar,
):
    """
    Adds accumulated interest to the borrow amount, and updates oipt.
    """
    bytes_interest = ScratchVar()
    actions = Seq(
        bytes_interest.store(
            # (ipt - oipt) * amount / (2**64 - 1)
            BytesOr(
                BytesDiv(
                    BytesMul(
                        BytesMinus(
                            App.globalGet(interest_per_tok_key),
                            order_interest_per_tok.load(),
                        ),
                        Itob(borrow_amt.load()),
                    ),
                    Itob(UINT64_MAX),
                ),
                BytesZero(Int(16)),
            )
        ),
        # We add the interest to the borrow amount
        borrow_amt.store(
            borrow_amt.load() + ExtractUint64(bytes_interest.load(), Int(0))
        ),
        # And lastly update the oipt to zero out the owed interest
        order_interest_per_tok.store(App.globalGet(interest_per_tok_key)),
    )

    return actions


@Subroutine(TealType.none)
def add_staking_rewards(amount):
    actions = Seq(
        # Send an itxn group to the staking contract thing
        Pop(Int(1))  # placeholder
    )
    return actions


@Subroutine(TealType.none)
def distribute_profits(amount):
    """
    Takes an amount of profits and distributes it amongs vest stakers, LP and insurance.
    """
    sum = ScratchVar()
    actions = Seq(
        sum.store(
            App.globalGet(rewards_to_staking_key)
            + App.globalGet(rewards_to_lp_key)
            + App.globalGet(rewards_to_insurance_key)
        ),
        add_staking_rewards(
            amount * App.globalGet(rewards_to_staking_key) / sum.load()
        ),
        App.globalPut(
            insurance_amount_key,
            App.globalGet(insurance_amount_key)
            + amount * App.globalGet(rewards_to_insurance_key) / sum.load(),
        ),
        App.globalPut(
            liquidity_key,
            App.globalGet(liquidity_key)
            + amount * App.globalGet(rewards_to_lp_key) / sum.load(),
        ),
    )

    return actions


@Subroutine(TealType.uint64)
def get_bur(total_collateral, borrow_amt):
    """
    Returns the 'borrow utilizaiton rate' as borrow/collateral, scaled with BPS_SCALE.
    """
    collateral_liq = App.globalGetEx(
        App.globalGet(swap_app_id_key),
        Itob(App.globalGet(collateral_asset_key)),
    )
    supply_liq = App.globalGetEx(
        App.globalGet(swap_app_id_key), Itob(App.globalGet(supply_asset_key))
    )
    sim_swap_output = ScratchVar()

    actions = Seq(
        collateral_liq,
        supply_liq,
        # calculate a swap output for an ideal cfAMM swap with a .3% fee
        # (x+(1-fee)*dx)*(y-dy)=x*y => dy = ((1-fee)*dx) * y / (((1-fee)*dx) + x)
        sim_swap_output.store(
            WideRatio(
                [Int(9970) * total_collateral, supply_liq.value()],
                [Int(9970) * total_collateral + BPS_SCALE * collateral_liq.value()],
            )
        ),
        Return((BPS_SCALE * borrow_amt) / sim_swap_output.load()),
    )

    return actions


@Subroutine(TealType.uint64)
def bur_below_max(bur):
    return bur < App.globalGet(max_bur_take_key)


@Subroutine(TealType.uint64)
def not_liquidateable(bur):
    return bur < BPS_SCALE - App.globalGet(liquidation_incentive_key) - App.globalGet(
        liquidation_slippage_key
    )


def liquidateable(bur):
    return Not(not_liquidateable(bur))


@router.method(no_op=CallConfig.CALL)
def check_liquidation(order_id: abi.Uint64):
    """
    Checks if an order is to be liquidated. This is done after
    adding any collateral or supply from deltas.
    """
    order_box_key = Concat(Txn.sender(), Itob(order_id.get()))
    borrow_amt = ScratchVar()
    collateral_amt = ScratchVar()
    order_interest_per_tok = ScratchVar()
    supply_sv = ScratchVar()
    bur = ScratchVar()
    collateral_box_key = Itob(App.globalGet(collateral_asset_key))
    supply_box_key = Itob(App.globalGet(supply_asset_key))

    actions = Seq(
        order_box := App.box_get(order_box_key),
        collateral_amt.store(ExtractUint64(order_box.value(), Int(0))),
        borrow_amt.store(ExtractUint64(order_box.value(), Int(8))),
        order_interest_per_tok.store(Extract(order_box.value(), Int(16), Int(16))),
        collateral_box := App.box_get(collateral_box_key),
        supply_box := App.box_get(supply_box_key),
        old_bur_box := App.box_get(bur_box_key),
        # This is our "state lock" check
        Assert(old_bur_box.hasValue()),
        # Check how much collateral the SC received, if any
        If(collateral_box.hasValue()).Then(
            collateral_amt.store(
                collateral_amt.load()
                + (
                    get_asset_holdings(App.globalGet(collateral_asset_key))
                    - Btoi(collateral_box.value())
                )
            ),
        ),
        # Check how much of the supply asset the SC received, if any
        If(supply_box.hasValue()).Then(
            # Store the delta gained
            supply_sv.store(get_asset_holdings(App.globalGet(supply_asset_key)) - Btoi(supply_box.value())),
            # Check if entire debt is repaid. and if so repay any leftovers and close the order
            If(supply_sv.load() >= borrow_amt.load())
            .Then(
                # The entire borrow is no longer outstanding
                App.globalPut(outstanding_liquidity_key, App.globalGet(outstanding_liquidity_key) - borrow_amt.load()),
                # Repay any leftover borrow_amt
                If(
                    supply_sv.load() - borrow_amt.load() > Int(0)
                ).Then(
                    InnerTxnBuilder.Begin(),
                    set_payment_fields(
                        App.globalGet(supply_asset_key),
                        Txn.sender(),
                        supply_sv.load() - borrow_amt.load(),
                    ),
                    InnerTxnBuilder.Submit(),
                ),
                # Repay any leftover collateral
                If(collateral_amt.load() > Int(0)).Then(
                    InnerTxnBuilder.Begin(),
                    set_payment_fields(
                        App.globalGet(collateral_asset_key),
                        Txn.sender(),
                        collateral_amt.load(),
                    ),
                    InnerTxnBuilder.Submit(),
                ),
                # Close the order
                Pop(App.box_delete(order_box_key)),
            )
            .Else(
                App.globalPut(outstanding_liquidity_key, App.globalGet(outstanding_liquidity_key) - supply_sv.load()),
                # Store the reduced borrow amount (delta can be 0, is ok)
                borrow_amt.store(
                    borrow_amt.load() - supply_sv.load()
                )
            ),
            # And finally delete the supply box
        ),
        # The order has changed, we grab the new and old BUR
        bur.store(get_bur(collateral_amt.load(), borrow_amt.load())),
        # If the order still exists check if liquidateable then store new values
        order_box,
        If(order_box.hasValue()).Then(
            # If our new BUR is lower we check that we're not liquidateable,
            # otherwise we make sure that we're not overleveraging manually
            If(bur.load() < Btoi(old_bur_box.value()))
            .Then(
                Assert(not_liquidateable(bur.load())),
            )
            .Else(
                Assert(bur_below_max(bur.load())),
            ),
            App.box_put(
                order_box_key,
                Concat(
                    Itob(collateral_amt.load()),
                    Itob(borrow_amt.load()),
                    order_interest_per_tok.load(),
                ),
            ),
        ),
        # And lastly we delete all the temporary boxes
        Pop(App.box_delete(collateral_box_key)),
        Pop(App.box_delete(supply_box_key)),
        Pop(App.box_delete(bur_box_key)),
    )

    return actions


@router.method(no_op=CallConfig.CALL)
def borrow_supply(order_id: abi.Uint64, requested_supply: abi.Uint64):
    """
    Sends `requested_supply` to the user and adds it to the order. If the last
    tx of the group is a call with method `check_liquidation(order_id = order_id)`
    we defer the liquidity check to that transaction. This allows collateral to be
    added within the group
    If an order with id `order_id` doesn't exist this also creates that order.
    """
    order_box_key = Concat(Txn.sender(), Itob(order_id.get()))
    borrow_amt = ScratchVar()
    collateral_amt = ScratchVar()
    order_interest_per_tok = ScratchVar()

    actions = Seq(
        # The new requested supply is now outstanding
        App.globalPut(outstanding_liquidity_key, App.globalGet(outstanding_liquidity_key) + requested_supply.get()),
        # We update the interest to ensure that new orders have the correct oipt
        update_interest_per_tok(),
        order_box := App.box_get(order_box_key),
        # If the order doesn't exist we create it, intialized with the current ipt.
        If(Not(order_box.hasValue())).Then(
            Pop(App.box_create(order_box_key, Int(32))),
            # Set current oipt
            App.box_replace(
                order_box_key, Int(16), App.globalGet(interest_per_tok_key)
            ),
            order_box,
        ),
        # Load values from box
        collateral_amt.store(ExtractUint64(order_box.value(), Int(0))),
        borrow_amt.store(ExtractUint64(order_box.value(), Int(8))),
        order_interest_per_tok.store(Extract(order_box.value(), Int(16), Int(16))),
        # Move any accumulated interest to the borrow_amt
        move_interest(order_interest_per_tok, borrow_amt),
        # Send the user the requested supply
        InnerTxnBuilder.Begin(),
        set_payment_fields(
            App.globalGet(supply_asset_key),
            Txn.sender(),
            requested_supply.get(),
        ),
        InnerTxnBuilder.Submit(),
        # Store the updated borrow, supply and oipt
        borrow_amt.store(borrow_amt.load() + requested_supply.get()),
        App.box_put(
            order_box_key,
            Concat(
                Itob(collateral_amt.load()),
                Itob(borrow_amt.load()),
                order_interest_per_tok.load(),
            ),
        ),
        # Check if the last transaction is to check liquidation for this order:
        (gsz := ScratchVar()).store(Global.group_size() - Int(1)),
        If(
            And(
                # The call uses the correct selector correct selector
                Gtxn[gsz.load()].application_args[Int(0)]
                == MethodSignature(check_liquidation.method_signature()),
                # and it's targetting this order
                Gtxn[gsz.load()].application_args[Int(1)]
                == Txn.application_args[Int(1)],
                Gtxn[gsz.load()].sender() == Txn.sender(),
            )
        )
        .Then(
            # Create box to store the contract balance of supply asset. Fail if this exists.
            Assert(App.box_create(Itob(App.globalGet(collateral_asset_key)), Int(8))),
            # Put the supply balance into the box, to allow the check-tx to calculate how much
            # assets were added before it was called.
            If(App.globalGet(collateral_asset_key) == Int(0))
            .Then(
                App.box_put(
                    Itob(App.globalGet(collateral_asset_key)),
                    Itob(Balance(Global.current_application_address())),
                )
            )
            .Else(
                holdings := AssetHolding.balance(
                    Global.current_application_address(),
                    App.globalGet(collateral_asset_key),
                ),
                Assert(holdings.hasValue()),
                App.box_put(
                    Itob(App.globalGet(collateral_asset_key)), Itob(holdings.value())
                ),
            ),
            # Make sure no bur_box exists, this is our "state lock"
            Assert(App.box_create(bur_box_key, Int(8))),
            # If the user didn't borrow any more it is allowed to land on a
            # BUR above max_bur, else it has to decrease (we store the delta)
            If(Or(requested_supply.get() == Int(0), collateral_amt.load() == Int(0)))
            .Then(App.box_put(bur_box_key, Itob(Int(0))))
            .Else(
                App.box_put(
                    bur_box_key, Itob(get_bur(collateral_amt.load(), borrow_amt.load()))
                )
            ),
        )
        .Else(
            # Make sure the user isn't exceeding the max bur
            Assert(bur_below_max(get_bur(collateral_amt.load(), borrow_amt.load()))),
            order_box,
            # We log the new order to put the delta into the block
            Log(order_box_key),
            Log(order_box.value()),
        ),
    )

    return actions


@router.method(no_op=CallConfig.CALL)
def remove_collateral(order_id: abi.Uint64, requested_collateral: abi.Uint64):
    """
    Sends `requested_collateral` to the user and remove it from the order. If the last
    tx of the group is a call with method `check_liquidation(order_id = order_id)`
    we defer the liquidity check to that transaction.
    If borrow is 0 `check_liquidation` closes the position.
    """
    order_box_key = Concat(Txn.sender(), Itob(order_id.get()))
    borrow_amt = ScratchVar()
    collateral_amt = ScratchVar()
    order_interest_per_tok = ScratchVar()

    actions = Seq(
        # TODO: Move the box-stuff into a subroutine for better readability and to not make mistakes if changing the structure.
        order_box := App.box_get(order_box_key),
        collateral_amt.store(ExtractUint64(order_box.value(), Int(0))),
        borrow_amt.store(ExtractUint64(order_box.value(), Int(8))),
        order_interest_per_tok.store(Extract(order_box.value(), Int(16), Int(16))),
        # We update the interest and move it onto the borrow_amt.
        update_interest_per_tok(),
        move_interest(order_interest_per_tok, borrow_amt),
        # Send the user the requested collateral
        collateral_amt.store(collateral_amt.load() - requested_collateral.get()),
        InnerTxnBuilder.Begin(),
        set_payment_fields(
            App.globalGet(collateral_asset_key),
            Txn.sender(),
            requested_collateral.get(),
        ),
        InnerTxnBuilder.Submit(),
        # Store the update amounts
        App.box_put(
            order_box_key,
            Concat(
                Itob(collateral_amt.load()),
                Itob(borrow_amt.load()),
                order_interest_per_tok.load(),
            ),
        ),
        # Check if the last transaction is to check liquidation for this order:
        If(
            And(
                # The user is doing both calls,
                Gtxn[Global.group_size()].sender() == Txn.sender(),
                # the call uses the correct selector correct selector
                Gtxn[Global.group_size()].application_args[Int(0)]
                == MethodSignature(check_liquidation.method_signature()),
                # And it's targetting this order
                Gtxn[Global.group_size()].application_args[Int(1)]
                == Txn.application_args[Int(1)],
            )
        )
        .Then(
            # Create box to store the contract balance of supply asset. Fail if this exists.
            Assert(App.box_create(Itob(App.globalGet(supply_asset_key)), Int(8))),
            # Put the supply balance into the box, to allow the check-tx to calculate how much
            # assets were added before it was called.
            If(App.globalGet(supply_asset_key) == Int(0))
            .Then(
                App.box_put(
                    Itob(App.globalGet(supply_asset_key)),
                    Itob(Balance(Global.current_application_address())),
                )
            )
            .Else(
                holdings := AssetHolding.balance(
                    Global.current_application_address(),
                    App.globalGet(supply_asset_key),
                ),
                Assert(holdings.hasValue()),
                App.box_put(
                    Itob(App.globalGet(supply_asset_key)), Itob(holdings.value())
                ),
            ),
            # Make sure no bur_box exists, this is our "state lock"
            Assert(App.box_create(bur_box_key, Int(8))),
            # If the user didn't borrow any more it is allowed to land on a
            # BUR above max_bur, else it has to decrease (we store the delta)
            If(requested_collateral.get() == Int(0))
            .Then(App.box_put(bur_box_key, Itob(Int(0))))
            .Else(
                App.box_put(
                    bur_box_key, Itob(get_bur(collateral_amt.load(), borrow_amt.load()))
                )
            ),
        )
        .Else(
            # Make sure we're not liquidateable and approve
            Assert(bur_below_max(get_bur(collateral_amt.load(), borrow_amt.load()))),
            order_box,
            # We log the new order to put the delta into the block
            Log(order_box_key),
            Log(order_box.value()),
        ),
    )

    return actions


@router.method(no_op=CallConfig.CALL)
def liquidate_position(address: abi.Address, order_id: abi.Uint64):
    """
    This method liquidates a position. There are no user-supplied slippage parameters as this
    is decided by the protocol itself. This method simply checks if the position is liquidateable
    and if it is the protocol sells all collateral tokens with slippage guided by predefined
    parameters.
    """
    boxkey = Concat(address.get(), Itob(order_id.get()))
    collateral_amt = ScratchVar()
    borrow_amt = ScratchVar()
    order_interest_per_tok = ScratchVar()
    output_amt = ScratchVar()

    actions = Seq(
        box := App.box_get(boxkey),
        collateral_amt.store(ExtractUint64(box.value(), Int(0))),
        borrow_amt.store(ExtractUint64(box.value(), Int(8))),
        order_interest_per_tok.store(Extract(box.value(), Int(24), Int(16))),
        update_interest_per_tok(),
        move_interest(order_interest_per_tok, borrow_amt),
        Assert(liquidateable(get_bur(collateral_amt.load(), borrow_amt.load()))),
        output_amt.store(
            call_decentragator(
                App.globalGet(collateral_asset_key),
                App.globalGet(supply_asset_key),
                collateral_amt.load(),
            )
        ),
        # We didn't get rugged/MEV'd
        Assert(
            output_amt.load()
            > slippage_based_on_oracle(
                App.globalGet(collateral_asset_key),
                App.globalGet(supply_asset_key),
                collateral_amt.load(),
            )
        ),
        # Did we make a profit?
        If(output_amt.load() > borrow_amt.load())
        .Then(
            # The protocol made a profit from this liquidation, we share the profit
            distribute_profits(output_amt.load() - borrow_amt.load()),
        )
        .Else(
            # The protocol lost money (or at least didn't make a profit) so there are no
            # rewards to share.
            App.globalPut(
                liquidity_key,
                App.globalGet(liquidity_key) - (borrow_amt.load() - output_amt.load()),
            ),
        ),
        # Either way the debt is no longer outstanding
        App.globalPut(
            outstanding_liquidity_key,
            App.globalGet(outstanding_liquidity_key) - borrow_amt.load(),
        ),
        Pop(App.box_delete(boxkey)),
    )

    return actions


@Subroutine(TealType.uint64)
def call_decentragator(from_asset, to_asset, amount):
    balance = ScratchVar()
    holdings = AssetHolding.balance(Global.current_application_address(), to_asset)
    addr = AppParam.address(App.globalGet(swap_app_id_key))

    actions = Seq(
        holdings,
        addr,
        balance.store(holdings.value()),
        InnerTxnBuilder.Begin(),
        set_payment_fields(
            from_asset, addr.value(), amount
        ),
        (abi_from_asset := abi.Uint64()).set(from_asset),
        (abi_to_asset := abi.Uint64()).set(to_asset),
        (abi_min_amt := abi.Uint64()).set(Int(0)),
        InnerTxnBuilder.Next(),
        InnerTxnBuilder.MethodCall(
            app_id=App.globalGet(swap_app_id_key),
            method_signature="decentragate_sef(uint64,uint64,uint64,address)void",
            args=[abi_from_asset, abi_to_asset, abi_min_amt, Global.current_application_address()],
        ),
        InnerTxnBuilder.Submit(),
        holdings,
        Return(holdings.value() - balance.load()),
    )
    return actions


@Subroutine(TealType.uint64)
def slippage_based_on_oracle(from_asset, to_asset, amount):
    """
    How much would a worst case scenario swap against the oracle net, minus slippage.
    Used to prevent MEV
    """
    from_liq = App.globalGetEx(
        App.globalGet(swap_app_id_key),
        Itob(from_asset),
    )
    to_liq = App.globalGetEx(App.globalGet(swap_app_id_key), Itob(to_asset))
    sim_swap_output = ScratchVar()

    actions = Seq(
        from_liq,
        to_liq,
        # calculate a swap output for an ideal cfAMM swap with a .3% fee
        # (x+(1-fee)*dx)*(y-dy)=x*y => dy = ((1-fee)*dx) * y / (((1-fee)*dx) + x)
        sim_swap_output.store(
            WideRatio(
                [Int(9970) * amount, to_liq.value()],
                [Int(9970) * amount + BPS_SCALE * from_liq.value()],
            )
        ),
        Return(
            sim_swap_output.load()
            * (BPS_SCALE - App.globalGet(liquidation_slippage_key))
            / BPS_SCALE
        ),
    )

    return actions


### MISC - Not related to model ###
@router.method(no_op=CallConfig.CALL)
def donate_rewards(payment: abi.Transaction, to_lp: abi.Uint64, to_vest: abi.Uint64):
    amount = ScratchVar()
    splitsum = to_lp.get() + to_vest.get()
    actions = Seq(
        amount.store(
            If(App.globalGet(supply_asset_key) == Int(0))
            .Then(
                Assert(
                    payment.get().receiver() == Global.current_application_address()
                ),
                payment.get().amount(),
            )
            .Else(
                Assert(
                    payment.get().xfer_asset() == App.globalGet(supply_asset_key),
                    payment.get().asset_receiver()
                    == Global.current_application_address(),
                ),
                payment.get().asset_amount(),
            )
        ),
        add_staking_rewards(amount.load() * to_vest.get() / splitsum),
        App.globalPut(
            liquidity_key,
            App.globalGet(liquidity_key) + amount.load() * to_lp.get() / splitsum,
        ),
    )

    return actions


@router.method(no_op=CallConfig.CALL)
def initialize_upgrade(approval_hash: abi.DynamicBytes, clear_hash: abi.DynamicBytes):
    # update_timestamp = Global.latest_timestamp() + Int(
    #     1209600
    # )  # We can update 2 weeks from now, 1209600 seconds.

    update_timestamp = Global.latest_timestamp() - Int(1000)  # We can update instantly.
    return Seq(
        is_admin(),
        App.globalPut(update_programhash_key, approval_hash.get()),
        App.globalPut(update_clearhash_key, clear_hash.get()),
        App.globalPut(update_timestamp_key, update_timestamp),
    )


@router.method(no_op=CallConfig.CALL)
def setup_assets(
    supply_asset: abi.Asset,
    collateral_asset: abi.Asset,
    name: abi.String,
    unit_name: abi.String,
    url: abi.String,
):
    actions = Seq(
        is_admin(),
        # If this global key exists the contract has already been setup.
        # The default value for a global key is Int(0).
        Assert(App.globalGet(interest_per_tok_key) == Int(0)),
        App.globalPut(supply_asset_key, supply_asset.asset_id()),  # global uint
        App.globalPut(collateral_asset_key, collateral_asset.asset_id()),  # global uint
        # Liquidity provision setup
        App.globalPut(liquidity_key, Int(0)),  # global uint
        App.globalPut(outstanding_liquidity_key, Int(0)),  # global uint
        App.globalPut(insurance_amount_key, Int(0)),  # global uint
        # Interest setup
        App.globalPut(interest_last_update_key, Int(0)),  # global uint
        App.globalPut(interest_per_tok_key, BytesZero(Int(16))),  # global bytes
        # opt in to assets
        InnerTxnBuilder.Begin(),
        # Opt in to asset 1
        If(App.globalGet(supply_asset_key) != Int(0)).Then(
            set_payment_fields(
                App.globalGet(supply_asset_key),
                Global.current_application_address(),
                Int(0),
            ),
            InnerTxnBuilder.Next(),
        ),
        # Opt in to asset 2
        If(App.globalGet(collateral_asset_key) != Int(0)).Then(
            set_payment_fields(
                App.globalGet(collateral_asset_key),
                Global.current_application_address(),
                Int(0),
            ),
            InnerTxnBuilder.Next(),
        ),
        # Mint LP tokens
        InnerTxnBuilder.SetFields(
            {
                TxnField.type_enum: TxnType.AssetConfig,
                TxnField.config_asset_total: UINT64_MAX,
                TxnField.config_asset_decimals: Int(6),
                TxnField.config_asset_default_frozen: Int(0),
                TxnField.config_asset_url: url.get(),
                TxnField.config_asset_name: name.get(),
                TxnField.config_asset_unit_name: unit_name.get(),
                TxnField.config_asset_freeze: Global.zero_address(),
                TxnField.config_asset_manager: Global.zero_address(),
                TxnField.config_asset_clawback: Global.zero_address(),
                TxnField.config_asset_reserve: Global.current_application_address(),
                TxnField.fee: Int(0),
            }
        ),
        InnerTxnBuilder.Submit(),
        # Put LP token ID into state
        App.globalPut(liquidity_token_id_key, InnerTxn.created_asset_id()),
    )

    return actions


@router.method()
def update_model_params(
    liquidation_incentive: abi.Uint64,
    liquidation_slippage: abi.Uint64,
    max_bur_take: abi.Uint64,
    rewards_to_staking: abi.Uint64,
    rewards_to_lp: abi.Uint64,
    rewards_to_insurance: abi.Uint64,
    slope_midpoint: abi.Uint64,
    slope_a: abi.Uint64,
    slope_b: abi.Uint64,
    slope_c: abi.Uint64,
    swap_app_id: abi.Uint64,
):
    actions = Seq(
        is_admin(),
        # Orders
        App.globalPut(max_bur_take_key, max_bur_take.get()),  # global uint, bps
        App.globalPut(liquidation_incentive_key, liquidation_incentive.get()),
        App.globalPut(
            liquidation_slippage_key, liquidation_slippage.get()
        ),  # global uint, bps
        # Reward sharing
        App.globalPut(rewards_to_staking_key, rewards_to_staking.get()),
        App.globalPut(rewards_to_lp_key, rewards_to_lp.get()),  # global uint64, bps
        App.globalPut(
            rewards_to_insurance_key, rewards_to_insurance.get()
        ),  # global uint64, bps
        # Interest "staking"
        App.globalPut(slope_midpoint_key, slope_midpoint.get()),  # global uint64, bps
        App.globalPut(slope_a_key, slope_a.get()),  # global uint64, bps
        App.globalPut(slope_b_key, slope_b.get()),  # global uint64, bps
        App.globalPut(slope_c_key, slope_c.get()),  # global uint64, bps
        # Swap and oracle
        App.globalPut(swap_app_id_key, swap_app_id.get()),  # global uint64, bps
    )
    return actions


# @router.method(no_op=CallConfig.CALL)
# def admin_withdraw_unclaimed_assets(asset: abi.Asset, amount: abi.Uint64) -> Expr:
#     """Allows the creator to withdraw `amount` of `asset`."""
#     asset_holding = AssetHolding.balance(
#         Global.current_application_address(), asset.asset_id()
#     )
#     actions = Seq(
#         # TODO: Assert that it's one of the admins instead.
#         Assert(Txn.sender() == Global.creator_address()),
#         (balance := ScratchVar()).store(Int(0)),
#         # Store how many tokens we have
#         If(asset.asset_id() == Int(0))
#         .Then(
#             balance.store(  # We can't withdraw the MBR.
#                 Balance(Global.current_application_address()) - Global.min_balance()
#             )
#         )
#         .Else(
#             asset_holding,
#             balance.store(asset_holding.value()),
#         ),
#         # Make sure we have enough money to pay all the referrals
#         box_amount := App.box_get(Itob(asset.asset_id())),
#         Assert(balance.load() - amount.get() - Btoi(box_amount.value()) >= Int(0)),
#         # Pay the admin who requested withdrawal.
#         InnerTxnBuilder.Begin(),
#         set_payment_fields(asset.asset_id(), Txn.sender(), amount.get()),
#         InnerTxnBuilder.Submit(),
#         Approve(),
#     )
#     return actions

results = router.compile(
    version=9,
    optimize=OptimizeOptions(scratch_slots=True),
    with_sourcemaps=True,
    annotate_teal=True,
    pcs_in_sourcemap=True,
    annotate_teal_headers=True,
    annotate_teal_concise=False,
)

approval_program = results.approval_teal
clear_state_program = results.clear_teal
contract = results.abi_contract

if __name__ == "__main__":
    with open(f"binaries/dojex_approval_v{VERSION}.teal", "w") as f:
        f.write(results.approval_teal)

    with open(f"binaries/dojex_clear_state_v{VERSION}.teal", "w") as f:
        f.write(results.clear_teal)

    with open(f"binaries/dojex_v{VERSION}.json", "w") as f:
        f.write(json.dumps(results.abi_contract.dictify(), indent=4))

    with open(f"binaries/dojex_sourcemap_v{VERSION}.txt", "w") as f:
        f.write((results.approval_sourcemap.annotated_teal))
