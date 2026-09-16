import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMissGoto(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
    scene.text(`${((s as any).npcdesc || '')} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, preparing to fuck you.`);
    scene.actions([
      { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
      { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc || '') ?? '') + ' take your virginity', goto: ['sex_ev_virgin', 'start3'] },
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
                qspGoto(s, 'sex_ev_miss', 'miss_goto2');
              } else {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
                if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
                  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = Math.floor(Math.random() * 3) + 1;
                }
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss' + ((s as any).sex_ev ?? 0)?.['speed'] + '';
                if (((s as any).sex_ev ?? 0)?.['mood_type'] === 'romantic'  &&  ((s as any).sex_ev ?? 0)?.['speed'] < 3) {
                  scene.actions([
                    { label: '', labelFn: (s: GameState) => 'Make love to ' + String(((s as any).npcdesc || '') ?? ''), handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', $sex_ev['pos_speed']
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc || '') ?? '') + ' fuck you', handler: (st: GameState) => {
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
  // TODO-QSP: end
  scene.build();
}

function enterMissGoto2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] !== 0  ||  ((s as any).sex_ev ?? 0)?.['first_insertion'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = Math.floor(Math.random() * 3) + 1;
    }
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss' + ((s as any).sex_ev ?? 0)?.['speed'] + '';
    if (((s as any).sex_ev ?? 0)?.['mood_type'] === 'romantic'  &&  ((s as any).sex_ev ?? 0)?.['speed'] < 3) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Make love to ' + String(((s as any).npcdesc || '') ?? ''), handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', 'miss<<sex_ev[''speed'']>>.2'
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc || '') ?? '') + ' fuck you', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', 'miss<<sex_ev[''speed'']>>.2'
  } },
      ]);
    }
  } else {
    qspGoto(s, 'sex_ev_miss', 'miss_goto');
  }
  // TODO-QSP: end
  scene.build();
}

function enterMissInsertActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
      { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc || '') ?? '') + ' take your virginity', goto: ['sex_ev_virgin', 'start3'] },
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
  // TODO-QSP: end
  scene.build();
}

function enterMissionaryStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspGoto(s, 'sex_ev_miss', 'miss_virgin_pre');
  } else {
    if (((s as any).sex_ev ?? 0)?.['change_pos'] === 1) {
      qspGoto(s, 'sex_ev_miss', 'miss_switch');
    } else {
      if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
        qspGoto(s, 'sex_ev_miss', 'miss_spread');
      } else {
        if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
          qspGoto(s, 'sex_ev_miss', 'miss_first_insertion');
        } else {
          if (((s as any).sex_ev ?? 0)?.['initiative'] !== 'girl'  &&  ((s as any).sex_ev ?? 0)?.['force_initiative'] !== 1) {
            qspCall(s, 'sex_ev_sex', 'speed_select');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
      scene.text(`${((s as any).npcdesc || '')} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, preparing to fuck you.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> grabs you by the hips and pulls you back towards him, quickly slidi...
        scene.text(`${((s as any).npcdesc || '')} grabs you by the hips and pulls you back towards him, quickly sliding his cock back into your waiting pussy.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
        scene.text(`${((s as any).npcdesc || '')} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, preparing to fuck you.`);
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
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
    }
    scene.img('images/shared/sex/foreplay/miss2.jpg');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      // TODO-QSP: dynamic text: You lean back, spreading your legs and pussy wide for <<$npcdesc>>.
      scene.text(`You lean back, spreading your legs and pussy wide for ${((s as any).npcdesc || '')}.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.text('You lean back and spread your legs, beckoning him back between them.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.text('"I want you on top this time," you whisper huskily.');
        } else {
          // TODO-QSP: dynamic text: "I need you inside me again," you whisper, spreading your legs and pussy wide fo...
          scene.text(`"I need you inside me again," you whisper, spreading your legs and pussy wide for ${((s as any).npcdesc || '')}.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterMissFirstInsertion(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'speed_select');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_insertion'] = 1;
  scene.img('images/shared/sex/foreplay/miss3.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
  scene.text(`${((s as any).npcdesc || '')} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, placing his ${((s as any).dick_desc || '')} cock right on top of your pussy as he prepares to fuck you.`);
  // TODO-QSP: act'Wait for him to put it in': gt 'sex_ev_miss', 'miss_insert_slow'
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissBigCockReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_anal', 'no_vaginal');
  // TODO-QSP: end
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
  // TODO-QSP: end
  if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).virgin_stats ?? 0)?.['cock_size']) {
    // TODO-QSP: act'First time was bigger (unimpressed)':
    scene.text('"Oh please," you sigh, rolling your eyes. "I lost my virginity to a guy bigger than you. I think I\'ll be fine."');
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
    ]);
  }
  // TODO-QSP: end
  if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] > ((s as any).stat ?? 0)?.['biggest_cock']) {
    scene.actions([
      { label: '"Is that gonna fit inside me?"', handler: (st: GameState) => {
    scene.text('You can\'t help but gulp anxiously, feeling the size of him resting on the entrance to your snatch.');
    scene.text('"Is that going to fit inside me?" you ask, nervously staring at his member with wide eyes.');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Don\'t worry," he reassures you. "I\'ll go slow."');
    } else {
      if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
        scene.text('"Don\'t worry," he grins. "It\'s gone into plenty of other girls before."');
      } else {
        scene.text('"Your pussy will stretch," he grins.');
      }
    }
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: '"I love big cocks"', handler: (st: GameState) => {
    scene.text('You grin, feeling the size of him resting on the entrance to your snatch.');
    scene.text('"I love a guy with a big cock," you grin and he grins back.');
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: '"I love big cocks"', handler: (st: GameState) => {
    scene.text('You grin, feeling the size of him resting on the entrance to your snatch.');
    scene.text('"Have I ever told you how much I love the size of your cock?" you grin.');
    scene.text('"You could stand to mention it more," he grins back as he starts to push in.');
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterMissVirginPre(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  scene.img('images/shared/sex/foreplay/miss3.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
  scene.text(`${((s as any).npcdesc || '')} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, preparing to fuck you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
    { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc || '') ?? '') + ' take your virginity', goto: ['sex_ev_virgin', 'start3'] },
  ]);
  scene.build();
}

function enterMissSwitch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['initiative'] === 'boy') {
    qspGoto(s, 'sex_ev_miss', 'miss_switch2');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  scene.img('images/shared/sex/foreplay/miss2.jpg');
  if (((s as any).sex_ev ?? 0)?.['last_position'] === 'doggy') {
    // TODO-QSP: dynamic text: You lean forward, letting <<$npcdesc>>'s cock slip from your pussy. You flip ove...
    scene.text(`You lean forward, letting ${((s as any).npcdesc || '')}'s cock slip from your pussy. You flip over onto your back, spreading your legs, giving him a sultry look.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['last_position'] === 'cowgirl') {
      // TODO-QSP: dynamic text: You lean forward, letting <<$npcdesc>>'s cock slip from your pussy beneath you. ...
      scene.text(`You lean forward, letting ${((s as any).npcdesc || '')}'s cock slip from your pussy beneath you. With a sultry smile, you slowly lean back, lowering yourself down to the bed.`);
    }
  }
  scene.text('"I want you on top," you whisper huskily.');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  if (((s as any).sex_ev ?? 0)?.['change_pos'] === 0) {
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
    ]);
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 0;
    scene.actions([
      { label: 'Fuck in missionary', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', 'miss<<sex_ev[''speed'']>>.2'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMissSwitch2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 0;
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['last_position'] === 'doggy') {
      scene.img('images/shared/sex/foreplay/miss2.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> pulls his cock from your pussy and flips you onto your back. Grabbi...
      scene.text(`${((s as any).npcdesc || '')} pulls his cock from your pussy and flips you onto your back. Grabbing your thighs, he pulls you closer and spreads your legs, laying his cock across your snatch.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/miss_cow_switch.mp4');
        // TODO-QSP: dynamic text: <<$npcdesc>> wraps his arms around you and rolls the both of you so that suddenl...
        scene.text(`${((s as any).npcdesc || '')} wraps his arms around you and rolls the both of you so that suddenly you're on your back and he's between your legs.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_position'] === 'anal') {
          scene.img('images/shared/sex/foreplay/miss2.jpg');
          // TODO-QSP: dynamic text: <<$npcdesc>> pulls his cock from your ass and flips you onto your back. Grabbing...
          scene.text(`${((s as any).npcdesc || '')} pulls his cock from your ass and flips you onto your back. Grabbing your thighs, he pulls you closer and spreads your legs, laying his cock across your snatch.`);
        }
      }
    }
  } else {
    scene.img('images/shared/sex/foreplay/miss2.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto your back and grabs your thighs, pulling you c...
    scene.text(`${((s as any).npcdesc || '')} pushes you down onto your back and grabs your thighs, pulling you close with legs spread, and lays his cock across your snatch.`);
  }
  scene.text('"I think it\'s my turn to be on top," he grins.');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  // TODO-QSP: end
  scene.actions([
    { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
  ]);
  scene.build();
}

function enterMissSpread(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condom'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  scene.img('images/shared/sex/foreplay/miss2.jpg');
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    // TODO-QSP: dynamic text: You lean back, spreading your legs and pussy wide for <<$npcdesc>>.
    scene.text(`You lean back, spreading your legs and pussy wide for ${((s as any).npcdesc || '')}.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.text('You lean back and spread your legs, beckoning him back between them.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.text('"I want you on top this time," you whisper huskily.');
      } else {
        // TODO-QSP: dynamic text: "I need you inside me again," you whisper, spreading your legs and pussy wide fo...
        scene.text(`"I need you inside me again," you whisper, spreading your legs and pussy wide for ${((s as any).npcdesc || '')}.`);
      }
    }
  }
  qspCall(s, 'sex_ev_condoms', 'condoms');
  // TODO-QSP: end
  scene.actions([
    { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
  ]);
  scene.build();
}

function enterMissInsertSlow(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
      qspCall(s, 'sex_ev_sex', 'speed_select');
    }
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss' + ((s as any).sex_ev ?? 0)?.['speed'] + '';
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
    if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
    }
    qspCall(s, 'sex_ev_sex', 'insertion_arousal_code');
    qspCall(s, 'stat', '');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
    if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      scene.img('images/shared/sex/vag/miss/enter_condom1.mp4');
    } else {
      scene.img('images/shared/sex/vag/miss/enter1.mp4');
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> carefully pushes the head of his <<$dick_desc>> cock into the folds...
    scene.text(`${((s as any).npcdesc || '')} carefully pushes the head of his ${((s as any).dick_desc || '')} cock into the folds of your pussy, followed by the rest of his length.`);
    if (((s as any).dick_desc ?? 0) === 'tiny') {
      scene.text('Not that he needed to be careful. His hips come flush with yours and you still feel plenty of wiggle room inside you. He might as well have put his finger in...');
    } else {
      if (((s as any).dick_desc ?? 0) === 'short') {
        scene.text('He pushes through your lips and you feel his cock fill the entrance to your snatch before stopping short as his hips collide with yours...');
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          scene.text('He passes between your lips and you feel his cock <i>stretching</i> you out as he pushes in, before stopping short as his hips collide with yours...');
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            scene.text('He slips in between your lips, comfortably sliding his cock all the way in before stopping just shy of your cervix, though it isn\'t a very tight fit...');
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              scene.text('He pushes through your lips and fills you with perfectly average length and girth...');
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                scene.text('You immediately feel your pussy <i>stretch</i> out as he pushes in, your walls straining to accommodate his thick girth...');
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  scene.text('He slips in between your lips, comfortably sliding all the way in before abruptly colliding with your cervix. His length barely manages to fit inside you, though it isn\'t a very tight fit width-wise...');
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    scene.text('He pushes through your lips, filling you with cock before it abruptly collides with your cervix. His full length seems to barely fit inside you...');
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      scene.text('You immediately feel your pussy <i>stretch</i> out as he pushes in, your walls straining to accommodate his thick girth. Even as they struggle with his width, his length quickly makes its presence known as well when his cock abruptly collides with your cervix. It seems to barely fits inside you...');
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        scene.text('He slips in between your lips, comfortably sliding all the way in before abruptly colliding with your cervix. Just from the way it pokes your innards, you can tell he hasn\'t even managed to get his full length inside you. Although it isn\'t a very tight fit width-wise...');
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          scene.text('He pushes through your lips, filling you with cock before it abruptly collides with your cervix. Just from the way it pokes your innards, you can tell he hasn\'t even managed to get his full length inside you...');
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            scene.text('You immediately feel your pussy <i>stretch</i> out as he pushes in, your walls straining to accommodate his thick girth. Even as they struggle with his width, his length quickly makes its presence known as well when his cock abruptly collides with your cervix. Just from the way it pokes your innards, you can tell he hasn\'t even managed to get his full length inside you...');
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    qspGoto(s, 'sex_ev_miss', 'miss_insert_react');
  }
  // TODO-QSP: end
  scene.build();
}

function enterMissInsertReact(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissPain1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissInsertOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoyment', handler: (st: GameState) => {
    if (((s as any).npc_dick_class ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'extra_big') {
      scene.actions([
        { label: 'He\'s big!', handler: (st: GameState) => {
    if (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        if (((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
          scene.text('"Oh <i>fuck!</i> That\'s big!" you groan, squirming in pleasure around the cock that is absolutely <i>filling</i> you right now. "It\'s like fucking a <i>baseball bat!</i>"');
        } else {
          scene.text('"Oh <i>fuck!</i> That\'s <b>big</b>!" you groan, squirming in pleasure around the cock that is absolutely <i>filling</i> you right now.');
        }
      } else {
        scene.text('"Oh <i>fuck!</i>" you groan in pleasure. "You\'re so <i>fucking big</i> you are!"');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        scene.text('"Nngh~! <i>Fuck~!</i>" you groan huskily. "I can never quite get used to how big you are."');
      } else {
        scene.text('"Nngh~! <i>Fuck,</i> you\'re so big!" you groan huskily.');
      }
    }
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
      ]);
    }
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    scene.text('You let out a loud moan as heat fills up your insides and your pussy begins to salivate with just the insertion of his cock.');
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
      { label: 'Groan', handler: (st: GameState) => {
    scene.text('You let out a husky groan as an indescribable <i>ache</i> rocks through your insides. Like a crumb of bread to a woman starving to death, just the insertion of his cock sets your lustful hunger ablaze.');
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
      { label: 'Gasp', handler: (st: GameState) => {
    scene.text('Your legs kip as he finishes his insertion and you gasp as heat washes through your hips and electric tingles race across your skin.');
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
      { label: 'Squeak!', handler: (st: GameState) => {
    scene.text('"Eep-!"');
    scene.text('A squeak escapes your lips he fills you with his shaft, your legs involuntarily kipping at the insertion.');
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
      { label: 'Say something sexy', handler: (st: GameState) => {
    if (((s as any).npc_last_sex ?? 0)?.[String((s as any).npcID ?? 0)] > ((s as any).daystart ?? 0) - 7) {
      if (((s as any).npc_dick_class ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'extra_big') {
        // TODO-QSP: dynamic text: "Ah~!" you moan, legs kipping as he finishes inserting his <<$dick_desc>> cock i...
        scene.text(`"Ah~!" you moan, legs kipping as he finishes inserting his ${((s as any).dick_desc || '')} cock into your pussy, and give him a lascivious smile, squeezing yourself around his shaft. "<i>There's</i> my favorite big boy..."`);
      } else {
        // TODO-QSP: dynamic text: "Ah~!" you moan, legs kipping as he finishes inserting his <<$dick_desc>> cock i...
        scene.text(`"Ah~!" you moan, legs kipping as he finishes inserting his ${((s as any).dick_desc || '')} cock into your pussy, and give him a lascivious smile, squeezing yourself around his shaft. "<i>There's</i> my favorite boy's toy..."`);
      }
    } else {
      if (((s as any).npc_last_sex ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        if (((s as any).npc_dick_class ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'extra_big') {
          // TODO-QSP: dynamic text: "Ah~!" you moan, legs kipping as he finishes inserting his <<$dick_desc>> cock i...
          scene.text(`"Ah~!" you moan, legs kipping as he finishes inserting his ${((s as any).dick_desc || '')} cock into your pussy, and give him a lascivious smile. "I've missed having this big boy inside me..."`);
        } else {
          // TODO-QSP: dynamic text: "Ah~!" you moan, legs kipping as he finishes inserting his <<$dick_desc>> cock i...
          scene.text(`"Ah~!" you moan, legs kipping as he finishes inserting his ${((s as any).dick_desc || '')} cock into your pussy, and give him a lascivious smile. "I've missed having your cock inside me..."`);
        }
      } else {
        if (((s as any).npc_dick_class ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'extra_big') {
          if (((s as any).stat ?? 0)?.['biggest_cock'] < ((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)]) {
            // TODO-QSP: dynamic text: "Ah~!" you moan, legs kipping as he finishes inserting his <<$dick_desc>> cock i...
            scene.text(`"Ah~!" you moan, legs kipping as he finishes inserting his ${((s as any).dick_desc || '')} cock into your pussy, and give him a lascivious smile. "I've never had a cock this big inside me before..."`);
          } else {
            // TODO-QSP: dynamic text: "Ah~!" you moan, legs kipping as he finishes inserting his <<$dick_desc>> cock i...
            scene.text(`"Ah~!" you moan, legs kipping as he finishes inserting his ${((s as any).dick_desc || '')} cock into your pussy, and give him a lascivious smile. "I love big cocks..."`);
          }
        } else {
          // TODO-QSP: dynamic text: "Ah~!" you moan, legs kipping as he finishes inserting his <<$dick_desc>> cock i...
          scene.text(`"Ah~!" you moan, legs kipping as he finishes inserting his ${((s as any).dick_desc || '')} cock into your pussy, and give him a lascivious smile. "You're a perfect fit for my pussy..."`);
        }
      }
    }
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
    ]);
  } },
    { label: 'Discomfort', handler: (st: GameState) => {
    if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
      scene.actions([
        { label: 'He\'s big!', handler: (st: GameState) => {
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        if (((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
          scene.text('"Oh <i>fuck!</i>" you groan, squirming as your pussy is already beginning to ache. "It\'s like a fucking <i>baseball bat</i> inside me!"');
        } else {
          scene.text('"Oh <i>fuck!</i> That\'s big!" you groan, squirming as your pussy is already beginning to ache.');
        }
        if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text('"Pretty incredible, isn\'t it?" he grins haughtily, taking a moment seemingly to admire the size of his own cock.');
        } else {
          if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            scene.text('"Sorry," he says, a sympathetic look in his eyes.');
          } else {
            // TODO-QSP: dynamic text: "Your pussy is so tight," <<$npcdesc>> grins back.
            scene.text(`"Your pussy is so tight," ${((s as any).npcdesc || '')} grins back.`);
          }
        }
      } else {
        scene.text('"Oh <i>fuck!</i>" you groan in discomfort. "That\'s still <i>fucking</i> big!"');
        if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          if (((s as any).sex_ev ?? 0)?.['virgin'] === 0) {
            scene.text('"Won\'t be able to go back to regular cocks after this," he chuckles.');
          } else {
            scene.text('"I\'m spoiling you for life," he chuckles. "No guy is ever going to fill you up like this."');
          }
        } else {
          if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            scene.text('"Sorry," he says, a sympathetic look in his eyes.');
          } else {
            // TODO-QSP: dynamic text: "Your pussy is so tight," <<$npcdesc>> grins back.
            scene.text(`"Your pussy is so tight," ${((s as any).npcdesc || '')} grins back.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        // TODO-QSP: dynamic text: "Nngh~! <i>Fuck~!</i>" you groan loudly as <<$npcdesc>>'s cock overstuffs your p...
        scene.text(`"Nngh~! <i>Fuck~!</i>" you groan loudly as ${((s as any).npcdesc || '')}'s cock overstuffs your poor pussy and you're already starting to ache. "I can never get used to how <i>big</i> you are."`);
      } else {
        scene.text('"Nngh~!" you groan loudly.');
      }
    }
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
    scene.actions([
      { label: 'Groan', handler: (st: GameState) => {
    scene.text('You let out a painful groan as your insides <i>ache</i> as if you had been punched in the gut. Which in some ways, you have been...');
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Gasp', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Your legs kip up in discomfort as <<$npcdesc>> rests his weight on top of you, i...
    scene.text(`Your legs kip up in discomfort as ${((s as any).npcdesc || '')} rests his weight on top of you, immediately hitting an awkward angle that causes you to gasp as pain lances through your pussy.`);
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMissInsertOrgasm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity'] > 0  ||  (((s as any).orgasm_buildup ?? 0) >= 100  &&  (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1))) {
    scene.actions([
      { label: 'Orgasm!', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0)) {
      (s as any).orgasm_or = 'yes';
      // TODO-QSP: gs 'arousal', 'vaginal', -1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    }
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['insertion_orgasm'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).sex_ev['orgasm_count'] ?? 0) + (1);
    scene.img('images/shared/sex/vag/miss/3.jpg');
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] === 0) {
      scene.text('You\'re so turned on, just that one thrust is all it takes for you to come.');
    } else {
      scene.text('That\'s all it takes. Just that one thrust. And you\'re already coming.');
    }
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short'  ||  ((s as any).dick_desc ?? 0) === 'chode'  ||  ((s as any).dick_desc ?? 0) === 'skinny'  ||  ((s as any).dick_desc ?? 0) === 'normal') {
      scene.text('Muscles tighten. Heat blossoms. You gasp aloud. Electric tingles race across your body from your toes to the tips of your nipples that quiver in the air as you convulse in orgasm. You groan a wordless cry of ecstasy.');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s cock <i>fills</i> you to the brim and you gasp aloud as it starts...
      scene.text(`${((s as any).npcdesc || '')}'s cock <i>fills</i> you to the brim and you gasp aloud as it starts. Muscles tighten. Heat blossoms. Electric tingles race across your body from your toes to the tips of your nipples that quiver in the air as you convulse in orgasm. You groan a wordless cry of ecstasy.`);
      scene.actions([
        { label: 'You\'re really big', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/2.jpg');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"You\'re <i>really</i> big," you pant dizzily, head still swimming from orgasm. "I didn\'t expect how good that it would feel just to get you inside me..."');
    } else {
      scene.text('"It\'s your big cock," you pant giddily, head still swimming from orgasm. "The way you <i>fill</i> me. It\'s indescribable."');
    }
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
      ]);
    }
    // TODO-QSP: dynamic text: "I'm that good, huh?" <<$npcdesc>> grins smugly.
    scene.text(`"I'm that good, huh?" ${((s as any).npcdesc || '')} grins smugly.`);
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] > 0) {
      scene.actions([
        { label: '[Easy Orgasm trait]', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/2.jpg');
    scene.text('"I come easy," you smile tiredly at him, head still swimming from orgasm. "Sometimes just one thrust is all it takes for me."');
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
      ]);
    }
    if (((s as any).trait_vars ?? 0)?.['sensitive_pussy'] > 0) {
      scene.actions([
        { label: '[Sensitive Pussy trait]', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/2.jpg');
    scene.text('"Sensitive pussy," you smile tiredly at him, head still swimming from orgasm. "Sometimes just one thrust is all it takes for me."');
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
      ]);
    }
    scene.actions([
      { label: 'Really horny', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/2.jpg');
    scene.text('"I\'m <i>really</i> horny," you moan, practically melting underneath him.');
    qspGoto(s, 'sex_ev_miss', 'miss_goto2');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMissGirlOrgasmContinue(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/miss/kotovsex1.mp4');
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.text('You\'ve barely finished quivering when he starts moving his hips again. The motion inside your still-sensitive pussy elicits involuntary whimpers of protest from you, but it doesn\'t stop him for a moment, ramping back into his rhythm again.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.text('You\'ve barely finished quivering when he rolls you onto your back and plunges his cock all the way inside you. The sudden penetration of your still-sensitive pussy elicits involuntary whimpers of protest from you, but it doesn\'t stop him for a moment, ramping back into his rhythm again.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.text('You\'ve barely finished quivering when he pulls you off of him and pushes you onto your back, immediately plunging his cock back inside you. The sudden penetration of your still-sensitive pussy elicits involuntary whimpers of protest from you, but it doesn\'t stop him for a moment, ramping into a steady rhythm.');
      }
    }
  }
  scene.text('"I\'m not finished yet," he growls.');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss' + ((s as any).sex_ev ?? 0)?.['speed'] + '';
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMissionaryChangePosition(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Change position', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I'm not really feeling missionary right now," you say, looking up at <<$npcdesc...
    scene.text(`"I'm not really feeling missionary right now," you say, looking up at ${((s as any).npcdesc || '')}. "Could we try another position for now?"`);
    scene.text('He pauses halfway out of you.');
    scene.text('"What did you have in mind?"');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 1;
    qspCall(s, 'sex_ev_sex', 'position_change');
  } },
  ]);
  scene.build();
}

function enterMissPain1(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 20) + 1) >= ((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.actions([
      { label: 'Ouch!', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('Lances of pain have been piercing through your vagina from the very first thrust. Whether it\'s angle or technique or just the shape of your pussy and the shape of his cock, you can\'t say for certain. The only thing you are sure of is that this <i>hurts!</i>');
    // TODO-QSP: dynamic text: Every time <<$npcdesc>> moves it's like a knife in your pussy, stabbing your ins...
    scene.text(`Every time ${((s as any).npcdesc || '')} moves it's like a knife in your pussy, stabbing your insides like the villain in a slasher flick.`);
    qspGoto(s, 'sex_ev_miss', 'miss_pain2');
  } },
    ]);
  }
  if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
    scene.actions([
      { label: 'Dick is too big', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['dick_too_big'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    (s as any).orgasm_or = 'no';
    // TODO-QSP: dynamic text: Every thrust of <<$npcdesc>>'s hips elicits a gasp of pain from your lips. His c...
    scene.text(`Every thrust of ${((s as any).npcdesc || '')}'s hips elicits a gasp of pain from your lips. His cock is too much for your poor pussy and it's hard to enjoy.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissPain2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMissPain2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'fuck_no_cum_code');
    scene.img('images/shared/sex/vag/miss/3.jpg');
    // TODO-QSP: dynamic text: As much as you want the pain to stop, the idea of speaking up and ruining the mo...
    scene.text(`As much as you want the pain to stop, the idea of speaking up and ruining the mood makes you cringe. Instead, you grit your teeth and grunt in time with ${((s as any).npcdesc || '')}'s thrusts and hope that the pain is not too audible in your voice.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: '', labelFn: (s: GameState) => 'Tell ' + String(((s as any).npcdesc || '') ?? '') + ' it hurts', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_miss', 'miss_pain3'
  } },
    { label: 'Ask to try another position', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/3.jpg');
    scene.text('"Do you think-! We could try-! Something else?" you manage to grunt out between thrusts.');
    if (((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss')  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      qspCall(s, 'sex_ev_sex', 'fuck_no_cum_code');
      // TODO-QSP: dynamic text: "No way," <<$npcdesc>> grunts back. "I'm enjoying this."
      scene.text(`"No way," ${((s as any).npcdesc || '')} grunts back. "I'm enjoying this."`);
      scene.text('He keeps fucking you without even a second\'s pause and you keep wincing in pain and discomfort with every thrust.');
      qspCall(s, 'sex_ev_cum', 'fuck_cum');
      qspCall(s, 'sex_ev_sex', 'fuck_continue');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> pauses, his cock halfway inside you.
      scene.text(`${((s as any).npcdesc || '')} pauses, his cock halfway inside you.`);
      scene.text('"What did you have in mind?" he asks.');
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
      qspCall(s, 'sex_ev_sex', 'position_change');
    }
  } },
  ]);
  scene.build();
}

function enterMissPain3(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) >= 2))  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.text('"Ouch! Hey! Ow!" you yelp. "Wait! That hurts!"');
    // TODO-QSP: iif(sex_ev['speed'] < 3, '"It''ll get better," <<$npcdesc>> says uncaringly and continues to fuck yo...
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spee...
  } },
    ]);
  } else {
    scene.img('images/shared/sex/vag/miss/pain1.mp4');
    // TODO-QSP: dynamic text: "OH WOAH!" you yelp, trying to push <<$npcdesc>> out of your pussy. He fails to ...
    scene.text(`"OH WOAH!" you yelp, trying to push ${((s as any).npcdesc || '')} out of your pussy. He fails to take the hint and painfully jabs you with his cock again, causing more yelps. "Ow!Ow!Ow!Wait!"`);
    scene.text('He finally gets it and pulls out in a panic.');
    scene.text('"Shit! Sorry," he says. "What happened? Are you okay?"');
    scene.actions([
      { label: 'Be irritated', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).npc_dislike = (s as any).npc_dislike ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_dislike[String((s as any).npcID ?? 0)] ?? 0) + (2);
    scene.img('images/shared/sex/vag/miss/1.jpg');
    scene.text('"Who taught you how to fuck?" you scowl. "Your dick is stabbing into me in all the worst ways!"');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Well sorry that your pussy doesn't exactly come with an instruction manual!" <<...
      scene.text(`"Well sorry that your pussy doesn't exactly come with an instruction manual!" ${((s as any).npcdesc || '')} growls back.`);
    } else {
      scene.text('"Oh. Sorry," he mumbles sheepishly.');
    }
    scene.text('"Whatever. Can we just move around to get a better angle?"');
    scene.text('The two of you awkwardly shuffle around for a minute, trying to find a position for your hips that\'s a little more comfortable.');
    // TODO-QSP: dynamic text: "How's that?" <<$npcdesc>> asks.
    scene.text(`"How's that?" ${((s as any).npcdesc || '')} asks.`);
    scene.actions([
      { label: 'Fine I guess', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.text('"Fine I guess," you sigh. It doesn\'t really feel good, but at least it doesn\'t hurt anymore.');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes your response as approval and starts moving again.
    scene.text(`${((s as any).npcdesc || '')} takes your response as approval and starts moving again.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spee...
  } },
    ]);
  } },
      { label: 'Better', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('"<i>Finally</i>," you sigh. "Yes, that feels better. Try to remember this next time."');
    // TODO-QSP: dynamic text: <<$npcdesc>> seems to be a little ticked off by your attitude but starts moving ...
    scene.text(`${((s as any).npcdesc || '')} seems to be a little ticked off by your attitude but starts moving again anyways.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spee...
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Laugh it off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).npc_like = (s as any).npc_like ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_like[String((s as any).npcID ?? 0)] ?? 0) + (2);
    (s as any).orgasm_or = '';
    scene.img('images/shared/sex/vag/miss/4.jpg');
    if (((s as any).sex_ev ?? 0)?.['dick_too_big'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['dick_too_big'] = 2;
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
      scene.text('"Your dick is kind of big for me," you smile ruefully. "Can we just pause for a sec to let my poor pussy adjust?"');
      scene.text('"Oh. Yeah, sure."');
      // TODO-QSP: dynamic text: You spend a couple minutes with <<$npcdesc>>'s entire length inside you, taking ...
      scene.text(`You spend a couple minutes with ${((s as any).npcdesc || '')}'s entire length inside you, taking deep breaths as you slowly let it stretch your pussy. Eventually the pain fades to nothing more than a dull ache and even maybe feels a little good.`);
      scene.text('"Okay," you nod. "You can start moving again."');
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
      scene.text('"I\'m fine," you chuckle. "Your dick is kind of at an awkward angle though. Can we adjust a little?"');
      scene.text('"Oh. Yeah, sure."');
      scene.text('The two of you shuffle around a little finding a position for your hips that\'s a little more comfortable.');
      // TODO-QSP: dynamic text: "How's that?" <<$npcdesc>> asks.
      scene.text(`"How's that?" ${((s as any).npcdesc || '')} asks.`);
      scene.text('"Much better," you nod back and he resumes thrusting.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spee...
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMissVid(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
    scene.img(`images/shared/sex/vag/miss/slow${Math.floor(Math.random() * 3) + 1}.mp4`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['speed'] === 2) {
      scene.img(`images/shared/sex/vag/miss/med${Math.floor(Math.random() * 3) + 1}.mp4`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
        scene.img(`images/shared/sex/vag/miss/hard${Math.floor(Math.random() * 3) + 1}.mp4`);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['miss_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss1';
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== '') {
    qspGoto(s, 'sex_ev_miss', 'miss1.2');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['missionary_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kiss'] = 0;
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspGoto(s, 'sex_ev_virgin', 'miss_virg_norm1');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mesec ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1StartPeriodDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1StartDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips meet yours in th...
      scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in the next thrust. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. His dick may be small but <i>damn</i>, does he know how to use it.`);
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips meet yours in th...
        scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in the next thrust. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. <i>Damn</i>, does he know how to use his dick!`);
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips meet yours in th...
          scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in the next thrust. He doesn't just have a big cock, he knows how to use it too. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust. If it hits you just right, he makes sure to thrust it again just like that when your pussy can't help but squeeze him.`);
          scene.text('Oh <i>fuck</i>. He\'s good at this.');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips meet yours in th...
            scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in the next thrust. He doesn't just have a gigantic cock, he knows how to use it too. You would think that being fucked with such a giant dick would hurt, and it occasionally does, but not as often as you expected. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust his angle on top of you. If it hits you just right, he makes sure to thrust it again just like that when your pussy can't help but squeeze him, minimizing pain and maximizing pleasure.`);
            scene.text('Oh <i>fuck</i>. He\'s good at this.');
          }
        }
      }
    }
    // TODO-QSP: act'But you''re just not connecting':
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.text('But... for all his skill, somehow just isn\'t doing it for you.');
    scene.text('The pleasure is there but... the emotional connection--the <i>intimacy</i>--isn\'t, and it leaves you feeling strangely hollow and unsatisfied. Your bodies are joined together, but it seems without the soul, all you feel are bits of flesh smacking each other...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
    scene.actions([
      { label: 'Enjoy yourself', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('Your eyes roll back in your head as your pussy eagerly slurps up his cock again and again.');
    scene.text('<i>This is so goooooood...</i>');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
    // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips meet yours in th...
    scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in the next thrust. <i>That one felt pretty good!</i> And of course, right as you think that, the next one hits a little awkward inside you, rubbing the wrong way. He's still good for the most part, but about one in ten thrusts can't help but hit wrong.`);
    scene.actions([
      { label: 'You\'re going to enjoy this', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: Still, that's good enough and you don't mind the awkward hit now and then. You s...
    scene.text(`Still, that's good enough and you don't mind the awkward hit now and then. You smile back at ${((s as any).npcdesc || '')}, determined to enjoy fucking him today.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 2;
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: He's good, but not good enough for you. Whatever effort he puts in can only go s...
      scene.text('He\'s good, but not good enough for you. Whatever effort he puts in can only go so far with such a small dick. Beyond that, his movements just aren\'t syncing up with yours\' + iif(npc_fuck_times[$npcID] > 0, \' today \', \' \') + \'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: He's good, but not good enough for you. You can't exactly put your finger on it,...
        scene.text('He\'s good, but not good enough for you. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements just aren\'t syncing up with yours\' + iif(npc_fuck_times[$npcID] > 0, \' today \', \' \') + \'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: He's good, but not good enough for you. Something about his timing is just <i>of...
          scene.text(`He's good, but not good enough for you. Something about his timing is just <i>off</i>. His movements just aren't syncing up with yours' + iif(npc_fuck_times[$npcID] > 0, ' today ', ' ') + 'and you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: He's good, but not good enough for you. Half the problem is his cock is just <i>...
            scene.text(`He's good, but not good enough for you. Half the problem is his cock is just <i>too damn big!</i> His movements just aren't syncing up with yours' + iif(npc_fuck_times[$npcID] > 0, ' today ', ' ') + 'and you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
      // TODO-QSP: dynamic text: An grunt of surprise escapes your lips as <<$npcdesc>>'s hips meet yours in a cl...
      scene.text(`An grunt of surprise escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in a clumsy thrust. That last one was a little bit awkward. <i>Oof.</i> And that one too. Oh, that one wasn't too bad- And we're back to awkward again.`);
      // TODO-QSP: dynamic text: In a word, <<$npcdesc>> is... uncoordinated? Every few thrusts of his <<$dick_de...
      scene.text(`In a word, ${((s as any).npcdesc || '')} is... uncoordinated? Every few thrusts of his ${((s as any).dick_desc || '')} dick inevitably result in an uncomfortable spot getting hit and a sharp prick of pain inside your pussy.`);
      scene.actions([
        { label: 'Coach him to do better', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling and putting your ha...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((s as any).npcdesc || '')}," you coo, smiling and putting your hands on his sides and guiding him. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You spread your thighs a little wider as he pushes his <<$dick_desc>> cock into ...
    scene.text(`You spread your thighs a little wider as he pushes his ${((s as any).dick_desc || '')} cock into you again, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    scene.text('"<i>"Yes~!"</i> you moan, the back of your head hitting the pillow in satisfaction. "Just like that~!"');
    scene.text('It pays to communicate...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 2;
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('Well he certainly has enthusiasm. But that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('Well he certainly has enthusiasm. But not much skill. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new thrust into your pussy. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Something about his timing...
          scene.text(`Well he certainly has enthusiasm. But not much skill. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Half the problem is his co...
            scene.text(`Well he certainly has enthusiasm. But not much skill. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and every time you think it's about to get good, you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock hits another painful spots inside your pussy and your pleasure deflating like a balloon. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'This hurts!', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Is it getting worse?!</i>');
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('You\'ve no idea how, but he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          scene.text('You\'ve no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            scene.text('Not only is his oversized cock straining your pussy to the limits, its also somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: A stifled gasp of discomfort escapes your lips as <<$npcdesc>>'s hips meet yours...
      scene.text(`A stifled gasp of discomfort escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in clumsy thrust, sending a sharp jab of pain into your pussy. He keeps moving in weird ways, making nearly every pump of his ${((s as any).dick_desc || '')} dick into your pussy inevitably result in an awkward spot getting hit and a sharp prick of pain. What on earth is he doing?!`);
      scene.actions([
        { label: 'Coach him to do better', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling and putting your ha...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((s as any).npcdesc || '')}," you coo, smiling and putting your hands on his sides and guiding him. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You spread your thighs a little wider as he pushes his <<$dick_desc>> cock into ...
    scene.text(`You spread your thighs a little wider as he pushes his ${((s as any).dick_desc || '')} cock into you again, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    scene.text('"<i>"Yes~!"</i> you moan, the back of your head hitting the pillow in satisfaction. "Just like that~!"');
    scene.text('It pays to communicate...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 2;
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('Well he certainly has enthusiasm. But that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('Well he certainly has enthusiasm. But not much skill. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new thrust into your pussy. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Something about his timing...
          scene.text(`Well he certainly has enthusiasm. But not much skill. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Half the problem is his co...
            scene.text(`Well he certainly has enthusiasm. But not much skill. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and every time you think it's about to get good, you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock hits another painful spots inside your pussy and your pleasure deflating like a balloon. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'This hurts!', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Is it getting worse?!</i>');
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('You\'ve no idea how, but he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          scene.text('You\'ve no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            scene.text('Not only is his oversized cock straining your pussy to the limits, its also somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] < 75  &&  (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short'  ||  ((s as any).dick_desc ?? 0) === 'thin')) {
    // TODO-QSP: act'His dick is so small!':
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.img('images/shared/sex/vag/doggy/bored1.mp4');
    scene.text('<i>Holy shit,</i> you think to yourself. <i>How\'s a girl supposed to get off with a dick this small?</i>');
    // TODO-QSP: dynamic text: It takes all of your willpower not to audibly sigh as you keep letting <<$npc_us...
    scene.text(`It takes all of your willpower not to audibly sigh as you keep letting ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} plow into you with his amazingly <i>disappointing</i> cock.`);
    if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1) {
      scene.text('<i>At least I\'m getting paid for this...</i>');
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  // TODO-QSP: end
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissionaryChangePosition(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'This is too slow', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    // TODO-QSP: dynamic text: Closing your eyes, you try to focus on the sensations, <<$npcdesc>> on top of yo...
    scene.text(`Closing your eyes, you try to focus on the sensations, ${((s as any).npcdesc || '')} on top of you, his cock slowly moving inside you, going in and out... in and out... in and ou-`);
    scene.text('Your eyes snap open when you realize this isn\'t going to work and hold back a sigh. This is so slow! You don\'t want this dainty gentle lovemaking, you want him to <i>fuck</i> you!');
    scene.actions([
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['bored'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    (s as any).orgasm_or = 'no';
    scene.img('images/shared/sex/vag/miss/slow2.mp4');
    // TODO-QSP: dynamic text: As much as you want <<$npcdesc>> to pick up the pace, you don't want to be a bit...
    scene.text(`As much as you want ${((s as any).npcdesc || '')} to pick up the pace, you don't want to be a bitch about it so you bite your tongue, going back to trying to get off on this or at least derive some kind of enjoyment out of it, ultimately failing on both counts.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Can you fuck me faster?', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/slow2.mp4');
    // TODO-QSP: dynamic text: "This is boring," you say, staring up at <<$npcdesc>> with a bored look on your ...
    scene.text(`"This is boring," you say, staring up at ${((s as any).npcdesc || '')} with a bored look on your face. "Can you go faster? I'm never going to get off at this rate."`);
    scene.text('"I can go faster," he grunts.');
    scene.text('"<i>Finally</i>," you say, spreading your legs a little more as he picks up the pace.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_miss', 'miss2.1'] },
    ]);
  } },
      { label: 'I want you to pound me', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/slow2.mp4');
    // TODO-QSP: dynamic text: "Hey," you say, looking <<$npcdesc>> right in the eyes. "I didn't come here for ...
    scene.text(`"Hey," you say, looking ${((s as any).npcdesc || '')} right in the eyes. "I didn't come here for you to hump me like a Disney princess. I came here to <b>fuck.</b> Now fuck me like you mean it already!"`);
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      // TODO-QSP: dynamic text: A concentrated look shadows <<$npcdesc>>'s face and quickly starts fucking you w...
      scene.text(`A concentrated look shadows ${((s as any).npcdesc || '')}'s face and quickly starts fucking you with accelerated speed.`);
    } else {
      // TODO-QSP: dynamic text: Before you can even finish your sentence, <<$npcdesc>> grabs you by the hips and...
      scene.text(`Before you can even finish your sentence, ${((s as any).npcdesc || '')} grabs you by the hips and rams his cock into you.`);
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_miss', 'miss3.1'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMiss1_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'miss', 1);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1_1Desc(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMiss1_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'miss', 1);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you. Finally, the sta...
        scene.text(`You take deep breaths as ${((s as any).npcdesc || '')} keeps slowly fucking you. Finally, the stabbing pain between your legs is starting to go away. It seems your virgin pussy is starting to adjust to having a cock inside it.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc || '')}'s thrusts. It still hurts, but you're determined not to let a little pain cause you to pussy out of your first time.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            scene.text('You whimper softly, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. It hurts <i>so much</i>, but you can\'t bring yourself to tell him to stop.');
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you. Closing your eye...
        scene.text(`You take deep breaths as ${((s as any).npcdesc || '')} keeps slowly fucking you. Closing your eyes, you focus, adjusting your position beneath him, changing your timing to try move your hips with his. After some minor adjustments, the pain ${((s as any).npcdesc || '')}'s cock was causing inside you fades. After a few minutes, it's little more than a dull throb and you feel much more comfortable, if not all that good.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ahh-! Mm-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc || '')}'s thrusts. It still hurts like hell, but you don't say anything, trying your best not to let it show.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            scene.text('You whimper softly, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. It hurts <i>so much</i>, but you can\'t bring yourself to tell him to stop.');
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you try to move your hips in time with his, rolling them and doing...
      scene.text(`Nevertheless, you try to move your hips in time with his, rolling them and doing your best to make ${((s as any).npcdesc || '')} feel good, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
          // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to slowly thrust into your pussy. ...
          scene.text(`Your breath hitches as ${((s as any).npcdesc || '')} continues to slowly thrust into your pussy. You aren't sure what changed, but it's like your body is waking up from a deep sleep. His cock stretches your walls, every thrust <i>fills</i> you in a way you didn't know you needed to be, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it easier to reach the deepest parts of your pussy.`);
        } else {
          // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to slowly thrust into your pussy. ...
          scene.text(`Your breath hitches as ${((s as any).npcdesc || '')} continues to slowly thrust into your pussy. You aren't sure what changed, but somewhere along the line everything started feeling <i>really good</i>. When his cock stretches your pussy, you want to be stretched <i>more</i>. Your pussy clamps down on him, gripping his cock in the hopes it will never need to let go. But the juices flowing from your snatch make that impossible and every thrust that fills you leaves you tantalized for more. You <i>ache</i> for him to fill you, and every new thrust grants that wish again and again.`);
        }
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          scene.text('As your pleasure increases, you try your best to bring his up as well, putting in the effort to try and make him come.');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You widen your legs and try to roll your hips in time with <<$npcdesc>>'s, tryin...
          scene.text(`You widen your legs and try to roll your hips in time with ${((s as any).npcdesc || '')}'s, trying to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You grunt passively as <<$npcdesc>> continues to pump his cock between your legs...
            scene.text(`You grunt passively as ${((s as any).npcdesc || '')} continues to pump his cock between your legs. His manhood drives into you, filling you with this weird sort of "pressure." This doesn't feel "good" exactly, but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his cock between your legs. It...
              scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his cock between your legs. It still basically feels numb to your pussy other than the occasional bump, but you don't want him to feel bad about it either so you play along, pretending it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] > 0) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. Your pussy still barely feels anything o...
                scene.text(`All your dirty talk is just that: talk. Your pussy still barely feels anything other than the occasional bump, but you don't want ${((s as any).npcdesc || '')} to feel bad about it either so you play along, pretending it feels good.`);
              } else {
                if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
                  if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                    qspCall(s, 'sex_ev_sex_talk_' + ((s as any).npcID ?? 0) + '', 'talk_output');
                  } else {
                    qspCall(s, 'sex_ev_sex_talk_npc', 'talk_output');
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You widen your legs and eagerly throw your hips back towards <<$npcdesc>> in tim...
        scene.text(`You widen your legs and eagerly throw your hips back towards ${((s as any).npcdesc || '')} in time with his. Maybe if you time it right, you can come together.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] <= 2  &&  ((s as any).sex_ev ?? 0)?.['moan'] > 0) {
          if (((s as any).sex_ev ?? 0)?.['moan'] <= 1) {
            scene.text('"<i>Mmm... Ah~! Ahhh...</i>"');
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Yes~! Mmm~!</i>"');
            }
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1_2MoanDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 3) {
            scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to pump his cock between your legs. Hi...
            scene.text(`You moan loudly as ${((s as any).npcdesc || '')} continues to pump his cock between your legs. His manhood drives slowly in and out of you, his movements leaving you <b>absolutely bored</b>.`);
            scene.text('<i>This is not as fun as I thought it would be...</i> you sigh internally.');
          } else {
            if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] > 0) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
                if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                  qspCall(s, 'sex_ev_sex_talk_' + ((s as any).npcID ?? 0) + '', 'talk_output');
                } else {
                  qspCall(s, 'sex_ev_sex_talk_npc', 'talk_output');
                }
              } else {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: You close your eyes, letting <<$npcdesc>> take care of the rest, focusing on his...
                scene.text(`You close your eyes, letting ${((s as any).npcdesc || '')} take care of the rest, focusing on his lovemaking.`);
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1_2SensationDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMiss1_bored(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'miss', 1);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/sex/vag/miss/slow2.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> keeps fucking you <i>excruciatingly</i> slowly and you keep having ...
  scene.text(`${((s as any).npcdesc || '')} keeps fucking you <i>excruciatingly</i> slowly and you keep having to stifle sighs of frustration, made twice worse by knowing your face is right beneath his. You smile at him, hoping he doesn't realize how fake it is.`);
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMiss2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['miss_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kiss'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss2';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['missionary_fuck'] = 1;
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspGoto(s, 'sex_ev_virgin', 'miss_virg_norm1');
  }
  scene.img('images/shared/sex/vag/miss/kotovsex0.mp4');
  if (((s as any).mesec ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2StartPeriodDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2StartDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips meet yours in th...
      scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in the next thrust. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. His dick may be small but <i>damn</i>, does he know how to use it.`);
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips meet yours in th...
        scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in the next thrust. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. <i>Damn</i>, does he know how to use his dick!`);
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips meet yours in th...
          scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in the next thrust. He doesn't just have a big cock, he knows how to use it too. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust. If it hits you just right, he makes sure to thrust it again just like that when your pussy can't help but squeeze him.`);
          scene.text('Oh <i>fuck</i>. He\'s good at this.');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips meet yours in th...
            scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in the next thrust. He doesn't just have a gigantic cock, he knows how to use it too. You would think that being fucked with such a giant dick would hurt, and it occasionally does, but not as often as you expected. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust his angle on top of you. If it hits you just right, he makes sure to thrust it again just like that when your pussy can't help but squeeze him, minimizing pain and maximizing pleasure.`);
            scene.text('Oh <i>fuck</i>. He\'s good at this.');
          }
        }
      }
    }
    // TODO-QSP: act'But you''re just not connecting':
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.text('But... for all his skill, somehow just isn\'t doing it for you.');
    scene.text('The pleasure is there but... the emotional connection--the <i>intimacy</i>--isn\'t, and it leaves you feeling strangely hollow and unsatisfied. Your bodies are joined together, but it seems without the soul, all you feel are bits of flesh smacking each other...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
    scene.actions([
      { label: 'Enjoy yourself', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('Your eyes roll back in your head as your pussy eagerly slurps up his cock again and again.');
    scene.text('<i>This is so goooooood...</i>');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
    // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips meet yours in th...
    scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in the next thrust. <i>That one felt pretty good!</i> And of course, right as you think that, the next one hits a little awkward inside you, rubbing the wrong way. He's still good for the most part, but about one in ten thrusts can't help but hit wrong.`);
    scene.actions([
      { label: 'You\'re going to enjoy this', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: Still, that's good enough and you don't mind the awkward hit now and then. You s...
    scene.text(`Still, that's good enough and you don't mind the awkward hit now and then. You smile back at ${((s as any).npcdesc || '')}, determined to enjoy fucking him today.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 2;
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: He's good, but not good enough for you. Whatever effort he puts in can only go s...
      scene.text('He\'s good, but not good enough for you. Whatever effort he puts in can only go so far with such a small dick. Beyond that, his movements just aren\'t syncing up with yours\' + iif(npc_fuck_times[$npcID] > 0, \' today \', \' \') + \'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: He's good, but not good enough for you. You can't exactly put your finger on it,...
        scene.text('He\'s good, but not good enough for you. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements just aren\'t syncing up with yours\' + iif(npc_fuck_times[$npcID] > 0, \' today \', \' \') + \'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: He's good, but not good enough for you. Something about his timing is just <i>of...
          scene.text(`He's good, but not good enough for you. Something about his timing is just <i>off</i>. His movements just aren't syncing up with yours' + iif(npc_fuck_times[$npcID] > 0, ' today ', ' ') + 'and you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: He's good, but not good enough for you. Half the problem is his cock is just <i>...
            scene.text(`He's good, but not good enough for you. Half the problem is his cock is just <i>too damn big!</i> His movements just aren't syncing up with yours' + iif(npc_fuck_times[$npcID] > 0, ' today ', ' ') + 'and you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
      // TODO-QSP: dynamic text: An grunt of surprise escapes your lips as <<$npcdesc>>'s hips meet yours in a cl...
      scene.text(`An grunt of surprise escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in a clumsy thrust. That last one was a little bit awkward. <i>Oof.</i> And that one too. Oh, that one wasn't too bad- And we're back to awkward again.`);
      // TODO-QSP: dynamic text: In a word, <<$npcdesc>> is... uncoordinated? Every few thrusts of his <<$dick_de...
      scene.text(`In a word, ${((s as any).npcdesc || '')} is... uncoordinated? Every few thrusts of his ${((s as any).dick_desc || '')} dick inevitably result in an uncomfortable spot getting hit and a sharp prick of pain inside your pussy.`);
      scene.actions([
        { label: 'Coach him to do better', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling and putting your ha...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((s as any).npcdesc || '')}," you coo, smiling and putting your hands on his sides and guiding him. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You spread your thighs a little wider as he pushes his <<$dick_desc>> cock into ...
    scene.text(`You spread your thighs a little wider as he pushes his ${((s as any).dick_desc || '')} cock into you again, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    scene.text('"<i>"Yes~!"</i> you moan, the back of your head hitting the pillow in satisfaction. "Just like that~!"');
    scene.text('It pays to communicate...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 2;
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('Well he certainly has enthusiasm. But that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('Well he certainly has enthusiasm. But not much skill. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new thrust into your pussy. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Something about his timing...
          scene.text(`Well he certainly has enthusiasm. But not much skill. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Half the problem is his co...
            scene.text(`Well he certainly has enthusiasm. But not much skill. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and every time you think it's about to get good, you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock hits another painful spots inside your pussy and your pleasure deflating like a balloon. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'This hurts!', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Is it getting worse?!</i>');
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('You\'ve no idea how, but he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          scene.text('You\'ve no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            scene.text('Not only is his oversized cock straining your pussy to the limits, its also somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: A stifled gasp of discomfort escapes your lips as <<$npcdesc>>'s hips meet yours...
      scene.text(`A stifled gasp of discomfort escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in clumsy thrust, sending a sharp jab of pain into your pussy. He keeps moving in weird ways, making nearly every pump of his ${((s as any).dick_desc || '')} dick into your pussy inevitably result in an awkward spot getting hit and a sharp prick of pain. What on earth is he doing?!`);
      scene.actions([
        { label: 'Coach him to do better', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling and putting your ha...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((s as any).npcdesc || '')}," you coo, smiling and putting your hands on his sides and guiding him. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You spread your thighs a little wider as he pushes his <<$dick_desc>> cock into ...
    scene.text(`You spread your thighs a little wider as he pushes his ${((s as any).dick_desc || '')} cock into you again, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    scene.text('"<i>"Yes~!"</i> you moan, the back of your head hitting the pillow in satisfaction. "Just like that~!"');
    scene.text('It pays to communicate...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 2;
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('Well he certainly has enthusiasm. But that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('Well he certainly has enthusiasm. But not much skill. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new thrust into your pussy. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Something about his timing...
          scene.text(`Well he certainly has enthusiasm. But not much skill. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Half the problem is his co...
            scene.text(`Well he certainly has enthusiasm. But not much skill. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and every time you think it's about to get good, you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock hits another painful spots inside your pussy and your pleasure deflating like a balloon. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'This hurts!', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Is it getting worse?!</i>');
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('You\'ve no idea how, but he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          scene.text('You\'ve no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            scene.text('Not only is his oversized cock straining your pussy to the limits, its also somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] < 75  &&  (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short'  ||  ((s as any).dick_desc ?? 0) === 'thin')) {
    // TODO-QSP: act'His dick is so small!':
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.img('images/shared/sex/vag/doggy/bored1.mp4');
    scene.text('<i>Holy shit,</i> you think to yourself. <i>How\'s a girl supposed to get off with a dick this small?</i>');
    // TODO-QSP: dynamic text: It takes all of your willpower not to audibly sigh as you keep letting <<$npc_us...
    scene.text(`It takes all of your willpower not to audibly sigh as you keep letting ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} plow into you with his amazingly <i>disappointing</i> cock.`);
    if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1) {
      scene.text('<i>At least I\'m getting paid for this...</i>');
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterMiss2_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'miss', 2);
  scene.img('images/shared/sex/vag/miss/med1.mp4');
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'miss1') {
    scene.text('With the new and improved pace, you find yourself enjoying it a lot more. Wet slapping sounds fill the room and you can\'t help but giggle at how good it feels.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'miss3') {
      // TODO-QSP: dynamic text: <<$npcdesc>> ramps down to a more manageable pace and you breathe a sigh of reli...
      scene.text(`${((s as any).npcdesc || '')} ramps down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more.`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2_1Desc(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMiss2_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['miss_fuck'] = 1;
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'miss', 2);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps steadily fucking you. Finally, the s...
        scene.text(`You take deep breaths as ${((s as any).npcdesc || '')} keeps steadily fucking you. Finally, the stabbing pain between your legs is starting to go away. It seems your virgin pussy is starting to adjust to having a cock inside it.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc || '')}'s thrusts. It still hurts, but you're determined not to let a little pain cause you to pussy out of your first time.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            scene.text('You whimper softly, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. It hurts <i>so much</i>, but you can\'t bring yourself to tell him to stop.');
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps steadily fucking you. Closing your e...
        scene.text(`You take deep breaths as ${((s as any).npcdesc || '')} keeps steadily fucking you. Closing your eyes, you focus, adjusting your position beneath him, changing your timing to try move your hips with his. After some minor adjustments, the pain ${((s as any).npcdesc || '')}'s cock was causing inside you fades. After a few minutes, it's little more than a dull throb and you feel much more comfortable, if not all that good.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with the sound of ${((s as any).npcdesc || '')}'s hips clapping against your's. It hurts like hell, but you don't say anything, trying your best not to let it show.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can, trying with all you...
            scene.text(`You whimper softly, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears every time ${((s as any).npcdesc || '')}'s hips loudly clap into your's and pain lances through your pussy. It hurts <i>so much</i>, but you can't bring yourself to tell him to stop.`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you try to move your hips in time with his, rolling them and doing...
      scene.text(`Nevertheless, you try to move your hips in time with his, rolling them and doing your best to make ${((s as any).npcdesc || '')} feel good, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to steadily thrust into your pussy...
        scene.text(`Your breath hitches as ${((s as any).npcdesc || '')} continues to steadily thrust into your pussy. You aren't sure what changed, but it's like your body is waking up from a deep sleep. His cock stretches your walls, every thrust <i>fills</i> you in a way you didn't know you needed to be, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it slide in and out of you with much greater, and pleasurable, force.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          scene.text('As your pleasure increases, you try your best to bring his up as well, putting in the effort to try and make him come.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You grunt passively as <<$npcdesc>> continues to pump his cock between your legs...
            scene.text(`You grunt passively as ${((s as any).npcdesc || '')} continues to pump his cock between your legs. His manhood hammers deep inside you, filling you with this weird sort of "pressure." This doesn't feel "good" exactly, but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his cock between your legs. It...
              scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his cock between your legs. It still basically feels numb to your pussy other than the slapping of his hips against yours, but you don't want him to feel bad about it either so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] > 0) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. For all the effort <<$npcdesc>> is putti...
                scene.text(`All your dirty talk is just that: talk. For all the effort ${((s as any).npcdesc || '')} is putting in, you can't say it feels very good. But you don't want ${((s as any).npcdesc || '')} to feel bad about it either so you play along, pretending otherwise.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You widen your legs and eagerly throw your hips back towards <<$npcdesc>> in tim...
        scene.text(`You widen your legs and eagerly throw your hips back towards ${((s as any).npcdesc || '')} in time with his. Maybe if you time it right, you can come together.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] >= 1) {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Ah~! Ahh~! Haa~! Ah!</i>"');
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Yes~! Mmm~! Ahh~!</i>"');
            }
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2_2MoanDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] === 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
              if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                qspCall(s, 'sex_ev_sex_talk_' + ((s as any).npcID ?? 0) + '', 'talk_output');
              } else {
                qspCall(s, 'sex_ev_sex_talk_npc', 'talk_output');
              }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You close your eyes, letting <<$npcdesc>> take care of the rest, focusing on his...
              scene.text(`You close your eyes, letting ${((s as any).npcdesc || '')} take care of the rest, focusing on his lovemaking.`);
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss2_2SensationDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMiss2_bored(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['miss_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss2';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kiss'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 2;
  scene.img('images/shared/sex/vag/miss/med3.mp4');
  // TODO-QSP: dynamic text: You moan along with <<$npcdesc>>'s thrusts, putting on your best oh-face and hop...
  scene.text(`You moan along with ${((s as any).npcdesc || '')}'s thrusts, putting on your best oh-face and hoping that he doesn't see through it, just waiting for him to come already.`);
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMiss3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['miss_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_check'] = 1;
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss3';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['missionary_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kiss'] = 0;
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspGoto(s, 'sex_ev_virgin', 'miss_virg_hard1');
  }
  // TODO-QSP: gs 'arousal', 'vaginal',1, 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'rough'
  scene.img('images/shared/sex/vag/miss/rough1.mp4');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss3StartDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mesec ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss3StartPeriodDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.text('He pummels your pussy with tremendous strength, sending the sound of your clapping cheeks echoing off the walls and driving the breath from your lungs.');
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] < 75) {
    scene.actions([
      { label: 'Enjoy it', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>'s hips pound into yours...
    scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc || '')}'s hips pound into yours over and over again. He's incessant, smashing into your pussy over.`);
    scene.text('<i>And it\'s amazing.</i>');
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('He\'s going hard, but his movements are still reacting to yours, paying attention to your body\'s nonverbal signals, and making each thrust feeling better than the last. His dick may be small but <i>damn</i>, does he know how to use it.');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('He\'s going hard, but his movements are still reacting to yours, paying attention to your body\'s nonverbal signals, and making each thrust feeling better than the last. <i>Damn</i>, does he know how to use his dick!');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          scene.text('He\'s going hard, but his movements are still reacting to yours, paying attention to your body\'s nonverbal signals, and making each thrust feeling better than the last. He doesn\'t just have a big cock, he knows how to use it too. If it hits an awkward spot, you feel him adjust. If it hits you just right, he makes sure to thrust it again just like that when your pussy can\'t help but squeeze him.');
          scene.text('Oh <i>fuck</i>. He\'s good at this.');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            scene.text('He\'s going hard, but his movements are still reacting to yours, paying attention to your body\'s nonverbal signals, and making each thrust feeling better than the last. You would think that being fucked with such a giant dick would hurt, and it occasionally does, but not as often as you expected. He got a big gun <i>and</i> he knows how to use it. If it hits an awkward spot, you feel him adjust his angle on top of you. If it hits you just right, he makes sure to thrust it again just like that when your pussy can\'t help but squeeze him, minimizing pain and maximizing pleasure.');
            scene.text('Oh <i>fuck</i>. He\'s good at this.');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
      scene.actions([
        { label: 'Enjoy it', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: Your eyes roll back in your head as <<$npcdesc>> incessantly pounds into you wit...
    scene.text(`Your eyes roll back in your head as ${((s as any).npcdesc || '')} incessantly pounds into you with his ${((s as any).dick_desc || '')} cock. Not every thrust is clean and every once in a while he bangs into you in a way that causes a sharp jab of pain inside you. But that's just part of going rough and you focus on the good ones, letting the bad ones roll on past.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 2;
    // TODO-QSP: dynamic text: <i>Do people really enjoy this?</i> you think to yourself as <<$npcdesc>> keeps ...
    scene.text(`<i>Do people really enjoy this?</i> you think to yourself as ${((s as any).npcdesc || '')} keeps pounding himself into your pussy. But for all the effort he's putting in, it's not bringing any pleasure. It doesn't <i>hurt</i> exactly, but it's definitely not getting you off.`);
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
        scene.actions([
          { label: 'Enjoy it', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: Your eyes roll back in your head as <<$npcdesc>> incessantly pounds into you wit...
    scene.text(`Your eyes roll back in your head as ${((s as any).npcdesc || '')} incessantly pounds into you with his ${((s as any).dick_desc || '')} cock. Not every thrust is clean and every once in a while he bangs into you in a way that causes a sharp jab of pain inside you. But that's just part of going rough and you focus on the good ones, letting the bad ones roll on past.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 2;
    // TODO-QSP: dynamic text: <i>Do people really enjoy this?</i> you think to yourself as <<$npcdesc>> keeps ...
    scene.text(`<i>Do people really enjoy this?</i> you think to yourself as ${((s as any).npcdesc || '')} keeps pounding himself into your pussy. But for all the effort he's putting in, it's not bringing any pleasure. He's not paying any attention to your body's response, just thrusting wildly as fast as he can.`);
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'This hurts!', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Does he think this is good?!</i>');
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy, just thrusting wildly and smashing his tiny cock into you without any care or attention. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: You've no idea how, but he's somehow managing to find every bad spot inside your...
        scene.text(`You've no idea how, but he's somehow managing to find every bad spot inside your pussy. He's just thrusting wildly, smashing his ${((s as any).dick_desc || '')} cock into you without any care or attention. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...`);
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: You've no idea how, but his big stupid cock is somehow managing to find every ba...
          scene.text(`You've no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy. He's just thrusting wildly, smashing his ${((s as any).dick_desc || '')} cock into you without any care or attention. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...`);
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Not only is his oversized cock straining your pussy to the limits, its also some...
            scene.text(`Not only is his oversized cock straining your pussy to the limits, its also somehow managing to find every bad spot inside your pussy. He's just thrusting wildly, smashing his ${((s as any).dick_desc || '')} cock into you without any care or attention Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...`);
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: A stifled gasp of discomfort escapes your lips as <<$npcdesc>>'s hips meet yours...
        scene.text(`A stifled gasp of discomfort escapes your lips as ${((s as any).npcdesc || '')}'s hips meet yours in clumsy thrust, sending a sharp jab of pain into your pussy. He keeps moving in weird ways, making nearly every pump of his ${((s as any).dick_desc || '')} dick into your pussy inevitably result in an awkward spot getting hit and a sharp prick of pain. What on earth is he doing?!`);
        scene.actions([
          { label: 'Coach him to do better', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling and putting your ha...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((s as any).npcdesc || '')}," you coo, smiling and putting your hands on his sides and guiding him. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You spread your thighs a little wider as he pushes his <<$dick_desc>> cock into ...
    scene.text(`You spread your thighs a little wider as he pushes his ${((s as any).dick_desc || '')} cock into you again, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    scene.text('"<i>"Yes~!"</i> you moan, the back of your head hitting the pillow in satisfaction. "Just like that~!"');
    scene.text('It pays to communicate...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 2;
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('Well he certainly has enthusiasm. But that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('Well he certainly has enthusiasm. But not much skill. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new thrust into your pussy. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Something about his timing...
          scene.text(`Well he certainly has enthusiasm. But not much skill. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Half the problem is his co...
            scene.text(`Well he certainly has enthusiasm. But not much skill. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and every time you think it's about to get good, you find yourself stifling yelps of discomfort as his ${((s as any).dick_desc || '')} cock hits another painful spots inside your pussy and your pleasure deflating like a balloon. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'This hurts!', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Is it getting worse?!</i>');
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        scene.text('You\'ve no idea how, but he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          scene.text('You\'ve no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy with the force of a hammer. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            scene.text('Not only is his oversized cock straining your pussy to the limits, its also somehow managing to every bad spot inside your pussy with the force of a sledgehammer. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        ]);
      }
    }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] < 75  &&  (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short'  ||  ((s as any).dick_desc ?? 0) === 'thin')) {
    // TODO-QSP: act'His dick is so small!':
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.text('<i>Holy shit,</i> you think to yourself. <i>How\'s a girl supposed to get off with a dick this small?</i>');
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s hips are smacking into yours with an exceptional amo...
    scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}'s hips are smacking into yours with an exceptional amount of force but despite that, you can't feel <i>anything</i> inside you. You didn't even know it was possible for someone to fuck you this hard without pleasure or even pain to show for it.`);
    if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1) {
      scene.text('<i>At least I\'m getting paid for this...</i>');
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  // TODO-QSP: end
  if (((s as any).sex_ev ?? 0)?.['rough_enjoy'] !== 1) {
    scene.actions([
      { label: 'So rough!', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    scene.text('You want to scream as he pulls on your hair, feeling like he\'s going to rip it out and putting an awful strain on your neck. His cock is like a jackhammer, pounding into your pussy in the worst way, feeling more like he\'s punching your cervix than fucking you. It\'s so painful you feel like you\'re going to die.');
    scene.actions([
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['bored'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    (s as any).orgasm_or = 'no';
    scene.img('images/shared/sex/vag/miss/hard2.mp4');
    // TODO-QSP: dynamic text: For whatever reason, you can't bring yourself to say anything, and simply endure...
    scene.text(`For whatever reason, you can't bring yourself to say anything, and simply endure the rough treatment. You sigh in relief when ${((s as any).npcdesc || '')} releases your hair but only for a brief moment when he uses his extra hand to grab hold of your ass and pound you even harder. You grab onto the edge of the bed and hang on for dear life, whimpering as he mercilessly fucks you.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'It hurts!', handler: (st: GameState) => {
    if (((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_speed_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 3)  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.text('"Oh fuck! It hurts!" you cry.');
      // TODO-QSP: dynamic text: "Hurts fucking good doesn't it?" <<$npcdesc>> grunts back, not even pausing for ...
      scene.text(`"Hurts fucking good doesn't it?" ${((s as any).npcdesc || '')} grunts back, not even pausing for a single beat.`);
      scene.actions([
        { label: 'Please slow down!', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    (s as any).orgasm_or = 'no';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_hurt'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 2;
    scene.text('"Please!" you beg, tears welling up in your eyes. "Please slow down! I can\'t-! Take-!');
    // TODO-QSP: dynamic text: But <<$npcdesc>> is heedless of your cries. He keeps a firm hold on your hair an...
    scene.text(`But ${((s as any).npcdesc || '')} is heedless of your cries. He keeps a firm hold on your hair and pulls hard with every thrust, forcing unceasing cries of pain from your lips.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'If you slow down I will kill you', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: You scream another cry of agonizing pleasure and glare at <<$npcdesc>>.
    scene.text(`You scream another cry of agonizing pleasure and glare at ${((s as any).npcdesc || '')}.`);
    scene.text('"If you slow down I will <i>fucking</i> kill you," you snarl, throwing your hips forward to slam into his for more force.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss3EnjoyDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      scene.img('images/shared/sex/vag/miss/1.jpg');
      // TODO-QSP: dynamic text: "Oh fuck! It hurts!" you moan and <<$npcdesc>> stops abruptly.
      scene.text(`"Oh fuck! It hurts!" you moan and ${((s as any).npcdesc || '')} stops abruptly.`);
      if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
        scene.text('"Oh! Sorry. I thought you might like it rough. Do you want me to stop?"');
      } else {
        scene.text('"Oh! Sorry. I thought you wouldn\'t mind. Do you want me to stop?"');
      }
      scene.actions([
        { label: 'No (enjoy)', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough = (s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_enjoy'] = 1;
    scene.text('"No," you smile back at him. "I want you to pound me."');
    // TODO-QSP: dynamic text: In response, <<$npcdesc>> yanks you back by the hair even harder than before, sl...
    scene.text(`In response, ${((s as any).npcdesc || '')} yanks you back by the hair even harder than before, slamming his cock into you to fulfil your request.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_miss', 'miss3.1'] },
    ]);
  } },
        { label: 'Yes, gentle please', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['too_rough'] = 1;
    scene.text('"Yes please," you say, giving him a small smile. "A little more gently would be very nice..."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_miss', 'miss1.1'] },
    ]);
  } },
        { label: 'Not <i>too</i> gentle', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['too_rough'] = 1;
    scene.text('"You don\'t have to be <i>too</i> gentle with me," you giggle. "I just don\'t want to feel like I\'m having sex with Vlad the Impaler here."');
    scene.text('You sigh in relief as he picks up his pace again, this time without leaving you feel like you\'re being battered to bits.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_miss', 'miss2.2'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Fake an orgasm', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fake_orgasm_count'] = ((s as any).sex_ev['fake_orgasm_count'] ?? 0) + (1);
    (s as any).fake_orgasm = ((s as any).fake_orgasm ?? 0) + (1);
    (s as any).orgasm_or = 'no';
    qspCall(s, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    scene.img('images/shared/sex/vag/miss/hard2.mp4');
    scene.text('"Ugh! Ugh! Ugh! <i>Unnghhhh!!</i>"');
    // TODO-QSP: dynamic text: You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now ...
    scene.text(`You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now before crying out and clenching down on ${((s as any).npcdesc || '')}'s cock with your pussy as hard as you can, dramatically shaking your shoulders, faking climax.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down even more for a beat.
    scene.text(`${((s as any).npcdesc || '')} slows down even more for a beat.`);
    scene.text('"Did you just...?"');
    scene.text('"Yeah," you pant, forcing breathlessness into your voice.');
    if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Do you need me to slow down for a bit?"');
      scene.text('"That would... be nice," you smile.');
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_miss', 'miss1'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_miss', 'miss2'] },
        ]);
      }
    } else {
      scene.text('"I\'m going to keep going, okay?"');
      scene.text('You nod, not really wanting to put any more energy into the performance and he picks back up into his awful jackhammer pace again.');
      qspCall(s, 'sex_ev_cum', 'fuck_cum');
      qspCall(s, 'sex_ev_sex', 'fuck_continue');
    }
  } },
    ]);
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissionaryChangePosition(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'miss', 3);
  if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (((s as any).npc_knows_pc_likes_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).sex_ev ?? 0)?.['rough_enjoy'] !== 1)) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_fuck'] = 1;
    scene.img('images/shared/sex/vag/miss/rough1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> suddenly grabs your head, causing sharp pain at the back of your sc...
    scene.text(`${((s as any).npcdesc || '')} suddenly grabs your head, causing sharp pain at the back of your scalp.`);
    scene.text('"Ow! Hey watch i-" is all you manage to get out before he pulls you by the hair and slams his cock into you with the force of a nail being smashed by a hammer. You gasp in pain feeling like he\'s going to tear you in half.');
    // TODO-QSP: dynamic text: "Yeah <i>bitch?!</i>" <<$npcdesc>> snarls. "You want me to fuck you harder? Well...
    scene.text(`"Yeah <i>bitch?!</i>" ${((s as any).npcdesc || '')} snarls. "You want me to fuck you harder? Well, then take it you fucking slut!" and starts roughly fucking you in a way completely unlike his previous mannerisms.`);
    scene.actions([
      { label: 'Enjoy it', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss3_1Desc(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Suffer', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_hurt'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    // TODO-QSP: dynamic text: Tears begin to well up in your eyes as he keeps fucking you roughly. It's all yo...
    scene.text(`Tears begin to well up in your eyes as he keeps fucking you roughly. It's all you can do not to sob, but ${((s as any).npcdesc || '')} is unrelenting. He keeps a firm hold on your hair and pulls hard with every thrust, forcing cries of pain from your lips.`);
    scene.text('This isn\'t what you wanted...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    scene.img('images/shared/sex/vag/miss/hard3.mp4');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss3_1Desc(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['rough_check'] === 0) {
    qspGoto(s, 'sex_ev_miss', 'miss3');
  }
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'miss', 3);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    qspCall(s, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps pounding his cock into you. Somehow,...
        scene.text(`You take deep breaths as ${((s as any).npcdesc || '')} keeps pounding his cock into you. Somehow, the stabbing pain between your legs is starting to go away. It seems your virgin pussy is starting to adjust to getting jackhammered.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc || '')}'s hips colliding with yours. The agony induced by his rough fucking is nearly unbearable, but you're pridefully determined not to let a little pain cause you to pussy out of your first time.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper pathetically as <<$npcdesc>> keeps slamming into you with his cock, ...
            scene.text(`You whimper pathetically as ${((s as any).npcdesc || '')} keeps slamming into you with his cock, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. Despite your best efforts, the pain is too great and wet drops roll down your cheeks as ${((s as any).npcdesc || '')} continues to pound you.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 4) {
              // TODO-QSP: dynamic text: You sob openly as <<$npcdesc>> smashes his cock into you. It hurts so much you t...
              scene.text(`You sob openly as ${((s as any).npcdesc || '')} smashes his cock into you. It hurts so much you think you're going to die, but you can't manage to tell him to stop. The only thing you can do is cry wordlessly as he stabs into your pussy over and over again.`);
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps pounding his cock into you. You focu...
        scene.text(`You take deep breaths as ${((s as any).npcdesc || '')} keeps pounding his cock into you. You focus hard, trying with all your might to squeeze <i>some</i> kind of pleasure from this. Anything to make the pain go away. And somehow, after several minutes, it does. ${((s as any).npcdesc || '')} continues to jackhammer your pussy with his cock, but suddenly you feel able to tolerate it, even if it doesn't feel very good either.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc || '')}'s hips colliding with yours. The agony induced by his rough fucking is nearly unbearable, but you're pridefully determined not to let the pain show.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper pathetically as <<$npcdesc>> keeps slamming into you with his cock, ...
            scene.text(`You whimper pathetically as ${((s as any).npcdesc || '')} keeps slamming into you with his cock, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. Despite your best efforts, the pain is too great and tiny drops of moisture leak from your eyes and roll down your cheeks as ${((s as any).npcdesc || '')} continues to pound you.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 4) {
              // TODO-QSP: dynamic text: You sob openly as <<$npcdesc>> smashes his cock into you. It hurts so much you t...
              scene.text(`You sob openly as ${((s as any).npcdesc || '')} smashes his cock into you. It hurts so much you think you're going to die, but you can't manage to tell him to stop. The only thing you can do is cry wordlessly as he stabs into your pussy over and over again.`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you try to move your hips in time with his, rolling them and doing...
      scene.text(`Nevertheless, you try to move your hips in time with his, rolling them and doing your best to make ${((s as any).npcdesc || '')} feel good. Maybe you can make him come soon and put an end to this agony...`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      qspCall(s, 'sex_ev_sex', 'fuck_rough_no_cum_code');
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        (s as any).orgasm_or = '';
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to pound your pussy. You aren't su...
        scene.text(`Your breath hitches as ${((s as any).npcdesc || '')} continues to pound your pussy. You aren't sure what changed, but it's like your body is coming alive. His cock stretches your walls, <i>filling</i> you in a way you didn't know you needed to be, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it slam harder into you with every thrust.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          // TODO-QSP: dynamic text: You widen your legs and try to roll your hips in time with <<$npcdesc>>'s as he ...
          scene.text(`You widen your legs and try to roll your hips in time with ${((s as any).npcdesc || '')}'s as he pounds you, trying to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            // TODO-QSP: dynamic text: You grunt in time with <<$npcdesc>>'s thrusts as he continues to pound his cock ...
            scene.text(`You grunt in time with ${((s as any).npcdesc || '')}'s thrusts as he continues to pound his cock between your legs. His manhood hammers deep inside you, slamming into you in a way that doesn't exactly feel "good", but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to pound his cock between your legs. I...
              scene.text(`You moan loudly as ${((s as any).npcdesc || '')} continues to pound his cock between your legs. It still basically feels numb to your pussy other than the slamming of his hips against yours, but you don't want him to feel bad about it either so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] === 1) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss3_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. <<$npcdesc>> continues to relentlessly s...
                scene.text(`All your dirty talk is just that: talk. ${((s as any).npcdesc || '')} continues to relentlessly smash your pussy with his cock and you honestly can't say it feels very good. But you don't want ${((s as any).npcdesc || '')} to feel bad about it either so you play along, pretending otherwise.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        // TODO-QSP: dynamic text: You widen your legs and eagerly throw your hips back towards <<$npcdesc>> as he ...
        scene.text(`You widen your legs and eagerly throw your hips back towards ${((s as any).npcdesc || '')} as he pounds your pussy. Maybe if you time it right, you can come together.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] <= 2  &&  ((s as any).sex_ev ?? 0)?.['moan'] > 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss3_2MoanDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] === 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss3_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss3_2SensationDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMiss3_bored(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'miss', 3);
  qspCall(s, 'sex_ev_sex', 'fuck_rough_no_cum_code');
  scene.img('images/shared/sex/vag/miss/med3.mp4');
  // TODO-QSP: dynamic text: You half fake moan, half groan in pain in time with <<$npcdesc>>'s thrusts. Your...
  scene.text(`You half fake moan, half groan in pain in time with ${((s as any).npcdesc || '')}'s thrusts. Your face contorts in agony and you hope that he is mistaking it for pleasure, just waiting for him to come already while he continues to relentlessly jackhammer your poor pussy.`);
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMissKiss(s: GameState, scene: SceneBuilder): void {
  scene.text('Suddenly, he leans down to kiss you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'No kissing', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['kiss_skip'] = 1;
    if (((s as any).npc_no_kiss ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
      scene.text('You turn your head, shying away from his lips.');
      scene.text('"Not right now," you say, smiling apologetically.');
    } else {
      if (((s as any).npc_no_kiss ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
        scene.text('"Hey!" you say, annoyedly jerking your head away. "I told you! No kissing!"');
      } else {
        ((s as any).npc_no_kiss = (s as any).npc_no_kiss ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"Hey!" you say, jerking your head away. "No kissing!"');
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Kiss him', handler: (st: GameState) => {
    ((s as any).npc_like = (s as any).npc_like ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_like[String((s as any).npcID ?? 0)] ?? 0) + (2);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['kiss'] = 1;
    // TODO-QSP: gs 'arousal', 'kiss', -rand(1, 2), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    scene.img('images/shared/sex/vag/miss/kiss1.mp4');
    if (((s as any).sex_ev ?? 0)?.['cuni_count'] > 0) {
      // TODO-QSP: dynamic text: You let <<$npcdesc>>'s lips touch yours and feel his tongue snake into your mout...
      scene.text(`You let ${((s as any).npcdesc || '')}'s lips touch yours and feel his tongue snake into your mouth and start to wrestle against your own, accompanied by an additional salty flavour that you recognize as the taste of your own pussy.`);
    } else {
      if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: You let <<$npcdesc>>'s lips touch yours and feel his tongue snake into your mout...
        scene.text(`You let ${((s as any).npcdesc || '')}'s lips touch yours and feel his tongue snake into your mouth and start to wrestle against your own.`);
      } else {
        // TODO-QSP: dynamic text: You let his <<$npcdesc>>'s touch yours and feel his tongue snake into your mouth...
        scene.text(`You let his ${((s as any).npcdesc || '')}'s touch yours and feel his tongue snake into your mouth and start to wrestle against your own.`);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
      if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
          // TODO-QSP: dynamic text: You kiss <<$npcdesc>> back with all your might, trying to find something to dist...
          scene.text(`You kiss ${((s as any).npcdesc || '')} back with all your might, trying to find something to distract yourself from the pain. All your focus is on the kiss and his lips and his tongue and the taste. It comes to you with a start that after the kiss breaks, you're not in as much pain as you were before.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
            // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips as you kis...
            scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips as you kiss ${((s as any).npcdesc || '')} back. The pain of your virgin pussy getting fucked is still overwhelming, but try not to let it show, hoping to distract both ${((s as any).npcdesc || '')} and yourself by returning the kiss.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
              // TODO-QSP: dynamic text: Your attempts to kiss <<$npcdesc>> back are clumsy at best, as opening your mout...
              scene.text(`Your attempts to kiss ${((s as any).npcdesc || '')} back are clumsy at best, as opening your mouth at all puts you in danger of screaming in pain and bursting into tears. He continues fucking your virgin pussy and you nearly sob directly into his mouth as he kisses you.`);
            }
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
          // TODO-QSP: dynamic text: You kiss <<$npcdesc>> back with all your might, trying to find something to dist...
          scene.text(`You kiss ${((s as any).npcdesc || '')} back with all your might, trying to find something to distract yourself from the pain. All your focus is on the kiss and his lips and his tongue and the taste. It comes to you with a start that after the kiss breaks, you're not in as much pain as you were before.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
            // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips as you kis...
            scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips as you kiss ${((s as any).npcdesc || '')} back. The pain in your pussy is still overwhelming, but try not to let it show, hoping to distract both ${((s as any).npcdesc || '')} and yourself by returning the kiss.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
              // TODO-QSP: dynamic text: Your attempts to kiss <<$npcdesc>> back are clumsy at best, as opening your mout...
              scene.text(`Your attempts to kiss ${((s as any).npcdesc || '')} back are clumsy at best, as opening your mouth at all puts you in danger of screaming in pain and bursting into tears. He continues fucking your pussy in the most painful way possible and you nearly sob directly into his mouth as he kisses you.`);
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
          // TODO-QSP: dynamic text: A spark fires off somewhere inside you and suddenly find yourself kissing <<$npc...
          scene.text(`A spark fires off somewhere inside you and suddenly find yourself kissing ${((s as any).npcdesc || '')} back with passion as heat spreads through your hips. Your arousal has been awakened and wetness spreads between your legs as you force your tongue into ${((s as any).npcdesc || '')}'s mouth.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            // TODO-QSP: dynamic text: You grunt passively into <<$npcdesc>>'s mouth as he kisses you while continuing ...
            scene.text(`You grunt passively into ${((s as any).npcdesc || '')}'s mouth as he kisses you while continuing to fuck you. The kiss isn't really helping much, but it could be worse you guess.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              // TODO-QSP: dynamic text: You moan softly into <<$npcdesc>>'s mouth as he kisses you while continuing to f...
              scene.text(`You moan softly into ${((s as any).npcdesc || '')}'s mouth as he kisses you while continuing to fuck you and hope with every fibre of your being that it's convincing because neither the kiss nor his cock between your legs is doing anything for you.`);
            }
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['bored'] === 1) {
          scene.text('<i>At least this part feels good,</i> you think to yourself, allowing a small smile to break through.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
            if (((s as any).sex_ev ?? 0)?.['cuni_count'] > 0) {
              // TODO-QSP: dynamic text: You smile up at <<$npcdesc>> as his lips meet yours. They taste slightly... salt...
              scene.text(`You smile up at ${((s as any).npcdesc || '')} as his lips meet yours. They taste slightly... salty... and you realize with a start that it's the flavour of your own pussy, being passed back into your mouth. His tongue pushes up against yours, gently complimenting the pleasure of his cock inside you. You close your eyes, letting them roll back in your head, knowing that he's about to make you come.`);
            } else {
              if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                // TODO-QSP: dynamic text: You smile up at <<$npcdesc>> as his lips meet yours. His tongue, tasting vaguely...
                scene.text(`You smile up at ${((s as any).npcdesc || '')} as his lips meet yours. His tongue, tasting vaguely of smoke and tobacco, pushes up against yours, gently complimenting the pleasure of his cock inside you. You close your eyes, letting them roll back in your head, knowing that he's about to make you come.`);
              } else {
                // TODO-QSP: dynamic text: You smile up at <<$npcdesc>> as his lips meet yours. They press softly together ...
                scene.text(`You smile up at ${((s as any).npcdesc || '')} as his lips meet yours. They press softly together and his tongue spreads them apart to push up against yours, gently complimenting the pleasure of his cock inside you. You close your eyes, letting them roll back in your head, knowing that he's about to make you come.`);
              }
            }
          } else {
            if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
              // TODO-QSP: dynamic text: You smile up at <<$npcdesc>> as his lips meet yours. His tongue, tasting vaguely...
              scene.text(`You smile up at ${((s as any).npcdesc || '')} as his lips meet yours. His tongue, tasting vaguely of smoke and tobacco, spreads them apart to push up against yours, gently complimenting the pleasure of his cock inside you.`);
            } else {
              // TODO-QSP: dynamic text: You smile up at <<$npcdesc>> as his lips meet yours. They press softly together ...
              scene.text(`You smile up at ${((s as any).npcdesc || '')} as his lips meet yours. They press softly together and his tongue spreads them apart to push up against yours, compounding the pleasure of his cock inside you. You kiss him back with everything you have, moaning into his mouth as he continues to thrust into you.`);
            }
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Turn your head', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('You turn your head, shying away from his lips.');
    scene.text('"Not right now," you say.');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
  ]);
  scene.build();
}

function enterMiss1StartPeriodDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> pumps his tiny dick in and out of you slowly, focusing more on tech...
    scene.text(`${((s as any).npcdesc || '')} pumps his tiny dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his modest manhood slips in and out of you with ease.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> pumps his short cock in and out of you slowly, focusing more on tec...
      scene.text(`${((s as any).npcdesc || '')} pumps his short cock in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his chode slips in and out of you with ease.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> pumps his skinny dick in and out of you slowly, focusing more on te...
        scene.text(`${((s as any).npcdesc || '')} pumps his skinny dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his slim cock slips in and out of you with ease.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
          scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his cock slips in and out of you with ease.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
              scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But with your pussy squeezing tight around his thick cock, the added lubrication is more than welcome and his manhood slips in and out of you with ease.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
              scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his thick cock slips in and out of you with ease.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              if (((s as any).pcs_vag ?? 0) <= 15) {
                // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his dick is so long that it barely fits inside you, so the added lubrication is more than welcome.`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his lengthy cock slips in and out of you with ease.`);
              }
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                if (((s as any).pcs_vag ?? 0) <= 15) {
                  // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                  scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But you still gasp with every thrust, his huge cock filling you completely with every thrust, so the added lubrication is more than welcome.`);
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                  scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But you still gasp with every thrust, his huge cock filling you up with every thrust, so the added lubrication is more than welcome.`);
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).pcs_vag ?? 0) <= 15) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                    scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But you still gasp with every thrust, his enormous cock filling you up and straining tight inside your pussy with every thrust, so the added lubrication is more than welcome.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                    scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But you still gasp with every thrust, his huge cock filling you up with every thrust, so the added lubrication is more than welcome.`);
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    if (((s as any).pcs_vag ?? 0) <= 20) {
                      // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                      scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his cock is so long that he can't even get the full length in while still bumping against your cervix with every thrust, so the added lubrication is more than welcome.`);
                    } else {
                      // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                      scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his cock is so long that he bumps against your cervix with every thrust, so the added lubrication is more than welcome.`);
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      if (((s as any).pcs_vag ?? 0) <= 25) {
                        // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                        scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Loud squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his gigantic cock is so big that he struggles to fit his full girth inside you with every thrust, so the added lubrication is more than welcome.`);
                      } else {
                        // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                        scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Loud squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his gigantic cock is so big that he fills you to the brim with every thrust, so the added lubrication is more than welcome.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        if (((s as any).pcs_vag ?? 0) <= 10) {
                          // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                          scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Loud squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his monstrous cock is so big that he nearly splits you in half with every thrust, so the added lubrication is more than welcome.`);
                        } else {
                          if (((s as any).pcs_vag ?? 0) <= 25) {
                            // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                            scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Loud squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his monstrous cock is so big that it stretches you all the way from your labia to your cervix, so the added lubrication is more than welcome.`);
                          } else {
                            // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                            scene.text(`${((s as any).npcdesc || '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Loud squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his monstrous cock is so big that even your experienced pussy is stretched with every thrust, so the added lubrication is more than welcome.`);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss1StartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> pumps his tiny dick in and out of you slowly, focusing more on tech...
    scene.text(`${((s as any).npcdesc || '')} pumps his tiny dick in and out of you slowly, focusing more on technique than speed, driving as deep inside you as he can with every thrust (which admittedly isn't very far).`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> pumps his chodey dick in and out of you slowly, focusing more on te...
      scene.text(`${((s as any).npcdesc || '')} pumps his chodey dick in and out of you slowly, focusing more on technique than speed and driving as deep inside you as he can with every thrust (which mostly serves to stretch your pussy's lips).`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> pumps his skinny dick in and out of you slowly, focusing more on te...
        scene.text(`${((s as any).npcdesc || '')} pumps his skinny dick in and out of you slowly, focusing more on technique than speed, driving as deep inside you as he can with every thrust.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> pumps his cock in and out of you slowly, focusing more on technique...
          scene.text(`${((s as any).npcdesc || '')} pumps his cock in and out of you slowly, focusing more on technique than speed, driving as deep inside you as he can with every thrust.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              // TODO-QSP: dynamic text: <<$npcdesc>> pumps his thick cock in and out of you slowly, focusing more on tec...
              scene.text(`${((s as any).npcdesc || '')} pumps his thick cock in and out of you slowly, focusing more on technique than speed. He drives as deep inside you, straining tight against the walls of your snug pussy with every thrust.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> pumps his cock in and out of you slowly, focusing more on technique...
              scene.text(`${((s as any).npcdesc || '')} pumps his cock in and out of you slowly, focusing more on technique than speed. He drives as deep inside you as he can, pleasantly filling you with every thrust.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              if (((s as any).pcs_vag ?? 0) <= 15) {
                // TODO-QSP: dynamic text: <<$npcdesc>> pumps his long cock in and out of you slowly, focusing more on tech...
                scene.text(`${((s as any).npcdesc || '')} pumps his long cock in and out of you slowly, focusing more on technique than speed. He drives deep inside you, barely managing to fit his entire length inside you with every thrust.`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> pumps his long cock in and out of you slowly, focusing more on tech...
                scene.text(`${((s as any).npcdesc || '')} pumps his long cock in and out of you slowly, focusing more on technique than speed. He drives deep inside you and his lengthy manhood comfortably fills you with every thrust.`);
              }
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                if (((s as any).pcs_vag ?? 0) <= 15) {
                  // TODO-QSP: dynamic text: <<$npcdesc>> pumps his huge cock in and out of you slowly, focusing more on tech...
                  scene.text(`${((s as any).npcdesc || '')} pumps his huge cock in and out of you slowly, focusing more on technique than speed. It fills you completely and then some, straining tight against the walls of your snug pussy with every thrust.`);
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> pumps his cock in and out of you slowly, focusing more on technique...
                  scene.text(`${((s as any).npcdesc || '')} pumps his cock in and out of you slowly, focusing more on technique than speed. He drives as deep inside you as he can, filling you completely with every thrust.`);
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).pcs_vag ?? 0) <= 15) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> pumps his cock in and out of you slowly, focusing more on technique...
                    scene.text(`${((s as any).npcdesc || '')} pumps his cock in and out of you slowly, focusing more on technique than speed. It fills you completely and then some, causing you to gasp with every thrust as its enormous length and girth stretch your snug pussy to the limits.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> pumps his cock in and out of you slowly, focusing more on technique...
                    scene.text(`${((s as any).npcdesc || '')} pumps his cock in and out of you slowly, focusing more on technique than speed. It fills you completely and then some, causing you to gasp with every thrust as its enormous length and girth strain against the walls of your pussy.`);
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    if (((s as any).pcs_vag ?? 0) <= 20) {
                      // TODO-QSP: dynamic text: <<$npcdesc>> pumps his lengthy cock in and out of you slowly, focusing more on t...
                      scene.text(`${((s as any).npcdesc || '')} pumps his lengthy cock in and out of you slowly, focusing more on technique than speed. He drives deep inside you, so far that it bumps against your cervix with every thrust and still has shaft to spare that he can't fit inside you.`);
                    } else {
                      // TODO-QSP: dynamic text: <<$npcdesc>> pumps his lengthy cock in and out of you slowly, focusing more on t...
                      scene.text(`${((s as any).npcdesc || '')} pumps his lengthy cock in and out of you slowly, focusing more on technique than speed. He drives deep inside you, so far that it bumps against your cervix with every thrust and still has shaft to spare that he can't fit inside you.`);
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      if (((s as any).pcs_vag ?? 0) <= 15) {
                        // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly with his gigantic cock. Calling it a tight fit wou...
                        scene.text(`${((s as any).npcdesc || '')} fucks you slowly with his gigantic cock. Calling it a tight fit would be putting it lightly as he struggles to fit himself inside you and his manhood both bumps against your cervix and strains against your walls with every thrust.`);
                      } else {
                        if (((s as any).pcs_vag ?? 0) <= 25) {
                          // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly with his gigantic cock. You're obviously no virgin...
                          scene.text(`${((s as any).npcdesc || '')} fucks you slowly with his gigantic cock. You're obviously no virgin, but he still struggles to fit himself inside you and his manhood both bumps against your cervix and strains against your walls with every thrust.`);
                        } else {
                          // TODO-QSP: dynamic text: <<$npcdesc>> pumps his lengthy cock in and out of you slowly, focusing more on t...
                          scene.text(`${((s as any).npcdesc || '')} pumps his lengthy cock in and out of you slowly, focusing more on technique than speed. He drives deep inside you, so far that it bumps against your cervix with every thrust and still has shaft to spare that he can't fit inside you.`);
                        }
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        if (((s as any).pcs_vag ?? 0) <= 10) {
                          // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly with his monstrous cock. The size difference is al...
                          scene.text(`${((s as any).npcdesc || '')} fucks you slowly with his monstrous cock. The size difference is almost comical as his manhood strains against both your pussy's depths and flexibility, nearly splitting you in half with every thrust.`);
                        } else {
                          if (((s as any).pcs_vag ?? 0) <= 25) {
                            // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly with his gigantic cock. You're obviously no virgin...
                            scene.text(`${((s as any).npcdesc || '')} fucks you slowly with his gigantic cock. You're obviously no virgin, but his manhood barely fits inside you, it's like fucking a baseball bat.`);
                          } else {
                            // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly, focusing more on technique than speed. He drives ...
                            scene.text(`${((s as any).npcdesc || '')} fucks you slowly, focusing more on technique than speed. He drives deep inside you, and his monstrous cock is so big that even your experienced pussy is stretched with every thrust.`);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss1BoyTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.text('<i>"Hn-! Hn-! Hn-! Hn-!"</i>');
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('<i>"Mmph! Mmph! Mmph! Nnph!"</i>');
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        if ((Math.floor(Math.random() * 3) + 1) === 1) {
          if (((s as any).pcs_vag ?? 0) <= 15) {
            scene.text('"Oh fuck~! Your pussy\'s so tight~!"');
          } else {
            if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
              scene.text('"You\'re pussy\'s pretty loose huh?"');
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
            } else {
              if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text('"<i>Hnn~!</i> You like that? <i>Hnn~!</i> You like that?"');
              } else {
                if (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                } else {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                }
              }
            }
          } else {
            if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
            } else {
              if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text('"<i>Hnn~!</i> Yeah... <i>Hnn~!</i> Take that cock..."');
              } else {
                if (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                } else {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                }
              }
            }
          }
        }
      } else {
        if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          scene.text('<i><b>"HNGH-! HNGH-! HNGH-! HNGH-!"</b></i>');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss1BoyTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> barely makes a sound as he thrusts into you. You can't even hear hi...
    scene.text(`${((s as any).npcdesc || '')} barely makes a sound as he thrusts into you. You can't even hear his breathing over the slap of your bodies colliding.`);
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grunts softly, panting as he thrusts into you.
      scene.text(`${((s as any).npcdesc || '')} grunts softly, panting as he thrusts into you.`);
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        // TODO-QSP: dynamic text: <<$npcdesc>> murmurs his words softly as he thrusts into you from on top.
        scene.text(`${((s as any).npcdesc || '')} murmurs his words softly as he thrusts into you from on top.`);
      } else {
        if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          // TODO-QSP: dynamic text: Despite the slow pace being maintained, <<$npcdesc>> is braying erratically like...
          scene.text(`Despite the slow pace being maintained, ${((s as any).npcdesc || '')} is braying erratically like a donkey.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss1EnjoyDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. His dick ...
    scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. His dick may be laughably small, but he knows how to use it and your hips buck every time he draws his away.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. He may ha...
      scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. He may have a chode, but he knows how to use its girth well, and your hips buck every time he draws his away.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. You love ...
        scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. You love how easily his cock slips in and out of you, the slippery wetness heightened by his skinny dick, and your hips buck every time he draws his away.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. You love ...
          scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. You love the way he moves his cock, how it makes you feel <i>full</i> when he's inside you, and your hips buck every time he draws his away.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. You love ...
              scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. You love the way his cock stretches you out, how tightly your pussy grips it, and your hips buck every time he draws his away.`);
            } else {
              // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. You love ...
              scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. You love the way he moves, the thickness of his cock, how <i>full</i> it makes you feel, and your hips buck every time he draws his away.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              if (((s as any).pcs_vag ?? 0) <= 15) {
                // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. You love ...
                scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. You love his cock slipping in and out of you, the ease at which he can slide his extensive length nearly to its base, and your hips buck every time he draws his away.`);
              } else {
                // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. You love ...
                scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. You love his cock slipping in and out of you, the ease at which he can slide his extensive length all the way to its base, and your hips buck every time he draws his away.`);
              }
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                if (((s as any).pcs_vag ?? 0) <= 15) {
                  // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. You love ...
                  scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. You love the way his cock stretches you out, how deep it goes inside you, how tightly your pussy grips it, and your hips buck every time he draws his away.`);
                } else {
                  // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. You love ...
                  scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. You love the way he moves, the great length and thickness of his cock <i>filling</i> you, and your hips buck every time he draws his away.`);
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).pcs_vag ?? 0) <= 15) {
                    // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, gasping with every thrust. His enormous cock is d...
                    scene.text(`You moan beneath ${((s as any).npcdesc || '')}, gasping with every thrust. His enormous cock is driving you insane, filling you until it hurts, trapping you in the place between pain and pleasure, before leaving you feeling empty and vacant as it withdraws. Your hips buck every time he pulls away, begging to be impaled by it once again.`);
                  } else {
                    // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. His enorm...
                    scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. His enormous cock <i>fills</i> you to bursting and your hips buck every time he draws his away.`);
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    if (((s as any).pcs_vag ?? 0) <= 20) {
                      // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, gasping with every thrust as the tip of his lengt...
                      scene.text(`You moan beneath ${((s as any).npcdesc || '')}, gasping with every thrust as the tip of his lengthy cock touches your most secret place. You love his cock slipping in and out of you, the way he pushes for greater depths that your pussy just can't give and you grind your hips against him, trying to push it even deeper.`);
                    } else {
                      // TODO-QSP: dynamic text: You moan beneath <<$npcdesc>>, your breath hitching with every thrust. You love ...
                      scene.text(`You moan beneath ${((s as any).npcdesc || '')}, your breath hitching with every thrust. You love his cock slipping in and out of you, the deep impact inside you bringing out a pain that feels more like ecstasy.`);
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      if (((s as any).pcs_vag ?? 0) <= 25) {
                        // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>>, getting wetter with every thrust. His gigantic c...
                        scene.text(`You groan beneath ${((s as any).npcdesc || '')}, getting wetter with every thrust. His gigantic cock fills you to the brim and then some, pummelling your insides with his sheer size in the most pleasurably painful way possible.`);
                      } else {
                        // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>>, getting wetter with every thrust. His gigantic c...
                        scene.text(`You groan beneath ${((s as any).npcdesc || '')}, getting wetter with every thrust. His gigantic cock fills you to the brim, pummelling your insides with his sheer size in the most pleasurably painful way possible.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        if (((s as any).pcs_vag ?? 0) <= 25) {
                          // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>>, getting wetter with every thrust. His monster co...
                          scene.text(`You groan beneath ${((s as any).npcdesc || '')}, getting wetter with every thrust. His monster cock fills is way too big for you in both girth and length, pummelling your insides and stretching your pussy to the point of pain, and you are <i><b>loving every second of it.</b></i>`);
                        } else {
                          // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>>, getting wetter with every thrust. His monster co...
                          scene.text(`You groan beneath ${((s as any).npcdesc || '')}, getting wetter with every thrust. His monster cock is destroying your pussy with size alone, smashing into your cunt like the most gentle jackhammer in the world. But it doesn't feel bad. Far from it. The pain is euphoric and you can't get enough of his cock.`);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss1_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently with his small dick. The result...
    scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently with his small dick. The result is gratifying, allowing you to feel more of his meager length, no longer lost in the pounding of your hips together.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently with his small dick. The result...
      scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently with his small dick. The result is gratifying, allowing you to savour the way his thick chode stretches your pussy, rather than getting lost in constant pounding.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently with his skinny dick. The resul...
        scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently with his skinny dick. The result is gratifying, allowing you concentrate on his length instead of slipping in and out of you like a hotdog in a hallway.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently with his dick. At the reduced p...
          scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently with his dick. At the reduced pace, you can feel every contour of him inside you, and you moan with every thrust.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently. It immediately feels much bett...
              scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently. It immediately feels much better and allows your snug pussy to enjoy the thick girth of his cock instead of being hurt by it.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently with his dick. At the reduced p...
              scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently with his dick. At the reduced pace, you better savour the nice thickness of his cock, breathing in deep pleasure with every thrust.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently. It immediately feels better an...
              scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently. It immediately feels better and you enjoy his sizeable length now that it's less "punchy".`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                if (((s as any).pcs_vag ?? 0) <= 15) {
                  // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently. Relief and pleasure wash throu...
                  scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently. Relief and pleasure wash through you, his dick no longer feeling quite so "punchy" inside you, and your snug pussy grips his huge cock with wet desire.`);
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently. Relief and pleasure wash throu...
                  scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently. Relief and pleasure wash through you, his dick no longer feeling quite so "punchy" inside you, and your pussy swallows up his huge cock with wet desire.`);
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).pcs_vag ?? 0) <= 15) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently. Relief and pleasure wash throu...
                    scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently. Relief and pleasure wash through you, his dick no longer feeling quite so "punchy" inside you, and your snug pussy grips the enormous length and girth of his cock with wet desire.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently. Relief and pleasure wash throu...
                    scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently. Relief and pleasure wash through you, his dick no longer feeling quite so "punchy" inside you, and your pussy swallows up the enormous length and girth of his cock with wet desire.`);
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently. It immediately feels better an...
                    scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently. It immediately feels better and you are able to fully enjoy his incredible length now that it's less "punchy-stabby".`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently. Relief and pleasure wash throu...
                      scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently. Relief and pleasure wash through you, his gigantic cock no longer smashing your insides and your pussy swallows up his great size wet desire.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently. Relief and pleasure wash throu...
                        scene.text(`${((s as any).npcdesc || '')} slows down, fucking you more gently. Relief and pleasure wash through you, his monstrous cock no longer destroying your insides and your pussy swallows up his incredible length and girth wet desire.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss1_2MoanDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his tiny cock between your leg...
    scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his tiny cock between your legs. Slowly. Gently. His manhood moves perfectly inside you, hitting the perfect spots with it's short length. Your breath hitches with every thrust and it feels wonderful.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his short cock between your le...
      scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his short cock between your legs. Slowly. Gently. His manhood moves perfectly inside you, somehow stretching you out in just the right ways with its wide girth. Your breath hitches with every thrust and it feels wonderful.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his skinny cock between your l...
        scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his skinny cock between your legs. Slowly. Gently. His manhood moves perfectly inside you rubbing right up against your g-spot. Your breath hitches with every thrust and it feels wonderful.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his cock between your legs. Sl...
          scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his cock between your legs. Slowly. Gently. His manhood fits you perfectly, filling you up just right. Your breath hitches with every thrust and it feels wonderful.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his thick cock between your le...
              scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his thick cock between your legs. Slowly. Gently. Stretching your tight pussy in all the best ways. Your breath hitches with every thrust and it feels wonderful.`);
            } else {
              // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his thick cock between your le...
              scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his thick cock between your legs. Slowly. Gently. Filling you up with his girth. Your breath hitches with every thrust and it feels wonderful.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his cock between your legs. Sl...
              scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his cock between your legs. Slowly. Gently. It reaches deep inside you, hitting pleasure points you didn't even know could be hit with a dick. Your breath hitches with every thrust and it feels wonderful.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                if (((s as any).pcs_vag ?? 0) <= 15) {
                  // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his huge cock between your leg...
                  scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his huge cock between your legs. Slowly. Gently. Stretching your snug pussy in all the best ways and <i>filling</i> you with it. It's so tight inside you that you literally <i>squeeze</i> pleasure from it and your breath hitches with every thrust.`);
                } else {
                  // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his huge cock between your leg...
                  scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his huge cock between your legs. Slowly. Gently. It <i>fills</i> you time and time again and you can't get enough, your breath hitching with every thrust.`);
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).pcs_vag ?? 0) <= 15) {
                    // TODO-QSP: dynamic text: You groan softly as <<$npcdesc>> continues to pump his enormous cock between you...
                    scene.text(`You groan softly as ${((s as any).npcdesc || '')} continues to pump his enormous cock between your legs. Slowly. Gently. Its magnificent girth threatens to split you in half with every thrust and if it did, you'd die happy.`);
                  } else {
                    // TODO-QSP: dynamic text: You groan softly as <<$npcdesc>> continues to pump his enormous cock between you...
                    scene.text(`You groan softly as ${((s as any).npcdesc || '')} continues to pump his enormous cock between your legs. Slowly. Gently. It pummels you with its magnificent girth, filling up every single corner of your pussy with every single thrust.`);
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his cock between your legs. Sl...
                    scene.text(`You moan softly as ${((s as any).npcdesc || '')} continues to pump his cock between your legs. Slowly. Gently. It reaches deep inside you with its exceptional length, sending shocks of pleasurable pain through your uterus with every collision.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You groan softly as <<$npcdesc>> continues to pump his gigantic cock between you...
                      scene.text(`You groan softly as ${((s as any).npcdesc || '')} continues to pump his gigantic cock between your legs. Slowly. Gently. Its exceptional length reaches deep inside you, sending shocks of pleasurable pain through your uterus even as your pussy clenches hard around its thick shaft.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You groan as <<$npcdesc>> continues to pump his monstrous cock between your legs...
                        scene.text(`You groan as ${((s as any).npcdesc || '')} continues to pump his monstrous cock between your legs. It threatens to split you in half its oversized girth while simultaneously attempting to impale you like a heretic slut, his cock the spear of your execution. If it did, you'd die happy. Agony has never felt so good.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss1_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['dirty_talk_count'] = ((s as any).sex_ev['dirty_talk_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Fuck~!" you pant. "Your cock is so fucking hard inside me~! Oh fu...
    } else {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Fuck~! Yes~! Just like that~!" you moan. "Fuck me with your tiny ...
        } else {
          if (((s as any).dick_desc ?? 0) === 'chode') {
            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Fuck~! Yes~! Just like that~!" you moan. "Don''t stop! Fuck me wi...
          } else {
            if (((s as any).dick_desc ?? 0) === 'skinny') {
              // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Fuck~! Yes~! Just like that~!" you moan. "Fuck me with your skinn...
            } else {
              if (((s as any).dick_desc ?? 0) === 'normal') {
                // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Fuck~! Yes~! Just like that~!" you moan. "Nngh~! So good~!"', '"A...
              } else {
                if (((s as any).dick_desc ?? 0) === 'thick') {
                  // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Oh fuck~! You''re so <i>thick</i>!" you moan. "Ungh~! Fuck me wit...
                } else {
                  if (((s as any).dick_desc ?? 0) === 'long') {
                    // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! Fuck~! You''re so deep~!" you groan. "Nngh~! Right there! ...
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'huge') {
                      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ahh~! Yes~! Just like that~!" you groan. "Ungh~! Fuck me with you...
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'enormous') {
                        // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! You''re cock is <i>enormous</i>~!" you groan. "Ahhn~! It''...
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'lengthy') {
                          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~!" you groan, your voice a hoarse with arousal. "Oh <i>fuck!...
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'gigantic') {
                            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! <i>Fuck!</i>" you groan, your voice a hoarse with arousal....
                          } else {
                            if (((s as any).dick_desc ?? 0) === 'monstrous') {
                              // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! <i>Fuck!</i>" you groan, your voice a hoarse with arousal....
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Haa~! Ahh~!" you moan. "I''m addicted to your tiny dick!"', '"Haa...
        } else {
          if (((s as any).dick_desc ?? 0) === 'chode') {
            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah~! Your cock feels so good!" you moan. "Don''t stop! Fuck me wi...
          } else {
            if (((s as any).dick_desc ?? 0) === 'skinny') {
              // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah~! Your cock feels so good!" you moan.', '"Ah~! Your cock feels...
            } else {
              if (((s as any).dick_desc ?? 0) === 'normal') {
                // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah~! I fucking love your cock~!" you moan. "Iloveit!Iloveit!Ilove...
              } else {
                if (((s as any).dick_desc ?? 0) === 'thick') {
                  // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah~! You''re so big!" you moan. "Ungh~! You''re stretching me out...
                } else {
                  if (((s as any).dick_desc ?? 0) === 'long') {
                    // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~!" you groan. "You''re so deep! Nngh~! Right there! Right th...
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'huge') {
                      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~!" you groan. "Your cock is so <i>big</i>! You''re so huge!"...
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'enormous') {
                        // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~!" you groan. "I love your <i>big fucking cock</i>~! Nngh~! ...
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'lengthy') {
                          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! <i>Fuck!</i>" you groan, your voice a hoarse with arousal....
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'gigantic') {
                            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! <i>Fuck!</i>" you groan, your voice a hoarse with arousal....
                          } else {
                            if (((s as any).dick_desc ?? 0) === 'monstrous') {
                              // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! <i>Fuck!</i>" you groan, your voice a hoarse with arousal....
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'arousal') {
      if (((s as any).pcs_horny ?? 0) >= 70) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! Yes~! Fuck~!" you moan softly, barely louder than a whispe...
        } else {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Oh <i>fuck</i>~! OhshitImgonnacum~!" you moan. "I''m gonna cum~!"...
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! I''m <i>so</i> wet..." you mew softly. "You feel so good i...
        } else {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah~! That feels <i>so good</i>," you moan quietly. "I''m gonna go...
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'technique') {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Yes~! Just like that~!" you moan. "You''re so good~! Don''t stop~...
        } else {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Right there~! Right there~!" you moan hoarsely. "Keep going~!"', ...
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'dirty_girl') {
          if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Who's pussy is this?" <<$npcdesc>> growls as he moves his cock inside you with ...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc || '')} growls as he moves his cock inside you with tantalizing slowness.`);
            scene.text('"Yours~!" you whimper, squirming beneath him.');
          } else {
            if (((s as any).pcs_horny ?? 0) >= 70) {
              if ((Math.floor(Math.random() * 1) + 1) === 1) {
                scene.text('"Yes~! Fuck my sloppy pussy~!" you moan softly, barely louder than a whisper. "Make this dirty little slut cum all over your cock~!"');
              } else {
                scene.text('"Oh shit~! Imgonnacum~!" you moan. "You\'re gonna make this filthy whore cum~!"');
              }
            } else {
              if ((Math.floor(Math.random() * 2) + 0) === 1) {
                scene.text('"Ungh~! Fuck my dirty cunt~!" you mew softly. "Fuck me like the filthy whore I am~!"');
              } else {
                scene.text('"Make this pussy yours~!" you moan. "Own this pussy with your cock~!"');
              }
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cheating_bf') {
            if (((s as any).pcs_horny ?? 0) >= 70) {
              if ((Math.floor(Math.random() * 1) + 1) === 1) {
                scene.text('"Yes~! Yes~!" you moan softly, barely louder than a whisper. "Fuck this cheating whore\'s pussy~! Make my cunt crave another cock~!"');
              } else {
                scene.text('"Oh fuck~! Oh fuck~! I\'m gonna cum~!" you moan. "My boyfriend never makes me cum like this~!"');
              }
            } else {
              if ((Math.floor(Math.random() * 2) + 0) === 1) {
                scene.text('"Fuck~! You\'re so much better than my boyfriend~!" you mew softly. "You feel so good inside me~!"');
              } else {
                scene.text('"Ah~! That feels <i>so good</i>," you moan quietly. "I\'m gonna go crazy~!"');
              }
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cheating_gf') {
              if (((s as any).pcs_horny ?? 0) >= 70) {
                if ((Math.floor(Math.random() * 1) + 1) === 1) {
                  scene.text('"Yes~! ~!" you moan softly, barely louder than a whisper. "Make this dirty little slut cum all over your cock~!"');
                } else {
                  scene.text('"Oh fuck~! Oh fuck~! I\'m gonna cum~!" you moan. "~!"');
                }
              } else {
                if ((Math.floor(Math.random() * 2) + 0) === 1) {
                  scene.text('"Ungh~! I\'m <i>so</i> wet..." you mew softly. "Make this lesbian slut crave your cock~!"');
                } else {
                  scene.text('"Ah~! That feels <i>so good</i>," you moan quietly. "I\'m gonna go crazy~!"');
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] > 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['dirty_talk_count'] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss1_2SensationDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    scene.text('His cock, though small, rubbing directly against your g-spot, massaging the aching need of your pussy. Your wetness spreading, heat radiating from your sex and from his. You breathe deeply as you sink further and further into the feelings of your own arousal.');
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      scene.text('His cock, small but thick, stretching your lips and rubbing directly against your g-spot, massaging the aching need of your pussy. Your wetness spreading, heat radiating from your sex and from his. You breathe deeply as you sink further and further into the feelings of your own arousal.');
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        scene.text('His skinny cock slipping in and out of your pussy with tantalizing ease, inflaming the aching need of your pussy. Your wetness spreading, heat radiating from your sex and from his. You breathe deeply as you sink further and further into the feelings of your own arousal.');
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          scene.text('His cock, thrusting deep inside you, perfectly filling you. His weight on top of you, pushing into your pussy, literally pounding pleasure from it. Your wetness spreading, heat radiating from your sex and from his. You breathe deeply as you sink further and further into the feelings of your own arousal.');
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            scene.text('His thick cock, thrusting deep inside you, stretching your walls till <i>just</i> before the point of pain, but bullseye on the point of pleasure. His weight on top of you, pushing into your pussy, literally pounding pleasure from it. Your wetness spreading, heat radiating from your sex and from his. You breathe deeply as you sink further and further into the feelings of your own arousal.');
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              scene.text('His skinny cock slipping in and out of your pussy with tantalizing ease. His weight on top of you, bumping your cervix in a way that makes you ache for more. Your wetness spreading, heat radiating from your sex and from his. You breathe deeply as you sink further and further into the feelings of your own arousal.');
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                scene.text('His huge cock, thrusting deep, filling you up and more, bumping your cervix in a way that only causes you to ache for more of him inside you. Your wetness spreading, heat radiating from your sex and from his. You breathe deeply as you sink further and further into the feelings of your own arousal.');
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  scene.text('His enormous cock, thrusting deep, filling you up and more, stretching your pussy to its limits. His weight on top of you, bumping your cervix in a way that only causes you to ache for more of him inside you. Your wetness spreading, heat radiating from your sex and from his. You breathe deeply as you sink further and further into the feelings of your own arousal.');
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    scene.text('His lengthy cock slipping in and out of your pussy with tantalizing ease. His weight on top of you, pummelling your cervix to send both ecstatic pain through your entire body. Your wetness spreading, heat radiating from your sex and from his, <i>aching</i> for more. You breathe deeply as you sink further and further into the feelings of your own arousal.');
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      scene.text('His gigantic cock, thrusting deep, filling you up and stretching you past your limits. His weight on top of you, forcing his overwhelming size to pummel your cervix with painful pleasure. Tears blurring your eyes as your sloppy wet cunt <i>aches</i> for more of him inside you. You breathe deeply as you sink further and further into the feelings of your own arousal.');
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        scene.text('His monstrous cock, piercing you to your very core and threatening to split you in half with every thrust. His weight on top of you, pummelling you with his overwhelming size and girth. Your pussy on fire with pain and overflowing with pleasure. You breathe deeply as you sink further and further into the insanity of something that hurts so badly but feels so good at the same time.');
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss2StartPeriodDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
    scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your period leaking around his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
      scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your period squelching around his thick chode.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
        scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your period leaking from your pussy around his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
          scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with yours and his cock plunges into your pussy, a little wetter sounding than usual on account of your period.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
            scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with yours, the sloppy squelching sounds of your period being forced from your pussy by his thick shaft.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
              scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his long dick hammers deep inside you. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your period squelching around his long shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick hammers deep inside you. Wet slaps echo around the room as his hips collide with yours, the huge size of his cock forcing squelches from your bleeding cunt.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                  scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick fills you to the brim. Wet slaps echo around the room as his hips collide with yours, his enormous cock leaving room for nothing else, forcing the blood from your menstruating snatch.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                    scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick batters your insides with its exceptional length. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your period squelching around his lengthy shaft.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                      scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick fills you to the brim. Sloppy wet slaps echo around the room as ${((s as any).npcdesc || '')} batters your bleeding pussy with his gigantic cock.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                        scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your pussy to strain and stretch around his long, girthy shaft. Sloppy wet slaps echo around the room as ${((s as any).npcdesc || '')} repeatedly batters your bleeding pussy with his monstrous cock.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss2StartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
    scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with yours, unceasingly thrusting into you with his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
      scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with yours, unceasingly thrusting into you with his thick chode.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
        scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with yours, unceasingly thrusting into you with his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
          scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room with every thrust and he drives his cock deep as deep as he can every time.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
            scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with yours, the sloppy squelching sounds of your pussy fucked by his thick shaft.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
              scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his long dick hammers deep inside you. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your pussy squelching around his long shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick hammers deep inside you. Wet slaps echo around the room as his hips collide with yours, the huge size of his cock forcing squelches from your cunt.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                  scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his enormous dick fills you to the brim. Wet slaps echo around the room as his hips collide with yours, forcing loud squelches from your snatch with his long girthy cock.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                    scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick batters your insides with its exceptional length. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your pussy squelching around his lengthy shaft.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                      scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his gigantic dick fills you to the brim. Sloppy wet slaps echo around the room as ${((s as any).npcdesc || '')} batters your pussy with his long hard cock.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                        scene.text(`${((s as any).npcdesc || '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your pussy to strain and stretch around his long, girthy shaft. Sloppy wet slaps echo around the room as ${((s as any).npcdesc || '')} repeatedly batters your pussy with his monstrous cock.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss2BoyTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.text('<i>"Hn-! Hn-! Hn-! Hn-!"</i>');
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('<i>"Mmph! Mmph! Mmph! Nnph!"</i>');
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        if ((Math.floor(Math.random() * 3) + 1) === 1) {
          if (((s as any).pcs_vag ?? 0) <= 15) {
            scene.text('"Oh fuck~! You\'re so tight~!"');
          } else {
            if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
              scene.text('"You\'re pussy\'s pretty loose huh?"');
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
            } else {
              if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text('"<i>Hnn~!</i> You like that? <i>Hnn~!</i> You like that?"');
              } else {
                if (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                } else {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                }
              }
            }
          } else {
            if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"<i>Fuck~!</i> Your pussy feels so good~!</i>"');
            } else {
              if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text('"<i>Hnn~!</i> Yeah... <i>Hnn~!</i> Take that cock..."');
              } else {
                if (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                } else {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                }
              }
            }
          }
        }
      } else {
        if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          scene.text('<i><b>"HNGH-! HNGH-! HNGH-! HNGH-!"</b></i>');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss2BoyTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> barely makes a sound as he thrusts into you. You can't even hear hi...
    scene.text(`${((s as any).npcdesc || '')} barely makes a sound as he thrusts into you. You can't even hear his breathing over the slap of your bodies colliding.`);
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grunts softly, panting as he thrusts into you.
      scene.text(`${((s as any).npcdesc || '')} grunts softly, panting as he thrusts into you.`);
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        // TODO-QSP: dynamic text: <<$npcdesc>> murmurs his words softly as he thrusts into you from on top.
        scene.text(`${((s as any).npcdesc || '')} murmurs his words softly as he thrusts into you from on top.`);
      } else {
        if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          // TODO-QSP: dynamic text: Despite the slow pace being maintained, <<$npcdesc>> is braying erratically like...
          scene.text(`Despite the slow pace being maintained, ${((s as any).npcdesc || '')} is braying erratically like a donkey.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss2EnjoyDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you, w...
    scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you, with just enough force that shocks of pleasure reverberate through your entire body, more than making up for his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you, w...
      scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you, with just enough force that uses his thick chode to his advantage, stretching your lips and sending shocks of pleasure through your entire body.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you, w...
        scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you, with just enough force that uses his skinny dick to his advantage, reaching spots deep inside you and sending shocks of pleasure through your entire body.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you, w...
          scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you, with just the right amount of force that every thrust reverberates through your entire body, but not so hard it hurts.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you, w...
            scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you, with just enough force that sends shocks of pleasure through your entire body while still allowing you to enjoy the exceptional thickness of his shaft inside you.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you, w...
              scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you, with just enough force that sends shocks of pleasure through your entire body, pleasantly pounding your insides with his long cock.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you, s...
                scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you, sending shocks of pleasure through your entire body with his huge cock.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you an...
                  scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you and the way his enormous cock fills you from labia to cervix, stretching you out with his sizeable girth the whole way.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you an...
                    scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you and the way his exceptionally lengthy cock bounces off your cervix, a strangely pleasurable soreness building with every collision.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you an...
                      scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you and the way his gigantic cock fills you up and bounces off your cervix, eyes watering as a strangely pleasurable soreness builds inside you with every collision.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you an...
                        scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you and the way his monstrous cock threatens to tear you in half and impale you with every thrust, agony and pleasure mixing in the most intoxicating of ways.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss2_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'miss1') {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
      scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as ${((s as any).npcdesc || '')}'s hips crash into yours, unceasingly thrusting into you with his tiny dick. Wet slapping sounds fill the room and you can't help but giggle at how good it feels.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
        scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as ${((s as any).npcdesc || '')}'s hips crash into yours, unceasingly thrusting into you with his thick chode.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
          scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as ${((s as any).npcdesc || '')}'s hips crash into yours, unceasingly thrusting into you with his skinny dick.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
            scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room with every thrust and ${((s as any).npcdesc || '')} drives his cock deep as deep as he can every time.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
              scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as ${((s as any).npcdesc || '')}'s hips crash into yours, the sloppy squelching sounds of your pussy fucked by his thick shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
                scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc || '')}'s long dick hammers deep inside you. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your pussy squelching around his long shaft.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
                  scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc || '')}'s dick hammers deep inside you. Wet slaps echo around the room as his hips collide with yours, the huge size of his cock forcing squelches from your cunt.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
                    scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc || '')}'s enormous dick fills you to the brim. Wet slaps echo around the room as his hips collide with yours, forcing loud squelches from your snatch with his long girthy cock.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
                      scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and his dick batters your insides with its exceptional length. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your pussy squelching around ${((s as any).npcdesc || '')}'s lengthy shaft.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
                        scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and his gigantic dick fills you to the brim. Sloppy wet slaps echo around the room as ${((s as any).npcdesc || '')} batters your pussy with his long hard cock.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It's h...
                          scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your pussy to strain and stretch around his long, girthy shaft. Sloppy wet slaps echo around the room as ${((s as any).npcdesc || '')} repeatedly batters your pussy with his monstrous cock.`);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'miss3') {
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
        scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as ${((s as any).npcdesc || '')}'s hips crash into yours, unceasingly thrusting into you with his tiny dick. Wet slapping sounds fill the room and you can't help but giggle at how good it feels.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
          scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as ${((s as any).npcdesc || '')}'s hips crash into yours, unceasingly thrusting into you with his thick chode.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
            scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as ${((s as any).npcdesc || '')}'s hips crash into yours, unceasingly thrusting into you with his skinny dick.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
              scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room with every thrust and ${((s as any).npcdesc || '')} drives his cock deep as deep as he can every time.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as ${((s as any).npcdesc || '')}'s hips crash into yours, the sloppy squelching sounds of your pussy fucked by his thick shaft.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                  scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc || '')}'s long dick hammers deep inside you. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your pussy squelching around his long shaft.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                    scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc || '')}'s dick hammers deep inside you. Wet slaps echo around the room as his hips collide with yours, the huge size of his cock forcing squelches from your cunt.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                      scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc || '')}'s enormous dick fills you to the brim. Wet slaps echo around the room as his hips collide with yours, forcing loud squelches from your snatch with his long girthy cock.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                        scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and his dick batters your insides with its exceptional length. Wet slaps echo around the room as his hips collide with yours, the sloppy sounds of your pussy squelching around ${((s as any).npcdesc || '')}'s lengthy shaft.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                          scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and his gigantic dick fills you to the brim. Sloppy wet slaps echo around the room as ${((s as any).npcdesc || '')} batters your pussy with his long hard cock.`);
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                            scene.text(`${((s as any).npcdesc || '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your pussy to strain and stretch around his long, girthy shaft. Sloppy wet slaps echo around the room as ${((s as any).npcdesc || '')} repeatedly batters your pussy with his monstrous cock.`);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss2_2MoanDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan_describe'] = 'softly';
  } else {
    if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan_describe'] = 'loudly';
    }
  }
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You moan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you. His tin...
    scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you. His tiny dick pounds into you with perfect pressure, like a hard finger fucking for your pussy, but better.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You moan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you. His thi...
      scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you. His thick chode pounds into you with perfect pressure, like a hard three-finger fucking for your pussy, but better.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You moan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you, poundin...
        scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you, pounding into you with perfect pressure, his skinny dick massaging your insides wonderfully.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You moan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you, poundin...
          scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you, pounding into you with perfect pressure, his dick filling you up, drawing pleasure from your pussy with every thrust.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You moan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you, poundin...
            scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you, pounding into you with perfect pressure, his thick cock stretching you out, squeezing pleasure from your pussy with every thrust.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You moan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you, poundin...
              scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you, pounding into you with perfect pressure, his long dick hitting spots you didn't know could be reached.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You moan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you, poundin...
                scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you, pounding into you with perfect pressure, his huge dick filling you up and hitting spots inside you that you didn't know could be reached.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You moan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you, poundin...
                  scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you, pounding into you with perfect pressure, his enormous cock stretching you out and hitting the deepest parts of your pussy.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You groan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you, poundi...
                    scene.text(`You groan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you, pounding into you with perfect pressure that sends shocks of pain and pleasure through your insides every time his exceptionally lengthy cock bounces off your cervix.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You groan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you, poundi...
                      scene.text(`You groan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you, pounding into you with perfect pressure that fills you completely and sends shocks of pain and pleasure through your insides every time his gigantic cock bounces off your cervix.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You groan <<$sex_ev['moan_describe']>> as <<$npcdesc>> keeps fucking you, poundi...
                        scene.text(`You groan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc || '')} keeps fucking you, pounding into you with his cock that stretches you in every way imaginable. Your eyes water with tears, joy and pain mixing together into an insatiable desire that begs for more and more of ${((s as any).npcdesc || '')}'s monstrous cock.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss2_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Fuck~!" you pant. "Your cock is so fucking hard inside me~! Oh fu...
    } else {
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck my pussy...
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck my pussy...
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i>" you moan loudly. "Fuck my pussy with your skinn...
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i>" you moan loudly. "You fill me up so perfectly! ...
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                if (((s as any).pcs_vag ?? 0) <= 10) {
                  // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck! You''re...
                } else {
                  // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i> Yes!" you moan loudly. "Fuck! You''re so big! Fu...
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Ungh~! You''r...
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck~! You''r...
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck~! You''r...
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Oh <i>fuck!</...
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Oh <i>fuck!</...
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck me wi...
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'arousal') {
      if (((s as any).pcs_horny ?? 0) >= 70) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! Yes~! Fuck~!" you pant. "You''re gonna make me come~!"', '...
        } else {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Oh fuck~! <i>I''m gonna come~! I''m gonna come~! I''m gonna come~...
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! I''m <i>so</i> wet..." you moan. "You feel so good inside ...
        } else {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"My pussy can''t get enough of you," you moan. "You''re making me ...
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'technique') {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Yes~! Just like that~!" you moan. "You''re so fucking good~! Don'...
        } else {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ah~! You''re so good~!" you moan. "You''re driving me crazy~!"', ...
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'dirty_girl') {
          if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Who's pussy is this?" <<$npcdesc>> growls as he slowly withdraws his cock befor...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc || '')} growls as he slowly withdraws his cock before ramming it hard back into your cunt.`);
            scene.text('"Yours~!" you whimper, squirming beneath him.');
          } else {
            if (((s as any).pcs_horny ?? 0) >= 70) {
              if ((Math.floor(Math.random() * 1) + 1) === 1) {
                scene.text('"Yes~! Fuck my sloppy pussy~!" you moan loudly. "Make this dirty little slut cum all over your cock~!"');
              } else {
                scene.text('"Oh shit~! Imgonnacum~!" you moan. "You\'re gonna make this filthy whore cum~!"');
              }
            } else {
              if ((Math.floor(Math.random() * 2) + 0) === 1) {
                scene.text('"Ungh~! Fuck my dirty cunt~!" you moan loudly. "Fuck me like the filthy whore I am~!"');
              } else {
                scene.text('"Make this pussy yours~!" you moan. "Own this pussy with your cock~!"');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss2_2SensationDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like a perfect massage for your pussy. Your bre...
    scene.text(`${((s as any).npcdesc || '')} pounds your insides like a perfect massage for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')}'s tiny dick slips in and out of it with ease.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like a perfect massage for your pussy. Your bre...
      scene.text(`${((s as any).npcdesc || '')} pounds your insides like a perfect massage for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')}'s fat chode slips in and out of it with ease.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like a perfect massage for your pussy. Your bre...
        scene.text(`${((s as any).npcdesc || '')} pounds your insides like a perfect massage for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')}'s skinny dick slips in and out of it with ease.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like a perfect massage for your pussy. Your bre...
          scene.text(`${((s as any).npcdesc || '')} pounds your insides like a perfect massage for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')}'s dick slips in and out of it with ease.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like a perfect massage for your pussy. Your bre...
            scene.text(`${((s as any).npcdesc || '')} pounds your insides like a perfect massage for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')}'s thick cock slips in and out of it with ease.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like a perfect massage for your pussy. Your bre...
              scene.text(`${((s as any).npcdesc || '')} pounds your insides like a perfect massage for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')}'s long cock penetrates you to your depths with ease.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like a perfect massage for your pussy. Your bre...
                scene.text(`${((s as any).npcdesc || '')} pounds your insides like a perfect massage for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')}'s huge cock penetrates you to your depths with ease, filling you completely with every thrust.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like a perfect massage for your pussy. Your bre...
                  scene.text(`${((s as any).npcdesc || '')} pounds your insides like a perfect massage for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')}'s cock penetrates you to your depths, forcing his enormous length and girth into you on every thrust.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like the most painfully perfect massage for you...
                    scene.text(`${((s as any).npcdesc || '')} pounds your insides like the most painfully perfect massage for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')}'s cock penetrates you to your depths and then some, forcing his enormous length up against your cervix with every thrust.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like the most painfully perfect for your pussy....
                      scene.text(`${((s as any).npcdesc || '')} pounds your insides like the most painfully perfect for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')} fills you up completely and then some, forcing his gigantic cock up against your cervix with every thrust.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> pounds your insides like the most painfully perfect for your pussy....
                        scene.text(`${((s as any).npcdesc || '')} pounds your insides like the most painfully perfect for your pussy. Your breasts jiggle with every thrust, your stiff nipples quiver in the air, and loud squelching emanates from your dripping snatch as ${((s as any).npcdesc || '')}'s monstrous cock practically splits you in half with every thrust, battering your insides in a way that only leaves you aching for more.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3StartPeriodDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
    scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His tiny dick slams into you with such power that you can feel your period spattering across the inside of your thighs.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
      scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His tiny dick slams into you with such power that you can feel your period spattering across the inside of your thighs.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
        scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His skinny dick slams into you with such power that you can feel your period spattering across the inside of your thighs.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
          scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His dick slams into you with such power that you can feel your period spattering across the inside of your thighs.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
            scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His thick cock slams into you with such power that you can feel your period spattering across the inside of your thighs.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
              scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His long cock slams into you with such power that you can feel your period spattering across the inside of your thighs.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
                scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His huge cock slams into you with such power that you can feel your period spattering across the inside of your thighs.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
                  scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His enormous cock slams into you with such power that your pussy is left no room for the blood leaking from your uterus and flecks of red spatter across the sheets.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
                    scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His cock is so long that it slams into your cervix, battering the blood from your uterus and sending flecks of red spatter across the sheets.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
                      scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His gigantic cock is so huge that it slams into your cervix, filling you completely and battering the blood from your uterus, flecks of red sent spattering across the sheets.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
                        scene.text(`${((s as any).npcdesc || '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His monstrous cock is so huge that it slams into your cervix, while also being so girthy that it feels like the blood could be coming from your pussy getting torn in half, rather than your period.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3StartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his hips into you. As your head jerks forward, <<...
    scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his hips into you. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to pull you harder onto his tiny dick. You can barely feel him inside you, but the impact of his body leaves you breathless.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his hips into you, impact rippling through your e...
      scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his hips into you, impact rippling through your entire body. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to pull you harder onto his fat chode.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you and the impact ripples through ...
        scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his cock into you and the impact ripples through your entire body. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to pull you harder onto his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you and the impact ripples through ...
          scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his cock into you and the impact ripples through your entire body. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to pull you harder onto his cock.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you and the impact ripples through ...
            scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his cock into you and the impact ripples through your entire body. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to pull you harder onto his thick shaft.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you and the impact ripples through ...
              scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his cock into you and the impact ripples through your entire body. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to pull you harder onto his long shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you and the impact ripples through ...
                scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his cock into you and the impact ripples through your entire body. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to force his huge cock deeper inside you.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you and the impact ripples through ...
                  scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his cock into you and the impact ripples through your entire body. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to force his enormous cock deeper inside you.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you and the impact ripples through ...
                    scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his cock into you and the impact ripples through your entire body. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to force his lengthy shaft as deep as it can go inside you.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you and the impact ripples through ...
                      scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his cock into you and the impact ripples through your entire body. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to force as much of his gigantic cock inside you as he can.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you and the impact ripples through ...
                        scene.text(`You gasp as ${((s as any).npcdesc || '')} slams his cock into you and the impact ripples through your entire body. As your head jerks forward, ${((s as any).npcdesc || '')}'s hand grabs hold of your hair, yanking on it to force as much of his monstrously huge cock inside you as he can.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3BoyTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.text('<i>"Hn-! Hn-! Hn-! Hn-!"</i>');
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('<i>"Hngh! Hngh! Hngh! Hngh!"</i>');
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        if ((Math.floor(Math.random() * 3) + 1) === 1) {
          if (((s as any).pcs_vag ?? 0) <= 15) {
            scene.text('"Oh fuck~! Your pussy\'s so tight~!"');
          } else {
            if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
              scene.text('"You\'re pussy\'s pretty loose huh?"');
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiss1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
            } else {
              if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text('"<i>Hnn~!</i> You like that? You like that you dirty slut? <i>Hnn~!</i> You like when I pound your fucking pussy?"');
              } else {
                if (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                } else {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                }
              }
            }
          } else {
            if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
            } else {
              if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text('"<i>Hnn~!</i> Yeah! <i>Hnn~!</i> Take my fucking cock bitch!"');
              } else {
                if (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                } else {
                  scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
                }
              }
            }
          }
        }
      } else {
        if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          scene.text('<i><b>"HNGH-! HNGH-! HNGH-! HNGH-!"</b></i>');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3BoyTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> barely makes a sound as he thrusts into you. You can't even hear hi...
    scene.text(`${((s as any).npcdesc || '')} barely makes a sound as he thrusts into you. You can't even hear his breathing over the slap of his hips smashing into yours.`);
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grunts softly, panting as he thrusts into you.
      scene.text(`${((s as any).npcdesc || '')} grunts softly, panting as he thrusts into you.`);
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        // TODO-QSP: dynamic text: <<$npcdesc>> growls as he smashes your pussy from above.
        scene.text(`${((s as any).npcdesc || '')} growls as he smashes your pussy from above.`);
      } else {
        if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          // TODO-QSP: dynamic text: <<$npcdesc>> is braying erratically like a donkey as he thrusts equally as errat...
          scene.text(`${((s as any).npcdesc || '')} is braying erratically like a donkey as he thrusts equally as erratically into your pussy.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3EnjoyDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    scene.text('You groan in pleasure, loving how roughly he\'s fucking you, hammering your pussy in all the right ways to make up for his tiny dick.');
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      scene.text('You groan in pleasure, loving how roughly he\'s fucking you, hammering the girth of his fat chode into your pussy, forcing you to feel its thickness between your legs.');
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        scene.text('You groan in pleasure, loving how roughly he\'s fucking you, hammering your pussy in all the right places with his skinny dick.');
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
            (s as any).pcs_makeup = 0;
            scene.text('You groan wordlessly, loving how roughly he\'s fucking you, hammering your pussy in all the right ways. Tears of pleasure and pain blur your sight and beads of sweat gather on your skin. Within minutes, your makeup is as fucked as you are.');
          } else {
            if ((!((s as any).pcs_makeup ?? 0))) {
              scene.text('You groan wordlessly, loving how roughly he\'s fucking you, hammering your pussy in all the right ways. Tears of pleasure and pain blur your sight and beads of sweat gather on your skin and your already ruined makeup gets even worse with every passing moment.');
            } else {
              scene.text('Tears of pleasure and pain blur your sight and beads of sweat gather on your skin. You love how rough he\'s treating you. His cock hammers your pussy in all the right ways and you groan in pleasure. ');
            }
          }
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
              (s as any).pcs_makeup = 0;
              scene.text('You groan wordlessly, loving the rough fucking of your pussy by his thick cock, smashing it into your pussy again and again, stretching you to your limits. Tears of pleasure and pain blur your sight and beads of sweat gather on your skin. Within minutes, your makeup is as fucked as you are.');
            } else {
              if ((!((s as any).pcs_makeup ?? 0))) {
                scene.text('You groan wordlessly, loving the rough fucking of your pussy by his thick cock, smashing it into your pussy again and again, stretching you to your limits. Tears of pleasure and pain blur your sight and beads of sweat gather on your skin and your already ruined makeup gets even worse with every passing moment.');
              } else {
                scene.text('Tears of pleasure and pain blur your sight and beads of sweat gather on your skin. You love how rough he\'s treating you and the way he smashes his thick cock into you over and over again, and stretching you to your limits.');
              }
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
                (s as any).pcs_makeup = 0;
                // TODO-QSP: dynamic text: You groan wordlessly, loving the rough fucking of your pussy by his long cock, t...
                scene.text(`You groan wordlessly, loving the rough fucking of your pussy by his long cock, the way ${((s as any).npcdesc || '')} bashes it against your cervix again and again, causing tears of pleasure and pain blur your sight and beads of sweat gather on your skin. Within minutes, your makeup is as fucked as you are.`);
              } else {
                if ((!((s as any).pcs_makeup ?? 0))) {
                  // TODO-QSP: dynamic text: You groan wordlessly, loving the rough fucking of your pussy by his long cock, t...
                  scene.text(`You groan wordlessly, loving the rough fucking of your pussy by his long cock, the way ${((s as any).npcdesc || '')} bashes it against your cervix again and again, causing tears of pleasure and pain blur your sight and beads of sweat gather on your skin and your already ruined makeup gets even worse with every passing moment.`);
                } else {
                  // TODO-QSP: dynamic text: Tears of pleasure and pain blur your sight and beads of sweat gather on your ski...
                  scene.text(`Tears of pleasure and pain blur your sight and beads of sweat gather on your skin. You love the rough fucking of your pussy by his long cock, the way ${((s as any).npcdesc || '')} bashes it against your cervix again and again, causing tears of pleasure and pain blur your sight and beads of sweat gather on your skin.`);
                }
              }
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
                  (s as any).pcs_makeup = 0;
                  // TODO-QSP: dynamic text: You groan wordlessly, loving the rough fucking of your pussy by his huge cock, t...
                  scene.text(`You groan wordlessly, loving the rough fucking of your pussy by his huge cock, the way ${((s as any).npcdesc || '')} fills you with every thrust, bashing it against your cervix again and again, causing tears of pleasure and pain blur your sight and beads of sweat gather on your skin. Within minutes, your makeup is as fucked as you are.`);
                } else {
                  if ((!((s as any).pcs_makeup ?? 0))) {
                    // TODO-QSP: dynamic text: You groan wordlessly, loving the rough fucking of your pussy by his huge cock, t...
                    scene.text(`You groan wordlessly, loving the rough fucking of your pussy by his huge cock, the way ${((s as any).npcdesc || '')} fills you with every thrust, bashing it against your cervix again and again, causing tears of pleasure and pain blur your sight and beads of sweat gather on your skin and your already ruined makeup gets even worse with every passing moment.`);
                  } else {
                    // TODO-QSP: dynamic text: Tears of pleasure and pain blur your sight and beads of sweat gather on your ski...
                    scene.text(`Tears of pleasure and pain blur your sight and beads of sweat gather on your skin. You love the rough fucking of your pussy by his huge cock, the way ${((s as any).npcdesc || '')} fills you with every thrust, bashing it against your cervix again and again, causing tears of pleasure and pain blur your sight and beads of sweat gather on your skin.`);
                  }
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
                    (s as any).pcs_makeup = 0;
                    // TODO-QSP: dynamic text: You groan wordlessly, loving the rough fucking of your pussy by his enormous coc...
                    scene.text(`You groan wordlessly, loving the rough fucking of your pussy by his enormous cock, the way ${((s as any).npcdesc || '')} stretches you to your limits with every thrust and bashes it against your cervix unceasingly. Tears of pleasure and pain blur your sight and beads of sweat gather on your skin. Within minutes, your makeup is as fucked as you are.`);
                  } else {
                    if ((!((s as any).pcs_makeup ?? 0))) {
                      // TODO-QSP: dynamic text: You groan wordlessly, loving the rough fucking of your pussy by his enormous coc...
                      scene.text(`You groan wordlessly, loving the rough fucking of your pussy by his enormous cock, the way ${((s as any).npcdesc || '')} stretches you to your limits with every thrust and bashes it against your cervix unceasingly. Tears of pleasure and pain blur your sight and beads of sweat gather on your skin and your already ruined makeup gets even worse with every passing moment.`);
                    } else {
                      // TODO-QSP: dynamic text: Tears of pleasure and pain blur your sight and beads of sweat gather on your ski...
                      scene.text(`Tears of pleasure and pain blur your sight and beads of sweat gather on your skin. You love how rough he's treating you and the way ${((s as any).npcdesc || '')}'s enormous cock stretches you to your limits with every thrust and bashes it against your cervix unceasingly.`);
                    }
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
                      (s as any).pcs_makeup = 0;
                      // TODO-QSP: dynamic text: You groan wordlessly, loving the rough fucking of your pussy by his exceptionall...
                      scene.text(`You groan wordlessly, loving the rough fucking of your pussy by his exceptionally lengthy cock, the way ${((s as any).npcdesc || '')} bashes it against your cervix again and again, so hard you wonder if you'll be bruised in the morning as tears of pleasure and pain blur your sight and beads of sweat gather on your skin. Within minutes, your makeup is as fucked as you are.`);
                    } else {
                      if ((!((s as any).pcs_makeup ?? 0))) {
                        // TODO-QSP: dynamic text: You groan wordlessly, loving the rough fucking of your pussy by his exceptionall...
                        scene.text(`You groan wordlessly, loving the rough fucking of your pussy by his exceptionally lengthy cock, the way ${((s as any).npcdesc || '')} bashes it against your cervix again and again, so hard you wonder if you'll be bruised in the morning as tears of pleasure and pain blur your sight and beads of sweat gather on your skin and your already ruined makeup gets even worse with every passing moment.`);
                      } else {
                        // TODO-QSP: dynamic text: Tears of pleasure and pain blur your sight and beads of sweat gather on your ski...
                        scene.text(`Tears of pleasure and pain blur your sight and beads of sweat gather on your skin. You love the rough fucking of your pussy by his exceptionally lengthy cock, the way ${((s as any).npcdesc || '')} bashes it against your cervix again and again, so hard you wonder if you'll be bruised in the morning.`);
                      }
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you an...
                      scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you and the way his gigantic cock fills you up and bounces off your cervix, eyes watering as a strangely pleasurable soreness builds inside you with every collision.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You groan in pleasure beneath <<$npcdesc>>. You love the way he's fucking you an...
                        scene.text(`You groan in pleasure beneath ${((s as any).npcdesc || '')}. You love the way he's fucking you and the way his monstrous cock threatens to tear you in half and impale you with every thrust, agony and pleasure mixing in the most intoxicating of ways.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3BoyDirtyTalk1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterMiss3_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
      scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, managing to even make his tiny dick hurt you in all the <i>best</i> ways.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
        scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, forcing his fat chode into your pussy to hurt you in all the <i>best</i> ways.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
          scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, stabbing into you with his skinny dick to hurt you in all the <i>best</i> ways.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
            scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, hurting in all the <i>best</i> ways.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
              scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, splitting your pussy with his thick cock and hurting you in all the <i>best</i> ways.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your cervix with his long cock and hurting you in all the <i>best</i> ways.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                  scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your cervix with his huge cock and hurting you in all the <i>best</i> ways.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                    scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your cervix and threatening to tear your pussy in half with his enormous cock and hurting you in all the <i>best</i> ways.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                      scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your cervix with the entire length of his ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock and hurting you in all the <i>best</i> ways.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                        scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your cervix with his gigantic cock, forcing its entire ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm length inside and hurting you in all the <i>best</i> ways.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                          scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc || '')} keeps a firm hold on your hair and pulls hard with every thrust, forcing in the entire ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm length of his monstrous cock inside you, hammering your cervix and threatening to tear your pussy in half and hurting you in all the <i>best</i> ways.`);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    scene.text('Wet sloppy claps squelch from your pussy as he relentlessly pounds you into the mattress and your eyes roll back in your head.');
  } else {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
      scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and his fucking is so violent that even his tiny dick is making you break out in a sweat.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
        scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and his fucking is so violent that the fat girth of his chode being force inside you is making you break out in a sweat.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
          scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and his fucking is so violent that even his skinny dick is making you break out in a sweat.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
            scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and his fucking is so violent that you're already starting to break out in a sweat.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
              scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and you break out in a sweat, his thick cock threatens to tear you in half with every thrust.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and you break out in a sweat, his long cock bashes against your cervix with every thrust.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                  scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and you break out in a sweat, his huge cock fills your entire pussy and bashes against your cervix with every thrust.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                    scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and you break out in a sweat, his enormous cock batters your cervix, threatening to tear you in half with every thrust.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                      scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and you break out in a sweat, his ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock bashing against your cervix, trying to force its way past with every thrust.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                        scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and you break out in a sweat, his gigantic ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock filling you up and bashing against your cervix with its weight, trying to force its way past with every thrust.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                          scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc || '')}'s hips slam against your thighs and you break out in a sweat, his monstrous ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock trying to force its way into your cervix and split you in half with every thrust.`);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    scene.text('And you are loving <i>every second</i> of it.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3_2MoanDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
    scene.text('<i>"Mm~! Mm! Nnm~! Nngh~!"</i>');
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: Only the tiniest squeaks of moans are able to escape your lips as <<$npcdesc>> k...
      scene.text(`Only the tiniest squeaks of moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding your pussy. His tiny dick somehow slams into you with such force that it leaves you breathless. And it feels <i>amazing</i>.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: Only the tiniest squeaks of moans are able to escape your lips as <<$npcdesc>> k...
        scene.text(`Only the tiniest squeaks of moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding you. His fat chode slams into you with such force that your pussy feels stretched even by its meager length, leaving you breathless. And its <i>amazing</i>.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: Only the tiniest squeaks of moans are able to escape your lips as <<$npcdesc>> k...
          scene.text(`Only the tiniest squeaks of moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding your pussy. His skinny dick somehow slams into you with such force that it leaves you breathless. And it feels <i>amazing</i>.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: Only the softest moans are able to escape your lips as <<$npcdesc>> keeps poundi...
            scene.text(`Only the softest moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding your pussy. His dick slams into you with such force that it leaves you breathless. And it feels <i>amazing</i>.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: Only the tiniest squeaks of moans are able to escape your lips as <<$npcdesc>> k...
              scene.text(`Only the tiniest squeaks of moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding you. His cock slams into you, it stretches your pussy around his thick girth and leaves you breathless. And its <i>amazing</i>.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: Only the tiniest squeaks of moans are able to escape your lips as <<$npcdesc>> k...
                scene.text(`Only the tiniest squeaks of moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding your pussy. His cock slams into you, bumping up against your cervix with its generous length and leaves you breathless. And its <i>amazing</i>.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: Only the tiniest squeaks of moans are able to escape your lips as <<$npcdesc>> k...
                  scene.text(`Only the tiniest squeaks of moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding your pussy. His cock slams into you, filling you up and bumping up against your cervix with its huge size, leaving you breathless. And its <i>amazing</i>.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: Only the tiniest squeaks of moans are able to escape your lips as <<$npcdesc>> k...
                    scene.text(`Only the tiniest squeaks of moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding you. His cock slams into you, impaling your pussy with its girth and bumping up against your cervix with its enormous size, leaving you breathless. And its <i>amazing</i>.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: Only the tiniest squeaks of moans are able to escape your lips as <<$npcdesc>> k...
                      scene.text(`Only the tiniest squeaks of moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding your pussy. His cock slams into you, relentlessly smashing against your cervix with its insane ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm length, literally forcing the breath from your lungs. And its <i>amazing</i>.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: Only the tiniest squeaks of moans are able to escape your lips as <<$npcdesc>> k...
                        scene.text(`Only the tiniest squeaks of moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding your pussy. His cock slams into you, filling you up and relentlessly smashing against your cervix with its gigantic ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm length, literally forcing the breath from your lungs. And its <i>amazing</i>.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: Only the tiniest squeaks of moans are able to escape your lips as <<$npcdesc>> k...
                          scene.text(`Only the tiniest squeaks of moans are able to escape your lips as ${((s as any).npcdesc || '')} keeps pounding you. His cock slams into you, painfully splitting your pussy with it's absurd girth and relentlessly smashing against your cervix with its montrous ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm length, literally forcing the breath from your lungs. And its <i>amazing</i>.`);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
      scene.text('"<i>Ah~! Yes~! Mmm~!</i>"');
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you with his tiny dick. Your moan...
        scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you with his tiny dick. Your moans seem to egg him on, making him fuck you harder. In turn, it makes you moan even louder. And you're loving every second of it.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you with his fat chode. Your moan...
          scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you with his fat chode. Your moans seem to egg him on, making him fuck you harder and in turn, it only makes you moan even louder. And you're loving every second of it.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you with his skinny dick. Your mo...
            scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you with his skinny dick. Your moans seem to egg him on, making him fuck you harder and in turn, it only makes you moan even louder. And you're loving every second of it.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you with his dick. Your moans see...
              scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you with his dick. Your moans seem to egg him on, making him fuck you harder and in turn, it only makes you moan even louder. And you're loving every second of it.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you, splitting your pussy with hi...
                scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you, splitting your pussy with his thick cock. Your moans seem to egg him on, making him fuck you harder and in turn, it only makes you moan even louder. And you're loving every second of it.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you, impaling your pussy and bump...
                  scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you, impaling your pussy and bumping up against your cervix with his long cock. Your moans seem to egg him on, making him fuck you harder and in turn, it only makes you moan even louder. A part of you wonders if you're going to have a bruised uterus after this. And you're loving every second of it.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you, impaling your pussy and bump...
                    scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you, impaling your pussy and bumping up against your cervix with his huge cock. Your moans seem to egg him on, making him fuck you harder and in turn, it only makes you moan even louder. A part of you wonders if you're going to have a bruised uterus after this. And you're loving every second of it.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you, splitting your pussy and bum...
                      scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you, splitting your pussy and bumping up against your cervix with his enormous cock. Your moans seem to egg him on, making him fuck you harder and in turn, it only makes you moan even louder. A part of you wonders if you're going to have a bruised uterus after this. And you're loving every second of it.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you, battering your cervix with h...
                        scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you, battering your cervix with his insanely long ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock. Every thrust increases the soreness and the pleasure. Your moans seem to egg him on, making him fuck you harder and in turn, it only makes you moan even louder. A part of you wonders if you're going to have a bruised uterus after this. Sex has never hurt so good.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you, battering your cervix with h...
                          scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you, battering your cervix with his gigantic ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock. Every thrust increases the soreness and the pleasure. Your moans seem to egg him on, making him fuck you harder and in turn, it only makes you moan even louder. A part of you wonders if you're going to have a bruised uterus after this. Sex has never hurt so good.`);
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> keeps pounding you, splitting your pussy with hi...
                            scene.text(`You moan loudly as ${((s as any).npcdesc || '')} keeps pounding you, splitting your pussy with his absurd girth and battering your cervix with his monstrous ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock. Every thrust increases the soreness and the pleasure. Your moans seem to egg him on, making him fuck you harder and in turn, it only makes you moan even louder. A part of you wonders if you're going to have a bruised uterus after this. Sex has never hurt so good.`);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Fuck~!" you pant. "Your cock is so fucking hard inside me~! Oh fu...
    } else {
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Yes! Yes! Just like that!" you scream at the top of your lungs. "...
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Yes! Yes! Just like that!" you scream at the top of your lungs. "...
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Yes! Yes! Just like that!" you scream at the top of your lungs. "...
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Yes! Yes! Just like that!" you scream at the top of your lungs. "...
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                if (((s as any).pcs_vag ?? 0) <= 10) {
                  // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"OH FUCK!" you scream at the top of your lungs. "<i>Fuck!</i> You'...
                } else {
                  // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"OH FUCK!" you scream at the top of your lungs. "<i>Fuck!</i> Your...
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"OH FUCK!" you scream at the top of your lungs. "<i>Fuck!</i> You'...
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"OH FUCK!" you scream at the top of your lungs. "You''re so big! Y...
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      if (((s as any).pcs_vag ?? 0) <= 10) {
                        // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"OH FUCK!" you scream at the top of your lungs. "<i>Fuck!</i> You'...
                      } else {
                        // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"OH FUCK!" you scream at the top of your lungs. "<i>Fuck!</i> You'...
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"OH FUCK!" you scream at the top of your lungs. "<i>Fuck!</i> I fe...
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"OH FUCK!" you scream at the top of your lungs. "Oh <i>fuck!</i> Y...
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"OH FUCK!" you scream at the top of your lungs. "<i>Fuck!</i> I fe...
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'arousal') {
      if (((s as any).pcs_horny ?? 0) >= 70) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Yes~! Fuck~! Yes~!" you scream. "I love getting pounded~! You''re...
        } else {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Oh <i>fuck</i>~!" you scream. "I''m so fucking wet~! I''m gonna c...
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! Don''t stop~!" you scream. "Smash my sloppy wet pussy~!"',...
        } else {
          // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"My pussy can''t get enough of you~!" you scream. "I need more~! M...
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'technique') {
        if (((s as any).pcs_horny ?? 0) >= 70) {
          if ((Math.floor(Math.random() * 2) + 0) === 1) {
            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Yes~! Fuck~! Yes~!" you scream. "Pound my fucking pussy~! Don''t ...
          } else {
            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Oh <i>fuck</i>~!" you scream. "I''m so fucking wet~! I''m gonna c...
          }
        } else {
          if ((Math.floor(Math.random() * 2) + 0) === 1) {
            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Ungh~! Don''t stop~!" you scream. "Fuck my fucking brains out~!"'...
          } else {
            // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"I love having you between my legs," you moan. "You''re making me ...
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'dirty_girl') {
          if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Who's pussy is this?" <<$npcdesc>> growls as he smashes his cock into you like ...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc || '')} growls as he smashes his cock into you like a battering ram.`);
            scene.text('"Yours~!" you whimper, squirming beneath him.');
          } else {
            if (((s as any).pcs_horny ?? 0) >= 70) {
              if ((Math.floor(Math.random() * 1) + 1) === 1) {
                scene.text('"Yes~! Fuck my sloppy pussy~!" you scream. "Make this dirty little slut cum all over your cock~!"');
              } else {
                scene.text('"Oh shit~! Imgonnacum~!" you scream. "You\'re gonna make this filthy whore cum~!"');
              }
            } else {
              if ((Math.floor(Math.random() * 2) + 0) === 1) {
                scene.text('"Ungh~! Fuck my dirty cunt~!" you scream. "Fuck me like the filthy whore I am~!"');
              } else {
                scene.text('"Make this pussy yours~!" you scream. "Own this pussy with your cock~!"');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss3_2SensationDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
    scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his tiny dick violently violating your pussy.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
      scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his fat chode violently violating your pussy.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
        scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his skinny dick violently violating your pussy.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
          scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his dick violently violating your pussy.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
            scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his thick cock violently stretching out your pussy.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
              scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his long cock repeatedly knocking on your cervix as it violently penetrates you over and over again.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
                scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the sensation of the huge cock inside you repeatedly knocking on your cervix as it violently violates your pussy.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
                  scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his enormous cock knock against your cervix while it threatens to tear you in half.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
                    scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his insanely long cock smash into your cervix over and over and over again in the most blissful agony you've ever experienced.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
                      scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his gigantic cock fill your pussy, smashing into your cervix over and over and over again in the most blissful agony you've ever experienced.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you. Your eyes roll back in your...
                        scene.text(`You pant heavily as ${((s as any).npcdesc || '')} keeps pounding you. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his monstrous cock smash into your cervix while it threatens to tear you in half in the most blissful agony you've ever experienced.`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_miss ---------------------------------
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
    case 'miss_virgin_pre':
      enterMissVirginPre(s, scene);
      break;
    case 'miss_switch':
      enterMissSwitch(s, scene);
      break;
    case 'miss_switch2':
      enterMissSwitch2(s, scene);
      break;
    case 'miss_spread':
      enterMissSpread(s, scene);
      break;
    case 'miss_insert_slow':
      enterMissInsertSlow(s, scene);
      break;
    case 'miss_insert_react':
      enterMissInsertReact(s, scene);
      break;
    case 'miss_insert_orgasm':
      enterMissInsertOrgasm(s, scene);
      break;
    case 'miss_girl_orgasm_continue':
      enterMissGirlOrgasmContinue(s, scene);
      break;
    case 'missionary_change_position':
      enterMissionaryChangePosition(s, scene);
      break;
    case 'miss_pain1':
      enterMissPain1(s, scene);
      break;
    case 'miss_pain2':
      enterMissPain2(s, scene);
      break;
    case 'miss_pain3':
      enterMissPain3(s, scene);
      break;
    case 'miss_vid':
      enterMissVid(s, scene);
      break;
    case 'miss1':
      enterMiss1(s, scene);
      break;
    case 'miss1.1':
      enterMiss1_1(s, scene);
      break;
    case 'miss1.2':
      enterMiss1_2(s, scene);
      break;
    case 'miss1.bored':
      enterMiss1_bored(s, scene);
      break;
    case 'miss2':
      enterMiss2(s, scene);
      break;
    case 'miss2.1':
      enterMiss2_1(s, scene);
      break;
    case 'miss2.2':
      enterMiss2_2(s, scene);
      break;
    case 'miss2.bored':
      enterMiss2_bored(s, scene);
      break;
    case 'miss3':
      enterMiss3(s, scene);
      break;
    case 'miss3.1':
      enterMiss3_1(s, scene);
      break;
    case 'miss3.2':
      enterMiss3_2(s, scene);
      break;
    case 'miss3.bored':
      enterMiss3_bored(s, scene);
      break;
    case 'miss_kiss':
      enterMissKiss(s, scene);
      break;
    case 'miss1_start_period_desc':
      enterMiss1StartPeriodDesc(s, scene);
      break;
    case 'miss1_start_desc':
      enterMiss1StartDesc(s, scene);
      break;
    case 'miss1_boy_talk1':
      enterMiss1BoyTalk1(s, scene);
      break;
    case 'miss1_boy_talk2':
      enterMiss1BoyTalk2(s, scene);
      break;
    case 'miss1_enjoy_desc':
      enterMiss1EnjoyDesc(s, scene);
      break;
    case 'miss1.1_desc':
      enterMiss1_1Desc(s, scene);
      break;
    case 'miss1.2_moan_desc':
      enterMiss1_2MoanDesc(s, scene);
      break;
    case 'miss1.2_dirty_talk':
      enterMiss1_2DirtyTalk(s, scene);
      break;
    case 'miss1.2_sensation_desc':
      enterMiss1_2SensationDesc(s, scene);
      break;
    case 'miss2_start_period_desc':
      enterMiss2StartPeriodDesc(s, scene);
      break;
    case 'miss2_start_desc':
      enterMiss2StartDesc(s, scene);
      break;
    case 'miss2_boy_talk1':
      enterMiss2BoyTalk1(s, scene);
      break;
    case 'miss2_boy_talk2':
      enterMiss2BoyTalk2(s, scene);
      break;
    case 'miss2_enjoy_desc':
      enterMiss2EnjoyDesc(s, scene);
      break;
    case 'miss2.1_desc':
      enterMiss2_1Desc(s, scene);
      break;
    case 'miss2.2_moan_desc':
      enterMiss2_2MoanDesc(s, scene);
      break;
    case 'miss2.2_dirty_talk':
      enterMiss2_2DirtyTalk(s, scene);
      break;
    case 'miss2.2_sensation_desc':
      enterMiss2_2SensationDesc(s, scene);
      break;
    case 'miss3_start_period_desc':
      enterMiss3StartPeriodDesc(s, scene);
      break;
    case 'miss3_start_desc':
      enterMiss3StartDesc(s, scene);
      break;
    case 'miss3_boy_talk1':
      enterMiss3BoyTalk1(s, scene);
      break;
    case 'miss3_boy_talk2':
      enterMiss3BoyTalk2(s, scene);
      break;
    case 'miss3_enjoy_desc':
      enterMiss3EnjoyDesc(s, scene);
      break;
    case 'miss3_boy_dirty_talk1':
      enterMiss3BoyDirtyTalk1(s, scene);
      break;
    case 'miss3.1_desc':
      enterMiss3_1Desc(s, scene);
      break;
    case 'miss3.2_moan_desc':
      enterMiss3_2MoanDesc(s, scene);
      break;
    case 'miss3.2_dirty_talk':
      enterMiss3_2DirtyTalk(s, scene);
      break;
    case 'miss3.2_sensation_desc':
      enterMiss3_2SensationDesc(s, scene);
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
  enter: enter,
};
