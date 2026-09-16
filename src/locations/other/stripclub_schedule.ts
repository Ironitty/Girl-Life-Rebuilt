import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDoBook(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sb_weekday = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_sb_shift = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_sb_next = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_sb_offset = (((s as any).temp_sb_weekday ?? 0) - ((s as any).week ?? 0) + 7) % 7;
  if (((s as any).temp_sb_next ?? 0) === 1) {
    (s as any).temp_sb_offset = ((s as any).temp_sb_offset ?? 0) + (7);
  }
  (s as any).temp_sb_daystart = ((s as any).daystart ?? 0) + ((s as any).temp_sb_offset ?? 0);
  (s as any).temp_sb_slot = ((s as any).temp_sb_shift ?? 0) - 1;
  (s as any).temp_sb_result = qspFunc(s, 'jobs', 'book_slot', 'city_strip_stripper', ((s as any).temp_sb_daystart ?? 0), ((s as any).temp_sb_slot ?? 0), qspUntranslated(s, "str(temp_sb_shift)", { location: "stripclub_schedule" }));
  // TODO-QSP: end
  scene.build();
}

function enterDoCancel(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sc_weekday = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_sc_shift = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_sc_next = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_sc_offset = (((s as any).temp_sc_weekday ?? 0) - ((s as any).week ?? 0) + 7) % 7;
  if (((s as any).temp_sc_next ?? 0) === 1) {
    (s as any).temp_sc_offset = ((s as any).temp_sc_offset ?? 0) + (7);
  }
  (s as any).temp_sc_daystart = ((s as any).daystart ?? 0) + ((s as any).temp_sc_offset ?? 0);
  (s as any).temp_sc_slot = ((s as any).temp_sc_shift ?? 0) - 1;
  qspCall(s, 'jobs', 'cancel_booking', 'city_strip_stripper', ((s as any).temp_sc_daystart ?? 0), ((s as any).temp_sc_slot ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterDisplaySingleShift(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[3] ?? 0))) {
    (s as any).scs_return_arg = 'set_schedule';
  } else {
    if (((s as any).locArgs?.[3] ?? 0) === 1) {
      (s as any).scs_return_arg = 'next_week_set_schedule';
    }
  }
  if (((s as any).locArgs?.[2] ?? 0) === 1) {
    (s as any).scs_time_string = '18:00-00:00';
    (s as any).scs_hour1 = 9;
    (s as any).scs_hour2 = 13;
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 2) {
      (s as any).scs_time_string = '21:00-03:00';
      (s as any).scs_hour1 = 13;
      (s as any).scs_hour2 = 17;
    }
  }
  (s as any).scs_offset = (((s as any).locArgs?.[1] ?? 0) - ((s as any).week ?? 0) + 7) % 7;
  if (((s as any).locArgs?.[3] ?? 0) === 1) {
    (s as any).scs_offset = ((s as any).scs_offset ?? 0) + (7);
  }
  (s as any).scs_day = ((s as any).daystart ?? 0) + ((s as any).scs_offset ?? 0);
  (s as any).scs_slot = ((s as any).locArgs?.[2] ?? 0) - 1;
  (s as any).scs_booking = qspFunc(s, 'jobs', 'get_booking_data', 'city_strip_stripper', ((s as any).scs_day ?? 0), ((s as any).scs_slot ?? 0));
  (s as any).scs_has_conflict = qspFunc(s, 'jobs', 'check_booking_conflict', 'city_strip_stripper', ((s as any).scs_day ?? 0), ((s as any).scs_slot ?? 0));
  // TODO-QSP: $result +=  '<tr><td>'
  if (((s as any).scs_booking ?? 0) === ''  &&  !(((s as any).locArgs?.[3] ?? 0) === 0  &&  ((s as any).week ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).hour ?? 0) >= ((s as any).scs_hour1 ?? 0)  &&  ((s as any).hour ?? 0) < ((s as any).scs_hour2 ?? 0))) {
    if (((s as any).scs_has_conflict ?? 0) === 1) {
      // TODO-QSP: $result +=    '<font color="grey"><<$scs_time_string>> shift (busy)</font>'
    } else {
      // TODO-QSP: $result +=    '<a href="exec:gs ''stripclub_schedule'', ''do_book'', <<ARGS[1]>>, <<ARGS[2]>>, <<ARG...
    }
  } else {
    if (((s as any).locArgs?.[3] ?? 0) === 0  &&  ((s as any).week ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).hour ?? 0) >= ((s as any).scs_hour1 ?? 0)  &&  ((s as any).hour ?? 0) < ((s as any).scs_hour2 ?? 0)) {
      // TODO-QSP: $result +=    '<<$scs_time_string>> shift'
      // TODO-QSP: $result +=  '</td></tr><tr><td>'
      // TODO-QSP: $result +=    func('stripclub_schedule', 'random_stripper_name')
      // TODO-QSP: $result +=  '</td></tr><tr><td>'
      // TODO-QSP: $result +=    func('stripclub_schedule', 'random_stripper_name')
    } else {
      if (((s as any).scs_day ?? 0) < ((s as any).daystart ?? 0)) {
        // TODO-QSP: $result +=    '<<$scs_time_string>> shift'
        // TODO-QSP: $result +=  '</td></tr><tr><td>'
        // TODO-QSP: $result +=    '<i>already worked</i>'
      } else {
        // TODO-QSP: $result +=    '<<$scs_time_string>> shift'
        // TODO-QSP: $result +=  '</td></tr><tr><td>'
        // TODO-QSP: $result +=    '<a href="exec:gs ''stripclub_schedule'', ''do_cancel'', <<ARGS[1]>>, <<ARGS[2]>>, <<A...
      }
    }
  }
  // TODO-QSP: $result +=  '</td></tr>'
  // TODO-QSP: end
  scene.build();
}

function enterRandomStripperName(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = Math.floor(Math.random() * 8) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).result = '<i>Ruby</i>';
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).result = '<i>Onyx</i>';
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        (s as any).result = '<i>Jade</i>';
      } else {
        if (((s as any).temp_rand ?? 0) === 3) {
          (s as any).result = '<i>Emerald</i>';
        } else {
          if (((s as any).temp_rand ?? 0) === 4) {
            (s as any).result = '<i>Amythest</i>';
          } else {
            if (((s as any).temp_rand ?? 0) === 5) {
              (s as any).result = '<i>Diamond</i>';
            } else {
              if (((s as any).temp_rand ?? 0) === 6) {
                (s as any).result = '<i>Azul</i>';
              } else {
                (s as any).result = '<i>Opal</i>';
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
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 7, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 1, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 2, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 3, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 4, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 5, 1, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 6, 1, ARGS[1])
  if (((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1) {
    // TODO-QSP: $temp_table +=        '<tr>'
    // TODO-QSP: $temp_table +=          '<td>'
    // TODO-QSP: $temp_table +=            '<i>Amber</i>'
    // TODO-QSP: $temp_table +=          '</td>'
    // TODO-QSP: $temp_table +=        '</tr>'
  }
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=    '</tr>'
  // TODO-QSP: $temp_table +=    '<tr>'
  // TODO-QSP: $temp_table +=      '<th>Second shift</th>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 7, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 1, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 2, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 3, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 4, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 5, 2, ARGS[1])
  if (((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1) {
    // TODO-QSP: $temp_table +=        '<tr>'
    // TODO-QSP: $temp_table +=          '<td>'
    // TODO-QSP: $temp_table +=            '<i>Amber</i>'
    // TODO-QSP: $temp_table +=          '</td>'
    // TODO-QSP: $temp_table +=        '</tr>'
  }
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=      '<td>'
  // TODO-QSP: $temp_table +=        '<table>'
  // TODO-QSP: $temp_table +=          func('stripclub_schedule', 'display_single_shift', 6, 2, ARGS[1])
  // TODO-QSP: $temp_table +=        '</table>'
  // TODO-QSP: $temp_table +=      '</td>'
  // TODO-QSP: $temp_table +=    '</tr>'
  // TODO-QSP: $temp_table +=  '</table>'
  // TODO-QSP: dynamic text: <<$temp_table>>
  scene.text(`${((s as any).temp_table || '')}`);
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
    case 'do_book':
      enterDoBook(s, scene);
      break;
    case 'do_cancel':
      enterDoCancel(s, scene);
      break;
    case 'display_single_shift':
      enterDisplaySingleShift(s, scene);
      break;
    case 'random_stripper_name':
      enterRandomStripperName(s, scene);
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

export const stripclub_schedule: LocationDef = {
  name: 'stripclub_schedule',
  region: 'other',
  enter: enter,
};
