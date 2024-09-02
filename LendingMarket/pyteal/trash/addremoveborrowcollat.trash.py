@router.method(no_op=CallConfig.CALL)
def add_collateral(order_id: abi.Uint64):
    boxkey = Concat(Txn.sender(), Itob(order_id.get()))
    borrow_amt = ScratchVar()
    collateral_amt = ScratchVar()
    order_interest_per_tok = ScratchVar()
    add_amount = ScratchVar()
    ptxn = Gtxn[Txn.group_index() - Int(1)]

    actions = Seq(
        box := App.box_get(boxkey),
        collateral_amt.store(ExtractUint64(box.value(), Int(0))),
        borrow_amt.store(ExtractUint64(box.value(), Int(8))),
        order_interest_per_tok.store(Extract(box.value(), Int(16), Int(16))),
        # We update the interest and move it onto the borrow_amt.
        update_interest_per_tok(),
        move_interest(order_interest_per_tok, borrow_amt),
        If(App.globalGet(collateral_asset_key) == Int(0))
        .Then(
            Assert(ptxn.receiver() == Global.current_application_address()),
            add_amount.store(ptxn.amount()),
        )
        .Else(
            Assert(
                ptxn.receiver() == Global.current_application_address(),
                ptxn.xfer_asset() == App.globalGet(collateral_asset_key),
            ),
            add_amount.store(ptxn.asset_amount()),
        ),
        # If a box for this asset exists, we have to add this amount to it. Avoids doublecount
        asset_box := App.box_get(Itob(App.globalGet(collateral_asset_key))),
        If(asset_box.hasValue()).Then(
            App.box_put(
                Itob(App.globalGet(collateral_asset_key)),
                asset_box.value() + Itob(add_amount.load()),
            )
        ),
        collateral_amt.store(collateral_amt.load() + add_amount.load()),
        Assert(
            Not(
                is_liquidateable(
                    collateral_amt.load(),
                    borrow_amt.load(),
                    App.globalGet(liquidation_incentive_key)
                    + App.globalGet(liquidation_safety_factor_key),
                )
            )
        ),
    )

    return actions


@router.method(no_op=CallConfig.CALL)
def return_supply(order_id: abi.Uint64):
    boxkey = Concat(Txn.sender(), Itob(order_id.get()))
    borrow_amt = ScratchVar()
    collateral_amt = ScratchVar()
    order_interest_per_tok = ScratchVar()
    add_amount = ScratchVar()
    ptxn = Gtxn[Txn.group_index() - Int(1)]

    actions = Seq(
        box := App.box_get(boxkey),
        collateral_amt.store(ExtractUint64(box.value(), Int(0))),
        borrow_amt.store(ExtractUint64(box.value(), Int(8))),
        order_interest_per_tok.store(Extract(box.value(), Int(16), Int(16))),
        # We update the interest and move it onto the borrow_amt.
        update_interest_per_tok(),
        move_interest(order_interest_per_tok, borrow_amt),
        If(App.globalGet(supply_asset_key) == Int(0))
        .Then(
            Assert(ptxn.receiver() == Global.current_application_address()),
            add_amount.store(ptxn.amount()),
        )
        .Else(
            Assert(
                ptxn.receiver() == Global.current_application_address(),
                ptxn.xfer_asset() == App.globalGet(supply_asset_key),
            ),
            add_amount.store(ptxn.asset_amount()),
        ),
        # If a box for this asset exists, we have to add this amount to it. Avoids doublecount
        asset_box := App.box_get(Itob(App.globalGet(supply_asset_key))),
        If(asset_box.hasValue()).Then(
            App.box_put(
                Itob(App.globalGet(supply_asset_key)),
                asset_box.value() + Itob(add_amount.load()),
            )
        ),
        borrow_amt.store(borrow_amt.load() + add_amount.load()),
        Assert(
            Not(
                is_liquidateable(
                    borrow_amt.load(),
                    borrow_amt.load(),
                    App.globalGet(liquidation_incentive_key)
                    + App.globalGet(liquidation_safety_factor_key),
                )
            )
        ),
    )

    return actions
