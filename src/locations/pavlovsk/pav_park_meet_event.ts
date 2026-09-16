import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).pav_park_meet_event_type = ((s as any).locArgs?.[0] ?? 0);
  if (((s as any).pav_park_meet_event_type ?? 0) ==='kol') {
    qspCall(s, 'pav_park_meet_kol_event', 'meet_start');
  } else {
    if (((s as any).pav_park_meet_event_type ?? 0) ==='kol_more') {
      qspCall(s, 'pav_park_meet_kol_event', 'meet_start_1');
    } else {
      if (((s as any).pav_park_meet_event_type ?? 0) ==='kol_deep') {
        qspCall(s, 'pav_park_meet_kol_event', 'meet_start_2');
      }
    }
  }
  scene.build();
}

export const pav_park_meet_event: LocationDef = {
  name: 'pav_park_meet_event',
  region: 'pavlovsk',
  enter: enter,
};
