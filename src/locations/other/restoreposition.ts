// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $MWindow[]
  (s as any).MWindow = undefined;
  (s as any).AWindow = undefined;
  scene.build();
}

export const restoreposition: LocationDef = {
  name: 'restoreposition',
  region: 'other',
  enter: enter,
};
