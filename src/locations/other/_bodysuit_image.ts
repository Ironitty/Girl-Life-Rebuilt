// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'moncheri') {
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'lusso') {
    }
  }
  scene.build();
}

export const _bodysuit_image: LocationDef = {
  name: '_bodysuit_image',
  region: 'other',
  enter: enter,
};
