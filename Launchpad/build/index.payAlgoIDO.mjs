// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  
  const Viewer_read = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1751, v1752, v1753, v1755, v1756, v1759, v1762, v1772, v1776, v1777, v1800, v1804] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1843, v2163, v2164, v2165, v2166, v2167, v2168, v2175, v2176] = svs;
      return (await ((async () => {
        
        const v2186 = [v1751, v1752, v1759, v1804, v1755, v1756, v2163, v1753, true];
        
        return v2186;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
      const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v2559, v2562, v2569, v2570] = svs;
      return (await ((async () => {
        
        const v2577 = [v1751, v1752, v1759, v1804, v1755, v1756, v2559, v1753, false];
        
        return v2577;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1831, v1832, v1834, v1835, v1842, v1843] = svs;
      return (await ((async () => {
        
        const v1846 = [v1751, v1752, v1759, v1804, v1835, v1834, v1831, v1753, v1832];
        
        return v1846;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Viewer: {
        read: {
          decode: Viewer_read,
          dom: [],
          rng: ctc6
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2, ctc0, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc3, ctc3, ctc5, ctc2],
      8: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc2, ctc3, ctc5, ctc2],
      9: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function _AdminAPI_claimFees5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_claimFees5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_claimFees5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_1008: ctc8,
    OffererAPI_claim0_1008: ctc8,
    User_claimToken0_1008: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1843, v2163, v2164, v2165, v2166, v2167, v2168, v2175, v2176] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1]);
  const v2212 = ctc.selfAddress();
  const v2214 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:535:12:application call to [unknown function] (defined at: ./index.rsh:535:12:function exp)', 'at ./index.rsh:492:23:application call to "runAdminAPI_claimFees0_1008" (defined at: ./index.rsh:534:11:function exp)', 'at ./index.rsh:492:23:application call to [unknown function] (defined at: ./index.rsh:492:23:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
    msg: 'in',
    who: 'AdminAPI_claimFees'
    });
  const v2216 = stdlib.addressEq(v2212, v1777);
  stdlib.assert(v2216, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:536:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:535:12:application call to [unknown function] (defined at: ./index.rsh:535:12:function exp)', 'at ./index.rsh:535:12:application call to [unknown function] (defined at: ./index.rsh:535:12:function exp)', 'at ./index.rsh:492:23:application call to "runAdminAPI_claimFees0_1008" (defined at: ./index.rsh:534:11:function exp)', 'at ./index.rsh:492:23:application call to [unknown function] (defined at: ./index.rsh:492:23:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
    msg: null,
    who: 'AdminAPI_claimFees'
    });
  const v2218 = v2175[stdlib.checkedBigNumberify('./index.rsh:537:25:application', stdlib.UInt_max, '0')];
  const v2219 = v2218[stdlib.checkedBigNumberify('./index.rsh:537:25:application', stdlib.UInt_max, '0')];
  const v2220 = stdlib.ge(v2219, v2165);
  stdlib.assert(v2220, {
    at: './index.rsh:537:17:application',
    fs: ['at ./index.rsh:535:12:application call to [unknown function] (defined at: ./index.rsh:535:12:function exp)', 'at ./index.rsh:535:12:application call to [unknown function] (defined at: ./index.rsh:535:12:function exp)', 'at ./index.rsh:492:23:application call to "runAdminAPI_claimFees0_1008" (defined at: ./index.rsh:534:11:function exp)', 'at ./index.rsh:492:23:application call to [unknown function] (defined at: ./index.rsh:492:23:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
    msg: null,
    who: 'AdminAPI_claimFees'
    });
  const v2223 = ['AdminAPI_claimFees0_1008', v2214];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1843, v2163, v2164, v2165, v2166, v2167, v2168, v2175, v2176, v2223],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:539:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2238], secs: v2240, time: v2239, didSend: v1227, from: v2237 } = txn1;
      
      switch (v2238[0]) {
        case 'AdminAPI_claimFees0_1008': {
          const v2241 = v2238[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_claimFees"
            });
          ;
          const v2260 = v2175[stdlib.checkedBigNumberify('./index.rsh:542:26:application', stdlib.UInt_max, '0')];
          const v2261 = v2260[stdlib.checkedBigNumberify('./index.rsh:542:26:application', stdlib.UInt_max, '0')];
          const v2268 = stdlib.sub(v2261, v2165);
          const v2272 = stdlib.Array_set(v2260, '0', v2268);
          const v2273 = stdlib.Array_set(v2175, stdlib.checkedBigNumberify('./index.rsh:543:65:application', stdlib.UInt_max, '0'), v2272);
          sim_r.txns.push({
            kind: 'from',
            to: v2237,
            tok: v1752
            });
          const v2274 = true;
          const v2275 = await txn1.getOutput('AdminAPI_claimFees', 'v2274', ctc5, v2274);
          
          const v4296 = v2163;
          const v4297 = v2164;
          const v4298 = stdlib.checkedBigNumberify('./index.rsh:549:13:decimal', stdlib.UInt_max, '0');
          const v4299 = v2166;
          const v4300 = false;
          const v4301 = v2168;
          const v4303 = v2273;
          const v4304 = v2176;
          const v4305 = v2168 ? true : v2166;
          if (v4305) {
            sim_r.isHalt = false;
            }
          else {
            const v4307 = v2273[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            const v4308 = v4307[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: v1752
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1752
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'OffererAPI_claim0_1008': {
          const v2337 = v2238[1];
          
          break;
          }
        case 'User_claimToken0_1008': {
          const v2433 = v2238[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2238], secs: v2240, time: v2239, didSend: v1227, from: v2237 } = txn1;
  switch (v2238[0]) {
    case 'AdminAPI_claimFees0_1008': {
      const v2241 = v2238[1];
      undefined /* setApiDetails */;
      ;
      const v2258 = stdlib.addressEq(v2237, v1777);
      stdlib.assert(v2258, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:541:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:540:13:application call to [unknown function] (defined at: ./index.rsh:540:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
        msg: null,
        who: 'AdminAPI_claimFees'
        });
      const v2260 = v2175[stdlib.checkedBigNumberify('./index.rsh:542:26:application', stdlib.UInt_max, '0')];
      const v2261 = v2260[stdlib.checkedBigNumberify('./index.rsh:542:26:application', stdlib.UInt_max, '0')];
      const v2262 = stdlib.ge(v2261, v2165);
      stdlib.assert(v2262, {
        at: './index.rsh:542:18:application',
        fs: ['at ./index.rsh:540:13:application call to [unknown function] (defined at: ./index.rsh:540:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
        msg: null,
        who: 'AdminAPI_claimFees'
        });
      const v2268 = stdlib.sub(v2261, v2165);
      const v2269 = stdlib.ge(v2268, stdlib.checkedBigNumberify('./index.rsh:543:65:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2269, {
        at: './index.rsh:543:65:application',
        fs: ['at ./index.rsh:540:13:application call to [unknown function] (defined at: ./index.rsh:540:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
        msg: 'assume >= 0',
        who: 'AdminAPI_claimFees'
        });
      const v2272 = stdlib.Array_set(v2260, '0', v2268);
      const v2273 = stdlib.Array_set(v2175, stdlib.checkedBigNumberify('./index.rsh:543:65:application', stdlib.UInt_max, '0'), v2272);
      ;
      const v2274 = true;
      const v2275 = await txn1.getOutput('AdminAPI_claimFees', 'v2274', ctc5, v2274);
      if (v1227) {
        stdlib.protect(ctc0, await interact.out(v2241, v2275), {
          at: './index.rsh:534:12:application',
          fs: ['at ./index.rsh:534:12:application call to [unknown function] (defined at: ./index.rsh:534:12:function exp)', 'at ./index.rsh:544:12:application call to "k" (defined at: ./index.rsh:540:13:function exp)', 'at ./index.rsh:540:13:application call to [unknown function] (defined at: ./index.rsh:540:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
          msg: 'out',
          who: 'AdminAPI_claimFees'
          });
        }
      else {
        }
      
      const v4296 = v2163;
      const v4297 = v2164;
      const v4298 = stdlib.checkedBigNumberify('./index.rsh:549:13:decimal', stdlib.UInt_max, '0');
      const v4299 = v2166;
      const v4300 = false;
      const v4301 = v2168;
      const v4303 = v2273;
      const v4304 = v2176;
      const v4305 = v2168 ? true : v2166;
      if (v4305) {
        return;
        }
      else {
        const v4307 = v2273[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
        const v4308 = v4307[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
        const v4309 = stdlib.sub(v2176, v2176);
        const v4310 = stdlib.ge(v4309, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4310, {
          at: './index.rsh:667:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'AdminAPI_claimFees'
          });
        ;
        const v4311 = stdlib.sub(v4308, v4308);
        const v4312 = stdlib.ge(v4311, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4312, {
          at: './index.rsh:667:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'AdminAPI_claimFees'
          });
        ;
        return;
        }
      break;
      }
    case 'OffererAPI_claim0_1008': {
      const v2337 = v2238[1];
      return;
      break;
      }
    case 'User_claimToken0_1008': {
      const v2433 = v2238[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AdminAPI_claimFees8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_claimFees8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_claimFees8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_1368: ctc8,
    OffererAPI_claim0_1368: ctc8,
    User_claimBackOffer0_1368: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v2559, v2562, v2569, v2570] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1]);
  const v2597 = ctc.selfAddress();
  const v2599 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:594:14:application call to [unknown function] (defined at: ./index.rsh:594:14:function exp)', 'at ./index.rsh:558:38:application call to "runAdminAPI_claimFees0_1368" (defined at: ./index.rsh:593:13:function exp)', 'at ./index.rsh:558:38:application call to [unknown function] (defined at: ./index.rsh:558:38:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
    msg: 'in',
    who: 'AdminAPI_claimFees'
    });
  const v2600 = stdlib.addressEq(v2597, v1777);
  stdlib.assert(v2600, {
    at: './index.rsh:594:23:application',
    fs: ['at ./index.rsh:594:14:application call to [unknown function] (defined at: ./index.rsh:594:14:function exp)', 'at ./index.rsh:594:14:application call to [unknown function] (defined at: ./index.rsh:594:14:function exp)', 'at ./index.rsh:558:38:application call to "runAdminAPI_claimFees0_1368" (defined at: ./index.rsh:593:13:function exp)', 'at ./index.rsh:558:38:application call to [unknown function] (defined at: ./index.rsh:558:38:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
    msg: null,
    who: 'AdminAPI_claimFees'
    });
  const v2603 = ['AdminAPI_claimFees0_1368', v2599];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v2559, v2562, v2569, v2570, v2603],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:595:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1515, from: v2617 } = txn1;
      
      switch (v2618[0]) {
        case 'AdminAPI_claimFees0_1368': {
          const v2621 = v2618[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_claimFees"
            });
          ;
          const v2639 = true;
          const v2640 = await txn1.getOutput('AdminAPI_claimFees', 'v2639', ctc5, v2639);
          
          const v4347 = v2559;
          const v4349 = v2562;
          const v4351 = v2569;
          const v4352 = v2570;
          sim_r.isHalt = false;
          
          break;
          }
        case 'OffererAPI_claim0_1368': {
          const v2702 = v2618[1];
          
          break;
          }
        case 'User_claimBackOffer0_1368': {
          const v2783 = v2618[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2618], secs: v2620, time: v2619, didSend: v1515, from: v2617 } = txn1;
  switch (v2618[0]) {
    case 'AdminAPI_claimFees0_1368': {
      const v2621 = v2618[1];
      undefined /* setApiDetails */;
      ;
      const v2638 = stdlib.addressEq(v2617, v1777);
      stdlib.assert(v2638, {
        at: './index.rsh:597:20:application',
        fs: ['at ./index.rsh:596:15:application call to [unknown function] (defined at: ./index.rsh:596:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
        msg: null,
        who: 'AdminAPI_claimFees'
        });
      const v2639 = true;
      const v2640 = await txn1.getOutput('AdminAPI_claimFees', 'v2639', ctc5, v2639);
      if (v1515) {
        stdlib.protect(ctc0, await interact.out(v2621, v2640), {
          at: './index.rsh:593:14:application',
          fs: ['at ./index.rsh:593:14:application call to [unknown function] (defined at: ./index.rsh:593:14:function exp)', 'at ./index.rsh:598:14:application call to "k" (defined at: ./index.rsh:596:15:function exp)', 'at ./index.rsh:596:15:application call to [unknown function] (defined at: ./index.rsh:596:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
          msg: 'out',
          who: 'AdminAPI_claimFees'
          });
        }
      else {
        }
      
      const v4347 = v2559;
      const v4349 = v2562;
      const v4351 = v2569;
      const v4352 = v2570;
      return;
      
      break;
      }
    case 'OffererAPI_claim0_1368': {
      const v2702 = v2618[1];
      return;
      break;
      }
    case 'User_claimBackOffer0_1368': {
      const v2783 = v2618[1];
      return;
      break;
      }
    }
  
  
  };
export async function _OffererAPI_cancelOrder9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _OffererAPI_cancelOrder9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _OffererAPI_cancelOrder9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    OffererAPI_cancelOrder0_788: ctc8,
    User_endRound0_788: ctc8,
    User_offer0_788: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1831, v1832, v1834, v1835, v1842, v1843] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v1861 = ctc.selfAddress();
  const v1863 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:638:12:application call to [unknown function] (defined at: ./index.rsh:638:12:function exp)', 'at ./index.rsh:611:37:application call to "runOffererAPI_cancelOrder0_788" (defined at: ./index.rsh:637:11:function exp)', 'at ./index.rsh:611:37:application call to [unknown function] (defined at: ./index.rsh:611:37:function exp)'],
    msg: 'in',
    who: 'OffererAPI_cancelOrder'
    });
  const v1864 = stdlib.addressEq(v1861, v1751);
  const v1865 = v1832 ? false : true;
  const v1866 = v1864 ? v1865 : false;
  stdlib.assert(v1866, {
    at: './index.rsh:638:21:application',
    fs: ['at ./index.rsh:638:12:application call to [unknown function] (defined at: ./index.rsh:638:12:function exp)', 'at ./index.rsh:638:12:application call to [unknown function] (defined at: ./index.rsh:638:12:function exp)', 'at ./index.rsh:611:37:application call to "runOffererAPI_cancelOrder0_788" (defined at: ./index.rsh:637:11:function exp)', 'at ./index.rsh:611:37:application call to [unknown function] (defined at: ./index.rsh:611:37:function exp)'],
    msg: null,
    who: 'OffererAPI_cancelOrder'
    });
  const v1869 = ['OffererAPI_cancelOrder0_788', v1863];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1831, v1832, v1834, v1835, v1842, v1843, v1869],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:639:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1893], secs: v1895, time: v1894, didSend: v919, from: v1892 } = txn1;
      
      switch (v1893[0]) {
        case 'OffererAPI_cancelOrder0_788': {
          const v1896 = v1893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "OffererAPI_cancelOrder"
            });
          ;
          const v1924 = true;
          const v1925 = await txn1.getOutput('OffererAPI_cancelOrder', 'v1924', ctc5, v1924);
          
          const v4390 = v1843;
          if (v1832) {
            const v4391 = v1842[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
            const v4392 = v4391[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
            const v4393 = stdlib.safeSub(v4392, v1753);
            const v4500 = v1843;
            const v4501 = v1753;
            const v4502 = v4393;
            const v4503 = true;
            const v4504 = true;
            const v4505 = true;
            const v4507 = v1842;
            const v4508 = v1843;
            sim_r.isHalt = false;
            }
          else {
            const v4517 = v1843;
            const v4519 = false;
            const v4521 = v1842;
            const v4522 = v1843;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'User_endRound0_788': {
          const v1983 = v1893[1];
          
          break;
          }
        case 'User_offer0_788': {
          const v2070 = v1893[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1893], secs: v1895, time: v1894, didSend: v919, from: v1892 } = txn1;
  switch (v1893[0]) {
    case 'OffererAPI_cancelOrder0_788': {
      const v1896 = v1893[1];
      undefined /* setApiDetails */;
      const v1916 = stdlib.le(v1843, stdlib.UInt_max);
      stdlib.assert(v1916, {
        at: './index.rsh:611:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'OffererAPI_cancelOrder'
        });
      ;
      const v1919 = stdlib.addressEq(v1892, v1751);
      const v1920 = v1832 ? false : true;
      const v1921 = v1919 ? v1920 : false;
      stdlib.assert(v1921, {
        at: './index.rsh:641:18:application',
        fs: ['at ./index.rsh:640:13:application call to [unknown function] (defined at: ./index.rsh:640:13:function exp)'],
        msg: null,
        who: 'OffererAPI_cancelOrder'
        });
      const v1923 = stdlib.lt(v1895, v1804);
      stdlib.assert(v1923, {
        at: './index.rsh:642:18:application',
        fs: ['at ./index.rsh:640:13:application call to [unknown function] (defined at: ./index.rsh:640:13:function exp)'],
        msg: 'it\'s too late to cancel',
        who: 'OffererAPI_cancelOrder'
        });
      const v1924 = true;
      const v1925 = await txn1.getOutput('OffererAPI_cancelOrder', 'v1924', ctc5, v1924);
      if (v919) {
        stdlib.protect(ctc0, await interact.out(v1896, v1925), {
          at: './index.rsh:637:12:application',
          fs: ['at ./index.rsh:637:12:application call to [unknown function] (defined at: ./index.rsh:637:12:function exp)', 'at ./index.rsh:643:12:application call to "k" (defined at: ./index.rsh:640:13:function exp)', 'at ./index.rsh:640:13:application call to [unknown function] (defined at: ./index.rsh:640:13:function exp)'],
          msg: 'out',
          who: 'OffererAPI_cancelOrder'
          });
        }
      else {
        }
      
      const v4390 = v1843;
      if (v1832) {
        const v4391 = v1842[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
        const v4392 = v4391[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
        const v4393 = stdlib.safeSub(v4392, v1753);
        const v4500 = v1843;
        const v4501 = v1753;
        const v4502 = v4393;
        const v4503 = true;
        const v4504 = true;
        const v4505 = true;
        const v4507 = v1842;
        const v4508 = v1843;
        return;
        }
      else {
        const v4517 = v1843;
        const v4519 = false;
        const v4521 = v1842;
        const v4522 = v1843;
        return;
        }
      break;
      }
    case 'User_endRound0_788': {
      const v1983 = v1893[1];
      return;
      break;
      }
    case 'User_offer0_788': {
      const v2070 = v1893[1];
      return;
      break;
      }
    }
  
  
  };
export async function _OffererAPI_claim5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _OffererAPI_claim5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _OffererAPI_claim5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_1008: ctc8,
    OffererAPI_claim0_1008: ctc8,
    User_claimToken0_1008: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1843, v2163, v2164, v2165, v2166, v2167, v2168, v2175, v2176] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1]);
  const v2198 = ctc.selfAddress();
  const v2200 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:516:12:application call to [unknown function] (defined at: ./index.rsh:516:12:function exp)', 'at ./index.rsh:492:23:application call to "runOffererAPI_claim0_1008" (defined at: ./index.rsh:515:11:function exp)', 'at ./index.rsh:492:23:application call to [unknown function] (defined at: ./index.rsh:492:23:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
    msg: 'in',
    who: 'OffererAPI_claim'
    });
  const v2202 = stdlib.addressEq(v2198, v1751);
  stdlib.assert(v2202, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:517:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:516:12:application call to [unknown function] (defined at: ./index.rsh:516:12:function exp)', 'at ./index.rsh:516:12:application call to [unknown function] (defined at: ./index.rsh:516:12:function exp)', 'at ./index.rsh:492:23:application call to "runOffererAPI_claim0_1008" (defined at: ./index.rsh:515:11:function exp)', 'at ./index.rsh:492:23:application call to [unknown function] (defined at: ./index.rsh:492:23:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
    msg: 'You are not the Token Offerer!',
    who: 'OffererAPI_claim'
    });
  const v2205 = stdlib.ge(v2176, v2163);
  const v2207 = v2205 ? v2166 : false;
  stdlib.assert(v2207, {
    at: './index.rsh:518:17:application',
    fs: ['at ./index.rsh:516:12:application call to [unknown function] (defined at: ./index.rsh:516:12:function exp)', 'at ./index.rsh:516:12:application call to [unknown function] (defined at: ./index.rsh:516:12:function exp)', 'at ./index.rsh:492:23:application call to "runOffererAPI_claim0_1008" (defined at: ./index.rsh:515:11:function exp)', 'at ./index.rsh:492:23:application call to [unknown function] (defined at: ./index.rsh:492:23:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
    msg: null,
    who: 'OffererAPI_claim'
    });
  const v2210 = ['OffererAPI_claim0_1008', v2200];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1843, v2163, v2164, v2165, v2166, v2167, v2168, v2175, v2176, v2210],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:520:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2238], secs: v2240, time: v2239, didSend: v1227, from: v2237 } = txn1;
      
      switch (v2238[0]) {
        case 'AdminAPI_claimFees0_1008': {
          const v2241 = v2238[1];
          
          break;
          }
        case 'OffererAPI_claim0_1008': {
          const v2337 = v2238[1];
          sim_r.txns.push({
            kind: 'api',
            who: "OffererAPI_claim"
            });
          ;
          const v2387 = stdlib.sub(v2176, v2163);
          sim_r.txns.push({
            kind: 'from',
            to: v2237,
            tok: undefined /* Nothing */
            });
          const v2390 = true;
          const v2391 = await txn1.getOutput('OffererAPI_claim', 'v2390', ctc5, v2390);
          
          const v4984 = stdlib.checkedBigNumberify('./index.rsh:527:13:decimal', stdlib.UInt_max, '0');
          const v4985 = v2164;
          const v4986 = v2165;
          const v4987 = false;
          const v4988 = v2167;
          const v4989 = v2168;
          const v4991 = v2175;
          const v4992 = v2387;
          const v4994 = v2168 ? true : v2167;
          if (v4994) {
            sim_r.isHalt = false;
            }
          else {
            const v4995 = v2175[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            const v4996 = v4995[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: v1752
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1752
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_claimToken0_1008': {
          const v2433 = v2238[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2238], secs: v2240, time: v2239, didSend: v1227, from: v2237 } = txn1;
  switch (v2238[0]) {
    case 'AdminAPI_claimFees0_1008': {
      const v2241 = v2238[1];
      return;
      break;
      }
    case 'OffererAPI_claim0_1008': {
      const v2337 = v2238[1];
      undefined /* setApiDetails */;
      ;
      const v2378 = stdlib.addressEq(v2237, v1751);
      stdlib.assert(v2378, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:522:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:521:13:application call to [unknown function] (defined at: ./index.rsh:521:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
        msg: 'You are not the Token Offerer!',
        who: 'OffererAPI_claim'
        });
      const v2381 = stdlib.ge(v2176, v2163);
      const v2383 = v2381 ? v2166 : false;
      stdlib.assert(v2383, {
        at: './index.rsh:523:18:application',
        fs: ['at ./index.rsh:521:13:application call to [unknown function] (defined at: ./index.rsh:521:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
        msg: null,
        who: 'OffererAPI_claim'
        });
      const v2387 = stdlib.sub(v2176, v2163);
      const v2388 = stdlib.ge(v2387, stdlib.checkedBigNumberify('./index.rsh:524:35:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2388, {
        at: './index.rsh:524:35:application',
        fs: ['at ./index.rsh:521:13:application call to [unknown function] (defined at: ./index.rsh:521:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
        msg: 'assume >= 0',
        who: 'OffererAPI_claim'
        });
      ;
      const v2390 = true;
      const v2391 = await txn1.getOutput('OffererAPI_claim', 'v2390', ctc5, v2390);
      if (v1227) {
        stdlib.protect(ctc0, await interact.out(v2337, v2391), {
          at: './index.rsh:515:12:application',
          fs: ['at ./index.rsh:515:12:application call to [unknown function] (defined at: ./index.rsh:515:12:function exp)', 'at ./index.rsh:525:12:application call to "k" (defined at: ./index.rsh:521:13:function exp)', 'at ./index.rsh:521:13:application call to [unknown function] (defined at: ./index.rsh:521:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
          msg: 'out',
          who: 'OffererAPI_claim'
          });
        }
      else {
        }
      
      const v4984 = stdlib.checkedBigNumberify('./index.rsh:527:13:decimal', stdlib.UInt_max, '0');
      const v4985 = v2164;
      const v4986 = v2165;
      const v4987 = false;
      const v4988 = v2167;
      const v4989 = v2168;
      const v4991 = v2175;
      const v4992 = v2387;
      const v4994 = v2168 ? true : v2167;
      if (v4994) {
        return;
        }
      else {
        const v4995 = v2175[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
        const v4996 = v4995[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
        const v4997 = stdlib.sub(v2387, v2387);
        const v4998 = stdlib.ge(v4997, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4998, {
          at: './index.rsh:667:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'OffererAPI_claim'
          });
        ;
        const v4999 = stdlib.sub(v4996, v4996);
        const v5000 = stdlib.ge(v4999, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5000, {
          at: './index.rsh:667:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'OffererAPI_claim'
          });
        ;
        return;
        }
      break;
      }
    case 'User_claimToken0_1008': {
      const v2433 = v2238[1];
      return;
      break;
      }
    }
  
  
  };
export async function _OffererAPI_claim8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _OffererAPI_claim8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _OffererAPI_claim8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_1368: ctc8,
    OffererAPI_claim0_1368: ctc8,
    User_claimBackOffer0_1368: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v2559, v2562, v2569, v2570] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1]);
  const v2589 = ctc.selfAddress();
  const v2591 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:580:14:application call to [unknown function] (defined at: ./index.rsh:580:14:function exp)', 'at ./index.rsh:558:38:application call to "runOffererAPI_claim0_1368" (defined at: ./index.rsh:579:13:function exp)', 'at ./index.rsh:558:38:application call to [unknown function] (defined at: ./index.rsh:558:38:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
    msg: 'in',
    who: 'OffererAPI_claim'
    });
  const v2592 = stdlib.addressEq(v2589, v1751);
  stdlib.assert(v2592, {
    at: './index.rsh:580:23:application',
    fs: ['at ./index.rsh:580:14:application call to [unknown function] (defined at: ./index.rsh:580:14:function exp)', 'at ./index.rsh:580:14:application call to [unknown function] (defined at: ./index.rsh:580:14:function exp)', 'at ./index.rsh:558:38:application call to "runOffererAPI_claim0_1368" (defined at: ./index.rsh:579:13:function exp)', 'at ./index.rsh:558:38:application call to [unknown function] (defined at: ./index.rsh:558:38:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
    msg: null,
    who: 'OffererAPI_claim'
    });
  const v2595 = ['OffererAPI_claim0_1368', v2591];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v2559, v2562, v2569, v2570, v2595],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:581:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1515, from: v2617 } = txn1;
      
      switch (v2618[0]) {
        case 'AdminAPI_claimFees0_1368': {
          const v2621 = v2618[1];
          
          break;
          }
        case 'OffererAPI_claim0_1368': {
          const v2702 = v2618[1];
          sim_r.txns.push({
            kind: 'api',
            who: "OffererAPI_claim"
            });
          ;
          const v2729 = v2569[stdlib.checkedBigNumberify('./index.rsh:584:31:application', stdlib.UInt_max, '0')];
          const v2730 = v2729[stdlib.checkedBigNumberify('./index.rsh:584:31:application', stdlib.UInt_max, '0')];
          const v2736 = stdlib.sub(v2730, v2730);
          const v2740 = stdlib.Array_set(v2729, '0', v2736);
          const v2741 = stdlib.Array_set(v2569, stdlib.checkedBigNumberify('./index.rsh:584:65:application', stdlib.UInt_max, '0'), v2740);
          sim_r.txns.push({
            kind: 'from',
            to: v2617,
            tok: v1752
            });
          const v2742 = true;
          const v2743 = await txn1.getOutput('OffererAPI_claim', 'v2742', ctc5, v2742);
          
          const v2748 = stdlib.eq(v2559, stdlib.checkedBigNumberify('./index.rsh:587:37:decimal', stdlib.UInt_max, '0'));
          const v5030 = v2559;
          const v5032 = true;
          const v5034 = v2741;
          const v5035 = v2570;
          if (v2748) {
            const v5036 = v2741[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            const v5037 = v5036[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: v1752
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1752
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'User_claimBackOffer0_1368': {
          const v2783 = v2618[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2618], secs: v2620, time: v2619, didSend: v1515, from: v2617 } = txn1;
  switch (v2618[0]) {
    case 'AdminAPI_claimFees0_1368': {
      const v2621 = v2618[1];
      return;
      break;
      }
    case 'OffererAPI_claim0_1368': {
      const v2702 = v2618[1];
      undefined /* setApiDetails */;
      ;
      const v2728 = stdlib.addressEq(v2617, v1751);
      stdlib.assert(v2728, {
        at: './index.rsh:583:20:application',
        fs: ['at ./index.rsh:582:15:application call to [unknown function] (defined at: ./index.rsh:582:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
        msg: null,
        who: 'OffererAPI_claim'
        });
      const v2729 = v2569[stdlib.checkedBigNumberify('./index.rsh:584:31:application', stdlib.UInt_max, '0')];
      const v2730 = v2729[stdlib.checkedBigNumberify('./index.rsh:584:31:application', stdlib.UInt_max, '0')];
      const v2736 = stdlib.sub(v2730, v2730);
      const v2737 = stdlib.ge(v2736, stdlib.checkedBigNumberify('./index.rsh:584:65:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2737, {
        at: './index.rsh:584:65:application',
        fs: ['at ./index.rsh:582:15:application call to [unknown function] (defined at: ./index.rsh:582:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
        msg: 'assume >= 0',
        who: 'OffererAPI_claim'
        });
      const v2740 = stdlib.Array_set(v2729, '0', v2736);
      const v2741 = stdlib.Array_set(v2569, stdlib.checkedBigNumberify('./index.rsh:584:65:application', stdlib.UInt_max, '0'), v2740);
      ;
      const v2742 = true;
      const v2743 = await txn1.getOutput('OffererAPI_claim', 'v2742', ctc5, v2742);
      if (v1515) {
        stdlib.protect(ctc0, await interact.out(v2702, v2743), {
          at: './index.rsh:579:14:application',
          fs: ['at ./index.rsh:579:14:application call to [unknown function] (defined at: ./index.rsh:579:14:function exp)', 'at ./index.rsh:585:14:application call to "k" (defined at: ./index.rsh:582:15:function exp)', 'at ./index.rsh:582:15:application call to [unknown function] (defined at: ./index.rsh:582:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
          msg: 'out',
          who: 'OffererAPI_claim'
          });
        }
      else {
        }
      
      const v2748 = stdlib.eq(v2559, stdlib.checkedBigNumberify('./index.rsh:587:37:decimal', stdlib.UInt_max, '0'));
      const v5030 = v2559;
      const v5032 = true;
      const v5034 = v2741;
      const v5035 = v2570;
      if (v2748) {
        const v5036 = v2741[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
        const v5037 = v5036[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
        const v5038 = stdlib.sub(v2570, v2570);
        const v5039 = stdlib.ge(v5038, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5039, {
          at: './index.rsh:667:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'OffererAPI_claim'
          });
        ;
        const v5040 = stdlib.sub(v5037, v5037);
        const v5041 = stdlib.ge(v5040, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5041, {
          at: './index.rsh:667:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'OffererAPI_claim'
          });
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'User_claimBackOffer0_1368': {
      const v2783 = v2618[1];
      return;
      break;
      }
    }
  
  
  };
export async function TokenOfferer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for TokenOfferer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for TokenOfferer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    amountOffered: ctc1,
    deadline: ctc1,
    managerContract: ctc3,
    maxReceived: ctc1,
    minReceived: ctc1,
    tokenOffered: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    OffererAPI_cancelOrder0_788: ctc9,
    User_endRound0_788: ctc9,
    User_offer0_788: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Data({
    AdminAPI_claimFees0_1008: ctc9,
    OffererAPI_claim0_1008: ctc9,
    User_claimToken0_1008: ctc9
    });
  const ctc14 = stdlib.T_Data({
    AdminAPI_claimFees0_1368: ctc9,
    OffererAPI_claim0_1368: ctc9,
    User_claimBackOffer0_1368: ctc9
    });
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc12]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v1729 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1730 = [v1729];
  const v1736 = stdlib.protect(ctc5, await interact.setParam(), {
    at: './index.rsh:426:37:application',
    fs: ['at ./index.rsh:418:20:application call to [unknown function] (defined at: ./index.rsh:418:24:function exp)'],
    msg: 'setParam',
    who: 'TokenOfferer'
    });
  const v1737 = v1736.amountOffered;
  const v1738 = v1736.deadline;
  const v1739 = v1736.managerContract;
  const v1740 = v1736.maxReceived;
  const v1741 = v1736.minReceived;
  const v1742 = v1736.tokenOffered;
  const v1749 = stdlib.gt(v1737, stdlib.checkedBigNumberify('./index.rsh:429:29:decimal', stdlib.UInt_max, '1000000'));
  stdlib.assert(v1749, {
    at: './index.rsh:429:11:application',
    fs: ['at ./index.rsh:418:20:application call to [unknown function] (defined at: ./index.rsh:418:24:function exp)'],
    msg: null,
    who: 'TokenOfferer'
    });
  const v1750 = stdlib.lt(v1737, stdlib.UInt_max);
  stdlib.assert(v1750, {
    at: './index.rsh:430:11:application',
    fs: ['at ./index.rsh:418:20:application call to [unknown function] (defined at: ./index.rsh:418:24:function exp)'],
    msg: null,
    who: 'TokenOfferer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1742, v1737, v1738, v1741, v1740, v1739],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:433:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:433:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1752, v1753, v1754, v1755, v1756, v1757], secs: v1759, time: v1758, didSend: v704, from: v1751 } = txn1;
      
      const v1760 = v1730[stdlib.checkedBigNumberify('./index.rsh:433:16:dot', stdlib.UInt_max, '0')];
      const v1761 = stdlib.Array_set(v1760, '0', stdlib.checkedBigNumberify('./index.rsh:433:16:dot', stdlib.UInt_max, '0'));
      const v1762 = stdlib.Array_set(v1730, stdlib.checkedBigNumberify('./index.rsh:433:16:dot', stdlib.UInt_max, '0'), v1761);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1752
        });
      ;
      const v1768 = [];
      const v1769 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v1757,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('./index.rsh:445:64:decimal', stdlib.UInt_max, '1'),
            pays: stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc7.defaultValue /* simReturnVal */];})();
      const v1770 = await txn1.getOutput('internal', 'v1769', ctc8, v1769);
      const v1772 = v1770[stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '0')];
      const v1773 = v1770[stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '1')];
      const v1774 = v1773[stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '0')];
      const v1776 = v1773[stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '2')];
      const v1777 = v1773[stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '3')];
      const v1790 = stdlib.gt(v1774, stdlib.checkedBigNumberify('./index.rsh:453:13:decimal', stdlib.UInt_max, '0'));
      const v1793 = stdlib.muldiv(v1753, v1774, stdlib.checkedBigNumberify('./index.rsh:456:39:decimal', stdlib.UInt_max, '10000'));
      const v1789 = v1790 ? v1793 : stdlib.checkedBigNumberify('./index.rsh:459:14:decimal', stdlib.UInt_max, '0');
      const v1800 = stdlib.add(v1753, v1789);
      const v1804 = stdlib.add(v1759, v1754);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v1752, v1753, v1754, v1755, v1756, v1757], secs: v1759, time: v1758, didSend: v704, from: v1751 } = txn1;
  const v1760 = v1730[stdlib.checkedBigNumberify('./index.rsh:433:16:dot', stdlib.UInt_max, '0')];
  const v1761 = stdlib.Array_set(v1760, '0', stdlib.checkedBigNumberify('./index.rsh:433:16:dot', stdlib.UInt_max, '0'));
  const v1762 = stdlib.Array_set(v1730, stdlib.checkedBigNumberify('./index.rsh:433:16:dot', stdlib.UInt_max, '0'), v1761);
  ;
  ;
  const v1764 = stdlib.ge(v1753, stdlib.checkedBigNumberify('./index.rsh:441:28:decimal', stdlib.UInt_max, '1000000'));
  stdlib.assert(v1764, {
    at: './index.rsh:441:10:application',
    fs: [],
    msg: null,
    who: 'TokenOfferer'
    });
  const v1765 = stdlib.lt(v1753, stdlib.UInt_max);
  stdlib.assert(v1765, {
    at: './index.rsh:442:10:application',
    fs: [],
    msg: null,
    who: 'TokenOfferer'
    });
  const v1768 = [];
  const v1769 = undefined /* Remote */;
  const v1770 = await txn1.getOutput('internal', 'v1769', ctc8, v1769);
  const v1772 = v1770[stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '0')];
  const v1773 = v1770[stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '1')];
  const v1774 = v1773[stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '0')];
  const v1776 = v1773[stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '2')];
  const v1777 = v1773[stdlib.checkedBigNumberify('./index.rsh:445:68:application', stdlib.UInt_max, '3')];
  const v1782 = stdlib.le(v1772, stdlib.UInt_max);
  stdlib.assert(v1782, {
    at: './index.rsh:445:68:application',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'TokenOfferer'
    });
  const v1784 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1772);
  stdlib.assert(v1784, {
    at: './index.rsh:445:68:application',
    fs: [],
    msg: 'remote bill check',
    who: 'TokenOfferer'
    });
  const v1788 = stdlib.lt(v1774, stdlib.checkedBigNumberify('./index.rsh:450:20:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v1788, {
    at: './index.rsh:450:10:application',
    fs: [],
    msg: 'There was a problem with this check',
    who: 'TokenOfferer'
    });
  let v1789;
  const v1790 = stdlib.gt(v1774, stdlib.checkedBigNumberify('./index.rsh:453:13:decimal', stdlib.UInt_max, '0'));
  if (v1790) {
    const v1791 = stdlib.le(v1774, stdlib.checkedBigNumberify('./index.rsh:454:20:decimal', stdlib.UInt_max, '10000'));
    stdlib.assert(v1791, {
      at: './index.rsh:454:14:application',
      fs: ['at ./index.rsh:462:28:application call to "adminFee" (defined at: ./index.rsh:452:24:function exp)'],
      msg: null,
      who: 'TokenOfferer'
      });
    const v1793 = stdlib.muldiv(v1753, v1774, stdlib.checkedBigNumberify('./index.rsh:456:39:decimal', stdlib.UInt_max, '10000'));
    v1789 = v1793;
    }
  else {
    v1789 = stdlib.checkedBigNumberify('./index.rsh:459:14:decimal', stdlib.UInt_max, '0');
    }
  const v1796 = stdlib.sub(stdlib.UInt_max, v1789);
  const v1797 = stdlib.le(v1753, v1796);
  stdlib.assert(v1797, {
    at: './index.rsh:463:10:application',
    fs: [],
    msg: 'There was a mistake here',
    who: 'TokenOfferer'
    });
  const v1800 = stdlib.add(v1753, v1789);
  const v1804 = stdlib.add(v1759, v1754);
  const txn2 = await (ctc.sendrecv({
    args: [v1751, v1752, v1753, v1755, v1756, v1759, v1762, v1772, v1776, v1777, v1800, v1804],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1758,
    onlyIf: true,
    out_tys: [],
    pay: [v1776, [[v1800, v1752]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v1807, time: v1806, didSend: v759, from: v1805 } = txn2;
      
      const v1809 = stdlib.add(v1772, v1776);
      sim_r.txns.push({
        amt: v1776,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1812 = v1762[stdlib.checkedBigNumberify('./index.rsh:470:16:dot', stdlib.UInt_max, '0')];
      const v1813 = v1812[stdlib.checkedBigNumberify('./index.rsh:470:16:dot', stdlib.UInt_max, '0')];
      const v1814 = stdlib.add(v1813, v1800);
      const v1818 = stdlib.Array_set(v1812, '0', v1814);
      const v1819 = stdlib.Array_set(v1762, stdlib.checkedBigNumberify('./index.rsh:470:16:dot', stdlib.UInt_max, '0'), v1818);
      sim_r.txns.push({
        amt: v1800,
        kind: 'to',
        tok: v1752
        });
      const v1824 = stdlib.sub(v1809, v1776);
      sim_r.txns.push({
        kind: 'from',
        to: v1777,
        tok: undefined /* Nothing */
        });
      
      const v1831 = stdlib.checkedBigNumberify('./index.rsh:611:45:decimal', stdlib.UInt_max, '0');
      const v1832 = false;
      const v1833 = true;
      const v1834 = v1756;
      const v1835 = v1755;
      const v1836 = v1806;
      const v1842 = v1819;
      const v1843 = v1824;
      
      if (await (async () => {
        
        return v1833;})()) {
        sim_r.isHalt = false;
        }
      else {
        if (v1832) {
          const v2159 = v1842[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
          const v2160 = v2159[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
          const v2161 = stdlib.safeSub(v2160, v1753);
          const v2163 = v1843;
          const v2164 = v1753;
          const v2165 = v2161;
          const v2166 = true;
          const v2167 = true;
          const v2168 = true;
          const v2169 = v1836;
          const v2175 = v1842;
          const v2176 = v1843;
          
          if (await (async () => {
            const v2184 = v2168 ? true : v2166;
            const v2185 = v2184 ? true : v2167;
            
            return v2185;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v2532 = v2175[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            const v2533 = v2532[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: v1752
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1752
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v2559 = v1843;
          const v2560 = true;
          const v2562 = false;
          const v2563 = v1836;
          const v2569 = v1842;
          const v2570 = v1843;
          
          if (await (async () => {
            
            return v2560;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v2867 = v2569[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            const v2868 = v2867[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: v1752
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1752
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc4, ctc1, ctc1, ctc1, ctc1, ctc16, ctc1, ctc1, ctc6, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1807, time: v1806, didSend: v759, from: v1805 } = txn2;
  const v1809 = stdlib.add(v1772, v1776);
  const v1810 = stdlib.le(v1809, stdlib.UInt_max);
  stdlib.assert(v1810, {
    at: './index.rsh:470:16:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'TokenOfferer'
    });
  ;
  const v1812 = v1762[stdlib.checkedBigNumberify('./index.rsh:470:16:dot', stdlib.UInt_max, '0')];
  const v1813 = v1812[stdlib.checkedBigNumberify('./index.rsh:470:16:dot', stdlib.UInt_max, '0')];
  const v1814 = stdlib.add(v1813, v1800);
  const v1815 = stdlib.le(v1814, stdlib.UInt_max);
  stdlib.assert(v1815, {
    at: './index.rsh:470:16:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'TokenOfferer'
    });
  const v1818 = stdlib.Array_set(v1812, '0', v1814);
  const v1819 = stdlib.Array_set(v1762, stdlib.checkedBigNumberify('./index.rsh:470:16:dot', stdlib.UInt_max, '0'), v1818);
  ;
  const v1820 = stdlib.addressEq(v1751, v1805);
  stdlib.assert(v1820, {
    at: './index.rsh:470:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'TokenOfferer'
    });
  const v1824 = stdlib.sub(v1809, v1776);
  const v1825 = stdlib.ge(v1824, stdlib.checkedBigNumberify('./index.rsh:471:22:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1825, {
    at: './index.rsh:471:22:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'TokenOfferer'
    });
  ;
  const v1827 = v1819[stdlib.checkedBigNumberify('./index.rsh:472:39:application', stdlib.UInt_max, '0')];
  const v1828 = v1827[stdlib.checkedBigNumberify('./index.rsh:472:39:application', stdlib.UInt_max, '0')];
  const v1829 = stdlib.eq(v1800, v1828);
  stdlib.assert(v1829, {
    at: './index.rsh:472:10:application',
    fs: [],
    msg: null,
    who: 'TokenOfferer'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:473:30:application',
    fs: ['at ./index.rsh:473:30:application call to [unknown function] (defined at: ./index.rsh:473:30:function exp)', 'at ./index.rsh:473:30:application call to "liftedInteract" (defined at: ./index.rsh:473:30:application)'],
    msg: 'ready',
    who: 'TokenOfferer'
    });
  
  let v1831 = stdlib.checkedBigNumberify('./index.rsh:611:45:decimal', stdlib.UInt_max, '0');
  let v1832 = false;
  let v1833 = true;
  let v1834 = v1756;
  let v1835 = v1755;
  let v1836 = v1806;
  let v1842 = v1819;
  let v1843 = v1824;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v1833;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1893], secs: v1895, time: v1894, didSend: v919, from: v1892 } = txn4;
    switch (v1893[0]) {
      case 'OffererAPI_cancelOrder0_788': {
        const v1896 = v1893[1];
        undefined /* setApiDetails */;
        const v1916 = stdlib.le(v1843, stdlib.UInt_max);
        stdlib.assert(v1916, {
          at: './index.rsh:611:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'TokenOfferer'
          });
        ;
        const v1919 = stdlib.addressEq(v1892, v1751);
        const v1920 = v1832 ? false : true;
        const v1921 = v1919 ? v1920 : false;
        stdlib.assert(v1921, {
          at: './index.rsh:641:18:application',
          fs: ['at ./index.rsh:640:13:application call to [unknown function] (defined at: ./index.rsh:640:13:function exp)'],
          msg: null,
          who: 'TokenOfferer'
          });
        const v1923 = stdlib.lt(v1895, v1804);
        stdlib.assert(v1923, {
          at: './index.rsh:642:18:application',
          fs: ['at ./index.rsh:640:13:application call to [unknown function] (defined at: ./index.rsh:640:13:function exp)'],
          msg: 'it\'s too late to cancel',
          who: 'TokenOfferer'
          });
        const v1924 = true;
        await txn4.getOutput('OffererAPI_cancelOrder', 'v1924', ctc12, v1924);
        const cv1831 = v1831;
        const cv1832 = v1832;
        const cv1833 = false;
        const cv1834 = v1834;
        const cv1835 = v1835;
        const cv1836 = v1894;
        const cv1842 = v1842;
        const cv1843 = v1843;
        
        v1831 = cv1831;
        v1832 = cv1832;
        v1833 = cv1833;
        v1834 = cv1834;
        v1835 = cv1835;
        v1836 = cv1836;
        v1842 = cv1842;
        v1843 = cv1843;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_endRound0_788': {
        const v1983 = v1893[1];
        undefined /* setApiDetails */;
        const v2003 = stdlib.le(v1843, stdlib.UInt_max);
        stdlib.assert(v2003, {
          at: './index.rsh:611:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'TokenOfferer'
          });
        ;
        const v2020 = stdlib.ge(v1895, v1804);
        const v2021 = stdlib.eq(v1831, v1834);
        const v2022 = v2020 ? true : v2021;
        stdlib.assert(v2022, {
          at: './index.rsh:655:18:application',
          fs: ['at ./index.rsh:654:13:application call to [unknown function] (defined at: ./index.rsh:654:13:function exp)'],
          msg: 'it\'s to early to end the round!',
          who: 'TokenOfferer'
          });
        const v2023 = true;
        await txn4.getOutput('User_endRound', 'v2023', ctc12, v2023);
        const cv1831 = v1831;
        const cv1832 = v1832;
        const cv1833 = false;
        const cv1834 = v1834;
        const cv1835 = v1835;
        const cv1836 = v1894;
        const cv1842 = v1842;
        const cv1843 = v1843;
        
        v1831 = cv1831;
        v1832 = cv1832;
        v1833 = cv1833;
        v1834 = cv1834;
        v1835 = cv1835;
        v1836 = cv1836;
        v1842 = cv1842;
        v1843 = cv1843;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_offer0_788': {
        const v2070 = v1893[1];
        undefined /* setApiDetails */;
        const v2083 = v2070[stdlib.checkedBigNumberify('./index.rsh:615:11:spread', stdlib.UInt_max, '0')];
        const v2089 = stdlib.add(v1843, v2083);
        const v2090 = stdlib.le(v2089, stdlib.UInt_max);
        stdlib.assert(v2090, {
          at: './index.rsh:611:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'TokenOfferer'
          });
        ;
        const v2119 = stdlib.gt(v2083, stdlib.checkedBigNumberify('./index.rsh:619:25:decimal', stdlib.UInt_max, '0'));
        let v2120;
        if (v2119) {
          const v2121 = stdlib.safeAdd(v1831, v2083);
          const v2122 = stdlib.le(v2121, v1756);
          v2120 = v2122;
          }
        else {
          v2120 = false;
          }
        stdlib.assert(v2120, {
          at: './index.rsh:619:18:application',
          fs: ['at ./index.rsh:618:18:application call to [unknown function] (defined at: ./index.rsh:618:18:function exp)'],
          msg: null,
          who: 'TokenOfferer'
          });
        const v2124 = stdlib.lt(v1895, v1804);
        stdlib.assert(v2124, {
          at: './index.rsh:620:18:application',
          fs: ['at ./index.rsh:618:18:application call to [unknown function] (defined at: ./index.rsh:618:18:function exp)'],
          msg: 'Deadline has been reached, someone should close the round!',
          who: 'TokenOfferer'
          });
        const v2125 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1892), null);
        const v2126 = {
          None: 0,
          Some: 1
          }[v2125[0]];
        const v2127 = stdlib.eq(v2126, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v2127) {
          const v2129 = stdlib.fromSome(v2125, stdlib.checkedBigNumberify('./index.rsh:622:52:decimal', stdlib.UInt_max, '0'));
          const v2130 = stdlib.safeAdd(v2129, v2083);
          await stdlib.mapSet(map0, v1892, v2130);
          const v2131 = true;
          await txn4.getOutput('User_offer', 'v2131', ctc12, v2131);
          const v2138 = stdlib.safeAdd(v1831, v2083);
          const v2141 = stdlib.add(v1831, v2083);
          const v2142 = stdlib.ge(v2141, v1835);
          const cv1831 = v2138;
          const cv1832 = v2142;
          const cv1833 = true;
          const cv1834 = v1834;
          const cv1835 = v1835;
          const cv1836 = v1894;
          const cv1842 = v1842;
          const cv1843 = v2089;
          
          v1831 = cv1831;
          v1832 = cv1832;
          v1833 = cv1833;
          v1834 = cv1834;
          v1835 = cv1835;
          v1836 = cv1836;
          v1842 = cv1842;
          v1843 = cv1843;
          
          txn3 = txn4;
          continue;}
        else {
          await stdlib.mapSet(map0, v1892, v2083);
          const v2144 = true;
          await txn4.getOutput('User_offer', 'v2144', ctc12, v2144);
          const v2151 = stdlib.safeAdd(v1831, v2083);
          const v2154 = stdlib.add(v1831, v2083);
          const v2155 = stdlib.ge(v2154, v1835);
          const cv1831 = v2151;
          const cv1832 = v2155;
          const cv1833 = true;
          const cv1834 = v1834;
          const cv1835 = v1835;
          const cv1836 = v1894;
          const cv1842 = v1842;
          const cv1843 = v2089;
          
          v1831 = cv1831;
          v1832 = cv1832;
          v1833 = cv1833;
          v1834 = cv1834;
          v1835 = cv1835;
          v1836 = cv1836;
          v1842 = cv1842;
          v1843 = cv1843;
          
          txn3 = txn4;
          continue;}
        break;
        }
      }
    
    }
  if (v1832) {
    const v2159 = v1842[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
    const v2160 = v2159[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
    const v2161 = stdlib.safeSub(v2160, v1753);
    let v2163 = v1843;
    let v2164 = v1753;
    let v2165 = v2161;
    let v2166 = true;
    let v2167 = true;
    let v2168 = true;
    let v2169 = v1836;
    let v2175 = v1842;
    let v2176 = v1843;
    
    let txn4 = txn3;
    while (await (async () => {
      const v2184 = v2168 ? true : v2166;
      const v2185 = v2184 ? true : v2167;
      
      return v2185;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc13],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v2238], secs: v2240, time: v2239, didSend: v1227, from: v2237 } = txn5;
      switch (v2238[0]) {
        case 'AdminAPI_claimFees0_1008': {
          const v2241 = v2238[1];
          undefined /* setApiDetails */;
          ;
          const v2258 = stdlib.addressEq(v2237, v1777);
          stdlib.assert(v2258, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:541:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:540:13:application call to [unknown function] (defined at: ./index.rsh:540:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v2260 = v2175[stdlib.checkedBigNumberify('./index.rsh:542:26:application', stdlib.UInt_max, '0')];
          const v2261 = v2260[stdlib.checkedBigNumberify('./index.rsh:542:26:application', stdlib.UInt_max, '0')];
          const v2262 = stdlib.ge(v2261, v2165);
          stdlib.assert(v2262, {
            at: './index.rsh:542:18:application',
            fs: ['at ./index.rsh:540:13:application call to [unknown function] (defined at: ./index.rsh:540:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v2268 = stdlib.sub(v2261, v2165);
          const v2269 = stdlib.ge(v2268, stdlib.checkedBigNumberify('./index.rsh:543:65:application', stdlib.UInt_max, '0'));
          stdlib.assert(v2269, {
            at: './index.rsh:543:65:application',
            fs: ['at ./index.rsh:540:13:application call to [unknown function] (defined at: ./index.rsh:540:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          const v2272 = stdlib.Array_set(v2260, '0', v2268);
          const v2273 = stdlib.Array_set(v2175, stdlib.checkedBigNumberify('./index.rsh:543:65:application', stdlib.UInt_max, '0'), v2272);
          ;
          const v2274 = true;
          await txn5.getOutput('AdminAPI_claimFees', 'v2274', ctc12, v2274);
          const cv2163 = v2163;
          const cv2164 = v2164;
          const cv2165 = stdlib.checkedBigNumberify('./index.rsh:549:13:decimal', stdlib.UInt_max, '0');
          const cv2166 = v2166;
          const cv2167 = false;
          const cv2168 = v2168;
          const cv2169 = v2239;
          const cv2175 = v2273;
          const cv2176 = v2176;
          
          v2163 = cv2163;
          v2164 = cv2164;
          v2165 = cv2165;
          v2166 = cv2166;
          v2167 = cv2167;
          v2168 = cv2168;
          v2169 = cv2169;
          v2175 = cv2175;
          v2176 = cv2176;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'OffererAPI_claim0_1008': {
          const v2337 = v2238[1];
          undefined /* setApiDetails */;
          ;
          const v2378 = stdlib.addressEq(v2237, v1751);
          stdlib.assert(v2378, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:522:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:521:13:application call to [unknown function] (defined at: ./index.rsh:521:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
            msg: 'You are not the Token Offerer!',
            who: 'TokenOfferer'
            });
          const v2381 = stdlib.ge(v2176, v2163);
          const v2383 = v2381 ? v2166 : false;
          stdlib.assert(v2383, {
            at: './index.rsh:523:18:application',
            fs: ['at ./index.rsh:521:13:application call to [unknown function] (defined at: ./index.rsh:521:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v2387 = stdlib.sub(v2176, v2163);
          const v2388 = stdlib.ge(v2387, stdlib.checkedBigNumberify('./index.rsh:524:35:application', stdlib.UInt_max, '0'));
          stdlib.assert(v2388, {
            at: './index.rsh:524:35:application',
            fs: ['at ./index.rsh:521:13:application call to [unknown function] (defined at: ./index.rsh:521:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          ;
          const v2390 = true;
          await txn5.getOutput('OffererAPI_claim', 'v2390', ctc12, v2390);
          const cv2163 = stdlib.checkedBigNumberify('./index.rsh:527:13:decimal', stdlib.UInt_max, '0');
          const cv2164 = v2164;
          const cv2165 = v2165;
          const cv2166 = false;
          const cv2167 = v2167;
          const cv2168 = v2168;
          const cv2169 = v2239;
          const cv2175 = v2175;
          const cv2176 = v2387;
          
          v2163 = cv2163;
          v2164 = cv2164;
          v2165 = cv2165;
          v2166 = cv2166;
          v2167 = cv2167;
          v2168 = cv2168;
          v2169 = cv2169;
          v2175 = cv2175;
          v2176 = cv2176;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'User_claimToken0_1008': {
          const v2433 = v2238[1];
          undefined /* setApiDetails */;
          ;
          const v2494 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2237), null);
          const v2495 = {
            None: 0,
            Some: 1
            }[v2494[0]];
          const v2496 = stdlib.eq(v2495, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v2496, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:500:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:499:13:application call to [unknown function] (defined at: ./index.rsh:499:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
            msg: 'Doesn\'t have a claim!',
            who: 'TokenOfferer'
            });
          const v2498 = v2175[stdlib.checkedBigNumberify('./index.rsh:501:26:application', stdlib.UInt_max, '0')];
          const v2499 = v2498[stdlib.checkedBigNumberify('./index.rsh:501:26:application', stdlib.UInt_max, '0')];
          const v2501 = stdlib.fromSome(v2494, stdlib.checkedBigNumberify('./index.rsh:501:78:decimal', stdlib.UInt_max, '0'));
          const v2502 = stdlib.safeMuldiv(v2501, v1753, v1843);
          const v2503 = stdlib.ge(v2499, v2502);
          stdlib.assert(v2503, {
            at: './index.rsh:501:18:application',
            fs: ['at ./index.rsh:499:13:application call to [unknown function] (defined at: ./index.rsh:499:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v2512 = stdlib.sub(v2499, v2502);
          const v2513 = stdlib.ge(v2512, stdlib.checkedBigNumberify('./index.rsh:503:55:application', stdlib.UInt_max, '0'));
          stdlib.assert(v2513, {
            at: './index.rsh:503:55:application',
            fs: ['at ./index.rsh:499:13:application call to [unknown function] (defined at: ./index.rsh:499:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          const v2516 = stdlib.Array_set(v2498, '0', v2512);
          const v2517 = stdlib.Array_set(v2175, stdlib.checkedBigNumberify('./index.rsh:503:55:application', stdlib.UInt_max, '0'), v2516);
          ;
          await stdlib.mapSet(map0, v2237, undefined /* Nothing */);
          const v2518 = true;
          await txn5.getOutput('User_claimToken', 'v2518', ctc12, v2518);
          const v2524 = stdlib.safeSub(v2164, v2502);
          const v2525 = stdlib.eq(v2524, stdlib.checkedBigNumberify('./index.rsh:507:56:decimal', stdlib.UInt_max, '0'));
          const v2526 = v2525 ? false : true;
          const cv2163 = v2163;
          const cv2164 = v2524;
          const cv2165 = v2165;
          const cv2166 = v2166;
          const cv2167 = v2167;
          const cv2168 = v2526;
          const cv2169 = v2239;
          const cv2175 = v2517;
          const cv2176 = v2176;
          
          v2163 = cv2163;
          v2164 = cv2164;
          v2165 = cv2165;
          v2166 = cv2166;
          v2167 = cv2167;
          v2168 = cv2168;
          v2169 = cv2169;
          v2175 = cv2175;
          v2176 = cv2176;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    const v2532 = v2175[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
    const v2533 = v2532[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
    const v2537 = stdlib.sub(v2176, v2176);
    const v2538 = stdlib.ge(v2537, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
    stdlib.assert(v2538, {
      at: './index.rsh:667:66:application',
      fs: [],
      msg: 'assume >= 0',
      who: 'TokenOfferer'
      });
    ;
    const v2545 = stdlib.sub(v2533, v2533);
    const v2546 = stdlib.ge(v2545, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
    stdlib.assert(v2546, {
      at: './index.rsh:667:66:application',
      fs: [],
      msg: 'assume >= 0',
      who: 'TokenOfferer'
      });
    ;
    return;
    }
  else {
    let v2559 = v1843;
    let v2560 = true;
    let v2562 = false;
    let v2563 = v1836;
    let v2569 = v1842;
    let v2570 = v1843;
    
    let txn4 = txn3;
    while (await (async () => {
      
      return v2560;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc14],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1515, from: v2617 } = txn5;
      switch (v2618[0]) {
        case 'AdminAPI_claimFees0_1368': {
          const v2621 = v2618[1];
          undefined /* setApiDetails */;
          ;
          const v2638 = stdlib.addressEq(v2617, v1777);
          stdlib.assert(v2638, {
            at: './index.rsh:597:20:application',
            fs: ['at ./index.rsh:596:15:application call to [unknown function] (defined at: ./index.rsh:596:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v2639 = true;
          await txn5.getOutput('AdminAPI_claimFees', 'v2639', ctc12, v2639);
          const cv2559 = v2559;
          const cv2560 = true;
          const cv2562 = v2562;
          const cv2563 = v2619;
          const cv2569 = v2569;
          const cv2570 = v2570;
          
          v2559 = cv2559;
          v2560 = cv2560;
          v2562 = cv2562;
          v2563 = cv2563;
          v2569 = cv2569;
          v2570 = cv2570;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'OffererAPI_claim0_1368': {
          const v2702 = v2618[1];
          undefined /* setApiDetails */;
          ;
          const v2728 = stdlib.addressEq(v2617, v1751);
          stdlib.assert(v2728, {
            at: './index.rsh:583:20:application',
            fs: ['at ./index.rsh:582:15:application call to [unknown function] (defined at: ./index.rsh:582:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v2729 = v2569[stdlib.checkedBigNumberify('./index.rsh:584:31:application', stdlib.UInt_max, '0')];
          const v2730 = v2729[stdlib.checkedBigNumberify('./index.rsh:584:31:application', stdlib.UInt_max, '0')];
          const v2736 = stdlib.sub(v2730, v2730);
          const v2737 = stdlib.ge(v2736, stdlib.checkedBigNumberify('./index.rsh:584:65:application', stdlib.UInt_max, '0'));
          stdlib.assert(v2737, {
            at: './index.rsh:584:65:application',
            fs: ['at ./index.rsh:582:15:application call to [unknown function] (defined at: ./index.rsh:582:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          const v2740 = stdlib.Array_set(v2729, '0', v2736);
          const v2741 = stdlib.Array_set(v2569, stdlib.checkedBigNumberify('./index.rsh:584:65:application', stdlib.UInt_max, '0'), v2740);
          ;
          const v2742 = true;
          await txn5.getOutput('OffererAPI_claim', 'v2742', ctc12, v2742);
          const v2748 = stdlib.eq(v2559, stdlib.checkedBigNumberify('./index.rsh:587:37:decimal', stdlib.UInt_max, '0'));
          const v2749 = v2748 ? false : true;
          const cv2559 = v2559;
          const cv2560 = v2749;
          const cv2562 = true;
          const cv2563 = v2619;
          const cv2569 = v2741;
          const cv2570 = v2570;
          
          v2559 = cv2559;
          v2560 = cv2560;
          v2562 = cv2562;
          v2563 = cv2563;
          v2569 = cv2569;
          v2570 = cv2570;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'User_claimBackOffer0_1368': {
          const v2783 = v2618[1];
          undefined /* setApiDetails */;
          ;
          const v2833 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2617), null);
          const v2834 = {
            None: 0,
            Some: 1
            }[v2833[0]];
          const v2835 = stdlib.eq(v2834, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v2835, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:566:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:565:15:application call to [unknown function] (defined at: ./index.rsh:565:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
            msg: 'Doesn\'t have a claim!',
            who: 'TokenOfferer'
            });
          const v2839 = stdlib.fromSome(v2833, stdlib.checkedBigNumberify('./index.rsh:567:57:decimal', stdlib.UInt_max, '0'));
          const v2840 = stdlib.ge(v2570, v2839);
          stdlib.assert(v2840, {
            at: './index.rsh:567:20:application',
            fs: ['at ./index.rsh:565:15:application call to [unknown function] (defined at: ./index.rsh:565:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v2846 = stdlib.sub(v2570, v2839);
          const v2847 = stdlib.ge(v2846, stdlib.checkedBigNumberify('./index.rsh:569:39:application', stdlib.UInt_max, '0'));
          stdlib.assert(v2847, {
            at: './index.rsh:569:39:application',
            fs: ['at ./index.rsh:565:15:application call to [unknown function] (defined at: ./index.rsh:565:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          ;
          await stdlib.mapSet(map0, v2617, undefined /* Nothing */);
          const v2849 = true;
          await txn5.getOutput('User_claimBackOffer', 'v2849', ctc12, v2849);
          const v2856 = stdlib.sub(v2559, v2839);
          const v2857 = stdlib.eq(v2856, stdlib.checkedBigNumberify('./index.rsh:573:53:decimal', stdlib.UInt_max, '0'));
          const v2859 = v2857 ? v2562 : false;
          const v2860 = v2859 ? false : true;
          const cv2559 = v2856;
          const cv2560 = v2860;
          const cv2562 = v2562;
          const cv2563 = v2619;
          const cv2569 = v2569;
          const cv2570 = v2846;
          
          v2559 = cv2559;
          v2560 = cv2560;
          v2562 = cv2562;
          v2563 = cv2563;
          v2569 = cv2569;
          v2570 = cv2570;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    const v2867 = v2569[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
    const v2868 = v2867[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
    const v2872 = stdlib.sub(v2570, v2570);
    const v2873 = stdlib.ge(v2872, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
    stdlib.assert(v2873, {
      at: './index.rsh:667:66:application',
      fs: [],
      msg: 'assume >= 0',
      who: 'TokenOfferer'
      });
    ;
    const v2880 = stdlib.sub(v2868, v2868);
    const v2881 = stdlib.ge(v2880, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
    stdlib.assert(v2881, {
      at: './index.rsh:667:66:application',
      fs: [],
      msg: 'assume >= 0',
      who: 'TokenOfferer'
      });
    ;
    return;
    }
  
  
  
  };
export async function _User_claimBackOffer8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_claimBackOffer8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_claimBackOffer8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_1368: ctc8,
    OffererAPI_claim0_1368: ctc8,
    User_claimBackOffer0_1368: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v2559, v2562, v2569, v2570] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1]);
  const v2578 = ctc.selfAddress();
  const v2580 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:563:14:application call to [unknown function] (defined at: ./index.rsh:563:14:function exp)', 'at ./index.rsh:558:38:application call to "runUser_claimBackOffer0_1368" (defined at: ./index.rsh:562:13:function exp)', 'at ./index.rsh:558:38:application call to [unknown function] (defined at: ./index.rsh:558:38:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
    msg: 'in',
    who: 'User_claimBackOffer'
    });
  const v2581 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2578), null);
  const v2582 = {
    None: 0,
    Some: 1
    }[v2581[0]];
  const v2583 = stdlib.eq(v2582, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2583, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:563:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:563:14:application call to [unknown function] (defined at: ./index.rsh:563:14:function exp)', 'at ./index.rsh:563:14:application call to [unknown function] (defined at: ./index.rsh:563:14:function exp)', 'at ./index.rsh:558:38:application call to "runUser_claimBackOffer0_1368" (defined at: ./index.rsh:562:13:function exp)', 'at ./index.rsh:558:38:application call to [unknown function] (defined at: ./index.rsh:558:38:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
    msg: 'Doesn\'t have a claim!',
    who: 'User_claimBackOffer'
    });
  const v2587 = ['User_claimBackOffer0_1368', v2580];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v2559, v2562, v2569, v2570, v2587],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:564:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1515, from: v2617 } = txn1;
      
      switch (v2618[0]) {
        case 'AdminAPI_claimFees0_1368': {
          const v2621 = v2618[1];
          
          break;
          }
        case 'OffererAPI_claim0_1368': {
          const v2702 = v2618[1];
          
          break;
          }
        case 'User_claimBackOffer0_1368': {
          const v2783 = v2618[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claimBackOffer"
            });
          ;
          const v2833 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2617), null);
          const v2839 = stdlib.fromSome(v2833, stdlib.checkedBigNumberify('./index.rsh:567:57:decimal', stdlib.UInt_max, '0'));
          const v2846 = stdlib.sub(v2570, v2839);
          sim_r.txns.push({
            kind: 'from',
            to: v2617,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v2617, undefined /* Nothing */);
          const v2849 = true;
          const v2850 = await txn1.getOutput('User_claimBackOffer', 'v2849', ctc5, v2849);
          
          const v2856 = stdlib.sub(v2559, v2839);
          const v2857 = stdlib.eq(v2856, stdlib.checkedBigNumberify('./index.rsh:573:53:decimal', stdlib.UInt_max, '0'));
          const v2859 = v2857 ? v2562 : false;
          const v5078 = v2856;
          const v5080 = v2562;
          const v5082 = v2569;
          const v5083 = v2846;
          if (v2859) {
            const v5084 = v2569[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            const v5085 = v5084[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: v1752
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1752
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2618], secs: v2620, time: v2619, didSend: v1515, from: v2617 } = txn1;
  switch (v2618[0]) {
    case 'AdminAPI_claimFees0_1368': {
      const v2621 = v2618[1];
      return;
      break;
      }
    case 'OffererAPI_claim0_1368': {
      const v2702 = v2618[1];
      return;
      break;
      }
    case 'User_claimBackOffer0_1368': {
      const v2783 = v2618[1];
      undefined /* setApiDetails */;
      ;
      const v2833 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2617), null);
      const v2834 = {
        None: 0,
        Some: 1
        }[v2833[0]];
      const v2835 = stdlib.eq(v2834, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2835, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:566:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:565:15:application call to [unknown function] (defined at: ./index.rsh:565:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
        msg: 'Doesn\'t have a claim!',
        who: 'User_claimBackOffer'
        });
      const v2839 = stdlib.fromSome(v2833, stdlib.checkedBigNumberify('./index.rsh:567:57:decimal', stdlib.UInt_max, '0'));
      const v2840 = stdlib.ge(v2570, v2839);
      stdlib.assert(v2840, {
        at: './index.rsh:567:20:application',
        fs: ['at ./index.rsh:565:15:application call to [unknown function] (defined at: ./index.rsh:565:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
        msg: null,
        who: 'User_claimBackOffer'
        });
      const v2846 = stdlib.sub(v2570, v2839);
      const v2847 = stdlib.ge(v2846, stdlib.checkedBigNumberify('./index.rsh:569:39:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2847, {
        at: './index.rsh:569:39:application',
        fs: ['at ./index.rsh:565:15:application call to [unknown function] (defined at: ./index.rsh:565:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
        msg: 'assume >= 0',
        who: 'User_claimBackOffer'
        });
      ;
      await stdlib.mapSet(map0, v2617, undefined /* Nothing */);
      const v2849 = true;
      const v2850 = await txn1.getOutput('User_claimBackOffer', 'v2849', ctc5, v2849);
      if (v1515) {
        stdlib.protect(ctc0, await interact.out(v2783, v2850), {
          at: './index.rsh:562:14:application',
          fs: ['at ./index.rsh:562:14:application call to [unknown function] (defined at: ./index.rsh:562:14:function exp)', 'at ./index.rsh:571:14:application call to "k" (defined at: ./index.rsh:565:15:function exp)', 'at ./index.rsh:565:15:application call to [unknown function] (defined at: ./index.rsh:565:15:function exp)', 'at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
          msg: 'out',
          who: 'User_claimBackOffer'
          });
        }
      else {
        }
      
      const v2856 = stdlib.sub(v2559, v2839);
      const v2857 = stdlib.eq(v2856, stdlib.checkedBigNumberify('./index.rsh:573:53:decimal', stdlib.UInt_max, '0'));
      const v2859 = v2857 ? v2562 : false;
      const v5078 = v2856;
      const v5080 = v2562;
      const v5082 = v2569;
      const v5083 = v2846;
      if (v2859) {
        const v5084 = v2569[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
        const v5085 = v5084[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
        const v5086 = stdlib.sub(v2846, v2846);
        const v5087 = stdlib.ge(v5086, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5087, {
          at: './index.rsh:667:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'User_claimBackOffer'
          });
        ;
        const v5088 = stdlib.sub(v5085, v5085);
        const v5089 = stdlib.ge(v5088, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5089, {
          at: './index.rsh:667:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'User_claimBackOffer'
          });
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function _User_claimToken5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_claimToken5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_claimToken5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_1008: ctc8,
    OffererAPI_claim0_1008: ctc8,
    User_claimToken0_1008: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1843, v2163, v2164, v2165, v2166, v2167, v2168, v2175, v2176] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1]);
  const v2187 = ctc.selfAddress();
  const v2189 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:497:12:application call to [unknown function] (defined at: ./index.rsh:497:12:function exp)', 'at ./index.rsh:492:23:application call to "runUser_claimToken0_1008" (defined at: ./index.rsh:496:11:function exp)', 'at ./index.rsh:492:23:application call to [unknown function] (defined at: ./index.rsh:492:23:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
    msg: 'in',
    who: 'User_claimToken'
    });
  const v2190 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2187), null);
  const v2191 = {
    None: 0,
    Some: 1
    }[v2190[0]];
  const v2192 = stdlib.eq(v2191, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2192, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:497:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:497:12:application call to [unknown function] (defined at: ./index.rsh:497:12:function exp)', 'at ./index.rsh:497:12:application call to [unknown function] (defined at: ./index.rsh:497:12:function exp)', 'at ./index.rsh:492:23:application call to "runUser_claimToken0_1008" (defined at: ./index.rsh:496:11:function exp)', 'at ./index.rsh:492:23:application call to [unknown function] (defined at: ./index.rsh:492:23:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
    msg: 'Doesn\'t have a claim!',
    who: 'User_claimToken'
    });
  const v2196 = ['User_claimToken0_1008', v2189];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1843, v2163, v2164, v2165, v2166, v2167, v2168, v2175, v2176, v2196],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:498:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2238], secs: v2240, time: v2239, didSend: v1227, from: v2237 } = txn1;
      
      switch (v2238[0]) {
        case 'AdminAPI_claimFees0_1008': {
          const v2241 = v2238[1];
          
          break;
          }
        case 'OffererAPI_claim0_1008': {
          const v2337 = v2238[1];
          
          break;
          }
        case 'User_claimToken0_1008': {
          const v2433 = v2238[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claimToken"
            });
          ;
          const v2494 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2237), null);
          const v2498 = v2175[stdlib.checkedBigNumberify('./index.rsh:501:26:application', stdlib.UInt_max, '0')];
          const v2499 = v2498[stdlib.checkedBigNumberify('./index.rsh:501:26:application', stdlib.UInt_max, '0')];
          const v2501 = stdlib.fromSome(v2494, stdlib.checkedBigNumberify('./index.rsh:501:78:decimal', stdlib.UInt_max, '0'));
          const v2502 = stdlib.safeMuldiv(v2501, v1753, v1843);
          const v2512 = stdlib.sub(v2499, v2502);
          const v2516 = stdlib.Array_set(v2498, '0', v2512);
          const v2517 = stdlib.Array_set(v2175, stdlib.checkedBigNumberify('./index.rsh:503:55:application', stdlib.UInt_max, '0'), v2516);
          sim_r.txns.push({
            kind: 'from',
            to: v2237,
            tok: v1752
            });
          await stdlib.simMapSet(sim_r, 0, v2237, undefined /* Nothing */);
          const v2518 = true;
          const v2519 = await txn1.getOutput('User_claimToken', 'v2518', ctc5, v2518);
          
          const v2524 = stdlib.safeSub(v2164, v2502);
          const v2525 = stdlib.eq(v2524, stdlib.checkedBigNumberify('./index.rsh:507:56:decimal', stdlib.UInt_max, '0'));
          const v2526 = v2525 ? false : true;
          const v5124 = v2163;
          const v5125 = v2524;
          const v5126 = v2165;
          const v5127 = v2166;
          const v5128 = v2167;
          const v5129 = v2526;
          const v5131 = v2517;
          const v5132 = v2176;
          const v5133 = v2525 ? v2166 : true;
          const v5134 = v5133 ? true : v2167;
          if (v5134) {
            sim_r.isHalt = false;
            }
          else {
            const v5135 = v2517[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            const v5136 = v5135[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v1751,
              tok: v1752
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1752
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2238], secs: v2240, time: v2239, didSend: v1227, from: v2237 } = txn1;
  switch (v2238[0]) {
    case 'AdminAPI_claimFees0_1008': {
      const v2241 = v2238[1];
      return;
      break;
      }
    case 'OffererAPI_claim0_1008': {
      const v2337 = v2238[1];
      return;
      break;
      }
    case 'User_claimToken0_1008': {
      const v2433 = v2238[1];
      undefined /* setApiDetails */;
      ;
      const v2494 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2237), null);
      const v2495 = {
        None: 0,
        Some: 1
        }[v2494[0]];
      const v2496 = stdlib.eq(v2495, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2496, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:500:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:499:13:application call to [unknown function] (defined at: ./index.rsh:499:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
        msg: 'Doesn\'t have a claim!',
        who: 'User_claimToken'
        });
      const v2498 = v2175[stdlib.checkedBigNumberify('./index.rsh:501:26:application', stdlib.UInt_max, '0')];
      const v2499 = v2498[stdlib.checkedBigNumberify('./index.rsh:501:26:application', stdlib.UInt_max, '0')];
      const v2501 = stdlib.fromSome(v2494, stdlib.checkedBigNumberify('./index.rsh:501:78:decimal', stdlib.UInt_max, '0'));
      const v2502 = stdlib.safeMuldiv(v2501, v1753, v1843);
      const v2503 = stdlib.ge(v2499, v2502);
      stdlib.assert(v2503, {
        at: './index.rsh:501:18:application',
        fs: ['at ./index.rsh:499:13:application call to [unknown function] (defined at: ./index.rsh:499:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
        msg: null,
        who: 'User_claimToken'
        });
      const v2512 = stdlib.sub(v2499, v2502);
      const v2513 = stdlib.ge(v2512, stdlib.checkedBigNumberify('./index.rsh:503:55:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2513, {
        at: './index.rsh:503:55:application',
        fs: ['at ./index.rsh:499:13:application call to [unknown function] (defined at: ./index.rsh:499:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
        msg: 'assume >= 0',
        who: 'User_claimToken'
        });
      const v2516 = stdlib.Array_set(v2498, '0', v2512);
      const v2517 = stdlib.Array_set(v2175, stdlib.checkedBigNumberify('./index.rsh:503:55:application', stdlib.UInt_max, '0'), v2516);
      ;
      await stdlib.mapSet(map0, v2237, undefined /* Nothing */);
      const v2518 = true;
      const v2519 = await txn1.getOutput('User_claimToken', 'v2518', ctc5, v2518);
      if (v1227) {
        stdlib.protect(ctc0, await interact.out(v2433, v2519), {
          at: './index.rsh:496:12:application',
          fs: ['at ./index.rsh:496:12:application call to [unknown function] (defined at: ./index.rsh:496:12:function exp)', 'at ./index.rsh:505:12:application call to "k" (defined at: ./index.rsh:499:13:function exp)', 'at ./index.rsh:499:13:application call to [unknown function] (defined at: ./index.rsh:499:13:function exp)', 'at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
          msg: 'out',
          who: 'User_claimToken'
          });
        }
      else {
        }
      
      const v2524 = stdlib.safeSub(v2164, v2502);
      const v2525 = stdlib.eq(v2524, stdlib.checkedBigNumberify('./index.rsh:507:56:decimal', stdlib.UInt_max, '0'));
      const v2526 = v2525 ? false : true;
      const v5124 = v2163;
      const v5125 = v2524;
      const v5126 = v2165;
      const v5127 = v2166;
      const v5128 = v2167;
      const v5129 = v2526;
      const v5131 = v2517;
      const v5132 = v2176;
      const v5133 = v2525 ? v2166 : true;
      const v5134 = v5133 ? true : v2167;
      if (v5134) {
        return;
        }
      else {
        const v5135 = v2517[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
        const v5136 = v5135[stdlib.checkedBigNumberify('./index.rsh:667:32:application', stdlib.UInt_max, '0')];
        const v5137 = stdlib.sub(v2176, v2176);
        const v5138 = stdlib.ge(v5137, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5138, {
          at: './index.rsh:667:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'User_claimToken'
          });
        ;
        const v5139 = stdlib.sub(v5136, v5136);
        const v5140 = stdlib.ge(v5139, stdlib.checkedBigNumberify('./index.rsh:667:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5140, {
          at: './index.rsh:667:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'User_claimToken'
          });
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function _User_endRound9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_endRound9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_endRound9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    OffererAPI_cancelOrder0_788: ctc8,
    User_endRound0_788: ctc8,
    User_offer0_788: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1831, v1832, v1834, v1835, v1842, v1843] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v1873 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:652:12:application call to [unknown function] (defined at: ./index.rsh:652:12:function exp)', 'at ./index.rsh:611:37:application call to "runUser_endRound0_788" (defined at: ./index.rsh:651:11:function exp)', 'at ./index.rsh:611:37:application call to [unknown function] (defined at: ./index.rsh:611:37:function exp)'],
    msg: 'in',
    who: 'User_endRound'
    });
  const v1877 = ['User_endRound0_788', v1873];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1831, v1832, v1834, v1835, v1842, v1843, v1877],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:653:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1893], secs: v1895, time: v1894, didSend: v919, from: v1892 } = txn1;
      
      switch (v1893[0]) {
        case 'OffererAPI_cancelOrder0_788': {
          const v1896 = v1893[1];
          
          break;
          }
        case 'User_endRound0_788': {
          const v1983 = v1893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_endRound"
            });
          ;
          const v2023 = true;
          const v2024 = await txn1.getOutput('User_endRound', 'v2023', ctc5, v2023);
          
          const v5294 = v1843;
          if (v1832) {
            const v5295 = v1842[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
            const v5296 = v5295[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
            const v5297 = stdlib.safeSub(v5296, v1753);
            const v5404 = v1843;
            const v5405 = v1753;
            const v5406 = v5297;
            const v5407 = true;
            const v5408 = true;
            const v5409 = true;
            const v5411 = v1842;
            const v5412 = v1843;
            sim_r.isHalt = false;
            }
          else {
            const v5421 = v1843;
            const v5423 = false;
            const v5425 = v1842;
            const v5426 = v1843;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'User_offer0_788': {
          const v2070 = v1893[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1893], secs: v1895, time: v1894, didSend: v919, from: v1892 } = txn1;
  switch (v1893[0]) {
    case 'OffererAPI_cancelOrder0_788': {
      const v1896 = v1893[1];
      return;
      break;
      }
    case 'User_endRound0_788': {
      const v1983 = v1893[1];
      undefined /* setApiDetails */;
      const v2003 = stdlib.le(v1843, stdlib.UInt_max);
      stdlib.assert(v2003, {
        at: './index.rsh:611:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'User_endRound'
        });
      ;
      const v2020 = stdlib.ge(v1895, v1804);
      const v2021 = stdlib.eq(v1831, v1834);
      const v2022 = v2020 ? true : v2021;
      stdlib.assert(v2022, {
        at: './index.rsh:655:18:application',
        fs: ['at ./index.rsh:654:13:application call to [unknown function] (defined at: ./index.rsh:654:13:function exp)'],
        msg: 'it\'s to early to end the round!',
        who: 'User_endRound'
        });
      const v2023 = true;
      const v2024 = await txn1.getOutput('User_endRound', 'v2023', ctc5, v2023);
      if (v919) {
        stdlib.protect(ctc0, await interact.out(v1983, v2024), {
          at: './index.rsh:651:12:application',
          fs: ['at ./index.rsh:651:12:application call to [unknown function] (defined at: ./index.rsh:651:12:function exp)', 'at ./index.rsh:656:12:application call to "k" (defined at: ./index.rsh:654:13:function exp)', 'at ./index.rsh:654:13:application call to [unknown function] (defined at: ./index.rsh:654:13:function exp)'],
          msg: 'out',
          who: 'User_endRound'
          });
        }
      else {
        }
      
      const v5294 = v1843;
      if (v1832) {
        const v5295 = v1842[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
        const v5296 = v5295[stdlib.checkedBigNumberify('./index.rsh:484:37:application', stdlib.UInt_max, '0')];
        const v5297 = stdlib.safeSub(v5296, v1753);
        const v5404 = v1843;
        const v5405 = v1753;
        const v5406 = v5297;
        const v5407 = true;
        const v5408 = true;
        const v5409 = true;
        const v5411 = v1842;
        const v5412 = v1843;
        return;
        }
      else {
        const v5421 = v1843;
        const v5423 = false;
        const v5425 = v1842;
        const v5426 = v1843;
        return;
        }
      break;
      }
    case 'User_offer0_788': {
      const v2070 = v1893[1];
      return;
      break;
      }
    }
  
  
  };
export async function _User_offer9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_offer9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_offer9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    OffererAPI_cancelOrder0_788: ctc9,
    User_endRound0_788: ctc9,
    User_offer0_788: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1831, v1832, v1834, v1835, v1842, v1843] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v1849 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:616:15:application call to [unknown function] (defined at: ./index.rsh:616:15:function exp)', 'at ./index.rsh:611:37:application call to "runUser_offer0_788" (defined at: ./index.rsh:615:11:function exp)', 'at ./index.rsh:611:37:application call to [unknown function] (defined at: ./index.rsh:611:37:function exp)'],
    msg: 'in',
    who: 'User_offer'
    });
  const v1850 = v1849[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1852 = stdlib.gt(v1850, stdlib.checkedBigNumberify('./index.rsh:616:32:decimal', stdlib.UInt_max, '0'));
  let v1853;
  if (v1852) {
    const v1854 = stdlib.safeAdd(v1831, v1850);
    const v1855 = stdlib.le(v1854, v1756);
    v1853 = v1855;
    }
  else {
    v1853 = false;
    }
  stdlib.assert(v1853, {
    at: './index.rsh:616:25:application',
    fs: ['at ./index.rsh:616:15:application call to [unknown function] (defined at: ./index.rsh:616:15:function exp)', 'at ./index.rsh:616:15:application call to [unknown function] (defined at: ./index.rsh:616:15:function exp)', 'at ./index.rsh:611:37:application call to "runUser_offer0_788" (defined at: ./index.rsh:615:11:function exp)', 'at ./index.rsh:611:37:application call to [unknown function] (defined at: ./index.rsh:611:37:function exp)'],
    msg: null,
    who: 'User_offer'
    });
  const v1859 = ['User_offer0_788', v1849];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1751, v1752, v1753, v1755, v1756, v1759, v1777, v1804, v1831, v1832, v1834, v1835, v1842, v1843, v1859],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v1850, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1893], secs: v1895, time: v1894, didSend: v919, from: v1892 } = txn1;
      
      switch (v1893[0]) {
        case 'OffererAPI_cancelOrder0_788': {
          const v1896 = v1893[1];
          
          break;
          }
        case 'User_endRound0_788': {
          const v1983 = v1893[1];
          
          break;
          }
        case 'User_offer0_788': {
          const v2070 = v1893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_offer"
            });
          const v2083 = v2070[stdlib.checkedBigNumberify('./index.rsh:615:11:spread', stdlib.UInt_max, '0')];
          const v2089 = stdlib.add(v1843, v2083);
          sim_r.txns.push({
            amt: v2083,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v2125 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1892), null);
          const v2126 = {
            None: 0,
            Some: 1
            }[v2125[0]];
          const v2127 = stdlib.eq(v2126, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v2127) {
            const v2129 = stdlib.fromSome(v2125, stdlib.checkedBigNumberify('./index.rsh:622:52:decimal', stdlib.UInt_max, '0'));
            const v2130 = stdlib.safeAdd(v2129, v2083);
            await stdlib.simMapSet(sim_r, 0, v1892, v2130);
            const v2131 = true;
            const v2132 = await txn1.getOutput('User_offer', 'v2131', ctc5, v2131);
            
            const v2138 = stdlib.safeAdd(v1831, v2083);
            const v2141 = stdlib.add(v1831, v2083);
            const v2142 = stdlib.ge(v2141, v1835);
            const v6017 = v2138;
            const v6018 = v2142;
            const v6020 = v1834;
            const v6021 = v1835;
            const v6023 = v1842;
            const v6024 = v2089;
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 0, v1892, v2083);
            const v2144 = true;
            const v2145 = await txn1.getOutput('User_offer', 'v2144', ctc5, v2144);
            
            const v2151 = stdlib.safeAdd(v1831, v2083);
            const v2154 = stdlib.add(v1831, v2083);
            const v2155 = stdlib.ge(v2154, v1835);
            const v6163 = v2151;
            const v6164 = v2155;
            const v6166 = v1834;
            const v6167 = v1835;
            const v6169 = v1842;
            const v6170 = v2089;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1893], secs: v1895, time: v1894, didSend: v919, from: v1892 } = txn1;
  switch (v1893[0]) {
    case 'OffererAPI_cancelOrder0_788': {
      const v1896 = v1893[1];
      return;
      break;
      }
    case 'User_endRound0_788': {
      const v1983 = v1893[1];
      return;
      break;
      }
    case 'User_offer0_788': {
      const v2070 = v1893[1];
      undefined /* setApiDetails */;
      const v2083 = v2070[stdlib.checkedBigNumberify('./index.rsh:615:11:spread', stdlib.UInt_max, '0')];
      const v2089 = stdlib.add(v1843, v2083);
      const v2090 = stdlib.le(v2089, stdlib.UInt_max);
      stdlib.assert(v2090, {
        at: './index.rsh:611:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'User_offer'
        });
      ;
      const v2119 = stdlib.gt(v2083, stdlib.checkedBigNumberify('./index.rsh:619:25:decimal', stdlib.UInt_max, '0'));
      let v2120;
      if (v2119) {
        const v2121 = stdlib.safeAdd(v1831, v2083);
        const v2122 = stdlib.le(v2121, v1756);
        v2120 = v2122;
        }
      else {
        v2120 = false;
        }
      stdlib.assert(v2120, {
        at: './index.rsh:619:18:application',
        fs: ['at ./index.rsh:618:18:application call to [unknown function] (defined at: ./index.rsh:618:18:function exp)'],
        msg: null,
        who: 'User_offer'
        });
      const v2124 = stdlib.lt(v1895, v1804);
      stdlib.assert(v2124, {
        at: './index.rsh:620:18:application',
        fs: ['at ./index.rsh:618:18:application call to [unknown function] (defined at: ./index.rsh:618:18:function exp)'],
        msg: 'Deadline has been reached, someone should close the round!',
        who: 'User_offer'
        });
      const v2125 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1892), null);
      const v2126 = {
        None: 0,
        Some: 1
        }[v2125[0]];
      const v2127 = stdlib.eq(v2126, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v2127) {
        const v2129 = stdlib.fromSome(v2125, stdlib.checkedBigNumberify('./index.rsh:622:52:decimal', stdlib.UInt_max, '0'));
        const v2130 = stdlib.safeAdd(v2129, v2083);
        await stdlib.mapSet(map0, v1892, v2130);
        const v2131 = true;
        const v2132 = await txn1.getOutput('User_offer', 'v2131', ctc5, v2131);
        if (v919) {
          stdlib.protect(ctc0, await interact.out(v2070, v2132), {
            at: './index.rsh:615:12:application',
            fs: ['at ./index.rsh:615:12:application call to [unknown function] (defined at: ./index.rsh:615:12:function exp)', 'at ./index.rsh:629:12:application call to "k" (defined at: ./index.rsh:618:18:function exp)', 'at ./index.rsh:618:18:application call to [unknown function] (defined at: ./index.rsh:618:18:function exp)'],
            msg: 'out',
            who: 'User_offer'
            });
          }
        else {
          }
        
        const v2138 = stdlib.safeAdd(v1831, v2083);
        const v2141 = stdlib.add(v1831, v2083);
        const v2142 = stdlib.ge(v2141, v1835);
        const v6017 = v2138;
        const v6018 = v2142;
        const v6020 = v1834;
        const v6021 = v1835;
        const v6023 = v1842;
        const v6024 = v2089;
        return;
        }
      else {
        await stdlib.mapSet(map0, v1892, v2083);
        const v2144 = true;
        const v2145 = await txn1.getOutput('User_offer', 'v2144', ctc5, v2144);
        if (v919) {
          stdlib.protect(ctc0, await interact.out(v2070, v2145), {
            at: './index.rsh:615:12:application',
            fs: ['at ./index.rsh:615:12:application call to [unknown function] (defined at: ./index.rsh:615:12:function exp)', 'at ./index.rsh:629:12:application call to "k" (defined at: ./index.rsh:618:18:function exp)', 'at ./index.rsh:618:18:application call to [unknown function] (defined at: ./index.rsh:618:18:function exp)'],
            msg: 'out',
            who: 'User_offer'
            });
          }
        else {
          }
        
        const v2151 = stdlib.safeAdd(v1831, v2083);
        const v2154 = stdlib.add(v1831, v2083);
        const v2155 = stdlib.ge(v2154, v1835);
        const v6163 = v2151;
        const v6164 = v2155;
        const v6166 = v1834;
        const v6167 = v1835;
        const v6169 = v1842;
        const v6170 = v2089;
        return;
        }
      break;
      }
    }
  
  
  };
export async function AdminAPI_claimFees(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_claimFees expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_claimFees expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _AdminAPI_claimFees5(ctcTop, interact);}
  if (step == 8) {return _AdminAPI_claimFees8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function OffererAPI_cancelOrder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for OffererAPI_cancelOrder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for OffererAPI_cancelOrder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _OffererAPI_cancelOrder9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function OffererAPI_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for OffererAPI_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for OffererAPI_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _OffererAPI_claim5(ctcTop, interact);}
  if (step == 8) {return _OffererAPI_claim8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_claimBackOffer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_claimBackOffer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_claimBackOffer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _User_claimBackOffer8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_claimToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_claimToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_claimToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _User_claimToken5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_endRound(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_endRound expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_endRound expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _User_endRound9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_offer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_offer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_offer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _User_offer9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`AdminAPI_claimFees()byte`, `OffererAPI_cancelOrder()byte`, `OffererAPI_claim()byte`, `User_claimBackOffer()byte`, `User_claimToken()byte`, `User_endRound()byte`, `User_offer(uint64)byte`, `_AdminAPI_claimFees4()byte`, `_AdminAPI_claimFees6()byte`, `_OffererAPI_claim4()byte`, `_OffererAPI_claim6()byte`],
    pure: [`Viewer_read()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,byte)`],
    sigs: [`AdminAPI_claimFees()byte`, `OffererAPI_cancelOrder()byte`, `OffererAPI_claim()byte`, `User_claimBackOffer()byte`, `User_claimToken()byte`, `User_endRound()byte`, `User_offer(uint64)byte`, `Viewer_read()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,byte)`, `_AdminAPI_claimFees4()byte`, `_AdminAPI_claimFees6()byte`, `_OffererAPI_claim4()byte`, `_OffererAPI_claim6()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAfAAEECAn///////////8BBgIgKAUwOEBocJBOrev04wmGstm8DL6Z8fYMlI/Jgw7H04TmCe3fjsIKov32vwbW0IveBp23lLwHkPjwygO/+djeBQegjQYQJgQBAQEAAAECIjUAMRhBDQcqZEkiWzUBJVs1AjEZIxJBAAoxACkhBK9mQgzUNhoAF0lBAeQiNQQjNQZJIREMQAB8SSESDEAAOEkhEwxAACNJIRQMQAAOIRQSRCo1/ys0/1BCA9MhExJEKjX/KTT/UEIFYSESEkQqNf8oNP9QQgVTSSEVDEAAJkkhFgxAABEhFhJEKjX/KDT/UCWvUEIBniEVEkQqNf8rNP9QQgUmIRESRDYaATX/KzT/UEIBgEkhFwxAAQpJIRgMQADpSSEZDEAA1CEZEkQ0AUklDEAAiEkhBAxAAEQhBBJEKWQoZFBJNQNXACA0A1cgCFA0A1dACFA0A1doCFA0A1eBCFA0A1d5CFA0A1dwCFA0A1coCFA0A1d4AVA1B0IL5kgpZChkUEk1A1cAIDQDVyAIUDQDV0AIUDQDV2gIUDQDVzAIUDQDVzgIUDQDV3AIUDQDVygIUClQNQdCC6khChJEKWQoZFBJNQNXACA0A1cgCFA0A1dACFA0A1doCFA0A1cwCFA0A1c4CFA0A1d4CFA0A1coCFAoUDUHQgtpIRgSRCo1/yg0/1BCAoMhFxJENAFJIQYMQAAHIQYSREL/4iQSREL+qEkhGgxAAC9JIRsMQAAOIRsSRCo1/yk0/1BCAk0hGhJENAFJIQYMQAAHIQYSREL/4iQSREL+ZIHN6oh6EkQqNf8pNP9QJa9QQgAlNhoCFzUENhoDNhoBF0kkDEAFvkkhBgxAA55JIRwMQAH9IRwSRCEENAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKVwAgNf8hCFs1/iEJWzX9IQtbNfwhDFs1+yENWzX6V0ggNfkhDls1+CEPWzX3V3gBFzX2gXlbNfWBgQFbNfRXiRE184GaAVs18kk1BTXxgAR3Yn7vNPFQsDTxIlVJIwxAAS9JIQcMQADkIQcSRDTxVwEINfA08Bc17zTyNO8ISTXuIQUORDTviApdNO8iDUEADTT3NO8INPsONe1CAAMiNe007UQyBzT4DEQxAIgKKUk17CJVIxJBAFExACkoIjTsSTXrI1s06yJVTTTvCBZQZoAJAAAAAAAACFMBsCg1BzT/NP40/TT8NPs0+jT5NPg09zTvCDT3NO8INPQPIzT1NPQyBjTzNO5CBvgxACkoNO8WUGaACQAAAAAAAAhgAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc07wg09zTvCDT0DyM09TT0MgY08zTuQga1SDTyIQUORDIHNPgPNPc09RIRRIAJAAAAAAAAB+cBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2IjT1NPQyBjTzNPJCBnFINPIhBQ5EMQA0/xI09hQQRDIHNPgMRIAJAAAAAAAAB4QBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2IjT1NPQyBjTzNPJCBilIJTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSkpKVwAgNf8hCFs1/iEJWzX9IQtbNfwhDFs1+yENWzX6V0ggNfkhDls1+CEPWzX3V3gBFzX2V3kRNfWBigFbNfRJNQU184AEkE9kSTTzULA08yJVSSMMQADwSSEHDEAAgiEHEkQxAIgIeUk18iJVIxJEIjTySTXwI1s08CJVTTXxNPQ08Q9ENPQ08QlJNfAiD0SxIrIBNPGyCCOyEDEAsgezMQApIQSvZoAJAAAAAAAACyEBsCg1BzT3NPEJNe80/zT+NP00/DT7NPo0+TT4NO9JIhI09hAUNPYyBjT1NPBCBtRIMQA0/xJENPVXABFJNfIiW0k18UkJSTXwIg9EsSKyATTxshIkshAxALIUNP6yEbOACQAAAAAAAAq2AbAoNQc0/zT+NP00/DT7NPo0+TT4NPdJIhMjMgY09TTyNPAWXABcADT0QgZtSDEANPkSRIAJAAAAAAAACk8BsCg1BzT/NP40/TT8NPs0+jT5NPg09yM09jIGNPU09EIGOSQSRCEKNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSklXACA1/yEIWzX+IQlbNf0hC1s1/CEMWzX7IQ1bNfpXSCA1+SEOWzX4IQ9bNfeBeFs19oGAAVs19YGIAVs19FeQARc181eRARc18leSARc18VeTETXwgaQBWzXvSTUFNe6ABK571AY07lCwNO4iVUkjDEABDEkhBwxAAKYhBxJEMQCIBrxJNe0iVSMSRDTwVwARSTXsIls16yI07Uk16SNbNOkiVU00/R0095c16jTrNOoPRDTrNOoJSTXpIg9EsSKyATTqshIkshAxALIUNP6yEbMxACkhBK9mgAkAAAAAAAAJ1gGwKDUHNPU06gk16DT/NP40/TT8NPs0+jT5NPg09zT2NOg09DTzNPI06CITMgY08DTsNOkWXABcADTvQgQMSDEANP8SRDTvNPYPNPMQRDTvNPYJSTXtIg9EsSKyATT2sggjshAxALIHs4AJAAAAAAAACVYBsCg1BzT/NP40/TT8NPs0+jT5NPg09yI09TT0IjTyNPEyBjTwNO1CA61IMQA0+RJENPBXABFJNe0iW0k17DT0D0Q07DT0CUk16yIPRLEisgE09LISJLIQMQCyFDT+shGzgAkAAAAAAAAI4gGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09SI08yI08TIGNPA07TTrFlwAXAA070IDOUkjDEAA4SMSRCM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpXACA1/yEIWzX+IQtbNf0hDFs1/FdIETX7gWFbNfpXaSA1+YGJAVs1+IAEmouRdLA0A4FZWzT6CEk19yEFDkQ0+ogE8jT7VwARSTX2Ils0+AhJNfUhBQ5ENPs09jT1FlwAXAA19DT4NP6IBOI0/zEAEkQ09zT6CUk18yIPRLEisgE0+rIII7IQNPmyB7M0+DT0VwARIlsSRDT/NP40AyEJWzT9NPw0AyENWzT5NAOBkQFbIiIjNPw0/TIGNPQ080IBj0ghHYgEbiI0ARJENARJIhJMNAISEURJNQVJSkoiWzX/JVs1/iEeWzX9gRhbNfwhCFs1+yEJWzX6gASKwYyINP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQsIERr0k1+UlXABElr1wAXAA1+CEdiAQGsSKyASKyEiSyEDIKshQ0/7IRszT+gcCEPQ9ENP4hBQxEgAVhcHBJRDT6FlADNfYyCng19TIKYDT1CRY19LEisgEhBrIQNPqyGIAEfjXZRbIaszIKYDT1CTT0FwkWtwA+VwQAUDX3gAgAAAAAAAAG6TT3ULA090k19iJbNfU09lcIOEk19CJbNfM09CEeWzXyNPRXGCA18TT1IQUORCI09RJENPMhEAxENPMiDUEAEzTzIRAORDT+NPMdIRCXNfBCAAMiNfA0/iEFNPAJDkQ0/jTwCDXvMgc0/Qg17jEANP8WUDT+FlA0/BZQNPsWUDIHFlA0+FA09RZQNPIWUDTxUDTvFlA07hZQKUsBVwB/ZyhLAVd/GmdIIzUBMgY1AkIChDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNPpBAFE08DTxFlA08hZQNPMWUDT0FlA09RZQNPZQNPcWUDT4FlA0+RZRBwhQNPsWUDT8FlA0/lA0/xZQKUsBVwB/ZyhLAVd/I2dIIQQ1ATIGNQJCAg40+UEAKzTwNPE08jTzNPQ09TT2NPc0/0k08jT+VwARIls08gkjIyM0/TT+NP9CAB008DTxNPI08zT0NPU09jT3NP8jIjT9NP40/0IA5zX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jT8NPoRNPsRQQBjNO407xZQNPAWUDTxFlA08hZQNPMWUDT0UDT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUQcIUDT7FlEHCFA0/BZRBwhQNP5QNP8WUClLAVcAf2coSwFXfy1nSCEKNQEyBjUCQgEvNP5XABEiWzXtNP9JCSIPRLEisgE0/7III7IQNO6yB7M07UkJIg9EsSKyATTtshIkshA07rIUNO+yEbOxIrIBIrISJLIQMgmyFTIKshQ077IRs0IAvjX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI0+0EASDTyNPMWUDT0FlA09RZQNPYWUDT3FlA0+FA0+RZQNPoWUDT8FlEHCFA0/lA0/xZQKUsBVwB/ZyhLAVd/E2dIJTUBMgY1AkIAcTT+VwARIls18TT/SQkiD0SxIrIBNP+yCCOyEDTysgezNPFJCSIPRLEisgE08bISJLIQNPKyFDTzshGzsSKyASKyEiSyEDIJshUyCrIUNPOyEbNCAAAxGSEKEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQSviSliiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 172,
  unsupported: [],
  version: 11,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:445:68:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:465:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:668:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:492:23:after expr stmt semicolon',
    fs: ['at ./index.rsh:664:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:482:40:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:668:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:558:38:after expr stmt semicolon',
    fs: ['at ./index.rsh:665:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:554:43:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:611:37:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "AdminAPI_claimFees": AdminAPI_claimFees,
  "OffererAPI_cancelOrder": OffererAPI_cancelOrder,
  "OffererAPI_claim": OffererAPI_claim,
  "TokenOfferer": TokenOfferer,
  "User_claimBackOffer": User_claimBackOffer,
  "User_claimToken": User_claimToken,
  "User_endRound": User_endRound,
  "User_offer": User_offer
  };
export const _APIs = {
  AdminAPI: {
    claimFees: AdminAPI_claimFees
    },
  OffererAPI: {
    cancelOrder: OffererAPI_cancelOrder,
    claim: OffererAPI_claim
    },
  User: {
    claimBackOffer: User_claimBackOffer,
    claimToken: User_claimToken,
    endRound: User_endRound,
    offer: User_offer
    }
  };
