import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] !== 1  &&  ((s as any).pattest ?? 0) > 0) {
    (s as any).j = 0;
    // TODO-QSP: p ''
    if (((s as any).kid ?? 0) > 0  &&  ((s as any).arrpos ?? 0)('surefather', '0') !== ((s as any).kid ?? 0)) {
      // TODO-QSP: pl '<br>Select the child you want to compare with <<$ARGS[0]>>:<br>'
      // TODO-QSP: :kiddieloop
      (s as any).kidid[j] = ((s as any).j ?? 0);
      (s as any).value = ((s as any).kidid ?? 0)?.[String((s as any).j ?? 0)];
      if (((s as any).surefather ?? 0)?.[String((s as any).j ?? 0)] === 0) {
        // TODO-QSP: pl '    <a href="exec:func(''pattest'', value, 1)
        (s as any).pattest = ((s as any).pattest ?? 0) - (1);
        // TODO-QSP: gs ''stat''"><<$kidname[j]>></a>'
      }
      if (((s as any).j ?? 0) < ((s as any).kid ?? 0)-1) {
        (s as any).j = ((s as any).j ?? 0) + (1);
        // TODO-QSP: jump 'kiddieloop'
      }
    } else {
      qspCall(s, 'stat', '');
      qspCall(s, 'stat', '');
    }
  } else {
    qspCall(s, 'stat', '');
  }
  if (((s as any).ARGS ?? 0)[1] === 1) {
    // TODO-QSP: testresDay[ARGS[0]] = 2147483647
    if (((s as any).ChildFath ?? 0)[((s as any).ARGS ?? 0)[0]] === ((s as any).papa ?? 0)) {
      // TODO-QSP: testresRes[ARGS[0]] = 1 else testresRes[ARGS[0]] = 0
    }
    // TODO-QSP: $testresPotfath[ARGS[0]] = $papa
    // TODO-QSP: testresKid[ARGS[0]] = ARGS[0]
    // TODO-QSP: purse_pattest[ARGS[0]] = 1
    (s as any).used_pattest = ((s as any).used_pattest ?? 0) + (1);
  }
  (s as any).j = 0;
  // TODO-QSP: :pursekid
  if (((s as any).purse_pattest ?? 0)?.[String((s as any).j ?? 0)] === 1) {
    // TODO-QSP: $msg += '<br><<$testresPotfath[j]>>''s test for fatherhood of <<$kidname[j]>>.'
  }
  if (((s as any).j ?? 0) < ((s as any).kid ?? 0)-1) {
    (s as any).j = ((s as any).j ?? 0) + (1);
    // TODO-QSP: jump 'pursekid'
  }
  (s as any).j = 0;
  // TODO-QSP: :kloop
  (s as any).kidid[j] = ((s as any).j ?? 0);
  if (((s as any).patpack ?? 0)?.[String((s as any).j ?? 0)] === 1) {
    // TODO-QSP: '    <a href="exec: testresDay[kidid[j]] = daystart+rand(5,7)
    // TODO-QSP: patpack[kidid[j]] = 0
    (s as any).used_pattest = ((s as any).used_pattest ?? 0) - (1);
    // TODO-QSP: gs ''money'', ''pay'', 20000">$kidname[j]</a>'
  }
  if (((s as any).j ?? 0) < ((s as any).kid ?? 0) - 1) {
    (s as any).j = ((s as any).j ?? 0) + (1);
    // TODO-QSP: jump 'kloop'
  }
  // TODO-QSP: testresDay[ARGS[0]] = daystart+rand(5,7)
  // TODO-QSP: purse_pattest[ARGS[0]] = 0
  (s as any).used_pattest = ((s as any).used_pattest ?? 0) - (1);
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
      (s as any).SMS_msg[c2] = ((s as any).SMS_msg[c2] ?? 0) + ('matching DNA\' else $SMS_msg[c2] += \'no DNA match');
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
    (s as any).testresKid[cyc] = 0;
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
