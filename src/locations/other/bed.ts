import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).shour = 24 - ((s as any).hour ?? 0);
  qspCall(s, 'stat', '');
  qspGoto(s, 'bed', 'mod_sleeptriggers');
  // TODO-QSP: end
  scene.build();
}

function enterModSleeptriggers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'bed', 'mod_sleeptriggers');
  qspGoto(s, 'bed_events', 'start');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'mod_sleeptriggers':
      enterModSleeptriggers(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bed: LocationDef = {
  name: 'bed',
  region: 'other',
  enter: enter,
};
