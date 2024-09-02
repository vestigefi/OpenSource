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

import os
import veridex
import fake_oracle


algod_address = "http://localhost:4001"
indexer_address = "http://localhost:8980"
algod_token = 64 * "a"

algo_client = AlgodClient(algod_token, algod_address, headers={"User-Agent": "algosdk"})
algo_indexer = IndexerClient(
    algod_token, indexer_address, headers={"User-Agent": "algosdk"}
)


print(algo_client.application_boxes(1007))
print(
    algo_client.application_box_by_name(
        1007, b64decode("FRujbXUI2mbGmY5iJ/StrdEq3YRpsJ8vLfv/ZY48hq4AAAAAAAAAAQ==")
    )
)
