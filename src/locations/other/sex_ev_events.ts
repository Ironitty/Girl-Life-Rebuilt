import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterRandEvCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['rand_ev'] = ((s as any).sex_ev['rand_ev'] ?? 0) + (1);
  if ((Math.floor(Math.random() * 20) + 1) <= ((s as any).sex_ev ?? 0)?.['rand_ev']) {
    (s as any).sex_ev['rand_ev'] = 0;
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
      (s as any).sex_ev['changing_pos_ev'] = ((s as any).sex_ev['changing_pos_ev'] ?? 0) + (1);
      if (((s as any).sex_ev ?? 0)?.['changing_pos_ev'] > (Math.floor(Math.random() * 4) + 2)) {
        (s as any).sex_ev['changing_pos_ev'] = 0;
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_events', 'position_swap_ev'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterBadThrustStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/vag/miss/pain1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> is just going through the motions of his next thrust when you feel ...
    scene.text(`${((s as any).npcdesc ?? 0)} is just going through the motions of his next thrust when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/shock1.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> is just going through the motions of his next thrust when you feel ...
      scene.text(`${((s as any).npcdesc ?? 0)} is just going through the motions of his next thrust when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/2.jpg');
        // TODO-QSP: dynamic text: You're just bouncing your hips back down onto <<$npcdesc>>'s cock when you feel ...
        scene.text(`You're just bouncing your hips back down onto ${((s as any).npcdesc ?? 0)}'s cock when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.img('images/shared/sex/anal/doggy/anal.jpg');
          // TODO-QSP: dynamic text: <<$npcdesc>> is just going through the motions of his next thrust when you feel ...
          scene.text(`${((s as any).npcdesc ?? 0)} is just going through the motions of his next thrust when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain right up your ass.`);
        }
      }
    }
  }
  scene.actions([
    { label: 'Yelp', goto: ['sex_ev_events', 'bad_thrust_yelp'] },
  ]);
  scene.build();
}

function enterBadThrustYelp(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['bad_thrust_count'] = ((s as any).sex_ev['bad_thrust_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/vag/miss/3.jpg');
    // TODO-QSP: dynamic text: "Yowch!" you yelp and <<$npcdesc>> nearly falls on top of you, trying to catch h...
    scene.text(`"Yowch!" you yelp and ${((s as any).npcdesc ?? 0)} nearly falls on top of you, trying to catch himself out of thrusting again.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/shock1.jpg');
      // TODO-QSP: dynamic text: "Yowch!" you yelp and <<$npcdesc>> nearly falls on top of you, trying to catch h...
      scene.text(`"Yowch!" you yelp and ${((s as any).npcdesc ?? 0)} nearly falls on top of you, trying to catch himself out of thrusting again.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        scene.text('"Yowch!" you yelp, bouncing back up suddenly like you just sat on a nail.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.img('images/shared/sex/anal/doggy/anal.jpg');
          // TODO-QSP: dynamic text: "Yowch!" you yelp and <<$npcdesc>> nearly falls on top of you, trying to catch h...
          scene.text(`"Yowch!" you yelp and ${((s as any).npcdesc ?? 0)} nearly falls on top of you, trying to catch himself out of thrusting again.`);
        }
      }
    }
  }
  if ((Math.floor(Math.random() * 100) + 1) <= ((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)]) {
    // TODO-QSP: dynamic text: "Oh shit, you okay?" <<$npcdesc>> asks. "I felt that too."
    scene.text(`"Oh shit, you okay?" ${((s as any).npcdesc ?? 0)} asks. "I felt that too."`);
    scene.actions([
      { label: 'It was nothing', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/3.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
            scene.img('images/shared/sex/anal/doggy/anal.jpg');
          }
        }
      }
    }
    scene.text('"Yeah, I\'m fine," you shake your head, trying to keep the grimace off your face as you recover from your unexpected poke. "Don\'t worry about it."');
    scene.text('"Sorry about that. I\'ll try to be more careful."');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spee...
  } },
    ]);
  } },
      { label: 'Laugh it off', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/pain1.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/smile1.jpg');
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
    scene.text('"Yeah, just a sensitive spot there."');
    scene.text('"Sorry about that."');
    scene.text('"Don\'t worry about it. It happens." You can\'t help but laugh a little, eyes tearing in both pain and amusement. Despite the awkwardness, it seems like your humors have only made this situation more enjoyable.');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spee...
  } },
    ]);
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "What is it?" <<$npcdesc>> pants, looking very confused as to why you suddenly c...
    scene.text(`"What is it?" ${((s as any).npcdesc ?? 0)} pants, looking very confused as to why you suddenly cried out.`);
    scene.actions([
      { label: 'It was nothing', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/3.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
            scene.img('images/shared/sex/anal/doggy/anal.jpg');
          }
        }
      }
    }
    scene.text('"Nothing," you shake your head, trying to keep the grimace off your face as you recover from your unexpected poke. "Don\'t worry about it."');
    scene.text('"Okay, if you say so..."');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spee...
  } },
    ]);
  } },
      { label: 'Laugh it off', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/pain1.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/smile1.jpg');
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
    scene.text('"Your dick gave me a bit of a bad poke there."');
    scene.text('"Oops, sorry about that."');
    scene.text('"Don\'t worry about it. It happens." You can\'t help but laugh a little, eyes tearing in both pain and amusement. Despite the awkwardness, it seems like your humors have only made this situation more enjoyable.');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spee...
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Get irritated', goto: ['sex_ev_events', 'bad_thrust_irate'] },
  ]);
  scene.build();
}

function enterBadThrustIrate(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['bad_thrust_count'] = ((s as any).sex_ev['bad_thrust_count'] ?? 0) + (1);
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
    // TODO-QSP: dynamic text: "Oh yeah? So it's totally normal to feel like you're getting stabbed in the ' + ...
    scene.text('"Oh yeah? So it\'s totally normal to feel like you\'re getting stabbed in the \' + iif($sex_ev[\'position\'] ! \'anal\', \'pussy\', \'asshole\') + \' while fucking, huh?"');
    scene.actions([
      { label: 'Pick up where you left off', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spee...
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
  scene.build();
}

function enterPositionSwapEv(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/dog1.jpg');
      // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> pulls out from between your legs and fli...
      scene.text(`With little to no warning, ${((s as any).npcdesc ?? 0)} pulls out from between your legs and flips you over onto your knees. He doesn't miss a beat and thrusts back into you from behind, keeping the same rhythm as before but now in doggystyle.`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_doggy', 'doggy<<sex_ev[''speed'']>>.2'
  } },
      ]);
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/2.jpg');
        // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> wraps his arms under your back and hauls...
        scene.text(`With little to no warning, ${((s as any).npcdesc ?? 0)} wraps his arms under your back and hauls, flopping onto his back with you on top, his cock never even leaving your pussy. He doesn't miss a beat and keeps pumping into you from below with his hands on your hips, encouraging you to keep the same rhythm as before but now in cowgirl.`);
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_cowgirl', 'cowgirl<<sex_ev[''speed'']>>.2'
  } },
        ]);
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
        scene.img('images/shared/sex/vag/miss/3.jpg');
        // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> pulls out from behind and flips you over...
        scene.text(`With little to no warning, ${((s as any).npcdesc ?? 0)} pulls out from behind and flips you over onto your back. He doesn't miss a beat and thrusts back in between your legs, now with him on top.`);
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', 'miss<<sex_ev[''speed'']>>.2'
  } },
        ]);
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/hug1.jpg');
          // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> pulls out of you and turns you around, p...
          scene.text(`With little to no warning, ${((s as any).npcdesc ?? 0)} pulls out of you and turns you around, pulling you onto his lap and back onto his cock. He doesn't miss a beat and keeps pumping into you from below, encouraging you to keep the same rhythm as before but now in cowgirl.`);
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_cowgirl', 'cowgirl<<sex_ev[''speed'']>>.2'
  } },
          ]);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
          scene.img('images/shared/sex/vag/miss/miss_cow_switch.mp4');
          // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> wraps his arms around you and twists his...
          scene.text(`With little to no warning, ${((s as any).npcdesc ?? 0)} wraps his arms around you and twists his hips, flipping you onto your back with his cock never even leaving your pussy. He doesn't miss a beat and keeps pumping into you, now with him on top.`);
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', 'miss<<sex_ev[''speed'']>>.2'
  } },
          ]);
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/dog1.jpg');
            // TODO-QSP: dynamic text: With little to no warning, <<$npcdesc>> pulls out from underneath you and flips ...
            scene.text(`With little to no warning, ${((s as any).npcdesc ?? 0)} pulls out from underneath you and flips you over onto your knees. He doesn't miss a beat and thrusts back into you from behind, keeping the same rhythm as before but now in doggystyle.`);
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_doggy', 'doggy<<sex_ev[''speed'']>>.2'
  } },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterDirtyTalkRouter(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWhosePussy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    // TODO-QSP: dynamic text: Grabbing your wrists, <<$npcdesc>> pins them above your head and slams his hips ...
    scene.text(`Grabbing your wrists, ${((s as any).npcdesc ?? 0)} pins them above your head and slams his hips into yours, driving his cock into your cunt with a reverberating shockwave.`);
    scene.text('"Whose pussy is this?" he growls at you from above.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      // TODO-QSP: dynamic text: Placing one hand on the center of your back and clamping the other around your w...
      scene.text(`Placing one hand on the center of your back and clamping the other around your wrist, ${((s as any).npcdesc ?? 0)} pins you to the bed and slams his hips into the back of your ass, driving his cock into you with a reverberating shockwave.`);
      scene.text('"Whose pussy is this?" he growls at you from behind.');
    } else {
      scene.text('Holding your wrist, he pins your arm to the bed and forces your head down by the back of your neck and slams his hips into the back of your ass, driving his cock into you with a reverberating shockwave.');
      scene.text('"Whose pussy is this?" he growls at you.');
    }
  }
  scene.actions([
    { label: 'This is hot', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/old1.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/massage/doggy9.mp4');
      }
    }
    qspCall(s, 'arousal', 'foreplay', (-15));
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
    scene.text('"Whose pussy is this?" he growls.');
    // TODO-QSP: dynamic text: "Yours!" you moan in a pitiful whimper. Your calves wrap around the back of <<$n...
    scene.text(`"Yours!" you moan in a pitiful whimper. Your calves wrap around the back of ${((s as any).npcdesc ?? 0)}'s thighs. Your toes curl. He pounds you again.`);
    scene.text('"Whose?" he asks, pounding you even harder.');
    scene.text('"<i>Yours!</i>" you cry and your whole body goes taut beneath his weight. Fuck! <i>This is so hot!</i>');
    // TODO-QSP: xgt 'sex_ev_sex', 'fuck_continue'
  } },
    { label: 'Play along', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/old1.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/med2.mp4');
      }
    }
    scene.text('"Yours!" you grunt, not particularly turned on by this kind of dirty talk.');
    scene.text('"Whose?" he asks, pounding your pussy again with even more force.');
    scene.text('"<i>Yours!</i>" you cry. Fuck! <i>This is so hot!</i>');
    if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
    } else {
      // TODO-QSP: xgt 'sex_ev_sex', 'fuck_continue'
    }
  } },
    { label: 'Confusion', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/3.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/2.jpg');
      }
    }
    scene.text('"Uhmm... Mine...?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> stops in the middle of his next thrust, a look of pure confusion on...
    scene.text(`${((s as any).npcdesc ?? 0)} stops in the middle of his next thrust, a look of pure confusion on his face. A hot blush fills your cheeks as you realize that you just failed at something.`);
    // TODO-QSP: xgt 'sex_ev_sex', 'fuck_continue'
  } },
  ]);
  scene.build();
}

function enterWhosePussyCum(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
  (s as any).sex_ev['orgasm_count'] = ((s as any).sex_ev['orgasm_count'] ?? 0) + (1);
  // TODO-QSP: dynamic text: The way that <<$npcdesc>> is dominating you, taking ownership of you pussy like ...
  scene.text(`The way that ${((s as any).npcdesc ?? 0)} is dominating you, taking ownership of you pussy like this, it's driving you crazy! Deep inside, you feel an intense orgasm building...`);
  scene.actions([
    { label: 'Play into it', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/orgasm_rough1.mp4');
      scene.text('The shuddering starts in your legs, muscles clenching until your thighs hurt. You feel like you can\'t breathe, barely managing to gasp out,');
      scene.text('"Nngh~ <i>I\'mgonnacum~!</i>"');
      // TODO-QSP: dynamic text: In response, <<$npcdesc>> clamps his hand over your mouth, choking off any furth...
      scene.text(`In response, ${((s as any).npcdesc ?? 0)} clamps his hand over your mouth, choking off any further words, and pummels into your cunt with the full force of his body weight. That last action of dominance lets the floodgates loose and your eyes roll back as your orgasm erupts.`);
      // TODO-QSP: dynamic text: Your loud groan is muffled by <<$npcdesc>>'s hand and your body spasms uncontrol...
      scene.text(`Your loud groan is muffled by ${((s as any).npcdesc ?? 0)}'s hand and your body spasms uncontrollably. Your pussy is a quivering mess, only made worse by ${((s as any).npcdesc ?? 0)}'s relentless pounding, and the intensity of your climax nearly makes you black out.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
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
    scene.actions([{ label: 'Continue', goto: ['sex_ev_events', 'sex_film1'] }]);
  }
  scene.build();
}

function enterSexFilm1(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['phone_film'] = 1;
  scene.img('images/shared/sex/vag/miss/med4.mp4');
  // TODO-QSP: dynamic text: You're panting in time with <<$npcdesc>>'s thrusts on top of you when you sudden...
  scene.text(`You're panting in time with ${((s as any).npcdesc ?? 0)}'s thrusts on top of you when you suddenly become aware of a glow coming from above you. ${((s as any).npcdesc ?? 0)} has his phone out. And it's pointed directly at you.`);
  qspCall(s, 'sex_ev_events', 'sex_film_protest');
  qspCall(s, 'sex_ev_events', 'sex_film_accept');
  scene.build();
}

function enterSexFilmProtest(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Cover your face', handler: (st: GameState) => {
    scene.actions([
      { label: 'Shy', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/hard3.mp4');
    // TODO-QSP: dynamic text: "Hngh~! Ungh~! <<$npcdesc>>, nooo~!" you protest weakly. A flush of total embarr...
    scene.text(`"Hngh~! Ungh~! ${((s as any).npcdesc ?? 0)}, nooo~!" you protest weakly. A flush of total embarrassment burns through your cheeks and you hold your hand up in a futile attempt to block the view of your quickly reddening face.`);
    if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Smile for the camera," <<$npcdesc>> grins, still fucking you as he holds the ca...
      scene.text(`"Smile for the camera," ${((s as any).npcdesc ?? 0)} grins, still fucking you as he holds the camera right up to you.`);
    } else {
      // TODO-QSP: dynamic text: "Fuck, you look so hot," <<$npcdesc>> grins, still fucking you as he holds the c...
      scene.text(`"Fuck, you look so hot," ${((s as any).npcdesc ?? 0)} grins, still fucking you as he holds the camera right up to you.`);
    }
    qspCall(s, 'sex_ev_events', 'sex_film_force_stop');
    scene.actions([
      { label: 'Let him film you (reluctant)', handler: (st: GameState) => {
    (s as any).sex_ev['phone_film'] = 2;
    (s as any).sex_ev['video_media'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_events" }) + ' src="images/shared/sex/vag/miss/hard3.mp4"></video></center>';
    if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      (s as any).sex_ev['video_dialogue'] = '"Hngh~! Ungh~! ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_events" }) + ', nooo~!"<br>"Smile for the camera."';
    } else {
      (s as any).sex_ev['video_dialogue'] = '"Hngh~! Ungh~! ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_events" }) + ', nooo~!"<br>"Fuck, you look so hot."';
    }
    scene.img('images/shared/sex/vag/miss/hard2.mp4');
    // TODO-QSP: dynamic text: With great reluctance, you silence your protests and let <<$npcdesc>> film you g...
    scene.text(`With great reluctance, you silence your protests and let ${((s as any).npcdesc ?? 0)} film you getting fucked by him. Though you still can't stop yourself from shamefully (and ineffectively) trying to cover your face.`);
    scene.text('You can\'t help but breathe a sigh of relief when he finally puts the phone away. But only after getting a decently long video...');
    qspCall(s, 'sex_ev_events', 'sex_film_end');
  } },
      { label: 'Keep protesting', handler: (st: GameState) => {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/vag/miss/3.jpg');
      scene.text('"Please~! Mmph~! I don\'t want to be filmed~!" you whine as cold panic fills your chest.');
      // TODO-QSP: dynamic text: The look on <<$npcdesc>>'s face changes with your continued protests and he blin...
      scene.text(`The look on ${((s as any).npcdesc ?? 0)}'s face changes with your continued protests and he blinks, as if only just now aware of what he's doing.`);
      scene.text('"Oh. Er... sorry," he mumbles. You sigh in relief as he pauses fucking you to put away the phone.');
      scene.text('"You\'ll delete it later, right?" you ask.');
      scene.text('"I will," he promises with a smile.');
    } else {
      (s as any).sex_ev['video_media'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_events" }) + ' src="images/shared/sex/vag/miss/hard3.mp4"></video></center>';
      if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        (s as any).sex_ev['video_dialogue'] = '"Hngh~! Ungh~! ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_events" }) + ', nooo~!"<br>"Smile for the camera."<br>"Please~! Mmph~! I don\'t want to be filmed~!"<br>"Come on, don\'t be like that. You look so sexy. This is hot."';
      } else {
        (s as any).sex_ev['video_dialogue'] = '"Hngh~! Ungh~! ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_events" }) + ', nooo~!"<br>"Fuck, you look so hot."<br>"Please~! Mmph~! I don\'t want to be filmed~!"<br>"Come on, don\'t be like that. You look so sexy. This is hot."';
      }
      (s as any).sex_ev['video_author'] = ((s as any).npcID ?? 0);
      (s as any).sex_ev['phone_film'] = 2;
      scene.text('"Please~! Mmph~! I don\'t want to be filmed~!" you whimper again, feeling cold panic fill your chest.');
      // TODO-QSP: dynamic text: "Come on, don't be like that," <<$npcdesc>> says, ignoring your pleas. "This is ...
      scene.text(`"Come on, don't be like that," ${((s as any).npcdesc ?? 0)} says, ignoring your pleas. "This is great. You look so sexy."`);
      scene.text('Your weak protests do nothing to sway him and he takes a decently long video of you getting railed before he finally puts the phone away.');
    }
    qspCall(s, 'sex_ev_events', 'sex_film_end');
  } },
    ]);
  } },
      { label: 'Annoyed', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/hard3.mp4');
    scene.text('"Ungh~! Hmph~! Hey! What do you think you\'re doing?" you grunt as he pushes the camera towards your face and you immediately try to cover up with your hand.');
    // TODO-QSP: dynamic text: "Don't worry, you look great," <<$npcdesc>> grins, still fucking you as he films...
    scene.text(`"Don't worry, you look great," ${((s as any).npcdesc ?? 0)} grins, still fucking you as he films.`);
    qspCall(s, 'sex_ev_events', 'sex_film_force_stop');
    scene.actions([
      { label: 'Let him film you (reluctant)', handler: (st: GameState) => {
    (s as any).sex_ev['video_dialogue'] = '"Ungh~! Hmph~! Hey! What do you think you\'re doing?"<br>"Don\'t worry, you look great."';
    (s as any).sex_ev['phone_film'] = 2;
    scene.img('images/shared/sex/vag/miss/hard2.mp4');
    // TODO-QSP: dynamic text: With great reluctance, you silence your protests and let <<$npcdesc>> film you g...
    scene.text(`With great reluctance, you silence your protests and let ${((s as any).npcdesc ?? 0)} film you getting fucked by him. Though you still can't stop yourself from shamefully (and ineffectively) trying to cover your face.`);
    scene.text('You can\'t help but breathe a sigh of relief when he finally puts the phone away. But only after getting a decently long video...');
    qspCall(s, 'sex_ev_events', 'sex_film_end');
  } },
      { label: 'Keep protesting', handler: (st: GameState) => {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/vag/miss/3.jpg');
      scene.text('"Seriously~! Nngh~! Stop it~!" you complain loudly, feeling hot with self consciousness and annoyance.');
      // TODO-QSP: dynamic text: The look on <<$npcdesc>>'s face changes with your continued protests and he blin...
      scene.text(`The look on ${((s as any).npcdesc ?? 0)}'s face changes with your continued protests and he blinks, as if only just now aware of what he's doing.`);
      scene.text('"Oh. Er... sorry," he mumbles. You sigh in relief as he pauses fucking you to put away the phone.');
      scene.text('"Make sure to delete it later," you tell him sternly.');
      scene.text('"I will," he promises with a smile.');
    } else {
      (s as any).sex_ev['video_media'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_events" }) + ' src="images/shared/sex/vag/miss/hard3.mp4"></video></center>';
      (s as any).sex_ev['video_author'] = ((s as any).npcID ?? 0);
      (s as any).sex_ev['phone_film'] = 2;
      scene.text('"Seriously~! Nngh~! Stop it~!" you keep protesting, face hot with self consciousness and annoyance.');
      if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        (s as any).sex_ev['video_dialogue'] = '"Ungh~! Hmph~! Hey! What do you think you\'re doing?"<br>"Don\'t worry, you look great."<br>"Seriously~! Nngh~! Stop it~!"<br>"You\'re so hot when you\'re mad."';
        // TODO-QSP: dynamic text: "You're so hot when you're mad," <<$npcdesc>> says, grin growing wider while ign...
        scene.text(`"You're so hot when you're mad," ${((s as any).npcdesc ?? 0)} says, grin growing wider while ignoring your pleas.`);
      } else {
        (s as any).sex_ev['video_dialogue'] = '"Ungh~! Hmph~! Hey! What do you think you\'re doing?"<br>"Don\'t worry, you look great."<br>"Seriously~! Nngh~! Stop it~!"<br>"Come on, don\'t be that way. You look so sexy. This is hot."';
        // TODO-QSP: dynamic text: "Come on, don't be that way," <<$npcdesc>> says, ignoring your pleas. "You look ...
        scene.text(`"Come on, don't be that way," ${((s as any).npcdesc ?? 0)} says, ignoring your pleas. "You look so sexy. This is hot."`);
      }
      // TODO-QSP: dynamic text: Your irritation with <<$npcdesc>> do nothing to sway him and he takes a decently...
      scene.text(`Your irritation with ${((s as any).npcdesc ?? 0)} do nothing to sway him and he takes a decently long video of you getting railed before he finally puts the phone away.`);
    }
    qspCall(s, 'sex_ev_events', 'sex_film_end');
  } },
    ]);
  } },
      { label: 'Angry', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/hard3.mp4');
    scene.text('"Ungh~! Hmph~! Hey! What the fuck!" you scream as you realize what he\'s doing and immediately try to cover up with your hand.');
    // TODO-QSP: dynamic text: "Don't worry, you look great," <<$npcdesc>> grins, still fucking you as he films...
    scene.text(`"Don't worry, you look great," ${((s as any).npcdesc ?? 0)} grins, still fucking you as he films.`);
    qspCall(s, 'sex_ev_events', 'sex_film_force_stop');
    scene.actions([
      { label: 'Let him film you (reluctant)', handler: (st: GameState) => {
    (s as any).sex_ev['phone_film'] = 2;
    (s as any).sex_ev['video_media'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_events" }) + ' src="images/shared/sex/vag/miss/hard3.mp4"></video></center>';
    (s as any).sex_ev['video_dialogue'] = '"Ungh~! Hmph~! Hey! What the fuck!"<br>"Don\'t worry, you look great."';
    (s as any).sex_ev['video_author'] = ((s as any).npcID ?? 0);
    scene.img('images/shared/sex/vag/miss/hard2.mp4');
    // TODO-QSP: dynamic text: You let <<$npcdesc>> film you getting fucked by him, fuming in silence, occasion...
    scene.text(`You let ${((s as any).npcdesc ?? 0)} film you getting fucked by him, fuming in silence, occasionally turning to cover your face just to spite him.`);
    scene.text('You can\'t help but breathe a sigh of relief when he finally puts the phone away. But only after getting a decently long video...');
    qspCall(s, 'sex_ev_events', 'sex_film_end');
  } },
      { label: 'Keep protesting', handler: (st: GameState) => {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/vag/miss/3.jpg');
      scene.text('"Fuck off~! Put that thing away~!" you shout, steaming hot with anger.');
      // TODO-QSP: dynamic text: The look on <<$npcdesc>>'s face changes with your continued protests and he blin...
      scene.text(`The look on ${((s as any).npcdesc ?? 0)}'s face changes with your continued protests and he blinks, as if only just now aware of what he's doing.`);
      scene.text('"Oh. Er... sorry," he mumbles. You sigh in relief as he pauses fucking you to put away the phone.');
      scene.text('"Make sure to delete it later," you tell him sternly.');
      scene.text('"I will," he promises with a smile.');
    } else {
      (s as any).sex_ev['video_media'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_events" }) + ' src="images/shared/sex/vag/miss/hard3.mp4"></video></center>';
      (s as any).sex_ev['video_author'] = ((s as any).npcID ?? 0);
      (s as any).sex_ev['phone_film'] = 2;
      scene.text('"Fuck off~! Put that thing away~!" you shout, steaming hot with anger.');
      if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        (s as any).sex_ev['video_dialogue'] = '"Ungh~! Hmph~! Hey! What the fuck!"<br>"Don\'t worry, you look great."<br>"Fuck off~! Put that thing away~!"<br>"You\'re so hot when you\'re mad."';
        // TODO-QSP: dynamic text: "You're so hot when you're mad," <<$npcdesc>> says, grin growing wider while ign...
        scene.text(`"You're so hot when you're mad," ${((s as any).npcdesc ?? 0)} says, grin growing wider while ignoring your pleas.`);
      } else {
        (s as any).sex_ev['video_dialogue'] = '"Ungh~! Hmph~! Hey! What the fuck!"Ungh~! Hmph~! Hey! What the fuck!"<br>"Don\'t worry, you look great."<br>"Fuck off~! Put that thing away~!"<br>"Come on, don\'t be that way. You look so sexy. This is hot."';
        // TODO-QSP: dynamic text: "Come on, don't be that way," <<$npcdesc>> says, ignoring your pleas. "You look ...
        scene.text(`"Come on, don't be that way," ${((s as any).npcdesc ?? 0)} says, ignoring your pleas. "You look so sexy. This is hot."`);
      }
      scene.text('He takes a decently long video of you getting railed, screaming in rage the whole time, before he finally puts the phone away.');
    }
    qspCall(s, 'sex_ev_events', 'sex_film_end');
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
      { label: 'Make him put the phone away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Make him put the phone away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).sex_ev['phone_film'] = (-1);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/1.jpg');
    // TODO-QSP: dynamic text: "Seriously, knock it off!" you snap, practically slapping the phone out of his h...
    scene.text(`"Seriously, knock it off!" you snap, practically slapping the phone out of his hand as you grab it. You stop the recording and immediately hit the gallery button to delete the video. "Asshole..." you mutter as you toss the phone far away from the bed as well, all without removing ${((s as any).npcdesc ?? 0)} from inside you.`);
    qspCall(s, 'sex_ev_after', 'quit');
    scene.actions([
      { label: '"Way to kill the mood"', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    (s as any).sex_ev['cock_inserted'] = 0;
    // TODO-QSP: dynamic text: "Way to kill the mood, asshole," you scowl at <<$npcdesc>> as you push him off a...
    scene.text(`"Way to kill the mood, asshole," you scowl at ${((s as any).npcdesc ?? 0)} as you push him off and out of you. "I'm done here."`);
    qspCall(s, 'sex_ev_after', 'quit2');
  } },
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/4.jpg');
    scene.text('"Finally," you sigh in relief, finally able to concentrate on the sex. "Don\'t do that again."');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterSexFilmAccept(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Let him film', handler: (st: GameState) => {
    (s as any).sex_ev['phone_film'] = 2;
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
      qspCall(s, 'arousal', 'vaginal', (-5), 'no_orgasm_msg', 'exhibitionism');
    }
    // TODO-QSP: end}
    scene.actions([
      { label: 'Blush', handler: (st: GameState) => {
    (s as any).sex_ev['video_media'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_events" }) + ' src="images/shared/sex/vag/miss/enjoy1.mp4"></video></center>';
    (s as any).sex_ev['video_dialogue'] = '"Mmph~! Mmph~! Mmm~! Nnn~!"<br>"You\'re so fucking hot."';
    (s as any).sex_ev['video_author'] = ((s as any).npcID ?? 0);
    scene.img('images/shared/sex/vag/miss/enjoy1.mp4');
    // TODO-QSP: dynamic text: Your cheeks flush with warmth as you realize what <<$npcdesc>>'s doing and turn ...
    scene.text(`Your cheeks flush with warmth as you realize what ${((s as any).npcdesc ?? 0)}'s doing and turn your face in embarrassment but don't make any complaints.`);
    scene.text('"Mmph~! Mmph~! Mmm~! Nnn~!" Each pump of his cock inside you forces sheepish squeaks from your lips as you get caught between self-consciousness and pleasure.');
    // TODO-QSP: dynamic text: "You're so fucking hot," <<$npcdesc>> grins, continuing to fuck and film at the ...
    scene.text(`"You're so fucking hot," ${((s as any).npcdesc ?? 0)} grins, continuing to fuck and film at the same time.`);
    scene.text('After a few minutes, he puts his phone away.');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Ignore the camera', handler: (st: GameState) => {
    (s as any).sex_ev['video_media'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_events" }) + ' src="images/shared/sex/vag/miss/enjoy1.mp4"></video></center>';
    (s as any).sex_ev['video_dialogue'] = '"Hah~! Haa~! Ah~! Haa~!"<br>"You\'re so fucking hot."';
    (s as any).sex_ev['video_author'] = ((s as any).npcID ?? 0);
    scene.img('images/shared/sex/vag/miss/enjoy1.mp4');
    // TODO-QSP: dynamic text: "Hah~! Haa~! Ah~! Haa~!" You ignore the camera completely, focusing on <<$npcdes...
    scene.text(`"Hah~! Haa~! Ah~! Haa~!" You ignore the camera completely, focusing on ${((s as any).npcdesc ?? 0)}'s cock pumping inside you and just try to stay the moment, letting moans escape your lips as they come. If he wants to film it, he can do what he wants.`);
    // TODO-QSP: dynamic text: "You're so fucking hot," <<$npcdesc>> grins, continuing to fuck and film at the ...
    scene.text(`"You're so fucking hot," ${((s as any).npcdesc ?? 0)} grins, continuing to fuck and film at the same time.`);
    scene.text('After a few minutes, he puts his phone away.');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Put on a show', handler: (st: GameState) => {
    (s as any).sex_ev['video_media'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_events" }) + ' src="images/shared/sex/vag/miss/enjoy2.mp4"></video></center>';
    (s as any).sex_ev['video_dialogue'] = '"Aaah~! I\'m so wet~! Ungh~! Your cock feels so good~! OhmygodI\'mgonnacome~!"<br>"Yeah you like that?"<br>"Don\'t stop~! Don\'t stop~!"';
    (s as any).sex_ev['video_author'] = ((s as any).npcID ?? 0);
    scene.img('images/shared/sex/vag/miss/enjoy2.mp4');
    scene.text('"Aaah~! I\'m so wet~! Ungh~! Your cock feels so good~! OhmygodImgonnacome~!"');
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
      scene.text('Unable to resist putting on a show, you turn up the volume on your moaning and dirty talk. You shake your tits and arch your back, putting extra emphasis on your pleasure.');
    } else {
      scene.text('Unable to resist putting on a show, you turn on the moaning and the dirty talk. You shake your tits and arch your back with pleasure you aren\'t really feeling.');
    }
    // TODO-QSP: dynamic text: "Yeah you like that?" <<$npcdesc>> grins
    scene.text(`"Yeah you like that?" ${((s as any).npcdesc ?? 0)} grins`);
    scene.text('"Don\'t stop~! Don\'t stop~!" you moan back.');
    scene.text('Seeming extra excited by what you\'re doing and makes sure to capture every moment of it, sending the lens up and down your body from where he fucks your pussy back up to your flushed face.');
    scene.text('After a few minutes of filming, he puts his phone away.');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'This costs extra' }, // TODO-QSP: empty action body
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
  scene.build();
}

function enterCreampieAskEv(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['creampie_ask_ev'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," <<$npcdesc>> grunts as he plows you. "Can I cum inside ...
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}," ${((s as any).npcdesc ?? 0)} grunts as he plows you. "Can I cum inside you today?"`);
  } else {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," <<$npcdesc>> grunts as you bounce up and down on his co...
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}," ${((s as any).npcdesc ?? 0)} grunts as you bounce up and down on his cock. "Can I cum inside you today?"`);
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
  scene.build();
}

function enterCreampieAskEvMaPillDeny(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "No way! <<$npcdesc>>, do <i>not</i> cum inside me, do you hear me?"
  scene.text(`"No way! ${((s as any).npcdesc ?? 0)}, do <i>not</i> cum inside me, do you hear me?"`);
  scene.text('"Okay okay, fine," he sighs.');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterCreampieAskEvMaPillAllow(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
    // TODO-QSP: dynamic text: You think about it for a few moments while <<$npcdesc>> keeps thrusting into you...
    scene.text(`You think about it for a few moments while ${((s as any).npcdesc ?? 0)} keeps thrusting into you.`);
  } else {
    // TODO-QSP: dynamic text: You think about it for a few moments while rolling your hips over <<$npcdesc>>'s...
    scene.text(`You think about it for a few moments while rolling your hips over ${((s as any).npcdesc ?? 0)}'s cock.`);
  }
  scene.text('"Okay," you smile. "You can do it today. I\'ll get a pill later."');
  // TODO-QSP: dynamic text: "You're the best, <<$pcs_nickname>>," he grins and starts moving his hips with r...
  scene.text(`"You're the best, ${((s as any).pcs_nickname ?? 0)}," he grins and starts moving his hips with renewed enthusiasm.`);
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterCreampieAskEvAnnoyedDeny(s: GameState, scene: SceneBuilder): void {
  scene.text('"Well I\'ll tell you now," you growl. "Fucking <i>don\'t</i>."');
  scene.text('"Fine, fine. Yeesh, I was just asking."');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterCreampieAskEvAnnoyedAllow(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['must_creampie'] = 1;
  (s as any).sex_ev['creampie_allowance'] = 1;
  scene.text('"<i>Ugh</i>. If I tell you no, you\'re just gonna ask again aren\'t you?" You sigh in exasperation and he returns it with a bratty grin. You glare at him but end up saying, "<i>Fine</i>. Just this once, okay?"');
  // TODO-QSP: dynamic text: "You're the best, <<$pcs_nickname>>," he grins and starts moving his hips with r...
  scene.text(`"You're the best, ${((s as any).pcs_nickname ?? 0)}," he grins and starts moving his hips with renewed enthusiasm.`);
  scene.actions([
    { label: 'Roll your eyes', handler: (st: GameState) => {
    scene.text('"Yeah, yeah, whatever," you say with a wave. "Just remember it\'s your fault if you knock me up."');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Smile', handler: (st: GameState) => {
    scene.text('Unable to help yourself, you end up smiling back. His childish persistence is strangely endearing, even if it\'s just about wanting to bust a nut inside you.');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
  ]);
  scene.build();
}

function enterFuckPunchLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).crime_placeholder ?? 0) > 0  &&  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).pcs_punch ?? 0) > 30) {
    scene.text('With you riding on top, it\'s the perfect opportunity for you to <a href="exec: gs \'sex_ev_events\', \'fuck_punch1\'">knock him out</a> right now if you wanted to.');
  }
  scene.build();
}

function enterFuckPunch1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Cancel', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: '"Night night"', handler: (st: GameState) => {
    (s as any).sex_ev['punchout'] = 1;
    scene.img('images/shared/sex/misc/fuck_punch1.mp4');
    // TODO-QSP: dynamic text: "Night night, <<$npc_usedname[$npcID]>>," you smile and punch him in the face, k...
    scene.text(`"Night night, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," you smile and punch him in the face, knocking him out cold.`);
    // TODO-QSP: act'Call it in': gt 'sex_ev_events', 'fuck_punch2'
  } },
  ]);
  scene.build();
}

function enterFuckPunch2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  scene.text('You pick up your phone and call your boss.');
  scene.text('"It\'s done. Come get him."');
  scene.actions([
    { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_leave', 'dress');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You get dressed while you wait for the boys to show up.');
    // TODO-QSP: dynamic text: It doesn't take long and a few minutes later they arrive to tow <<$npc_usedname[...
    scene.text(`It doesn't take long and a few minutes later they arrive to tow ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s unconscious body out.`);
  } },
    { label: 'Just wait', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You don\'t bother getting dressed and wait for the boys to show up.');
    // TODO-QSP: dynamic text: It doesn't take long and within a few minutes They shamelessly ogle you, grinnin...
    scene.text(`It doesn't take long and within a few minutes They shamelessly ogle you, grinning at you as they tow ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s unconscious body out.`);
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
    default:
      enterRandEvCheck(s, scene);
      break;
  }
}

export const sex_ev_events: LocationDef = {
  name: 'sex_ev_events',
  title: '"Ouch! What the fuck! Watch where you\'re putting that thing!',
  region: 'other',
  enter: enter,
};
