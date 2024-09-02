from algosdk import mnemonic
from algosdk import account as acchelp
from dataclasses import dataclass

MNEMONIC = ""


@dataclass
class niceAcc:
    address: str
    private_key: str


acc = niceAcc(
    address=acchelp.address_from_private_key(mnemonic.to_private_key(MNEMONIC)),
    private_key=mnemonic.to_private_key(MNEMONIC),
)

print(acc.address)
