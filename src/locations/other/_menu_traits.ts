import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  dynamicGoto(s, 'menu_character');
  scene.build();
}

export const _menu_traits: LocationDef = {
  name: '_menu_traits',
  region: 'other',
  enter: enter,
};
