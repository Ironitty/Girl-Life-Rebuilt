import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'loc_change') {
    if (((s as any).debug ?? 0)?.['trace_loc_change'] === 0) {
      // TODO-QSP: exit
    }
    (s as any).debug['trace_line'] = '\'<<$curloc>>\'';
  } else {
    if (Object.keys((s as any).trace_locations ?? {}).length === 0) {
      // TODO-QSP: exit
    }
    if ((Array.isArray((s as any).trace_locations) ? ((s as any).trace_locations as any[]).indexOf(((s as any).locArgs?.[2] ?? 0)) : -1) === -1) {
      // TODO-QSP: exit
    }
    (s as any).debug['trace_line'] = '\'<<$ARGS[2]>>\'';
    return;
  }
  (s as any).debug['trace_index'] = 0;
  // TODO-QSP: :trace_loc_change_loop
  if (((s as any).debug ?? 0)?.['trace_index'] < Object.keys((s as any).trace_args ?? {}).length) {
    if (((s as any).trace_args ?? 0)[((s as any).debug ?? 0)?.['trace_index']] !== '') {
      (s as any).debug['trace_line'] = ((s as any).debug['trace_line'] ?? 0) + (', \'<<$trace_args[debug[\'trace_index\']]>>\'');
    } else {
      (s as any).debug['trace_line'] = ((s as any).debug['trace_line'] ?? 0) + (', <<trace_args[debug[\'trace_index\']]>>');
      (s as any).debug['trace_line'] = ((s as any).debug['trace_line'] ?? 0) + (', /DEF');
    }
    (s as any).debug['trace_index'] = ((s as any).debug['trace_index'] ?? 0) + (1);
    // TODO-QSP: jump 'trace_loc_change_loop'
  }
  (s as any).debug['' + String((s as any).$ARGS[1] || '') + '_trace'] = ((s as any).debug['' + String((s as any).$ARGS[1] || '') + '_trace'] ?? 0) + (((s as any).debug ?? 0)?.['trace_line'] + '<((s as any).br ?? 0)>');
  if (((s as any).debug ?? 0)?.['trace_shown'] !== 0) {
    qspCall(s, 'stat_display', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'trace_list_locs') {
    (s as any).tmp_i = 0;
    // TODO-QSP: :list_locs_loop
    if (((s as any).tmp_i ?? 0) < Object.keys((s as any).trace_locations ?? {}).length) {
      // TODO-QSP: $tmp_msg += $trace_locations[tmp_i] + '<br>'
      (s as any).tmp_i = ((s as any).tmp_i ?? 0) + (1);
      // TODO-QSP: jump 'list_locs_loop'
    }
  } else {
    (s as any).debug['loc_change_trace'] = '';
    (s as any).debug['direct_trace'] = '';
  }
  scene.build();
}

export const debug_tools: LocationDef = {
  name: 'debug_tools',
  region: 'other',
  enter: enter,
};
