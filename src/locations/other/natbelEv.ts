// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).NatashaShower = 0;
  (s as any).NatashaLoc = Math.floor(Math.random() * 8) + 0;
  if (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 18) {
    (s as any).NatashaLoc = Math.floor(Math.random() * 7) + 1;
  }
  if ((!((s as any).NatashaLoc ?? 0))) {
  } else {
    if (((s as any).NatashaLoc ?? 0) === 2) {
    } else {
      if (((s as any).NatashaLoc ?? 0) === 4) {
      } else {
        if (((s as any).NatashaLoc ?? 0) === 6) {
          (s as any).NatashaShower = 1;
        }
      }
    }
  }
  scene.build();
}

export const natbelEv: LocationDef = {
  name: 'natbelEv',
  title: '<<$npc_firstname[\'A16\']>> <<$npc_lastname[\'A16\']>>',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
