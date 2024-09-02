from pyteal import *

# Global state keys
from global_keys import *


class AggregateTuple(abi.NamedTuple):
    dex: abi.Field[abi.String]
    app: abi.Field[abi.Uint64]


@Subroutine(TealType.none, "paymentTxn")
def set_payment_fields(asset_id, receiver, amount):
    """Sets fields for an axfer or a payment transaction depending on asset_id, == 0 indicates network token (ALGO)"""
    return Seq(
        If(asset_id == Int(0))
        .Then(
            InnerTxnBuilder.SetFields(
                {
                    TxnField.type_enum: TxnType.Payment,
                    TxnField.receiver: receiver,
                    TxnField.amount: amount,
                    TxnField.fee: Int(0),
                }
            )
        )
        .Else(
            InnerTxnBuilder.SetFields(
                {
                    TxnField.type_enum: TxnType.AssetTransfer,
                    TxnField.xfer_asset: asset_id,
                    TxnField.asset_receiver: receiver,
                    TxnField.asset_amount: amount,
                    TxnField.fee: Int(0),
                }
            ),
        )
    )


@Subroutine(TealType.none)
def optin(asset1, asset2):
    return Seq(
        InnerTxnBuilder.Begin(),
        If(asset1 != Int(0)).Then(
            set_payment_fields(asset1, Global.current_application_address(), Int(0)),
            InnerTxnBuilder.Next(),
        ),
        If(asset2 != Int(0)).Then(
            set_payment_fields(asset1, Global.current_application_address(), Int(0)),
        ),
        InnerTxnBuilder.Submit(),
    )


@Subroutine(TealType.uint64)
def get_asset_holdings(asset):
    return Seq(
        If(asset == Int(0))
        .Then(Return(Balance(Global.current_application_address())))
        .Else(
            holdings := AssetHolding.balance(
                Global.current_application_address(),
                asset,
            ),
            Return(holdings.value()),
        ),
    )
