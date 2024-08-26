/*This file is part of Shwap.

Shwap is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

Shwap is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Shwap. If not, see <https://www.gnu.org/licenses/>.*/


/* Flow of the contract is as follows:
User creates a shop for the tokens, once deployed the shop mints the max amount of coins possible (2^64 - 1 on Algorand)
The shop then sells these tokens at n + 100 where n is the number of tokens in circulation
The shop can then buy these tokens at reserves/n where reserves are the total balance of tokens held (Algo or ASA) and n the num of tok in circulation
If after a sell enough time passes without a purchase that makes num of tokens in circulation be bigger than the peak then a slashing action needs to occur
To slash a user deposits one token and the reserves go back to current circulation, repeating the cycle at a lower step

There are a few functions to allow for purchase of multiple tokens in a single interaction AND to ensure there's some slippage to avoid problems when 
interacting with the contract in the same block.


Written by BunsanMuchi for Vestige.Fi
Special thanks to Greg, Swag and Zykoz, without them this project would've never seen the light of day.
*/


'reach 0.1';
const shopState = Tuple(Token, Bool, UInt, UInt, UInt, UInt, UInt)

const tokenParameter = Object({
  name: Bytes(32), symbol: Bytes(8),
  url: Bytes(96), metadata: Bytes(32),
  supply: UInt, decimals: UInt
});

const sumOfArithmeticSeries = (n, a, d) => {
  const value2 = safeDiv(safeMul(n, safeAdd(safeMul(a, 2), safeMul(d, safeSub(n, 1)))), 2)
  return safeMul(value2, 100)
}
assert(sumOfArithmeticSeries(10, 1, 1) == 5500)

const solveForN = (v, a) => {
  if (v > 0) {
    const realV = safeDiv(v, 100)
    const aSqrPart = safeMul(4, safeMul(a, a))
    const aRegPart = safeMul(4, a)
    const vPart = safeAdd(safeMul(8, realV), 1)
    const toSquare = safeAdd(safeSub(aSqrPart, aRegPart), vPart)
    const squared = sqrt(toSquare)
    const finalPart = safeDiv(safeSub(safeAdd(squared, 1), safeMul(2, a)),2)
    return finalPart    
  }
  else {
    return 0
  }
}
assert(solveForN(5500, 1) == 10)

const howMuchYouGet = (amtIn, currentAmtSold, currentMaxAmt, currentSellPrice, d) => {
  const amtToMakeUp = currentAmtSold == currentMaxAmt ? 0 : safeSub(currentMaxAmt, currentAmtSold)

  if (amtToMakeUp == 0) {
    return (solveForN(amtIn, safeAdd(currentMaxAmt, 1)))
  }
  else {
    if (amtIn >= currentSellPrice) {
      const howMuchCanTheyFill = safeDiv(amtIn, currentSellPrice)

      if (howMuchCanTheyFill > amtToMakeUp) {
        const rest = solveForN(safeSub(amtIn, safeMul(amtToMakeUp, currentSellPrice)), safeAdd(currentMaxAmt, 1))
        return safeAdd(amtToMakeUp, rest)
      }
      else {
        return howMuchCanTheyFill
      }}
    else {
      return 0}}}

assert(howMuchYouGet(5500, 0, 0, 0, 1) == 10)


const howMuchToPay = (amtIn, currentAmtSold, currentMaxAmt, currentSellP, d) => {
  const amtToMakeUp = currentAmtSold == currentMaxAmt ? 0 : safeSub(currentMaxAmt, currentAmtSold)

  if (amtIn > amtToMakeUp) {
    const partToMakeUp = safeMul(amtToMakeUp, currentSellP);

    const rest = sumOfArithmeticSeries(safeSub(amtIn, amtToMakeUp), safeAdd(currentMaxAmt, 1), d)

    return safeAdd(partToMakeUp, rest)
  }
  else {
    return safeMul(amtIn, currentSellP)
  }
}

assert(howMuchToPay(10, 0, 0, 0, 1) == 5500)

export const algoShop = Reach.App(() => {
  const ShopCreator = Participant("ShopCreator", {
    setUpShop: Fun([], Object({
      growthRate: UInt,
      rebaseTime: UInt,
      sCoinParam: tokenParameter
    })),
    ready: Fun([], Null)
  });

  const Buyer = API("Buyer", {
    buy: Fun([UInt, UInt], Bool),
    sell: Fun([UInt], Bool),
    rebase: Fun([], Bool)
  });

  const ShopView = View("ShopView", {
    read: shopState,
  })

  init();

  ShopCreator.only(() => {
    const {
      growthRate,
      rebaseTime,
      sCoinParam
    } = declassify(interact.setUpShop());

    assume(growthRate == 1)
  })


  ShopCreator.publish(
    growthRate,
    rebaseTime,
    sCoinParam
  );


  const mdSCoin = { ...sCoinParam }
  const sCoinToken = new Token(mdSCoin);
  const startingTime = thisConsensusSecs();
  require(growthRate == 1)
  commit();

  ShopCreator.publish();
  ShopCreator.interact.ready();

  const [makingUp, peakSold, currentSold, reserves, currentSellPrice, deadline] =
    parallelReduce([false, 0, 0, 0, 0, startingTime])
      .invariant(balance() == reserves && balance(sCoinToken) == safeSub(mdSCoin.supply, currentSold))
      .while(true)
      .define(() => {
        ShopView.read.set([sCoinToken, makingUp, currentSellPrice, currentSold, reserves, deadline, peakSold])
      })
      .paySpec([sCoinToken])
      .api(Buyer.buy,
        (amt, min) => assume(amt >= 100 && balance(sCoinToken) >= howMuchYouGet(amt, currentSold, peakSold, currentSellPrice, 1) 
        &&  howMuchYouGet(amt, currentSold, peakSold, currentSellPrice, 1) >= min),
        (amt, _) => [amt, [0, sCoinToken]],
        (amt, min, k) => {
          require(amt >= 100 && balance(sCoinToken) >= howMuchYouGet(amt, currentSold, peakSold, currentSellPrice, 1) 
          &&  howMuchYouGet(amt, currentSold, peakSold, currentSellPrice, 1) >= min)
          enforce(thisConsensusSecs() < deadline || makingUp == false, "There's a condition that doesn't allow to buy, try to rebase")
          const amtScoin = howMuchYouGet(amt, currentSold, peakSold, currentSellPrice, 1)
          const amtPaid = howMuchToPay(amtScoin, currentSold, peakSold, currentSellPrice, growthRate)
          const newCurrentSold = safeAdd(currentSold, amtScoin)
          const newPeakSold = newCurrentSold > peakSold ? newCurrentSold : peakSold
          const newMakingUp = !(newCurrentSold >= peakSold)
          const newReserves = safeAdd(reserves, amtPaid)
          const newSellPrice = () => { if (newCurrentSold == 0) { return 0 } else { return safeDiv(newReserves, newCurrentSold) } }

          transfer([safeSub(amt, amtPaid), [amtScoin, sCoinToken]]).to(this)
          k(true)
          return [
            newMakingUp,
            newPeakSold,
            newCurrentSold,
            newReserves,
            newSellPrice(),
            deadline
          ]
        })
      .api(Buyer.sell,
        (amt) => assume(amt >= 1 && safeMul(amt, currentSellPrice) <= balance()),
        (amt) => [0, [amt, sCoinToken]],
        (amt, k) => {
          require(amt >= 1 && safeMul(amt, currentSellPrice) <= balance())
          enforce(thisConsensusSecs() < deadline || makingUp == false, "There's a condition that doesn't allow to buy, try to rebase")

          const newMakingUp = safeSub(currentSold, amt) > 0 ? true : false;
          const newPeakSold = peakSold;
          const newCurrentSold = safeSub(currentSold, amt)
          const newReserves = safeSub(reserves, safeMul(amt, currentSellPrice))
          const newSellPrice = currentSellPrice
          const newDeadline = makingUp ? deadline : safeAdd(thisConsensusSecs(), rebaseTime)

          transfer([safeMul(amt, currentSellPrice)]).to(this)
          k(true)
          return [
            newMakingUp,
            newPeakSold,
            newCurrentSold,
            newReserves,
            newSellPrice,
            newDeadline
          ]
        })
      .api(Buyer.rebase,
        () => assume(makingUp == true),
        () => [0, [1, sCoinToken]],
        (k) => {
          require(makingUp == true)
          enforce(thisConsensusSecs() >= deadline, "It's not time yet, you can't rebase")

          const newMakingUp = false;
          const newPeakSold = safeSub(currentSold, 1)
          const newCurrentSold = safeSub(currentSold, 1)
          const newReserves = (n) => {
            if (n == 0) {
              return 0
            }
            else {
              return sumOfArithmeticSeries(newCurrentSold, 1, 1)
            }
          }
          const newSellPrice = (n) => {
            if (n == 0) {
              return 0
            }
            else {
              return safeDiv(newReserves(n), newCurrentSold)
            }
          }
          const newDeadline = safeAdd(deadline, rebaseTime)

          transfer([safeSub(reserves, newReserves(newPeakSold))]).to(this)
          k(true)
          return [
            newMakingUp,
            newPeakSold,
            newCurrentSold,
            newReserves(newPeakSold),
            newSellPrice(newPeakSold),
            newDeadline
          ]
        })
  commit();
  exit();
});

export const vestShop = Reach.App(() => {
  const ShopCreator = Participant("ShopCreator", {
        setUpShop: Fun([],Object({
        growthRate: UInt,
        rebaseTime: UInt,
        sCoinParam: tokenParameter,
        vestToken: Token})),
      ready: Fun([], Null)});

  const Buyer = API("Buyer", {
    buy: Fun([UInt, UInt], Bool),
    sell: Fun([UInt], Bool),
    rebase: Fun([], Bool)
  });

  const ShopView = View("ShopView", {
    read: shopState,
  })

  init();

  ShopCreator.only(() => {
    const {
      growthRate,
      rebaseTime,
      sCoinParam,
      vestToken
    }= declassify(interact.setUpShop());
    
        assume(growthRate == 1)
  })


  ShopCreator.publish(
      growthRate,
      rebaseTime,
      sCoinParam,
      vestToken
  );

  const mdSCoin = {... sCoinParam}
  const sCoinToken = new Token(mdSCoin);
  const startingTime = thisConsensusSecs();
  require(growthRate == 1)
  commit();

  ShopCreator.publish();
  ShopCreator.interact.ready();

  const [makingUp, peakSold, currentSold, reserves, currentSellPrice, deadline] =
    parallelReduce([false, 0, 0, 0, 0, startingTime])
      .invariant(balance(vestToken) == reserves && balance(sCoinToken) == safeSub(mdSCoin.supply, currentSold))
      .while(true)
      .define(() => {
        ShopView.read.set([sCoinToken, makingUp, currentSellPrice, currentSold, reserves, deadline, peakSold])
      })
      .paySpec([vestToken, sCoinToken])
      .api(Buyer.buy,
        (amt, min) => assume(amt >= 100 && balance(sCoinToken) >= howMuchYouGet(amt, currentSold, peakSold, currentSellPrice, 1) 
        &&  howMuchYouGet(amt, currentSold, peakSold, currentSellPrice, 1) >= min),
        (amt, _) => [0 ,[amt, vestToken], [0, sCoinToken]],
        (amt, min, k) => {
          require(amt >= 100 && balance(sCoinToken) >= howMuchYouGet(amt, currentSold, peakSold, currentSellPrice, 1) 
          &&  howMuchYouGet(amt, currentSold, peakSold, currentSellPrice, 1) >= min)
          enforce(thisConsensusSecs() < deadline || makingUp == false, "There's a condition that doesn't allow to buy, try to rebase")
          const amtScoin = howMuchYouGet(amt, currentSold, peakSold, currentSellPrice, 1)
          const amtPaid = howMuchToPay(amtScoin, currentSold, peakSold, currentSellPrice, growthRate)
          const newCurrentSold = safeAdd(currentSold, amtScoin)
          const newPeakSold = newCurrentSold > peakSold ? newCurrentSold : peakSold
          const newMakingUp = !(newCurrentSold >= peakSold)
          const newReserves = safeAdd(reserves, amtPaid)
          const newSellPrice = () => { if (newCurrentSold == 0) { return 0 } else { return safeDiv(newReserves, newCurrentSold) } }
          transfer([ 0, [safeSub(balance(vestToken), newReserves), vestToken], [amtScoin, sCoinToken]]).to(this)
          k(true)
          return [
            newMakingUp,
            newPeakSold,
            newCurrentSold,
            newReserves,
            newSellPrice(),
            deadline
          ]
        })
      .api(Buyer.sell,
        (amt) => assume(amt >= 1 && safeMul(amt, currentSellPrice) <= balance(sCoinToken)),
        (amt) => [0,[0, vestToken] , [amt, sCoinToken]],
        (amt, k) => {
          require(amt >= 1 && safeMul(amt, currentSellPrice) <= balance(sCoinToken))
          enforce(thisConsensusSecs() < deadline || makingUp == false, "There's a condition that doesn't allow to buy, try to rebase")

          const newMakingUp = safeSub(currentSold, amt) > 0 ? true : false;
          const newPeakSold = peakSold;
          const newCurrentSold = safeSub(currentSold, amt)
          const newReserves = safeSub(reserves, safeMul(amt, currentSellPrice))
          const newSellPrice = currentSellPrice
          const newDeadline = makingUp ? deadline : safeAdd(thisConsensusSecs(), rebaseTime)

          transfer([[safeMul(amt, currentSellPrice), vestToken]]).to(this)
          k(true)
          return [
            newMakingUp,
            newPeakSold,
            newCurrentSold,
            newReserves,
            newSellPrice,
            newDeadline
          ]
        })
      .api(Buyer.rebase,
        () => assume(makingUp == true),
        () => [0, [0, vestToken],[1, sCoinToken]],
        (k) => {
          require(makingUp == true)
          enforce(thisConsensusSecs() >= deadline, "It's not time yet, you can't rebase")

          const newMakingUp = false;
          const newPeakSold = safeSub(currentSold, 1)
          const newCurrentSold = safeSub(currentSold, 1)
          const newReserves = (n) => {
            if (n == 0) {
              return 0
            }
            else {
              return sumOfArithmeticSeries(newCurrentSold, 1, 1)
            }
          }
          const newSellPrice = (n) => {
            if (n == 0) {
              return 0
            }
            else {
              return safeDiv(newReserves(n), newCurrentSold)
            }
          }
          const newDeadline = safeAdd(deadline, rebaseTime)

          transfer([[safeSub(reserves, newReserves(newPeakSold)), vestToken]]).to(this)
          k(true)
          return [
            newMakingUp,
            newPeakSold,
            newCurrentSold,
            newReserves(newPeakSold),
            newSellPrice(newPeakSold),
            newDeadline
          ]
        })

commit();
exit();});