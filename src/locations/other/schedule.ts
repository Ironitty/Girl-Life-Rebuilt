import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'miroslava_schedule', 'cikl');
  qspCall(s, 'gp_elene_schedule', 'cikl');
  qspCall(s, 'gp_zlatek_schedule', 'cikl');
  return;
  scene.build();
}

export const schedule: LocationDef = {
  name: 'schedule',
  region: 'other',
  enter: enter,
};
