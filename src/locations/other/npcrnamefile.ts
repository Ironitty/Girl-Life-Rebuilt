// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'rusMale') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'rusFemale') {
    }
  }
  scene.build();
}

export const npcrnamefile: LocationDef = {
  name: 'npcrnamefile',
  region: 'other',
  enter: enter,
};
