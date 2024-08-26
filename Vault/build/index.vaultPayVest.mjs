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
  const ctc6 = stdlib.T_Tuple([ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  
  const Viewer_read = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v4400, v4401, v4402, v4403, v4404, v4405, v4406, v4408, v4410, v4417, v4427, v4429, v4432, v4597, v4599, v4611, v4618] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4401, v4406, v4408, v4599, v4666, v4667, v4668, v4669, v4670, v4671, v4672, v4673, v4674, v4675, v4679, v4680, v4682, v4700, v4701] = svs;
      return (await ((async () => {
        
        const v4702 = [v4671, v4670, v4668, v4669, v4672, v4680, v4673, v4701];
        
        return v4702;}))(...args));
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
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc0, ctc1, ctc2, ctc5, ctc3, ctc3, ctc3, ctc2, ctc0, ctc2, ctc2],
      4: [ctc1, ctc0, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc4, ctc2]
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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    AdminAPI_tryClaimFee0_3852: ctc6,
    Claimant_finalClaim0_3852: ctc6,
    Claimant_tryClaim0_3852: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v4401, v4406, v4408, v4599, v4666, v4667, v4668, v4669, v4670, v4671, v4672, v4673, v4674, v4675, v4679, v4680, v4682, v4700, v4701] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc4, ctc2]);
  const v4734 = ctc.selfAddress();
  const v4736 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:498:12:application call to [unknown function] (defined at: ./index.rsh:498:12:function exp)', 'at ./index.rsh:424:19:application call to "runAdminAPI_tryClaimFee0_3852" (defined at: ./index.rsh:497:11:function exp)', 'at ./index.rsh:424:19:application call to [unknown function] (defined at: ./index.rsh:424:19:function exp)'],
    msg: 'in',
    who: 'AdminAPI_tryClaimFee'
    });
  const v4738 = stdlib.addressEq(v4734, v4599);
  const v4741 = stdlib.ge(v4701, v4666);
  const v4742 = v4738 ? v4741 : false;
  const v4743 = v4682[stdlib.checkedBigNumberify('./index.rsh:501:23:application', stdlib.UInt_max, '1')];
  const v4744 = v4743[stdlib.checkedBigNumberify('./index.rsh:501:23:application', stdlib.UInt_max, '0')];
  const v4745 = stdlib.ge(v4744, v4667);
  const v4746 = v4742 ? v4745 : false;
  stdlib.assert(v4746, {
    at: './index.rsh:499:17:application',
    fs: ['at ./index.rsh:498:12:application call to [unknown function] (defined at: ./index.rsh:498:12:function exp)', 'at ./index.rsh:498:12:application call to [unknown function] (defined at: ./index.rsh:498:12:function exp)', 'at ./index.rsh:424:19:application call to "runAdminAPI_tryClaimFee0_3852" (defined at: ./index.rsh:497:11:function exp)', 'at ./index.rsh:424:19:application call to [unknown function] (defined at: ./index.rsh:424:19:function exp)'],
    msg: null,
    who: 'AdminAPI_tryClaimFee'
    });
  const v4749 = ['AdminAPI_tryClaimFee0_3852', v4736];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4401, v4406, v4408, v4599, v4666, v4667, v4668, v4669, v4670, v4671, v4672, v4673, v4674, v4675, v4679, v4680, v4682, v4700, v4701, v4749],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:503:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4755], secs: v4757, time: v4756, didSend: v3979, from: v4754 } = txn1;
      
      switch (v4755[0]) {
        case 'AdminAPI_tryClaimFee0_3852': {
          const v4758 = v4755[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_tryClaimFee"
            });
          ;
          const v4789 = stdlib.sub(v4701, v4666);
          const v4793 = stdlib.Array_set(v4700, '0', v4789);
          const v4794 = stdlib.Array_set(v4682, stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '0'), v4793);
          sim_r.txns.push({
            kind: 'from',
            to: v4754,
            tok: v4401
            });
          const v4795 = v4794[stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '1')];
          const v4796 = v4795[stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '0')];
          const v4800 = stdlib.sub(v4796, v4667);
          const v4804 = stdlib.Array_set(v4795, '0', v4800);
          const v4805 = stdlib.Array_set(v4794, stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '1'), v4804);
          sim_r.txns.push({
            kind: 'from',
            to: v4754,
            tok: v4408
            });
          const v4806 = true;
          const v4807 = await txn1.getOutput('AdminAPI_tryClaimFee', 'v4806', ctc3, v4806);
          
          const v5761 = stdlib.checkedBigNumberify('./index.rsh:514:13:decimal', stdlib.UInt_max, '0');
          const v5762 = stdlib.checkedBigNumberify('./index.rsh:515:13:decimal', stdlib.UInt_max, '0');
          const v5763 = v4668;
          const v5764 = v4669;
          const v5765 = v4670;
          const v5766 = v4671;
          const v5767 = v4672;
          const v5768 = v4673;
          const v5769 = v4674;
          const v5770 = v4675;
          const v5772 = v4757;
          const v5773 = v4679;
          const v5774 = v4805;
          const v5775 = v4805[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
          const v5776 = v5775[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_finalClaim0_3852': {
          const v4888 = v4755[1];
          
          break;
          }
        case 'Claimant_tryClaim0_3852': {
          const v5018 = v4755[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc4, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v4755], secs: v4757, time: v4756, didSend: v3979, from: v4754 } = txn1;
  switch (v4755[0]) {
    case 'AdminAPI_tryClaimFee0_3852': {
      const v4758 = v4755[1];
      undefined /* setApiDetails */;
      ;
      const v4766 = stdlib.addressEq(v4754, v4599);
      const v4769 = stdlib.ge(v4701, v4666);
      const v4770 = v4766 ? v4769 : false;
      const v4771 = v4682[stdlib.checkedBigNumberify('./index.rsh:507:23:application', stdlib.UInt_max, '1')];
      const v4772 = v4771[stdlib.checkedBigNumberify('./index.rsh:507:23:application', stdlib.UInt_max, '0')];
      const v4773 = stdlib.ge(v4772, v4667);
      const v4774 = v4770 ? v4773 : false;
      stdlib.assert(v4774, {
        at: './index.rsh:505:18:application',
        fs: ['at ./index.rsh:504:13:application call to [unknown function] (defined at: ./index.rsh:504:13:function exp)'],
        msg: null,
        who: 'AdminAPI_tryClaimFee'
        });
      const v4789 = stdlib.sub(v4701, v4666);
      const v4790 = stdlib.ge(v4789, stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4790, {
        at: './index.rsh:508:78:application',
        fs: ['at ./index.rsh:504:13:application call to [unknown function] (defined at: ./index.rsh:504:13:function exp)'],
        msg: 'assume >= 0',
        who: 'AdminAPI_tryClaimFee'
        });
      const v4793 = stdlib.Array_set(v4700, '0', v4789);
      const v4794 = stdlib.Array_set(v4682, stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '0'), v4793);
      ;
      const v4795 = v4794[stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '1')];
      const v4796 = v4795[stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '0')];
      const v4800 = stdlib.sub(v4796, v4667);
      const v4801 = stdlib.ge(v4800, stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4801, {
        at: './index.rsh:508:78:application',
        fs: ['at ./index.rsh:504:13:application call to [unknown function] (defined at: ./index.rsh:504:13:function exp)'],
        msg: 'assume >= 0',
        who: 'AdminAPI_tryClaimFee'
        });
      const v4804 = stdlib.Array_set(v4795, '0', v4800);
      const v4805 = stdlib.Array_set(v4794, stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '1'), v4804);
      ;
      const v4806 = true;
      const v4807 = await txn1.getOutput('AdminAPI_tryClaimFee', 'v4806', ctc3, v4806);
      if (v3979) {
        stdlib.protect(ctc8, await interact.out(v4758, v4807), {
          at: './index.rsh:497:12:application',
          fs: ['at ./index.rsh:497:12:application call to [unknown function] (defined at: ./index.rsh:497:12:function exp)', 'at ./index.rsh:509:12:application call to "k" (defined at: ./index.rsh:504:13:function exp)', 'at ./index.rsh:504:13:application call to [unknown function] (defined at: ./index.rsh:504:13:function exp)'],
          msg: 'out',
          who: 'AdminAPI_tryClaimFee'
          });
        }
      else {
        }
      
      const v5761 = stdlib.checkedBigNumberify('./index.rsh:514:13:decimal', stdlib.UInt_max, '0');
      const v5762 = stdlib.checkedBigNumberify('./index.rsh:515:13:decimal', stdlib.UInt_max, '0');
      const v5763 = v4668;
      const v5764 = v4669;
      const v5765 = v4670;
      const v5766 = v4671;
      const v5767 = v4672;
      const v5768 = v4673;
      const v5769 = v4674;
      const v5770 = v4675;
      const v5772 = v4757;
      const v5773 = v4679;
      const v5774 = v4805;
      const v5775 = v4805[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
      const v5776 = v5775[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'Claimant_finalClaim0_3852': {
      const v4888 = v4755[1];
      return;
      break;
      }
    case 'Claimant_tryClaim0_3852': {
      const v5018 = v4755[1];
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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    AdminAPI_tryClaimFee0_3852: ctc6,
    Claimant_finalClaim0_3852: ctc6,
    Claimant_tryClaim0_3852: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v4401, v4406, v4408, v4599, v4666, v4667, v4668, v4669, v4670, v4671, v4672, v4673, v4674, v4675, v4679, v4680, v4682, v4700, v4701] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc4, ctc2]);
  const v4718 = ctc.selfAddress();
  const v4720 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:471:12:application call to [unknown function] (defined at: ./index.rsh:471:12:function exp)', 'at ./index.rsh:424:19:application call to "runClaimant_finalClaim0_3852" (defined at: ./index.rsh:470:11:function exp)', 'at ./index.rsh:424:19:application call to [unknown function] (defined at: ./index.rsh:424:19:function exp)'],
    msg: 'in',
    who: 'Claimant_finalClaim'
    });
  const v4724 = stdlib.safeSub(v4670, v4668);
  const v4725 = stdlib.eq(v4701, v4724);
  const v4726 = stdlib.eq(v4673, stdlib.checkedBigNumberify('./index.rsh:473:26:decimal', stdlib.UInt_max, '1'));
  const v4727 = v4725 ? v4726 : false;
  const v4728 = stdlib.addressEq(v4718, v4406);
  const v4729 = v4727 ? v4728 : false;
  stdlib.assert(v4729, {
    at: './index.rsh:472:17:application',
    fs: ['at ./index.rsh:471:12:application call to [unknown function] (defined at: ./index.rsh:471:12:function exp)', 'at ./index.rsh:471:12:application call to [unknown function] (defined at: ./index.rsh:471:12:function exp)', 'at ./index.rsh:424:19:application call to "runClaimant_finalClaim0_3852" (defined at: ./index.rsh:470:11:function exp)', 'at ./index.rsh:424:19:application call to [unknown function] (defined at: ./index.rsh:424:19:function exp)'],
    msg: null,
    who: 'Claimant_finalClaim'
    });
  const v4732 = ['Claimant_finalClaim0_3852', v4720];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4401, v4406, v4408, v4599, v4666, v4667, v4668, v4669, v4670, v4671, v4672, v4673, v4674, v4675, v4679, v4680, v4682, v4700, v4701, v4732],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:476:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4755], secs: v4757, time: v4756, didSend: v3979, from: v4754 } = txn1;
      
      switch (v4755[0]) {
        case 'AdminAPI_tryClaimFee0_3852': {
          const v4758 = v4755[1];
          
          break;
          }
        case 'Claimant_finalClaim0_3852': {
          const v4888 = v4755[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_finalClaim"
            });
          ;
          const v4946 = stdlib.safeSub(v4670, v4668);
          const v4960 = stdlib.sub(v4701, v4946);
          const v4964 = stdlib.Array_set(v4700, '0', v4960);
          const v4965 = stdlib.Array_set(v4682, stdlib.checkedBigNumberify('./index.rsh:482:72:application', stdlib.UInt_max, '0'), v4964);
          sim_r.txns.push({
            kind: 'from',
            to: v4406,
            tok: v4401
            });
          const v4966 = true;
          const v4967 = await txn1.getOutput('Claimant_finalClaim', 'v4966', ctc3, v4966);
          
          const v4973 = stdlib.safeAdd(v4668, v4946);
          const v4974 = stdlib.safeAdd(v4672, v4674);
          const v4975 = stdlib.safeSub(v4673, stdlib.checkedBigNumberify('./index.rsh:494:30:decimal', stdlib.UInt_max, '1'));
          const v5833 = v4666;
          const v5834 = v4667;
          const v5835 = v4973;
          const v5836 = stdlib.checkedBigNumberify('./index.rsh:491:13:decimal', stdlib.UInt_max, '0');
          const v5837 = v4670;
          const v5838 = true;
          const v5839 = v4974;
          const v5840 = v4975;
          const v5841 = v4674;
          const v5842 = v4675;
          const v5844 = v4757;
          const v5845 = v4679;
          const v5846 = v4965;
          const v5847 = v4965[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
          const v5848 = v5847[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_tryClaim0_3852': {
          const v5018 = v4755[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc4, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v4755], secs: v4757, time: v4756, didSend: v3979, from: v4754 } = txn1;
  switch (v4755[0]) {
    case 'AdminAPI_tryClaimFee0_3852': {
      const v4758 = v4755[1];
      return;
      break;
      }
    case 'Claimant_finalClaim0_3852': {
      const v4888 = v4755[1];
      undefined /* setApiDetails */;
      ;
      const v4946 = stdlib.safeSub(v4670, v4668);
      const v4947 = stdlib.eq(v4701, v4946);
      const v4948 = stdlib.eq(v4673, stdlib.checkedBigNumberify('./index.rsh:479:26:decimal', stdlib.UInt_max, '1'));
      const v4949 = v4947 ? v4948 : false;
      const v4950 = stdlib.addressEq(v4754, v4406);
      const v4951 = v4949 ? v4950 : false;
      stdlib.assert(v4951, {
        at: './index.rsh:478:18:application',
        fs: ['at ./index.rsh:477:13:application call to [unknown function] (defined at: ./index.rsh:477:13:function exp)'],
        msg: null,
        who: 'Claimant_finalClaim'
        });
      const v4953 = stdlib.ge(v4757, v4672);
      stdlib.assert(v4953, {
        at: './index.rsh:481:18:application',
        fs: ['at ./index.rsh:477:13:application call to [unknown function] (defined at: ./index.rsh:477:13:function exp)'],
        msg: null,
        who: 'Claimant_finalClaim'
        });
      const v4960 = stdlib.sub(v4701, v4946);
      const v4961 = stdlib.ge(v4960, stdlib.checkedBigNumberify('./index.rsh:482:72:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4961, {
        at: './index.rsh:482:72:application',
        fs: ['at ./index.rsh:477:13:application call to [unknown function] (defined at: ./index.rsh:477:13:function exp)'],
        msg: 'assume >= 0',
        who: 'Claimant_finalClaim'
        });
      const v4964 = stdlib.Array_set(v4700, '0', v4960);
      const v4965 = stdlib.Array_set(v4682, stdlib.checkedBigNumberify('./index.rsh:482:72:application', stdlib.UInt_max, '0'), v4964);
      ;
      const v4966 = true;
      const v4967 = await txn1.getOutput('Claimant_finalClaim', 'v4966', ctc3, v4966);
      if (v3979) {
        stdlib.protect(ctc8, await interact.out(v4888, v4967), {
          at: './index.rsh:470:12:application',
          fs: ['at ./index.rsh:470:12:application call to [unknown function] (defined at: ./index.rsh:470:12:function exp)', 'at ./index.rsh:484:12:application call to "k" (defined at: ./index.rsh:477:13:function exp)', 'at ./index.rsh:477:13:application call to [unknown function] (defined at: ./index.rsh:477:13:function exp)'],
          msg: 'out',
          who: 'Claimant_finalClaim'
          });
        }
      else {
        }
      
      const v4973 = stdlib.safeAdd(v4668, v4946);
      const v4974 = stdlib.safeAdd(v4672, v4674);
      const v4975 = stdlib.safeSub(v4673, stdlib.checkedBigNumberify('./index.rsh:494:30:decimal', stdlib.UInt_max, '1'));
      const v5833 = v4666;
      const v5834 = v4667;
      const v5835 = v4973;
      const v5836 = stdlib.checkedBigNumberify('./index.rsh:491:13:decimal', stdlib.UInt_max, '0');
      const v5837 = v4670;
      const v5838 = true;
      const v5839 = v4974;
      const v5840 = v4975;
      const v5841 = v4674;
      const v5842 = v4675;
      const v5844 = v4757;
      const v5845 = v4679;
      const v5846 = v4965;
      const v5847 = v4965[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
      const v5848 = v5847[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'Claimant_tryClaim0_3852': {
      const v5018 = v4755[1];
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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    AdminAPI_tryClaimFee0_3852: ctc6,
    Claimant_finalClaim0_3852: ctc6,
    Claimant_tryClaim0_3852: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v4401, v4406, v4408, v4599, v4666, v4667, v4668, v4669, v4670, v4671, v4672, v4673, v4674, v4675, v4679, v4680, v4682, v4700, v4701] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc4, ctc2]);
  const v4703 = ctc.selfAddress();
  const v4705 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:445:12:application call to [unknown function] (defined at: ./index.rsh:445:12:function exp)', 'at ./index.rsh:424:19:application call to "runClaimant_tryClaim0_3852" (defined at: ./index.rsh:444:11:function exp)', 'at ./index.rsh:424:19:application call to [unknown function] (defined at: ./index.rsh:424:19:function exp)'],
    msg: 'in',
    who: 'Claimant_tryClaim'
    });
  const v4709 = stdlib.ge(v4701, v4669);
  const v4710 = stdlib.gt(v4673, stdlib.checkedBigNumberify('./index.rsh:447:25:decimal', stdlib.UInt_max, '1'));
  const v4711 = v4709 ? v4710 : false;
  const v4712 = stdlib.addressEq(v4703, v4406);
  const v4713 = v4711 ? v4712 : false;
  stdlib.assert(v4713, {
    at: './index.rsh:446:17:application',
    fs: ['at ./index.rsh:445:12:application call to [unknown function] (defined at: ./index.rsh:445:12:function exp)', 'at ./index.rsh:445:12:application call to [unknown function] (defined at: ./index.rsh:445:12:function exp)', 'at ./index.rsh:424:19:application call to "runClaimant_tryClaim0_3852" (defined at: ./index.rsh:444:11:function exp)', 'at ./index.rsh:424:19:application call to [unknown function] (defined at: ./index.rsh:424:19:function exp)'],
    msg: null,
    who: 'Claimant_tryClaim'
    });
  const v4716 = ['Claimant_tryClaim0_3852', v4705];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4401, v4406, v4408, v4599, v4666, v4667, v4668, v4669, v4670, v4671, v4672, v4673, v4674, v4675, v4679, v4680, v4682, v4700, v4701, v4716],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:450:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4755], secs: v4757, time: v4756, didSend: v3979, from: v4754 } = txn1;
      
      switch (v4755[0]) {
        case 'AdminAPI_tryClaimFee0_3852': {
          const v4758 = v4755[1];
          
          break;
          }
        case 'Claimant_finalClaim0_3852': {
          const v4888 = v4755[1];
          
          break;
          }
        case 'Claimant_tryClaim0_3852': {
          const v5018 = v4755[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_tryClaim"
            });
          ;
          const v5122 = stdlib.sub(v4701, v4669);
          const v5126 = stdlib.Array_set(v4700, '0', v5122);
          const v5127 = stdlib.Array_set(v4682, stdlib.checkedBigNumberify('./index.rsh:456:51:application', stdlib.UInt_max, '0'), v5126);
          sim_r.txns.push({
            kind: 'from',
            to: v4406,
            tok: v4401
            });
          const v5128 = true;
          const v5129 = await txn1.getOutput('Claimant_tryClaim', 'v5128', ctc3, v5128);
          
          const v5134 = stdlib.safeAdd(v4668, v4669);
          const v5135 = stdlib.safeSub(v4673, stdlib.checkedBigNumberify('./index.rsh:464:41:decimal', stdlib.UInt_max, '1'));
          let v5136;
          const v5137 = stdlib.eq(v4675, stdlib.checkedBigNumberify('./index.rsh:429:20:decimal', stdlib.UInt_max, '2'));
          const v5138 = stdlib.gt(v5135, stdlib.checkedBigNumberify('./index.rsh:429:29:decimal', stdlib.UInt_max, '1'));
          const v5139 = v5137 ? v5138 : false;
          if (v5139) {
            const v5140 = stdlib.safeDiv(v4669, stdlib.checkedBigNumberify('./index.rsh:429:56:decimal', stdlib.UInt_max, '2'));
            v5136 = v5140;
            }
          else {
            const v5141 = stdlib.eq(v4675, stdlib.checkedBigNumberify('./index.rsh:430:25:decimal', stdlib.UInt_max, '1'));
            const v5143 = v5141 ? v5138 : false;
            if (v5143) {
              v5136 = v4669;
              }
            else {
              const v5144 = stdlib.safeSub(v4670, v4668);
              v5136 = v5144;
              }
            }
          const v5145 = stdlib.safeAdd(v4672, v4674);
          const v5905 = v4666;
          const v5906 = v4667;
          const v5907 = v5134;
          const v5908 = v5136;
          const v5909 = v4670;
          const v5910 = v4671;
          const v5911 = v5145;
          const v5912 = v5135;
          const v5913 = v4674;
          const v5914 = v4675;
          const v5916 = v4757;
          const v5917 = v4679;
          const v5918 = v5127;
          const v5919 = v5127[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
          const v5920 = v5919[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc4, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v4755], secs: v4757, time: v4756, didSend: v3979, from: v4754 } = txn1;
  switch (v4755[0]) {
    case 'AdminAPI_tryClaimFee0_3852': {
      const v4758 = v4755[1];
      return;
      break;
      }
    case 'Claimant_finalClaim0_3852': {
      const v4888 = v4755[1];
      return;
      break;
      }
    case 'Claimant_tryClaim0_3852': {
      const v5018 = v4755[1];
      undefined /* setApiDetails */;
      ;
      const v5110 = stdlib.ge(v4701, v4669);
      const v5111 = stdlib.gt(v4673, stdlib.checkedBigNumberify('./index.rsh:453:25:decimal', stdlib.UInt_max, '1'));
      const v5112 = v5110 ? v5111 : false;
      const v5113 = stdlib.addressEq(v4754, v4406);
      const v5114 = v5112 ? v5113 : false;
      stdlib.assert(v5114, {
        at: './index.rsh:452:18:application',
        fs: ['at ./index.rsh:451:13:application call to [unknown function] (defined at: ./index.rsh:451:13:function exp)'],
        msg: null,
        who: 'Claimant_tryClaim'
        });
      const v5116 = stdlib.ge(v4757, v4672);
      stdlib.assert(v5116, {
        at: './index.rsh:455:18:application',
        fs: ['at ./index.rsh:451:13:application call to [unknown function] (defined at: ./index.rsh:451:13:function exp)'],
        msg: null,
        who: 'Claimant_tryClaim'
        });
      const v5122 = stdlib.sub(v4701, v4669);
      const v5123 = stdlib.ge(v5122, stdlib.checkedBigNumberify('./index.rsh:456:51:application', stdlib.UInt_max, '0'));
      stdlib.assert(v5123, {
        at: './index.rsh:456:51:application',
        fs: ['at ./index.rsh:451:13:application call to [unknown function] (defined at: ./index.rsh:451:13:function exp)'],
        msg: 'assume >= 0',
        who: 'Claimant_tryClaim'
        });
      const v5126 = stdlib.Array_set(v4700, '0', v5122);
      const v5127 = stdlib.Array_set(v4682, stdlib.checkedBigNumberify('./index.rsh:456:51:application', stdlib.UInt_max, '0'), v5126);
      ;
      const v5128 = true;
      const v5129 = await txn1.getOutput('Claimant_tryClaim', 'v5128', ctc3, v5128);
      if (v3979) {
        stdlib.protect(ctc8, await interact.out(v5018, v5129), {
          at: './index.rsh:444:12:application',
          fs: ['at ./index.rsh:444:12:application call to [unknown function] (defined at: ./index.rsh:444:12:function exp)', 'at ./index.rsh:457:12:application call to "k" (defined at: ./index.rsh:451:13:function exp)', 'at ./index.rsh:451:13:application call to [unknown function] (defined at: ./index.rsh:451:13:function exp)'],
          msg: 'out',
          who: 'Claimant_tryClaim'
          });
        }
      else {
        }
      
      const v5134 = stdlib.safeAdd(v4668, v4669);
      const v5135 = stdlib.safeSub(v4673, stdlib.checkedBigNumberify('./index.rsh:464:41:decimal', stdlib.UInt_max, '1'));
      let v5136;
      const v5137 = stdlib.eq(v4675, stdlib.checkedBigNumberify('./index.rsh:429:20:decimal', stdlib.UInt_max, '2'));
      const v5138 = stdlib.gt(v5135, stdlib.checkedBigNumberify('./index.rsh:429:29:decimal', stdlib.UInt_max, '1'));
      const v5139 = v5137 ? v5138 : false;
      if (v5139) {
        const v5140 = stdlib.safeDiv(v4669, stdlib.checkedBigNumberify('./index.rsh:429:56:decimal', stdlib.UInt_max, '2'));
        v5136 = v5140;
        }
      else {
        const v5141 = stdlib.eq(v4675, stdlib.checkedBigNumberify('./index.rsh:430:25:decimal', stdlib.UInt_max, '1'));
        const v5143 = v5141 ? v5138 : false;
        if (v5143) {
          v5136 = v4669;
          }
        else {
          const v5144 = stdlib.safeSub(v4670, v4668);
          v5136 = v5144;
          }
        }
      const v5145 = stdlib.safeAdd(v4672, v4674);
      const v5905 = v4666;
      const v5906 = v4667;
      const v5907 = v5134;
      const v5908 = v5136;
      const v5909 = v4670;
      const v5910 = v4671;
      const v5911 = v5145;
      const v5912 = v5135;
      const v5913 = v4674;
      const v5914 = v4675;
      const v5916 = v4757;
      const v5917 = v4679;
      const v5918 = v5127;
      const v5919 = v5127[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
      const v5920 = v5919[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
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
    tokenToPay: ctc3,
    vaultType: ctc0
    });
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_tryClaimFee0_3852: ctc8,
    Claimant_finalClaim0_3852: ctc8,
    Claimant_tryClaim0_3852: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v4209 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v4210 = [v4209, v4209];
  const v4216 = stdlib.protect(ctc4, await interact.setVault(), {
    at: './index.rsh:346:37:application',
    fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
    msg: 'setVault',
    who: 'Depositor'
    });
  const v4217 = v4216.amountToKeep;
  const v4218 = v4216.claimingAddr;
  const v4219 = v4216.managerContract;
  const v4220 = v4216.timePerStep;
  const v4221 = v4216.timeSteps;
  const v4222 = v4216.tokenToKeep;
  const v4223 = v4216.tokenToPay;
  const v4224 = v4216.vaultType;
  const v4233 = stdlib.gt(v4217, stdlib.checkedBigNumberify('./index.rsh:348:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4233, {
    at: './index.rsh:348:11:application',
    fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
    msg: null,
    who: 'Depositor'
    });
  const v4234 = stdlib.gt(v4220, stdlib.checkedBigNumberify('./index.rsh:349:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4234, {
    at: './index.rsh:349:11:application',
    fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
    msg: null,
    who: 'Depositor'
    });
  const v4235 = stdlib.gt(v4221, stdlib.checkedBigNumberify('./index.rsh:350:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4235, {
    at: './index.rsh:350:11:application',
    fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
    msg: null,
    who: 'Depositor'
    });
  const v4236 = stdlib.le(v4224, stdlib.checkedBigNumberify('./index.rsh:351:25:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v4236, {
    at: './index.rsh:351:11:application',
    fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
    msg: null,
    who: 'Depositor'
    });
  const v4237 = stdlib.tokenEq(v4223, v4222);
  const v4238 = v4237 ? false : true;
  stdlib.assert(v4238, {
    at: './index.rsh:352:11:application',
    fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
    msg: null,
    who: 'Depositor'
    });
  const v4239 = stdlib.eq(v4224, stdlib.checkedBigNumberify('./index.rsh:353:22:decimal', stdlib.UInt_max, '0'));
  if (v4239) {
    const v4240 = stdlib.eq(v4221, stdlib.checkedBigNumberify('./index.rsh:354:27:decimal', stdlib.UInt_max, '1'));
    stdlib.assert(v4240, {
      at: './index.rsh:354:13:application',
      fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  const v4241 = stdlib.eq(v4224, stdlib.checkedBigNumberify('./index.rsh:356:22:decimal', stdlib.UInt_max, '1'));
  if (v4241) {
    const v4242 = stdlib.safeDiv(v4217, v4221);
    const v4243 = stdlib.gt(v4242, stdlib.checkedBigNumberify('./index.rsh:357:50:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v4243, {
      at: './index.rsh:357:13:application',
      fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  const v4244 = stdlib.eq(v4224, stdlib.checkedBigNumberify('./index.rsh:359:22:decimal', stdlib.UInt_max, '2'));
  if (v4244) {
    const v4245 = stdlib.le(v4221, stdlib.checkedBigNumberify('./index.rsh:360:27:decimal', stdlib.UInt_max, '33'));
    stdlib.assert(v4245, {
      at: './index.rsh:360:13:application',
      fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    const v4246 = stdlib.safeSub(v4221, stdlib.checkedBigNumberify('./index.rsh:361:41:decimal', stdlib.UInt_max, '1'));
    const v4250 = stdlib.mod(v4246, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4251 = stdlib.eq(v4250, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4252 = v4251 ? stdlib.checkedBigNumberify('./index.rsh:361:18:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('reach standard library:428:15:decimal', stdlib.UInt_max, '1');
    const v4254 = stdlib.div(v4246, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v4257 = stdlib.mod(v4254, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4258 = stdlib.eq(v4257, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4264 = stdlib.mul(v4252, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '4'));
    const v4259 = v4258 ? v4264 : v4252;
    const v4267 = stdlib.div(v4254, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v4270 = stdlib.mod(v4267, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4271 = stdlib.eq(v4270, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4277 = stdlib.mul(v4259, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '16'));
    const v4272 = v4271 ? v4277 : v4259;
    const v4280 = stdlib.div(v4267, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v4283 = stdlib.mod(v4280, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4284 = stdlib.eq(v4283, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4290 = stdlib.mul(v4272, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '256'));
    const v4285 = v4284 ? v4290 : v4272;
    const v4293 = stdlib.div(v4280, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v4296 = stdlib.mod(v4293, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4297 = stdlib.eq(v4296, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4303 = stdlib.mul(v4285, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '65536'));
    const v4298 = v4297 ? v4303 : v4285;
    const v4306 = stdlib.div(v4293, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v4309 = stdlib.mod(v4306, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4310 = stdlib.eq(v4309, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4316 = stdlib.mul(v4298, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '4294967296'));
    const v4311 = v4310 ? v4316 : v4298;
    const v4321 = stdlib.lt(v4311, stdlib.UInt_max);
    stdlib.assert(v4321, {
      at: './index.rsh:361:13:application',
      fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    const v4397 = stdlib.safeDiv(v4217, v4311);
    const v4398 = stdlib.gt(v4397, stdlib.checkedBigNumberify('./index.rsh:363:23:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v4398, {
      at: './index.rsh:363:13:application',
      fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    const v4399 = stdlib.le(v4397, stdlib.UInt_max);
    stdlib.assert(v4399, {
      at: './index.rsh:364:13:application',
      fs: ['at ./index.rsh:336:17:application call to [unknown function] (defined at: ./index.rsh:336:21:function exp)'],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v4222, v4217, v4224, v4221, v4220, v4218, v4219, v4223],
    evt_cnt: 8,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc2, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:369:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4401, v4402, v4403, v4404, v4405, v4406, v4407, v4408], secs: v4410, time: v4409, didSend: v3503, from: v4400 } = txn1;
      
      const v4411 = v4210[stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '0')];
      const v4412 = stdlib.Array_set(v4411, '0', stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '0'));
      const v4413 = stdlib.Array_set(v4210, stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '0'), v4412);
      const v4415 = v4413[stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '1')];
      const v4416 = stdlib.Array_set(v4415, '0', stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '0'));
      const v4417 = stdlib.Array_set(v4413, stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '1'), v4416);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4401
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4408
        });
      ;
      const v4427 = stdlib.eq(v4403, stdlib.checkedBigNumberify('./index.rsh:386:20:decimal', stdlib.UInt_max, '0'));
      const v4429 = stdlib.eq(v4403, stdlib.checkedBigNumberify('./index.rsh:389:20:decimal', stdlib.UInt_max, '1'));
      const v4432 = stdlib.eq(v4403, stdlib.checkedBigNumberify('./index.rsh:392:20:decimal', stdlib.UInt_max, '2'));
      const v4590 = [];
      const v4591 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v4407,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('./index.rsh:406:11:decimal', stdlib.UInt_max, '1'),
            pays: stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc5.defaultValue /* simReturnVal */];})();
      const v4592 = await txn1.getOutput('internal', 'v4591', ctc6, v4591);
      const v4595 = v4592[stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '1')];
      const v4596 = v4595[stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '0')];
      const v4597 = v4595[stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '1')];
      const v4599 = v4595[stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '3')];
      const v4611 = stdlib.safeMuldiv(v4402, v4596, stdlib.checkedBigNumberify('./index.rsh:413:53:decimal', stdlib.UInt_max, '10000'));
      const v4618 = stdlib.add(v4410, v4405);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v4401, v4402, v4403, v4404, v4405, v4406, v4407, v4408], secs: v4410, time: v4409, didSend: v3503, from: v4400 } = txn1;
  const v4411 = v4210[stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '0')];
  const v4412 = stdlib.Array_set(v4411, '0', stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '0'));
  const v4413 = stdlib.Array_set(v4210, stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '0'), v4412);
  const v4415 = v4413[stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '1')];
  const v4416 = stdlib.Array_set(v4415, '0', stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '0'));
  const v4417 = stdlib.Array_set(v4413, stdlib.checkedBigNumberify('./index.rsh:369:13:dot', stdlib.UInt_max, '1'), v4416);
  const v4419 = stdlib.tokenEq(v4408, v4401);
  const v4420 = v4419 ? false : true;
  stdlib.assert(v4420, {
    at: './index.rsh:369:13:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Depositor'
    });
  ;
  ;
  ;
  const v4421 = stdlib.gt(v4402, stdlib.checkedBigNumberify('./index.rsh:380:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4421, {
    at: './index.rsh:380:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v4422 = stdlib.gt(v4405, stdlib.checkedBigNumberify('./index.rsh:381:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4422, {
    at: './index.rsh:381:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v4423 = stdlib.gt(v4404, stdlib.checkedBigNumberify('./index.rsh:382:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4423, {
    at: './index.rsh:382:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v4424 = stdlib.le(v4403, stdlib.checkedBigNumberify('./index.rsh:383:24:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v4424, {
    at: './index.rsh:383:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v4427 = stdlib.eq(v4403, stdlib.checkedBigNumberify('./index.rsh:386:20:decimal', stdlib.UInt_max, '0'));
  if (v4427) {
    const v4428 = stdlib.eq(v4404, stdlib.checkedBigNumberify('./index.rsh:387:26:decimal', stdlib.UInt_max, '1'));
    stdlib.assert(v4428, {
      at: './index.rsh:387:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  const v4429 = stdlib.eq(v4403, stdlib.checkedBigNumberify('./index.rsh:389:20:decimal', stdlib.UInt_max, '1'));
  if (v4429) {
    const v4430 = stdlib.safeDiv(v4402, v4404);
    const v4431 = stdlib.gt(v4430, stdlib.checkedBigNumberify('./index.rsh:390:49:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v4431, {
      at: './index.rsh:390:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  const v4432 = stdlib.eq(v4403, stdlib.checkedBigNumberify('./index.rsh:392:20:decimal', stdlib.UInt_max, '2'));
  if (v4432) {
    const v4433 = stdlib.le(v4404, stdlib.checkedBigNumberify('./index.rsh:393:26:decimal', stdlib.UInt_max, '63'));
    stdlib.assert(v4433, {
      at: './index.rsh:393:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    const v4434 = stdlib.safeSub(v4404, stdlib.checkedBigNumberify('./index.rsh:394:40:decimal', stdlib.UInt_max, '1'));
    const v4438 = stdlib.mod(v4434, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4439 = stdlib.eq(v4438, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4440 = v4439 ? stdlib.checkedBigNumberify('./index.rsh:394:17:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('reach standard library:428:15:decimal', stdlib.UInt_max, '1');
    const v4442 = stdlib.div(v4434, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v4445 = stdlib.mod(v4442, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4446 = stdlib.eq(v4445, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4452 = stdlib.mul(v4440, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '4'));
    const v4447 = v4446 ? v4452 : v4440;
    const v4455 = stdlib.div(v4442, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v4458 = stdlib.mod(v4455, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4459 = stdlib.eq(v4458, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4465 = stdlib.mul(v4447, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '16'));
    const v4460 = v4459 ? v4465 : v4447;
    const v4468 = stdlib.div(v4455, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v4471 = stdlib.mod(v4468, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4472 = stdlib.eq(v4471, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4478 = stdlib.mul(v4460, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '256'));
    const v4473 = v4472 ? v4478 : v4460;
    const v4481 = stdlib.div(v4468, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v4484 = stdlib.mod(v4481, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4485 = stdlib.eq(v4484, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4491 = stdlib.mul(v4473, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '65536'));
    const v4486 = v4485 ? v4491 : v4473;
    const v4494 = stdlib.div(v4481, stdlib.checkedBigNumberify('reach standard library:429:39:decimal', stdlib.UInt_max, '2'));
    const v4497 = stdlib.mod(v4494, stdlib.checkedBigNumberify('reach standard library:429:14:decimal', stdlib.UInt_max, '2'));
    const v4498 = stdlib.eq(v4497, stdlib.checkedBigNumberify('reach standard library:429:19:decimal', stdlib.UInt_max, '1'));
    const v4504 = stdlib.mul(v4486, stdlib.checkedBigNumberify('reach standard library:429:44:application', stdlib.UInt_max, '4294967296'));
    const v4499 = v4498 ? v4504 : v4486;
    const v4509 = stdlib.lt(v4499, stdlib.UInt_max);
    stdlib.assert(v4509, {
      at: './index.rsh:394:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    const v4585 = stdlib.safeDiv(v4402, v4499);
    const v4586 = stdlib.gt(v4585, stdlib.checkedBigNumberify('./index.rsh:396:22:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v4586, {
      at: './index.rsh:396:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    const v4587 = stdlib.le(v4585, stdlib.UInt_max);
    stdlib.assert(v4587, {
      at: './index.rsh:397:12:application',
      fs: [],
      msg: null,
      who: 'Depositor'
      });
    }
  else {
    }
  const v4590 = [];
  const v4591 = undefined /* Remote */;
  const v4592 = await txn1.getOutput('internal', 'v4591', ctc6, v4591);
  const v4594 = v4592[stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '0')];
  const v4595 = v4592[stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '1')];
  const v4596 = v4595[stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '0')];
  const v4597 = v4595[stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '1')];
  const v4599 = v4595[stdlib.checkedBigNumberify('./index.rsh:407:5:application', stdlib.UInt_max, '3')];
  const v4604 = stdlib.le(v4594, stdlib.UInt_max);
  stdlib.assert(v4604, {
    at: './index.rsh:407:5:application',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Depositor'
    });
  const v4606 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4594);
  stdlib.assert(v4606, {
    at: './index.rsh:407:5:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Depositor'
    });
  const v4610 = stdlib.le(v4596, stdlib.checkedBigNumberify('./index.rsh:411:21:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v4610, {
    at: './index.rsh:411:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v4611 = stdlib.safeMuldiv(v4402, v4596, stdlib.checkedBigNumberify('./index.rsh:413:53:decimal', stdlib.UInt_max, '10000'));
  const v4613 = stdlib.sub(stdlib.UInt_max, v4611);
  const v4614 = stdlib.le(v4402, v4613);
  stdlib.assert(v4614, {
    at: './index.rsh:414:10:application',
    fs: [],
    msg: null,
    who: 'Depositor'
    });
  const v4618 = stdlib.add(v4410, v4405);
  const v4619 = stdlib.safeAdd(v4402, v4611);
  
  const txn2 = await (ctc.sendrecv({
    args: [v4400, v4401, v4402, v4403, v4404, v4405, v4406, v4408, v4410, v4417, v4427, v4429, v4432, v4597, v4599, v4611, v4618],
    evt_cnt: 0,
    funcNum: 1,
    lct: v4409,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '0'), [[v4619, v4401], [v4597, v4408]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v4631, time: v4630, didSend: v3809, from: v4629 } = txn2;
      
      const v4632 = stdlib.safeAdd(v4402, v4611);
      ;
      const v4642 = v4417[stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '0')];
      const v4643 = v4642[stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '0')];
      const v4644 = stdlib.add(v4643, v4632);
      const v4648 = stdlib.Array_set(v4642, '0', v4644);
      const v4649 = stdlib.Array_set(v4417, stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '0'), v4648);
      sim_r.txns.push({
        amt: v4632,
        kind: 'to',
        tok: v4401
        });
      const v4650 = v4649[stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '1')];
      const v4651 = v4650[stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '0')];
      const v4652 = stdlib.add(v4651, v4597);
      const v4656 = stdlib.Array_set(v4650, '0', v4652);
      const v4657 = stdlib.Array_set(v4649, stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '1'), v4656);
      sim_r.txns.push({
        amt: v4597,
        kind: 'to',
        tok: v4408
        });
      
      let v4660;
      if (v4427) {
        v4660 = v4402;
        }
      else {
        if (v4429) {
          const v4663 = stdlib.safeDiv(v4402, v4404);
          v4660 = v4663;
          }
        else {
          if (v4432) {
            const v4665 = stdlib.safeDiv(v4402, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', stdlib.UInt_max, '2'));
            v4660 = v4665;
            }
          else {
            v4660 = stdlib.checkedBigNumberify('./index.rsh:15:17:decimal', stdlib.UInt_max, '0');
            }
          }
        }
      const v4666 = v4611;
      const v4667 = v4597;
      const v4668 = stdlib.checkedBigNumberify('./index.rsh:424:42:decimal', stdlib.UInt_max, '0');
      const v4669 = v4660;
      const v4670 = v4402;
      const v4671 = false;
      const v4672 = v4618;
      const v4673 = v4404;
      const v4674 = v4405;
      const v4675 = v4403;
      const v4676 = v4630;
      const v4679 = v4631;
      const v4680 = v4410;
      const v4682 = v4657;
      
      if (await (async () => {
        
        return true;})()) {
        const v4700 = v4682[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
        const v4701 = v4700[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v4408
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v4401
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
    tys: [ctc1, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc3, ctc0, ctc12, ctc10, ctc10, ctc10, ctc0, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v4631, time: v4630, didSend: v3809, from: v4629 } = txn2;
  const v4632 = stdlib.safeAdd(v4402, v4611);
  ;
  const v4642 = v4417[stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '0')];
  const v4643 = v4642[stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '0')];
  const v4644 = stdlib.add(v4643, v4632);
  const v4645 = stdlib.le(v4644, stdlib.UInt_max);
  stdlib.assert(v4645, {
    at: './index.rsh:420:13:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Depositor'
    });
  const v4648 = stdlib.Array_set(v4642, '0', v4644);
  const v4649 = stdlib.Array_set(v4417, stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '0'), v4648);
  ;
  const v4650 = v4649[stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '1')];
  const v4651 = v4650[stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '0')];
  const v4652 = stdlib.add(v4651, v4597);
  const v4653 = stdlib.le(v4652, stdlib.UInt_max);
  stdlib.assert(v4653, {
    at: './index.rsh:420:13:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Depositor'
    });
  const v4656 = stdlib.Array_set(v4650, '0', v4652);
  const v4657 = stdlib.Array_set(v4649, stdlib.checkedBigNumberify('./index.rsh:420:13:dot', stdlib.UInt_max, '1'), v4656);
  ;
  const v4658 = stdlib.addressEq(v4400, v4629);
  stdlib.assert(v4658, {
    at: './index.rsh:420:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Depositor'
    });
  stdlib.protect(ctc7, await interact.ready(), {
    at: './index.rsh:421:27:application',
    fs: ['at ./index.rsh:421:27:application call to [unknown function] (defined at: ./index.rsh:421:27:function exp)', 'at ./index.rsh:421:27:application call to "liftedInteract" (defined at: ./index.rsh:421:27:application)'],
    msg: 'ready',
    who: 'Depositor'
    });
  
  let v4660;
  if (v4427) {
    v4660 = v4402;
    }
  else {
    if (v4429) {
      const v4663 = stdlib.safeDiv(v4402, v4404);
      v4660 = v4663;
      }
    else {
      if (v4432) {
        const v4665 = stdlib.safeDiv(v4402, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', stdlib.UInt_max, '2'));
        v4660 = v4665;
        }
      else {
        v4660 = stdlib.checkedBigNumberify('./index.rsh:15:17:decimal', stdlib.UInt_max, '0');
        }
      }
    }
  let v4666 = v4611;
  let v4667 = v4597;
  let v4668 = stdlib.checkedBigNumberify('./index.rsh:424:42:decimal', stdlib.UInt_max, '0');
  let v4669 = v4660;
  let v4670 = v4402;
  let v4671 = false;
  let v4672 = v4618;
  let v4673 = v4404;
  let v4674 = v4405;
  let v4675 = v4403;
  let v4676 = v4630;
  let v4679 = v4631;
  let v4680 = v4410;
  let v4682 = v4657;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const v4700 = v4682[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
    const v4701 = v4700[stdlib.checkedBigNumberify('./index.rsh:442:18:application', stdlib.UInt_max, '0')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4755], secs: v4757, time: v4756, didSend: v3979, from: v4754 } = txn4;
    switch (v4755[0]) {
      case 'AdminAPI_tryClaimFee0_3852': {
        const v4758 = v4755[1];
        undefined /* setApiDetails */;
        ;
        const v4766 = stdlib.addressEq(v4754, v4599);
        const v4769 = stdlib.ge(v4701, v4666);
        const v4770 = v4766 ? v4769 : false;
        const v4771 = v4682[stdlib.checkedBigNumberify('./index.rsh:507:23:application', stdlib.UInt_max, '1')];
        const v4772 = v4771[stdlib.checkedBigNumberify('./index.rsh:507:23:application', stdlib.UInt_max, '0')];
        const v4773 = stdlib.ge(v4772, v4667);
        const v4774 = v4770 ? v4773 : false;
        stdlib.assert(v4774, {
          at: './index.rsh:505:18:application',
          fs: ['at ./index.rsh:504:13:application call to [unknown function] (defined at: ./index.rsh:504:13:function exp)'],
          msg: null,
          who: 'Depositor'
          });
        const v4789 = stdlib.sub(v4701, v4666);
        const v4790 = stdlib.ge(v4789, stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4790, {
          at: './index.rsh:508:78:application',
          fs: ['at ./index.rsh:504:13:application call to [unknown function] (defined at: ./index.rsh:504:13:function exp)'],
          msg: 'assume >= 0',
          who: 'Depositor'
          });
        const v4793 = stdlib.Array_set(v4700, '0', v4789);
        const v4794 = stdlib.Array_set(v4682, stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '0'), v4793);
        ;
        const v4795 = v4794[stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '1')];
        const v4796 = v4795[stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '0')];
        const v4800 = stdlib.sub(v4796, v4667);
        const v4801 = stdlib.ge(v4800, stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4801, {
          at: './index.rsh:508:78:application',
          fs: ['at ./index.rsh:504:13:application call to [unknown function] (defined at: ./index.rsh:504:13:function exp)'],
          msg: 'assume >= 0',
          who: 'Depositor'
          });
        const v4804 = stdlib.Array_set(v4795, '0', v4800);
        const v4805 = stdlib.Array_set(v4794, stdlib.checkedBigNumberify('./index.rsh:508:78:application', stdlib.UInt_max, '1'), v4804);
        ;
        const v4806 = true;
        await txn4.getOutput('AdminAPI_tryClaimFee', 'v4806', ctc10, v4806);
        const cv4666 = stdlib.checkedBigNumberify('./index.rsh:514:13:decimal', stdlib.UInt_max, '0');
        const cv4667 = stdlib.checkedBigNumberify('./index.rsh:515:13:decimal', stdlib.UInt_max, '0');
        const cv4668 = v4668;
        const cv4669 = v4669;
        const cv4670 = v4670;
        const cv4671 = v4671;
        const cv4672 = v4672;
        const cv4673 = v4673;
        const cv4674 = v4674;
        const cv4675 = v4675;
        const cv4676 = v4756;
        const cv4679 = v4757;
        const cv4680 = v4679;
        const cv4682 = v4805;
        
        v4666 = cv4666;
        v4667 = cv4667;
        v4668 = cv4668;
        v4669 = cv4669;
        v4670 = cv4670;
        v4671 = cv4671;
        v4672 = cv4672;
        v4673 = cv4673;
        v4674 = cv4674;
        v4675 = cv4675;
        v4676 = cv4676;
        v4679 = cv4679;
        v4680 = cv4680;
        v4682 = cv4682;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Claimant_finalClaim0_3852': {
        const v4888 = v4755[1];
        undefined /* setApiDetails */;
        ;
        const v4946 = stdlib.safeSub(v4670, v4668);
        const v4947 = stdlib.eq(v4701, v4946);
        const v4948 = stdlib.eq(v4673, stdlib.checkedBigNumberify('./index.rsh:479:26:decimal', stdlib.UInt_max, '1'));
        const v4949 = v4947 ? v4948 : false;
        const v4950 = stdlib.addressEq(v4754, v4406);
        const v4951 = v4949 ? v4950 : false;
        stdlib.assert(v4951, {
          at: './index.rsh:478:18:application',
          fs: ['at ./index.rsh:477:13:application call to [unknown function] (defined at: ./index.rsh:477:13:function exp)'],
          msg: null,
          who: 'Depositor'
          });
        const v4953 = stdlib.ge(v4757, v4672);
        stdlib.assert(v4953, {
          at: './index.rsh:481:18:application',
          fs: ['at ./index.rsh:477:13:application call to [unknown function] (defined at: ./index.rsh:477:13:function exp)'],
          msg: null,
          who: 'Depositor'
          });
        const v4960 = stdlib.sub(v4701, v4946);
        const v4961 = stdlib.ge(v4960, stdlib.checkedBigNumberify('./index.rsh:482:72:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4961, {
          at: './index.rsh:482:72:application',
          fs: ['at ./index.rsh:477:13:application call to [unknown function] (defined at: ./index.rsh:477:13:function exp)'],
          msg: 'assume >= 0',
          who: 'Depositor'
          });
        const v4964 = stdlib.Array_set(v4700, '0', v4960);
        const v4965 = stdlib.Array_set(v4682, stdlib.checkedBigNumberify('./index.rsh:482:72:application', stdlib.UInt_max, '0'), v4964);
        ;
        const v4966 = true;
        await txn4.getOutput('Claimant_finalClaim', 'v4966', ctc10, v4966);
        const v4973 = stdlib.safeAdd(v4668, v4946);
        const v4974 = stdlib.safeAdd(v4672, v4674);
        const v4975 = stdlib.safeSub(v4673, stdlib.checkedBigNumberify('./index.rsh:494:30:decimal', stdlib.UInt_max, '1'));
        const cv4666 = v4666;
        const cv4667 = v4667;
        const cv4668 = v4973;
        const cv4669 = stdlib.checkedBigNumberify('./index.rsh:491:13:decimal', stdlib.UInt_max, '0');
        const cv4670 = v4670;
        const cv4671 = true;
        const cv4672 = v4974;
        const cv4673 = v4975;
        const cv4674 = v4674;
        const cv4675 = v4675;
        const cv4676 = v4756;
        const cv4679 = v4757;
        const cv4680 = v4679;
        const cv4682 = v4965;
        
        v4666 = cv4666;
        v4667 = cv4667;
        v4668 = cv4668;
        v4669 = cv4669;
        v4670 = cv4670;
        v4671 = cv4671;
        v4672 = cv4672;
        v4673 = cv4673;
        v4674 = cv4674;
        v4675 = cv4675;
        v4676 = cv4676;
        v4679 = cv4679;
        v4680 = cv4680;
        v4682 = cv4682;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Claimant_tryClaim0_3852': {
        const v5018 = v4755[1];
        undefined /* setApiDetails */;
        ;
        const v5110 = stdlib.ge(v4701, v4669);
        const v5111 = stdlib.gt(v4673, stdlib.checkedBigNumberify('./index.rsh:453:25:decimal', stdlib.UInt_max, '1'));
        const v5112 = v5110 ? v5111 : false;
        const v5113 = stdlib.addressEq(v4754, v4406);
        const v5114 = v5112 ? v5113 : false;
        stdlib.assert(v5114, {
          at: './index.rsh:452:18:application',
          fs: ['at ./index.rsh:451:13:application call to [unknown function] (defined at: ./index.rsh:451:13:function exp)'],
          msg: null,
          who: 'Depositor'
          });
        const v5116 = stdlib.ge(v4757, v4672);
        stdlib.assert(v5116, {
          at: './index.rsh:455:18:application',
          fs: ['at ./index.rsh:451:13:application call to [unknown function] (defined at: ./index.rsh:451:13:function exp)'],
          msg: null,
          who: 'Depositor'
          });
        const v5122 = stdlib.sub(v4701, v4669);
        const v5123 = stdlib.ge(v5122, stdlib.checkedBigNumberify('./index.rsh:456:51:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5123, {
          at: './index.rsh:456:51:application',
          fs: ['at ./index.rsh:451:13:application call to [unknown function] (defined at: ./index.rsh:451:13:function exp)'],
          msg: 'assume >= 0',
          who: 'Depositor'
          });
        const v5126 = stdlib.Array_set(v4700, '0', v5122);
        const v5127 = stdlib.Array_set(v4682, stdlib.checkedBigNumberify('./index.rsh:456:51:application', stdlib.UInt_max, '0'), v5126);
        ;
        const v5128 = true;
        await txn4.getOutput('Claimant_tryClaim', 'v5128', ctc10, v5128);
        const v5134 = stdlib.safeAdd(v4668, v4669);
        const v5135 = stdlib.safeSub(v4673, stdlib.checkedBigNumberify('./index.rsh:464:41:decimal', stdlib.UInt_max, '1'));
        let v5136;
        const v5137 = stdlib.eq(v4675, stdlib.checkedBigNumberify('./index.rsh:429:20:decimal', stdlib.UInt_max, '2'));
        const v5138 = stdlib.gt(v5135, stdlib.checkedBigNumberify('./index.rsh:429:29:decimal', stdlib.UInt_max, '1'));
        const v5139 = v5137 ? v5138 : false;
        if (v5139) {
          const v5140 = stdlib.safeDiv(v4669, stdlib.checkedBigNumberify('./index.rsh:429:56:decimal', stdlib.UInt_max, '2'));
          v5136 = v5140;
          }
        else {
          const v5141 = stdlib.eq(v4675, stdlib.checkedBigNumberify('./index.rsh:430:25:decimal', stdlib.UInt_max, '1'));
          const v5143 = v5141 ? v5138 : false;
          if (v5143) {
            v5136 = v4669;
            }
          else {
            const v5144 = stdlib.safeSub(v4670, v4668);
            v5136 = v5144;
            }
          }
        const v5145 = stdlib.safeAdd(v4672, v4674);
        const cv4666 = v4666;
        const cv4667 = v4667;
        const cv4668 = v5134;
        const cv4669 = v5136;
        const cv4670 = v4670;
        const cv4671 = v4671;
        const cv4672 = v5145;
        const cv4673 = v5135;
        const cv4674 = v4674;
        const cv4675 = v4675;
        const cv4676 = v4756;
        const cv4679 = v4757;
        const cv4680 = v4679;
        const cv4682 = v5127;
        
        v4666 = cv4666;
        v4667 = cv4667;
        v4668 = cv4668;
        v4669 = cv4669;
        v4670 = cv4670;
        v4671 = cv4671;
        v4672 = cv4672;
        v4673 = cv4673;
        v4674 = cv4674;
        v4675 = cv4675;
        v4676 = cv4676;
        v4679 = cv4679;
        v4680 = cv4680;
        v4682 = cv4682;
        
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
  appApproval: `ByASAAECBP///////////wEIA6CNBvaJlL0M2+z4+wz3roWcCyhQaHAgEJBOJgMBAQEAACI1ADEYQQffKmRJIls1ASEFWzUCNhoAF0lBAI4iNQQjNQZJIQgMQABaSSEJDEAAECEJEkQqNf+AAQI0/1BCAIghCBJENAElEkQpZChkUEk1A1d4ATQDV3AIUDQDV2AIUDQDV2gIUDQDV3kIUDQDV6EIUDQDV4EIUDQDV9wIUDUHQgdcSSEKDEAADiEKEkQqNf8oNP9QQgAwgd6V1doIEkQqNf8pNP9QQgAeNhoCFzUENhoDNhoBF0kjDEADoEkhBgxAAoIhBhJEJTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSkpKSkpKIls1/1cIIDX+IQtbNf1XMCA1/CEMWzX7gVhbNfqBYFs1+SENWzX4IQ5bNfdXeAEXNfaBeVs19YGBAVs19IGJAVs184GRAVs18oGZAVs18VepIjXwV8sRNe+B3AFbNe5JNQU17YAELkXGATTtULA07SJVSSMMQAE9SSQMQAC0JBJENO40+A809CMNEDEANP4SEEQyBzT1D0Q07jT4CUk17CIPRLEisgE0+LISJbIQNP6yFDT/shGzgAkAAAAAAAAUCAGwKDUHNPQjCUk16yMNNek08iQSNOkQQQAJNPgkCjXqQgAYNPIjEjTpEEEABzT4NepCAAc09zT5CTXqNP80/jT9NPw0+zT6NPk0+Ag06jT3NPY09TTzCDTrNPM08jIGMgc08TTwNO807BZcAFwAQgTpSDT3NPkJNew07jTsEjT0IxIQMQA0/hIQRDIHNPUPRDTuNOwJSTXrIg9EsSKyATTsshIlshA0/rIUNP+yEbOACQAAAAAAABNmAbAoNQc0/zT+NP00/DT7NPo0+TTsCCI09yM09TTzCDT0Iwk08zTyMgYyBzTxNPA07zTrFlwAXABCBGZIMQA0/BI07jT7DxA08FcRESJbNPoPEEQ07jT7CUk17CIPRDTwNO807BZcAFwANeuxIrIBNPuyEiWyEDEAshQ0/7IRszTrVxERSTXqIls0+glJNekiD0SxIrIBNPqyEiWyEDEAshQ0/bIRs4AJAAAAAAAAEsYBsCg1BzT/NP40/TT8IiI0+TT4NPc09jT1NPQ08zTyMgYyBzTxNOs06jTpFlwAXBFCA74jEkQjNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpJIQ9bNf8hC1s1/oE4WzX9IQ1bNfxXeCI1+4GdAVs1+oHFAVs1+YAEmouRdLA0/jT5CDX4NPtXABFJNfciWzT4CEk19iEEDkQ0+zT3NPYWXABcADX1NPg0/4gEXTT1VxERSTX0Ils0+ghJNfMhBA5ENPo0/IgEQjQDVwAgMQASRDQDV5oBF0EABzT+NfJCACg0A1ebARdBAAo0/jT9CjXyQgAVNANXnAEXQQAJNP4kCjXyQgADIjXyNP80A1dIIDT8NANXpSA0+TT6IjTyNP4iNAOBzQFbNP00A4FAWzQDgTBbMgYyBzQDIQ5bNPU09DTzFlwAXBFCAqdIIQeIA6IiNAESRDQESSISTDQCEhFESTUFSUpKSiJbNf8hBVs1/iEQWzX9gRhbNfwhD1s1+1coIDX6gUhbNfkhDFs1+IAEqz6AUzT/FlA0/hZQNP0WUDT8FlA0+xZQNPpQNPkWUDT4FlCwgRGvSTX3SVBJNfZJVwARIQWvXABcAEk19UlXEREhBa9cAFwRNfQ0+DT/E0QhB4gDDbEisgEishIlshAyCrIUNP+yEbMhB4gC9bEisgEishIlshAyCrIUNPiyEbM0/iINRDT7Ig1ENPwiDUQ0/SQORDT9IhJJNfNBAAg0/CMSREIAADT9IxJJNfJBAAs0/jT8CiINREIAADT9JBJJNfFBAJo0/IE/DkQ0/CMJNfAjJDTwJBgjEk017zTwJAo17jTvSSULNO4kGCMSTTXtNO4kCjXsNO1JIRALNOwkGCMSTTXrNOwkCjXqNOtJgYACCzTqJBgjEk016TTqJAo16DTpSYGAgAQLNOgkGCMSTUk150mBgICAgBALNOgkCiQYIxJNSTXmIQQMRDT+NOYKSTXlIg1ENOUhBA5EQgAAgAVhcHBJRDT5FlADNe8yCng17jIKYDTuCRY17bEisgGBBrIQNPmyGIAEfjXZRbIaszIKYDTuCTTtFwkWtwA+VwQAUDXwgAgAAAAAAAAR7zTwULA08Ek17yJbNe4071cIOEk17SJbNew07SEFWzXrNO1XGCA16jTuIQQORCI07hJENOwhEQ5ENP407B0hEZc16TT+IQQ06QkORDIHNPsINegxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPpQNPgWUDIHFlA09FA08xZRBwhQNPIWUQcIUDTxFlEHCFA06xZQNOpQNOkWUDToFlApSwFXAH9nKEsBV39WZ0gjNQEyBjUCQgCvNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuNP9XABFJNe0iWzXsNO4WNO9QNPAWUDTxUDTyFlA08xZQNPQWUDT1FlA09hZQNPcWUQcIUDT4FlA0+RZQNPoWUDT7FlA0/RZQNP4WUDT/UDTtUDTsFlApSwFXAH9nKEsBV39lZ0glNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEGMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 228,
  unsupported: [],
  version: 11,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:407:5:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:415:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:525:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:424:19:after expr stmt semicolon',
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
