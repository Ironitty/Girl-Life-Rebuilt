import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTrackExp(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).exp_ignored_stats) ? ((s as any).exp_ignored_stats as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0  &&  ((Array.isArray((s as any).att_name) ? ((s as any).att_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) >= 0  ||  (Array.isArray((s as any).skl_name) ? ((s as any).skl_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) >= 0)) {
    ((s as any).exp_tracked_values = (s as any).exp_tracked_values ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).exp_tracked_values[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
    if ((Array.isArray((s as any).exp_tracked_names) ? ((s as any).exp_tracked_names as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0) {
      (s as any).exp_tracked_names = [...((s as any).exp_tracked_names ?? []), ((s as any).locArgs?.[1] ?? 0)];
    }
  }
  scene.build();
}

function enterGetMessage(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  if (qspFunc(s, 'exp_notification', 'is_empty')) {
    return;
  }
  (s as any).loop_counter = 0;
  (s as any).tracked_values_size = 0;
  do {
    (s as any).tracked_stat = (((s as any).exp_tracked_names ?? 0)?.[String((s as any).loop_counter ?? 0)] ?? 0);
    if (((s as any).att_desc ?? 0)?.[String((s as any).tracked_stat ?? 0)] !== '') {
      (s as any).tracked_stat_description = (((s as any).att_desc ?? 0)?.[String((s as any).tracked_stat ?? 0)] ?? 0);
    } else {
      (s as any).tracked_stat_description = (((s as any).skl_desc ?? 0)?.[String((s as any).tracked_stat ?? 0)] ?? 0);
    }
    if (((s as any).exp_tracked_values ?? 0)?.[String((s as any).tracked_stat ?? 0)] > 0) {
      (s as any).result = ((s as any).result ?? 0) + (((((s as any).result ?? 0) !== '') ? ('&ensp;') : ('')) + '↑&nbsp;' + ((s as any).tracked_stat_description ?? 0) + '&nbsp;[' + (((s as any).exp_tracked_values ?? 0)?.[String((s as any).tracked_stat ?? 0)] ?? 0) + ']');
    }
    (s as any).loop_counter = ((s as any).loop_counter ?? 0) + (1);
    (s as any).result = '<span style="font-weight:normal">' + ((s as any).result ?? 0) + '</span>';
    (s as any).tracked_stat = undefined;
    (s as any).tracked_stat_description = undefined;
    (s as any).loop_counter = undefined;
    (s as any).tracked_values_size = undefined;
    (s as any).exp_tracked_values = undefined;
    (s as any).exp_tracked_names = undefined;
    return;
  } while (((s as any).loop_counter ?? 0) < ((s as any).tracked_values_size ?? 0));
  scene.build();
}

function enterIsEmpty(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (Object.keys((s as any).exp_tracked_names ?? {}).length === 0);
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).exp_ignored_stats = (s as any).exp_ignored_stats ?? {})[0] = 'magik';
  ((s as any).exp_ignored_stats = (s as any).exp_ignored_stats ?? {})[1] = 'stren_plus';
  ((s as any).exp_ignored_stats = (s as any).exp_ignored_stats ?? {})[2] = 'butt_tr';
  ((s as any).exp_ignored_stats = (s as any).exp_ignored_stats ?? {})[3] = 'heels';
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
