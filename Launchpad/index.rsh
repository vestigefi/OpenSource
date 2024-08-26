/*This file is part of Launchpad.

Launchpad is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

Launchpad is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Launchpad. If not, see <https://www.gnu.org/licenses/>.

Written by BunsanMuchi for Vestige.Fi
Special thanks to Greg, Swag and Zykoz, without them this project would've never seen the light of day.
*/

'reach 0.1';

const State = Tuple(Address, Token, UInt, UInt, UInt, UInt, UInt, UInt, Bool)

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

export const payVestIDO = Reach.App(() => {
  setOptions({ verifyArithmetic: true, verifyPerConnector: true, connectors: [ALGO], untrustworthyMaps: true });
  const TokenOfferer = Participant('TokenOfferer', {
    setParam: Fun([],
      Object({
        tokenOffered: Token,
        amountOffered: UInt,
        deadline: UInt,
        minReceived: UInt,
        maxReceived: UInt,
        managerContract: Contract,
        tokenForFee: Token
      })),
    ready: Fun([], Null)
  })

  const User = API('User', {
    offer: Fun([UInt], Bool),
    claimToken: Fun([], Bool),
    claimBackOffer: Fun([], Bool),
    endRound: Fun([], Bool)
  })
  const OffererAPI = API("OffererAPI", {
    claim: Fun([], Bool),
    cancelOrder: Fun([], Bool)
  })
  const Admin = API("AdminAPI", { claimFees: Fun([], Bool) })
  const Viewer = View('Viewer', { read: State })
  init();
  TokenOfferer.only(() => {
    const {
      tokenOffered,
      amountOffered,
      deadline,
      minReceived,
      maxReceived,
      managerContract,
      tokenForFee
    } = declassify(interact.setParam());

    assume(tokenOffered != null)
    assume(tokenForFee != tokenOffered)
    assume(amountOffered >  1_000_000)
    assume(amountOffered < UInt.max)
  });

  TokenOfferer.publish(tokenOffered,
    amountOffered,
    deadline,
    minReceived,
    maxReceived,
    managerContract,
    tokenForFee);

  require(tokenOffered != null)
  require(tokenForFee != tokenOffered)
  require(amountOffered >  1_000_000)
  require(amountOffered < UInt.max)

  const mContract = remote(managerContract, { AdminAPI_getInfo: Fun([], Tuple(UInt, UInt, UInt, Address)) })
  const contractInfo = mContract.AdminAPI_getInfo.ALGO({ fees: 1 })()
  const pctFee = contractInfo[0]
  const payAmt = contractInfo[1]
  const adminAddr = contractInfo[3]

  enforce(pctFee < 10000, "There was a problem with this check")

  const adminFee = (f) => {
    if (f > 0) {
      require(f <= 10000)
      verifyMuldiv(amountOffered, f, 10000)
      return muldiv(amountOffered, f, 10000)
    }
    else {
      return 0
    }
  }
  const finalFee = adminFee(pctFee);
  enforce(amountOffered <= UInt.max - finalFee, "There was a mistake here")
  const totPaidTokOffered = amountOffered + finalFee
  commit();

  const startTime = lastConsensusSecs()
  const finalTime = startTime + deadline

  TokenOfferer.pay([[totPaidTokOffered, tokenOffered], [payAmt, tokenForFee]])
  require(totPaidTokOffered == balance(tokenOffered))
  TokenOfferer.interact.ready();

  const Buyers = new Map(Address, UInt);

  const feesFromCollection = (f, bal) => {
    if (f > 0) { return muldiv(bal, f, 10000) }
    else { return 0 }
  }

  const secondStageFundingSecured = () => {
    const divider = balance()
    const feeToPay = safeSub(balance(tokenOffered), amountOffered)

    const [notDone,
      amtRaised,
      notCollectedAmtRaised,
      amtTokOffered,
      feesTokOfferedToCollect,
      feesFeeTok,
      notCollectedFees
    ] = parallelReduce([true, balance(), true, amountOffered, feeToPay, balance(tokenForFee), true])
      .invariant(balance() == amtRaised && balance(tokenOffered) == safeAdd(amtTokOffered, feesTokOfferedToCollect) && balance(tokenForFee) == feesFeeTok)
      .while(notDone || notCollectedAmtRaised || notCollectedFees)
      .define(() => {Viewer.read.set([TokenOfferer, tokenOffered, startTime, finalTime, minReceived, maxReceived, divider, amountOffered, true])})
      .api(User.claimToken,
        () => check(isSome(Buyers[this]), "Doesn't have a claim!"),
        () => [0],
        (k) => {
          check(isSome(Buyers[this]), "Doesn't have a claim!")
          enforce(balance(tokenOffered) >= safeMuldiv(fromSome(Buyers[this], 0), amountOffered, divider))
          const amtToTransfer = safeMuldiv(fromSome(Buyers[this], 0), amountOffered, divider)
          transfer([[amtToTransfer, tokenOffered]]).to(this)
          delete Buyers[this]
          k(true)
          return [
            !(safeSub(amtTokOffered, amtToTransfer) == 0),
            amtRaised,
            notCollectedAmtRaised,
            safeSub(amtTokOffered, amtToTransfer),
            feesTokOfferedToCollect,
            feesFeeTok,
            notCollectedFees
          ]
        })
      .api(OffererAPI.claim,
        () => {
          check(this == TokenOfferer, "You are not the Token Offerer!")
          assume(balance() >= amtRaised && notCollectedAmtRaised == true)
        },
        () => [0],
        (k) => {
          check(this == TokenOfferer, "You are not the Token Offerer!")
          require(balance() >= amtRaised && notCollectedAmtRaised == true)
          transfer([amtRaised]).to(this)
          k(true)
          return [notDone,
            0,
            false,
            amtTokOffered,
            feesTokOfferedToCollect,
            feesFeeTok,
            notCollectedFees
          ]
        })
      .api(Admin.claimFees,
        () => {
          check(this == adminAddr)
          assume(balance(tokenForFee) >= feesFeeTok && balance(tokenOffered) >= feesTokOfferedToCollect)
        },
        () => [0],
        (k) => {
          check(this == adminAddr)
          require(balance(tokenForFee) >= feesFeeTok && balance(tokenOffered) >= feesTokOfferedToCollect)
          transfer([[feesFeeTok, tokenForFee], [feesTokOfferedToCollect, tokenOffered]]).to(this)
          k(true)
          return [notDone,
            amtRaised,
            notCollectedAmtRaised,
            amtTokOffered,
            0,
            0,
            false]
        })
  }

  const secondStageFundingNotSecured = () => {
    const [notDone,
      finalAmtReceived,
      tokOffererClaim,
      tokOfferedAmt,
      tokFeeAmt] = parallelReduce([true, balance(), false, balance(tokenOffered), balance(tokenForFee)])
        .invariant(balance() == finalAmtReceived && balance(tokenOffered) == tokOfferedAmt && balance(tokenForFee) == tokFeeAmt)
        .while(notDone)
        .define(() => {Viewer.read.set([TokenOfferer, tokenOffered, startTime, finalTime, minReceived, maxReceived, finalAmtReceived, amountOffered, false])})
        .api(User.claimBackOffer,
          () => check(isSome(Buyers[this]), "Doesn't have a claim!"),
          () => [0],
          (k) => {
            check(isSome(Buyers[this]), "Doesn't have a claim!")
            enforce(balance() >= fromSome(Buyers[this], 0))
            const amtToTransfer = fromSome(Buyers[this], 0)
            transfer(amtToTransfer).to(this)
            delete Buyers[this]
            k(true)
            return [
              !(finalAmtReceived - amtToTransfer == 0 && tokOffererClaim == true),
              finalAmtReceived - amtToTransfer,
              tokOffererClaim,
              tokOfferedAmt,
              tokFeeAmt
            ]
          })
        .api(OffererAPI.claim,
          () => assume(this == TokenOfferer),
          () => [0],
          (k) => {
            require(this == TokenOfferer)
            transfer([[balance(tokenOffered), tokenOffered]]).to(this)
            k(true)
            return [
              !(finalAmtReceived == 0),
              finalAmtReceived,
              true,
              0,
              tokFeeAmt
            ]
          })
        .api(Admin.claimFees,
          () => assume(this == adminAddr),
          () => [0],
          (k) => {
            require(this == adminAddr)
            transfer([[balance(tokenForFee), tokenForFee]]).to(this)
            k(true)
            return [notDone,
              finalAmtReceived,
              tokOffererClaim,
              tokOfferedAmt,
              0
            ]
          })
  }

  const [keepGoing,
    amtReceived,
    minAmtNeeded,
    maxAmtAllowed,
    fundingSecured] = parallelReduce([true, 0, minReceived, maxReceived, false])
      .invariant(balance() == amtReceived)
      .while(keepGoing)
      .define(() => {Viewer.read.set([TokenOfferer, tokenOffered, startTime, finalTime, minAmtNeeded, maxAmtAllowed, amtReceived, amountOffered, fundingSecured])})
      .api(User.offer,
        (amt) => (assume(amt > 0 && safeAdd(amtReceived, amt) <= maxReceived)),
        (amt) => [amt],
        (amt, k) => {
          require(amt > 0 && safeAdd(amtReceived, amt) <= maxReceived)
          enforce(thisConsensusSecs() < finalTime, "Deadline has been reached, someone should close the round!")
          if (isSome(Buyers[this])) {
            const prevAmt = fromSome(Buyers[this], 0)
            const newAmt = safeAdd(prevAmt, amt)
            Buyers[this] = newAmt
          }
          else {
            Buyers[this] = amt
          }
          k(true)
          return [
            keepGoing,
            safeAdd(amtReceived, amt),
            minAmtNeeded,
            maxAmtAllowed,
            amtReceived + amt >= minAmtNeeded]
        })
      .api(OffererAPI.cancelOrder,
        () => assume(this == TokenOfferer && fundingSecured == false),
        () => [0],
        (k) => {
          require(this == TokenOfferer && fundingSecured == false)
          enforce(thisConsensusSecs() < finalTime, "it's too late to cancel")
          k(true)
          return [
            false,
            amtReceived,
            minAmtNeeded,
            maxAmtAllowed,
            fundingSecured]
        })
      .api(User.endRound,
        () => { },
        () => [0],
        (k) => {
          enforce(thisConsensusSecs() >= finalTime || amtReceived == maxAmtAllowed, "it's to early to end the round!")
          k(true)
          return [
            false,
            amtReceived,
            minAmtNeeded,
            maxAmtAllowed,
            fundingSecured]
        })
  if (fundingSecured) { secondStageFundingSecured() }
  else { secondStageFundingNotSecured() }

  transfer([balance(), [balance(tokenOffered), tokenOffered]]).to(TokenOfferer)
  transfer([[balance(tokenForFee), tokenForFee]]).to(adminAddr)
  commit();
  exit();
});

export const payAlgoIDO = Reach.App(() => {
  setOptions({ verifyArithmetic: true, verifyPerConnector: true, connectors: [ALGO], untrustworthyMaps: true });
  const TokenOfferer = Participant('TokenOfferer', {
    setParam: Fun([],
      Object({
        tokenOffered: Token,
        amountOffered: UInt,
        deadline: UInt,
        minReceived: UInt,
        maxReceived: UInt,
        managerContract: Contract
      })),
    ready: Fun([], Null)
  })

  const User = API('User', {
    offer: Fun([UInt], Bool),
    claimToken: Fun([], Bool),
    claimBackOffer: Fun([], Bool),
    endRound: Fun([], Bool)
  })
  const OffererAPI = API("OffererAPI", {
    claim: Fun([], Bool),
    cancelOrder: Fun([], Bool)
  })
  const Admin = API("AdminAPI", { claimFees: Fun([], Bool) })
  const Viewer = View('Viewer', { read: State })
  init();
  TokenOfferer.only(() => {
    const {
      tokenOffered,
      amountOffered,
      deadline,
      minReceived,
      maxReceived,
      managerContract
    } = declassify(interact.setParam());

    assume(tokenOffered != null)
    assume(amountOffered >  1_000_000)
    assume(amountOffered < UInt.max)
  });

  TokenOfferer.publish(tokenOffered,
    amountOffered,
    deadline,
    minReceived,
    maxReceived,
    managerContract);

  require(tokenOffered != null)
  require(amountOffered >= 1_000_000)
  require(amountOffered < UInt.max)

  const mContract = remote(managerContract, { AdminAPI_getInfo: Fun([], Tuple(UInt, UInt, UInt, Address)) })
  const contractInfo = mContract.AdminAPI_getInfo.ALGO({ fees: 1 })()
  const pctFee = contractInfo[0]
  const payAmt = contractInfo[2]
  const adminAddr = contractInfo[3]

  enforce(pctFee < 10000, "There was a problem with this check")

  const adminFee = (f) => {
    if (f > 0) {
      require(f <= 10000)
      verifyMuldiv(amountOffered, f, 10000)
      return muldiv(amountOffered, f, 10000)
    }
    else {
      return 0
    }
  }
  const finalFee = adminFee(pctFee);
  enforce(amountOffered <= UInt.max - finalFee, "There was a mistake here")
  const totPaidTokOffered = amountOffered + finalFee
  commit();

  const startTime = lastConsensusSecs()
  const finalTime = startTime + deadline

  TokenOfferer.pay([payAmt, [totPaidTokOffered, tokenOffered]])
  transfer(payAmt).to(adminAddr)
  require(totPaidTokOffered == balance(tokenOffered))
  TokenOfferer.interact.ready();

  const Buyers = new Map(Address, UInt);

  const feesFromCollection = (f, bal) => {
    if (f > 0) { return muldiv(bal, f, 10000) }
    else { return 0 }
  }

  const secondStageFundingSecured = () => {
    const divider = balance()
    const feeToPay = safeSub(balance(tokenOffered), amountOffered)

    const [notDone,
      amtRaised,
      notCollectedAmtRaised,
      amtTokOffered,
      feesTokOfferedToCollect,
      notCollectedFees
    ] = parallelReduce([true, balance(), true, amountOffered, feeToPay, true])
      .invariant(balance() == amtRaised && balance(tokenOffered) == safeAdd(amtTokOffered, feesTokOfferedToCollect))
      .while(notDone || notCollectedAmtRaised || notCollectedFees)
      .define(() => {Viewer.read.set([TokenOfferer, tokenOffered, startTime, finalTime, minReceived, maxReceived, amtRaised, amountOffered, true])})
      .api(User.claimToken,
        () => check(isSome(Buyers[this]), "Doesn't have a claim!"),
        () => [0],
        (k) => {
          check(isSome(Buyers[this]), "Doesn't have a claim!")
          enforce(balance(tokenOffered) >= safeMuldiv(fromSome(Buyers[this], 0), amountOffered, divider))
          const amtToTransfer = safeMuldiv(fromSome(Buyers[this], 0), amountOffered, divider)
          transfer([[amtToTransfer, tokenOffered]]).to(this)
          delete Buyers[this]
          k(true)
          return [
            !(safeSub(amtTokOffered, amtToTransfer) == 0),
            amtRaised,
            notCollectedAmtRaised,
            safeSub(amtTokOffered, amtToTransfer),
            feesTokOfferedToCollect,
            notCollectedFees
          ]
        })
      .api(OffererAPI.claim,
        () => {
          check(this == TokenOfferer, "You are not the Token Offerer!")
          assume(balance() >= amtRaised && notCollectedAmtRaised == true)
        },
        () => [0],
        (k) => {
          check(this == TokenOfferer, "You are not the Token Offerer!")
          require(balance() >= amtRaised && notCollectedAmtRaised == true)
          transfer([amtRaised]).to(this)
          k(true)
          return [notDone,
            0,
            false,
            amtTokOffered,
            feesTokOfferedToCollect,
            notCollectedFees
          ]
        })
      .api(Admin.claimFees,
        () => {
          check(this == adminAddr)
          assume(balance(tokenOffered) >= feesTokOfferedToCollect)
        },
        () => [0],
        (k) => {
          check(this == adminAddr)
          require(balance(tokenOffered) >= feesTokOfferedToCollect)
          transfer([[feesTokOfferedToCollect, tokenOffered]]).to(this)
          k(true)
          return [notDone,
            amtRaised,
            notCollectedAmtRaised,
            amtTokOffered,
            0,
            false]
        })
  }

  const secondStageFundingNotSecured = () => {
    const [notDone,
      finalAmtReceived,
      tokOffererClaim,
      tokOfferedAmt] = parallelReduce([true, balance(), false, balance(tokenOffered)])
        .invariant(balance() == finalAmtReceived && balance(tokenOffered) == tokOfferedAmt)
        .while(notDone)
        .define(() => {Viewer.read.set([TokenOfferer, tokenOffered, startTime, finalTime, minReceived, maxReceived, finalAmtReceived, amountOffered, false])})
        .api(User.claimBackOffer,
          () => check(isSome(Buyers[this]), "Doesn't have a claim!"),
          () => [0],
          (k) => {
            check(isSome(Buyers[this]), "Doesn't have a claim!")
            enforce(balance() >= fromSome(Buyers[this], 0))
            const amtToTransfer = fromSome(Buyers[this], 0)
            transfer(amtToTransfer).to(this)
            delete Buyers[this]
            k(true)
            return [
              !(finalAmtReceived - amtToTransfer == 0 && tokOffererClaim == true),
              finalAmtReceived - amtToTransfer,
              tokOffererClaim,
              tokOfferedAmt
            ]
          })
        .api(OffererAPI.claim,
          () => assume(this == TokenOfferer),
          () => [0],
          (k) => {
            require(this == TokenOfferer)
            transfer([[balance(tokenOffered), tokenOffered]]).to(this)
            k(true)
            return [
              !(finalAmtReceived == 0),
              finalAmtReceived,
              true,
              0
            ]
          })
        .api(Admin.claimFees,
          () => assume(this == adminAddr),
          () => [0],
          (k) => {
            require(this == adminAddr)
            k(true)
            return [notDone,
              finalAmtReceived,
              tokOffererClaim,
              tokOfferedAmt
            ]
          })
  }

  const [keepGoing,
    amtReceived,
    minAmtNeeded,
    maxAmtAllowed,
    fundingSecured] = parallelReduce([true, 0, minReceived, maxReceived, false])
      .invariant(balance() == amtReceived)
      .while(keepGoing)
      .define(() => {Viewer.read.set([TokenOfferer, tokenOffered, startTime, finalTime, minAmtNeeded, maxAmtAllowed, amtReceived, amountOffered, fundingSecured])})
      .api(User.offer,
        (amt) => (assume(amt > 0 && safeAdd(amtReceived, amt) <= maxReceived)),
        (amt) => [amt],
        (amt, k) => {
          require(amt > 0 && safeAdd(amtReceived, amt) <= maxReceived)
          enforce(thisConsensusSecs() < finalTime, "Deadline has been reached, someone should close the round!")
          if (isSome(Buyers[this])) {
            const prevAmt = fromSome(Buyers[this], 0)
            const newAmt = safeAdd(prevAmt, amt)
            Buyers[this] = newAmt
          }
          else {
            Buyers[this] = amt
          }
          k(true)
          return [
            keepGoing,
            safeAdd(amtReceived, amt),
            minAmtNeeded,
            maxAmtAllowed,
            amtReceived + amt >= minAmtNeeded]
        })
      .api(OffererAPI.cancelOrder,
        () => assume(this == TokenOfferer && fundingSecured == false),
        () => [0],
        (k) => {
          require(this == TokenOfferer && fundingSecured == false)
          enforce(thisConsensusSecs() < finalTime, "it's too late to cancel")
          k(true)
          return [
            false,
            amtReceived,
            minAmtNeeded,
            maxAmtAllowed,
            fundingSecured]
        })
      .api(User.endRound,
        () => { },
        () => [0],
        (k) => {
          enforce(thisConsensusSecs() >= finalTime || amtReceived == maxAmtAllowed, "it's to early to end the round!")
          k(true)
          return [
            false,
            amtReceived,
            minAmtNeeded,
            maxAmtAllowed,
            fundingSecured]
        })
  if (fundingSecured) { secondStageFundingSecured() }
  else { secondStageFundingNotSecured() }

  transfer([balance(), [balance(tokenOffered), tokenOffered]]).to(TokenOfferer)
  commit();
  exit();
});