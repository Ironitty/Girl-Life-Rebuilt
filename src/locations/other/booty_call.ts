import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterScheduler(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call', 'booty_call_scheduler');
  scene.build();
}

function enterBootyCallScheduler(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bc_i = 0;
  // TODO-QSP: :bc_sched_loop
  if (((s as any).temp_bc_i ?? 0) < ((s as any).arrsize ?? 0)('lover')) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'fuckbuddy') {
      qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).temp_bc_id ?? 0));
      qspCall(s, 'booty_call', 'bc_npc_stat_update', ((s as any).temp_bc_id ?? 0));
      if (((s as any).daystart ?? 0) > ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).temp_bc_id ?? 0)]  &&  (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === ((s as any).daystart ?? 0)  ||  Math.floor(Math.random() * 300) + 0 < (((s as any).npc_rel ?? 0)?.[String((s as any).temp_bc_id ?? 0)] + 20 * ((s as any).npc_sexdrive ?? 0)?.[String((s as any).temp_bc_id ?? 0)]))) {
        qspCall(s, 'booty_call', 'schedule_sms', ((s as any).temp_bc_id ?? 0));
      }
    } else {
      qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).temp_bc_id ?? 0));
      qspCall(s, 'booty_call', 'bc_npc_stat_update', ((s as any).temp_bc_id ?? 0));
      if (((s as any).daystart ?? 0) > ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).temp_bc_id ?? 0)]  &&  (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === ((s as any).daystart ?? 0)  ||  Math.floor(Math.random() * 300) + 0 < (((s as any).npc_rel ?? 0)?.[String((s as any).temp_bc_id ?? 0)] + 20 * ((s as any).npc_sexdrive ?? 0)?.[String((s as any).temp_bc_id ?? 0)]))) {
        if (((s as any).daystart ?? 0) >= (((s as any).npc_sugar_daddy_timer ?? 0)?.[String((s as any).temp_bc_id ?? 0)] - (((s as any).npc_rel ?? 0)?.[String((s as any).temp_bc_id ?? 0)] - 40) / 6)) {
          (s as any).sugar_daddy_call[$temp_bc_id] = 1;
          qspCall(s, 'booty_call', 'schedule_sms', ((s as any).temp_bc_id ?? 0));
        }
      }
    }
    (s as any).temp_bc_i = ((s as any).temp_bc_i ?? 0) + (1);
    // TODO-QSP: jump 'bc_sched_loop'
  }
  scene.build();
}

function enterScheduleSms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_booty_call ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', $ARGS[1], "gs 'booty_call_sms', 'start', '<<$ARGS[1]>>'", "totminu...
  } else {
    // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', $ARGS[1], "gs 'booty_call_sms', 'start', '<<$ARGS[1]>>'", "totminu...
    if (((s as any).week ?? 0) !== ((s as any).npc_day_off ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', $ARGS[1], "gs 'booty_call_sms', 'start', '<<$ARGS[1]>>'", "totminu...
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'scheduler':
      enterScheduler(s, scene);
      break;
    case 'booty_call_scheduler':
      enterBootyCallScheduler(s, scene);
      break;
    case 'schedule_sms':
      enterScheduleSms(s, scene);
      break;
    default:
      enterScheduler(s, scene);
      break;
  }
}

export const booty_call: LocationDef = {
  name: 'booty_call',
  title: 'hey <<$pcs_nickname>>',
  region: 'other',
  enter: enter,
};
