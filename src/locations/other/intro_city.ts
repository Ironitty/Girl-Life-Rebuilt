// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['intro_end', 'start'] }]);
  scene.build();
}

export const intro_city: LocationDef = {
  name: 'intro_city',
  region: 'other',
  enter: enter,
};
