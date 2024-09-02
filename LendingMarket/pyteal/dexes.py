from pyteal import *
from utils import set_payment_fields
from typing import Literal

BPS_SCALE = Int(10000)

# AggregateTuple = abi.Tuple3[abi.StaticBytes[Literal[2]], abi.Uint64, abi.DynamicBytes]


class AggregateTuple(abi.NamedTuple):
    dex: abi.Field[abi.StaticBytes[Literal[2]]]
    app: abi.Field[abi.Uint64]
    extra: abi.Field[abi.DynamicBytes]


@Subroutine(TealType.uint64)
def extract_sv_uint(sv: ScratchVar, index, element):
    return Return(
        Btoi(Substring(sv.load(), index * Int(24) + element * Int(8), Int(8)))
    )


class META:
    @Subroutine(TealType.none)
    def populate_data(dex, app_id, from_asset, to_asset, extra, sv: ScratchVar):
        actions = Cond(
            [
                dex == Bytes("H2"),
                H2.populate_data(app_id, from_asset, to_asset, sv),
            ],
            [
                dex == Bytes("PT"),
                PT.populate_data(app_id, from_asset, to_asset, sv),
            ],
            [
                dex == Bytes("T3"),
                T3.populate_data(app_id, from_asset, to_asset, extra, sv),
            ],
        )
        return actions

    @Subroutine(TealType.none)
    def do_sef_swap(dex, app_id, amt, from_asset, to_asset, extra):
        actions = Cond(
            [
                dex == Bytes("H2"),
                H2.do_sef_swap(
                    app_id,
                    amt,
                    from_asset,
                    to_asset,
                ),
            ],
            [
                dex == Bytes("PT"),
                PT.do_sef_swap(
                    app_id,
                    amt,
                    from_asset,
                    to_asset,
                ),
            ],
            [  # If we pass an address into dex it's a T3 swap.
                dex == Bytes("T3"),
                T3.do_sef_swap(app_id, amt, from_asset, to_asset, extra),
            ],
        )
        return actions


# Tinyman v2 utils
class T3:
    def populate_data(app_id, from_asset, to_asset, extra, sv: ScratchVar):
        reserves_A = App.localGetEx(extra, app_id, Bytes("asset_1_reserves"))
        reserves_B = App.localGetEx(extra, app_id, Bytes("asset_2_reserves"))
        asset_A = App.localGetEx(extra, app_id, Bytes("asset_1_id"))
        fee = App.localGetEx(extra, app_id, Bytes("total_fee_share"))

        actions = Seq(
            reserves_A,
            reserves_B,
            asset_A,
            fee,
            Assert(
                reserves_A.hasValue(),
                reserves_B.hasValue(),
                asset_A.hasValue(),
                fee.hasValue(),
            ),
            If(from_asset == asset_A.value())
            .Then(
                sv.store(
                    Concat(
                        sv.load(),
                        Itob(reserves_A.value()),
                        Itob(reserves_B.value()),
                        Itob(fee.value()),
                    )
                )
            )
            .Else(
                sv.store(
                    Concat(
                        sv.load(),
                        Itob(reserves_B.value()),
                        Itob(reserves_A.value()),
                        Itob(fee.value()),
                    )
                ),
            ),
        )

        return actions

    @Subroutine(TealType.none)
    def do_sef_swap(app_id, amount, from_asset, to_asset, address):
        return Seq(
            InnerTxnBuilder.Begin(),
            set_payment_fields(from_asset, address, amount),
            InnerTxnBuilder.Next(),
            InnerTxnBuilder.SetFields(
                {
                    TxnField.application_args: [
                        Bytes("swap"),
                        Bytes("fixed-input"),
                        Itob(Int(0)),
                    ],
                    TxnField.fee: Int(0),
                    TxnField.application_id: app_id,
                    TxnField.assets: [from_asset, to_asset],
                    TxnField.accounts: [address],
                    TxnField.type_enum: TxnType.ApplicationCall,
                }
            ),
            InnerTxnBuilder.Submit(),
        )


# Pactfi utils
class PT:
    def populate_data(app_id, from_asset, to_asset, sv: ScratchVar):
        state_CONFIG = App.globalGetEx(app_id, Bytes("CONFIG"))
        state_A = App.globalGetEx(app_id, Bytes("A"))
        state_B = App.globalGetEx(app_id, Bytes("B"))
        asset_a = ExtractUint64(state_CONFIG.value(), Int(0))
        fee_bps = ExtractUint64(state_CONFIG.value(), Int(16))

        actions = Seq(
            state_CONFIG,
            state_A,
            state_B,
            If(from_asset == asset_a)
            .Then(
                sv.store(
                    Concat(
                        sv.load(),
                        Itob(state_A.value()),
                        Itob(state_B.value()),
                        Itob(fee_bps),
                    )
                ),
            )
            .Else(
                sv.store(
                    Concat(
                        sv.load(),
                        Itob(state_B.value()),
                        Itob(state_A.value()),
                        Itob(fee_bps),
                    ),
                ),
            ),
        )

        return actions

    @Subroutine(TealType.none)
    def do_sef_swap(app_id, amount, from_asset, to_asset):
        asset_1 = Seq(If(from_asset < to_asset, from_asset, to_asset))
        asset_2 = Seq(If(from_asset > to_asset, from_asset, to_asset))
        return Seq(
            # Log(Itob(PT.get_sef_qoute(app_id, amount, from_asset, to_asset))),
            (swap_addr := AppParam.address(app_id)),
            InnerTxnBuilder.Begin(),
            set_payment_fields(from_asset, swap_addr.value(), amount),
            InnerTxnBuilder.Next(),
            InnerTxnBuilder.SetFields(
                {
                    TxnField.application_args: [Bytes("SWAP"), Itob(Int(0))],
                    TxnField.fee: Int(0),
                    TxnField.application_id: app_id,
                    TxnField.assets: [asset_1, asset_2],
                    TxnField.type_enum: TxnType.ApplicationCall,
                }
            ),
            InnerTxnBuilder.Submit(),
        )


# Humblefi (H2) utils
class H2:
    def populate_data(app_id, from_asset, to_asset, sv: ScratchVar):
        """ "Returns the 'liquidity' of the supplied asset in the apps pool."""
        state = App.globalGetEx(app_id, Bytes("base64", "AA=="))

        from_asset_liq = (
            If(from_asset == Int(0))
            .Then((Extract(state.value(), Int(89), Int(8))))
            .Else(
                If(from_asset == ExtractUint64(state.value(), Int(32)))
                .Then(Extract(state.value(), Int(97), Int(8)))
                .Else(Extract(state.value(), Int(105), Int(8)))
            )
        )
        to_asset_liq = (
            If(to_asset == Int(0))
            .Then((Extract(state.value(), Int(89), Int(8))))
            .Else(
                If(to_asset == ExtractUint64(state.value(), Int(32)))
                .Then(Extract(state.value(), Int(97), Int(8)))
                .Else(Extract(state.value(), Int(105), Int(8)))
            )
        )
        actions = Seq(
            state,
            sv.store(
                Concat(
                    sv.load(),
                    from_asset_liq,
                    to_asset_liq,
                    Itob(Int(30)),
                )
            ),
        )

        return actions

    @Subroutine(TealType.none)
    def do_sef_swap(app_id, amount, from_asset, to_asset):
        state = App.globalGetEx(app_id, Bytes("base64", "AA=="))
        swap_addr = AppParam.address(app_id)
        asset_A = Seq(ExtractUint64(state.value(), Int(32)))
        # from_asset == asset_A:
        method_1 = Seq(
            (amt := abi.Uint64()).set(amount),
            (min_amt := abi.Uint64()).set(0),
            InnerTxnBuilder.MethodCall(
                app_id=app_id,
                method_signature=("Trader_swapAForB(uint64,uint64)(uint64,uint64)"),
                args=[amt, min_amt],
                extra_fields={
                    TxnField.assets: [from_asset, to_asset],
                    TxnField.fee: Int(0),
                },
            ),
        )
        # from_asset == asset_B:
        method_2 = Seq(
            (amt := abi.Uint64()).set(amount),
            (min_amt := abi.Uint64()).set(0),
            InnerTxnBuilder.MethodCall(
                app_id=app_id,
                method_signature=("Trader_swapBForA(uint64,uint64)(uint64,uint64)"),
                args=[amt, min_amt],
                extra_fields={
                    TxnField.assets: [from_asset, to_asset],
                    TxnField.fee: Int(0),
                },
            ),
        )

        method_call = If(
            Or(from_asset == Int(0), to_asset == Int(0)),
            If(from_asset == Int(0), method_1, method_2),
            If(asset_A == from_asset, method_1, method_2),
        )

        return Seq(
            state,
            swap_addr,
            InnerTxnBuilder.Begin(),
            set_payment_fields(from_asset, swap_addr.value(), amount),
            InnerTxnBuilder.Next(),
            method_call,
            InnerTxnBuilder.Submit(),
        )
