import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAnalStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
    qspCall(s, 'sex_ev_sex', 'speed_select');
    scene.actions([
      { label: 'Anal (doggy)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_present_ass'
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'speed_select');
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_goto'
    qspCall(s, 'sex_ev_sex', 'speed_select');
    scene.actions([
      { label: 'Anal (doggy)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_present_ass'
  } },
    ]);
  }
  scene.build();
}

function enterAnalInsertActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_anal_insertion'] === 0) {
    scene.actions([
      { label: 'Bend over (anal)', goto: ['sex_ev_anal', 'anal_doggy_insert_slow'] },
    ]);
  } else {
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_anal', 'anal_doggy_insert_slow'] },
    ]);
  }
  scene.build();
}

function enterAnalDoggySwitch(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['change_pos'] = 0;
  scene.img('images/shared/sex/foreplay/doggy2.jpg');
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: You push <<$npcdesc>> off of you, closing your legs and rolling onto your knees.
      scene.text(`You push ${((s as any).npcdesc ?? 0)} off of you, closing your legs and rolling onto your knees.`);
    } else {
      // TODO-QSP: dynamic text: You lean forward, letting <<$npcdesc>>'s cock slip from your pussy and give him ...
      scene.text(`You lean forward, letting ${((s as any).npcdesc ?? 0)}'s cock slip from your pussy and give him a sultry look over your shoulder.`);
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        // TODO-QSP: dynamic text: You lift your hips, letting <<$npcdesc>>'s cock slip from your ass. Then, you tu...
        scene.text(`You lift your hips, letting ${((s as any).npcdesc ?? 0)}'s cock slip from your ass. Then, you turn around, getting on hands and knees, presenting your ass towards him.`);
      }
      if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
        // TODO-QSP: dynamic text: With a mischievous grin, you put yourself on all fours and present your ass towa...
        scene.text(`With a mischievous grin, you put yourself on all fours and present your ass towards ${((s as any).npcdesc ?? 0)}.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> rolls you onto your knees, pulling your hips back towards him.
        scene.text(`${((s as any).npcdesc ?? 0)} rolls you onto your knees, pulling your hips back towards him.`);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
      if (((s as any).stat ?? 0)?.['anal'] === 0) {
        scene.text('"I want to try anal."');
      } else {
        // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"That''s enough of that. Time for you to shove it up my ass.', 'Th...
      }
      scene.actions([
        { label: 'Get fucked in the ass', goto: ['sex_ev_anal', 'anal_doggy_insert_slow'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['anal_allowed'] < 1  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
        // TODO-QSP: $sex_ev['bed_room']
        if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>," <<$npc_usedname[$npcID]>> murmurs. "I want to fuck your ass...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} murmurs. "I want to fuck your ass."`);
        } else {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>," <<$npc_usedname[$npcID]>> murmurs. "I want to fuck your ass...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} murmurs. "I want to fuck your ass."`);
        }
        // TODO-QSP: xgt 'sex_ev_anal', 'anal_ask'
      } else {
        // TODO-QSP: xgt 'sex_ev_anal', 'anal_no_ask'
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'anal_start':
      enterAnalStart(s, scene);
      break;
    case 'anal_insert_acts':
      enterAnalInsertActs(s, scene);
      break;
    case 'anal_doggy_switch':
      enterAnalDoggySwitch(s, scene);
      break;
    default:
      enterAnalStart(s, scene);
      break;
  }
}

export const sex_ev_anal: LocationDef = {
  name: 'sex_ev_anal',
  title: '"I want to try anal."',
  region: 'other',
  enter: enter,
};
