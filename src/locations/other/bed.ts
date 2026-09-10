import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'bed', 'mod_sleeptriggers');
  scene.actions([{ label: 'Continue', goto: ['bed_events', 'start'] }]);
  scene.build();
}

export const bed: LocationDef = {
  name: 'bed',
  region: 'other',
  enter: enter,
};
