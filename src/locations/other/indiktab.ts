// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    return;
  }
  if (((s as any).locArgs?.[0] ?? 0) === 2) {
    return;
  }
  if (((s as any).locArgs?.[0] ?? 0) === 3) {
    return;
  }
  return;
  scene.build();
}

export const indiktab: LocationDef = {
  name: 'indiktab',
  region: 'other',
  enter: enter,
};
