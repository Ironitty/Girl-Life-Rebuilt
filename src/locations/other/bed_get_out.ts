import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterModSleeptriggers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'bed_get_out', 'mod_sleeptriggers');
  // TODO-QSP: xgt 'bed_get_out_events', 'start'
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fullmorrout ?? 0) === 1) {
    if (((s as any).loc ?? 0) === 'bedrPar') {
      scene.actions([{ label: 'Continue', goto: ['vanrPar', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['vanr', ''] }]);
    }
  }
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mod_sleeptriggers':
      enterModSleeptriggers(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterModSleeptriggers(s, scene);
      break;
  }
}

export const bed_get_out: LocationDef = {
  name: 'bed_get_out',
  region: 'other',
  enter: enter,
};
