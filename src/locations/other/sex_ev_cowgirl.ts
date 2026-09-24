import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCowgirlGoto(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlVirginPre(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
      scene.actions([
        { label: 'Climb on top of him', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_cowgirl', 'cowgirl_first_insertion'
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
        scene.actions([
          { label: 'Climb on top of him', goto: ['sex_ev_cowgirl', 'cowgirl_climb_on'] },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_position'] !== ((s as any).sex_ev ?? 0)?.['position']) {
          scene.actions([
            { label: 'Continue', goto: ['sex_ev_cowgirl', 'cowgirl_switch'] },
          ]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlInsertMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== ''  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
              qspGoto(s, 'sex_ev_cowgirl', 'cowgirl_goto2');
            } else {
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
              if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (Math.floor(Math.random() * 3) + 1);
              }
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl' + (((s as any).sex_ev ?? 0)?.['speed']) + '';
              scene.actions([
                { label: '', labelFn: (s: GameState) => 'Ride ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => { qspGoto(st, 'sex_ev_cowgirl', ((st as any).sex_ev['pos_speed'] ?? '')); } },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlGoto2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (Math.floor(Math.random() * 3) + 1);
  }
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', '2pumpchump'] },
    ]);
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (Math.floor(Math.random() * 3) + 1);
    }
    scene.actions([
      { label: 'Ride him', goto: ['sex_ev_cowgirl', 'cowgirl' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['change_pos'] === 1) {
    scene.actions([
      { label: 'Switch to cowgirl', goto: ['sex_ev_cowgirl', 'cowgirl_switch'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
      scene.actions([
        { label: 'Climb on top of him', goto: ['sex_ev_cowgirl', 'cowgirl_climb_on'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
        scene.actions([
          { label: 'Climb on top of him', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_cowgirl', 'cowgirl_first_insertion'
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['initiative'] !== 'girl'  &&  ((s as any).sex_ev ?? 0)?.['force_initiative'] !== 1) {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_cowgirl', 'cowgirl_switch2'
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Climb on top of him', goto: ['sex_ev_cowgirl', 'cowgirl_climb_on'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlVirginPre(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  scene.img('images/shared/sex/foreplay/miss3.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> pulls you on top of him, his thighs behind yours, and his cock rest...
  scene.text(`${((s as any).npcdesc ?? '')} pulls you on top of him, his thighs behind yours, and his cock resting against your hips.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
    { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc ?? '') ?? '') + ' take your virginity', goto: ['sex_ev_virgin', 'start3'] },
  ]);
  scene.build();
}

function enterCowgirlSwitch(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 0;
  scene.img('images/shared/sex/foreplay/cowgirl1.jpg');
  if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: You push <<$npcdesc>> backwards, letting his cock slip from your pussy as he fal...
      scene.text(`You push ${((s as any).npcdesc ?? '')} backwards, letting his cock slip from your pussy as he falls onto his back. You raise yourself up as he falls, taking hold of his shaft, slick with your juices, in your hand, and positioning it beneath you again.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
        // TODO-QSP: dynamic text: You push <<$npcdesc>> backwards, throwing him onto his back before swiftly turni...
        scene.text(`You push ${((s as any).npcdesc ?? '')} backwards, throwing him onto his back before swiftly turning around and mounting him.`);
      }
    }
    scene.text('"My turn to be on top," you grin.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['initiative'] === 'boy') {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from between your legs for a moment, pulling you bac...
          scene.text(`${((s as any).npcdesc ?? '')} slips his cock from between your legs for a moment, pulling you backwards as he does. He falls onto his back and you end up on top with your thighs over his.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from your pussy. As you turn around to see what happ...
            scene.text(`${((s as any).npcdesc ?? '')} slips his cock from your pussy. As you turn around to see what happened, he lays down on his back and beckons you forward. Getting the message, you climb aboard to get his cock between your thighs.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
              // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from your ass. As you turn around to see what happen...
              scene.text(`${((s as any).npcdesc ?? '')} slips his cock from your ass. As you turn around to see what happened, he lays down on his back and beckons you forward. Getting the message, you climb aboard to get his cock between your thighs.`);
            }
          }
        }
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> pulls you on top of him as he falls onto his back and you end up on...
        scene.text(`${((s as any).npcdesc ?? '')} pulls you on top of him as he falls onto his back and you end up on top with your thighs over his.`);
      }
      scene.text('"I think you ought to go for a ride," he grins.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> pulls his cock from your pussy and the two of you quickly repositio...
        scene.text(`${((s as any).npcdesc ?? '')} pulls his cock from your pussy and the two of you quickly reposition so that you're on top.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: <<$npcdesc>> pulls his cock from your pussy and the two of you quickly repositio...
          scene.text(`${((s as any).npcdesc ?? '')} pulls his cock from your pussy and the two of you quickly reposition so that you're on top.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
            // TODO-QSP: dynamic text: <<$npcdesc>> pulls his cock from your ass and the two of you quickly reposition ...
            scene.text(`${((s as any).npcdesc ?? '')} pulls his cock from your ass and the two of you quickly reposition so that you're on top.`);
          }
        }
      }
    }
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlMenu2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlSwitch2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.img('images/shared/sex/foreplay/cowgirl1.jpg');
    scene.text('He lays back on the bed, pulling you on top of him as he does. You get the message and line yourself up with his cock.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      scene.img('images/shared/sex/vag/cowgirl/slow1.mp4');
      scene.text('He pumps his hips underneath you, moving his cock inside your pussy. You moan at the sensation and begin to move your own hips by instinct as well.');
    } else {
      scene.img('images/shared/sex/foreplay/cowgirl1.jpg');
      scene.text('He lays back on the bed, pulling you on top of him as he does. You get the message and line yourself up with his cock.');
    }
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  if (((s as any).sex_ev ?? 0)?.['first_insertion'] !== 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlInsertMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    qspGoto(s, 'sex_ev_cowgirl', 'cowgirl_menu');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlClimbOn(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  scene.img('images/shared/sex/foreplay/cowgirl1.jpg');
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.text('You push him back onto the bed and throw your legs over his.');
    scene.text('"I want to be on top."');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      scene.text('You crawl forward back into position, throwing your legs over his.');
      scene.text('"I\'m not done riding you."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        // TODO-QSP: dynamic text: "I want to be on top this time," you say, giving <<$npcdesc>> a smouldering look...
        scene.text(`"I want to be on top this time," you say, giving ${((s as any).npcdesc ?? '')} a smouldering look as you mount his cock.`);
      } else {
        // TODO-QSP: dynamic text: "I''m not done with you yet," you say, giving <<$npcdesc>> a smouldering look as...
        scene.text(`"I'm not done with you yet," you say, giving ${((s as any).npcdesc ?? '')} a smouldering look as you mount his cock.`);
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['first_insertion'] !== 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cowgirl', '');
  } },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlInsertActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
      { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc ?? '') ?? '') + ' take your virginity', goto: ['sex_ev_virgin', 'start3'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
      scene.actions([
        { label: 'Mount him', goto: ['sex_ev_cowgirl', 'cowgirl_first_insertion'] },
      ]);
    } else {
      scene.actions([
        { label: 'Insertion', goto: ['sex_ev_cowgirl', 'cowgirl_insert_slow'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlFirstInsertion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/foreplay/cowgirl1.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> lays back on the bed and you clamber on top of him, straddling his ...
  scene.text(`${((s as any).npcdesc ?? '')} lays back on the bed and you clamber on top of him, straddling his hips with yours, his ${((s as any).dick_desc ?? '')} cock thrust upward between your thighs.`);
  if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
    if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] > ((s as any).stat ?? 0)?.['biggest_cock']) {
      scene.actions([
        { label: '"Is that gonna fit inside me?"', handler: (st: GameState) => {
    scene.text('"Is this going to fit inside me?" you ask, unable to help but gulp anxiously as you feel his length along your belly.');
    scene.text('"Don\'t worry," he grins. "It\'s gone into plenty of other girls before."');
    qspGoto(st, 'sex_ev_cowgirl', 'cowgirl_insert_menu');
  } },
      ]);
    } else {
      if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.actions([
          { label: '"I love big cocks"', handler: (st: GameState) => {
    scene.text('You grin, feeling his length along your belly.');
    scene.text('"I love a guy with a big cock," you grin and he grins back as you position his tip to enter your snatch.');
    qspGoto(st, 'sex_ev_cowgirl', 'cowgirl_insert_menu');
  } },
        ]);
      } else {
        scene.actions([
          { label: '"I love big cocks"', handler: (st: GameState) => {
    scene.text('You grin, feeling his length along your belly.');
    scene.text('"Have I ever told you how much I love the size of your cock?" you grin.');
    scene.text('"You could stand to mention it more," he grins back as you position his tip to enter your snatch.');
    qspGoto(st, 'sex_ev_cowgirl', 'cowgirl_insert_menu');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Just put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_cowgirl', 'cowgirl_insert_menu'
  } },
    { label: '"I\'ve been waiting for this"', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '"I''ve been waiting all ' + iif(hour < 21 or hour < 5, 'day', 'night') + ' for ...
    scene.text('"I\'ve been waiting all ' + ((((st as any).hour ?? 0) < 21  ||  ((st as any).hour ?? 0) < 5) ? ('day') : ('night')) + ' for this," you grin, spreading your thighs even wider to make room for him and he grins back at you.');
    qspGoto(st, 'sex_ev_cowgirl', 'cowgirl_insert_menu');
  } },
  ]);
  scene.build();
}

function enterCowgirlInsertMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ease yourself down', goto: ['sex_ev_cowgirl', 'cowgirl_insert_slow'] },
  ]);
  scene.build();
}

function enterCowgirlInsertSlow(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  qspCall(s, 'sex_ev_sex', 'insertion_arousal_code');
  qspCall(s, 'stat', '');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
    scene.img('images/shared/sex/vag/cowgirl/enter4.mp4');
  } else {
    scene.img('images/shared/sex/vag/cowgirl/enter_condom1.mp4');
  }
  scene.text('Grabbing hold of his cock, you carefully slip its tip between your pussy lips and slowly start lowering your hips.');
  if (((s as any).dick_desc ?? 0) === 'tiny') {
    scene.text('Not that there\'s much reason to be careful. Your hips come flush with his as you sink all the way down to the base and you still feel plenty of wiggle room inside you. You might as well be riding his finger...');
  } else {
    if (((s as any).dick_desc ?? 0) === 'short') {
      scene.text('You descend, feeling his cock fill up the opening of your snatch before suddenly stopping short as your hips collide with his at the base of his short shaft...');
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        scene.text('You descend, feeling his cock <i>stretching</i> you out as you slide down its meager length before suddenly stopping short as your hips collide with his at the base of his chodey shaft...');
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          scene.text('You descend, feeling plenty of wiggle room as you easily slide down his skinny length all the way to the base until your hips collide with his and his head stops just shy of your cervix...');
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            scene.text('You descend, feeling perfectly filled as you slide down to the base of his shaft until your hips colliding with his and his head stopping inside you just shy of your cervix...');
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              scene.text('You descend and immediately feel your pussy <i>stretch</i> out, your walls straining to accommodate his girth as you slide down his thick shaft. When you reach the base, you feel more than filled...');
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                scene.text('You descend, feeling plenty of wiggle room as you easily slide down his skinny length until your cervix abruptly collides with the head of his cock. Your hips are barely resting on his but you also feel a very slightly nauseous ache like something is pressing against your stomach as he barely seems to fit inside you...');
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  scene.text('You descend, feeling completely <i>filled</i> as you slide down his length until your cervix abruptly collides with the head of his cock. Your hips are barely resting on his but you also feel a very slightly nauseous ache like something is pressing against your stomach as he barely seems to fit inside you...');
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    scene.text('You descend and immediately feel your pussy <i>stretch</i> out, your walls straining to accommodate his girth as you slide down his thick shaft until your cervix abruptly collides with the head of his cock. Your hips are barely resting on his but you also feel stretched in every direction as he barely seems to fit inside you...');
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      scene.text('You descend, feeling plenty of wiggle room as you easily slide down his skinny length until your cervix abruptly collides with the head of his cock. Your hips aren\'t even touching his, but you already can\'t get any further down his shaft and most of your weight is resting upon it...');
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        scene.text('You descend, feeling completely <i>filled</i> as you slide down his length until your cervix abruptly collides with the head of his cock. Your hips aren\'t even touching his, but you already can\'t get any further down his shaft and most of your weight is resting upon it...');
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          scene.text('You descend and immediately feel your pussy <i>stretch</i> out, your walls straining to accommodate his girth as you slide down his monstrous length until your cervix abruptly collides with the head of his cock. Your hips aren\'t even touching his, but you already can\'t get any further down his shaft and most of your weight is resting upon it...');
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
  if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlPain1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlInsertOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['first_insertion'] = 1;
    if (((st as any).dick_desc ?? 0) === 'long'  ||  ((st as any).dick_desc ?? 0) === 'huge'  ||  ((st as any).dick_desc ?? 0) === 'enormous'  ||  ((st as any).dick_desc ?? 0) === 'lengthy'  ||  ((st as any).dick_desc ?? 0) === 'gigantic'  ||  ((st as any).dick_desc ?? 0) === 'monstrous') {
      scene.actions([
        { label: 'He\'s big!', handler: (st: GameState) => {
    if (((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        if (((st as any).dick_desc ?? 0) === 'gigantic'  ||  ((st as any).dick_desc ?? 0) === 'monstrous') {
          scene.text('"Oh <i>fuck!</i> That\'s big!" you groan, squirming in pleasure around the cock that is absolutely <i>filling</i> you right now. "It\'s like fucking a <i>baseball bat!</i>"');
        } else {
          scene.text('"Oh <i>fuck!</i> That\'s big!" you groan, squirming in pleasure around the cock that is absolutely <i>filling</i> you right now.');
        }
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    scene.text('You let out a loud moan as heat fills up your insides and your pussy begins to salivate around the base of his shaft.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Groan', handler: (st: GameState) => {
    scene.text('You let out a husky groan as an indescribable <i>ache</i> rocks through your insides. Like a crumb of bread to a woman starving to death, just lowering yourself onto his cock has set your lustful hunger ablaze.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Gasp', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You gasp as the feeling of <<$npcdesc>> inside you as you rest your weight on hi...
    scene.text(`You gasp as the feeling of ${((st as any).npcdesc ?? '')} inside you as you rest your weight on him sends heat washing through your hips and electric tingles racing across your skin.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Say something sexy', handler: (st: GameState) => {
    if (((st as any).npc_last_sex ?? 0)?.[String((st as any).npcID ?? 0)] > ((st as any).daystart ?? 0) - 7) {
      if (((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'big'  ||  ((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'extra_big') {
        // TODO-QSP: dynamic text: "Ah~!" you moan, your pussy lips kissing the base of his <<$dick_desc>> shaft as...
        scene.text(`"Ah~!" you moan, your pussy lips kissing the base of his ${((st as any).dick_desc ?? '')} shaft as you finish lowering yourself onto him, and give him a lascivious smile. "<i>There's</i> my favorite big boy..."`);
      } else {
        // TODO-QSP: dynamic text: "Ah~!" you moan, your pussy lips kissing the base of his <<$dick_desc>> shaft as...
        scene.text(`"Ah~!" you moan, your pussy lips kissing the base of his ${((st as any).dick_desc ?? '')} shaft as you finish lowering yourself onto him, and give him a lascivious smile. "<i>There's</i> my favorite boy's toy..."`);
      }
    } else {
      if (((st as any).npc_last_sex ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        if (((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'big'  ||  ((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'extra_big') {
          // TODO-QSP: dynamic text: "Ah~!" you moan, your pussy lips kissing the base of his <<$dick_desc>> shaft as...
          scene.text(`"Ah~!" you moan, your pussy lips kissing the base of his ${((st as any).dick_desc ?? '')} shaft as you finish lowering yourself onto him, and give him a lascivious smile. "I've missed having this big boy inside me..."`);
        } else {
          // TODO-QSP: dynamic text: "Ah~!" you moan, your pussy lips kissing the base of his <<$dick_desc>> shaft as...
          scene.text(`"Ah~!" you moan, your pussy lips kissing the base of his ${((st as any).dick_desc ?? '')} shaft as you finish lowering yourself onto him, and give him a lascivious smile. "I've missed having your cock inside me..."`);
        }
      } else {
        if (((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'big'  ||  ((st as any).npc_dick_class ?? 0)[String((st as any).locArgs?.[1] ?? '')] === 'extra_big') {
          if (((st as any).stat ?? 0)?.['biggest_cock'] < ((st as any).npc_dick ?? 0)?.[String((st as any).npcID ?? 0)]) {
            // TODO-QSP: dynamic text: "Ah~!" you moan, your pussy lips kissing the base of his <<$dick_desc>> shaft as...
            scene.text(`"Ah~!" you moan, your pussy lips kissing the base of his ${((st as any).dick_desc ?? '')} shaft as you finish lowering yourself onto him, and give him a lascivious smile. "I've never had a cock this big inside me before..."`);
          } else {
            // TODO-QSP: dynamic text: "Ah~!" you moan, your pussy lips kissing the base of his <<$dick_desc>> shaft as...
            scene.text(`"Ah~!" you moan, your pussy lips kissing the base of his ${((st as any).dick_desc ?? '')} shaft as you finish lowering yourself onto him, and give him a lascivious smile. "I love big cocks..."`);
          }
        } else {
          // TODO-QSP: dynamic text: "Ah~!" you moan, your pussy lips kissing the base of his <<$dick_desc>> shaft as...
          scene.text(`"Ah~!" you moan, your pussy lips kissing the base of his ${((st as any).dick_desc ?? '')} shaft as you finish lowering yourself onto him, and give him a lascivious smile. "You're a perfect fit for my pussy..."`);
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Discomfort', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['first_insertion'] = 1;
    if (((st as any).dick_desc ?? 0) === 'long'  ||  ((st as any).dick_desc ?? 0) === 'huge'  ||  ((st as any).dick_desc ?? 0) === 'enormous'  ||  ((st as any).dick_desc ?? 0) === 'lengthy'  ||  ((st as any).dick_desc ?? 0) === 'gigantic'  ||  ((st as any).dick_desc ?? 0) === 'monstrous') {
      scene.actions([
        { label: 'Groan', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/3.jpg');
    // TODO-QSP: dynamic text: You let out a painful groan as you settle down fully onto <<$npcdesc>>''s <<$dic...
    scene.text(`You let out a painful groan as you settle down fully onto ${((st as any).npcdesc ?? '')}'s ${((st as any).dick_desc ?? '')} cock. Your insides <i>ache</i> as if you had been punched in the gut. Which in some ways, you have been...`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'He\'s big!', handler: (st: GameState) => {
    if (((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        scene.text('"Oh <i>fuck!</i> That\'s big!" you groan, squirming as your pussy aches from getting overstuffed.');
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
        scene.text(`"Nngh~! <i>Fuck~!</i>" you groan loudly as ${((st as any).npcdesc ?? '')}'s cock overstuffs your poor pussy. "I can never get used to how <i>big</i> you are."`);
      } else {
        scene.text('"Nngh~!" you groan loudly.');
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Gasp', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/2.jpg');
    scene.text('Your breath hitches in discomfort as you rest your weight on him and immediately hit an awkward angle that makes you sit up straight.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlInsertHard(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlInsertOrgasm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity'] > 0  ||  (((s as any).orgasm_buildup ?? 0) >= 100  &&  (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1))) {
    scene.actions([
      { label: 'Orgasm!', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['orgasm'] === ((st as any).orgasm ?? 0)) {
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'vaginal', (-1), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['first_insertion'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['insertion_orgasm'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
    scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] === 0) {
      scene.text('You\'re so turned on, just that one thrust is all it takes for you to come.');
    } else {
      scene.text('That\'s all it takes. Just that one thrust. And you\'re already coming while sliding down to the base of his cock.');
    }
    if (((st as any).dick_desc ?? 0) === 'tiny'  ||  ((st as any).dick_desc ?? 0) === 'short'  ||  ((st as any).dick_desc ?? 0) === 'chode'  ||  ((st as any).dick_desc ?? 0) === 'skinny'  ||  ((st as any).dick_desc ?? 0) === 'normal') {
      scene.text('Muscles tighten. Heat blossoms. You gasp aloud. Electric tingles race across your body from your toes to the tips of your nipples that quiver in the air as you convulse in orgasm. You groan a wordless cry of ecstasy.');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cock <i>fills</i> you to the brim and you gasp aloud as it start...
      scene.text(`${((st as any).npcdesc ?? '')}'s cock <i>fills</i> you to the brim and you gasp aloud as it starts. Muscles tighten. Heat blossoms. Electric tingles race across your body from your toes to the tips of your nipples that quiver in the air as you convulse in orgasm. You groan a wordless cry of ecstasy.`);
      scene.actions([
        { label: 'You\'re really big', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/2.jpg');
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.text('"You\'re <i>really</i> big," you pant dizzily, head still swimming from orgasm. "I didn\'t expect how good that it would feel just to get you inside me..."');
    } else {
      scene.text('"It\'s your big cock," you pant giddily, head still swimming from orgasm. "The way you <i>fill</i> me. It\'s indescribable."');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    // TODO-QSP: dynamic text: "I''m that good, huh?" <<$npcdesc>> grins smugly.
    scene.text(`"I'm that good, huh?" ${((st as any).npcdesc ?? '')} grins smugly.`);
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] > 0) {
      scene.actions([
        { label: '[Easy Orgasm trait]', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
    scene.text('"I come easy," you smile tiredly at him, head still swimming from orgasm. "Sometimes just one thrust is all it takes for me."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Really horny', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
    scene.text('"I\'m <i>really</i> horny," you moan, shivering with arousal and head swimming from orgasm.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlGirlOrgasmContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  scene.img('images/shared/sex/vag/cowgirl/slow1.mp4');
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.text('You\'ve barely finished your orgasm when he pulls you backwards on top of him. You groan in protest, but he continues anyways, lowering you onto his cock and forcing an involuntary mew from you. At his insistence, you start moving your hips.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.text('You\'ve barely finished your orgasm when he turns you over and pulls you back on top of him. You groan in protest, but he continues anyways, lowering you onto his cock and forcing an involuntary mew from you. At his insistence, you start moving your hips.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.text('You\'ve barely finished your orgasm when he begins moving his hips again underneath you. You mew in protest, hypersensitive to every movement of his cock inside your still-quivering pussy. At his insistence, you start moving your hips again.');
      }
    }
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl' + (((s as any).sex_ev ?? 0)?.['speed']) + '';
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlMenu2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.actions([
      { label: 'Ride him gently', goto: ['sex_ev_cowgirl', 'cowgirl1'] },
      { label: 'Ride him steadily', goto: ['sex_ev_cowgirl', 'cowgirl2'] },
      { label: 'Ride him hard', goto: ['sex_ev_cowgirl', 'cowgirl3'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlMenu2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride him gently', goto: ['sex_ev_cowgirl', 'cowgirl1.2'] },
    { label: 'Ride him steadily', goto: ['sex_ev_cowgirl', 'cowgirl2.2'] },
    { label: 'Ride him hard', goto: ['sex_ev_cowgirl', 'cowgirl3.2'] },
  ]);
  scene.build();
}

function enterCowgirlChangePosition(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
    scene.text('"Can we try something else?" you ask. "I\'m not really feeling cowgirl right now."');
    scene.text('He pauses with his cock fully inserted, hands on your ass.');
    scene.text('"What did you have in mind?"');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['change_pos'] = 1;
    qspCall(st, 'sex_ev_sex', 'position_change');
  } },
  ]);
  scene.build();
}

function enterCowgirlPain1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
    scene.actions([
      { label: 'Dick is too big', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dick_too_big'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['first_insertion'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    (st as any).orgasm_or = 'no';
    // TODO-QSP: dynamic text: Descending your pussy onto <<$npcdesc>>''s cock is like riding a baseball bat, e...
    scene.text(`Descending your pussy onto ${((st as any).npcdesc ?? '')}'s cock is like riding a baseball bat, eliciting gasps of pain from your lips. He's so big and you're so tight on top of him that you feel breathless.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlPain2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ouch!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['first_insertion'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    // TODO-QSP: dynamic text: Whether it''s angle or your technique or just the shape of your pussy and the sh...
    scene.text(`Whether it's angle or your technique or just the shape of your pussy and the shape of ${((st as any).npcdesc ?? '')}'s cock, you can't say for certain. The only thing you are sure of is that this <i>hurts!</i>`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlPain2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCowgirlPain2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_no_cum_code');
    scene.img('images/shared/sex/vag/cowgirl/3.jpg');
    // TODO-QSP: dynamic text: As much as you want the pain to stop, the idea of speaking up and ruining the mo...
    scene.text(`As much as you want the pain to stop, the idea of speaking up and ruining the mood makes you cringe. Instead, you grit your teeth and start riding ${((st as any).npcdesc ?? '')}, hoping that the pain is not too audible in your voice.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '', labelFn: (s: GameState) => 'Tell ' + String(((s as any).npcdesc ?? '') ?? '') + ' it hurts', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cowgirl', '');
  } },
    { label: 'Ask to try something else', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/3.jpg');
    if (((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'miss')  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      scene.img('images/shared/sex/vag/cowgirl/3.jpg');
      scene.text('"Do you think-! We could try-! Something else-?" you gasp out, wincing in pain.');
      // TODO-QSP: dynamic text: "Come on, you''re already there," <<$npcdesc>> grunts back. "Just start moving a...
      scene.text(`"Come on, you're already there," ${((st as any).npcdesc ?? '')} grunts back. "Just start moving already."`);
      scene.text('He thrusts his hips underneath you, prompting you to move your own, if only so it doesn\'t stab deeper inside you. As you start to ride his dick properly, you can\'t help squirming in pain and discomfort with every bounce and feeling more miserable by the second.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu2(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.img('images/shared/sex/vag/cowgirl/2.jpg');
      // TODO-QSP: dynamic text: "What did you have in mind?" <<$npcdesc>> asks and you sigh in relief as you alr...
      scene.text(`"What did you have in mind?" ${((st as any).npcdesc ?? '')} asks and you sigh in relief as you already start pulling yourself off his cock.`);
      qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
      qspCall(st, 'sex_ev_sex', 'position_change');
    }
  } },
  ]);
  scene.build();
}

function enterCowgirlPain3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/cowgirl/2.jpg');
  scene.text('"Ouch!" you yelp, instinctively bouncing away from the offending dick.');
  // TODO-QSP: dynamic text: The motion leaves you off balance and you accidentally end up stabbing your puss...
  scene.text(`The motion leaves you off balance and you accidentally end up stabbing your pussy with ${((s as any).npcdesc ?? '')}'s cock again, causing you sit up sharply and nearly fall off the bed.`);
  if ((((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) >= 2))  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.text('"What the fuck happened?" he exclaims irritatedly. "Why did you stop?"');
  } else {
    scene.text('"Oh fuck!" he exclaims as he manages to grab hold of your hips. "What happened? Are you okay?"');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Be irritated', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).npc_dislike = (st as any).npc_dislike ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_dislike[String((st as any).npcID ?? 0)] ?? 0) + (2);
    scene.img('images/shared/sex/vag/cowgirl/2.jpg');
    scene.text('"Your stupid cock is stabbing my cervix!" you scowl. "What the fuck, do you have a knife hidden in there or something?"');
    if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] !== 1)) {
      if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        ((st as any).npc_dislike = (st as any).npc_dislike ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_dislike[String((st as any).npcID ?? 0)] ?? 0) + (2);
      }
      // TODO-QSP: dynamic text: "I''m not the one driving here!" <<$npcdesc>> growls back. "If it hurts, I didn'...
      scene.text(`"I'm not the one driving here!" ${((st as any).npcdesc ?? '')} growls back. "If it hurts, I didn't put you in this position!`);
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
    scene.img('images/shared/sex/vag/cowgirl/3.jpg');
    // TODO-QSP: dynamic text: "How''s that?" <<$npcdesc>> asks.
    scene.text(`"How's that?" ${((st as any).npcdesc ?? '')} asks.`);
    scene.text('"Fine I guess," you sigh, sinking your hips down to the base of his length. It doesn\'t really feel good, but at least it doesn\'t hurt anymore.');
    // TODO-QSP: dynamic text: <<$npcdesc>> seems to be a little ticked off by your attitude as you start movin...
    scene.text(`${((st as any).npcdesc ?? '')} seems to be a little ticked off by your attitude as you start moving your hips again.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.img('images/shared/sex/vag/cowgirl/3.jpg');
    // TODO-QSP: dynamic text: "How''s that?" <<$npcdesc>> asks.
    scene.text(`"How's that?" ${((st as any).npcdesc ?? '')} asks.`);
    scene.text('"<i>Finally</i>," you sigh. "Yes, that feels better. I\'ll have to remember this next time."');
    // TODO-QSP: dynamic text: <<$npcdesc>> seems to be a little ticked off by your attitude as you start movin...
    scene.text(`${((st as any).npcdesc ?? '')} seems to be a little ticked off by your attitude as you start moving your hips again.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Laugh it off', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).npc_like = (st as any).npc_like ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_like[String((st as any).npcID ?? 0)] ?? 0) + (2);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
    if (((st as any).sex_ev ?? 0)?.['dick_too_big'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['dick_too_big'] = 2;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
      (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
      scene.text('"Your dick is kind of big for me," you smile ruefully. "Can we just pause for a sec to let my poor pussy adjust?"');
      scene.text('"Oh. Yeah, sure."');
      // TODO-QSP: dynamic text: You spend a couple minutes with your hips flat against <<$npcdesc>>''s, sat on h...
      scene.text(`You spend a couple minutes with your hips flat against ${((st as any).npcdesc ?? '')}'s, sat on his cock with its entire length inside you and taking deep breaths as you slowly let it stretch your pussy. Eventually the pain fades to nothing more than a dull ache.`);
      scene.text('"Okay," you nod. "I\'m ready to go."');
    } else {
      scene.text('"I\'m fine," you chuckle. "Your dick is kind of at an awkward angle though. Can we adjust a little?"');
      scene.text('"Oh. Yeah, sure."');
      scene.text('The two of you shuffle around a little finding a position that\'s a little more comfortable for both of you.');
      // TODO-QSP: dynamic text: "How''s that?" <<$npcdesc>> asks.
      scene.text(`"How's that?" ${((st as any).npcdesc ?? '')} asks.`);
      scene.text('"Much better," you nod back and start moving your hips.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCowgirlMenu2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCowgirlVid(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      scene.img('images/shared/sex/vag/cowgirl/condom_slow1.mp4');
    } else {
      scene.img(`images/shared/sex/vag/cowgirl/slow${(Math.floor(Math.random() * 4) + 2)}.mp4`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['speed'] === 2) {
      if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
        scene.img(`images/shared/sex/vag/cowgirl/condom${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      } else {
        scene.img(`images/shared/sex/vag/cowgirl/med${(Math.floor(Math.random() * 4) + 1)}.mp4`);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
        scene.img(`images/shared/sex/vag/cowgirl/hard${(Math.floor(Math.random() * 4) + 1)}.mp4`);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirl1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl1';
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== '') {
    qspGoto(s, 'sex_ev_cowgirl', 'cowgirl1.2');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mesec ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1StartPeriodDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1StartDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
      scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. He's not just proactive, he's attentive too. You can feel how his movements react to yours, each thrust feeling better than the last. His dick may be small but <i>damn</i>, does he know how to use it.`);
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
        scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. He's not just proactive, he's attentive too. You can feel how his movements react to yours, each thrust feeling better than the last. <i>Damn</i>, does he know how to use his dick!`);
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
          scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. He doesn't just have a big cock, he knows how to use it too. You can feel how his movements react to yours, each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust. If it hits you just right, he responds to the squeeze of your pussy.`);
          scene.text('Oh <i>fuck</i>. He\'s good at this.');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
            scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. He doesn't just have a gigantic cock, he knows how to use it too. You would think that being fucked with such a giant dick would hurt, and it occasionally does, but not as often as you expected. His movements react to yours, each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust his angle beneath you. If it hits you just right, he responds to the squeeze of your pussy, minimizing pain and maximizing pleasure.`);
            scene.text('Oh <i>fuck</i>. He\'s good at this.');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } else {
    if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips meet yours in a...
      scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. You would have expected him to just let you do all the work, but he's surprisingly proactive.`);
      scene.actions([
        { label: 'You like pro-activity', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('You grin back, enjoying your coital dance with him, happy to have such a willing partner.');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: 'Proactive, but not amazing. He''s putting in the effort, but that can only go s...
      scene.text('Proactive, but not amazing. He\'s putting in the effort, but that can only go so far with such a small dick. Beyond that, his movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + 'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: 'Proactive, but not amazing. You can''t exactly put your finger on it, but the t...
        scene.text('Proactive, but not amazing. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + 'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: 'Proactive, but not amazing. Something about his timing is just <i>off</i>. His ...
          scene.text('Proactive, but not amazing. Something about his timing is just <i>off</i>. His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + `and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: 'Proactive, but not amazing. Half the problem is his cock is just <i>too damn bi...
            scene.text('Proactive, but not amazing. Half the problem is his cock is just <i>too damn big!</i> His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + `and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
          }
        }
      }
    }
    scene.text('Oh well. Not everyone can be a winner. But there\'s no need to make him feel bad about it and start voicing moans of pleasure. You\'ll probably have to fake an orgasm for him later too...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Take charge', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cowgirl_dom'] = 1;
    scene.img('images/shared/sex/vag/cowgirl/slow3.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "No need for any of that, <<$npcdesc>>," you coo. "Let me take care of <i>everyt...
    scene.text(`"No need for any of that, ${((st as any).npcdesc ?? '')}," you coo. "Let me take care of <i>everything</i>."`);
    scene.text('You shove his head back down onto the pillow, causing him to grunt, his whole body freezing in surprise. Taking advantage of the moment, you set your own pace, rubbing your cunt up and down his shaft, using it as your own personal sex toy. Like a cat on a scratching post.');
    scene.text('"Just relax," you grin and you hear him moan in agreement. "Sit back and enjoy the ride."');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
        // TODO-QSP: dynamic text: A grunt of surprise escapes your lips as <<$npcdesc>>''s hips meet yours in a th...
        scene.text(`A grunt of surprise escapes your lips as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. And honestly, it's a little bit uncoordinated. Every few bounces on his ${((s as any).dick_desc ?? '')} dick inevitably result in an awkward spot getting hit and a sharp prick of pain inside your pussy.`);
        scene.actions([
          { label: 'Coach him to do better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling and putting your ha...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((st as any).npcdesc ?? '')}," you coo, smiling and putting your hands on his shoulders. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You roll your hips gently on top of his <<$dick_desc>> cock, encouraging the mov...
    scene.text(`You roll your hips gently on top of his ${((st as any).dick_desc ?? '')} cock, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    // TODO-QSP: dynamic text: "<i>"Yes~!"</i> you moan, grinning at <<$npcdesc>>. "Just like that."
    scene.text(`"<i>"Yes~!"</i> you moan, grinning at ${((st as any).npcdesc ?? '')}. "Just like that."`);
    scene.text('It pays to communicate...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Proactive, but not amazing. He\'s putting in the effort, but that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Proactive, but not amazing. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Proactive, but not amazing. Something about his timing is just <i>off</i>. His m...
          scene.text(`Proactive, but not amazing. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Proactive, but not amazing. Half the problem is his cock is just <i>too damn big...
            scene.text(`Proactive, but not amazing. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
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
          { label: 'Take charge', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cowgirl_dom'] = 1;
    scene.img('images/shared/sex/vag/cowgirl/slow3.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "No need for any of that, <<$npcdesc>>," you coo. "Let me take care of <i>everyt...
    scene.text(`"No need for any of that, ${((st as any).npcdesc ?? '')}," you coo. "Let me take care of <i>everything</i>."`);
    scene.text('You shove his head back down onto the pillow, causing him to grunt, his whole body freezing in surprise. Taking advantage of the moment, you set your own pace, rubbing your cunt up and down his shaft, using it as your own personal sex toy. Like a cat on a scratching post.');
    scene.text('"Just relax," you grin and you hear him moan in agreement. "Sit back and enjoy the ride."');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: A stifled gasp of discomfort escapes your lips as <<$npcdesc>>''s hips meet your...
        scene.text(`A stifled gasp of discomfort escapes your lips as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath, sending a sharp jab of pain into your pussy. He keeps moving in weird ways, making nearly every few bounce on his ${((s as any).dick_desc ?? '')} dick inevitably result in an awkward spot getting hit and a sharp prick of pain inside your pussy. What on earth is he doing?!`);
        scene.actions([
          { label: 'Coach him to do better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling and putting your ha...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((st as any).npcdesc ?? '')}," you coo, smiling and putting your hands on his shoulders. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You roll your hips gently on top of his <<$dick_desc>> cock, encouraging the mov...
    scene.text(`You roll your hips gently on top of his ${((st as any).dick_desc ?? '')} cock, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    // TODO-QSP: dynamic text: "<i>"Yes~!"</i> you moan, grinning at <<$npcdesc>>. "Just like that."
    scene.text(`"<i>"Yes~!"</i> you moan, grinning at ${((st as any).npcdesc ?? '')}. "Just like that."`);
    scene.text('It pays to communicate...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Proactive, but not amazing. He\'s putting in the effort, but that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Proactive, but not amazing. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Proactive, but not amazing. Something about his timing is just <i>off</i>. His m...
          scene.text(`Proactive, but not amazing. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Proactive, but not amazing. Half the problem is his cock is just <i>too damn big...
            scene.text(`Proactive, but not amazing. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
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
          { label: 'Take charge', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cowgirl_dom'] = 1;
    scene.img('images/shared/sex/vag/cowgirl/slow3.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "No need for any of that, <<$npcdesc>>," you coo. "Let me take care of <i>everyt...
    scene.text(`"No need for any of that, ${((st as any).npcdesc ?? '')}," you coo. "Let me take care of <i>everything</i>."`);
    scene.text('You shove his head back down onto the pillow, causing him to grunt, his whole body freezing in surprise. Taking advantage of the moment, you set your own pace, rubbing your cunt up and down his shaft, using it as your own personal sex toy. Like a cat on a scratching post.');
    scene.text('"Just relax," you grin and you hear him moan in agreement. "Sit back and enjoy the ride."');
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
    scene.text('It takes all of your willpower not to audibly sigh as you keep riding his amazingly <i>disappointing</i> cock.');
    if (((st as any).sex_ev ?? 0)?.['prostitution'] === 1) {
      scene.text('<i>At least I\'m getting paid for this...</i>');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirl1_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl1';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as you keep forcing yourself to gently ride <<$npcdesc>>. ...
        scene.text(`You take deep breaths as you keep forcing yourself to gently ride ${((s as any).npcdesc ?? '')}. After a while, you realize you're starting to slide up and down his shaft a little more easily and without any pain. It seems your virgin pussy is starting to adjust to having a cock inside it.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips each time ...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips each time your virgin pussy slowly descends on ${((s as any).npcdesc ?? '')}'s cock. It still hurts, but you're determined not to let a little pain cause you to pussy out of your first time.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as you keep forcing ...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as you keep forcing yourself to slowly work your virgin pussy up and down ${((s as any).npcdesc ?? '')}'s shaft. It hurts <i>so much</i>, but you can't bring yourself to face the embarrassment of stopping.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as you keep forcing yourself to gently ride <<$npcdesc>>. ...
        scene.text(`You take deep breaths as you keep forcing yourself to gently ride ${((s as any).npcdesc ?? '')}. After a while, you realize you're starting to slide up and down his shaft a little more easily and without any pain. It seems like you're getting better at this.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips each time ...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips each time your pussy bounces on ${((s as any).npcdesc ?? '')}'s cock. It hurts like hell, but you don't say anything, trying your best not to let it show and keep on riding.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as you keep forcing ...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as you keep forcing yourself to slowly work your pussy up and down ${((s as any).npcdesc ?? '')}'s shaft. It hurts <i>so much</i>, but you can't bring yourself to face the embarrassment of stopping.`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you keep moving your hips, rolling them as sensually as possible a...
      scene.text(`Nevertheless, you keep moving your hips, rolling them as sensually as possible and doing your best to make ${((s as any).npcdesc ?? '')} feel good, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>>''s cock hits somewhere deep inside you and y...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? '')}'s cock hits somewhere deep inside you and you feel wetness <i>sploosh</i> through your pussy. You aren't sure what changed, but it's like ${((s as any).npcdesc ?? '')}'s cock found the "feel good" button and you can't stop pressing it. You can't stop moving your hips and moan openly as you slide up and down up his slick shaft.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You keep rolling your hips, focusing on the motions and tightening your pussy ar...
          scene.text(`You keep rolling your hips, focusing on the motions and tightening your pussy around ${((s as any).npcdesc ?? '')}'s cock. It seems to throb in response inside of you and you think he'll come soon if you keep this up.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You grunt in effort as you keep bouncing slowly on <<$npcdesc>>''s cock. His man...
            scene.text(`You grunt in effort as you keep bouncing slowly on ${((s as any).npcdesc ?? '')}'s cock. His manhood drives deep inside you, filling you with this weird sort of "pressure." This doesn't feel "good" exactly, but it doesn't feel bad either so you keep on keeping on.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You moan softly as you continue bouncing on <<$npcdesc>>''s cock. It still basic...
              scene.text(`You moan softly as you continue bouncing on ${((s as any).npcdesc ?? '')}'s cock. It still basically feels numb to your pussy other than the occasional bump, but you don't want him to feel bad about it either so you play along, trying to pretend and rolling your hips in a way you hope at least feels good for him.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. Your pussy still barely feels anything o...
                scene.text(`All your dirty talk is just that: talk. Your pussy still barely feels anything other than the occasional bump, but you don't want ${((s as any).npcdesc ?? '')} to feel bad about it either so you play along, pretending it feels good, and continue on rolling your hips over his.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You pant hard as you keep rolling your hips, focusing on the motions and how goo...
        scene.text(`You pant hard as you keep rolling your hips, focusing on the motions and how good it feels and your pussy almost instinctively tightens around ${((s as any).npcdesc ?? '')}'s cock. It seems to throb in response inside of you and you think he'll come soon if you keep this up.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You moan softly into <<$npcdesc>>''s ear as you gently work your hips up and dow...
          scene.text(`You moan softly into ${((s as any).npcdesc ?? '')}'s ear as you gently work your hips up and down his cock.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
            scene.text('"<i>Ah~! Yes~! Mmm~!</i>"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You moan loudly, letting your voice fill the room as you gently work your pussy ...
            scene.text(`You moan loudly, letting your voice fill the room as you gently work your pussy up and down ${((s as any).npcdesc ?? '')}'s cock.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
                if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                  qspCall(s, 'sex_ev_sex_talk_' + ((s as any).npcID ?? 0) + '', 'talk_output');
                } else {
                  qspCall(s, 'sex_ev_sex_talk_npc', 'talk_output');
                }
              } else {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
                scene.text('You keep riding him gently, enjoying every moment.');
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

function enterCowgirl1_bored(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl1';
  scene.img('images/shared/sex/vag/cowgirl/slow2.mp4');
  scene.text('You keep fucking him at a slow pace. It\'s boring.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCowgirl2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 2;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl2';
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== '') {
    qspGoto(s, 'sex_ev_cowgirl', 'cowgirl2.2');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mesec ?? 0) > 0) {
    scene.text('You bounce up and down at a healthy pace, feeling the length of his cock pump in and out of your pussy from below, and your hips clap loudly against him, echoing off the walls. You feel extra wetness, the blood of your menstrual cycle, running down his shaft, sloppy wet sounds louder than usual as a result.');
  } else {
    scene.text('You bounce up and down at a healthy pace, feeling the length of his cock pump in and out of your pussy from below, and your hips clap loudly against him, echoing off the walls.');
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
      scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. He's not just proactive, he's attentive too. You can feel how his movements react to yours, each thrust feeling better than the last. His dick may be small but <i>damn</i>, does he know how to use it.`);
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
        scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. He's not just proactive, he's attentive too. You can feel how his movements react to yours, each thrust feeling better than the last. <i>Damn</i>, does he know how to use his dick!`);
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
          scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. He doesn't just have a big cock, he knows how to use it too. You can feel how his movements react to yours, each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust. If it hits you just right, he responds to the squeeze of your pussy.`);
          scene.text('Oh <i>fuck</i>. He\'s good at this.');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
            scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. He doesn't just have a gigantic cock, he knows how to use it too. You would think that being fucked with such a giant dick would hurt, and it occasionally does, but not as often as you expected. His movements react to yours, each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust his angle beneath you. If it hits you just right, he responds to the squeeze of your pussy, minimizing pain and maximizing pleasure.`);
            scene.text('Oh <i>fuck</i>. He\'s good at this.');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } else {
    if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips meet yours in a...
      scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. You would have expected him to just let you do all the work, but he's surprisingly proactive.`);
      scene.actions([
        { label: 'You like pro-activity', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('You grin back, enjoying your coital dance with him, happy to have such a willing partner.');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: 'Proactive, but not amazing. He''s putting in the effort, but that can only go s...
      scene.text('Proactive, but not amazing. He\'s putting in the effort, but that can only go so far with such a small dick. Beyond that, his movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + 'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: 'Proactive, but not amazing. You can''t exactly put your finger on it, but the t...
        scene.text('Proactive, but not amazing. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + 'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: 'Proactive, but not amazing. Something about his timing is just <i>off</i>. His ...
          scene.text('Proactive, but not amazing. Something about his timing is just <i>off</i>. His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + `and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: 'Proactive, but not amazing. Half the problem is his cock is just <i>too damn bi...
            scene.text('Proactive, but not amazing. Half the problem is his cock is just <i>too damn big!</i> His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + `and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
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
        // TODO-QSP: dynamic text: An grunt of surprise escapes your lips as <<$npcdesc>>''s hips meet yours in a t...
        scene.text(`An grunt of surprise escapes your lips as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. And honestly, it's a little bit uncoordinated. Every few bounces on his ${((s as any).dick_desc ?? '')} dick inevitably result in an awkward spot getting hit and a sharp prick of pain inside your pussy.`);
        scene.actions([
          { label: 'Take charge', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cowgirl_dom'] = 1;
    scene.img('images/shared/sex/vag/cowgirl/slow3.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "No need for any of that, <<$npcdesc>>," you coo. "Let me take care of <i>everyt...
    scene.text(`"No need for any of that, ${((st as any).npcdesc ?? '')}," you coo. "Let me take care of <i>everything</i>."`);
    scene.text('You shove his head back down onto the pillow, causing him to grunt, his whole body freezing in surprise. Taking advantage of the moment, you set your own pace, rubbing your cunt up and down his shaft, using it as your own personal sex toy. Like a cat on a scratching post.');
    scene.text('"Just relax," you grin and you hear him moan in agreement. "Sit back and enjoy the ride."');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Coach him to do better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling and putting your ha...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((st as any).npcdesc ?? '')}," you coo, smiling and putting your hands on his shoulders. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You adjust the angle of your hips as you slap them down on top of his <<$dick_de...
    scene.text(`You adjust the angle of your hips as you slap them down on top of his ${((st as any).dick_desc ?? '')} cock, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    // TODO-QSP: dynamic text: "<i>"Yes~!"</i> you moan, grinning at <<$npcdesc>>. "Just like that."
    scene.text(`"<i>"Yes~!"</i> you moan, grinning at ${((st as any).npcdesc ?? '')}. "Just like that."`);
    scene.text('It pays to communicate...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Proactive, but not amazing. He\'s putting in the effort, but that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Proactive, but not amazing. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Proactive, but not amazing. Something about his timing is just <i>off</i>. His m...
          scene.text(`Proactive, but not amazing. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Proactive, but not amazing. Half the problem is his cock is just <i>too damn big...
            scene.text(`Proactive, but not amazing. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
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
        // TODO-QSP: dynamic text: A pant of exertion escapes your lips, as <<$npcdesc>> isn''t doing anything at a...
        scene.text(`A pant of exertion escapes your lips, as ${((s as any).npcdesc ?? '')} isn't doing anything at all to help you out here. He just lays underneath, hands at his sides while you do all the work, bouncing on his dick.`);
        scene.actions([
          { label: 'That\'s okay, you like being in charge', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('Not that you mind much. The whole point of cowgirl is that you do the work.');
    scene.text('You moan in pleasure, using his dick as your own personal scratching post');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Proactive, but not amazing. He\'s putting in the effort, but that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Proactive, but not amazing. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Proactive, but not amazing. Something about his timing is just <i>off</i>. His m...
          scene.text(`Proactive, but not amazing. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Proactive, but not amazing. Half the problem is his cock is just <i>too damn big...
            scene.text(`Proactive, but not amazing. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
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
    scene.text('<i>Holy shit,</i> you think to yourself. <i>How\'s a girl supposed to get off with a dick this small?</i>');
    scene.text('It takes all of your willpower not to audibly sigh as you keep riding his amazingly <i>disappointing</i> cock.');
    if (((st as any).sex_ev ?? 0)?.['prostitution'] === 1) {
      scene.text('<i>At least I\'m getting paid for this...</i>');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirl2_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 2;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl2';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as you keep forcing yourself to ride <<$npcdesc>>. You foc...
        scene.text(`You take deep breaths as you keep forcing yourself to ride ${((s as any).npcdesc ?? '')}. You focus on the tempo and the sound of your hips clapping against his every time you slam down on his cock. After a while, you realize with a start that you're starting to slide up and down his shaft a little more easily and without any pain. It seems your virgin pussy is starting to adjust to having a cock inside it.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips each time ...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips each time your virgin pussy claps against the base of ${((s as any).npcdesc ?? '')}'s cock. It still hurts, but you're determined not to let a little pain cause you to pussy out of your first time.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as you keep forcing ...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as you keep forcing yourself to work your virgin pussy all the way up and down ${((s as any).npcdesc ?? '')}'s shaft, bringing your hips down with enough force that the sound of clapping fills the room. It hurts <i>so much</i>, but you can't bring yourself to face the embarrassment of stopping.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You take deep breaths as you keep forcing yourself to ride <<$npcdesc>>. You foc...
        scene.text(`You take deep breaths as you keep forcing yourself to ride ${((s as any).npcdesc ?? '')}. You focus on the tempo and the sound of your hips clapping against his every time you slam down on his cock. After a while, you realize with a start that you're starting to slide up and down his shaft a little more easily and without any pain. It seems you're getting used to this.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips each time ...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips each time your virgin pussy claps against the base of ${((s as any).npcdesc ?? '')}'s cock. It hurts like hell, but you don't say anything, trying your best not to let it show and keep on riding.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as you keep forcing ...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as you keep forcing yourself to ride ${((s as any).npcdesc ?? '')} at a steady pace. The sound of clapping fills the room and it hurts <i>so much</i>, but you can't bring yourself to face the embarrassment of stopping.`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you doggedly keep bouncing up and down on <<$npcdesc>>''s cock, cl...
      scene.text(`Nevertheless, you doggedly keep bouncing up and down on ${((s as any).npcdesc ?? '')}'s cock, clenching your abdomen to tighten your pussy in hopes that it'll make him come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>>''s cock hits somewhere deep inside you and y...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? '')}'s cock hits somewhere deep inside you and you feel wetness <i>sploosh</i> through your pussy. You aren't sure what changed, but it's like ${((s as any).npcdesc ?? '')}'s cock found the "feel good" button and you can't stop pressing it. You can't stop moving your hips and moan openly as you begin slamming your pussy to the base of his cock with full enthusiasm.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You keep bouncing up and down on <<$npcdesc>>, focusing on the motions and tight...
          scene.text(`You keep bouncing up and down on ${((s as any).npcdesc ?? '')}, focusing on the motions and tightening your pussy around his cock. It seems to throb in response inside of you and you think he'll come soon if you keep this up.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You grunt in effort as you keep steadily bouncing up and down <<$npcdesc>>''s co...
            scene.text(`You grunt in effort as you keep steadily bouncing up and down ${((s as any).npcdesc ?? '')}'s cock. His manhood drives deep inside you, filling you with this weird sort of "pressure." This doesn't feel "good" exactly, but it doesn't feel bad either so you keep on keeping on.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You moan softly as you steadily bounce up and down <<$npcdesc>>''s cock. It stil...
              scene.text(`You moan softly as you steadily bounce up and down ${((s as any).npcdesc ?? '')}'s cock. It still basically feels numb to your pussy other than the occasional bump, but you don't want him to feel bad about it either so you play along, trying to pretend and hoping that this at least feels good for him.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] === 1) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. Your pussy still barely feels anything o...
                scene.text(`All your dirty talk is just that: talk. Your pussy still barely feels anything other than the occasional bump, but you don't want ${((s as any).npcdesc ?? '')} to feel bad about it either so you play along, pretending it feels good, and continue bouncing up and down his cock.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You pant hard as you keep bouncing on <<$npcdesc>>''s cock, focusing on the moti...
        scene.text(`You pant hard as you keep bouncing on ${((s as any).npcdesc ?? '')}'s cock, focusing on the motions and how good it feels and your pussy almost instinctively tightens around him. He seems to throb in response inside of you and you think you'll both come soon if you keep this up.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You keep bouncing up and down on <<$npcdesc>>''s cock, your own heavy panting fi...
          scene.text(`You keep bouncing up and down on ${((s as any).npcdesc ?? '')}'s cock, your own heavy panting filling your ears.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
            scene.text('"<i>Ah~! Yes~! Mmm~!</i>"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You moan loudly, letting your voice fill the room as you bounce up and down <<$n...
            scene.text(`You moan loudly, letting your voice fill the room as you bounce up and down ${((s as any).npcdesc ?? '')}'s cock.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
                if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                  qspCall(s, 'sex_ev_sex_talk_' + ((s as any).npcID ?? 0) + '', 'talk_output');
                } else {
                  qspCall(s, 'sex_ev_sex_talk_npc', 'talk_output');
                }
              } else {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: You bounce up and down on <<$npcdesc>>''s cock, focusing on the hammering you fe...
                scene.text(`You bounce up and down on ${((s as any).npcdesc ?? '')}'s cock, focusing on the hammering you feel deep inside you, letting the reverberations of your hips and his course through your body from your sex to the tips of your nipples.`);
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

function enterCowgirl2_bored(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl2';
  scene.img('images/shared/sex/vag/cowgirl/med2.mp4');
  scene.text('You keep fucking him at a medium pace. It\'s boring.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCowgirl3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl3';
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== '') {
    qspGoto(s, 'sex_ev_cowgirl', 'cowgirl3.2');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirlVid(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mesec ?? 0) > 0) {
    // TODO-QSP: dynamic text: You bounce up and down on <<$npcdesc>>''s cock as hard as you can while he simul...
    scene.text(`You bounce up and down on ${((s as any).npcdesc ?? '')}'s cock as hard as you can while he simultaneously thrusts his hips up towards you from below. The result is an awesome clap every time your bodies collide, enormous waves of kinetic energy quaking through your body. Blood from your period streams from your pussy, running down your legs.`);
  } else {
    // TODO-QSP: dynamic text: You bounce up and down on <<$npcdesc>>''s cock as hard as you can while he simul...
    scene.text(`You bounce up and down on ${((s as any).npcdesc ?? '')}'s cock as hard as you can while he simultaneously thrusts his hips up towards you from below. The result is an awesome clap every time your bodies collide, enormous waves of kinetic energy quaking through your body.`);
  }
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
      scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath that sends shocks of pleasure racing through your body. He's not just proactive, he's attentive too. You can feel how his movements react to yours, each thrust feeling better than the last. His dick may be small but <i>damn</i>, does he know how to use it.`);
    } else {
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
        scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath that sends shocks of pleasure racing through your body. He's not just proactive, he's attentive too. You can feel how his movements react to yours, each thrust feeling better than the last. <i>Damn</i>, does he know how to use his dick!`);
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
          scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath that sends shocks of pleasure racing through your body. He doesn't just have a big cock, he knows how to use it too. You can feel how his movements react to yours, each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust. If it hits you just right, he responds to the squeeze of your pussy.`);
          scene.text('Oh <i>fuck</i>. He\'s good at this.');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips on the next bounce as <<$npcdesc>>''s h...
            scene.text(`An uncontrollable gasp escapes your lips on the next bounce as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath that sends shocks of pleasure racing through your body. He doesn't just have a gigantic cock, he knows how to use it too. You would think that being fucked with such a giant dick would hurt, and it occasionally does, but not as often as you expected. His movements react to yours, each thrust feeling better than the last. If it hits an awkward spot, you feel him adjust his angle beneath you. If it hits you just right, he responds to the squeeze of your pussy, minimizing pain and maximizing pleasure.`);
            scene.text('Oh <i>fuck</i>. He\'s good at this.');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } else {
    if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
      // TODO-QSP: dynamic text: An uncontrollable gasp escapes your lips as <<$npcdesc>>''s hips meet yours in a...
      scene.text(`An uncontrollable gasp escapes your lips as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. You would have expected him to just let you do all the work, but he's surprisingly proactive.`);
      scene.actions([
        { label: 'You like pro-activity', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('You grin back, enjoying your coital dance with him, happy to have such a willing partner.');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      // TODO-QSP: dynamic text: 'Proactive, but not amazing. He''s putting in the effort, but that can only go s...
      scene.text('Proactive, but not amazing. He\'s putting in the effort, but that can only go so far with such a small dick. Beyond that, his movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + 'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        // TODO-QSP: dynamic text: 'Proactive, but not amazing. You can''t exactly put your finger on it, but the t...
        scene.text('Proactive, but not amazing. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + 'and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: 'Proactive, but not amazing. Something about his timing is just <i>off</i>. His ...
          scene.text('Proactive, but not amazing. Something about his timing is just <i>off</i>. His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + `and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: 'Proactive, but not amazing. Half the problem is his cock is just <i>too damn bi...
            scene.text('Proactive, but not amazing. Half the problem is his cock is just <i>too damn big!</i> His movements just aren\'t syncing up with yours' + ((((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' today ') : (' ')) + `and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
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
        // TODO-QSP: dynamic text: An grunt of surprise escapes your lips as <<$npcdesc>>''s hips meet yours in a t...
        scene.text(`An grunt of surprise escapes your lips as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath. And honestly, it's a little bit uncoordinated. Every few bounces on his ${((s as any).dick_desc ?? '')} dick inevitably result in an awkward spot getting hit and a sharp prick of pain inside your pussy.`);
        scene.actions([
          { label: 'Coach him to do better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling and putting your ha...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((st as any).npcdesc ?? '')}," you coo, smiling and putting your hands on his shoulders. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You adjust the angle of your hips as you smash them down on top of his <<$dick_d...
    scene.text(`You adjust the angle of your hips as you smash them down on top of his ${((st as any).dick_desc ?? '')} cock, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    // TODO-QSP: dynamic text: "<i>Y-e-e-e-e-s-s-s-s-s~!</i> you moan, grinning at <<$npcdesc>>. Just like that...
    scene.text(`"<i>Y-e-e-e-e-s-s-s-s-s~!</i> you moan, grinning at ${((st as any).npcdesc ?? '')}. Just like that!"`);
    scene.text('It pays to communicate...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Proactive, but not amazing. He\'s putting in the effort, but that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Proactive, but not amazing. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Proactive, but not amazing. Something about his timing is just <i>off</i>. His m...
          scene.text(`Proactive, but not amazing. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Proactive, but not amazing. Half the problem is his cock is just <i>too damn big...
            scene.text(`Proactive, but not amazing. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
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
        // TODO-QSP: dynamic text: A stifled gasp of discomfort escapes your lips as <<$npcdesc>>''s hips meet your...
        scene.text(`A stifled gasp of discomfort escapes your lips as ${((s as any).npcdesc ?? '')}'s hips meet yours in a thrust from underneath, sending a sharp jab of pain into your pussy. He keeps moving in weird ways, making nearly every few bounce on his ${((s as any).dick_desc ?? '')} dick inevitably result in an awkward spot getting hit and a sharp prick of pain inside your pussy. What on earth is he doing?!`);
        scene.actions([
          { label: 'Coach him to do better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "<i>Hnn~!</i> Not like that, <<$npcdesc>>," you coo, smiling and putting your ha...
    scene.text(`"<i>Hnn~!</i> Not like that, ${((st as any).npcdesc ?? '')}," you coo, smiling and putting your hands on his shoulders. "Like <i>this</i>."`);
    // TODO-QSP: dynamic text: You roll your hips gently on top of his <<$dick_desc>> cock, encouraging the mov...
    scene.text(`You roll your hips gently on top of his ${((st as any).dick_desc ?? '')} cock, encouraging the movements you want from him. It takes a few minutes of trying, but eventually he starts to get the hang of it.`);
    // TODO-QSP: dynamic text: "<i>"Yes~!"</i> you moan, grinning at <<$npcdesc>>. "Just like that."
    scene.text(`"<i>"Yes~!"</i> you moan, grinning at ${((st as any).npcdesc ?? '')}. "Just like that."`);
    scene.text('It pays to communicate...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
          { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'short') {
      scene.text('Proactive, but not amazing. He\'s putting in the effort, but that can only go so far with such a small dick. Beyond that, his movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
    } else {
      if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'average') {
        scene.text('Proactive, but not amazing. You can\'t exactly put your finger on it, but the timing just feels <i>off</i>. His movements aren\'t syncing up with yours and you find yourself stifling a sigh, feeling like your itch is not getting scratched with each new bounce on his cock. Maybe this would get another girl off, but certainly not you...');
      } else {
        if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'big') {
          // TODO-QSP: dynamic text: Proactive, but not amazing. Something about his timing is just <i>off</i>. His m...
          scene.text(`Proactive, but not amazing. Something about his timing is just <i>off</i>. His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Every time you think it's getting good, he hits another awkward spot and deflates your pleasure like a balloon. Maybe this would get another girl off, but certainly not you...`);
        } else {
          if (((st as any).npc_dick_class ?? 0)?.[String((st as any).npcID ?? 0)] === 'extra_big') {
            // TODO-QSP: dynamic text: Proactive, but not amazing. Half the problem is his cock is just <i>too damn big...
            scene.text(`Proactive, but not amazing. Half the problem is his cock is just <i>too damn big!</i> His movements aren't syncing up with yours and you find yourself stifling yelps of discomfort as his ${((st as any).dick_desc ?? '')} cock keeps hitting awkward and painful spots inside your pussy. Maybe this would get another girl off, but certainly not you...`);
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
          { label: 'Take charge', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cowgirl_dom'] = 1;
    scene.img('images/shared/sex/vag/cowgirl/slow3.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: "No need for any of that, <<$npcdesc>>," you coo. "Let me take care of <i>everyt...
    scene.text(`"No need for any of that, ${((st as any).npcdesc ?? '')}," you coo. "Let me take care of <i>everything</i>."`);
    scene.text('You shove his head back down onto the pillow, causing him to grunt, his whole body freezing in surprise. Taking advantage of the moment, you set your own pace, pounding your cunt up and down his shaft, using it as your own personal sex toy. Like a cat on a scratching post.');
    scene.text('"Just relax," you grin and you hear him moan in agreement. "Sit back and enjoy the ride."');
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
    scene.text('Even slamming your hips down with all the force you can muster can\'t make his presence felt inside you. It takes all of your willpower not to audibly sigh as you keep riding his amazingly <i>disappointing</i> cock.');
    if (((st as any).sex_ev ?? 0)?.['prostitution'] === 1) {
      scene.text('<i>At least I\'m getting paid for this...</i>');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirl3_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl3';
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_rand'] = 1;
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_rand'] = (Math.floor(Math.random() * 3) + 2);
  }
  scene.img(`images/shared/sex/vag/cowgirl/hard${(((s as any).sex_ev ?? 0)?.['cowgirl_rand'] ?? '')}.mp4`);
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You furiously work your hips up and down as you continue forcing yourself to rid...
        scene.text(`You furiously work your hips up and down as you continue forcing yourself to ride ${((s as any).npcdesc ?? '')} as hard as you can. You don't give yourself any time to think, focusing only on slamming down on ${((s as any).npcdesc ?? '')}'s cock as fast as you can. Because of this, it's not for a while that you realize with a start that the pain has gone away. Seems like your virgin pussy is getting used to riding hard.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips each time ...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips each time your virgin pussy slams to the base of ${((s as any).npcdesc ?? '')}'s cock. The agony induced by your rough riding is nearly unbearable, but you're pridefully determined not to give up and try to give ${((s as any).npcdesc ?? '')} the ride of his life with your virgin pussy.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You clench your teeth as hard as you can and squeeze your eyes shut, trying to k...
            scene.text(`You clench your teeth as hard as you can and squeeze your eyes shut, trying to keep yourself from crying as you force yourself to slam your virgin pussy down on ${((s as any).npcdesc ?? '')}'s shaft over and over. Part of you wonders why you're doing this and your insides feel battered and bruised, but you can't bring yourself to face the embarrassment of stopping.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 4) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You sob openly as you smash your pussy down onto <<$npcdesc>>''s cock. It hurts ...
              scene.text(`You sob openly as you smash your pussy down onto ${((s as any).npcdesc ?? '')}'s cock. It hurts so much you think you're going to die, but for some reason your hips won't stop moving. A wordless cry leaves your lips and you keep riding ${((s as any).npcdesc ?? '')} like you're trying to impale yourself as a virgin sacrifice on his shaft.`);
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: You furiously work your hips up and down as you continue forcing yourself to rid...
        scene.text(`You furiously work your hips up and down as you continue forcing yourself to ride ${((s as any).npcdesc ?? '')} as hard as you can. You don't give yourself any time to think, focusing only on slamming down on ${((s as any).npcdesc ?? '')}'s cock as fast as you can. Because of this, it's not for a while that you realize with a start that the pain has gone away. Seems like your pussy is getting used to riding hard.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips each time ...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips each time your virgin pussy slams to the base of ${((s as any).npcdesc ?? '')}'s cock. The agony induced by your rough riding is nearly unbearable, but you're pridefully determined not to give up and try to give ${((s as any).npcdesc ?? '')} the ride of his life.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You clench your teeth as hard as you can and squeeze your eyes shut, trying to k...
            scene.text(`You clench your teeth as hard as you can and squeeze your eyes shut, trying to keep yourself from crying as you force yourself to slam yourself down on ${((s as any).npcdesc ?? '')}'s shaft over and over. Part of you wonders why you're doing this and your insides feel battered and bruised, but you can't bring yourself to face the embarrassment of stopping.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 4) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: You sob openly as you smash your pussy down onto <<$npcdesc>>''s cock. It hurts ...
              scene.text(`You sob openly as you smash your pussy down onto ${((s as any).npcdesc ?? '')}'s cock. It hurts so much you think you're going to die, but for some reason your hips won't stop moving. A wordless cry leaves your lips and you keep riding ${((s as any).npcdesc ?? '')} like you're trying to impale yourself on his shaft.`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you doggedly keep bouncing up and down on <<$npcdesc>>''s cock, cl...
      scene.text(`Nevertheless, you doggedly keep bouncing up and down on ${((s as any).npcdesc ?? '')}'s cock, clenching your abdomen to tighten your pussy and smashing your hips down against his in hopes that it'll make him come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>>''s cock hits somewhere deep inside you and y...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? '')}'s cock hits somewhere deep inside you and you feel wetness <i>sploosh</i> through your pussy. You aren't sure what changed, but it's like you found the "feel good" button with ${((s as any).npcdesc ?? '')}'s cock and you can't stop pressing it. You can't stop moving your hips and moan openly as you begin smashing your pussy to the base of his cock with full enthusiasm, riding ${((s as any).npcdesc ?? '')} like there's no tomorrow.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          // TODO-QSP: dynamic text: You keep bouncing up and down on <<$npcdesc>>, smashing your hips against his as...
          scene.text(`You keep bouncing up and down on ${((s as any).npcdesc ?? '')}, smashing your hips against his as hard as you can and tightening your pussy around his cock. It seems to throb in response inside of you and you think he'll come soon if you keep this up.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            // TODO-QSP: dynamic text: You grunt in effort as you keep furiously bouncing up and down <<$npcdesc>>''s c...
            scene.text(`You grunt in effort as you keep furiously bouncing up and down ${((s as any).npcdesc ?? '')}'s cock. His manhood hammers deep inside you, slamming into you in a way that doesn't exactly feel "good", but it doesn't feel bad either so you keep on keeping on.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              // TODO-QSP: dynamic text: You let out ragged moans as you furiously bounce up and down <<$npcdesc>>''s coc...
              scene.text(`You let out ragged moans as you furiously bounce up and down ${((s as any).npcdesc ?? '')}'s cock. It still basically feels numb to your pussy other than the occasional bump, but you feel like it's important for you to try your best and pretend like this feels good so you keep tiredly riding ${((s as any).npcdesc ?? '')} as hard as you can.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] === 1) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. Your pussy still barely feels anything o...
                scene.text(`All your dirty talk is just that: talk. Your pussy still barely feels anything other than the occasional bump, but this is about making ${((s as any).npcdesc ?? '')} feel good, so you keep violently riding ${((s as any).npcdesc ?? '')}'s cock like there's no tomorrow.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        // TODO-QSP: dynamic text: You pant hard as you ride <<$npcdesc>> like there''s no tomorrow. His cock hamme...
        scene.text(`You pant hard as you ride ${((s as any).npcdesc ?? '')} like there's no tomorrow. His cock hammers your insides but it only causes you to tighten up, giving back just as good as you're getting. It seems to throb in response inside of you and you think you'll both come soon if you keep this up.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cowgirl_rand'] === 2) {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Ah~! Ahh~! Nngh~! Ahh~!</i>"');
            // TODO-QSP: dynamic text: You groan in pleasure as you violently bounce your hips up and down on <<$npcdes...
            scene.text(`You groan in pleasure as you violently bounce your hips up and down on ${((s as any).npcdesc ?? '')}'s cock.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Yes~! Mmm~!</i>"');
              // TODO-QSP: dynamic text: You moan loudly, letting your voice fill the room as you slam your pussy down <<...
              scene.text(`You moan loudly, letting your voice fill the room as you slam your pussy down ${((s as any).npcdesc ?? '')}'s cock over and over again.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                // TODO-QSP: dynamic text: You pant loudly, breasts bouncing in the air while you bounce on <<$npcdesc>>''s...
                scene.text(`You pant loudly, breasts bouncing in the air while you bounce on ${((s as any).npcdesc ?? '')}'s dick, loving every thrust and every second.`);
              }
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Ah~! Ah~! Ah~! Ah~!</i>"');
            // TODO-QSP: dynamic text: You pant desperately as <<$npcdesc>> thrusts into you from below, so hard it''s ...
            scene.text(`You pant desperately as ${((s as any).npcdesc ?? '')} thrusts into you from below, so hard it's like he's fucking the breath from your lungs. It's <i>amazing.</i>`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>AH~! AH~! YES~! YES~! AHH~!</i>"');
              // TODO-QSP: dynamic text: Your voice echoes off the walls mixing with the sound of <<$npcdesc>>''s hips sl...
              scene.text(`Your voice echoes off the walls mixing with the sound of ${((s as any).npcdesc ?? '')}'s hips slamming into yours from below over and over again.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                // TODO-QSP: dynamic text: You groan wordlessly, letting your eyes roll back in your skull while <<$npcdesc...
                scene.text(`You groan wordlessly, letting your eyes roll back in your skull while ${((s as any).npcdesc ?? '')} does all the work, violently thrusting up into you over and over and over, sending earthquakes of pleasure coursing through your entire body.`);
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

function enterCowgirl3_bored(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl3';
  qspCall(s, 'sex_ev_sex', 'fuck_no_cum_code');
  scene.img('images/shared/sex/vag/cowgirl/hard2.mp4');
  scene.text('You keep riding him hard. It\'s boring.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlChangePace(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
    scene.actions([
      { label: 'Keep riding him gently', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
      { label: 'Pick up the pace a little', goto: ['sex_ev_cowgirl', 'cowgirl2'] },
      { label: 'Ride \'em cowgirl!', goto: ['sex_ev_cowgirl', 'cowgirl3'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['speed'] === 2) {
    scene.actions([
      { label: 'Slow down, go gently', goto: ['sex_ev_cowgirl', 'cowgirl1'] },
      { label: 'Keep riding him steadily', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
      { label: 'Ride \'em cowgirl!', goto: ['sex_ev_cowgirl', 'cowgirl3'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
    scene.actions([
      { label: 'Slow down, go gently', goto: ['sex_ev_cowgirl', 'cowgirl1'] },
      { label: 'Go down to a moderate pace', goto: ['sex_ev_cowgirl', 'cowgirl2'] },
      { label: 'Keep riding him hard', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirl1StartPeriodDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    scene.text('You gently roll your hips over his, grinding his tiny dick against the inside your pussy. Looking down, you can see his cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.');
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      scene.text('You gently roll your hips over his, grinding his fat chode against the inside your pussy. Looking down, you can see his cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.');
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        scene.text('You gently roll your hips over his, grinding his skinny dick against the inside your pussy. Looking down, you can see his cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.');
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          scene.text('You gently roll your hips over his, grinding his dick against the inside your pussy. Looking down, you can see his cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.');
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              scene.text('You gently roll your hips over his, grinding his cock against the inside your pussy. You breathe slowly, thankful for the blood from your period providing some lubrication for his thick shaft stretching your tight snatch.');
            } else {
              scene.text('You gently roll your hips over his, grinding his thick cock against the inside your pussy, breathing slowly as it stretches you out. Looking down, you can see his cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.');
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You gently roll your hips over his, hugging the full length of his <<npc_dick[$n...
              scene.text(`You gently roll your hips over his, hugging the full length of his ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock with your pussy. Looking down, you can see his cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You gently roll your hips over his, <i>filled</i> by the huge <<npc_dick[$npcID]...
                scene.text(`You gently roll your hips over his, <i>filled</i> by the huge ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock with your pussy. Looking down, you can see his cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You gently roll your hips over his, <i>stretched</i> by the enormous <<npc_dick[...
                  scene.text(`You gently roll your hips over his, <i>stretched</i> by the enormous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your pussy. Looking down, you can see his cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    if (((s as any).pcs_vag ?? 0) <= 15) {
                      // TODO-QSP: dynamic text: You gently roll your hips over his, unable to fit the full length of <<$npcdesc>...
                      scene.text(`You gently roll your hips over his, unable to fit the full length of ${((s as any).npcdesc ?? '')}'s ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your pussy as it painfully bumps up against your cervix. Looking down, you can see his cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.`);
                    } else {
                      // TODO-QSP: dynamic text: You gently roll your hips over his, barely to fit the full length of <<$npcdesc>...
                      scene.text(`You gently roll your hips over his, barely to fit the full length of ${((s as any).npcdesc ?? '')}'s ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your pussy as it presses hard against your cervix. Looking down, you can see his cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.`);
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      if (((s as any).pcs_vag ?? 0) <= 15) {
                        // TODO-QSP: dynamic text: You gently roll your hips over his, unable to fit the full length of <<$npcdesc>...
                        scene.text(`You gently roll your hips over his, unable to fit the full length of ${((s as any).npcdesc ?? '')}'s ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your pussy as it fills you all the way to your cervix, bumping up hard against it. Looking down, you can see his gigantic cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.`);
                      } else {
                        // TODO-QSP: dynamic text: You gently roll your hips over his, barely able to fit the full length of <<$npc...
                        scene.text(`You gently roll your hips over his, barely able to fit the full length of ${((s as any).npcdesc ?? '')}'s ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your pussy as it fills you all the way to your cervix, pressing hard against it. Looking down, you can see his gigantic cock is stained red from your period, blood mixing with your juices, both of them providing a lot of natural lubrication.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        if (((s as any).pcs_vag ?? 0) <= 10) {
                          // TODO-QSP: dynamic text: You gently roll your hips over his, unable to fit the full length of <<$npcdesc>...
                          scene.text(`You gently roll your hips over his, unable to fit the full length of ${((s as any).npcdesc ?? '')}'s monstrous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your bleeding snatch. Too long and too wide for your tight pussy, it feels like being impaled in every sense of the word. Looking down, you can see the red liquid mixing with your juices, both of them providing a lot of natural lubrication.`);
                        } else {
                          if (((s as any).pcs_vag ?? 0) <= 25) {
                            // TODO-QSP: dynamic text: You gently roll your hips over his, barely to fit the full length of <<$npcdesc>...
                            scene.text(`You gently roll your hips over his, barely to fit the full length of ${((s as any).npcdesc ?? '')}'s monstrous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your bleeding snatch. You're no virgin, but even for your experienced pussy it feels like fucking a telephone pole. Looking down, you can see the red liquid mixing with your juices, both of them providing a lot of natural lubrication.`);
                          } else {
                            // TODO-QSP: dynamic text: You gently roll your hips over his, barely to fit the full length of <<$npcdesc>...
                            scene.text(`You gently roll your hips over his, barely to fit the full length of ${((s as any).npcdesc ?? '')}'s monstrous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your bleeding snatch. It fills you completely, and even for your experienced pussy it feels on the verge of tearing. Looking down, you can see the red liquid mixing with your juices, both of them providing a lot of natural lubrication.`);
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

function enterCowgirl1StartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    scene.text('You gently roll your hips over his, grinding his tiny dick against the inside your pussy.');
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      scene.text('You gently roll your hips over his, grinding his fat chode against the inside your pussy.');
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        scene.text('You gently roll your hips over his, grinding his skinny dick against the inside your pussy.');
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          scene.text('You gently roll your hips over his, grinding his dick against the inside your pussy.');
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              scene.text('You gently roll your hips over his, grinding his cock against the inside your pussy. You breathe slowly trying to adjust as his thick shaft stretches your tight snatch.');
            } else {
              scene.text('You gently roll your hips over his, grinding his thick cock against the inside your pussy, breathing slowly as it stretches you out.');
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You gently roll your hips over his, hugging the full length of his <<npc_dick[$n...
              scene.text(`You gently roll your hips over his, hugging the full length of his ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock with your pussy.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You gently roll your hips over his, <i>filled</i> by the huge <<npc_dick[$npcID]...
                scene.text(`You gently roll your hips over his, <i>filled</i> by the huge ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock with your pussy.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You gently roll your hips over his, <i>stretched</i> by the enormous <<npc_dick[...
                  scene.text(`You gently roll your hips over his, <i>stretched</i> by the enormous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your pussy.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    if (((s as any).pcs_vag ?? 0) <= 15) {
                      // TODO-QSP: dynamic text: You gently roll your hips over his, unable to fit the full length of <<$npcdesc>...
                      scene.text(`You gently roll your hips over his, unable to fit the full length of ${((s as any).npcdesc ?? '')}'s ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your pussy as it painfully bumps up against your cervix.`);
                    } else {
                      // TODO-QSP: dynamic text: You gently roll your hips over his, barely to fit the full length of <<$npcdesc>...
                      scene.text(`You gently roll your hips over his, barely to fit the full length of ${((s as any).npcdesc ?? '')}'s ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your pussy as it presses hard against your cervix.`);
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      if (((s as any).pcs_vag ?? 0) <= 15) {
                        // TODO-QSP: dynamic text: You gently roll your hips over his, unable to fit the full length of <<$npcdesc>...
                        scene.text(`You gently roll your hips over his, unable to fit the full length of ${((s as any).npcdesc ?? '')}'s ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your pussy as it fills you all the way to your cervix, bumping up hard against it.`);
                      } else {
                        // TODO-QSP: dynamic text: You gently roll your hips over his, barely able to fit the full length of <<$npc...
                        scene.text(`You gently roll your hips over his, barely able to fit the full length of ${((s as any).npcdesc ?? '')}'s ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your pussy as it fills you all the way to your cervix, pressing hard against it.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        if (((s as any).pcs_vag ?? 0) <= 10) {
                          // TODO-QSP: dynamic text: You gently roll your hips over his, unable to fit the full length of <<$npcdesc>...
                          scene.text(`You gently roll your hips over his, unable to fit the full length of ${((s as any).npcdesc ?? '')}'s monstrous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your bleeding snatch. Too long and too wide for your tight pussy, it feels like being impaled in every sense of the word.`);
                        } else {
                          if (((s as any).pcs_vag ?? 0) <= 25) {
                            // TODO-QSP: dynamic text: You gently roll your hips over his, barely to fit the full length of <<$npcdesc>...
                            scene.text(`You gently roll your hips over his, barely to fit the full length of ${((s as any).npcdesc ?? '')}'s monstrous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your bleeding snatch. You're no virgin, but even for your experienced pussy it feels like fucking a telephone pole.`);
                          } else {
                            // TODO-QSP: dynamic text: You gently roll your hips over his, barely to fit the full length of <<$npcdesc>...
                            scene.text(`You gently roll your hips over his, barely to fit the full length of ${((s as any).npcdesc ?? '')}'s monstrous ${(((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}cm cock inside your bleeding snatch. It fills you completely, and even for your experienced pussy, you feel barely able to contain it.`);
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

function enterCowgirl1BoyTalk1(s: GameState, scene: SceneBuilder): void {
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
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl1BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
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

function enterCowgirl1BoyTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> barely makes a sound as he thrusts into you. You can''t even hear h...
    scene.text(`${((s as any).npcdesc ?? '')} barely makes a sound as he thrusts into you. You can't even hear his breathing over the slap of your bodies colliding.`);
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grunts softly, panting as he thrusts into you.
      scene.text(`${((s as any).npcdesc ?? '')} grunts softly, panting as he thrusts into you.`);
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        // TODO-QSP: dynamic text: <<$npcdesc>> murmurs his words softly as he thrusts into you from on top.
        scene.text(`${((s as any).npcdesc ?? '')} murmurs his words softly as he thrusts into you from on top.`);
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

function enterCowgirl1EnjoyDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s tiny dick inside you, getting the angle just right ...
    scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s tiny dick inside you, getting the angle just right to rub against your g-spot. His hips move with yours, spreading warmth and pleasure through your entire body.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s dick inside you, its fat girth stretching you in a ...
      scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s dick inside you, its fat girth stretching you in a pleasant way while you angle it so its meager length rubs right against your g-spot. His hips move with yours, spreading warmth and pleasure through your entire body.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s skinny dick inside you. Its thin girth makes it eas...
        scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s skinny dick inside you. Its thin girth makes it easy to get the angle just right to rub against your g-spot. His hips move with yours, spreading warmth and pleasure through your entire body.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s dick inside you. It fills you nicely, meaning it is...
          scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s dick inside you. It fills you nicely, meaning it isn't hard to get it to rub against your g-spot. His hips move with yours, spreading warmth and pleasure through your entire body.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s cock inside you. Its thick shaft stretches you out,...
            scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s cock inside you. Its thick shaft stretches you out, filling you u p so much that it's constantly rubbing against your g-spot. His hips move with yours, spreading warmth and pleasure through your entire body.`);
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

function enterCowgirl1_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You slow down to a to a crawl, gently rolling your hips over <<$npcdesc>>''s, fo...
    scene.text(`You slow down to a to a crawl, gently rolling your hips over ${((s as any).npcdesc ?? '')}'s, focusing hard on making sure the feel of his tiny dick isn't lost in the pounding of your bodies.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You slow down to a to a crawl, gently rolling your hips over <<$npcdesc>>''s, fo...
      scene.text(`You slow down to a to a crawl, gently rolling your hips over ${((s as any).npcdesc ?? '')}'s, focusing hard on making sure the feel of his thick chode isn't lost in the pounding of your bodies.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You slow down to a to a crawl, gently rolling your hips over <<$npcdesc>>''s, fo...
        scene.text(`You slow down to a to a crawl, gently rolling your hips over ${((s as any).npcdesc ?? '')}'s, focusing hard on making sure the feel of his skinny dick isn't lost in the pounding of your bodies.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You slow down to a to a crawl, gently rolling your hips over <<$npcdesc>>''s, fo...
          scene.text(`You slow down to a to a crawl, gently rolling your hips over ${((s as any).npcdesc ?? '')}'s, focusing on feeling the full shape of his dick inside you.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).pcs_vag ?? 0) <= 10) {
              // TODO-QSP: dynamic text: You slow down to a to a crawl, gently rolling your hips over <<$npcdesc>>''s, fe...
              scene.text(`You slow down to a to a crawl, gently rolling your hips over ${((s as any).npcdesc ?? '')}'s, feeling every contour and vein of his thick cock inside your tight pussy.`);
            } else {
              // TODO-QSP: dynamic text: You slow down to a to a crawl, gently rolling your hips over <<$npcdesc>>''s, fo...
              scene.text(`You slow down to a to a crawl, gently rolling your hips over ${((s as any).npcdesc ?? '')}'s, focusing on feeling every contour and vein of his thick cock inside your pussy.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You slow down to a to a crawl, gently rolling your hips over <<$npcdesc>>''s, fo...
              scene.text(`You slow down to a to a crawl, gently rolling your hips over ${((s as any).npcdesc ?? '')}'s, focusing depth of his cock inside you, grinding its length up against your cervix.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You slow down to a to a crawl, gently rolling your hips over <<$npcdesc>>''s, gr...
                scene.text(`You slow down to a to a crawl, gently rolling your hips over ${((s as any).npcdesc ?? '')}'s, grinding yourself against the huge cock that fills you.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You slow down to a to a crawl, gently rolling your hips over <<$npcdesc>>''s, gr...
                  scene.text(`You slow down to a to a crawl, gently rolling your hips over ${((s as any).npcdesc ?? '')}'s, grinding yourself against the enormous cock that stretches your pussy in both width and length.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You slow down to a to a crawl, carefully bouncing your hips up and down on <<$np...
                    scene.text(`You slow down to a to a crawl, carefully bouncing your hips up and down on ${((s as any).npcdesc ?? '')}'s cock, so lengthy that you feel it bounce off your cervix without ever being able to reach its base.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You slow down to a to a crawl, carefully bouncing your hips up and down on <<$np...
                      scene.text(`You slow down to a to a crawl, carefully bouncing your hips up and down on ${((s as any).npcdesc ?? '')}'s gigantic cock, so big that you feel it bounce off your cervix without ever being able to reach its base.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You slow down to a to a crawl, carefully bouncing your hips up and down on <<$np...
                        scene.text(`You slow down to a to a crawl, carefully bouncing your hips up and down on ${((s as any).npcdesc ?? '')}'s monstrous cock, so big that you feel it bounce off your cervix without ever being able to reach the bottom of its thick trunk.`);
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

function enterCowgirl1_2MoanDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
    scene.text('"<i>Mm~! Mn~! Mmm~! Nnn~!</i>"');
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: You mew softly as you keep grinding against <<$npcdesc>>''s tiny dick inside you...
      scene.text(`You mew softly as you keep grinding against ${((s as any).npcdesc ?? '')}'s tiny dick inside you, unable to keep your voice contained as it rubs up against your g-spot <i>just</i> right.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: You mew softly as you keep grinding against <<$npcdesc>>''s thick chode inside y...
        scene.text(`You mew softly as you keep grinding against ${((s as any).npcdesc ?? '')}'s thick chode inside you, unable to keep your voice contained as it stretches your pussy <i>just</i> right.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: You mew softly as you keep grinding against <<$npcdesc>>''s skinny dick inside y...
          scene.text(`You mew softly as you keep grinding against ${((s as any).npcdesc ?? '')}'s skinny dick inside you, unable to keep your voice contained as it rubs up against your g-spot <i>just</i> right.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: You mew softly as you keep grinding against <<$npcdesc>>''s dick inside you, una...
            scene.text(`You mew softly as you keep grinding against ${((s as any).npcdesc ?? '')}'s dick inside you, unable to keep your voice contained as it rubs up against your g-spot <i>just</i> right.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: You mew softly as you keep grinding against <<$npcdesc>>''s thick cock inside yo...
              scene.text(`You mew softly as you keep grinding against ${((s as any).npcdesc ?? '')}'s thick cock inside you, unable to keep your voice contained as it rubs up against your g-spot and stretches you out in the most satisfying way.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: You mew softly as you keep grinding against <<$npcdesc>>''s cock inside you, una...
                scene.text(`You mew softly as you keep grinding against ${((s as any).npcdesc ?? '')}'s cock inside you, unable to keep your voice contained as it rubs up against your cervix in the most satisfying way.`);
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

function enterCowgirl1_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: dynamic text: "Ahh~! Your cock feels so good~!" you moan, your voice a hoarse with arousal as ...
        scene.text(`"Ahh~! Your cock feels so good~!" you moan, your voice a hoarse with arousal as you roll your hips over ${((s as any).npcdesc ?? '')}. "Your tiny dick is gonna make me come~!"`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: dynamic text: "Ahh~! Your cock feels so good~!" you moan, your voice a hoarse with arousal as ...
          scene.text(`"Ahh~! Your cock feels so good~!" you moan, your voice a hoarse with arousal as you roll your hips over ${((s as any).npcdesc ?? '')}. "Your fat chode is gonna make me come~!"`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: dynamic text: "Ahh~! Your cock feels so good~!" you moan, your voice a hoarse with arousal as ...
            scene.text(`"Ahh~! Your cock feels so good~!" you moan, your voice a hoarse with arousal as you roll your hips over ${((s as any).npcdesc ?? '')}. "I can feel you moving inside me~! It's so good~!"`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: dynamic text: "Ahh~! Your cock feels so good~!" you moan, your voice a hoarse with arousal as ...
              scene.text(`"Ahh~! Your cock feels so good~!" you moan, your voice a hoarse with arousal as you roll your hips over ${((s as any).npcdesc ?? '')}. "You're filling me up just right~! It's like your cock was made for my pussy~!"`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                if (((s as any).pcs_vag ?? 0) <= 10) {
                  scene.text('"Ahh~! You\'re <i>so big~!</i>" you moan, your voice a hoarse with arousal. "I can barely fit you inside me~! It\'s stretching me out! Oh <i>fuck~!</i> It\'s making me so wet..."');
                } else {
                  scene.text('"Ahh~! You\'re <i>so big~!</i>" you moan, your voice a hoarse with arousal. "Oh <i>fuck~!</i> I love riding your big fucking cock~!"');
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  scene.text('"Ahh~! You\'re <i>so deep~!</i>" you moan, your voice a hoarse with arousal. "Oh <i>fuck~!</i> I can feel you so far inside me~!"');
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    if (((s as any).pcs_vag ?? 0) <= 10) {
                      scene.text('"Ungh~! <i>Fuck</i> you\'re big~!" you groan, your voice a hoarse with arousal. "I can barely fit you inside me~! It\'s stretching me out! Oh <i>fuck~!</i> I love your cock~!"');
                    } else {
                      scene.text('"Ungh~! You\'re <i>so big~!</i>" you moan, your voice a hoarse with arousal. "Oh <i>fuck~!</i> I\'m so full~! I can\'t get enough of your huge fucking cock~!"');
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      if (((s as any).pcs_vag ?? 0) <= 10) {
                        scene.text('"Ungh~! <i>Fuck~!</i>" you groan. "Your cock is fucking enormous~! My pussy can barely take it~! Nngh~! I can\'t stop moving~! It\'s too fucking good~!"');
                      } else {
                        scene.text('"Ungh~! I love your cock~!" you moan. "I love your enormous fucking cock inside my pussy~! I want to ride this cock forever~!"');
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        scene.text('"Oh <i>fuck!</i> I can feel you in my stomach~!" you groan. "I can\'t even fit you all the way inside me~! Fuck~! I can feel you knocking on my cervix~! Ahh~! I can feel you wiggling inside me~!"');
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          scene.text('"Oh <i>fuck!</i> I can feel you in my stomach~!" you groan. "I can\'t even fit you all the way inside me~! Fuck~! I can feel you knocking on my cervix~! Oh fuck~! You\'re filling me all the way up~!"');
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: dynamic text: "<i>Ungh~! Fuck~!</i>" you groan, struggling to ride <<$npcdesc>>''s massive coc...
                            scene.text(`"<i>Ungh~! Fuck~!</i>" you groan, struggling to ride ${((s as any).npcdesc ?? '')}'s massive cock. "Your cock is so <i>fucking big~!</i> It's like a baseball bat in my pussy~! I can feel you in my stomach~! Nngh~! I feel like I'm gonna throw up~! But I can't stop moving~! Oh god it's gonna rip me in half~!"`);
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
      scene.text('"Fuck~!" you pant. "Your cock is so fucking hard inside me~! Oh fuck~! Oh fuck~!"');
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'arousal') {
      if (((s as any).pcs_horny ?? 0) >= 60) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! Fuck~!" you moan softly, barely louder than a whisper as your hips continue rolling over his. "I\'m gonna come~!"');
        } else {
          scene.text('"I\'m gonna come~!" you moan. "I can\'t stop moving~! I\'m gonna come~!"');
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! I\'m <i>so</i> wet..." you mew softly. "I love riding your dick..."');
        } else {
          scene.text('"Ah~! That feels <i>so good</i>," you moan quietly. "I\'m gonna go crazy~!"');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'technique') {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Yes~! Just like that~!" you moan. "You\'re so good~! Don\'t stop~! Don\'t stop~!"');
        } else {
          scene.text('"I love the way you fuck me~!" you moan hoarsely. "Keep going~!"');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'dirty_girl') {
          if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Who''s pussy is this?" <<$npcdesc>> growls as he moves his cock inside you unex...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc ?? '')} growls as he moves his cock inside you unexpectedly, guiding your hips with his hands.`);
            scene.text('"Yours~!" you whimper atop him.');
          } else {
            if (((s as any).pcs_horny ?? 0) >= 70) {
              if ((Math.floor(Math.random() * 1) + 1) === 1) {
                scene.text('"Oh fuck~!" you moan softly, barely louder than a whisper. "This dirty little slut is gonna cum all over your cock~!"');
              } else {
                scene.text('"Oh shit~! Imgonnacum~!" you barely gasp out. "You\'re gonna make this filthy whore cum~!"');
              }
            } else {
              if ((Math.floor(Math.random() * 2) + 0) === 1) {
                scene.text('"Ungh~! Fuck~! I\'m such a dirty girl~!" you mew softly. "I can\'t stop moving~! I\'m such a slut~!"');
              } else {
                scene.text('"Have you ever been ridden by a cunt as sloppy as mine?" you moan. "Ungh~! I\'m so wet~! Only a whore like me would get this wet~!"');
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

function enterCowgirl1_2SensationDesc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl2StartPeriodDesc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl2StartDesc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl2BoyTalk1(s: GameState, scene: SceneBuilder): void {
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
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
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

function enterCowgirl2BoyTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> barely makes a sound as he thrusts into you. You can''t even hear h...
    scene.text(`${((s as any).npcdesc ?? '')} barely makes a sound as he thrusts into you. You can't even hear his breathing over the slap of your bodies colliding.`);
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grunts softly, panting as he thrusts into you.
      scene.text(`${((s as any).npcdesc ?? '')} grunts softly, panting as he thrusts into you.`);
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        // TODO-QSP: dynamic text: <<$npcdesc>> murmurs his words softly as he thrusts into you from on top.
        scene.text(`${((s as any).npcdesc ?? '')} murmurs his words softly as he thrusts into you from on top.`);
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

function enterCowgirl2EnjoyDesc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl2_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'cowgirl1') {
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
    if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'cowgirl3') {
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

function enterCowgirl2_2MoanDesc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl2_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
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
  } else {
    if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'arousal') {
      if (((s as any).pcs_horny ?? 0) >= 60) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! Fuck~!" you groan between bounces. "I\'m gonna come~!"');
        } else {
          scene.text('"I\'m gonna come~!" you moan. "I can\'t stop moving~! <i>I\'m gonna come~! I\'m gonna come~! I\'m gonna come~!</i>"');
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! I\'m <i>so</i> wet..." you moan loudly. "You feel so good inside me~! I can\'t stop~!"');
        } else {
          scene.text('"Ah~! My pussy can\'t get enough~!" you moan loudly. "I\'m gonna go crazy~!"');
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
            // TODO-QSP: dynamic text: "Who''s pussy is this?" <<$npcdesc>> growls as he yanks your hips down, slamming...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc ?? '')} growls as he yanks your hips down, slamming your pussy onto his cock.`);
            scene.text('"Yours~!" you whimper atop him.');
          } else {
            if (((s as any).pcs_horny ?? 0) >= 70) {
              if ((Math.floor(Math.random() * 1) + 1) === 1) {
                scene.text('"Oh fuck~!" you moan loudly. "This dirty little slut is gonna cum all over your cock~!"');
              } else {
                scene.text('"Oh shit~! Imgonnacum~!" you barely gasp out. "You\'re gonna make this filthy whore cum~!"');
              }
            } else {
              if ((Math.floor(Math.random() * 2) + 0) === 1) {
                scene.text('"Ungh~! Fuck~! I\'m such a dirty girl~!" you moan loudly. "I can\'t stop moving~! I\'m such a slut~!"');
              } else {
                scene.text('"Have you ever been ridden by a cunt as sloppy as mine?" you moan. "Ungh~! I\'m so wet~! Only a whore like me would get this wet~!"');
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

function enterCowgirl2_2SensationDesc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl3StartPeriodDesc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl3StartDesc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl3BoyTalk1(s: GameState, scene: SceneBuilder): void {
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
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl3BoyTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"<i>Mmph~!</i> You\'re so good~! <i>Mmph~!</i>"');
            } else {
              if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text('"<i>Hnn~!</i> Work that fucking cock whore! <i>Hnn~!</i>"');
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
                scene.text('"<i>Hnn~!</i> Yeah! <i>Hnn~!</i> Ride my fucking cock bitch!"');
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

function enterCowgirl3BoyTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> barely makes a sound as he thrusts into you. You can''t even hear h...
    scene.text(`${((s as any).npcdesc ?? '')} barely makes a sound as he thrusts into you. You can't even hear his breathing over the slap of his hips smashing into yours.`);
  } else {
    if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grunts softly, panting as he thrusts into you.
      scene.text(`${((s as any).npcdesc ?? '')} grunts softly, panting as he thrusts into you.`);
    } else {
      if (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        // TODO-QSP: dynamic text: <<$npcdesc>> growls as he smashes your pussy from above.
        scene.text(`${((s as any).npcdesc ?? '')} growls as he smashes your pussy from above.`);
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

function enterCowgirl3EnjoyDesc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl3TooRough(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl3SlowDown(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl3_1Desc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl3_2MoanDesc(s: GameState, scene: SceneBuilder): void {
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

function enterCowgirl3_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
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
  } else {
    if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'arousal') {
      if (((s as any).pcs_horny ?? 0) >= 70) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Yes~! Fuck~! Yes~!" you scream. "I can\'t fucking stop~! I\'m gonna fucking come~!"');
        } else {
          scene.text('"Oh <i>fuck</i>~!" you scream. "I\'m so fucking wet~! I\'m gonna come~! I\'m gonna come all over your cock~!"');
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! Yes~!" you scream. "My pussy loves your cock~! I can\'t get enough~!"');
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
            // TODO-QSP: dynamic text: "Who''s pussy is this?" <<$npcdesc>> growls as he thrusts his cock into you from...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc ?? '')} growls as he thrusts his cock into you from below like an inverted jackhammer.`);
            scene.text('"Yours~!" you whimper from atop him, barely able to keep from falling over.');
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

function enterCowgirl3_2SensationDesc(s: GameState, scene: SceneBuilder): void {
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
    case 'cowgirl_goto':
      enterCowgirlGoto(s, scene);
      break;
    case 'cowgirl_goto2':
      enterCowgirlGoto2(s, scene);
      break;
    case 'cowgirl_start':
      enterCowgirlStart(s, scene);
      break;
    case 'cowgirl_virgin_pre':
      enterCowgirlVirginPre(s, scene);
      break;
    case 'cowgirl_switch':
      enterCowgirlSwitch(s, scene);
      break;
    case 'cowgirl_switch2':
      enterCowgirlSwitch2(s, scene);
      break;
    case 'cowgirl_climb_on':
      enterCowgirlClimbOn(s, scene);
      break;
    case 'cowgirl_insert_acts':
      enterCowgirlInsertActs(s, scene);
      break;
    case 'cowgirl_first_insertion':
      enterCowgirlFirstInsertion(s, scene);
      break;
    case 'cowgirl_insert_menu':
      enterCowgirlInsertMenu(s, scene);
      break;
    case 'cowgirl_insert_slow':
      enterCowgirlInsertSlow(s, scene);
      break;
    case 'cowgirl_insert_hard':
      enterCowgirlInsertHard(s, scene);
      break;
    case 'cowgirl_insert_orgasm':
      enterCowgirlInsertOrgasm(s, scene);
      break;
    case 'cowgirl_girl_orgasm_continue':
      enterCowgirlGirlOrgasmContinue(s, scene);
      break;
    case 'cowgirl_menu':
      enterCowgirlMenu(s, scene);
      break;
    case 'cowgirl_menu2':
      enterCowgirlMenu2(s, scene);
      break;
    case 'cowgirl_change_position':
      enterCowgirlChangePosition(s, scene);
      break;
    case 'cowgirl_pain1':
      enterCowgirlPain1(s, scene);
      break;
    case 'cowgirl_pain2':
      enterCowgirlPain2(s, scene);
      break;
    case 'cowgirl_pain3':
      enterCowgirlPain3(s, scene);
      break;
    case 'cowgirl_vid':
      enterCowgirlVid(s, scene);
      break;
    case 'cowgirl1':
      enterCowgirl1(s, scene);
      break;
    case 'cowgirl1.2':
      enterCowgirl1_2(s, scene);
      break;
    case 'cowgirl1.bored':
      enterCowgirl1_bored(s, scene);
      break;
    case 'cowgirl2':
      enterCowgirl2(s, scene);
      break;
    case 'cowgirl2.2':
      enterCowgirl2_2(s, scene);
      break;
    case 'cowgirl2.bored':
      enterCowgirl2_bored(s, scene);
      break;
    case 'cowgirl3':
      enterCowgirl3(s, scene);
      break;
    case 'cowgirl3.2':
      enterCowgirl3_2(s, scene);
      break;
    case 'cowgirl3.bored':
      enterCowgirl3_bored(s, scene);
      break;
    case 'cowgirl_change_pace':
      enterCowgirlChangePace(s, scene);
      break;
    case 'cowgirl1_start_period_desc':
      enterCowgirl1StartPeriodDesc(s, scene);
      break;
    case 'cowgirl1_start_desc':
      enterCowgirl1StartDesc(s, scene);
      break;
    case 'cowgirl1_boy_talk1':
      enterCowgirl1BoyTalk1(s, scene);
      break;
    case 'cowgirl1_boy_talk2':
      enterCowgirl1BoyTalk2(s, scene);
      break;
    case 'cowgirl1_enjoy_desc':
      enterCowgirl1EnjoyDesc(s, scene);
      break;
    case 'cowgirl1.1_desc':
      enterCowgirl1_1Desc(s, scene);
      break;
    case 'cowgirl1.2_moan_desc':
      enterCowgirl1_2MoanDesc(s, scene);
      break;
    case 'cowgirl1.2_dirty_talk':
      enterCowgirl1_2DirtyTalk(s, scene);
      break;
    case 'cowgirl1.2_sensation_desc':
      enterCowgirl1_2SensationDesc(s, scene);
      break;
    case 'cowgirl2_start_period_desc':
      enterCowgirl2StartPeriodDesc(s, scene);
      break;
    case 'cowgirl2_start_desc':
      enterCowgirl2StartDesc(s, scene);
      break;
    case 'cowgirl2_boy_talk1':
      enterCowgirl2BoyTalk1(s, scene);
      break;
    case 'cowgirl2_boy_talk2':
      enterCowgirl2BoyTalk2(s, scene);
      break;
    case 'cowgirl2_enjoy_desc':
      enterCowgirl2EnjoyDesc(s, scene);
      break;
    case 'cowgirl2.1_desc':
      enterCowgirl2_1Desc(s, scene);
      break;
    case 'cowgirl2.2_moan_desc':
      enterCowgirl2_2MoanDesc(s, scene);
      break;
    case 'cowgirl2.2_dirty_talk':
      enterCowgirl2_2DirtyTalk(s, scene);
      break;
    case 'cowgirl2.2_sensation_desc':
      enterCowgirl2_2SensationDesc(s, scene);
      break;
    case 'cowgirl3_start_period_desc':
      enterCowgirl3StartPeriodDesc(s, scene);
      break;
    case 'cowgirl3_start_desc':
      enterCowgirl3StartDesc(s, scene);
      break;
    case 'cowgirl3_boy_talk1':
      enterCowgirl3BoyTalk1(s, scene);
      break;
    case 'cowgirl3_boy_talk2':
      enterCowgirl3BoyTalk2(s, scene);
      break;
    case 'cowgirl3_enjoy_desc':
      enterCowgirl3EnjoyDesc(s, scene);
      break;
    case 'cowgirl3_too_rough':
      enterCowgirl3TooRough(s, scene);
      break;
    case 'cowgirl3_slow_down':
      enterCowgirl3SlowDown(s, scene);
      break;
    case 'cowgirl3.1_desc':
      enterCowgirl3_1Desc(s, scene);
      break;
    case 'cowgirl3.2_moan_desc':
      enterCowgirl3_2MoanDesc(s, scene);
      break;
    case 'cowgirl3.2_dirty_talk':
      enterCowgirl3_2DirtyTalk(s, scene);
      break;
    case 'cowgirl3.2_sensation_desc':
      enterCowgirl3_2SensationDesc(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_cowgirl: LocationDef = {
  name: 'sex_ev_cowgirl',
  title: '"My turn to be on top," you grin.',
  region: 'other',
  enter: enter,
};
