import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).npc_last_booty_call ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_std_test ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    qspCall(s, 'booty_call_sms', 'Add_std_free_SMS', ((s as any).locArgs?.[1] ?? 0));
  } else {
    qspCall(s, 'booty_call_sms', 'Add_pre-planned_SMS', ((s as any).locArgs?.[1] ?? 0));
    if (((s as any).sugar_daddy_call ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
      qspCall(s, 'booty_call_sms', 'Add_new_booty_call_SMS', ((s as any).locArgs?.[1] ?? 0));
    } else {
      qspCall(s, 'booty_call_sms', 'Add_delayed_booty_call_SMS', ((s as any).locArgs?.[1] ?? 0));
      qspCall(s, 'booty_call_sms', 'Add_new_booty_call_SMS', ((s as any).locArgs?.[1] ?? 0));
    }
  }
  scene.build();
}

export const booty_call_sms: LocationDef = {
  name: 'booty_call_sms',
  region: 'other',
  enter: enter,
};
