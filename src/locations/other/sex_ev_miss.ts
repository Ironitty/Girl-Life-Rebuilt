import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).virgin_stats ?? 0)?.['cock_size']) {
    // TODO-QSP: act'First time was bigger (unimpressed)':
    scene.text('"Oh please," you sigh, rolling your eyes. "I lost my virginity to a guy bigger than you. I think I\'ll be fine."');
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
    ]);
  }
  scene.build();
}

function enterMissGoto(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
    scene.text(`${((s as any).npcdesc ?? 0)} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, preparing to fuck you.`);
    scene.actions([
      { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
      { label: 'Let <<$npcdesc>> take your virginity', goto: ['sex_ev_virgin', 'start3'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
      scene.actions([
        { label: 'Spread your legs', goto: ['sex_ev_miss', 'miss_first_insertion'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
        scene.actions([
          { label: 'Spread your legs', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_miss', 'miss_spread'
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_position'] !== ((s as any).sex_ev ?? 0)?.['position']) {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_miss', 'miss_switch'
  } },
          ]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
            scene.actions([
              { label: 'Spread your legs', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_miss', 'miss_spread'
  } },
            ]);
          } else {
            if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
              scene.actions([
                { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
              ]);
            } else {
              if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== ''  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
                scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'miss_goto2'] }]);
              } else {
                ((s as any).sex_ev ?? {})['position'] = 'miss';
                ((s as any).sex_ev ?? {})['cock_inserted'] = 1;
                if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
                  ((s as any).sex_ev ?? {})['speed'] = Math.floor(Math.random() * 3) + 1;
                }
                ((s as any).sex_ev ?? {})['pos_speed'] = 'miss' + qspUntranslated(s, "sex_ev['speed']>", { location: "sex_ev_miss" }) + '';
                if (((s as any).sex_ev ?? 0)?.['mood_type'] === 'romantic'  &&  ((s as any).sex_ev ?? 0)?.['speed'] < 3) {
                  scene.actions([
                    { label: 'Make love to <<$npcdesc>>', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', $sex_ev['pos_speed']
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Let <<$npcdesc>> fuck you', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', $sex_ev['pos_speed']
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterMissGoto2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] !== 0  ||  ((s as any).sex_ev ?? 0)?.['first_insertion'] === 1) {
    ((s as any).sex_ev ?? {})['cock_inserted'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
      ((s as any).sex_ev ?? {})['speed'] = Math.floor(Math.random() * 3) + 1;
    }
    ((s as any).sex_ev ?? {})['position'] = 'miss';
    ((s as any).sex_ev ?? {})['pos_speed'] = 'miss' + qspUntranslated(s, "sex_ev['speed']>", { location: "sex_ev_miss" }) + '';
    if (((s as any).sex_ev ?? 0)?.['mood_type'] === 'romantic'  &&  ((s as any).sex_ev ?? 0)?.['speed'] < 3) {
      scene.actions([
        { label: 'Make love to <<$npcdesc>>', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', 'miss<<sex_ev[''speed'']>>.2'
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Let <<$npcdesc>> fuck you', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', 'miss<<sex_ev[''speed'']>>.2'
  } },
      ]);
    }
  } else {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'miss_goto'] }]);
  }
  scene.build();
}

function enterMissInsertActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
      { label: 'Let <<$npcdesc>> take your virginity', goto: ['sex_ev_virgin', 'start3'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
      scene.actions([
        { label: 'Spread your legs', goto: ['sex_ev_miss', 'miss_first_insertion'] },
      ]);
    } else {
      scene.actions([
        { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
      ]);
    }
  }
  scene.build();
}

function enterMissionaryStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'miss_virgin_pre'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['change_pos'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'miss_switch'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'miss_spread'] }]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'miss_first_insertion'] }]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['initiative'] !== 'girl'  &&  ((s as any).sex_ev ?? 0)?.['force_initiative'] !== 1) {
            qspCall(s, 'sex_ev_sex', 'speed_select');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
      scene.text(`${((s as any).npcdesc ?? 0)} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, preparing to fuck you.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> grabs you by the hips and pulls you back towards him, quickly slidi...
        scene.text(`${((s as any).npcdesc ?? 0)} grabs you by the hips and pulls you back towards him, quickly sliding his cock back into your waiting pussy.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
        scene.text(`${((s as any).npcdesc ?? 0)} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, preparing to fuck you.`);
        scene.text('"I get to be on top this time," he grins.');
      }
    }
    qspCall(s, 'sex_ev_anal', 'no_ass_to_pussy1');
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
    ]);
  } },
            ]);
          } else {
            qspCall(s, 'sex_ev_sex', 'speed_select');
            scene.actions([
              { label: 'Spread your legs', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['condom'] === 0) {
      ((s as any).sex_ev ?? {})['no_condom'] = 1;
    }
    scene.img('images/shared/sex/foreplay/miss2.jpg');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      // TODO-QSP: dynamic text: You lean back, spreading your legs and pussy wide for <<$npcdesc>>.
      scene.text(`You lean back, spreading your legs and pussy wide for ${((s as any).npcdesc ?? 0)}.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.text('You lean back and spread your legs, beckoning him back between them.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.text('"I want you on top this time," you whisper huskily.');
        } else {
          // TODO-QSP: dynamic text: "I need you inside me again," you whisper, spreading your legs and pussy wide fo...
          scene.text(`"I need you inside me again," you whisper, spreading your legs and pussy wide for ${((s as any).npcdesc ?? 0)}.`);
        }
      }
    }
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterMissFirstInsertion(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'speed_select');
  ((s as any).sex_ev ?? {})['first_insertion'] = 1;
  scene.img('images/shared/sex/foreplay/miss3.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
  scene.text(`${((s as any).npcdesc ?? 0)} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, placing his ${((s as any).dick_desc ?? 0)} cock right on top of your pussy as he prepares to fuck you.`);
  // TODO-QSP: act'Wait for him to put it in': gt 'sex_ev_miss', 'miss_insert_slow'
  qspCall(s, 'sex_ev_miss', 'miss_big_cock_react');
  qspCall(s, 'sex_ev_anal', 'no_vaginal');
  scene.actions([
    { label: '"I\'ve been waiting for this"', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I've been waiting all ' + iif(hour < 21 or hour < 5, 'day', 'night') + ' for th...
    scene.text('"I\'ve been waiting all \' + iif(hour < 21 or hour < 5, \'day\', \'night\') + \' for this," you grin, spreading your thighs even wider to make room for him and he grins back at you.');
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMissBigCockReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
    if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        scene.text('"Don\'t be afraid to tap out if my cock is too big," he grins.');
      } else {
        scene.text('"Don\'t be too intimidated by the size," he grins. "Your pussy will get used to it eventually."');
      }
      // TODO-QSP: act'Nod':
      scene.text('You nod slowly, unable to help from gulping as you do.');
      scene.actions([
        { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
      ]);
    }
    if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).stat ?? 0)?.['biggest_cock']) {
      // TODO-QSP: act'"I''ve taken bigger than you" (amused)':
      scene.text('"I\'ve taken bigger dicks than this before," you smirk. "I\'ll be fine."');
      scene.actions([
        { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
      ]);
    }
    // TODO-QSP: act'"I''ve taken bigger than you" (unimpressed)':
    scene.text('"Oh please," you sigh, rolling your eyes. "Don\'t get all proud just cause you have a big dick. I\'ve taken bigger guys than you before."');
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'miss_goto':
      enterMissGoto(s, scene);
      break;
    case 'miss_goto2':
      enterMissGoto2(s, scene);
      break;
    case 'miss_insert_acts':
      enterMissInsertActs(s, scene);
      break;
    case 'missionary_start':
      enterMissionaryStart(s, scene);
      break;
    case 'miss_first_insertion':
      enterMissFirstInsertion(s, scene);
      break;
    case 'miss_big_cock_react':
      enterMissBigCockReact(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_miss: LocationDef = {
  name: 'sex_ev_miss',
  title: '"Don\'t be afraid to tap out if my cock is too big," he grins',
  region: 'other',
  description: ['"Oh please," you sigh, rolling your eyes. "I lost my virginity to a guy bigger than you. I think I\'ll be fine."'],
  enter: enter,
};
