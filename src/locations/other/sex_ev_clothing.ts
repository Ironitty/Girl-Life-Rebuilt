import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterUndressFunction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['undressed_check'] === 0) {
    (s as any).sex_ev['undressed_check'] = 1;
    (s as any).sex_ev['PCloThinness'] = ((s as any).PCloThinness ?? 0);
    (s as any).sex_ev['PCloTopCut'] = ((s as any).PCloTopCut ?? 0);
    if (((s as any).CloDress ?? 0) === 1) {
      (s as any).sex_ev['CloDress'] = 1;
      (s as any).sex_ev['top_noun'] = 'dress';
    } else {
      (s as any).sex_ev['top_noun'] = 'top';
    }
    if ((!((s as any).CloSkirtShortness ?? 0))) {
      (s as any).sex_ev['CloPantsShortness'] = ((s as any).CloPantsShortness ?? 0);
      (s as any).sex_ev['bottom_noun'] = 'pants';
    } else {
      (s as any).sex_ev['bottom_noun'] = 'skirt';
      (s as any).sex_ev['CloSkirtShortness'] = ((s as any).CloSkirtShortness ?? 0);
    }
    if (((s as any).CloStyle2 ?? 0) === 4) {
      (s as any).npc_know_schoolgirl[String((s as any).npcID ?? 0)] = 1;
    }
    qspCall(s, 'outfit', 'transfer_backup', 0, 'sex_ev');
    qspCall(s, 'outfit', 'safe_backup', 'sex_ev');
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'clothing', 'strip');
    }
    if (((s as any).braworntype ?? 0) !== 'none') {
      qspCall(s, 'bras', 'remove');
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
    }
  }
  scene.build();
}

function enterUndressMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['at_home'] === 0) {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: '<<$npcdesc>> opens the door up to his ' + iif($sex_ev['loc'] = 'npc_home', 'place.', 'room.')
  } else {
    // TODO-QSP: '<<$npcdesc>> leads you ' + iif($npc_apt_type_label[$npcID] = 'studio', 'to his bed.', 'down the hal...
  }
  qspCall(s, 'sex_ev_clothing', 'undress_function');
  if (((s as any).sex_ev ?? 0)?.['CloDress'] !== 1) {
    scene.actions([
      { label: 'Pull off your top', goto: ['sex_ev_clothing', 'top_undress'] },
    ]);
  }
  scene.actions([
    { label: 'Undress each other slowly', goto: ['sex_ev_clothing', 'slow_undress'] },
    { label: 'Clothes. Off. Bed. Now.', goto: ['sex_ev_clothing', 'frantic_undress'] },
  ]);
  scene.build();
}

function enterSlowUndress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_clothing', 'undress_function');
  qspCall(s, 'arousal', 'foreplay', 1);
  qspCall(s, 'arousal', 'foreplay_give', (-1));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/undress/undress2.mp4');
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
    if (((s as any).sex_ev ?? 0)?.['starting_mood'] === 'reluctant') {
      // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> takes his time, pushing you out of your clothing and e...
      scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} takes his time, pushing you out of your clothing and encouraging you to help him out of his. As your clothes rustle to the floor, the noise of the party behind you starts to fade into the background.`);
    } else {
      // TODO-QSP: dynamic text: You and <<$npc_usedname[$npcID]>> take your time, slowly helping each other out ...
      scene.text(`You and ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} take your time, slowly helping each other out of your clothes. As they fall to the floor, the noise of the party behind you starts to fade into the background.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['starting_mood'] === 'reluctant') {
      // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> takes his time, pushing you out of your clothing and e...
      scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} takes his time, pushing you out of your clothing and encouraging you to help him out of his, letting everything fall to the floor with a faint rustle`);
    } else {
      // TODO-QSP: dynamic text: You and <<$npc_usedname[$npcID]>> take your time, slowly helping each other out ...
      scene.text(`You and ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} take your time, slowly helping each other out of your clothes and let them fall to the floor with a faint rustle.`);
    }
  }
  if (((s as any).lastwornpantytype ?? 0)?.['sex_ev'] !== 'none') {
    scene.actions([
      { label: 'Strip your panties', goto: ['sex_ev_clothing', 'panty_strip'] },
      { label: 'Let him take off your panties', goto: ['sex_ev_clothing', 'panty_undress'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['bottom_noun'] === 'skirt') {
      scene.actions([
        { label: 'Show him what\'s under your skirt (nothing)', goto: ['sex_ev_clothing', 'pantyless_skirt'] },
      ]);
    } else {
      qspCall(s, 'sex_ev_start', 'starting_route');
    }
  }
  scene.build();
}

function enterFranticUndress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_clothing', 'undress_function');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'arousal', 'foreplay_give', (-2));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/undress/undress1.mp4');
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted'  ||  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 'cheater') {
      // TODO-QSP: dynamic text: You stumble into an empty room with <<$npcdesc>>, barely getting through the doo...
      scene.text(`You stumble into an empty room with ${((s as any).npcdesc ?? 0)}, barely getting through the door before clothes start getting discarded. Before you can fully get your ${((s as any).sex_ev ?? 0)?.['top_noun']} off, rough hands slide over your skin.`);
      scene.text('"Girls like you all want the same thing," he grins as he tears it off and pins you to the wall. His hands seem to find every inch of your bare skin. By the time you\'re at the bed, there\'s a trail of clothing across the floor.');
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
        // TODO-QSP: dynamic text: You stumble into an empty room with <<$npcdesc>>, barely getting through the doo...
        scene.text(`You stumble into an empty room with ${((s as any).npcdesc ?? 0)}, barely getting through the door before clothes start getting discarded. His eyes light up as your breasts are exposed and he openly leers at them.`);
        // TODO-QSP: dynamic text: "Fuck..." The way <<$npcdesc>> stares at your boobs, he looks like a boy on Chri...
        scene.text(`"Fuck..." The way ${((s as any).npcdesc ?? 0)} stares at your boobs, he looks like a boy on Christmas day. He suddenly remembers he needs to get undressed as well and scrambles to take off his pants. His eyes never leave your body as you lead him toward the bed.`);
      } else {
        if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
          // TODO-QSP: dynamic text: You stumble into an empty room with <<$npcdesc>>, barely getting through the doo...
          scene.text(`You stumble into an empty room with ${((s as any).npcdesc ?? 0)}, barely getting through the door before clothes start getting discarded. Before you can fully get your ${((s as any).sex_ev ?? 0)?.['top_noun']} off, warm hands slide stop you.`);
          scene.text('"Hold up your arms," he orders as he expertly pulls it over your shoulders. His slightly labored breath makes you want to rush but he takes his time. By the time you\'re make the bed, you are naked and panting.');
        } else {
          scene.text('You tear each other\'s clothes off, leaving a trail of discarded fabrics.');
        }
      }
    }
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted'  ||  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 'cheater') {
      // TODO-QSP: dynamic text: The moment you're through the door, the both of you begin discarding clothes in ...
      scene.text(`The moment you're through the door, the both of you begin discarding clothes in a hurry. Before you can fully get your ${((s as any).sex_ev ?? 0)?.['top_noun']} off, rough hands slide over your skin.`);
      scene.text('"Girls like you all want the same thing," he says as he rips it off and pins you to the wall. His hands seem to find every inch of your bare skin. By the time you\'re at the bed, there\'s a trail of clothing across the floor.');
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
        // TODO-QSP: dynamic text: <<$npcdesc>> can't keep his eyes off you as you lead him.
        scene.text(`${((s as any).npcdesc ?? 0)} can't keep his eyes off you as you lead him.`);
        scene.text('"Fuck," he groans as you start to undress once you\'re inside the door. His eyes light up as your breasts are exposed and he openly leers at them. He suddenly remembers he needs to get undressed as well and scrambles to take off his pants. His eyes never leave your body as you lead him toward the bed.');
      } else {
        if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
          // TODO-QSP: dynamic text: The moment you're through the door, the both of you begin discarding clothes in ...
          scene.text(`The moment you're through the door, the both of you begin discarding clothes in a hurry. Before you can fully get your ${((s as any).sex_ev ?? 0)?.['top_noun']} off, warm hands slide stop you.`);
          scene.text('"Hold up your arms," he orders as he expertly pulls it over your shoulders. His slightly labored breath makes you want to rush but he takes his time. By the time you\'re make the bed, you are naked and panting.');
        } else {
          scene.text('You tear each other\'s clothes off, leaving a trail of discarded fabrics.');
        }
      }
    }
  }
  qspCall(s, 'sex_ev_start', 'starting_route');
  scene.build();
}

function enterTopUndress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 1);
  qspCall(s, 'arousal', 'foreplay_give', (-1));
  qspCall(s, 'stat', '');
  if ((Array.isArray((s as any).body_count) ? ((s as any).body_count as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted'  ||  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 'cheater') {
      scene.img('images/shared/sex/undress/top2.mp4');
      // TODO-QSP: dynamic text: You pull off your top, giving <<$npc_usedname[$npcID]>> his first look at your b...
      scene.text(`You pull off your top, giving ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} his first look at your breasts.`);
      scene.text('"I love sluts like you," he says, reaching up to grab your neck and pin you to the wall. A shiver pulses through you and you can\'t tell whether it\'s fear or arousal.');
      scene.text('Maybe both.');
      scene.text('His hands seem to find every inch of your bare skin. By the time you\'re at the bed, there\'s a trail of clothing across the floor.');
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
        scene.img('images/shared/sex/undress/top1.mp4');
        // TODO-QSP: dynamic text: You pull off your top, giving <<$npc_usedname[$npcID]>> his first look at your b...
        scene.text(`You pull off your top, giving ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} his first look at your breasts.`);
        scene.text('"Fuck," he gulps, eyes lighting up and eagerly drinking in the sight. He suddenly remembers he needs to get undressed as well and scrambles to take off his pants. His eyes never leave your body as you lead him toward the bed.');
      } else {
        if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
          scene.img('images/shared/sex/undress/top1.mp4');
          // TODO-QSP: dynamic text: You pull off your top, giving <<$npc_usedname[$npcID]>> his first look at your b...
          scene.text(`You pull off your top, giving ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} his first look at your breasts.`);
          scene.text('"Nice pair you\'ve got there," he smirks, taking off his own shirt off as well and moving towards the bed.');
        } else {
          scene.img('images/shared/sex/undress/top1.mp4');
          // TODO-QSP: dynamic text: You pull off your top, giving <<$npc_usedname[$npcID]>> his first look at your b...
          scene.text(`You pull off your top, giving ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} his first look at your breasts.`);
          scene.text('"Beautiful," he smiles, moving you towards the bed.');
        }
      }
    }
  } else {
    if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
      scene.img('images/shared/sex/undress/top1.mp4');
      if (((s as any).tits ?? 0) >= 4  &&  ((s as any).PCloThinness ?? 0) <= 2  &&  ((s as any).PCloTopCut ?? 0) <= 2) {
        // TODO-QSP: dynamic text: You pull off your top, revealing your <<$pcs_breastdesc>> breasts to <<$npcdesc>...
        scene.text(`You pull off your top, revealing your ${((s as any).pcs_breastdesc ?? 0)} breasts to ${((s as any).npcdesc ?? 0)} and he grins hungrily at them.`);
        scene.text('"I\'ll never understand why you bother hiding tits like these," he breathes as your thick clothing slips from your fingers to the floor.');
      } else {
        // TODO-QSP: dynamic text: You pull off your top, revealing your <<$pcs_breastdesc>> breasts to <<$npcdesc>...
        scene.text(`You pull off your top, revealing your ${((s as any).pcs_breastdesc ?? 0)} breasts to ${((s as any).npcdesc ?? 0)}.`);
        scene.text('"Never get tired of seeing those," he grins, moving you towards the bed.');
      }
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted'  ||  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 'cheater') {
        scene.img('images/shared/sex/undress/top2.mp4');
        // TODO-QSP: dynamic text: You pull off your top, revealing your breasts to <<$npc_usedname[$npcID]>>.
        scene.text(`You pull off your top, revealing your breasts to ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
        scene.text('"Good slut," he murmurs, reaching up to grab your neck and pin you to the wall. A shiver pulses through you and you can\'t tell whether it\'s fear or arousal.');
        scene.text('Maybe both.');
        scene.text('Before you can determine which, he starts moving you towards the bed.');
      } else {
        if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
          scene.img('images/shared/sex/undress/top1.mp4');
          // TODO-QSP: dynamic text: You pull off your top, revealing your breasts to <<$npc_usedname[$npcID]>>.
          scene.text(`You pull off your top, revealing your breasts to ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
          scene.text('"Fuck," he gulps, eyes lighting up and eagerly drinking in the sight. He suddenly remembers he needs to get undressed as well and scrambles to take off his pants. His eyes never leave your body as you lead him toward the bed.');
        } else {
          if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
            scene.img('images/shared/sex/undress/top1.mp4');
            // TODO-QSP: dynamic text: You pull off your top, revealing your breasts to <<$npc_usedname[$npcID]>>.
            scene.text(`You pull off your top, revealing your breasts to ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
            scene.text('"Nice pair you\'ve got there," he smirks, taking off his own shirt off as well and moving towards the bed.');
          } else {
            scene.img('images/shared/sex/undress/top1.mp4');
            // TODO-QSP: dynamic text: You pull off your top, revealing your breasts to <<$npc_usedname[$npcID]>>.
            scene.text(`You pull off your top, revealing your breasts to ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
            scene.text('"Beautiful," he smiles, moving you towards the bed.');
          }
        }
      }
    }
  }
  if (((s as any).lastwornpantytype ?? 0)?.['sex_ev'] !== 'none') {
    qspCall(s, 'sex_ev_clothing', 'panty_menu');
  } else {
    if (((s as any).sex_ev ?? 0)?.['bottom_noun'] === 'skirt') {
      scene.actions([
        { label: 'Show him what\'s under your skirt (nothing)', goto: ['sex_ev_clothing', 'pantyless_skirt'] },
      ]);
    } else {
      qspCall(s, 'sex_ev_start', 'starting_route');
    }
  }
  scene.build();
}

function enterPantyMenu(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Strip your panties', goto: ['sex_ev_clothing', 'panty_strip'] },
    { label: 'Let him take off your panties', goto: ['sex_ev_clothing', 'panty_undress'] },
  ]);
  scene.build();
}

function enterPantyUndress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 1);
  qspCall(s, 'arousal', 'foreplay', (-5));
  scene.img('images/shared/sex/undress/panties1.mp4');
  if (((s as any).npc_sex_speed ?? 0)?.[String((s as any).npcID ?? 0)] === 3  ||  ((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> roughly shoves you back onto the bed and grabs hold of...
    scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} roughly shoves you back onto the bed and grabs hold of your panties, tugging them over your hips and down your thighs, leaving you completely naked.`);
  } else {
    // TODO-QSP: dynamic text: You let yourself fall back onto the bed and lift your legs. <<$npc_usedname[$npc...
    scene.text(`You let yourself fall back onto the bed and lift your legs. ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} takes the hint and grabs hold of your panties, tugging them over your hips and down your thighs, leaving you completely naked.`);
  }
  qspCall(s, 'sex_ev_start', 'starting_route');
  scene.build();
}

function enterPantyStrip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 1);
  qspCall(s, 'arousal', 'foreplay', (-5));
  scene.img('images/shared/sex/undress/panties2.mp4');
  // TODO-QSP: dynamic text: With only one piece of clothing remaining, you turn your back to <<$npcdesc>> an...
  scene.text(`With only one piece of clothing remaining, you turn your back to ${((s as any).npcdesc ?? 0)} and slip your panties down your thighs, giving him a magnificent view of your ass and both holes as you bend over before stepping out of them and giving him the full view of the front.`);
  if (((s as any).npc_seen_pussy ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
  }
  qspCall(s, 'sex_ev_start', 'starting_route');
  scene.build();
}

function enterPantylessSkirt(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/undress/skirt_drop1.mp4');
  // TODO-QSP: dynamic text: You trail behind <<$npc_usedname[$npcID]>> on the way to the bed, letting him la...
  scene.text(`You trail behind ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} on the way to the bed, letting him lay back on it as a mischievous smirk plays on your lips. You drop ' + iif(sex_ev['CloDress'] = 1, 'the rest of your dress', 'your skirt') + ' to the floor to let him see what's underneath.`);
  if (((s as any).sex_ev ?? 0)?.['commando'] === 1) {
    scene.text('"I see you weren\'t lying about not wearing any underwear," he says, staring at your bare pussy.');
  } else {
    scene.text('All he does is grin in delight at the sight of your bare pussy between your thighs.');
  }
  scene.actions([
    { label: 'Let him lead', handler: (st: GameState) => {
    if (((((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['orgasm_count'] === 0)  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(s, 'sex_ev_foreplay', 'generous_initiative');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'sex_ev_foreplay', 'selfish_initiative');
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          qspCall(s, 'sex_ev_foreplay', 'generous_initiative');
        } else {
          qspCall(s, 'sex_ev_foreplay', 'selfish_initiative');
        }
      }
    }
  } },
    { label: 'Go down on him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    { label: 'Mount him (cowgirl)', goto: ['sex_ev_cowgirl', 'cowgirl_start'] },
  ]);
  scene.build();
}

function enterDressImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'reaching down for your clothes') {
    if (((s as any).sex_ev ?? 0)?.['CloDress'] === 1) {
      scene.img('images/shared/romance/lovers/misc/bed_dress.jpg');
    } else {
      // TODO-QSP: $sex_ev['bed_room']
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'fastening your bra around your chest') {
      scene.img('images/pc/activities/misc/dress_bra1.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'slipping your skirt up your legs') {
        scene.img('images/pc/activities/misc/dress_skirt1.mp4');
      } else {
        if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
          scene.img('images/pc/activities/misc/dress_panties1.mp4');
        } else {
          if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your top over your breasts') {
            scene.img('images/pc/activities/misc/dress_top1.mp4');
          } else {
            if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips') {
              scene.img('images/pc/activities/misc/dress_1.mp4');
            } else {
              if (((s as any).sex_ev ?? 0)?.['CloDress'] === 1  &&  ((s as any).sex_ev ?? 0)?.['dress_end'] === 0) {
                scene.img('images/shared/romance/lovers/misc/bed_dress.jpg');
              } else {
                // TODO-QSP: $sex_ev['bed_room']
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterDressLoop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
  qspCall(s, 'sex_ev_clothing', 'dress_image');
  qspCall(s, 'stat', '');
  scene.build();
}

function enterDressLoopEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['undressed_check'] = 0;
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).lastwornpantytype ?? 0)?.['sex_ev'] !== 'none') {
    // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['sex_ev'], lastwornpantynumber['sex_ev']
  }
  if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).lastwornbratype ?? 0)?.['sex_ev'] !== 'none') {
    // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['sex_ev'], lastwornbranumber['sex_ev']
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).lastwornclothingtype ?? 0)?.['sex_ev'] !== 'nude') {
    // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['sex_ev'], lastwornclothingnumber['sex_ev'], 'force'
  }
  if (((s as any).shoeworntype ?? 0) === 'none'  &&  ((s as any).lastwornshoetype ?? 0)?.['sex_ev'] !== 'none') {
    // TODO-QSP: gs 'shoes', 'wear', $lastwornshoetype['sex_ev'], lastwornshoenumber['sex_ev']
  }
  (s as any).sex_ev['dress_end'] = 1;
  qspCall(s, 'outfit', 'remove_backup', 'sex_ev');
  qspCall(s, 'stat', '');
  scene.build();
}

function enterDressLoopCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dressing_start'] === 0) {
    (s as any).sex_ev['dressing_start'] = 1;
    (s as any).sex_ev['dress_describe'] = 'reaching down for your clothes';
    return;
  }
  if (((s as any).sex_ev ?? 0)?.['panty_wear'] === 0) {
    (s as any).sex_ev['panty_wear'] = 1;
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).lastwornpantytype ?? 0)?.['sex_ev'] !== 'none') {
      // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['sex_ev'], lastwornpantynumber['sex_ev']
      (s as any).sex_ev['dress_describe'] = 'pulling your panties up';
      return;
    }
  }
  if (((s as any).sex_ev ?? 0)?.['bra_wear'] === 0) {
    (s as any).sex_ev['bra_wear'] = 1;
    if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).lastwornbratype ?? 0)?.['sex_ev'] !== 'none') {
      // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['sex_ev'], lastwornbranumber['sex_ev']
      (s as any).sex_ev['dress_describe'] = 'fastening your bra around your chest';
      return;
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).lastwornclothingtype ?? 0)?.['sex_ev'] !== 'nude') {
    // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['sex_ev'], lastwornclothingnumber['sex_ev'], 'force'
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('<b>Failsafe:</b> dressing did not happen properly. You are not wearing clothes.');
    scene.text('Stored clothing values:');
    // TODO-QSP: "  $lastwornclothingtype['sex_ev'] = '<<$lastwornclothingtype['sex_ev']>>'"
    // TODO-QSP: "  lastwornclothingnumber['sex_ev'] = <<lastwornclothingnumber['sex_ev']>>"
    (s as any).sex_ev['dress_end'] = 2;
    return;
  }
  if (((s as any).sex_ev ?? 0)?.['clothing_end'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['dress_top_wear'] === 0) {
      (s as any).sex_ev['dress_top_wear'] = 1;
      if (((s as any).CloDress ?? 0) === 1) {
        (s as any).sex_ev['dress_describe'] = 'pulling your dress over your shoulders';
        return;
      }
    }
    if (((s as any).sex_ev ?? 0)?.['dress_skirt_wear'] === 0) {
      (s as any).sex_ev['dress_skirt_wear'] = 1;
      if (((s as any).CloDress ?? 0) === 1) {
        (s as any).sex_ev['clothing_end'] = 1;
        (s as any).sex_ev['dress_describe'] = 'smoothing your skirt out';
        return;
      }
    }
    if (((s as any).sex_ev ?? 0)?.['skirt_wear'] === 0) {
      (s as any).sex_ev['skirt_wear'] = 1;
      if (((s as any).CloSkirtShortness ?? 0) > 0) {
        if (((s as any).pantyworntype ?? 0) === 'none') {
          (s as any).sex_ev['dress_describe'] = 'slipping your skirt up your legs ';
        } else {
          (s as any).sex_ev['dress_describe'] = 'zipping your skirt up over your panties';
        }
        return;
      }
    }
    if (((s as any).sex_ev ?? 0)?.['pants_wear'] === 0) {
      (s as any).sex_ev['pants_wear'] = 1;
      if ((!((s as any).CloSkirtShortness ?? 0))) {
        (s as any).sex_ev['dress_describe'] = 'tugging your pants over your hips';
        return;
      }
    }
    if (((s as any).braworntype ?? 0) === 'none') {
      (s as any).sex_ev['dress_describe'] = 'pulling your top over your breasts';
    } else {
      (s as any).sex_ev['dress_describe'] = 'pulling your top over your bra';
    }
    return;
  }
  if (((s as any).sex_ev ?? 0)?.['shoe_wear'] === 0) {
    if (((s as any).shoeworntype ?? 0) === 'none'  &&  ((s as any).lastwornshoetype ?? 0)?.['sex_ev'] !== 'none') {
      // TODO-QSP: gs 'shoes', 'wear', $lastwornshoetype['sex_ev'], lastwornshoenumber['sex_ev']
      (s as any).sex_ev['shoe_wear'] = 1;
      return;
    }
    if (((s as any).sex_ev ?? 0)?.['shoe_wear'] === 1) {
      if (((s as any).shoeworntype ?? 0) === 'danilovich') {
        (s as any).sex_ev['dress_describe'] = 'tying up your shoe laces';
      } else {
        (s as any).sex_ev['dress_describe'] = 'slipping on your shoes';
      }
    } else {
      if (((s as any).shoeworntype ?? 0) === 'none') {
        scene.text('<b>Failsafe:</b> dressing did not happen properly. You are not wearing shoes.');
        scene.text('Stored shoe values:');
        // TODO-QSP: "  $lastwornshoetype['sex_ev'] = '<<$lastwornshoetype['sex_ev']>>'"
        // TODO-QSP: "  lastwornshoenumber['sex_ev'] = '<<lastwornshoenumber['sex_ev']>>'"
        (s as any).sex_ev['dress_end'] = 2;
        return;
      }
    }
  }
  (s as any).sex_ev['clothing_end'] = 1;
  if (((s as any).sex_ev ?? 0)?.['clothing_end'] === 1) {
    qspCall(s, 'outfit', 'remove_backup', 'sex_ev');
    (s as any).sex_ev['clothing_end'] = 2;
    if (((s as any).CloDress ?? 0) === 1) {
      (s as any).sex_ev['dress_describe'] = 'checking your dress';
    } else {
      if (((s as any).CloSkirtShortness ?? 0) > 0) {
        (s as any).sex_ev['dress_describe'] = 'smoothing your skirt';
      } else {
        (s as any).sex_ev['dress_describe'] = 'checking your clothes';
      }
    }
    return;
  }
  (s as any).sex_ev['dress_end'] = 1;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'undress_function':
      enterUndressFunction(s, scene);
      break;
    case 'undress_menu':
      enterUndressMenu(s, scene);
      break;
    case 'slow_undress':
      enterSlowUndress(s, scene);
      break;
    case 'frantic_undress':
      enterFranticUndress(s, scene);
      break;
    case 'top_undress':
      enterTopUndress(s, scene);
      break;
    case 'panty_menu':
      enterPantyMenu(s, scene);
      break;
    case 'panty_undress':
      enterPantyUndress(s, scene);
      break;
    case 'panty_strip':
      enterPantyStrip(s, scene);
      break;
    case 'pantyless_skirt':
      enterPantylessSkirt(s, scene);
      break;
    case 'dress_image':
      enterDressImage(s, scene);
      break;
    case 'dress_loop':
      enterDressLoop(s, scene);
      break;
    case 'dress_loop_end':
      enterDressLoopEnd(s, scene);
      break;
    case 'dress_loop_code':
      enterDressLoopCode(s, scene);
      break;
    default:
      enterUndressFunction(s, scene);
      break;
  }
}

export const sex_ev_clothing: LocationDef = {
  name: 'sex_ev_clothing',
  title: '"Girls like you all want the same thing," he grins as he tea',
  region: 'other',
  enter: enter,
};
