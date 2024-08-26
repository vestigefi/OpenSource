/*This file is part of Vault.

Vault is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

Vault is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Vault. If not, see <https://www.gnu.org/licenses/>.

Written by BunsanMuchi for Vestige.Fi
Special thanks to Greg, Swag and Zykoz, without them this project would've never seen the light of day.
*/
'reach 0.1';

const state = Tuple(Bool, UInt, UInt, UInt, UInt, UInt, UInt, UInt)

const amountPerStep = (vType, aToKeep, tSteps) => {
  if (vType == 0) {
    return aToKeep
  }
  else if (vType == 1) {
    return safeDiv(aToKeep , tSteps)
  }
  else if (vType == 2) {
    return safeDiv(aToKeep , 2)
  }
  else { return 0 }
}
export const manager = Reach.App(() => {
  setOptions({ connectors: [ALGO] });
  setOptions({ untrustworthyMaps: true });
  const Admin = Participant('Admin', {
    setParam: Fun([],
      Object({
        pctgAmt: UInt,
        tokenToPay: Token,
        amtToPayVest: UInt,
        amtToPayAlgo: UInt,
        adminAddr: Address
      })),
    ready: Fun([], Null)
  })
  const AdminAPI = API('AdminAPI', {
    updateParam: Fun([UInt, UInt, UInt, Address], Bool),
    getInfo: Fun([], Tuple(UInt, UInt, UInt, Address))
  })
  const AdminView = View('AdminView', { readState: Tuple(UInt, UInt, UInt, Address) })
  init();
  Admin.only(() => {
    const {
      pctgAmt,
      tokenToPay,
      amtToPayVest,
      amtToPayAlgo,
      adminAddr
    } = declassify(interact.setParam())
    assume(adminAddr == this)
    assume(pctgAmt >= 0)
    assume(pctgAmt <= 10000)
  })
  Admin.publish(
    pctgAmt,
    tokenToPay,
    amtToPayVest,
    amtToPayAlgo,
    adminAddr
  )
  require(adminAddr == this)
  require(pctgAmt >= 0)
  require(pctgAmt <= 10000)
  Admin.interact.ready();
  const [pctg, amtV, amtA, addr] =
    parallelReduce([pctgAmt, amtToPayVest, amtToPayAlgo, adminAddr])
      .invariant(balance() == 0)
      .while(true)
      .define(() => {
        AdminView.readState.set([pctg, amtV, amtA, addr])
      })
      .paySpec([tokenToPay])
      .api(AdminAPI.getInfo,
        () => { },
        () => [0, [0, tokenToPay]],
        (mInfo) => {
          mInfo([pctg, amtV, amtA, addr])
          return [pctg,
            amtV,
            amtA,
            addr]
        }
      )
      .api(AdminAPI.updateParam,
        (newPct, newAmtV, newAmtA, newAddr) => {
          assume(this == addr
            && newPct >= 0
            && newPct <= 10000
            && newAddr != null)
        },
        (_, _, _, _) => [0, [0, tokenToPay]],
        (newPct, newAmtV, newAmtA, newAddr, k) => {
          require(this == addr
            && newPct >= 0
            && newPct <= 10000
            && newAddr != null)
          k(true)
          return [newPct,
            newAmtV,
            newAmtA,
            newAddr]
        }
      )
  commit();
  exit();
})

export const vaultPayAlgo = Reach.App(() => {
  setOptions({verifyArithmetic: true, verifyPerConnector:true , connectors: [ALGO]})
  const Depositor = Participant("Depositor", {
    setVault: Fun([],
      Object({
        tokenToKeep: Token,
        amountToKeep: UInt,
        vaultType: UInt, //0 = LUMP, 1 = PCTG, 2 = HALVING
        timeSteps: UInt,
        timePerStep: UInt,
        claimingAddr: Address,
        managerContract: Contract
      })),
    ready: Fun([], Null)
  })

  const Viewer = View("Viewer", { read: state })
  const Claimant = API("Claimant", { tryClaim: Fun([], Bool), finalClaim: Fun([], Bool) })
  const AdminApi = API("AdminAPI", { tryClaimFee: Fun([], Bool) })
  init();

  Depositor.only(() => {
    const {
      tokenToKeep,
      amountToKeep,
      vaultType,
      timeSteps,
      timePerStep,
      claimingAddr,
      managerContract    
    } = declassify(interact.setVault())

    assume(amountToKeep > 0);
    assume(timePerStep > 0);
    assume(timeSteps > 0);
    assume(vaultType <= 2)

    if (vaultType == 0) {
      assume(timeSteps == 1)
    }
    if (vaultType == 1) {
      assume(safeDiv(amountToKeep , timeSteps) > 0)
    }
    if (vaultType == 2) {
      assume(timeSteps <= 33)
      assume(pow(2, safeSub(timeSteps , 1), 6) < UInt.max)
      const bigNum = safeDiv(amountToKeep , (pow(2, safeSub(timeSteps , 1), 6)));
      assume(bigNum > 0)
      assume(bigNum <= UInt.max)
    }

  });

  Depositor.publish(
    tokenToKeep,
    amountToKeep,
    vaultType,
    timeSteps,
    timePerStep,
    claimingAddr,
    managerContract
  )

  require(amountToKeep > 0);
  require(timePerStep > 0);
  require(timeSteps > 0);
  require(vaultType <= 2)

  if (vaultType == 0) {
    require(timeSteps == 1)
  }
  if (vaultType == 1) {
    require(safeDiv(amountToKeep , timeSteps) > 0)
  }
  if (vaultType == 2) {
    require(timeSteps <= 63)
    require(pow(2, safeSub(timeSteps , 1), 6) < UInt.max)
    const bigNum = safeDiv(amountToKeep , (pow(2, safeSub(timeSteps , 1), 6)));
    require(bigNum > 0)
    require(bigNum <= UInt.max)
  }

  const mContract = remote(managerContract, {
    AdminAPI_getInfo: Fun([], Tuple(UInt, UInt, UInt, Address)),
  })


  const contractInfo = mContract.AdminAPI_getInfo.ALGO({
    fees: 1
  })()
  const pctFee = contractInfo[0]
  const payAmt = contractInfo[2]
  const adminAddr = contractInfo[3]
  enforce(pctFee <= 10000)
  verifyMuldiv(amountToKeep, pctFee, 10000)
  const adminFee = safeMuldiv(amountToKeep, pctFee, 10000);  
  enforce(amountToKeep <= UInt.max -adminFee)
  commit();


  const nextDeadline = lastConsensusSecs() + timePerStep;

  Depositor.pay([payAmt, [safeAdd(amountToKeep , adminFee), tokenToKeep]]);
  Depositor.interact.ready();
  const amt = amountPerStep(vaultType, amountToKeep, timeSteps);
  const [isDone, initialAmt, amtGiven, amtFeeTokKeep, amtFeeAlgo, amtPerStep, nextRelease, tStep, rounds, type] =
    parallelReduce([false, amountToKeep, 0, adminFee, payAmt, amt, nextDeadline, timePerStep, timeSteps, vaultType])
      .invariant(balance(tokenToKeep) == safeSub(safeAdd(initialAmt , amtFeeTokKeep) , amtGiven )&& balance() == amtFeeAlgo)
      .while(true)
      .define(() => {
        const nAmt = (t, r, amtP) => {
          if (t == 2 && r > 1) { return safeDiv(amtP , 2 )}
          else if (t == 1 && r > 1) { return amtP }
          else { return safeSub(initialAmt , amtGiven) }
        }
      })
      .define(() => {
        Viewer.read.set([isDone,
          initialAmt,
          amtGiven,
          amtPerStep,
          nextRelease,
          lastConsensusSecs(),
          rounds,
          balance(tokenToKeep)])
      })
      .api(Claimant.tryClaim,
        () => {
          assume(balance(tokenToKeep) >= amtPerStep
            && rounds > 1
            && this == claimingAddr)
        },
        () => 0,
        (k) => {
          require(balance(tokenToKeep) >= amtPerStep
            && rounds > 1
            && this == claimingAddr)
          enforce(thisConsensusSecs() >= nextRelease)
          transfer([[amtPerStep, tokenToKeep]]).to(claimingAddr);
          k(true)
          return [
            isDone,
            initialAmt,
            safeAdd(amtGiven , amtPerStep),
            amtFeeTokKeep,
            amtFeeAlgo,
            nAmt(type, safeSub(rounds , 1), amtPerStep),
            safeAdd(nextRelease , tStep),
            tStep,
            safeSub(rounds , 1),
            type]
        })
      .api(Claimant.finalClaim,
        () => {
          assume(balance(tokenToKeep) == safeSub(initialAmt , amtGiven)
            && rounds == 1
            && this == claimingAddr)
        },
        () => 0,
        (k) => {
          require(balance(tokenToKeep) == safeSub(initialAmt , amtGiven)
            && rounds == 1
            && this == claimingAddr)
          enforce(thisConsensusSecs() >= nextRelease)
          transfer([[ safeSub(initialAmt , amtGiven), tokenToKeep]]).to(claimingAddr);

          k(true)
          return [
            true,
            initialAmt,
            safeAdd(amtGiven ,  safeSub(initialAmt , amtGiven)),
            amtFeeTokKeep,
            amtFeeAlgo,
            0,
            safeAdd(nextRelease , tStep),
            tStep,
            safeSub(rounds , 1),
            type]
        })
      .api(AdminApi.tryClaimFee,
        () => {
          assume(this == adminAddr
            && balance(tokenToKeep) >= amtFeeTokKeep
            && balance() >= amtFeeAlgo)
        },
        () => 0,
        (k) => {
          require(this == adminAddr
            && balance(tokenToKeep) >= amtFeeTokKeep
            && balance() >= amtFeeAlgo)
          transfer([amtFeeAlgo, [amtFeeTokKeep, tokenToKeep]]).to(this)
          k(true)
          return [
            isDone,
            initialAmt,
            amtGiven,
            0,
            0,
            amtPerStep,
            nextRelease,
            tStep,
            rounds,
            type
          ]
        }
      )

  commit();
  exit();
});

export const vaultPayVest = Reach.App(() => {
  setOptions({verifyArithmetic: true, verifyPerConnector:true , connectors: [ALGO]})
  const Depositor = Participant("Depositor", {
    setVault: Fun([],
      Object({
        tokenToKeep: Token,
        amountToKeep: UInt,
        vaultType: UInt, //0 = LUMP, 1 = PCTG, 2 = HALVING
        timeSteps: UInt,
        timePerStep: UInt,
        claimingAddr: Address,
        managerContract: Contract,
        tokenToPay: Token
      })),
    ready: Fun([], Null)
  })

  const Viewer = View("Viewer", { read: state })
  const Claimant = API("Claimant", { tryClaim: Fun([], Bool), finalClaim: Fun([], Bool) })
  const AdminApi = API("AdminAPI", { tryClaimFee: Fun([], Bool) })
  init();

  Depositor.only(() => {
    const {
      tokenToKeep,
      amountToKeep,
      vaultType,
      timeSteps,
      timePerStep,
      claimingAddr,
      managerContract,
      tokenToPay
    } = declassify(interact.setVault())

    assume(amountToKeep > 0);
    assume(timePerStep > 0);
    assume(timeSteps > 0);
    assume(vaultType <= 2)
    assume(tokenToPay != tokenToKeep)
    if (vaultType == 0) {
      assume(timeSteps == 1)
    }
    if (vaultType == 1) {
      assume(safeDiv(amountToKeep , timeSteps) > 0)
    }
    if (vaultType == 2) {
      assume(timeSteps <= 33)
      assume(pow(2, safeSub(timeSteps , 1), 6) < UInt.max)
      const bigNum = safeDiv(amountToKeep , (pow(2, safeSub(timeSteps , 1), 6)));
      assume(bigNum > 0)
      assume(bigNum <= UInt.max)
    }

  });

  Depositor.publish(
    tokenToKeep,
    amountToKeep,
    vaultType,
    timeSteps,
    timePerStep,
    claimingAddr,
    managerContract,
    tokenToPay
  )

  require(amountToKeep > 0);
  require(timePerStep > 0);
  require(timeSteps > 0);
  require(vaultType <= 2)
  require(tokenToPay != tokenToKeep)

  if (vaultType == 0) {
    require(timeSteps == 1)
  }
  if (vaultType == 1) {
    require(safeDiv(amountToKeep , timeSteps) > 0)
  }
  if (vaultType == 2) {
    require(timeSteps <= 63)
    require(pow(2, safeSub(timeSteps , 1), 6) < UInt.max)
    const bigNum = safeDiv(amountToKeep , (pow(2, safeSub(timeSteps , 1), 6)));
    require(bigNum > 0)
    require(bigNum <= UInt.max)
  }

  const mContract = remote(managerContract, {
    AdminAPI_getInfo: Fun([], Tuple(UInt, UInt, UInt, Address)),
  })


  const contractInfo = mContract.AdminAPI_getInfo.ALGO({
    fees: 1
  })()
  const pctFee = contractInfo[0]
  const payAmt = contractInfo[1]
  const adminAddr = contractInfo[3]
  enforce(pctFee <= 10000)
  verifyMuldiv(amountToKeep, pctFee, 10000)
  const adminFee = safeMuldiv(amountToKeep, pctFee, 10000);  
  enforce(amountToKeep <= UInt.max -adminFee)
  commit();


  const nextDeadline = lastConsensusSecs() + timePerStep;

  Depositor.pay([[safeAdd(amountToKeep , adminFee), tokenToKeep], [payAmt, tokenToPay]]);
  Depositor.interact.ready();
  const amt = amountPerStep(vaultType, amountToKeep, timeSteps);
  const [isDone, initialAmt, amtGiven, aFeeTokKeep, aFeeTokPay, amtPerStep, nextRelease, tStep, rounds, type] =
    parallelReduce([false, amountToKeep, 0, adminFee, payAmt, amt, nextDeadline, timePerStep, timeSteps, vaultType])
      .invariant(balance(tokenToKeep) == safeSub(safeAdd(initialAmt , aFeeTokKeep) , amtGiven )&& balance(tokenToPay) == aFeeTokPay)
      .while(true)
      .define(() => {
        const nAmt = (t, r, amtP) => {
          if (t == 2 && r > 1) { return safeDiv(amtP , 2 )}
          else if (t == 1 && r > 1) { return amtP }
          else { return safeSub(initialAmt , amtGiven) }
        }
      })
      .define(() => {
        Viewer.read.set([isDone,
          initialAmt,
          amtGiven,
          amtPerStep,
          nextRelease,
          lastConsensusSecs(),
          rounds,
          balance(tokenToKeep)])
      })
      .api(Claimant.tryClaim,
        () => {
          assume(balance(tokenToKeep) >= amtPerStep
            && rounds > 1
            && this == claimingAddr)
        },
        () => 0,
        (k) => {
          require(balance(tokenToKeep) >= amtPerStep
            && rounds > 1
            && this == claimingAddr)
          enforce(thisConsensusSecs() >= nextRelease)
          transfer([[amtPerStep, tokenToKeep]]).to(claimingAddr);
          k(true)
          return [
            isDone,
            initialAmt,
            safeAdd(amtGiven , amtPerStep),
            aFeeTokKeep,
            aFeeTokPay,
            nAmt(type, safeSub(rounds , 1), amtPerStep),
            safeAdd(nextRelease , tStep),
            tStep,
            safeSub(rounds , 1),
            type]
        })
      .api(Claimant.finalClaim,
        () => {
          assume(balance(tokenToKeep) == safeSub(initialAmt , amtGiven)
            && rounds == 1
            && this == claimingAddr)
        },
        () => 0,
        (k) => {
          require(balance(tokenToKeep) == safeSub(initialAmt , amtGiven)
            && rounds == 1
            && this == claimingAddr)
          enforce(thisConsensusSecs() >= nextRelease)
          transfer([[ safeSub(initialAmt , amtGiven), tokenToKeep]]).to(claimingAddr);

          k(true)
          return [
            true,
            initialAmt,
            safeAdd(amtGiven ,  safeSub(initialAmt , amtGiven)),
            aFeeTokKeep,
            aFeeTokPay,
            0,
            safeAdd(nextRelease , tStep),
            tStep,
            safeSub(rounds , 1),
            type]
        })
      .api(AdminApi.tryClaimFee,
        () => {
          assume(this == adminAddr
            && balance(tokenToKeep) >= aFeeTokKeep
            && balance(tokenToPay) >= aFeeTokPay)
        },
        () => 0,
        (k) => {
          require(this == adminAddr
            && balance(tokenToKeep) >= aFeeTokKeep
            && balance(tokenToPay) >= aFeeTokPay)
          transfer([[aFeeTokKeep, tokenToKeep], [aFeeTokPay, tokenToPay]]).to(this)
          k(true)
          return [
            isDone,
            initialAmt,
            amtGiven,
            0,
            0,
            amtPerStep,
            nextRelease,
            tStep,
            rounds,
            type
          ]
        }
      )

  commit();
  exit();
});
