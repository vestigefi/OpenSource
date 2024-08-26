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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  
  const Viewer_read = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7702, v7716, v7719, v7721, v7744, v7748] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7803, v8125, v8126, v8127, v8128, v8129, v8130, v8131, v8138, v8139] = svs;
      return (await ((async () => {
        
        const v8153 = [v7686, v7687, v7695, v7748, v7690, v7691, v7803, v7688, true];
        
        return v8153;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
      const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v8620, v8624, v8631, v8632] = svs;
      return (await ((async () => {
        
        const v8643 = [v7686, v7687, v7695, v7748, v7690, v7691, v8620, v7688, false];
        
        return v8643;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7791, v7792, v7794, v7795, v7802, v7803] = svs;
      return (await ((async () => {
        
        const v7806 = [v7686, v7687, v7695, v7748, v7795, v7794, v7791, v7688, v7792];
        
        return v7806;}))(...args));
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
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc1, ctc2, ctc5, ctc2, ctc2, ctc0, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc3, ctc3, ctc5, ctc2],
      8: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc2, ctc2, ctc3, ctc5, ctc2],
      9: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc2, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2]
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_6828: ctc8,
    OffererAPI_claim0_6828: ctc8,
    User_claimToken0_6828: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7803, v8125, v8126, v8127, v8128, v8129, v8130, v8131, v8138, v8139] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1]);
  const v8179 = ctc.selfAddress();
  const v8181 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:246:12:application call to [unknown function] (defined at: ./index.rsh:246:12:function exp)', 'at ./index.rsh:201:23:application call to "runAdminAPI_claimFees0_6828" (defined at: ./index.rsh:245:11:function exp)', 'at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
    msg: 'in',
    who: 'AdminAPI_claimFees'
    });
  const v8183 = stdlib.addressEq(v8179, v7721);
  stdlib.assert(v8183, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:247:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:246:12:application call to [unknown function] (defined at: ./index.rsh:246:12:function exp)', 'at ./index.rsh:246:12:application call to [unknown function] (defined at: ./index.rsh:246:12:function exp)', 'at ./index.rsh:201:23:application call to "runAdminAPI_claimFees0_6828" (defined at: ./index.rsh:245:11:function exp)', 'at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
    msg: null,
    who: 'AdminAPI_claimFees'
    });
  const v8185 = v8138[stdlib.checkedBigNumberify('./index.rsh:248:25:application', stdlib.UInt_max, '1')];
  const v8186 = v8185[stdlib.checkedBigNumberify('./index.rsh:248:25:application', stdlib.UInt_max, '0')];
  const v8187 = stdlib.ge(v8186, v8127);
  const v8188 = v8138[stdlib.checkedBigNumberify('./index.rsh:248:63:application', stdlib.UInt_max, '0')];
  const v8189 = v8188[stdlib.checkedBigNumberify('./index.rsh:248:63:application', stdlib.UInt_max, '0')];
  const v8190 = stdlib.ge(v8189, v8128);
  const v8191 = v8187 ? v8190 : false;
  stdlib.assert(v8191, {
    at: './index.rsh:248:17:application',
    fs: ['at ./index.rsh:246:12:application call to [unknown function] (defined at: ./index.rsh:246:12:function exp)', 'at ./index.rsh:246:12:application call to [unknown function] (defined at: ./index.rsh:246:12:function exp)', 'at ./index.rsh:201:23:application call to "runAdminAPI_claimFees0_6828" (defined at: ./index.rsh:245:11:function exp)', 'at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
    msg: null,
    who: 'AdminAPI_claimFees'
    });
  const v8194 = ['AdminAPI_claimFees0_6828', v8181];
  
  const txn1 = await (ctc.sendrecv({
    args: [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7803, v8125, v8126, v8127, v8128, v8129, v8130, v8131, v8138, v8139, v8194],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:250:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v8209], secs: v8211, time: v8210, didSend: v7053, from: v8208 } = txn1;
      
      switch (v8209[0]) {
        case 'AdminAPI_claimFees0_6828': {
          const v8212 = v8209[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_claimFees"
            });
          ;
          const v8231 = v8138[stdlib.checkedBigNumberify('./index.rsh:253:26:application', stdlib.UInt_max, '1')];
          const v8232 = v8231[stdlib.checkedBigNumberify('./index.rsh:253:26:application', stdlib.UInt_max, '0')];
          const v8252 = stdlib.sub(v8232, v8127);
          const v8256 = stdlib.Array_set(v8231, '0', v8252);
          const v8257 = stdlib.Array_set(v8138, stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '1'), v8256);
          sim_r.txns.push({
            kind: 'from',
            to: v8208,
            tok: v7693
            });
          const v8258 = v8257[stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0')];
          const v8259 = v8258[stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0')];
          const v8263 = stdlib.sub(v8259, v8128);
          const v8267 = stdlib.Array_set(v8258, '0', v8263);
          const v8268 = stdlib.Array_set(v8257, stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0'), v8267);
          sim_r.txns.push({
            kind: 'from',
            to: v8208,
            tok: v7687
            });
          const v8269 = true;
          const v8270 = await txn1.getOutput('AdminAPI_claimFees', 'v8269', ctc5, v8269);
          
          const v10618 = v8125;
          const v10619 = v8126;
          const v10620 = stdlib.checkedBigNumberify('./index.rsh:261:13:decimal', stdlib.UInt_max, '0');
          const v10621 = stdlib.checkedBigNumberify('./index.rsh:260:13:decimal', stdlib.UInt_max, '0');
          const v10622 = v8129;
          const v10623 = false;
          const v10624 = v8131;
          const v10626 = v8268;
          const v10627 = v8139;
          const v10628 = v8131 ? true : v8129;
          if (v10628) {
            sim_r.isHalt = false;
            }
          else {
            const v10630 = v8268[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            const v10631 = v10630[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: undefined /* Nothing */
              });
            const v10634 = stdlib.sub(v10631, v10631);
            const v10636 = stdlib.Array_set(v10630, '0', v10634);
            const v10637 = stdlib.Array_set(v8268, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v10636);
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: v7687
              });
            const v10638 = v10637[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
            const v10639 = v10638[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7721,
              tok: v7693
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v7693
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v7687
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'OffererAPI_claim0_6828': {
          const v8332 = v8209[1];
          
          break;
          }
        case 'User_claimToken0_6828': {
          const v8452 = v8209[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v8209], secs: v8211, time: v8210, didSend: v7053, from: v8208 } = txn1;
  switch (v8209[0]) {
    case 'AdminAPI_claimFees0_6828': {
      const v8212 = v8209[1];
      undefined /* setApiDetails */;
      ;
      const v8229 = stdlib.addressEq(v8208, v7721);
      stdlib.assert(v8229, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:252:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
        msg: null,
        who: 'AdminAPI_claimFees'
        });
      const v8231 = v8138[stdlib.checkedBigNumberify('./index.rsh:253:26:application', stdlib.UInt_max, '1')];
      const v8232 = v8231[stdlib.checkedBigNumberify('./index.rsh:253:26:application', stdlib.UInt_max, '0')];
      const v8233 = stdlib.ge(v8232, v8127);
      const v8234 = v8138[stdlib.checkedBigNumberify('./index.rsh:253:64:application', stdlib.UInt_max, '0')];
      const v8235 = v8234[stdlib.checkedBigNumberify('./index.rsh:253:64:application', stdlib.UInt_max, '0')];
      const v8236 = stdlib.ge(v8235, v8128);
      const v8237 = v8233 ? v8236 : false;
      stdlib.assert(v8237, {
        at: './index.rsh:253:18:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
        msg: null,
        who: 'AdminAPI_claimFees'
        });
      const v8252 = stdlib.sub(v8232, v8127);
      const v8253 = stdlib.ge(v8252, stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8253, {
        at: './index.rsh:254:92:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
        msg: 'assume >= 0',
        who: 'AdminAPI_claimFees'
        });
      const v8256 = stdlib.Array_set(v8231, '0', v8252);
      const v8257 = stdlib.Array_set(v8138, stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '1'), v8256);
      ;
      const v8258 = v8257[stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0')];
      const v8259 = v8258[stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0')];
      const v8263 = stdlib.sub(v8259, v8128);
      const v8264 = stdlib.ge(v8263, stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8264, {
        at: './index.rsh:254:92:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
        msg: 'assume >= 0',
        who: 'AdminAPI_claimFees'
        });
      const v8267 = stdlib.Array_set(v8258, '0', v8263);
      const v8268 = stdlib.Array_set(v8257, stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0'), v8267);
      ;
      const v8269 = true;
      const v8270 = await txn1.getOutput('AdminAPI_claimFees', 'v8269', ctc5, v8269);
      if (v7053) {
        stdlib.protect(ctc0, await interact.out(v8212, v8270), {
          at: './index.rsh:245:12:application',
          fs: ['at ./index.rsh:245:12:application call to [unknown function] (defined at: ./index.rsh:245:12:function exp)', 'at ./index.rsh:255:12:application call to "k" (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
          msg: 'out',
          who: 'AdminAPI_claimFees'
          });
        }
      else {
        }
      
      const v10618 = v8125;
      const v10619 = v8126;
      const v10620 = stdlib.checkedBigNumberify('./index.rsh:261:13:decimal', stdlib.UInt_max, '0');
      const v10621 = stdlib.checkedBigNumberify('./index.rsh:260:13:decimal', stdlib.UInt_max, '0');
      const v10622 = v8129;
      const v10623 = false;
      const v10624 = v8131;
      const v10626 = v8268;
      const v10627 = v8139;
      const v10628 = v8131 ? true : v8129;
      if (v10628) {
        return;
        }
      else {
        const v10630 = v8268[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
        const v10631 = v10630[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
        const v10632 = stdlib.sub(v8139, v8139);
        const v10633 = stdlib.ge(v10632, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v10633, {
          at: './index.rsh:384:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'AdminAPI_claimFees'
          });
        ;
        const v10634 = stdlib.sub(v10631, v10631);
        const v10635 = stdlib.ge(v10634, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v10635, {
          at: './index.rsh:384:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'AdminAPI_claimFees'
          });
        const v10636 = stdlib.Array_set(v10630, '0', v10634);
        const v10637 = stdlib.Array_set(v8268, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v10636);
        ;
        const v10638 = v10637[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
        const v10639 = v10638[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
        const v10640 = stdlib.sub(v10639, v10639);
        const v10641 = stdlib.ge(v10640, stdlib.checkedBigNumberify('./index.rsh:385:53:application', stdlib.UInt_max, '0'));
        stdlib.assert(v10641, {
          at: './index.rsh:385:53:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'AdminAPI_claimFees'
          });
        ;
        return;
        }
      break;
      }
    case 'OffererAPI_claim0_6828': {
      const v8332 = v8209[1];
      return;
      break;
      }
    case 'User_claimToken0_6828': {
      const v8452 = v8209[1];
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_7220: ctc8,
    OffererAPI_claim0_7220: ctc8,
    User_claimBackOffer0_7220: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v8620, v8624, v8631, v8632] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1]);
  const v8663 = ctc.selfAddress();
  const v8665 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:309:14:application call to [unknown function] (defined at: ./index.rsh:309:14:function exp)', 'at ./index.rsh:271:34:application call to "runAdminAPI_claimFees0_7220" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:271:34:application call to [unknown function] (defined at: ./index.rsh:271:34:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
    msg: 'in',
    who: 'AdminAPI_claimFees'
    });
  const v8666 = stdlib.addressEq(v8663, v7721);
  stdlib.assert(v8666, {
    at: './index.rsh:309:23:application',
    fs: ['at ./index.rsh:309:14:application call to [unknown function] (defined at: ./index.rsh:309:14:function exp)', 'at ./index.rsh:309:14:application call to [unknown function] (defined at: ./index.rsh:309:14:function exp)', 'at ./index.rsh:271:34:application call to "runAdminAPI_claimFees0_7220" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:271:34:application call to [unknown function] (defined at: ./index.rsh:271:34:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
    msg: null,
    who: 'AdminAPI_claimFees'
    });
  const v8669 = ['AdminAPI_claimFees0_7220', v8665];
  
  const txn1 = await (ctc.sendrecv({
    args: [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v8620, v8624, v8631, v8632, v8669],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:310:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v8684], secs: v8686, time: v8685, didSend: v7367, from: v8683 } = txn1;
      
      switch (v8684[0]) {
        case 'AdminAPI_claimFees0_7220': {
          const v8687 = v8684[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_claimFees"
            });
          ;
          const v8705 = v8631[stdlib.checkedBigNumberify('./index.rsh:313:31:application', stdlib.UInt_max, '1')];
          const v8706 = v8705[stdlib.checkedBigNumberify('./index.rsh:313:31:application', stdlib.UInt_max, '0')];
          const v8712 = stdlib.sub(v8706, v8706);
          const v8716 = stdlib.Array_set(v8705, '0', v8712);
          const v8717 = stdlib.Array_set(v8631, stdlib.checkedBigNumberify('./index.rsh:313:63:application', stdlib.UInt_max, '1'), v8716);
          sim_r.txns.push({
            kind: 'from',
            to: v8683,
            tok: v7693
            });
          const v8718 = true;
          const v8719 = await txn1.getOutput('AdminAPI_claimFees', 'v8718', ctc5, v8718);
          
          const v10690 = v8620;
          const v10692 = v8624;
          const v10694 = v8717;
          const v10695 = v8632;
          sim_r.isHalt = false;
          
          break;
          }
        case 'OffererAPI_claim0_7220': {
          const v8781 = v8684[1];
          
          break;
          }
        case 'User_claimBackOffer0_7220': {
          const v8875 = v8684[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v8684], secs: v8686, time: v8685, didSend: v7367, from: v8683 } = txn1;
  switch (v8684[0]) {
    case 'AdminAPI_claimFees0_7220': {
      const v8687 = v8684[1];
      undefined /* setApiDetails */;
      ;
      const v8704 = stdlib.addressEq(v8683, v7721);
      stdlib.assert(v8704, {
        at: './index.rsh:312:20:application',
        fs: ['at ./index.rsh:311:15:application call to [unknown function] (defined at: ./index.rsh:311:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
        msg: null,
        who: 'AdminAPI_claimFees'
        });
      const v8705 = v8631[stdlib.checkedBigNumberify('./index.rsh:313:31:application', stdlib.UInt_max, '1')];
      const v8706 = v8705[stdlib.checkedBigNumberify('./index.rsh:313:31:application', stdlib.UInt_max, '0')];
      const v8712 = stdlib.sub(v8706, v8706);
      const v8713 = stdlib.ge(v8712, stdlib.checkedBigNumberify('./index.rsh:313:63:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8713, {
        at: './index.rsh:313:63:application',
        fs: ['at ./index.rsh:311:15:application call to [unknown function] (defined at: ./index.rsh:311:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
        msg: 'assume >= 0',
        who: 'AdminAPI_claimFees'
        });
      const v8716 = stdlib.Array_set(v8705, '0', v8712);
      const v8717 = stdlib.Array_set(v8631, stdlib.checkedBigNumberify('./index.rsh:313:63:application', stdlib.UInt_max, '1'), v8716);
      ;
      const v8718 = true;
      const v8719 = await txn1.getOutput('AdminAPI_claimFees', 'v8718', ctc5, v8718);
      if (v7367) {
        stdlib.protect(ctc0, await interact.out(v8687, v8719), {
          at: './index.rsh:308:14:application',
          fs: ['at ./index.rsh:308:14:application call to [unknown function] (defined at: ./index.rsh:308:14:function exp)', 'at ./index.rsh:314:14:application call to "k" (defined at: ./index.rsh:311:15:function exp)', 'at ./index.rsh:311:15:application call to [unknown function] (defined at: ./index.rsh:311:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
          msg: 'out',
          who: 'AdminAPI_claimFees'
          });
        }
      else {
        }
      
      const v10690 = v8620;
      const v10692 = v8624;
      const v10694 = v8717;
      const v10695 = v8632;
      return;
      
      break;
      }
    case 'OffererAPI_claim0_7220': {
      const v8781 = v8684[1];
      return;
      break;
      }
    case 'User_claimBackOffer0_7220': {
      const v8875 = v8684[1];
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    OffererAPI_cancelOrder0_6603: ctc8,
    User_endRound0_6603: ctc8,
    User_offer0_6603: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7791, v7792, v7794, v7795, v7802, v7803] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v7821 = ctc.selfAddress();
  const v7823 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:355:12:application call to [unknown function] (defined at: ./index.rsh:355:12:function exp)', 'at ./index.rsh:328:37:application call to "runOffererAPI_cancelOrder0_6603" (defined at: ./index.rsh:354:11:function exp)', 'at ./index.rsh:328:37:application call to [unknown function] (defined at: ./index.rsh:328:37:function exp)'],
    msg: 'in',
    who: 'OffererAPI_cancelOrder'
    });
  const v7824 = stdlib.addressEq(v7821, v7686);
  const v7825 = v7792 ? false : true;
  const v7826 = v7824 ? v7825 : false;
  stdlib.assert(v7826, {
    at: './index.rsh:355:21:application',
    fs: ['at ./index.rsh:355:12:application call to [unknown function] (defined at: ./index.rsh:355:12:function exp)', 'at ./index.rsh:355:12:application call to [unknown function] (defined at: ./index.rsh:355:12:function exp)', 'at ./index.rsh:328:37:application call to "runOffererAPI_cancelOrder0_6603" (defined at: ./index.rsh:354:11:function exp)', 'at ./index.rsh:328:37:application call to [unknown function] (defined at: ./index.rsh:328:37:function exp)'],
    msg: null,
    who: 'OffererAPI_cancelOrder'
    });
  const v7829 = ['OffererAPI_cancelOrder0_6603', v7823];
  
  const txn1 = await (ctc.sendrecv({
    args: [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7791, v7792, v7794, v7795, v7802, v7803, v7829],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:356:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v7853], secs: v7855, time: v7854, didSend: v6734, from: v7852 } = txn1;
      
      switch (v7853[0]) {
        case 'OffererAPI_cancelOrder0_6603': {
          const v7856 = v7853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "OffererAPI_cancelOrder"
            });
          ;
          const v7884 = true;
          const v7885 = await txn1.getOutput('OffererAPI_cancelOrder', 'v7884', ctc5, v7884);
          
          const v10751 = v7803;
          if (v7792) {
            const v10752 = v7802[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
            const v10753 = v10752[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
            const v10754 = stdlib.safeSub(v10753, v7688);
            const v10755 = v7802[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '1')];
            const v10756 = v10755[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '0')];
            const v10892 = v7803;
            const v10893 = v7688;
            const v10894 = v10756;
            const v10895 = v10754;
            const v10896 = true;
            const v10897 = true;
            const v10898 = true;
            const v10900 = v7802;
            const v10901 = v7803;
            sim_r.isHalt = false;
            }
          else {
            const v10916 = v7803;
            const v10918 = false;
            const v10920 = v7802;
            const v10921 = v7803;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'User_endRound0_6603': {
          const v7943 = v7853[1];
          
          break;
          }
        case 'User_offer0_6603': {
          const v8030 = v7853[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v7853], secs: v7855, time: v7854, didSend: v6734, from: v7852 } = txn1;
  switch (v7853[0]) {
    case 'OffererAPI_cancelOrder0_6603': {
      const v7856 = v7853[1];
      undefined /* setApiDetails */;
      const v7876 = stdlib.le(v7803, stdlib.UInt_max);
      stdlib.assert(v7876, {
        at: './index.rsh:328:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'OffererAPI_cancelOrder'
        });
      ;
      const v7879 = stdlib.addressEq(v7852, v7686);
      const v7880 = v7792 ? false : true;
      const v7881 = v7879 ? v7880 : false;
      stdlib.assert(v7881, {
        at: './index.rsh:358:18:application',
        fs: ['at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
        msg: null,
        who: 'OffererAPI_cancelOrder'
        });
      const v7883 = stdlib.lt(v7855, v7748);
      stdlib.assert(v7883, {
        at: './index.rsh:359:18:application',
        fs: ['at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
        msg: 'it\'s too late to cancel',
        who: 'OffererAPI_cancelOrder'
        });
      const v7884 = true;
      const v7885 = await txn1.getOutput('OffererAPI_cancelOrder', 'v7884', ctc5, v7884);
      if (v6734) {
        stdlib.protect(ctc0, await interact.out(v7856, v7885), {
          at: './index.rsh:354:12:application',
          fs: ['at ./index.rsh:354:12:application call to [unknown function] (defined at: ./index.rsh:354:12:function exp)', 'at ./index.rsh:360:12:application call to "k" (defined at: ./index.rsh:357:13:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'out',
          who: 'OffererAPI_cancelOrder'
          });
        }
      else {
        }
      
      const v10751 = v7803;
      if (v7792) {
        const v10752 = v7802[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
        const v10753 = v10752[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
        const v10754 = stdlib.safeSub(v10753, v7688);
        const v10755 = v7802[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '1')];
        const v10756 = v10755[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '0')];
        const v10892 = v7803;
        const v10893 = v7688;
        const v10894 = v10756;
        const v10895 = v10754;
        const v10896 = true;
        const v10897 = true;
        const v10898 = true;
        const v10900 = v7802;
        const v10901 = v7803;
        return;
        }
      else {
        const v10916 = v7803;
        const v10918 = false;
        const v10920 = v7802;
        const v10921 = v7803;
        return;
        }
      break;
      }
    case 'User_endRound0_6603': {
      const v7943 = v7853[1];
      return;
      break;
      }
    case 'User_offer0_6603': {
      const v8030 = v7853[1];
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_6828: ctc8,
    OffererAPI_claim0_6828: ctc8,
    User_claimToken0_6828: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7803, v8125, v8126, v8127, v8128, v8129, v8130, v8131, v8138, v8139] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1]);
  const v8165 = ctc.selfAddress();
  const v8167 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:226:12:application call to [unknown function] (defined at: ./index.rsh:226:12:function exp)', 'at ./index.rsh:201:23:application call to "runOffererAPI_claim0_6828" (defined at: ./index.rsh:225:11:function exp)', 'at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
    msg: 'in',
    who: 'OffererAPI_claim'
    });
  const v8169 = stdlib.addressEq(v8165, v7686);
  stdlib.assert(v8169, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:227:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:226:12:application call to [unknown function] (defined at: ./index.rsh:226:12:function exp)', 'at ./index.rsh:226:12:application call to [unknown function] (defined at: ./index.rsh:226:12:function exp)', 'at ./index.rsh:201:23:application call to "runOffererAPI_claim0_6828" (defined at: ./index.rsh:225:11:function exp)', 'at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
    msg: 'You are not the Token Offerer!',
    who: 'OffererAPI_claim'
    });
  const v8172 = stdlib.ge(v8139, v8125);
  const v8174 = v8172 ? v8129 : false;
  stdlib.assert(v8174, {
    at: './index.rsh:228:17:application',
    fs: ['at ./index.rsh:226:12:application call to [unknown function] (defined at: ./index.rsh:226:12:function exp)', 'at ./index.rsh:226:12:application call to [unknown function] (defined at: ./index.rsh:226:12:function exp)', 'at ./index.rsh:201:23:application call to "runOffererAPI_claim0_6828" (defined at: ./index.rsh:225:11:function exp)', 'at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
    msg: null,
    who: 'OffererAPI_claim'
    });
  const v8177 = ['OffererAPI_claim0_6828', v8167];
  
  const txn1 = await (ctc.sendrecv({
    args: [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7803, v8125, v8126, v8127, v8128, v8129, v8130, v8131, v8138, v8139, v8177],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:230:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v8209], secs: v8211, time: v8210, didSend: v7053, from: v8208 } = txn1;
      
      switch (v8209[0]) {
        case 'AdminAPI_claimFees0_6828': {
          const v8212 = v8209[1];
          
          break;
          }
        case 'OffererAPI_claim0_6828': {
          const v8332 = v8209[1];
          sim_r.txns.push({
            kind: 'api',
            who: "OffererAPI_claim"
            });
          ;
          const v8406 = stdlib.sub(v8139, v8125);
          sim_r.txns.push({
            kind: 'from',
            to: v8208,
            tok: undefined /* Nothing */
            });
          const v8409 = true;
          const v8410 = await txn1.getOutput('OffererAPI_claim', 'v8409', ctc5, v8409);
          
          const v11528 = stdlib.checkedBigNumberify('./index.rsh:237:13:decimal', stdlib.UInt_max, '0');
          const v11529 = v8126;
          const v11530 = v8127;
          const v11531 = v8128;
          const v11532 = false;
          const v11533 = v8130;
          const v11534 = v8131;
          const v11536 = v8138;
          const v11537 = v8406;
          const v11539 = v8131 ? true : v8130;
          if (v11539) {
            sim_r.isHalt = false;
            }
          else {
            const v11540 = v8138[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            const v11541 = v11540[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: undefined /* Nothing */
              });
            const v11544 = stdlib.sub(v11541, v11541);
            const v11546 = stdlib.Array_set(v11540, '0', v11544);
            const v11547 = stdlib.Array_set(v8138, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v11546);
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: v7687
              });
            const v11548 = v11547[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
            const v11549 = v11548[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7721,
              tok: v7693
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v7693
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v7687
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_claimToken0_6828': {
          const v8452 = v8209[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v8209], secs: v8211, time: v8210, didSend: v7053, from: v8208 } = txn1;
  switch (v8209[0]) {
    case 'AdminAPI_claimFees0_6828': {
      const v8212 = v8209[1];
      return;
      break;
      }
    case 'OffererAPI_claim0_6828': {
      const v8332 = v8209[1];
      undefined /* setApiDetails */;
      ;
      const v8397 = stdlib.addressEq(v8208, v7686);
      stdlib.assert(v8397, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:232:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
        msg: 'You are not the Token Offerer!',
        who: 'OffererAPI_claim'
        });
      const v8400 = stdlib.ge(v8139, v8125);
      const v8402 = v8400 ? v8129 : false;
      stdlib.assert(v8402, {
        at: './index.rsh:233:18:application',
        fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
        msg: null,
        who: 'OffererAPI_claim'
        });
      const v8406 = stdlib.sub(v8139, v8125);
      const v8407 = stdlib.ge(v8406, stdlib.checkedBigNumberify('./index.rsh:234:35:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8407, {
        at: './index.rsh:234:35:application',
        fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
        msg: 'assume >= 0',
        who: 'OffererAPI_claim'
        });
      ;
      const v8409 = true;
      const v8410 = await txn1.getOutput('OffererAPI_claim', 'v8409', ctc5, v8409);
      if (v7053) {
        stdlib.protect(ctc0, await interact.out(v8332, v8410), {
          at: './index.rsh:225:12:application',
          fs: ['at ./index.rsh:225:12:application call to [unknown function] (defined at: ./index.rsh:225:12:function exp)', 'at ./index.rsh:235:12:application call to "k" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
          msg: 'out',
          who: 'OffererAPI_claim'
          });
        }
      else {
        }
      
      const v11528 = stdlib.checkedBigNumberify('./index.rsh:237:13:decimal', stdlib.UInt_max, '0');
      const v11529 = v8126;
      const v11530 = v8127;
      const v11531 = v8128;
      const v11532 = false;
      const v11533 = v8130;
      const v11534 = v8131;
      const v11536 = v8138;
      const v11537 = v8406;
      const v11539 = v8131 ? true : v8130;
      if (v11539) {
        return;
        }
      else {
        const v11540 = v8138[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
        const v11541 = v11540[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
        const v11542 = stdlib.sub(v8406, v8406);
        const v11543 = stdlib.ge(v11542, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11543, {
          at: './index.rsh:384:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'OffererAPI_claim'
          });
        ;
        const v11544 = stdlib.sub(v11541, v11541);
        const v11545 = stdlib.ge(v11544, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11545, {
          at: './index.rsh:384:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'OffererAPI_claim'
          });
        const v11546 = stdlib.Array_set(v11540, '0', v11544);
        const v11547 = stdlib.Array_set(v8138, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v11546);
        ;
        const v11548 = v11547[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
        const v11549 = v11548[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
        const v11550 = stdlib.sub(v11549, v11549);
        const v11551 = stdlib.ge(v11550, stdlib.checkedBigNumberify('./index.rsh:385:53:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11551, {
          at: './index.rsh:385:53:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'OffererAPI_claim'
          });
        ;
        return;
        }
      break;
      }
    case 'User_claimToken0_6828': {
      const v8452 = v8209[1];
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_7220: ctc8,
    OffererAPI_claim0_7220: ctc8,
    User_claimBackOffer0_7220: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v8620, v8624, v8631, v8632] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1]);
  const v8655 = ctc.selfAddress();
  const v8657 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:294:14:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:271:34:application call to "runOffererAPI_claim0_7220" (defined at: ./index.rsh:293:13:function exp)', 'at ./index.rsh:271:34:application call to [unknown function] (defined at: ./index.rsh:271:34:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
    msg: 'in',
    who: 'OffererAPI_claim'
    });
  const v8658 = stdlib.addressEq(v8655, v7686);
  stdlib.assert(v8658, {
    at: './index.rsh:294:23:application',
    fs: ['at ./index.rsh:294:14:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:294:14:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:271:34:application call to "runOffererAPI_claim0_7220" (defined at: ./index.rsh:293:13:function exp)', 'at ./index.rsh:271:34:application call to [unknown function] (defined at: ./index.rsh:271:34:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
    msg: null,
    who: 'OffererAPI_claim'
    });
  const v8661 = ['OffererAPI_claim0_7220', v8657];
  
  const txn1 = await (ctc.sendrecv({
    args: [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v8620, v8624, v8631, v8632, v8661],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:295:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v8684], secs: v8686, time: v8685, didSend: v7367, from: v8683 } = txn1;
      
      switch (v8684[0]) {
        case 'AdminAPI_claimFees0_7220': {
          const v8687 = v8684[1];
          
          break;
          }
        case 'OffererAPI_claim0_7220': {
          const v8781 = v8684[1];
          sim_r.txns.push({
            kind: 'api',
            who: "OffererAPI_claim"
            });
          ;
          const v8821 = v8631[stdlib.checkedBigNumberify('./index.rsh:298:31:application', stdlib.UInt_max, '0')];
          const v8822 = v8821[stdlib.checkedBigNumberify('./index.rsh:298:31:application', stdlib.UInt_max, '0')];
          const v8828 = stdlib.sub(v8822, v8822);
          const v8832 = stdlib.Array_set(v8821, '0', v8828);
          const v8833 = stdlib.Array_set(v8631, stdlib.checkedBigNumberify('./index.rsh:298:65:application', stdlib.UInt_max, '0'), v8832);
          sim_r.txns.push({
            kind: 'from',
            to: v8683,
            tok: v7687
            });
          const v8834 = true;
          const v8835 = await txn1.getOutput('OffererAPI_claim', 'v8834', ctc5, v8834);
          
          const v8840 = stdlib.eq(v8620, stdlib.checkedBigNumberify('./index.rsh:301:37:decimal', stdlib.UInt_max, '0'));
          const v11594 = v8620;
          const v11596 = true;
          const v11598 = v8833;
          const v11599 = v8632;
          if (v8840) {
            const v11600 = v8833[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            const v11601 = v11600[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: undefined /* Nothing */
              });
            const v11604 = stdlib.sub(v11601, v11601);
            const v11606 = stdlib.Array_set(v11600, '0', v11604);
            const v11607 = stdlib.Array_set(v8833, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v11606);
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: v7687
              });
            const v11608 = v11607[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
            const v11609 = v11608[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7721,
              tok: v7693
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v7693
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v7687
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
        case 'User_claimBackOffer0_7220': {
          const v8875 = v8684[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v8684], secs: v8686, time: v8685, didSend: v7367, from: v8683 } = txn1;
  switch (v8684[0]) {
    case 'AdminAPI_claimFees0_7220': {
      const v8687 = v8684[1];
      return;
      break;
      }
    case 'OffererAPI_claim0_7220': {
      const v8781 = v8684[1];
      undefined /* setApiDetails */;
      ;
      const v8820 = stdlib.addressEq(v8683, v7686);
      stdlib.assert(v8820, {
        at: './index.rsh:297:20:application',
        fs: ['at ./index.rsh:296:15:application call to [unknown function] (defined at: ./index.rsh:296:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
        msg: null,
        who: 'OffererAPI_claim'
        });
      const v8821 = v8631[stdlib.checkedBigNumberify('./index.rsh:298:31:application', stdlib.UInt_max, '0')];
      const v8822 = v8821[stdlib.checkedBigNumberify('./index.rsh:298:31:application', stdlib.UInt_max, '0')];
      const v8828 = stdlib.sub(v8822, v8822);
      const v8829 = stdlib.ge(v8828, stdlib.checkedBigNumberify('./index.rsh:298:65:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8829, {
        at: './index.rsh:298:65:application',
        fs: ['at ./index.rsh:296:15:application call to [unknown function] (defined at: ./index.rsh:296:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
        msg: 'assume >= 0',
        who: 'OffererAPI_claim'
        });
      const v8832 = stdlib.Array_set(v8821, '0', v8828);
      const v8833 = stdlib.Array_set(v8631, stdlib.checkedBigNumberify('./index.rsh:298:65:application', stdlib.UInt_max, '0'), v8832);
      ;
      const v8834 = true;
      const v8835 = await txn1.getOutput('OffererAPI_claim', 'v8834', ctc5, v8834);
      if (v7367) {
        stdlib.protect(ctc0, await interact.out(v8781, v8835), {
          at: './index.rsh:293:14:application',
          fs: ['at ./index.rsh:293:14:application call to [unknown function] (defined at: ./index.rsh:293:14:function exp)', 'at ./index.rsh:299:14:application call to "k" (defined at: ./index.rsh:296:15:function exp)', 'at ./index.rsh:296:15:application call to [unknown function] (defined at: ./index.rsh:296:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
          msg: 'out',
          who: 'OffererAPI_claim'
          });
        }
      else {
        }
      
      const v8840 = stdlib.eq(v8620, stdlib.checkedBigNumberify('./index.rsh:301:37:decimal', stdlib.UInt_max, '0'));
      const v11594 = v8620;
      const v11596 = true;
      const v11598 = v8833;
      const v11599 = v8632;
      if (v8840) {
        const v11600 = v8833[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
        const v11601 = v11600[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
        const v11602 = stdlib.sub(v8632, v8632);
        const v11603 = stdlib.ge(v11602, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11603, {
          at: './index.rsh:384:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'OffererAPI_claim'
          });
        ;
        const v11604 = stdlib.sub(v11601, v11601);
        const v11605 = stdlib.ge(v11604, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11605, {
          at: './index.rsh:384:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'OffererAPI_claim'
          });
        const v11606 = stdlib.Array_set(v11600, '0', v11604);
        const v11607 = stdlib.Array_set(v8833, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v11606);
        ;
        const v11608 = v11607[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
        const v11609 = v11608[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
        const v11610 = stdlib.sub(v11609, v11609);
        const v11611 = stdlib.ge(v11610, stdlib.checkedBigNumberify('./index.rsh:385:53:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11611, {
          at: './index.rsh:385:53:application',
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
    case 'User_claimBackOffer0_7220': {
      const v8875 = v8684[1];
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
    tokenForFee: ctc4,
    tokenOffered: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    OffererAPI_cancelOrder0_6603: ctc9,
    User_endRound0_6603: ctc9,
    User_offer0_6603: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Data({
    AdminAPI_claimFees0_6828: ctc9,
    OffererAPI_claim0_6828: ctc9,
    User_claimToken0_6828: ctc9
    });
  const ctc14 = stdlib.T_Data({
    AdminAPI_claimFees0_7220: ctc9,
    OffererAPI_claim0_7220: ctc9,
    User_claimBackOffer0_7220: ctc9
    });
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc12]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v7660 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v7661 = [v7660, v7660];
  const v7667 = stdlib.protect(ctc5, await interact.setParam(), {
    at: './index.rsh:132:37:application',
    fs: ['at ./index.rsh:123:20:application call to [unknown function] (defined at: ./index.rsh:123:24:function exp)'],
    msg: 'setParam',
    who: 'TokenOfferer'
    });
  const v7668 = v7667.amountOffered;
  const v7669 = v7667.deadline;
  const v7670 = v7667.managerContract;
  const v7671 = v7667.maxReceived;
  const v7672 = v7667.minReceived;
  const v7673 = v7667.tokenForFee;
  const v7674 = v7667.tokenOffered;
  const v7682 = stdlib.tokenEq(v7673, v7674);
  const v7683 = v7682 ? false : true;
  stdlib.assert(v7683, {
    at: './index.rsh:135:11:application',
    fs: ['at ./index.rsh:123:20:application call to [unknown function] (defined at: ./index.rsh:123:24:function exp)'],
    msg: null,
    who: 'TokenOfferer'
    });
  const v7684 = stdlib.gt(v7668, stdlib.checkedBigNumberify('./index.rsh:136:29:decimal', stdlib.UInt_max, '1000000'));
  stdlib.assert(v7684, {
    at: './index.rsh:136:11:application',
    fs: ['at ./index.rsh:123:20:application call to [unknown function] (defined at: ./index.rsh:123:24:function exp)'],
    msg: null,
    who: 'TokenOfferer'
    });
  const v7685 = stdlib.lt(v7668, stdlib.UInt_max);
  stdlib.assert(v7685, {
    at: './index.rsh:137:11:application',
    fs: ['at ./index.rsh:123:20:application call to [unknown function] (defined at: ./index.rsh:123:24:function exp)'],
    msg: null,
    who: 'TokenOfferer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v7674, v7668, v7669, v7672, v7671, v7670, v7673],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:140:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v7687, v7688, v7689, v7690, v7691, v7692, v7693], secs: v7695, time: v7694, didSend: v6498, from: v7686 } = txn1;
      
      const v7696 = v7661[stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '0')];
      const v7697 = stdlib.Array_set(v7696, '0', stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '0'));
      const v7698 = stdlib.Array_set(v7661, stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '0'), v7697);
      const v7700 = v7698[stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '1')];
      const v7701 = stdlib.Array_set(v7700, '0', stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '0'));
      const v7702 = stdlib.Array_set(v7698, stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '1'), v7701);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v7687
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v7693
        });
      ;
      const v7712 = [];
      const v7713 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v7692,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('./index.rsh:154:64:decimal', stdlib.UInt_max, '1'),
            pays: stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc7.defaultValue /* simReturnVal */];})();
      const v7714 = await txn1.getOutput('internal', 'v7713', ctc8, v7713);
      const v7716 = v7714[stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '0')];
      const v7717 = v7714[stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '1')];
      const v7718 = v7717[stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '0')];
      const v7719 = v7717[stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '1')];
      const v7721 = v7717[stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '3')];
      const v7734 = stdlib.gt(v7718, stdlib.checkedBigNumberify('./index.rsh:162:13:decimal', stdlib.UInt_max, '0'));
      const v7737 = stdlib.muldiv(v7688, v7718, stdlib.checkedBigNumberify('./index.rsh:165:39:decimal', stdlib.UInt_max, '10000'));
      const v7733 = v7734 ? v7737 : stdlib.checkedBigNumberify('./index.rsh:168:14:decimal', stdlib.UInt_max, '0');
      const v7744 = stdlib.add(v7688, v7733);
      const v7748 = stdlib.add(v7695, v7689);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v7687, v7688, v7689, v7690, v7691, v7692, v7693], secs: v7695, time: v7694, didSend: v6498, from: v7686 } = txn1;
  const v7696 = v7661[stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '0')];
  const v7697 = stdlib.Array_set(v7696, '0', stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '0'));
  const v7698 = stdlib.Array_set(v7661, stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '0'), v7697);
  const v7700 = v7698[stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '1')];
  const v7701 = stdlib.Array_set(v7700, '0', stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '0'));
  const v7702 = stdlib.Array_set(v7698, stdlib.checkedBigNumberify('./index.rsh:140:16:dot', stdlib.UInt_max, '1'), v7701);
  const v7704 = stdlib.tokenEq(v7693, v7687);
  const v7705 = v7704 ? false : true;
  stdlib.assert(v7705, {
    at: './index.rsh:140:16:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'TokenOfferer'
    });
  ;
  ;
  ;
  const v7708 = stdlib.gt(v7688, stdlib.checkedBigNumberify('./index.rsh:150:28:decimal', stdlib.UInt_max, '1000000'));
  stdlib.assert(v7708, {
    at: './index.rsh:150:10:application',
    fs: [],
    msg: null,
    who: 'TokenOfferer'
    });
  const v7709 = stdlib.lt(v7688, stdlib.UInt_max);
  stdlib.assert(v7709, {
    at: './index.rsh:151:10:application',
    fs: [],
    msg: null,
    who: 'TokenOfferer'
    });
  const v7712 = [];
  const v7713 = undefined /* Remote */;
  const v7714 = await txn1.getOutput('internal', 'v7713', ctc8, v7713);
  const v7716 = v7714[stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '0')];
  const v7717 = v7714[stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '1')];
  const v7718 = v7717[stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '0')];
  const v7719 = v7717[stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '1')];
  const v7721 = v7717[stdlib.checkedBigNumberify('./index.rsh:154:68:application', stdlib.UInt_max, '3')];
  const v7726 = stdlib.le(v7716, stdlib.UInt_max);
  stdlib.assert(v7726, {
    at: './index.rsh:154:68:application',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'TokenOfferer'
    });
  const v7728 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7716);
  stdlib.assert(v7728, {
    at: './index.rsh:154:68:application',
    fs: [],
    msg: 'remote bill check',
    who: 'TokenOfferer'
    });
  const v7732 = stdlib.lt(v7718, stdlib.checkedBigNumberify('./index.rsh:159:20:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v7732, {
    at: './index.rsh:159:10:application',
    fs: [],
    msg: 'There was a problem with this check',
    who: 'TokenOfferer'
    });
  let v7733;
  const v7734 = stdlib.gt(v7718, stdlib.checkedBigNumberify('./index.rsh:162:13:decimal', stdlib.UInt_max, '0'));
  if (v7734) {
    const v7735 = stdlib.le(v7718, stdlib.checkedBigNumberify('./index.rsh:163:20:decimal', stdlib.UInt_max, '10000'));
    stdlib.assert(v7735, {
      at: './index.rsh:163:14:application',
      fs: ['at ./index.rsh:171:28:application call to "adminFee" (defined at: ./index.rsh:161:24:function exp)'],
      msg: null,
      who: 'TokenOfferer'
      });
    const v7737 = stdlib.muldiv(v7688, v7718, stdlib.checkedBigNumberify('./index.rsh:165:39:decimal', stdlib.UInt_max, '10000'));
    v7733 = v7737;
    }
  else {
    v7733 = stdlib.checkedBigNumberify('./index.rsh:168:14:decimal', stdlib.UInt_max, '0');
    }
  const v7740 = stdlib.sub(stdlib.UInt_max, v7733);
  const v7741 = stdlib.le(v7688, v7740);
  stdlib.assert(v7741, {
    at: './index.rsh:172:10:application',
    fs: [],
    msg: 'There was a mistake here',
    who: 'TokenOfferer'
    });
  const v7744 = stdlib.add(v7688, v7733);
  const v7748 = stdlib.add(v7695, v7689);
  const txn2 = await (ctc.sendrecv({
    args: [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7702, v7716, v7719, v7721, v7744, v7748],
    evt_cnt: 0,
    funcNum: 1,
    lct: v7694,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '0'), [[v7744, v7687], [v7719, v7693]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v7760, time: v7759, didSend: v6580, from: v7758 } = txn2;
      
      ;
      const v7770 = v7702[stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '0')];
      const v7771 = v7770[stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '0')];
      const v7772 = stdlib.add(v7771, v7744);
      const v7776 = stdlib.Array_set(v7770, '0', v7772);
      const v7777 = stdlib.Array_set(v7702, stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '0'), v7776);
      sim_r.txns.push({
        amt: v7744,
        kind: 'to',
        tok: v7687
        });
      const v7778 = v7777[stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '1')];
      const v7779 = v7778[stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '0')];
      const v7780 = stdlib.add(v7779, v7719);
      const v7784 = stdlib.Array_set(v7778, '0', v7780);
      const v7785 = stdlib.Array_set(v7777, stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '1'), v7784);
      sim_r.txns.push({
        amt: v7719,
        kind: 'to',
        tok: v7693
        });
      
      const v7791 = stdlib.checkedBigNumberify('./index.rsh:328:45:decimal', stdlib.UInt_max, '0');
      const v7792 = false;
      const v7793 = true;
      const v7794 = v7691;
      const v7795 = v7690;
      const v7796 = v7759;
      const v7802 = v7785;
      const v7803 = v7716;
      
      if (await (async () => {
        
        return v7793;})()) {
        sim_r.isHalt = false;
        }
      else {
        if (v7792) {
          const v8119 = v7802[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
          const v8120 = v8119[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
          const v8121 = stdlib.safeSub(v8120, v7688);
          const v8123 = v7802[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '1')];
          const v8124 = v8123[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '0')];
          const v8125 = v7803;
          const v8126 = v7688;
          const v8127 = v8124;
          const v8128 = v8121;
          const v8129 = true;
          const v8130 = true;
          const v8131 = true;
          const v8132 = v7796;
          const v8138 = v7802;
          const v8139 = v7803;
          
          if (await (async () => {
            const v8151 = v8131 ? true : v8129;
            const v8152 = v8151 ? true : v8130;
            
            return v8152;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v8575 = v8138[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            const v8576 = v8575[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: undefined /* Nothing */
              });
            const v8588 = stdlib.sub(v8576, v8576);
            const v8592 = stdlib.Array_set(v8575, '0', v8588);
            const v8593 = stdlib.Array_set(v8138, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v8592);
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: v7687
              });
            const v8594 = v8593[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
            const v8595 = v8594[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7721,
              tok: v7693
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v7693
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v7687
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v8620 = v7803;
          const v8621 = true;
          const v8624 = false;
          const v8625 = v7796;
          const v8631 = v7802;
          const v8632 = v7803;
          
          if (await (async () => {
            
            return v8621;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v8972 = v8631[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            const v8973 = v8972[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: undefined /* Nothing */
              });
            const v8985 = stdlib.sub(v8973, v8973);
            const v8989 = stdlib.Array_set(v8972, '0', v8985);
            const v8990 = stdlib.Array_set(v8631, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v8989);
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: v7687
              });
            const v8991 = v8990[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
            const v8992 = v8991[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7721,
              tok: v7693
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v7693
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v7687
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
    tys: [ctc6, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc16, ctc1, ctc1, ctc6, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v7760, time: v7759, didSend: v6580, from: v7758 } = txn2;
  ;
  const v7770 = v7702[stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '0')];
  const v7771 = v7770[stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '0')];
  const v7772 = stdlib.add(v7771, v7744);
  const v7773 = stdlib.le(v7772, stdlib.UInt_max);
  stdlib.assert(v7773, {
    at: './index.rsh:179:16:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'TokenOfferer'
    });
  const v7776 = stdlib.Array_set(v7770, '0', v7772);
  const v7777 = stdlib.Array_set(v7702, stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '0'), v7776);
  ;
  const v7778 = v7777[stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '1')];
  const v7779 = v7778[stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '0')];
  const v7780 = stdlib.add(v7779, v7719);
  const v7781 = stdlib.le(v7780, stdlib.UInt_max);
  stdlib.assert(v7781, {
    at: './index.rsh:179:16:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'TokenOfferer'
    });
  const v7784 = stdlib.Array_set(v7778, '0', v7780);
  const v7785 = stdlib.Array_set(v7777, stdlib.checkedBigNumberify('./index.rsh:179:16:dot', stdlib.UInt_max, '1'), v7784);
  ;
  const v7786 = stdlib.addressEq(v7686, v7758);
  stdlib.assert(v7786, {
    at: './index.rsh:179:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'TokenOfferer'
    });
  const v7787 = v7785[stdlib.checkedBigNumberify('./index.rsh:180:39:application', stdlib.UInt_max, '0')];
  const v7788 = v7787[stdlib.checkedBigNumberify('./index.rsh:180:39:application', stdlib.UInt_max, '0')];
  const v7789 = stdlib.eq(v7744, v7788);
  stdlib.assert(v7789, {
    at: './index.rsh:180:10:application',
    fs: [],
    msg: null,
    who: 'TokenOfferer'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:181:30:application',
    fs: ['at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to "liftedInteract" (defined at: ./index.rsh:181:30:application)'],
    msg: 'ready',
    who: 'TokenOfferer'
    });
  
  let v7791 = stdlib.checkedBigNumberify('./index.rsh:328:45:decimal', stdlib.UInt_max, '0');
  let v7792 = false;
  let v7793 = true;
  let v7794 = v7691;
  let v7795 = v7690;
  let v7796 = v7759;
  let v7802 = v7785;
  let v7803 = v7716;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v7793;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v7853], secs: v7855, time: v7854, didSend: v6734, from: v7852 } = txn4;
    switch (v7853[0]) {
      case 'OffererAPI_cancelOrder0_6603': {
        const v7856 = v7853[1];
        undefined /* setApiDetails */;
        const v7876 = stdlib.le(v7803, stdlib.UInt_max);
        stdlib.assert(v7876, {
          at: './index.rsh:328:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'TokenOfferer'
          });
        ;
        const v7879 = stdlib.addressEq(v7852, v7686);
        const v7880 = v7792 ? false : true;
        const v7881 = v7879 ? v7880 : false;
        stdlib.assert(v7881, {
          at: './index.rsh:358:18:application',
          fs: ['at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: null,
          who: 'TokenOfferer'
          });
        const v7883 = stdlib.lt(v7855, v7748);
        stdlib.assert(v7883, {
          at: './index.rsh:359:18:application',
          fs: ['at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'it\'s too late to cancel',
          who: 'TokenOfferer'
          });
        const v7884 = true;
        await txn4.getOutput('OffererAPI_cancelOrder', 'v7884', ctc12, v7884);
        const cv7791 = v7791;
        const cv7792 = v7792;
        const cv7793 = false;
        const cv7794 = v7794;
        const cv7795 = v7795;
        const cv7796 = v7854;
        const cv7802 = v7802;
        const cv7803 = v7803;
        
        v7791 = cv7791;
        v7792 = cv7792;
        v7793 = cv7793;
        v7794 = cv7794;
        v7795 = cv7795;
        v7796 = cv7796;
        v7802 = cv7802;
        v7803 = cv7803;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_endRound0_6603': {
        const v7943 = v7853[1];
        undefined /* setApiDetails */;
        const v7963 = stdlib.le(v7803, stdlib.UInt_max);
        stdlib.assert(v7963, {
          at: './index.rsh:328:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'TokenOfferer'
          });
        ;
        const v7980 = stdlib.ge(v7855, v7748);
        const v7981 = stdlib.eq(v7791, v7794);
        const v7982 = v7980 ? true : v7981;
        stdlib.assert(v7982, {
          at: './index.rsh:372:18:application',
          fs: ['at ./index.rsh:371:13:application call to [unknown function] (defined at: ./index.rsh:371:13:function exp)'],
          msg: 'it\'s to early to end the round!',
          who: 'TokenOfferer'
          });
        const v7983 = true;
        await txn4.getOutput('User_endRound', 'v7983', ctc12, v7983);
        const cv7791 = v7791;
        const cv7792 = v7792;
        const cv7793 = false;
        const cv7794 = v7794;
        const cv7795 = v7795;
        const cv7796 = v7854;
        const cv7802 = v7802;
        const cv7803 = v7803;
        
        v7791 = cv7791;
        v7792 = cv7792;
        v7793 = cv7793;
        v7794 = cv7794;
        v7795 = cv7795;
        v7796 = cv7796;
        v7802 = cv7802;
        v7803 = cv7803;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_offer0_6603': {
        const v8030 = v7853[1];
        undefined /* setApiDetails */;
        const v8043 = v8030[stdlib.checkedBigNumberify('./index.rsh:332:11:spread', stdlib.UInt_max, '0')];
        const v8049 = stdlib.add(v7803, v8043);
        const v8050 = stdlib.le(v8049, stdlib.UInt_max);
        stdlib.assert(v8050, {
          at: './index.rsh:328:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'TokenOfferer'
          });
        ;
        const v8079 = stdlib.gt(v8043, stdlib.checkedBigNumberify('./index.rsh:336:25:decimal', stdlib.UInt_max, '0'));
        let v8080;
        if (v8079) {
          const v8081 = stdlib.safeAdd(v7791, v8043);
          const v8082 = stdlib.le(v8081, v7691);
          v8080 = v8082;
          }
        else {
          v8080 = false;
          }
        stdlib.assert(v8080, {
          at: './index.rsh:336:18:application',
          fs: ['at ./index.rsh:335:18:application call to [unknown function] (defined at: ./index.rsh:335:18:function exp)'],
          msg: null,
          who: 'TokenOfferer'
          });
        const v8084 = stdlib.lt(v7855, v7748);
        stdlib.assert(v8084, {
          at: './index.rsh:337:18:application',
          fs: ['at ./index.rsh:335:18:application call to [unknown function] (defined at: ./index.rsh:335:18:function exp)'],
          msg: 'Deadline has been reached, someone should close the round!',
          who: 'TokenOfferer'
          });
        const v8085 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7852), null);
        const v8086 = {
          None: 0,
          Some: 1
          }[v8085[0]];
        const v8087 = stdlib.eq(v8086, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v8087) {
          const v8089 = stdlib.fromSome(v8085, stdlib.checkedBigNumberify('./index.rsh:339:52:decimal', stdlib.UInt_max, '0'));
          const v8090 = stdlib.safeAdd(v8089, v8043);
          await stdlib.mapSet(map0, v7852, v8090);
          const v8091 = true;
          await txn4.getOutput('User_offer', 'v8091', ctc12, v8091);
          const v8098 = stdlib.safeAdd(v7791, v8043);
          const v8101 = stdlib.add(v7791, v8043);
          const v8102 = stdlib.ge(v8101, v7795);
          const cv7791 = v8098;
          const cv7792 = v8102;
          const cv7793 = true;
          const cv7794 = v7794;
          const cv7795 = v7795;
          const cv7796 = v7854;
          const cv7802 = v7802;
          const cv7803 = v8049;
          
          v7791 = cv7791;
          v7792 = cv7792;
          v7793 = cv7793;
          v7794 = cv7794;
          v7795 = cv7795;
          v7796 = cv7796;
          v7802 = cv7802;
          v7803 = cv7803;
          
          txn3 = txn4;
          continue;}
        else {
          await stdlib.mapSet(map0, v7852, v8043);
          const v8104 = true;
          await txn4.getOutput('User_offer', 'v8104', ctc12, v8104);
          const v8111 = stdlib.safeAdd(v7791, v8043);
          const v8114 = stdlib.add(v7791, v8043);
          const v8115 = stdlib.ge(v8114, v7795);
          const cv7791 = v8111;
          const cv7792 = v8115;
          const cv7793 = true;
          const cv7794 = v7794;
          const cv7795 = v7795;
          const cv7796 = v7854;
          const cv7802 = v7802;
          const cv7803 = v8049;
          
          v7791 = cv7791;
          v7792 = cv7792;
          v7793 = cv7793;
          v7794 = cv7794;
          v7795 = cv7795;
          v7796 = cv7796;
          v7802 = cv7802;
          v7803 = cv7803;
          
          txn3 = txn4;
          continue;}
        break;
        }
      }
    
    }
  if (v7792) {
    const v8119 = v7802[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
    const v8120 = v8119[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
    const v8121 = stdlib.safeSub(v8120, v7688);
    const v8123 = v7802[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '1')];
    const v8124 = v8123[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '0')];
    let v8125 = v7803;
    let v8126 = v7688;
    let v8127 = v8124;
    let v8128 = v8121;
    let v8129 = true;
    let v8130 = true;
    let v8131 = true;
    let v8132 = v7796;
    let v8138 = v7802;
    let v8139 = v7803;
    
    let txn4 = txn3;
    while (await (async () => {
      const v8151 = v8131 ? true : v8129;
      const v8152 = v8151 ? true : v8130;
      
      return v8152;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc13],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v8209], secs: v8211, time: v8210, didSend: v7053, from: v8208 } = txn5;
      switch (v8209[0]) {
        case 'AdminAPI_claimFees0_6828': {
          const v8212 = v8209[1];
          undefined /* setApiDetails */;
          ;
          const v8229 = stdlib.addressEq(v8208, v7721);
          stdlib.assert(v8229, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:252:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v8231 = v8138[stdlib.checkedBigNumberify('./index.rsh:253:26:application', stdlib.UInt_max, '1')];
          const v8232 = v8231[stdlib.checkedBigNumberify('./index.rsh:253:26:application', stdlib.UInt_max, '0')];
          const v8233 = stdlib.ge(v8232, v8127);
          const v8234 = v8138[stdlib.checkedBigNumberify('./index.rsh:253:64:application', stdlib.UInt_max, '0')];
          const v8235 = v8234[stdlib.checkedBigNumberify('./index.rsh:253:64:application', stdlib.UInt_max, '0')];
          const v8236 = stdlib.ge(v8235, v8128);
          const v8237 = v8233 ? v8236 : false;
          stdlib.assert(v8237, {
            at: './index.rsh:253:18:application',
            fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v8252 = stdlib.sub(v8232, v8127);
          const v8253 = stdlib.ge(v8252, stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0'));
          stdlib.assert(v8253, {
            at: './index.rsh:254:92:application',
            fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          const v8256 = stdlib.Array_set(v8231, '0', v8252);
          const v8257 = stdlib.Array_set(v8138, stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '1'), v8256);
          ;
          const v8258 = v8257[stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0')];
          const v8259 = v8258[stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0')];
          const v8263 = stdlib.sub(v8259, v8128);
          const v8264 = stdlib.ge(v8263, stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0'));
          stdlib.assert(v8264, {
            at: './index.rsh:254:92:application',
            fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          const v8267 = stdlib.Array_set(v8258, '0', v8263);
          const v8268 = stdlib.Array_set(v8257, stdlib.checkedBigNumberify('./index.rsh:254:92:application', stdlib.UInt_max, '0'), v8267);
          ;
          const v8269 = true;
          await txn5.getOutput('AdminAPI_claimFees', 'v8269', ctc12, v8269);
          const cv8125 = v8125;
          const cv8126 = v8126;
          const cv8127 = stdlib.checkedBigNumberify('./index.rsh:261:13:decimal', stdlib.UInt_max, '0');
          const cv8128 = stdlib.checkedBigNumberify('./index.rsh:260:13:decimal', stdlib.UInt_max, '0');
          const cv8129 = v8129;
          const cv8130 = false;
          const cv8131 = v8131;
          const cv8132 = v8210;
          const cv8138 = v8268;
          const cv8139 = v8139;
          
          v8125 = cv8125;
          v8126 = cv8126;
          v8127 = cv8127;
          v8128 = cv8128;
          v8129 = cv8129;
          v8130 = cv8130;
          v8131 = cv8131;
          v8132 = cv8132;
          v8138 = cv8138;
          v8139 = cv8139;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'OffererAPI_claim0_6828': {
          const v8332 = v8209[1];
          undefined /* setApiDetails */;
          ;
          const v8397 = stdlib.addressEq(v8208, v7686);
          stdlib.assert(v8397, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:232:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
            msg: 'You are not the Token Offerer!',
            who: 'TokenOfferer'
            });
          const v8400 = stdlib.ge(v8139, v8125);
          const v8402 = v8400 ? v8129 : false;
          stdlib.assert(v8402, {
            at: './index.rsh:233:18:application',
            fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v8406 = stdlib.sub(v8139, v8125);
          const v8407 = stdlib.ge(v8406, stdlib.checkedBigNumberify('./index.rsh:234:35:application', stdlib.UInt_max, '0'));
          stdlib.assert(v8407, {
            at: './index.rsh:234:35:application',
            fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          ;
          const v8409 = true;
          await txn5.getOutput('OffererAPI_claim', 'v8409', ctc12, v8409);
          const cv8125 = stdlib.checkedBigNumberify('./index.rsh:237:13:decimal', stdlib.UInt_max, '0');
          const cv8126 = v8126;
          const cv8127 = v8127;
          const cv8128 = v8128;
          const cv8129 = false;
          const cv8130 = v8130;
          const cv8131 = v8131;
          const cv8132 = v8210;
          const cv8138 = v8138;
          const cv8139 = v8406;
          
          v8125 = cv8125;
          v8126 = cv8126;
          v8127 = cv8127;
          v8128 = cv8128;
          v8129 = cv8129;
          v8130 = cv8130;
          v8131 = cv8131;
          v8132 = cv8132;
          v8138 = cv8138;
          v8139 = cv8139;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'User_claimToken0_6828': {
          const v8452 = v8209[1];
          undefined /* setApiDetails */;
          ;
          const v8537 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v8208), null);
          const v8538 = {
            None: 0,
            Some: 1
            }[v8537[0]];
          const v8539 = stdlib.eq(v8538, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v8539, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:209:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
            msg: 'Doesn\'t have a claim!',
            who: 'TokenOfferer'
            });
          const v8541 = v8138[stdlib.checkedBigNumberify('./index.rsh:210:26:application', stdlib.UInt_max, '0')];
          const v8542 = v8541[stdlib.checkedBigNumberify('./index.rsh:210:26:application', stdlib.UInt_max, '0')];
          const v8544 = stdlib.fromSome(v8537, stdlib.checkedBigNumberify('./index.rsh:210:78:decimal', stdlib.UInt_max, '0'));
          const v8545 = stdlib.safeMuldiv(v8544, v7688, v7803);
          const v8546 = stdlib.ge(v8542, v8545);
          stdlib.assert(v8546, {
            at: './index.rsh:210:18:application',
            fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v8555 = stdlib.sub(v8542, v8545);
          const v8556 = stdlib.ge(v8555, stdlib.checkedBigNumberify('./index.rsh:212:55:application', stdlib.UInt_max, '0'));
          stdlib.assert(v8556, {
            at: './index.rsh:212:55:application',
            fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          const v8559 = stdlib.Array_set(v8541, '0', v8555);
          const v8560 = stdlib.Array_set(v8138, stdlib.checkedBigNumberify('./index.rsh:212:55:application', stdlib.UInt_max, '0'), v8559);
          ;
          await stdlib.mapSet(map0, v8208, undefined /* Nothing */);
          const v8561 = true;
          await txn5.getOutput('User_claimToken', 'v8561', ctc12, v8561);
          const v8567 = stdlib.safeSub(v8126, v8545);
          const v8568 = stdlib.eq(v8567, stdlib.checkedBigNumberify('./index.rsh:216:56:decimal', stdlib.UInt_max, '0'));
          const v8569 = v8568 ? false : true;
          const cv8125 = v8125;
          const cv8126 = v8567;
          const cv8127 = v8127;
          const cv8128 = v8128;
          const cv8129 = v8129;
          const cv8130 = v8130;
          const cv8131 = v8569;
          const cv8132 = v8210;
          const cv8138 = v8560;
          const cv8139 = v8139;
          
          v8125 = cv8125;
          v8126 = cv8126;
          v8127 = cv8127;
          v8128 = cv8128;
          v8129 = cv8129;
          v8130 = cv8130;
          v8131 = cv8131;
          v8132 = cv8132;
          v8138 = cv8138;
          v8139 = cv8139;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    const v8575 = v8138[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
    const v8576 = v8575[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
    const v8580 = stdlib.sub(v8139, v8139);
    const v8581 = stdlib.ge(v8580, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
    stdlib.assert(v8581, {
      at: './index.rsh:384:66:application',
      fs: [],
      msg: 'assume >= 0',
      who: 'TokenOfferer'
      });
    ;
    const v8588 = stdlib.sub(v8576, v8576);
    const v8589 = stdlib.ge(v8588, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
    stdlib.assert(v8589, {
      at: './index.rsh:384:66:application',
      fs: [],
      msg: 'assume >= 0',
      who: 'TokenOfferer'
      });
    const v8592 = stdlib.Array_set(v8575, '0', v8588);
    const v8593 = stdlib.Array_set(v8138, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v8592);
    ;
    const v8594 = v8593[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
    const v8595 = v8594[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
    const v8601 = stdlib.sub(v8595, v8595);
    const v8602 = stdlib.ge(v8601, stdlib.checkedBigNumberify('./index.rsh:385:53:application', stdlib.UInt_max, '0'));
    stdlib.assert(v8602, {
      at: './index.rsh:385:53:application',
      fs: [],
      msg: 'assume >= 0',
      who: 'TokenOfferer'
      });
    ;
    return;
    }
  else {
    let v8620 = v7803;
    let v8621 = true;
    let v8624 = false;
    let v8625 = v7796;
    let v8631 = v7802;
    let v8632 = v7803;
    
    let txn4 = txn3;
    while (await (async () => {
      
      return v8621;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc14],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v8684], secs: v8686, time: v8685, didSend: v7367, from: v8683 } = txn5;
      switch (v8684[0]) {
        case 'AdminAPI_claimFees0_7220': {
          const v8687 = v8684[1];
          undefined /* setApiDetails */;
          ;
          const v8704 = stdlib.addressEq(v8683, v7721);
          stdlib.assert(v8704, {
            at: './index.rsh:312:20:application',
            fs: ['at ./index.rsh:311:15:application call to [unknown function] (defined at: ./index.rsh:311:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v8705 = v8631[stdlib.checkedBigNumberify('./index.rsh:313:31:application', stdlib.UInt_max, '1')];
          const v8706 = v8705[stdlib.checkedBigNumberify('./index.rsh:313:31:application', stdlib.UInt_max, '0')];
          const v8712 = stdlib.sub(v8706, v8706);
          const v8713 = stdlib.ge(v8712, stdlib.checkedBigNumberify('./index.rsh:313:63:application', stdlib.UInt_max, '0'));
          stdlib.assert(v8713, {
            at: './index.rsh:313:63:application',
            fs: ['at ./index.rsh:311:15:application call to [unknown function] (defined at: ./index.rsh:311:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          const v8716 = stdlib.Array_set(v8705, '0', v8712);
          const v8717 = stdlib.Array_set(v8631, stdlib.checkedBigNumberify('./index.rsh:313:63:application', stdlib.UInt_max, '1'), v8716);
          ;
          const v8718 = true;
          await txn5.getOutput('AdminAPI_claimFees', 'v8718', ctc12, v8718);
          const cv8620 = v8620;
          const cv8621 = true;
          const cv8624 = v8624;
          const cv8625 = v8685;
          const cv8631 = v8717;
          const cv8632 = v8632;
          
          v8620 = cv8620;
          v8621 = cv8621;
          v8624 = cv8624;
          v8625 = cv8625;
          v8631 = cv8631;
          v8632 = cv8632;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'OffererAPI_claim0_7220': {
          const v8781 = v8684[1];
          undefined /* setApiDetails */;
          ;
          const v8820 = stdlib.addressEq(v8683, v7686);
          stdlib.assert(v8820, {
            at: './index.rsh:297:20:application',
            fs: ['at ./index.rsh:296:15:application call to [unknown function] (defined at: ./index.rsh:296:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v8821 = v8631[stdlib.checkedBigNumberify('./index.rsh:298:31:application', stdlib.UInt_max, '0')];
          const v8822 = v8821[stdlib.checkedBigNumberify('./index.rsh:298:31:application', stdlib.UInt_max, '0')];
          const v8828 = stdlib.sub(v8822, v8822);
          const v8829 = stdlib.ge(v8828, stdlib.checkedBigNumberify('./index.rsh:298:65:application', stdlib.UInt_max, '0'));
          stdlib.assert(v8829, {
            at: './index.rsh:298:65:application',
            fs: ['at ./index.rsh:296:15:application call to [unknown function] (defined at: ./index.rsh:296:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          const v8832 = stdlib.Array_set(v8821, '0', v8828);
          const v8833 = stdlib.Array_set(v8631, stdlib.checkedBigNumberify('./index.rsh:298:65:application', stdlib.UInt_max, '0'), v8832);
          ;
          const v8834 = true;
          await txn5.getOutput('OffererAPI_claim', 'v8834', ctc12, v8834);
          const v8840 = stdlib.eq(v8620, stdlib.checkedBigNumberify('./index.rsh:301:37:decimal', stdlib.UInt_max, '0'));
          const v8841 = v8840 ? false : true;
          const cv8620 = v8620;
          const cv8621 = v8841;
          const cv8624 = true;
          const cv8625 = v8685;
          const cv8631 = v8833;
          const cv8632 = v8632;
          
          v8620 = cv8620;
          v8621 = cv8621;
          v8624 = cv8624;
          v8625 = cv8625;
          v8631 = cv8631;
          v8632 = cv8632;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'User_claimBackOffer0_7220': {
          const v8875 = v8684[1];
          undefined /* setApiDetails */;
          ;
          const v8938 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v8683), null);
          const v8939 = {
            None: 0,
            Some: 1
            }[v8938[0]];
          const v8940 = stdlib.eq(v8939, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v8940, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:279:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:278:15:application call to [unknown function] (defined at: ./index.rsh:278:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
            msg: 'Doesn\'t have a claim!',
            who: 'TokenOfferer'
            });
          const v8944 = stdlib.fromSome(v8938, stdlib.checkedBigNumberify('./index.rsh:280:57:decimal', stdlib.UInt_max, '0'));
          const v8945 = stdlib.ge(v8632, v8944);
          stdlib.assert(v8945, {
            at: './index.rsh:280:20:application',
            fs: ['at ./index.rsh:278:15:application call to [unknown function] (defined at: ./index.rsh:278:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
            msg: null,
            who: 'TokenOfferer'
            });
          const v8951 = stdlib.sub(v8632, v8944);
          const v8952 = stdlib.ge(v8951, stdlib.checkedBigNumberify('./index.rsh:282:39:application', stdlib.UInt_max, '0'));
          stdlib.assert(v8952, {
            at: './index.rsh:282:39:application',
            fs: ['at ./index.rsh:278:15:application call to [unknown function] (defined at: ./index.rsh:278:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
            msg: 'assume >= 0',
            who: 'TokenOfferer'
            });
          ;
          await stdlib.mapSet(map0, v8683, undefined /* Nothing */);
          const v8954 = true;
          await txn5.getOutput('User_claimBackOffer', 'v8954', ctc12, v8954);
          const v8961 = stdlib.sub(v8620, v8944);
          const v8962 = stdlib.eq(v8961, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '0'));
          const v8964 = v8962 ? v8624 : false;
          const v8965 = v8964 ? false : true;
          const cv8620 = v8961;
          const cv8621 = v8965;
          const cv8624 = v8624;
          const cv8625 = v8685;
          const cv8631 = v8631;
          const cv8632 = v8951;
          
          v8620 = cv8620;
          v8621 = cv8621;
          v8624 = cv8624;
          v8625 = cv8625;
          v8631 = cv8631;
          v8632 = cv8632;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    const v8972 = v8631[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
    const v8973 = v8972[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
    const v8977 = stdlib.sub(v8632, v8632);
    const v8978 = stdlib.ge(v8977, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
    stdlib.assert(v8978, {
      at: './index.rsh:384:66:application',
      fs: [],
      msg: 'assume >= 0',
      who: 'TokenOfferer'
      });
    ;
    const v8985 = stdlib.sub(v8973, v8973);
    const v8986 = stdlib.ge(v8985, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
    stdlib.assert(v8986, {
      at: './index.rsh:384:66:application',
      fs: [],
      msg: 'assume >= 0',
      who: 'TokenOfferer'
      });
    const v8989 = stdlib.Array_set(v8972, '0', v8985);
    const v8990 = stdlib.Array_set(v8631, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v8989);
    ;
    const v8991 = v8990[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
    const v8992 = v8991[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
    const v8998 = stdlib.sub(v8992, v8992);
    const v8999 = stdlib.ge(v8998, stdlib.checkedBigNumberify('./index.rsh:385:53:application', stdlib.UInt_max, '0'));
    stdlib.assert(v8999, {
      at: './index.rsh:385:53:application',
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_7220: ctc8,
    OffererAPI_claim0_7220: ctc8,
    User_claimBackOffer0_7220: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v8620, v8624, v8631, v8632] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1]);
  const v8644 = ctc.selfAddress();
  const v8646 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:276:14:application call to [unknown function] (defined at: ./index.rsh:276:14:function exp)', 'at ./index.rsh:271:34:application call to "runUser_claimBackOffer0_7220" (defined at: ./index.rsh:275:13:function exp)', 'at ./index.rsh:271:34:application call to [unknown function] (defined at: ./index.rsh:271:34:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
    msg: 'in',
    who: 'User_claimBackOffer'
    });
  const v8647 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v8644), null);
  const v8648 = {
    None: 0,
    Some: 1
    }[v8647[0]];
  const v8649 = stdlib.eq(v8648, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v8649, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:276:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:276:14:application call to [unknown function] (defined at: ./index.rsh:276:14:function exp)', 'at ./index.rsh:276:14:application call to [unknown function] (defined at: ./index.rsh:276:14:function exp)', 'at ./index.rsh:271:34:application call to "runUser_claimBackOffer0_7220" (defined at: ./index.rsh:275:13:function exp)', 'at ./index.rsh:271:34:application call to [unknown function] (defined at: ./index.rsh:271:34:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
    msg: 'Doesn\'t have a claim!',
    who: 'User_claimBackOffer'
    });
  const v8653 = ['User_claimBackOffer0_7220', v8646];
  
  const txn1 = await (ctc.sendrecv({
    args: [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v8620, v8624, v8631, v8632, v8653],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:277:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v8684], secs: v8686, time: v8685, didSend: v7367, from: v8683 } = txn1;
      
      switch (v8684[0]) {
        case 'AdminAPI_claimFees0_7220': {
          const v8687 = v8684[1];
          
          break;
          }
        case 'OffererAPI_claim0_7220': {
          const v8781 = v8684[1];
          
          break;
          }
        case 'User_claimBackOffer0_7220': {
          const v8875 = v8684[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claimBackOffer"
            });
          ;
          const v8938 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v8683), null);
          const v8944 = stdlib.fromSome(v8938, stdlib.checkedBigNumberify('./index.rsh:280:57:decimal', stdlib.UInt_max, '0'));
          const v8951 = stdlib.sub(v8632, v8944);
          sim_r.txns.push({
            kind: 'from',
            to: v8683,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v8683, undefined /* Nothing */);
          const v8954 = true;
          const v8955 = await txn1.getOutput('User_claimBackOffer', 'v8954', ctc5, v8954);
          
          const v8961 = stdlib.sub(v8620, v8944);
          const v8962 = stdlib.eq(v8961, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '0'));
          const v8964 = v8962 ? v8624 : false;
          const v11666 = v8961;
          const v11668 = v8624;
          const v11670 = v8631;
          const v11671 = v8951;
          if (v8964) {
            const v11672 = v8631[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            const v11673 = v11672[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: undefined /* Nothing */
              });
            const v11676 = stdlib.sub(v11673, v11673);
            const v11678 = stdlib.Array_set(v11672, '0', v11676);
            const v11679 = stdlib.Array_set(v8631, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v11678);
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: v7687
              });
            const v11680 = v11679[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
            const v11681 = v11680[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7721,
              tok: v7693
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v7693
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v7687
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
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v8684], secs: v8686, time: v8685, didSend: v7367, from: v8683 } = txn1;
  switch (v8684[0]) {
    case 'AdminAPI_claimFees0_7220': {
      const v8687 = v8684[1];
      return;
      break;
      }
    case 'OffererAPI_claim0_7220': {
      const v8781 = v8684[1];
      return;
      break;
      }
    case 'User_claimBackOffer0_7220': {
      const v8875 = v8684[1];
      undefined /* setApiDetails */;
      ;
      const v8938 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v8683), null);
      const v8939 = {
        None: 0,
        Some: 1
        }[v8938[0]];
      const v8940 = stdlib.eq(v8939, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v8940, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:279:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:278:15:application call to [unknown function] (defined at: ./index.rsh:278:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
        msg: 'Doesn\'t have a claim!',
        who: 'User_claimBackOffer'
        });
      const v8944 = stdlib.fromSome(v8938, stdlib.checkedBigNumberify('./index.rsh:280:57:decimal', stdlib.UInt_max, '0'));
      const v8945 = stdlib.ge(v8632, v8944);
      stdlib.assert(v8945, {
        at: './index.rsh:280:20:application',
        fs: ['at ./index.rsh:278:15:application call to [unknown function] (defined at: ./index.rsh:278:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
        msg: null,
        who: 'User_claimBackOffer'
        });
      const v8951 = stdlib.sub(v8632, v8944);
      const v8952 = stdlib.ge(v8951, stdlib.checkedBigNumberify('./index.rsh:282:39:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8952, {
        at: './index.rsh:282:39:application',
        fs: ['at ./index.rsh:278:15:application call to [unknown function] (defined at: ./index.rsh:278:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
        msg: 'assume >= 0',
        who: 'User_claimBackOffer'
        });
      ;
      await stdlib.mapSet(map0, v8683, undefined /* Nothing */);
      const v8954 = true;
      const v8955 = await txn1.getOutput('User_claimBackOffer', 'v8954', ctc5, v8954);
      if (v7367) {
        stdlib.protect(ctc0, await interact.out(v8875, v8955), {
          at: './index.rsh:275:14:application',
          fs: ['at ./index.rsh:275:14:application call to [unknown function] (defined at: ./index.rsh:275:14:function exp)', 'at ./index.rsh:284:14:application call to "k" (defined at: ./index.rsh:278:15:function exp)', 'at ./index.rsh:278:15:application call to [unknown function] (defined at: ./index.rsh:278:15:function exp)', 'at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
          msg: 'out',
          who: 'User_claimBackOffer'
          });
        }
      else {
        }
      
      const v8961 = stdlib.sub(v8620, v8944);
      const v8962 = stdlib.eq(v8961, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '0'));
      const v8964 = v8962 ? v8624 : false;
      const v11666 = v8961;
      const v11668 = v8624;
      const v11670 = v8631;
      const v11671 = v8951;
      if (v8964) {
        const v11672 = v8631[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
        const v11673 = v11672[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
        const v11674 = stdlib.sub(v8951, v8951);
        const v11675 = stdlib.ge(v11674, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11675, {
          at: './index.rsh:384:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'User_claimBackOffer'
          });
        ;
        const v11676 = stdlib.sub(v11673, v11673);
        const v11677 = stdlib.ge(v11676, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11677, {
          at: './index.rsh:384:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'User_claimBackOffer'
          });
        const v11678 = stdlib.Array_set(v11672, '0', v11676);
        const v11679 = stdlib.Array_set(v8631, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v11678);
        ;
        const v11680 = v11679[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
        const v11681 = v11680[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
        const v11682 = stdlib.sub(v11681, v11681);
        const v11683 = stdlib.ge(v11682, stdlib.checkedBigNumberify('./index.rsh:385:53:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11683, {
          at: './index.rsh:385:53:application',
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimFees0_6828: ctc8,
    OffererAPI_claim0_6828: ctc8,
    User_claimToken0_6828: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7803, v8125, v8126, v8127, v8128, v8129, v8130, v8131, v8138, v8139] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1]);
  const v8154 = ctc.selfAddress();
  const v8156 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:206:12:application call to [unknown function] (defined at: ./index.rsh:206:12:function exp)', 'at ./index.rsh:201:23:application call to "runUser_claimToken0_6828" (defined at: ./index.rsh:205:11:function exp)', 'at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
    msg: 'in',
    who: 'User_claimToken'
    });
  const v8157 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v8154), null);
  const v8158 = {
    None: 0,
    Some: 1
    }[v8157[0]];
  const v8159 = stdlib.eq(v8158, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v8159, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:206:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:12:application call to [unknown function] (defined at: ./index.rsh:206:12:function exp)', 'at ./index.rsh:206:12:application call to [unknown function] (defined at: ./index.rsh:206:12:function exp)', 'at ./index.rsh:201:23:application call to "runUser_claimToken0_6828" (defined at: ./index.rsh:205:11:function exp)', 'at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
    msg: 'Doesn\'t have a claim!',
    who: 'User_claimToken'
    });
  const v8163 = ['User_claimToken0_6828', v8156];
  
  const txn1 = await (ctc.sendrecv({
    args: [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7803, v8125, v8126, v8127, v8128, v8129, v8130, v8131, v8138, v8139, v8163],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:207:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v8209], secs: v8211, time: v8210, didSend: v7053, from: v8208 } = txn1;
      
      switch (v8209[0]) {
        case 'AdminAPI_claimFees0_6828': {
          const v8212 = v8209[1];
          
          break;
          }
        case 'OffererAPI_claim0_6828': {
          const v8332 = v8209[1];
          
          break;
          }
        case 'User_claimToken0_6828': {
          const v8452 = v8209[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claimToken"
            });
          ;
          const v8537 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v8208), null);
          const v8541 = v8138[stdlib.checkedBigNumberify('./index.rsh:210:26:application', stdlib.UInt_max, '0')];
          const v8542 = v8541[stdlib.checkedBigNumberify('./index.rsh:210:26:application', stdlib.UInt_max, '0')];
          const v8544 = stdlib.fromSome(v8537, stdlib.checkedBigNumberify('./index.rsh:210:78:decimal', stdlib.UInt_max, '0'));
          const v8545 = stdlib.safeMuldiv(v8544, v7688, v7803);
          const v8555 = stdlib.sub(v8542, v8545);
          const v8559 = stdlib.Array_set(v8541, '0', v8555);
          const v8560 = stdlib.Array_set(v8138, stdlib.checkedBigNumberify('./index.rsh:212:55:application', stdlib.UInt_max, '0'), v8559);
          sim_r.txns.push({
            kind: 'from',
            to: v8208,
            tok: v7687
            });
          await stdlib.simMapSet(sim_r, 0, v8208, undefined /* Nothing */);
          const v8561 = true;
          const v8562 = await txn1.getOutput('User_claimToken', 'v8561', ctc5, v8561);
          
          const v8567 = stdlib.safeSub(v8126, v8545);
          const v8568 = stdlib.eq(v8567, stdlib.checkedBigNumberify('./index.rsh:216:56:decimal', stdlib.UInt_max, '0'));
          const v8569 = v8568 ? false : true;
          const v11732 = v8125;
          const v11733 = v8567;
          const v11734 = v8127;
          const v11735 = v8128;
          const v11736 = v8129;
          const v11737 = v8130;
          const v11738 = v8569;
          const v11740 = v8560;
          const v11741 = v8139;
          const v11742 = v8568 ? v8129 : true;
          const v11743 = v11742 ? true : v8130;
          if (v11743) {
            sim_r.isHalt = false;
            }
          else {
            const v11744 = v8560[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            const v11745 = v11744[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: undefined /* Nothing */
              });
            const v11748 = stdlib.sub(v11745, v11745);
            const v11750 = stdlib.Array_set(v11744, '0', v11748);
            const v11751 = stdlib.Array_set(v8560, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v11750);
            sim_r.txns.push({
              kind: 'from',
              to: v7686,
              tok: v7687
              });
            const v11752 = v11751[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
            const v11753 = v11752[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v7721,
              tok: v7693
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v7693
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v7687
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
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc5, ctc5, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v8209], secs: v8211, time: v8210, didSend: v7053, from: v8208 } = txn1;
  switch (v8209[0]) {
    case 'AdminAPI_claimFees0_6828': {
      const v8212 = v8209[1];
      return;
      break;
      }
    case 'OffererAPI_claim0_6828': {
      const v8332 = v8209[1];
      return;
      break;
      }
    case 'User_claimToken0_6828': {
      const v8452 = v8209[1];
      undefined /* setApiDetails */;
      ;
      const v8537 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v8208), null);
      const v8538 = {
        None: 0,
        Some: 1
        }[v8537[0]];
      const v8539 = stdlib.eq(v8538, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v8539, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:209:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
        msg: 'Doesn\'t have a claim!',
        who: 'User_claimToken'
        });
      const v8541 = v8138[stdlib.checkedBigNumberify('./index.rsh:210:26:application', stdlib.UInt_max, '0')];
      const v8542 = v8541[stdlib.checkedBigNumberify('./index.rsh:210:26:application', stdlib.UInt_max, '0')];
      const v8544 = stdlib.fromSome(v8537, stdlib.checkedBigNumberify('./index.rsh:210:78:decimal', stdlib.UInt_max, '0'));
      const v8545 = stdlib.safeMuldiv(v8544, v7688, v7803);
      const v8546 = stdlib.ge(v8542, v8545);
      stdlib.assert(v8546, {
        at: './index.rsh:210:18:application',
        fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
        msg: null,
        who: 'User_claimToken'
        });
      const v8555 = stdlib.sub(v8542, v8545);
      const v8556 = stdlib.ge(v8555, stdlib.checkedBigNumberify('./index.rsh:212:55:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8556, {
        at: './index.rsh:212:55:application',
        fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
        msg: 'assume >= 0',
        who: 'User_claimToken'
        });
      const v8559 = stdlib.Array_set(v8541, '0', v8555);
      const v8560 = stdlib.Array_set(v8138, stdlib.checkedBigNumberify('./index.rsh:212:55:application', stdlib.UInt_max, '0'), v8559);
      ;
      await stdlib.mapSet(map0, v8208, undefined /* Nothing */);
      const v8561 = true;
      const v8562 = await txn1.getOutput('User_claimToken', 'v8561', ctc5, v8561);
      if (v7053) {
        stdlib.protect(ctc0, await interact.out(v8452, v8562), {
          at: './index.rsh:205:12:application',
          fs: ['at ./index.rsh:205:12:application call to [unknown function] (defined at: ./index.rsh:205:12:function exp)', 'at ./index.rsh:214:12:application call to "k" (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
          msg: 'out',
          who: 'User_claimToken'
          });
        }
      else {
        }
      
      const v8567 = stdlib.safeSub(v8126, v8545);
      const v8568 = stdlib.eq(v8567, stdlib.checkedBigNumberify('./index.rsh:216:56:decimal', stdlib.UInt_max, '0'));
      const v8569 = v8568 ? false : true;
      const v11732 = v8125;
      const v11733 = v8567;
      const v11734 = v8127;
      const v11735 = v8128;
      const v11736 = v8129;
      const v11737 = v8130;
      const v11738 = v8569;
      const v11740 = v8560;
      const v11741 = v8139;
      const v11742 = v8568 ? v8129 : true;
      const v11743 = v11742 ? true : v8130;
      if (v11743) {
        return;
        }
      else {
        const v11744 = v8560[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
        const v11745 = v11744[stdlib.checkedBigNumberify('./index.rsh:384:32:application', stdlib.UInt_max, '0')];
        const v11746 = stdlib.sub(v8139, v8139);
        const v11747 = stdlib.ge(v11746, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11747, {
          at: './index.rsh:384:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'User_claimToken'
          });
        ;
        const v11748 = stdlib.sub(v11745, v11745);
        const v11749 = stdlib.ge(v11748, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11749, {
          at: './index.rsh:384:66:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'User_claimToken'
          });
        const v11750 = stdlib.Array_set(v11744, '0', v11748);
        const v11751 = stdlib.Array_set(v8560, stdlib.checkedBigNumberify('./index.rsh:384:66:application', stdlib.UInt_max, '0'), v11750);
        ;
        const v11752 = v11751[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '1')];
        const v11753 = v11752[stdlib.checkedBigNumberify('./index.rsh:385:21:application', stdlib.UInt_max, '0')];
        const v11754 = stdlib.sub(v11753, v11753);
        const v11755 = stdlib.ge(v11754, stdlib.checkedBigNumberify('./index.rsh:385:53:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11755, {
          at: './index.rsh:385:53:application',
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    OffererAPI_cancelOrder0_6603: ctc8,
    User_endRound0_6603: ctc8,
    User_offer0_6603: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7791, v7792, v7794, v7795, v7802, v7803] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v7833 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:369:12:application call to [unknown function] (defined at: ./index.rsh:369:12:function exp)', 'at ./index.rsh:328:37:application call to "runUser_endRound0_6603" (defined at: ./index.rsh:368:11:function exp)', 'at ./index.rsh:328:37:application call to [unknown function] (defined at: ./index.rsh:328:37:function exp)'],
    msg: 'in',
    who: 'User_endRound'
    });
  const v7837 = ['User_endRound0_6603', v7833];
  
  const txn1 = await (ctc.sendrecv({
    args: [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7791, v7792, v7794, v7795, v7802, v7803, v7837],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:370:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v7853], secs: v7855, time: v7854, didSend: v6734, from: v7852 } = txn1;
      
      switch (v7853[0]) {
        case 'OffererAPI_cancelOrder0_6603': {
          const v7856 = v7853[1];
          
          break;
          }
        case 'User_endRound0_6603': {
          const v7943 = v7853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_endRound"
            });
          ;
          const v7983 = true;
          const v7984 = await txn1.getOutput('User_endRound', 'v7983', ctc5, v7983);
          
          const v11953 = v7803;
          if (v7792) {
            const v11954 = v7802[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
            const v11955 = v11954[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
            const v11956 = stdlib.safeSub(v11955, v7688);
            const v11957 = v7802[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '1')];
            const v11958 = v11957[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '0')];
            const v12094 = v7803;
            const v12095 = v7688;
            const v12096 = v11958;
            const v12097 = v11956;
            const v12098 = true;
            const v12099 = true;
            const v12100 = true;
            const v12102 = v7802;
            const v12103 = v7803;
            sim_r.isHalt = false;
            }
          else {
            const v12118 = v7803;
            const v12120 = false;
            const v12122 = v7802;
            const v12123 = v7803;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'User_offer0_6603': {
          const v8030 = v7853[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v7853], secs: v7855, time: v7854, didSend: v6734, from: v7852 } = txn1;
  switch (v7853[0]) {
    case 'OffererAPI_cancelOrder0_6603': {
      const v7856 = v7853[1];
      return;
      break;
      }
    case 'User_endRound0_6603': {
      const v7943 = v7853[1];
      undefined /* setApiDetails */;
      const v7963 = stdlib.le(v7803, stdlib.UInt_max);
      stdlib.assert(v7963, {
        at: './index.rsh:328:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'User_endRound'
        });
      ;
      const v7980 = stdlib.ge(v7855, v7748);
      const v7981 = stdlib.eq(v7791, v7794);
      const v7982 = v7980 ? true : v7981;
      stdlib.assert(v7982, {
        at: './index.rsh:372:18:application',
        fs: ['at ./index.rsh:371:13:application call to [unknown function] (defined at: ./index.rsh:371:13:function exp)'],
        msg: 'it\'s to early to end the round!',
        who: 'User_endRound'
        });
      const v7983 = true;
      const v7984 = await txn1.getOutput('User_endRound', 'v7983', ctc5, v7983);
      if (v6734) {
        stdlib.protect(ctc0, await interact.out(v7943, v7984), {
          at: './index.rsh:368:12:application',
          fs: ['at ./index.rsh:368:12:application call to [unknown function] (defined at: ./index.rsh:368:12:function exp)', 'at ./index.rsh:373:12:application call to "k" (defined at: ./index.rsh:371:13:function exp)', 'at ./index.rsh:371:13:application call to [unknown function] (defined at: ./index.rsh:371:13:function exp)'],
          msg: 'out',
          who: 'User_endRound'
          });
        }
      else {
        }
      
      const v11953 = v7803;
      if (v7792) {
        const v11954 = v7802[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
        const v11955 = v11954[stdlib.checkedBigNumberify('./index.rsh:192:37:application', stdlib.UInt_max, '0')];
        const v11956 = stdlib.safeSub(v11955, v7688);
        const v11957 = v7802[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '1')];
        const v11958 = v11957[stdlib.checkedBigNumberify('./index.rsh:201:80:application', stdlib.UInt_max, '0')];
        const v12094 = v7803;
        const v12095 = v7688;
        const v12096 = v11958;
        const v12097 = v11956;
        const v12098 = true;
        const v12099 = true;
        const v12100 = true;
        const v12102 = v7802;
        const v12103 = v7803;
        return;
        }
      else {
        const v12118 = v7803;
        const v12120 = false;
        const v12122 = v7802;
        const v12123 = v7803;
        return;
        }
      break;
      }
    case 'User_offer0_6603': {
      const v8030 = v7853[1];
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    OffererAPI_cancelOrder0_6603: ctc9,
    User_endRound0_6603: ctc9,
    User_offer0_6603: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7791, v7792, v7794, v7795, v7802, v7803] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v7809 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:333:15:application call to [unknown function] (defined at: ./index.rsh:333:15:function exp)', 'at ./index.rsh:328:37:application call to "runUser_offer0_6603" (defined at: ./index.rsh:332:11:function exp)', 'at ./index.rsh:328:37:application call to [unknown function] (defined at: ./index.rsh:328:37:function exp)'],
    msg: 'in',
    who: 'User_offer'
    });
  const v7810 = v7809[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7812 = stdlib.gt(v7810, stdlib.checkedBigNumberify('./index.rsh:333:32:decimal', stdlib.UInt_max, '0'));
  let v7813;
  if (v7812) {
    const v7814 = stdlib.safeAdd(v7791, v7810);
    const v7815 = stdlib.le(v7814, v7691);
    v7813 = v7815;
    }
  else {
    v7813 = false;
    }
  stdlib.assert(v7813, {
    at: './index.rsh:333:25:application',
    fs: ['at ./index.rsh:333:15:application call to [unknown function] (defined at: ./index.rsh:333:15:function exp)', 'at ./index.rsh:333:15:application call to [unknown function] (defined at: ./index.rsh:333:15:function exp)', 'at ./index.rsh:328:37:application call to "runUser_offer0_6603" (defined at: ./index.rsh:332:11:function exp)', 'at ./index.rsh:328:37:application call to [unknown function] (defined at: ./index.rsh:328:37:function exp)'],
    msg: null,
    who: 'User_offer'
    });
  const v7819 = ['User_offer0_6603', v7809];
  
  const txn1 = await (ctc.sendrecv({
    args: [v7686, v7687, v7688, v7690, v7691, v7693, v7695, v7721, v7748, v7791, v7792, v7794, v7795, v7802, v7803, v7819],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v7810, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v7853], secs: v7855, time: v7854, didSend: v6734, from: v7852 } = txn1;
      
      switch (v7853[0]) {
        case 'OffererAPI_cancelOrder0_6603': {
          const v7856 = v7853[1];
          
          break;
          }
        case 'User_endRound0_6603': {
          const v7943 = v7853[1];
          
          break;
          }
        case 'User_offer0_6603': {
          const v8030 = v7853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_offer"
            });
          const v8043 = v8030[stdlib.checkedBigNumberify('./index.rsh:332:11:spread', stdlib.UInt_max, '0')];
          const v8049 = stdlib.add(v7803, v8043);
          sim_r.txns.push({
            amt: v8043,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v8085 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7852), null);
          const v8086 = {
            None: 0,
            Some: 1
            }[v8085[0]];
          const v8087 = stdlib.eq(v8086, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v8087) {
            const v8089 = stdlib.fromSome(v8085, stdlib.checkedBigNumberify('./index.rsh:339:52:decimal', stdlib.UInt_max, '0'));
            const v8090 = stdlib.safeAdd(v8089, v8043);
            await stdlib.simMapSet(sim_r, 0, v7852, v8090);
            const v8091 = true;
            const v8092 = await txn1.getOutput('User_offer', 'v8091', ctc5, v8091);
            
            const v8098 = stdlib.safeAdd(v7791, v8043);
            const v8101 = stdlib.add(v7791, v8043);
            const v8102 = stdlib.ge(v8101, v7795);
            const v12896 = v8098;
            const v12897 = v8102;
            const v12899 = v7794;
            const v12900 = v7795;
            const v12902 = v7802;
            const v12903 = v8049;
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 0, v7852, v8043);
            const v8104 = true;
            const v8105 = await txn1.getOutput('User_offer', 'v8104', ctc5, v8104);
            
            const v8111 = stdlib.safeAdd(v7791, v8043);
            const v8114 = stdlib.add(v7791, v8043);
            const v8115 = stdlib.ge(v8114, v7795);
            const v13086 = v8111;
            const v13087 = v8115;
            const v13089 = v7794;
            const v13090 = v7795;
            const v13092 = v7802;
            const v13093 = v8049;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1, ctc5, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v7853], secs: v7855, time: v7854, didSend: v6734, from: v7852 } = txn1;
  switch (v7853[0]) {
    case 'OffererAPI_cancelOrder0_6603': {
      const v7856 = v7853[1];
      return;
      break;
      }
    case 'User_endRound0_6603': {
      const v7943 = v7853[1];
      return;
      break;
      }
    case 'User_offer0_6603': {
      const v8030 = v7853[1];
      undefined /* setApiDetails */;
      const v8043 = v8030[stdlib.checkedBigNumberify('./index.rsh:332:11:spread', stdlib.UInt_max, '0')];
      const v8049 = stdlib.add(v7803, v8043);
      const v8050 = stdlib.le(v8049, stdlib.UInt_max);
      stdlib.assert(v8050, {
        at: './index.rsh:328:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'User_offer'
        });
      ;
      const v8079 = stdlib.gt(v8043, stdlib.checkedBigNumberify('./index.rsh:336:25:decimal', stdlib.UInt_max, '0'));
      let v8080;
      if (v8079) {
        const v8081 = stdlib.safeAdd(v7791, v8043);
        const v8082 = stdlib.le(v8081, v7691);
        v8080 = v8082;
        }
      else {
        v8080 = false;
        }
      stdlib.assert(v8080, {
        at: './index.rsh:336:18:application',
        fs: ['at ./index.rsh:335:18:application call to [unknown function] (defined at: ./index.rsh:335:18:function exp)'],
        msg: null,
        who: 'User_offer'
        });
      const v8084 = stdlib.lt(v7855, v7748);
      stdlib.assert(v8084, {
        at: './index.rsh:337:18:application',
        fs: ['at ./index.rsh:335:18:application call to [unknown function] (defined at: ./index.rsh:335:18:function exp)'],
        msg: 'Deadline has been reached, someone should close the round!',
        who: 'User_offer'
        });
      const v8085 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7852), null);
      const v8086 = {
        None: 0,
        Some: 1
        }[v8085[0]];
      const v8087 = stdlib.eq(v8086, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v8087) {
        const v8089 = stdlib.fromSome(v8085, stdlib.checkedBigNumberify('./index.rsh:339:52:decimal', stdlib.UInt_max, '0'));
        const v8090 = stdlib.safeAdd(v8089, v8043);
        await stdlib.mapSet(map0, v7852, v8090);
        const v8091 = true;
        const v8092 = await txn1.getOutput('User_offer', 'v8091', ctc5, v8091);
        if (v6734) {
          stdlib.protect(ctc0, await interact.out(v8030, v8092), {
            at: './index.rsh:332:12:application',
            fs: ['at ./index.rsh:332:12:application call to [unknown function] (defined at: ./index.rsh:332:12:function exp)', 'at ./index.rsh:346:12:application call to "k" (defined at: ./index.rsh:335:18:function exp)', 'at ./index.rsh:335:18:application call to [unknown function] (defined at: ./index.rsh:335:18:function exp)'],
            msg: 'out',
            who: 'User_offer'
            });
          }
        else {
          }
        
        const v8098 = stdlib.safeAdd(v7791, v8043);
        const v8101 = stdlib.add(v7791, v8043);
        const v8102 = stdlib.ge(v8101, v7795);
        const v12896 = v8098;
        const v12897 = v8102;
        const v12899 = v7794;
        const v12900 = v7795;
        const v12902 = v7802;
        const v12903 = v8049;
        return;
        }
      else {
        await stdlib.mapSet(map0, v7852, v8043);
        const v8104 = true;
        const v8105 = await txn1.getOutput('User_offer', 'v8104', ctc5, v8104);
        if (v6734) {
          stdlib.protect(ctc0, await interact.out(v8030, v8105), {
            at: './index.rsh:332:12:application',
            fs: ['at ./index.rsh:332:12:application call to [unknown function] (defined at: ./index.rsh:332:12:function exp)', 'at ./index.rsh:346:12:application call to "k" (defined at: ./index.rsh:335:18:function exp)', 'at ./index.rsh:335:18:application call to [unknown function] (defined at: ./index.rsh:335:18:function exp)'],
            msg: 'out',
            who: 'User_offer'
            });
          }
        else {
          }
        
        const v8111 = stdlib.safeAdd(v7791, v8043);
        const v8114 = stdlib.add(v7791, v8043);
        const v8115 = stdlib.ge(v8114, v7795);
        const v13086 = v8111;
        const v13087 = v8115;
        const v13089 = v7794;
        const v13090 = v7795;
        const v13092 = v7802;
        const v13093 = v8049;
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
  appApproval: `ByAfAAEECAn///////////8BBgIgKDAFOEBIcHigjQaQTq3r9OMJhrLZvAy+mfH2DJSPyYMOx9OE5gnt347CCqL99r8G1tCL3gadt5S8B5D48MoDv/nY3gUHJgQBAQEAAAECIjUAMRhBDp4qZEkiWzUBJVs1AjEZIxJBAAoxACkhBK9mQg5rNhoAF0lBAeQiNQQjNQZJIRMMQAB8SSEUDEAAOEkhFQxAACNJIRYMQAAOIRYSRCo1/ys0/1BCA+IhFRJEKjX/KTT/UEIFriEUEkQqNf8oNP9QQgWgSSEXDEAAJkkhGAxAABEhGBJEKjX/KDT/UCWvUEIBniEXEkQqNf8rNP9QQgVzIRMSRDYaATX/KzT/UEIBgEkhGQxAAQpJIRoMQADpSSEbDEAA1CEbEkQ0AUklDEAAiEkhBAxAAEQhBBJEKWQoZFBJNQNXACA0A1cgCFA0A1dICFA0A1dwCFA0A1eJCFA0A1eBCFA0A1d4CFA0A1coCFA0A1eAAVA1B0INfUgpZChkUEk1A1cAIDQDVyAIUDQDV0gIUDQDV3AIUDQDVzAIUDQDVzgIUDQDV3gIUDQDVygIUClQNQdCDUAhCxJEKWQoZFBJNQNXACA0A1cgCFA0A1dICFA0A1dwCFA0A1cwCFA0A1c4CFA0A1d4CFA0A1coCFAoUDUHQg0AIRoSRCo1/yg0/1BCApIhGRJENAFJIQYMQAAHIQYSREL/4iQSREL+qEkhHAxAAC9JIR0MQAAOIR0SRCo1/yk0/1BCAlwhHBJENAFJIQYMQAAHIQYSREL/4iQSREL+ZIHN6oh6EkQqNf8pNP9QJa9QQgAlNhoCFzUENhoDNhoBF0kkDEAGYkkhBgxAA+tJIR4MQAIMIR4SRCEENAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSVcAIDX/IQhbNf4hCVs1/SEKWzX8IQxbNfshDVs1+iEOWzX5V1AgNfghD1s19yEQWzX2V4ABFzX1gYEBWzX0gYkBWzXzV5EiNfKBswFbNfFJNQU18IAEd2J+7zTwULA08CJVSSMMQAE1SSEHDEAA6CEHEkQ08FcBCDXvNO8XNe408TTuCEk17SEFDkQ07ogL7TTuIg1BAA009jTuCDT7DjXsQgADIjXsNOxEMgc09wxEMQCIC7lJNesiVSMSQQBTMQApKCI060k16iNbNOoiVU007ggWUGaACQAAAAAAAB+bAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jTuCDT2NO4INPMPIzT0NPMyBjTyNO1CB9ExACkoNO4WUGaACQAAAAAAAB+oAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jTuCDT2NO4INPMPIzT0NPMyBjTyNO1CB4xINPEhBQ5EMgc09w809jT0EhFEgAkAAAAAAAAfLwGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09SI09DTzMgY08jTxQgdGSDTxIQUORDEANP8SNPUUEEQyBzT3DESACQAAAAAAAB7MAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1IjT0NPMyBjTyNPFCBvxIJTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSkpKSVcAIDX/IQhbNf4hCVs1/SEKWzX8IQxbNfshDVs1+iEOWzX5V1AgNfghD1s19yEQWzX2V4ABFzX1V4EiNfSBowFbNfNJNQU18oAEkE9kSTTyULA08iJVSSMMQAD0SSEHDEAAhCEHEkQxAIgJ+0k18SJVIxJEIjTxSTXvI1s07yJVTTXwNPM08A9ENPM08AlJNe8iD0SxIrIBNPCyCCOyEDEAsgezMQApIQSvZoAJAAAAAAAAIvoBsCg1BzT2NPAJNe40/zT+NP00/DT7NPo0+TT4NPc07kkiEjT1EBQ09TIGNPQ070IIBUgxADT/EkQ09FcAEUk18SJbSTXwSQlJNe8iD0SxIrIBNPCyEiSyEDEAshQ0/rIRs4AJAAAAAAAAIoIBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2SSITIzIGNPQ08TTvFlwAXAA080IHnEgxADT4EkQ09FcREUk18SJbSTXwSQlJNe8iD0SxIrIBNPCyEiSyEDEAshQ0+rIRs4AJAAAAAAAAIg4BsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2IzT1MgY09DTxNO8WXABcETTzQgc0JBJEIQs0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpKSkpKSklXACA1/yEIWzX+IQlbNf0hCls1/CEMWzX7IQ1bNfohDls1+VdQIDX4IQ9bNfchEFs19oGAAVs19YGIAVs19IGQAVs184GYAVs18legARc18VehARc18FeiARc171ejIjXugcUBWzXtSTUFNeyABK571AY07FCwNOwiVUkjDEABFEkhBwxAAKohBxJEMQCIB/lJNesiVSMSRDTuVwARSTXqIls16SI060k15yNbNOciVU00/R009pc16DTpNOgPRDTpNOgJSTXnIg9EsSKyATToshIkshAxALIUNP6yEbMxACkhBK9mgAkAAAAAAAAhcQGwKDUHNPQ06Ak15jT/NP40/TT8NPs0+jT5NPg09zT2NPU05jTzNPI08TTwNOYiEzIGNO406jTnFlwAXAA07UIEoUgxADT/EkQ07TT1DzTxEEQ07TT1CUk16yIPRLEisgE09bIII7IQMQCyB7OACQAAAAAAACDZAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09iI09DTzNPIiNPA07zIGNO4060IEPkgxADT4EkQ07lcREUk16yJbSTXqNPMPNO5XABEiWzTyDxBENOo08wlJNekiD0Q07jTrNOkWXABcETXosSKyATTzshIkshAxALIUNPqyEbM06FcAEUk15yJbNPIJSTXmIg9EsSKyATTyshIkshAxALIUNP6yEbOACQAAAAAAACBNAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQiIjTxIjTvMgY06DTnNOYWXABcADTtQgOISSMMQADiIxJEIzQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSlcAIDX/IQhbNf4hCls1/SEMWzX8IQ1bNftXUCI1+oF6WzX5gaIBWzX4gASai5F0sDT6VwARSTX3Ils0+AhJNfYhBQ5ENPo09zT2FlwAXAA19TT4NP6IBek09VcREUk19CJbNPkISTXzIQUORDT1NPQ08xZcAFwRNfI0+TT7iAXBNP8xABJENPg08lcAESJbEkQ0/zT+NAMhCVs0/TT8NPs0AyEOWzQDV4IgNAOBqgFbIiIjNPw0/TIGNPI0A4FyW0IBzEghEYgFYCI0ARJENARJIhJMNAISEURJNQVJSkpJIls1/yVbNf6BEFs1/YEYWzX8IQhbNfshCVs1+iEKWzX5gAT+JjieNP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWULCBEa9JNfhJUEk190lXABElr1wAXABJNfZJVxERJa9cAFwRNfU0+TT/E0QhEYgE1rEisgEishIkshAyCrIUNP+yEbMhEYgEvrEisgEishIkshAyCrIUNPmyEbM0/oHAhD0NRDT+IQUMRIAFYXBwSUQ0+hZQAzXzMgp4NfIyCmA08gkWNfGxIrIBIQayEDT6shiABH412UWyGrMyCmA08gk08RcJFrcAPlcEAFA19IAIAAAAAAAAHiE09FCwNPRJNfMiWzXyNPNXCDhJNfEiWzXwNPElWzXvNPFXGCA17jTyIQUORCI08hJENPAhEgxENPAiDUEAEzTwIRIORDT+NPAdIRKXNe1CAAMiNe00/iEFNO0JDkQ0/jTtCDXsMgc0/Qg16zEANP8WUDT+FlA0/BZQNPsWUDT5FlAyBxZQNPVQNPIWUDTvFlA07lA07BZQNOsWUClLAVcAf2coSwFXfzNnSCM1ATIGNQJCAzk1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNPpBAFU07zTwFlA08RZQNPIWUDTzFlA09BZQNPUWUDT2UDT3FlA0+BZQNPkWUQcIUDT7FlA0/BZQNP5QNP8WUClLAVcAf2coSwFXfzxnSCEENQEyBjUCQgK9NPlBADQ07zTwNPE08jTzNPQ09TT2NPc0/0k08TT+VxERIls0/lcAESJbNPEJIyMjNP00/jT/QgAfNO808DTxNPI08zT0NPU09jT3NP8jIjT9NP40/0IBPDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNew0/DT6ETT7EUEAazTsNO0WUDTuFlA07xZQNPAWUDTxFlA08hZQNPNQNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUQcIUDT7FlEHCFA0/BZRBwhQNP5QNP8WUClLAVcAf2coSwFXf05nSCELNQEyBjUCQgHHNP5XABFJNesiWzXqNP9JCSIPRLEisgE0/7III7IQNOyyB7M06kkJSTXpIg9EsSKyATTqshIkshA07LIUNO2yEbM0/jTrNOkWXABcAFcRESJbSTXoSQkiD0SxIrIBNOiyEiSyEDTzshQ08bIRs7EisgEishIkshAyCbIVMgqyFDTxshGzsSKyASKyEiSyEDIJshUyCrIUNO2yEbNCAQ01/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE0+0EATDTxNPIWUDTzFlA09BZQNPUWUDT2FlA09xZQNPhQNPkWUDT6FlA0/BZRBwhQNP5QNP8WUClLAVcAf2coSwFXfyxnSCU1ATIGNQJCALo0/lcAEUk18CJbNe80/0kJIg9EsSKyATT/sggjshA08bIHszTvSQlJNe4iD0SxIrIBNO+yEiSyEDTxshQ08rIRszT+NPA07hZcAFwAVxERIltJNe1JCSIPRLEisgE07bISJLIQNPiyFDT2shGzsSKyASKyEiSyEDIJshUyCrIUNPayEbOxIrIBIrISJLIQMgmyFTIKshQ08rIRs0IAADEZIQsSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghBK+JKWKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 205,
  unsupported: [],
  version: 11,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:154:68:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:174:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:386:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:201:23:after expr stmt semicolon',
    fs: ['at ./index.rsh:381:50:application call to "secondStageFundingSecured" (defined at: ./index.rsh:190:40:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:386:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:271:34:after expr stmt semicolon',
    fs: ['at ./index.rsh:382:38:application call to "secondStageFundingNotSecured" (defined at: ./index.rsh:266:43:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:328:37:after expr stmt semicolon',
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
