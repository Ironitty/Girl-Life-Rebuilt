import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).npc_last_booty_call ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_std_test ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    qspCall(s, 'booty_call_sms', 'Add_std_free_SMS', ((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).npc_booty_call ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).daystart ?? 0)) {
      qspCall(s, 'booty_call_sms', 'Add_pre-planned_SMS', ((s as any).locArgs?.[1] ?? 0));
    } else {
      if (((s as any).sugar_daddy_call ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
        qspCall(s, 'booty_call_sms', 'Add_new_booty_call_SMS', ((s as any).locArgs?.[1] ?? 0));
      } else {
        if (((s as any).not_free ?? 0)) {
          qspCall(s, 'booty_call_sms', 'Add_delayed_booty_call_SMS', ((s as any).locArgs?.[1] ?? 0));
        } else {
          qspCall(s, 'booty_call_sms', 'Add_new_booty_call_SMS', ((s as any).locArgs?.[1] ?? 0));
        }
      }
    }
  }
  scene.build();
}

function enterStdFree_Tree(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree ?? {})['0'] = 'hey ' + qspUntranslated(s, "pcs_nickname>", { location: "booty_call_sms" }) + '';
  ((s as any).SMSTree ?? {})['1'] = 'hey ' + qspUntranslated(s, "npc_nickname[ARGS[1]]>", { location: "booty_call_sms" }) + '';
  ((s as any).SMSTree ?? {})['2'] = 'got some good news';
  ((s as any).SMSTree ?? {})['a3'] = 'oh?';
  ((s as any).SMSTree ?? {})['a4'] = 'my std test came back clean. why dont we celebrate tog';
  if (((s as any).hour ?? 0) < 21) {
    ((s as any).SMSTree ?? {})['aa5'] = 'sorry, I cant. I have stuff to do';
  } else {
    ((s as any).SMSTree ?? {})['aa5'] = 'its late. text me sooner if you want me to come over.';
  }
  ((s as any).SMSTree ?? {})['aa6'] = 'shit, maybe next time then';
  ((s as any).SMSTree ?? {})['ab5'] = 'ill come right now ;)';
  if (((s as any).npc_humor ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'perverted'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree ?? {})['ab6'] = 'in the street?? damn! keep it in your pants till you get here!';
    } else {
      ((s as any).SMSTree ?? {})['ab6'] = 'as long as you make me cum later';
    }
  } else {
    if (((s as any).npc_humor ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'intellectual'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree ?? {})['ab6'] = 'phrasing';
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        ((s as any).SMSTree ?? {})['ab6'] = 'im already hard';
      } else {
        ((s as any).SMSTree ?? {})['ab6'] = 'cant wait';
      }
    }
  }
  ((s as any).SMSTree ?? {})['b3'] = 'what is it?';
  ((s as any).SMSTree ?? {})['b4'] = 'my std test came back clean';
  ((s as any).SMSTree ?? {})['ba5'] = ((s as any).SMSTree ?? 0)?.['aa5'];
  ((s as any).SMSTree ?? {})['ba6'] = ((s as any).SMSTree ?? 0)?.['aa6'];
  ((s as any).SMSTree ?? {})['bb5'] = ((s as any).SMSTree ?? 0)?.['ab5'];
  ((s as any).SMSTree ?? {})['bb6'] = ((s as any).SMSTree ?? 0)?.['ab6'];
  scene.build();
}

function enterAddStdFree_SMS(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'std_free_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['1'], 'booty_call_sms', 'SMS_Base', $ARGS[1]
  qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  scene.build();
}

function enterSMS_Base(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'std_free_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['1']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['2']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a3'], 'booty_call_sms', 'bc_choice1', $ARGS[1], 'a'
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b3'], 'booty_call_sms', 'bc_choice1', $ARGS[1], 'b'
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  scene.build();
}

function enterBcChoice1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'std_free_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[2] + '3']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$ARGS[2] + '4']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree[$ARGS[2] + 'a5'], 'booty_call_sms', 'bc_choice2', $ARGS[...
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree[$ARGS[2] + 'b5'], 'booty_call_sms', 'bc_choice2', $ARGS[...
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  qspCall(s, 'SMStext_builder', 'end');
  if (((s as any).locArgs?.[0] ?? 0) === 'bc_choice2') {
    qspCall(s, 'booty_call_sms', 'std_free_Tree', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'SMStext_builder', 'start');
    // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[2] + '5']
    // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[4]
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$ARGS[2] + '6']
    // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[4]
    qspCall(s, 'SMStext_builder', 'end');
    // TODO-QSP: gs 'booty_call_sms', $ARGS[3], $ARGS[1], ARGS[4]
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'std_free_Tree':
      enterStdFree_Tree(s, scene);
      break;
    case 'Add_std_free_SMS':
      enterAddStdFree_SMS(s, scene);
      break;
    case 'SMS_Base':
      enterSMS_Base(s, scene);
      break;
    case 'bc_choice1':
      enterBcChoice1(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const booty_call_sms: LocationDef = {
  name: 'booty_call_sms',
  region: 'other',
  enter: enter,
};
