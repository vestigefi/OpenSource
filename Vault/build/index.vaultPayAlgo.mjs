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
  const ctc6 = stdlib.T_Tuple([ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  
  const Viewer_read = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1760, v1761, v1762, v1763, v1764, v1765, v1766, v1769, v1772, v1778, v1780, v1783, v1945, v1949, v1950, v1962, v1969] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1761, v1766, v1950, v1995, v1996, v1997, v1998, v1999, v2000, v2001, v2002, v2003, v2004, v2008, v2009, v2011, v2012, v2028, v2029] = svs;
      return (await ((async () => {
        
        const v2030 = [v2000, v1999, v1997, v1998, v2001, v2009, v2002, v2029];
        
        return v2030;}))(...args));
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
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc5, ctc3, ctc3, ctc3, ctc2, ctc2, ctc0, ctc2, ctc2],
      4: [ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc4, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _AdminAPI_tryClaimFee4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_tryClaimFee4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_tryClaimFee4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    AdminAPI_tryClaimFee0_1259: ctc6,
    Claimant_finalClaim0_1259: ctc6,
    Claimant_tryClaim0_1259: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v1761, v1766, v1950, v1995, v1996, v1997, v1998, v1999, v2000, v2001, v2002, v2003, v2004, v2008, v2009, v2011, v2012, v2028, v2029] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc4, ctc2]);
  const v2062 = ctc.selfAddress();
  const v2064 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:283:12:application call to [unknown function] (defined at: ./index.rsh:283:12:function exp)', 'at ./index.rsh:209:19:application call to "runAdminAPI_tryClaimFee0_1259" (defined at: ./index.rsh:282:11:function exp)', 'at ./index.rsh:209:19:application call to [unknown function] (defined at: ./index.rsh:209:19:function exp)'],
    msg: 'in',
    who: 'AdminAPI_tryClaimFee'
    });
  const v2066 = stdlib.addressEq(v2062, v1950);
  const v2069 = stdlib.ge(v2029, v1996);
  const v2070 = v2066 ? v2069 : false;
  const v2072 = stdlib.ge(v2012, v1995);
  const v2073 = v2070 ? v2072 : false;
  stdlib.assert(v2073, {
    at: './index.rsh:284:17:application',
    fs: ['at ./index.rsh:283:12:application call to [unknown function] (defined at: ./index.rsh:283:12:function exp)', 'at ./index.rsh:283:12:application call to [unknown function] (defined at: ./index.rsh:283:12:function exp)', 'at ./index.rsh:209:19:application call to "runAdminAPI_tryClaimFee0_1259" (defined at: ./index.rsh:282:11:function exp)', 'at ./index.rsh:209:19:application call to [unknown function] (defined at: ./index.rsh:209:19:function exp)'],
    msg: null,
    who: 'AdminAPI_tryClaimFee'
    });
  const v2076 = ['AdminAPI_tryClaimFee0_1259', v2064];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1761, v1766, v1950, v1995, v1996, v1997, v1998, v1999, v2000, v2001, v2002, v2003, v2004, v2008, v2009, v2011, v2012, v2028, v2029, v2076],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:288:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2082], secs: v2084, time: v2083, didSend: v1386, from: v2081 } = txn1;
      
      switch (v2082[0]) {
        case 'AdminAPI_tryClaimFee0_1259': {
          const v2085 = v2082[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_tryClaimFee"
            });
          ;
          const v2104 = stdlib.sub(v2012, v1995);
          sim_r.txns.push({
            kind: 'from',
            to: v2081,
            tok: undefined /* Nothing */
            });
          const v2112 = stdlib.sub(v2029, v1996);
          const v2116 = stdlib.Array_set(v2028, '0', v2112);
          const v2117 = stdlib.Array_set(v2011, stdlib.checkedBigNumberify('./index.rsh:293:66:application', stdlib.UInt_max, '0'), v2116);
          sim_r.txns.push({
            kind: 'from',
            to: v2081,
            tok: v1761
            });
          const v2118 = true;
          const v2119 = await txn1.getOutput('AdminAPI_tryClaimFee', 'v2118', ctc3, v2118);
          
          const v2983 = stdlib.checkedBigNumberify('./index.rsh:300:13:decimal', stdlib.UInt_max, '0');
          const v2984 = stdlib.checkedBigNumberify('./index.rsh:299:13:decimal', stdlib.UInt_max, '0');
          const v2985 = v1997;
          const v2986 = v1998;
          const v2987 = v1999;
          const v2988 = v2000;
          const v2989 = v2001;
          const v2990 = v2002;
          const v2991 = v2003;
          const v2992 = v2004;
          const v2994 = v2084;
          const v2995 = v2008;
          const v2996 = v2117;
          const v2997 = v2104;
          const v2998 = v2117[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
          const v2999 = v2998[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_finalClaim0_1259': {
          const v2200 = v2082[1];
          
          break;
          }
        case 'Claimant_tryClaim0_1259': {
          const v2315 = v2082[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc4, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v2082], secs: v2084, time: v2083, didSend: v1386, from: v2081 } = txn1;
  switch (v2082[0]) {
    case 'AdminAPI_tryClaimFee0_1259': {
      const v2085 = v2082[1];
      undefined /* setApiDetails */;
      ;
      const v2093 = stdlib.addressEq(v2081, v1950);
      const v2096 = stdlib.ge(v2029, v1996);
      const v2097 = v2093 ? v2096 : false;
      const v2099 = stdlib.ge(v2012, v1995);
      const v2100 = v2097 ? v2099 : false;
      stdlib.assert(v2100, {
        at: './index.rsh:290:18:application',
        fs: ['at ./index.rsh:289:13:application call to [unknown function] (defined at: ./index.rsh:289:13:function exp)'],
        msg: null,
        who: 'AdminAPI_tryClaimFee'
        });
      const v2104 = stdlib.sub(v2012, v1995);
      const v2105 = stdlib.ge(v2104, stdlib.checkedBigNumberify('./index.rsh:293:66:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2105, {
        at: './index.rsh:293:66:application',
        fs: ['at ./index.rsh:289:13:application call to [unknown function] (defined at: ./index.rsh:289:13:function exp)'],
        msg: 'assume >= 0',
        who: 'AdminAPI_tryClaimFee'
        });
      ;
      const v2112 = stdlib.sub(v2029, v1996);
      const v2113 = stdlib.ge(v2112, stdlib.checkedBigNumberify('./index.rsh:293:66:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2113, {
        at: './index.rsh:293:66:application',
        fs: ['at ./index.rsh:289:13:application call to [unknown function] (defined at: ./index.rsh:289:13:function exp)'],
        msg: 'assume >= 0',
        who: 'AdminAPI_tryClaimFee'
        });
      const v2116 = stdlib.Array_set(v2028, '0', v2112);
      const v2117 = stdlib.Array_set(v2011, stdlib.checkedBigNumberify('./index.rsh:293:66:application', stdlib.UInt_max, '0'), v2116);
      ;
      const v2118 = true;
      const v2119 = await txn1.getOutput('AdminAPI_tryClaimFee', 'v2118', ctc3, v2118);
      if (v1386) {
        stdlib.protect(ctc8, await interact.out(v2085, v2119), {
          at: './index.rsh:282:12:application',
          fs: ['at ./index.rsh:282:12:application call to [unknown function] (defined at: ./index.rsh:282:12:function exp)', 'at ./index.rsh:294:12:application call to "k" (defined at: ./index.rsh:289:13:function exp)', 'at ./index.rsh:289:13:application call to [unknown function] (defined at: ./index.rsh:289:13:function exp)'],
          msg: 'out',
          who: 'AdminAPI_tryClaimFee'
          });
        }
      else {
        }
      
      const v2983 = stdlib.checkedBigNumberify('./index.rsh:300:13:decimal', stdlib.UInt_max, '0');
      const v2984 = stdlib.checkedBigNumberify('./index.rsh:299:13:decimal', stdlib.UInt_max, '0');
      const v2985 = v1997;
      const v2986 = v1998;
      const v2987 = v1999;
      const v2988 = v2000;
      const v2989 = v2001;
      const v2990 = v2002;
      const v2991 = v2003;
      const v2992 = v2004;
      const v2994 = v2084;
      const v2995 = v2008;
      const v2996 = v2117;
      const v2997 = v2104;
      const v2998 = v2117[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
      const v2999 = v2998[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'Claimant_finalClaim0_1259': {
      const v2200 = v2082[1];
      return;
      break;
      }
    case 'Claimant_tryClaim0_1259': {
      const v2315 = v2082[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_finalClaim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_finalClaim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_finalClaim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    AdminAPI_tryClaimFee0_1259: ctc6,
    Claimant_finalClaim0_1259: ctc6,
    Claimant_tryClaim0_1259: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v1761, v1766, v1950, v1995, v1996, v1997, v1998, v1999, v2000, v2001, v2002, v2003, v2004, v2008, v2009, v2011, v2012, v2028, v2029] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc4, ctc2]);
  const v2046 = ctc.selfAddress();
  const v2048 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:256:12:application call to [unknown function] (defined at: ./index.rsh:256:12:function exp)', 'at ./index.rsh:209:19:application call to "runClaimant_finalClaim0_1259" (defined at: ./index.rsh:255:11:function exp)', 'at ./index.rsh:209:19:application call to [unknown function] (defined at: ./index.rsh:209:19:function exp)'],
    msg: 'in',
    who: 'Claimant_finalClaim'
    });
  const v2052 = stdlib.safeSub(v1999, v1997);
  const v2053 = stdlib.eq(v2029, v2052);
  const v2054 = stdlib.eq(v2002, stdlib.checkedBigNumberify('./index.rsh:258:26:decimal', stdlib.UInt_max, '1'));
  const v2055 = v2053 ? v2054 : false;
  const v2056 = stdlib.addressEq(v2046, v1766);
  const v2057 = v2055 ? v2056 : false;
  stdlib.assert(v2057, {
    at: './index.rsh:257:17:application',
    fs: ['at ./index.rsh:256:12:application call to [unknown function] (defined at: ./index.rsh:256:12:function exp)', 'at ./index.rsh:256:12:application call to [unknown function] (defined at: ./index.rsh:256:12:function exp)', 'at ./index.rsh:209:19:application call to "runClaimant_finalClaim0_1259" (defined at: ./index.rsh:255:11:function exp)', 'at ./index.rsh:209:19:application call to [unknown function] (defined at: ./index.rsh:209:19:function exp)'],
    msg: null,
    who: 'Claimant_finalClaim'
    });
  const v2060 = ['Claimant_finalClaim0_1259', v2048];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1761, v1766, v1950, v1995, v1996, v1997, v1998, v1999, v2000, v2001, v2002, v2003, v2004, v2008, v2009, v2011, v2012, v2028, v2029, v2060],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:261:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2082], secs: v2084, time: v2083, didSend: v1386, from: v2081 } = txn1;
      
      switch (v2082[0]) {
        case 'AdminAPI_tryClaimFee0_1259': {
          const v2085 = v2082[1];
          
          break;
          }
        case 'Claimant_finalClaim0_1259': {
          const v2200 = v2082[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_finalClaim"
            });
          ;
          const v2243 = stdlib.safeSub(v1999, v1997);
          const v2257 = stdlib.sub(v2029, v2243);
          const v2261 = stdlib.Array_set(v2028, '0', v2257);
          const v2262 = stdlib.Array_set(v2011, stdlib.checkedBigNumberify('./index.rsh:267:72:application', stdlib.UInt_max, '0'), v2261);
          sim_r.txns.push({
            kind: 'from',
            to: v1766,
            tok: v1761
            });
          const v2263 = true;
          const v2264 = await txn1.getOutput('Claimant_finalClaim', 'v2263', ctc3, v2263);
          
          const v2270 = stdlib.safeAdd(v1997, v2243);
          const v2271 = stdlib.safeAdd(v2001, v2003);
          const v2272 = stdlib.safeSub(v2002, stdlib.checkedBigNumberify('./index.rsh:279:30:decimal', stdlib.UInt_max, '1'));
          const v3059 = v1995;
          const v3060 = v1996;
          const v3061 = v2270;
          const v3062 = stdlib.checkedBigNumberify('./index.rsh:276:13:decimal', stdlib.UInt_max, '0');
          const v3063 = v1999;
          const v3064 = true;
          const v3065 = v2271;
          const v3066 = v2272;
          const v3067 = v2003;
          const v3068 = v2004;
          const v3070 = v2084;
          const v3071 = v2008;
          const v3072 = v2262;
          const v3073 = v2012;
          const v3074 = v2262[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
          const v3075 = v3074[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_tryClaim0_1259': {
          const v2315 = v2082[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc4, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v2082], secs: v2084, time: v2083, didSend: v1386, from: v2081 } = txn1;
  switch (v2082[0]) {
    case 'AdminAPI_tryClaimFee0_1259': {
      const v2085 = v2082[1];
      return;
      break;
      }
    case 'Claimant_finalClaim0_1259': {
      const v2200 = v2082[1];
      undefined /* setApiDetails */;
      ;
      const v2243 = stdlib.safeSub(v1999, v1997);
      const v2244 = stdlib.eq(v2029, v2243);
      const v2245 = stdlib.eq(v2002, stdlib.checkedBigNumberify('./index.rsh:264:26:decimal', stdlib.UInt_max, '1'));
      const v2246 = v2244 ? v2245 : false;
      const v2247 = stdlib.addressEq(v2081, v1766);
      const v2248 = v2246 ? v2247 : false;
      stdlib.assert(v2248, {
        at: './index.rsh:263:18:application',
        fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
        msg: null,
        who: 'Claimant_finalClaim'
        });
      const v2250 = stdlib.ge(v2084, v2001);
      stdlib.assert(v2250, {
        at: './index.rsh:266:18:application',
        fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
        msg: null,
        who: 'Claimant_finalClaim'
        });
      const v2257 = stdlib.sub(v2029, v2243);
      const v2258 = stdlib.ge(v2257, stdlib.checkedBigNumberify('./index.rsh:267:72:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2258, {
        at: './index.rsh:267:72:application',
        fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
        msg: 'assume >= 0',
        who: 'Claimant_finalClaim'
        });
      const v2261 = stdlib.Array_set(v2028, '0', v2257);
      const v2262 = stdlib.Array_set(v2011, stdlib.checkedBigNumberify('./index.rsh:267:72:application', stdlib.UInt_max, '0'), v2261);
      ;
      const v2263 = true;
      const v2264 = await txn1.getOutput('Claimant_finalClaim', 'v2263', ctc3, v2263);
      if (v1386) {
        stdlib.protect(ctc8, await interact.out(v2200, v2264), {
          at: './index.rsh:255:12:application',
          fs: ['at ./index.rsh:255:12:application call to [unknown function] (defined at: ./index.rsh:255:12:function exp)', 'at ./index.rsh:269:12:application call to "k" (defined at: ./index.rsh:262:13:function exp)', 'at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
          msg: 'out',
          who: 'Claimant_finalClaim'
          });
        }
      else {
        }
      
      const v2270 = stdlib.safeAdd(v1997, v2243);
      const v2271 = stdlib.safeAdd(v2001, v2003);
      const v2272 = stdlib.safeSub(v2002, stdlib.checkedBigNumberify('./index.rsh:279:30:decimal', stdlib.UInt_max, '1'));
      const v3059 = v1995;
      const v3060 = v1996;
      const v3061 = v2270;
      const v3062 = stdlib.checkedBigNumberify('./index.rsh:276:13:decimal', stdlib.UInt_max, '0');
      const v3063 = v1999;
      const v3064 = true;
      const v3065 = v2271;
      const v3066 = v2272;
      const v3067 = v2003;
      const v3068 = v2004;
      const v3070 = v2084;
      const v3071 = v2008;
      const v3072 = v2262;
      const v3073 = v2012;
      const v3074 = v2262[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
      const v3075 = v3074[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'Claimant_tryClaim0_1259': {
      const v2315 = v2082[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_tryClaim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_tryClaim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_tryClaim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    AdminAPI_tryClaimFee0_1259: ctc6,
    Claimant_finalClaim0_1259: ctc6,
    Claimant_tryClaim0_1259: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v1761, v1766, v1950, v1995, v1996, v1997, v1998, v1999, v2000, v2001, v2002, v2003, v2004, v2008, v2009, v2011, v2012, v2028, v2029] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc4, ctc2]);
  const v2031 = ctc.selfAddress();
  const v2033 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:230:12:application call to [unknown function] (defined at: ./index.rsh:230:12:function exp)', 'at ./index.rsh:209:19:application call to "runClaimant_tryClaim0_1259" (defined at: ./index.rsh:229:11:function exp)', 'at ./index.rsh:209:19:application call to [unknown function] (defined at: ./index.rsh:209:19:function exp)'],
    msg: 'in',
    who: 'Claimant_tryClaim'
    });
  const v2037 = stdlib.ge(v2029, v1998);
  const v2038 = stdlib.gt(v2002, stdlib.checkedBigNumberify('./index.rsh:232:25:decimal', stdlib.UInt_max, '1'));
  const v2039 = v2037 ? v2038 : false;
  const v2040 = stdlib.addressEq(v2031, v1766);
  const v2041 = v2039 ? v2040 : false;
  stdlib.assert(v2041, {
    at: './index.rsh:231:17:application',
    fs: ['at ./index.rsh:230:12:application call to [unknown function] (defined at: ./index.rsh:230:12:function exp)', 'at ./index.rsh:230:12:application call to [unknown function] (defined at: ./index.rsh:230:12:function exp)', 'at ./index.rsh:209:19:application call to "runClaimant_tryClaim0_1259" (defined at: ./index.rsh:229:11:function exp)', 'at ./index.rsh:209:19:application call to [unknown function] (defined at: ./index.rsh:209:19:function exp)'],
    msg: null,
    who: 'Claimant_tryClaim'
    });
  const v2044 = ['Claimant_tryClaim0_1259', v2033];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1761, v1766, v1950, v1995, v1996, v1997, v1998, v1999, v2000, v2001, v2002, v2003, v2004, v2008, v2009, v2011, v2012, v2028, v2029, v2044],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:235:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2082], secs: v2084, time: v2083, didSend: v1386, from: v2081 } = txn1;
      
      switch (v2082[0]) {
        case 'AdminAPI_tryClaimFee0_1259': {
          const v2085 = v2082[1];
          
          break;
          }
        case 'Claimant_finalClaim0_1259': {
          const v2200 = v2082[1];
          
          break;
          }
        case 'Claimant_tryClaim0_1259': {
          const v2315 = v2082[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_tryClaim"
            });
          ;
          const v2404 = stdlib.sub(v2029, v1998);
          const v2408 = stdlib.Array_set(v2028, '0', v2404);
          const v2409 = stdlib.Array_set(v2011, stdlib.checkedBigNumberify('./index.rsh:241:51:application', stdlib.UInt_max, '0'), v2408);
          sim_r.txns.push({
            kind: 'from',
            to: v1766,
            tok: v1761
            });
          const v2410 = true;
          const v2411 = await txn1.getOutput('Claimant_tryClaim', 'v2410', ctc3, v2410);
          
          const v2416 = stdlib.safeAdd(v1997, v1998);
          const v2417 = stdlib.safeSub(v2002, stdlib.checkedBigNumberify('./index.rsh:249:41:decimal', stdlib.UInt_max, '1'));
          let v2418;
          const v2419 = stdlib.eq(v2004, stdlib.checkedBigNumberify('./index.rsh:214:20:decimal', stdlib.UInt_max, '2'));
          const v2420 = stdlib.gt(v2417, stdlib.checkedBigNumberify('./index.rsh:214:29:decimal', stdlib.UInt_max, '1'));
          const v2421 = v2419 ? v2420 : false;
          if (v2421) {
            const v2422 = stdlib.safeDiv(v1998, stdlib.checkedBigNumberify('./index.rsh:214:56:decimal', stdlib.UInt_max, '2'));
            v2418 = v2422;
            }
          else {
            const v2423 = stdlib.eq(v2004, stdlib.checkedBigNumberify('./index.rsh:215:25:decimal', stdlib.UInt_max, '1'));
            const v2425 = v2423 ? v2420 : false;
            if (v2425) {
              v2418 = v1998;
              }
            else {
              const v2426 = stdlib.safeSub(v1999, v1997);
              v2418 = v2426;
              }
            }
          const v2427 = stdlib.safeAdd(v2001, v2003);
          const v3135 = v1995;
          const v3136 = v1996;
          const v3137 = v2416;
          const v3138 = v2418;
          const v3139 = v1999;
          const v3140 = v2000;
          const v3141 = v2427;
          const v3142 = v2417;
          const v3143 = v2003;
          const v3144 = v2004;
          const v3146 = v2084;
          const v3147 = v2008;
          const v3148 = v2409;
          const v3149 = v2012;
          const v3150 = v2409[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
          const v3151 = v3150[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc4, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v2082], secs: v2084, time: v2083, didSend: v1386, from: v2081 } = txn1;
  switch (v2082[0]) {
    case 'AdminAPI_tryClaimFee0_1259': {
      const v2085 = v2082[1];
      return;
      break;
      }
    case 'Claimant_finalClaim0_1259': {
      const v2200 = v2082[1];
      return;
      break;
      }
    case 'Claimant_tryClaim0_1259': {
      const v2315 = v2082[1];
      undefined /* setApiDetails */;
      ;
      const v2392 = stdlib.ge(v2029, v1998);
      const v2393 = stdlib.gt(v2002, stdlib.checkedBigNumberify('./index.rsh:238:25:decimal', stdlib.UInt_max, '1'));
      const v2394 = v2392 ? v2393 : false;
      const v2395 = stdlib.addressEq(v2081, v1766);
      const v2396 = v2394 ? v2395 : false;
      stdlib.assert(v2396, {
        at: './index.rsh:237:18:application',
        fs: ['at ./index.rsh:236:13:application call to [unknown function] (defined at: ./index.rsh:236:13:function exp)'],
        msg: null,
        who: 'Claimant_tryClaim'
        });
      const v2398 = stdlib.ge(v2084, v2001);
      stdlib.assert(v2398, {
        at: './index.rsh:240:18:application',
        fs: ['at ./index.rsh:236:13:application call to [unknown function] (defined at: ./index.rsh:236:13:function exp)'],
        msg: null,
        who: 'Claimant_tryClaim'
        });
      const v2404 = stdlib.sub(v2029, v1998);
      const v2405 = stdlib.ge(v2404, stdlib.checkedBigNumberify('./index.rsh:241:51:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2405, {
        at: './index.rsh:241:51:application',
        fs: ['at ./index.rsh:236:13:application call to [unknown function] (defined at: ./index.rsh:236:13:function exp)'],
        msg: 'assume >= 0',
        who: 'Claimant_tryClaim'
        });
      const v2408 = stdlib.Array_set(v2028, '0', v2404);
      const v2409 = stdlib.Array_set(v2011, stdlib.checkedBigNumberify('./index.rsh:241:51:application', stdlib.UInt_max, '0'), v2408);
      ;
      const v2410 = true;
      const v2411 = await txn1.getOutput('Claimant_tryClaim', 'v2410', ctc3, v2410);
      if (v1386) {
        stdlib.protect(ctc8, await interact.out(v2315, v2411), {
          at: './index.rsh:229:12:application',
          fs: ['at ./index.rsh:229:12:application call to [unknown function] (defined at: ./index.rsh:229:12:function exp)', 'at ./index.rsh:242:12:application call to "k" (defined at: ./index.rsh:236:13:function exp)', 'at ./index.rsh:236:13:application call to [unknown function] (defined at: ./index.rsh:236:13:function exp)'],
          msg: 'out',
          who: 'Claimant_tryClaim'
          });
        }
      else {
        }
      
      const v2416 = stdlib.safeAdd(v1997, v1998);
      const v2417 = stdlib.safeSub(v2002, stdlib.checkedBigNumberify('./index.rsh:249:41:decimal', stdlib.UInt_max, '1'));
      let v2418;
      const v2419 = stdlib.eq(v2004, stdlib.checkedBigNumberify('./index.rsh:214:20:decimal', stdlib.UInt_max, '2'));
      const v2420 = stdlib.gt(v2417, stdlib.checkedBigNumberify('./index.rsh:214:29:decimal', stdlib.UInt_max, '1'));
      const v2421 = v2419 ? v2420 : false;
      if (v2421) {
        const v2422 = stdlib.safeDiv(v1998, stdlib.checkedBigNumberify('./index.rsh:214:56:decimal', stdlib.UInt_max, '2'));
        v2418 = v2422;
        }
      else {
        const v2423 = stdlib.eq(v2004, stdlib.checkedBigNumberify('./index.rsh:215:25:decimal', stdlib.UInt_max, '1'));
        const v2425 = v2423 ? v2420 : false;
        if (v2425) {
          v2418 = v1998;
          }
        else {
          const v2426 = stdlib.safeSub(v1999, v1997);
          v2418 = v2426;
          }
        }
      const v2427 = stdlib.safeAdd(v2001, v2003);
      const v3135 = v1995;
      const v3136 = v1996;
      const v3137 = v2416;
      const v3138 = v2418;
      const v3139 = v1999;
      const v3140 = v2000;
      const v3141 = v2427;
      const v3142 = v2417;
      const v3143 = v2003;
      const v3144 = v2004;
      const v3146 = v2084;
      const v3147 = v2008;
      const v3148 = v2409;
      const v3149 = v2012;
      const v3150 = v2409[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
      const v3151 = v3150[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    }
  
  
  };
export async function Depositor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Depositor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Depositor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    amountToKeep: ctc0,
    claimingAddr: ctc1,
    managerContract: ctc2,
    timePerStep: ctc0,
    timeSteps: ctc0,
    tokenToKeep: ctc3,
    vaultType: ctc0
    });
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_tryClaimFee0_1259: ctc8,
    Claimant_finalClaim0_1259: ctc8,
    Claimant_tryClaim0_1259: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v1573 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1574 = [v1573];
  const v1580 = stdlib.protect(ctc4, await interact.setVault(), {
    at: './index.rsh:133:37:application',
    fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
    msg: 'setVault',
    who: 'Depositor'
    });
  const v1581 = v1580.amountToKeep;
  const v1582 = v1580.claimingAddr;
  const v1583 = v1580.managerContract;
  const v1584 = v1580.timePerStep;
  const v1585 = v1580.timeSteps;
  const v1586 = v1580.tokenToKeep;
  const v1587 = v1580.vaultType;
  const v1595 = stdlib.gt(v1581, stdlib.checkedBigNumberify('./index.rsh:135:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1595, {
    at: './index.rsh:135:11:application',
    fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
    msg: null,
    who: 'Depositor'
    });
  const v1596 = stdlib.gt(v1584, stdlib.checkedBigNumberify('./index.rsh:136:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1596, {
    at: './index.rsh:136:11:application',
    fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
    msg: null,
    who: 'Depositor'
    });
  const v1597 = stdlib.gt(v1585, stdlib.checkedBigNumberify('./index.rsh:137:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1597, {
    at: './index.rsh:137:11:application',
    fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
    msg: null,
    who: 'Depositor'
    });
  const v1598 = stdlib.le(v1587, stdlib.checkedBigNumberify('./index.rsh:138:25:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v1598, {
    at: './index.rsh:138:11:application',
    fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
    msg: null,
    who: 'Depositor'
    });
  const v1599 = stdlib.eq(v1587, stdlib.checkedBigNumberify('./index.rsh:140:22:decimal', stdlib.UInt_max, '0'));
  if (v1599) {
    const v1600 = stdlib.eq(v1585, stdlib.checkedBigNumberify('./index.rsh:141:27:decimal', stdlib.UInt_max, '1'));
    stdlib.assert(v1600, {
      at: './index.rsh:141:13:application',
      fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  const v1601 = stdlib.eq(v1587, stdlib.checkedBigNumberify('./index.rsh:143:22:decimal', stdlib.UInt_max, '1'));
  if (v1601) {
    const v1602 = stdlib.safeDiv(v1581, v1585);
    const v1603 = stdlib.gt(v1602, stdlib.checkedBigNumberify('./index.rsh:144:50:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1603, {
      at: './index.rsh:144:13:application',
      fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  const v1604 = stdlib.eq(v1587, stdlib.checkedBigNumberify('./index.rsh:146:22:decimal', stdlib.UInt_max, '2'));
  if (v1604) {
    const v1605 = stdlib.le(v1585, stdlib.checkedBigNumberify('./index.rsh:147:27:decimal', stdlib.UInt_max, '33'));
    stdlib.assert(v1605, {
      at: './index.rsh:147:13:application',
      fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    const v1606 = stdlib.safeSub(v1585, stdlib.checkedBigNumberify('./index.rsh:148:41:decimal', stdlib.UInt_max, '1'));
    const v1610 = stdlib.mod(v1606, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1611 = stdlib.eq(v1610, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1612 = v1611 ? stdlib.checkedBigNumberify('./index.rsh:148:18:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('reach standard library:428:15:decimal', stdlib.UInt_max, '1');
    const v1614 = stdlib.div(v1606, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v1617 = stdlib.mod(v1614, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1618 = stdlib.eq(v1617, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1624 = stdlib.mul(v1612, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '4'));
    const v1619 = v1618 ? v1624 : v1612;
    const v1627 = stdlib.div(v1614, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v1630 = stdlib.mod(v1627, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1631 = stdlib.eq(v1630, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1637 = stdlib.mul(v1619, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '16'));
    const v1632 = v1631 ? v1637 : v1619;
    const v1640 = stdlib.div(v1627, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v1643 = stdlib.mod(v1640, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1644 = stdlib.eq(v1643, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1650 = stdlib.mul(v1632, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '256'));
    const v1645 = v1644 ? v1650 : v1632;
    const v1653 = stdlib.div(v1640, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v1656 = stdlib.mod(v1653, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1657 = stdlib.eq(v1656, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1663 = stdlib.mul(v1645, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '65536'));
    const v1658 = v1657 ? v1663 : v1645;
    const v1666 = stdlib.div(v1653, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v1669 = stdlib.mod(v1666, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1670 = stdlib.eq(v1669, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1676 = stdlib.mul(v1658, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '4294967296'));
    const v1671 = v1670 ? v1676 : v1658;
    const v1681 = stdlib.lt(v1671, stdlib.UInt_max);
    stdlib.assert(v1681, {
      at: './index.rsh:148:13:application',
      fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    const v1757 = stdlib.safeDiv(v1581, v1671);
    const v1758 = stdlib.gt(v1757, stdlib.checkedBigNumberify('./index.rsh:150:23:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1758, {
      at: './index.rsh:150:13:application',
      fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    const v1759 = stdlib.le(v1757, stdlib.UInt_max);
    stdlib.assert(v1759, {
      at: './index.rsh:151:13:application',
      fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1586, v1581, v1587, v1585, v1584, v1582, v1583],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:156:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:156:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1761, v1762, v1763, v1764, v1765, v1766, v1767], secs: v1769, time: v1768, didSend: v937, from: v1760 } = txn1;
      
      const v1770 = v1574[stdlib.checkedBigNumberify('./index.rsh:156:13:dot', stdlib.UInt_max, '0')];
      const v1771 = stdlib.Array_set(v1770, '0', stdlib.checkedBigNumberify('./index.rsh:156:13:dot', stdlib.UInt_max, '0'));
      const v1772 = stdlib.Array_set(v1574, stdlib.checkedBigNumberify('./index.rsh:156:13:dot', stdlib.UInt_max, '0'), v1771);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1761
        });
      ;
      const v1778 = stdlib.eq(v1763, stdlib.checkedBigNumberify('./index.rsh:171:20:decimal', stdlib.UInt_max, '0'));
      const v1780 = stdlib.eq(v1763, stdlib.checkedBigNumberify('./index.rsh:174:20:decimal', stdlib.UInt_max, '1'));
      const v1783 = stdlib.eq(v1763, stdlib.checkedBigNumberify('./index.rsh:177:20:decimal', stdlib.UInt_max, '2'));
      const v1941 = [];
      const v1942 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v1767,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('./index.rsh:191:11:decimal', stdlib.UInt_max, '1'),
            pays: stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc5.defaultValue /* simReturnVal */];})();
      const v1943 = await txn1.getOutput('internal', 'v1942', ctc6, v1942);
      const v1945 = v1943[stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '0')];
      const v1946 = v1943[stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '1')];
      const v1947 = v1946[stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '0')];
      const v1949 = v1946[stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '2')];
      const v1950 = v1946[stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '3')];
      const v1962 = stdlib.safeMuldiv(v1762, v1947, stdlib.checkedBigNumberify('./index.rsh:198:53:decimal', stdlib.UInt_max, '10000'));
      const v1969 = stdlib.add(v1769, v1765);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1761, v1762, v1763, v1764, v1765, v1766, v1767], secs: v1769, time: v1768, didSend: v937, from: v1760 } = txn1;
  const v1770 = v1574[stdlib.checkedBigNumberify('./index.rsh:156:13:dot', stdlib.UInt_max, '0')];
  const v1771 = stdlib.Array_set(v1770, '0', stdlib.checkedBigNumberify('./index.rsh:156:13:dot', stdlib.UInt_max, '0'));
  const v1772 = stdlib.Array_set(v1574, stdlib.checkedBigNumberify('./index.rsh:156:13:dot', stdlib.UInt_max, '0'), v1771);
  ;
  ;
  const v1774 = stdlib.gt(v1762, stdlib.checkedBigNumberify('./index.rsh:166:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1774, {
    at: './index.rsh:166:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v1775 = stdlib.gt(v1765, stdlib.checkedBigNumberify('./index.rsh:167:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1775, {
    at: './index.rsh:167:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v1776 = stdlib.gt(v1764, stdlib.checkedBigNumberify('./index.rsh:168:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1776, {
    at: './index.rsh:168:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v1777 = stdlib.le(v1763, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v1777, {
    at: './index.rsh:169:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v1778 = stdlib.eq(v1763, stdlib.checkedBigNumberify('./index.rsh:171:20:decimal', stdlib.UInt_max, '0'));
  if (v1778) {
    const v1779 = stdlib.eq(v1764, stdlib.checkedBigNumberify('./index.rsh:172:26:decimal', stdlib.UInt_max, '1'));
    stdlib.assert(v1779, {
      at: './index.rsh:172:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  const v1780 = stdlib.eq(v1763, stdlib.checkedBigNumberify('./index.rsh:174:20:decimal', stdlib.UInt_max, '1'));
  if (v1780) {
    const v1781 = stdlib.safeDiv(v1762, v1764);
    const v1782 = stdlib.gt(v1781, stdlib.checkedBigNumberify('./index.rsh:175:49:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1782, {
      at: './index.rsh:175:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  const v1783 = stdlib.eq(v1763, stdlib.checkedBigNumberify('./index.rsh:177:20:decimal', stdlib.UInt_max, '2'));
  if (v1783) {
    const v1784 = stdlib.le(v1764, stdlib.checkedBigNumberify('./index.rsh:178:26:decimal', stdlib.UInt_max, '63'));
    stdlib.assert(v1784, {
      at: './index.rsh:178:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    const v1785 = stdlib.safeSub(v1764, stdlib.checkedBigNumberify('./index.rsh:179:40:decimal', stdlib.UInt_max, '1'));
    const v1789 = stdlib.mod(v1785, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1790 = stdlib.eq(v1789, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1791 = v1790 ? stdlib.checkedBigNumberify('./index.rsh:179:17:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('reach standard library:428:15:decimal', stdlib.UInt_max, '1');
    const v1793 = stdlib.div(v1785, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v1796 = stdlib.mod(v1793, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1797 = stdlib.eq(v1796, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1803 = stdlib.mul(v1791, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '4'));
    const v1798 = v1797 ? v1803 : v1791;
    const v1806 = stdlib.div(v1793, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v1809 = stdlib.mod(v1806, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1810 = stdlib.eq(v1809, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1816 = stdlib.mul(v1798, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '16'));
    const v1811 = v1810 ? v1816 : v1798;
    const v1819 = stdlib.div(v1806, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v1822 = stdlib.mod(v1819, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1823 = stdlib.eq(v1822, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1829 = stdlib.mul(v1811, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '256'));
    const v1824 = v1823 ? v1829 : v1811;
    const v1832 = stdlib.div(v1819, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v1835 = stdlib.mod(v1832, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1836 = stdlib.eq(v1835, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1842 = stdlib.mul(v1824, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '65536'));
    const v1837 = v1836 ? v1842 : v1824;
    const v1845 = stdlib.div(v1832, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v1848 = stdlib.mod(v1845, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v1849 = stdlib.eq(v1848, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v1855 = stdlib.mul(v1837, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '4294967296'));
    const v1850 = v1849 ? v1855 : v1837;
    const v1860 = stdlib.lt(v1850, stdlib.UInt_max);
    stdlib.assert(v1860, {
      at: './index.rsh:179:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    const v1936 = stdlib.safeDiv(v1762, v1850);
    const v1937 = stdlib.gt(v1936, stdlib.checkedBigNumberify('./index.rsh:181:22:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1937, {
      at: './index.rsh:181:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    const v1938 = stdlib.le(v1936, stdlib.UInt_max);
    stdlib.assert(v1938, {
      at: './index.rsh:182:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  const v1941 = [];
  const v1942 = undefined /* Remote */;
  const v1943 = await txn1.getOutput('internal', 'v1942', ctc6, v1942);
  const v1945 = v1943[stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '0')];
  const v1946 = v1943[stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '1')];
  const v1947 = v1946[stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '0')];
  const v1949 = v1946[stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '2')];
  const v1950 = v1946[stdlib.checkedBigNumberify('./index.rsh:192:5:application', stdlib.UInt_max, '3')];
  const v1955 = stdlib.le(v1945, stdlib.UInt_max);
  stdlib.assert(v1955, {
    at: './index.rsh:192:5:application',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Depositor'
    });
  const v1957 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1945);
  stdlib.assert(v1957, {
    at: './index.rsh:192:5:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Depositor'
    });
  const v1961 = stdlib.le(v1947, stdlib.checkedBigNumberify('./index.rsh:196:21:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v1961, {
    at: './index.rsh:196:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v1962 = stdlib.safeMuldiv(v1762, v1947, stdlib.checkedBigNumberify('./index.rsh:198:53:decimal', stdlib.UInt_max, '10000'));
  const v1964 = stdlib.sub(stdlib.UInt_max, v1962);
  const v1965 = stdlib.le(v1762, v1964);
  stdlib.assert(v1965, {
    at: './index.rsh:199:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v1969 = stdlib.add(v1769, v1765);
  const v1970 = stdlib.safeAdd(v1762, v1962);
  
  const txn2 = await (ctc.sendrecv({
    args: [v1760, v1761, v1762, v1763, v1764, v1765, v1766, v1769, v1772, v1778, v1780, v1783, v1945, v1949, v1950, v1962, v1969],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1768,
    onlyIf: true,
    out_tys: [],
    pay: [v1949, [[v1970, v1761]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v1973, time: v1972, didSend: v1216, from: v1971 } = txn2;
      
      const v1974 = stdlib.safeAdd(v1762, v1962);
      const v1976 = stdlib.add(v1945, v1949);
      sim_r.txns.push({
        amt: v1949,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1979 = v1772[stdlib.checkedBigNumberify('./index.rsh:205:13:dot', stdlib.UInt_max, '0')];
      const v1980 = v1979[stdlib.checkedBigNumberify('./index.rsh:205:13:dot', stdlib.UInt_max, '0')];
      const v1981 = stdlib.add(v1980, v1974);
      const v1985 = stdlib.Array_set(v1979, '0', v1981);
      const v1986 = stdlib.Array_set(v1772, stdlib.checkedBigNumberify('./index.rsh:205:13:dot', stdlib.UInt_max, '0'), v1985);
      sim_r.txns.push({
        amt: v1974,
        kind: 'to',
        tok: v1761
        });
      
      let v1989;
      if (v1778) {
        v1989 = v1762;
        }
      else {
        if (v1780) {
          const v1992 = stdlib.safeDiv(v1762, v1764);
          v1989 = v1992;
          }
        else {
          if (v1783) {
            const v1994 = stdlib.safeDiv(v1762, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', stdlib.UInt_max, '2'));
            v1989 = v1994;
            }
          else {
            v1989 = stdlib.checkedBigNumberify('./index.rsh:15:17:decimal', stdlib.UInt_max, '0');
            }
          }
        }
      const v1995 = v1949;
      const v1996 = v1962;
      const v1997 = stdlib.checkedBigNumberify('./index.rsh:209:42:decimal', stdlib.UInt_max, '0');
      const v1998 = v1989;
      const v1999 = v1762;
      const v2000 = false;
      const v2001 = v1969;
      const v2002 = v1764;
      const v2003 = v1765;
      const v2004 = v1763;
      const v2005 = v1972;
      const v2008 = v1973;
      const v2009 = v1769;
      const v2011 = v1986;
      const v2012 = v1976;
      
      if (await (async () => {
        
        return true;})()) {
        const v2028 = v2011[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
        const v2029 = v2028[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1761
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc0, ctc12, ctc10, ctc10, ctc10, ctc0, ctc0, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1973, time: v1972, didSend: v1216, from: v1971 } = txn2;
  const v1974 = stdlib.safeAdd(v1762, v1962);
  const v1976 = stdlib.add(v1945, v1949);
  const v1977 = stdlib.le(v1976, stdlib.UInt_max);
  stdlib.assert(v1977, {
    at: './index.rsh:205:13:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Depositor'
    });
  ;
  const v1979 = v1772[stdlib.checkedBigNumberify('./index.rsh:205:13:dot', stdlib.UInt_max, '0')];
  const v1980 = v1979[stdlib.checkedBigNumberify('./index.rsh:205:13:dot', stdlib.UInt_max, '0')];
  const v1981 = stdlib.add(v1980, v1974);
  const v1982 = stdlib.le(v1981, stdlib.UInt_max);
  stdlib.assert(v1982, {
    at: './index.rsh:205:13:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Depositor'
    });
  const v1985 = stdlib.Array_set(v1979, '0', v1981);
  const v1986 = stdlib.Array_set(v1772, stdlib.checkedBigNumberify('./index.rsh:205:13:dot', stdlib.UInt_max, '0'), v1985);
  ;
  const v1987 = stdlib.addressEq(v1760, v1971);
  stdlib.assert(v1987, {
    at: './index.rsh:205:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Depositor'
    });
  stdlib.protect(ctc7, await interact.ready(), {
    at: './index.rsh:206:27:application',
    fs: ['at ./index.rsh:206:27:application call to [unknown function] (defined at: ./index.rsh:206:27:function exp)', 'at ./index.rsh:206:27:application call to "liftedInteract" (defined at: ./index.rsh:206:27:application)'],
    msg: 'ready',
    who: 'Depositor'
    });
  
  let v1989;
  if (v1778) {
    v1989 = v1762;
    }
  else {
    if (v1780) {
      const v1992 = stdlib.safeDiv(v1762, v1764);
      v1989 = v1992;
      }
    else {
      if (v1783) {
        const v1994 = stdlib.safeDiv(v1762, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', stdlib.UInt_max, '2'));
        v1989 = v1994;
        }
      else {
        v1989 = stdlib.checkedBigNumberify('./index.rsh:15:17:decimal', stdlib.UInt_max, '0');
        }
      }
    }
  let v1995 = v1949;
  let v1996 = v1962;
  let v1997 = stdlib.checkedBigNumberify('./index.rsh:209:42:decimal', stdlib.UInt_max, '0');
  let v1998 = v1989;
  let v1999 = v1762;
  let v2000 = false;
  let v2001 = v1969;
  let v2002 = v1764;
  let v2003 = v1765;
  let v2004 = v1763;
  let v2005 = v1972;
  let v2008 = v1973;
  let v2009 = v1769;
  let v2011 = v1986;
  let v2012 = v1976;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const v2028 = v2011[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
    const v2029 = v2028[stdlib.checkedBigNumberify('./index.rsh:227:18:application', stdlib.UInt_max, '0')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2082], secs: v2084, time: v2083, didSend: v1386, from: v2081 } = txn4;
    switch (v2082[0]) {
      case 'AdminAPI_tryClaimFee0_1259': {
        const v2085 = v2082[1];
        undefined /* setApiDetails */;
        ;
        const v2093 = stdlib.addressEq(v2081, v1950);
        const v2096 = stdlib.ge(v2029, v1996);
        const v2097 = v2093 ? v2096 : false;
        const v2099 = stdlib.ge(v2012, v1995);
        const v2100 = v2097 ? v2099 : false;
        stdlib.assert(v2100, {
          at: './index.rsh:290:18:application',
          fs: ['at ./index.rsh:289:13:application call to [unknown function] (defined at: ./index.rsh:289:13:function exp)'],
          msg: null,
          who: 'Depositor'
          });
        const v2104 = stdlib.sub(v2012, v1995);
        const v2105 = stdlib.ge(v2104, stdlib.checkedBigNumberify('./index.rsh:293:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2105, {
          at: './index.rsh:293:66:application',
          fs: ['at ./index.rsh:289:13:application call to [unknown function] (defined at: ./index.rsh:289:13:function exp)'],
          msg: 'assume >= 0',
          who: 'Depositor'
          });
        ;
        const v2112 = stdlib.sub(v2029, v1996);
        const v2113 = stdlib.ge(v2112, stdlib.checkedBigNumberify('./index.rsh:293:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2113, {
          at: './index.rsh:293:66:application',
          fs: ['at ./index.rsh:289:13:application call to [unknown function] (defined at: ./index.rsh:289:13:function exp)'],
          msg: 'assume >= 0',
          who: 'Depositor'
          });
        const v2116 = stdlib.Array_set(v2028, '0', v2112);
        const v2117 = stdlib.Array_set(v2011, stdlib.checkedBigNumberify('./index.rsh:293:66:application', stdlib.UInt_max, '0'), v2116);
        ;
        const v2118 = true;
        await txn4.getOutput('AdminAPI_tryClaimFee', 'v2118', ctc10, v2118);
        const cv1995 = stdlib.checkedBigNumberify('./index.rsh:300:13:decimal', stdlib.UInt_max, '0');
        const cv1996 = stdlib.checkedBigNumberify('./index.rsh:299:13:decimal', stdlib.UInt_max, '0');
        const cv1997 = v1997;
        const cv1998 = v1998;
        const cv1999 = v1999;
        const cv2000 = v2000;
        const cv2001 = v2001;
        const cv2002 = v2002;
        const cv2003 = v2003;
        const cv2004 = v2004;
        const cv2005 = v2083;
        const cv2008 = v2084;
        const cv2009 = v2008;
        const cv2011 = v2117;
        const cv2012 = v2104;
        
        v1995 = cv1995;
        v1996 = cv1996;
        v1997 = cv1997;
        v1998 = cv1998;
        v1999 = cv1999;
        v2000 = cv2000;
        v2001 = cv2001;
        v2002 = cv2002;
        v2003 = cv2003;
        v2004 = cv2004;
        v2005 = cv2005;
        v2008 = cv2008;
        v2009 = cv2009;
        v2011 = cv2011;
        v2012 = cv2012;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Claimant_finalClaim0_1259': {
        const v2200 = v2082[1];
        undefined /* setApiDetails */;
        ;
        const v2243 = stdlib.safeSub(v1999, v1997);
        const v2244 = stdlib.eq(v2029, v2243);
        const v2245 = stdlib.eq(v2002, stdlib.checkedBigNumberify('./index.rsh:264:26:decimal', stdlib.UInt_max, '1'));
        const v2246 = v2244 ? v2245 : false;
        const v2247 = stdlib.addressEq(v2081, v1766);
        const v2248 = v2246 ? v2247 : false;
        stdlib.assert(v2248, {
          at: './index.rsh:263:18:application',
          fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
          msg: null,
          who: 'Depositor'
          });
        const v2250 = stdlib.ge(v2084, v2001);
        stdlib.assert(v2250, {
          at: './index.rsh:266:18:application',
          fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
          msg: null,
          who: 'Depositor'
          });
        const v2257 = stdlib.sub(v2029, v2243);
        const v2258 = stdlib.ge(v2257, stdlib.checkedBigNumberify('./index.rsh:267:72:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2258, {
          at: './index.rsh:267:72:application',
          fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
          msg: 'assume >= 0',
          who: 'Depositor'
          });
        const v2261 = stdlib.Array_set(v2028, '0', v2257);
        const v2262 = stdlib.Array_set(v2011, stdlib.checkedBigNumberify('./index.rsh:267:72:application', stdlib.UInt_max, '0'), v2261);
        ;
        const v2263 = true;
        await txn4.getOutput('Claimant_finalClaim', 'v2263', ctc10, v2263);
        const v2270 = stdlib.safeAdd(v1997, v2243);
        const v2271 = stdlib.safeAdd(v2001, v2003);
        const v2272 = stdlib.safeSub(v2002, stdlib.checkedBigNumberify('./index.rsh:279:30:decimal', stdlib.UInt_max, '1'));
        const cv1995 = v1995;
        const cv1996 = v1996;
        const cv1997 = v2270;
        const cv1998 = stdlib.checkedBigNumberify('./index.rsh:276:13:decimal', stdlib.UInt_max, '0');
        const cv1999 = v1999;
        const cv2000 = true;
        const cv2001 = v2271;
        const cv2002 = v2272;
        const cv2003 = v2003;
        const cv2004 = v2004;
        const cv2005 = v2083;
        const cv2008 = v2084;
        const cv2009 = v2008;
        const cv2011 = v2262;
        const cv2012 = v2012;
        
        v1995 = cv1995;
        v1996 = cv1996;
        v1997 = cv1997;
        v1998 = cv1998;
        v1999 = cv1999;
        v2000 = cv2000;
        v2001 = cv2001;
        v2002 = cv2002;
        v2003 = cv2003;
        v2004 = cv2004;
        v2005 = cv2005;
        v2008 = cv2008;
        v2009 = cv2009;
        v2011 = cv2011;
        v2012 = cv2012;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Claimant_tryClaim0_1259': {
        const v2315 = v2082[1];
        undefined /* setApiDetails */;
        ;
        const v2392 = stdlib.ge(v2029, v1998);
        const v2393 = stdlib.gt(v2002, stdlib.checkedBigNumberify('./index.rsh:238:25:decimal', stdlib.UInt_max, '1'));
        const v2394 = v2392 ? v2393 : false;
        const v2395 = stdlib.addressEq(v2081, v1766);
        const v2396 = v2394 ? v2395 : false;
        stdlib.assert(v2396, {
          at: './index.rsh:237:18:application',
          fs: ['at ./index.rsh:236:13:application call to [unknown function] (defined at: ./index.rsh:236:13:function exp)'],
          msg: null,
          who: 'Depositor'
          });
        const v2398 = stdlib.ge(v2084, v2001);
        stdlib.assert(v2398, {
          at: './index.rsh:240:18:application',
          fs: ['at ./index.rsh:236:13:application call to [unknown function] (defined at: ./index.rsh:236:13:function exp)'],
          msg: null,
          who: 'Depositor'
          });
        const v2404 = stdlib.sub(v2029, v1998);
        const v2405 = stdlib.ge(v2404, stdlib.checkedBigNumberify('./index.rsh:241:51:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2405, {
          at: './index.rsh:241:51:application',
          fs: ['at ./index.rsh:236:13:application call to [unknown function] (defined at: ./index.rsh:236:13:function exp)'],
          msg: 'assume >= 0',
          who: 'Depositor'
          });
        const v2408 = stdlib.Array_set(v2028, '0', v2404);
        const v2409 = stdlib.Array_set(v2011, stdlib.checkedBigNumberify('./index.rsh:241:51:application', stdlib.UInt_max, '0'), v2408);
        ;
        const v2410 = true;
        await txn4.getOutput('Claimant_tryClaim', 'v2410', ctc10, v2410);
        const v2416 = stdlib.safeAdd(v1997, v1998);
        const v2417 = stdlib.safeSub(v2002, stdlib.checkedBigNumberify('./index.rsh:249:41:decimal', stdlib.UInt_max, '1'));
        let v2418;
        const v2419 = stdlib.eq(v2004, stdlib.checkedBigNumberify('./index.rsh:214:20:decimal', stdlib.UInt_max, '2'));
        const v2420 = stdlib.gt(v2417, stdlib.checkedBigNumberify('./index.rsh:214:29:decimal', stdlib.UInt_max, '1'));
        const v2421 = v2419 ? v2420 : false;
        if (v2421) {
          const v2422 = stdlib.safeDiv(v1998, stdlib.checkedBigNumberify('./index.rsh:214:56:decimal', stdlib.UInt_max, '2'));
          v2418 = v2422;
          }
        else {
          const v2423 = stdlib.eq(v2004, stdlib.checkedBigNumberify('./index.rsh:215:25:decimal', stdlib.UInt_max, '1'));
          const v2425 = v2423 ? v2420 : false;
          if (v2425) {
            v2418 = v1998;
            }
          else {
            const v2426 = stdlib.safeSub(v1999, v1997);
            v2418 = v2426;
            }
          }
        const v2427 = stdlib.safeAdd(v2001, v2003);
        const cv1995 = v1995;
        const cv1996 = v1996;
        const cv1997 = v2416;
        const cv1998 = v2418;
        const cv1999 = v1999;
        const cv2000 = v2000;
        const cv2001 = v2427;
        const cv2002 = v2417;
        const cv2003 = v2003;
        const cv2004 = v2004;
        const cv2005 = v2083;
        const cv2008 = v2084;
        const cv2009 = v2008;
        const cv2011 = v2409;
        const cv2012 = v2012;
        
        v1995 = cv1995;
        v1996 = cv1996;
        v1997 = cv1997;
        v1998 = cv1998;
        v1999 = cv1999;
        v2000 = cv2000;
        v2001 = cv2001;
        v2002 = cv2002;
        v2003 = cv2003;
        v2004 = cv2004;
        v2005 = cv2005;
        v2008 = cv2008;
        v2009 = cv2009;
        v2011 = cv2011;
        v2012 = cv2012;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function AdminAPI_tryClaimFee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_tryClaimFee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_tryClaimFee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _AdminAPI_tryClaimFee4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Claimant_finalClaim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_finalClaim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_finalClaim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Claimant_finalClaim4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Claimant_tryClaim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_tryClaim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_tryClaim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Claimant_tryClaim4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`AdminAPI_tryClaimFee()byte`, `Claimant_finalClaim()byte`, `Claimant_tryClaim()byte`],
    pure: [`Viewer_read()(byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`],
    sigs: [`AdminAPI_tryClaimFee()byte`, `Claimant_finalClaim()byte`, `Claimant_tryClaim()byte`, `Viewer_read()(byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAQAAECBP///////////wEIAxD2iZS9DNvs+PsM966FnAtIaCCgjQaQTiYDAQEBAAAiNQAxGEEHbipkSSJbNQEhBVs1AjYaABdJQQCOIjUEIzUGSSEIDEAAWkkhCQxAABAhCRJEKjX/gAECNP9QQgCIIQgSRDQBJRJEKWQoZFBJNQNXcAE0A1doCFA0A1dYCFA0A1dgCFA0A1dxCFA0A1eZCFA0A1d5CFA0A1fLCFA1B0IG60khCgxAAA4hChJEKjX/KDT/UEIAMIHeldXaCBJEKjX/KTT/UEIAHjYaAhc1BDYaAzYaARdJIwxAA2lJIQYMQAJkIQYSRCU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpKSkpKSiJbNf9XCCA1/lcoIDX9IQtbNfyBUFs1+4FYWzX6gWBbNfkhDFs1+FdwARc194FxWzX2gXlbNfWBgQFbNfSBiQFbNfOBkQFbNfJXoRE18YGyAVs18Fe6ETXvgcsBWzXuSTUFNe2ABC5FxgE07VCwNO0iVUkjDEABPUkkDEAAtCQSRDTuNPkPNPUjDRAxADT+EhBEMgc09g9ENO40+QlJNewiD0SxIrIBNPmyEiWyEDT+shQ0/7IRs4AJAAAAAAAACWoBsCg1BzT1IwlJNesjDTXpNPMkEjTpEEEACTT5JAo16kIAGDTzIxI06RBBAAc0+TXqQgAHNPg0+gk16jT/NP40/TT8NPs0+jT5CDTqNPg09zT2NPQINOs09DTzMgYyBzTyNPE07zTsFlwAXAA08EIEeEg0+DT6CTXsNO407BI09SMSEDEANP4SEEQyBzT2D0Q07jTsCUk16yIPRLEisgE07LISJbIQNP6yFDT/shGzgAkAAAAAAAAI1wGwKDUHNP80/jT9NPw0+zT6NOwIIjT4IzT2NPQINPUjCTT0NPMyBjIHNPI08TTvNOsWXABcADTwQgP1SDEANP0SNO40+w8QNPA0/A8QRDTwNPwJSTXsIg9EsSKyATT8sggjshAxALIHszTuNPsJSTXrIg9EsSKyATT7shIlshAxALIUNP+yEbOACQAAAAAAAAhGAbAoNQc0/zT+NP0iIjT6NPk0+DT3NPY09TT0NPMyBjIHNPI08TTvNOsWXABcADTsQgNrIxJEIzQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKIQ1bNf+BKFs1/oE4WzX9V3ARNfyBjAFbNfuBtAFbNfqABJqLkXSwNP40+gg1+TQDgYQBWzT7CEk1+CEEDkQ0+4gECzT8VwARSTX3Ils0+QhJNfYhBA5ENPk0/4gECDQDVwAgMQASRDQDV4EBF0EABzT+NfVCACg0A1eCARdBAAo0/jT9CjX1QgAVNANXgwEXQQAJNP4kCjX1QgADIjX1NP80A1dIIDQDV5QgNPs0+iI09TT+IjQDgbwBWzT9NAOBQFs0A4EwWzIGMgc0AyEMWzT8NPc09hZcAFwANPhCAm1IIQ6IA2giNAESRDQESSISTDQCEhFESTUFSUpKSSJbNf8hBVs1/iEHWzX9gRhbNfwhDVs1+1coIDX6IQtbNfmABKyLal80/xZQNP4WUDT9FlA0/BZQNPsWUDT6UDT5FlCwgRGvSTX4SVcAESEFr1wAXAA19yEOiAL1sSKyASKyEiWyEDIKshQ0/7IRszT+Ig1ENPsiDUQ0/CINRDT9JA5ENP0iEkk19kEACDT8IxJEQgAANP0jEkk19UEACzT+NPwKIg1EQgAANP0kEkk19EEAmjT8gT8ORDT8Iwk18yMkNPMkGCMSTTXyNPMkCjXxNPJJJQs08SQYIxJNNfA08SQKNe808EkhBws07yQYIxJNNe407yQKNe007kmBgAILNO0kGCMSTTXsNO0kCjXrNOxJgYCABAs06yQYIxJNSTXqSYGAgICAEAs06yQKJBgjEk1JNekhBAxENP406QpJNegiDUQ06CEEDkRCAACABWFwcElENPkWUAM18jIKeDXxMgpgNPEJFjXwsSKyAYEGshA0+bIYgAR+NdlFshqzMgpgNPEJNPAXCRa3AD5XBABQNfOACAAAAAAAAAeWNPNQsDTzSTXyIls18TTyVwg4STXwIls17zTwIQdbNe408FcYIDXtNPEhBA5EIjTxEkQ07yEPDkQ0/jTvHSEPlzXsNP4hBDTsCQ5EMgc0+wg16zEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+lAyBxZQNPdQNPYWUQcIUDT1FlEHCFA09BZRBwhQNPEWUDTuFlA07VA07BZQNOsWUClLAVcAf2coSwFXf0VnSCM1ATIGNQJCAK81/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe40/lcAEUk17SJbNew07hY071A08FA08RZQNPIWUDTzFlA09BZQNPUWUDT2FlEHCFA09xZQNPgWUDT5FlA0+hZQNPwWUDT9FlA0/lA0/xZQNO1QNOwWUClLAVcAf2coSwFXf1RnSCU1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQYxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 211,
  unsupported: [],
  version: 11,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:192:5:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:200:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:310:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:209:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "AdminAPI_tryClaimFee": AdminAPI_tryClaimFee,
  "Claimant_finalClaim": Claimant_finalClaim,
  "Claimant_tryClaim": Claimant_tryClaim,
  "Depositor": Depositor
  };
export const _APIs = {
  AdminAPI: {
    tryClaimFee: AdminAPI_tryClaimFee
    },
  Claimant: {
    finalClaim: Claimant_finalClaim,
    tryClaim: Claimant_tryClaim
    }
  };
