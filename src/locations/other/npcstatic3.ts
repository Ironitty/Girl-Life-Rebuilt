// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

export const npcstatic3: LocationDef = {
  name: 'npcstatic3',
  region: 'other',
  enter: enter,
};
