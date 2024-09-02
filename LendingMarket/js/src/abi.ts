import {ABIContract} from "algosdk"

export const contract_id = 1

const abijson = {
    "name": "unnamed-perpetuals",
    "methods": [
        {
            "name": "add_liquidity",
            "args": [
                {
                    "type": "txn",
                    "name": "payment"
                }
            ],
            "returns": {
                "type": "void"
            },
            "desc": "Add liquidity. The liquidity assethas the app id specified in the global key `supply_asset_key`.\nThe first argument is an abi transaction, which has to be pay if the supply asset is algo and has to be an axfer if the supply asset isn't algo. The foreign assets array requires the contract shares, key `liquidity_token_id_key`, as well as the axfer asset (if any)."
        },
        {
            "name": "remove_liquidity",
            "args": [
                {
                    "type": "axfer",
                    "name": "repayment"
                }
            ],
            "returns": {
                "type": "void"
            },
            "desc": "Unmint liquidity tokens. The only argument is an axfer with the tokens to unmint.\nThe foreign assets array requires the contract shares, key `liquidity_token_id_key`, as well as the supplied asset (if not algo)."
        },
        {
            "name": "take_position",
            "args": [
                {
                    "type": "txn",
                    "name": "collateral"
                },
                {
                    "type": "uint64",
                    "name": "borrow_amt"
                },
                {
                    "type": "uint64",
                    "name": "min_out"
                },
                {
                    "type": "uint64",
                    "name": "order_id"
                }
            ],
            "returns": {
                "type": "void"
            },
            "desc": "Creates a new position. This means depositing initial collateral, borrowing supplied assets\nand selling the borrowed assets for more collateral. This is soft-guarded from MEV/arbitrage  by the oracle.  The data is stored in a box as (uint64,uint64,uint64,byte[16]),  (collateral, borrow_amt, accumulated interest, interest_per_tok)."
        },
        {
            "name": "close_position",
            "args": [
                {
                    "type": "uint64",
                    "name": "order_id"
                },
                {
                    "type": "uint64",
                    "name": "min_amt"
                }
            ],
            "returns": {
                "type": "void"
            },
            "desc": "This method simply closes a position. This is done by doing a SFE swap for exactly what the protocol is owed.\nAny collateral left over after doing this is returned to the user. Interest profits are distributed accordingly."
        },
        {
            "name": "add_to_position",
            "args": [
                {
                    "type": "txn",
                    "name": "collateral"
                },
                {
                    "type": "uint64",
                    "name": "order_id"
                }
            ],
            "returns": {
                "type": "void"
            },
            "desc": "Add more collateral to an order, to reduce leverage and/or prevent liquidation."
        },
        {
            "name": "remove_from_position",
            "args": [
                {
                    "type": "uint64",
                    "name": "amount"
                },
                {
                    "type": "uint64",
                    "name": "order_id"
                }
            ],
            "returns": {
                "type": "void"
            },
            "desc": "Removes the asked amount of collateral. Fails if the order would be liquidateable after."
        },
        {
            "name": "liquidate_position",
            "args": [
                {
                    "type": "address",
                    "name": "address"
                },
                {
                    "type": "uint64",
                    "name": "order_id"
                }
            ],
            "returns": {
                "type": "void"
            },
            "desc": "This method liquidates a position. There are no user-supplied slippage parameters as this\nis decided by the protocol itself. This method simply checks if the position is liquidateable and if it is the protocol sells all collateral tokens with slippage guided by predefined parameters."
        },
        {
            "name": "add_vest_stake",
            "args": [
                {
                    "type": "axfer",
                    "name": "payment"
                }
            ],
            "returns": {
                "type": "void"
            },
            "desc": "Add VEST to users local state."
        },
        {
            "name": "remove_vest_stake",
            "args": [
                {
                    "type": "uint64",
                    "name": "amount_out"
                }
            ],
            "returns": {
                "type": "void"
            },
            "desc": "This function removes `amount_out` of a users staked vest and sends it back.\nIt does not claim rewards, but it does move unclaimed rewards to local state."
        },
        {
            "name": "claim_vest_rewards",
            "args": [],
            "returns": {
                "type": "void"
            },
            "desc": "This function sends the user their unclaimed rewards from VEST staking."
        },
        {
            "name": "initialize_upgrade",
            "args": [
                {
                    "type": "byte[]",
                    "name": "hash"
                }
            ],
            "returns": {
                "type": "void"
            }
        },
        {
            "name": "setup_assets",
            "args": [
                {
                    "type": "asset",
                    "name": "supply_asset"
                },
                {
                    "type": "asset",
                    "name": "collateral_asset"
                },
                {
                    "type": "string",
                    "name": "name"
                },
                {
                    "type": "string",
                    "name": "unit_name"
                },
                {
                    "type": "string",
                    "name": "url"
                }
            ],
            "returns": {
                "type": "void"
            }
        },
        {
            "name": "optin",
            "args": [],
            "returns": {
                "type": "void"
            }
        },
        {
            "name": "update_model_params",
            "args": [
                {
                    "type": "uint64",
                    "name": "max_borrow_impact"
                },
                {
                    "type": "uint64",
                    "name": "liquidation_safety_factor"
                },
                {
                    "type": "uint64",
                    "name": "rewards_to_vest"
                },
                {
                    "type": "uint64",
                    "name": "rewards_to_lp"
                },
                {
                    "type": "uint64",
                    "name": "rewards_to_insurance"
                },
                {
                    "type": "uint64",
                    "name": "slope_midpoint"
                },
                {
                    "type": "uint64",
                    "name": "slope_a"
                },
                {
                    "type": "uint64",
                    "name": "slope_b"
                },
                {
                    "type": "uint64",
                    "name": "slope_c"
                },
                {
                    "type": "byte[]",
                    "name": "swap_dex_list"
                },
                {
                    "type": "uint64",
                    "name": "swap_app_id"
                },
                {
                    "type": "uint64",
                    "name": "oracle_app_id"
                }
            ],
            "returns": {
                "type": "void"
            }
        }
    ],
    "networks": {},
    "desc": "\n    ## Credit to chat gpt for this text, might be a bit too long to live here but it feels nice \n    ## to help people understand what my code is aiming to do.\n\n    A blockchain-based perpetual futures program enables traders to speculate \n    on the future price movements of an asset without owning the underlying asset. \n    This program uses automated market makers (AMMs) through a decentralized \n    aggregator to enter and close positions. AMMs use a mathematical formula to \n    determine the prices of assets based on their supply and demand. In DeFi protocols, \n    AMMs allow for efficient and automated trading without traditional order books \n    or centralized intermediaries.\n\n    The program's supply side provides a token that users can borrow to short an asset. \n    When a user borrows the token, it is immediately sold through a decentralized aggregator \n    into a designated collateral token. This mechanism eliminates the need for a traditional \n    order book and allows for easy shorting of an asset. Since the swapping is managed by the \n    program, with the help of an on-chain aggregator, and the funds always stay inside the \n    smart contract, the risk of an undercollateralized loan is minimized.\n\n    However, a concern arises regarding the potential for someone to manipulate the price of \n    the asset on-chain. To address this issue, the program utilizes a fully on-chain oracle \n    to calculate price impacts and swaps. The oracle ensures that all operations, such as new \n    orders, liquidations, and collateral removal, are within designated parameters and not \n    subject to market manipulation. This mechanism makes the program more secure and transparent.\n\n    In summary, this blockchain-based perpetual futures program allows for easy speculation on \n    an asset's price movements through the use of AMMs and a decentralized aggregator. The \n    program's supply side provides a token that can be borrowed by users, and the swapping is \n    managed by the program to reduce the risk of undercollateralized loans. The program also \n    uses an on-chain oracle to ensure that all operations are within designated parameters \n    and not subject to market manipulation, making the program more secure and transparent.\n    "
}

export const abi = new ABIContract(abijson)