// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_energy ?? 0) > 100) {
  } else {
    if (((s as any).pcs_energy ?? 0) >= 60) {
    }
  }
  scene.build();
}

export const food: LocationDef = {
  name: 'food',
  title: 'You buy some vegetarian Piroshki.',
  region: 'other',
  enter: enter,
};
