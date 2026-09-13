import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetEmployed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'employed') {
    return;
  }
  (s as any).employment_conflict = 1 - qspFunc(s, 'jobs', 'check_employment_possible', ((s as any).locArgs?.[1] ?? 0), (-1));
  if ((Array.isArray((s as any).job_list) ? ((s as any).job_list as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) === -1) {
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
    if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'on_demand') {
      if (((s as any).job_create_availability_events ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
        qspCall(s, 'jobs', 'create_availability_events', ((s as any).locArgs?.[1] ?? 0));
      } else {
        // TODO-QSP: $job_event_id[$ARGS[1]] = ''
      }
    } else {
      if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'booking') {
        // TODO-QSP: $job_event_id[$ARGS[1]] = ''
        // TODO-QSP: job_bookings_active[$ARGS[1]] = 0
        // TODO-QSP: job_booking_debt[$ARGS[1]] = 0
      }
    }
  }
  if (((s as any).job_schedule_switchable ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1  &&  ((s as any).job_work_days ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', 1'] !== '') {
    // TODO-QSP: $job_active_schedule[$ARGS[1]] = '0'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetTerminated(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', '_end_employment', ((s as any).locArgs?.[1] ?? 0), 'terminated');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetFired(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', '_end_employment', ((s as any).locArgs?.[1] ?? 0), 'fired');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterEndEmployment(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_status[$ARGS[1]] = $ARGS[2]
  // TODO-QSP: job_termination_day[$ARGS[1]] = daystart
  if (((s as any).job_event_id ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
    // TODO-QSP: gs 'calendar_events', 'remove_event', $job_event_id[$ARGS[1]]
    // TODO-QSP: $job_event_id[$ARGS[1]] = ''
  }
  if (((s as any).job_bookings_active ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    qspCall(s, 'jobs', 'clear_all_bookings', ((s as any).locArgs?.[1] ?? 0));
  }
  (s as any).temp_pos = qspUntranslated(s, "arrpos('job_list', ARGS[1])", { location: "jobs" });
  if (((s as any).temp_pos ?? 0) >= 0) {
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSuspendJob(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'employed'  &&  ((s as any).job_suspended ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    // TODO-QSP: job_suspended[$ARGS[1]] = 1
    // TODO-QSP: job_clocked_in[$ARGS[1]] = 0
    if (((s as any).job_event_id ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
      // TODO-QSP: gs 'calendar_events', 'remove_event', $job_event_id[$ARGS[1]]
      // TODO-QSP: $job_event_id[$ARGS[1]] = ''
    }
    if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'booking'  ||  ((s as any).job_bookings_active ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
      qspCall(s, 'jobs', 'clear_all_bookings', ((s as any).locArgs?.[1] ?? 0));
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResumeJob(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'employed'  &&  ((s as any).job_suspended ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    // TODO-QSP: job_suspended[$ARGS[1]] = 0
    qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
    if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'fixed'  ||  ((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'windowed') {
      if (((s as any).job_add_to_calendar ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
        qspCall(s, 'jobs', 'create_recurring_event', ((s as any).locArgs?.[1] ?? 0));
      }
    } else {
      if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'on_demand') {
        if (((s as any).job_create_availability_events ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
          qspCall(s, 'jobs', 'create_availability_events', ((s as any).locArgs?.[1] ?? 0));
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetRank(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: job_rank[$ARGS[1]] = ARGS[2]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResolveScheduleIdx(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_active_schedule ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
    (s as any).result = qspUntranslated(s, "val(job_active_schedule[ARGS[1]])", { location: "jobs" });
  } else {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClock(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_shift ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', 0'] === 0  &&  ((s as any).job_title ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
    qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).job_pay_interval ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'hourly'  ||  ((s as any).job_pay_interval_def ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'hourly') {
    // TODO-QSP: job_worked_count[$ARGS[1]] += job_shift[$ARGS[1] + ', ' + $str(func('jobs', 'resolve_schedule_idx', ...
  } else {
    // TODO-QSP: job_worked_count[$ARGS[1]] += 1
  }
  // TODO-QSP: job_last_work_day[$ARGS[1]] = daystart
  // TODO-QSP: job_clocked_in[$ARGS[1]] = totminut
  // TODO-QSP: job_shifts_total[$ARGS[1]] += 1
  // TODO-QSP: job_shifts_this_period[$ARGS[1]] += 1
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClockIn(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: job_last_work_day[$ARGS[1]] = daystart
  if (((s as any).job_clocked_in ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    // TODO-QSP: job_clocked_in[$ARGS[1]] = totminut
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClockOut(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_clocked_in ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: job_worked_count[$ARGS[1]] += totminut - job_clocked_in[$ARGS[1]]
    // TODO-QSP: job_shifts_total[$ARGS[1]] += 1
    // TODO-QSP: job_shifts_this_period[$ARGS[1]] += 1
    // TODO-QSP: job_last_work_day[$ARGS[1]] = daystart
    // TODO-QSP: job_clocked_in[$ARGS[1]] = 0
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMissedShift(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: job_missed_total[$ARGS[1]] += 1
  qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).job_penalty_per_miss ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: job_booking_debt[$ARGS[1]] += job_penalty_per_miss[$ARGS[1]]
    if (((s as any).job_penalty_max_debt ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
      if (((s as any).job_booking_debt ?? 0)[((s as any).locArgs?.[1] ?? 0)] >= ((s as any).job_penalty_max_debt ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
        // TODO-QSP: $job_termination_reason[$ARGS[1]] = 'no_show'
        qspCall(s, 'jobs', 'set_fired', ((s as any).locArgs?.[1] ?? 0));
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDailyCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_dc_idx = 0;
  // TODO-QSP: :daily_check_v4_loop
  if (((s as any).temp_dc_idx ?? 0) < Object.keys((s as any).job_list ?? {}).length) {
    if (((s as any).job_status ?? 0)?.[String((s as any).temp_dc_job ?? 0)] === 'employed'  &&  ((s as any).job_suspended ?? 0)?.[String((s as any).temp_dc_job ?? 0)] === 0) {
      qspCall(s, 'jobs', 'get_job_definition', ((s as any).temp_dc_job ?? 0));
      if (((s as any).job_schedule_mode ?? 0)?.[String((s as any).temp_dc_job ?? 0)] === 'booking') {
        (s as any).temp_dc_max_slot = ((s as any).job_booking_slots_per_day ?? 0)?.[String((s as any).temp_dc_job ?? 0)];
        if (((s as any).temp_dc_max_slot ?? 0) < 1) {
          (s as any).temp_dc_max_slot = 1;
        }
        (s as any).temp_dc_yesterday = ((s as any).daystart ?? 0) - 1;
        (s as any).temp_dc_slot = 0;
        // TODO-QSP: :daily_check_booking_slot_loop
        if (((s as any).temp_dc_slot ?? 0) < ((s as any).temp_dc_max_slot ?? 0)) {
          if (((s as any).temp_dc_booking_data ?? 0) !== '') {
            if (((s as any).job_last_work_day ?? 0)?.[String((s as any).temp_dc_job ?? 0)] < ((s as any).temp_dc_yesterday ?? 0)) {
              if (((s as any).job_on_miss_handler ?? 0)?.[String((s as any).temp_dc_job ?? 0)] !== '') {
                if (!(s as any).job_missed_total) (s as any).job_missed_total = {}; (s as any).job_missed_total[String((s as any).temp_dc_job ?? 0)] = ((s as any).job_missed_total[String((s as any).temp_dc_job ?? 0)] ?? 0) + (1);
                // TODO-QSP: gs $job_on_miss_handler[$temp_dc_job], $job_on_miss_handler_func[$temp_dc_job], $temp_dc_job, $temp_...
              } else {
                qspCall(s, 'jobs', 'missed_shift', ((s as any).temp_dc_job ?? 0));
              }
            }
          }
          (s as any).temp_dc_slot = ((s as any).temp_dc_slot ?? 0) + (1);
          // TODO-QSP: jump 'daily_check_booking_slot_loop'
        }
        (s as any).temp_dc_daybefore = ((s as any).daystart ?? 0) - 2;
        (s as any).temp_dc_slot = 0;
        // TODO-QSP: :daily_check_expire_loop
        if (((s as any).temp_dc_slot ?? 0) < ((s as any).temp_dc_max_slot ?? 0)) {
          if (((s as any).job_booking ?? 0)[((s as any).temp_dc_job ?? 0) + ', ' + String(((s as any).temp_dc_daybefore ?? 0)) + ', ' + String(((s as any).temp_dc_slot ?? 0))] !== '') {
            // TODO-QSP: $job_booking[$temp_dc_job + ', ' + $str(temp_dc_daybefore) + ', ' + $str(temp_dc_slot)] = ''
            if (!(s as any).job_bookings_active) (s as any).job_bookings_active = {}; (s as any).job_bookings_active[String((s as any).temp_dc_job ?? 0)] = ((s as any).job_bookings_active[String((s as any).temp_dc_job ?? 0)] ?? 0) - (1);
            if (((s as any).job_bookings_active ?? 0)?.[String((s as any).temp_dc_job ?? 0)] < 0) {
              if (!(s as any).job_bookings_active) (s as any).job_bookings_active = {}; (s as any).job_bookings_active[String((s as any).temp_dc_job ?? 0)] = 0;
            }
            qspCall(s, 'calendar_events', 'remove_event', ((s as any).temp_dc_evt ?? 0));
          }
          (s as any).temp_dc_slot = ((s as any).temp_dc_slot ?? 0) + (1);
          // TODO-QSP: jump 'daily_check_expire_loop'
        }
      } else {
        (s as any).temp_dc_yesterday = ((s as any).daystart ?? 0) - 1;
        if (qspFunc(s, 'jobs', 'is_work_day', ((s as any).temp_dc_job ?? 0), ((s as any).temp_dc_yesterday ?? 0)) === 1) {
          if (((s as any).job_last_work_day ?? 0)?.[String((s as any).temp_dc_job ?? 0)] < ((s as any).temp_dc_yesterday ?? 0)) {
            qspCall(s, 'jobs', 'missed_shift', ((s as any).temp_dc_job ?? 0));
          }
        }
      }
    }
    if ((Array.isArray((s as any).job_list) ? ((s as any).job_list as any[]).indexOf(((s as any).temp_dc_job ?? 0)) : -1) >= 0) {
      (s as any).temp_dc_idx = ((s as any).temp_dc_idx ?? 0) + (1);
    }
    // TODO-QSP: jump 'daily_check_v4_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPaycheck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = 0;
  if (((s as any).job_pay_interval ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'shift') {
    (s as any).result = ((s as any).job_worked_count ?? 0)[((s as any).locArgs?.[1] ?? 0)] * ((s as any).job_pay_rate ?? 0)[((s as any).locArgs?.[1] ?? 0)];
  } else {
    if (((s as any).job_pay_interval ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'hourly') {
      (s as any).result = (((s as any).job_worked_count ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 60) * ((s as any).job_pay_rate ?? 0)[((s as any).locArgs?.[1] ?? 0)];
    } else {
      if (((s as any).job_pay_interval ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'weekly') {
        (s as any).result = ((s as any).job_pay_rate ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
      } else {
        if (((s as any).job_pay_interval ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'monthly') {
          (s as any).result = ((s as any).job_pay_rate ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
        } else {
          if (((s as any).job_pay_interval ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'event') {
            (s as any).result = ((s as any).job_pay_rate ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
          } else {
            if (((s as any).job_pay_interval ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'none') {
              (s as any).result = 0;
            }
          }
        }
      }
    }
  }
  (s as any).result = ((s as any).result ?? 0) + (((s as any).job_bonus_pay ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]);
  (s as any).result = ((s as any).result ?? 0) - (((s as any).job_docked_pay ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]);
  if (((s as any).result ?? 0) < 0) {
    (s as any).result = 0;
  }
  // TODO-QSP: job_worked_count[$ARGS[1]] = 0
  // TODO-QSP: job_bonus_pay[$ARGS[1]] = 0
  // TODO-QSP: job_docked_pay[$ARGS[1]] = 0
  // TODO-QSP: job_clocked_in[$ARGS[1]] = 0
  // TODO-QSP: job_shifts_this_period[$ARGS[1]] = 0
  // TODO-QSP: job_paid_total[$ARGS[1]] += result
  if (((s as any).result ?? 0) > 0) {
    qspCall(s, 'money', 'earn', ((s as any).result ?? 0), ((s as any).locArgs?.[2] ?? 0));
  }
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBonusPay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: job_bonus_pay[$ARGS[1]] += ARGS[2]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDockPay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: job_docked_pay[$ARGS[1]] += ARGS[2]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWorkDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_check_day = qspUntranslated(s, "ARGS[2]", { location: "jobs" });
  if ((!((s as any).temp_check_day ?? 0))) {
    (s as any).temp_check_day = ((s as any).daystart ?? 0);
  }
  if (((s as any).job_title ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
    qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'fixed'  ||  ((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'windowed') {
    (s as any).result = qspFunc(s, 'jobs', 'matches_recurring_schedule', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_check_day ?? 0));
  } else {
    if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'on_demand') {
      if ((String(' \' + $job_available_days[$ARGS[1]] + \' ').indexOf(String(' \' + $str(\'0\') + \' '))) + 1 > 0) {
        (s as any).result = 1;
      } else {
        (s as any).result = 0;
      }
    } else {
      if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'booking') {
        if (((s as any).job_status ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'employed') {
          (s as any).result = qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_check_day ?? 0));
          if ((!((s as any).result ?? 0))) {
            if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_check_day ?? 0) - 1) === 1) {
              // TODO-QSP: gs 'jobs', 'get_shift_for_day', $ARGS[1], temp_check_day - 1
              (s as any).temp_iwd_si = 0;
              // TODO-QSP: :iwd_crossmid_loop
              if (((s as any).temp_iwd_si ?? 0) < ((s as any).result_slot_count ?? 0)) {
                if (((s as any).result_slot_end ?? 0)?.[String((s as any).temp_iwd_si ?? 0)] > 1440) {
                  (s as any).result = 1;
                  // TODO-QSP: jump 'iwd_crossmid_done'
                }
                (s as any).temp_iwd_si = ((s as any).temp_iwd_si ?? 0) + (1);
                // TODO-QSP: jump 'iwd_crossmid_loop'
              }
              // TODO-QSP: :iwd_crossmid_done
            }
          }
        } else {
          (s as any).result = 0;
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWorkTime(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', '_is_time_check', ((s as any).locArgs?.[1] ?? 0), 'work');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsArrivalTime(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', '_is_time_check', ((s as any).locArgs?.[1] ?? 0), 'arrival');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsTimeCheck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  (s as any).temp_itc_now = ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0);
  if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'booking') {
    (s as any).result = 0;
    if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0)) === 1) {
      qspCall(s, 'jobs', 'get_shift_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0));
      (s as any).temp_itc_i = 0;
      // TODO-QSP: :itc_today_loop
      if (((s as any).temp_itc_i ?? 0) < ((s as any).result_slot_count ?? 0)) {
        if (((s as any).locArgs?.[2] ?? 0) === 'work') {
          if (((s as any).temp_itc_now ?? 0) >= ((s as any).result_slot_arrival ?? 0)?.[String((s as any).temp_itc_i ?? 0)]  &&  ((s as any).temp_itc_now ?? 0) < ((s as any).result_slot_end ?? 0)?.[String((s as any).temp_itc_i ?? 0)]) {
            (s as any).result = 1;
            // TODO-QSP: jump 'itc_done'
          }
        } else {
          if (((s as any).temp_itc_now ?? 0) >= ((s as any).result_slot_arrival ?? 0)?.[String((s as any).temp_itc_i ?? 0)]  &&  ((s as any).temp_itc_now ?? 0) < ((s as any).result_slot_start ?? 0)?.[String((s as any).temp_itc_i ?? 0)]) {
            (s as any).result = 1;
            // TODO-QSP: jump 'itc_done'
          }
        }
        (s as any).temp_itc_i = ((s as any).temp_itc_i ?? 0) + (1);
        // TODO-QSP: jump 'itc_today_loop'
      }
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'work'  &&  ((s as any).job_status ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'employed'  &&  qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0) - 1) === 1) {
      // TODO-QSP: gs 'jobs', 'get_shift_for_day', $ARGS[1], daystart - 1
      (s as any).temp_itc_i = 0;
      // TODO-QSP: :itc_yest_loop
      if (((s as any).temp_itc_i ?? 0) < ((s as any).result_slot_count ?? 0)) {
        if (((s as any).result_slot_end ?? 0)?.[String((s as any).temp_itc_i ?? 0)] > 1440) {
          if (((s as any).temp_itc_now ?? 0) < ((s as any).result_slot_end ?? 0)?.[String((s as any).temp_itc_i ?? 0)] - 1440) {
            (s as any).result = 1;
            // TODO-QSP: jump 'itc_done'
          }
        }
        (s as any).temp_itc_i = ((s as any).temp_itc_i ?? 0) + (1);
        // TODO-QSP: jump 'itc_yest_loop'
      }
    }
    // TODO-QSP: :itc_done
    return;
  }
  if (qspFunc(s, 'jobs', 'is_work_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0)) === 0) {
    (s as any).result = 0;
    return;
  }
  qspCall(s, 'jobs', 'get_shift_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).daystart ?? 0));
  if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'fixed'  ||  ((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'windowed') {
    if (((s as any).locArgs?.[2] ?? 0) === 'work') {
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
    if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'on_demand') {
      if (((s as any).temp_itc_now ?? 0) >= ((s as any).job_available_start ?? 0)[((s as any).locArgs?.[1] ?? 0)]  &&  ((s as any).temp_itc_now ?? 0) <= ((s as any).job_available_end ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
        (s as any).result = 1;
      } else {
        (s as any).result = 0;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetShiftForDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_check_day = qspUntranslated(s, "ARGS[2]", { location: "jobs" });
  if ((!((s as any).temp_check_day ?? 0))) {
    (s as any).temp_check_day = ((s as any).daystart ?? 0);
  }
  if (((s as any).job_title ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
    qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'booking') {
    (s as any).result_slot_count = 0;
    (s as any).temp_gsfd_max_slot = ((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
    if (((s as any).temp_gsfd_max_slot ?? 0) < 1) {
      (s as any).temp_gsfd_max_slot = 1;
    }
    (s as any).temp_gsfd_slot = 0;
    // TODO-QSP: :gsfd_booking_slot_loop
    if (((s as any).temp_gsfd_slot ?? 0) < ((s as any).temp_gsfd_max_slot ?? 0)) {
      if (((s as any).job_booking ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_check_day ?? 0)) + ', ' + String(((s as any).temp_gsfd_slot ?? 0))] !== '') {
        qspCall(s, 'jobs', '_resolve_slot_timing', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_gsfd_slot ?? 0));
        if (!(s as any).result_slot_arrival) (s as any).result_slot_arrival = {}; (s as any).result_slot_arrival[String((s as any).result_slot_count ?? 0)] = ((s as any).temp_resolved_arrival ?? 0);
        if (!(s as any).result_slot_start) (s as any).result_slot_start = {}; (s as any).result_slot_start[String((s as any).result_slot_count ?? 0)] = ((s as any).temp_resolved_start ?? 0);
        if (!(s as any).result_slot_end) (s as any).result_slot_end = {}; (s as any).result_slot_end[String((s as any).result_slot_count ?? 0)] = ((s as any).temp_resolved_end ?? 0);
        (s as any).result_slot_count = ((s as any).result_slot_count ?? 0) + (1);
      }
      (s as any).temp_gsfd_slot = ((s as any).temp_gsfd_slot ?? 0) + (1);
      // TODO-QSP: jump 'gsfd_booking_slot_loop'
    }
    if (((s as any).result_slot_count ?? 0) > 0) {
      (s as any).result_arrival = qspUntranslated(s, "result_slot_arrival[0]", { location: "jobs" });
      (s as any).result_start = qspUntranslated(s, "result_slot_start[0]", { location: "jobs" });
      (s as any).result_end = qspUntranslated(s, "result_slot_end[0]", { location: "jobs" });
      (s as any).temp_gsfd_i = 1;
      // TODO-QSP: :gsfd_envelope_loop
      if (((s as any).temp_gsfd_i ?? 0) < ((s as any).result_slot_count ?? 0)) {
        if (((s as any).result_slot_arrival ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)] < ((s as any).result_arrival ?? 0)) {
          (s as any).result_arrival = ((s as any).result_slot_arrival ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)];
        }
        if (((s as any).result_slot_start ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)] < ((s as any).result_start ?? 0)) {
          (s as any).result_start = ((s as any).result_slot_start ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)];
        }
        if (((s as any).result_slot_end ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)] > ((s as any).result_end ?? 0)) {
          (s as any).result_end = ((s as any).result_slot_end ?? 0)?.[String((s as any).temp_gsfd_i ?? 0)];
        }
        (s as any).temp_gsfd_i = ((s as any).temp_gsfd_i ?? 0) + (1);
        // TODO-QSP: jump 'gsfd_envelope_loop'
      }
      (s as any).result_duration = ((s as any).result_end ?? 0) - ((s as any).result_start ?? 0);
      if (((s as any).result_duration ?? 0) < 0) {
        (s as any).result_duration = 0;
      }
    } else {
      (s as any).result_arrival = 0;
      (s as any).result_start = 0;
      (s as any).result_duration = 0;
      (s as any).result_end = 0;
    }
    return;
  }
  (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).temp_check_day ?? 0));
  (s as any).temp_schedule_idx = qspFunc(s, 'jobs', 'resolve_schedule_idx', ((s as any).locArgs?.[1] ?? 0));
  (s as any).temp_found = 0;
  (s as any).temp_idx = ((s as any).temp_schedule_idx ?? 0);
  // TODO-QSP: :find_schedule_loop
  if (((s as any).temp_work_days ?? 0) !== '') {
    if ((String(' \' + $temp_work_days + \' ').indexOf(String(' \' + $str(temp_weekday) + \' '))) + 1 > 0) {
      (s as any).result_arrival = ((s as any).job_arrival ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_idx ?? 0))];
      (s as any).result_start = ((s as any).job_start ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_idx ?? 0))];
      (s as any).result_duration = ((s as any).job_shift ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_idx ?? 0))];
      (s as any).temp_found = 1;
    }
  }
  if (((s as any).temp_found ?? 0) === 0  &&  ((s as any).temp_work_days ?? 0) !== ''  &&  ((s as any).job_schedule_switchable ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    (s as any).temp_idx = ((s as any).temp_idx ?? 0) + (1);
    // TODO-QSP: jump 'find_schedule_loop'
  }
  if ((!((s as any).temp_found ?? 0))) {
    (s as any).result_arrival = 0;
    (s as any).result_start = 0;
    (s as any).result_duration = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNextWorkDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_nwd_start_day = qspUntranslated(s, "ARGS[2]", { location: "jobs" });
  if ((!((s as any).temp_nwd_start_day ?? 0))) {
    (s as any).temp_nwd_start_day = ((s as any).daystart ?? 0);
  }
  (s as any).temp_nwd_check = ((s as any).temp_nwd_start_day ?? 0) + 1;
  (s as any).temp_nwd_max = ((s as any).temp_nwd_start_day ?? 0) + 14;
  (s as any).result = 0;
  // TODO-QSP: :next_day_loop
  if (((s as any).temp_nwd_check ?? 0) <= ((s as any).temp_nwd_max ?? 0)) {
    if (qspFunc(s, 'jobs', 'is_work_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_nwd_check ?? 0)) === 1) {
      (s as any).result = ((s as any).temp_nwd_check ?? 0);
      return;
    }
    (s as any).temp_nwd_check = ((s as any).temp_nwd_check ?? 0) + (1);
    // TODO-QSP: jump 'next_day_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMatchesRecurringSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_check_day = qspUntranslated(s, "ARGS[2]", { location: "jobs" });
  (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).temp_check_day ?? 0));
  if (((s as any).job_work_dates ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
    qspCall(s, 'time', 'to_date', ((s as any).temp_check_day ?? 0));
    (s as any).temp_mmdd = ((s as any).dateVars ?? {})?.['month'] * 100 + ((s as any).dateVars ?? {})?.['day'];
    (s as any).temp_season_start = 0;
    (s as any).temp_season_end = 0;
    if (((s as any).temp_mmdd ?? 0) < ((s as any).temp_season_start ?? 0)  ||  ((s as any).temp_mmdd ?? 0) > ((s as any).temp_season_end ?? 0)) {
      (s as any).result = 0;
      return;
    }
  }
  (s as any).temp_schedule_idx = qspFunc(s, 'jobs', 'resolve_schedule_idx', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = 0;
  (s as any).temp_idx = ((s as any).temp_schedule_idx ?? 0);
  // TODO-QSP: :check_schedule_loop
  if (((s as any).temp_work_days ?? 0) !== '') {
    if ((String(' \' + $temp_work_days + \' ').indexOf(String(' \' + $str(temp_weekday) + \' '))) + 1 > 0) {
      (s as any).result = 1;
      return;
    }
    if (((s as any).job_schedule_switchable ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
      (s as any).temp_idx = ((s as any).temp_idx ?? 0) + (1);
      // TODO-QSP: jump 'check_schedule_loop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetShiftFromRecurrence(s: GameState, scene: SceneBuilder): void {
  (s as any).check_day = qspUntranslated(s, "ARGS[2]", { location: "jobs" });
  (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).check_day ?? 0));
  (s as any).temp_pos = 1;
  // TODO-QSP: :loop_find_shift
  (s as any).temp_semi = qspUntranslated(s, "instr(ARGS[1], ';', temp_pos)", { location: "jobs" });
  if ((!((s as any).temp_semi ?? 0))) {
    (s as any).temp_semi = (String(((s as any).locArgs?.[1] ?? 0)).length) + 1;
  }
  (s as any).temp_pipe1 = qspUntranslated(s, "instr(temp_shift, '|')", { location: "jobs" });
  (s as any).temp_pipe2 = (String(((s as any).temp_shift ?? 0)).indexOf(String('|'))) + 1;
  (s as any).temp_pipe3 = (String(((s as any).temp_shift ?? 0)).indexOf(String('|'))) + 1;
  if (((s as any).temp_pipe1 ?? 0) > 0  &&  ((s as any).temp_pipe2 ?? 0) > 0  &&  ((s as any).temp_pipe3 ?? 0) > 0) {
    (s as any).temp_arrival = parseFloat((String(((s as any).temp_shift ?? 0)).slice((((s as any).temp_pipe1 ?? 0) + 1)-1, ((((s as any).temp_pipe1 ?? 0) + 1)-1)+(((s as any).temp_pipe2 ?? 0) - ((s as any).temp_pipe1 ?? 0) - 1))));
    (s as any).temp_start = parseFloat((String(((s as any).temp_shift ?? 0)).slice((((s as any).temp_pipe2 ?? 0) + 1)-1, ((((s as any).temp_pipe2 ?? 0) + 1)-1)+(((s as any).temp_pipe3 ?? 0) - ((s as any).temp_pipe2 ?? 0) - 1))));
    (s as any).temp_duration = parseFloat((String(((s as any).temp_shift ?? 0)).slice((((s as any).temp_pipe3 ?? 0) + 1)-1)));
    if ((String(' \' + $temp_days + \' ').indexOf(String(' \' + $str(temp_weekday) + \' '))) + 1 > 0) {
      (s as any).result_arrival = ((s as any).temp_arrival ?? 0);
      (s as any).result_start = ((s as any).temp_start ?? 0);
      (s as any).result_duration = ((s as any).temp_duration ?? 0);
      return;
    }
  }
  (s as any).temp_pos = ((s as any).temp_semi ?? 0) + 1;
  if (((s as any).temp_pos ?? 0) <= (String(((s as any).locArgs?.[1] ?? 0)).length)) {
    // TODO-QSP: jump 'loop_find_shift'
  }
  (s as any).result_arrival = 0;
  (s as any).result_start = 0;
  (s as any).result_duration = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClearAllBookings(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_title ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
    qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  }
  (s as any).temp_cab_range = ((s as any).job_booking_window_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (((s as any).temp_cab_range ?? 0) < 7) {
    (s as any).temp_cab_range = 7;
  }
  (s as any).temp_cab_max_slot = ((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (((s as any).temp_cab_max_slot ?? 0) < 1) {
    (s as any).temp_cab_max_slot = 1;
  }
  (s as any).temp_cab_day = ((s as any).daystart ?? 0);
  (s as any).temp_cab_end = ((s as any).daystart ?? 0) + ((s as any).temp_cab_range ?? 0);
  // TODO-QSP: :clear_all_bookings_loop
  if (((s as any).temp_cab_day ?? 0) <= ((s as any).temp_cab_end ?? 0)) {
    (s as any).temp_cab_slot = 0;
    // TODO-QSP: :clear_all_bookings_slot_loop
    if (((s as any).temp_cab_slot ?? 0) < ((s as any).temp_cab_max_slot ?? 0)) {
      if (((s as any).job_booking ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_cab_day ?? 0)) + ', ' + String(((s as any).temp_cab_slot ?? 0))] !== '') {
        // TODO-QSP: $job_booking[$ARGS[1] + ', ' + $str(temp_cab_day) + ', ' + $str(temp_cab_slot)] = ''
        // TODO-QSP: job_bookings_active[$ARGS[1]] -= 1
        // TODO-QSP: gs 'calendar_events', 'remove_event', 'job_booking_' + $ARGS[1] + '_' + $str(temp_cab_day) + '_' + $...
      }
      (s as any).temp_cab_slot = ((s as any).temp_cab_slot ?? 0) + (1);
      // TODO-QSP: jump 'clear_all_bookings_slot_loop'
    }
    (s as any).temp_cab_day = ((s as any).temp_cab_day ?? 0) + (1);
    // TODO-QSP: jump 'clear_all_bookings_loop'
  }
  if (((s as any).job_bookings_active ?? 0)[((s as any).locArgs?.[1] ?? 0)] < 0) {
    // TODO-QSP: job_bookings_active[$ARGS[1]] = 0
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBookingCount(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).job_bookings_active ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  // TODO-QSP: end
  scene.build();
}

function enterHasBookingForDay(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).job_title ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
    qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  }
  (s as any).temp_hbfd_max = ((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (((s as any).temp_hbfd_max ?? 0) < 1) {
    (s as any).temp_hbfd_max = 1;
  }
  (s as any).temp_hbfd_slot = 0;
  // TODO-QSP: :has_booking_slot_loop
  if (((s as any).temp_hbfd_slot ?? 0) < ((s as any).temp_hbfd_max ?? 0)) {
    if (((s as any).job_booking ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(qspUntranslated(s, "ARGS[2]", { location: "jobs" })) + ', ' + String(((s as any).temp_hbfd_slot ?? 0))] !== '') {
      (s as any).result = 1;
      return;
    }
    (s as any).temp_hbfd_slot = ((s as any).temp_hbfd_slot ?? 0) + (1);
    // TODO-QSP: jump 'has_booking_slot_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBookingDataForDay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_title ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
    qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  }
  (s as any).temp_gbdfd_max = ((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (((s as any).temp_gbdfd_max ?? 0) < 1) {
    (s as any).temp_gbdfd_max = 1;
  }
  (s as any).temp_gbdfd_slot = 0;
  // TODO-QSP: :get_bdata_day_loop
  if (((s as any).temp_gbdfd_slot ?? 0) < ((s as any).temp_gbdfd_max ?? 0)) {
    if (((s as any).job_booking ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(qspUntranslated(s, "ARGS[2]", { location: "jobs" })) + ', ' + String(((s as any).temp_gbdfd_slot ?? 0))] !== '') {
      return;
    }
    (s as any).temp_gbdfd_slot = ((s as any).temp_gbdfd_slot ?? 0) + (1);
    // TODO-QSP: jump 'get_bdata_day_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetNextBookingDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_gnbd_day = qspUntranslated(s, "ARGS[2]", { location: "jobs" });
  if ((!((s as any).temp_gnbd_day ?? 0))) {
    (s as any).temp_gnbd_day = ((s as any).daystart ?? 0);
  }
  (s as any).temp_gnbd_max = qspUntranslated(s, "ARGS[3]", { location: "jobs" });
  if ((!((s as any).temp_gnbd_max ?? 0))) {
    (s as any).temp_gnbd_max = 50;
  }
  (s as any).temp_gnbd_end = ((s as any).temp_gnbd_day ?? 0) + ((s as any).temp_gnbd_max ?? 0);
  (s as any).result = (-1);
  // TODO-QSP: :get_next_booking_loop
  if (((s as any).temp_gnbd_day ?? 0) < ((s as any).temp_gnbd_end ?? 0)) {
    if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_gnbd_day ?? 0)) === 1) {
      (s as any).result = ((s as any).temp_gnbd_day ?? 0);
      return;
    }
    (s as any).temp_gnbd_day = ((s as any).temp_gnbd_day ?? 0) + (1);
    // TODO-QSP: jump 'get_next_booking_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBookSlot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).job_booking ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(qspUntranslated(s, "ARGS[2]", { location: "jobs" })) + ', ' + String(qspUntranslated(s, "ARGS[3]", { location: "jobs" }))] !== '') {
    (s as any).result = 0;
    return;
  }
  if (((s as any).job_booking_max_concurrent ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    if (((s as any).job_bookings_active ?? 0)[((s as any).locArgs?.[1] ?? 0)] >= ((s as any).job_booking_max_concurrent ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      (s as any).result = 0;
      return;
    }
  }
  if (((s as any).job_booking_window_days ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    if (((s as any).locArgs?.[2] ?? 0) < ((s as any).daystart ?? 0)  ||  ((s as any).locArgs?.[2] ?? 0) > ((s as any).daystart ?? 0) + ((s as any).job_booking_window_days ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      (s as any).result = 0;
      return;
    }
  }
  if (qspFunc(s, 'jobs', 'check_booking_gap', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "jobs" })) === 1) {
    (s as any).result = 0;
    return;
  }
  // TODO-QSP: gs 'jobs', '_build_booking_event_vars', $ARGS[1], ARGS[2], ARGS[3]
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'job_booking_' + ((s as any).locArgs?.[1] ?? 0) + '_' + String(qspUntranslated(s, "ARGS[2]", { location: "jobs" })) + '_' + String(qspUntranslated(s, "ARGS[3]", { location: "jobs" }));
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = ((s as any).job_title ?? 0)[((s as any).locArgs?.[1] ?? 0)] + ' - Booking';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = ((s as any).job_location ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = ((s as any).locArgs?.[4] ?? 0);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 0;
  qspCall(s, 'calendar_list', 'assign_color');
  if (((s as any).job_blocking ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    if (qspFunc(s, 'calendar_events', 'check_event_conflicts') === 1) {
      (s as any).result = 0;
      return;
    }
  }
  // TODO-QSP: $job_booking[$ARGS[1] + ', ' + $str(ARGS[2]) + ', ' + $str(ARGS[3])] = $ARGS[4]
  // TODO-QSP: job_bookings_active[$ARGS[1]] += 1
  // TODO-QSP: gs 'calendar_events', 'add_event', $event_vars['id']
  (s as any).result = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBookingData(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckBookingConflict(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_title ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
    qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).job_blocking ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    (s as any).result = 0;
    return;
  }
  if (((s as any).locArgs?.[3] ?? 0) >= 0) {
    // TODO-QSP: gs 'jobs', '_build_booking_event_vars', $ARGS[1], ARGS[2], ARGS[3]
  } else {
    // TODO-QSP: gs 'jobs', '_build_booking_event_vars', $ARGS[1], ARGS[2], 0
  }
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'job_booking_conflict_check';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Conflict Check';
  (s as any).result = qspFunc(s, 'calendar_events', 'check_event_conflicts');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckBookingGap(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = 0;
  if (((s as any).job_booking_min_gap_days ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    (s as any).temp_cbg_gap = ((s as any).job_booking_min_gap_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
    (s as any).temp_cbg_max_slot = ((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
    if (((s as any).temp_cbg_max_slot ?? 0) < 1) {
      (s as any).temp_cbg_max_slot = 1;
    }
    (s as any).temp_cbg_check = ((s as any).ARGS ?? 0)[2] - ((s as any).temp_cbg_gap ?? 0) + 1;
    // TODO-QSP: :cbg_day_loop
    if (((s as any).temp_cbg_check ?? 0) <= ((s as any).locArgs?.[2] ?? 0) + ((s as any).temp_cbg_gap ?? 0) - 1) {
      (s as any).temp_cbg_slot = 0;
      // TODO-QSP: :cbg_slot_loop
      if (((s as any).temp_cbg_slot ?? 0) < ((s as any).temp_cbg_max_slot ?? 0)) {
        if (((s as any).job_booking ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_cbg_check ?? 0)) + ', ' + String(((s as any).temp_cbg_slot ?? 0))] !== '') {
          (s as any).result = 1;
          return;
        }
        (s as any).temp_cbg_slot = ((s as any).temp_cbg_slot ?? 0) + (1);
        // TODO-QSP: jump 'cbg_slot_loop'
      }
      (s as any).temp_cbg_check = ((s as any).temp_cbg_check ?? 0) + (1);
      // TODO-QSP: jump 'cbg_day_loop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCancelBooking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_booking ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(qspUntranslated(s, "ARGS[2]", { location: "jobs" })) + ', ' + String(qspUntranslated(s, "ARGS[3]", { location: "jobs" }))] !== '') {
    // TODO-QSP: $job_booking[$ARGS[1] + ', ' + $str(ARGS[2]) + ', ' + $str(ARGS[3])] = ''
    // TODO-QSP: job_bookings_active[$ARGS[1]] -= 1
    if (((s as any).job_bookings_active ?? 0)[((s as any).locArgs?.[1] ?? 0)] < 0) {
      // TODO-QSP: job_bookings_active[$ARGS[1]] = 0
    }
    // TODO-QSP: gs 'calendar_events', 'remove_event', 'job_booking_' + $ARGS[1] + '_' + $str(ARGS[2]) + '_' + $str(A...
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterChangeSchedule(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_active_schedule[$ARGS[1]] = $str(ARGS[2])
  if (((s as any).job_event_id ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
    // TODO-QSP: gs 'calendar_events', 'remove_event', $job_event_id[$ARGS[1]]
  }
  qspCall(s, 'jobs', 'create_recurring_event', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetJobFile(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_definition_source[$ARGS[1]] = $ARGS[2]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetJobIcon(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_icons_source[$ARGS[1]] = $ARGS[2]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResolveSlotTiming(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_slot_arrival ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(qspUntranslated(s, "ARGS[2]", { location: "jobs" }))] > 0) {
    (s as any).temp_resolved_arrival = ((s as any).job_slot_arrival ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(qspUntranslated(s, "ARGS[2]", { location: "jobs" }))];
    if (((s as any).job_slot_start ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(qspUntranslated(s, "ARGS[2]", { location: "jobs" }))] > 0) {
      (s as any).temp_resolved_start = ((s as any).job_slot_start ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(qspUntranslated(s, "ARGS[2]", { location: "jobs" }))];
    } else {
      (s as any).temp_resolved_start = ((s as any).temp_resolved_arrival ?? 0);
    }
    (s as any).temp_resolved_end = ((s as any).temp_resolved_start ?? 0) + ((s as any).job_slot_shift ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(qspUntranslated(s, "ARGS[2]", { location: "jobs" }))];
  } else {
    if (((s as any).job_arrival_start ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
      (s as any).temp_resolved_arrival = ((s as any).job_arrival_start ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
      if (((s as any).job_arrival_end ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
        (s as any).temp_resolved_start = ((s as any).job_arrival_end ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
      } else {
        (s as any).temp_resolved_start = ((s as any).temp_resolved_arrival ?? 0) + 60;
      }
      if (((s as any).job_available_end ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
        (s as any).temp_resolved_end = ((s as any).job_available_end ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
      } else {
        (s as any).temp_resolved_end = ((s as any).temp_resolved_start ?? 0) + 60;
      }
    } else {
      (s as any).temp_resolved_arrival = ((s as any).job_available_start ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
      (s as any).temp_resolved_start = ((s as any).temp_resolved_arrival ?? 0) + 60;
      (s as any).temp_resolved_end = ((((s as any).job_available_end ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) ? (((s as any).job_available_end ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]) : (((s as any).temp_resolved_start ?? 0) + 60));
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBuildBookingEventVars(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = qspUntranslated(s, "ARGS[2]", { location: "jobs" });
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['blocking'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['holiday'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_blocked_months'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  // TODO-QSP: gs 'jobs', '_resolve_slot_timing', $ARGS[1], ARGS[3]
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = ((s as any).temp_resolved_arrival ?? 0) / 15;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = ((s as any).temp_resolved_start ?? 0) / 15;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (((s as any).temp_resolved_end ?? 0) - ((s as any).temp_resolved_start ?? 0)) / 15;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['exclude_prefix'] = 'job_booking_' + ((s as any).locArgs?.[1] ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetJobDefinition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_title ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
    if (((s as any).job_definition_source ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== ''  &&  ((s as any).loc ?? 0)(((s as any).job_definition_source ?? 0)[((s as any).locArgs?.[1] ?? 0)])) {
      // TODO-QSP: gs $job_definition_source[$ARGS[1]], $ARGS[1]
    } else {
      qspCall(s, 'jobs_list', '', ((s as any).locArgs?.[1] ?? 0));
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckEmploymentPossible(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = 1;
  if (((s as any).cheatVars ?? 0)?.['work'] !== 0) {
    // TODO-QSP: exit
  }
  if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'on_demand'  &&  ((s as any).job_create_availability_events ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).job_blocking ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).events_list ?? {}).length === 0) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gs 'jobs', 'build_event_vars_for_job', $ARGS[1], ARGS[2]
  if (qspFunc(s, 'calendar_events', 'check_event_conflicts') === 1) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBuildEventVarsForJob(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'job_' + ((s as any).locArgs?.[1] ?? 0);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = ((s as any).job_title ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = ((s as any).job_location ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Work shift for ' + ((s as any).job_title ?? 0)[((s as any).locArgs?.[1] ?? 0)];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['blocking'] = ((s as any).job_blocking ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = ((((s as any).job_blocking ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) ? (2) : (1));
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['holiday'] = 0;
  if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'fixed'  ||  ((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'windowed') {
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
    if (((s as any).locArgs?.[2] ?? 0) >= 0) {
      (s as any).temp_bev_sched_idx = qspUntranslated(s, "ARGS[2]", { location: "jobs" });
    } else {
      (s as any).temp_bev_sched_idx = qspFunc(s, 'jobs', 'resolve_schedule_idx', ((s as any).locArgs?.[1] ?? 0));
    }
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = ((s as any).job_arrival ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_bev_sched_idx ?? 0))] / 15;
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = ((s as any).job_start ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_bev_sched_idx ?? 0))] / 15;
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = ((s as any).job_shift ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_bev_sched_idx ?? 0))] / 15;
    if (((s as any).job_work_dates ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly-' + ((s as any).job_work_dates ?? 0)[((s as any).locArgs?.[1] ?? 0)];
    } else {
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = ((s as any).job_work_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_bev_sched_idx ?? 0))];
    }
  } else {
    if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'on_demand') {
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['blocking'] = 0;
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 0;
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = ((s as any).job_available_start ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 15;
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = ((s as any).job_available_end ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 15;
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = 0;
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = ((s as any).job_available_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
    } else {
      if (((s as any).job_schedule_mode ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'booking') {
        if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 0;
        if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = 0;
        if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = 0;
        if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '';
      }
    }
  }
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCreateRecurringEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'jobs', 'build_event_vars_for_job', ((s as any).locArgs?.[1] ?? 0), (-1));
  qspCall(s, 'calendar_list', 'assign_color');
  // TODO-QSP: gs 'calendar_events', 'add_event', 'job_' + $ARGS[1]
  // TODO-QSP: $job_event_id[$ARGS[1]] = 'job_' + $ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCreateAvailabilityEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'get_job_definition', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).job_create_availability_events ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    qspCall(s, 'jobs', 'build_event_vars_for_job', ((s as any).locArgs?.[1] ?? 0), (-1));
    qspCall(s, 'calendar_list', 'assign_color');
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'job_avail_' + ((s as any).locArgs?.[1] ?? 0);
    // TODO-QSP: gs 'calendar_events', 'add_event', 'job_avail_' + $ARGS[1]
    // TODO-QSP: $job_event_id[$ARGS[1]] = 'job_avail_' + $ARGS[1]
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0) + 1) {
    if (!(s as any).stat_texts) (s as any).stat_texts = {}; (s as any).stat_texts['aurora_jobs'] = 'Aurora Talent Agency commercial shoot scheduled tomorrow at ' + qspUntranslated(s, "func('time', 'get_time_string', 10, 0, cheatVars['time_format'])>", { location: "jobs" }) + '.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'aurora_jobs');
  } else {
    if (((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0)) {
      if (((s as any).hour ?? 0) <= 11) {
        if (!(s as any).stat_texts) (s as any).stat_texts = {}; (s as any).stat_texts['aurora_jobs'] = 'Aurora Talent Agency commercial shoot in the city center at ' + qspUntranslated(s, "func('time', 'get_time_string', 10, 0, cheatVars['time_format'])>", { location: "jobs" }) + '!';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'aurora_jobs');
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You have an Aurora commercial shoot today at 10:00.', 'neg');
      }
    }
  }
  if (((s as any).job_status ?? 0)?.['city_pornstudio_delivery'] === 'employed'  &&  ((s as any).workDisk ?? 0) === 0  &&  ((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) >= 9  &&  (!((s as any).workDolg ?? 0))) {
    if (!(s as any).stat_texts) (s as any).stat_texts = {}; (s as any).stat_texts['porn_delivery'] = 'You should go to the porn studio today to pick up your delivery assignment.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_delivery');
    qspCall(s, 'stat_display_compute', 'queue_alert', 'Go to the porn studio today for your delivery assignment.', 'neg');
  }
  if (((s as any).week ?? 0) === 5  &&  ((s as any).workDolg ?? 0) === 0  &&  ((s as any).job_status ?? 0)?.['city_pornstudio_delivery'] === 'employed') {
    if (((s as any).workDisk ?? 0) === 2) {
      if (!(s as any).stat_texts) (s as any).stat_texts = {}; (s as any).stat_texts['porn_delivery'] = 'You should go to the sauna to do the delivery.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_delivery');
    } else {
      if (((s as any).workDisk ?? 0) === 3) {
        if (!(s as any).stat_texts) (s as any).stat_texts = {}; (s as any).stat_texts['porn_delivery'] = 'You should get back to the studio to finish the delivery.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_delivery');
      }
    }
  }
  if (((s as any).workDolg ?? 0) > 0) {
    if (!(s as any).stat_texts) (s as any).stat_texts = {}; (s as any).stat_texts['porn_delivery'] = 'You owe the porn studio ' + qspUntranslated(s, "func('money', 'string_debt', workDolg)>", { location: "jobs" }) + '';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_delivery');
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You owe the porn studio money.', 'neg');
  }
  if (((s as any).job_booking_debt ?? 0)?.['city_pornstudio_actress'] > 0) {
    if (!(s as any).stat_texts) (s as any).stat_texts = {}; (s as any).stat_texts['porn_acting_debt'] = 'You owe the porn studio ' + qspUntranslated(s, "func('money', 'format', job_booking_debt['city_pornstudio_actress'])>", { location: "jobs" }) + '.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_acting_debt');
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You owe the porn studio money for a shoot.', 'neg');
  }
  if (((s as any).firstkasting ?? 0) > 0  &&  ((s as any).pfilmNO ?? 0) < 1) {
    if (!(s as any).sd_cm) (s as any).sd_cm = {}; (s as any).sd_cm['pa_avail'] = ((s as any).job_booking_max_concurrent ?? {})?.['city_pornstudio_actress'] - ((s as any).job_bookings_active ?? {})?.['city_pornstudio_actress'];
    if (((s as any).sd_cm ?? 0)?.['pa_avail'] > 0) {
      // TODO-QSP: $stat_texts['porn_acting_avail'] = 'You can contract <<iif(sd_cm[''pa_avail''] = 1, ''1 more'', ''up to '' + $str(sd_cm[''pa_avail'']))>> porn shoot<<iif(sd_cm[''pa_avail''] > 1, ''s'', '''')>> at the Porn Studio.'
      qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_acting_avail');
    }
  }
  if (((s as any).job_bookings_active ?? 0)?.['city_pornstudio_actress'] > 0) {
    if (qspFunc(s, 'jobs', 'has_booking_for_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0)) === 0) {
      if (qspFunc(s, 'jobs', 'has_booking_for_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0) + 1) === 0) {
        if (!(s as any).sd_cm) (s as any).sd_cm = {}; (s as any).sd_cm['porn_next'] = qspFunc(s, 'jobs', 'get_next_booking_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0) + 2, 50);
        if (!(s as any).stat_texts) (s as any).stat_texts = {}; (s as any).stat_texts['porn_acting_sched'] = 'You have a porn shoot scheduled in ' + ((s as any).sd_cm ?? {})?.['porn_next'] - ((s as any).daystart ?? 0)> + ' days.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_acting_sched');
      } else {
        if (!(s as any).stat_texts) (s as any).stat_texts = {}; (s as any).stat_texts['porn_acting_sched'] = 'You have a porn shoot scheduled tomorrow.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'porn_acting_sched');
      }
    }
  }
  if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['max'] = 0;
  if (((s as any).sd_si ?? 0)?.['max'] > 0) {
    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['now'] = ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0);
    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['idx'] = 0;
    // TODO-QSP: :sd_v4job_loop
    if (((s as any).sd_si ?? 0)?.['idx'] < ((s as any).sd_si ?? 0)?.['max']) {
      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['job'] = qspUntranslated(s, "job_list[sd_si['idx']]", { location: "jobs" });
      if (((s as any).job_status ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 'employed'  &&  ((s as any).job_suspended ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 0) {
        if (((s as any).job_title ?? 0)[((s as any).sd_si ?? 0)?.['job']] === '') {
          // TODO-QSP: gs 'jobs', 'get_job_definition', $sd_si['job']
        }
        if (((s as any).job_show_stat_icon ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 1  &&  qspFunc(s, 'jobs', 'is_work_day', ((s as any).sd_si ?? 0)?.['job'], ((s as any).daystart ?? 0)) === 1) {
          if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = '';
          if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 0;
          if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['r_arrival'] = 0;
          if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['r_start'] = 0;
          if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['missed_today'] = 0;
          if (((s as any).job_schedule_mode ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 'booking') {
            if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['crossmid'] = 0;
            if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).sd_si ?? 0)?.['job'], ((s as any).daystart ?? 0) - 1) === 1) {
              // TODO-QSP: gs 'jobs', 'get_shift_for_day', $sd_si['job'], daystart - 1
              if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['xm_i'] = 0;
              // TODO-QSP: :sd_v4_crossmid
              if (((s as any).sd_si ?? 0)?.['xm_i'] < ((s as any).result_slot_count ?? 0)) {
                if (((s as any).result_slot_end ?? 0)[((s as any).sd_si ?? 0)?.['xm_i']] > 1440) {
                  if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['overflow'] = ((s as any).result_slot_end ?? 0)[((s as any).sd_si ?? {})?.['xm_i']] - 1440;
                  if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0) - 1  &&  ((s as any).job_worked_count ?? 0)[((s as any).sd_si ?? 0)?.['job']] > 0  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).sd_si ?? 0)?.['overflow']) {
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = 'green';
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 1;
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['crossmid'] = 1;
                  } else {
                    if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] !== ((s as any).daystart ?? 0) - 1  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).sd_si ?? 0)?.['overflow'] + 60) {
                      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = 'red';
                      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 1;
                      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['crossmid'] = 1;
                    }
                  }
                }
                if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['xm_i'] = ((s as any).sd_si['xm_i'] ?? 0) + (1);
                if (((s as any).sd_si ?? 0)?.['crossmid'] === 0) {
                  // TODO-QSP: jump 'sd_v4_crossmid'
                }
              }
            }
            if (((s as any).sd_si ?? 0)?.['crossmid'] === 0  &&  qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).sd_si ?? 0)?.['job'], ((s as any).daystart ?? 0)) === 1) {
              // TODO-QSP: gs 'jobs', 'get_shift_for_day', $sd_si['job'], daystart
              if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['best'] = 0;
              if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['slot_i'] = 0;
              // TODO-QSP: :sd_v4_slot_loop
              if (((s as any).sd_si ?? 0)?.['slot_i'] < ((s as any).result_slot_count ?? 0)) {
                if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0)  &&  ((s as any).job_worked_count ?? 0)[((s as any).sd_si ?? 0)?.['job']] > 0  &&  ((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_slot_arrival ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_slot_end ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]) {
                  if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['best'] = 4;
                  if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = 'green';
                } else {
                  if (((s as any).sd_si ?? 0)?.['best'] < 3  &&  ((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_slot_arrival ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_slot_start ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]) {
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['best'] = 3;
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = 'blue';
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['r_start'] = qspUntranslated(s, "result_slot_start[sd_si['slot_i']]", { location: "jobs" });
                  } else {
                    if (((s as any).sd_si ?? 0)?.['best'] < 2  &&  ((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] !== ((s as any).daystart ?? 0)  &&  ((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_slot_start ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_slot_end ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']] + 60) {
                      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['best'] = 2;
                      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = 'red';
                      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['missed_today'] = 1;
                    } else {
                      if (((s as any).sd_si ?? 0)?.['best'] < 1  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_slot_arrival ?? 0)[((s as any).sd_si ?? 0)?.['slot_i']]) {
                        if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['best'] = 1;
                        if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('white') : ('black'));
                        if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['r_arrival'] = qspUntranslated(s, "result_slot_arrival[sd_si['slot_i']]", { location: "jobs" });
                        if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['r_start'] = qspUntranslated(s, "result_slot_start[sd_si['slot_i']]", { location: "jobs" });
                      }
                    }
                  }
                }
                if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['slot_i'] = ((s as any).sd_si['slot_i'] ?? 0) + (1);
                if (((s as any).sd_si ?? 0)?.['best'] < 4) {
                  // TODO-QSP: jump 'sd_v4_slot_loop'
                }
              }
              if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0)  &&  ((s as any).sd_si ?? 0)?.['suffix'] === '') {
                if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 0;
              } else {
                if (((s as any).sd_si ?? 0)?.['suffix'] !== '') {
                  if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 1;
                }
              }
            }
          } else {
            if (((s as any).job_schedule_mode ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 'on_demand') {
              if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0)) {
                if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 0;
              } else {
                if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('white') : ('black'));
                if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 1;
              }
            } else {
              // TODO-QSP: gs 'jobs', 'get_shift_for_day', $sd_si['job'], daystart
              if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0)  &&  ((s as any).job_worked_count ?? 0)[((s as any).sd_si ?? 0)?.['job']] > 0  &&  ((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_arrival ?? 0)  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).iif ?? 0)(((s as any).job_clocked_in ?? 0)[((s as any).sd_si ?? 0)?.['job']] > 0, ((s as any).job_clocked_in ?? 0)[((s as any).sd_si ?? 0)?.['job']], ((s as any).result_start ?? 0)) + ((s as any).result_duration ?? 0)) {
                if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = 'green';
                if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 1;
              } else {
                if (((s as any).job_last_work_day ?? 0)[((s as any).sd_si ?? 0)?.['job']] === ((s as any).daystart ?? 0)) {
                  if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 0;
                } else {
                  if (((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_start ?? 0)  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_start ?? 0) + ((s as any).result_duration ?? 0) + 60) {
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = 'red';
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 1;
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['missed_today'] = 1;
                  } else {
                    if (((s as any).sd_si ?? 0)?.['now'] >= ((s as any).result_arrival ?? 0)  &&  ((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_start ?? 0)) {
                      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = 'blue';
                      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 1;
                      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['r_start'] = ((s as any).result_start ?? 0);
                    } else {
                      if (((s as any).sd_si ?? 0)?.['now'] < ((s as any).result_arrival ?? 0)) {
                        if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['suffix'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('white') : ('black'));
                        if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['show'] = 1;
                        if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['r_arrival'] = ((s as any).result_arrival ?? 0);
                        if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['r_start'] = ((s as any).result_start ?? 0);
                      }
                    }
                  }
                }
              }
            }
          }
          if (((s as any).sd_si ?? 0)?.['show'] === 1  &&  ((s as any).sd_si ?? 0)?.['suffix'] !== '') {
            if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['f_title'] = ((s as any).job_title ?? 0)[((s as any).sd_si ?? {})?.['job']] + ' at ' + ((s as any).job_location ?? 0)[((s as any).sd_si ?? {})?.['job']] + ': ';
            if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['f_start'] = qspFunc(s, 'time', 'get_time_string', ((s as any).sd_si ?? {})?.['r_start'] / 60, ((s as any).sd_si ?? {})?.['r_start'] % 60);
            if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['f_arrival'] = qspFunc(s, 'time', 'get_time_string', ((s as any).sd_si ?? {})?.['r_arrival'] / 60, ((s as any).sd_si ?? {})?.['r_arrival'] % 60);
            if (((s as any).sd_si ?? 0)?.['suffix'] === 'green') {
              if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['msg'] = ((s as any).sd_si ?? {})?.['f_title'] + 'Currently working.';
            } else {
              if (((s as any).sd_si ?? 0)?.['suffix'] === 'blue') {
                if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['msg'] = ((s as any).sd_si ?? {})?.['f_title'] + 'Your shift starts at ' + ((s as any).sd_si ?? {})?.['f_start'] + '. Head there now!';
                // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $sd_si['msg']
              } else {
                if (((s as any).sd_si ?? 0)?.['suffix'] === 'red') {
                  if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['msg'] = ((s as any).sd_si ?? {})?.['f_title'] + 'You missed your shift' + ((((s as any).sd_si ?? 0)?.['missed_today'] === 1) ? (' today!') : ('!'));
                } else {
                  if (((s as any).job_schedule_mode ?? 0)[((s as any).sd_si ?? 0)?.['job']] === 'on_demand') {
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['msg'] = ((s as any).sd_si ?? {})?.['f_title'] + 'Available today.';
                  } else {
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['msg'] = ((s as any).sd_si ?? {})?.['f_title'] + 'Arrive by ' + ((s as any).sd_si ?? {})?.['f_arrival'] + ', shift starts at ' + ((s as any).sd_si ?? {})?.['f_start'] + '.';
                    // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $sd_si['msg']
                  }
                }
              }
            }
            if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['label'] = 'v4_job_' + ((s as any).sd_si ?? {})?.['job'];
            // TODO-QSP: $stat_texts[$sd_si['label']] = $sd_si['msg']
            if (((s as any).stat_cfg ?? 0)?.['job_icon_themed'] === 1) {
              if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['icon_path'] = ((((s as any).job_icons_source ?? 0)[((s as any).sd_si ?? 0)?.['job']] !== '') ? (((s as any).job_icons_source ?? 0)[((s as any).sd_si ?? {})?.['job']] + '/') : ('jobs/'));
              if (((s as any).sd_si ?? 0)?.['suffix'] === 'green') {
                if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['icon_path'] = ((s as any).sd_si['icon_path'] ?? 0) + (':' + ((s as any).theme_hex ?? {})?.['v_pos']);
              } else {
                if (((s as any).sd_si ?? 0)?.['suffix'] === 'blue') {
                  if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['icon_path'] = ((s as any).sd_si['icon_path'] ?? 0) + (':' + ((s as any).theme_hex ?? {})?.['accent']);
                } else {
                  if (((s as any).sd_si ?? 0)?.['suffix'] === 'red') {
                    if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['icon_path'] = ((s as any).sd_si['icon_path'] ?? 0) + (':' + ((s as any).theme_hex ?? {})?.['v_neg']);
                  }
                }
              }
            } else {
              if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['icon_path'] = ((((s as any).job_icons_source ?? 0)[((s as any).sd_si ?? 0)?.['job']] !== '') ? (((s as any).job_icons_source ?? 0)[((s as any).sd_si ?? {})?.['job']] + '/') : ('status/jobs/'));
            }
            // TODO-QSP: gs 'stat_display_compute', 'queue_msg', $sd_si['label'], '', $sd_si['icon_path'], 4
          }
        }
      }
      if (!(s as any).sd_si) (s as any).sd_si = {}; (s as any).sd_si['idx'] = ((s as any).sd_si['idx'] ?? 0) + (1);
      // TODO-QSP: jump 'sd_v4job_loop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCleanupJob(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_event_id ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
    // TODO-QSP: gs 'calendar_events', 'remove_event', $job_event_id[$ARGS[1]]
  }
  // TODO-QSP: gs 'calendar_events', 'remove_event', 'job_' + $ARGS[1]
  // TODO-QSP: gs 'calendar_events', 'remove_event', 'job_avail_' + $ARGS[1]
  // TODO-QSP: $job_status[$ARGS[1]] = ''
  // TODO-QSP: job_rank[$ARGS[1]] = 0
  // TODO-QSP: job_added[$ARGS[1]] = 0
  // TODO-QSP: job_hiring_step[$ARGS[1]] = 0
  // TODO-QSP: job_termination_day[$ARGS[1]] = 0
  // TODO-QSP: $job_termination_reason[$ARGS[1]] = ''
  // TODO-QSP: job_worked_count[$ARGS[1]] = 0
  // TODO-QSP: job_shifts_total[$ARGS[1]] = 0
  // TODO-QSP: job_shifts_this_period[$ARGS[1]] = 0
  // TODO-QSP: job_last_work_day[$ARGS[1]] = 0
  // TODO-QSP: job_clocked_in[$ARGS[1]] = 0
  // TODO-QSP: job_missed_total[$ARGS[1]] = 0
  // TODO-QSP: job_miss_acknowledged[$ARGS[1]] = 0
  // TODO-QSP: job_paid_total[$ARGS[1]] = 0
  // TODO-QSP: job_suspended[$ARGS[1]] = 0
  // TODO-QSP: job_bonus_pay[$ARGS[1]] = 0
  // TODO-QSP: job_docked_pay[$ARGS[1]] = 0
  // TODO-QSP: $job_pay_interval[$ARGS[1]] = ''
  // TODO-QSP: job_pay_rate[$ARGS[1]] = 0
  // TODO-QSP: $job_event_id[$ARGS[1]] = ''
  // TODO-QSP: $job_active_schedule[$ARGS[1]] = ''
  // TODO-QSP: job_bookings_active[$ARGS[1]] = 0
  // TODO-QSP: job_booking_debt[$ARGS[1]] = 0
  // TODO-QSP: $job_recurrence_pattern[$ARGS[1]] = ''
  (s as any).temp_booking_range = ((s as any).job_booking_window_days ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (((s as any).temp_booking_range ?? 0) < 7) {
    (s as any).temp_booking_range = 7;
  }
  (s as any).temp_cleanup_max_slot = ((s as any).job_booking_slots_per_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (((s as any).temp_cleanup_max_slot ?? 0) < 1) {
    (s as any).temp_cleanup_max_slot = 1;
  }
  (s as any).temp_day_idx = ((s as any).daystart ?? 0) - ((s as any).temp_booking_range ?? 0);
  // TODO-QSP: :cleanup_bookings_loop
  if (((s as any).temp_day_idx ?? 0) <= ((s as any).daystart ?? 0) + ((s as any).temp_booking_range ?? 0)) {
    (s as any).temp_cleanup_slot = 0;
    // TODO-QSP: :cleanup_bookings_slot_loop
    if (((s as any).temp_cleanup_slot ?? 0) < ((s as any).temp_cleanup_max_slot ?? 0)) {
      if (((s as any).job_booking ?? 0)[((s as any).locArgs?.[1] ?? 0) + ', ' + String(((s as any).temp_day_idx ?? 0)) + ', ' + String(((s as any).temp_cleanup_slot ?? 0))] !== '') {
        // TODO-QSP: $job_booking[$ARGS[1] + ', ' + $str(temp_day_idx) + ', ' + $str(temp_cleanup_slot)] = ''
        // TODO-QSP: gs 'calendar_events', 'remove_event', 'job_booking_' + $ARGS[1] + '_' + $str(temp_day_idx) + '_' + $...
      }
      (s as any).temp_cleanup_slot = ((s as any).temp_cleanup_slot ?? 0) + (1);
      // TODO-QSP: jump 'cleanup_bookings_slot_loop'
    }
    (s as any).temp_day_idx = ((s as any).temp_day_idx ?? 0) + (1);
    // TODO-QSP: jump 'cleanup_bookings_loop'
  }
  // TODO-QSP: job_bookings_active[$ARGS[1]] = 0
  // TODO-QSP: $job_title[$ARGS[1]] = ''
  // TODO-QSP: $job_location[$ARGS[1]] = ''
  // TODO-QSP: $job_schedule_mode[$ARGS[1]] = ''
  // TODO-QSP: $job_pay_interval_def[$ARGS[1]] = ''
  // TODO-QSP: job_pay_rate_def[$ARGS[1]] = 0
  // TODO-QSP: $job_work_dates[$ARGS[1]] = ''
  // TODO-QSP: $job_available_days[$ARGS[1]] = ''
  // TODO-QSP: job_available_start[$ARGS[1]] = 0
  // TODO-QSP: job_available_end[$ARGS[1]] = 0
  // TODO-QSP: job_create_availability_events[$ARGS[1]] = 0
  // TODO-QSP: job_booking_window_days[$ARGS[1]] = 0
  // TODO-QSP: job_booking_slots_per_day[$ARGS[1]] = 0
  // TODO-QSP: job_booking_max_concurrent[$ARGS[1]] = 0
  // TODO-QSP: job_booking_min_gap_days[$ARGS[1]] = 0
  // TODO-QSP: job_arrival_start[$ARGS[1]] = 0
  // TODO-QSP: job_arrival_end[$ARGS[1]] = 0
  (s as any).temp_cleanup_slot_idx = 0;
  // TODO-QSP: :cleanup_slot_timing_loop
  if (((s as any).temp_cleanup_slot_idx ?? 0) < 4) {
    // TODO-QSP: job_slot_arrival[$ARGS[1] + ', ' + $str(temp_cleanup_slot_idx)] = 0
    // TODO-QSP: job_slot_start[$ARGS[1] + ', ' + $str(temp_cleanup_slot_idx)] = 0
    // TODO-QSP: job_slot_shift[$ARGS[1] + ', ' + $str(temp_cleanup_slot_idx)] = 0
    (s as any).temp_cleanup_slot_idx = ((s as any).temp_cleanup_slot_idx ?? 0) + (1);
    // TODO-QSP: jump 'cleanup_slot_timing_loop'
  }
  // TODO-QSP: job_blocking[$ARGS[1]] = 0
  // TODO-QSP: job_add_to_calendar[$ARGS[1]] = 0
  // TODO-QSP: job_show_stat_icon[$ARGS[1]] = 0
  // TODO-QSP: job_refresh_desc[$ARGS[1]] = 0
  // TODO-QSP: job_penalty_per_miss[$ARGS[1]] = 0
  // TODO-QSP: job_penalty_max_debt[$ARGS[1]] = 0
  // TODO-QSP: $job_on_miss_handler[$ARGS[1]] = ''
  // TODO-QSP: $job_on_miss_handler_func[$ARGS[1]] = ''
  // TODO-QSP: job_schedule_switchable[$ARGS[1]] = 0
  (s as any).temp_schedule_idx = 0;
  // TODO-QSP: :cleanup_schedules_loop
  if (((s as any).temp_schedule_idx ?? 0) < 5) {
    // TODO-QSP: $job_work_days[$ARGS[1] + ', ' + $str(temp_schedule_idx)] = ''
    // TODO-QSP: job_arrival[$ARGS[1] + ', ' + $str(temp_schedule_idx)] = 0
    // TODO-QSP: job_start[$ARGS[1] + ', ' + $str(temp_schedule_idx)] = 0
    // TODO-QSP: job_shift[$ARGS[1] + ', ' + $str(temp_schedule_idx)] = 0
    // TODO-QSP: $job_recurrence_pattern[$ARGS[1] + ', ' + $str(temp_schedule_idx)] = ''
    (s as any).temp_schedule_idx = ((s as any).temp_schedule_idx ?? 0) + (1);
    // TODO-QSP: jump 'cleanup_schedules_loop'
  }
  (s as any).temp_list_idx = qspUntranslated(s, "arrpos('job_list', ARGS[1])", { location: "jobs" });
  if (((s as any).temp_list_idx ?? 0) >= 0) {
    // TODO-QSP: killvar 'job_list', temp_list_idx
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTerminateAllJobs(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_term_idx = 0;
  // TODO-QSP: :terminate_all_loop
  if (((s as any).temp_term_idx ?? 0) >= 0) {
    qspCall(s, 'jobs', 'cleanup_job', ((s as any).temp_term_job ?? 0));
    (s as any).temp_term_idx = ((s as any).temp_term_idx ?? 0) - (1);
    // TODO-QSP: jump 'terminate_all_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFormatDays(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '1 2 3 4 5') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === '1 2 3 4 5 6') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === '1 2 3 4 5 6 7') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === '2 3 4 5 6') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === '6 7') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === '6') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === '7') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === '3 4') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === '5 6') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === '4 5 6 7 1 2') {
    // TODO-QSP: exit
  }
  // TODO-QSP: $fd_names[1] = 'Mon' & $fd_names[2] = 'Tue' & $fd_names[3] = 'Wed'
  // TODO-QSP: $fd_names[4] = 'Thu' & $fd_names[5] = 'Fri' & $fd_names[6] = 'Sat' & $fd_names[7] = 'Sun'
  (s as any).fd_i = 1;
  // TODO-QSP: :fd_loop
  if ((String(((s as any).locArgs?.[1] ?? 0)).indexOf(String(qspUntranslated(s, "str(fd_i)", { location: "jobs" })))) + 1 > 0) {
    if (((s as any).result ?? 0) !== '') {
      // TODO-QSP: $result += ', '
    }
    // TODO-QSP: $result += $fd_names[fd_i]
  }
  (s as any).fd_i = ((s as any).fd_i ?? 0) + (1);
  if (((s as any).fd_i ?? 0) <= 7) {
    // TODO-QSP: jump 'fd_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterEnsureRegistry(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).job_registry ?? {}).length < 27) {
    // TODO-QSP: $job_registry[0] = 'pav_voc_school_teacher'
    // TODO-QSP: $job_registry[1] = 'city_office_secretary'
    // TODO-QSP: $job_registry[2] = 'city_cafe_waitress'
    // TODO-QSP: $job_registry[3] = 'city_hospital_nurse'
    // TODO-QSP: $job_registry[4] = 'city_diner_dishwasher'
    // TODO-QSP: $job_registry[5] = 'city_diner_floor_washer'
    // TODO-QSP: $job_registry[6] = 'city_office_cleaner'
    // TODO-QSP: $job_registry[7] = 'city_office_toilet_cleaner'
    // TODO-QSP: $job_registry[8] = 'city_diner_secretary'
    // TODO-QSP: $job_registry[9] = 'city_strip_bargirl'
    // TODO-QSP: $job_registry[10] = 'city_strip_stripper'
    // TODO-QSP: $job_registry[11] = 'city_pussycats_clerk'
    // TODO-QSP: $job_registry[12] = 'city_market_saleswoman'
    // TODO-QSP: $job_registry[13] = 'city_pornstudio_actress'
    // TODO-QSP: $job_registry[14] = 'city_pornstudio_delivery'
    // TODO-QSP: $job_registry[15] = 'city_aphrodite_model'
    // TODO-QSP: $job_registry[16] = 'city_salon_masseuse'
    // TODO-QSP: $job_registry[26] = 'nich_maid'
    // TODO-QSP: $job_registry[17] = 'pav_hotel_maid'
    // TODO-QSP: $job_registry[18] = 'pav_clinic_cleaner'
    // TODO-QSP: $job_registry[19] = 'pav_factory'
    // TODO-QSP: $job_registry[20] = 'pav_mailgirl'
    // TODO-QSP: $job_registry[21] = 'pav_tour_guide'
    // TODO-QSP: $job_registry[22] = 'pav_barbershop_cleaner'
    // TODO-QSP: $job_registry[23] = 'pav_train_cleaner'
    // TODO-QSP: $job_registry[24] = 'pav_pool_lifeguard'
    // TODO-QSP: $job_registry[25] = 'highway_brothel_prostitute'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCard(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'get_job_definition', ((s as any).jc_id ?? 0));
  if (((s as any).job_card_hidden ?? 0)?.[String((s as any).jc_id ?? 0)] === 1  &&  ((s as any).job_status ?? 0)?.[String((s as any).jc_id ?? 0)] !== 'employed'  &&  ((s as any).job_hiring_step ?? 0)?.[String((s as any).jc_id ?? 0)] === 0  &&  ((s as any).cheatVars ?? 0)?.['show_hidden_jobs'] === 0) {
    if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['icon'] = 'images/system/icons/traits/hidden.png';
    if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['title'] = '???';
    if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['body'] = '<div style="font-size:0.9em; margin-top:4px;">This job is hidden. Keep exploring to unlock it.</div>';
    if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['bg'] = ((s as any).temp_bcolor ?? 0);
    if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['opacity'] = '0.4';
    qspCall(s, 'cards', 'shell');
    return;
  }
  if (((s as any).job_status ?? 0)?.[String((s as any).jc_id ?? 0)] === 'employed') {
  } else {
    if (((s as any).job_hiring_step ?? 0)?.[String((s as any).jc_id ?? 0)] > 0) {
    }
  }
  (s as any).jc_slot = ((((s as any).job_active_schedule ?? 0)?.[String((s as any).jc_id ?? 0)] !== '') ? (qspUntranslated(s, "val(job_active_schedule[jc_id])", { location: "jobs" })) : (0));
  if (((s as any).job_schedule_mode ?? 0)?.[String((s as any).jc_id ?? 0)] === 'booking') {
  } else {
    if (((s as any).job_schedule_mode ?? 0)?.[String((s as any).jc_id ?? 0)] === 'on_demand') {
    } else {
      (s as any).jc_end_m = (((s as any).job_start ?? 0)?.[String((s as any).jc_skey ?? 0)] + ((s as any).job_shift ?? 0)?.[String((s as any).jc_skey ?? 0)]) % 1440;
      if (((s as any).job_schedule_mode ?? 0)?.[String((s as any).jc_id ?? 0)] === 'windowed') {
        (s as any).jc_shift_h = ((s as any).job_shift ?? 0)?.[String((s as any).jc_skey ?? 0)] / 60;
        (s as any).jc_shift_m = ((s as any).job_shift ?? 0)?.[String((s as any).jc_skey ?? 0)] % 60;
      }
    }
  }
  if (((s as any).job_pay_interval_def ?? 0)?.[String((s as any).jc_id ?? 0)] === 'none') {
  } else {
    if (((s as any).job_pay_rate_def ?? 0)?.[String((s as any).jc_id ?? 0)] === 0) {
    }
  }
  if (((s as any).job_refresh_desc ?? 0)?.[String((s as any).jc_id ?? 0)] === 1) {
    if (((s as any).job_definition_source ?? 0)?.[String((s as any).jc_id ?? 0)] !== ''  &&  ((s as any).loc ?? 0)(((s as any).job_definition_source ?? 0)?.[String((s as any).jc_id ?? 0)])) {
      // TODO-QSP: gs $job_definition_source[$jc_id], $jc_id
    } else {
      qspCall(s, 'jobs_list', '', ((s as any).jc_id ?? 0));
    }
  }
  if (((s as any).job_status ?? 0)?.[String((s as any).jc_id ?? 0)] !== 'employed') {
  }
  if (((s as any).jc_body ?? 0) === '') {
  }
  if (((s as any).jc_sched ?? 0) !== '') {
    // TODO-QSP: $jc_body_html += '<div style="font-size:0.85em; margin-top:2px; opacity:0.8;"><<$jc_sched>></div>'
  }
  // TODO-QSP: $jc_body_html += '<div style="font-size:0.85em; margin-top:2px; opacity:0.8;"><<$jc_pay>></div>'
  if (((s as any).jc_body ?? 0) !== '') {
    // TODO-QSP: $jc_body_html += '<div style="margin-top:6px; font-size:0.9em;"><<$jc_body>></div>'
  }
  if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['icon'] = ((s as any).jc_icon ?? 0);
  if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['title'] = ((s as any).job_title ?? 0)?.[String((s as any).jc_id ?? 0)];
  if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['title_sub'] = 'at ' + $((s as any).job_location ?? 0)?.[String((s as any).jc_id ?? 0)];
  if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['body'] = ((s as any).jc_body_html ?? 0);
  if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['border'] = ((s as any).jc_border ?? 0);
  if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['bg'] = ((s as any).temp_bcolor ?? 0);
  if (!(s as any).card_in) (s as any).card_in = {}; (s as any).card_in['opacity'] = ((s as any).jc_opac ?? 0);
  qspCall(s, 'cards', 'shell');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShowAll(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'ensure_registry');
  (s as any).show_all_ji = 0;
  // TODO-QSP: :show_all_sort
  if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).job_registry ?? {}).length) {
    qspCall(s, 'jobs', 'get_job_definition', ((s as any).sa_id ?? 0));
    if (((s as any).job_card_hidden ?? 0)?.[String((s as any).sa_id ?? 0)] === 1  &&  ((s as any).job_status ?? 0)?.[String((s as any).sa_id ?? 0)] !== 'employed'  &&  ((s as any).job_hiring_step ?? 0)?.[String((s as any).sa_id ?? 0)] === 0) {
      // TODO-QSP: $sa_hidden[] = $sa_id
    } else {
      if (((s as any).job_status ?? 0)?.[String((s as any).sa_id ?? 0)] === 'employed') {
        // TODO-QSP: $sa_emp[] = $sa_id
      } else {
        if (((s as any).job_status ?? 0)?.[String((s as any).sa_id ?? 0)] === 'preemployed') {
          // TODO-QSP: $sa_pre[] = $sa_id
        } else {
          if (((s as any).job_status ?? 0)?.[String((s as any).sa_id ?? 0)] === 'terminated') {
            // TODO-QSP: $sa_term[] = $sa_id
          } else {
            if (((s as any).job_status ?? 0)?.[String((s as any).sa_id ?? 0)] === 'fired') {
              // TODO-QSP: $sa_fired[] = $sa_id
            } else {
              // TODO-QSP: $sa_unemp[] = $sa_id
            }
          }
        }
      }
    }
    (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
    // TODO-QSP: jump 'show_all_sort'
  }
  (s as any).show_all_ji = 0;
  // TODO-QSP: :show_all_r_emp
  if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_emp ?? {}).length) {
    // TODO-QSP: dynamic text: $func('jobs', 'card', $sa_emp[show_all_ji])
    scene.text('$func(\'jobs\', \'card\', $sa_emp[show_all_ji])');
    (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
    // TODO-QSP: jump 'show_all_r_emp'
  }
  (s as any).show_all_ji = 0;
  // TODO-QSP: :show_all_r_pre
  if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_pre ?? {}).length) {
    // TODO-QSP: dynamic text: $func('jobs', 'card', $sa_pre[show_all_ji])
    scene.text('$func(\'jobs\', \'card\', $sa_pre[show_all_ji])');
    (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
    // TODO-QSP: jump 'show_all_r_pre'
  }
  (s as any).show_all_ji = 0;
  // TODO-QSP: :show_all_r_term
  if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_term ?? {}).length) {
    // TODO-QSP: dynamic text: $func('jobs', 'card', $sa_term[show_all_ji])
    scene.text('$func(\'jobs\', \'card\', $sa_term[show_all_ji])');
    (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
    // TODO-QSP: jump 'show_all_r_term'
  }
  (s as any).show_all_ji = 0;
  // TODO-QSP: :show_all_r_fired
  if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_fired ?? {}).length) {
    // TODO-QSP: dynamic text: $func('jobs', 'card', $sa_fired[show_all_ji])
    scene.text('$func(\'jobs\', \'card\', $sa_fired[show_all_ji])');
    (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
    // TODO-QSP: jump 'show_all_r_fired'
  }
  (s as any).show_all_ji = 0;
  // TODO-QSP: :show_all_r_unemp
  if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_unemp ?? {}).length) {
    // TODO-QSP: dynamic text: $func('jobs', 'card', $sa_unemp[show_all_ji])
    scene.text('$func(\'jobs\', \'card\', $sa_unemp[show_all_ji])');
    (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
    // TODO-QSP: jump 'show_all_r_unemp'
  }
  (s as any).show_all_ji = 0;
  // TODO-QSP: :show_all_r_hidden
  if (((s as any).show_all_ji ?? 0) < Object.keys((s as any).sa_hidden ?? {}).length) {
    // TODO-QSP: dynamic text: $func('jobs', 'card', $sa_hidden[show_all_ji])
    scene.text('$func(\'jobs\', \'card\', $sa_hidden[show_all_ji])');
    (s as any).show_all_ji = ((s as any).show_all_ji ?? 0) + (1);
    // TODO-QSP: jump 'show_all_r_hidden'
  }
  return;
  // TODO-QSP: end
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
