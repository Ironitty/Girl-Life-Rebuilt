import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== 1  &&  ((s as any).pattest ?? 0) > 0) {
    (s as any).j = 0;
    scene.text('');
    if (((s as any).kid ?? 0) > 0  &&  (Array.isArray((s as any).surefather) ? ((s as any).surefather as any[]).indexOf('0') : -1) !== ((s as any).kid ?? 0)) {
      scene.text(`<br>Select the child you want to compare with ${((s as any).locArgs?.[0] ?? '')}:<br>`);
      (s as any).papa = ((s as any).locArgs?.[0] ?? 0);
      while (true) {
        ((s as any).kidid = (s as any).kidid ?? {})[String((s as any).j ?? 0)] = ((s as any).j ?? 0);
        (s as any).value = (((s as any).kidid ?? 0)?.[String((s as any).j ?? 0)] ?? 0);
        if (((s as any).surefather ?? 0)?.[String((s as any).j ?? 0)] === 0) {
          scene.text(`    <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: func(/u0027pattest/u0027, value, 1) */ s.pattest -=1; return s; }); window.__gameStore.getState().doGoto(/u0027stat/u0027, /u0027/u0027); return false;">${(((s as any).kidname ?? 0)?.[String((s as any).j ?? 0)] ?? '')}</a>`);
        }
        if (((s as any).j ?? 0) < ((s as any).kid ?? 0)-1) {
          (s as any).j = ((s as any).j ?? 0) + (1);
          break;
        }
      }
    } else {
      if ((!((s as any).kid ?? 0))) {
        alert('You do not have children yet!');
        qspCall(s, 'stat', '');
      } else {
        alert('You are sure about the father of every one of your children!');
        qspCall(s, 'stat', '');
      }
    }
    (s as any).j = undefined;
    (s as any).kidid = undefined;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') !== 1) {
      alert('You do not have any paternity test to use!');
      qspCall(s, 'stat', '');
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    ((s as any).testresDay = (s as any).testresDay ?? {})[((s as any).locArgs?.[0] ?? 0)] = 2147483647;
    if (((s as any).ChildFath ?? 0)[String((s as any).locArgs?.[0] ?? '')] === ((s as any).papa ?? 0)) {
      ((s as any).testresRes = (s as any).testresRes ?? {})[((s as any).locArgs?.[0] ?? 0)] = 1;
    } else {
      ((s as any).testresRes = (s as any).testresRes ?? {})[((s as any).locArgs?.[0] ?? 0)] = 0;
    }
    ((s as any).testresPotfath = (s as any).testresPotfath ?? {})[((s as any).locArgs?.[0] ?? 0)] = ((s as any).papa ?? 0);
    ((s as any).testresKid = (s as any).testresKid ?? {})[((s as any).locArgs?.[0] ?? 0)] = ((s as any).locArgs?.[0] ?? 0);
    ((s as any).purse_pattest = (s as any).purse_pattest ?? {})[((s as any).locArgs?.[0] ?? 0)] = 1;
    (s as any).used_pattest = ((s as any).used_pattest ?? 0) + (1);
    (s as any).papa = undefined;
  }
  (s as any).test_purse = qspUntranslated(s, "{", { location: "pattest" });
  (s as any).j = 0;
  (s as any).msg = 'Tests in your purse:';
  while (true) {
    if (((s as any).purse_pattest ?? 0)?.[String((s as any).j ?? 0)] === 1) {
      (s as any).msg = ((s as any).msg ?? '') + '<br>' + (((s as any).testresPotfath ?? 0)?.[String((s as any).j ?? 0)] ?? 0) + '\'s test for fatherhood of ' + (((s as any).kidname ?? 0)?.[String((s as any).j ?? 0)] ?? 0) + '.';
    }
    if (((s as any).j ?? 0) < ((s as any).kid ?? 0)-1) {
      (s as any).j = ((s as any).j ?? 0) + (1);
      break;
    }
    alert(((s as any).msg ?? 0));
    (s as any).msg = undefined;
    (s as any).send_test = qspUntranslated(s, "{", { location: "pattest" });
    (s as any).j = 0;
    while (true) {
      ((s as any).kidid = (s as any).kidid ?? {})[String((s as any).j ?? 0)] = ((s as any).j ?? 0);
      if (((s as any).patpack ?? 0)?.[String((s as any).j ?? 0)] === 1) {
        scene.text('    <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: testresDay[kidid[j]] = daystart+rand(5,7) */ /* TODO-QSP: patpack[kidid[j]] = 0 */ s.used_pattest -=1; return s; }); window.__gameStore.getState().doGoto(\u0027money\u0027, \u0027pay\u0027, String(window.__gameStore.getState().20000 ?? \u0027\u0027)); return false;">$kidname[j]</a>');
      }
      if (((s as any).j ?? 0) < ((s as any).kid ?? 0) - 1) {
        (s as any).j = ((s as any).j ?? 0) + (1);
        break;
      }
      ((s as any).testresDay = (s as any).testresDay ?? {})[((s as any).locArgs?.[0] ?? 0)] = ((s as any).daystart ?? 0)+(Math.floor(Math.random() * 3) + 5);
      ((s as any).purse_pattest = (s as any).purse_pattest ?? {})[((s as any).locArgs?.[0] ?? 0)] = 0;
      (s as any).used_pattest = ((s as any).used_pattest ?? 0) - (1);
      (s as any).sms_testresult = qspUntranslated(s, "{", { location: "pattest" });
      (s as any).cyc = 0;
      while (true) {
        if (((s as any).testresKid ?? 0)?.[String((s as any).cyc ?? 0)] !== 1) {
          (s as any).cyc = ((s as any).cyc ?? 0) + (1);
          break;
        }
        if (((s as any).daystart ?? 0) >= ((s as any).testresDay ?? 0)?.[String((s as any).cyc ?? 0)]) {
          (s as any).c2 = 0;
          ((s as any).SMS_msg = (s as any).SMS_msg ?? {})[String((s as any).c2 ?? 0)] = 'Result of testing: <br>';
          if (((s as any).testresRes ?? 0)?.[String((s as any).cyc ?? 0)] === 1) {
            ((s as any).SMS_msg = (s as any).SMS_msg ?? {})[String((s as any).c2 ?? 0)] = ((s as any).SMS_msg[String((s as any).c2 ?? 0)] ?? 0) + ('matching DNA');
          } else {
            ((s as any).SMS_msg = (s as any).SMS_msg ?? {})[String((s as any).c2 ?? 0)] = ((s as any).SMS_msg[String((s as any).c2 ?? 0)] ?? 0) + ('no DNA match');
          }
          ((s as any).SMS_msg = (s as any).SMS_msg ?? {})[String((s as any).c2 ?? 0)] = ((s as any).SMS_msg[String((s as any).c2 ?? 0)] ?? 0) + ('<br>between ' + (((s as any).testresPotfath ?? 0)?.[String((s as any).cyc ?? 0)] ?? 0) + ' and ' + qspUntranslated(s, "kidname[testresKid[cyc]]", { location: "pattest" }) + '.');
          ((s as any).SMS_effect = (s as any).SMS_effect ?? {})[String((s as any).c2 ?? 0)] = qspUntranslated(s, "{", { location: "pattest" });
          if (((s as any).testresRes ?? 0)?.[String((s as any).cyc ?? 0)] === 1) {
            ((s as any).surefather = (s as any).surefather ?? {})[(((s as any).testresKid ?? 0)?.[String((s as any).cyc ?? 0)] ?? 0)] = 1;
            ((s as any).ChildThFath = (s as any).ChildThFath ?? {})[(((s as any).testresKid ?? 0)?.[String((s as any).cyc ?? 0)] ?? 0)] = qspUntranslated(s, "ChildFath[testresKid[cyc]]", { location: "pattest" });
          } else {
            if (((s as any).ChildThFath ?? 0)[((s as any).testresKid ?? 0)?.[String((s as any).cyc ?? 0)]] === ((s as any).testresPotfath ?? 0)[((s as any).testresKid ?? 0)?.[String((s as any).cyc ?? 0)]]) {
              ((s as any).ChildThFath = (s as any).ChildThFath ?? {})[(((s as any).testresKid ?? 0)?.[String((s as any).cyc ?? 0)] ?? 0)] = 'unknown';
            }
          }
          ((s as any).testresKid = (s as any).testresKid ?? {})[String((s as any).cyc ?? 0)] = 0;
        }
        if (((s as any).cyc ?? 0) < ((s as any).kid ?? 0)-1) {
          (s as any).cyc = ((s as any).cyc ?? 0) + (1);
          break;
        }
        (s as any).cyc = undefined;
        (s as any).c2 = undefined;
      }
    }
  }
  scene.build();
}

export const pattest: LocationDef = {
  name: 'pattest',
  region: 'other',
  enter: enter,
};
