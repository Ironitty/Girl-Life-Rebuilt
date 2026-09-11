import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_like_hair_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
  // TODO-QSP: dynamic text: "I love your hair," <<$npc_usedname[$npcID]>> murmurs, running his fingers throu...
  scene.text(`"I love your hair," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} murmurs, running his fingers through your locks.`);
  scene.actions([
    { label: 'What do you like about it?', handler: (st: GameState) => {
    if (((s as any).pcs_haircolor ?? 0) === 'black') {
      // TODO-QSP: act'You do?':
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
      scene.text('"You do?" you ask, surprised.');
      scene.text('"Don\'t know why everybody is into blondes," he smiles. "Black hair is so sexy."');
      // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
    }
    if (((s as any).pcs_haircolor ?? 0) === 'brown') {
      // TODO-QSP: act'You do?':
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
      scene.text('"You do?" you ask, surprised.');
      scene.text('"Don\'t know why everybody is into blondes," he smiles. "Brunettes are gorgeous."');
      // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
    }
    if (((s as any).pcs_haircolor ?? 0) === 'red') {
      // TODO-QSP: act'You do?':
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
      scene.text('"You do?" you ask, surprised.');
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
        scene.text('"I never understood the whole idiom about redheaded stepchildren," he jokes. "Cause you\'re proof that they\'re hot."');
      } else {
        scene.text('"Who doesn\'t think redheads are hot?" he grins back. ');
      }
      // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
    }
    if (((s as any).pcs_haircolor ?? 0) === 'blonde') {
      // TODO-QSP: act'You do?':
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
      scene.text('"You do?" you ask, surprised.');
      scene.text('"It\'s gorgeous," he smiles. "Blondes are so sexy."');
      // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
    }
  } },
  ]);
  scene.build();
}

export const sex_ev_body_talk: LocationDef = {
  name: 'sex_ev_body_talk',
  region: 'other',
  enter: enter,
};
