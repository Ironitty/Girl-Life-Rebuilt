import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetEmployed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'employed') {
    return;
  }
  (s as any).employment_conflict = 1 - qspFunc(s, 'jobs', 'check_employment_possible', ((s as any).locArgs?.[1] ?? 0), (-1));
  if ((Array.isArray((s as any).job_list) ? ((s as any).job_list as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) === -1) {
    (s as any).job_list = [...((s as any).job_list ?? []), ((s as any).locArgs?.[1] ?? 0)];
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).job_status = (s as any).job_status ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'employed';
  ((s as any).job_added = (s as any).job_added ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).daystart ?? 0);
  ((s as any).job_pay_rate = (s as any).job_pay_rate ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).job_pay_rate_def ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).job_pay_interval = (s as any).job_pay_interval ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).job_pay_interval_def ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).job_worked_count = (s as any).job_worked_count ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_bonus_pay = (s as any).job_bonus_pay ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_docked_pay = (s as any).job_docked_pay ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_last_work_day = (s as any).job_last_work_day ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_clocked_in = (s as any).job_clocked_in ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_missed_total = (s as any).job_missed_total ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_shifts_this_period = (s as any).job_shifts_this_period ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'fixed'  ||  ((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'windowed') {
    if (((s as any).job_add_to_calendar ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCreateRecurringEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      ((s as any).job_event_id = (s as any).job_event_id ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
    }
  } else {
    if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'on_demand') {
      if (((s as any).job_create_availability_events ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCreateAvailabilityEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        ((s as any).job_event_id = (s as any).job_event_id ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
      }
    } else {
      if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'booking') {
        ((s as any).job_event_id = (s as any).job_event_id ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
        ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
        ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      }
    }
  }
  if (((s as any).job_schedule_switchable ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1  &&  ((s as any).job_work_days ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', 1'] !== '') {
    ((s as any).job_active_schedule = (s as any).job_active_schedule ?? {})[((s as any).locArgs?.[1] ?? 0)] = '0';
  }
  return;
  scene.build();
}

function enterSetTerminated(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'terminated']; enterEndEmployment(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterSetFired(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'fired']; enterEndEmployment(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterEndEmployment(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_status = (s as any).job_status ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).job_termination_day = (s as any).job_termination_day ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).daystart ?? 0);
  if (((s as any).job_event_id ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
    qspCall(s, 'calendar_events', 'remove_event', (((s as any).job_event_id ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
    ((s as any).job_event_id = (s as any).job_event_id ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
  }
  if (((s as any).job_bookings_active ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterClearAllBookings(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).temp_pos = qspUntranslated(s, "arrpos('job_list', ARGS[1])", { location: "jobs" });
  if (((s as any).temp_pos ?? 0) >= 0) {
    (s as any).job_list = undefined;
  }
  (s as any).temp_pos = undefined;
  return;
  scene.build();
}

function enterSuspendJob(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'employed'  &&  ((s as any).job_suspended ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    ((s as any).job_suspended = (s as any).job_suspended ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    ((s as any).job_clocked_in = (s as any).job_clocked_in ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    if (((s as any).job_event_id ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
      qspCall(s, 'calendar_events', 'remove_event', (((s as any).job_event_id ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
      ((s as any).job_event_id = (s as any).job_event_id ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
    }
    if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'booking'  ||  ((s as any).job_bookings_active ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterClearAllBookings(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  return;
  scene.build();
}

function enterResumeJob(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'employed'  &&  ((s as any).job_suspended ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).job_suspended = (s as any).job_suspended ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'fixed'  ||  ((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'windowed') {
      if (((s as any).job_add_to_calendar ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCreateRecurringEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'on_demand') {
        if (((s as any).job_create_availability_events ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCreateAvailabilityEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterSetRank(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_rank = (s as any).job_rank ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).locArgs?.[2] ?? 0);
  return;
  scene.build();
}

function enterResolveScheduleIdx(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_active_schedule ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
    (s as any).result = parseFloat((((s as any).job_active_schedule ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
  } else {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterClock(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_shift ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', 0'] === 0  &&  ((s as any).job_title ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).job_pay_interval ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'hourly'  ||  ((s as any).job_pay_interval_def ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'hourly') {
    ((s as any).job_worked_count = (s as any).job_worked_count ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_worked_count[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ((((s as any).job_shift ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(qspFunc(s, 'jobs', 'resolve_schedule_idx', ((s as any).locArgs?.[1] ?? 0)))] ?? 0));
  } else {
    ((s as any).job_worked_count = (s as any).job_worked_count ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_worked_count[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (1);
  }
  ((s as any).job_last_work_day = (s as any).job_last_work_day ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).daystart ?? 0);
  ((s as any).job_clocked_in = (s as any).job_clocked_in ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).totminut ?? 0);
  ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_shifts_total[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (1);
  ((s as any).job_shifts_this_period = (s as any).job_shifts_this_period ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_shifts_this_period[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (1);
  return;
  scene.build();
}

function enterClockIn(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_last_work_day = (s as any).job_last_work_day ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).daystart ?? 0);
  if (((s as any).job_clocked_in ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    ((s as any).job_clocked_in = (s as any).job_clocked_in ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).totminut ?? 0);
  }
  return;
  scene.build();
}

function enterClockOut(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_clocked_in ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).job_worked_count = (s as any).job_worked_count ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_worked_count[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (((s as any).totminut ?? 0) - ((s as any).job_clocked_in ?? 0)[((s as any).locArgs?.[1] ?? 0)]);
    ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_shifts_total[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (1);
    ((s as any).job_shifts_this_period = (s as any).job_shifts_this_period ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_shifts_this_period[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (1);
    ((s as any).job_last_work_day = (s as any).job_last_work_day ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).daystart ?? 0);
    ((s as any).job_clocked_in = (s as any).job_clocked_in ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  }
  return;
  scene.build();
}

function enterMissedShift(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_missed_total = (s as any).job_missed_total ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_missed_total[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (1);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).job_penalty_per_miss ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_booking_debt[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ((((s as any).job_penalty_per_miss ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
    if (((s as any).job_penalty_max_debt ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
      if (((s as any).job_booking_debt ?? 0)[String((s as any).locArgs?.[1] ?? '')] >= ((s as any).job_penalty_max_debt ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
        ((s as any).job_termination_reason = (s as any).job_termination_reason ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'no_show';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterSetFired(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  return;
  scene.build();
}

function enterDailyCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_dc_idx = 0;
  while (true) {
    if (((s as any).temp_dc_idx ?? 0) < Object.keys((s as any).job_list ?? {}).length) {
      (s as any).temp_dc_job = (((s as any).job_list ?? 0)?.[String((s as any).temp_dc_idx ?? 0)] ?? 0);
      if (((s as any).job_status ?? 0)?.[String((s as any).temp_dc_job ?? 0)] === 'employed'  &&  ((s as any).job_suspended ?? 0)?.[String((s as any).temp_dc_job ?? 0)] === 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_dc_job ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (((s as any).job_schedule_mode ?? 0)?.[String((s as any).temp_dc_job ?? 0)] === 'booking') {
          (s as any).temp_dc_max_slot = (((s as any).job_booking_slots_per_day ?? 0)?.[String((s as any).temp_dc_job ?? 0)] ?? 0);
          if (((s as any).temp_dc_max_slot ?? 0) < 1) {
            (s as any).temp_dc_max_slot = 1;
          }
          (s as any).temp_dc_yesterday = ((s as any).daystart ?? 0) - 1;
          (s as any).temp_dc_slot = 0;
          while (true) {
            if (((s as any).temp_dc_slot ?? 0) < ((s as any).temp_dc_max_slot ?? 0)) {
              (s as any).temp_dc_booking_data = (((s as any).job_booking ?? 0)?.[((s as any).temp_dc_job ?? 0) + ', ' + String(((s as any).temp_dc_yesterday ?? 0)) + ', ' + String(((s as any).temp_dc_slot ?? 0))] ?? 0);
              if (((s as any).temp_dc_booking_data ?? 0) !== '') {
                if (((s as any).job_last_work_day ?? 0)?.[String((s as any).temp_dc_job ?? 0)] < ((s as any).temp_dc_yesterday ?? 0)) {
                  if (((s as any).job_on_miss_handler ?? 0)?.[String((s as any).temp_dc_job ?? 0)] !== '') {
                    ((s as any).job_missed_total = (s as any).job_missed_total ?? {})[String((s as any).temp_dc_job ?? 0)] = ((s as any).job_missed_total[String((s as any).temp_dc_job ?? 0)] ?? 0) + (1);
                    qspCall(s, '$job_on_miss_handler[$temp_dc_job]', '$job_on_miss_handler_func[$temp_dc_job]', ((s as any).temp_dc_job ?? 0), ((s as any).temp_dc_booking_data ?? 0));
                  } else {
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_dc_job ?? 0)]; enterMissedShift(s, scene); (s as any).locArgs = __savedLocArgs; }
                  }
                }
              }
              (s as any).temp_dc_booking_data = undefined;
              (s as any).temp_dc_slot = ((s as any).temp_dc_slot ?? 0) + (1);
              break;
            }
            (s as any).temp_dc_daybefore = ((s as any).daystart ?? 0) - 2;
            (s as any).temp_dc_slot = 0;
            while (true) {
              if (((s as any).temp_dc_slot ?? 0) < ((s as any).temp_dc_max_slot ?? 0)) {
                if (((s as any).job_booking ?? 0)[((s as any).temp_dc_job ?? 0) + ', ' + String(((s as any).temp_dc_daybefore ?? 0)) + ', ' + String(((s as any).temp_dc_slot ?? 0))] !== '') {
                  ((s as any).job_booking = (s as any).job_booking ?? {})[((s as any).temp_dc_job ?? 0) + ', ' + String(((s as any).temp_dc_daybefore ?? 0)) + ', ' + String(((s as any).temp_dc_slot ?? 0))] = '';
                  ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})[String((s as any).temp_dc_job ?? 0)] = ((s as any).job_bookings_active[String((s as any).temp_dc_job ?? 0)] ?? 0) - (1);
                  if (((s as any).job_bookings_active ?? 0)?.[String((s as any).temp_dc_job ?? 0)] < 0) {
                    ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})[String((s as any).temp_dc_job ?? 0)] = 0;
                  }
                  (s as any).temp_dc_evt = 'job_booking_' + ((s as any).temp_dc_job ?? 0) + '_' + String(((s as any).temp_dc_daybefore ?? 0)) + '_' + String(((s as any).temp_dc_slot ?? 0));
                  qspCall(s, 'calendar_events', 'remove_event', ((s as any).temp_dc_evt ?? 0));
                  (s as any).temp_dc_evt = undefined;
                }
                (s as any).temp_dc_slot = ((s as any).temp_dc_slot ?? 0) + (1);
                break;
              }
              (s as any).temp_dc_daybefore = undefined;
              (s as any).temp_dc_max_slot = undefined;
              (s as any).temp_dc_slot = undefined;
            }
          }
        } else {
          (s as any).temp_dc_yesterday = ((s as any).daystart ?? 0) - 1;
          if (qspFunc(s, 'jobs', 'is_work_day', ((s as any).temp_dc_job ?? 0), ((s as any).temp_dc_yesterday ?? 0)) === 1) {
            if (((s as any).job_last_work_day ?? 0)?.[String((s as any).temp_dc_job ?? 0)] < ((s as any).temp_dc_yesterday ?? 0)) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_dc_job ?? 0)]; enterMissedShift(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
      if ((Array.isArray((s as any).job_list) ? ((s as any).job_list as any[]).indexOf(((s as any).temp_dc_job ?? 0)) : -1) >= 0) {
        (s as any).temp_dc_idx = ((s as any).temp_dc_idx ?? 0) + (1);
      }
      break;
    }
    (s as any).temp_dc_idx = undefined;
    (s as any).temp_dc_job = undefined;
    (s as any).temp_dc_yesterday = undefined;
    return;
  }
  scene.build();
}

function enterPaycheck(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).result = 0;
  if (((s as any).job_pay_interval ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'shift') {
    (s as any).result = ((s as any).job_worked_count ?? 0)[((s as any).locArgs?.[1] ?? 0)] * ((s as any).job_pay_rate ?? 0)[((s as any).locArgs?.[1] ?? 0)];
  } else {
    if (((s as any).job_pay_interval ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'hourly') {
      (s as any).result = (((s as any).job_worked_count ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 60) * ((s as any).job_pay_rate ?? 0)[((s as any).locArgs?.[1] ?? 0)];
    } else {
      if (((s as any).job_pay_interval ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'weekly') {
        (s as any).result = (((s as any).job_pay_rate ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
      } else {
        if (((s as any).job_pay_interval ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'monthly') {
          (s as any).result = (((s as any).job_pay_rate ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
        } else {
          if (((s as any).job_pay_interval ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'event') {
            (s as any).result = (((s as any).job_pay_rate ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
          } else {
            if (((s as any).job_pay_interval ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'none') {
              (s as any).result = 0;
            }
          }
        }
      }
    }
  }
  (s as any).result = ((s as any).result ?? 0) + ((((s as any).job_bonus_pay ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
  (s as any).result = ((s as any).result ?? 0) - ((((s as any).job_docked_pay ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
  if (((s as any).result ?? 0) < 0) {
    (s as any).result = 0;
  }
  ((s as any).job_worked_count = (s as any).job_worked_count ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_bonus_pay = (s as any).job_bonus_pay ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_docked_pay = (s as any).job_docked_pay ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_clocked_in = (s as any).job_clocked_in ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_shifts_this_period = (s as any).job_shifts_this_period ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_paid_total = (s as any).job_paid_total ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_paid_total[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (((s as any).result ?? 0));
  if (((s as any).result ?? 0) > 0) {
    qspCall(s, 'money', 'earn', ((s as any).result ?? 0), ((s as any).locArgs?.[2] ?? 0));
  }
  qspCall(s, 'stat', '');
  return;
  scene.build();
}

function enterBonusPay(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_bonus_pay = (s as any).job_bonus_pay ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_bonus_pay[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterDockPay(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_docked_pay = (s as any).job_docked_pay ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_docked_pay[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterIsWorkDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_check_day = ((s as any).locArgs?.[2] ?? 0);
  if ((!((s as any).temp_check_day ?? 0))) {
    (s as any).temp_check_day = ((s as any).daystart ?? 0);
  }
  if (((s as any).job_title ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'fixed'  ||  ((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'windowed') {
    (s as any).result = qspFunc(s, 'jobs', 'matches_recurring_schedule', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_check_day ?? 0));
  } else {
    if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'on_demand') {
      if (((String(' ' + (((s as any).job_available_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ' ').indexOf(String(' ' + String(qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).temp_check_day ?? 0))) + ' '))) + 1) > 0) {
        (s as any).result = 1;
      } else {
        (s as any).result = 0;
      }
    } else {
      if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'booking') {
        if (((s as any).job_status ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'employed') {
          (s as any).result = qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_check_day ?? 0));
          if ((!((s as any).result ?? 0))) {
            if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_check_day ?? 0) - 1) === 1) {
              while (true) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_check_day ?? 0) - 1]; enterGetShiftForDay(s, scene); (s as any).locArgs = __savedLocArgs; }
                (s as any).temp_iwd_si = 0;
                while (true) {
                  if (((s as any).temp_iwd_si ?? 0) < ((s as any).result_slot_count ?? 0)) {
                    if (((s as any).result_slot_end ?? 0)?.[String((s as any).temp_iwd_si ?? 0)] > 1440) {
                      (s as any).result = 1;
                      break;
                    }
                    (s as any).temp_iwd_si = ((s as any).temp_iwd_si ?? 0) + (1);
                    break;
                  }
                }
                break;
              }
              // LABEL: iwd_crossmid_done
              (s as any).temp_iwd_si = undefined;
            }
          }
        } else {
          (s as any).result = 0;
        }
      }
    }
  }
  (s as any).temp_check_day = undefined;
  return;
  scene.build();
}

function enterIsWorkTime(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'work']; enterIsTimeCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterIsArrivalTime(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'arrival']; enterIsTimeCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterIsTimeCheck(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_itc_now = ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0);
  if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'booking') {
    while (true) {
      (s as any).result = 0;
      if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0)) === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0)]; enterGetShiftForDay(s, scene); (s as any).locArgs = __savedLocArgs; }
        (s as any).temp_itc_i = 0;
        while (true) {
          if (((s as any).temp_itc_i ?? 0) < ((s as any).result_slot_count ?? 0)) {
            if (String((s as any).locArgs?.[2] ?? '') === 'work') {
              if (((s as any).temp_itc_now ?? 0) >= ((s as any).result_slot_arrival ?? 0)?.[String((s as any).temp_itc_i ?? 0)]  &&  ((s as any).temp_itc_now ?? 0) < ((s as any).result_slot_end ?? 0)?.[String((s as any).temp_itc_i ?? 0)]) {
                (s as any).result = 1;
                break;
              }
            } else {
              if (((s as any).temp_itc_now ?? 0) >= ((s as any).result_slot_arrival ?? 0)?.[String((s as any).temp_itc_i ?? 0)]  &&  ((s as any).temp_itc_now ?? 0) < ((s as any).result_slot_start ?? 0)?.[String((s as any).temp_itc_i ?? 0)]) {
                (s as any).result = 1;
                break;
              }
            }
            (s as any).temp_itc_i = ((s as any).temp_itc_i ?? 0) + (1);
            break;
          }
        }
      }
      if (String((s as any).locArgs?.[2] ?? '') === 'work'  &&  ((s as any).job_status ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'employed'  &&  qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0) - 1) === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0) - 1]; enterGetShiftForDay(s, scene); (s as any).locArgs = __savedLocArgs; }
        (s as any).temp_itc_i = 0;
        while (true) {
          if (((s as any).temp_itc_i ?? 0) < ((s as any).result_slot_count ?? 0)) {
            if (((s as any).result_slot_end ?? 0)?.[String((s as any).temp_itc_i ?? 0)] > 1440) {
              if (((s as any).temp_itc_now ?? 0) < ((s as any).result_slot_end ?? 0)?.[String((s as any).temp_itc_i ?? 0)] - 1440) {
                (s as any).result = 1;
                break;
              }
            }
            (s as any).temp_itc_i = ((s as any).temp_itc_i ?? 0) + (1);
            break;
          }
        }
      }
      break;
    }
    // LABEL: itc_done
    (s as any).temp_itc_now = undefined;
    (s as any).temp_itc_i = undefined;
    return;
  }
  if (qspFunc(s, 'jobs', 'is_work_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0)) === 0) {
    (s as any).result = 0;
    (s as any).temp_itc_now = undefined;
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0)]; enterGetShiftForDay(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'fixed'  ||  ((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'windowed') {
    if (String((s as any).locArgs?.[2] ?? '') === 'work') {
      if (((s as any).temp_itc_now ?? 0) >= ((s as any).result_arrival ?? 0)  &&  ((s as any).temp_itc_now ?? 0) < ((s as any).result_start ?? 0) + ((s as any).result_duration ?? 0)) {
        (s as any).result = 1;
      } else {
        (s as any).result = 0;
      }
    } else {
      if (((s as any).temp_itc_now ?? 0) >= ((s as any).result_arrival ?? 0)  &&  ((s as any).temp_itc_now ?? 0) < ((s as any).result_start ?? 0)) {
        (s as any).result = 1;
      } else {
        (s as any).result = 0;
      }
    }
  } else {
    if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'on_demand') {
      if (((s as any).temp_itc_now ?? 0) >= ((s as any).job_available_start ?? 0)[String((s as any).locArgs?.[1] ?? '')]  &&  ((s as any).temp_itc_now ?? 0) <= ((s as any).job_available_end ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
        (s as any).result = 1;
      } else {
        (s as any).result = 0;
      }
    }
  }
  (s as any).temp_itc_now = undefined;
  return;
  scene.build();
}

function enterGetShiftForDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_check_day = ((s as any).locArgs?.[2] ?? 0);
  if ((!((s as any).temp_check_day ?? 0))) {
    (s as any).temp_check_day = ((s as any).daystart ?? 0);
  }
  if (((s as any).job_title ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'booking') {
    (s as any).result_slot_arrival = undefined;
    (s as any).result_slot_start = undefined;
    (s as any).result_slot_end = undefined;
    (s as any).result_slot_count = 0;
    (s as any).temp_gsfd_max_slot = (((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
    if (((s as any).temp_gsfd_max_slot ?? 0) < 1) {
      (s as any).temp_gsfd_max_slot = 1;
    }
    (s as any).temp_gsfd_slot = 0;
    while (true) {
      if (((s as any).temp_gsfd_slot ?? 0) < ((s as any).temp_gsfd_max_slot ?? 0)) {
        if (((s as any).job_booking ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', ' + String(((s as any).temp_check_day ?? 0)) + ', ' + String(((s as any).temp_gsfd_slot ?? 0))] !== '') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_gsfd_slot ?? 0)]; enterResolveSlotTiming(s, scene); (s as any).locArgs = __savedLocArgs; }
          ((s as any).result_slot_arrival = (s as any).result_slot_arrival ?? {})[String((s as any).result_slot_count ?? 0)] = ((s as any).temp_resolved_arrival ?? 0);
          ((s as any).result_slot_start = (s as any).result_slot_start ?? {})[String((s as any).result_slot_count ?? 0)] = ((s as any).temp_resolved_start ?? 0);
          ((s as any).result_slot_end = (s as any).result_slot_end ?? {})[String((s as any).result_slot_count ?? 0)] = ((s as any).temp_resolved_end ?? 0);
          (s as any).result_slot_count = ((s as any).result_slot_count ?? 0) + (1);
          (s as any).temp_resolved_arrival = undefined;
          (s as any).temp_resolved_start = undefined;
          (s as any).temp_resolved_end = undefined;
        }
        (s as any).temp_gsfd_slot = ((s as any).temp_gsfd_slot ?? 0) + (1);
        break;
      }
      if (((s as any).result_slot_count ?? 0) > 0) {
        (s as any).result_arrival = (((s as any).result_slot_arrival ?? 0)?.[0] ?? 0);
        (s as any).result_start = (((s as any).result_slot_start ?? 0)?.[0] ?? 0);
        (s as any).result_end = (((s as any).result_slot_end ?? 0)?.[0] ?? 0);
        (s as any).temp_gsfd_i = 1;
        while (true) {
          if (((s as any).temp_gsfd_i ?? 0) < ((s as any).result_slot_count ?? 0)) {
            if (((s as any).result_slot_arrival ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)] < ((s as any).result_arrival ?? 0)) {
              (s as any).result_arrival = (((s as any).result_slot_arrival ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)] ?? 0);
            }
            if (((s as any).result_slot_start ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)] < ((s as any).result_start ?? 0)) {
              (s as any).result_start = (((s as any).result_slot_start ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)] ?? 0);
            }
            if (((s as any).result_slot_end ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)] > ((s as any).result_end ?? 0)) {
              (s as any).result_end = (((s as any).result_slot_end ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)] ?? 0);
            }
            (s as any).temp_gsfd_i = ((s as any).temp_gsfd_i ?? 0) + (1);
            break;
          }
          (s as any).result_duration = ((s as any).result_end ?? 0) - ((s as any).result_start ?? 0);
          if (((s as any).result_duration ?? 0) < 0) {
            (s as any).result_duration = 0;
          }
        }
      } else {
        (s as any).result_arrival = 0;
        (s as any).result_start = 0;
        (s as any).result_duration = 0;
        (s as any).result_end = 0;
      }
      (s as any).temp_check_day = undefined;
      (s as any).temp_gsfd_max_slot = undefined;
      (s as any).temp_gsfd_slot = undefined;
      (s as any).temp_gsfd_i = undefined;
      return;
    }
  }
  (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).temp_check_day ?? 0));
  (s as any).temp_schedule_idx = qspFunc(s, 'jobs', 'resolve_schedule_idx', ((s as any).locArgs?.[1] ?? 0));
  (s as any).temp_found = 0;
  (s as any).temp_idx = ((s as any).temp_schedule_idx ?? 0);
  while (true) {
    (s as any).temp_work_days = (((s as any).job_work_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_idx ?? 0))] ?? 0);
    if (((s as any).temp_work_days ?? 0) !== '') {
      if (((String(' ' + ((s as any).temp_work_days ?? 0) + ' ').indexOf(String(' ' + String(((s as any).temp_weekday ?? 0)) + ' '))) + 1) > 0) {
        (s as any).result_arrival = (((s as any).job_arrival ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_idx ?? 0))] ?? 0);
        (s as any).result_start = (((s as any).job_start ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_idx ?? 0))] ?? 0);
        (s as any).result_duration = (((s as any).job_shift ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_idx ?? 0))] ?? 0);
        (s as any).temp_found = 1;
      }
    }
    if (((s as any).temp_found ?? 0) === 0  &&  ((s as any).temp_work_days ?? 0) !== ''  &&  ((s as any).job_schedule_switchable ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
      (s as any).temp_idx = ((s as any).temp_idx ?? 0) + (1);
      break;
    }
    if ((!((s as any).temp_found ?? 0))) {
      (s as any).result_arrival = 0;
      (s as any).result_start = 0;
      (s as any).result_duration = 0;
    }
    (s as any).temp_check_day = undefined;
    (s as any).temp_schedule_idx = undefined;
    (s as any).temp_weekday = undefined;
    (s as any).temp_found = undefined;
    (s as any).temp_idx = undefined;
    (s as any).temp_work_days = undefined;
    return;
  }
  scene.build();
}

function enterNextWorkDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_nwd_start_day = ((s as any).locArgs?.[2] ?? 0);
  if ((!((s as any).temp_nwd_start_day ?? 0))) {
    (s as any).temp_nwd_start_day = ((s as any).daystart ?? 0);
  }
  (s as any).temp_nwd_check = ((s as any).temp_nwd_start_day ?? 0) + 1;
  (s as any).temp_nwd_max = ((s as any).temp_nwd_start_day ?? 0) + 14;
  (s as any).result = 0;
  while (true) {
    if (((s as any).temp_nwd_check ?? 0) <= ((s as any).temp_nwd_max ?? 0)) {
      if (qspFunc(s, 'jobs', 'is_work_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_nwd_check ?? 0)) === 1) {
        (s as any).result = ((s as any).temp_nwd_check ?? 0);
        return;
      }
      (s as any).temp_nwd_check = ((s as any).temp_nwd_check ?? 0) + (1);
      break;
    }
    (s as any).temp_nwd_start_day = undefined;
    (s as any).temp_nwd_check = undefined;
    (s as any).temp_nwd_max = undefined;
    return;
  }
  scene.build();
}

function enterMatchesRecurringSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_check_day = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).temp_check_day ?? 0));
  if (((s as any).job_work_dates ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
    qspCall(s, 'time', 'to_date', ((s as any).temp_check_day ?? 0));
    (s as any).temp_mmdd = (((s as any).dateVars ?? {})?.['month'] ?? 0) * 100 + (((s as any).dateVars ?? {})?.['day'] ?? 0);
    (s as any).temp_season_start = parseFloat((String((((s as any).job_work_dates ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)).slice((1)-1, ((1)-1)+(4))));
    (s as any).temp_season_end = parseFloat((String((((s as any).job_work_dates ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)).slice((6)-1, ((6)-1)+(4))));
    if (((s as any).temp_mmdd ?? 0) < ((s as any).temp_season_start ?? 0)  ||  ((s as any).temp_mmdd ?? 0) > ((s as any).temp_season_end ?? 0)) {
      (s as any).result = 0;
      (s as any).temp_check_day = undefined;
      (s as any).temp_weekday = undefined;
      (s as any).temp_mmdd = undefined;
      (s as any).temp_season_start = undefined;
      (s as any).temp_season_end = undefined;
      return;
    }
    (s as any).temp_mmdd = undefined;
    (s as any).temp_season_start = undefined;
    (s as any).temp_season_end = undefined;
  }
  (s as any).temp_schedule_idx = qspFunc(s, 'jobs', 'resolve_schedule_idx', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = 0;
  (s as any).temp_idx = ((s as any).temp_schedule_idx ?? 0);
  while (true) {
    (s as any).temp_work_days = (((s as any).job_work_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_idx ?? 0))] ?? 0);
    if (((s as any).temp_work_days ?? 0) !== '') {
      if (((String(' ' + ((s as any).temp_work_days ?? 0) + ' ').indexOf(String(' ' + String(((s as any).temp_weekday ?? 0)) + ' '))) + 1) > 0) {
        (s as any).result = 1;
        return;
      }
      if (((s as any).job_schedule_switchable ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
        (s as any).temp_idx = ((s as any).temp_idx ?? 0) + (1);
        break;
      }
    }
    (s as any).temp_check_day = undefined;
    (s as any).temp_weekday = undefined;
    (s as any).temp_month = undefined;
    (s as any).temp_schedule_idx = undefined;
    (s as any).temp_idx = undefined;
    (s as any).temp_work_days = undefined;
    return;
  }
  scene.build();
}

function enterGetShiftFromRecurrence(s: GameState, scene: SceneBuilder): void {
  (s as any).check_day = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).check_day ?? 0));
  (s as any).temp_pos = 1;
  do {
    (s as any).temp_semi = ((String(((s as any).locArgs?.[1] ?? 0)).indexOf(String(';'))) + 1);
    if ((!((s as any).temp_semi ?? 0))) {
      (s as any).temp_semi = (String(((s as any).locArgs?.[1] ?? 0)).length) + 1;
    }
    (s as any).temp_shift = (String(((s as any).locArgs?.[1] ?? 0)).slice((((s as any).temp_pos ?? 0))-1, ((((s as any).temp_pos ?? 0))-1)+(((s as any).temp_semi ?? 0) - ((s as any).temp_pos ?? 0))));
    (s as any).temp_pipe1 = ((String(((s as any).temp_shift ?? 0)).indexOf(String('|'))) + 1);
    (s as any).temp_pipe2 = ((String(((s as any).temp_shift ?? 0)).indexOf(String('|'))) + 1);
    (s as any).temp_pipe3 = ((String(((s as any).temp_shift ?? 0)).indexOf(String('|'))) + 1);
    if (((s as any).temp_pipe1 ?? 0) > 0  &&  ((s as any).temp_pipe2 ?? 0) > 0  &&  ((s as any).temp_pipe3 ?? 0) > 0) {
      (s as any).temp_days = (String(((s as any).temp_shift ?? 0)).slice((1)-1, ((1)-1)+(((s as any).temp_pipe1 ?? 0) - 1)));
      (s as any).temp_arrival = parseFloat((String(((s as any).temp_shift ?? 0)).slice((((s as any).temp_pipe1 ?? 0) + 1)-1, ((((s as any).temp_pipe1 ?? 0) + 1)-1)+(((s as any).temp_pipe2 ?? 0) - ((s as any).temp_pipe1 ?? 0) - 1))));
      (s as any).temp_start = parseFloat((String(((s as any).temp_shift ?? 0)).slice((((s as any).temp_pipe2 ?? 0) + 1)-1, ((((s as any).temp_pipe2 ?? 0) + 1)-1)+(((s as any).temp_pipe3 ?? 0) - ((s as any).temp_pipe2 ?? 0) - 1))));
      (s as any).temp_duration = parseFloat((String(((s as any).temp_shift ?? 0)).slice((((s as any).temp_pipe3 ?? 0) + 1)-1)));
      if (((String(' ' + ((s as any).temp_days ?? 0) + ' ').indexOf(String(' ' + String(((s as any).temp_weekday ?? 0)) + ' '))) + 1) > 0) {
        (s as any).result_arrival = ((s as any).temp_arrival ?? 0);
        (s as any).result_start = ((s as any).temp_start ?? 0);
        (s as any).result_duration = ((s as any).temp_duration ?? 0);
        return;
      }
    }
    (s as any).temp_pos = ((s as any).temp_semi ?? 0) + 1;
    (s as any).result_arrival = 0;
    (s as any).result_start = 0;
    (s as any).result_duration = 0;
    (s as any).check_day = undefined;
    (s as any).temp_weekday = undefined;
    (s as any).temp_pos = undefined;
    (s as any).temp_semi = undefined;
    (s as any).temp_shift = undefined;
    (s as any).temp_pipe1 = undefined;
    (s as any).temp_pipe2 = undefined;
    (s as any).temp_pipe3 = undefined;
    (s as any).temp_days = undefined;
    (s as any).temp_arrival = undefined;
    (s as any).temp_start = undefined;
    (s as any).temp_duration = undefined;
    return;
  } while (((s as any).temp_pos ?? 0) <= (String(((s as any).locArgs?.[1] ?? 0)).length));
  scene.build();
}

function enterClearAllBookings(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_title ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).temp_cab_range = (((s as any).job_booking_window_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  if (((s as any).temp_cab_range ?? 0) < 7) {
    (s as any).temp_cab_range = 7;
  }
  (s as any).temp_cab_max_slot = (((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  if (((s as any).temp_cab_max_slot ?? 0) < 1) {
    (s as any).temp_cab_max_slot = 1;
  }
  (s as any).temp_cab_day = ((s as any).daystart ?? 0);
  (s as any).temp_cab_end = ((s as any).daystart ?? 0) + ((s as any).temp_cab_range ?? 0);
  while (true) {
    if (((s as any).temp_cab_day ?? 0) <= ((s as any).temp_cab_end ?? 0)) {
      (s as any).temp_cab_slot = 0;
      while (true) {
        if (((s as any).temp_cab_slot ?? 0) < ((s as any).temp_cab_max_slot ?? 0)) {
          if (((s as any).job_booking ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', ' + String(((s as any).temp_cab_day ?? 0)) + ', ' + String(((s as any).temp_cab_slot ?? 0))] !== '') {
            ((s as any).job_booking = (s as any).job_booking ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_cab_day ?? 0)) + ', ' + String(((s as any).temp_cab_slot ?? 0))] = '';
            ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_bookings_active[((s as any).locArgs?.[1] ?? 0)] ?? 0) - (1);
            qspCall(s, 'calendar_events', 'remove_event', 'job_booking_' + ((s as any).locArgs?.[1] ?? 0) + '_' + String(((s as any).temp_cab_day ?? 0)) + '_' + String(((s as any).temp_cab_slot ?? 0)));
          }
          (s as any).temp_cab_slot = ((s as any).temp_cab_slot ?? 0) + (1);
          break;
        }
        (s as any).temp_cab_day = ((s as any).temp_cab_day ?? 0) + (1);
        break;
      }
    }
    if (((s as any).job_bookings_active ?? 0)[String((s as any).locArgs?.[1] ?? '')] < 0) {
      ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    }
    (s as any).temp_cab_range = undefined;
    (s as any).temp_cab_max_slot = undefined;
    (s as any).temp_cab_slot = undefined;
    (s as any).temp_cab_day = undefined;
    (s as any).temp_cab_end = undefined;
    return;
  }
  scene.build();
}

function enterBookingCount(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).job_bookings_active ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  scene.build();
}

function enterHasBookingForDay(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).job_title ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).temp_hbfd_max = (((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  if (((s as any).temp_hbfd_max ?? 0) < 1) {
    (s as any).temp_hbfd_max = 1;
  }
  (s as any).temp_hbfd_slot = 0;
  while (true) {
    if (((s as any).temp_hbfd_slot ?? 0) < ((s as any).temp_hbfd_max ?? 0)) {
      if (((s as any).job_booking ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', ' + String(((s as any).locArgs?.[2] ?? 0)) + ', ' + String(((s as any).temp_hbfd_slot ?? 0))] !== '') {
        (s as any).result = 1;
        (s as any).temp_hbfd_max = undefined;
        (s as any).temp_hbfd_slot = undefined;
        return;
      }
      (s as any).temp_hbfd_slot = ((s as any).temp_hbfd_slot ?? 0) + (1);
      break;
    }
    (s as any).temp_hbfd_max = undefined;
    (s as any).temp_hbfd_slot = undefined;
    return;
  }
  scene.build();
}

function enterGetBookingDataForDay(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  if (((s as any).job_title ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).temp_gbdfd_max = (((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  if (((s as any).temp_gbdfd_max ?? 0) < 1) {
    (s as any).temp_gbdfd_max = 1;
  }
  (s as any).temp_gbdfd_slot = 0;
  while (true) {
    if (((s as any).temp_gbdfd_slot ?? 0) < ((s as any).temp_gbdfd_max ?? 0)) {
      if (((s as any).job_booking ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', ' + String(((s as any).locArgs?.[2] ?? 0)) + ', ' + String(((s as any).temp_gbdfd_slot ?? 0))] !== '') {
        (s as any).result = (((s as any).job_booking ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).locArgs?.[2] ?? 0)) + ', ' + String(((s as any).temp_gbdfd_slot ?? 0))] ?? 0);
        (s as any).temp_gbdfd_max = undefined;
        (s as any).temp_gbdfd_slot = undefined;
        return;
      }
      (s as any).temp_gbdfd_slot = ((s as any).temp_gbdfd_slot ?? 0) + (1);
      break;
    }
    (s as any).temp_gbdfd_max = undefined;
    (s as any).temp_gbdfd_slot = undefined;
    return;
  }
  scene.build();
}

function enterGetNextBookingDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_gnbd_day = ((s as any).locArgs?.[2] ?? 0);
  if ((!((s as any).temp_gnbd_day ?? 0))) {
    (s as any).temp_gnbd_day = ((s as any).daystart ?? 0);
  }
  (s as any).temp_gnbd_max = ((s as any).locArgs?.[3] ?? 0);
  if ((!((s as any).temp_gnbd_max ?? 0))) {
    (s as any).temp_gnbd_max = 50;
  }
  (s as any).temp_gnbd_end = ((s as any).temp_gnbd_day ?? 0) + ((s as any).temp_gnbd_max ?? 0);
  (s as any).result = (-1);
  while (true) {
    if (((s as any).temp_gnbd_day ?? 0) < ((s as any).temp_gnbd_end ?? 0)) {
      if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_gnbd_day ?? 0)) === 1) {
        (s as any).result = ((s as any).temp_gnbd_day ?? 0);
        (s as any).temp_gnbd_day = undefined;
        (s as any).temp_gnbd_max = undefined;
        (s as any).temp_gnbd_end = undefined;
        return;
      }
      (s as any).temp_gnbd_day = ((s as any).temp_gnbd_day ?? 0) + (1);
      break;
    }
    (s as any).temp_gnbd_day = undefined;
    (s as any).temp_gnbd_max = undefined;
    (s as any).temp_gnbd_end = undefined;
    return;
  }
  scene.build();
}

function enterBookSlot(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).job_booking ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', ' + String(((s as any).locArgs?.[2] ?? 0)) + ', ' + String(((s as any).locArgs?.[3] ?? 0))] !== '') {
    (s as any).result = 0;
    return;
  }
  if (((s as any).job_booking_max_concurrent ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    if (((s as any).job_bookings_active ?? 0)[String((s as any).locArgs?.[1] ?? '')] >= ((s as any).job_booking_max_concurrent ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      (s as any).result = 0;
      return;
    }
  }
  if (((s as any).job_booking_window_days ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    if (String((s as any).locArgs?.[2] ?? '') < ((s as any).daystart ?? 0)  ||  String((s as any).locArgs?.[2] ?? '') > ((s as any).daystart ?? 0) + ((s as any).job_booking_window_days ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      (s as any).result = 0;
      return;
    }
  }
  if (qspFunc(s, 'jobs', 'check_booking_gap', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 1) {
    (s as any).result = 0;
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)]; enterBuildBookingEventVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'job_booking_' + ((s as any).locArgs?.[1] ?? 0) + '_' + String(((s as any).locArgs?.[2] ?? 0)) + '_' + String(((s as any).locArgs?.[3] ?? 0));
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = (((s as any).job_title ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ' - Booking';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = (((s as any).job_location ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = ((s as any).locArgs?.[4] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 0;
  qspCall(s, 'calendar_list', 'assign_color');
  if (((s as any).job_blocking ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    if (qspFunc(s, 'calendar_events', 'check_event_conflicts') === 1) {
      (s as any).result = 0;
      return;
    }
  }
  ((s as any).job_booking = (s as any).job_booking ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).locArgs?.[2] ?? 0)) + ', ' + String(((s as any).locArgs?.[3] ?? 0))] = ((s as any).locArgs?.[4] ?? 0);
  ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_bookings_active[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (1);
  qspCall(s, 'calendar_events', 'add_event', (((s as any).event_vars ?? 0)?.['id']));
  (s as any).result = 1;
  return;
  scene.build();
}

function enterGetBookingData(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).job_booking ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).locArgs?.[2] ?? 0)) + ', ' + String(((s as any).locArgs?.[3] ?? 0))] ?? 0);
  return;
  scene.build();
}

function enterCheckBookingConflict(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_title ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).job_blocking ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    (s as any).result = 0;
    return;
  }
  if (String((s as any).locArgs?.[3] ?? '') >= 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)]; enterBuildBookingEventVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 0]; enterBuildBookingEventVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'job_booking_conflict_check';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Conflict Check';
  (s as any).result = qspFunc(s, 'calendar_events', 'check_event_conflicts');
  return;
  scene.build();
}

function enterCheckBookingGap(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).result = 0;
  if (((s as any).job_booking_min_gap_days ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    (s as any).temp_cbg_gap = (((s as any).job_booking_min_gap_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
    (s as any).temp_cbg_max_slot = (((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
    if (((s as any).temp_cbg_max_slot ?? 0) < 1) {
      (s as any).temp_cbg_max_slot = 1;
    }
    (s as any).temp_cbg_check = ((s as any).locArgs?.[2] ?? 0) - ((s as any).temp_cbg_gap ?? 0) + 1;
    while (true) {
      if (((s as any).temp_cbg_check ?? 0) <= String((s as any).locArgs?.[2] ?? '') + ((s as any).temp_cbg_gap ?? 0) - 1) {
        (s as any).temp_cbg_slot = 0;
        while (true) {
          if (((s as any).temp_cbg_slot ?? 0) < ((s as any).temp_cbg_max_slot ?? 0)) {
            if (((s as any).job_booking ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', ' + String(((s as any).temp_cbg_check ?? 0)) + ', ' + String(((s as any).temp_cbg_slot ?? 0))] !== '') {
              (s as any).result = 1;
              (s as any).temp_cbg_gap = undefined;
              (s as any).temp_cbg_check = undefined;
              (s as any).temp_cbg_slot = undefined;
              (s as any).temp_cbg_max_slot = undefined;
              return;
            }
            (s as any).temp_cbg_slot = ((s as any).temp_cbg_slot ?? 0) + (1);
            break;
          }
          (s as any).temp_cbg_check = ((s as any).temp_cbg_check ?? 0) + (1);
          break;
        }
      }
      (s as any).temp_cbg_gap = undefined;
      (s as any).temp_cbg_check = undefined;
      (s as any).temp_cbg_slot = undefined;
      (s as any).temp_cbg_max_slot = undefined;
    }
  }
  return;
  scene.build();
}

function enterCancelBooking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_booking ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', ' + String(((s as any).locArgs?.[2] ?? 0)) + ', ' + String(((s as any).locArgs?.[3] ?? 0))] !== '') {
    ((s as any).job_booking = (s as any).job_booking ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).locArgs?.[2] ?? 0)) + ', ' + String(((s as any).locArgs?.[3] ?? 0))] = '';
    ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).job_bookings_active[((s as any).locArgs?.[1] ?? 0)] ?? 0) - (1);
    if (((s as any).job_bookings_active ?? 0)[String((s as any).locArgs?.[1] ?? '')] < 0) {
      ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    }
    qspCall(s, 'calendar_events', 'remove_event', 'job_booking_' + ((s as any).locArgs?.[1] ?? 0) + '_' + String(((s as any).locArgs?.[2] ?? 0)) + '_' + String(((s as any).locArgs?.[3] ?? 0)));
  }
  return;
  scene.build();
}

function enterChangeSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_active_schedule = (s as any).job_active_schedule ?? {})[((s as any).locArgs?.[1] ?? 0)] = String(((s as any).locArgs?.[2] ?? 0));
  if (((s as any).job_event_id ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
    qspCall(s, 'calendar_events', 'remove_event', (((s as any).job_event_id ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCreateRecurringEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterSetJobFile(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_definition_source = (s as any).job_definition_source ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).locArgs?.[2] ?? 0);
  return;
  scene.build();
}

function enterSetJobIcon(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_icons_source = (s as any).job_icons_source ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).locArgs?.[2] ?? 0);
  return;
  scene.build();
}

function enterResolveSlotTiming(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_slot_arrival ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', ' + String(((s as any).locArgs?.[2] ?? 0))] > 0) {
    (s as any).temp_resolved_arrival = (((s as any).job_slot_arrival ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).locArgs?.[2] ?? 0))] ?? 0);
    if (((s as any).job_slot_start ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', ' + String(((s as any).locArgs?.[2] ?? 0))] > 0) {
      (s as any).temp_resolved_start = (((s as any).job_slot_start ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).locArgs?.[2] ?? 0))] ?? 0);
    } else {
      (s as any).temp_resolved_start = ((s as any).temp_resolved_arrival ?? 0);
    }
    (s as any).temp_resolved_end = ((s as any).temp_resolved_start ?? 0) + ((s as any).job_slot_shift ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).locArgs?.[2] ?? 0))];
  } else {
    if (((s as any).job_arrival_start ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
      (s as any).temp_resolved_arrival = (((s as any).job_arrival_start ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
      if (((s as any).job_arrival_end ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
        (s as any).temp_resolved_start = (((s as any).job_arrival_end ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
      } else {
        (s as any).temp_resolved_start = ((s as any).temp_resolved_arrival ?? 0) + 60;
      }
      if (((s as any).job_available_end ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
        (s as any).temp_resolved_end = (((s as any).job_available_end ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
      } else {
        (s as any).temp_resolved_end = ((s as any).temp_resolved_start ?? 0) + 60;
      }
    } else {
      (s as any).temp_resolved_arrival = (((s as any).job_available_start ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
      (s as any).temp_resolved_start = ((s as any).temp_resolved_arrival ?? 0) + 60;
      (s as any).temp_resolved_end = ((((s as any).job_available_end ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) ? ((((s as any).job_available_end ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)) : (((s as any).temp_resolved_start ?? 0) + 60));
    }
  }
  return;
  scene.build();
}

function enterBuildBookingEventVars(s: GameState, scene: SceneBuilder): void {
  (s as any).event_vars = undefined;
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['blocking'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['holiday'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_blocked_months'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[3] ?? 0)]; enterResolveSlotTiming(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = ((s as any).temp_resolved_arrival ?? 0) / 15;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = ((s as any).temp_resolved_start ?? 0) / 15;
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (((s as any).temp_resolved_end ?? 0) - ((s as any).temp_resolved_start ?? 0)) / 15;
  ((s as any).event_vars = (s as any).event_vars ?? {})['exclude_prefix'] = 'job_booking_' + ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_resolved_arrival = undefined;
  (s as any).temp_resolved_start = undefined;
  (s as any).temp_resolved_end = undefined;
  (s as any).temp_bbev_start = undefined;
  (s as any).temp_bbev_shift = undefined;
  return;
  scene.build();
}

function enterGetJobDefinition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_title ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    if (((s as any).job_definition_source ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== ''  &&  hasLocation((((s as any).job_definition_source ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0))) {
      qspCall(s, '$job_definition_source[$ARGS[1]]', '$ARGS[1]');
    } else {
      qspCall(s, 'jobs_list', '$ARGS[1]');
    }
  }
  return;
  scene.build();
}

function enterCheckEmploymentPossible(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).result = 1;
  (s as any).employment_conflict_reason = '';
  if (((s as any).cheatVars ?? 0)?.['work'] !== 0) {
    return;
  }
  if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'on_demand'  &&  ((s as any).job_create_availability_events ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    return;
  }
  if (((s as any).job_blocking ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    return;
  }
  if (Object.keys((s as any).events_list ?? {}).length === 0) {
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterBuildEventVarsForJob(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (qspFunc(s, 'calendar_events', 'check_event_conflicts') === 1) {
    (s as any).result = 0;
    (s as any).employment_conflict_reason = 'Schedule conflicts with existing calendar events';
  }
  return;
  scene.build();
}

function enterBuildEventVarsForJob(s: GameState, scene: SceneBuilder): void {
  (s as any).event_vars = undefined;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'job_' + ((s as any).locArgs?.[1] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = (((s as any).job_title ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = (((s as any).job_location ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Work shift for ' + (((s as any).job_title ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = Math.max(1, ((s as any).daystart ?? 0));
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['blocking'] = (((s as any).job_blocking ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = ((((s as any).job_blocking ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) ? (2) : (1));
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['holiday'] = 0;
  if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'fixed'  ||  ((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'windowed') {
    ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
    if (String((s as any).locArgs?.[2] ?? '') >= 0) {
      (s as any).temp_bev_sched_idx = ((s as any).locArgs?.[2] ?? 0);
    } else {
      (s as any).temp_bev_sched_idx = qspFunc(s, 'jobs', 'resolve_schedule_idx', ((s as any).locArgs?.[1] ?? 0));
    }
    ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = ((s as any).job_arrival ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_bev_sched_idx ?? 0))] / 15;
    ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = ((s as any).job_start ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_bev_sched_idx ?? 0))] / 15;
    ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = ((s as any).job_shift ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_bev_sched_idx ?? 0))] / 15;
    if (((s as any).job_work_dates ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
      ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly-' + (((s as any).job_work_dates ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
    } else {
      ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = (((s as any).job_work_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_bev_sched_idx ?? 0))] ?? 0);
    }
  } else {
    if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'on_demand') {
      ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
      ((s as any).event_vars = (s as any).event_vars ?? {})['blocking'] = 0;
      ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 0;
      ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = ((s as any).job_available_start ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 15;
      ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = ((s as any).job_available_end ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 15;
      ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = 0;
      ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = (((s as any).job_available_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
    } else {
      if (((s as any).job_schedule_mode ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'booking') {
        ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 0;
        ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = 0;
        ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = 0;
        ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '';
      }
    }
  }
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = 0;
  (s as any).temp_bev_sched_idx = undefined;
  return;
  scene.build();
}

function enterCreateRecurringEvent(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), (-1)]; enterBuildEventVarsForJob(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'calendar_list', 'assign_color');
  qspCall(s, 'calendar_events', 'add_event', 'job_' + ((s as any).locArgs?.[1] ?? 0));
  ((s as any).job_event_id = (s as any).job_event_id ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'job_' + ((s as any).locArgs?.[1] ?? 0);
  return;
  scene.build();
}

function enterCreateAvailabilityEvents(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).job_create_availability_events ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), (-1)]; enterBuildEventVarsForJob(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'calendar_list', 'assign_color');
    ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'job_avail_' + ((s as any).locArgs?.[1] ?? 0);
    qspCall(s, 'calendar_events', 'add_event', 'job_avail_' + ((s as any).locArgs?.[1] ?? 0));
    ((s as any).job_event_id = (s as any).job_event_id ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'job_avail_' + ((s as any).locArgs?.[1] ?? 0);
  }
  return;
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0) + 1) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['aurora_jobs'] = 'Aurora Talent Agency commercial shoot scheduled tomorrow at ' + qspFunc(s, 'time', 'get_time_string', 10, 0, (((s as any).cheatVars ?? 0)?.['time_format'])) + '.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'aurora_jobs');
  } else {
    if (((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0)) {
      if (((s as any).hour ?? 0) <= 11) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['aurora_jobs'] = 'Aurora Talent Agency commercial shoot in the city center at ' + qspFunc(s, 'time', 'get_time_string', 10, 0, (((s as any).cheatVars ?? 0)?.['time_format'])) + '!';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'aurora_jobs');
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You have an Aurora commercial shoot today at 10:00.', 'neg');
      }
    }
  }
  if (((s as any).job_status ?? 0)?.['city_pornstudio_delivery'] === 'employed'  &&  ((s as any).workDisk ?? 0) === 0  &&  ((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) >= 9  &&  (!((s as any).workDolg ?? 0))) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['porn_delivery'] = 'You should go to the porn studio today to pick up your delivery assignment.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_delivery');
    qspCall(s, 'stat_display_compute', 'queue_alert', 'Go to the porn studio today for your delivery assignment.', 'neg');
  }
  if (((s as any).week ?? 0) === 5  &&  ((s as any).workDolg ?? 0) === 0  &&  ((s as any).job_status ?? 0)?.['city_pornstudio_delivery'] === 'employed') {
    if (((s as any).workDisk ?? 0) === 2) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['porn_delivery'] = 'You should go to the sauna to do the delivery.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_delivery');
    } else {
      if (((s as any).workDisk ?? 0) === 3) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['porn_delivery'] = 'You should get back to the studio to finish the delivery.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_delivery');
      }
    }
  }
  if (((s as any).workDolg ?? 0) > 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['porn_delivery'] = 'You owe the porn studio ' + qspFunc(s, 'money', 'string_debt', ((s as any).workDolg ?? 0)) + '';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_delivery');
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You owe the porn studio money.', 'neg');
  }
  if (((s as any).job_booking_debt ?? 0)?.['city_pornstudio_actress'] > 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['porn_acting_debt'] = 'You owe the porn studio ' + qspFunc(s, 'money', 'format', (((s as any).job_booking_debt ?? 0)?.['city_pornstudio_actress'])) + '.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_acting_debt');
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You owe the porn studio money for a shoot.', 'neg');
  }
  if (((s as any).firstkasting ?? 0) > 0  &&  ((s as any).pfilmNO ?? 0) < 1) {
    ((s as any).sd_cm = (s as any).sd_cm ?? {})['pa_avail'] = (((s as any).job_booking_max_concurrent ?? {})?.['city_pornstudio_actress'] ?? 0) - (((s as any).job_bookings_active ?? {})?.['city_pornstudio_actress'] ?? 0);
    if (((s as any).sd_cm ?? 0)?.['pa_avail'] > 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['porn_acting_avail'] = 'You can contract ' + ((((s as any).sd_cm ?? 0)?.['pa_avail'] === 1) ? ('1 more') : ('up to ' + String((((s as any).sd_cm ?? 0)?.['pa_avail'])))) + ' porn shoot' + ((((s as any).sd_cm ?? 0)?.['pa_avail'] > 1) ? ('s') : ('')) + ' at the Porn Studio.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_acting_avail');
    }
    (s as any).sd_cm = undefined;
  }
  if (((s as any).job_bookings_active ?? 0)?.['city_pornstudio_actress'] > 0) {
    if (qspFunc(s, 'jobs', 'has_booking_for_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0)) === 0) {
      if (qspFunc(s, 'jobs', 'has_booking_for_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0) + 1) === 0) {
        ((s as any).sd_cm = (s as any).sd_cm ?? {})['porn_next'] = qspFunc(s, 'jobs', 'get_next_booking_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0) + 2, 50);
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['porn_acting_sched'] = 'You have a porn shoot scheduled in ' + (((s as any).sd_cm ?? {})?.['porn_next'] ?? 0) - ((s as any).daystart ?? 0) + ' days.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_acting_sched');
        (s as any).sd_cm = undefined;
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['porn_acting_sched'] = 'You have a porn shoot scheduled tomorrow.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_acting_sched');
      }
    }
  }
  ((s as any).sd_si = (s as any).sd_si ?? {})['max'] = 0;
  if (((s as any).sd_si ?? 0)?.['max'] > 0) {
    ((s as any).sd_si = (s as any).sd_si ?? {})['now'] = ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0);
    ((s as any).sd_si = (s as any).sd_si ?? {})['idx'] = 0;
    while (true) {
      if (((s as any).sd_si ?? 0)?.['idx'] < ((s as any).sd_si ?? 0)?.['max']) {
        ((s as any).sd_si = (s as any).sd_si ?? {})['job'] = qspUntranslated(s, "job_list[sd_si['idx']]", { location: "jobs" });
        if (((s as any).job_status ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 'employed'  &&  ((s as any).job_suspended ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 0) {
          if (((s as any).job_title ?? 0)[((s as any).sd_si ?? 0)?.['job']] === '') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).sd_si ?? 0)?.['job'])]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
          if (((s as any).job_show_stat_icon ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 1  &&  qspFunc(s, 'jobs', 'is_work_day', ((s as any).sd_si ?? 0)?.['job'], ((s as any).daystart ?? 0)) === 1) {
            ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = '';
            ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 0;
            ((s as any).sd_si = (s as any).sd_si ?? {})['r_arrival'] = 0;
            ((s as any).sd_si = (s as any).sd_si ?? {})['r_start'] = 0;
            ((s as any).sd_si = (s as any).sd_si ?? {})['missed_today'] = 0;
            if (((s as any).job_schedule_mode ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 'booking') {
              ((s as any).sd_si = (s as any).sd_si ?? {})['crossmid'] = 0;
              if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).sd_si ?? 0)?.['job'], ((s as any).daystart ?? 0) - 1) === 1) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).sd_si ?? 0)?.['job']), ((s as any).daystart ?? 0) - 1]; enterGetShiftForDay(s, scene); (s as any).locArgs = __savedLocArgs; }
                ((s as any).sd_si = (s as any).sd_si ?? {})['xm_i'] = 0;
                while (true) {
                  if (((s as any).sd_si ?? 0)?.['xm_i'] < ((s as any).result_slot_count ?? 0)) {
                    if (((s as any).result_slot_end ?? 0)[((s as any).sd_si ?? 0)?.['xm_i']] > 1440) {
                      ((s as any).sd_si = (s as any).sd_si ?? {})['overflow'] = ((s as any).result_slot_end ?? 0)[(((s as any).sd_si ?? {})?.['xm_i'] ?? 0)] - 1440;
                      if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0) - 1  &&  ((s as any).job_worked_count ?? 0)[((s as any).sd_si ?? 0)?.['job']] > 0  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).sd_si ?? 0)?.['overflow']) {
                        ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = 'green';
                        ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 1;
                        ((s as any).sd_si = (s as any).sd_si ?? {})['crossmid'] = 1;
                      } else {
                        if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] !== ((s as any).daystart ?? 0) - 1  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).sd_si ?? 0)?.['overflow'] + 60) {
                          ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = 'red';
                          ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 1;
                          ((s as any).sd_si = (s as any).sd_si ?? {})['crossmid'] = 1;
                        }
                      }
                    }
                    ((s as any).sd_si = (s as any).sd_si ?? {})['xm_i'] = ((s as any).sd_si['xm_i'] ?? 0) + (1);
                    if (((s as any).sd_si ?? 0)?.['crossmid'] === 0) {
                      break;
                    }
                  }
                }
              }
              if (((s as any).sd_si ?? 0)?.['crossmid'] === 0  &&  qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).sd_si ?? 0)?.['job'], ((s as any).daystart ?? 0)) === 1) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).sd_si ?? 0)?.['job']), ((s as any).daystart ?? 0)]; enterGetShiftForDay(s, scene); (s as any).locArgs = __savedLocArgs; }
                ((s as any).sd_si = (s as any).sd_si ?? {})['best'] = 0;
                ((s as any).sd_si = (s as any).sd_si ?? {})['slot_i'] = 0;
                while (true) {
                  if (((s as any).sd_si ?? 0)?.['slot_i'] < ((s as any).result_slot_count ?? 0)) {
                    if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0)  &&  ((s as any).job_worked_count ?? 0)[((s as any).sd_si ?? 0)?.['job']] > 0  &&  ((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_slot_arrival ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_slot_end ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]) {
                      ((s as any).sd_si = (s as any).sd_si ?? {})['best'] = 4;
                      ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = 'green';
                    } else {
                      if (((s as any).sd_si ?? 0)?.['best'] < 3  &&  ((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_slot_arrival ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_slot_start ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]) {
                        ((s as any).sd_si = (s as any).sd_si ?? {})['best'] = 3;
                        ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = 'blue';
                        ((s as any).sd_si = (s as any).sd_si ?? {})['r_start'] = qspUntranslated(s, "result_slot_start[sd_si['slot_i']]", { location: "jobs" });
                      } else {
                        if (((s as any).sd_si ?? 0)?.['best'] < 2  &&  ((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] !== ((s as any).daystart ?? 0)  &&  ((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_slot_start ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_slot_end ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']] + 60) {
                          ((s as any).sd_si = (s as any).sd_si ?? {})['best'] = 2;
                          ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = 'red';
                          ((s as any).sd_si = (s as any).sd_si ?? {})['missed_today'] = 1;
                        } else {
                          if (((s as any).sd_si ?? 0)?.['best'] < 1  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_slot_arrival ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]) {
                            ((s as any).sd_si = (s as any).sd_si ?? {})['best'] = 1;
                            ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('white') : ('black'));
                            ((s as any).sd_si = (s as any).sd_si ?? {})['r_arrival'] = qspUntranslated(s, "result_slot_arrival[sd_si['slot_i']]", { location: "jobs" });
                            ((s as any).sd_si = (s as any).sd_si ?? {})['r_start'] = qspUntranslated(s, "result_slot_start[sd_si['slot_i']]", { location: "jobs" });
                          }
                        }
                      }
                    }
                    ((s as any).sd_si = (s as any).sd_si ?? {})['slot_i'] = ((s as any).sd_si['slot_i'] ?? 0) + (1);
                    if (((s as any).sd_si ?? 0)?.['best'] < 4) {
                      break;
                    }
                  }
                  if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0)  &&  ((s as any).sd_si ?? 0)?.['suffix'] === '') {
                    ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 0;
                  } else {
                    if (((s as any).sd_si ?? 0)?.['suffix'] !== '') {
                      ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 1;
                    }
                  }
                }
              }
            } else {
              if (((s as any).job_schedule_mode ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 'on_demand') {
                if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0)) {
                  ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 0;
                } else {
                  ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('white') : ('black'));
                  ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 1;
                }
              } else {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).sd_si ?? 0)?.['job']), ((s as any).daystart ?? 0)]; enterGetShiftForDay(s, scene); (s as any).locArgs = __savedLocArgs; }
                if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0)  &&  ((s as any).job_worked_count ?? 0)[((s as any).sd_si ?? 0)?.['job']] > 0  &&  ((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_arrival ?? 0)  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).iif ?? 0)(((s as any).job_clocked_in ?? 0)[((s as any).sd_si ?? 0)?.['job']] > 0, ((s as any).job_clocked_in ?? 0)[((s as any).sd_si ?? 0)?.['job']], ((s as any).result_start ?? 0)) + ((s as any).result_duration ?? 0)) {
                  ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = 'green';
                  ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 1;
                } else {
                  if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0)) {
                    ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 0;
                  } else {
                    if (((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_start ?? 0)  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_start ?? 0) + ((s as any).result_duration ?? 0) + 60) {
                      ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = 'red';
                      ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 1;
                      ((s as any).sd_si = (s as any).sd_si ?? {})['missed_today'] = 1;
                    } else {
                      if (((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_arrival ?? 0)  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_start ?? 0)) {
                        ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = 'blue';
                        ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 1;
                        ((s as any).sd_si = (s as any).sd_si ?? {})['r_start'] = ((s as any).result_start ?? 0);
                      } else {
                        if (((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_arrival ?? 0)) {
                          ((s as any).sd_si = (s as any).sd_si ?? {})['suffix'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('white') : ('black'));
                          ((s as any).sd_si = (s as any).sd_si ?? {})['show'] = 1;
                          ((s as any).sd_si = (s as any).sd_si ?? {})['r_arrival'] = ((s as any).result_arrival ?? 0);
                          ((s as any).sd_si = (s as any).sd_si ?? {})['r_start'] = ((s as any).result_start ?? 0);
                        }
                      }
                    }
                  }
                }
              }
            }
            if (((s as any).sd_si ?? 0)?.['show'] === 1  &&  ((s as any).sd_si ?? 0)?.['suffix'] !== '') {
              ((s as any).sd_si = (s as any).sd_si ?? {})['f_title'] = (((s as any).job_title ?? 0)?.[(((s as any).sd_si ?? 0)?.['job'])] ?? 0) + ' at ' + (((s as any).job_location ?? 0)?.[(((s as any).sd_si ?? 0)?.['job'])] ?? 0) + ': ';
              ((s as any).sd_si = (s as any).sd_si ?? {})['f_start'] = qspFunc(s, 'time', 'get_time_string', (((s as any).sd_si ?? {})?.['r_start'] ?? 0) / 60, (((s as any).sd_si ?? {})?.['r_start'] ?? 0) % 60);
              ((s as any).sd_si = (s as any).sd_si ?? {})['f_arrival'] = qspFunc(s, 'time', 'get_time_string', (((s as any).sd_si ?? {})?.['r_arrival'] ?? 0) / 60, (((s as any).sd_si ?? {})?.['r_arrival'] ?? 0) % 60);
              if (((s as any).sd_si ?? 0)?.['suffix'] === 'green') {
                ((s as any).sd_si = (s as any).sd_si ?? {})['msg'] = (((s as any).sd_si ?? 0)?.['f_title']) + 'Currently working.';
              } else {
                if (((s as any).sd_si ?? 0)?.['suffix'] === 'blue') {
                  ((s as any).sd_si = (s as any).sd_si ?? {})['msg'] = (((s as any).sd_si ?? 0)?.['f_title']) + 'Your shift starts at ' + (((s as any).sd_si ?? 0)?.['f_start']) + '. Head there now!';
                  qspCall(s, 'stat_display_compute', 'queue_alert', (((s as any).sd_si ?? 0)?.['msg']));
                } else {
                  if (((s as any).sd_si ?? 0)?.['suffix'] === 'red') {
                    ((s as any).sd_si = (s as any).sd_si ?? {})['msg'] = (((s as any).sd_si ?? 0)?.['f_title']) + 'You missed your shift' + ((((s as any).sd_si ?? 0)?.['missed_today'] === 1) ? (' today!') : ('!'));
                  } else {
                    if (((s as any).job_schedule_mode ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 'on_demand') {
                      ((s as any).sd_si = (s as any).sd_si ?? {})['msg'] = (((s as any).sd_si ?? 0)?.['f_title']) + 'Available today.';
                    } else {
                      ((s as any).sd_si = (s as any).sd_si ?? {})['msg'] = (((s as any).sd_si ?? 0)?.['f_title']) + 'Arrive by ' + (((s as any).sd_si ?? 0)?.['f_arrival']) + ', shift starts at ' + (((s as any).sd_si ?? 0)?.['f_start']) + '.';
                      qspCall(s, 'stat_display_compute', 'queue_alert', (((s as any).sd_si ?? 0)?.['msg']));
                    }
                  }
                }
              }
              ((s as any).sd_si = (s as any).sd_si ?? {})['label'] = 'v4_job_' + (((s as any).sd_si ?? 0)?.['job']);
              ((s as any).stat_texts = (s as any).stat_texts ?? {})[(((s as any).sd_si ?? 0)?.['label'])] = (((s as any).sd_si ?? 0)?.['msg']);
              if (((s as any).stat_cfg ?? 0)?.['job_icon_themed'] === 1) {
                ((s as any).sd_si = (s as any).sd_si ?? {})['icon_path'] = 'TODO';
                if (((s as any).sd_si ?? 0)?.['suffix'] === 'green') {
                  ((s as any).sd_si = (s as any).sd_si ?? {})['icon_path'] = ((s as any).sd_si['icon_path'] ?? 0) + (':' + (((s as any).theme_hex ?? 0)?.['v_pos']));
                } else {
                  if (((s as any).sd_si ?? 0)?.['suffix'] === 'blue') {
                    ((s as any).sd_si = (s as any).sd_si ?? {})['icon_path'] = ((s as any).sd_si['icon_path'] ?? 0) + (':' + (((s as any).theme_hex ?? 0)?.['accent']));
                  } else {
                    if (((s as any).sd_si ?? 0)?.['suffix'] === 'red') {
                      ((s as any).sd_si = (s as any).sd_si ?? {})['icon_path'] = ((s as any).sd_si['icon_path'] ?? 0) + (':' + (((s as any).theme_hex ?? 0)?.['v_neg']));
                    }
                  }
                }
              } else {
                ((s as any).sd_si = (s as any).sd_si ?? {})['icon_path'] = ((((s as any).job_icons_source ?? 0)[((s as any).sd_si ?? 0)?.['job']] !== '') ? ((((s as any).job_icons_source ?? 0)?.[(((s as any).sd_si ?? 0)?.['job'])] ?? 0) + '/') : ('status/jobs/')) + (((s as any).sd_si ?? 0)?.['job']) + '_' + (((s as any).sd_si ?? 0)?.['suffix']);
              }
              qspCall(s, 'stat_display_compute', 'queue_msg', (((s as any).sd_si ?? 0)?.['label']), '', (((s as any).sd_si ?? 0)?.['icon_path']), 4);
            }
          }
        }
        ((s as any).sd_si = (s as any).sd_si ?? {})['idx'] = ((s as any).sd_si['idx'] ?? 0) + (1);
        break;
      }
      (s as any).sd_si = undefined;
    }
  }
  return;
  scene.build();
}

function enterCleanupJob(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_event_id ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
    qspCall(s, 'calendar_events', 'remove_event', (((s as any).job_event_id ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
  }
  qspCall(s, 'calendar_events', 'remove_event', 'job_' + ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'calendar_events', 'remove_event', 'job_avail_' + ((s as any).locArgs?.[1] ?? 0));
  ((s as any).job_status = (s as any).job_status ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
  ((s as any).job_rank = (s as any).job_rank ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_added = (s as any).job_added ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_termination_day = (s as any).job_termination_day ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_termination_reason = (s as any).job_termination_reason ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
  ((s as any).job_worked_count = (s as any).job_worked_count ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_shifts_this_period = (s as any).job_shifts_this_period ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_last_work_day = (s as any).job_last_work_day ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_clocked_in = (s as any).job_clocked_in ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_missed_total = (s as any).job_missed_total ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_miss_acknowledged = (s as any).job_miss_acknowledged ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_paid_total = (s as any).job_paid_total ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_suspended = (s as any).job_suspended ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_bonus_pay = (s as any).job_bonus_pay ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_docked_pay = (s as any).job_docked_pay ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_pay_interval = (s as any).job_pay_interval ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
  ((s as any).job_pay_rate = (s as any).job_pay_rate ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_event_id = (s as any).job_event_id ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
  ((s as any).job_active_schedule = (s as any).job_active_schedule ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
  ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).job_recurrence_pattern = (s as any).job_recurrence_pattern ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
  (s as any).temp_booking_range = (((s as any).job_booking_window_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  if (((s as any).temp_booking_range ?? 0) < 7) {
    (s as any).temp_booking_range = 7;
  }
  (s as any).temp_cleanup_max_slot = (((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  if (((s as any).temp_cleanup_max_slot ?? 0) < 1) {
    (s as any).temp_cleanup_max_slot = 1;
  }
  (s as any).temp_day_idx = ((s as any).daystart ?? 0) - ((s as any).temp_booking_range ?? 0);
  while (true) {
    if (((s as any).temp_day_idx ?? 0) <= ((s as any).daystart ?? 0) + ((s as any).temp_booking_range ?? 0)) {
      (s as any).temp_cleanup_slot = 0;
      while (true) {
        if (((s as any).temp_cleanup_slot ?? 0) < ((s as any).temp_cleanup_max_slot ?? 0)) {
          if (((s as any).job_booking ?? 0)[String((s as any).locArgs?.[1] ?? '') + ', ' + String(((s as any).temp_day_idx ?? 0)) + ', ' + String(((s as any).temp_cleanup_slot ?? 0))] !== '') {
            ((s as any).job_booking = (s as any).job_booking ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_day_idx ?? 0)) + ', ' + String(((s as any).temp_cleanup_slot ?? 0))] = '';
            qspCall(s, 'calendar_events', 'remove_event', 'job_booking_' + ((s as any).locArgs?.[1] ?? 0) + '_' + String(((s as any).temp_day_idx ?? 0)) + '_' + String(((s as any).temp_cleanup_slot ?? 0)));
          }
          (s as any).temp_cleanup_slot = ((s as any).temp_cleanup_slot ?? 0) + (1);
          break;
        }
        (s as any).temp_day_idx = ((s as any).temp_day_idx ?? 0) + (1);
        break;
      }
    }
    (s as any).temp_cleanup_max_slot = undefined;
    (s as any).temp_cleanup_slot = undefined;
    ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).job_title = (s as any).job_title ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
    ((s as any).job_location = (s as any).job_location ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
    ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
    ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
    ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).job_work_dates = (s as any).job_work_dates ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
    ((s as any).job_available_days = (s as any).job_available_days ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
    ((s as any).job_available_start = (s as any).job_available_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).job_available_end = (s as any).job_available_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).job_create_availability_events = (s as any).job_create_availability_events ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).job_booking_window_days = (s as any).job_booking_window_days ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).job_booking_slots_per_day = (s as any).job_booking_slots_per_day ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).job_booking_max_concurrent = (s as any).job_booking_max_concurrent ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).job_booking_min_gap_days = (s as any).job_booking_min_gap_days ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).job_arrival_start = (s as any).job_arrival_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).job_arrival_end = (s as any).job_arrival_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    (s as any).temp_cleanup_slot_idx = 0;
    while (true) {
      if (((s as any).temp_cleanup_slot_idx ?? 0) < 4) {
        ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_cleanup_slot_idx ?? 0))] = 0;
        ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_cleanup_slot_idx ?? 0))] = 0;
        ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_cleanup_slot_idx ?? 0))] = 0;
        (s as any).temp_cleanup_slot_idx = ((s as any).temp_cleanup_slot_idx ?? 0) + (1);
        break;
      }
      (s as any).temp_cleanup_slot_idx = undefined;
      ((s as any).job_blocking = (s as any).job_blocking ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      ((s as any).job_refresh_desc = (s as any).job_refresh_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      ((s as any).job_penalty_max_debt = (s as any).job_penalty_max_debt ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      ((s as any).job_on_miss_handler = (s as any).job_on_miss_handler ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
      ((s as any).job_on_miss_handler_func = (s as any).job_on_miss_handler_func ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
      ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      (s as any).temp_schedule_idx = 0;
      while (true) {
        if (((s as any).temp_schedule_idx ?? 0) < 5) {
          ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_schedule_idx ?? 0))] = '';
          ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_schedule_idx ?? 0))] = 0;
          ((s as any).job_start = (s as any).job_start ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_schedule_idx ?? 0))] = 0;
          ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_schedule_idx ?? 0))] = 0;
          ((s as any).job_recurrence_pattern = (s as any).job_recurrence_pattern ?? {})[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_schedule_idx ?? 0))] = '';
          (s as any).temp_schedule_idx = ((s as any).temp_schedule_idx ?? 0) + (1);
          break;
        }
        (s as any).temp_list_idx = qspUntranslated(s, "arrpos('job_list', ARGS[1])", { location: "jobs" });
        if (((s as any).temp_list_idx ?? 0) >= 0) {
          (s as any).job_list = undefined;
        }
        (s as any).temp_schedule_idx = undefined;
        (s as any).temp_day_idx = undefined;
        (s as any).temp_list_idx = undefined;
        (s as any).temp_booking_range = undefined;
        return;
      }
    }
  }
  scene.build();
}

function enterTerminateAllJobs(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_term_idx = 0;
  while (true) {
    if (((s as any).temp_term_idx ?? 0) >= 0) {
      (s as any).temp_term_job = (((s as any).job_list ?? 0)?.[String((s as any).temp_term_idx ?? 0)] ?? 0);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_term_job ?? 0)]; enterCleanupJob(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).temp_term_idx = ((s as any).temp_term_idx ?? 0) - (1);
      break;
    }
    (s as any).temp_term_idx = undefined;
    (s as any).temp_term_job = undefined;
    return;
  }
  scene.build();
}

function enterFormatDays(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '1 2 3 4 5') {
    (s as any).result = 'Mon-Fri';
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '1 2 3 4 5 6') {
    (s as any).result = 'Mon-Sat';
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '1 2 3 4 5 6 7') {
    (s as any).result = 'Every day';
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '2 3 4 5 6') {
    (s as any).result = 'Tue-Sat';
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '6 7') {
    (s as any).result = 'Weekends';
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '6') {
    (s as any).result = 'Saturdays';
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '7') {
    (s as any).result = 'Sundays';
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '3 4') {
    (s as any).result = 'Wed-Thu';
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '5 6') {
    (s as any).result = 'Fri-Sat';
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '4 5 6 7 1 2') {
    (s as any).result = 'Mon-Tue, Thu-Sun';
    return;
  }
  ((s as any).fd_names = (s as any).fd_names ?? {})[1] = 'Mon\' & $fd_names[2] = \'Tue\' & $fd_names[3] = \'Wed';
  ((s as any).fd_names = (s as any).fd_names ?? {})[4] = 'Thu\' & $fd_names[5] = \'Fri\' & $fd_names[6] = \'Sat\' & $fd_names[7] = \'Sun';
  (s as any).result = '';
  (s as any).fd_i = 1;
  do {
    if (((String(((s as any).locArgs?.[1] ?? 0)).indexOf(String(String(((s as any).fd_i ?? 0))))) + 1) > 0) {
      if (((s as any).result ?? 0) !== '') {
        (s as any).result = ((s as any).result ?? '') + ', ';
      }
      (s as any).result = ((s as any).result ?? 0) + ((((s as any).fd_names ?? 0)?.[String((s as any).fd_i ?? 0)] ?? 0));
    }
    (s as any).fd_i = ((s as any).fd_i ?? 0) + (1);
    (s as any).fd_names = undefined;
    (s as any).fd_i = undefined;
    return;
  } while (((s as any).fd_i ?? 0) <= 7);
  scene.build();
}

function enterEnsureRegistry(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).job_registry ?? {}).length < 27) {
    ((s as any).job_registry = (s as any).job_registry ?? {})[0] = 'pav_voc_school_teacher';
    ((s as any).job_registry = (s as any).job_registry ?? {})[1] = 'city_office_secretary';
    ((s as any).job_registry = (s as any).job_registry ?? {})[2] = 'city_cafe_waitress';
    ((s as any).job_registry = (s as any).job_registry ?? {})[3] = 'city_hospital_nurse';
    ((s as any).job_registry = (s as any).job_registry ?? {})[4] = 'city_diner_dishwasher';
    ((s as any).job_registry = (s as any).job_registry ?? {})[5] = 'city_diner_floor_washer';
    ((s as any).job_registry = (s as any).job_registry ?? {})[6] = 'city_office_cleaner';
    ((s as any).job_registry = (s as any).job_registry ?? {})[7] = 'city_office_toilet_cleaner';
    ((s as any).job_registry = (s as any).job_registry ?? {})[8] = 'city_diner_secretary';
    ((s as any).job_registry = (s as any).job_registry ?? {})[9] = 'city_strip_bargirl';
    ((s as any).job_registry = (s as any).job_registry ?? {})[10] = 'city_strip_stripper';
    ((s as any).job_registry = (s as any).job_registry ?? {})[11] = 'city_pussycats_clerk';
    ((s as any).job_registry = (s as any).job_registry ?? {})[12] = 'city_market_saleswoman';
    ((s as any).job_registry = (s as any).job_registry ?? {})[13] = 'city_pornstudio_actress';
    ((s as any).job_registry = (s as any).job_registry ?? {})[14] = 'city_pornstudio_delivery';
    ((s as any).job_registry = (s as any).job_registry ?? {})[15] = 'city_aphrodite_model';
    ((s as any).job_registry = (s as any).job_registry ?? {})[16] = 'city_salon_masseuse';
    ((s as any).job_registry = (s as any).job_registry ?? {})[26] = 'nich_maid';
    ((s as any).job_registry = (s as any).job_registry ?? {})[17] = 'pav_hotel_maid';
    ((s as any).job_registry = (s as any).job_registry ?? {})[18] = 'pav_clinic_cleaner';
    ((s as any).job_registry = (s as any).job_registry ?? {})[19] = 'pav_factory';
    ((s as any).job_registry = (s as any).job_registry ?? {})[20] = 'pav_mailgirl';
    ((s as any).job_registry = (s as any).job_registry ?? {})[21] = 'pav_tour_guide';
    ((s as any).job_registry = (s as any).job_registry ?? {})[22] = 'pav_barbershop_cleaner';
    ((s as any).job_registry = (s as any).job_registry ?? {})[23] = 'pav_train_cleaner';
    ((s as any).job_registry = (s as any).job_registry ?? {})[24] = 'pav_pool_lifeguard';
    ((s as any).job_registry = (s as any).job_registry ?? {})[25] = 'highway_brothel_prostitute';
  }
  return;
  scene.build();
}

function enterCard(s: GameState, scene: SceneBuilder): void {
  (s as any).jc_id = ((s as any).locArgs?.[1] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).jc_id ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).job_card_hidden ?? 0)?.[String((s as any).jc_id ?? 0)] === 1  &&  ((s as any).job_status ?? 0)?.[String((s as any).jc_id ?? 0)] !== 'employed'  &&  ((s as any).job_hiring_step ?? 0)?.[String((s as any).jc_id ?? 0)] === 0  &&  ((s as any).cheatVars ?? 0)?.['show_hidden_jobs'] === 0) {
    (s as any).temp_bcolor = qspFunc(s, 'themes', 'alt_color', ((s as any).temp_bcolor ?? 0));
    ((s as any).card_in = (s as any).card_in ?? {})['icon'] = 'images/system/icons/traits/hidden.png';
    ((s as any).card_in = (s as any).card_in ?? {})['title'] = '???';
    ((s as any).card_in = (s as any).card_in ?? {})['body'] = '<div style="font-size:0.9em; margin-top:4px;">This job is hidden. Keep exploring to unlock it.</div>';
    ((s as any).card_in = (s as any).card_in ?? {})['bg'] = ((s as any).temp_bcolor ?? 0);
    ((s as any).card_in = (s as any).card_in ?? {})['opacity'] = '0.4';
    qspCall(s, 'cards', 'shell');
    (s as any).card_in = undefined;
    (s as any).jc_id = undefined;
    return;
  }
  if (((s as any).job_status ?? 0)?.[String((s as any).jc_id ?? 0)] === 'employed') {
    (s as any).jc_opac = '1.0';
    (s as any).jc_border = (((s as any).theme_hex ?? 0)?.['accent']);
    (s as any).jc_status = qspFunc(s, 'wrap', 'v_pos', '&#9679; Employed');
  } else {
    if (((s as any).job_hiring_step ?? 0)?.[String((s as any).jc_id ?? 0)] > 0) {
      (s as any).jc_opac = '0.85';
      (s as any).jc_border = (((s as any).theme_hex ?? 0)?.['goth']);
      (s as any).jc_status = qspFunc(s, 'wrap', 'pos', '&#9675; Not currently employed');
    } else {
      (s as any).jc_opac = '0.6';
      (s as any).jc_border = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('#555555') : ('#aaaaaa'));
      (s as any).jc_status = qspFunc(s, 'wrap', 'goth', '&#9675; Not employed');
    }
  }
  (s as any).jc_icon = 'images/system/icons/' + ((((s as any).job_icons_source ?? 0)?.[String((s as any).jc_id ?? 0)] !== '') ? ((((s as any).job_icons_source ?? 0)?.[String((s as any).jc_id ?? 0)] ?? 0)) : ('jobs')) + '/' + ((s as any).jc_id ?? 0) + '.png';
  (s as any).jc_slot = ((((s as any).job_active_schedule ?? 0)?.[String((s as any).jc_id ?? 0)] !== '') ? (parseFloat((((s as any).job_active_schedule ?? 0)?.[String((s as any).jc_id ?? 0)] ?? 0))) : (0));
  (s as any).jc_skey = ((s as any).jc_id ?? 0) + ', ' + String(((s as any).jc_slot ?? 0));
  if (((s as any).job_schedule_mode ?? 0)?.[String((s as any).jc_id ?? 0)] === 'booking') {
    (s as any).jc_sched = 'Booking-based — sign up for available slots';
  } else {
    if (((s as any).job_schedule_mode ?? 0)?.[String((s as any).jc_id ?? 0)] === 'on_demand') {
      (s as any).jc_sched = 'On demand, any time';
    } else {
      (s as any).jc_days = qspFunc(s, 'jobs', 'format_days', (((s as any).job_work_days ?? 0)?.[String((s as any).jc_skey ?? 0)] ?? 0));
      (s as any).jc_t_arr = qspFunc(s, 'time', 'get_time_string', (((s as any).job_arrival ?? 0)?.[String((s as any).jc_skey ?? 0)] ?? 0) / 60, (((s as any).job_arrival ?? 0)?.[String((s as any).jc_skey ?? 0)] ?? 0) % 60);
      (s as any).jc_t_st = qspFunc(s, 'time', 'get_time_string', (((s as any).job_start ?? 0)?.[String((s as any).jc_skey ?? 0)] ?? 0) / 60, (((s as any).job_start ?? 0)?.[String((s as any).jc_skey ?? 0)] ?? 0) % 60);
      (s as any).jc_end_m = ((((s as any).job_start ?? 0)?.[String((s as any).jc_skey ?? 0)] ?? 0) + (((s as any).job_shift ?? 0)?.[String((s as any).jc_skey ?? 0)] ?? 0)) % 1440;
      (s as any).jc_t_end = qspFunc(s, 'time', 'get_time_string', ((s as any).jc_end_m ?? 0) / 60, ((s as any).jc_end_m ?? 0) % 60);
      if (((s as any).job_schedule_mode ?? 0)?.[String((s as any).jc_id ?? 0)] === 'windowed') {
        (s as any).jc_shift_h = (((s as any).job_shift ?? 0)?.[String((s as any).jc_skey ?? 0)] ?? 0) / 60;
        (s as any).jc_shift_m = (((s as any).job_shift ?? 0)?.[String((s as any).jc_skey ?? 0)] ?? 0) % 60;
        (s as any).jc_dur = (((!((s as any).jc_shift_m ?? 0))) ? (String(((s as any).jc_shift_h ?? 0)) + 'h') : (String(((s as any).jc_shift_h ?? 0)) + 'h ' + String(((s as any).jc_shift_m ?? 0)) + 'min'));
        (s as any).jc_sched = ((s as any).jc_days ?? 0) + ', anytime ' + ((s as any).jc_t_arr ?? 0) + '-' + ((s as any).jc_t_st ?? 0) + ', ' + ((s as any).jc_dur ?? 0) + ' shift';
      } else {
        (s as any).jc_sched = ((s as any).jc_days ?? 0) + ', arrive ' + ((s as any).jc_t_arr ?? 0) + '-' + ((s as any).jc_t_st ?? 0) + ', until ' + ((s as any).jc_t_end ?? 0);
      }
    }
  }
  if (((s as any).job_pay_interval_def ?? 0)?.[String((s as any).jc_id ?? 0)] === 'none') {
    (s as any).jc_pay = 'Pay: Managed separately';
  } else {
    if (((s as any).job_pay_rate_def ?? 0)?.[String((s as any).jc_id ?? 0)] === 0) {
      (s as any).jc_pay = 'Pay: Dependent on performance';
    } else {
      (s as any).jc_pay = 'Pay: ' + qspFunc(s, 'money', 'string_profit', (((s as any).job_pay_rate_def ?? 0)?.[String((s as any).jc_id ?? 0)] ?? 0)) + ' per ' + (((s as any).job_pay_interval_def ?? 0)?.[String((s as any).jc_id ?? 0)] ?? 0);
    }
  }
  if (((s as any).job_refresh_desc ?? 0)?.[String((s as any).jc_id ?? 0)] === 1) {
    if (((s as any).job_definition_source ?? 0)?.[String((s as any).jc_id ?? 0)] !== ''  &&  hasLocation((((s as any).job_definition_source ?? 0)?.[String((s as any).jc_id ?? 0)] ?? 0))) {
      qspCall(s, '$job_definition_source[$jc_id]', '$jc_id');
    } else {
      qspCall(s, 'jobs_list', '$jc_id');
    }
  }
  (s as any).jc_body = '';
  if (((s as any).job_status ?? 0)?.[String((s as any).jc_id ?? 0)] !== 'employed') {
    (s as any).jc_body = (((s as any).job_hire_hint ?? 0)?.[((s as any).jc_id ?? 0) + ', ' + String((((s as any).job_hiring_step ?? 0)?.[String((s as any).jc_id ?? 0)] ?? 0))] ?? 0);
  }
  if (((s as any).jc_body ?? 0) === '') {
    (s as any).jc_body = (((s as any).job_desc ?? 0)?.[String((s as any).jc_id ?? 0)] ?? 0);
  }
  (s as any).temp_bcolor = qspFunc(s, 'themes', 'alt_color', ((s as any).temp_bcolor ?? 0));
  (s as any).jc_body_html = '<div style="font-size:0.85em; margin-top:3px;">' + ((s as any).jc_status ?? 0) + '</div>';
  if (((s as any).jc_sched ?? 0) !== '') {
    (s as any).jc_body_html = ((s as any).jc_body_html ?? 0) + ('<div style="font-size:0.85em; margin-top:2px; opacity:0.8;">' + ((s as any).jc_sched ?? 0) + '</div>');
  }
  (s as any).jc_body_html = ((s as any).jc_body_html ?? 0) + ('<div style="font-size:0.85em; margin-top:2px; opacity:0.8;">' + ((s as any).jc_pay ?? 0) + '</div>');
  if (((s as any).jc_body ?? 0) !== '') {
    (s as any).jc_body_html = ((s as any).jc_body_html ?? 0) + ('<div style="margin-top:6px; font-size:0.9em;">' + ((s as any).jc_body ?? 0) + '</div>');
  }
  ((s as any).card_in = (s as any).card_in ?? {})['icon'] = ((s as any).jc_icon ?? 0);
  ((s as any).card_in = (s as any).card_in ?? {})['title'] = (((s as any).job_title ?? 0)?.[String((s as any).jc_id ?? 0)] ?? 0);
  ((s as any).card_in = (s as any).card_in ?? {})['title_sub'] = 'at ' + (((s as any).job_location ?? 0)?.[String((s as any).jc_id ?? 0)] ?? 0);
  ((s as any).card_in = (s as any).card_in ?? {})['body'] = ((s as any).jc_body_html ?? 0);
  ((s as any).card_in = (s as any).card_in ?? {})['border'] = ((s as any).jc_border ?? 0);
  ((s as any).card_in = (s as any).card_in ?? {})['bg'] = ((s as any).temp_bcolor ?? 0);
  ((s as any).card_in = (s as any).card_in ?? {})['opacity'] = ((s as any).jc_opac ?? 0);
  qspCall(s, 'cards', 'shell');
  (s as any).card_in = undefined;
  (s as any).jc_body_html = undefined;
  (s as any).jc_id = undefined;
  (s as any).jc_icon = undefined;
  (s as any).jc_days = undefined;
  (s as any).jc_end_m = undefined;
  (s as any).jc_pay = undefined;
  (s as any).jc_sched = undefined;
  return;
  scene.build();
}

function enterShowAll(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnsureRegistry(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).show_all_ji = 0;
  while (true) {
    if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).job_registry ?? {}).length) {
      (s as any).sa_id = (((s as any).job_registry ?? 0)?.[String((s as any).show_all_ji ?? 0)] ?? 0);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).sa_id ?? 0)]; enterGetJobDefinition(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).job_card_hidden ?? 0)?.[String((s as any).sa_id ?? 0)] === 1  &&  ((s as any).job_status ?? 0)?.[String((s as any).sa_id ?? 0)] !== 'employed'  &&  ((s as any).job_hiring_step ?? 0)?.[String((s as any).sa_id ?? 0)] === 0) {
        (s as any).sa_hidden = [...((s as any).sa_hidden ?? []), ((s as any).sa_id ?? 0)];
      } else {
        if (((s as any).job_status ?? 0)?.[String((s as any).sa_id ?? 0)] === 'employed') {
          (s as any).sa_emp = [...((s as any).sa_emp ?? []), ((s as any).sa_id ?? 0)];
        } else {
          if (((s as any).job_status ?? 0)?.[String((s as any).sa_id ?? 0)] === 'preemployed') {
            (s as any).sa_pre = [...((s as any).sa_pre ?? []), ((s as any).sa_id ?? 0)];
          } else {
            if (((s as any).job_status ?? 0)?.[String((s as any).sa_id ?? 0)] === 'terminated') {
              (s as any).sa_term = [...((s as any).sa_term ?? []), ((s as any).sa_id ?? 0)];
            } else {
              if (((s as any).job_status ?? 0)?.[String((s as any).sa_id ?? 0)] === 'fired') {
                (s as any).sa_fired = [...((s as any).sa_fired ?? []), ((s as any).sa_id ?? 0)];
              } else {
                (s as any).sa_unemp = [...((s as any).sa_unemp ?? []), ((s as any).sa_id ?? 0)];
              }
            }
          }
        }
      }
      (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
      break;
    }
    (s as any).temp_bcolor = '';
    (s as any).show_all_ji = 0;
    while (true) {
      if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_emp ?? {}).length) {
        scene.text(qspFunc(s, 'jobs', 'card', (((s as any).sa_emp ?? 0)?.[String((s as any).show_all_ji ?? 0)] ?? '')));
        (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
        break;
      }
      (s as any).show_all_ji = 0;
      while (true) {
        if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_pre ?? {}).length) {
          scene.text(qspFunc(s, 'jobs', 'card', (((s as any).sa_pre ?? 0)?.[String((s as any).show_all_ji ?? 0)] ?? '')));
          (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
          break;
        }
        (s as any).show_all_ji = 0;
        while (true) {
          if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_term ?? {}).length) {
            scene.text(qspFunc(s, 'jobs', 'card', (((s as any).sa_term ?? 0)?.[String((s as any).show_all_ji ?? 0)] ?? '')));
            (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
            break;
          }
          (s as any).show_all_ji = 0;
          while (true) {
            if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_fired ?? {}).length) {
              scene.text(qspFunc(s, 'jobs', 'card', (((s as any).sa_fired ?? 0)?.[String((s as any).show_all_ji ?? 0)] ?? '')));
              (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
              break;
            }
            (s as any).show_all_ji = 0;
            while (true) {
              if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_unemp ?? {}).length) {
                scene.text(qspFunc(s, 'jobs', 'card', (((s as any).sa_unemp ?? 0)?.[String((s as any).show_all_ji ?? 0)] ?? '')));
                (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
                break;
              }
              (s as any).show_all_ji = 0;
              while (true) {
                if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_hidden ?? {}).length) {
                  scene.text(qspFunc(s, 'jobs', 'card', (((s as any).sa_hidden ?? 0)?.[String((s as any).show_all_ji ?? 0)] ?? '')));
                  (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
                  break;
                }
                (s as any).temp_bcolor = undefined;
                (s as any).sa_emp = undefined;
                return;
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_employed':
      enterSetEmployed(s, scene);
      break;
    case 'set_terminated':
      enterSetTerminated(s, scene);
      break;
    case 'set_fired':
      enterSetFired(s, scene);
      break;
    case '_end_employment':
      enterEndEmployment(s, scene);
      break;
    case 'suspend_job':
      enterSuspendJob(s, scene);
      break;
    case 'resume_job':
      enterResumeJob(s, scene);
      break;
    case 'set_rank':
      enterSetRank(s, scene);
      break;
    case 'resolve_schedule_idx':
      enterResolveScheduleIdx(s, scene);
      break;
    case 'clock':
      enterClock(s, scene);
      break;
    case 'clock_in':
      enterClockIn(s, scene);
      break;
    case 'clock_out':
      enterClockOut(s, scene);
      break;
    case 'missed_shift':
      enterMissedShift(s, scene);
      break;
    case 'daily_check':
      enterDailyCheck(s, scene);
      break;
    case 'paycheck':
      enterPaycheck(s, scene);
      break;
    case 'bonus_pay':
      enterBonusPay(s, scene);
      break;
    case 'dock_pay':
      enterDockPay(s, scene);
      break;
    case 'is_work_day':
      enterIsWorkDay(s, scene);
      break;
    case 'is_work_time':
      enterIsWorkTime(s, scene);
      break;
    case 'is_arrival_time':
      enterIsArrivalTime(s, scene);
      break;
    case '_is_time_check':
      enterIsTimeCheck(s, scene);
      break;
    case 'get_shift_for_day':
      enterGetShiftForDay(s, scene);
      break;
    case 'next_work_day':
      enterNextWorkDay(s, scene);
      break;
    case 'matches_recurring_schedule':
      enterMatchesRecurringSchedule(s, scene);
      break;
    case 'get_shift_from_recurrence':
      enterGetShiftFromRecurrence(s, scene);
      break;
    case 'clear_all_bookings':
      enterClearAllBookings(s, scene);
      break;
    case 'booking_count':
      enterBookingCount(s, scene);
      break;
    case 'has_booking_for_day':
      enterHasBookingForDay(s, scene);
      break;
    case 'get_booking_data_for_day':
      enterGetBookingDataForDay(s, scene);
      break;
    case 'get_next_booking_day':
      enterGetNextBookingDay(s, scene);
      break;
    case 'book_slot':
      enterBookSlot(s, scene);
      break;
    case 'get_booking_data':
      enterGetBookingData(s, scene);
      break;
    case 'check_booking_conflict':
      enterCheckBookingConflict(s, scene);
      break;
    case 'check_booking_gap':
      enterCheckBookingGap(s, scene);
      break;
    case 'cancel_booking':
      enterCancelBooking(s, scene);
      break;
    case 'change_schedule':
      enterChangeSchedule(s, scene);
      break;
    case 'set_job_file':
      enterSetJobFile(s, scene);
      break;
    case 'set_job_icon':
      enterSetJobIcon(s, scene);
      break;
    case '_resolve_slot_timing':
      enterResolveSlotTiming(s, scene);
      break;
    case '_build_booking_event_vars':
      enterBuildBookingEventVars(s, scene);
      break;
    case 'get_job_definition':
      enterGetJobDefinition(s, scene);
      break;
    case 'check_employment_possible':
      enterCheckEmploymentPossible(s, scene);
      break;
    case 'build_event_vars_for_job':
      enterBuildEventVarsForJob(s, scene);
      break;
    case 'create_recurring_event':
      enterCreateRecurringEvent(s, scene);
      break;
    case 'create_availability_events':
      enterCreateAvailabilityEvents(s, scene);
      break;
    case 'compute_stat_display':
      enterComputeStatDisplay(s, scene);
      break;
    case 'cleanup_job':
      enterCleanupJob(s, scene);
      break;
    case 'terminate_all_jobs':
      enterTerminateAllJobs(s, scene);
      break;
    case 'format_days':
      enterFormatDays(s, scene);
      break;
    case 'ensure_registry':
      enterEnsureRegistry(s, scene);
      break;
    case 'card':
      enterCard(s, scene);
      break;
    case 'show_all':
      enterShowAll(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const jobs: LocationDef = {
  name: 'jobs',
  title: '&#9679; Employed',
  region: 'other',
  enter: enter,
};
