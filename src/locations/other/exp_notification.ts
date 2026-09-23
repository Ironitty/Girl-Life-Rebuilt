import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTrackExp(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).exp_ignored_stats) ? ((s as any).exp_ignored_stats as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0  &&  ((Array.isArray((s as any).att_name) ? ((s as any).att_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) >= 0  ||  (Array.isArray((s as any).skl_name) ? ((s as any).skl_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) >= 0)) {
    // TODO-QSP: exp_tracked_values[$ARGS[1]] += ARGS[2]
    if ((Array.isArray((s as any).exp_tracked_names) ? ((s as any).exp_tracked_names as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0) {
      // TODO-QSP: $exp_tracked_names[] = $ARGS[1]
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetMessage(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  if (qspFunc(s, 'exp_notification', 'is_empty')) {
    // TODO-QSP: exit
  }
  (s as any).loop_counter = 0;
  (s as any).tracked_values_size = 0;
  // TODO-QSP: :exp_notification_loop
  (s as any).tracked_stat = ((s as any).exp_tracked_names ?? 0)?.[String((s as any).loop_counter ?? 0)];
  if (((s as any).att_desc ?? 0)?.[String((s as any).tracked_stat ?? 0)] !== '') {
    (s as any).tracked_stat_description = ((s as any).att_desc ?? 0)?.[String((s as any).tracked_stat ?? 0)];
  } else {
    (s as any).tracked_stat_description = ((s as any).skl_desc ?? 0)?.[String((s as any).tracked_stat ?? 0)];
  }
  if (((s as any).exp_tracked_values ?? 0)?.[String((s as any).tracked_stat ?? 0)] > 0) {
    // TODO-QSP: $result += iif($result <> '', '&ensp;', '') + '↑&nbsp;<<$tracked_stat_description>>&nbsp;[<<exp_trac...
  }
  (s as any).loop_counter = ((s as any).loop_counter ?? 0) + (1);
  if (((s as any).loop_counter ?? 0) < ((s as any).tracked_values_size ?? 0)) {
    // TODO-QSP: jump 'exp_notification_loop'
  }
  (s as any).result = '<span style="font-weight:normal">' + ((s as any).result ?? 0) + '</span>';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsEmpty(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (Object.keys((s as any).exp_tracked_names ?? {}).length === 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $exp_ignored_stats[0] = 'magik'
  // TODO-QSP: $exp_ignored_stats[1] = 'stren_plus'
  // TODO-QSP: $exp_ignored_stats[2] = 'butt_tr'
  // TODO-QSP: $exp_ignored_stats[3] = 'heels'
  const arg = s.locArg;
  switch (arg) {
    case 'track_exp':
      enterTrackExp(s, scene);
      break;
    case 'get_message':
      enterGetMessage(s, scene);
      break;
    case 'is_empty':
      enterIsEmpty(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const exp_notification: LocationDef = {
  name: 'exp_notification',
  region: 'other',
  enter: enter,
};
