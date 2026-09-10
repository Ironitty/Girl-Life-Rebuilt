// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ShoQuality ?? 0) <= 1) {
  } else {
    if (((s as any).ShoQuality ?? 0) === 3) {
    } else {
      if (((s as any).ShoQuality ?? 0) === 5) {
      }
    }
  }
  scene.build();
}

export const _shoe_description2: LocationDef = {
  name: '_shoe_description2',
  region: 'other',
  enter: enter,
};
