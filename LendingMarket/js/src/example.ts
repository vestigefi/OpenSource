import algosdk, {AtomicTransactionComposer, SuggestedParams, TransactionSigner, TransactionWithSigner} from "algosdk"
import { abi, contract_id } from "./abi"
export const blankTxSigner = algosdk.makeBasicAccountTransactionSigner(algosdk.generateAccount())


export const get_add_liquidity_txs = (
    sender: string,
    params: SuggestedParams,
    decimals: number,
    amount: number,
    asset: number,
    signer: TransactionSigner = blankTxSigner,
): TransactionWithSigner[] => {
    var paytx = get_payment_tx(sender, algosdk.getApplicationAddress(contract_id), asset, Math.round(amount * Math.pow(10, decimals)), params, signer)
    const atc = new AtomicTransactionComposer()
    atc.addMethodCall({
        appID: contract_id,
        method: abi.getMethodByName("add_liquidity"),
        methodArgs: [paytx],
        sender: sender,
        signer: signer,
        suggestedParams: params
    })
    const stxns = atc.buildGroup() // If you actually pass a TransactionSigner in here you can do .submit() I think
    return stxns
}


// Helper function to create payment transactions, asset=0 === algo
const get_payment_tx = (
    sender: string,
    receiver: string,
    asset: number,
    amount: number,
    params: SuggestedParams,
    signer: TransactionSigner,
): TransactionWithSigner  => {
    if (asset != 0) {
        var paytx = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
            from: sender,
            suggestedParams: params,
            to: receiver,
            amount: amount,
            assetIndex: asset
        })
    } else {
        var paytx = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: sender,
            suggestedParams: params,
            to: receiver,
            amount: amount,
        })
    }
    return {txn: paytx, signer: signer}
}   

