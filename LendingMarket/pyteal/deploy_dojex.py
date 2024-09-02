from algosdk.v2client.algod import AlgodClient
from algosdk.v2client.indexer import IndexerClient
from algosdk.atomic_transaction_composer import (
    AtomicTransactionComposer,
    AccountTransactionSigner,
    TransactionWithSigner,
)
from private import acc
from typing import Tuple
from base64 import b64decode
from algosdk.encoding import (
    base64,
    decode_address,
    checksum,
)
from algosdk.transaction import *
from algosdk.logic import get_application_address
from dojex import approval_program, clear_state_program, contract


algod_address = "https://mainnet-api.algonode.cloud"
indexer_address = "https://mainnet-idx.algonode.cloud"
algod_token = ""

algo_client = AlgodClient(algod_token, algod_address, headers={"User-Agent": "algosdk"})
algo_indexer = IndexerClient(
    algod_token, indexer_address, headers={"User-Agent": "algosdk"}
)


def get_method(name: str):
    for m in contract.methods:
        if m.name == name:
            return m
    raise Exception(f"No method with the name {name}")


def update_model_params(
    appid,
    liquidation_incentive,
    liquidation_safety_factor,
    max_bur_take,
    rewards_to_staking,
    rewards_to_lp,
    rewards_to_insurance,
    slope_midpoint,
    slope_a,
    slope_b,
    slope_c,
    swap_app_id,
    deployer_acc,
):
    acc = deployer_acc
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000
    ATC = AtomicTransactionComposer()
    ATC.add_method_call(
        appid,
        get_method("update_model_params"),
        acc.address,
        params,
        AccountTransactionSigner(acc.private_key),
        [
            liquidation_incentive,
            liquidation_safety_factor,
            max_bur_take,
            rewards_to_staking,
            rewards_to_lp,
            rewards_to_insurance,
            slope_midpoint,
            slope_a,
            slope_b,
            slope_c,
            swap_app_id,
        ],
    )
    return ATC.submit(algo_client)


def setup_assets(appid, supply_asset, collateral_asset, name, unit_name, url, acc):
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000
    ATC = AtomicTransactionComposer()
    ATC.add_transaction(
        TransactionWithSigner(
            PaymentTxn(acc.address, params, get_application_address(appid), 10_000_000),
            AccountTransactionSigner(acc.private_key),
        )
    )
    params.fee = 5000
    ATC.add_method_call(
        appid,
        get_method("setup_assets"),
        acc.address,
        params,
        AccountTransactionSigner(acc.private_key),
        [supply_asset, collateral_asset, name, unit_name, url],
    )
    txid = ATC.submit(algo_client)[1]
    res = wait_for_confirmation(algo_client, txid)
    return res["inner-txns"][-1]["asset-index"]


def deploy_app(acc):
    # get programs
    approval_prog, clear_prog = getContracts(algo_client)
    # Deploy
    sp = algo_client.suggested_params()
    sp.flat_fee = True
    sp.fee = 1_000
    deploy_txn = ApplicationCreateTxn(
        acc.address,
        sp,
        OnComplete.NoOpOC,
        approval_prog,
        clear_prog,
        StateSchema(48, 16),
        StateSchema(4, 4),
        extra_pages=1,
    )
    deploy_stxn = deploy_txn.sign(acc.private_key)

    txid = algo_client.send_transaction(deploy_stxn)
    res = wait_for_confirmation(algo_client, txid)
    app_id = res["application-index"]

    return app_id

def main():
    appid = 1185232704
    lptoken_id = 1185232789
    inp = input("what run? | 1: new | 2: update_model_params | 3: setup assets | 4: upgrade | ")
    if inp == "1":
        res = deploy_app(acc)
        print(res)
    if inp == "2":
        res = update_model_params(
            appid,
            liquidation_incentive=150,  # 1.5% incentive
            liquidation_safety_factor=50,  # 0.5% liquidation margin
            max_bur_take=9250,  # max leverage is 16x
            rewards_to_staking=0,  # 0% reward to staking
            rewards_to_lp=8000,  # 80% rewards to LP
            rewards_to_insurance=2000,  # 20% to insurance
            slope_midpoint=6500,  # optimal utilization is 65%
            slope_a=3000,  # We start out at 30% interest
            slope_b=2500,  # down to 25% at optimal
            slope_c=50000,  # up to 500% at max utilization
            swap_app_id=1177699781,  # swap app id
            deployer_acc=acc,
        )
        print(res)
    if inp == "3":
        res = setup_assets(
            appid,
            0,
            31566704,
            "dojex ALGO>USDC LP",
            "dxALGO",
            "https://dojex.vestige.fi/",
            acc
        )
        print(res)

    #     tx = update_oracle(
    #         appid,
    #         [0, 31566704],
    #         [1002541853, 1073557308, 777628254],
    #         ["2PIFZW53RHCSFSYMCFUBW4XOCXOMB7XOYQSQ6KGT3KVGJTL4HM6COZRNMM"],
    #     )
    #     print(tx.submit(algo_client))

    # if inp == "4":
    #     app, clear = getContracts(algo_client)
    #     app_checksum = checksum(app)
    #     clear_checksum = checksum(clear)

    #     tx1 = initialize_upgrade(appid, app_checksum, clear_checksum)
    #     tx1.submit(algo_client)
    #     tx2 = update_app(appid)


def getContracts(client: AlgodClient) -> Tuple[bytes, bytes]:
    """Get the compiled TEAL contracts for the auction.
    Args:
        client: An algod client that has the ability to compile TEAL programs.
    Returns:
        A tuple of 2 byte strings. The first is the approval program, and the
        second is the clear state program.
    """

    APPROVAL_PROGRAM = fullyCompileContract(client, approval_program)
    CLEAR_STATE_PROGRAM = fullyCompileContract(client, clear_state_program)

    return APPROVAL_PROGRAM, CLEAR_STATE_PROGRAM


def fullyCompileContract(client: AlgodClient, teal: str) -> bytes:
    response = client.compile(teal)
    print(response["result"])
    return b64decode(response["result"])


def sign_txn_grp(txngrp: list[Transaction], sk: str):
    return [x.sign(sk) for x in txngrp]


if __name__ == "__main__":
    main()
