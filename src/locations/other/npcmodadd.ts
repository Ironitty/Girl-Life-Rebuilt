// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npclastmodaddedn ?? 0) < 1000) {
    (s as any).npclastmodaddedn = 1000;
  }
  (s as any).npclastmodaddedn = ((s as any).npclastmodaddedn ?? 0) + (1);
  scene.build();
}

export const npcmodadd: LocationDef = {
  name: 'npcmodadd',
  region: 'other',
  enter: enter,
};
