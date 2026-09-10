import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'employed') {
    return;
  }
  (s as any).employment_conflict = 1 - qspFunc(s, 'jobs', 'check_employment_possible', qspUntranslated(s, "\u00000\u0000", { location: "jobs" }), (-1));
  if (((s as any).arrpos ?? 0)('job_list', ((s as any).locArgs?.[1] ?? 0)) === -1) {
    // TODO-QSP: $job_list[] = $ARGS[1]
  }
  qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: $job_status[$ARGS[1]] = 'employed'
  // TODO-QSP: job_added[$ARGS[1]] = daystart
  // TODO-QSP: job_pay_rate[$ARGS[1]] = job_pay_rate_def[$ARGS[1]]
  // TODO-QSP: $job_pay_interval[$ARGS[1]] = $job_pay_interval_def[$ARGS[1]]
  // TODO-QSP: job_worked_count[$ARGS[1]] = 0
  // TODO-QSP: job_bonus_pay[$ARGS[1]] = 0
  // TODO-QSP: job_docked_pay[$ARGS[1]] = 0
  // TODO-QSP: job_last_work_day[$ARGS[1]] = 0
  // TODO-QSP: job_clocked_in[$ARGS[1]] = 0
  // TODO-QSP: job_missed_total[$ARGS[1]] = 0
  // TODO-QSP: job_shifts_this_period[$ARGS[1]] = 0
  if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'fixed'  ||  ((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'windowed') {
    if (((s as any).job_add_to_calendar ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
      qspCall(s, 'jobs', 'create_recurring_event', ((s as any).locArgs?.[1] ?? 0));
    } else {
      // TODO-QSP: $job_event_id[$ARGS[1]] = ''
    }
  } else {
    if (((s as any).job_create_availability_events ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
      qspCall(s, 'jobs', 'create_availability_events', ((s as any).locArgs?.[1] ?? 0));
    } else {
      // TODO-QSP: $job_event_id[$ARGS[1]] = ''
    }
    if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'booking') {
      // TODO-QSP: $job_event_id[$ARGS[1]] = ''
      // TODO-QSP: job_bookings_active[$ARGS[1]] = 0
      // TODO-QSP: job_booking_debt[$ARGS[1]] = 0
    }
    if (((s as any).job_schedule_switchable ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1  &&  ((s as any).job_work_days ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', 1'] !== '') {
      // TODO-QSP: $job_active_schedule[$ARGS[1]] = '0'
    }
    return;
  }
  scene.build();
}

export const jobs: LocationDef = {
  name: 'jobs',
  title: '&#9679; Employed',
  region: 'other',
  enter: enter,
};
