import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDoggyGoto(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed on hands and knees and spreads your ch...
    scene.text(`${((s as any).npcdesc ?? '')} pushes you down onto the bed on hands and knees and spreads your cheeks apart, preparing to fuck you from behind.`);
    scene.actions([
      { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
      { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc ?? '') ?? '') + ' take your virginity', goto: ['sex_ev_virgin', 'start3'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
      scene.actions([
        { label: 'Bend over (doggystyle)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_bend_over'
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_position'] !== ((s as any).sex_ev ?? 0)?.['position']) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_switch'
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
          scene.actions([
            { label: 'Bend over (doggystyle)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_bend_over'
  } },
          ]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
            scene.actions([
              { label: 'Bend over', goto: ['sex_ev_doggy', 'doggy_first_insertion'] },
            ]);
          } else {
            if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
              scene.actions([
                { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
              ]);
            } else {
              if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== ''  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
                qspGoto(s, 'sex_ev_doggy', 'doggy_goto2');
              } else {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
                if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
                  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (Math.floor(Math.random() * 3) + 1);
                }
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy' + (((s as any).sex_ev ?? 0)?.['speed']) + '';
                scene.actions([
                  { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc ?? '') ?? '') + ' fuck you', handler: (st: GameState) => { qspGoto(st, 'sex_ev_doggy', ((st as any).sex_ev['pos_speed'] ?? '')); } },
                ]);
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

function enterDoggyGoto2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] !== 0  ||  ((s as any).sex_ev ?? 0)?.['first_insertion'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (Math.floor(Math.random() * 3) + 1);
    }
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy' + (((s as any).sex_ev ?? 0)?.['speed']) + '';
    scene.actions([
      { label: 'Get fucked', goto: ['sex_ev_doggy', 'doggy' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyGoto(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggyStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyVirginPre(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sex_ev ?? 0)?.['change_pos'] === 1) {
      scene.actions([
        { label: 'Switch to doggy', goto: ['sex_ev_doggy', 'doggy_switch'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
        qspCall(s, 'sex_ev_sex', 'speed_select');
        scene.actions([
          { label: 'Bend over (doggystyle)', goto: ['sex_ev_doggy', 'doggy_bend_over'] },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
          qspGoto(s, 'sex_ev_doggy', 'doggy_first_insertion');
        } else {
          if (((s as any).sex_ev ?? 0)?.['initiative'] !== 'girl'  &&  ((s as any).sex_ev ?? 0)?.['force_initiative'] !== 1) {
            qspCall(s, 'sex_ev_sex', 'speed_select');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    if ((!((st as any).ar_vag_lube ?? 0))) {
      if (((st as any).npc_dirty_lover ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        qspGoto(st, 'sex_ev_doggy', 'doggy_spit_lube');
      } else {
        scene.text('He flips you over and pulls you to your knees.');
        scene.text('"I wanna fuck you from behind."');
        qspGoto(st, 'sex_ev_doggy', 'doggy_insert_slow');
      }
    } else {
      if (((st as any).npc_dirty_lover ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('He forces you onto your knees and gives you a slap on the ass before pressing himself inside your pussy.');
        qspGoto(st, 'sex_ev_doggy', 'doggy_insert_slow');
      } else {
        scene.text('He rolls you onto your knees and you immediately feel him pressing inside you from behind again.');
        qspGoto(st, 'sex_ev_doggy', 'doggy_insert_slow');
      }
    }
  } },
            ]);
          } else {
            qspCall(s, 'sex_ev_sex', 'speed_select');
            scene.actions([
              { label: 'Bend over', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/doggy2.jpg');
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      scene.text('You turn around and get on your knees, presenting your ass towards him.');
      scene.text('"Let\'s do it doggy style," you say, giving him a sultry look over your shoulder.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.text('You get back on your knees, waggling your ass enticingly at him.');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.text('"I want to do it doggy this time," you say, giving him a sultry look over your shoulder.');
        } else {
          scene.text('"I need you inside me again," you say, giving him a sultry look over your shoulder.');
        }
      }
    }
    qspGoto(st, 'sex_ev_doggy', 'doggy_insert_slow');
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

function enterDoggyInsertActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
      { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc ?? '') ?? '') + ' take your virginity', goto: ['sex_ev_virgin', 'start3'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
      scene.actions([
        { label: 'Bend over', goto: ['sex_ev_doggy', 'doggy_first_insertion'] },
      ]);
    } else {
      scene.actions([
        { label: 'Insertion', goto: ['sex_ev_doggy', 'doggy_insert_slow'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggyFirstInsertion(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'speed_select');
  scene.img('images/shared/sex/foreplay/doggy1.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
  scene.text(`${((s as any).npcdesc ?? '')} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, placing his ${((s as any).dick_desc ?? '')} cock right on top of your pussy as he prepares to fuck you.`);
  if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
    if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).stat ?? 0)?.['biggest_cock']) {
        scene.actions([
          { label: '"I\'ve taken bigger than you" (amused)', handler: (st: GameState) => {
    scene.text('"I\'ve taken bigger dicks than this before," you smirk. "I\'ll be fine."');
    scene.actions([
      { label: 'Let him put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
    ]);
  } },
          { label: '"I\'ve taken bigger than you" (unimpressed)', handler: (st: GameState) => {
    scene.text('"Oh please," you sigh, rolling your eyes. "Don\'t get all proud just cause you have a big dick. I\'ve taken bigger guys than you before."');
    scene.actions([
      { label: 'Let him put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).virgin_stats ?? 0)?.['cock_size']) {
        scene.actions([
          { label: 'First time was bigger (unimpressed)', handler: (st: GameState) => {
    scene.text('"Oh please," you sigh, rolling your eyes. "I lost my virginity to a guy bigger than you. I think I\'ll be fine."');
    scene.actions([
      { label: 'Let him put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
    ]);
  } },
        ]);
      }
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        scene.text('"Don\'t be afraid to tap out if my cock is too big," he grins.');
      } else {
        scene.text('"Don\'t be too intimidated by the size," he grins. "Your pussy will get used to it eventually."');
      }
      scene.actions([
        { label: 'Nod', handler: (st: GameState) => {
    scene.text('You nod slowly, unable to help from gulping as you do.');
    scene.actions([
      { label: 'Let him put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] > ((s as any).stat ?? 0)?.['biggest_cock']) {
        scene.actions([
          { label: '"Is that gonna fit inside me?"', handler: (st: GameState) => {
    scene.text('You can\'t help but gulp anxiously, feeling the size of him resting on the entrance to your snatch.');
    scene.text('"Is that going to fit inside me?" you ask, nervously staring at his member with wide eyes.');
    scene.text('"Don\'t worry," he grins. "It\'s gone into plenty of other girls before."');
    scene.actions([
      { label: 'Let him put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
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
      { label: 'Let him put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
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
      { label: 'Let him put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for him to put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
    { label: '"I\'ve been waiting for this"', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '"I''ve been waiting all ' + iif(hour < 21 or hour < 5, 'day', 'night') + ' for ...
    scene.text('"I\'ve been waiting all ' + ((((st as any).hour ?? 0) < 21  ||  ((st as any).hour ?? 0) < 5) ? ('day') : ('night')) + ' for this," you grin, spreading your thighs even wider to make room for him and he grins back at you.');
    scene.actions([
      { label: 'Let him put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoggyVirginPre(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
  scene.img('images/shared/sex/foreplay/miss3.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed on hands and knees and spreads your ch...
  scene.text(`${((s as any).npcdesc ?? '')} pushes you down onto the bed on hands and knees and spreads your cheeks apart, preparing to fuck you from behind.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
    { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc ?? '') ?? '') + ' take your virginity', goto: ['sex_ev_virgin', 'start3'] },
  ]);
  scene.build();
}

function enterDoggySwitch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['initiative'] === 'boy') {
    qspGoto(s, 'sex_ev_doggy', 'doggy_switch2');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 0;
  scene.img('images/shared/sex/foreplay/doggy2.jpg');
  if (((s as any).sex_ev ?? 0)?.['last_position'] === 'miss') {
    // TODO-QSP: dynamic text: You push <<$npcdesc>> off of you, closing your legs and rolling onto your knees.
    scene.text(`You push ${((s as any).npcdesc ?? '')} off of you, closing your legs and rolling onto your knees.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['last_position'] === 'cowgirl') {
      // TODO-QSP: dynamic text: You lift your hips, letting <<$npcdesc>>''s cock slip from your pussy. Then, you...
      scene.text(`You lift your hips, letting ${((s as any).npcdesc ?? '')}'s cock slip from your pussy. Then, you turn around, getting on hands and knees, presenting your ass towards him.`);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['virgin'] === 0) {
    scene.text('"Let\'s do it doggystyle."');
  } else {
    scene.text('"I want to try it from behind."');
  }
  if (((s as any).sex_ev ?? 0)?.['change_pos'] === 0) {
    qspGoto(s, 'sex_ev_doggy', 'doggy_insert_slow');
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 0;
    scene.actions([
      { label: 'Fuck in doggystyle', goto: ['sex_ev_doggy', 'doggy' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggySwitch2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 0;
  scene.img('images/shared/sex/foreplay/doggy2.jpg');
  if (((s as any).sex_ev ?? 0)?.['last_position'] === 'miss') {
    // TODO-QSP: dynamic text: <<$npcdesc>> pulls himself from between your thighs and rolls you onto your knee...
    scene.text(`${((s as any).npcdesc ?? '')} pulls himself from between your thighs and rolls you onto your knees.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['last_position'] === 'cowgirl') {
      // TODO-QSP: dynamic text: <<$npcdesc>> lifts you by the hips, pulling you from his cock and flips you arou...
      scene.text(`${((s as any).npcdesc ?? '')} lifts you by the hips, pulling you from his cock and flips you around onto your knees.`);
    }
  }
  scene.text('"I think it\'s time for some doggystyle."');
  qspGoto(s, 'sex_ev_doggy', 'doggy_insert_slow');
  // TODO-QSP: end
  scene.build();
}

function enterDoggyBendOver(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/foreplay/doggy2.jpg');
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.text('You turn around and get on your knees, presenting your ass towards him.');
    scene.text('"Let\'s do it doggy style," you say, giving him a sultry look over your shoulder.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.text('You get back on your knees, waggling your ass enticingly at him.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.text('"I want to do it doggy this time," you say, giving him a sultry look over your shoulder.');
      } else {
        scene.text('"I need you inside me again," you say, giving him a sultry look over your shoulder.');
      }
    }
  }
  if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    qspGoto(s, 'sex_ev_doggy', 'doggy_spit_lube');
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyInsertSlow(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggySpitLube(s: GameState, scene: SceneBuilder): void {
  (s as any).vaginal_slip = 6;
  (s as any).ar_vag_lube = 1;
  scene.img('images/shared/sex/vag/doggy/spit1.mp4');
  scene.text('He flips you over and pulls you to your knees. You feel his hands on your ass and hear an <i>aach ptoogh-!</i> from behind you and a glob of something wet lands directly into your pussy.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take it in stride', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You take it in stride as <<$npcdesc>> pushes his finger in and spreads his spit ...
    scene.text(`You take it in stride as ${((st as any).npcdesc ?? '')} pushes his finger in and spreads his spit wad around inside you.`);
    scene.text('"Just making sure you\'re nice and wet," he says, lining himself up with you. You can hear the smile in his voice.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggyInsertSlow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', (-8));
    scene.text('"Ah~!" you moan, feeling your arousal spread and lube up your pussy even more than the spit and the fingers inside it.');
    scene.text('"Just making sure you\'re nice and wet," he says, lining himself up with you. You can hear the smile in his voice.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggyInsertSlow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Flinch', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You flinch in surprise but otherwise don''t say anything as <<$npcdesc>> pushes ...
    scene.text(`You flinch in surprise but otherwise don't say anything as ${((st as any).npcdesc ?? '')} pushes a finger inside, spreading his spit wad around inside your pussy.`);
    scene.text('"Just making sure you\'re nice and wet," he says, lining himself up with you. You can hear the smile in his voice.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggyInsertSlow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Complain', handler: (st: GameState) => {
    scene.text('"Ew!" you grimace. "Could you <i>not</i> spit in my pussy like that?"');
    scene.text('"Just making sure you\'re nice and wet," he says, lining himself up with you. You can hear the smile in his voice.');
    if (((st as any).lubri ?? 0) > 0) {
      scene.text('"I have lube you know!" you growl back.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggyInsertSlow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'You like it dirty', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal_finger', 1);
    scene.text('"Mmmm~!" you moan hoarsely, spreading your knees further apart. "Yes daddy, make sure this dirty little pussy is nice and wet for you."');
    scene.text('Encouraged by your dirty talk, he spits into your pussy again drawing more squeals of pleasure from you as he jams fingers in after, spreading the saliva around your insides. You can feel yourself dripping wet now and it\'s not the spit.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggyInsertSlow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterDoggyInsertSlow(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
  if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
    qspCall(s, 'sex_ev_sex', 'speed_select');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy' + (((s as any).sex_ev ?? 0)?.['speed']) + '';
  if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 1) {
    qspGoto(s, 'sex_ev_doggy', 'doggy_goto2');
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_insertion'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
    }
    qspCall(s, 'sex_ev_sex', 'insertion_arousal_code');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/doggy/enter1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> carefully positions himself behind you, lining up the head of his c...
    scene.text(`${((s as any).npcdesc ?? '')} carefully positions himself behind you, lining up the head of his cock with your entrance, and gently forces it into the folds of your pussy.`);
    if (((s as any).dick_desc ?? 0) === 'tiny') {
      scene.text('Not that he needed to be careful. His hips come flush with your ass and you still feel plenty of wiggle room inside you. He might as well have put his finger in...');
    } else {
      if (((s as any).dick_desc ?? 0) === 'short') {
        scene.text('He pushes through your lips and you feel his cock fill the entrance to your snatch before stopping short as his hips collide with your ass...');
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          scene.text('He passes between your lips and you feel his cock <i>stretching</i> you out as he pushes in, before stopping short as his hips collide with your ass...');
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
    qspGoto(s, 'sex_ev_doggy', 'doggy_insert_react');
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggyInsertReact(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyPain1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyInsertOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoyment', handler: (st: GameState) => {
    if (((st as any).dick_desc ?? 0) === 'long'  ||  ((st as any).dick_desc ?? 0) === 'huge'  ||  ((st as any).dick_desc ?? 0) === 'enormous'  ||  ((st as any).dick_desc ?? 0) === 'lengthy'  ||  ((st as any).dick_desc ?? 0) === 'gigantic'  ||  ((st as any).dick_desc ?? 0) === 'monstrous') {
      scene.actions([
        { label: 'He\'s big!', handler: (st: GameState) => {
    if (((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        scene.text('"Oh <i>fuck!</i> That\'s big!" you groan, squirming in pleasure around the cock that is absolutely <i>filling</i> you right now.');
      } else {
        scene.text('"Oh <i>fuck!</i>" you groan in pleasure. "I still can\'t get over how fucking <i>big</i> you are!"');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        // TODO-QSP: dynamic text: "Nngh~! <i>Fuck~!</i>" you groan loudly, giving <<$npcdesc>> a wry smile afterwa...
        scene.text(`"Nngh~! <i>Fuck~!</i>" you groan loudly, giving ${((st as any).npcdesc ?? '')} a wry smile afterwards. "I can never quite get used to how big you are."`);
      } else {
        scene.text('"Nngh~! <i>Fuck,</i> you\'re so big!" you groan loudly, grinning as you do.');
      }
    }
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
      ]);
    }
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    scene.text('You let out a loud moan as heat fills up your insides and your pussy begins to salivate with just the insertion of his cock.');
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
      { label: 'Groan', handler: (st: GameState) => {
    scene.text('You let out a husky groan as an indescribable <i>ache</i> rocks through your insides. Like a crumb of bread to a woman starving to death, just the insertion of his cock sets your lustful hunger ablaze.');
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
      { label: 'Gasp', handler: (st: GameState) => {
    scene.text('You gasp as the pleasure of his insertion sends heat washing through your hips and electric tingles racing across your skin.');
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
      { label: 'Squeak!', handler: (st: GameState) => {
    scene.text('"Eep-!"');
    scene.text('A squeak escapes your lips he fills you with his shaft, your legs involuntarily kipping at the insertion.');
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
      { label: 'Say something sexy', handler: (st: GameState) => {
    if (((st as any).npc_last_sex ?? 0)?.[String((st as any).npcID ?? 0)] > ((st as any).daystart ?? 0) - 7) {
      if (((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'big'  ||  ((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'extra_big') {
        // TODO-QSP: dynamic text: "Ah~!" you moan, toes curling as he finishes inserting his <<$dick_desc>> cock i...
        scene.text(`"Ah~!" you moan, toes curling as he finishes inserting his ${((st as any).dick_desc ?? '')} cock into your pussy, and give him a lascivious smile, squeezing yourself around his shaft. "<i>There's</i> my favorite big boy..."`);
      } else {
        // TODO-QSP: dynamic text: "Ah~!" you moan, toes curling as he finishes inserting his <<$dick_desc>> cock i...
        scene.text(`"Ah~!" you moan, toes curling as he finishes inserting his ${((st as any).dick_desc ?? '')} cock into your pussy, and give him a lascivious smile, squeezing yourself around his shaft. "<i>There's</i> my favorite boy's toy..."`);
      }
    } else {
      if (((st as any).npc_last_sex ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        if (((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'big'  ||  ((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'extra_big') {
          // TODO-QSP: dynamic text: "Ah~!" you moan, toes curling as he finishes inserting his <<$dick_desc>> cock i...
          scene.text(`"Ah~!" you moan, toes curling as he finishes inserting his ${((st as any).dick_desc ?? '')} cock into your pussy, and give him a lascivious smile. "I've missed having this big boy inside me..."`);
        } else {
          // TODO-QSP: dynamic text: "Ah~!" you moan, toes curling as he finishes inserting his <<$dick_desc>> cock i...
          scene.text(`"Ah~!" you moan, toes curling as he finishes inserting his ${((st as any).dick_desc ?? '')} cock into your pussy, and give him a lascivious smile. "I've missed having your cock inside me..."`);
        }
      } else {
        if (((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'big'  ||  ((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'extra_big') {
          if (((st as any).stat ?? 0)?.['biggest_cock'] < ((st as any).npc_dick ?? 0)?.[String((st as any).npcID ?? 0)]) {
            // TODO-QSP: dynamic text: "Ah~!" you moan, toes curling as he finishes inserting his <<$dick_desc>> cock i...
            scene.text(`"Ah~!" you moan, toes curling as he finishes inserting his ${((st as any).dick_desc ?? '')} cock into your pussy, and give him a lascivious smile. "I've never had a cock this big inside me before..."`);
          } else {
            // TODO-QSP: dynamic text: "Ah~!" you moan, toes curling as he finishes inserting his <<$dick_desc>> cock i...
            scene.text(`"Ah~!" you moan, toes curling as he finishes inserting his ${((st as any).dick_desc ?? '')} cock into your pussy, and give him a lascivious smile. "I love big cocks..."`);
          }
        } else {
          // TODO-QSP: dynamic text: "Ah~!" you moan, toes curling as he finishes inserting his <<$dick_desc>> cock i...
          scene.text(`"Ah~!" you moan, toes curling as he finishes inserting his ${((st as any).dick_desc ?? '')} cock into your pussy, and give him a lascivious smile. "You're a perfect fit for my pussy..."`);
        }
      }
    }
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
    ]);
  } },
    { label: 'Discomfort', handler: (st: GameState) => {
    if (((st as any).dick_desc ?? 0) === 'long'  ||  ((st as any).dick_desc ?? 0) === 'huge'  ||  ((st as any).dick_desc ?? 0) === 'enormous'  ||  ((st as any).dick_desc ?? 0) === 'lengthy'  ||  ((st as any).dick_desc ?? 0) === 'gigantic'  ||  ((st as any).dick_desc ?? 0) === 'monstrous') {
      scene.actions([
        { label: 'Groan', handler: (st: GameState) => {
    scene.text('You let out a painful groan as your insides <i>ache</i> as if you had been punched in the gut. Which in some ways, you have been...');
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
        { label: 'He\'s big!', handler: (st: GameState) => {
    if (((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        if (((st as any).dick_desc ?? 0) === 'gigantic'  ||  ((st as any).dick_desc ?? 0) === 'monstrous') {
          scene.text('"Oh <i>fuck!</i>" you groan, squirming as your pussy is already beginning to ache. "It\'s like a fucking <i>baseball bat</i> inside me!"');
        } else {
          scene.text('"Oh <i>fuck!</i> That\'s big!" you groan, squirming as your pussy is already beginning to ache.');
        }
        if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"Pretty incredible, isn\'t it?" he grins hautily, taking a moment seemingly to admire the size of his own cock.');
        } else {
          if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
            scene.text('"Sorry," he says, a sympathetic look in his eyes.');
          } else {
            // TODO-QSP: dynamic text: "Your pussy is so tight," <<$npcdesc>> grins back.
            scene.text(`"Your pussy is so tight," ${((st as any).npcdesc ?? '')} grins back.`);
          }
        }
      } else {
        scene.text('"Oh <i>fuck!</i>" you groan in discomfort. "That\'s still <i>fucking</i> big!"');
        if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          if (((st as any).sex_ev ?? 0)?.['virgin'] === 0) {
            scene.text('"Won\'t be able to go back to regular cocks after this," he chuckles.');
          } else {
            scene.text('"I\'m spoiling you for life," he chuckles. "No guy is ever going to fill you up like this."');
          }
        } else {
          if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
            scene.text('"Sorry," he says, a sympathetic look in his eyes.');
          } else {
            // TODO-QSP: dynamic text: "Your pussy is so tight," <<$npcdesc>> grins back.
            scene.text(`"Your pussy is so tight," ${((st as any).npcdesc ?? '')} grins back.`);
          }
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        // TODO-QSP: dynamic text: "Nngh~! <i>Fuck~!</i>" you groan loudly as <<$npcdesc>>''s cock overstuffs your ...
        scene.text(`"Nngh~! <i>Fuck~!</i>" you groan loudly as ${((st as any).npcdesc ?? '')}'s cock overstuffs your poor pussy and you're already starting to ache. "I can never get used to how <i>big</i> you are."`);
      } else {
        scene.text('"Nngh~!" you groan loudly.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', $sex_ev['pos_speed']
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Gasp', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Your breath hitches in discomfort as <<$npcdesc>> cock pokes awkward spots in yo...
    scene.text(`Your breath hitches in discomfort as ${((st as any).npcdesc ?? '')} cock pokes awkward spots in your pussy as he settles in behind you.`);
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
      { label: 'Squeak!', handler: (st: GameState) => {
    scene.text('"Eep-!"');
    scene.text('A squeak escapes your lips he fills you from behind, your pussy involuntarily squeezing his shaft at the insertion.');
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoggyInsertOrgasm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity'] > 0  ||  (((s as any).orgasm_buildup ?? 0) >= 100  &&  (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1))) {
    scene.actions([
      { label: 'Orgasm!', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['orgasm'] === ((st as any).orgasm ?? 0)) {
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'vaginal', (-1), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['insertion_orgasm'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
    scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] === 0) {
      scene.text('You\'re so turned on, just that one thrust is all it takes for you to come.');
    } else {
      scene.text('That\'s all it takes. Just that one thrust. And you\'re already coming.');
    }
    if (((st as any).dick_desc ?? 0) === 'tiny'  ||  ((st as any).dick_desc ?? 0) === 'short'  ||  ((st as any).dick_desc ?? 0) === 'chode'  ||  ((st as any).dick_desc ?? 0) === 'skinny'  ||  ((st as any).dick_desc ?? 0) === 'normal') {
      scene.text('Muscles tighten. Heat blossoms. You gasp aloud. Electric tingles race across your body from your toes to the tips of your nipples as your arms give out underneath you and you convulse in orgasm. You groan a wordless cry of ecstasy.');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cock <i>fills</i> you to the brim and you gasp aloud as it start...
      scene.text(`${((st as any).npcdesc ?? '')}'s cock <i>fills</i> you to the brim and you gasp aloud as it starts. Muscles tighten. Heat blossoms. Electric tingles race across your body from your toes to the tips of your nipples as your arms give out underneath you and you convulse in orgasm. You groan a wordless cry of ecstasy.`);
      scene.actions([
        { label: 'You\'re really big', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/2.jpg');
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.text('"You\'re <i>really</i> big," you pant dizzily, head still swimming from orgasm. "I didn\'t expect how good that it would feel just to get you inside me..."');
    } else {
      scene.text('"It\'s your big cock," you pant giddily, head still swimming from orgasm. "The way you <i>fill</i> me. It\'s indescribable."');
    }
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
      ]);
    }
    // TODO-QSP: dynamic text: "I''m that good, huh?" <<$npcdesc>> grins smugly.
    scene.text(`"I'm that good, huh?" ${((st as any).npcdesc ?? '')} grins smugly.`);
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] > 0) {
      scene.actions([
        { label: '[Easy Orgasm trait]', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/smile1.jpg');
    scene.text('"I come easy," you smile tiredly at him, head still swimming from orgasm. "Sometimes just one thrust is all it takes for me."');
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
      ]);
    }
    scene.actions([
      { label: 'Really horny', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/2.jpg');
    scene.text('"I\'m <i>really</i> horny," you moan, practically melting underneath him.');
    qspGoto(st, 'sex_ev_doggy', 'doggy_goto2');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggyGirlOrgasmContinue(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/vag/doggy/orgasm1.mp4');
    scene.text('You\'ve barely finished your orgasm when he rolls you onto your knees and pulls your hips back towards him. With one swift thrust, he plunges his cock into your still-quivering pussy, earning an involuntary gasp from your lips.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/orgasm1.mp4');
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t give you a moment to rest, continuing to fuck you all the ...
      scene.text(`${((s as any).npcdesc ?? '')} doesn't give you a moment to rest, continuing to fuck you all the way through your orgasm. You quiver, your sensitive pussy spasming around his cock, driving you insane as he doesn't stop even after you've finished.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/doggy/dog1.jpg');
        scene.text('You\'ve barely finished quivering when he pulls you off of him and rolls you onto your knees, pulling your hips back towards him. With one swift movement, he thrusts his cock into your still-quivering pussy. His actions earn him an involuntary gasp from your lips.');
      }
    }
  }
  scene.text('"I\'m not finished yet," he growls from behind you.');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy' + (((s as any).sex_ev ?? 0)?.['speed']) + '';
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterDoggyChangePosition(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/2.jpg');
    // TODO-QSP: dynamic text: "I''m not really feeling doggy right now," you say, looking at <<$npcdesc>> over...
    scene.text(`"I'm not really feeling doggy right now," you say, looking at ${((st as any).npcdesc ?? '')} over your shoulder. "Could we try another position for now?"`);
    scene.text('He pauses with his cock fully inserted, hands on your ass.');
    scene.text('"What did you have in mind?"');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['change_pos'] = 1;
    qspCall(st, 'sex_ev_sex', 'position_change');
  } },
  ]);
  scene.build();
}

function enterDoggyPain1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
    scene.actions([
      { label: 'Dick is too big', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dick_too_big'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    (st as any).orgasm_or = 'no';
    // TODO-QSP: dynamic text: That first thrust of <<$npcdesc>>''s hips elicits a gasp of pain from your lips ...
    scene.text(`That first thrust of ${((st as any).npcdesc ?? '')}'s hips elicits a gasp of pain from your lips and makes your knees want to buckle in agony. His cock is too much for your poor pussy and even just having it inside you is pure torture.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggyPain2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ouch!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('Lances of pain pierce through your vagina. Whether it\'s the angle or technique or just the shape of your pussy and the shape of his cock, you can\'t say for certain. The only thing you are sure of is that this <i>hurts!</i>');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggyPain2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterDoggyPain2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    scene.img('images/shared/sex/vag/doggy/3.jpg');
    // TODO-QSP: dynamic text: As much as you want the pain to stop, the idea of speaking up and ruining the mo...
    scene.text(`As much as you want the pain to stop, the idea of speaking up and ruining the mood makes you cringe. Instead, you let your arms collapse and bury your face into the pillow, hoping that it muffles the sound you make every time ${((st as any).npcdesc ?? '')} thrusts into you.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: '', labelFn: (s: GameState) => 'Tell ' + String(((s as any).npcdesc ?? '') ?? '') + ' it hurts', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_doggy', '');
  } },
    { label: 'Ask to try something else', handler: (st: GameState) => {
    if (((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'miss')  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      scene.img('images/shared/sex/vag/doggy/3.jpg');
      scene.text('"Do you think-! We could try-! Something else?" you manage to gasp out.');
      qspCall(st, 'sex_ev_sex', 'fuck_no_cum_code');
      // TODO-QSP: dynamic text: "Come on, don''t be a baby," <<$npcdesc>> grunts back. "It''s already inside."
      scene.text(`"Come on, don't be a baby," ${((st as any).npcdesc ?? '')} grunts back. "It's already inside."`);
      scene.text('Heedless of your cry, he starts fucking you without even a second\'s pause and you moan in pain and discomfort with every thrust.');
      qspCall(st, 'sex_ev_cum', 'fuck_cum');
      qspCall(st, 'sex_ev_sex', 'fuck_continue');
    } else {
      scene.img('images/shared/sex/vag/doggy/2.jpg');
      scene.text('"Do you think-! We could try-! Something else?" you ask.');
      // TODO-QSP: dynamic text: <<$npcdesc>> pauses just as he was preparing to start fucking you for real, hand...
      scene.text(`${((st as any).npcdesc ?? '')} pauses just as he was preparing to start fucking you for real, hands on your ass.`);
      scene.text('"What did you have in mind?" he asks.');
      qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
      qspCall(st, 'sex_ev_sex', 'position_change');
    }
  } },
  ]);
  scene.build();
}

function enterDoggyPain3(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) >= 2))  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.text('"Ouch! Hey! Ow!" you yelp. "Wait! That hurts!"');
    // TODO-QSP: iif(sex_ev['speed'] < 3, '"It''ll get better," <<$npcdesc>> says uncaringly and continues to fuck yo...
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyGoto2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.img('images/shared/sex/vag/doggy/dog1.jpg');
    scene.text('"Ouch!" you yelp. "Wait! Ow!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> stops halfway through a thrust, jabbing you painfully with his cock...
    scene.text(`${((s as any).npcdesc ?? '')} stops halfway through a thrust, jabbing you painfully with his cock again and nearly falling on you in the process.`);
    scene.text('"Shit! Sorry," he says. "What happened? Are you okay?"');
    scene.actions([
      { label: 'Be irritated', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).npc_dislike = (st as any).npc_dislike ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_dislike[String((st as any).npcID ?? 0)] ?? 0) + (2);
    scene.img('images/shared/sex/vag/doggy/shock1.jpg');
    scene.text('"Who taught you how to fuck?" you scowl. "Your dick is stabbing into me in all the worst ways!"');
    if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Well sorry that your pussy doesn''t exactly come with an instruction manual!" <...
      scene.text(`"Well sorry that your pussy doesn't exactly come with an instruction manual!" ${((st as any).npcdesc ?? '')} growls back.`);
    } else {
      scene.text('"Oh. Sorry," he mumbles sheepishly.');
    }
    scene.text('"Whatever. Can we just move around to get a better angle?"');
    scene.text('The two of you awkwardly shuffle around for a minute, trying to find a position for your hips that\'s a little more comfortable.');
    // TODO-QSP: dynamic text: "How''s that?" <<$npcdesc>> asks.
    scene.text(`"How's that?" ${((st as any).npcdesc ?? '')} asks.`);
    scene.actions([
      { label: 'Fine I guess', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.text('"Fine I guess," you sigh. It doesn\'t really feel good, but at least it doesn\'t hurt anymore.');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes your response as approval and starts moving again.
    scene.text(`${((st as any).npcdesc ?? '')} takes your response as approval and starts moving again.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['pos_speed'])) + '.2');
  } },
    ]);
  } },
      { label: 'Better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('"<i>Finally</i>," you sigh. "Yes, that feels better. Try to remember this next time."');
    // TODO-QSP: dynamic text: <<$npcdesc>> seems to be a little ticked off by your attitude but starts moving ...
    scene.text(`${((st as any).npcdesc ?? '')} seems to be a little ticked off by your attitude but starts moving again anyways.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['pos_speed'])) + '.2');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Laugh it off', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).npc_like = (st as any).npc_like ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_like[String((st as any).npcID ?? 0)] ?? 0) + (2);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.img('images/shared/sex/vag/doggy/1.jpg');
    if (((st as any).sex_ev ?? 0)?.['dick_too_big'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['dick_too_big'] = 2;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
      (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
      scene.text('"Your dick is kind of big for me," you smile ruefully. "Can we just pause for a sec to let my poor pussy adjust?"');
      scene.text('"Oh. Yeah, sure."');
      // TODO-QSP: dynamic text: You spend a couple minutes with <<$npcdesc>>''s entire length inside you, taking...
      scene.text(`You spend a couple minutes with ${((st as any).npcdesc ?? '')}'s entire length inside you, taking deep breaths as you slowly let it stretch your pussy. Eventually the pain fades to nothing more than a dull ache.`);
      scene.text('"Okay," you nod. "You can start moving again."');
    } else {
      scene.text('"I\'m fine," you chuckle. "Your dick is kind of at an awkward angle though. Can we adjust a little?"');
      scene.text('"Oh. Yeah, sure."');
      scene.text('The two of you shuffle around a little finding a position for your hips that\'s a little more comfortable.');
      // TODO-QSP: dynamic text: "How''s that?" <<$npcdesc>> asks.
      scene.text(`"How's that?" ${((st as any).npcdesc ?? '')} asks.`);
      scene.text('"Much better," you nod back and he begins thrusting.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['pos_speed'])) + '.2');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggyVid(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
    scene.img(`images/shared/sex/vag/doggy/slow${(Math.floor(Math.random() * 2) + 1)}.mp4`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['speed'] === 2) {
      scene.img(`images/shared/sex/vag/doggy/med${(Math.floor(Math.random() * 4) + 1)}.mp4`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
        scene.img(`images/shared/sex/vag/doggy/hard${(Math.floor(Math.random() * 4) + 1)}.mp4`);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'doggy', 1);
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspGoto(s, 'sex_ev_virgin', 'doggy_virg_norm1');
  }
  scene.img('images/shared/sex/vag/doggy/slow1.mp4');
  if (((s as any).mesec ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1StartPeriodDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1StartDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips press into your...
      scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips press into your ass on the next thrust. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. His dick may be small but <i>damn</i>, does he know how to use it.`);
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips press into your...
        scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips press into your ass on the next thrust. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. <i>Damn</i>, does he know how to use his dick!`);
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips press into your...
          scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips press into your ass on the next thrust. He doesn't just have a big cock, he knows how to use it too. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust. If it hits you just right, he makes sure to thrust it again just like that when your pussy can't help but squeeze him.`);
          scene.text('Oh <i>fuck</i>. He\'s good at this.');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips press into your...
            scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips press into your ass on the next thrust. He doesn't just have a gigantic cock, he knows how to use it too. You would think that being fucked with such a giant dick would hurt, and it occasionally does, but not as often as you expected. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust his angle on top of you. If it hits you just right, he makes sure to thrust it again just like that when your pussy can't help but squeeze him, minimizing pain and maximizing pleasure.`);
            scene.text('Oh <i>fuck</i>. He\'s good at this.');
          }
        }
      }
    }
    scene.actions([
      { label: 'Enjoy yourself', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('Your eyes roll back in your head as your pussy eagerly slurps up his cock again and again.');
    scene.text('<i>This is so goooooood...</i>');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'But you\'re just not connecting', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.text('But... for all his skill, somehow just isn\'t doing it for you.');
    scene.text('The pleasure is there but... the emotional connection--the <i>intimacy</i>--isn\'t, and it leaves you feeling strangely hollow and unsatisfied. Your bodies are joined together, but it seems without the soul, all you feel are bits of flesh smacking each other...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips press into your...
      scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips press into your ass on the next thrust. <i>That one felt pretty good!</i> And of course, right as you think that, the next one hits a little awkward inside you, rubbing the wrong way. He's still good for the most part, but about one in ten thrusts can't help but hit wrong.`);
      scene.actions([
        { label: 'You\'re going to enjoy this', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('Still, that\'s good enough and you don\'t mind the awkward hit now and then. You clothes your eyes and smile to yourself, determined to enjoy fucking him today.');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: 'He''s good, but not good enough for you. Whatever effort he puts in can only go...
      scene.text('He\'s good, but not good enough for you. Whatever effort he puts in can only go so far with such a small dick. Beyond that, his movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + 'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: 'He''s good, but not good enough for you. You can''t exactly put your finger on ...
        scene.text('He\'s good, but not good enough for you. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + 'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: 'He''s good, but not good enough for you. Something about his timing is just <i>...
          scene.text('He\'s good, but not good enough for you. Something about his timing is just <i>off</i>. His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + `and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: 'He''s good, but not good enough for you. Half the problem is his cock is just <...
            scene.text('He\'s good, but not good enough for you. Half the problem is his cock is just <i>too damn big!</i> His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + `and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
        // TODO-QSP: dynamic text: An grunt of surprise escapes your lips as <<$npcdesc>>''s hips press into your a...
        scene.text(`An grunt of surprise escapes your lips as ${((s as any).npcdesc ?? '')}'s hips press into your ass in a clumsy thrust. That last one was a little bit awkward. <i>Oof.</i> And that one too. Oh, that one wasn't too bad- And we're back to awkward again.`);
        // TODO-QSP: dynamic text: In a word, <<$npcdesc>> is... uncoordinated? Every few thrusts of his <<$dick_de...
        scene.text(`In a word, ${((s as any).npcdesc ?? '')} is... uncoordinated? Every few thrusts of his ${((s as any).dick_desc ?? '')} dick inevitably result in an uncomfortable spot getting hit and a sharp prick of pain inside your pussy.`);
        scene.actions([
          { label: 'Coach him to do better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling at him over your sh...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((st as any).npcdesc ?? '')}," you coo, smiling at him over your shoulder. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You spread your knees a little wider and let your ass slap back against <<$npcde...
    scene.text(`You spread your knees a little wider and let your ass slap back against ${((st as any).npcdesc ?? '')} as he pushes his ${((st as any).dick_desc ?? '')} cock into you again, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    scene.text('"<i>"Yes~!"</i> you moan, your eyes rolling back in satisfaction. "Just like that~!"');
    scene.text('It pays to communicate...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Well he certainly has enthusiasm. But that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Well he certainly has enthusiasm. But not much skill. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new thrust into your pussy. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Something about his timing...
          scene.text(`Well he certainly has enthusiasm. But not much skill. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Half the problem is his co...
            scene.text(`Well he certainly has enthusiasm. But not much skill. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and every time you think it's about to get good, you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock hits another painful spots inside your pussy and your pleasure deflating like a balloon. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'This hurts!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Is it getting worse?!</i>');
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('You\'ve no idea how, but he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          scene.text('You\'ve no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            scene.text('Not only is his oversized cock straining your pussy to the limits, its also somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
          }
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: A stifled gasp of discomfort escapes your lips as <<$npcdesc>>''s hips press int...
        scene.text(`A stifled gasp of discomfort escapes your lips as ${((s as any).npcdesc ?? '')}'s hips press into your ass in clumsy thrust, sending a sharp jab of pain into your pussy. He keeps moving in weird ways, making nearly every pump of his ${((s as any).dick_desc ?? '')} dick into your pussy inevitably result in an awkward spot getting hit and a sharp prick of pain. What on earth is he doing?!`);
        scene.actions([
          { label: 'Coach him to do better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling at him over your sh...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((st as any).npcdesc ?? '')}," you coo, smiling at him over your shoulder. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You spread your knees a little wider and let your ass slap back against <<$npcde...
    scene.text(`You spread your knees a little wider and let your ass slap back against ${((st as any).npcdesc ?? '')} as he pushes his ${((st as any).dick_desc ?? '')} cock into you again, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    scene.text('"<i>"Yes~!"</i> you moan, your eyes rolling back in satisfaction. "Just like that~!"');
    scene.text('It pays to communicate...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Well he certainly has enthusiasm. But that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Well he certainly has enthusiasm. But not much skill. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new thrust into your pussy. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Something about his timing...
          scene.text(`Well he certainly has enthusiasm. But not much skill. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Half the problem is his co...
            scene.text(`Well he certainly has enthusiasm. But not much skill. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and every time you think it's about to get good, you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock hits another painful spots inside your pussy and your pleasure deflating like a balloon. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'This hurts!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Is it getting worse?!</i>');
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('You\'ve no idea how, but he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          scene.text('You\'ve no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            scene.text('Not only is his oversized cock straining your pussy to the limits, its also somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
          }
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        ]);
      }
    }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] < 75  &&  (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short'  ||  ((s as any).dick_desc ?? 0) === 'thin')) {
    scene.actions([
      { label: 'His dick is so small!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.img('images/shared/sex/vag/doggy/bored1.mp4');
    scene.text('<i>Holy shit,</i> you think to yourself. <i>How\'s a girl supposed to get off with a dick this small?</i>');
    // TODO-QSP: dynamic text: It takes all of your willpower not to audibly sigh as you keep letting <<$npc_us...
    scene.text(`It takes all of your willpower not to audibly sigh as you keep letting ${(((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} bump into you from behind with his amazingly <i>disappointing</i> cock, glad he can't see you roll your eyes in boredom.`);
    if (((st as any).sex_ev ?? 0)?.['prostitution'] === 1) {
      scene.text('<i>At least I\'m getting paid for this...</i>');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyChangePosition(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'This is too slow', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    // TODO-QSP: dynamic text: Closing your eyes, you try to focus on the sensations, <<$npcdesc>> on top of yo...
    scene.text(`Closing your eyes, you try to focus on the sensations, ${((st as any).npcdesc ?? '')} on top of you, his cock stretching your pussy, going in and out... in and out... in and ou-`);
    scene.text('Your eyes snap open when you realize this isn\'t going to work and hold back a sigh. This is so slow! You don\'t want this dainty gentle lovemaking, you want him to <i>fuck</i> you!');
    scene.actions([
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bored'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    qspCall(st, 'sex_ev_sex', 'fuck_no_cum_code');
    scene.img('images/shared/sex/vag/doggy/bored1.mp4');
    // TODO-QSP: dynamic text: As much as you want <<$npcdesc>> to pick up the pace, you don''t want to be a bi...
    scene.text(`As much as you want ${((st as any).npcdesc ?? '')} to pick up the pace, you don't want to be a bitch about it so you bite your tongue. You sigh silently instead, chewing on your cheek and letting your expression lapse into boredom, thankful at least you're facing away from him so you don't have to put on a performance.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Can you fuck me faster?', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/slow1.mp4');
    // TODO-QSP: dynamic text: "This is boring," you say, looking at <<$npcdesc>> over your shoulder. "Can you ...
    scene.text(`"This is boring," you say, looking at ${((st as any).npcdesc ?? '')} over your shoulder. "Can you go faster? I'm never going to get off at this rate."`);
    scene.text('"I can go faster," he grunts.');
    scene.text('"<i>Finally</i>," you say, spreading your knees a little more as he picks up the pace.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_doggy', 'doggy2'] },
    ]);
  } },
      { label: 'I want you to pound me', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/slow1.mp4');
    // TODO-QSP: dynamic text: "Hey," you say, turning your head over your shoulder to look <<$npcdesc>> right ...
    scene.text(`"Hey," you say, turning your head over your shoulder to look ${((st as any).npcdesc ?? '')} right in the eyes. "I didn't come here for you to hump me like a Disney princess. I came here to <b>fuck.</b> Now fuck me like you mean it already!"`);
    if (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      if (((st as any).npc_sex_speed ?? 0)?.[String((st as any).npclastgenerated ?? 0)] === 1) {
        // TODO-QSP: dynamic text: A concentrated look shadows <<$npcdesc>>''s face and quickly starts fucking you ...
        scene.text(`A concentrated look shadows ${((st as any).npcdesc ?? '')}'s face and quickly starts fucking you with accelerated speed.`);
      } else {
        // TODO-QSP: dynamic text: Before you can even finish your sentence, <<$npcdesc>> grabs you by the hips and...
        scene.text(`Before you can even finish your sentence, ${((st as any).npcdesc ?? '')} grabs you by the hips and rams his cock into you.`);
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_doggy', 'doggy3'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoggy1_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'doggy', 1);
  scene.img('images/shared/sex/vag/doggy/slow2.mp4');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1_1Desc(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterDoggy1_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'doggy', 1);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you from behind. Fina...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? '')} keeps slowly fucking you from behind. Finally, the stabbing pain between your legs is starting to go away. It seems your virgin pussy is starting to adjust to having a cock inside it.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s thrusts. It still hurts, but you're determined not to let a little pain cause you to pussy out of your first time.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as <<$npcdesc>> cont...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as ${((s as any).npcdesc ?? '')} continues to thrust into you from behind, trying with all your might to prevent yourself from bursting into tears. It hurts <i>so much</i>, but you can't bring yourself to tell him to stop.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you from behind. Clos...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? '')} keeps slowly fucking you from behind. Closing your eyes, you focus, adjusting your knees and the spread of your thighs, your arms and the angle of penetration, your timing, trying move your hips with his. After some minor adjustments, the pain ${((s as any).npcdesc ?? '')}'s cock was causing inside you fades. After a few minutes, it's little more than a dull throb and you feel much more comfortable, if not all that good.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s thrusts. It hurts like hell, but you don't say anything, trying your best not to let it show.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as <<$npcdesc>> cont...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as ${((s as any).npcdesc ?? '')} continues to thrust into you from behind, trying with all your might to prevent yourself from bursting into tears. It hurts <i>so much</i>, but you can't bring yourself to tell him to stop.`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you try to move your hips in time with his, throwing them back to ...
      scene.text(`Nevertheless, you try to move your hips in time with his, throwing them back to meet his thrusts and doing your best to make ${((s as any).npcdesc ?? '')} feel good, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to slowly thrust into your pussy f...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? '')} continues to slowly thrust into your pussy from behind. You aren't sure what changed, but it's like your body is waking up from a deep sleep. His cock stretches your walls, every thrust <i>fills</i> you in a way you didn't know you needed to be, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it easier to reach the deepest parts of your pussy.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s cock inside of you, clenching your abdomen and thro...
          scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s cock inside of you, clenching your abdomen and throwing your hips back in time with his, trying to squeeze your pussy tight around him to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You grunt passively as <<$npcdesc>> continues to pump his cock into you from beh...
            scene.text(`You grunt passively as ${((s as any).npcdesc ?? '')} continues to pump his cock into you from behind. His manhood drives deep inside you, filling you with this weird sort of "pressure." This doesn't feel "good" exactly, but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his cock into you from behind....
              scene.text(`You moan softly as ${((s as any).npcdesc ?? '')} continues to pump his cock into you from behind. It still basically feels numb to your pussy other than the occasional bump, but you don't want him to feel bad about it either so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. Your pussy still barely feels anything o...
                scene.text(`All your dirty talk is just that: talk. Your pussy still barely feels anything other than the occasional bump, but you don't want ${((s as any).npcdesc ?? '')} to feel bad about it either so you play along, pretending it feels good.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You pant like a bitch in heat as your pussy tightens up and you start throwing y...
        scene.text(`You pant like a bitch in heat as your pussy tightens up and you start throwing your hips back to meet ${((s as any).npcdesc ?? '')}'s thrusts. By the way his breathing changes, you think you're doing as good a job of pleasing him as he is for you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] <= 2  &&  ((s as any).sex_ev ?? 0)?.['moan'] > 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1_2MoanDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
              if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                qspCall(s, 'sex_ev_sex_talk_' + ((s as any).npcID ?? 0) + '', 'talk_output');
              } else {
                qspCall(s, 'sex_ev_sex_talk_npc', 'talk_output');
              }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s cock inside you.
              scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s cock inside you.`);
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1_2SensationDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
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

function enterDoggy1_bored(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'doggy', 1);
  qspCall(s, 'sex_ev_sex', 'fuck_no_cum_code');
  scene.img('images/shared/sex/vag/doggy/bored1.mp4');
  scene.text('He keeps fucking you <i>very slowly</i>.');
  scene.text('And it\'s <i>very boring</i>.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterDoggy2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'doggy', 2);
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspGoto(s, 'sex_ev_virgin', 'doggy_virg_norm1');
  }
  scene.img('images/shared/sex/vag/doggy/med1.mp4');
  if (((s as any).mesec ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2StartPeriodDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2StartDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips slap into your ...
      scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips slap into your ass in the next thrust. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. His dick may be small but <i>damn</i>, does he know how to use it.`);
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips slap into your ...
        scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips slap into your ass in the next thrust. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. <i>Damn</i>, does he know how to use his dick!`);
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips slap into your ...
          scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips slap into your ass in the next thrust. He doesn't just have a big cock, he knows how to use it too. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust. If it hits you just right, he makes sure to thrust it again just like that when your pussy can't help but squeeze him.`);
          scene.text('Oh <i>fuck</i>. He\'s good at this.');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips slap into your ...
            scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips slap into your ass in the next thrust. He doesn't just have a gigantic cock, he knows how to use it too. You would think that being fucked with such a giant dick would hurt, and it occasionally does, but not as often as you expected. You can feel how his movements react to yours, paying attention to your body's nonverbal signals, and making each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust his angle on top of you. If it hits you just right, he makes sure to thrust it again just like that when your pussy can't help but squeeze him, minimizing pain and maximizing pleasure.`);
            scene.text('Oh <i>fuck</i>. He\'s good at this.');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } else {
    if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips slap into your ...
      scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips slap into your ass in the next thrust. <i>That one felt pretty good!</i> And of course, right as you think that, the next one hits a little awkward inside you, rubbing the wrong way. He's still good for the most part, but about one in ten thrusts can't help but hit wrong.`);
      scene.actions([
        { label: 'You\'re going to enjoy this', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: Still, that''s good enough and you don''t mind the awkward hit now and then. You...
    scene.text(`Still, that's good enough and you don't mind the awkward hit now and then. You smile back at ${((st as any).npcdesc ?? '')}, determined to enjoy fucking him today.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: 'He''s good, but not good enough for you. Whatever effort he puts in can only go...
      scene.text('He\'s good, but not good enough for you. Whatever effort he puts in can only go so far with such a small dick. Beyond that, his movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + 'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: 'He''s good, but not good enough for you. You can''t exactly put your finger on ...
        scene.text('He\'s good, but not good enough for you. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + 'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: 'He''s good, but not good enough for you. Something about his timing is just <i>...
          scene.text('He\'s good, but not good enough for you. Something about his timing is just <i>off</i>. His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + `and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: 'He''s good, but not good enough for you. Half the problem is his cock is just <...
            scene.text('He\'s good, but not good enough for you. Half the problem is his cock is just <i>too damn big!</i> His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + `and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
        // TODO-QSP: dynamic text: An grunt of surprise escapes your lips as <<$npcdesc>>''s hips slap into your as...
        scene.text(`An grunt of surprise escapes your lips as ${((s as any).npcdesc ?? '')}'s hips slap into your ass in a clumsy thrust. That last one was a little bit awkward. <i>Oof.</i> And that one too. Oh, that one wasn't too bad- And we're back to awkward again.`);
        // TODO-QSP: dynamic text: In a word, <<$npcdesc>> is... uncoordinated? Every few thrusts of his <<$dick_de...
        scene.text(`In a word, ${((s as any).npcdesc ?? '')} is... uncoordinated? Every few thrusts of his ${((s as any).dick_desc ?? '')} dick inevitably result in an uncomfortable spot getting hit and a sharp prick of pain inside your pussy.`);
        scene.actions([
          { label: 'Coach him to do better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling at him over your sh...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((st as any).npcdesc ?? '')}," you coo, smiling at him over your shoulder. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You spread your knees a little wider and let your ass slap back against <<$npcde...
    scene.text(`You spread your knees a little wider and let your ass slap back against ${((st as any).npcdesc ?? '')} as he pushes his ${((st as any).dick_desc ?? '')} cock into you again, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    scene.text('"<i>"Yes~!"</i> you moan, your eyes rolling back in satisfaction. "Just like that~!"');
    scene.text('It pays to communicate...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/med2.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Well he certainly has enthusiasm. But that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Well he certainly has enthusiasm. But not much skill. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new thrust into your pussy. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Something about his timing...
          scene.text(`Well he certainly has enthusiasm. But not much skill. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Half the problem is his co...
            scene.text(`Well he certainly has enthusiasm. But not much skill. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and every time you think it's about to get good, you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock hits another painful spots inside your pussy and your pleasure deflating like a balloon. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'This hurts!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Is it getting worse?!</i>');
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('You\'ve no idea how, but he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          scene.text('You\'ve no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            scene.text('Not only is his oversized cock straining your pussy to the limits, its also somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
          }
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: A stifled gasp of discomfort escapes your lips as <<$npcdesc>>''s hips slap into...
        scene.text(`A stifled gasp of discomfort escapes your lips as ${((s as any).npcdesc ?? '')}'s hips slap into your ass in clumsy thrust, sending a sharp jab of pain into your pussy. He keeps moving in weird ways, making nearly every pump of his ${((s as any).dick_desc ?? '')} dick into your pussy inevitably result in an awkward spot getting hit and a sharp prick of pain. What on earth is he doing?!`);
        scene.actions([
          { label: 'Coach him to do better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling at him over your sh...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((st as any).npcdesc ?? '')}," you coo, smiling at him over your shoulder. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You spread your knees a little wider and let your ass slap back against <<$npcde...
    scene.text(`You spread your knees a little wider and let your ass slap back against ${((st as any).npcdesc ?? '')} as he pushes his ${((st as any).dick_desc ?? '')} cock into you again, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    scene.text('"<i>"Yes~!"</i> you moan, your eyes rolling back in satisfaction. "Just like that~!"');
    scene.text('It pays to communicate...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/med2.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Well he certainly has enthusiasm. But that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Well he certainly has enthusiasm. But not much skill. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new thrust into your pussy. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Something about his timing...
          scene.text(`Well he certainly has enthusiasm. But not much skill. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Half the problem is his co...
            scene.text(`Well he certainly has enthusiasm. But not much skill. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and every time you think it's about to get good, you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock hits another painful spots inside your pussy and your pleasure deflating like a balloon. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'This hurts!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Is it getting worse?!</i>');
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('You\'ve no idea how, but he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          scene.text('You\'ve no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            scene.text('Not only is his oversized cock straining your pussy to the limits, its also somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
          }
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        ]);
      }
    }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] < 75  &&  (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short'  ||  ((s as any).dick_desc ?? 0) === 'thin')) {
    scene.actions([
      { label: 'His dick is so small!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.img('images/shared/sex/vag/doggy/bored1.mp4');
    scene.text('<i>Holy shit,</i> you think to yourself. <i>How\'s a girl supposed to get off with a dick this small?</i>');
    // TODO-QSP: dynamic text: It takes all of your willpower not to audibly sigh as you keep letting <<$npc_us...
    scene.text(`It takes all of your willpower not to audibly sigh as you keep letting ${(((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} plow you from behind with his amazingly <i>disappointing</i> cock, glad he can't see you roll your eyes in boredom.`);
    if (((st as any).sex_ev ?? 0)?.['prostitution'] === 1) {
      scene.text('<i>At least I\'m getting paid for this...</i>');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyChangePosition(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Pace is wrong', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    scene.img('images/shared/sex/vag/doggy/med2.mp4');
    scene.text('You groan softly, but not in pleasure. More like frustration. Even though he\'s fucking you at what would probably be considered to be a "normal" pace, it\'s not what you\'re in the mood for. It just feels... <i>wrong</i>.');
    scene.actions([
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    (st as any).orgasm_or = 'no';
    scene.img('images/shared/sex/vag/doggy/med2.mp4');
    // TODO-QSP: dynamic text: You sigh internally, but decide not to ruin the mood. <<$npcdesc>> continues to ...
    scene.text(`You sigh internally, but decide not to ruin the mood. ${((st as any).npcdesc ?? '')} continues to enthusiastically clap your cheeks and you let your expression lapse into boredom, grateful that at least you don't have to act like you're having a good time.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Could you be a little more gentle?', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/med2.mp4');
    scene.text('"Could slow down a little?" you ask. "I think I\'m in the mood for something a little more... sensual...');
    // TODO-QSP: dynamic text: "I can do that," <<$npcdesc>> says, smiling gently, and slows down, putting more...
    scene.text(`"I can do that," ${((st as any).npcdesc ?? '')} says, smiling gently, and slows down, putting more effort into the motion of his hips instead of the speed.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_doggy', 'doggy1.1'] },
    ]);
  } },
      { label: 'Can you fuck me harder?', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/med2.mp4');
    scene.text('"Can you go harder?" you grunt, throwing your hips back against his, trying to amplify the force. "This is kind of boring for me. I like it rough."');
    if (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      scene.text('"You\'re pretty kinky, you know that?"');
      scene.text('"Shut up and fuck me," you reply, throwing your hips back into him as he speeds up.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_doggy', 'doggy3.1'] },
    ]);
  } },
      { label: 'Boooooring', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bored'] = 1;
    (st as any).orgasm_or = 'no';
    scene.img('images/shared/sex/vag/doggy/med2.mp4');
    // TODO-QSP: dynamic text: You sigh internally, but decide not to ruin the mood. <<$npcdesc>> continues to ...
    scene.text(`You sigh internally, but decide not to ruin the mood. ${((st as any).npcdesc ?? '')} continues to enthusiastically clap your cheeks and you let your expression lapse into boredom, grateful that at least you don't have to act like you're having a good time.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoggy2_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'doggy', 2);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2_1Desc(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy2';
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterDoggy2_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'doggy', 2);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps steadily fucking you from behind. Fi...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? '')} keeps steadily fucking you from behind. Finally, the stabbing pain between your legs is starting to go away. It seems your virgin pussy is starting to adjust to having a cock inside it.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s hips colliding with your ass. It still hurts, but you're determined not to let a little pain cause you to pussy out of your first time and you endure, clenching the bedsheets tight with both hands.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            scene.text('You whimper softly, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. It hurts <i>so much</i>, but you can\'t bring yourself to tell him to stop.');
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you from behind. Clos...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? '')} keeps slowly fucking you from behind. Closing your eyes, you focus, adjusting your knees and the spread of your thighs, your arms and the angle of penetration, your timing, trying move your hips with his. After some minor adjustments, the pain ${((s as any).npcdesc ?? '')}'s cock was causing inside you fades. After a few minutes, it's little more than a dull throb and you feel much more comfortable, if not all that good.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s hips clapping against your ass. It still hurts like hell, but you don't say anything, trying your best not to let it show.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as <<$npcdesc>>''s h...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as ${((s as any).npcdesc ?? '')}'s hips loudly clap into your ass and pain lances through your pussy. It hurts <i>so much</i>, but you can't bring yourself to tell him to stop.`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you try to move your hips in time with his, throwing them back to ...
      scene.text(`Nevertheless, you try to move your hips in time with his, throwing them back to meet ${((s as any).npcdesc ?? '')}'s thrusts, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        (s as any).orgasm_or = '';
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to steadily fuck you from behind. ...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? '')} continues to steadily fuck you from behind. You aren't sure what changed, but it's like your body is waking up from a deep sleep. His cock stretches your walls, every thrust <i>fills</i> you in a way you didn't know you needed to be, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it slide in and out of you with much greater, and pleasurable, force.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s cock inside of you, clenching your abdomen and thro...
          scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s cock inside of you, clenching your abdomen and throwing your hips back in time with his, trying to squeeze your pussy tight around him to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You grunt passively as <<$npcdesc>> continues to pump his cock into you from beh...
            scene.text(`You grunt passively as ${((s as any).npcdesc ?? '')} continues to pump his cock into you from behind. His manhood hammers deep inside you, filling you with this weird sort of "pressure." This doesn't feel "good" exactly, but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to pump his cock into you from behind....
              scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to pump his cock into you from behind. It still basically feels numb to your pussy other than the slapping of his hips against yours, but you don't want him to feel bad about it either so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. For all the effort <<$npcdesc>> is putti...
                scene.text(`All your dirty talk is just that: talk. For all the effort ${((s as any).npcdesc ?? '')} is putting in, you can't say it feels very good. But you don't want ${((s as any).npcdesc ?? '')} to feel bad about it either so you play along, pretending otherwise.`);
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
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You pant like a bitch in heat as your pussy tightens up and you start throwing y...
        scene.text(`You pant like a bitch in heat as your pussy tightens up and you start throwing your hips back to meet ${((s as any).npcdesc ?? '')}'s thrusts. By the way his breathing changes, you think you're doing as good a job of pleasing him as he is for you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] <= 2  &&  ((s as any).sex_ev ?? 0)?.['moan'] > 0) {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Nngh~! Ngh~! Ngh~! Nnngh~!</i>"');
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Yes~! Mmm~! Ahh~!</i>"');
            }
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2_2MoanDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
              if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                qspCall(s, 'sex_ev_sex_talk_' + ((s as any).npcID ?? 0) + '', 'talk_output');
              } else {
                qspCall(s, 'sex_ev_sex_talk_npc', 'talk_output');
              }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2_2SensationDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
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

function enterDoggy2_bored(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['doggy_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy2';
  scene.img('images/shared/sex/vag/doggy/bored2.mp4');
  scene.text('He keeps fucking you at a medium pace. It\'s boring.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterDoggy3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_check'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'doggy', 3);
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspGoto(s, 'sex_ev_virgin', 'doggy_virg_hard1');
  }
  qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']), 'rough');
  scene.img('images/shared/sex/vag/doggy/rough1.mp4');
  // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you from behind, the impact ripplin...
  scene.text(`You gasp as ${((s as any).npcdesc ?? '')} slams his cock into you from behind, the impact rippling through your entire body. As your head jerks back reflexively, ${((s as any).npcdesc ?? '')}'s hand grabs hold of your hair, yanking on it to pull you harder onto his cock.`);
  if (((s as any).mesec ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3StartPeriodDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3StartDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] < 75) {
    scene.actions([
      { label: 'Enjoy it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips pound into your...
    scene.text(`An uncontrollable gasp escapes your lips as ${((st as any).npcdesc ?? '')}'s hips pound into your ass over and over again. He's incessant, smashing into your pussy over.`);
    scene.text('<i>And it\'s amazing.</i>');
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('He\'s going hard, but his movements are still reacting to yours, paying attention to your body\'s nonverbal signals, and making each thrust feeling better than the last. His dick may be small but <i>damn</i>, does he know how to use it.');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('He\'s going hard, but his movements are still reacting to yours, paying attention to your body\'s nonverbal signals, and making each thrust feeling better than the last. <i>Damn</i>, does he know how to use his dick!');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          scene.text('He\'s going hard, but his movements are still reacting to yours, paying attention to your body\'s nonverbal signals, and making each thrust feeling better than the last. He doesn\'t just have a big cock, he knows how to use it too. If it hits an awkward spot, you feel him adjust. If it hits you just right, he makes sure to thrust it again just like that when your pussy can\'t help but squeeze him.');
          scene.text('Oh <i>fuck</i>. He\'s good at this.');
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            scene.text('He\'s going hard, but his movements are still reacting to yours, paying attention to your body\'s nonverbal signals, and making each thrust feeling better than the last. You would think that being fucked with such a giant dick would hurt, and it occasionally does, but not as often as you expected. He got a big gun <i>and</i> he knows how to use it. If it hits an awkward spot, you feel him adjust his angle on top of you. If it hits you just right, he makes sure to thrust it again just like that when your pussy can\'t help but squeeze him, minimizing pain and maximizing pleasure.');
            scene.text('Oh <i>fuck</i>. He\'s good at this.');
          }
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
      scene.actions([
        { label: 'Enjoy it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: Your eyes roll back in your head as <<$npcdesc>> incessantly pounds into you wit...
    scene.text(`Your eyes roll back in your head as ${((st as any).npcdesc ?? '')} incessantly pounds into you with his ${((st as any).dick_desc ?? '')} cock. Not every thrust is clean and every once in a while he bangs into you in a way that causes a sharp jab of pain inside you. But that's just part of going rough and you take it in stride, letting it fuel the rough-play mood.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    // TODO-QSP: dynamic text: <i>Do people really enjoy this?</i> you think to yourself as <<$npcdesc>> keeps ...
    scene.text(`<i>Do people really enjoy this?</i> you think to yourself as ${((st as any).npcdesc ?? '')} keeps pounding himself into your pussy. But for all the effort he's putting in, it's not bringing any pleasure. It doesn't <i>hurt</i> exactly, but it's definitely not getting you off.`);
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
        scene.actions([
          { label: 'Enjoy it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: Your eyes roll back in your head as <<$npcdesc>> incessantly pounds into you wit...
    scene.text(`Your eyes roll back in your head as ${((st as any).npcdesc ?? '')} incessantly pounds into you with his ${((st as any).dick_desc ?? '')} cock. Not every thrust is clean and every once in a while he bangs into you in a way that causes a sharp jab of pain inside you. But that's just part of going rough and you take it in stride, letting it fuel the rough-play mood.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    // TODO-QSP: dynamic text: <i>Do people really enjoy this?</i> you think to yourself as <<$npcdesc>> keeps ...
    scene.text(`<i>Do people really enjoy this?</i> you think to yourself as ${((st as any).npcdesc ?? '')} keeps pounding himself into your pussy. But for all the effort he's putting in, it's not bringing any pleasure. He's not paying any attention to your body's response, just thrusting wildly as fast as he can.`);
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'This hurts!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Does he think this is good?!</i>');
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy, just thrusting wildly and smashing his tiny cock into you without any care or attention. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: You''ve no idea how, but he''s somehow managing to find every bad spot inside yo...
        scene.text(`You've no idea how, but he's somehow managing to find every bad spot inside your pussy. He's just thrusting wildly, smashing his ${((st as any).dick_desc ?? '')} cock into you without any care or attention. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...`);
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: You''ve no idea how, but his big stupid cock is somehow managing to find every b...
          scene.text(`You've no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy. He's just thrusting wildly, smashing his ${((st as any).dick_desc ?? '')} cock into you without any care or attention. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Not only is his oversized cock straining your pussy to the limits, its also some...
            scene.text(`Not only is his oversized cock straining your pussy to the limits, its also somehow managing to find every bad spot inside your pussy. He's just thrusting wildly, smashing his ${((st as any).dick_desc ?? '')} cock into you without any care or attention Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...`);
          }
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: A stifled gasp of discomfort escapes your lips as <<$npcdesc>>''s hips meet your...
        scene.text(`A stifled gasp of discomfort escapes your lips as ${((s as any).npcdesc ?? '')}'s hips meet yours in clumsy thrust, sending a sharp jab of pain into your pussy. He keeps moving in weird ways, making nearly every pump of his ${((s as any).dick_desc ?? '')} dick into your pussy inevitably result in an awkward spot getting hit and a sharp prick of pain. What on earth is he doing?!`);
        scene.actions([
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Well he certainly has enthusiasm. But that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Well he certainly has enthusiasm. But not much skill. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new thrust into your pussy. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Something about his timing...
          scene.text(`Well he certainly has enthusiasm. But not much skill. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Well he certainly has enthusiasm. But not much skill. Half the problem is his co...
            scene.text(`Well he certainly has enthusiasm. But not much skill. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and every time you think it's about to get good, you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock hits another painful spots inside your pussy and your pleasure deflating like a balloon. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'This hurts!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('<i>Gah! What the fuck is wrong with him? Is it getting worse?!</i>');
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('You\'ve no idea how, but even with a dick as small as his, he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('You\'ve no idea how, but he\'s somehow managing to find every bad spot inside your pussy. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          scene.text('You\'ve no idea how, but his big stupid cock is somehow managing to find every bad spot inside your pussy with the force of a hammer. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            scene.text('Not only is his oversized cock straining your pussy to the limits, its also somehow managing to every bad spot inside your pussy with the force of a sledgehammer. Does he think your reactions of pain are pleasure? This is going to be the longest fuck of your life...');
          }
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        ]);
      }
    }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] < 75  &&  (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short'  ||  ((s as any).dick_desc ?? 0) === 'thin')) {
    scene.actions([
      { label: 'His dick is so small!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.text('<i>Holy shit,</i> you think to yourself. <i>How\'s a girl supposed to get off with a dick this small?</i>');
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>''s hips are smacking into your ass with an exceptional...
    scene.text(`${(((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}'s hips are smacking into your ass with an exceptional amount of force but despite that, you can't feel <i>anything</i> inside you. You didn't even know it was possible for someone to fuck you this hard without pleasure or even pain to show for it.`);
    if (((st as any).sex_ev ?? 0)?.['prostitution'] === 1) {
      scene.text('<i>At least I\'m getting paid for this...</i>');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['rough_enjoy'] !== 1) {
    scene.actions([
      { label: 'So rough!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggy3TooRough(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).WIP_enabled ?? 0) > 0  &&  ((st as any).stat ?? 0)?.['rape_count'] > 0  &&  ((st as any).trait_vars ?? 0)?.['repressed_trait'] === 0) {
      scene.actions([
        { label: 'Rape flashbacks', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rape_flashback'] = 1;
    scene.actions([
      { label: 'Hold it in', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/hard2.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_hurt'] = 1;
    if (((st as any).stat ?? 0)?.['rape_count'] === 1) {
      scene.text('Your arms give out from underneath you as you break down in terror, the memory of your rape explodes like a missile inside your mind. The images and sensations come flooding back to you, memories of your body being violated flashing before your eyes like a montage you can\'t turn off. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
    } else {
      if (((st as any).stat ?? 0)?.['rape_count'] < 5) {
        scene.text('Your arms give out from underneath you as you break down in terror, the memories the several times you\'ve been raped exploding like a missile inside your mind. The images and sensations come flooding back to you, memories of your body being violated flashing before your eyes like a montage you can\'t turn off. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
      } else {
        if (((st as any).stat ?? 0)?.['rape_count'] < 10) {
          scene.text('Your arms give out from underneath you as you break down in terror, the memories the several times you\'ve been raped exploding like a missile inside your mind. The images and sensations come flooding back to you, memories of your attackers all blurring together, combining into one horrible sensation like they\'re all violating you at once. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
        } else {
          scene.text('Your arms give out from underneath you as you break down in terror, reducing you to barely more than a shuddering mess as the trauma of your countless rapes threaten to overwhelm you. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
        }
      }
    }
    // TODO-QSP: dynamic text: You don''t want to ruin the mood. Besides, <<$npcdesc>> wouldn''t understand...
    scene.text(`You don't want to ruin the mood. Besides, ${((st as any).npcdesc ?? '')} wouldn't understand...`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Scream', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/hard2.mp4');
    scene.text('"<i><b>NO!</b></i>" you shriek. "<i><b>STOP! STOP! STOP! STOP! STOP!</b></i>"');
    if (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_hurt'] = 1;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['rape_hurt'] = 1;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_cum'] = 2;
      // TODO-QSP: dynamic text: But despite your desperate screams, <<$npcdesc>> doesn''t even slow down, instea...
      scene.text(`But despite your desperate screams, ${((st as any).npcdesc ?? '')} doesn't even slow down, instead continuing to pummel you from behind as you cry in terror.`);
      qspCall(st, 'sex_ev_cum', 'fuck_cum');
      qspCall(st, 'sex_ev_sex', 'fuck_continue');
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_talk2', '');
  } },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bored'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_cum'] = 1;
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    scene.img('images/shared/sex/vag/doggy/hard2.mp4');
    // TODO-QSP: dynamic text: For whatever reason, you can''t bring yourself to say anything, and simply endur...
    scene.text(`For whatever reason, you can't bring yourself to say anything, and simply endure the rough treatment. You sigh in relief when ${((st as any).npcdesc ?? '')} releases your hair but only for a brief moment when he uses his extra hand to grab hold of your ass and pound you even harder. You grab onto the edge of the bed and hang on for dear life, whimpering as he mercilessly fucks you.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'It hurts!', handler: (st: GameState) => {
    if (((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_speed_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 3)  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      scene.text('"Oh fuck! It hurts!" you cry.');
      // TODO-QSP: dynamic text: "Hurts fucking good doesn''t it?" <<$npcdesc>> grunts back, not even pausing for...
      scene.text(`"Hurts fucking good doesn't it?" ${((st as any).npcdesc ?? '')} grunts back, not even pausing for a single beat.`);
      scene.actions([
        { label: 'Please slow down!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    (st as any).orgasm_or = 'no';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_hurt'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('"Please!" you beg, tears welling up in your eyes. "Please slow down! I can\'t-! Take-!');
    // TODO-QSP: dynamic text: But <<$npcdesc>> is heedless of your cries. He keeps a firm hold on your hair an...
    scene.text(`But ${((st as any).npcdesc ?? '')} is heedless of your cries. He keeps a firm hold on your hair and pulls hard with every thrust, forcing unceasing cries of pain from your lips.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_sex', 'fuck_continue'
  } },
    ]);
  } },
        { label: 'If you slow down I will kill you', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', 1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: You scream another cry of agonizing pleasure and grimace at <<$npcdesc>>.
    scene.text(`You scream another cry of agonizing pleasure and grimace at ${((st as any).npcdesc ?? '')}.`);
    scene.text('"If you slow down I will <i>fucking</i> kill you," you snarl, throwing your hips forward to slam into his for more force.');
    qspCall(st, 'sex_ev_doggy', 'miss3_enjoy_desc');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_sex', 'fuck_continue'
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/shared/sex/vag/doggy/2.jpg');
      // TODO-QSP: dynamic text: "Oh fuck! It hurts!" you moan and <<$npcdesc>> stops abruptly, letting you colla...
      scene.text(`"Oh fuck! It hurts!" you moan and ${((st as any).npcdesc ?? '')} stops abruptly, letting you collapse to the bed as he releases your hair.`);
      if (((st as any).sex_ev ?? 0)?.['virgin'] === 1) {
        scene.text('"Oh! Sorry. I thought you might like it rough. Do you want me to stop?"');
      } else {
        scene.text('"Oh! Sorry. I thought you wouldn\'t mind. Do you want me to stop?"');
      }
      scene.actions([
        { label: 'No (enjoy)', handler: (st: GameState) => {
    ((st as any).npc_knows_pc_likes_rough = (st as any).npc_knows_pc_likes_rough ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('"No," you smile back at him. "I want you to pound me."');
    // TODO-QSP: dynamic text: In response, <<$npcdesc>> yanks you back by the hair even harder than before, sl...
    scene.text(`In response, ${((st as any).npcdesc ?? '')} yanks you back by the hair even harder than before, slamming his cock into you to fulfil your request.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_doggy', 'doggy3.1'] },
    ]);
  } },
        { label: 'Yes, gentle please', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['too_rough'] = 1;
    scene.text('"Yes please," you say, giving him a small smile. "A little more gently would be very nice..."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_doggy', 'doggy1.1'] },
    ]);
  } },
        { label: 'Not <i>too</i> gentle', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['too_rough'] = 1;
    scene.text('"You don\'t have to be <i>too</i> gentle with me," you giggle. "I just don\'t want to feel like I\'m having sex with Vlad the Impaler here."');
    scene.text('You sigh in relief as he picks up his pace again, this time without leaving you feel like you\'re being battered to bits.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_doggy', 'doggy2.2'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Fake an orgasm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_orgasm_count'] = ((st as any).sex_ev['fake_orgasm_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    (st as any).fake_orgasm = ((st as any).fake_orgasm ?? 0) + (1);
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    scene.img('images/shared/sex/vag/doggy/hard3.mp4');
    scene.text('"Ugh! Ugh! Ugh! <i>Ughhhh!!</i>"');
    // TODO-QSP: dynamic text: You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now ...
    scene.text(`You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now before crying out and clenching down on ${((st as any).npcdesc ?? '')}'s cock with your pussy as hard as you can, dramatically shaking your shoulders, faking climax.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down even more for a beat.
    scene.text(`${((st as any).npcdesc ?? '')} slows down even more for a beat.`);
    scene.text('"Did you just...?"');
    scene.text('"Yeah," you pant, forcing breathlessness into your voice.');
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Do you need me to slow down for a bit?"');
      scene.text('"That would... be nice," you smile.');
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_doggy', 'doggy1'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_doggy', 'doggy2'] },
        ]);
      }
    } else {
      scene.text('"I\'m going to keep going, okay?"');
      scene.text('You nod, not really wanting to put any more energy into the performance and he picks back up into his awful jackhammer pace again.');
      qspCall(st, 'sex_ev_cum', 'fuck_cum');
      qspCall(st, 'sex_ev_sex', 'fuck_continue');
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy3_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'doggy', 3);
  if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_fuck'] = 1;
    scene.img('images/shared/sex/vag/doggy/rough1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> suddenly grabs you by the hair, sending lances of pain through your...
    scene.text(`${((s as any).npcdesc ?? '')} suddenly grabs you by the hair, sending lances of pain through your scalp. He pulls hard and you gasp as you're yanked backwards and slammed into his cock with the force of a nail being smashed by a hammer.`);
    // TODO-QSP: dynamic text: "Yeah <i>bitch?!</i>" <<$npcdesc>> snarls. "You want me to fuck you harder? Well...
    scene.text(`"Yeah <i>bitch?!</i>" ${((s as any).npcdesc ?? '')} snarls. "You want me to fuck you harder? Well, then take it you fucking slut!" and starts roughly fucking you in a way completely unlike his previous mannerisms.`);
    scene.actions([
      { label: 'Enjoy it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggy3_1Desc(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Suffer', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_hurt'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    // TODO-QSP: dynamic text: Tears begin to well up in your eyes as he keeps fucking you roughly. It''s all y...
    scene.text(`Tears begin to well up in your eyes as he keeps fucking you roughly. It's all you can do not to sob, but ${((st as any).npcdesc ?? '')} is unrelenting. He keeps a firm hold on your hair and pulls hard with every thrust, forcing cries of pain from your lips.`);
    scene.text('This isn\'t what you wanted...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    scene.img('images/shared/sex/vag/doggy/hard1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> picks up the pace, pounding you from behind. You throw your hips ba...
    scene.text(`${((s as any).npcdesc ?? '')} picks up the pace, pounding you from behind. You throw your hips back in joyous ecstasy, feeling greater and greater pleasure every time his hips slam into you.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyChangePosition(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy3_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['rough_check'] === 0) {
    qspGoto(s, 'sex_ev_doggy', 'doggy3');
  }
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'doggy', 3);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggyVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take gasping breaths as <<$npcdesc>> keeps pounding his cock into you from b...
        scene.text(`You take gasping breaths as ${((s as any).npcdesc ?? '')} keeps pounding his cock into you from behind. Somehow, the stabbing pain between your legs is starting to go away. It seems your virgin pussy is starting to adjust to getting jackhammered.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s hips colliding with your ass. The agony induced by his rough fucking is nearly unbearable, but you're pridefully determined not to let a little pain cause you to pussy out of your first time and clench the bedsheets tight with both hands.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You whimper pathetically as <<$npcdesc>> keeps slamming into you from behind, cl...
            scene.text(`You whimper pathetically as ${((s as any).npcdesc ?? '')} keeps slamming into you from behind, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. Despite your best efforts, the pain is too great and wet drops roll down your cheeks and into the mattress as ${((s as any).npcdesc ?? '')} continues to pound you.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 4) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You sob openly as <<$npcdesc>> smashes his cock into you from behind. It hurts s...
              scene.text(`You sob openly as ${((s as any).npcdesc ?? '')} smashes his cock into you from behind. It hurts so much you think you're going to die, but you can't manage to tell him to stop. The only thing you can do is cry wordlessly as he drives you straight into the bed with his thrusts.`);
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take gasping breaths as <<$npcdesc>> keeps pounding his cock into you from b...
        scene.text(`You take gasping breaths as ${((s as any).npcdesc ?? '')} keeps pounding his cock into you from behind. You focus hard, trying with all your might to squeeze <i>some</i> kind of pleasure from this. Anything to make the pain go away. And somehow, after several minutes, it does. ${((s as any).npcdesc ?? '')} continues to pound your ass, but suddenly you feel able to tolerate it, even if it doesn't feel very good either.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s hips colliding with your ass. The agony induced by his rough fucking is nearly unbearable, but you're pridefully determined not to let the pain show, clenching the bedsheets tight with both hands to keep from crying out loud.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You whimper pathetically as <<$npcdesc>> keeps slamming into you from behind, cl...
            scene.text(`You whimper pathetically as ${((s as any).npcdesc ?? '')} keeps slamming into you from behind, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. Despite your best efforts, the pain is too great and tiny drops of moisture leak from your eyes and onto the mattress as ${((s as any).npcdesc ?? '')} continues to pound you.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 4) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You sob openly as <<$npcdesc>> smashes his cock into you from behind. It hurts s...
              scene.text(`You sob openly as ${((s as any).npcdesc ?? '')} smashes his cock into you from behind. It hurts so much you think you're going to die, but you can't manage to tell him to stop. The only thing you can do is cry wordlessly as he pounds you straight into the bed with his thrusts.`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you move your hips in time with his, throwing them back to meet <<...
      scene.text(`Nevertheless, you move your hips in time with his, throwing them back to meet ${((s as any).npcdesc ?? '')}'s demolishing thrusts and try to ride the wave, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        (s as any).orgasm_or = '';
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to pound your pussy from behind. Y...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? '')} continues to pound your pussy from behind. You aren't sure what changed, but it's like your body is coming alive. His cock stretches your walls, it's so <i>deep</i> inside you, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it hammer you harder and harder with greater satisfaction every time.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s cock as he pounds you, clenching your abdomen and t...
          scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s cock as he pounds you, clenching your abdomen and throwing your hips back in time with his, trying to squeeze your pussy tight around him to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You grunt in time with <<$npcdesc>>''s thrusts as he continues to pound his cock...
            scene.text(`You grunt in time with ${((s as any).npcdesc ?? '')}'s thrusts as he continues to pound his cock into you from behind. His manhood hammers deep inside you in a way that doesn't exactly feel "good", but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to pound his cock between your legs. I...
              scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to pound his cock between your legs. It still basically feels numb to your pussy other than the slamming of his hips against yours, but you don't want him to feel bad about it either so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. <<$npcdesc>> continues to relentlessly s...
                scene.text(`All your dirty talk is just that: talk. ${((s as any).npcdesc ?? '')} continues to relentlessly smash your pussy with his cock and you honestly can't say it feels very good. But you don't want ${((s as any).npcdesc ?? '')} to feel bad about it either so you play along, pretending otherwise.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> pounds you from behind. Your pussy...
        scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} pounds you from behind. Your pussy almost involuntarily tighten up, desperately throwing your hips back to meet ${((s as any).npcdesc ?? '')}'s thrusts. By the way his breathing changes, you think you're giving just as good as you're getting as you feel arousal dribble down your thighs.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] >= 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3_2MoanDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3_2SensationDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
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

function enterDoggy1StartPeriodDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His dick is wet with your period, re...
    scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His dick is wet with your period, red liquid streaming out of your pussy with every thrust. But it doesn't stop him from continuing to drive balls deep with his tiny dick every time.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, r...
      scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, red liquid streaming out of your pussy with every thrust. But it doesn't stop him from continuing to drive balls deep with his fat chode every time.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, r...
        scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, red liquid streaming out of your pussy with every thrust. But it doesn't stop him from continuing to drive balls deep with his skinny dick every time.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, r...
          scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, red liquid streaming out of your pussy with every thrust. But it doesn't stop him from continuing to drive balls deep with his dick every time.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, m...
              scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, making it easier for his thick cock to slide into your tight snatch. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep with every thrust.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, m...
              scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, making it easier for his thick cock to slide into your waiting snatch. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep with every thrust.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, m...
              scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, making it easier for his long cock to reach all the way inside you to kiss your cervix with its tip. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep with every thrust.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                if (((s as any).pcs_vag ?? 0) <= 10) {
                  // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, m...
                  scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, making it easier for his huge cock to ease into your tight snatch and reach all the way inside you to kiss your cervix with its tip. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep with every thrust.`);
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, p...
                  scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, paving the way for him to fill you with his huge cock, penetrating deep inside you to kiss your cervix with its tip. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep with every thrust.`);
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).pcs_vag ?? 0) <= 15) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His thick shaft is wet with your per...
                    scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His thick shaft is wet with your period, making it possible for his enormous cock to fit its girth into your tight snatch and reach all the way inside you to kiss your cervix with its tip. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep, straining against your walls, with every thrust.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His thick shaft is wet with your per...
                    scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His thick shaft is wet with your period, allowing him to slide his huge cock into you with ease and kiss your cervix with its tip. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep with every thrust.`);
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    if (((s as any).pcs_vag ?? 0) <= 15) {
                      // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, m...
                      scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, making it possible for him to somehow fit his entire ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock into your tight snatch. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep, pressing hard against your cervix, with every thrust.`);
                    } else {
                      // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, a...
                      scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, allowing him to slide his entire ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock into your tight snatch. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep, pressing hard against your cervix, with every thrust.`);
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      if (((s as any).pcs_vag ?? 0) <= 15) {
                        // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, m...
                        scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, making it possible for him to somehow fit his gigantic ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock into your tight snatch. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep, pressing hard against your cervix, with every thrust.`);
                      } else {
                        // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His shaft is wet with your period, a...
                        scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His shaft is wet with your period, allowing him to slide his gigantic ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock into your tight snatch. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep, pressing hard against your cervix, with every thrust.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        if (((s as any).pcs_vag ?? 0) <= 10) {
                          // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His thick shaft is wet with your per...
                          scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His thick shaft is wet with your period, making it possible for him to somehow fit his monstrous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock into your tight snatch. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep, pressing hard against your cervix and threatening to rip you in half, with every thrust.`);
                        } else {
                          if (((s as any).pcs_vag ?? 0) <= 25) {
                            // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His thick shaft is wet with your per...
                            scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His thick shaft is wet with your period, making it possible for him to somehow fit his monstrous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock into your snatch. You're no virgin, but calling this a tight squeeze would be a severe under-exaggeration at best. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep, pressing hard against your cervix and threatening to rip you in half with every thrust.`);
                          } else {
                            // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily. His thick shaft is wet with your per...
                            scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily. His thick shaft is wet with your period, making it possible for him to easily slide his monstrous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock into your snatch. The red liquid streams from your pussy and ${((s as any).npcdesc ?? '')} drives balls deep, pressing hard against your cervix and threatening to rip you in half with every thrust.`);
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

function enterDoggy1StartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
    scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before driving his tiny dick balls deep inside you.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
      scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before driving his fat chode balls deep inside you.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
        scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before driving his skinny dick balls deep inside you.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
          scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before driving his dick balls deep inside you.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
              scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before stretching you out with his thick cock until he drives it balls deep inside you again.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
              scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out just long enough to feel the empty absence of his thick cock until he drives it balls deep inside you again.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
              scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before driving his long dick back in, barely able to fit its generous length inside you`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out just long enough for your pussy to feel the absence of his huge cock before driving back in to fill you up, barely able to fit its entirety inside you.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).pcs_vag ?? 0) <= 15) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                    scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before splitting your tight pussy again, barely able to fit the entirety of his enormous cock inside you.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                    scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before stretching your welcoming pussy again, barely able to fit the entirety of his enormous cock inside you.`);
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                    scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before plunging back in, forcing as much of his ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock as he can fit inside you, and still leaving shaft to spare.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      if (((s as any).pcs_vag ?? 0) <= 20) {
                        // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                        scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before plunging back in, stretching your tight pussy to the limits as he's unable to fit the entire length of his gigantic cock inside you.`);
                      } else {
                        // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                        scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before plunging as much of his gigantic cock back in, just <i>barely</i> able to fit it inside you.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        if (((s as any).pcs_vag ?? 0) <= 10) {
                          // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                          scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before forcing the monstrous size of his ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm into your tight pussy, threatening to split you in half each time he fails to fit its length inside you.`);
                        } else {
                          if (((s as any).pcs_vag ?? 0) <= 25) {
                            // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                            scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before forcing the monstrous size of his ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm into your pussy. You're obviously no virgin, but this is ridiculous, and ${((s as any).npcdesc ?? '')}'s cock threatens to split you in half each time he fails to fit its length inside you.`);
                          } else {
                            // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                            scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before forcing the monstrous size of his ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm into your pussy. ${((s as any).npcdesc ?? '')}'s cock is so thick that your pussy strains to accommodate its girth even as he fails to fit its length inside you.`);
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

function enterDoggy1BoyTalk1(s: GameState, scene: SceneBuilder): void {
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
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
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

function enterDoggy1BoyTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> barely makes a sound as he thrusts into you. You can''t even hear h...
    scene.text(`${((s as any).npcdesc ?? '')} barely makes a sound as he thrusts into you. You can't even hear his breathing over the slap of your bodies colliding.`);
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grunts softly, panting as he thrusts into you.
      scene.text(`${((s as any).npcdesc ?? '')} grunts softly, panting as he thrusts into you.`);
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        // TODO-QSP: dynamic text: <<$npcdesc>> murmurs his words softly as he thrusts into you from behind.
        scene.text(`${((s as any).npcdesc ?? '')} murmurs his words softly as he thrusts into you from behind.`);
      } else {
        if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          // TODO-QSP: dynamic text: Despite the slow pace being maintained, <<$npcdesc>> is braying erratically like...
          scene.text(`Despite the slow pace being maintained, ${((s as any).npcdesc ?? '')} is braying erratically like a donkey.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy1EnjoyDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his dick thrusting inside you. T...
    scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his dick thrusting inside you. There's something about doggy style, a <i>depth</i> that you don't get in any other position, even with a dick as small as ${((s as any).npcdesc ?? '')}'s.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his dick thrusting inside you. T...
      scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his dick thrusting inside you. There's something about doggy style, a <i>depth</i> that you don't get in any other position. ${((s as any).npcdesc ?? '')} doesn't have much length to him, but doggy style more than makes up for that as he plunges his fat chode into you again and again.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his skinny dick thrusting inside...
        scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his skinny dick thrusting inside you. There's something about doggy style, a <i>depth</i> that you don't get in any other position. He's so deep inside you and you love feeling him draw all the way out before filling you all the way up again with every motion.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his dick thrusting inside you. T...
          scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his dick thrusting inside you. There's something about doggy style, a <i>depth</i> that you don't get in any other position. He's so deep inside you and you love feeling him draw all the way out before filling you all the way up again with every motion.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting inside you. T...
              scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting inside you. There's something about doggy style, a <i>depth</i> that you don't get in any other position. And his cock is so thick, you feel ready to split apart when his length is inside you but feel empty and vacant whenever he draws it back out.`);
            } else {
              // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting inside you. T...
              scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting inside you. There's something about doggy style, a <i>depth</i> that you don't get in any other position. And his cock is so thick, it <i>fills</i> you completely each time he pushes into you down to the base.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting inside you. T...
              scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting inside you. There's something about doggy style, a <i>depth</i> that you don't get in any other position. Plus with a nice long cock like ${((s as any).npcdesc ?? '')}'s, it goes deep inside you, gently bumping against your cervix in the most delightfully painful way.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting inside you. T...
                scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting inside you. There's something about doggy style, a <i>depth</i> that you don't get in any other position. Plus, ${((s as any).npcdesc ?? '')}'s cock is huge. Not only does it fill you completely but it's long enough to reach all the way to your cervix, sending shocks of blissful soreness through your uterus.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting inside you. T...
                  scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting inside you. There's something about doggy style, a <i>depth</i> that you don't get in any other position. Plus, ${((s as any).npcdesc ?? '')}'s cock is <i>enormous</i>. Your pussy struggles to accommodate its massive girth and its length reaches all the way to your cervix, sending shocks of blissful soreness through your uterus.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting inside you. T...
                    scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting inside you. There's something about doggy style, a <i>depth</i> that you don't get in any other position. And with a dick as long as ${((s as any).npcdesc ?? '')}'s, it reaches the deepest part of you.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      if (((s as any).pcs_vag ?? 0) <= 25) {
                        // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>>, getting wetter with every thrust. His gigantic c...
                        scene.text(`You groan beneath ${((s as any).npcdesc ?? '')}, getting wetter with every thrust. His gigantic cock fills you to the brim and then some, pummelling your insides with his sheer size in the most pleasurably painful way possible.`);
                      } else {
                        // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>>, getting wetter with every thrust. His gigantic c...
                        scene.text(`You groan beneath ${((s as any).npcdesc ?? '')}, getting wetter with every thrust. His gigantic cock fills you to the brim, pummelling your insides with his sheer size in the most pleasurably painful way possible.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        if (((s as any).pcs_vag ?? 0) <= 25) {
                          // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>>, getting wetter with every thrust. His monster co...
                          scene.text(`You groan beneath ${((s as any).npcdesc ?? '')}, getting wetter with every thrust. His monster cock is way too big for you in both girth and length, pummelling your insides and stretching your pussy to the point of pain, and you are <i><b>loving every second of it.</b></i>`);
                        } else {
                          // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>>, getting wetter with every thrust. His monster co...
                          scene.text(`You groan beneath ${((s as any).npcdesc ?? '')}, getting wetter with every thrust. His monster cock is destroying your pussy with size alone, smashing into your cunt with the gentle weight of a sledgehammer. But it doesn't feel bad. Far from it. The pain is euphoric and you can't get enough of his cock.`);
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

function enterDoggy1_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
    scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only the tip of his tiny dick is still inside of you before smoothly pushing himself back into your pussy, pressing his hips against your ass.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
      scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his thick chode back into your pussy, pressing his hips against your ass.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
        scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his skinny dick back into your pussy, pressing his hips against your ass.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
          scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into your pussy, pressing his hips against your ass.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
              scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his cock back into your tight pussy, his thick girth forcing gasps from your mouth.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
              scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his cock back into your pussy, his thick girth <i>filling</i> you from wall to wall.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
              scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into your pussy, filling you from end to end with his long shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into your pussy, eliciting mews of pleasure as his huge shaft <i>fills</i> you from end to end.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).pcs_vag ?? 0) <= 15) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                    scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into you, eliciting groans of pleasure as the length and girth of his enormous shaft <i>fills</i> you up, stretching your tight pussy in every conceivable manner.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                    scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into you, eliciting moans of pleasure as the length and girth of his enormous shaft <i>fills</i> you.`);
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                    scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into you. His manhood is so insanely long that the time between those two moments is measured in seconds and goosebumps wash over your skin as you feel each centimeter of his magnificent length slide in until he bumps against your cervix.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                      scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into you. His manhood is so insanely long that the time between those two moments is measured in seconds and goosebumps wash over your skin as you feel each centimeter of his gigantic cock slide in until he bumps against your cervix and you feel full of dick.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                        scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into you. His manhood is so insanely huge that the time between those two moments is measured in seconds and goosebumps wash over your skin as you feel each centimeter of his monstrous cock slide in, forcing your walls to stretch to accommodate it, until he bumps against your cervix and you feel <i>stuffed</i> with dick.`);
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

function enterDoggy1_2MoanDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
    scene.text('"<i>Mm~! Mn~! Mmm~! Nnn~!</i>"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His tiny d...
      scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His tiny dick driving as deep as it can inside you, finding the hidden secrets of your pussy that make you wetter and wetter with every thrust.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His fat ch...
        scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His fat chode driving as deep as it can inside you, forcing you to feel his girth, making you wetter and wetter with every thrust.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His skinny...
          scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His skinny dick driving as deep as it can inside you, finding the hidden secrets of your pussy that make you wetter and wetter with every thrust.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His cock d...
            scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His cock driving deep inside you, <i>filling</i> you, making you wetter and wetter with every thrust.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              if (((s as any).pcs_vag ?? 0) <= 10) {
                // TODO-QSP: dynamic text: Tiny mews escape your lips as <<$npcdesc>> continues to fuck you with his thick ...
                scene.text(`Tiny mews escape your lips as ${((s as any).npcdesc ?? '')} continues to fuck you with his thick cock. Slowly. Gently. He drives it deep inside you, <i>stretching</i> your tight pussy with its exceptional girth, making you wetter and wetter with every thrust.`);
              } else {
                // TODO-QSP: dynamic text: Soft moans escape your lips as <<$npcdesc>> continues to fuck you with his thick...
                scene.text(`Soft moans escape your lips as ${((s as any).npcdesc ?? '')} continues to fuck you with his thick cock. Slowly. Gently. He drives it deep inside you, <i>filling</i> you with its exceptional girth, making you wetter and wetter with every thrust.`);
              }
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His long c...
                scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His long cock driving deep inside you until it's plunged to the hilt, its presence felt even in the deepest parts of your pussy, making you wetter and wetter with every thrust.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His huge c...
                  scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His huge cock driving deep inside you until it's plunged to the hilt, its presence felt even in the deepest parts of your pussy, <i>filling</i> you, making you wetter and wetter with every thrust.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    if (((s as any).pcs_vag ?? 0) <= 15) {
                      // TODO-QSP: dynamic text: Tiny mews escape your lips as <<$npcdesc>> continues to fuck you with his enormo...
                      scene.text(`Tiny mews escape your lips as ${((s as any).npcdesc ?? '')} continues to fuck you with his enormous cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, making its presence felt in the deepest parts of your tight pussy even as it <i>stretches</i> you to accommodate its exceptional girth. But you love it, becoming wetter and wetter with every thrust.`);
                    } else {
                      // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to fuck you with his enormous cock. Slo...
                      scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to fuck you with his enormous cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, making its presence felt in the deepest parts of your tight pussy even as it <i>stretches</i> you to accommodate its exceptional girth. But you love it, becoming wetter and wetter with every thrust.`);
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to fuck you with his exceptionally leng...
                      scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to fuck you with his exceptionally lengthy cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, forcing groans from your lips as it knocks against your cervix. It hurts, but it's a good hurt, like a gentle hammering, and the pain just makes you wetter and wetter with every thrust.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: You groan softly as <<$npcdesc>> continues to fuck you with his gigantic cock. S...
                        scene.text(`You groan softly as ${((s as any).npcdesc ?? '')} continues to fuck you with his gigantic cock. Slowly. Gently. He drives it deep inside you, <i>filling</i> you until it's plunged to the hilt, forcing groans from your lips as it knocks against your cervix. It hurts, but it's a good hurt, like a gentle hammering, and you get wetter and wetter with every thrust.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to fuck you with his gigantic cock. Slo...
                          scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to fuck you with his gigantic cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, forcing whimpers from your lips as it knocks against your cervix with its insane length and threatens to tear you in half with its absurd girth. It hurts, but it's a good hurt, like a gentle hammering, and you get wetter and wetter with every thrust.`);
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
      scene.text('"<i>Ahh! Yes! Ahh! Ahh! Ah~!</i>"');
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His tiny ...
        scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His tiny dick driving as deep as it can inside you, finding the hidden secrets of your pussy that make you wetter and wetter with every thrust.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His fat c...
          scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His fat chode driving as deep as it can inside you, forcing you to feel his girth, making you wetter and wetter with every thrust.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His skinn...
            scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His skinny dick driving as deep as it can inside you, finding the hidden secrets of your pussy that make you wetter and wetter with every thrust.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His cock ...
              scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His cock driving deep inside you, <i>filling</i> you, making you wetter and wetter with every thrust.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                if (((s as any).pcs_vag ?? 0) <= 10) {
                  // TODO-QSP: dynamic text: Loud groans escape your lips as <<$npcdesc>> continues to fuck you with his thic...
                  scene.text(`Loud groans escape your lips as ${((s as any).npcdesc ?? '')} continues to fuck you with his thick cock. Slowly. Gently. He drives it deep inside you, <i>stretching</i> your tight pussy with its exceptional girth, making you wetter and wetter with every thrust.`);
                } else {
                  // TODO-QSP: dynamic text: Loud moans escape your lips as <<$npcdesc>> continues to fuck you with his thick...
                  scene.text(`Loud moans escape your lips as ${((s as any).npcdesc ?? '')} continues to fuck you with his thick cock. Slowly. Gently. He drives it deep inside you, <i>filling</i> you with its exceptional girth, making you wetter and wetter with every thrust.`);
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His long ...
                  scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His long cock driving deep inside you until it's plunged to the hilt, its presence felt even in the deepest parts of your pussy, making you wetter and wetter with every thrust.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His huge ...
                    scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His huge cock driving deep inside you until it's plunged to the hilt, its presence felt even in the deepest parts of your pussy, <i>filling</i> you, making you wetter and wetter with every thrust.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      if (((s as any).pcs_vag ?? 0) <= 15) {
                        // TODO-QSP: dynamic text: Loud groans escape your lips as <<$npcdesc>> continues to fuck you with his enor...
                        scene.text(`Loud groans escape your lips as ${((s as any).npcdesc ?? '')} continues to fuck you with his enormous cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, making its presence felt in the deepest parts of your tight pussy even as it <i>stretches</i> you to accommodate its exceptional girth. But you love it, becoming wetter and wetter with every thrust.`);
                      } else {
                        // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you with his enormous cock. Sl...
                        scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you with his enormous cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, making its presence felt in the deepest parts of your tight pussy even as it <i>stretches</i> you to accommodate its exceptional girth. But you love it, becoming wetter and wetter with every thrust.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you with his exceptionally len...
                        scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you with his exceptionally lengthy cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, forcing groans from your lips as it knocks against your cervix. It hurts, but it's a good hurt, like a gentle hammering, and the pain just makes you wetter and wetter with every thrust.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: dynamic text: You groan loudly as <<$npcdesc>> continues to fuck you with his gigantic cock. S...
                          scene.text(`You groan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you with his gigantic cock. Slowly. Gently. He drives it deep inside you, <i>filling</i> you until it's plunged to the hilt, forcing whimpers from your lips as it knocks against your cervix. It hurts, but it's a good hurt, like a gentle hammering, and you get wetter and wetter with every thrust.`);
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you with his gigantic cock. Sl...
                            scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you with his gigantic cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, forcing whimpers from your lips as it knocks against your cervix with its insane length and threatens to tear you in half with its absurd girth. It hurts, but it's a good hurt, and you get wetter and wetter with every thrust.`);
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

function enterDoggy1_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Fuck~!" you pant. "Your cock is so fucking hard inside me~! Oh fu...
    } else {
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: dynamic text: "Ah~! Yes~! Just like that~!" you moan, your voice a hoarse with arousal as <<$n...
        scene.text(`"Ah~! Yes~! Just like that~!" you moan, your voice a hoarse with arousal as ${((s as any).npcdesc ?? '')} does an amazing job fucking you with his tiny cock. "You're so good! Right there~! Right there!"`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: dynamic text: "Ah~! Yes~! Just like that~!" you moan, your voice a hoarse with arousal as <<$n...
          scene.text(`"Ah~! Yes~! Just like that~!" you moan, your voice a hoarse with arousal as ${((s as any).npcdesc ?? '')} does an amazing job fucking you with his stubby cock. "Fuck me with your fat chode!"`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: dynamic text: "Ah~! Yes~! Just like that~!" you moan, your voice a hoarse with arousal as <<$n...
            scene.text(`"Ah~! Yes~! Just like that~!" you moan, your voice a hoarse with arousal as ${((s as any).npcdesc ?? '')} does an amazing job fucking you with his skinny dick. "You're so good! Right there! Right there~!"`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              scene.text('"Ah~! Yes~! Just like that~!" you moan, your voice a hoarse with arousal. "You\'re amazing! I\'m <i>so</i> wet..."');
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                if (((s as any).pcs_vag ?? 0) <= 10) {
                  scene.text('"Ah~! Yes~! Just like that~!" you moan, your voice a hoarse with arousal. "Ungh~! You\'re stretching me out! It\'s so good! I\'m <i>so</i> wet..."');
                } else {
                  scene.text('"Ah~! Yes~! Just like that~!" you moan, your voice a hoarse with arousal. "Ungh~! It feels so good~! Fuck me with your big cock~!"');
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  scene.text('"Ungh~!" you groan, your voice a hoarse with arousal. "You\'re so deep! Nngh~! Right there! Right there~!"');
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    scene.text('"Ungh~!" you groan, your voice a hoarse with arousal. "You\'re so <i>big</i>! Nngh~! Right there! Right there~!"');
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      scene.text('"Ungh~!" you groan, your voice a hoarse with arousal. "You\'re so <i>fucking big</i>! Don\'t stop!"');
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        scene.text('"Ungh~!" you groan, your voice a hoarse with arousal. "Oh <i>fuck!</i> I feel you in my stomach~!"');
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          scene.text('"Ungh~! <i>Fuck!</i>" you groan, your voice a hoarse with arousal. "Oh <i>fuck!</i> You\'re so <i>fucking big</i>! You\'re stretching me out~! I can feel you in my stomach~!"');
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            scene.text('"Ungh~! <i>Fuck!</i>" you groan, your voice a hoarse with arousal. "Oh <i>fuck!</i> You\'re so <i>fucking big</i>! You\'re tearing me in half! Don\'t stop~!"');
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
      if (((s as any).pcs_horny ?? 0) >= 60) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! Yes~! Fuck~!" you moan softly, barely louder than a whisper. "You\'re gonna make me come~!"');
        } else {
          scene.text('"Oh <i>fuck</i>~!" you moan. "I\'m gonna come~!"');
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! I\'m <i>so</i> wet..." you mew softly. "You feel so good inside me~!"');
        } else {
          scene.text('"Ah~! That feels <i>so good</i>," you moan quietly. "I\'m gonna go crazy~!"');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'technique') {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Yes~! Just like that~!" you moan. "You\'re so good~! Don\'t stop~! Don\'t stop~!"');
        } else {
          scene.text('"Yes~!" you moan hoarsely. "Fuck my pussy~! Fuck my pussy with your fucking cock~!"');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'dirty_girl') {
          if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Who''s pussy is this?" <<$npcdesc>> growls as he moves his cock inside you with...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc ?? '')} growls as he moves his cock inside you with tantalizing slowness.`);
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
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy1_2SensationDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> is rubbing right against your g-sp...
    scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} is rubbing right against your g-spot with his tiny dick. You can feel your wetness spreading, running down your thighs, heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> is stretching your lips out just r...
      scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} is stretching your lips out just right while the tip of his fat chode rubs right against your g-spot. You can feel your wetness spreading, running down your thighs, heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> is rubbing right against your g-sp...
        scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} is rubbing right against your g-spot with his skinny dick. You can feel your wetness spreading, running down your thighs, heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> fills you up just right with his d...
          scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} fills you up just right with his dick, reaching deep inside you with his dick. You can feel your wetness spreading, running down your thighs, heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> fills you up to the brim with his ...
            scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} fills you up to the brim with his thick cock, stretching your walls and reaching deep inside you. You can feel your wetness spreading, running down your thighs, heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> rubs against your g-spot with ever...
              scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} rubs against your g-spot with every thrust of his lengthy manhood, reaching depths inside you rarely found by cocks of shorter length. You can feel your wetness spreading, running down your thighs, heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> filling you completely with his hu...
                scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} filling you completely with his huge manhood and reaching depths inside you rarely found by cocks of shorter length. You can feel your wetness spreading, running down your thighs, heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> stuffs you to your limits with his...
                  scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} stuffs you to your limits with his enormous cock. Both his length and girth are exceptional and you can feel it straining inside your pussy, stretching you in every way. Your wetness spreads, running down your thighs. Heat radiates from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> bumps into your cervix with every ...
                    scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} bumps into your cervix with every thrust of his ridiculously long cock. Collisions turn into soreness, soreness turns into satisfaction, you can feel him in your stomach. <i>And its so good</i>. Wetness spreads, running down your thighs. Heat radiates from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> fills your pussy up and then some,...
                      scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} fills your pussy up and then some, bumping into your cervix with every thrust of his gigantic cock. Collisions turn into soreness, soreness turns into satisfaction, you can feel him in your stomach. <i>And its so good</i>. Wetness spreads, running down your thighs. Heat radiates from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> fills your pussy up and then some,...
                        scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} fills your pussy up and then some, bumping into your cervix and threatening to tear you in half with every thrust of his monstrous cock. Your pussy feels stretched to its limits and your cervix feels like it's being gently punched by a baseball bat. <i>And it feels so good</i>. Your wetness spreads, running down your thighs. Heat radiates from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
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

function enterDoggy2StartPeriodDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
    scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, the sloppy sounds of your period leaking around his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
      scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, the sloppy sounds of your period squelching around his thick chode.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
        scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, the sloppy sounds of your period leaking from your pussy around his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
          scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass and his cock plunges into your pussy, a little wetter sounding than usual on account of your period.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
            scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, the sloppy squelching sounds of your period being forced from your pussy by his thick shaft.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
              scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his long dick hammers deep inside you. Wet slaps echo around the room as his hips collide with your ass, the sloppy sounds of your period squelching around his long shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick hammers deep inside you. Wet slaps echo around the room as his hips collide with your ass, the huge size of his cock forcing squelches from your bleeding cunt.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                  scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick fills you to the brim. Wet slaps echo around the room as his hips collide with your ass, his enormous cock leaving room for nothing else, forcing the blood from your menstruating snatch.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                    scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick batters your insides with its exceptional length. Wet slaps echo around the room as his hips collide with your ass, the sloppy sounds of your period squelching around his lengthy shaft.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                      scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick fills you to the brim. Sloppy wet slaps echo around the room as ${((s as any).npcdesc ?? '')} batters your bleeding pussy with his gigantic cock.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                        scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your pussy to strain and stretch around his long, girthy shaft. Sloppy wet slaps echo around the room as ${((s as any).npcdesc ?? '')} repeatedly batters your bleeding pussy with his monstrous cock.`);
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

function enterDoggy2StartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
    scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, unceasingly thrusting into you with his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
      scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, unceasingly thrusting into you with his thick chode.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
        scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, unceasingly thrusting into you with his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
          scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room with every thrust and he drives his cock deep as deep as he can every time.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
            scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, the sloppy squelching sounds of your pussy fucked by his thick shaft.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
              scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his long dick hammers deep inside you. Wet slaps echo around the room as his hips collide with your ass, the sloppy sounds of your pussy squelching around his long shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick hammers deep inside you. Wet slaps echo around the room as his hips collide with your ass, the huge size of his cock forcing squelches from your cunt.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                  scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his enormous dick fills you to the brim. Wet slaps echo around the room as his hips collide with your ass, forcing loud squelches from your snatch with his long girthy cock.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                    scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick batters your insides with its exceptional length. Wet slaps echo around the room as his hips collide with your ass, the sloppy sounds of your pussy squelching around his lengthy shaft.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                      scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his gigantic dick fills you to the brim. Sloppy wet slaps echo around the room as ${((s as any).npcdesc ?? '')} batters your pussy with his long hard cock.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                        scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your pussy to strain and stretch around his long, girthy shaft. Sloppy wet slaps echo around the room as ${((s as any).npcdesc ?? '')} repeatedly batters your pussy with his monstrous cock.`);
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

function enterDoggy2BoyTalk1(s: GameState, scene: SceneBuilder): void {
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
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
            } else {
              if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text('"<i>Hnn~!</i> You like that you fucking whore? <i>Hnn~!</i> Of course you do, you dirty little cumslut..."');
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
                scene.text('"<i>Hnn~!</i> Yeah... <i>Hnn~!</i> Take that cock like the slut you are..."');
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

function enterDoggy2BoyTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> barely makes a sound as he thrusts into you. You can''t even hear h...
    scene.text(`${((s as any).npcdesc ?? '')} barely makes a sound as he thrusts into you. You can't even hear his breathing over the slap of your bodies colliding.`);
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grunts softly, panting as he thrusts into you.
      scene.text(`${((s as any).npcdesc ?? '')} grunts softly, panting as he thrusts into you.`);
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        // TODO-QSP: dynamic text: <<$npcdesc>> murmurs his words softly as he thrusts into you from behind.
        scene.text(`${((s as any).npcdesc ?? '')} murmurs his words softly as he thrusts into you from behind.`);
      } else {
        if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          // TODO-QSP: dynamic text: <<$npcdesc>> is braying erratically like a donkey.
          scene.text(`${((s as any).npcdesc ?? '')} is braying erratically like a donkey.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy2EnjoyDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, his tiny dick wiggling around i...
    scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, his tiny dick wiggling around inside you but more than made up for by his enthusiasm. Waves of pleasure reverberate through your body every time his hips collide with your ass.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, his thick chode stretching the ...
      scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, his thick chode stretching the opening of your pussy with his balls deep thrusts. Waves of pleasure reverberate through your body every time his hips collide with your ass.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, his skinny dick slipping in and...
        scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, his skinny dick slipping in and out of you with speed. Waves of pleasure reverberate through your body every time his hips collide with your ass.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, thrusting his dick balls deep i...
          scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, thrusting his dick balls deep into you from behind over and over again. Waves of pleasure reverberate through your body every time his hips collide with your ass.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging his thick cock balls d...
            scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging his thick cock balls deep into you from behind over and over again. Your pussy stretches with every thrust and waves of pleasure reverberate through your body every time his hips collide with your ass.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging his lengthy cock balls...
              scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging his lengthy cock balls deep into you from behind over and over again. He's so <i>deep</i> inside you and waves of pleasure reverberate through your body every time his hips collide with your ass.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging his huge cock balls de...
                scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging his huge cock balls deep into you from behind over and over again. He's so <i>deep</i> inside you, filling you from end to end with cock, and waves of pleasure reverberate through your body every time his hips collide with your ass.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging his huge cock balls de...
                  scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging his huge cock balls deep into you from behind over and over again. He's so <i>deep</i>, so <i>big</i> inside you, filling you from end to end with his length and stretching you to your limits with his magnificent girth. Waves of pleasure reverberate through your body every time his hips collide with your ass.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging the great length of hi...
                    scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging the great length of his cock balls deep into you from behind over and over again. He's so <i>deep</i> that it hurts, but that only makes you even wetter as waves of pleasure reverberate through your body every time his hips collide with your ass.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging the his gigantic cock ...
                      scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging the his gigantic cock balls deep into you from behind over and over again. He <i>stuffs</i> you with dick, so deep that it hurts, but that only makes you even wetter as waves of pleasure reverberate through your body every time his hips collide with your ass.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging the his monstrous cock...
                        scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging the his monstrous cock balls deep into you from behind over and over again. He <i>stuffs</i> you with dick, so deep that it hurts, so thick that you feel ready to tear in half, but that only makes you even wetter as waves of pleasure reverberate through your body every time his hips collide with your ass.`);
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

function enterDoggy2_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'doggy1') {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
      scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. ${((s as any).npcdesc ?? '')}'s hips crash into yours, unceasingly thrusting into you with his tiny dick. Wet slapping noises sound alongside the clapping of your cheeks and you sigh in deep satisfaction.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
        scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. ${((s as any).npcdesc ?? '')}'s hips crash into yours, unceasingly thrusting into you with his thick chode. Wet slapping noises sound alongside the clapping of your cheeks and you sigh in deep satisfaction.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
          scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slapping noises sound alongside the clapping of your cheeks as ${((s as any).npcdesc ?? '')} thrusts unceasingly into you with his skinny dick.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
            scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slapping noises sound alongside the clapping of your cheeks as ${((s as any).npcdesc ?? '')} drives his cock deep as deep as he can every time.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
              scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy squelching of your pussy getting reamed by his thick shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy wet squelching of your dripping cunt getting repeatedly impaled by his long shaft.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                  scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc ?? '')}'s dick hammers deep inside you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, the huge size of his cock forcing sloppy wet squelching from your dripping cunt.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                    scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc ?? '')}'s enormous dick stretches you to the limit. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, the enormous size of his cock forcing sloppy wet squelching from your dripping cunt.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                      scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and his dick batters your insides with its exceptional length. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy wet squelching of your dripping cunt getting repeatedly impaled by his lengthy shaft.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                        scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and his gigantic dick fills you to your absolute limit. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, pummelling your insides and forcing sloppy wet squelching from your dripping cunt.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                          scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your pussy to strain and stretch around his monstrously long and girthy shaft. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, pummelling your insides and forcing sloppy wet squelching from your dripping cunt.`);
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
    if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'doggy3') {
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
        scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. ${((s as any).npcdesc ?? '')}'s hips crash into yours, unceasingly thrusting into you with his tiny dick. Wet slapping noises sound alongside the clapping of your cheeks and you sigh in deep satisfaction.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
          scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. ${((s as any).npcdesc ?? '')}'s hips crash into yours, unceasingly thrusting into you with his thick chode. Wet slapping noises sound alongside the clapping of your cheeks and you sigh in deep satisfaction.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
            scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slapping noises sound alongside the clapping of your cheeks as ${((s as any).npcdesc ?? '')} thrusts unceasingly into you with his skinny dick.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
              scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slapping noises sound alongside the clapping of your cheeks as ${((s as any).npcdesc ?? '')} drives his cock deep as deep as he can every time.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy squelching of your pussy getting reamed by his thick shaft.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                  scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy wet squelching of your dripping cunt getting repeatedly impaled by his long shaft.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                    scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc ?? '')}'s dick hammers deep inside you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, the huge size of his cock forcing sloppy wet squelching from your dripping cunt.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                      scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc ?? '')}'s enormous dick stretches you to the limit. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, the enormous size of his cock forcing sloppy wet squelching from your dripping cunt.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                        scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and his dick batters your insides with its exceptional length. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy wet squelching of your dripping cunt getting repeatedly impaled by his lengthy shaft.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                          scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and his gigantic dick fills you to your absolute limit. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, pummelling your insides and forcing sloppy wet squelching from your dripping cunt.`);
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace and you breathe a sigh of reli...
                            scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace and you breathe a sigh of relief. With your pussy no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your pussy to strain and stretch around his monstrously long and girthy shaft. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, pummelling your insides and forcing sloppy wet squelching from your dripping cunt.`);
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

function enterDoggy2_2MoanDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan_describe'] = 'softly';
  } else {
    if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan_describe'] = 'loudly';
    }
  }
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you. He po...
    scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you. He pounds into you from behind, giving you the strangest satisfaction of pleasure that has very little to do with the tiny dick inside you.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you. His t...
      scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you. His thick chode pounds into you from behind, wonderfully stretching your pussy like a good three-finger fucking, but better.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
        scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind. He pounds your ass, rubbing right up against your g-spot with his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
          scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind. He pounds your ass, rubbing right up against your g-spot with his dick.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
            scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind, pounding you with his <i>thick</i> cock that stretches your walls, squeezing pleasure from your pussy with every thrust.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
              scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind, pounding you with his long-ass cock that reaches the very depths of your pussy without even trying.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
                scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind, pounding you with his huge cock that fills you wonderfully and reaches the very depths of your pussy without even trying.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
                  scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind, pounding you with his enormous cock that penetrates you to the depths of your pussy and stretches your walls, squeezing pleasure from your pussy with every thrust.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
                    scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind with his amazingly lengthy cock, literally pounding pleasure from your cervix with every thrust. Soreness is quickly building up inside you and <i>it feels so good.</i>`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
                      scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind with his gigantic cock, literally pounding pleasure from your cervix with every thrust. Soreness is quickly building up between your legs and <i>it feels so good.</i>`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
                        scene.text(`You moan ${(((s as any).sex_ev ?? 0)?.['moan_describe'] ?? '')} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind with his monstrous cock. It's stupidly huge, stretching you to breaking with every thrust and literally pounding your cervix with every thrust. Your pussy is so sore and <i>it feels so good.</i>`);
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

function enterDoggy2_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Fuck~!" you pant. "Your cock is so fucking hard inside me~! Oh fu...
    } else {
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        scene.text('"Ah! <i>Fuck!</i> Yes! Yes! Fuck my pussy with your tiny dick! " you moan loudly. "Don\'t stop! You\'re so <i>fucking</i> good!"');
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          scene.text('"Ah! <i>Fuck!</i> Yes! Yes! Fuck my pussy with your fat chode! " you moan loudly. "Don\'t stop! You\'re so <i>fucking</i> good!"');
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            scene.text('"Ah! <i>Fuck!</i> Yes! Yes! Fuck my pussy with your skinny dick! " you moan loudly. "Don\'t stop! You\'re so <i>fucking</i> good!"');
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              scene.text('"Ah! <i>Fuck!</i> Yes! Yes! Fuck my pussy just like that!" you moan loudly. "Don\'t stop! You\'re so <i>fucking</i> good!"');
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                if (((s as any).pcs_vag ?? 0) <= 10) {
                  scene.text('"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck, you\'re so big! You\'re stretching me out! Don\'t stop! Fuck my pussy with your big cock! It\'s so good!"');
                } else {
                  scene.text('"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Don\'t stop! Fuck my pussy with your big cock! Fuck, you\'re so big! You\'re so <i>fucking</i> good!"');
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  scene.text('"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Ungh~! You\'re <i>so</i> deep! Right there! Right there! You\'re so <i>fucking</i> good!"');
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    scene.text('"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck my pussy with your huge cock! Ungh~! You\'re <i>so</i> deep! You\'re so <i>fucking</i> good!"');
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      scene.text('"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck my pussy with your huge cock! Ungh~! You\'re <i>so</i> deep! You\'re <i>so</i> big! You\'re so <i>fucking</i> good!"');
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        scene.text('"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Oh <i>fuck!</i> I feel you in my stomach~! It\'s so good!!"');
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          scene.text('"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Oh <i>fuck!</i> You\'re <i>so</i> deep! You\'re so <i>fucking big</i>! I can feel you in my stomach~! Don\'t stop~!"');
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            scene.text('"Ungh~! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck me with your monster cock~! Oh <i>fuck!</i> You\'re so <i>fucking big</i>! You\'re tearing me in half! I can feel you in my stomach~! Don\'t stop~! Don\'t stop~! Don\'t stop~!"');
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
          scene.text('"Ungh~! Yes~! Fuck~!" you pant. "You\'re gonna make me come~!"');
        } else {
          scene.text('"Oh fuck~! <i>I\'m gonna come~! I\'m gonna come~! I\'m gonna come~!</i>" you moan. "Don\'t stop!"');
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! I\'m <i>so</i> wet..." you moan. "You feel so good inside me~!"');
        } else {
          scene.text('"My pussy can\'t get enough of you~!" you moan. "You\'re making me so wet~!"');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'technique') {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Yes~! Just like that~!" you moan. "You\'re so fucking good~! Don\'t stop~! Don\'t stop~!"');
        } else {
          scene.text('"Ah~! You\'re so good~!" you moan. "You\'re driving me crazy~!"');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'dirty_girl') {
          if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Who''s pussy is this?" <<$npcdesc>> growls as he slowly withdraws his cock befo...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc ?? '')} growls as he slowly withdraws his cock before ramming it back into your cunt.`);
            scene.text('"Yours~!" you whimper into the bedsheets.');
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

function enterDoggy2_2SensationDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s cock inside you, l...
    scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s cock inside you, letting the pressure build inside you as he literally pounds pleasure into you from behind with his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s cock inside you, l...
      scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s cock inside you, letting the pressure build inside you as he literally pounds pleasure into you from behind with his thick chode.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s cock inside you, l...
        scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s cock inside you, letting the pressure build inside you as he literally pounds pleasure into you from behind with his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s cock filling your ...
          scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s cock filling your pussy, letting the pressure build inside you as he literally pounds pleasure into you from behind with his dick.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s thick cock stretch...
            scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s thick cock stretching the walls of your pussy, letting the pressure build inside you as he literally pounds pleasure into you from behind.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s long cock reaching...
              scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s long cock reaching deep inside your pussy, letting the pressure build inside you as he literally pounds pleasure into you from behind.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s huge cock filling ...
                scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s huge cock filling you up and reaching deep inside your pussy, letting the pressure build inside you as he literally pounds pleasure into you from behind.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s enormous cock that...
                  scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s enormous cock that stretches you to your limits and fills you up from base to tip, letting the pressure build inside you as he literally pounds pleasure into you from behind.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s lengthy cock that ...
                    scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s lengthy cock that batters your cervix, a feeling that you sense in your stomach, letting him literally pound pain and pleasure into you from behind.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s gigantic cock that...
                      scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s gigantic cock that fills you past your limits as it batters your cervix, a feeling that you sense in your stomach, letting him literally pound pain and pleasure into you from behind.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        scene.text('You groan wordlessly, unable to have any kind of conscious thought except for the monstrous cock inside you, filling you with pain and pleasure, as it smashes into your cervix and stretches your pussy to the point of breaking.');
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

function enterDoggy3StartPeriodDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
    scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His tiny dick slams into you with such power that you can feel it force the menstrual blood from your uterus, sending it running down your thighs.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
      scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His fat chode slams into you with such power that you can feel it force the menstrual blood from your uterus, sending it running down your thighs.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
        scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His skinny dick slams into you with such power that you can feel it force the menstrual blood from your uterus, sending it running down your thighs.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
          scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His dick slams into you with such power that you can feel it force the menstrual blood from your uterus, sending it running down your thighs.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
            scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His thick cock slams into you with such power that you can feel it force the menstrual blood from your uterus, sending it running down your thighs.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
              scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His long cock slams into you with such power that you can feel it force the menstrual blood from your uterus, sending it running down your thighs.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
                scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His huge cock slams into you with such power that you can feel it force the menstrual blood from your uterus, sending it running down your thighs.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
                  scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His enormous cock slams into you with such power that your pussy is left no room for the blood leaking from your uterus and streams of blood run down your thighs.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
                    scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His lengthy cock is so long that it slams into your cervix, battering the blood from your uterus and streams of blood run down your thighs.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
                      scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His gigantic cock is so long that it slams into your cervix, filling you completely and battering the blood from your uterus and streams of blood run down your thighs.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> drives himself in and out of your pussy with tremendous strength an...
                        scene.text(`${((s as any).npcdesc ?? '')} drives himself in and out of your pussy with tremendous strength and the sound of your cheeks getting clapped echoes off the walls. His monstrous cock is so long that it slams into your cervix, while also being so girthy that it feels like the blood could be coming from your pussy getting torn in half, rather than your period.`);
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

function enterDoggy3StartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
    scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
      scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his fat chode.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
        scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
          scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his cock.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
            scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his thick cock.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
              scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his long cock.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
                scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his huge cock.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
                  scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his enormous cock.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
                    scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his lengthy cock.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
                      scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his gigantic cock.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force fucking you as hard as he ca...
                        scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force fucking you as hard as he can with his monstrous cock.`);
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

function enterDoggy3BoyTalk1(s: GameState, scene: SceneBuilder): void {
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
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggy3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
            } else {
              if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text('"<i>Hnn~!</i> You like that? <i>Hnn~!</i> You like that when I pound your fucking pussy?"');
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

function enterDoggy3BoyTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> barely makes a sound as he thrusts into you. You can''t even hear h...
    scene.text(`${((s as any).npcdesc ?? '')} barely makes a sound as he thrusts into you. You can't even hear his breathing over the slap of his hips smashing into yours.`);
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grunts softly, panting as he pounds you from behind.
      scene.text(`${((s as any).npcdesc ?? '')} grunts softly, panting as he pounds you from behind.`);
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        // TODO-QSP: dynamic text: <<$npcdesc>> growls as he smashes your pussy from behind.
        scene.text(`${((s as any).npcdesc ?? '')} growls as he smashes your pussy from behind.`);
      } else {
        if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          // TODO-QSP: dynamic text: <<$npcdesc>> is braying erratically like a donkey as he thrusts equally as errat...
          scene.text(`${((s as any).npcdesc ?? '')} is braying erratically like a donkey as he thrusts equally as erratically into your pussy.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy3EnjoyDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
    scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, letting the sheer force make up for his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
      scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, forcing the girth of his fat chode into you, making it somehow feel longer than it is.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
        scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, slamming his skinny dick into you.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
          scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, slamming his cock into you.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
            scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, splitting your pussy in half with his thick cock.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
              scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, slamming every centimeter of his long cock deep inside you.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
                scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, forcing every centimeter of his huge cock deep inside you.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
                  scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, splitting your pussy in half and forcing every centimeter of his enormous cock deep inside you.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
                    scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, smashing into your cervix with his lengthy cock on every thrust.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
                      scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, filling you up and smashing into your cervix with his gigantic cock on every thrust.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
                        scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, splitting your pussy in half and smashing into your cervix with his monster cock on every thrust.`);
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
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
    scene.text('Your mind goes blank with pleasure and within minutes, your makeup is as fucked as you are.');
  } else {
    if ((!((s as any).pcs_makeup ?? 0))) {
      scene.text('Tears of pleasure blur your sight and sweat gathers on your skin and your already ruined makeup gets even worse with every passing moment.');
    } else {
      // TODO-QSP: dynamic text: Your mind goes blank with pleasure and you groan loudly, letting <<$npcdesc>> fu...
      scene.text(`Your mind goes blank with pleasure and you groan loudly, letting ${((s as any).npcdesc ?? '')} fuck you into blissful oblivion.`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy3TooRough(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
    scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s tiny dick does nothing for you, but your hips ache from the repeated clapping of your ass and you can even feel your cheeks turning red and sore from the punishment. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
      scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s fat chode is uncomfortable in its girth, splitting your pussy with painful force and your hips ache from the repeated clapping of your ass. You can even feel your cheeks turning red and sore from the punishment. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
        scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s skinny dick does nothing for you, but your hips ache from the repeated clapping of your ass and you can even feel your cheeks turning red and sore from the punishment. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          scene.text('You scream as he pulls harder on your hair and you try to pull away, but you\'re unable to escape. Your hips ache from the repeated clapping of your ass and you can even feel your cheeks turning red and sore from the punishment. It\'s agonizing and unpleasant, you can\'t get any satisfaction out of this at all.');
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
            scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s thick cock is uncomfortable in its girth, splitting your pussy with painful force and your hips ache from the repeated clapping of your ass. You can even feel your cheeks turning red and sore from the punishment. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
              scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s long cock keeps painfully bumping against your cervix and your hips ache from the repeated clapping of your ass. The thought of a bruised uterus passes through your head as you groan again. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
                scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s huge cock keeps painfully bumping against your cervix and your hips ache from the repeated clapping of your ass. The thought of a bruised uterus passes through your head as you groan again. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
                  scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s enormous cock keeps painfully bumping against your cervix, your pussy aches from being stretched to fit its girth, and your ass is sore from being repeatedly clapped with sledgehammer force. The thought of a bruised uterus passes through your head as you groan again. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
                    scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s cock keeps smashing into your cervix, your pussy unable to accommodate its unnatural length, and your hips ache from the repeated clapping of your ass. You're sure your uterus is going to be bruised tomorrow and you groan again, wondering if it's possible to be fucked to death.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
                      scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s huge cock keeps smashing into your cervix, your pussy unable to accommodate its unnatural length, and your hips ache from the repeated clapping of your ass. You're sure your uterus is going to be bruised tomorrow and you groan again, wondering if it's possible to be fucked to death.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
                        scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s monster cock keeps smashing into your cervix, your pussy unable to accommodate its unnatural length, aching from being stretched to fit its girth. Not to mention your ass is already sore from being repeatedly clapped with sledgehammer force. You're sure your uterus is going to be bruised tomorrow and you groan again, wondering if it's possible to be fucked to death.`);
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
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
    // TODO-QSP: dynamic text: Black tears run down your face and sweat covers your body, destroying your makeu...
    scene.text(`Black tears run down your face and sweat covers your body, destroying your makeup as ${((s as any).npcdesc ?? '')} pummels you into the bed.`);
  } else {
    if ((!((s as any).pcs_makeup ?? 0))) {
      // TODO-QSP: dynamic text: Your already ruined makeup gets worse with every passing moment, getting smeared...
      scene.text(`Your already ruined makeup gets worse with every passing moment, getting smeared across the sheets as ${((s as any).npcdesc ?? '')} pummels you into the bed.`);
    } else {
      // TODO-QSP: dynamic text: Tears run down your face and sweat covers your body as <<$npcdesc>> pummels you ...
      scene.text(`Tears run down your face and sweat covers your body as ${((s as any).npcdesc ?? '')} pummels you into the bed.`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy3SlowDown(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'thick'  ||  ((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy') {
    scene.text('"Could you-! Slow down-!" you gasp desperately. He releases your hair, letting you collapse face first onto the bed.');
    scene.text('"You\'re too big..." you pant. "I can\'t keep going this hard..."');
  } else {
    if (((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
      scene.text('"Could you-! Slow down-!" you gasp desperately. He releases your hair, letting you collapse face first onto the bed.');
      scene.text('"You\'re way too big..." you groan. "I\'m gonna die if you keep going this hard..."');
    } else {
      scene.text('"Could you-! Slow down-!" you gasp desperately. He releases your hair, letting you collapse face first onto the bed. "I can\'t keep going this hard..."');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy3_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
      scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, somehow managing to make his tiny dick hurt you in all the <i>best</i> ways.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
        scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, forcing his fat chode into your pussy to hurt you in all the <i>best</i> ways.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
          scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, stabbing into you with his skinny dick to hurt you in all the <i>best</i> ways.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
            scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hurting in all the <i>best</i> ways.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
              scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, splitting your pussy with his thick cock and hurting you in all the <i>best</i> ways.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your cervix with his long cock and hurting you in all the <i>best</i> ways.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                  scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your cervix with his huge cock and hurting you in all the <i>best</i> ways.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                    scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your cervix and threatening to tear your pussy in half with his enormous cock and hurting you in all the <i>best</i> ways.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                      scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your cervix with the entire length of his ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock and hurting you in all the <i>best</i> ways.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                        scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your cervix with his gigantic cock, forcing its entire ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm length inside and hurting you in all the <i>best</i> ways.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                          scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, forcing in the entire ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm length of his monstrous cock inside you, hammering your cervix and threatening to tear your pussy in half and hurting you in all the <i>best</i> ways.`);
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
      scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and his fucking is so violent that even his tiny dick is making you break out in a sweat.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
        scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and his fucking is so violent that the fat girth of his chode being force inside you is making you break out in a sweat.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
          scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and his fucking is so violent that even his skinny dick is making you break out in a sweat.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
            scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and his fucking is so violent that you're already starting to break out in a sweat.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
              scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his thick cock threatens to tear you in half with every thrust.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his long cock bashes against your cervix with every thrust.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                  scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his huge cock fills your entire pussy and bashes against your cervix with every thrust.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                    scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his enormous cock batters your cervix, threatening to tear you in half with every thrust.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                      scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock bashing against your cervix, trying to force its way past with every thrust.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                        scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his gigantic ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock filling you up and bashing against your cervix with its weight, trying to force its way past with every thrust.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                          scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his monstrous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock trying to force its way into your cervix and split you in half with every thrust.`);
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

function enterDoggy3_2MoanDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
    scene.text('"<i>Ah~! Ah~! Haa~! Ah~!</i>"');
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you with his ti...
      scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you with his tiny dick. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you with his fa...
        scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you with his fat chode. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you with his sk...
          scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you with his skinny dick. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you with his di...
            scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you with his dick. Sloppy wet sounds squelch from your pussy around his cock, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
              scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your pussy around his thick cock, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your pussy around the long cock that hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                  scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your pussy around the huge cock that fills you up and hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                    scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your pussy around the enormous cock that stretches you to your limits and hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                      scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your snatch around the lengthy cock that hammers so deep and hard inside your pussy that you can feel it in your stomach. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                        scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your snatch around the gigantic cock that hammers so deep and hard inside your pussy that you can feel it in your stomach. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                          scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your snatch around the monstrous cock that hammers so deep and hard inside your pussy that you can feel it in your stomach and threatens to tear you in half at the same time. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
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
      scene.text('"Oo<i>oo</i>o<i>oo</i>hh<i>hh</i> <i>aaagggghhhhhhhh</i>..."');
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you wi...
        scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you with his tiny dick. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you wi...
          scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you with his fat chode. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you wi...
            scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you with his skinny dick. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you wi...
              scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you with his dick. Sloppy wet sounds squelch from your pussy around his cock, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your pussy around his thick cock, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                  scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your pussy around the long cock that hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                    scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your pussy around the huge cock that fills you up and hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                      scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your pussy around the enormous cock that stretches you to your limits and hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                        scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your snatch around the lengthy cock that hammers so deep and hard inside your pussy that you can feel it in your stomach. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                          scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your snatch around the gigantic cock that hammers so deep and hard inside your pussy that you can feel it in your stomach. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                            scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your snatch around the monstrous cock that hammers so deep and hard inside your pussy that you can feel it in your stomach and threatens to tear you in half at the same time. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
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

function enterDoggy3_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"Fuck~!" you pant. "Your cock is so fucking hard inside me~! Oh fu...
    } else {
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        scene.text('"Yes! Fuck! Yes! Just like that!" you scream so hard it hurts. "Clap my fucking ass! Fuck me with your tiny cock!"');
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          scene.text('"Yes! Fuck! Yes! Just like that!" you scream so hard it hurts. "Clap my fucking ass! "Fuck me with your fat chode!"');
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            scene.text('"Yes! Fuck! Yes! Just like that!" you scream so hard it hurts. "Clap my fucking ass! Fuck me with your skinny dick!"');
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              scene.text('"Yes! Fuck! Yes! Just like that!" you scream so hard it hurts. "Clap my fucking ass! Fuck me with your cock!"');
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                if (((s as any).pcs_vag ?? 0) <= 10) {
                  scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> You\'re gonna tear me in half! Don\'t stop! Don\'t stop!"');
                } else {
                  scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> Yes! Just like that! Your cock is so big! Don\'t stop! Don\'t stop! Pound my ass!"');
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> You\'re <i>so</i> deep! Don\'t stop! Don\'t stop! Pound my ass!"');
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    scene.text('"OH FUCK!" you scream so hard it hurts. "You\'re so big! You\'re <i>so</i> big! Don\'t stop! Pound my pussy with your big fucking cock!"');
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      if (((s as any).pcs_vag ?? 0) <= 10) {
                        scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> You\'re <i>so</i> big! You\'re gonna tear me in half! Don\'t stop! Don\'t stop!"');
                      } else {
                        scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> You\'re so big! You\'re <i>so</i> big! Oh fuck! Don\'t stop! Don\'t stop! Don\'t fucking stop!"');
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> I feel you in my stomach~! <i>Oh my God!</i> Don\'t <i>fucking</i> stop!"');
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          scene.text('"OH FUCK!" you scream so hard it hurts. "Oh <i>fuck!</i> You\'re <i>so</i> deep! You\'re so <i>fucking big</i>! I can feel you in my stomach~! Don\'t stop~!"');
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> I feel you in my stomach~! Oh <i>fuck!</i> You\'re so big! You\'re <i>so</i> big! You\'re so <i>fucking big</i>! Don\'t fucking stop! Tear me in half with your monster cock!"');
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
          scene.text('"Yes~! Fuck~! Yes~!" you scream. "I love getting pounded~! You\'re gonna make me come~!"');
        } else {
          scene.text('"Oh <i>fuck</i>~!" you scream. "I\'m so fucking wet~! I\'m gonna come~! I\'m gonna come all over your cock~!"');
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! Don\'t stop~!" you scream. "Smash my sloppy wet pussy~!"');
        } else {
          scene.text('"My pussy can\'t get enough of you~!" you scream. "I need more~! More~! It\'s so good~!"');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'technique') {
        if (((s as any).pcs_horny ?? 0) >= 70) {
          if ((Math.floor(Math.random() * 2) + 0) === 1) {
            scene.text('"Yes~! Fuck~! Yes~!" you scream. "Pound my fucking pussy~! Don\'t stop~! You\'re gonna make me come~!"');
          } else {
            scene.text('"Oh <i>fuck</i>~!" you scream. "I\'m so fucking wet~! I\'m gonna come all over your cock~! You\'re driving me crazy~!"');
          }
        } else {
          if ((Math.floor(Math.random() * 2) + 0) === 1) {
            scene.text('"Ungh~! Don\'t stop~!" you scream. "Smash my pussy~! It feels so good~!"');
          } else {
            scene.text('"Fuck~!" you scream. "Fuck~! Pound my fucking pussy~! <b><i>Fuck~!</i></b>"');
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'dirty_girl') {
          if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Who''s pussy is this?" <<$npcdesc>> growls as he smashes his cock into you like...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc ?? '')} growls as he smashes his cock into you like a battering ram.`);
            scene.text('"Yours~!" you whimper into the bedsheets.');
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

function enterDoggy3_2SensationDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
    scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his tiny dick violently violating your pussy.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
      scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his fat chode violently violating your pussy.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
        scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his skinny dick violently violating your pussy.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: Youpant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll b...
          scene.text(`Youpant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his dick violently violating your pussy.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
            scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his thick cock violently stretching out your pussy.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
              scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his long cock repeatedly knocking on your cervix as it violently penetrates you over and over again.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
                scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the sensation of the huge cock inside you repeatedly knocking on your cervix as it violently violates your pussy.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
                  scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his enormous cock knock against your cervix while it threatens to tear you in half.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
                    scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his insanely long cock smash into your cervix over and over and over again in the most blissful agony you've ever experienced.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
                      scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his gigantic cock fill your pussy, smashing into your cervix over and over and over again in the most blissful agony you've ever experienced.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
                        scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his monstrous cock smashing into your cervix, threatening to tear you in half in the most blissful agony you've ever experienced.`);
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'doggy_goto':
      enterDoggyGoto(s, scene);
      break;
    case 'doggy_goto2':
      enterDoggyGoto2(s, scene);
      break;
    case 'doggy_start':
      enterDoggyStart(s, scene);
      break;
    case 'doggy_insert_acts':
      enterDoggyInsertActs(s, scene);
      break;
    case 'doggy_first_insertion':
      enterDoggyFirstInsertion(s, scene);
      break;
    case 'doggy_virgin_pre':
      enterDoggyVirginPre(s, scene);
      break;
    case 'doggy_switch':
      enterDoggySwitch(s, scene);
      break;
    case 'doggy_switch2':
      enterDoggySwitch2(s, scene);
      break;
    case 'doggy_bend_over':
      enterDoggyBendOver(s, scene);
      break;
    case 'doggy_spit_lube':
      enterDoggySpitLube(s, scene);
      break;
    case 'doggy_insert_slow':
      enterDoggyInsertSlow(s, scene);
      break;
    case 'doggy_insert_react':
      enterDoggyInsertReact(s, scene);
      break;
    case 'doggy_insert_orgasm':
      enterDoggyInsertOrgasm(s, scene);
      break;
    case 'doggy_girl_orgasm_continue':
      enterDoggyGirlOrgasmContinue(s, scene);
      break;
    case 'doggy_change_position':
      enterDoggyChangePosition(s, scene);
      break;
    case 'doggy_pain1':
      enterDoggyPain1(s, scene);
      break;
    case 'doggy_pain2':
      enterDoggyPain2(s, scene);
      break;
    case 'doggy_pain3':
      enterDoggyPain3(s, scene);
      break;
    case 'doggy_vid':
      enterDoggyVid(s, scene);
      break;
    case 'doggy1':
      enterDoggy1(s, scene);
      break;
    case 'doggy1.1':
      enterDoggy1_1(s, scene);
      break;
    case 'doggy1.2':
      enterDoggy1_2(s, scene);
      break;
    case 'doggy1.bored':
      enterDoggy1_bored(s, scene);
      break;
    case 'doggy2':
      enterDoggy2(s, scene);
      break;
    case 'doggy2.1':
      enterDoggy2_1(s, scene);
      break;
    case 'doggy2.2':
      enterDoggy2_2(s, scene);
      break;
    case 'doggy2.bored':
      enterDoggy2_bored(s, scene);
      break;
    case 'doggy3':
      enterDoggy3(s, scene);
      break;
    case 'doggy3.1':
      enterDoggy3_1(s, scene);
      break;
    case 'doggy3.2':
      enterDoggy3_2(s, scene);
      break;
    case 'doggy1_start_period_desc':
      enterDoggy1StartPeriodDesc(s, scene);
      break;
    case 'doggy1_start_desc':
      enterDoggy1StartDesc(s, scene);
      break;
    case 'doggy1_boy_talk1':
      enterDoggy1BoyTalk1(s, scene);
      break;
    case 'doggy1_boy_talk2':
      enterDoggy1BoyTalk2(s, scene);
      break;
    case 'doggy1_enjoy_desc':
      enterDoggy1EnjoyDesc(s, scene);
      break;
    case 'doggy1.1_desc':
      enterDoggy1_1Desc(s, scene);
      break;
    case 'doggy1.2_moan_desc':
      enterDoggy1_2MoanDesc(s, scene);
      break;
    case 'doggy1.2_dirty_talk':
      enterDoggy1_2DirtyTalk(s, scene);
      break;
    case 'doggy1.2_sensation_desc':
      enterDoggy1_2SensationDesc(s, scene);
      break;
    case 'doggy2_start_period_desc':
      enterDoggy2StartPeriodDesc(s, scene);
      break;
    case 'doggy2_start_desc':
      enterDoggy2StartDesc(s, scene);
      break;
    case 'doggy2_boy_talk1':
      enterDoggy2BoyTalk1(s, scene);
      break;
    case 'doggy2_boy_talk2':
      enterDoggy2BoyTalk2(s, scene);
      break;
    case 'doggy2_enjoy_desc':
      enterDoggy2EnjoyDesc(s, scene);
      break;
    case 'doggy2.1_desc':
      enterDoggy2_1Desc(s, scene);
      break;
    case 'doggy2.2_moan_desc':
      enterDoggy2_2MoanDesc(s, scene);
      break;
    case 'doggy2.2_dirty_talk':
      enterDoggy2_2DirtyTalk(s, scene);
      break;
    case 'doggy2.2_sensation_desc':
      enterDoggy2_2SensationDesc(s, scene);
      break;
    case 'doggy3_start_period_desc':
      enterDoggy3StartPeriodDesc(s, scene);
      break;
    case 'doggy3_start_desc':
      enterDoggy3StartDesc(s, scene);
      break;
    case 'doggy3_boy_talk1':
      enterDoggy3BoyTalk1(s, scene);
      break;
    case 'doggy3_boy_talk2':
      enterDoggy3BoyTalk2(s, scene);
      break;
    case 'doggy3_enjoy_desc':
      enterDoggy3EnjoyDesc(s, scene);
      break;
    case 'doggy3_too_rough':
      enterDoggy3TooRough(s, scene);
      break;
    case 'doggy3_slow_down':
      enterDoggy3SlowDown(s, scene);
      break;
    case 'doggy3.1_desc':
      enterDoggy3_1Desc(s, scene);
      break;
    case 'doggy3.2_moan_desc':
      enterDoggy3_2MoanDesc(s, scene);
      break;
    case 'doggy3.2_dirty_talk':
      enterDoggy3_2DirtyTalk(s, scene);
      break;
    case 'doggy3.2_sensation_desc':
      enterDoggy3_2SensationDesc(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_doggy: LocationDef = {
  name: 'sex_ev_doggy',
  title: '"Don\'t be afraid to tap out if my cock is too big," he grins',
  region: 'other',
  enter: enter,
};
