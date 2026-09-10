import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_color');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    // TODO-QSP: dynamic text: <<$npcdesc>> says that you have beautiful hair.
    scene.text(`${((s as any).npcdesc ?? 0)} says that you have beautiful hair.`);
  } else {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_black') {
      // TODO-QSP: dynamic text: <<$npcdesc>> says that you are very beautiful, although he likes black-haired wo...
      scene.text(`${((s as any).npcdesc ?? 0)} says that you are very beautiful, although he likes black-haired women.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> says that you are very beautiful, although he likes brunettes.
      scene.text(`${((s as any).npcdesc ?? 0)} says that you are very beautiful, although he likes brunettes.`);
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_red') {
        // TODO-QSP: dynamic text: <<$npcdesc>> says that you are very beautiful, although he likes redheads.
        scene.text(`${((s as any).npcdesc ?? 0)} says that you are very beautiful, although he likes redheads.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> says that you are very beautiful, although he likes bondes.
        scene.text(`${((s as any).npcdesc ?? 0)} says that you are very beautiful, although he likes bondes.`);
      }
    }
  }
  scene.build();
}

export const boylove: LocationDef = {
  name: 'boylove',
  region: 'other',
  enter: enter,
};
