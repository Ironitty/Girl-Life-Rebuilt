import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  dynamicGoto(s, 'menu_settings');
  scene.build();
}

export const mod_setting: LocationDef = {
  name: 'mod_setting',
  region: 'other',
  enter: enter,
};
