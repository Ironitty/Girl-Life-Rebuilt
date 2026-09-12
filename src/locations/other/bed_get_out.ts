import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).inSleep = 0;
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['stat_display'] = 0;
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['slept_in'] = 0;
  (s as any).strip_here = 0;
  (s as any).SleepHorny = 0;
  scene.actions([{ label: 'Continue', goto: ['bed_get_out', 'mod_sleeptriggers'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterModSleeptriggers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'bed_get_out', 'mod_sleeptriggers');
  scene.actions([{ label: 'Continue', goto: ['bed_get_out_events', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fullmorrout ?? 0) === 1) {
    if (((s as any).loc ?? 0) === 'bedrPar') {
      scene.actions([{ label: 'Continue', goto: ['vanrPar', ''] }]);
    } else {
      if (((s as any).loc ?? 0) === 'bedr') {
        scene.actions([{ label: 'Continue', goto: ['vanr', ''] }]);
      }
    }
  }
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
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
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bed_get_out: LocationDef = {
  name: 'bed_get_out',
  region: 'other',
  enter: enter,
};
