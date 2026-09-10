import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cheatmenu_din', '');
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'index'] }]);
  scene.build();
}

export const _menu_cheat: LocationDef = {
  name: '_menu_cheat',
  region: 'other',
  enter: enter,
};
