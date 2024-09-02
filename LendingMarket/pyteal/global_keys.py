from pyteal import Bytes

# Assets
supply_asset_key = Bytes("ab")  # global uint
collateral_asset_key = Bytes("ac")  # global uint
liquidity_token_id_key = Bytes("al")  # global uint

# Admin account
admin_account_key = Bytes("ca")

# Liquidation
liquidation_incentive_key = Bytes("li")  # global uint, in bps
liquidation_slippage_key = Bytes("ls")  # global uint, in bps
max_bur_take_key = Bytes("mb")  # global uint, in bps
bur_box_key = Bytes("bu")

# Reward sharing
rewards_to_staking_key = Bytes("rs")  # global uint64, bps
rewards_to_lp_key = Bytes("rl")  # global uint64, bps
rewards_to_insurance_key = Bytes("ri")  # global uint64, bps

# Liquidity provision
liquidity_key = Bytes("ll")  # global uint
outstanding_liquidity_key = Bytes("lo")  # global uint
insurance_amount_key = Bytes("li")  # global uint

# Interest "staking"
interest_last_update_key = Bytes("iu")  # global uint
interest_per_tok_key = Bytes("it")  # global bytes
slope_midpoint_key = Bytes("ip")  # global uint
slope_a_key = Bytes("ia")  # global uint
slope_b_key = Bytes("ib")  # global uint
slope_c_key = Bytes("ic")  # global uint

# Update variables
update_timestamp_key = Bytes("ua")  # global uint
update_programhash_key = Bytes("uh")  # global bytes
update_clearhash_key = Bytes("uc")  # global bytes

# Swap and oracle
swap_app_id_key = Bytes("sa")  # global uint


# Decentralized oracle keys
asset_1_id_key = Bytes("a1")
asset_2_id_key = Bytes("a2")
last_liquidity_a1_key = Bytes("ll1")
last_liquidity_a2_key = Bytes("ll2")
max_liquidity_change_key = Bytes("mlc")
last_updated_round_key = Bytes("lr")
aggregator_array_boxkey = Bytes("aa")
