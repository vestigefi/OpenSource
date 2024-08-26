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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc1]);
  
  const AdminView_readState = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v286, v300, v301, v302, v303] = svs;
      return (await ((async () => {
        
        const v310 = [v303, v302, v301, v300];
        
        return v310;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      AdminView: {
        readState: {
          decode: AdminView_readState,
          dom: [],
          rng: ctc3
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc2, ctc2]
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
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    adminAddr: ctc0,
    amtToPayAlgo: ctc1,
    amtToPayVest: ctc1,
    pctgAmt: ctc1,
    tokenToPay: ctc2
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc0]);
  const ctc7 = stdlib.T_Data({
    AdminAPI_getInfo0_66: ctc5,
    AdminAPI_updateParam0_66: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  
  
  const v268 = ctc.selfAddress();
  const v270 = stdlib.protect(ctc3, await interact.setParam(), {
    at: './index.rsh:35:37:application',
    fs: ['at ./index.rsh:28:13:application call to [unknown function] (defined at: ./index.rsh:28:17:function exp)'],
    msg: 'setParam',
    who: 'Admin'
    });
  const v271 = v270.adminAddr;
  const v272 = v270.amtToPayAlgo;
  const v273 = v270.amtToPayVest;
  const v274 = v270.pctgAmt;
  const v275 = v270.tokenToPay;
  const v281 = stdlib.addressEq(v271, v268);
  stdlib.assert(v281, {
    at: './index.rsh:36:11:application',
    fs: ['at ./index.rsh:28:13:application call to [unknown function] (defined at: ./index.rsh:28:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v282 = stdlib.ge(v274, stdlib.checkedBigNumberify('./index.rsh:37:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v282, {
    at: './index.rsh:37:11:application',
    fs: ['at ./index.rsh:28:13:application call to [unknown function] (defined at: ./index.rsh:28:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v283 = stdlib.le(v274, stdlib.checkedBigNumberify('./index.rsh:38:23:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v283, {
    at: './index.rsh:38:11:application',
    fs: ['at ./index.rsh:28:13:application call to [unknown function] (defined at: ./index.rsh:28:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v274, v275, v273, v272, v271],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc2, ctc1, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v285, v286, v287, v288, v289], secs: v291, time: v290, didSend: v44, from: v284 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v286
        });
      ;
      
      const v300 = v289;
      const v301 = v288;
      const v302 = v287;
      const v303 = v285;
      const v304 = v290;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v286
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
    tys: [ctc1, ctc2, ctc1, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v285, v286, v287, v288, v289], secs: v291, time: v290, didSend: v44, from: v284 } = txn1;
  ;
  ;
  const v296 = stdlib.addressEq(v289, v284);
  stdlib.assert(v296, {
    at: './index.rsh:47:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v297 = stdlib.ge(v285, stdlib.checkedBigNumberify('./index.rsh:48:22:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v297, {
    at: './index.rsh:48:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v298 = stdlib.le(v285, stdlib.checkedBigNumberify('./index.rsh:49:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v298, {
    at: './index.rsh:49:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.ready(), {
    at: './index.rsh:50:23:application',
    fs: ['at ./index.rsh:50:23:application call to [unknown function] (defined at: ./index.rsh:50:23:function exp)', 'at ./index.rsh:50:23:application call to "liftedInteract" (defined at: ./index.rsh:50:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v300 = v289;
  let v301 = v288;
  let v302 = v287;
  let v303 = v285;
  let v304 = v290;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v370], secs: v372, time: v371, didSend: v205, from: v369 } = txn3;
    switch (v370[0]) {
      case 'AdminAPI_getInfo0_66': {
        const v373 = v370[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v399 = [v303, v302, v301, v300];
        await txn3.getOutput('AdminAPI_getInfo', 'v399', ctc6, v399);
        const cv300 = v300;
        const cv301 = v301;
        const cv302 = v302;
        const cv303 = v303;
        const cv304 = v371;
        
        v300 = cv300;
        v301 = cv301;
        v302 = cv302;
        v303 = cv303;
        v304 = cv304;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'AdminAPI_updateParam0_66': {
        const v432 = v370[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v470 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '0')];
        const v471 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '1')];
        const v472 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '2')];
        const v473 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '3')];
        const v474 = stdlib.addressEq(v369, v300);
        const v475 = stdlib.ge(v470, stdlib.checkedBigNumberify('./index.rsh:80:26:decimal', stdlib.UInt_max, '0'));
        const v476 = v474 ? v475 : false;
        const v477 = stdlib.le(v470, stdlib.checkedBigNumberify('./index.rsh:81:26:decimal', stdlib.UInt_max, '10000'));
        const v478 = v476 ? v477 : false;
        stdlib.assert(v478, {
          at: './index.rsh:79:18:application',
          fs: ['at ./index.rsh:78:48:application call to [unknown function] (defined at: ./index.rsh:78:48:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v480 = true;
        await txn3.getOutput('AdminAPI_updateParam', 'v480', ctc8, v480);
        const cv300 = v473;
        const cv301 = v472;
        const cv302 = v471;
        const cv303 = v470;
        const cv304 = v371;
        
        v300 = cv300;
        v301 = cv301;
        v302 = cv302;
        v303 = cv303;
        v304 = cv304;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _AdminAPI_getInfo3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_getInfo3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_getInfo3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc1]);
  const ctc5 = stdlib.T_Data({
    AdminAPI_getInfo0_66: ctc3,
    AdminAPI_updateParam0_66: ctc4
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v286, v300, v301, v302, v303] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc2, ctc2, ctc2]);
  const v313 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:60:12:application call to [unknown function] (defined at: ./index.rsh:60:12:function exp)', 'at ./index.rsh:52:19:application call to "runAdminAPI_getInfo0_66" (defined at: ./index.rsh:59:11:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: 'in',
    who: 'AdminAPI_getInfo'
    });
  const v317 = ['AdminAPI_getInfo0_66', v313];
  
  const txn1 = await (ctc.sendrecv({
    args: [v286, v300, v301, v302, v303, v317],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:61:20:decimal', stdlib.UInt_max, '0'), v286]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v370], secs: v372, time: v371, didSend: v205, from: v369 } = txn1;
      
      switch (v370[0]) {
        case 'AdminAPI_getInfo0_66': {
          const v373 = v370[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_getInfo"
            });
          ;
          ;
          const v399 = [v303, v302, v301, v300];
          const v400 = await txn1.getOutput('AdminAPI_getInfo', 'v399', ctc4, v399);
          
          const v623 = v300;
          const v624 = v301;
          const v625 = v302;
          const v626 = v303;
          sim_r.isHalt = false;
          
          break;
          }
        case 'AdminAPI_updateParam0_66': {
          const v432 = v370[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v370], secs: v372, time: v371, didSend: v205, from: v369 } = txn1;
  switch (v370[0]) {
    case 'AdminAPI_getInfo0_66': {
      const v373 = v370[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v399 = [v303, v302, v301, v300];
      const v400 = await txn1.getOutput('AdminAPI_getInfo', 'v399', ctc4, v399);
      if (v205) {
        stdlib.protect(ctc6, await interact.out(v373, v400), {
          at: './index.rsh:59:12:application',
          fs: ['at ./index.rsh:59:12:application call to [unknown function] (defined at: ./index.rsh:59:12:function exp)', 'at ./index.rsh:63:16:application call to "mInfo" (defined at: ./index.rsh:62:17:function exp)', 'at ./index.rsh:62:17:application call to [unknown function] (defined at: ./index.rsh:62:17:function exp)'],
          msg: 'out',
          who: 'AdminAPI_getInfo'
          });
        }
      else {
        }
      
      const v623 = v300;
      const v624 = v301;
      const v625 = v302;
      const v626 = v303;
      return;
      
      break;
      }
    case 'AdminAPI_updateParam0_66': {
      const v432 = v370[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AdminAPI_updateParam3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_updateParam3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_updateParam3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc1]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    AdminAPI_getInfo0_66: ctc4,
    AdminAPI_updateParam0_66: ctc3
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Null;
  
  
  const [v286, v300, v301, v302, v303] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc2, ctc2, ctc2]);
  const v319 = ctc.selfAddress();
  const v321 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:71:45:application call to [unknown function] (defined at: ./index.rsh:71:45:function exp)', 'at ./index.rsh:52:19:application call to "runAdminAPI_updateParam0_66" (defined at: ./index.rsh:70:11:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: 'in',
    who: 'AdminAPI_updateParam'
    });
  const v322 = v321[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v331 = stdlib.addressEq(v319, v300);
  const v332 = stdlib.ge(v322, stdlib.checkedBigNumberify('./index.rsh:73:26:decimal', stdlib.UInt_max, '0'));
  const v333 = v331 ? v332 : false;
  const v334 = stdlib.le(v322, stdlib.checkedBigNumberify('./index.rsh:74:26:decimal', stdlib.UInt_max, '10000'));
  const v335 = v333 ? v334 : false;
  stdlib.assert(v335, {
    at: './index.rsh:72:17:application',
    fs: ['at ./index.rsh:71:45:application call to [unknown function] (defined at: ./index.rsh:71:45:function exp)', 'at ./index.rsh:71:45:application call to [unknown function] (defined at: ./index.rsh:71:45:function exp)', 'at ./index.rsh:52:19:application call to "runAdminAPI_updateParam0_66" (defined at: ./index.rsh:70:11:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: null,
    who: 'AdminAPI_updateParam'
    });
  const v343 = ['AdminAPI_updateParam0_66', v321];
  
  const txn1 = await (ctc.sendrecv({
    args: [v286, v300, v301, v302, v303, v343],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:77:26:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:77:30:decimal', stdlib.UInt_max, '0'), v286]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v370], secs: v372, time: v371, didSend: v205, from: v369 } = txn1;
      
      switch (v370[0]) {
        case 'AdminAPI_getInfo0_66': {
          const v373 = v370[1];
          
          break;
          }
        case 'AdminAPI_updateParam0_66': {
          const v432 = v370[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_updateParam"
            });
          ;
          ;
          const v470 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '0')];
          const v471 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '1')];
          const v472 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '2')];
          const v473 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '3')];
          const v480 = true;
          const v481 = await txn1.getOutput('AdminAPI_updateParam', 'v480', ctc6, v480);
          
          const v638 = v473;
          const v639 = v472;
          const v640 = v471;
          const v641 = v470;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v370], secs: v372, time: v371, didSend: v205, from: v369 } = txn1;
  switch (v370[0]) {
    case 'AdminAPI_getInfo0_66': {
      const v373 = v370[1];
      return;
      break;
      }
    case 'AdminAPI_updateParam0_66': {
      const v432 = v370[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v470 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '0')];
      const v471 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '1')];
      const v472 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '2')];
      const v473 = v432[stdlib.checkedBigNumberify('./index.rsh:70:11:spread', stdlib.UInt_max, '3')];
      const v474 = stdlib.addressEq(v369, v300);
      const v475 = stdlib.ge(v470, stdlib.checkedBigNumberify('./index.rsh:80:26:decimal', stdlib.UInt_max, '0'));
      const v476 = v474 ? v475 : false;
      const v477 = stdlib.le(v470, stdlib.checkedBigNumberify('./index.rsh:81:26:decimal', stdlib.UInt_max, '10000'));
      const v478 = v476 ? v477 : false;
      stdlib.assert(v478, {
        at: './index.rsh:79:18:application',
        fs: ['at ./index.rsh:78:48:application call to [unknown function] (defined at: ./index.rsh:78:48:function exp)'],
        msg: null,
        who: 'AdminAPI_updateParam'
        });
      const v480 = true;
      const v481 = await txn1.getOutput('AdminAPI_updateParam', 'v480', ctc6, v480);
      if (v205) {
        stdlib.protect(ctc7, await interact.out(v432, v481), {
          at: './index.rsh:70:12:application',
          fs: ['at ./index.rsh:70:12:application call to [unknown function] (defined at: ./index.rsh:70:12:function exp)', 'at ./index.rsh:83:12:application call to "k" (defined at: ./index.rsh:78:48:function exp)', 'at ./index.rsh:78:48:application call to [unknown function] (defined at: ./index.rsh:78:48:function exp)'],
          msg: 'out',
          who: 'AdminAPI_updateParam'
          });
        }
      else {
        }
      
      const v638 = v473;
      const v639 = v472;
      const v640 = v471;
      const v641 = v470;
      return;
      
      break;
      }
    }
  
  
  };
export async function AdminAPI_getInfo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_getInfo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_getInfo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _AdminAPI_getInfo3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function AdminAPI_updateParam(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_updateParam expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_updateParam expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _AdminAPI_updateParam3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`AdminAPI_getInfo()(uint64,uint64,uint64,address)`, `AdminAPI_updateParam(uint64,uint64,uint64,address)byte`],
    pure: [`AdminView_readState()(uint64,uint64,uint64,address)`],
    sigs: [`AdminAPI_getInfo()(uint64,uint64,uint64,address)`, `AdminAPI_updateParam(uint64,uint64,uint64,address)byte`, `AdminView_readState()(uint64,uint64,uint64,address)`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByALAAEIAwKsgojUC5T/jKUMOJBOEKCNBiYDAQAAAQEiNQAxGEECYylkSSJbNQEkWzUCNhoAF0lBAG4iNQQjNQZJIQUMQABLSSEGDEAAKCEGEkQ0ASUSRChkSTUDVzgINANXMAhQNANXKAhQNANXCCBQNQdCAgwhBRJENhoBNhoCUDYaA1A2GgRQNf8qNP9QQgAugcWy1/EHEkQpNf8oNP9QIQevUEIAGDYaAhc1BDYaAzYaARdJIQQMQADHIQQSRCU0ARJENARJIhJMNAISEUQoZEk1A0lKSSJbNf9XCCA1/oEoWzX9gTBbNfwhB1s1+0k1BTX6gAQRWX3NNPpQsDT6IlVAADmACAAAAAAAAAGPNPsWNPwWUDT9FlA0/lBQsDT7FjT8FlA0/RZQNP5QNQc0/zT+NP00/DT7MgZCAMw0+lcBODX5NPkiWzX4MQA0/hI0+CIPEDT4IQgOEESACQAAAAAAAAHgAbAqNQc0/zT5VxggNPkhCVs0+SRbNPgyBkIAiCISRCEKiAEdIjQBEkQ0BEkiEkw0AhIRREk1BUlKSSJbNf8kWzX+IQlbNf2BGFs1/FcgIDX7gASRoMUoNP8WUDT+FlA0/RZQNPwWUDT7ULAhCogA0bEisgEishKBBLIQMgqyFDT+shGzNPsxABJENP8iD0Q0/yEIDkQ0/jT7NPw0/TT/MgZCAAA1/zX+Nf01/DX7STX6FjT7UDT8FlA0/RZQNP4WUChLAVcAQGdIJTUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 11,
  warnings: []
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:90:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Admin": Admin,
  "AdminAPI_getInfo": AdminAPI_getInfo,
  "AdminAPI_updateParam": AdminAPI_updateParam
  };
export const _APIs = {
  AdminAPI: {
    getInfo: AdminAPI_getInfo,
    updateParam: AdminAPI_updateParam
    }
  };
