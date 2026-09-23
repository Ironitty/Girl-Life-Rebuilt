import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterScheduleReset(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['shifts_required'] > 0) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['schedule_update'] = ((s as any).daystart ?? 0);
    (s as any).ms_i = 1;
    // TODO-QSP: :loop_masseuse_sched_part
    (s as any).ms_j = 1;
    // TODO-QSP: :loop_masseuse_sched_inner
    ((s as any).masseuse = (s as any).masseuse ?? {})[String(((s as any).ms_i ?? 0)) + '_shift_' + String(((s as any).ms_j ?? 0)) + '_taken'] = ((s as any).masseuse ?? 0)?.['next_' + String(((s as any).ms_i ?? 0)) + '_shift_' + String(((s as any).ms_j ?? 0)) + '_taken'];
    if (((s as any).masseuse ?? 0)[(((s as any).ms_i ?? 0)) + '_shift_' + (((s as any).ms_j ?? 0)) + '_taken'] !== 1) {
      ((s as any).masseuse = (s as any).masseuse ?? {})[String(((s as any).ms_i ?? 0)) + '_shift_' + String(((s as any).ms_j ?? 0)) + '_taken'] = (((!(Math.floor(Math.random() * (2 + ((s as any).masseuse ?? 0)?.['shifts_required'] / 2 - 0 + 1)) + (0)))) ? (1) : (0));
    }
    ((s as any).masseuse = (s as any).masseuse ?? {})['next_' + String(((s as any).ms_i ?? 0)) + '_shift_' + String(((s as any).ms_j ?? 0)) + '_taken'] = (((!(Math.floor(Math.random() * (2 + ((s as any).masseuse ?? 0)?.['shifts_required'] / 2 - 0 + 1)) + (0)))) ? (1) : (0));
    (s as any).ms_j = ((s as any).ms_j ?? 0) + (1);
    if (((s as any).ms_j ?? 0) < 4) {
      // TODO-QSP: jump 'loop_masseuse_sched_inner'
    }
    (s as any).ms_i = ((s as any).ms_i ?? 0) + (1);
    if (((s as any).ms_i ?? 0) < 8) {
      // TODO-QSP: jump 'loop_masseuse_sched_part'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterExitSchedule(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish scheduling', goto: ['salon', 'receptionist'] },
  ]);
  scene.build();
}

function enterDisplaySingleShift(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[3] ?? '') === 0) {
    (s as any).ms_taken_key = '' + ((s as any).locArgs?.[1] ?? 0) + '_shift_' + ((s as any).locArgs?.[2] ?? 0) + '_taken';
    (s as any).ms_target_day = ((s as any).daystart ?? 0) - (((s as any).week ?? 0) - 1) + (((s as any).locArgs?.[1] ?? 0) - 1);
    (s as any).ms_return_arg = 'set_schedule';
  } else {
    if (String((s as any).locArgs?.[3] ?? '') === 1) {
      (s as any).ms_taken_key = 'next_' + ((s as any).locArgs?.[1] ?? 0) + '_shift_' + ((s as any).locArgs?.[2] ?? 0) + '_taken';
      (s as any).ms_target_day = ((s as any).daystart ?? 0) - (((s as any).week ?? 0) - 1) + 7 + (((s as any).locArgs?.[1] ?? 0) - 1);
      (s as any).ms_return_arg = 'next_week_set_schedule';
    }
  }
  if (String((s as any).locArgs?.[2] ?? '') === 1) {
    (s as any).ms_time_string = '9:00-13:00';
    (s as any).ms_hour1 = 9;
    (s as any).ms_hour2 = 13;
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 2) {
      (s as any).ms_time_string = '13:00-17:00';
      (s as any).ms_hour1 = 13;
      (s as any).ms_hour2 = 17;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 3) {
        (s as any).ms_time_string = '17:00-21:00';
        (s as any).ms_hour1 = 17;
        (s as any).ms_hour2 = 21;
      }
    }
  }
  (s as any).ms_slot = ((s as any).locArgs?.[2] ?? 0) - 1;
  (s as any).ms_booked = ((((s as any).job_booking ?? 0)['city_salon_masseuse, ' + String(((s as any).ms_target_day ?? 0)) + ', ' + String(((s as any).ms_slot ?? 0))] !== '') ? (1) : (0));
  (s as any).ms_worked = ((s as any).masseuse ?? 0)?.['worked_' + String(((s as any).ms_target_day ?? 0)) + '_' + String(((s as any).locArgs?.[2] ?? 0))];
  (s as any).ms_taken = ((s as any).masseuse ?? 0)?.[String((s as any).ms_taken_key ?? 0)];
  (s as any).ms_past = ((((s as any).ms_target_day ?? 0) < ((s as any).daystart ?? 0)) ? (1) : (0));
  // TODO-QSP: $result += '<tr><td>'
  if (((s as any).ms_taken ?? 0) === 1  ||  ((s as any).ms_past ?? 0) === 1  ||  (((s as any).week ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).hour ?? 0) >= ((s as any).ms_hour1 ?? 0)  &&  ((s as any).hour ?? 0) < ((s as any).ms_hour2 ?? 0))) {
    // TODO-QSP: $result += '<<$ms_time_string>> shift'
    // TODO-QSP: $result += '</td></tr><tr><td>'
    // TODO-QSP: $result += '<i>not available</i>'
  } else {
    if (((s as any).ms_worked ?? 0) === 1) {
      // TODO-QSP: $result += '<<$ms_time_string>> shift'
      // TODO-QSP: $result += '</td></tr><tr><td>'
      // TODO-QSP: $result += '<i>already worked</i>'
    } else {
      if (((s as any).ms_booked ?? 0) === 1) {
        // TODO-QSP: $result += '<<$ms_time_string>> shift'
        // TODO-QSP: $result += '</td></tr><tr><td>'
        // TODO-QSP: $result += '<a href="exec:gs ''jobs'', ''cancel_booking'', ''city_salon_masseuse'', <<ms_target_day>...
      } else {
        // TODO-QSP: $result += '<a href="exec:gs ''jobs'', ''book_slot'', ''city_salon_masseuse'', <<ms_target_day>>, <<...
      }
    }
  }
  // TODO-QSP: $result += '</td></tr>'
  // TODO-QSP: end
  scene.build();
}

function enterRandomMasseuseName(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 8) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).result = '<i>Katia</i>';
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).result = '<i>Natasha</i>';
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        (s as any).result = '<i>Anastasia</i>';
      } else {
        if (((s as any).temp_rand ?? 0) === 3) {
          (s as any).result = '<i>Natalya</i>';
        } else {
          if (((s as any).temp_rand ?? 0) === 4) {
            (s as any).result = '<i>Kira</i>';
          } else {
            if (((s as any).temp_rand ?? 0) === 5) {
              (s as any).result = '<i>Mila</i>';
            } else {
              if (((s as any).temp_rand ?? 0) === 6) {
                (s as any).result = '<i>Anya</i>';
              } else {
                (s as any).result = '<i>Sasha</i>';
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetScheduleBase(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['schedule_update'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterScheduleReset(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'stat', '');
  (s as any).temp_table = '<table border=1>';
  // TODO-QSP: $temp_table +=    '<tr>'
  // TODO-QSP: $temp_table +=      '<th></th>'
  // TODO-QSP: $temp_table +=      '<th>Sunday</th>'
  // TODO-QSP: $temp_table +=      '<th>Monday</th>'
  // TODO-QSP: $temp_table +=      '<th>Tuesday</th>'
  // TODO-QSP: $temp_table +=      '<th>Wednesday</th>'
  // TODO-QSP: $temp_table +=      '<th>Thursday</th>'
  // TODO-QSP: $temp_table +=      '<th>Friday</th>'
  // TODO-QSP: $temp_table +=      '<th>Saturday</th>'
  // TODO-QSP: $temp_table +=    '</tr>'
  // TODO-QSP: $temp_table +=    '<tr>'
  // TODO-QSP: $temp_table +=      '<th>First shift</th>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 7, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 1, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 2, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 3, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 4, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 5, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 6, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=    '</tr>'
  // TODO-QSP: $temp_table +=    '<tr>'
  // TODO-QSP: $temp_table +=      '<th>Second shift</th>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 7, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 1, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 2, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 3, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 4, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 5, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 6, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=    '</tr>'
  // TODO-QSP: $temp_table +=    '<tr>'
  // TODO-QSP: $temp_table +=      '<th>Third shift</th>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 7, 3, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 1, 3, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 2, 3, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 3, 3, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 4, 3, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 5, 3, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('masseuse_schedule', 'display_single_shift', 6, 3, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=    '</tr>'
  // TODO-QSP: $temp_table +=  '</table>'
  // TODO-QSP: dynamic text: <<$temp_table>>
  scene.text(`${((s as any).temp_table ?? '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterSetSchedule(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 0]; enterSetScheduleBase(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterNextWeekSetSchedule(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterSetScheduleBase(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
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
    case 'random_masseuse_name':
      enterRandomMasseuseName(s, scene);
      break;
    case 'set_schedule_base':
      enterSetScheduleBase(s, scene);
      break;
    case 'set_schedule':
      enterSetSchedule(s, scene);
      break;
    case 'next_week_set_schedule':
      enterNextWeekSetSchedule(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const masseuse_schedule: LocationDef = {
  name: 'masseuse_schedule',
  region: 'other',
  enter: enter,
};
