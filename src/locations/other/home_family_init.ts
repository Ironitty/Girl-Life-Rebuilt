import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'family_schedule', '');
  scene.build();
}

export const home_family_init: LocationDef = {
  name: 'home_family_init',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
