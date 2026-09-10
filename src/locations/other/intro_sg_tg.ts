// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['intro_start', 'start'] }]);
  scene.build();
}

export const intro_sg_tg: LocationDef = {
  name: 'intro_sg_tg',
  region: 'other',
  enter: enter,
};
