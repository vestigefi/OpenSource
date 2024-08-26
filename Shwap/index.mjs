/*This file is part of Shwap.
Shwap is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
Shwap is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with Shwap. If not, see <https://www.gnu.org/licenses/>.*/




import {loadStdlib} from '@reach-sh/stdlib';
import * as algoShop from './build/index.algoShop.mjs';
import * as vestShop from './build/index.vestShop.mjs'


const reachLib = loadStdlib({REACH_NO_WARN: 'Y'});
const startingBalance = reachLib.parseCurrency(1000);
const admin = await reachLib.newTestAccount(startingBalance);
const users = await reachLib.newTestAccounts(10, startingBalance);
const aShop = await admin.contract(algoShop);
const vestToken = await reachLib.launchToken(admin, "Vest", "VEST")
const vShop = await admin.contract(vestShop);
const waitingTime = 10;


const sAlgoParam = {
  name: "sALGO",
  symbol: "sALGO",
  url: "https://vestige.fi",
  metadata: "this",
  supply: reachLib.bigNumberify("18446744073709551615"),
  decimals: 0}
const sVestParam = {
  name: "💩VEST",
  symbol: "💩VEST",
  url: "https://vestige.fi",
  metadata: "this",
  supply: reachLib.bigNumberify("18446744073709551615"),
  decimals: 0}

try {await aShop.p.ShopCreator({
  setUpShop:() => ({
    growthRate: 1,
    rebaseTime: waitingTime,
    sCoinParam: sAlgoParam,
  }),  

  ready: ()=>{
    console.log("The contract is ready!")
    throw 42;
  }

})}
catch(e){
  if(e !== 42){
    throw e;
  }
}


const printFullView = async(ctc, backend, user) =>{
  const viewCtc = await user.contract(backend, ctc.getInfo());
  const shopView = await viewCtc.v.ShopView;
  const shopInfo = await shopView.read();
  return console.log("TokenID:", reachLib.bigNumberToNumber(shopInfo[1][0]),
  "\nAre we catching up? ", shopInfo[1][1], 
  "\nCurren Sell Price: ", reachLib.bigNumberToNumber(shopInfo[1][2]), 
  "\nCurrently Claimed Schmeckles: ", reachLib.bigNumberToNumber(shopInfo[1][3]),
  "\nCurrent Reserve: ", reachLib.bigNumberToNumber(shopInfo[1][4]),
  "\nCurrent Deadline: ", reachLib.bigNumberToNumber(shopInfo[1][5]),
  "\nCurrent Peak Sold: ", reachLib.bigNumberToNumber(shopInfo[1][6]),
);
}


await printFullView(aShop, algoShop, users[0])

const getTokID = async(ctc, backend, user) =>{
  const viewCtc = await user.contract(backend, ctc.getInfo());
  const shopView = await viewCtc.v.ShopView
  const shopInfo = await shopView.read();
  return  reachLib.bigNumberToNumber(shopInfo[1][0])}

const getDeadline = async(ctc, backend, user) =>{
  const viewCtc = await user.contract(backend, ctc.getInfo());
  const shopView = await viewCtc.v.ShopView;
  const shopInfo = await shopView.read();
  return  reachLib.bigNumberToNumber(shopInfo[1][5])}


const sAlgoID = await getTokID(aShop, algoShop, users[0])

for (let i = 0; i < users.length; ++i){await users[i].tokenAccept(sAlgoID)}


const buyCoin = async(ctc, backend, user, amts) =>{
  const contract = await user.contract(backend, ctc.getInfo())
  const buyAPI = await contract.apis.Buyer;
  try{
  const buy = await buyAPI.buy(...amts);}
  catch(e){
    console.log(e , "\n Something went wrong when trying to buy!")
  }
  await printFullView(ctc, backend, user)
}
const sellCoin = async(ctc, backend, user, amt) =>{
  const contract = await user.contract(backend, ctc.getInfo())
  const sellAPI = await contract.apis.Buyer;

  try{
  const sell = await sellAPI.sell(amt);}
  catch(e){
    console.log(e , "\n Something went wrong when trying to sell!")
  }
  await printFullView(ctc, backend, user)
}
const rebaseCoin = async(ctc, backend, user) =>{
  const contract = await user.contract(backend, ctc.getInfo())
  const rebaseAPI = await contract.apis.Buyer;
  try{
  const rebase = await rebaseAPI.rebase();}
  catch(e){
    console.log(e, "\n Something went wrong when trying to rebase")
  }
  await printFullView(ctc, backend, user)
}

await buyCoin(aShop, algoShop, users[0],[550000, 10])
await buyCoin(aShop, algoShop, users[1], [550000, 10])
await buyCoin(aShop, algoShop, users[2], [5500000, 1])
await buyCoin(aShop, algoShop, users[3], [5500000, 1])
await buyCoin(aShop, algoShop, users[4], [5500000, 1])
await sellCoin(aShop, algoShop, users[0], 10)
await buyCoin(aShop, algoShop, users[9], [55000000, 1])
await buyCoin(aShop, algoShop, users[8], [55000000, 1])

await buyCoin(aShop, algoShop, users[0], [55000, 1])
await buyCoin(aShop, algoShop, users[1], [55000, 1])
await buyCoin(aShop, algoShop, users[2], [55000, 1])
await buyCoin(aShop, algoShop, users[3], [55000, 1])
await buyCoin(aShop, algoShop, users[4], [55000, 1])
await sellCoin(aShop, algoShop, users[0], 10)
await buyCoin(aShop, algoShop, users[9], [55000, 1])
await buyCoin(aShop, algoShop, users[8], [55000, 1])


await sellCoin(aShop, algoShop, users[1], 1)
await sellCoin(aShop, algoShop, users[2],1)
await reachLib.waitUntilSecs(await getDeadline(aShop, algoShop, users[0]), console.log("waiting"))
console.log(await getDeadline(aShop, algoShop, users[0]))
await sellCoin(aShop, algoShop, users[3], 1)
await sellCoin(aShop, algoShop, users[4], 1)
await rebaseCoin(aShop, algoShop, users[4])