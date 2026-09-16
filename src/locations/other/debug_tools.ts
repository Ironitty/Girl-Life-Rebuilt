import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTrace(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'loc_change') {
    if (((s as any).debug ?? 0)?.['trace_loc_change'] === 0) {
      // TODO-QSP: exit
    }
    ((s as any).debug = (s as any).debug ?? {})['trace_line'] = '\'' + ((s as any).curloc ?? 0) + '\'';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'direct') {
      if (Object.keys((s as any).trace_locations ?? {}).length === 0) {
        // TODO-QSP: exit
      }
      if ((Array.isArray((s as any).trace_locations) ? ((s as any).trace_locations as any[]).indexOf(((s as any).locArgs?.[2] ?? 0)) : -1) === -1) {
        // TODO-QSP: exit
      }
      ((s as any).debug = (s as any).debug ?? {})['trace_line'] = '\'' + ((s as any).locArgs?.[2] ?? 0) + '\'';
    } else {
      return;
    }
  }
  ((s as any).debug = (s as any).debug ?? {})['trace_index'] = 0;
  // TODO-QSP: :trace_loc_change_loop
  if (((s as any).debug ?? 0)?.['trace_index'] < Object.keys((s as any).trace_args ?? {}).length) {
    if (((s as any).trace_args ?? 0)[((s as any).debug ?? 0)?.['trace_index']] !== '') {
      ((s as any).debug = (s as any).debug ?? {})['trace_line'] = ((s as any).debug['trace_line'] ?? 0) + (', \'' + qspUntranslated(s, "trace_args[debug['trace_index']]", { location: "debug_tools" }) + '\'');
    } else {
      if (((s as any).trace_args ?? 0)[((s as any).debug ?? 0)?.['trace_index']] !== 0) {
        ((s as any).debug = (s as any).debug ?? {})['trace_line'] = ((s as any).debug['trace_line'] ?? 0) + (', ' + qspUntranslated(s, "trace_args[debug['trace_index']]", { location: "debug_tools" }) + '');
      } else {
        ((s as any).debug = (s as any).debug ?? {})['trace_line'] = ((s as any).debug['trace_line'] ?? 0) + (', /DEF');
      }
    }
    ((s as any).debug = (s as any).debug ?? {})['trace_index'] = ((s as any).debug['trace_index'] ?? 0) + (1);
    // TODO-QSP: jump 'trace_loc_change_loop'
  }
  ((s as any).debug = (s as any).debug ?? {})['' + String((s as any).$ARGS[1] || '') + '_trace'] = ((s as any).debug['' + String((s as any).$ARGS[1] || '') + '_trace'] ?? 0) + (((s as any).debug ?? 0)?.['trace_line'] + '<br>');
  if (((s as any).debug ?? 0)?.['trace_shown'] !== 0) {
    qspCall(s, 'stat_display', '');
  }
  scene.build();
}

function enterTraceListLocs(s: GameState, scene: SceneBuilder): void {
  (s as any).tmp_i = 0;
  // TODO-QSP: :list_locs_loop
  if (((s as any).tmp_i ?? 0) < Object.keys((s as any).trace_locations ?? {}).length) {
    // TODO-QSP: $tmp_msg += $trace_locations[tmp_i] + '<br>'
    (s as any).tmp_i = ((s as any).tmp_i ?? 0) + (1);
    // TODO-QSP: jump 'list_locs_loop'
  }
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  ((s as any).debug = (s as any).debug ?? {})['loc_change_trace'] = '';
  ((s as any).debug = (s as any).debug ?? {})['direct_trace'] = '';
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'trace':
      enterTrace(s, scene);
      break;
    case 'trace_list_locs':
      enterTraceListLocs(s, scene);
      break;
    case 'reset':
      enterReset(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const debug_tools: LocationDef = {
  name: 'debug_tools',
  region: 'other',
  enter: enter,
};
