import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterScheduleReset(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['shifts_required'] > 0) {
    (s as any).masseuse['schedule_update'] = ((s as any).daystart ?? 0);
    (s as any).ms_i = 1;
    // TODO-QSP: :loop_masseuse_sched_part
    (s as any).ms_j = 1;
    // TODO-QSP: :loop_masseuse_sched_inner
    (s as any).masseuse['' + String((s as any).ms_i || '') + '_shift_' + String((s as any).ms_j || '') + '_taken'] = ((s as any).masseuse ?? 0)?.['next_' + String(((s as any).ms_i ?? 0)) + '_shift_' + String(((s as any).ms_j ?? 0)) + '_taken'];
    if (((s as any).masseuse ?? 0)?.[String(((s as any).ms_i ?? 0)) + '_shift_' + String(((s as any).ms_j ?? 0)) + '_taken'] !== 1) {
      (s as any).masseuse['' + String((s as any).ms_i || '') + '_shift_' + String((s as any).ms_j || '') + '_taken'] = (((!(Math.floor(Math.random() * (2 + ((s as any).masseuse ?? 0)?.['shifts_required'] / 2 - 0 + 1)) + (0)))) ? (1) : (0));
    }
    (s as any).masseuse['next_' + String((s as any).ms_i || '') + '_shift_' + String((s as any).ms_j || '') + '_taken'] = (((!(Math.floor(Math.random() * (2 + ((s as any).masseuse ?? 0)?.['shifts_required'] / 2 - 0 + 1)) + (0)))) ? (1) : (0));
    (s as any).ms_j = ((s as any).ms_j ?? 0) + (1);
    if (((s as any).ms_j ?? 0) < 4) {
      // TODO-QSP: jump 'loop_masseuse_sched_inner'
    }
    (s as any).ms_i = ((s as any).ms_i ?? 0) + (1);
    if (((s as any).ms_i ?? 0) < 8) {
      // TODO-QSP: jump 'loop_masseuse_sched_part'
    }
  }
  scene.build();
}

function enterExitSchedule(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Finish scheduling', goto: ['salon', 'receptionist'] },
  ]);
  scene.build();
}

function enterDisplaySingleShift(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[3] === 0) {
    (s as any).ms_target_day = ((s as any).daystart ?? 0) - (((s as any).week ?? 0) - 1) + (((s as any).ARGS ?? 0)[1] - 1);
  } else {
    (s as any).ms_target_day = ((s as any).daystart ?? 0) - (((s as any).week ?? 0) - 1) + 7 + (((s as any).ARGS ?? 0)[1] - 1);
  }
  if (((s as any).ARGS ?? 0)[2] === 1) {
    (s as any).ms_hour1 = 9;
    (s as any).ms_hour2 = 13;
  } else {
    (s as any).ms_hour1 = 13;
    (s as any).ms_hour2 = 17;
    if (((s as any).ARGS ?? 0)[2] === 3) {
      (s as any).ms_hour1 = 17;
      (s as any).ms_hour2 = 21;
    }
    (s as any).ms_slot = ((s as any).ARGS ?? 0)[2] - 1;
    (s as any).ms_booked = ((((s as any).job_booking ?? 0)['city_salon_masseuse, ' + String(((s as any).ms_target_day ?? 0)) + ', ' + String(((s as any).ms_slot ?? 0))] !== '') ? (1) : (0));
    (s as any).ms_worked = ((s as any).masseuse ?? 0)?.['worked_' + String(((s as any).ms_target_day ?? 0)) + '_' + String(qspUntranslated(s, "ARGS[2]", { location: "masseuse_schedule" }))];
    (s as any).ms_taken = ((s as any).masseuse ?? 0)?.[String((s as any).ms_taken_key ?? 0)];
    (s as any).ms_past = ((((s as any).ms_target_day ?? 0) < ((s as any).daystart ?? 0)) ? (1) : (0));
    // TODO-QSP: $result += '<tr><td>'
    if (((s as any).ms_taken ?? 0) === 1  ||  ((s as any).ms_past ?? 0) === 1  ||  (((s as any).week ?? 0) === ((s as any).ARGS ?? 0)[1]  &&  ((s as any).hour ?? 0) >= ((s as any).ms_hour1 ?? 0)  &&  ((s as any).hour ?? 0) < ((s as any).ms_hour2 ?? 0))) {
      // TODO-QSP: $result += '<<$ms_time_string>> shift'
      // TODO-QSP: $result += '</td></tr><tr><td>'
      // TODO-QSP: $result += '<i>not available</i>'
    } else {
      // TODO-QSP: $result += '<<$ms_time_string>> shift'
      // TODO-QSP: $result += '</td></tr><tr><td>'
      // TODO-QSP: $result += '<i>already worked</i>'
      if (((s as any).ms_booked ?? 0) === 1) {
        // TODO-QSP: $result += '<<$ms_time_string>> shift'
        // TODO-QSP: $result += '</td></tr><tr><td>'
        // TODO-QSP: $result += '<a href="exec:gs ''jobs'', ''cancel_booking'', ''city_salon_masseuse'', <<ms_target_day>...
      } else {
        // TODO-QSP: $result += '<a href="exec:gs ''jobs'', ''book_slot'', ''city_salon_masseuse'', <<ms_target_day>>, <<...
      }
      // TODO-QSP: $result += '</td></tr>'
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'schedule_reset':
      enterScheduleReset(s, scene);
      break;
    case 'exit_schedule':
      enterExitSchedule(s, scene);
      break;
    case 'display_single_shift':
      enterDisplaySingleShift(s, scene);
      break;
    default:
      enterScheduleReset(s, scene);
      break;
  }
}

export const masseuse_schedule: LocationDef = {
  name: 'masseuse_schedule',
  region: 'other',
  enter: enter,
};
