import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDoBook(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sb_weekday = qspUntranslated(s, "ARGS[1]", { location: "stripclub_schedule" });
  (s as any).temp_sb_shift = qspUntranslated(s, "ARGS[2]", { location: "stripclub_schedule" });
  (s as any).temp_sb_next = qspUntranslated(s, "ARGS[3]", { location: "stripclub_schedule" });
  (s as any).temp_sb_offset = (((s as any).temp_sb_weekday ?? 0) - ((s as any).week ?? 0) + 7) % 7;
  if (((s as any).temp_sb_next ?? 0) === 1) {
    (s as any).temp_sb_offset = ((s as any).temp_sb_offset ?? 0) + (7);
  }
  (s as any).temp_sb_daystart = ((s as any).daystart ?? 0) + ((s as any).temp_sb_offset ?? 0);
  (s as any).temp_sb_slot = ((s as any).temp_sb_shift ?? 0) - 1;
  (s as any).temp_sb_result = qspFunc(s, 'jobs', 'book_slot', 'city_strip_stripper', ((s as any).temp_sb_daystart ?? 0), ((s as any).temp_sb_slot ?? 0), qspUntranslated(s, "str(temp_sb_shift)", { location: "stripclub_schedule" }));
  scene.build();
}

function enterDoCancel(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sc_weekday = qspUntranslated(s, "ARGS[1]", { location: "stripclub_schedule" });
  (s as any).temp_sc_shift = qspUntranslated(s, "ARGS[2]", { location: "stripclub_schedule" });
  (s as any).temp_sc_next = qspUntranslated(s, "ARGS[3]", { location: "stripclub_schedule" });
  (s as any).temp_sc_offset = (((s as any).temp_sc_weekday ?? 0) - ((s as any).week ?? 0) + 7) % 7;
  if (((s as any).temp_sc_next ?? 0) === 1) {
    (s as any).temp_sc_offset = ((s as any).temp_sc_offset ?? 0) + (7);
  }
  (s as any).temp_sc_daystart = ((s as any).daystart ?? 0) + ((s as any).temp_sc_offset ?? 0);
  (s as any).temp_sc_slot = ((s as any).temp_sc_shift ?? 0) - 1;
  qspCall(s, 'jobs', 'cancel_booking', 'city_strip_stripper', ((s as any).temp_sc_daystart ?? 0), ((s as any).temp_sc_slot ?? 0));
  scene.build();
}

function enterDisplaySingleShift(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[3] === 0) {
  }
  if (((s as any).ARGS ?? 0)[2] === 1) {
    (s as any).scs_hour1 = 9;
    (s as any).scs_hour2 = 13;
  } else {
    (s as any).scs_hour1 = 13;
    (s as any).scs_hour2 = 17;
  }
  (s as any).scs_offset = (((s as any).ARGS ?? 0)[1] - ((s as any).week ?? 0) + 7) % 7;
  if (((s as any).ARGS ?? 0)[3] === 1) {
    (s as any).scs_offset = ((s as any).scs_offset ?? 0) + (7);
  }
  (s as any).scs_day = ((s as any).daystart ?? 0) + ((s as any).scs_offset ?? 0);
  (s as any).scs_slot = ((s as any).ARGS ?? 0)[2] - 1;
  (s as any).scs_has_conflict = qspFunc(s, 'jobs', 'check_booking_conflict', 'city_strip_stripper', ((s as any).scs_day ?? 0), ((s as any).scs_slot ?? 0));
  // TODO-QSP: $result +=  '<tr><td>'
  if (((s as any).scs_booking ?? 0) === ''  &&  !(((s as any).ARGS ?? 0)[3] === 0  &&  ((s as any).week ?? 0) === ((s as any).ARGS ?? 0)[1]  &&  ((s as any).hour ?? 0) >= ((s as any).scs_hour1 ?? 0)  &&  ((s as any).hour ?? 0) < ((s as any).scs_hour2 ?? 0))) {
    if (((s as any).scs_has_conflict ?? 0) === 1) {
      // TODO-QSP: $result +=    '<font color="grey"><<$scs_time_string>> shift (busy)</font>'
    } else {
      // TODO-QSP: $result +=    '<a href="exec:gs ''stripclub_schedule'', ''do_book'', <<ARGS[1]>>, <<ARGS[2]>>, <<ARG...
    }
  } else {
    // TODO-QSP: $result +=    '<<$scs_time_string>> shift'
    // TODO-QSP: $result +=  '</td></tr><tr><td>'
    // TODO-QSP: $result +=    func('stripclub_schedule', 'random_stripper_name')
    // TODO-QSP: $result +=  '</td></tr><tr><td>'
    // TODO-QSP: $result +=    func('stripclub_schedule', 'random_stripper_name')
    if (((s as any).scs_day ?? 0) < ((s as any).daystart ?? 0)) {
      // TODO-QSP: $result +=    '<<$scs_time_string>> shift'
      // TODO-QSP: $result +=  '</td></tr><tr><td>'
      // TODO-QSP: $result +=    '<i>already worked</i>'
    } else {
      // TODO-QSP: $result +=    '<<$scs_time_string>> shift'
      // TODO-QSP: $result +=  '</td></tr><tr><td>'
      // TODO-QSP: $result +=    '<a href="exec:gs ''stripclub_schedule'', ''do_cancel'', <<ARGS[1]>>, <<ARGS[2]>>, <<A...
    }
    // TODO-QSP: $result +=  '</td></tr>'
  }
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
    default:
      enterDoBook(s, scene);
      break;
  }
}

export const stripclub_schedule: LocationDef = {
  name: 'stripclub_schedule',
  region: 'other',
  enter: enter,
};
