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
from decentragator import approval_program, clear_state_program, contract


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


def update_app(appid):
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000
    # Get TEAL
    approval_teal = approval_program

    clear_teal = clear_state_program

    # Compile TEAL
    approval_prog = base64.b64decode(algo_client.compile(approval_teal)["result"])
    clear_prog = base64.b64decode(algo_client.compile(clear_teal)["result"])

    tx = ApplicationUpdateTxn(acc.address, params, appid, approval_prog, clear_prog)
    stx = tx.sign(acc.private_key)
    algo_client.send_transaction(stx)


def initialize_upgrade(appid, app_checksum, clear_checksum):
    params = algo_client.suggested_params()
    ts = AccountTransactionSigner(acc.private_key)
    atc = AtomicTransactionComposer()
    atc.add_method_call(
        app_id=appid,
        method=get_method("initialize_upgrade"),
        sender=acc.address,
        sp=params,
        signer=ts,
        on_complete=OnComplete.NoOpOC,
        method_args=[app_checksum, clear_checksum],
    )
    atc.gather_signatures()
    return atc


def update_oracle(appid, assets, apps, accs) -> AtomicTransactionComposer:
    params = algo_client.suggested_params()
    ts = AccountTransactionSigner(acc.private_key)
    atc = AtomicTransactionComposer()
    atc.add_method_call(
        app_id=appid,
        method=get_method("update_oracle"),
        sender=acc.address,
        sp=params,
        signer=ts,
        on_complete=OnComplete.NoOpOC,
        boxes=[[appid, "aa"]],
        foreign_assets=assets,
        foreign_apps=apps,
        accounts=accs,
    )
    atc.gather_signatures()
    return atc


def initialize(appid, args, pay) -> AtomicTransactionComposer:
    params = algo_client.suggested_params()
    params.flat_fee = True
    ts = AccountTransactionSigner(acc.private_key)
    atc = AtomicTransactionComposer()

    if pay:
        params.fee = 1000
        atc.add_transaction(
            TransactionWithSigner(
                txn=PaymentTxn(
                    acc.address, params, get_application_address(appid), int(1e6)
                ),
                signer=ts,
            )
        )

    params.fee = 3000
    atc.add_method_call(
        app_id=appid,
        method=get_method("initialize"),
        sender=acc.address,
        sp=params,
        signer=ts,
        on_complete=OnComplete.NoOpOC,
        method_args=args,
        boxes=[[appid, "aa"]],
    )
    atc.gather_signatures()
    return atc


def deploy_app():
    deployer_pk = acc.address

    # Get TEAL
    approval_teal = approval_program

    clear_teal = clear_state_program

    # Compile TEAL
    approval_prog = base64.b64decode(algo_client.compile(approval_teal)["result"])
    clear_prog = base64.b64decode(algo_client.compile(clear_teal)["result"])
    # Deploy
    sp = algo_client.suggested_params()
    sp.flat_fee = True
    sp.fee = 1_000
    deploy_txn = ApplicationCreateTxn(
        deployer_pk,
        sp,
        OnComplete.NoOpOC,
        approval_prog,
        clear_prog,
        StateSchema(32, 16),
        StateSchema(1, 0),
        extra_pages=3,
    )
    deploy_stxn = deploy_txn.sign(acc.private_key)

    txid = algo_client.send_transaction(deploy_stxn)
    res = wait_for_confirmation(algo_client, txid)
    app_id = res["application-index"]

    return {"success": True, "AppID": app_id}


def main():
    appid = 1177699781
    inp = input("what run? | 1: new | 2: initialize | 3: update_oracle | 4: upgrade | ")
    if inp == "1":
        res = deploy_app()
        print(res)
    if inp == "2":
        tx = initialize(
            appid,
            [
                0,
                31566704,
                int(12099193e6),
                int(1146940e6),
                1000,
                1,
                [
                    (
                        bytes("T3", "ascii"),
                        1002541853,
                        decode_address(
                            "2PIFZW53RHCSFSYMCFUBW4XOCXOMB7XOYQSQ6KGT3KVGJTL4HM6COZRNMM"
                        ),
                    ),
                    (bytes("PT", "ascii"), 1073557308, ""),
                    (bytes("H2", "ascii"), 777628254, ""),
                ],
            ],
            True,
        )
        print(tx.submit(algo_client))
    if inp == "3":
        tx = update_oracle(
            appid,
            [0, 31566704],
            [1002541853, 1073557308, 777628254],
            ["2PIFZW53RHCSFSYMCFUBW4XOCXOMB7XOYQSQ6KGT3KVGJTL4HM6COZRNMM"],
        )
        print(tx.submit(algo_client))

    if inp == "4":
        app, clear = getContracts(algo_client)
        app_checksum = checksum(app)
        clear_checksum = checksum(clear)

        tx1 = initialize_upgrade(appid, app_checksum, clear_checksum)
        tx1.submit(algo_client)
        tx2 = update_app(appid)


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
