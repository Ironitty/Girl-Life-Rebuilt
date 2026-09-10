// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).tab_tmp = 0;
  scene.build();
}

export const show_table: LocationDef = {
  name: 'show_table',
  region: 'other',
  enter: enter,
};
