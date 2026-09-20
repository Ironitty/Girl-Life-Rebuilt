import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) !== 1  &&  ((s as any).pattest ?? 0) > 0) {
    (s as any).j = 0;
    // TODO-QSP: p ''
    if (((s as any).kid ?? 0) > 0  &&  (Array.isArray((s as any).surefather) ? ((s as any).surefather as any[]).indexOf('0') : -1) !== ((s as any).kid ?? 0)) {
      // TODO-QSP: pl '<br>Select the child you want to compare with <<$ARGS[0]>>:<br>'
      (s as any).papa = ((s as any).locArgs?.[0] ?? 0);
      // TODO-QSP: :kiddieloop
      ((s as any).kidid = (s as any).kidid ?? {})[String((s as any).j ?? 0)] = ((s as any).j ?? 0);
      (s as any).value = ((s as any).kidid ?? 0)?.[String((s as any).j ?? 0)];
      if (((s as any).surefather ?? 0)?.[String((s as any).j ?? 0)] === 0) {
        // TODO-QSP: pl '    <a href="exec:func(''pattest'', value, 1) & pattest -= 1 & gs ''stat''"><<$kidname[j]>></a>'
      }
      if (((s as any).j ?? 0) < ((s as any).kid ?? 0)-1) {
        (s as any).j = ((s as any).j ?? 0) + (1);
        // TODO-QSP: jump 'kiddieloop'
      }
    } else {
      if ((!((s as any).kid ?? 0))) {
        qspCall(s, 'stat', '');
      } else {
        qspCall(s, 'stat', '');
      }
    }
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) !== 1) {
      qspCall(s, 'stat', '');
    }
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 1) {
    // TODO-QSP: testresDay[ARGS[0]] = 2147483647
    if (((s as any).ChildFath ?? 0)[Number((s as any).locArgs?.[0] ?? 0)] === ((s as any).papa ?? 0)) {
      // TODO-QSP: testresRes[ARGS[0]] = 1 else testresRes[ARGS[0]] = 0
    }
    // TODO-QSP: $testresPotfath[ARGS[0]] = $papa
    // TODO-QSP: testresKid[ARGS[0]] = ARGS[0]
    // TODO-QSP: purse_pattest[ARGS[0]] = 1
    (s as any).used_pattest = ((s as any).used_pattest ?? 0) + (1);
  }
  (s as any).test_purse = qspUntranslated(s, "{", { location: "pattest" });
  (s as any).j = 0;
  (s as any).msg = 'Tests in your purse:';
  // TODO-QSP: :pursekid
  if (((s as any).purse_pattest ?? 0)?.[String((s as any).j ?? 0)] === 1) {
    // TODO-QSP: $msg += '<br><<$testresPotfath[j]>>''s test for fatherhood of <<$kidname[j]>>.'
  }
  if (((s as any).j ?? 0) < ((s as any).kid ?? 0)-1) {
    (s as any).j = ((s as any).j ?? 0) + (1);
    // TODO-QSP: jump 'pursekid'
  }
  (s as any).send_test = qspUntranslated(s, "{", { location: "pattest" });
  (s as any).j = 0;
  // TODO-QSP: :kloop
  ((s as any).kidid = (s as any).kidid ?? {})[String((s as any).j ?? 0)] = ((s as any).j ?? 0);
  if (((s as any).patpack ?? 0)?.[String((s as any).j ?? 0)] === 1) {
    // TODO-QSP: dynamic text:     <a href="exec: testresDay[kidid[j]] = daystart+rand(5,7) & patpack[kidid[j]]...
    scene.text('    <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: testresDay[kidid[j]] = daystart+rand(5,7) */ /* TODO-QSP: patpack[kidid[j]] = 0 */ s.used_pattest -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027money/u0027, /u0027pay/u0027, String(window.__gameStore.getState().20000 ?? /u0027/u0027)); return false;">$kidname[j]</a>');
  }
  if (((s as any).j ?? 0) < ((s as any).kid ?? 0) - 1) {
    (s as any).j = ((s as any).j ?? 0) + (1);
    // TODO-QSP: jump 'kloop'
  }
  // TODO-QSP: testresDay[ARGS[0]] = daystart+rand(5,7)
  // TODO-QSP: purse_pattest[ARGS[0]] = 0
  (s as any).used_pattest = ((s as any).used_pattest ?? 0) - (1);
  (s as any).sms_testresult = qspUntranslated(s, "{", { location: "pattest" });
  (s as any).cyc = 0;
  // TODO-QSP: :testloop
  if (((s as any).testresKid ?? 0)?.[String((s as any).cyc ?? 0)] !== 1) {
    (s as any).cyc = ((s as any).cyc ?? 0) + (1);
    // TODO-QSP: jump 'testloop'
  }
  if (((s as any).daystart ?? 0) >= ((s as any).testresDay ?? 0)?.[String((s as any).cyc ?? 0)]) {
    (s as any).c2 = 0;
    // TODO-QSP: $SMS_msg[c2] = 'Result of testing: <br>'
    if (((s as any).testresRes ?? 0)?.[String((s as any).cyc ?? 0)] === 1) {
      ((s as any).SMS_msg = (s as any).SMS_msg ?? {})[String((s as any).c2 ?? 0)] = ((s as any).SMS_msg[String((s as any).c2 ?? 0)] ?? 0) + ('matching DNA\' else $SMS_msg[c2] += \'no DNA match');
    }
    // TODO-QSP: $SMS_msg[c2] += '<br>between <<$testresPotfath[cyc]>> and <<$kidname[testresKid[cyc]]>>.'
    // TODO-QSP: $SMS_effect[c2] = {
    if (((s as any).testresRes ?? 0)?.[String((s as any).cyc ?? 0)] === 1) {
      // TODO-QSP: surefather[testresKid[cyc]] = 1
      // TODO-QSP: $ChildThFath[testresKid[cyc]] = $ChildFath[testresKid[cyc]]
    } else {
      if (((s as any).ChildThFath ?? 0)[((s as any).testresKid ?? 0)?.[String((s as any).cyc ?? 0)]] === ((s as any).testresPotfath ?? 0)[((s as any).testresKid ?? 0)?.[String((s as any).cyc ?? 0)]]) {
        // TODO-QSP: $ChildThFath[testresKid[cyc]] = 'unknown'
      }
    }
    ((s as any).testresKid = (s as any).testresKid ?? {})[String((s as any).cyc ?? 0)] = 0;
  }
  if (((s as any).cyc ?? 0) < ((s as any).kid ?? 0)-1) {
    (s as any).cyc = ((s as any).cyc ?? 0) + (1);
    // TODO-QSP: jump 'testloop'
  }
  scene.build();
}

export const pattest: LocationDef = {
  name: 'pattest',
  region: 'other',
  enter: enter,
};
