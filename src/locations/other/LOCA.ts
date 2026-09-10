import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).debug ?? 0)?.['trace_loc_change'] === 1) {
    // TODO-QSP: copyarr '$trace_args', '$ARGS'
    // TODO-QSP: copyarr 'trace_args', 'ARGS'
    qspCall(s, 'debug_tools', 'trace', 'loc_change');
  }
  if (((s as any).settingmode ?? 0) === 0) {
    // TODO-QSP: killvar 'cheatmenu'
  }
  // TODO-QSP: copyarr 'modARGS', 'ARGS'
  qspCall(s, 'mod_system', 'LOCA');
  qspCall(s, 'LOCA_events', '');
  scene.build();
}

export const LOCA: LocationDef = {
  name: 'LOCA',
  region: 'other',
  enter: enter,
};
