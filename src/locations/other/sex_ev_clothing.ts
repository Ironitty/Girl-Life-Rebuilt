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
    qspCall(s, 'sex_ev_start', 'starting_route');
    scene.actions([
      { label: 'Show him what\'s under your skirt (nothing)', goto: ['sex_ev_clothing', 'pantyless_skirt'] },
    ]);
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
      // TODO-QSP: dynamic text: You stumble into an empty room with <<$npcdesc>>, barely getting through the doo...
      scene.text(`You stumble into an empty room with ${((s as any).npcdesc ?? 0)}, barely getting through the door before clothes start getting discarded. His eyes light up as your breasts are exposed and he openly leers at them.`);
      // TODO-QSP: dynamic text: "Fuck..." The way <<$npcdesc>> stares at your boobs, he looks like a boy on Chri...
      scene.text(`"Fuck..." The way ${((s as any).npcdesc ?? 0)} stares at your boobs, he looks like a boy on Christmas day. He suddenly remembers he needs to get undressed as well and scrambles to take off his pants. His eyes never leave your body as you lead him toward the bed.`);
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
        // TODO-QSP: dynamic text: You stumble into an empty room with <<$npcdesc>>, barely getting through the doo...
        scene.text(`You stumble into an empty room with ${((s as any).npcdesc ?? 0)}, barely getting through the door before clothes start getting discarded. Before you can fully get your ${((s as any).sex_ev ?? 0)?.['top_noun']} off, warm hands slide stop you.`);
        scene.text('"Hold up your arms," he orders as he expertly pulls it over your shoulders. His slightly labored breath makes you want to rush but he takes his time. By the time you\'re make the bed, you are naked and panting.');
      } else {
        scene.text('You tear each other\'s clothes off, leaving a trail of discarded fabrics.');
      }
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted'  ||  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 'cheater') {
        // TODO-QSP: dynamic text: The moment you're through the door, the both of you begin discarding clothes in ...
        scene.text(`The moment you're through the door, the both of you begin discarding clothes in a hurry. Before you can fully get your ${((s as any).sex_ev ?? 0)?.['top_noun']} off, rough hands slide over your skin.`);
        scene.text('"Girls like you all want the same thing," he says as he rips it off and pins you to the wall. His hands seem to find every inch of your bare skin. By the time you\'re at the bed, there\'s a trail of clothing across the floor.');
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> can't keep his eyes off you as you lead him.
        scene.text(`${((s as any).npcdesc ?? 0)} can't keep his eyes off you as you lead him.`);
        scene.text('"Fuck," he groans as you start to undress once you\'re inside the door. His eyes light up as your breasts are exposed and he openly leers at them. He suddenly remembers he needs to get undressed as well and scrambles to take off his pants. His eyes never leave your body as you lead him toward the bed.');
        if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
          // TODO-QSP: dynamic text: The moment you're through the door, the both of you begin discarding clothes in ...
          scene.text(`The moment you're through the door, the both of you begin discarding clothes in a hurry. Before you can fully get your ${((s as any).sex_ev ?? 0)?.['top_noun']} off, warm hands slide stop you.`);
          scene.text('"Hold up your arms," he orders as he expertly pulls it over your shoulders. His slightly labored breath makes you want to rush but he takes his time. By the time you\'re make the bed, you are naked and panting.');
        } else {
          scene.text('You tear each other\'s clothes off, leaving a trail of discarded fabrics.');
        }
      }
      qspCall(s, 'sex_ev_start', 'starting_route');
    }
  }
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
