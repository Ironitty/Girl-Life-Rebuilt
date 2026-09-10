import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'anushka_konstantinov_schedule', '');
  qspCall(s, 'valentin_bogdanov_schedule', '');
  qspCall(s, 'arkadi_fyodorov_schedule', '');
  qspCall(s, 'radomir_popov_schedule', '');
  scene.build();
}

export const anushapt_city_schedule: LocationDef = {
  name: 'anushapt_city_schedule',
  region: 'other',
  enter: enter,
};
