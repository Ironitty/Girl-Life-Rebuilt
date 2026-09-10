import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).rand_events_list_last ?? 0)[((s as any).rand_events_temp ?? 0)?.['loc'] + '_' + ((s as any).rand_events_temp ?? 0)?.['name']] + ((s as any).rand_events_temp ?? 0)?.['cooldown'] * 60 > ((s as any).totminut ?? 0)) {
    // TODO-QSP: exit
  }
  (s as any).temp_freq = qspUntranslated(s, "max(0, rand_events_temp['freq'])", { location: "random_events" });
  if (((s as any).temp_freq ?? 0) === 0) {
    // TODO-QSP: exit
  }
  (s as any).rand_events_total_weight = ((s as any).rand_events_total_weight ?? 0) + (((s as any).temp_freq ?? 0));
  // TODO-QSP: rand_events_cumweight[] = rand_events_total_weight
  // TODO-QSP: $rand_events_list_locs[] = $rand_events_temp['loc']
  // TODO-QSP: $rand_events_list_name[] = $rand_events_temp['name']
  return;
  scene.build();
}

export const random_events: LocationDef = {
  name: 'random_events',
  region: 'other',
  enter: enter,
};
