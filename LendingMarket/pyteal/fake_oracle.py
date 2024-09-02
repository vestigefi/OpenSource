import json
from pyteal import *
from global_keys import *


on_create = Seq(Approve())

router = Router(
    name="fake_oracle",
    descr="""
    is a fake oracle
    """,
    bare_calls=BareCallActions(
        # Allow this app to be created with a no-op call
        no_op=OnCompleteAction(
            action=Seq(
                on_create,
                Approve(),
            ),
            call_config=CallConfig.CREATE,
        ),
    ),
)


@router.method
def set_prices(
    asset1: abi.Uint64, amount1: abi.Uint64, asset2: abi.Uint64, amount2: abi.Uint64
):
    actions = Seq(
        App.globalPut(Itob(asset1.get()), amount1.get()),
        App.globalPut(Itob(asset2.get()), amount2.get()),
    )

    return actions


approval_program, clear_state_program, contract = router.compile_program(
    version=8, optimize=OptimizeOptions(scratch_slots=True)
)

if __name__ == "__main__":
    with open(f"fake_oracle_app.teal", "w") as f:
        f.write(approval_program)

    with open(f"fake_oracle_cs.teal", "w") as f:
        f.write(clear_state_program)

    with open(f"fake_oracle.json", "w") as f:
        f.write(json.dumps(contract.dictify(), indent=4))
