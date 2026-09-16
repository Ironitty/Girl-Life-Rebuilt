import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCumReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['react'] === 0) {
    scene.actions([
      { label: 'React', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReactMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if ((((s as any).sex_ev ?? 0)?.['orgasm_count'] >= 5  ||  ((s as any).pcs_sleep ?? 0) < 30)  &&  (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) < 5)) {
    scene.actions([
      { label: 'Collapse', goto: ['sex_ev_after', 'black_out'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterReactMenu(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskSatisfaction(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHandjobReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKuniReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_react');
  qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_react');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSwallowReact1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumMouthLikeThat(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTitsReact1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialReactions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPulloutReactMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCondomReactions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCumInside(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoMouthCum(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoFacial(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoTitsCum(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHandjobReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'hand') {
    scene.actions([
      { label: 'I like to finish the job', handler: (st: GameState) => {
    scene.text('"It\'s fun when guys come in your hand," you smirk. "You can feel everything."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKuniReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'kuni'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'facesit') {
    scene.actions([
      { label: 'You\'re good at that', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['good_at_cuni'] = 1;
    // TODO-QSP: dynamic text: "You're pretty good at that," you smile, looking down at <<$npcdesc>>, his lips ...
    scene.text(`"You're pretty good at that," you smile, looking down at ${((s as any).npcdesc || '')}, his lips glistening with your juices.`);
    scene.text('He just gives a smug grin and a shrug in return.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCondomReactions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGoodThingCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumAlready(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).sex_ev ?? 0)?.['came_together'] === 2  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.actions([
        { label: 'Did we come together?', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 3;
    if (((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.text('You nod hazily, mind still swimming from your orgasm.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: Did you...? did we...? together..?" you pant. <<$npcdesc>> just nods, breathing ...
        scene.text(`Did you...? did we...? together..?" you pant. ${((s as any).npcdesc || '')} just nods, breathing heavily on top of you. You can feel the swollen rubber around his cock bulging inside you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          // TODO-QSP: dynamic text: Your knees give out underneath you, falling down to the bed with <<$npcdesc>> on...
          scene.text(`Your knees give out underneath you, falling down to the bed with ${((s as any).npcdesc || '')} on top of you.`);
          // TODO-QSP: dynamic text: Did you...? did we...? together..?" you pant. <<$npcdesc>> just nods, breathing ...
          scene.text(`Did you...? did we...? together..?" you pant. ${((s as any).npcdesc || '')} just nods, breathing heavily on top of you. You can feel the swollen rubber around his cock bulging inside you.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/3.jpg');
            // TODO-QSP: dynamic text: You sit back on your haunches, feeling <<$npcdesc>>'s cock <i>squish</i> inside ...
            scene.text(`You sit back on your haunches, feeling ${((s as any).npcdesc || '')}'s cock <i>squish</i> inside you, watching his chest rise and falls with the same laboured breathing as your own.`);
            // TODO-QSP: dynamic text: Did you...? did we...? together..?" you murmur. <<$npcdesc>> just nods. You can ...
            scene.text(`Did you...? did we...? together..?" you murmur. ${((s as any).npcdesc || '')} just nods. You can feel the swollen rubber around his cock bulging inside you.`);
          }
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGoodThingCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoodThingCondom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie_surprise') {
    scene.actions([
      { label: 'Good thing we used a condom', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: "Good thing we used a condom," you pant, smiling up at <<$npcdesc>> and feeling ...
        scene.text(`"Good thing we used a condom," you pant, smiling up at ${((s as any).npcdesc || '')} and feeling the swollen rubber around his cock bulging inside you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          // TODO-QSP: dynamic text: "Good thing we used a condom," you pant, smiling back at <<$npcdesc>> and feelin...
          scene.text(`"Good thing we used a condom," you pant, smiling back at ${((s as any).npcdesc || '')} and feeling the swollen rubber around his cock bulging inside you.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
            // TODO-QSP: dynamic text: "Good thing we used a condom," you pant, smiling down at <<$npcdesc>> and feelin...
            scene.text(`"Good thing we used a condom," you pant, smiling down at ${((s as any).npcdesc || '')} and feeling the swollen rubber around his cock bulging inside you.`);
          }
        }
      }
    } else {
      scene.img('images/shared/sex/after/pillow_talk1.jpg');
      // TODO-QSP: dynamic text: "Good thing we used a condom," you smiling tiredly at <<$npcdesc>> and feeling t...
      scene.text(`"Good thing we used a condom," you smiling tiredly at ${((s as any).npcdesc || '')} and feeling the swollen rubber around his cock bulging inside you.`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBaskSatisfaction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 0) {
    scene.actions([
      { label: 'Catch your breath', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['catch_breath'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 0;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['did_we_cum_together'] = 0;
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['cum_together_fake'] !== 1) {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskCreampie1(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'anal_creampie') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskAnalCreampie1(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskCondom1(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskExternalCum1(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskCreampie2(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskCondom2(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskExternalCum2(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Quiet satisfaction', goto: ['sex_ev_reactions', 'bask_route'] },
  ]);
  scene.build();
}

function enterBaskRoute(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'stat', '');
  if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['cum_together_fake'] !== 1) {
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskCreampie1(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskCondom1(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskExternalCum1(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } else {
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskCreampie2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskCondom2(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBaskExternalCum2(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterBaskCreampie1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
    if (((s as any).cum_loc ?? 0)?.['anus'] > 0  &&  ((s as any).sex_ev ?? 0)?.['anal_creampie_count'] > 0) {
      scene.img('images/shared/sex/cum/both_holes1.jpg');
      if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
        // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, panting in exhaustion from the simultaneous orgasm yo...
      } else {
        if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
          // TODO-QSP: dynamic text: You lay back, shivering as you wind down from your string of multiple orgasms, f...
          scene.text(`You lay back, shivering as you wind down from your string of multiple orgasms, feeling ${((s as any).npcdesc || '')}'s cum seep from your holes.`);
        } else {
          // TODO-QSP: dynamic text: You lay back, shivering as you wind down from your recent orgasm, feeling <<$npc...
          scene.text(`You lay back, shivering as you wind down from your recent orgasm, feeling ${((s as any).npcdesc || '')}'s cum seep from your holes.`);
        }
      }
    } else {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
        // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, panting in exhaustion from the simultaneous orgasm yo...
      } else {
        if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
          // TODO-QSP: dynamic text: You lay back, shivering as you wind down from your string of multiple orgasms, f...
          scene.text(`You lay back, shivering as you wind down from your string of multiple orgasms, feeling ${((s as any).npcdesc || '')}'s cum seep from your pussy.`);
        } else {
          // TODO-QSP: dynamic text: You lay back, shivering as you wind down from your recent orgasm, feeling <<$npc...
          scene.text(`You lay back, shivering as you wind down from your recent orgasm, feeling ${((s as any).npcdesc || '')}'s cum seep from your pussy.`);
        }
      }
    }
    scene.text('A few minutes pass and your breathing slowly calms, relaxing in a moment of quiet satisfaction.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
        // TODO-QSP: dynamic text: You lay still, shivering as you wind down from your simultaneous orgasm, enjoyin...
        scene.text(`You lay still, shivering as you wind down from your simultaneous orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s cock still twitching inside you.`);
      } else {
        if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
          // TODO-QSP: dynamic text: You lay still, shivering as you wind down from your string of multiple orgasms, ...
          scene.text(`You lay still, shivering as you wind down from your string of multiple orgasms, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s cock still twitching inside you.`);
        } else {
          // TODO-QSP: dynamic text: You lay still, shivering as you wind down from your recent orgasm, enjoying the ...
          scene.text(`You lay still, shivering as you wind down from your recent orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s cock still twitching inside you.`);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
          // TODO-QSP: dynamic text: You just lay there, shivering from your simultaneous orgasm, enjoying the moment...
          scene.text(`You just lay there, shivering from your simultaneous orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his cock still twitching inside you.`);
        } else {
          if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
            // TODO-QSP: dynamic text: You just lay there, shivering as you wind down from your string of multiple orga...
            scene.text(`You just lay there, shivering as you wind down from your string of multiple orgasms, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his cock still twitching inside you.`);
          } else {
            // TODO-QSP: dynamic text: You just lay there, shivering as you wind down from your recent orgasm, enjoying...
            scene.text(`You just lay there, shivering as you wind down from your recent orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his cock still twitching inside you.`);
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
          if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
            // TODO-QSP: dynamic text: Still panting from your simultaneous orgasm, you sit back on your haunches, taki...
            scene.text(`Still panting from your simultaneous orgasm, you sit back on your haunches, taking a moment to catch your breath, pleasantly still filled with ${((s as any).npcdesc || '')}'s cock and cum.`);
          } else {
            if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
              // TODO-QSP: dynamic text: Still panting from your string of multiple orgasms, you sit back on your haunche...
              scene.text(`Still panting from your string of multiple orgasms, you sit back on your haunches, taking a moment to catch your breath, pleasantly still filled with ${((s as any).npcdesc || '')}'s cock and cum.`);
            } else {
              // TODO-QSP: dynamic text: You sit back on your haunches, taking a moment to catch your breath, pleasantly ...
              scene.text(`You sit back on your haunches, taking a moment to catch your breath, pleasantly still filled with ${((s as any).npcdesc || '')}'s cock and cum.`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
    } else {
      scene.text('The two of you just stay like that for a while, panting hard in the aftermath of your rough fucking.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBaskCreampie2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
    if (((s as any).cum_loc ?? 0)?.['anus'] > 0  &&  ((s as any).sex_ev ?? 0)?.['anal_creampie_count'] > 0) {
      scene.img('images/shared/sex/cum/both_holes1.jpg');
    } else {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      // TODO-QSP: dynamic text: You lay back, breathing hard and feeling <<$npcdesc>>'s cum seep from your pussy...
      scene.text(`You lay back, breathing hard and feeling ${((s as any).npcdesc || '')}'s cum seep from your pussy as you wind down.`);
    }
    scene.text('A few minutes pass and your breathing slowly calms, relaxing in a moment of quiet satisfaction.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: You lay still, panting as you wind down, enjoying the moment and relaxing with <...
      scene.text(`You lay still, panting as you wind down, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s cock still twitching inside you.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        // TODO-QSP: dynamic text: You just lay there, panting with <<$npcdesc>> on top of you, winding down togeth...
        scene.text(`You just lay there, panting with ${((s as any).npcdesc || '')} on top of you, winding down together with his cock still twitching inside you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/1.jpg');
          // TODO-QSP: dynamic text: You collapse onto <<$npcdesc>>, breathing hard and letting your body melt into h...
          scene.text(`You collapse onto ${((s as any).npcdesc || '')}, breathing hard and letting your body melt into his, your breasts pressing against his chest while his cock still twitches inside you.`);
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
    } else {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBaskAnalCreampie1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
      scene.img('images/shared/sex/cum/both_holes1.jpg');
      if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
        // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, panting in exhaustion from the simultaneous orgasm yo...
      } else {
        if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
          // TODO-QSP: dynamic text: You lay back, shivering as you wind down from your string of multiple orgasms, f...
          scene.text(`You lay back, shivering as you wind down from your string of multiple orgasms, feeling ${((s as any).npcdesc || '')}'s cum seep from your holes.`);
        } else {
          // TODO-QSP: dynamic text: You lay back, shivering as you wind down from your recent orgasm, feeling <<$npc...
          scene.text(`You lay back, shivering as you wind down from your recent orgasm, feeling ${((s as any).npcdesc || '')}'s cum seep from your holes.`);
        }
      }
    } else {
      scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
      if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
        // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, panting in exhaustion from the simultaneous orgasm yo...
      } else {
        if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
          // TODO-QSP: dynamic text: You lay back, shivering as you wind down from your string of multiple orgasms, f...
          scene.text(`You lay back, shivering as you wind down from your string of multiple orgasms, feeling ${((s as any).npcdesc || '')}'s cum seep from your pussy.`);
        } else {
          // TODO-QSP: dynamic text: You lay back, shivering as you wind down from your recent orgasm, feeling <<$npc...
          scene.text(`You lay back, shivering as you wind down from your recent orgasm, feeling ${((s as any).npcdesc || '')}'s cum seep from your pussy.`);
        }
      }
    }
    scene.text('A few minutes pass and your breathing slowly calms, relaxing in a moment of quiet satisfaction.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
      if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
        // TODO-QSP: dynamic text: You just lay there, shivering from your simultaneous orgasm, enjoying the moment...
        scene.text(`You just lay there, shivering from your simultaneous orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his cock still twitching inside your ass.`);
      } else {
        if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
          // TODO-QSP: dynamic text: You just lay there, shivering as you wind down from your string of multiple orga...
          scene.text(`You just lay there, shivering as you wind down from your string of multiple orgasms, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his cock still twitching inside your ass.`);
        } else {
          // TODO-QSP: dynamic text: You just lay there, shivering as you wind down from your recent orgasm, enjoying...
          scene.text(`You just lay there, shivering as you wind down from your recent orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his cock still twitching inside your ass.`);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
          // TODO-QSP: dynamic text: You lay still, shivering as you wind down from your simultaneous orgasm, enjoyin...
          scene.text(`You lay still, shivering as you wind down from your simultaneous orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s cock still twitching inside you.`);
        } else {
          if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
            // TODO-QSP: dynamic text: You lay still, shivering as you wind down from your string of multiple orgasms, ...
            scene.text(`You lay still, shivering as you wind down from your string of multiple orgasms, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s cock still twitching inside you.`);
          } else {
            // TODO-QSP: dynamic text: You lay still, shivering as you wind down from your recent orgasm, enjoying the ...
            scene.text(`You lay still, shivering as you wind down from your recent orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s cock still twitching inside you.`);
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
            // TODO-QSP: dynamic text: You just lay there, shivering from your simultaneous orgasm, enjoying the moment...
            scene.text(`You just lay there, shivering from your simultaneous orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his cock still twitching inside you.`);
          } else {
            if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
              // TODO-QSP: dynamic text: You just lay there, shivering as you wind down from your string of multiple orga...
              scene.text(`You just lay there, shivering as you wind down from your string of multiple orgasms, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his cock still twitching inside you.`);
            } else {
              // TODO-QSP: dynamic text: You just lay there, shivering as you wind down from your recent orgasm, enjoying...
              scene.text(`You just lay there, shivering as you wind down from your recent orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his cock still twitching inside you.`);
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/3.jpg');
            if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
              // TODO-QSP: dynamic text: Still panting from your simultaneous orgasm, you sit back on your haunches, taki...
              scene.text(`Still panting from your simultaneous orgasm, you sit back on your haunches, taking a moment to catch your breath, pleasantly still filled with ${((s as any).npcdesc || '')}'s cock and cum.`);
            } else {
              if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
                // TODO-QSP: dynamic text: Still panting from your string of multiple orgasms, you sit back on your haunche...
                scene.text(`Still panting from your string of multiple orgasms, you sit back on your haunches, taking a moment to catch your breath, pleasantly still filled with ${((s as any).npcdesc || '')}'s cock and cum.`);
              } else {
                // TODO-QSP: dynamic text: You sit back on your haunches, taking a moment to catch your breath, pleasantly ...
                scene.text(`You sit back on your haunches, taking a moment to catch your breath, pleasantly still filled with ${((s as any).npcdesc || '')}'s cock and cum.`);
              }
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your backdoor love-making.');
    } else {
      scene.text('The two of you just stay like that for a while, panting hard in the aftermath of your rough anal fucking.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBaskCondom1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, cuddled up against <<$npcdesc>>, panting hard to catc...
    } else {
      if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
        // TODO-QSP: dynamic text: You lay back, cuddled up against <<$npcdesc>>, panting as you wind down from you...
        scene.text(`You lay back, cuddled up against ${((s as any).npcdesc || '')}, panting as you wind down from your string of multiple orgasms.`);
      } else {
        // TODO-QSP: dynamic text: You lay back, cuddled up against <<$npcdesc>>, panting as you wind down from you...
        scene.text(`You lay back, cuddled up against ${((s as any).npcdesc || '')}, panting as you wind down from your recent orgasm.`);
      }
    }
    scene.text('A few minutes pass and your breathing slowly calms, relaxing in a moment of quiet satisfaction.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
        // TODO-QSP: dynamic text: You lay back, panting as you wind down from your simultaneous orgasm, enjoying t...
        scene.text(`You lay back, panting as you wind down from your simultaneous orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s condom wrapped cock comfortably filling you up.`);
      } else {
        if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
          // TODO-QSP: dynamic text: You lay back, panting as you wind down from your string of multiple orgasms, enj...
          scene.text(`You lay back, panting as you wind down from your string of multiple orgasms, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s condom wrapped cock comfortably filling you up.`);
        } else {
          // TODO-QSP: dynamic text: You lay back, panting as you wind down from your recent orgasm, enjoying the mom...
          scene.text(`You lay back, panting as you wind down from your recent orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s condom wrapped cock comfortably filling you up.`);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
          // TODO-QSP: dynamic text: You just lay there, panting from your simultaneous orgasm, enjoying the moment a...
          scene.text(`You just lay there, panting from your simultaneous orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his condom wrapped cock comfortably filling you up.`);
        } else {
          if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
            // TODO-QSP: dynamic text: You just lay there, panting as you wind down from your string of multiple orgasm...
            scene.text(`You just lay there, panting as you wind down from your string of multiple orgasms, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his condom wrapped cock comfortably filling you up.`);
          } else {
            // TODO-QSP: dynamic text: You just lay there, panting as you wind down from your recent orgasm, enjoying t...
            scene.text(`You just lay there, panting as you wind down from your recent orgasm, enjoying the moment and relaxing with ${((s as any).npcdesc || '')} on top of you, his condom wrapped cock comfortably filling you up.`);
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/1.jpg');
          if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
            // TODO-QSP: dynamic text: You collapse onto <<$npcdesc>>, breathing hard from your simultaneous orgasm, yo...
            scene.text(`You collapse onto ${((s as any).npcdesc || '')}, breathing hard from your simultaneous orgasm, your breasts pressing against his chest as you feel your body melt into his, comfortably filled with his cock.`);
          } else {
            if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
              // TODO-QSP: dynamic text: You collapse onto <<$npcdesc>>, breathing hard as you wind down from your string...
              scene.text(`You collapse onto ${((s as any).npcdesc || '')}, breathing hard as you wind down from your string of multiple orgasms, your breasts pressing against his chest as you feel your body melt into his, comfortably filled with his cock.`);
            } else {
              // TODO-QSP: dynamic text: You collapse onto <<$npcdesc>>, breathing hard as you wind down from your recent...
              scene.text(`You collapse onto ${((s as any).npcdesc || '')}, breathing hard as you wind down from your recent orgasm, your breasts pressing against his chest as you feel your body melt into his, comfortably filled with his cock.`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
    } else {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBaskCondom2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: You lay back, cuddled up against <<$npcdesc>>, panting as you wind down.
    scene.text(`You lay back, cuddled up against ${((s as any).npcdesc || '')}, panting as you wind down.`);
    scene.text('A few minutes pass and your breathing slowly calms, the two of you relaxing together in a moment of quiet satisfaction.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: You lay still, panting as you wind down, enjoying the moment and relaxing with <...
      scene.text(`You lay still, panting as you wind down, enjoying the moment and relaxing with ${((s as any).npcdesc || '')}'s cock still twitching in the condom inside you.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        // TODO-QSP: dynamic text: You just lay there, panting with <<$npcdesc>> on top of you, winding down togeth...
        scene.text(`You just lay there, panting with ${((s as any).npcdesc || '')} on top of you, winding down together with his cock still twitching in the condom inside you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/1.jpg');
          // TODO-QSP: dynamic text: You collapse onto <<$npcdesc>>, breathing hard and letting your body melt into h...
          scene.text(`You collapse onto ${((s as any).npcdesc || '')}, breathing hard and letting your body melt into his, your breasts pressing against his chest while his cock still twitches in the condom inside you.`);
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
    } else {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBaskExternalCum1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth') {
    scene.img('images/shared/sex/cum/facial/facial35.jpg');
    if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
      if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
        // TODO-QSP: dynamic text: You lay back, panting hard as you wind down from your string of multiple orgasms...
        scene.text(`You lay back, panting hard as you wind down from your string of multiple orgasms, the warm mask of ${((s as any).npcdesc || '')}'s cum across your face, its salty taste on your tongue. It takes several minutes before your breathing finally calms.`);
      } else {
        // TODO-QSP: dynamic text: You lay back, panting as you bask in the glow of your multiple orgasms and the w...
        scene.text(`You lay back, panting as you bask in the glow of your multiple orgasms and the warm mask of ${((s as any).npcdesc || '')}'s cum across your face, its salty taste on your tongue. Life is <i>good</i> right now...`);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
        // TODO-QSP: dynamic text: You lay back, panting hard as you wind down from your last orgasm, the warm mask...
        scene.text(`You lay back, panting hard as you wind down from your last orgasm, the warm mask of ${((s as any).npcdesc || '')}'s cum across your face, its salty taste on your tongue. It takes several minutes before your breathing finally calms.`);
      } else {
        // TODO-QSP: dynamic text: You lay back, panting as you bask in the glow of your last orgasm and the warm m...
        scene.text(`You lay back, panting as you bask in the glow of your last orgasm and the warm mask of ${((s as any).npcdesc || '')}'s cum across your face, its salty taste on your tongue. Life is <i>good</i> right now...`);
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'spit') {
      scene.img('images/shared/sex/cum/facial/facial35.jpg');
      if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
        if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
          // TODO-QSP: dynamic text: You lay back, panting hard as you wind down from your string of multiple orgasms...
          scene.text(`You lay back, panting hard as you wind down from your string of multiple orgasms, the salty taste of ${((s as any).npcdesc || '')}'s sperm on your lips as it dribbles down your chin. It takes several minutes before your breathing finally calms.`);
        } else {
          // TODO-QSP: dynamic text: You lay back, panting as you bask in the glow of your multiple orgasms and the s...
          scene.text(`You lay back, panting as you bask in the glow of your multiple orgasms and the salty taste of ${((s as any).npcdesc || '')}'s sperm on your lips as it dribbles down your chin. Life is <i>good</i> right now...`);
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
          // TODO-QSP: dynamic text: You lay back, panting hard as you wind down from your last orgasm, the salty tas...
          scene.text(`You lay back, panting hard as you wind down from your last orgasm, the salty taste of ${((s as any).npcdesc || '')}'s sperm on your lips as it dribbles down your chin. It takes several minutes before your breathing finally calms.`);
        } else {
          // TODO-QSP: dynamic text: You lay back, panting as you bask in the glow of your last orgasm and the salty ...
          scene.text(`You lay back, panting as you bask in the glow of your last orgasm and the salty taste of ${((s as any).npcdesc || '')}'s sperm on your lips as it dribbles down your chin. Life is <i>good</i> right now...`);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
        scene.img('images/shared/sex/cum/facial/facial35.jpg');
        if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
          if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
            // TODO-QSP: dynamic text: You lay back, panting hard as you wind down from your string of multiple orgasms...
            scene.text(`You lay back, panting hard as you wind down from your string of multiple orgasms, the salty taste of ${((s as any).npcdesc || '')}'s sperm still on your lips. It takes several minutes before your breathing finally calms.`);
          } else {
            // TODO-QSP: dynamic text: You lay back, panting as you bask in the glow of your multiple orgasms and the s...
            scene.text(`You lay back, panting as you bask in the glow of your multiple orgasms and the salty taste of ${((s as any).npcdesc || '')}'s sperm still on your lips. Life is <i>good</i> right now...`);
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
            // TODO-QSP: dynamic text: You lay back, panting hard as you wind down from your last orgasm, the salty tas...
            scene.text(`You lay back, panting hard as you wind down from your last orgasm, the salty taste of ${((s as any).npcdesc || '')}'s sperm still on your lips. It takes several minutes before your breathing finally calms.`);
          } else {
            // TODO-QSP: dynamic text: You lay back, panting as you bask in the glow of your last orgasm and the salty ...
            scene.text(`You lay back, panting as you bask in the glow of your last orgasm and the salty taste of ${((s as any).npcdesc || '')}'s sperm still on your lips. Life is <i>good</i> right now...`);
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'facial') {
          scene.img('images/shared/sex/cum/facial/facial35.jpg');
          if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
            if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
              // TODO-QSP: dynamic text: You lay back, panting hard as you wind down from your string of multiple orgasms...
              scene.text(`You lay back, panting hard as you wind down from your string of multiple orgasms, the warm mask of ${((s as any).npcdesc || '')}'s cum across your face already beginning to cool. It takes several minutes before your breathing finally calms.`);
            } else {
              // TODO-QSP: dynamic text: You lay back, panting as you bask in the glow of your multiple orgasms and the w...
              scene.text(`You lay back, panting as you bask in the glow of your multiple orgasms and the warm mask of ${((s as any).npcdesc || '')}'s cum across your face already beginning to cool. Life is <i>good</i> right now...`);
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
              // TODO-QSP: dynamic text: You lay back, panting hard as you wind down from your last orgasm, the warm mask...
              scene.text(`You lay back, panting hard as you wind down from your last orgasm, the warm mask of ${((s as any).npcdesc || '')}'s cum across your face already beginning to cool. It takes several minutes before your breathing finally calms.`);
            } else {
              // TODO-QSP: dynamic text: You lay back, panting as you bask in the glow of your last orgasm and the warm m...
              scene.text(`You lay back, panting as you bask in the glow of your last orgasm and the warm mask of ${((s as any).npcdesc || '')}'s cum across your face already beginning to cool. Life is <i>good</i> right now...`);
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'tits') {
            scene.img('images/shared/sex/cum/tits/2.jpg');
            if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
              if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
                // TODO-QSP: dynamic text: You lay back, panting hard as you wind down from your string of multiple orgasms...
                scene.text(`You lay back, panting hard as you wind down from your string of multiple orgasms, the warm glaze of ${((s as any).npcdesc || '')}'s cum across your chest already beginning to cool. It takes several minutes before your breathing finally calms.`);
              } else {
                // TODO-QSP: dynamic text: You lay back, panting as you bask in the glow of your multiple orgasms and the w...
                scene.text(`You lay back, panting as you bask in the glow of your multiple orgasms and the warm glaze of ${((s as any).npcdesc || '')}'s cum across your chest already beginning to cool. Life is <i>good</i> right now...`);
              }
            } else {
              if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
                // TODO-QSP: dynamic text: You lay back, panting hard as you wind down from your last orgasm, the warm glaz...
                scene.text(`You lay back, panting hard as you wind down from your last orgasm, the warm glaze of ${((s as any).npcdesc || '')}'s cum across your chest already beginning to cool. It takes several minutes before your breathing finally calms.`);
              } else {
                // TODO-QSP: dynamic text: You lay back, panting as you bask in the glow of your last orgasm and the warm g...
                scene.text(`You lay back, panting as you bask in the glow of your last orgasm and the warm glaze of ${((s as any).npcdesc || '')}'s cum across your chest already beginning to cool. Life is <i>good</i> right now...`);
              }
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
                scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
                if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
                  if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
                    // TODO-QSP: dynamic text: You lay back with <<$npcdesc>>'s cock resting between your legs, panting hard as...
                    scene.text(`You lay back with ${((s as any).npcdesc || '')}'s cock resting between your legs, panting hard as you wind down from your multiple orgasms, feeling the warm cum on your belly already beginning to cool. It takes several minutes before your breathing finally calms.`);
                  } else {
                    // TODO-QSP: dynamic text: You lay back with <<$npcdesc>>'s cock resting between your legs, panting as you ...
                    scene.text(`You lay back with ${((s as any).npcdesc || '')}'s cock resting between your legs, panting as you bask in the glow of your multiple orgasms, feeling the warm cum on your belly already beginning to cool. Life is <i>good</i> right now...`);
                  }
                } else {
                  if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
                    // TODO-QSP: dynamic text: You lay back with <<$npcdesc>>'s cock resting between your legs, panting hard as...
                    scene.text(`You lay back with ${((s as any).npcdesc || '')}'s cock resting between your legs, panting hard as you wind down from your last orgasm, feeling the warm cum on your belly already beginning to cool. It takes several minutes before your breathing finally calms.`);
                  } else {
                    // TODO-QSP: dynamic text: You lay back with <<$npcdesc>>'s cock resting between your legs, panting as you ...
                    scene.text(`You lay back with ${((s as any).npcdesc || '')}'s cock resting between your legs, panting as you bask in the glow of your last orgasm, feeling the warm cum on your belly already beginning to cool. Life is <i>good</i> right now...`);
                  }
                }
              } else {
                if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
                  scene.img('images/shared/sex/cum/back1.jpg');
                  if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
                    if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
                      // TODO-QSP: dynamic text: You just lay there, <<$npcdesc>>'s cum spattered across your ass, panting hard a...
                      scene.text(`You just lay there, ${((s as any).npcdesc || '')}'s cum spattered across your ass, panting hard as you wind down from your string of multiple orgasms. It takes several minutes before your breathing finally calms.`);
                    } else {
                      // TODO-QSP: dynamic text: You just lay there, <<$npcdesc>>'s cum spattered across your ass, panting as you...
                      scene.text(`You just lay there, ${((s as any).npcdesc || '')}'s cum spattered across your ass, panting as you bask in the glow of your multiple orgasms feeling the warm cum on your belly already beginning to cool. Life is <i>good</i> right now...`);
                    }
                  } else {
                    if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
                      // TODO-QSP: dynamic text: You just lay there, <<$npcdesc>>'s cum spattered across your ass, panting hard a...
                      scene.text(`You just lay there, ${((s as any).npcdesc || '')}'s cum spattered across your ass, panting hard as you wind down from your last orgasm. It takes several minutes before your breathing finally calms.`);
                    } else {
                      // TODO-QSP: dynamic text: You just lay there, <<$npcdesc>>'s cum spattered across your ass, panting as you...
                      scene.text(`You just lay there, ${((s as any).npcdesc || '')}'s cum spattered across your ass, panting as you bask in the glow of your last orgasm. Life is <i>good</i> right now...`);
                    }
                  }
                } else {
                  if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                    scene.img('images/shared/sex/vag/cowgirl/3.jpg');
                    if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
                      if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
                        // TODO-QSP: dynamic text: You sit back on top of <<$npcdesc>>, his cum spattered across your ass, his cock...
                        scene.text(`You sit back on top of ${((s as any).npcdesc || '')}, his cum spattered across your ass, his cock resting between your cheeks, panting hard as you wind down from your multiple orgasms. That final climax really took it out of you. It takes several minutes before your breathing finally calms.`);
                      } else {
                        // TODO-QSP: dynamic text: You sit back on top of <<$npcdesc>>, his cum spattered across your ass, his cock...
                        scene.text(`You sit back on top of ${((s as any).npcdesc || '')}, his cum spattered across your ass, his cock resting between your cheeks, panting as you bask in the glow of your multiple orgasms, feeling the warm cum on your belly already beginning to cool. Life is <i>good</i> right now...`);
                      }
                    } else {
                      if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 1) {
                        // TODO-QSP: dynamic text: You sit back on top of <<$npcdesc>>, his cum spattered across your ass, his cock...
                        scene.text(`You sit back on top of ${((s as any).npcdesc || '')}, his cum spattered across your ass, his cock resting between your cheeks, panting hard as you wind down from your last orgasm. It takes several minutes before your breathing finally calms.`);
                      } else {
                        // TODO-QSP: dynamic text: You sit back on top of <<$npcdesc>>, his cum spattered across your ass, his cock...
                        scene.text(`You sit back on top of ${((s as any).npcdesc || '')}, his cum spattered across your ass, his cock resting between your cheeks, panting as you bask in the glow of your last orgasm. Life is <i>good</i> right now...`);
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
  scene.text('A few minutes pass and your breathing slowly calms, relaxing in a moment of quiet satisfaction.');
  // TODO-QSP: end
  scene.build();
}

function enterBaskExternalCum2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth') {
    scene.img('images/shared/sex/cum/facial/facial35.jpg');
    // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, panting hard to catch your breath as you wind down, t...
  } else {
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'spit') {
      scene.img('images/shared/sex/cum/facial/facial35.jpg');
      // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, panting hard to catch your breath as you wind down, t...
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'mouth') {
        scene.img('images/shared/sex/cum/facial/facial35.jpg');
        // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, panting hard to catch your breath, the salty taste of...
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'facial') {
          scene.img('images/shared/sex/cum/facial/facial35.jpg');
          // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, panting hard to catch your breath, the warm mask of <...
        } else {
          if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'tits') {
            scene.img('images/shared/sex/cum/chest/2.jpg');
            // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, panting hard to catch your breath, the warm glaze of ...
          } else {
            if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
                scene.img('images/shared/sex/cum/stomach/bellycum3.jpg');
                // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You lay back, panting hard to catch your breath, feeling the warm c...
              } else {
                if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
                  scene.img('images/shared/sex/cum/back1.jpg');
                  // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You just lay there, <<$npcdesc>>''s cum spattered across your ass, ...
                } else {
                  if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                    scene.img('images/shared/sex/vag/cowgirl/3.jpg');
                    // TODO-QSP: iif(sex_ev['catch_breath'] = 1, 'You sit back on top of <<$npcdesc>>, his cum spattered across your ...
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.text('A few minutes pass and your breathing slowly calms, the two of you relaxing together in a moment of quiet satisfaction.');
  // TODO-QSP: end
  scene.build();
}

function enterPulloutReactMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] !== 'creampie') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPulloutThanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPulloutClose(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWhyNotInside(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_talk', 'creampie_permission1');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumAlready(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPulloutThanks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout'  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will'  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
    scene.actions([
      { label: 'Thanks for pulling out', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
      } else {
        scene.img('images/shared/sex/vag/cowgirl/3.jpg');
      }
    }
    scene.text('"Thanks for pulling out," you pant.');
    if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
      scene.text('"I promised you I would, didn\'t I?"');
      scene.text('"Thanks for following through," you smile warmly.');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPulloutClose(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout'  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will'  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
    scene.actions([
      { label: 'That was close', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
      } else {
        scene.img('images/shared/sex/vag/cowgirl/3.jpg');
      }
    }
    scene.text('"Whew," you breathe. "That was a close call..."');
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      // TODO-QSP: dynamic text: "No kidding," <<$npcdesc>> pants along side you.
      scene.text(`"No kidding," ${((s as any).npcdesc || '')} pants along side you.`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWhyNotInside(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['promise_no_creampie'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['not_inside'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['pullout_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] < 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
    scene.actions([
      { label: 'Why didn\'t you come inside me?', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
      } else {
        scene.img('images/shared/sex/vag/cowgirl/3.jpg');
      }
    }
    scene.text('"Aww," you moan. "What a waste. Why didn\'t you come inside me?"');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
          // TODO-QSP: dynamic text: "Just cause it feels good doesn't mean I want to get you pregnant," <<$npcdesc>>...
          scene.text(`"Just cause it feels good doesn't mean I want to get you pregnant," ${((s as any).npcdesc || '')} says, frowning. "Didn't you say you're not on birth control?"`);
        } else {
          // TODO-QSP: dynamic text: "Just cause you like it doesn't mean I want to get you pregnant," <<$npcdesc>> s...
          scene.text(`"Just cause you like it doesn't mean I want to get you pregnant," ${((s as any).npcdesc || '')} says, frowning. "Didn't you say you're not on birth control?"`);
        }
        if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'safe') {
          scene.actions([
            { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"It\'s a safe day in my cycle," you grin. "Best time for creampies."');
    scene.text('"Well then you should have said so," he smiles back.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          ]);
        } else {
          if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === '') {
            scene.actions([
              { label: 'Not fertile', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    scene.text('"I\'m not ovulating right now," you grin. "It should be safe to come inside."');
    scene.text('"Well then you should have said so," he smiles back.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Uhhh', handler: (st: GameState) => {
    scene.text('"Uhh..." You give him a guilty smile. "Wasn\'t really what was on my mind at the time..."');
    scene.text('"Yeah, that\'s what I thought," he replies, giving you a look.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'But it feels good', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"So?" you smile wryly. "Pleasure is pleasure. Not really thinking about the consequences right now."');
    scene.text('"Maybe for you..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'The risk makes it sexy', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"But that\'s the best part," you grin. "The risk is what makes it exciting."');
    scene.text('"Maybe for you..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          qspCall(s, 'sex_ev_sex', 'sex_end');
        } else {
          qspCall(s, 'sex_ev_sex', 'sex_end');
        }
      }
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
        // TODO-QSP: dynamic text: "It just sorta slipped out," <<$npcdesc>> says a little embarrassedly.
        scene.text(`"It just sorta slipped out," ${((s as any).npcdesc || '')} says a little embarrassedly.`);
        qspCall(s, 'sex_ev_sex', 'sex_end');
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
          // TODO-QSP: dynamic text: "Didn't feel like it," <<$npcdesc>> shrugs.
          scene.text(`"Didn't feel like it," ${((s as any).npcdesc || '')} shrugs.`);
          qspCall(s, 'sex_ev_sex', 'sex_end');
        } else {
          if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
            scene.text('"Is that permission for next time?" he asks, smiling.');
            scene.actions([
              { label: 'Hesitate', handler: (st: GameState) => {
    scene.text('"Uhmm..." You stop in your tracks and reconsider. "Maybe... keep asking for now..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
              { label: 'Yes', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    ((s as any).npc_know_love_creampie = (s as any).npc_know_love_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Yeah," you grin. "Fill me up, soldier."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
            ]);
          } else {
            // TODO-QSP: dynamic text: "Sorry to disappoint," <<$npcdesc>> snickers.
            scene.text(`"Sorry to disappoint," ${((s as any).npcdesc || '')} snickers.`);
            qspCall(s, 'sex_ev_sex', 'sex_end');
          }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumMouthLikeThat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
    scene.actions([
      { label: 'Did you like that?', handler: (st: GameState) => {
    scene.text('"Did you like that?" you ask, licking your lips.');
    if (((s as any).sex_ev ?? 0)?.['swallow'] === 1) {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
        // TODO-QSP: dynamic text: "It was fucking hot," <<$npcdesc>> says without hesitation.
        scene.text(`"It was fucking hot," ${((s as any).npcdesc || '')} says without hesitation.`);
      } else {
        // TODO-QSP: dynamic text: "You're cute when you swallow," <<$npcdesc>> smirks.
        scene.text(`"You're cute when you swallow," ${((s as any).npcdesc || '')} smirks.`);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['spit'] === 1) {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
          // TODO-QSP: dynamic text: "It would have been better if you swallowed," <<$npcdesc>> says, looking wistful...
          scene.text(`"It would have been better if you swallowed," ${((s as any).npcdesc || '')} says, looking wistful.`);
        } else {
          // TODO-QSP: dynamic text: "You're cute with my cum running down your chin," <<$npcdesc>> smirks.
          scene.text(`"You're cute with my cum running down your chin," ${((s as any).npcdesc || '')} smirks.`);
        }
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalCpFeltGreat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] !== 1) {
    scene.actions([
      { label: 'That felt great', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
      if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
        if (((s as any).sex_ev ?? 0)?.['came_together'] === 1  ||  ((s as any).sex_ev ?? 0)?.['came_together'] === 3) {
          scene.text('"That felt great," you pant, aftershocks of your orgasm still shivering through you, enjoying the feeling of cum dribbling from your asshole.');
          // TODO-QSP: dynamic text: <<$npcdesc>> just smiles tiredly back at you.
          scene.text(`${((s as any).npcdesc || '')} just smiles tiredly back at you.`);
        } else {
          scene.text('"That was..." you pant, aftershocks of your orgasm still shivering through you, cum dribbling from your asshole. "Did we... together...?"');
          scene.text('"Yeah..." he breathes back.');
          scene.text('"I thought so," you smile. "That was incredible..."');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
          // TODO-QSP: dynamic text: "That felt great," you smile, beaming at <<$npcdesc>>.
          scene.text(`"That felt great," you smile, beaming at ${((s as any).npcdesc || '')}.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_together_fake'] === 1) {
            scene.text('"That was..." you pant, dramatically feigning post-orgasm shakes, letting the cum dribble from your asshole. "I could... feel you... -<i>gasp</i>- inside me..."');
          } else {
            scene.text('"That was amazing," you gush, enjoying the feeling of cum dribbling from your asshole. "I could <i>feel</i> you coming inside me. It felt so good!"');
          }
          // TODO-QSP: dynamic text: <<$npcdesc>> just smiles tiredly back at you.
          scene.text(`${((s as any).npcdesc || '')} just smiles tiredly back at you.`);
        }
      }
    } else {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
      if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
        if (((s as any).sex_ev ?? 0)?.['came_together'] === 1  ||  ((s as any).sex_ev ?? 0)?.['came_together'] === 3) {
          // TODO-QSP: dynamic text: "It felt good," you pant, aftershocks of your orgasm still shivering through you...
          scene.text(`"It felt good," you pant, aftershocks of your orgasm still shivering through you, enjoying the feeling of both ${((s as any).npcdesc || '')}'s cum and his cock filling your asshole.`);
          scene.text('"Yeah?" he pants back.');
          scene.text('"Yeah... Really really good..."');
          // TODO-QSP: dynamic text: <<$npcdesc>> just smiles tiredly back at you.
          scene.text(`${((s as any).npcdesc || '')} just smiles tiredly back at you.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_together_fake'] === 1) {
            // TODO-QSP: dynamic text: "That was..." you pant, aftershocks of your faked orgasm still shivering through...
            scene.text(`"That was..." you pant, aftershocks of your faked orgasm still shivering through you, randomly tightening your cum-filled asshole around ${((s as any).npcdesc || '')}'s cock. "Did we... together...?"`);
            scene.text('"Yeah..." he breathes back.');
            scene.text('"I thought so," you smile. "I could feel it inside me. It was <i>amazing</i>..."');
          } else {
            scene.text('"That was..." you pant, aftershocks of your orgasm still shivering through you. "I just... Did you... did we... together...?"');
            scene.text('"Yeah..." he breathes back.');
            scene.text('"I thought so," you smile. "I could feel you inside me. It was <i>amazing</i>..."');
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
          // TODO-QSP: dynamic text: "That felt great," you smile, beaming at <<$npcdesc>>, squeezing him with your a...
          scene.text(`"That felt great," you smile, beaming at ${((s as any).npcdesc || '')}, squeezing him with your asshole.`);
        } else {
          // TODO-QSP: dynamic text: "That was great," you grin, gently flexing your asshole around <<$npcdesc>>'s co...
          scene.text(`"That was great," you grin, gently flexing your asshole around ${((s as any).npcdesc || '')}'s cock, still stuffed inside you with all of his cum. "I could <i>feel</i> when you came inside me. It felt so good!"`);
        }
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalCpFull(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I feel full', handler: (st: GameState) => {
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/doggy/1.jpg"...
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.text('"I feel... <i>full</i>..." you gulp, shivering with orgasmic aftershocks and marveling at the warmth you feel inside your intestines.');
      } else {
        scene.text('"I feel... <i>full</i>..." you gulp, shivering with orgasmic aftershocks and savouring the warmth as much as you can, even as it dribbles from your puckered hole.');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.text('"I feel... <i>full</i>..." you murmur, marvelling at the warmth you feel inside your intestines.');
      } else {
        scene.text('"I feel... <i>full</i>..." you murmur, savouring the warmth as much as you can even as it dribbles from your puckered hole.');
      }
    }
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterLoveAnalCreampies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_creampie'] !== 1) {
    if (((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([
        { label: 'I love it when you come inside', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/doggy/1.jpg"...
    if (((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
        scene.text('"I love it when you come inside my ass," you smile, shivering with orgasmic aftershocks.');
      } else {
        scene.text('"I love it when you come inside my ass," you smile.');
      }
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === 'anal') {
        scene.text('"I love coming inside your ass," he smiles back.');
      } else {
        scene.text('"I know," he smirks back.');
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I love anal creampies', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/doggy/1.jpg"...
    ((s as any).npc_know_love_analcreampie = (s as any).npc_know_love_analcreampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"I love it when guys come inside my ass," you sigh contently, still giddy from your orgasm. "It always makes me come too."');
    } else {
      scene.text('"I love it when guys come inside my ass," you sigh contently. "Something about it just turns me on so much."');
    }
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === 'anal') {
      // TODO-QSP: $pc_cum_pref_know[$npcID] = $npc_cum_pref[$npcID]
      scene.text('"Coming inside a girl\'s ass is always the best," he says, looking at you. "We must be made to match."');
      scene.text('"Must be," you say back, giving him a smile.');
    } else {
      scene.text('"Maybe I should come inside your ass more often then."');
      scene.text('"Yes," you nod, smiling. "You definitely should."');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCantPregnant(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Good thing you can\'t get pregnant', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
      // TODO-QSP: dynamic text: "It's a good thing I can't get pregnant from anal," you grin back at <<$npcdesc>...
      scene.text(`"It's a good thing I can't get pregnant from anal," you grin back at ${((s as any).npcdesc || '')}, his cock still stuffed up your ass.`);
    } else {
      scene.img('images/shared/sex/cum/analcreampie/doggy_drip1.mp4');
      // TODO-QSP: dynamic text: "It's a good thing I can't get pregnant from anal," you grin back at <<$npcdesc>...
      scene.text(`"It's a good thing I can't get pregnant from anal," you grin back at ${((s as any).npcdesc || '')} as his cum dribbles from your back hole.`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterFirstAnalCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_acp_known ?? 0) === 1) {
    if (((s as any).stat ?? 0)?.['anal'] > 1) {
      scene.actions([
        { label: '"You\'re my first anal creampie"', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
    } else {
      scene.img('images/shared/sex/vag/doggy/smile1.jpg');
    }
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('"Hey, can I tell you something?" you ask, breathing hard after your orgasm.');
    } else {
      // TODO-QSP: dynamic text: "Hey, can I tell you something?" you ask, giving <<$npcdesc>> a look.
      scene.text(`"Hey, can I tell you something?" you ask, giving ${((s as any).npcdesc || '')} a look.`);
    }
    scene.text('"Sure," he says. "What is it?"');
    scene.text('"I\'ve never let a guy come in my ass before," you smile back warmly. "You\'re the first."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalDidYouComeInside(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Did you just come inside me?', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['just_cum_inside_me'] = 1;
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 3;
    }
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/cum/analcreampie/doggy_drip1.mp4');
      scene.text('"Did you just come inside my ass?" you ask somewhat rhetorically as you feel thick liquid dribble from your asshole.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] > 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.text('"Did you just come inside me?" you ask. "<i>Again?</i>"');
      } else {
        scene.text('"Did you just come inside me?" you ask.');
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_warn'] === 1  &&  ((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
      // TODO-QSP: dynamic text: "I was trying to tell you," <<$npcdesc>> pants, breathing hard. "I was going to ...
      scene.text(`"I was trying to tell you," ${((s as any).npcdesc || '')} pants, breathing hard. "I was going to come... But you weren't listening..."`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] > 0) {
        scene.text('"Yeah. You squeezed it right out of me," he says with a satisfied sigh.');
      } else {
        if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
          scene.text('"Yeah," he sighs beatifically.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
            scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
          } else {
            scene.text('"Yeah," he sighs beatifically.');
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
      scene.actions([
        { label: 'That explains it', handler: (st: GameState) => {
    scene.text('"Ah. That explains it, " you say, now being able to recognize the warmth inside you as his cum.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'Just checking', handler: (st: GameState) => {
    scene.text('"Oh okay," you hum. "Just checking."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'That felt good', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.text('"That felt <i>good</i>," you moan, shivering around the cock still stuffing your back hole.');
    } else {
      scene.text('"That felt <i>good</i>," you moan, shivering as another glob leaks from your puckered hole.');
    }
    // TODO-QSP: dynamic text: "Can't say I disagree," <<$npcdesc>> pants back.
    scene.text(`"Can't say I disagree," ${((s as any).npcdesc || '')} pants back.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSwallowReact1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['swallow'] === 1  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  &&  ((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
      // TODO-QSP: dynamic text: "I love watching you swallow," <<$npcdesc>> says, looking at you with blissful s...
      scene.text(`"I love watching you swallow," ${((s as any).npcdesc || '')} says, looking at you with blissful satisfaction. `);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpitQuit(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'You think it\'s hot?', handler: (st: GameState) => {
    // TODO-QSP: $pc_cum_pref_know[$npcID] = $npc_cum_pref[$npcID]
    scene.text('"Yeah?" you ask, licking your lips. "You think it\'s hot?"');
    scene.text('"The hottest thing a girl can do. Even better than coming inside."');
    scene.actions([
      { label: 'Good to know', handler: (st: GameState) => {
    scene.text('"Good to know," you smirk.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'It makes me feel hot', handler: (st: GameState) => {
    scene.text('"It makes me feel hot," you smile. "It makes me feel like a sex goddess."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'It makes me wet', handler: (st: GameState) => {
    ((s as any).npc_know_love_swallow = (s as any).npc_know_love_swallow ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I love swallowing," you smile. "Something about it just turns me on..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'I\'ll keep it in mind', handler: (st: GameState) => {
    scene.text('"I\'ll keep that in mind..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  &&  ((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)]) {
        // TODO-QSP: dynamic text: "You're so hot when you swallow my load like that," <<$npcdesc>> smiles at you.
        scene.text(`"You're so hot when you swallow my load like that," ${((s as any).npcdesc || '')} smiles at you.`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSwallowForYou(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: "Wow..." <<$npcdesc>> says, looking at you impressed.
        scene.text(`"Wow..." ${((s as any).npcdesc || '')} says, looking at you impressed.`);
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSwallowNotForYou(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpitQuit(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTasty(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSwallowForYou(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['swallow'] === 1  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
    scene.actions([
      { label: 'I do it for you', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/kiss_cock.mp4');
    scene.text('"I know how much you love it," you smile, giving his cock a quick kiss.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSwallowNotForYou(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['swallow'] === 1  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
    scene.actions([
      { label: 'I\'m not doing it for you (I like it)', handler: (st: GameState) => {
    scene.text('"It\'s not like I\'m doing it for you," you smirk. "I like it."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSpitQuit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['swallow'] === 1  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
    scene.actions([
      { label: 'Spitting is quitting', handler: (st: GameState) => {
    scene.text('"Spitting is quitting," you smile, giving him a no-big-deal shrug.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumBadTaste(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['swallow'] === 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
    scene.actions([
      { label: 'You taste good', handler: (st: GameState) => {
    scene.text('"Spitting is quitting," you smile, giving him a no-big-deal shrug.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'You should eat more fruit', handler: (st: GameState) => {
    scene.text('"Spitting is quitting," you smile, giving him a no-big-deal shrug.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter69React(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === '69') {
    scene.text('placeholder');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFacialSmileImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_haircolor ?? 0) === 'black') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['facial_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/cum/facial/smile_black1.jpg"></center>';
  } else {
    if (((s as any).pcs_haircolor ?? 0) === 'brown') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['facial_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/cum/facial/smile_brown1.jpg"></center>';
    } else {
      if (((s as any).pcs_haircolor ?? 0) === 'red') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['facial_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/cum/facial/smile_red1.jpg"></center>';
      } else {
        if (((s as any).pcs_haircolor ?? 0) === 'blonde') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['facial_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/cum/facial/smile_blonde1.jpg"></center>';
        } else {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['facial_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/cum/facial/smile_brown1.jpg"></center>';
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFacialReactions(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialHappyReacts(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterFacialHappyReacts(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).sex_ev ?? 0)?.['last_cum'] === 'facial'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth')) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialSmileImg(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).sex_ev ?? 0)?.['last_cum'] !== 'face_mouth'  &&  ((s as any).npc_know_love_facials ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.actions([
        { label: 'Do guys really like this?', handler: (st: GameState) => {
    scene.actions([
      { label: 'Annoyed', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial38.jpg');
    scene.text('"Ugh! Do guys really like doing this that much?" you say, grimacing at the spunk sliming your face.');
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial') {
      // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> smiles back. "You have no idea how hot it is, seeing you wi...
      scene.text(`"Yeah," ${((s as any).npcdesc || '')} smiles back. "You have no idea how hot it is, seeing you with my cum all over your face."`);
      scene.text('"<i>Fucking</i> gross," you spit around the cum all over your lips.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['facial_ask'] === 1) {
        // TODO-QSP: dynamic text: "You're the one who asked me to do it," <<$npcdesc>> says bemusedly.
        scene.text(`"You're the one who asked me to do it," ${((s as any).npcdesc || '')} says bemusedly.`);
        if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
          scene.text('"Only because I didn\'t want you finishing inside me," you reply, sputtering around the cum coating your lips.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1) {
            scene.text('"Only because I didn\'t want it in my mouth," you reply, sputtering around the cum coating your lips.');
          } else {
            if (((s as any).sex_ev ?? 0)?.['he_ask_tits'] === 1) {
              scene.text('"Only because I didn\'t want it all over my tits," you reply, sputtering around the cum coating your lips.');
            } else {
              scene.text('"It was the best worst option," you reply, sputtering around the cum coating your lips.');
            }
          }
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          // TODO-QSP: dynamic text: "I guess," <<$npcdesc>> shrugs. "Most guys seem to be into it."
          scene.text(`"I guess," ${((s as any).npcdesc || '')} shrugs. "Most guys seem to be into it."`);
          scene.text('"Well I\'m <i>not</i>," you sputter in disgust.');
        } else {
          // TODO-QSP: dynamic text: "I don't really get it myself," <<$npcdesc>> shrugs. "But a lot of girls seem to...
          scene.text(`"I don't really get it myself," ${((s as any).npcdesc || '')} shrugs. "But a lot of girls seem to be into it so I thought you might be."`);
          scene.text('"Well I\'m <i>not</i>," you sputter in disgust.');
          scene.text('"Guess I\'ll try to keep that in mind," he says, giving you a wry smile.');
          ((s as any).npc_know_hate_facials = (s as any).npc_know_hate_facials ?? {})[String((s as any).npcID ?? 0)] = 1;
        }
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Amused', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial36.jpg');
    // TODO-QSP: dynamic text: "Do guys really like doing this?" you say, giggling around the strands of <<$npc...
    scene.text(`"Do guys really like doing this?" you say, giggling around the strands of ${((s as any).npcdesc || '')}'s thick spunk coating your face.`);
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial') {
      // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> smiles back. "You have no idea how hot it is, seeing you wi...
      scene.text(`"Yeah," ${((s as any).npcdesc || '')} smiles back. "You have no idea how hot it is, seeing you with my cum all over your face."`);
      scene.text('"You\'re weird," you giggle some more, making his cum dribble down your cheeks.');
    } else {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        // TODO-QSP: dynamic text: "I guess," <<$npcdesc>> shrugs. "Most guys seem to be into it. Can't really expl...
        scene.text(`"I guess," ${((s as any).npcdesc || '')} shrugs. "Most guys seem to be into it. Can't really explain it though."`);
        scene.text('"I wonder why..." you muse amusedly.');
      } else {
        // TODO-QSP: dynamic text: "I don't really get it myself," <<$npcdesc>> shrugs. "But a lot of girls seem to...
        scene.text(`"I don't really get it myself," ${((s as any).npcdesc || '')} shrugs. "But a lot of girls seem to be into it so I thought you might be."`);
        scene.text('"Oh, so you did this for me?" you ask with a wry smirk.');
        scene.text('"Uhh..."');
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Curious', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial37.jpg');
    // TODO-QSP: dynamic text: "Do guys really like doing this?" you ask with genuine curiosity, popping an eye...
    scene.text(`"Do guys really like doing this?" you ask with genuine curiosity, popping an eyebrow to look at ${((s as any).npcdesc || '')} through the cum glazing your face.`);
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial') {
      // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> smiles back. "You have no idea how hot it is, seeing you wi...
      scene.text(`"Yeah," ${((s as any).npcdesc || '')} smiles back. "You have no idea how hot it is, seeing you with my cum all over your face."`);
      scene.text('"Hmm... I wonder why..." you smirk amusedly at him as it starts to dribble down your cheeks.');
    } else {
      // TODO-QSP: dynamic text: "I guess," <<$npcdesc>> shrugs. "Most guys seem to be into it. Can't really expl...
      scene.text(`"I guess," ${((s as any).npcdesc || '')} shrugs. "Most guys seem to be into it. Can't really explain it though."`);
      scene.text('"I wonder why..." you muse as it starts to dribble down your cheeks.');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).cum_loc ?? 0)?.['hair'] > 0) {
      scene.actions([
        { label: 'Got in my hair (annoyed)', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    scene.text('"Ugh," you wince, spitting some of the cum away from your lips in irritation. "Did you have to get it my hair?"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Got in my hair (amused)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['facial_pic']
    scene.text('"Did you have to get it in my hair?" you giggle, more amused than annoyed with the situation.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'How do I look?', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
    // TODO-QSP: $sex_ev['facial_pic']
    scene.text('"So, how do I look?" you ask, with a cum glazed smile.');
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 2) + 0) === 1) {
      // TODO-QSP: dynamic text: "Like a walking cumdumpster," <<$npcdesc>> snickers.
      scene.text(`"Like a walking cumdumpster," ${((s as any).npcdesc || '')} snickers.`);
      scene.actions([
        { label: 'Offended', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['mad'] = 1;
    scene.text('You blink, smile fading to a shocked gasp, taken aback by his hurtful words.');
    scene.text('"What the fuck is your problem?" you ask.');
    scene.text('"You asked me how you look," he shrugs. "I told you."');
    qspCall(s, 'sex_ev_after', 'quit');
    scene.actions([
      { label: 'Let it go', handler: (st: GameState) => {
    scene.text('You keep your retort to yourself, deciding the best way to handle this is just to move past it.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Be nice to me', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text('"Some manners you have," you scowl. "Do you treat every girl you fuck like this?"');
    } else {
      scene.text('"Some manners you have," you scowl. "Do you treat every girl who blows you like this?"');
    }
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('"No," he says. "Just the whores."');
    } else {
      scene.text('"No," he says. "Just the slutty ones."');
    }
    qspCall(s, 'sex_ev_after', 'quit');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLetItGo(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'He has a point', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Well," you say, letting the smile creep back onto your face. "I guess you\'re not wrong about what kind of girl I am..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Thank you', handler: (st: GameState) => {
    scene.text('"Aww! Thank you!" you giggle."That\'s the look I was going for!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial') {
        // TODO-QSP: dynamic text: "Fucking hot," <<$npcdesc>> says without hesitation.
        scene.text(`"Fucking hot," ${((s as any).npcdesc || '')} says without hesitation.`);
        qspCall(s, 'sex_ev_sex', 'sex_end');
      } else {
        // TODO-QSP: dynamic text: "Pretty good," <<$npcdesc>> snickers.
        scene.text(`"Pretty good," ${((s as any).npcdesc || '')} snickers.`);
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
      { label: 'It\'s so warm', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['facial_pic']
    // TODO-QSP: dynamic text: "It's so warm..." you muse, <<$npcdesc>>'s sperm dribbling slowly down your chee...
    scene.text(`"It's so warm..." you muse, ${((s as any).npcdesc || '')}'s sperm dribbling slowly down your cheeks.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Disgusting', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['disgusting_facial'] = 1;
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    if (((s as any).npc_facial_count ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).sex_ev ?? 0)?.['facial_count'] === 1) {
      scene.text('"Ugh, disgusting!" you groan, spitting the vile viscous fluid away from your lips. "It\'s like getting sneezed on! Why did I let you do this?"');
    } else {
      scene.text('"Ugh, disgusting!" you groan, spitting the vile viscous fluid away from your lips. "It\'s like getting sneezed on! Why do I let you do this?"');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  qspCall(s, 'sex_ev_reactions', 'ruined_makeup');
  // TODO-QSP: end
  scene.build();
}

function enterCumTasty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1  &&  (((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'mouth')) {
    scene.actions([
      { label: 'Tasty', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['tasty_cum'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Mmmm," you lick your lips, catching some of the stray shots of cum that still coat your face. "You taste good."');
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
      scene.text('"You\'re so fucking hot. I love watching you swallow like that."');
      scene.actions([
        { label: 'You love it', handler: (st: GameState) => {
    scene.text('"Can\'t help it," you grin. "I <i>love</i> the taste of your cum."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      scene.text('"You really like cum that much?"');
      scene.actions([
        { label: 'Acquired taste', handler: (st: GameState) => {
    scene.text('"Once I got used to it," you grin. "It was an acquired taste."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'You love it', handler: (st: GameState) => {
    scene.text('"I <i>love</i> it," you grin.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWhyLikeSwallowing(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Why do guys like girls who swallow?', handler: (st: GameState) => {
    scene.actions([
      { label: 'Amused', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "What is it that guys like so much about watching a girl swallow cum?" you ask, ...
    scene.text(`"What is it that guys like so much about watching a girl swallow cum?" you ask, an amused smirk on your lips to go with ${((s as any).npcdesc || '')}'s cum.`);
  } },
      { label: 'Annoyed', handler: (st: GameState) => {
    scene.text('"Ugh," you ');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWhyLikeSwallowing2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterFacialRuinedMakeup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_makeup ?? 0) !== ((s as any).sex_ev ?? 0)?.['starting_makeup']  &&  ((s as any).sex_ev ?? 0)?.['ruin_makeup'] !== 1) {
    if ((((s as any).sex_ev ?? 0)?.['last_cum'] === 'facial'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth')) {
      scene.actions([
        { label: 'You ruined my makeup (joke)', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['ruin_makeup'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    scene.text('"Look what you\'ve done," you say in a mock stern tone, smiling through the cum coating your face. "You\'ve fucked up my makeup. Now what am I supposed to do?"');
    scene.text('"You could always go out like that," he snickers.');
    scene.text('"I bet you\'d like that," you giggle.');
    qspCall(s, 'sex_ev_after', 'wipe_face');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['ruin_makeup'] !== 1) {
        scene.actions([
          { label: 'You ruined my makeup (joke)', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['ruin_makeup'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Looking down at the sheets, you notice dark streaks across them. You wipe the corners of your eyes and find smears of black on your fingers.');
    scene.text('"Holy shit!" you exclaim. "I think you fucked me so hard you ruined my makeup! Now what am I supposed to do?"');
    scene.text('"You could always go out like that," he snickers.');
    scene.text('"So <i>everyone</i> can see how hard you fucked me?" you giggle.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumTitsReact1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'tits') {
    qspCall(s, 'sex_ev_cum', 'cum_tits_mess');
    scene.actions([
      { label: 'Gross', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['tit_cum_gross'] = 1;
    scene.img('images/shared/sex/cum/chest/2.jpg');
    scene.text('You grimace at the sensation of slimy white cum all over your chest.');
    scene.text('"I don\'t know what you like about this," you say, crinkling your nose. "But this is gross as hell."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Warm', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/chest/2.jpg');
    scene.text('The cum on your tits is hot against your skin and the heat spreads through the rest of your chest, filling you with pleasure and arousal.');
    scene.text('"Mmm..." you smile. "Warm..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumTitsMess(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'What a mess', handler: (st: GameState) => {
    scene.actions([
      { label: 'Amused', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/chest/2.jpg');
    scene.text('"What a mess," you giggle, finding something strangely funny about the cum glazed all over your tits.');
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      // TODO-QSP: dynamic text: "Maybe I should've come inside you instead," <<$npcdesc>> says.
      scene.text(`"Maybe I should've come inside you instead," ${((s as any).npcdesc || '')} says.`);
      if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
        scene.actions([
          { label: 'Dangerous', handler: (st: GameState) => {
    scene.text('"Sounds dangerous," you reply, mouth twisted in a smirk.');
    if (((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"But isn\'t danger fun?" he grins back.');
    } else {
      scene.text('"Yeah..."');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
      if (((s as any).sex_ev ?? 0)?.['tits_ask'] !== 1) {
        scene.actions([
          { label: 'Why didn\'t you?', handler: (st: GameState) => {
    // TODO-QSP: '"Why didn''t you?" you ask. ' + iif(npc_know_love_creampie[$npcID] = 1, '"You know I love it when y...
    scene.text('"Change of pace," he grins. "Gotta do other stuff to appreciate what\'s good."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
      scene.actions([
        { label: 'Wasn\'t complaining', handler: (st: GameState) => {
    scene.text('"I wasn\'t complaining about it," you smirk back.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Would\'ve been cleaner', handler: (st: GameState) => {
    scene.text('"Yeah, that might have been a little cleaner," you laugh back.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Yeah you should\'ve', handler: (st: GameState) => {
    scene.text('"Yeah," you reply, biting your lip. "That would\'ve been a lot better."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Way to ruin the mood', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('All amusement evaporates from you in an instant and your smile disappears.');
    scene.text('"Way to ruin the mood," you scowl, sighing loudly and turning away from him.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
        // TODO-QSP: dynamic text: "The mess is what makes it hot," <<$npcdesc>> says, his attention totally fixed ...
        scene.text(`"The mess is what makes it hot," ${((s as any).npcdesc || '')} says, his attention totally fixed on taking in the view of your chest.`);
      } else {
        if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text('"Marking my territory," he grins.');
        } else {
          scene.text('"Uh, sorry," he smiles shyly.');
        }
      }
      scene.text('"I wasn\'t complaining," you smirk back.');
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
      { label: 'Annoyed', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/chest/2.jpg');
    scene.text('"Ugh, what a mess," you grimace, looking at the sticky glaze all over your chest.');
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
      // TODO-QSP: dynamic text: "The mess is what makes it hot," <<$npcdesc>> says, his attention totally fixed ...
      scene.text(`"The mess is what makes it hot," ${((s as any).npcdesc || '')} says, his attention totally fixed on taking in the view of your chest.`);
      scene.text('"Maybe for you." You twist your mouth in disgust.');
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Marking my territory," he grins.');
        scene.actions([
          { label: 'Find some other way', handler: (st: GameState) => {
    scene.text('"Couldn\'t you find some other way to do it?" you complain, twisting your mouth in disgust.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'Find some other way (facial)', handler: (st: GameState) => {
    scene.text('"Couldn\'t you do it on my face instead?" you complain. "At least that\'s hot."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        scene.text('"Uh, sorry," he smiles shyly and you roll your eyes.');
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLetItGo(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let it go', handler: (st: GameState) => {
    scene.text('You keep your retort to yourself, deciding the best way to handle this is just to move past it.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCumKissCock(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'facial'  ||  ((s as any).sex_ev ?? 0)?.['cum_choice'] === 'face_mouth'  ||  ((s as any).sex_ev ?? 0)?.['cum_choice'] === 'mouth') {
    scene.actions([
      { label: 'Kiss his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/kiss_cock.mp4');
    // TODO-QSP: dynamic text: Feeling cheeky, you lean in to give <<$npcdesc>> a cute little kiss, right on th...
    scene.text(`Feeling cheeky, you lean in to give ${((s as any).npcdesc || '')} a cute little kiss, right on the tip of his cock.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoCumInsidePic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/back1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
        }
      }
    }
  } else {
    // TODO-QSP: $sex_ev['bed_room']
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoCumInside(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] !== 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    if (((s as any).birth_control ?? 0)?.['think_safe'] < 1) {
      if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.actions([
          { label: 'Not on birth control', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCumInsidePic(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
    // TODO-QSP: dynamic text: "Sorry. I can't let you come inside me," you say, <<$sex_ev['cum_describe2']>>. ...
    scene.text(`"Sorry. I can't let you come inside me," you say, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "I'm not on birth control."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.actions([
            { label: 'You know I\'m not on birth control', handler: (st: GameState) => {
    scene.actions([
      { label: '(Apologetic)', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCumInsidePic(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "I'm sorry," you say wistfully, <<$sex_ev['cum_describe2']>>. "I know how much y...
    scene.text(`"I'm sorry," you say wistfully, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "I know how much you want to finish inside me, but I'm still not on birth control."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: '(Annoyed)', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCumInsidePic(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "Dumbass!" you scowl, <<$sex_ev['cum_describe2']>>. "You know I'm not on birth c...
    scene.text(`"Dumbass!" you scowl, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "You know I'm not on birth control!"`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
          ]);
        }
      }
      if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'  ||  ((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
        scene.actions([
          { label: 'Danger day', handler: (st: GameState) => {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'danger';
      scene.actions([
        { label: '(Apologetic)', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCumInsidePic(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "I'm sorry," you say wistfully, <<$sex_ev['cum_describe2']>>. "I know how much y...
    scene.text(`"I'm sorry," you say wistfully, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "I know how much you want to finish inside me, but it's a danger day. I'll get pregnant."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      scene.actions([
        { label: '(Annoyed)', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCumInsidePic(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "Dumbass!" you scowl, <<$sex_ev['cum_describe2']>>. "I told you it's a danger da...
    scene.text(`"Dumbass!" you scowl, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "I told you it's a danger day for me! Are you <i>trying</i> to get me pregnant?!"`);
    scene.text('"Sorry," he says sheepishly. "I forgot."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Sorry, no creampies', handler: (st: GameState) => {
    scene.actions([
      { label: 'Too intimate', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "<<$sex_ev['cum_describe1']>>" you say, <<$sex_ev['cum_describe2']>>. "I don't l...
    scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_describe1'] ?? ''}" you say, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "I don't like being creampied. Feels too intimate."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Feels weird', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "<<$sex_ev['cum_describe1']>> you say, <<$sex_ev['cum_describe2']>>. "I don't li...
    scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_describe1'] ?? ''} you say, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "I don't like being creampied. Feels too weird."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Too messy', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "<<$sex_ev['cum_describe1']>> you say, <<$sex_ev['cum_describe2']>>. "I don't li...
    scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_describe1'] ?? ''} you say, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "I don't like being creampied. Too messy."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'I don\'t like you enough for that', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry," you say, <<$sex_ev['cum_describe2']>>. "I don't like you enough to let ...
    scene.text(`"Sorry," you say, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "I don't like you enough to let you do that yet."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Only my boyfriend is allowed to come inside me', handler: (st: GameState) => {
    if (((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Hey," you frown at him. "You know my rule about coming inside. You\'re not my boyfriend."');
      if (((s as any).pcs_lover ?? 0) > ((s as any).pcs_girlfriends ?? 0)  &&  ((s as any).pcs_lover ?? 0) > 0  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
        scene.text('"So you can cheat on your boyfriend, but I can\'t come inside you?"');
        ((s as any).npc_know_cheat = (s as any).npc_know_cheat ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.actions([
          { label: 'Yup', handler: (st: GameState) => {
    scene.text('"Yup, that\'s exactly right," you smirk.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'It\'s only cheating if you come inside', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule = (s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 2;
    scene.text('"That\'s exactly why I can\'t let you do that," you wink. "It\'s not cheating if you don\'t come inside."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    } else {
      ((s as any).npc_boyfriend_creampie_rule = (s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 1;
      scene.text('"Sorry," you smile ruefully. "Only my boyfriend is allowed to come inside me."');
      scene.text('"So you can cheat on your boyfriend, but I can\'t come inside you?"');
      if (((s as any).pcs_lover ?? 0) > ((s as any).pcs_girlfriends ?? 0)  &&  ((s as any).pcs_lover ?? 0) > 0  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
        ((s as any).npc_know_cheat = (s as any).npc_know_cheat ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.actions([
          { label: 'Yup', handler: (st: GameState) => {
    scene.text('"Yup, that\'s exactly right," you smirk.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'It\'s my rule', handler: (st: GameState) => {
    scene.text('"That\'s just how my rules work," you smirk. "Privilege for boyfriends only."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'It\'s only cheating if you come inside', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule = (s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 2;
    scene.text('"That\'s exactly why I can\'t let you do that," you wink. "It\'s not cheating if you don\'t come inside."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        scene.text('"I\'m not cheating on anybody," you explain. "You\'re just not my boyfriend. It\'s a reserved seat."');
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoTitsCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'tits'  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] !== 'tits') {
    scene.actions([
      { label: 'Don\'t cum on my tits', handler: (st: GameState) => {
    scene.actions([
      { label: 'That\'s gross', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Ewww," you grimace, <<$sex_ev['cum_describe2']>>. "Why do you even want to do t...
    scene.text(`"Ewww," you grimace, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "Why do you even want to do that? This isn't a porno you know."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Too much mess', handler: (st: GameState) => {
    scene.text('"Too much mess"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoFacial(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'facial'  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] !== 'facial'  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] !== 'face_mouth') {
    scene.actions([
      { label: 'Don\'t cum on my face', handler: (st: GameState) => {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      scene.actions([
        { label: 'It\'ll ruin my makeup', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['makeup_ruin'] = 1;
    scene.text('"I\'m not letting your ruin my makeup."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'That\'s gross', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Ewww," you grimace, <<$sex_ev['cum_describe2']>>. "Like I'd ever want to do <i>...
    scene.text(`"Ewww," you grimace, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "Like I'd ever want to do <i>that</i>. This isn't a porno you know." You shudder.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Too much mess', handler: (st: GameState) => {
    scene.text('"Too much mess"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumMouthGross(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'mouth'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'spit') {
    scene.actions([
      { label: 'Not your favourite flavour', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "That's not my favourite flavour," you say, licking your lips as you give <<$npc...
    scene.text(`"That's not my favourite flavour," you say, licking your lips as you give ${((s as any).npcdesc || '')} a wry look.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoMouthCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] !== 'swallow'  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] !== 'mouth'  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] !== 'face_mouth'  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] !== 'spit') {
    scene.actions([
      { label: 'Don\'t come in my mouth', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['last_cum'] !== 'spit') {
      scene.actions([
        { label: 'Swallowing is gross', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'facial') {
      scene.text('"Because you asked to come in my mouth," you grimace, blinking the cum away from your eyes. "This is gross enough on my face, I <i>don\'t</i> want to taste it."');
    } else {
      // TODO-QSP: dynamic text: "Ewww," you grimace, <<$sex_ev['cum_describe2']>>. "Like I'd ever want <i>this</...
      scene.text(`"Ewww," you grimace, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "Like I'd ever want <i>this</i> in my mouth." You shudder.`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'I don\'t like the taste', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry," you smile, <<$sex_ev['cum_describe2']>>. "I'm really not a fan of the t...
    scene.text(`"Sorry," you smile, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "I'm really not a fan of the taste of cum."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'I don\'t like you enough for that', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry," you smirk apologetically, <<$sex_ev['cum_describe2']>>. "I don't like y...
    scene.text(`"Sorry," you smirk apologetically, ${((s as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "I don't like you enough to let you do that yet."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjWarningThanks(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Thanks for the warning', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/smile1.jpg');
    if (((s as any).sex_ev ?? 0)?.['swallow'] === 1) {
      scene.text('"Thanks for the warning," you smile, licking your lips.');
      qspCall(s, 'sex_ev_foreplay', 'bj2');
    } else {
      if (((s as any).sex_ev ?? 0)?.['spit'] === 1) {
        scene.text('"Thanks for the warning," you say, cum still dripping from your smile.');
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterBjWarningNextTime(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'A little warning?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['bj_cum'] === 1) {
      if (((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)]=== ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)]) {
        scene.text('"I don\'t mind if you come in my mouth," you say, licking your lips with a smile. "I know how much you love it. But could you at least warn me before you do it?"');
      } else {
        scene.text('"A little warning next time?" you smile, wiping a loose drop of cum from your lip. "I barely had time to swallow."');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['bj_cum'] === 2) {
        if (((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)]=== ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)]) {
          scene.text('"I don\'t mind if you come in my mouth," you smile, wiping your lips. "I know how much you love it. But could you at least warn me before you do it?"');
        } else {
          scene.text('"A little warning next time?" you ask, with a cumglazed smile.');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['bj_cum'] === 3) {
          if (((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)]) {
            scene.text('"I don\'t mind if you come in my mouth," you smile, wiping your lips. "I know how much you love it. But could you at least warn me before you do it?"');
          } else {
            scene.text('"A little warning next time?" you ask, with a cumglazed smile.');
          }
        }
      }
    }
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  &&  ((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
      if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        ((s as any).npc_bj_cum_warn = (s as any).npc_bj_cum_warn ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"Sorry," he smiles back apologetically. "I\'ll try to remember next time. You\'re just so good at this, it\'s hard to hold back."');
        scene.actions([
          { label: 'Thanks', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/kiss_cock.mp4');
    scene.text('"Thanks," you smile, giving him a sweet little kiss on the tip of his cock. "I really appreciate it."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"I think I\'ll do what I want," he smiles back shamelessly. "I love it when a girl swallows my load."');
        } else {
          scene.text('"Sorry. I just love the way you look with my cum in your mouth. Especially when you swallow."');
        }
      }
      scene.actions([
        { label: 'You still have to ask', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/kiss_cock.mp4');
    scene.text('"You. Still. Have. To. Ask!" you tease, punctuating your chastisement with a gentle kiss across his tip.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Really?', handler: (st: GameState) => {
    // TODO-QSP: $pc_cum_pref_know[$npcID] = $npc_cum_pref[$npcID]
    scene.img('images/shared/sex/cum/mouth/smile1.jpg');
    scene.text('"Really?" you ask. "You like it that much?"');
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Yeah."');
    } else {
      scene.text('"Yeah," he admits with a little shrug.');
    }
    scene.actions([
      { label: 'Just warn me next time', handler: (st: GameState) => {
    scene.text('"Well I\'ll keep it in mind. Just try not to drown me next time, okay?" you smile.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Maybe I\'ll let you do it more often', handler: (st: GameState) => {
    scene.text('"Maybe I\'ll let you do it more often going forward," you smirk.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'You still have to ask', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/kiss_cock.mp4');
    scene.text('"You. Still. Have. To. Ask!" you tease, punctuating your chastisement with a gentle kiss across his tip.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['bj_warning'] = 1;
        scene.text('"Sorry," he smiles back apologetically. "I\'ll try to remember next time. Your mouth just felt so good."');
        scene.actions([
          { label: 'Thanks', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/kiss_cock.mp4');
    scene.text('"Thanks," you say, giving him a sweet little kiss on the tip of his cock.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'It\'s okay', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/kiss_cock.mp4');
    scene.text('"It\'s okay," you say, giving him a sweet little kiss on the tip of his cock. "We all make mistakes."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"Nah," he smiles back shamelessly. "I like seeing the surprise on your face."');
        } else {
          scene.text('"Sorry," he grins, not looking sorry at all.');
        }
        scene.text('You roll your eyes, but don\'t otherwise say anything else.');
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
  ]);
  scene.build();
}

function enterBjTasty(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tasty', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['tasty_cum'] = 1;
    // TODO-QSP: dynamic text: "Mmmm. Tasty," you grin at <<$npcdesc>>, licking your lips.
    scene.text(`"Mmmm. Tasty," you grin at ${((s as any).npcdesc || '')}, licking your lips.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterBjAlready(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Already?', handler: (st: GameState) => {
    scene.actions([
      { label: 'Annoyed', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['bj_cum'] === 1) {
      scene.text('"Seriously?" you ask, gulping again as you draw back from his cock. "You came already?"');
    } else {
      if (((s as any).sex_ev ?? 0)?.['bj_cum'] === 2) {
        scene.text('"Seriously?" you ask, wiping your mouth with your hand. "You came already?"');
      }
    }
    scene.text('"Your mouth just felt too good!" he says. "I couldn\'t hold it in!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBjAlready2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Teasing', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['bj_cum'] === 1) {
      scene.text('"Already?" you ask with a teasing smirk, gulping again as you draw back from his cock. "My mouth too much for you to handle?"');
    } else {
      if (((s as any).sex_ev ?? 0)?.['bj_cum'] === 2) {
        scene.text('"Already?" you ask with a teasing smirk and wiping it with your hand. "My mouth too much for you to handle?"');
      }
    }
    scene.text('"I tried to hold back but you sucked it out of me," he grins back.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBjAlready2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjAlready2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish up', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/smile1.jpg');
    scene.text('"Well, I guess I\'m fine ending it here anyways. I <i>assume</i> you\'re good with that."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    { label: 'You better not be done yet', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['not_done'] = 1;
    scene.text('"Well, you better not be done yet, cause I still want more!"');
    qspCall(s, 'sex_ev_sex', 'harden_hand');
    qspCall(s, 'sex_ev_sex', 'harden_mouth');
  } },
  ]);
  scene.build();
}

function enterBjSwallowGross(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Gross', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['mouth_cum_gross'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Ugh, I hate swallowing," you say, finally losing your lips from his cock with a pop and shaking your head, as if that would somehow get rid of the taste.');
    scene.text('"But you did it anyways," he says back, grin widening across his face.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBjSwallowGross2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBjSwallowGross2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  &&  ((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)]=== ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.actions([
      { label: 'Because I know you like it', handler: (st: GameState) => {
    scene.text('"Yeah, cause I know you\'re a pervert who likes watching me drink your nasty cum," you say with a glare. "I\'m generous like that."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Because I like you', handler: (st: GameState) => {
    scene.text('"Because I like you," you say, a look of betrayal on your face. "And I wanted to do something nice for you. And I\'m severely regretting it. I don\'t want to like you anymore, this was a mistake."');
    if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"I\'ll be sure to make it up to you sometime," he smiles back.');
      scene.text('"You better! Cause this is just, <i>ick-!</i>" You fan your mouth, futilely trying to make the taste go away faster.');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Good girl," he grins.');
        scene.text('"Shut up," you glare back, fanning your mouth in a futile attempt to make the taste go away faster.');
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> laughs wholeheartedly as you fan your mouth, futilely trying to mak...
        scene.text(`${((s as any).npcdesc || '')} laughs wholeheartedly as you fan your mouth, futilely trying to make the taste go away.`);
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Cause boys like it', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Cause boys seem to like it," you grimace, airing out your tongue, trying to dissipate the taste. "I don\'t want to be a shitty lay. Sometimes that means doing stuff you don\'t like."');
    // TODO-QSP: dynamic text: "Well it <i>was</i> pretty hot," <<$npcdesc>> grins at you.
    scene.text(`"Well it <i>was</i> pretty hot," ${((s as any).npcdesc || '')} grins at you.`);
    scene.text('"Why?!" you ask. "Why do you idiots with dicks want girls to swallow this vile stuff?"');
    scene.text('He chuckles at you while you continue to gag for a little while longer, trying to get past your disgust.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'mouth') {
    scene.actions([
      { label: 'Because you asked', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Because you asked me to," you say, giving him an accusatory look. "That makes this your fault. <i>Bleeechhh...</i>"');
    // TODO-QSP: dynamic text: <<$npcdesc>> laughs wholeheartedly as you fan your mouth, futilely trying to mak...
    scene.text(`${((s as any).npcdesc || '')} laughs wholeheartedly as you fan your mouth, futilely trying to make the taste go away.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjSpitGross(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Gross', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['mouth_cum_gross'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"<i>Yech</i>," you gag, opening your mouth wide to let the slimy bitter liquid dribble from your tongue. "I hate the taste off this stuff."');
    scene.text('"But you let me come in your mouth anyways," he says back, grin widening across his face.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBjSpitGross2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBjSpitGross2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  &&  ((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)]=== ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.actions([
      { label: 'Compromise', handler: (st: GameState) => {
    scene.text('"Just because I don\'t want to swallow doesn\'t mean I don\'t want you to feel good," you say with a raised eyebrow. "Good sex is all about good compromise, isn\'t it?"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Compromise (I like you)', handler: (st: GameState) => {
    scene.text('"Only cause I happen to like you so much," you half grimace, half smile. "So I\'m willing to compromise a <i>little.</i> But I\'m not gonna swallow for you."');
    if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"I\'ll be sure to make it up to you sometime," he smiles back.');
      scene.text('"You better! Cause this is just, <i>ick-!</i>"');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Would be better if you did," he grins.');
        scene.text('"Shut up," you roll your eyes in return.');
      } else {
        scene.text('He smiles at you, but neither of you say anything else.');
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } else {
    scene.text('"Yeah, cause I know it feels good," you raise an eyebrow back at him. "But that doesn\'t stop it from tasting <b>bad</b>."');
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Good girl," he grins.');
      scene.text('"Shut up," you roll your eyes in return.');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumMouthSwallowWhy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'facial'  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] !== 'face_mouth') {
    scene.actions([
      { label: 'Too much mess', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Too messy," you grimace. "Then I have to clean this vile shit off <i>my face</i>. At least if I swallow it gets rid of all the gross at once."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Too much mess', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Too messy," you wince. "It\'s just cleaner if I swallow it."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'facial') {
    scene.actions([
      { label: 'That\'s even <i>more</i> gross', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"That\'s even <i>more</i> gross," you grimace. "I\'d rather swallow it than get it on me."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Trying to acquire the taste', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I heard you have to get used to the taste," you say, airing out your tongue in disgust.');
    scene.text('"Well you don\'t seem used to it yet. Maybe you should swallow some more?" he smirks.');
    scene.text('"Shut up," you roll your eyes.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCumAlready(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cycle_limit'] <= 2  &&  ((s as any).sex_ev ?? 0)?.['came_together'] < 3  &&  ((s as any).sex_ev ?? 0)?.['did_we_cum_together'] !== 1  &&  (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout')  &&  ((s as any).sex_ev ?? 0)?.['warn'] === 0) {
    scene.actions([
      { label: 'Did you come already?', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
            }
          }
        }
      }
    }
    scene.text('"What was that?" you ask. "Did you come already?"');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('"I lost my concentration," he mumbles sheepishly.');
    } else {
      scene.text('"I couldn\'t hold it all of a sudden," he mumbles sheepishly.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterQuickshotTease1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterQuickshotTease1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cycle_limit'] <= 3) {
    scene.actions([
      { label: 'Tease him', handler: (st: GameState) => {
    scene.actions([
      { label: '(Affectionately)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/smile1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
            }
          }
        }
      } else {
        scene.img('images/shared/sex/after/pillow_talk2.jpg');
      }
    }
    // TODO-QSP: dynamic text: "Quickshot," you smile, teasingly sticking your tongue out through your teeth. <...
    scene.text(`"Quickshot," you smile, teasingly sticking your tongue out through your teeth. ${((s as any).npcdesc || '')} blushes but can't help smiling back.`);
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      qspCall(s, 'sex_ev_cum', 'what_now');
    }
  } },
      { label: '(Insulting)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/smile1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/cum/bellycum2.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/after/pillow_talk3.jpg');
            }
          }
        }
      } else {
        scene.img('images/shared/sex/after/pillow_talk3.jpg');
      }
    }
    // TODO-QSP: dynamic text: "Guess you're just another two pump chump, huh?" you sigh, causing <<$npcdesc>> ...
    scene.text(`"Guess you're just another two pump chump, huh?" you sigh, causing ${((s as any).npcdesc || '')} to flush with irritation.`);
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      qspCall(s, 'sex_ev_cum', 'what_now');
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter2pumpSmile(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      scene.img('images/shared/sex/cum/condom1.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        qspCall(s, 'sex_ev_reactions_creampie', 'creampie_pull_out_image');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/4.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/smile1.jpg');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter2pumpIrate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      scene.img('images/shared/sex/cum/condom1.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        qspCall(s, 'sex_ev_reactions_creampie', 'creampie_pull_out_image');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/shock1.jpg');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/3.jpg');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter2pumpReact(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_wtf_instant');
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_accident_oh_shit');
  qspCall(s, 'sex_ev_reactions_creampie', 'idk_you_panic_instant');
  qspCall(s, 'sex_ev_reactions_creampie', 'did_you_come_inside');
  // TODO-QSP: end
  scene.actions([
    { label: 'That was fast', handler: (st: GameState) => {
    scene.text('"Did you just come...?" you ask.');
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0))) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpReactAwkward(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpReactSelfish(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Already? Seriously?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpIrate(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"Are you kidding me?" you huff. "You came? Already?!"');
      scene.text('He grimaces, clearly embarrassed and your comment not helping.');
    } else {
      scene.text('"Ugh, can you at least go five minutes without busting your nut?" you huff in irritation.');
      scene.text('He grimaces, clearly embarrassed and your comment not helping.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpReact2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enter2pumpReactAwkward(s: GameState, scene: SceneBuilder): void {
  scene.text('"S-sorry..." he says, blush deepening.');
  if (((s as any).stat ?? 0)?.['men_fucked'] > 0) {
    scene.actions([
      { label: 'Used to it (nice)', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpSmile(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"Don\'t worry," you smirk. "Guys do this all the time."');
      scene.text('"Maybe with some other guys," he says, clearly embarrassed. "It\'s... kind of a regular thing with me..."');
      scene.text('"Well, then I guess we\'re both used to it then," you grin.');
    } else {
      scene.text('"Don\'t worry," you smile reassuringly. "I\'m used to this."');
      scene.text('"Doesn\'t mean I\'m not embarrassed..."');
      scene.text('"Don\'t be. It\'s just who you are."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpReact2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Play it off', handler: (st: GameState) => {
    if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpSmile(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.text('"Oh damn!" you say, shaking your fist in mock anger. "My pussy is just too tight! Damn my vice-like vagina and its ability to get guys off!"');
    // TODO-QSP: dynamic text: Meeting <<$npcdesc>>'s eyes, you flash him a smile and he smiles back. Seems tha...
    scene.text(`Meeting ${((s as any).npcdesc || '')}'s eyes, you flash him a smile and he smiles back. Seems that you managed to take the edge off his embarrassment.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpReact2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Reassure him', handler: (st: GameState) => {
    if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpSmile(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"It\'s okay," you coo softly. "It happens sometimes."');
      scene.text('"Maybe with some other guys," he says, clearly embarrassed. "It\'s... kind of a regular thing with me..."');
    } else {
      scene.text('"It\'s okay," you coo softly. "It\'s not your fault."');
      scene.text('"I just wish-" He cuts off, grimacing.');
      scene.text('"It\'s okay. It\'s okay..."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpReact2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Cute', handler: (st: GameState) => {
    if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpSmile(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"Don\'t worry," you smile. "I think it\'s cute."');
      scene.text('"Really?" he asks hesitantly. "Cause... this kind of happens every time..."');
      scene.text('"Yeah," you reassure him. "A guy can\'t hold it in for even a minute inside me? <i>Very</i> cute."');
    } else {
      scene.text('"You\'re so cute when you do that," you smile.');
      scene.text('"When I... prematurely ejaculate?"');
      scene.text('"Yes," you say, smile broadening. "<i>Especially</i> when you do that."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpReact2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'That was <i>hot</i>', handler: (st: GameState) => {
    if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpSmile(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"<i>Fuck</i>, that was so hot," you grin.');
      scene.text('"Sorry I... wait what?"');
      scene.text('"Nothing\'s hotter than when a guy can\'t hold his cum with me," you say, smile broadening. "Makes me feel like a sex <i>goddess</i>."');
    } else {
      scene.text('"It\'s so <i>hot</i> when you do that," you grin.');
      scene.text('"When I... prematurely ejaculate?"');
      scene.text('"<i>Yes</i>," you say, smile broadening. "Makes me feel like a sex goddess that you can\'t hold your cum when you\'re inside me."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2pumpReact2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enter2pumpReactSelfish(s: GameState, scene: SceneBuilder): void {
  scene.text('"Oh yeah," he sighs blissfully. "Yeah I came... Did you come?"');
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.text('"Uhh... <i>No</i>." You give him a flat stare of clear disappointment.');
    scene.text('"Oh. Uhmm... Hang on I think I can still get hard."');
    scene.text('There\'s a look of concentration on his face as he jerks his floppy cock, working some blood pressure back into it.');
    scene.text('"Okay, I think I\'m good to go," he grins, turning back to you with a proper stiffy.');
    qspCall(s, 'sex_ev_sex', 'reset');
    qspCall(s, 'sex_ev_sex', 'sex_menu');
  } },
  ]);
  scene.build();
}

function enter2pumpReact2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ready to go again?', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/wait.mp4');
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"So... is that your only shot or you ready to go again?" you ask.');
    } else {
      scene.text('"Now that that\'s out of the way, you ready to go again?" you ask.');
    }
    if (((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum'])  &&  ((s as any).sex_ev ?? 0)?.['boy_cum'] === 1) {
      qspCall(s, 'sex_ev_after', 'fucked_out');
    } else {
      scene.text('"Yeah."');
      // TODO-QSP: dynamic text: <<$npcdesc>> smiles warmly at you and you can see his cock already beginning to ...
      scene.text(`${((s as any).npcdesc || '')} smiles warmly at you and you can see his cock already beginning to stiffen up again.`);
      qspCall(s, 'sex_ev_sex', 'reset');
      qspCall(s, 'sex_ev_sex', 'sex_menu');
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cum_react':
      enterCumReact(s, scene);
      break;
    case 'react_menu':
      enterReactMenu(s, scene);
      break;
    case 'handjob_react':
      enterHandjobReact(s, scene);
      break;
    case 'kuni_react':
      enterKuniReact(s, scene);
      break;
    case 'condom_reactions':
      enterCondomReactions(s, scene);
      break;
    case 'good_thing_condom':
      enterGoodThingCondom(s, scene);
      break;
    case 'bask_satisfaction':
      enterBaskSatisfaction(s, scene);
      break;
    case 'bask_route':
      enterBaskRoute(s, scene);
      break;
    case 'bask_creampie1':
      enterBaskCreampie1(s, scene);
      break;
    case 'bask_creampie2':
      enterBaskCreampie2(s, scene);
      break;
    case 'bask_anal_creampie1':
      enterBaskAnalCreampie1(s, scene);
      break;
    case 'bask_condom1':
      enterBaskCondom1(s, scene);
      break;
    case 'bask_condom2':
      enterBaskCondom2(s, scene);
      break;
    case 'bask_external_cum1':
      enterBaskExternalCum1(s, scene);
      break;
    case 'bask_external_cum2':
      enterBaskExternalCum2(s, scene);
      break;
    case 'pullout_react_menu':
      enterPulloutReactMenu(s, scene);
      break;
    case 'pullout_thanks':
      enterPulloutThanks(s, scene);
      break;
    case 'pullout_close':
      enterPulloutClose(s, scene);
      break;
    case 'why_not_inside':
      enterWhyNotInside(s, scene);
      break;
    case 'cum_mouth_like_that':
      enterCumMouthLikeThat(s, scene);
      break;
    case 'anal_cp_felt_great':
      enterAnalCpFeltGreat(s, scene);
      break;
    case 'anal_cp_full':
      enterAnalCpFull(s, scene);
      break;
    case 'love_anal_creampies':
      enterLoveAnalCreampies(s, scene);
      break;
    case 'cant_pregnant':
      enterCantPregnant(s, scene);
      break;
    case 'first_anal_creampie':
      enterFirstAnalCreampie(s, scene);
      break;
    case 'anal_did_you_come_inside':
      enterAnalDidYouComeInside(s, scene);
      break;
    case 'swallow_react1':
      enterSwallowReact1(s, scene);
      break;
    case 'swallow_for_you':
      enterSwallowForYou(s, scene);
      break;
    case 'swallow_not_for_you':
      enterSwallowNotForYou(s, scene);
      break;
    case 'spit_quit':
      enterSpitQuit(s, scene);
      break;
    case 'cum_bad_taste':
      enterCumBadTaste(s, scene);
      break;
    case '69_react':
      enter69React(s, scene);
      break;
    case 'facial_smile_img':
      enterFacialSmileImg(s, scene);
      break;
    case 'facial_reactions':
      enterFacialReactions(s, scene);
      break;
    case 'facial_happy_reacts':
      enterFacialHappyReacts(s, scene);
      break;
    case 'cum_tasty':
      enterCumTasty(s, scene);
      break;
    case 'why_like_swallowing':
      enterWhyLikeSwallowing(s, scene);
      break;
    case 'why_like_swallowing2':
      enterWhyLikeSwallowing2(s, scene);
      break;
    case 'facial_ruined_makeup':
      enterFacialRuinedMakeup(s, scene);
      break;
    case 'cum_tits_react1':
      enterCumTitsReact1(s, scene);
      break;
    case 'cum_tits_mess':
      enterCumTitsMess(s, scene);
      break;
    case 'let_it_go':
      enterLetItGo(s, scene);
      break;
    case 'cum_kiss_cock':
      enterCumKissCock(s, scene);
      break;
    case 'no_cum_inside_pic':
      enterNoCumInsidePic(s, scene);
      break;
    case 'no_cum_inside':
      enterNoCumInside(s, scene);
      break;
    case 'no_tits_cum':
      enterNoTitsCum(s, scene);
      break;
    case 'no_facial':
      enterNoFacial(s, scene);
      break;
    case 'cum_mouth_gross':
      enterCumMouthGross(s, scene);
      break;
    case 'no_mouth_cum':
      enterNoMouthCum(s, scene);
      break;
    case 'bj_warning_thanks':
      enterBjWarningThanks(s, scene);
      break;
    case 'bj_warning_next_time':
      enterBjWarningNextTime(s, scene);
      break;
    case 'bj_tasty':
      enterBjTasty(s, scene);
      break;
    case 'bj_already':
      enterBjAlready(s, scene);
      break;
    case 'bj_already2':
      enterBjAlready2(s, scene);
      break;
    case 'bj_swallow_gross':
      enterBjSwallowGross(s, scene);
      break;
    case 'bj_swallow_gross2':
      enterBjSwallowGross2(s, scene);
      break;
    case 'bj_spit_gross':
      enterBjSpitGross(s, scene);
      break;
    case 'bj_spit_gross2':
      enterBjSpitGross2(s, scene);
      break;
    case 'cum_mouth_swallow_why':
      enterCumMouthSwallowWhy(s, scene);
      break;
    case 'cum_already':
      enterCumAlready(s, scene);
      break;
    case 'quickshot_tease1':
      enterQuickshotTease1(s, scene);
      break;
    case '2pump_smile':
      enter2pumpSmile(s, scene);
      break;
    case '2pump_irate':
      enter2pumpIrate(s, scene);
      break;
    case '2pump_react':
      enter2pumpReact(s, scene);
      break;
    case '2pump_react_awkward':
      enter2pumpReactAwkward(s, scene);
      break;
    case '2pump_react_selfish':
      enter2pumpReactSelfish(s, scene);
      break;
    case '2pump_react2':
      enter2pumpReact2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_reactions: LocationDef = {
  name: 'sex_ev_reactions',
  title: 'A few minutes pass and your breathing slowly calms, relaxing',
  region: 'other',
  enter: enter,
};
