import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).debug ?? 0)?.['trace_loc_change'] === 1) {
    (s as any)[ARGS] ? (s as any)[ARGS] = { ...(s as any)[trace_args] } : (s as any)[ARGS] = { ...(s as any)[trace_args] };
    (s as any)[ARGS] ? (s as any)[ARGS] = { ...(s as any)[trace_args] } : (s as any)[ARGS] = { ...(s as any)[trace_args] };
    qspCall(s, 'debug_tools', 'trace', 'loc_change');
  }
  if ((!((s as any).settingmode ?? 0))) {
    (s as any).cheatmenu = undefined;
  }
  (s as any)[ARGS] ? (s as any)[ARGS] = { ...(s as any)[modARGS] } : (s as any)[ARGS] = { ...(s as any)[modARGS] };
  qspCall(s, 'mod_system', 'LOCA');
  qspCall(s, 'LOCA_events', '');
  scene.build();
}

export const LOCA: LocationDef = {
  name: 'LOCA',
  region: 'other',
  enter: enter,
};
