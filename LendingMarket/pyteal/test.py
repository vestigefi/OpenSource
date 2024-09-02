from dojex import approval_program, clear_state_program, contract


from algosdk.v2client.algod import AlgodClient
from algosdk.v2client.indexer import IndexerClient
from algosdk.atomic_transaction_composer import (
    AtomicTransactionComposer,
    AccountTransactionSigner,
    TransactionWithSigner,
)
from algosdk.transaction import *
import algokit_utils
from base64 import b64decode, b64encode
from algosdk.encoding import checksum
from algosdk.logic import get_application_address

import fake_oracle

import os


algod_address = "http://localhost:4001"
indexer_address = "http://localhost:8980"
algod_token = 64 * "a"

algo_client = AlgodClient(algod_token, algod_address, headers={"User-Agent": "algosdk"})
algo_indexer = IndexerClient(
    algod_token, indexer_address, headers={"User-Agent": "algosdk"}
)


os.system("algokit localnet reset")
acc1 = algokit_utils.get_account(algo_client, "acc1", 100000)
acc2 = algokit_utils.get_account(algo_client, "acc2", 100000)
acc3 = algokit_utils.get_account(algo_client, "acc3", 100000)



def main():
    print(acc2.address)
    print(acc3.address)
    oracle_id = deploy_oracle(acc1)
    usdc = create_asset("USDC", "USDC", acc1)
    update_oracle(acc1, oracle_id, 0, int(17500000 * 1e6), usdc, int(1826110 * 1e6))
    current_price = 1750000 / 182611
    appid = deploy_app(acc1)
    lpt = setup_assets(
        appid,
        0,
        usdc,
        "dojex ALGO>USDC LP",
        "dxALGO",
        "https://dojex.vestige.fi/",
        acc1,
    )
    optin_and_fund_accs([acc2, acc3], usdc, lpt, acc1)
    update_model_params(
        appid=appid,
        liquidation_incentive=150,  # 1.5% incentive
        liquidation_safety_factor=50,  # 0.5% liquidation margin
        max_bur_take=9250,  # max leverage is 16x
        rewards_to_staking=0,  # 0% reward to staking
        rewards_to_lp=7000,  # 80% rewards to LP
        rewards_to_insurance=1000,  # 20% to insurance
        slope_midpoint=6500,  # optimal utilization is 65%
        slope_a=3000,  # We start out at 30% interest
        slope_b=2500,  # down to 2500 at optimal
        slope_c=50000,  # 500% at max utilization
        swap_app_id=oracle_id,  # swap app id
        deployer_acc=acc1,
    )
    add_liquidity(acc2, appid, 0, 100, lpt)
    add_liquidity(acc3, appid, 0, 50, lpt)
    remove_liquidity(acc2, appid, 50, lpt)
    donate_rewards(appid, 0, 2000, 5000, 5000, acc1)
    remove_liquidity(acc2, appid, 50, lpt)
    factors = [0.5, 0.9215, 0.923, 1.1]
    for factor in factors:
        order_id = factors.index(factor)
        try:
            borrow_supply(
                appid, usdc, order_id, 20 * factor, 20 / current_price, acc2, oracle_id
            )
            print(f"factor {factor} succeeded")
        except Exception as err:
            print(f"factor {factor} failed")
            print(err)

    print(algo_client.account_info(acc2.address))


def borrow_supply(appid, asset, order_id, requested_supply, payback, acc, oracleid):
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000

    ATC = AtomicTransactionComposer()
    ATC.add_method_call(
        appid,
        get_method("borrow_supply"),
        acc.address,
        params,
        AccountTransactionSigner(acc.private_key),
        [order_id, int(requested_supply * 1e6)],
        boxes=[
            [0, int(0).to_bytes(8, "big")],
            [0, asset.to_bytes(8, "big")],
            [0, encoding.decode_address(acc.address) + order_id.to_bytes(8, "big")],
            [0, b"bu"],
        ],
        foreign_apps=[oracleid],
    )

    if asset == 0:
        paytx = TransactionWithSigner(
            PaymentTxn(
                acc.address,
                params,
                get_application_address(appid),
                int(payback * 10**6),
            ),
            AccountTransactionSigner(acc.private_key),
        )
    else:
        paytx = TransactionWithSigner(
            AssetTransferTxn(
                acc.address,
                params,
                get_application_address(appid),
                int(payback * 10**6),
                asset,
            ),
            AccountTransactionSigner(acc.private_key),
        )
    ATC.add_transaction(paytx)
    params.fee = 2000
    ATC.add_method_call(
        appid,
        get_method("check_liquidation"),
        acc.address,
        params,
        AccountTransactionSigner(acc.private_key),
        [order_id],
    )
    ATC.submit(algo_client)
    return


def donate_rewards(appid, asset, amount, tovest, tolp, acc):
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000
    if asset == 0:
        paytx = TransactionWithSigner(
            PaymentTxn(
                acc.address,
                params,
                get_application_address(appid),
                int(amount * 10**6),
            ),
            AccountTransactionSigner(acc.private_key),
        )
    else:
        paytx = TransactionWithSigner(
            AssetTransferTxn(
                acc.address,
                params,
                get_application_address(appid),
                int(amount * 10**6),
                asset,
            ),
            AccountTransactionSigner(acc.private_key),
        )
    ATC = AtomicTransactionComposer()
    params.fee = 2000
    ATC.add_method_call(
        appid,
        get_method("donate_rewards"),
        acc.address,
        params,
        AccountTransactionSigner(acc.private_key),
        [paytx, tovest, tolp],
    )
    ATC.submit(algo_client)


def add_liquidity(acct, appid, asset, amount, lpt):
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000
    if asset == 0:
        paytx = TransactionWithSigner(
            PaymentTxn(
                acct.address, params, get_application_address(appid), amount * 10**6
            ),
            AccountTransactionSigner(acct.private_key),
        )
    else:
        paytx = TransactionWithSigner(
            AssetTransferTxn(
                acct.address,
                params,
                get_application_address(appid),
                amount * 10**6,
                asset,
            ),
            AccountTransactionSigner(acct.private_key),
        )
    ATC = AtomicTransactionComposer()
    params.fee = 2000
    ATC.add_method_call(
        appid,
        get_method("add_liquidity"),
        acct.address,
        params,
        AccountTransactionSigner(acct.private_key),
        [paytx],
        foreign_assets=[lpt],
    )
    ATC.submit(algo_client)


def remove_liquidity(acct, appid, amount, lpt):
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000
    paytx = TransactionWithSigner(
        AssetTransferTxn(
            acct.address,
            params,
            get_application_address(appid),
            int(amount * 10**6),
            lpt,
        ),
        AccountTransactionSigner(acct.private_key),
    )
    ATC = AtomicTransactionComposer()
    params.fee = 2000
    ATC.add_method_call(
        appid,
        get_method("remove_liquidity"),
        acct.address,
        params,
        AccountTransactionSigner(acct.private_key),
        [paytx],
        foreign_assets=[lpt],
    )
    ATC.submit(algo_client)


def optin_and_fund_accs(accs, usdc, lpt, acc):
    for acct in accs:
        optin_asset(acct, usdc)
        optin_asset(acct, lpt)

        send_asset(acc, acct, usdc, 1000000000)


def send_asset(fromacc, toacc, asset, amount):
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000
    ATC = AtomicTransactionComposer()
    ATC.add_transaction(
        TransactionWithSigner(
            AssetTransferTxn(fromacc.address, params, toacc.address, amount, asset),
            AccountTransactionSigner(fromacc.private_key),
        )
    )
    ATC.submit(algo_client)


def optin_asset(acct, asset):
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000
    ATC = AtomicTransactionComposer()
    ATC.add_transaction(
        TransactionWithSigner(
            AssetTransferTxn(acct.address, params, acct.address, 0, asset),
            AccountTransactionSigner(acct.private_key),
        )
    )
    ATC.submit(algo_client)


def create_asset(unit, name, acc):
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000
    ATC = AtomicTransactionComposer()
    ATC.add_transaction(
        TransactionWithSigner(
            AssetCreateTxn(
                acc.address,
                params,
                2**64 - 1,
                6,
                False,
                unit_name=unit,
                asset_name=name,
            ),
            AccountTransactionSigner(acc.private_key),
        )
    )
    txid = ATC.submit(algo_client)[0]
    res = wait_for_confirmation(algo_client, txid)
    return res["asset-index"]


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
    ATC.submit(algo_client)


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
    approval_prog, clear_prog = getContracts(
        algo_client, approval_program, clear_state_program
    )
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


def deploy_oracle(acc):
    # get programs
    approval_prog, clear_prog = getContracts(
        algo_client, fake_oracle.approval_program, fake_oracle.clear_state_program
    )
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


def update_oracle(acc, appid, asset1, amount1, asset2, amount2):
    ATC = AtomicTransactionComposer()
    params = algo_client.suggested_params()
    for m in fake_oracle.contract.methods:
        if m.name == "set_prices":
            method = m
            break
    ATC.add_method_call(
        appid,
        method,
        acc.address,
        params,
        AccountTransactionSigner(acc.private_key),
        [asset1, amount1, asset2, amount2],
    )
    txid = ATC.submit(algo_client)[0]
    res = wait_for_confirmation(algo_client, txid)
    return


def update_app(appid, acc):
    params = algo_client.suggested_params()
    params.flat_fee = True
    params.fee = 1000
    app, clear = getContracts(algo_client, approval_program, clear_state_program)
    ATC = AtomicTransactionComposer()
    ATC.add_method_call(
        appid,
        get_method("initialize_upgrade"),
        acc.address,
        params,
        AccountTransactionSigner(acc.private_key),
        [checksum(app), checksum(clear)],
    )
    ATC.add_transaction(ApplicationUpdateTxn(acc.address, params, appid, app, clear))
    ATC.submit(algo_client)


def getContracts(client: AlgodClient, approval_prog, clear_state_prog):
    """Get the compiled TEAL contracts for the auction.
    Args:
        client: An algod client that has the ability to compile TEAL programs.
    Returns:
        A tuple of 2 byte strings. The first is the approval program, and the
        second is the clear state program.
    """

    APPROVAL_PROGRAM = fullyCompileContract(client, approval_prog)
    CLEAR_STATE_PROGRAM = fullyCompileContract(client, clear_state_prog)

    return APPROVAL_PROGRAM, CLEAR_STATE_PROGRAM


def fullyCompileContract(client: AlgodClient, teal: str) -> bytes:
    response = client.compile(teal, True)
    return b64decode(response["result"])


def get_method(name: str):
    for m in contract.methods:
        if m.name == name:
            return m
    raise Exception(f"No method with the name {name}")


if __name__ == "__main__":
    main()
