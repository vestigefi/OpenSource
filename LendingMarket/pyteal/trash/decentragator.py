import json
from pyteal import *
from utils import (
    set_payment_fields,
)
from dexes import META

# Global state keys
from global_keys import *

VERSION = "1.0"
BPS_SCALE = Int(10000)
UINT64_MAX = Int(2 ^ 64 - 1)
ASSET_LIQ_ID = Int(0)
ASSET_TO_ID = Int(31566704)
VEST_ID = Int(700965019)


# TODO: Admin account.
# TODO: v3: Pact and algofi stableswaps
handle_update = Seq(
    Assert(
        Txn.sender() == Global.creator_address(),
        Sha512_256(Txn.approval_program()) == App.globalGet(update_programhash_key),
        App.globalGet(update_timestamp_key) > Int(0),
        Global.latest_timestamp() > App.globalGet(update_timestamp_key),
        Txn.clear_state_program() == Bytes("base64", "CIEAQw=="),
    ),
    App.globalDel(update_timestamp_key),
    App.globalDel(update_programhash_key),
    Approve(),
)

router = Router(
    name="decentragator",
    descr=(
        "A not so simple smartcontract which lets you aggregate up to five"
        " dex-swaps. This contract handles algo nicely by mapping an 'ASA' with"
        " ID 0 to algo."
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
    ),
)

parsed_dexobj = ScratchVar(
    TealType.bytes, 1
)  # (uint,uint,uint,byte[2])[] {fromliq, toliq, fee, dex} 8+8+8+2 = 26
get_from_liq = lambda i: ExtractUint64(parsed_dexobj.load(), i * Int(26))
get_to_liq = lambda i: ExtractUint64(parsed_dexobj.load(), i * Int(26) + Int(8))
get_fee = lambda i: ExtractUint64(parsed_dexobj.load(), i * Int(26) + Int(16))
get_dex = lambda i: Extract(parsed_dexobj.load(), i * Int(26) + Int(24), 2)

t3addr = ScratchVar(TealType.bytes, 2)


@router.method(no_op=CallConfig.CALL)
def decentragate_sef(
    from_asset: abi.Uint64,
    to_asset: abi.Uint64,
    dexes: abi.DynamicBytes,
    T3_addr: abi.Address,
):
    i = ScratchVar()
    dexobj = ScratchVar()

    amount = ScratchVar()
    best_subarray = ScratchVar()
    best_output = ScratchVar()
    ptxn = Gtxn[Txn.group_index() - Int(1)]

    actions = Seq(
        amount.store(
            If(from_asset.get() == Int(0))
            .Then(ptxn.amount())
            .Else(
                Assert(ptxn.xfer_asset() == from_asset.get()),
                ptxn.asset_amount(),
            )
        ),
        t3addr.store(T3_addr.get()),
        dexobj.store(dexes.get()),  # (uint64,byte[2])[N] (id,dex)
        # Populate dex data scratchslots
        For(
            i.store(Int(0)),
            i.load() <= Len(dexes) / Int(10),
            i.store(i.load() + Int(1)),
        ).Do(
            META.populate_data(
                Extract(dexobj.load(), Int(10) * i.load() + Int(8), 2),
                Extract(dexobj.load(), Int(10) * i.load(), 8),
                from_asset.get(),
                to_asset.get(),
            )  # id, dex, fromasset
        ),
        If(Len(dexes) / Int(10) == Int(4))
        .Then(
            get_sef(Bytes("base16", "0x00")),  # 0
            get_sef(Bytes("base16", "0x01")),  # 1
            get_sef(Bytes("base16", "0x02")),  # 2
            get_sef(Bytes("base16", "0x03")),  # 3
            get_sef(Bytes("base16", "0x0001012")),  # 012
            get_sef(Bytes("base16", "0x000103")),  # 013
            get_sef(Bytes("base16", "0x000203")),  # 023
            get_sef(Bytes("base16", "0x010203")),  # 123
            get_sef(Bytes("base16", "0x00010203")),  # 0123
        )
        .ElseIf(Len(dexes) / Int(10) == Int(3))
        .Then(
            get_sef(Bytes("base16", "0x00")),  # 0
            get_sef(Bytes("base16", "0x01")),  # 1
            get_sef(Bytes("base16", "0x02")),  # 2
            get_sef(Bytes("base16", "0x0001")),  # 01
            get_sef(Bytes("base16", "0x0002")),  # 02
            get_sef(Bytes("base16", "0x0102")),  # 12
            get_sef(Bytes("base16", "0x0001012")),  # 012
        )
        .ElseIf(Len(dexes) / Int(10) == Int(2))
        .Then(
            get_sef(Bytes("base16", "0x00")),  # 0
            get_sef(Bytes("base16", "0x01")),  # 1
            get_sef(Bytes("base16", "0x0001")),  # 01
        )
        .ElseIf(Len(dexes) / Int(10) == Int(1))
        .Then(
            get_sef(Bytes("base16", "0x00")),  # 0
        )
        .Else(Reject()),
        execute_sef(best_subarray.load(), amount.load()),
    )

    return actions


# elif mode == "sfe":
#     if provider in providers_fee_out:
#         # "swap for exact" for PT
#         constant = reserve_1 * reserve_2
#         if fee == 1:
#             return 0
#         amount_out = amount_in / (1 - fee)
#         divider = reserve_2 - amount_out

#         res = ((constant / divider) - reserve_1) if divider > 0 else 0
#     elif provider in providers_fee_in:
#         # "swap for exact" for TM, H2, AF
#         divider = reserve_2 - amount_in - fee * reserve_2
#         res = (reserve_1 * amount_in / divider) if divider > 0 else 0


@Subroutine(TealType.none)
def get_best_output(dexes):
    i = ScratchVar()
    start = i.store(Int(0))
    cond = i.load() < Len(dexes)
    iter = i.store(i.load() + Int(1))
    actions = Seq(
        liquidity_tally.store(Int(0)),
        For(start, cond, iter).Do(
            liquidity_tally.store(
                liquidity_tally.load()
                + ScratchLoad(index_expression=Btoi(Extract(dexes, i.load(), Int(1))))
            )
        ),
    )

    return actions


@router.method(no_op=CallConfig.CALL)
def initialize_upgrade(hash: abi.DynamicBytes):
    # update_timestamp = Global.latest_timestamp() + Int(
    #     1209600
    # )  # We can update 2 weeks from now, 1209600 seconds.

    update_timestamp = Global.latest_timestamp() - Int(1000)  # We can update instantly.
    return Seq(
        App.globalPut(update_programhash_key, hash.get()),
        App.globalPut(update_timestamp_key, update_timestamp),
    )


approval_program, clear_state_program, contract = router.compile_program(
    version=8, optimize=OptimizeOptions(scratch_slots=True)
)

if __name__ == "__main__":
    with open(f"decentragator_approval_v{VERSION}.teal", "w") as f:
        f.write(approval_program)

    with open(f"decentragator_clear_state_v{VERSION}.teal", "w") as f:
        f.write(clear_state_program)

    with open(f"decentragator_v{VERSION}.json", "w") as f:
        f.write(json.dumps(contract.dictify(), indent=4))
