import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRandEvCheck(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['rand_ev'] = ((s as any).sex_ev['rand_ev'] ?? 0) + (1);
  if ((Math.floor(Math.random() * 20) + 1) <= ((s as any).sex_ev ?? 0)?.['rand_ev']) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rand_ev'] = 0;
    if ((Math.floor(Math.random() * 100) + 1) > ((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)]) {
      // TODO-QSP: $sex_ev_sex_events[] = "gt 'sex_ev_events', 'bad_thrust_start'"
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['phone_film'] === 0  &&  ((s as any).npc_sex_filmer ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 20) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
      // TODO-QSP: $sex_ev_sex_events[] = "gt 'sex_ev_events', 'sex_film1'"
    }
    if (Object.keys((s as any).sex_ev_sex_events ?? {}).length > 0) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic $sex_ev_sex_events[rand(0, arrsize('sex_ev_sex_event...
  } },
      ]);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] !== ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['position'] !== 'anal'  &&  (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy'  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl')) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['changing_pos_ev'] = ((s as any).sex_ev['changing_pos_ev'] ?? 0) + (1);
      if (((s as any).sex_ev ?? 0)?.['changing_pos_ev'] > (Math.floor(Math.random() * 4) + 2)) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['changing_pos_ev'] = 0;
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_events', 'position_swap_ev'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBadThrustStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/vag/miss/pain1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> is just going through the motions of his next thrust when you feel ...
    scene.text(`${((s as any).npcdesc ?? '')} is just going through the motions of his next thrust when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/shock1.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> is just going through the motions of his next thrust when you feel ...
      scene.text(`${((s as any).npcdesc ?? '')} is just going through the motions of his next thrust when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/2.jpg');
        // TODO-QSP: dynamic text: You''re just bouncing your hips back down onto <<$npcdesc>>''s cock when you fee...
        scene.text(`You're just bouncing your hips back down onto ${((s as any).npcdesc ?? '')}'s cock when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.img('images/shared/sex/anal/doggy/anal.jpg');
          // TODO-QSP: dynamic text: <<$npcdesc>> is just going through the motions of his next thrust when you feel ...
          scene.text(`${((s as any).npcdesc ?? '')} is just going through the motions of his next thrust when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain right up your ass.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Yelp', goto: ['sex_ev_events', 'bad_thrust_yelp'] },
  ]);
  scene.build();
}

function enterBadThrustYelp(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bad_thrust_count'] = ((s as any).sex_ev['bad_thrust_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/vag/miss/3.jpg');
    // TODO-QSP: dynamic text: "Yowch!" you yelp and <<$npcdesc>> nearly falls on top of you, trying to catch h...
    scene.text(`"Yowch!" you yelp and ${((s as any).npcdesc ?? '')} nearly falls on top of you, trying to catch himself out of thrusting again.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/shock1.jpg');
      // TODO-QSP: dynamic text: "Yowch!" you yelp and <<$npcdesc>> nearly falls on top of you, trying to catch h...
      scene.text(`"Yowch!" you yelp and ${((s as any).npcdesc ?? '')} nearly falls on top of you, trying to catch himself out of thrusting again.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        scene.text('"Yowch!" you yelp, bouncing back up suddenly like you just sat on a nail.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.img('images/shared/sex/anal/doggy/anal.jpg');
          // TODO-QSP: dynamic text: "Yowch!" you yelp and <<$npcdesc>> nearly falls on top of you, trying to catch h...
          scene.text(`"Yowch!" you yelp and ${((s as any).npcdesc ?? '')} nearly falls on top of you, trying to catch himself out of thrusting again.`);
        }
      }
    }
  }
  if ((Math.floor(Math.random() * 100) + 1) <= ((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)]) {
    // TODO-QSP: dynamic text: "Oh shit, you okay?" <<$npcdesc>> asks. "I felt that too."
    scene.text(`"Oh shit, you okay?" ${((s as any).npcdesc ?? '')} asks. "I felt that too."`);
    scene.actions([
      { label: 'It was nothing', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/3.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
            scene.img('images/shared/sex/anal/doggy/anal.jpg');
          }
        }
      }
    }
    scene.text('"Yeah, I\'m fine," you shake your head, trying to keep the grimace off your face as you recover from your unexpected poke. "Don\'t worry about it."');
    scene.text('"Sorry about that. I\'ll try to be more careful."');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['pos_speed'])) + '.2');
  } },
    ]);
  } },
      { label: 'Laugh it off', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/pain1.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/smile1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
            scene.img('images/shared/sex/anal/doggy/anal.jpg');
          }
        }
      }
    }
    scene.text('"Yeah, just a sensitive spot there."');
    scene.text('"Sorry about that."');
    scene.text('"Don\'t worry about it. It happens." You can\'t help but laugh a little, eyes tearing in both pain and amusement. Despite the awkwardness, it seems like your humors have only made this situation more enjoyable.');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['pos_speed'])) + '.2');
  } },
    ]);
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "What is it?" <<$npcdesc>> pants, looking very confused as to why you suddenly c...
    scene.text(`"What is it?" ${((s as any).npcdesc ?? '')} pants, looking very confused as to why you suddenly cried out.`);
    scene.actions([
      { label: 'It was nothing', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/3.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
            scene.img('images/shared/sex/anal/doggy/anal.jpg');
          }
        }
      }
    }
    scene.text('"Nothing," you shake your head, trying to keep the grimace off your face as you recover from your unexpected poke. "Don\'t worry about it."');
    scene.text('"Okay, if you say so..."');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['pos_speed'])) + '.2');
  } },
    ]);
  } },
      { label: 'Laugh it off', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/pain1.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/smile1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
            scene.img('images/shared/sex/anal/doggy/anal.jpg');
          }
        }
      }
    }
    scene.text('"Your dick gave me a bit of a bad poke there."');
    scene.text('"Oops, sorry about that."');
    scene.text('"Don\'t worry about it. It happens." You can\'t help but laugh a little, eyes tearing in both pain and amusement. Despite the awkwardness, it seems like your humors have only made this situation more enjoyable.');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['pos_speed'])) + '.2');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get irritated', goto: ['sex_ev_events', 'bad_thrust_irate'] },
  ]);
  scene.build();
}

function enterBadThrustIrate(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bad_thrust_count'] = ((s as any).sex_ev['bad_thrust_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/vag/miss/pain1.jpg');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/shock1.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.img('images/shared/sex/anal/doggy/anal.jpg');
        }
      }
    }
  }
  scene.text('"Ouch! What the fuck! Watch where you\'re putting that thing!" you growl. "That fucking hurt!');
  if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('"What did I do?! I was fucking you like normal!" he snaps back.');
    // TODO-QSP: dynamic text: '"Oh yeah? So it''s totally normal to feel like you''re getting stabbed in the '...
    scene.text('"Oh yeah? So it\'s totally normal to feel like you\'re getting stabbed in the ' + ((((s as any).sex_ev ?? 0)?.['position'] !== 'anal') ? ('pussy') : ('asshole')) + ' while fucking, huh?"');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['pos_speed'])) + '.2');
  } },
    ]);
  } else {
    scene.text('"Oh-! Er, sorry."');
    scene.text('"Whatever, let\'s just keep going..."');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spe...
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPositionSwapEv(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/dog1.jpg');
      // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> pulls out from between your legs and fli...
      scene.text(`With little to no warning, ${((s as any).npcdesc ?? '')} pulls out from between your legs and flips you over onto your knees. He doesn't miss a beat and thrusts back into you from behind, keeping the same rhythm as before but now in doggystyle.`);
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_doggy', 'doggy' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
      ]);
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/2.jpg');
        // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> wraps his arms under your back and hauls...
        scene.text(`With little to no warning, ${((s as any).npcdesc ?? '')} wraps his arms under your back and hauls, flopping onto his back with you on top, his cock never even leaving your pussy. He doesn't miss a beat and keeps pumping into you from below with his hands on your hips, encouraging you to keep the same rhythm as before but now in cowgirl.`);
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_cowgirl', 'cowgirl' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
        ]);
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
        scene.img('images/shared/sex/vag/miss/3.jpg');
        // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> pulls out from behind and flips you over...
        scene.text(`With little to no warning, ${((s as any).npcdesc ?? '')} pulls out from behind and flips you over onto your back. He doesn't miss a beat and thrusts back in between your legs, now with him on top.`);
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_miss', 'miss' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
        ]);
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/hug1.jpg');
          // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> pulls out of you and turns you around, p...
          scene.text(`With little to no warning, ${((s as any).npcdesc ?? '')} pulls out of you and turns you around, pulling you onto his lap and back onto his cock. He doesn't miss a beat and keeps pumping into you from below, encouraging you to keep the same rhythm as before but now in cowgirl.`);
          scene.actions([
            { label: 'Continue', goto: ['sex_ev_cowgirl', 'cowgirl' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
          ]);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
          scene.img('images/shared/sex/vag/miss/miss_cow_switch.mp4');
          // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> wraps his arms around you and twists his...
          scene.text(`With little to no warning, ${((s as any).npcdesc ?? '')} wraps his arms around you and twists his hips, flipping you onto your back with his cock never even leaving your pussy. He doesn't miss a beat and keeps pumping into you, now with him on top.`);
          scene.actions([
            { label: 'Continue', goto: ['sex_ev_miss', 'miss' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
          ]);
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/dog1.jpg');
            // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> pulls out from underneath you and flips ...
            scene.text(`With little to no warning, ${((s as any).npcdesc ?? '')} pulls out from underneath you and flips you over onto your knees. He doesn't miss a beat and thrusts back into you from behind, keeping the same rhythm as before but now in doggystyle.`);
            scene.actions([
              { label: 'Continue', goto: ['sex_ev_doggy', 'doggy' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDirtyTalkRouter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterWhosePussy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    // TODO-QSP: dynamic text: Grabbing your wrists, <<$npcdesc>> pins them above your head and slams his hips ...
    scene.text(`Grabbing your wrists, ${((s as any).npcdesc ?? '')} pins them above your head and slams his hips into yours, driving his cock into your cunt with a reverberating shockwave.`);
    scene.text('"Whose pussy is this?" he growls at you from above.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      // TODO-QSP: dynamic text: Placing one hand on the center of your back and clamping the other around your w...
      scene.text(`Placing one hand on the center of your back and clamping the other around your wrist, ${((s as any).npcdesc ?? '')} pins you to the bed and slams his hips into the back of your ass, driving his cock into you with a reverberating shockwave.`);
      scene.text('"Whose pussy is this?" he growls at you from behind.');
    } else {
      scene.text('Holding your wrist, he pins your arm to the bed and forces your head down by the back of your neck and slams his hips into the back of your ass, driving his cock into you with a reverberating shockwave.');
      scene.text('"Whose pussy is this?" he growls at you.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'This is hot', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/old1.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/massage/doggy9.mp4');
      }
    }
    qspCall(st, 'arousal', 'foreplay', (-15));
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    scene.text('"Whose pussy is this?" he growls.');
    // TODO-QSP: dynamic text: "Yours!" you moan in a pitiful whimper. Your calves wrap around the back of <<$n...
    scene.text(`"Yours!" you moan in a pitiful whimper. Your calves wrap around the back of ${((st as any).npcdesc ?? '')}'s thighs. Your toes curl. He pounds you again.`);
    scene.text('"Whose?" he asks, pounding you even harder.');
    scene.text('"<i>Yours!</i>" you cry and your whole body goes taut beneath his weight. Fuck! <i>This is so hot!</i>');
    qspGoto(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Play along', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/old1.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/med2.mp4');
      }
    }
    scene.text('"Yours!" you grunt, not particularly turned on by this kind of dirty talk.');
    scene.text('"Whose?" he asks, pounding your pussy again with even more force.');
    scene.text('"<i>Yours!</i>" you cry. Fuck! <i>This is so hot!</i>');
    if (((st as any).orgasm ?? 0) > ((st as any).sex_ev ?? 0)?.['orgasm']) {
    } else {
      qspGoto(st, 'sex_ev_sex', 'fuck_continue');
    }
  } },
    { label: 'Confusion', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/3.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/2.jpg');
      }
    }
    scene.text('"Uhmm... Mine...?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> stops in the middle of his next thrust, a look of pure confusion on...
    scene.text(`${((st as any).npcdesc ?? '')} stops in the middle of his next thrust, a look of pure confusion on his face. A hot blush fills your cheeks as you realize that you just failed at something.`);
    qspGoto(st, 'sex_ev_sex', 'fuck_continue');
  } },
  ]);
  scene.build();
}

function enterWhosePussyCum(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).sex_ev['orgasm_count'] ?? 0) + (1);
  // TODO-QSP: dynamic text: The way that <<$npcdesc>> is dominating you, taking ownership of you pussy like ...
  scene.text(`The way that ${((s as any).npcdesc ?? '')} is dominating you, taking ownership of you pussy like this, it's driving you crazy! Deep inside, you feel an intense orgasm building...`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Play into it', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/orgasm_rough1.mp4');
      scene.text('The shuddering starts in your legs, muscles clenching until your thighs hurt. You feel like you can\'t breathe, barely managing to gasp out,');
      scene.text('"Nngh~ <i>I\'mgonnacum~!</i>"');
      // TODO-QSP: dynamic text: In response, <<$npcdesc>> clamps his hand over your mouth, choking off any furth...
      scene.text(`In response, ${((st as any).npcdesc ?? '')} clamps his hand over your mouth, choking off any further words, and pummels into your cunt with the full force of his body weight. That last action of dominance lets the floodgates loose and your eyes roll back as your orgasm erupts.`);
      // TODO-QSP: dynamic text: Your loud groan is muffled by <<$npcdesc>>''s hand and your body spasms uncontro...
      scene.text(`Your loud groan is muffled by ${((st as any).npcdesc ?? '')}'s hand and your body spasms uncontrollably. Your pussy is a quivering mess, only made worse by ${((st as any).npcdesc ?? '')}'s relentless pounding, and the intensity of your climax nearly makes you black out.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/massage/doggy10.mp4');
        scene.text('The shuddering starts in your legs, muscles clenching until you thighs hurt. You feel like you can\'t breathe, barely managing to gasp out,');
        scene.text('"Nngh~ <i>I\'mgonnacum~!</i>"');
      }
    }
  } },
  ]);
  scene.build();
}

function enterSexFilmCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['phone_film'] === 0  &&  ((s as any).npc_sex_filmer ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 20) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    qspGoto(s, 'sex_ev_events', 'sex_film1');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexFilm1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['phone_film'] = 1;
  scene.img('images/shared/sex/vag/miss/med4.mp4');
  // TODO-QSP: dynamic text: You''re panting in time with <<$npcdesc>>''s thrusts on top of you when you sudd...
  scene.text(`You're panting in time with ${((s as any).npcdesc ?? '')}'s thrusts on top of you when you suddenly become aware of a glow coming from above you. ${((s as any).npcdesc ?? '')} has his phone out. And it's pointed directly at you.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexFilmProtest(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexFilmAccept(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSexFilmProtest(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Cover your face', handler: (st: GameState) => {
    scene.actions([
      { label: 'Shy', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/hard3.mp4');
    // TODO-QSP: dynamic text: "Hngh~! Ungh~! <<$npcdesc>>, nooo~!" you protest weakly. A flush of total embarr...
    scene.text(`"Hngh~! Ungh~! ${((st as any).npcdesc ?? '')}, nooo~!" you protest weakly. A flush of total embarrassment burns through your cheeks and you hold your hand up in a futile attempt to block the view of your quickly reddening face.`);
    if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Smile for the camera," <<$npcdesc>> grins, still fucking you as he holds the ca...
      scene.text(`"Smile for the camera," ${((st as any).npcdesc ?? '')} grins, still fucking you as he holds the camera right up to you.`);
    } else {
      // TODO-QSP: dynamic text: "Fuck, you look so hot," <<$npcdesc>> grins, still fucking you as he holds the c...
      scene.text(`"Fuck, you look so hot," ${((st as any).npcdesc ?? '')} grins, still fucking you as he holds the camera right up to you.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexFilmForceStop(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Let him film you (reluctant)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['phone_film'] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/hard3.mp4"></video></center>';
    if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Hngh~! Ungh~! ' + ((st as any).npcdesc ?? 0) + ', nooo~!"<br>"Smile for the camera."';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Hngh~! Ungh~! ' + ((st as any).npcdesc ?? 0) + ', nooo~!"<br>"Fuck, you look so hot."';
    }
    scene.img('images/shared/sex/vag/miss/hard2.mp4');
    // TODO-QSP: dynamic text: With great reluctance, you silence your protests and let <<$npcdesc>> film you g...
    scene.text(`With great reluctance, you silence your protests and let ${((st as any).npcdesc ?? '')} film you getting fucked by him. Though you still can't stop yourself from shamefully (and ineffectively) trying to cover your face.`);
    scene.text('You can\'t help but breathe a sigh of relief when he finally puts the phone away. But only after getting a decently long video...');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexFilmEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Keep protesting', handler: (st: GameState) => {
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/vag/miss/3.jpg');
      scene.text('"Please~! Mmph~! I don\'t want to be filmed~!" you whine as cold panic fills your chest.');
      // TODO-QSP: dynamic text: The look on <<$npcdesc>>''s face changes with your continued protests and he bli...
      scene.text(`The look on ${((st as any).npcdesc ?? '')}'s face changes with your continued protests and he blinks, as if only just now aware of what he's doing.`);
      scene.text('"Oh. Er... sorry," he mumbles. You sigh in relief as he pauses fucking you to put away the phone.');
      scene.text('"You\'ll delete it later, right?" you ask.');
      scene.text('"I will," he promises with a smile.');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/hard3.mp4"></video></center>';
      if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Hngh~! Ungh~! ' + ((st as any).npcdesc ?? 0) + ', nooo~!"<br>"Smile for the camera."<br>"Please~! Mmph~! I don\'t want to be filmed~!"<br>"Come on, don\'t be like that. You look so sexy. This is hot."';
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Hngh~! Ungh~! ' + ((st as any).npcdesc ?? 0) + ', nooo~!"<br>"Fuck, you look so hot."<br>"Please~! Mmph~! I don\'t want to be filmed~!"<br>"Come on, don\'t be like that. You look so sexy. This is hot."';
      }
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_author'] = ((st as any).npcID ?? 0);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['phone_film'] = 2;
      scene.text('"Please~! Mmph~! I don\'t want to be filmed~!" you whimper again, feeling cold panic fill your chest.');
      // TODO-QSP: dynamic text: "Come on, don''t be like that," <<$npcdesc>> says, ignoring your pleas. "This is...
      scene.text(`"Come on, don't be like that," ${((st as any).npcdesc ?? '')} says, ignoring your pleas. "This is great. You look so sexy."`);
      scene.text('Your weak protests do nothing to sway him and he takes a decently long video of you getting railed before he finally puts the phone away.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexFilmEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Annoyed', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/hard3.mp4');
    scene.text('"Ungh~! Hmph~! Hey! What do you think you\'re doing?" you grunt as he pushes the camera towards your face and you immediately try to cover up with your hand.');
    // TODO-QSP: dynamic text: "Don''t worry, you look great," <<$npcdesc>> grins, still fucking you as he film...
    scene.text(`"Don't worry, you look great," ${((st as any).npcdesc ?? '')} grins, still fucking you as he films.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexFilmForceStop(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Let him film you (reluctant)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Ungh~! Hmph~! Hey! What do you think you\'re doing?"<br>"Don\'t worry, you look great."';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['phone_film'] = 2;
    scene.img('images/shared/sex/vag/miss/hard2.mp4');
    // TODO-QSP: dynamic text: With great reluctance, you silence your protests and let <<$npcdesc>> film you g...
    scene.text(`With great reluctance, you silence your protests and let ${((st as any).npcdesc ?? '')} film you getting fucked by him. Though you still can't stop yourself from shamefully (and ineffectively) trying to cover your face.`);
    scene.text('You can\'t help but breathe a sigh of relief when he finally puts the phone away. But only after getting a decently long video...');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexFilmEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Keep protesting', handler: (st: GameState) => {
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/vag/miss/3.jpg');
      scene.text('"Seriously~! Nngh~! Stop it~!" you complain loudly, feeling hot with self consciousness and annoyance.');
      // TODO-QSP: dynamic text: The look on <<$npcdesc>>''s face changes with your continued protests and he bli...
      scene.text(`The look on ${((st as any).npcdesc ?? '')}'s face changes with your continued protests and he blinks, as if only just now aware of what he's doing.`);
      scene.text('"Oh. Er... sorry," he mumbles. You sigh in relief as he pauses fucking you to put away the phone.');
      scene.text('"Make sure to delete it later," you tell him sternly.');
      scene.text('"I will," he promises with a smile.');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/hard3.mp4"></video></center>';
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_author'] = ((st as any).npcID ?? 0);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['phone_film'] = 2;
      scene.text('"Seriously~! Nngh~! Stop it~!" you keep protesting, face hot with self consciousness and annoyance.');
      if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Ungh~! Hmph~! Hey! What do you think you\'re doing?"<br>"Don\'t worry, you look great."<br>"Seriously~! Nngh~! Stop it~!"<br>"You\'re so hot when you\'re mad."';
        // TODO-QSP: dynamic text: "You''re so hot when you''re mad," <<$npcdesc>> says, grin growing wider while i...
        scene.text(`"You're so hot when you're mad," ${((st as any).npcdesc ?? '')} says, grin growing wider while ignoring your pleas.`);
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Ungh~! Hmph~! Hey! What do you think you\'re doing?"<br>"Don\'t worry, you look great."<br>"Seriously~! Nngh~! Stop it~!"<br>"Come on, don\'t be that way. You look so sexy. This is hot."';
        // TODO-QSP: dynamic text: "Come on, don''t be that way," <<$npcdesc>> says, ignoring your pleas. "You look...
        scene.text(`"Come on, don't be that way," ${((st as any).npcdesc ?? '')} says, ignoring your pleas. "You look so sexy. This is hot."`);
      }
      // TODO-QSP: dynamic text: Your irritation with <<$npcdesc>> do nothing to sway him and he takes a decently...
      scene.text(`Your irritation with ${((st as any).npcdesc ?? '')} do nothing to sway him and he takes a decently long video of you getting railed before he finally puts the phone away.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexFilmEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Angry', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/hard3.mp4');
    scene.text('"Ungh~! Hmph~! Hey! What the fuck!" you scream as you realize what he\'s doing and immediately try to cover up with your hand.');
    // TODO-QSP: dynamic text: "Don''t worry, you look great," <<$npcdesc>> grins, still fucking you as he film...
    scene.text(`"Don't worry, you look great," ${((st as any).npcdesc ?? '')} grins, still fucking you as he films.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexFilmForceStop(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Let him film you (reluctant)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['phone_film'] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/hard3.mp4"></video></center>';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Ungh~! Hmph~! Hey! What the fuck!"<br>"Don\'t worry, you look great."';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_author'] = ((st as any).npcID ?? 0);
    scene.img('images/shared/sex/vag/miss/hard2.mp4');
    // TODO-QSP: dynamic text: You let <<$npcdesc>> film you getting fucked by him, fuming in silence, occasion...
    scene.text(`You let ${((st as any).npcdesc ?? '')} film you getting fucked by him, fuming in silence, occasionally turning to cover your face just to spite him.`);
    scene.text('You can\'t help but breathe a sigh of relief when he finally puts the phone away. But only after getting a decently long video...');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexFilmEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Keep protesting', handler: (st: GameState) => {
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/vag/miss/3.jpg');
      scene.text('"Fuck off~! Put that thing away~!" you shout, steaming hot with anger.');
      // TODO-QSP: dynamic text: The look on <<$npcdesc>>''s face changes with your continued protests and he bli...
      scene.text(`The look on ${((st as any).npcdesc ?? '')}'s face changes with your continued protests and he blinks, as if only just now aware of what he's doing.`);
      scene.text('"Oh. Er... sorry," he mumbles. You sigh in relief as he pauses fucking you to put away the phone.');
      scene.text('"Make sure to delete it later," you tell him sternly.');
      scene.text('"I will," he promises with a smile.');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/hard3.mp4"></video></center>';
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_author'] = ((st as any).npcID ?? 0);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['phone_film'] = 2;
      scene.text('"Fuck off~! Put that thing away~!" you shout, steaming hot with anger.');
      if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Ungh~! Hmph~! Hey! What the fuck!"<br>"Don\'t worry, you look great."<br>"Fuck off~! Put that thing away~!"<br>"You\'re so hot when you\'re mad."';
        // TODO-QSP: dynamic text: "You''re so hot when you''re mad," <<$npcdesc>> says, grin growing wider while i...
        scene.text(`"You're so hot when you're mad," ${((st as any).npcdesc ?? '')} says, grin growing wider while ignoring your pleas.`);
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Ungh~! Hmph~! Hey! What the fuck!"Ungh~! Hmph~! Hey! What the fuck!"<br>"Don\'t worry, you look great."<br>"Fuck off~! Put that thing away~!"<br>"Come on, don\'t be that way. You look so sexy. This is hot."';
        // TODO-QSP: dynamic text: "Come on, don''t be that way," <<$npcdesc>> says, ignoring your pleas. "You look...
        scene.text(`"Come on, don't be that way," ${((st as any).npcdesc ?? '')} says, ignoring your pleas. "You look so sexy. This is hot."`);
      }
      scene.text('He takes a decently long video of you getting railed, screaming in rage the whole time, before he finally puts the phone away.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexFilmEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexFilmForceStop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'misc', 'force');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Make him put the phone away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Make him put the phone away', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['phone_film'] = (-1);
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/miss/1.jpg');
    // TODO-QSP: dynamic text: "Seriously, knock it off!" you snap, practically slapping the phone out of his h...
    scene.text(`"Seriously, knock it off!" you snap, practically slapping the phone out of his hand as you grab it. You stop the recording and immediately hit the gallery button to delete the video. "Asshole..." you mutter as you toss the phone far away from the bed as well, all without removing ${((st as any).npcdesc ?? '')} from inside you.`);
    qspCall(st, 'sex_ev_after', 'quit');
    scene.actions([
      { label: '"Way to kill the mood"', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    // TODO-QSP: dynamic text: "Way to kill the mood, asshole," you scowl at <<$npcdesc>> as you push him off a...
    scene.text(`"Way to kill the mood, asshole," you scowl at ${((st as any).npcdesc ?? '')} as you push him off and out of you. "I'm done here."`);
    qspCall(st, 'sex_ev_after', 'quit2');
  } },
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/4.jpg');
    scene.text('"Finally," you sigh in relief, finally able to concentrate on the sex. "Don\'t do that again."');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexFilmAccept(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him film', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['phone_film'] = 2;
    if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
      qspCall(st, 'arousal', 'vaginal', (-5), 'no_orgasm_msg', 'exhibitionism');
    }
    scene.actions([
      { label: 'Blush', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/enjoy1.mp4"></video></center>';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Mmph~! Mmph~! Mmm~! Nnn~!"<br>"You\'re so fucking hot."';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_author'] = ((st as any).npcID ?? 0);
    scene.img('images/shared/sex/vag/miss/enjoy1.mp4');
    // TODO-QSP: dynamic text: Your cheeks flush with warmth as you realize what <<$npcdesc>>''s doing and turn...
    scene.text(`Your cheeks flush with warmth as you realize what ${((st as any).npcdesc ?? '')}'s doing and turn your face in embarrassment but don't make any complaints.`);
    scene.text('"Mmph~! Mmph~! Mmm~! Nnn~!" Each pump of his cock inside you forces sheepish squeaks from your lips as you get caught between self-consciousness and pleasure.');
    // TODO-QSP: dynamic text: "You''re so fucking hot," <<$npcdesc>> grins, continuing to fuck and film at the...
    scene.text(`"You're so fucking hot," ${((st as any).npcdesc ?? '')} grins, continuing to fuck and film at the same time.`);
    scene.text('After a few minutes, he puts his phone away.');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Ignore the camera', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/enjoy1.mp4"></video></center>';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Hah~! Haa~! Ah~! Haa~!"<br>"You\'re so fucking hot."';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_author'] = ((st as any).npcID ?? 0);
    scene.img('images/shared/sex/vag/miss/enjoy1.mp4');
    // TODO-QSP: dynamic text: "Hah~! Haa~! Ah~! Haa~!" You ignore the camera completely, focusing on <<$npcdes...
    scene.text(`"Hah~! Haa~! Ah~! Haa~!" You ignore the camera completely, focusing on ${((st as any).npcdesc ?? '')}'s cock pumping inside you and just try to stay the moment, letting moans escape your lips as they come. If he wants to film it, he can do what he wants.`);
    // TODO-QSP: dynamic text: "You''re so fucking hot," <<$npcdesc>> grins, continuing to fuck and film at the...
    scene.text(`"You're so fucking hot," ${((st as any).npcdesc ?? '')} grins, continuing to fuck and film at the same time.`);
    scene.text('After a few minutes, he puts his phone away.');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Put on a show', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/enjoy2.mp4"></video></center>';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_dialogue'] = '"Aaah~! I\'m so wet~! Ungh~! Your cock feels so good~! OhmygodI\'mgonnacome~!"<br>"Yeah you like that?"<br>"Don\'t stop~! Don\'t stop~!"';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['video_author'] = ((st as any).npcID ?? 0);
    scene.img('images/shared/sex/vag/miss/enjoy2.mp4');
    scene.text('"Aaah~! I\'m so wet~! Ungh~! Your cock feels so good~! OhmygodImgonnacome~!"');
    if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
      scene.text('Unable to resist putting on a show, you turn up the volume on your moaning and dirty talk. You shake your tits and arch your back, putting extra emphasis on your pleasure.');
    } else {
      scene.text('Unable to resist putting on a show, you turn on the moaning and the dirty talk. You shake your tits and arch your back with pleasure you aren\'t really feeling.');
    }
    // TODO-QSP: dynamic text: "Yeah you like that?" <<$npcdesc>> grins
    scene.text(`"Yeah you like that?" ${((st as any).npcdesc ?? '')} grins`);
    scene.text('"Don\'t stop~! Don\'t stop~!" you moan back.');
    scene.text('Seeming extra excited by what you\'re doing and makes sure to capture every moment of it, sending the lens up and down your body from where he fucks your pussy back up to your flushed face.');
    scene.text('After a few minutes of filming, he puts his phone away.');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexFilmEnd(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_indiscreet ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  (Math.floor(Math.random() * 3) + 1) === 1)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).sex_ev ?? 0)?.['phone_film'] !== -1) {
    qspCall(s, 'fame', '', ((s as any).region ?? 0), 'sex', 5);
  }
  if (((s as any).sex_ev ?? 0)?.['phone_film'] !== -1) {
    (s as any).i = 0;
    // TODO-QSP: $sex_video[i] = $sex_ev['video_media']
    // TODO-QSP: $sex_video_author[i] = $sex_ev['video_author']
    // TODO-QSP: $sex_video_dialogue[i] = $sex_ev['video_dialogue']
  }
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskEv(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_ask_ev'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," <<$npcdesc>> grunts as he plows you. "Can I cum inside ...
    scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}," ${((s as any).npcdesc ?? '')} grunts as he plows you. "Can I cum inside you today?"`);
  } else {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," <<$npcdesc>> grunts as you bounce up and down on his co...
    scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}," ${((s as any).npcdesc ?? '')} grunts as you bounce up and down on his cock. "Can I cum inside you today?"`);
  }
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
    scene.actions([
      { label: 'It\'s too risky (danger day)', handler: (st: GameState) => {
    scene.text('"You can\'t," you say, shaking your head. "I could get pregnant if you do it today."');
    scene.text('"Come on, what\'s the harm? You can just get a morning after pill."');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_events', 'creampie_ask_ev_ma_pill_deny'
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
    scene.actions([
      { label: 'Already told you no (mad)', handler: (st: GameState) => {
    scene.text('"I\'m pretty sure I already told you no," you frown.');
    scene.text('"Yeah you did, but..." he says. "I figured what\'s the harm in asking again?"');
    scene.actions([
      { label: 'Firmly deny him', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_events', 'creampie_ask_ev_annoyed_deny'
  } },
      { label: 'Acquiesce', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_events', 'creampie_ask_ev_annoyed_allow'
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskEvMaPillDeny(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "No way! <<$npcdesc>>, do <i>not</i> cum inside me, do you hear me?"
  scene.text(`"No way! ${((s as any).npcdesc ?? '')}, do <i>not</i> cum inside me, do you hear me?"`);
  scene.text('"Okay okay, fine," he sighs.');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskEvMaPillAllow(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
    // TODO-QSP: dynamic text: You think about it for a few moments while <<$npcdesc>> keeps thrusting into you...
    scene.text(`You think about it for a few moments while ${((s as any).npcdesc ?? '')} keeps thrusting into you.`);
  } else {
    // TODO-QSP: dynamic text: You think about it for a few moments while rolling your hips over <<$npcdesc>>''...
    scene.text(`You think about it for a few moments while rolling your hips over ${((s as any).npcdesc ?? '')}'s cock.`);
  }
  scene.text('"Okay," you smile. "You can do it today. I\'ll get a pill later."');
  // TODO-QSP: dynamic text: "You''re the best, <<$pcs_nickname>>," he grins and starts moving his hips with ...
  scene.text(`"You're the best, ${((s as any).pcs_nickname ?? '')}," he grins and starts moving his hips with renewed enthusiasm.`);
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskEvAnnoyedDeny(s: GameState, scene: SceneBuilder): void {
  scene.text('"Well I\'ll tell you now," you growl. "Fucking <i>don\'t</i>."');
  scene.text('"Fine, fine. Yeesh, I was just asking."');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskEvAnnoyedAllow(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_creampie'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
  scene.text('"<i>Ugh</i>. If I tell you no, you\'re just gonna ask again aren\'t you?" You sigh in exasperation and he returns it with a bratty grin. You glare at him but end up saying, "<i>Fine</i>. Just this once, okay?"');
  // TODO-QSP: dynamic text: "You''re the best, <<$pcs_nickname>>," he grins and starts moving his hips with ...
  scene.text(`"You're the best, ${((s as any).pcs_nickname ?? '')}," he grins and starts moving his hips with renewed enthusiasm.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Roll your eyes', handler: (st: GameState) => {
    scene.text('"Yeah, yeah, whatever," you say with a wave. "Just remember it\'s your fault if you knock me up."');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Smile', handler: (st: GameState) => {
    scene.text('Unable to help yourself, you end up smiling back. His childish persistence is strangely endearing, even if it\'s just about wanting to bust a nut inside you.');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
  ]);
  scene.build();
}

function enterFuckPunchLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).crime_placeholder ?? 0) > 0  &&  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).pcs_punch ?? 0) > 30) {
    scene.text('With you riding on top, it\'s the perfect opportunity for you to <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027sex_ev_events/u0027, /u0027fuck_punch1/u0027); return false;">knock him out</a> right now if you wanted to.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFuckPunch1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Cancel', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: '"Night night"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['punchout'] = 1;
    scene.img('images/shared/sex/misc/fuck_punch1.mp4');
    // TODO-QSP: dynamic text: "Night night, <<$npc_usedname[$npcID]>>," you smile and punch him in the face, k...
    scene.text(`"Night night, ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}," you smile and punch him in the face, knocking him out cold.`);
    // TODO-QSP: act'Call it in': gt 'sex_ev_events', 'fuck_punch2'
  } },
  ]);
  scene.build();
}

function enterFuckPunch2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  scene.text('You pick up your phone and call your boss.');
  scene.text('"It\'s done. Come get him."');
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', 'dress');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You get dressed while you wait for the boys to show up.');
    // TODO-QSP: dynamic text: It doesn''t take long and a few minutes later they arrive to tow <<$npc_usedname...
    scene.text(`It doesn't take long and a few minutes later they arrive to tow ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}'s unconscious body out.`);
  } },
    { label: 'Just wait', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You don\'t bother getting dressed and wait for the boys to show up.');
    // TODO-QSP: dynamic text: It doesn''t take long and within a few minutes They shamelessly ogle you, grinni...
    scene.text(`It doesn't take long and within a few minutes They shamelessly ogle you, grinning at you as they tow ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}'s unconscious body out.`);
    // TODO-QSP: act'Give them the finger':
    scene.text('You sneer back at them with a look that says, <i>shut the fuck up</i> and put your finger up at them. This is the job.');
    scene.actions([
      { label: 'Ignore them', handler: (st: GameState) => {
    scene.text('Doesn\'t matter to you. Let them look if you want. You know your role in this.');
  } },
    ]);
  } },
    { label: 'Smile back', handler: (st: GameState) => {
    scene.text('Doesn\'t matter to you if they look. Let them. You know your role in this. And that\'s being a hot piece of ass. If they\'re looking, it means you\'re working.');
    scene.text('You smile back.');
    scene.text('Besides. It\'s a compliment.');
  } },
  ]);
  scene.build();
}

function enterOfferCiga1(s: GameState, scene: SceneBuilder): void {
  scene.text('"You want one?" he asks, holding the open packet towards you.');
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 20) {
    qspCall(s, 'willpower', 'drugs', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Trying to quit', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Trying to quit', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/bed_smoke2.jpg');
    scene.text('"I\'m trying to quit," you reply ruefully.');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods and pulls one out for himself to light up. As the end catches ...
    scene.text(`${((st as any).npcdesc ?? '')} nods and pulls one out for himself to light up. As the end catches fire, he takes a long pull before exhaling a cloud of smoke in deep satisfaction`);
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
      ]);
    }
  } else {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/bed_smoke2.jpg');
    scene.text('"No thanks," you reply politely. "I\'m good."');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods and pulls one out for himself instead and lights up.
    scene.text(`${((st as any).npcdesc ?? '')} nods and pulls one out for himself instead and lights up.`);
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
    ]);
  }
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] === 0) {
    scene.actions([
      { label: 'I don\'t smoke', handler: (st: GameState) => {
    if (((st as any).stat ?? 0)?.['cigarettes_smoked'] > 20  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.img('images/shared/sex/after/pillow_talk2.jpg');
      scene.text('"No thanks," you reply politely. "I don\'t smoke anymore."');
      if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Oh, sorry. I didn''t realize," <<$npcdesc>> blinks. "I just won''t then. Don''t...
        scene.text(`"Oh, sorry. I didn't realize," ${((st as any).npcdesc ?? '')} blinks. "I just won't then. Don't want to tempt you."`);
        scene.actions([
          { label: 'How sweet', handler: (st: GameState) => {
    scene.text('A swell of affection warms your chest as he puts away his pack. It\'s so sweet how thoughtful he is!');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
          { label: 'It\'s okay', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.img('images/shared/sex/after/bed_smoke2.jpg');
    scene.text('You shake your head.');
    scene.text('"No, it\'s okay. Don\'t stop yourself on my account."');
    scene.text('"You sure?" he asks.');
    scene.text('"I\'m sure," you insist. "Go ahead. I\'ll be fine."');
    scene.text('At your insistence, he goes ahead and lights up, taking a long drag before exhaling a cloud of smoke in deep satisfaction.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
        ]);
      } else {
        qspCall(st, 'sex_ev_after', 'after_sex2');
      }
    } else {
      scene.img('images/shared/sex/after/bed_smoke2.jpg');
      scene.text('"No thanks. I don\'t smoke," you tell him.');
      // TODO-QSP: dynamic text: <<$npcdesc>> nods and pulls one out for himself to light up. As the end catches ...
      scene.text(`${((st as any).npcdesc ?? '')} nods and pulls one out for himself to light up. As the end catches fire, he takes a long drag before exhaling a cloud of smoke in deep satisfaction`);
      qspCall(st, 'sex_ev_after', 'after_sex2');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes please', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bum_cigarette'] = 1;
    scene.img('images/shared/sex/after/bed_smoke0.jpg');
    // TODO-QSP: dynamic text: "Sure," you smile. <<$npcdesc>> hands over one with his lighter and you accept g...
    scene.text(`"Sure," you smile. ${((st as any).npcdesc ?? '')} hands over one with his lighter and you accept gratefully, lighting up and inhaling deeply.`);
    qspCall(st, 'sex_ev_after', 'smoke_ciga_act');
  } },
    { label: 'Love one', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bum_cigarette'] = 1;
    scene.img('images/shared/sex/after/bed_smoke0.jpg');
    // TODO-QSP: dynamic text: "I''d love one," you smile. <<$npcdesc>> hands over one with his lighter and you...
    scene.text(`"I'd love one," you smile. ${((st as any).npcdesc ?? '')} hands over one with his lighter and you accept gratefully, lighting up and inhaling deeply.`);
    qspCall(st, 'sex_ev_after', 'smoke_ciga_act');
  } },
    { label: 'Read my mind', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bum_cigarette'] = 1;
    scene.img('images/shared/sex/after/bed_smoke0.jpg');
    // TODO-QSP: dynamic text: "You read my mind," you grin as <<$npcdesc>> hands over one with his lighter and...
    scene.text(`"You read my mind," you grin as ${((st as any).npcdesc ?? '')} hands over one with his lighter and you accept gratefully, lighting up and inhaling deeply.`);
    qspCall(st, 'sex_ev_after', 'smoke_ciga_act');
  } },
  ]);
  scene.build();
}

function enterBrushingTeeth(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/brush_teeth_watch.jpg');
  // TODO-QSP: dynamic text: You catch <<$npc_usedname[$npcID]>> watching you brush your teeth.
  scene.text(`You catch ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} watching you brush your teeth.`);
  // TODO-QSP: act'"What?"':
  scene.text('"What?" you mumble around the brush and toothpaste in your mouth.');
  if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === 'ass') {
    scene.text('"I\'m just enjoying the view," he grins and you realize he\'s ogling your naked ass.');
  } else {
    scene.text('"Nothing," he says, smiling at you.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrushTeethRollEyes(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrushTeethAssShake(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrushTeethRollEyes(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrushTeethAssShake(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterBrushTeethRollEyes(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: act'Roll your eyes':
  scene.text('You roll your eyes to yourself, continuing what you\'re doing.');
  scene.text('<i>Boys...</i>');
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] },
  ]);
  scene.build();
}

function enterBrushTeethAssShake(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: act'Shake your ass at him':
  if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === 'ass') {
    scene.text('"I bet you are."');
  } else {
    scene.text('"Yeah. Sure."');
  }
  scene.text('You grin back, shaking your ass for him.');
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] },
  ]);
  scene.build();
}

function enterLongArgument(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 11) + 10));
  qspCall(s, 'stat', '');
  // TODO-QSP: $sex_ev['bed_room']
  scene.text('"What the fuck is your problem?" you snap.');
  scene.text('"My problem?! What\'s <i>your</i> problem?"');
  // TODO-QSP: dynamic text: You and <<$npcdesc>> end up getting into a long argument.
  scene.text(`You and ${((s as any).npcdesc ?? '')} end up getting into a long argument.`);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['angry_after'] = 1;
  qspCall(s, 'sex_ev_after', 'quit');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fume', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'hate');
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 3);
    scene.text('Eventually, you are practically out of breath with your throats raw from shouting and both of you are fuming.');
    qspGoto(st, 'sex_ev_after', 'after_sex2');
  } },
  ]);
  scene.build();
}

function enterSneakPhone(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: msg'Placeholder - Event is WIP'
  // TODO-QSP: end
  scene.build();
}

function enterRummageDrawersLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['drawer_rummage'] === 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home'  &&  ((s as any).sex_ev ?? 0)?.['action_restricted'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
      // TODO-QSP: dynamic text: <<$npcdesc>>''s <a href="exec: gs ''sex_ev_events'',''sneak_phone''">phone</a> l...
      scene.text(`${((s as any).npcdesc ?? '')}'s <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027sex_ev_events/u0027, /u0027sneak_phone/u0027); return false;">phone</a> lays on top of the hotel room <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027sex_ev_events/u0027, /u0027rummage_drawers_start/u0027); return false;">dresser</a> unattended.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>>''s <a href="exec: gs ''sex_ev_events'',''sneak_phone''">phone</a> l...
      scene.text(`${((s as any).npcdesc ?? '')}'s <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027sex_ev_events/u0027, /u0027sneak_phone/u0027); return false;">phone</a> lays on top of his <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027sex_ev_events/u0027, /u0027rummage_drawers_start/u0027); return false;">dresser</a> unattended.`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRummageDrawersStart(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', 'after_sex2_w_picture');
  } },
    { label: 'Rummage through his dresser', goto: ['sex_ev_events', 'rummage_drawers1'] },
  ]);
  scene.build();
}

function enterRummageDrawers1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['drawer_rummage'] = 1;
  scene.img('images/pc/activities/misc/open_drawers1.mp4');
  if ((Math.floor(Math.random() * 3) + 1) === 1) {
    if (((s as any).sex_ev ?? 0)?.['loc'] !== 'hotel_room') {
      if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: Rummaging through <<$npcdesc>>''s drawers, you find rows of socks and underwear,...
        scene.text(`Rummaging through ${((s as any).npcdesc ?? '')}'s drawers, you find rows of socks and underwear, all neatly folded. Seems he's very organized...`);
      } else {
        if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          // TODO-QSP: dynamic text: Rummaging through <<$npcdesc>>''s drawers, you find a jumble of socks and underw...
          scene.text(`Rummaging through ${((s as any).npcdesc ?? '')}'s drawers, you find a jumble of socks and underwear, all mixed in with each other like meat in a pasta. Seems like he's not very organized...`);
        } else {
          // TODO-QSP: dynamic text: You rummage through <<$npcdesc>>''s drawers and find some clothes. Nothing inter...
          scene.text(`You rummage through ${((s as any).npcdesc ?? '')}'s drawers and find some clothes. Nothing interesting.`);
        }
      }
    } else {
      // TODO-QSP: dynamic text: You rummage through <<$npcdesc>>''s drawers. You don''t find anything of interes...
      scene.text(`You rummage through ${((s as any).npcdesc ?? '')}'s drawers. You don't find anything of interest.`);
    }
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_money'] = (Math.floor(Math.random() * 7) + 3);
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_money'] = ((s as any).sex_ev['boy_money'] ?? 0) + ((Math.floor(Math.random() * 5) + 1));
    }
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_money'] = (((s as any).sex_ev ?? {})?.['boy_money'] ?? 0) * 2;
    }
    // TODO-QSP: dynamic text: You rummage through <<$npcdesc>>''s drawers. You find <<sex_ev[''boy_money''] * ...
    scene.text(`You rummage through ${((s as any).npcdesc ?? '')}'s drawers. You find ${(((s as any).sex_ev ?? {})?.['boy_money'] ?? 0) * 100} <b>₽</b> in various notes, along with some of his other things.`);
    scene.actions([
      { label: 'Steal it', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['stole_money'] = 1;
    if (((st as any).sex_ev ?? 0)?.['boy_in_shower'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRummageDrawersShowerRoute(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRummageDrawersSleepingRoute(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the drawer', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_events', 'rummage_drawers_end_route');
  } },
  ]);
  scene.build();
}

function enterRummageDrawersSleepingRoute(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: You take another cautious glance at <<$npcdesc>> but he is still slumbering away...
  scene.text(`You take another cautious glance at ${((s as any).npcdesc ?? '')} but he is still slumbering away. You decide to take your chance and grab the money, carefully close the drawer with minimal noise, and quietly stuff your stolen goods into your purse.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_events', 'rummage_drawers_end_route');
  } },
  ]);
  scene.build();
}

function enterRummageDrawersShowerRoute(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room'  ||  ((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  ((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
      scene.text('You take a wary glance at the bathroom door. Right as you do, you hear the water shut off. Realizing there\'s only seconds, you take your chance and grab the cash out of the drawer and running back to your things to stuff it into your bag.');
    } else {
      // TODO-QSP: dynamic text: You take a wary glance at the door. Seems like <<$npcdesc>> is still showering s...
      scene.text(`You take a wary glance at the door. Seems like ${((s as any).npcdesc ?? '')} is still showering so it should be safe. But right as you pick up the cash, you hear footsteps in the hall. Panic shoots through you as you run back to stuff it into your bag.`);
    }
    scene.actions([
      { label: 'Hide the money!', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_events', 'rummage_drawers_end_route');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room'  ||  ((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  ((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
      scene.text('You take a wary glance at the bathroom door. The water\'s still running. It doesn\'t seem like he\'s going to come out any time soon. You decide to take your chance and grab the cash, closing the drawer and stuffing it into your purse.');
    } else {
      // TODO-QSP: dynamic text: You take a wary glance at the door. You don''t hear <<$npcdesc>> coming so you d...
      scene.text(`You take a wary glance at the door. You don't hear ${((s as any).npcdesc ?? '')} coming so you decide to take your chance and grab the cash, closing the drawer and stuffing it into your purse.`);
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Wait for ' + String(((s as any).npcdesc ?? '') ?? '') + ' to finish', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'hotel_room'  ||  ((st as any).npc_apt_type ?? 0)?.[String((st as any).npcID ?? 0)] === 2  ||  ((st as any).npc_apt_type ?? 0)?.[String((st as any).npcID ?? 0)] === 3) {
      // TODO-QSP: dynamic text: After hiding the money, you sit back on the bed and act natural. It''s only a co...
      scene.text(`After hiding the money, you sit back on the bed and act natural. It's only a couple minutes before you hear the water shut off and ${((st as any).npcdesc ?? '')} comes out with wet hair and a towel wrapped around his waist.`);
    } else {
      // TODO-QSP: dynamic text: After hiding the money, you sit back on the bed and act natural. It''s only a co...
      scene.text(`After hiding the money, you sit back on the bed and act natural. It's only a couple minutes before ${((st as any).npcdesc ?? '')} comes strolling back into the bedroom with wet hair and a towel wrapped around his waist.`);
    }
    qspCall(st, 'sex_ev_shower', 'boy_shower_finish_acts');
  } },
      { label: 'Join him in the shower', goto: ['sex_ev_shower', 'shower_join1'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRummageDrawersEndRoute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRummageDrawersShowerEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    qspCall(s, 'sex_ev_after', 'after_sex2_w_picture');
  }
  // TODO-QSP: end
  scene.build();
}

function enterRummageDrawersShowerEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['stole_money'] === 1) {
    (s as any).money = ((s as any).money ?? 0) + ((((s as any).sex_ev ?? {})?.['boy_money'] ?? 0) * 100);
    // TODO-QSP: dynamic text: You finish hiding the money in your bag just as <<$npcdesc>> comes into the room...
    scene.text(`You finish hiding the money in your bag just as ${((s as any).npcdesc ?? '')} comes into the room, hair wet from the shower, towel wrapped around his waist.`);
  } else {
    // TODO-QSP: dynamic text: You finish closing the drawer and step away just as <<$npcdesc>> comes into the ...
    scene.text(`You finish closing the drawer and step away just as ${((s as any).npcdesc ?? '')} comes into the room, hair wet from the shower, towel wrapped around his waist.`);
  }
  qspCall(s, 'sex_ev_shower', 'boy_shower_finish_acts');
  // TODO-QSP: end
  scene.build();
}

function enterBoyTimecheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= ((s as any).npc_work_start ?? 0)?.[String((s as any).npcID ?? 0)] - 1  &&  ((s as any).hour ?? 0) < ((s as any).npc_work_end ?? 0)?.[String((s as any).npcID ?? 0)]  &&  (Math.floor(Math.random() * 5) + 1) === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_late'] = 1;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyGottaGo(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyGottaGo(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$npcdesc>> checks the time.
    scene.text(`${((st as any).npcdesc ?? '')} checks the time.`);
    if (((st as any).sex_ev ?? 0)?.['boy_shower'] === 1) {
      // TODO-QSP: '"Shit, I gotta go," he says, dropping his towel and reaching for his clothes. ' + iif(hour >= npc_w...
    } else {
      // TODO-QSP: '"Shit, I gotta go," he says, hauling himself out of bed. ' + iif(hour >= npc_work_start[$npcID], '"...
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyGottaGo2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBoyGottaGo2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['breakfast_finished'] = (-1);
  if (((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.text('"Should I get dressed too then?" you ask.');
  }
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['hotel_days'] = (Math.floor(Math.random() * 3) + 1);
    if (((s as any).sex_ev ?? 0)?.['hotel_days'] === 1) {
      // TODO-QSP: '"No need to rush. The room is booked until tomorrow," <<$npcdesc>> grins. "Feel free to order room ...
    } else {
      // TODO-QSP: '"No need to rush. The room is booked for a few more days," <<$npcdesc>> grins. "Feel free to order ...
    }
    // TODO-QSP: dynamic text: With that, <<$npcdesc>> finishes getting dressed and heads out the door, leaving...
    scene.text(`With that, ${((s as any).npcdesc ?? '')} finishes getting dressed and heads out the door, leaving you in the hotel room all to yourself.`);
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy'  &&  ((s as any).sex_ev ?? 0)?.['sugar_daddy_paid'] === 0) {
      (s as any).money = ((s as any).money ?? 0) + (((s as any).npc_sugar_daddy_price ?? 0)?.[String((s as any).npcID ?? 0)]);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', 'exit');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
      if (((s as any).npc_lover_keys ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"No, it\'s fine. You have a key right? Just lock up when you leave," he says, quickly getting dressed.');
      } else {
        scene.text('"Yeah, I need you to leave so I can lock up."');
        // TODO-QSP: dynamic text: You hurry to get dressed beside <<$npcdesc>>.
        scene.text(`You hurry to get dressed beside ${((s as any).npcdesc ?? '')}.`);
        qspCall(s, 'sex_ev_clothing', 'dress_loop_end');
        qspCall(s, 'sex_ev_leave', 'leaving_dialogue_choices');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSugarDaddyGift(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_sugar_gifts = (s as any).npc_sugar_gifts ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_sugar_gifts[String((s as any).npcID ?? 0)] ?? 0) + (1);
  scene.img('images/shared/sex/after/pillow_talk2.jpg');
  // TODO-QSP: dynamic text: "I got you something," <<$npcdesc>> smiles, handing you a gift wrapped box.
  scene.text(`"I got you something," ${((s as any).npcdesc ?? '')} smiles, handing you a gift wrapped box.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Surprise', handler: (st: GameState) => {
    scene.text('"For me?" you ask in bewilderment.');
    scene.text('You eagerly untie the ribbon around the box, removing the contents and holding it up to the light as you inspect it from all sides.');
    scene.text('"Oh wow, this is so pretty!" you almost scream out in excitement.');
    // TODO-QSP: dynamic text: "A pretty thing for my pretty babygirl," <<$npcdesc>> retorts, basking in your j...
    scene.text(`"A pretty thing for my pretty babygirl," ${((st as any).npcdesc ?? '')} retorts, basking in your joy.`);
    // TODO-QSP: dynamic text: You throw your arms around <<$npcdesc>>, smothering him with light kisses.
    scene.text(`You throw your arms around ${((st as any).npcdesc ?? '')}, smothering him with light kisses.`);
    scene.text('"Thank you so much, daddy!"');
    // TODO-QSP: dynamic text: "I would love to see you wear it next time we see each other," <<$npcdesc>> adds...
    scene.text(`"I would love to see you wear it next time we see each other," ${((st as any).npcdesc ?? '')} adds.`);
    scene.text('"Absolutely," you reply, giving him one last kiss before returning your gift to its box and taking your place next to him.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSugarDaddyGiftCheck(st, scene); (st as any).locArgs = __savedLocArgs; }
    ((st as any).sugar_gift_day = (st as any).sugar_gift_day ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    qspCall(st, 'sex_ev_pillow_talk', 'talk_time_add');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'start');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSugarDaddyGiftCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).newdress_loop = 0;
  if ((Math.floor(Math.random() * 5) + 1) === 1) {
    qspCall(s, 'clothing', 'totals', 'moncheri_dress');
    (s as any).newdress_id = (Math.floor(Math.random() * (((s as any).total ?? 0) - 1 + 1)) + (1));
    if (((s as any).moncheri_dress ?? 0)?.[String((s as any).newdress_id ?? 0)] === 0) {
      ((s as any).moncheri_dress = (s as any).moncheri_dress ?? {})[String((s as any).newdress_id ?? 0)] = 1;
      ((s as any).moncheri_dress_h = (s as any).moncheri_dress_h ?? {})[String((s as any).newdress_id ?? 0)] = 35;
      ((s as any).moncheri_dress_b = (s as any).moncheri_dress_b ?? {})[String((s as any).newdress_id ?? 0)] = ((s as any).pcs_hips ?? 0);
      // TODO-QSP: *P '<center><img height = 400 src="images/pc/items/moncheri/dress/<<newdress_id>>.jpg"></center>'
    } else {
      (s as any).newdress_loop = ((s as any).newdress_loop ?? 0) + (1);
      if (((s as any).newdress_loop ?? 0) > 1000) {
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSugarDaddyGiftCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  } else {
    if ((Math.floor(Math.random() * 4) + 1) === 1) {
      qspCall(s, 'shoes', 'totals', 'moncheri_shoe');
      (s as any).newdress_id = (Math.floor(Math.random() * (((s as any).total ?? 0) - 1 + 1)) + (1));
      if (((s as any).moncheri_shoe ?? 0)?.[String((s as any).newdress_id ?? 0)] === 0) {
        ((s as any).moncheri_shoe = (s as any).moncheri_shoe ?? {})[String((s as any).newdress_id ?? 0)] = 1;
        qspCall(s, 'shoe_attributes', 'moncheri', ((s as any).newdress_id ?? 0));
        ((s as any).moncheri_shoe_h = (s as any).moncheri_shoe_h ?? {})[String((s as any).newdress_id ?? 0)] = ((s as any).ShoMaxStrength ?? 0);
        // TODO-QSP: *P '<center><img height = 400 src="images/pc/items/moncheri/shoes/<<newdress_id>>.jpg"></center>'
      } else {
        (s as any).newdress_loop = ((s as any).newdress_loop ?? 0) + (1);
        if (((s as any).newdress_loop ?? 0) > 1000) {
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSugarDaddyGiftCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    } else {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        qspCall(s, 'purses', 'totals', 'moncheri_purses');
        (s as any).newdress_id = (Math.floor(Math.random() * (((s as any).total ?? 0) - 1 + 1)) + (1));
        if (((s as any).moncheri_purses ?? 0)?.[String((s as any).newdress_id ?? 0)] === 0) {
          ((s as any).moncheri_purses = (s as any).moncheri_purses ?? {})[String((s as any).newdress_id ?? 0)] = 1;
          ((s as any).moncheri_purses_h = (s as any).moncheri_purses_h ?? {})[String((s as any).newdress_id ?? 0)] = 35;
          // TODO-QSP: *P '<center><img height = 400 src="images/pc/items/moncheri/purses/<<newdress_id>>.jpg"></center>'
        } else {
          (s as any).newdress_loop = ((s as any).newdress_loop ?? 0) + (1);
          if (((s as any).newdress_loop ?? 0) > 1000) {
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSugarDaddyGiftCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          qspCall(s, 'clothing', 'totals', 'coco_dress');
          (s as any).newdress_id = (Math.floor(Math.random() * (((s as any).total ?? 0) - 1 + 1)) + (1));
          if (((s as any).coco_dress ?? 0)?.[String((s as any).newdress_id ?? 0)] === 0) {
            ((s as any).coco_dress = (s as any).coco_dress ?? {})[String((s as any).newdress_id ?? 0)] = 1;
            ((s as any).coco_dress_h = (s as any).coco_dress_h ?? {})[String((s as any).newdress_id ?? 0)] = 90;
            ((s as any).coco_dress_b = (s as any).coco_dress_b ?? {})[String((s as any).newdress_id ?? 0)] = ((s as any).pcs_hips ?? 0);
            // TODO-QSP: *P '<center><img height = 400 src="images/pc/items/coco/dress/<<newdress_id>>.jpg"></center>'
          } else {
            (s as any).newdress_loop = ((s as any).newdress_loop ?? 0) + (1);
            if (((s as any).newdress_loop ?? 0) > 1000) {
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSugarDaddyGiftCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        } else {
          qspCall(s, 'bras', 'totals', 'lusso_bras');
          (s as any).newdress_id = (Math.floor(Math.random() * (((s as any).total ?? 0) - 1 + 1)) + (1));
          if (((s as any).lusso_bras ?? 0)?.[String((s as any).newdress_id ?? 0)] === 0  &&  ((s as any).lusso_panties ?? 0)?.[String((s as any).newdress_id ?? 0)] === 0) {
            ((s as any).lusso_bras = (s as any).lusso_bras ?? {})[String((s as any).newdress_id ?? 0)] = 1;
            ((s as any).lusso_bras_h = (s as any).lusso_bras_h ?? {})[String((s as any).newdress_id ?? 0)] = 35;
            // TODO-QSP: *P '<center><img height = 400 src="images/pc/items/lusso/bras/<<newdress_id>>.jpg"></center>'
          } else {
            (s as any).newdress_loop = ((s as any).newdress_loop ?? 0) + (1);
            if (((s as any).newdress_loop ?? 0) > 1000) {
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSugarDaddyGiftCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGunEvStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).know_npc_gun ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: Your eyes go wide as you pull back on <<$npcdesc>>''s drawers and find a handgun...
    scene.text(`Your eyes go wide as you pull back on ${((s as any).npcdesc ?? '')}'s drawers and find a handgun inside.`);
  } else {
    // TODO-QSP: dynamic text: You open up <<$npcdesc>>''s drawers to where you know his gun is stashed.
    scene.text(`You open up ${((s as any).npcdesc ?? '')}'s drawers to where you know his gun is stashed.`);
  }
  if (((s as any).sveta_is_cop ?? 0) === 1) {
    scene.actions([
      { label: 'Take note of the serial number', goto: ['sex_ev_events', 'gun_ev_serial1'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'What is this???', goto: ['sex_ev_events', 'gun_ev_start'] },
    { label: 'Pull it out', goto: ['sex_ev_events', 'gun_ev_start'] },
  ]);
  scene.build();
}

function enterGunEvConfront1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_events ---------------------------------
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'rand_ev_check':
      enterRandEvCheck(s, scene);
      break;
    case 'bad_thrust_start':
      enterBadThrustStart(s, scene);
      break;
    case 'bad_thrust_yelp':
      enterBadThrustYelp(s, scene);
      break;
    case 'bad_thrust_irate':
      enterBadThrustIrate(s, scene);
      break;
    case 'position_swap_ev':
      enterPositionSwapEv(s, scene);
      break;
    case 'dirty_talk_router':
      enterDirtyTalkRouter(s, scene);
      break;
    case 'whose_pussy':
      enterWhosePussy(s, scene);
      break;
    case 'whose_pussy_cum':
      enterWhosePussyCum(s, scene);
      break;
    case 'sex_film_code':
      enterSexFilmCode(s, scene);
      break;
    case 'sex_film1':
      enterSexFilm1(s, scene);
      break;
    case 'sex_film_protest':
      enterSexFilmProtest(s, scene);
      break;
    case 'sex_film_force_stop':
      enterSexFilmForceStop(s, scene);
      break;
    case 'sex_film_accept':
      enterSexFilmAccept(s, scene);
      break;
    case 'sex_film_end':
      enterSexFilmEnd(s, scene);
      break;
    case 'creampie_ask_ev':
      enterCreampieAskEv(s, scene);
      break;
    case 'creampie_ask_ev_ma_pill_deny':
      enterCreampieAskEvMaPillDeny(s, scene);
      break;
    case 'creampie_ask_ev_ma_pill_allow':
      enterCreampieAskEvMaPillAllow(s, scene);
      break;
    case 'creampie_ask_ev_annoyed_deny':
      enterCreampieAskEvAnnoyedDeny(s, scene);
      break;
    case 'creampie_ask_ev_annoyed_allow':
      enterCreampieAskEvAnnoyedAllow(s, scene);
      break;
    case 'fuck_punch_link':
      enterFuckPunchLink(s, scene);
      break;
    case 'fuck_punch1':
      enterFuckPunch1(s, scene);
      break;
    case 'fuck_punch2':
      enterFuckPunch2(s, scene);
      break;
    case 'offer_ciga1':
      enterOfferCiga1(s, scene);
      break;
    case 'brushing_teeth':
      enterBrushingTeeth(s, scene);
      break;
    case 'brush_teeth_roll_eyes':
      enterBrushTeethRollEyes(s, scene);
      break;
    case 'brush_teeth_ass_shake':
      enterBrushTeethAssShake(s, scene);
      break;
    case 'long_argument':
      enterLongArgument(s, scene);
      break;
    case 'sneak_phone':
      enterSneakPhone(s, scene);
      break;
    case 'rummage_drawers_link':
      enterRummageDrawersLink(s, scene);
      break;
    case 'rummage_drawers_start':
      enterRummageDrawersStart(s, scene);
      break;
    case 'rummage_drawers1':
      enterRummageDrawers1(s, scene);
      break;
    case 'rummage_drawers_sleeping_route':
      enterRummageDrawersSleepingRoute(s, scene);
      break;
    case 'rummage_drawers_shower_route':
      enterRummageDrawersShowerRoute(s, scene);
      break;
    case 'rummage_drawers_end_route':
      enterRummageDrawersEndRoute(s, scene);
      break;
    case 'rummage_drawers_shower_end':
      enterRummageDrawersShowerEnd(s, scene);
      break;
    case 'boy_timecheck':
      enterBoyTimecheck(s, scene);
      break;
    case 'boy_gotta_go':
      enterBoyGottaGo(s, scene);
      break;
    case 'boy_gotta_go2':
      enterBoyGottaGo2(s, scene);
      break;
    case 'sugar_daddy_gift':
      enterSugarDaddyGift(s, scene);
      break;
    case 'sugar_daddy_gift_check':
      enterSugarDaddyGiftCheck(s, scene);
      break;
    case 'gun_ev_start':
      enterGunEvStart(s, scene);
      break;
    case 'gun_ev_confront1':
      enterGunEvConfront1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_events: LocationDef = {
  name: 'sex_ev_events',
  title: '"Ouch! What the fuck! Watch where you\'re putting that thing!',
  region: 'other',
  enter: enter,
};
