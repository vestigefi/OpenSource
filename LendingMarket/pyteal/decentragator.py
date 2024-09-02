from feature_gates import FeatureGates

FeatureGates.set_sourcemap_enabled(True)

import json  # noqa: E402
from pyteal import *  # noqa: E402
from utils import set_payment_fields, optin, get_asset_holdings  # noqa: E402
from dexes import META, extract_sv_uint, AggregateTuple  # noqa: E402
from typing import Literal  # noqa: E402

# Global state keys
from global_keys import *  # noqa: E402

VERSION = "1.0"
BPS_SCALE = Int(10000)
UINT64_MAX = Int(2 ^ 64 - 1)
ZERO_ADDR = Addr("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ")


handle_update = Seq(
    Assert(
        Txn.sender() == Global.creator_address(),
        Sha512_256(Txn.approval_program()) == App.globalGet(update_programhash_key),
        Sha512_256(Txn.clear_state_program()) == App.globalGet(update_clearhash_key),
        App.globalGet(update_timestamp_key) > Int(0),
        Global.latest_timestamp() > App.globalGet(update_timestamp_key),
    ),
    App.globalDel(update_timestamp_key),
    App.globalDel(update_programhash_key),
    App.globalDel(update_clearhash_key),
    Approve(),
)

router = Router(
    name="decentragator",
    descr=(
        """A not so simple smartcontract which lets you aggregate up to five
        dex-swaps. This contract handles algo nicely by mapping an 'ASA' with
        ID 0 to algo."""
    ),
    bare_calls=BareCallActions(
        # Allow this app to be created with a no-op call
        no_op=OnCompleteAction(
            action=Seq(
                Approve(),
            ),
            call_config=CallConfig.CREATE,
        ),
        update_application=OnCompleteAction(
            action=handle_update, call_config=CallConfig.CALL
        ),
        opt_in=OnCompleteAction(
            action=Seq(App.localPut(Txn.sender(), last_updated_round_key, Int(0))),
            call_config=CallConfig.CALL,
        ),
    ),
)


@router.method(no_op=CallConfig.CALL)
def decentragate_sef(
    from_asset: abi.Uint64,
    to_asset: abi.Uint64,
    min_out: abi.Uint64,
    target: abi.Address,
):
    at = abi.make(abi.DynamicArray[AggregateTuple])
    ptxn = Gtxn[Txn.group_index() - Int(1)]

    i = ScratchVar()
    start = i.store(Int(0))
    cond = i.load() < at.length()
    iter = i.store(i.load() + Int(1))

    liquidity_data = ScratchVar()
    total_liquidity = ScratchVar()
    amt = ScratchVar()
    amount = ScratchVar()
    holdings = ScratchVar()

    actions = Seq(
        atbox := App.box_get(aggregator_array_boxkey),
        Assert(atbox.hasValue()),
        at.decode(atbox.value()),
        # Get the amount to swap
        If(from_asset.get() == Int(0))
        .Then(
            Assert(
                ptxn.receiver() == Global.current_application_address(),
            ),
            amount.store(ptxn.amount()),
        )
        .Else(
            Assert(
                ptxn.xfer_asset() == from_asset.get(),
                ptxn.asset_receiver() == Global.current_application_address(),
            ),
            amount.store(ptxn.asset_amount()),
        ),
        total_liquidity.store(Int(0)),
        liquidity_data.store(Bytes("")),
        For(start, cond, iter).Do(
            # Extract out the AggregateTuple
            (c_tuple := AggregateTuple()).set(at[i.load()]),
            (c_dex := abi.make(abi.StaticBytes[Literal[2]])).set(c_tuple.dex),
            (c_app_id := abi.Uint64()).set(c_tuple.app),
            (c_extra := abi.DynamicBytes()).set(c_tuple.extra),
            # Populate sv with data
            META.populate_data(
                c_dex.get(),
                c_app_id.get(),
                from_asset.get(),
                to_asset.get(),
                c_extra.get(),
                liquidity_data,
            ),
            # Add the latest liquidity to the total tracker
            total_liquidity.store(
                total_liquidity.load()
                + Btoi(Substring(liquidity_data.load(), i.load() * Int(24), Int(8)))
            ),
        ),
        holdings.store(get_asset_holdings(to_asset.get())),
        amt.store(Int(0)),
        For(start, cond, iter).Do(
            (c_tuple := AggregateTuple()).set(at[i.load()]),
            (c_dex := abi.make(abi.StaticBytes[Literal[2]])).set(c_tuple.dex),
            (c_app_id := abi.Uint64()).set(c_tuple.app),
            (c_extra := abi.DynamicBytes()).set(c_tuple.extra),
            # Get amount to swap
            amt.store(
                amount.load()
                * extract_sv_uint(liquidity_data, i.load(), Int(0))
                / total_liquidity.load()
            ),
            # Do swap
            META.do_sef_swap(
                c_dex.get(),
                c_app_id.get(),
                amt.load(),
                from_asset.get(),
                to_asset.get(),
                c_extra.get(),
            ),
        ),
        # holdings now holds the delta gained.
        holdings.store(get_asset_holdings(to_asset.get()) - holdings.load()),
        Assert(holdings.load() > min_out.get()),
        InnerTxnBuilder.Begin(),
        set_payment_fields(
            to_asset.get(),
            If(target.get() == ZERO_ADDR, Txn.sender(), target.get()),
            holdings.load(),
        ),
        InnerTxnBuilder.Submit(),
    )

    return actions


@router.method
def initialize(
    asset1: abi.Uint64,
    asset2: abi.Uint64,
    l1: abi.Uint64,
    l2: abi.Uint64,
    max_lchange_key: abi.Uint64,
    mutable: abi.Uint64,
    dextupleobj: abi.DynamicArray[AggregateTuple],
):
    return Seq(
        Assert(Txn.sender() == Global.creator_address()),
        Assert(
            Or(
                App.globalGet(Bytes("mutable")),
                Not(App.globalGet(last_updated_round_key)),
            )
        ),
        App.globalPut(asset_1_id_key, asset1.get()),
        App.globalPut(asset_2_id_key, asset2.get()),
        App.globalPut(last_liquidity_a1_key, l1.get()),
        App.globalPut(last_liquidity_a2_key, l2.get()),
        App.globalPut(last_updated_round_key, Global.round()),
        App.globalPut(Itob(asset1.get()), l1.get()),
        App.globalPut(Itob(asset2.get()), l2.get()),
        App.globalPut(max_liquidity_change_key, max_lchange_key.get()),
        App.globalPut(Bytes("mutable"), mutable.get()),
        # This assert makes the dextupleobj immutable, if at is set the call fails.
        Assert(App.box_create(aggregator_array_boxkey, Len(dextupleobj.encode()))),
        App.box_put(aggregator_array_boxkey, dextupleobj.encode()),
        optin(asset1.get(), asset2.get()),
    )


@router.method
def update_oracle():
    return _update_oracle()


@router.method
def update_oracle_limited():
    return Seq(
        # Assert that a new round has started
        Assert(
            App.localGet(Txn.sender(), last_updated_round_key)
            < App.globalGet(last_updated_round_key)
        ),
        _update_oracle(),
        App.localPut(
            Txn.sender(), last_updated_round_key, App.globalGet(last_updated_round_key)
        ),
    )


@Subroutine(TealType.none)
def _update_oracle():
    at = abi.make(abi.DynamicArray[AggregateTuple])
    sv = ScratchVar()

    i = ScratchVar()
    start = i.store(Int(0))
    cond = i.load() < at.length()
    iter = i.store(i.load() + Int(1))

    asset_1_liq = ScratchVar()
    asset_2_liq = ScratchVar()
    actions = Seq(
        # Make sure the update is neither grouped nor called from an app.
        # This makes sure that the only way to sandwich the update between
        # price changing actions are to be the proposer, and with the "mi" set
        # to a reasonable percent the probability of someone attacking the price
        # becomes prohibilitvly difficult and expensive.
        Assert(Global.group_size() == Int(1), Global.caller_app_id() == Int(0)),
        asset_1_liq.store(Int(0)),
        asset_2_liq.store(Int(0)),
        atbox := App.box_get(aggregator_array_boxkey),
        Assert(atbox.hasValue()),
        at.decode(atbox.value()),
        For(start, cond, iter).Do(
            # Extract out the AggregateTuple
            (c_tuple := AggregateTuple()).set(at[i.load()]),
            (c_dex := abi.make(abi.StaticBytes[Literal[2]])).set(c_tuple.dex),
            (c_app_id := abi.Uint64()).set(c_tuple.app),
            (c_extra := abi.DynamicBytes()).set(c_tuple.extra),
            # Empty then populate an array
            sv.store(Bytes("")),
            META.populate_data(
                c_dex.get(),
                c_app_id.get(),
                App.globalGet(asset_1_id_key),
                App.globalGet(asset_2_id_key),
                c_extra.get(),
                sv,
            ),
            asset_1_liq.store(asset_1_liq.load() + ExtractUint64(sv.load(), Int(0))),
            asset_2_liq.store(asset_2_liq.load() + ExtractUint64(sv.load(), Int(8))),
        ),
        # If we're on a new round we move the current liquidities onto the old liquidity keys
        If(Global.round() > App.globalGet(last_updated_round_key)).Then(
            App.globalPut(
                last_liquidity_a1_key,
                App.globalGet(Itob(App.globalGet(asset_1_id_key))),
            ),
            App.globalPut(
                last_liquidity_a2_key,
                App.globalGet(Itob(App.globalGet(asset_2_id_key))),
            ),
            App.globalPut(last_updated_round_key, Global.round()),
        ),
        # We cap the liquidity changes to plus/minus `max_interest_change`
        cap_liquidity_change(asset_1_liq, last_liquidity_a1_key),
        cap_liquidity_change(asset_2_liq, last_liquidity_a2_key),
        # And finally we store the new liquidities in the appropriate keys
        App.globalPut(Itob(App.globalGet(asset_1_id_key)), asset_1_liq.load()),
        App.globalPut(Itob(App.globalGet(asset_2_id_key)), asset_2_liq.load()),
    )

    return actions


@Subroutine(TealType.none)
def cap_liquidity_change(asset_liq: ScratchVar, old_liq_key):
    max_liq = ScratchVar()
    min_liq = ScratchVar()
    actions = Seq(
        max_liq.store(
            WideRatio(
                [
                    App.globalGet(old_liq_key),
                    (BPS_SCALE + App.globalGet(max_liquidity_change_key)),
                ],
                [BPS_SCALE],
            )
        ),
        min_liq.store(
            WideRatio(
                [
                    App.globalGet(old_liq_key),
                    (BPS_SCALE - App.globalGet(max_liquidity_change_key)),
                ],
                [BPS_SCALE],
            )
        ),
        If(asset_liq.load() > max_liq.load()).Then(asset_liq.store(max_liq.load())),
        If(asset_liq.load() < min_liq.load()).Then(asset_liq.store(min_liq.load())),
    )
    return actions


@router.method(no_op=CallConfig.CALL)
def initialize_upgrade(approval_hash: abi.DynamicBytes, clear_hash: abi.DynamicBytes):
    # update_timestamp = Global.latest_timestamp() + Int(
    #     1209600
    # )  # We can update 2 weeks from now, 1209600 seconds.

    update_timestamp = Global.latest_timestamp() - Int(1000)  # We can update instantly.
    return Seq(
        Assert(Txn.sender() == Global.creator_address()),
        App.globalPut(update_programhash_key, approval_hash.get()),
        App.globalPut(update_clearhash_key, clear_hash.get()),
        App.globalPut(update_timestamp_key, update_timestamp),
    )


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
    with open(f"binaries/decentragator_approval_v{VERSION}.teal", "w") as f:
        f.write(results.approval_teal)

    with open(f"binaries/decentragator_clear_state_v{VERSION}.teal", "w") as f:
        f.write(results.clear_teal)

    with open(f"binaries/decentragator_v{VERSION}.json", "w") as f:
        f.write(json.dumps(results.abi_contract.dictify(), indent=4))

    with open(f"binaries/decentragator_v{VERSION}_sourcemap.txt", "w") as f:
        f.write(results.approval_sourcemap.annotated_teal)
