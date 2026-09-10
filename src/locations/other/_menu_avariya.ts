import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'obj_din', 'emergency');
  scene.build();
}

export const _menu_avariya: LocationDef = {
  name: '_menu_avariya',
  region: 'other',
  enter: enter,
};
