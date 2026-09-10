import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterTopicExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } else {
    qspCall(s, 'sex_ev_sex', 'sex_end');
  }
  scene.build();
}

function enterBoyAccidentalCreampie(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['accidental_creampie_convo'] = 1;
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  // TODO-QSP: end !}
  if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } else {
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "You said it's a safe day for you, right?" <<$npcdesc>> asks.
      scene.text(`"You said it's a safe day for you, right?" ${((s as any).npcdesc ?? 0)} asks.`);
      scene.text('"Mhm," you nod.');
      scene.text('"Good," he sighs with relief.');
    } else {
      // TODO-QSP: dynamic text: "Good thing it's one of your safe days," <<$npcdesc>> smiles.
      scene.text(`"Good thing it's one of your safe days," ${((s as any).npcdesc ?? 0)} smiles.`);
      scene.text('"Mhm," you nod back.');
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe') {
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "You said it's probably safe for you today, right?" <<$npcdesc>> asks.
        scene.text(`"You said it's probably safe for you today, right?" ${((s as any).npcdesc ?? 0)} asks.`);
        scene.text('"Mhm," you nod. He hesitates, seeming concerned.');
        scene.text('"Maybe you should get a morning after pill just in case."');
        qspCall(s, 'sex_ev_talk', 'no_pill_orthodox');
        if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] === 1) {
          scene.actions([
            { label: 'You already have one', handler: (st: GameState) => {
    (s as any).sex_ev['ma_pill'] = 1;
    scene.text('"Don\'t worry," you tell him. "I\'ve already got one. It\'s in my bag."');
    scene.text('He seems relieved.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Take it now', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"In fact..." you say, reaching down for your purse.');
    qspCall(s, 'sex_ev_after', 'plan_b3');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'You\'ll be fine', handler: (st: GameState) => {
    scene.text('"I\'ll be fine," you insist. "I\'m not worried. Why should you be?"');
    qspCall(s, 'sex_ev_talk', 'morning_after_money');
  } },
          { label: 'Probably should', handler: (st: GameState) => {
    scene.text('"Yeah," you say with a shy smile. "I probably should, shouldn\'t I?"');
    scene.text('He seems relieved.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
          { label: 'Definitely will', handler: (st: GameState) => {
    scene.text('"I will," you tell him. "Just to be safe."');
    scene.text('He seems relieved.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "Good thing it's one of your safe days," <<$npcdesc>> smiles.
        scene.text(`"Good thing it's one of your safe days," ${((s as any).npcdesc ?? 0)} smiles.`);
        scene.text('"Mhm," you nod back.');
      }
      // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
    } else {
      // TODO-QSP: xgt 'sex_ev_talk', 'get_plan_b_question'
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'topic_exit':
      enterTopicExit(s, scene);
      break;
    case 'boy_accidental_creampie':
      enterBoyAccidentalCreampie(s, scene);
      break;
    default:
      enterTopicExit(s, scene);
      break;
  }
}

export const sex_ev_talk: LocationDef = {
  name: 'sex_ev_talk',
  title: '"Here," he says, offering the cash to you. "Get a morning af',
  region: 'other',
  enter: enter,
};
