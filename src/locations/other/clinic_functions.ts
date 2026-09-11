import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterReceptionOptionLabel(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_rol_state ?? 0) === 'none') {
  } else {
    if (((s as any).temp_rol_state ?? 0) === 'pending') {
      (s as any).temp_rol_daystart = ((((s as any).temp_rol_recur ?? 0) !== '') ? (((s as any).daystart ?? 0)) : (((s as any).event_daystart ?? 0)?.[String((s as any).temp_rol_id ?? 0)]));
      if (((s as any).temp_rol_daystart ?? 0) === ((s as any).daystart ?? 0)) {
      }
    }
  }
  return;
  scene.build();
}

function enterReceptionAttend(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'appointments', 'render_acts', ((s as any).locArgs?.[1] ?? 0), 'clinic_functions', 'request_appointment', 'attend_appointment', ((s as any).temp_ra_recur ?? 0));
  return;
  scene.build();
}

function enterCategoryName(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'Pavlov') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Ninel') {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'Petrovich') {
      }
    }
  }
  return;
  scene.build();
}

function enterCategoryDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_cd_name ?? 0) !== '') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Optometrist') {
    }
  }
  return;
  scene.build();
}

function enterRequestAppointment(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).locArgs?.[1] ?? 0) === 'Pavlov'  &&  ((s as any).hypnoSchedule ?? 0) === 1) {
    // TODO-QSP: dynamic text: "Dr. Pavlov only sees you on Thursdays, between ' + func('time', 'get_time_strin...
    scene.text('"Dr. Pavlov only sees you on Thursdays, between \' + func(\'time\', \'get_time_string\', 18, 0) + \' and \' + func(\'time\', \'get_time_string\', 19, 0) + \'," the receptionist tells you. "Come back then."');
    return;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'Pavlov') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Ninel') {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'Petrovich') {
      }
    }
  }
  (s as any).tmp_doc_seed = qspFunc(s, 'random', 'string_hash', ((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).region ?? 0)[1]);
  (s as any).tmp_doc_duration = 4;
  (s as any).tmp_doc_range_min = 27;
  (s as any).appointment_offer_duration = ((s as any).tmp_doc_duration ?? 0);
  (s as any).appointment_offer_buffer = 2;
  (s as any).temp_lucky_end = (((s as any).totminut ?? 0) % 1440) / 15 + ((s as any).rand ?? 0)(1, 3);
  if (((s as any).temp_lucky_end ?? 0) >= ((s as any).tmp_doc_range_min ?? 0)  &&  ((s as any).temp_lucky_end ?? 0) <= 82  &&  qspFunc(s, 'appointments', 'check_conflict', ((s as any).daystart ?? 0), ((s as any).temp_lucky_end ?? 0)) === 0) {
    (s as any).same_day_window_end = ((s as any).temp_lucky_end ?? 0);
    (s as any).same_day_free = (((Math.floor(Math.random() * 100) + 0) < 15) ? (1) : (0));
  } else {
    (s as any).same_day_window_end = (-1);
    (s as any).same_day_free = 0;
  }
  qspCall(s, 'clinic_functions', 'request_appointment_offer');
  scene.build();
}

function enterRequestAppointmentOffer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).appt_ret_loc ?? 0) === '') {
    (s as any).appointment_selected_index = (-1);
  }
  qspCall(s, 'appointments', 'offer_slots', 6, ((s as any).tmp_doc_seed ?? 0), 14, ((s as any).tmp_doc_duration ?? 0), 2, ((s as any).tmp_doc_range_min ?? 0), 82, 1);
  (s as any).same_day_offer_index = (-1);
  if (((s as any).same_day_window_end ?? 0) >= 0) {
    (s as any).same_day_offer_index = ((s as any).appointment_offer_count ?? 0);
    ((s as any).appointment_offer_day ?? {})[String((s as any).same_day_offer_index ?? 0)] = ((s as any).daystart ?? 0);
    ((s as any).appointment_offer_window_end ?? {})[String((s as any).same_day_offer_index ?? 0)] = ((s as any).same_day_window_end ?? 0);
  }
  (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
  if (((s as any).temp_rand ?? 0) === 1) {
    // TODO-QSP: dynamic text: "For an appointment with <<$temp_doc_desc>>, we have some options:"
    scene.text(`"For an appointment with ${((s as any).temp_doc_desc ?? 0)}, we have some options:"`);
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      // TODO-QSP: dynamic text: "We currently have some available slots for an appointment with <<$temp_doc_desc...
      scene.text(`"We currently have some available slots for an appointment with ${((s as any).temp_doc_desc ?? 0)}:"`);
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        // TODO-QSP: dynamic text: "For your check-up with <<$temp_doc_desc>>, here are some possible times:"
        scene.text(`"For your check-up with ${((s as any).temp_doc_desc ?? 0)}, here are some possible times:"`);
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          // TODO-QSP: dynamic text: The nurse smiles and says, "We have some openings left this week for your appoin...
          scene.text(`The nurse smiles and says, "We have some openings left this week for your appointment with ${((s as any).temp_doc_desc ?? 0)}:"`);
        } else {
          // TODO-QSP: dynamic text: "For the appointment with <<$temp_doc_desc>> we have some options available:"
          scene.text(`"For the appointment with ${((s as any).temp_doc_desc ?? 0)} we have some options available:"`);
        }
      }
    }
  }
  scene.text('<table cellspacing=0 cellpadding=4 border=0><tr><th align=left>Day</th><th align=left>Time</th><th align=left>Notes</th></tr>');
  (s as any).temp_roff_i = 0;
  // TODO-QSP: :request_offer_loop
  if (((s as any).temp_roff_i ?? 0) < ((s as any).appointment_offer_count ?? 0)) {
    if (((s as any).appointment_offer_day ?? 0)?.[String((s as any).temp_roff_i ?? 0)] >= 0) {
      qspCall(s, 'clinic_functions', '_offer_row', ((s as any).temp_roff_i ?? 0));
    }
    (s as any).temp_roff_i = ((s as any).temp_roff_i ?? 0) + (1);
    // TODO-QSP: jump 'request_offer_loop'
  }
  scene.text('</table>');
  if (((s as any).same_day_offer_index ?? 0) >= 0) {
    if (((s as any).same_day_free ?? 0) === 1) {
      // TODO-QSP: dynamic text: "Actually, it looks like something opened up for later today, too. You're welcom...
      scene.text(`"Actually, it looks like something opened up for later today, too. You're welcome to wait for ${((s as any).temp_doc_desc ?? 0)}, free of charge, if you'd rather not book ahead."`);
    } else {
      // TODO-QSP: dynamic text: "If you'd prefer not to wait for one of these, we also offer an expedited appoin...
      scene.text(`"If you'd prefer not to wait for one of these, we also offer an expedited appointment with ${((s as any).temp_doc_desc ?? 0)} today, for a fee."`);
    }
  }
  if (((s as any).appointment_selected_index ?? 0) >= 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'clinic_functions', 'book_appointment_confirm', ((s as any).appointment_selected_index ?? 0));
    dynamicGoto(st, 'temp_appt_dest_loc', 'temp_appt_dest_arg');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue (Please select an appointment)',  },
    ]);
  }
  if (((s as any).same_day_offer_index ?? 0) >= 0) {
    if (((s as any).same_day_free ?? 0) === 1) {
      scene.actions([
        { label: 'Wait for the opening today, free of charge', handler: (st: GameState) => {
    (s as any).temp_wait_minutes = ((s as any).appointment_offer_window_end ?? 0)?.[String((s as any).same_day_offer_index ?? 0)] * 15 - (((s as any).totminut ?? 0) % 1440);
    qspCall(s, 'clinic_functions', 'book_appointment_confirm', ((s as any).same_day_offer_index ?? 0));
    qspCall(s, 'appointments', 'resolve', ((s as any).doc_category ?? 0));
    qspCall(s, 'clinic_functions', 'wait_for_appointment', ((s as any).doc_category ?? 0), ((s as any).temp_wait_minutes ?? 0));
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pay for an expedited appointment [+$func(\'money\', \'get_cost_string\', 1000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1000);
      (s as any).temp_wait_minutes = ((s as any).appointment_offer_window_end ?? 0)?.[String((s as any).same_day_offer_index ?? 0)] * 15 - (((s as any).totminut ?? 0) % 1440);
      qspCall(s, 'clinic_functions', 'book_appointment_confirm', ((s as any).same_day_offer_index ?? 0));
      qspCall(s, 'appointments', 'resolve', ((s as any).doc_category ?? 0));
      qspCall(s, 'clinic_functions', 'wait_for_appointment', ((s as any).doc_category ?? 0), ((s as any).temp_wait_minutes ?? 0));
    }
  } },
      ]);
    }
  }
  return;
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    qspCall(s, 'clinic_functions', 'book_appointment_cleanup');
    dynamicGoto(st, 'temp_appt_dest_loc', 'temp_appt_dest_arg');
  } },
  ]);
  scene.build();
}

function enterOfferRow(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_or_i = qspUntranslated(s, "ARGS[1]", { location: "clinic_functions" });
  (s as any).temp_or_offset = ((s as any).appointment_offer_day ?? 0)?.[String((s as any).temp_or_i ?? 0)] - ((s as any).daystart ?? 0);
  // TODO-QSP: *p '<tr' + $iif(appointment_selected_index = temp_or_i, ' style="font-weight:bold;"', '') + '><td>' ...
  return;
  scene.build();
}

function enterOfferRowConflicts(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_orc_i = qspUntranslated(s, "ARGS[1]", { location: "clinic_functions" });
  // TODO-QSP: gs 'calendar_query', 'get_events_for_time_range', appointment_offer_day[temp_orc_i], appointment_off...
  // TODO-QSP: copyarr '$temp_orc_events', '$query_events_for_time_range'
  if (Object.keys((s as any).temp_orc_events ?? {}).length > 0) {
    (s as any).temp_orc_k = 0;
    // TODO-QSP: :offer_row_conflicts_loop
    if (((s as any).temp_orc_k ?? 0) < Object.keys((s as any).temp_orc_events ?? {}).length) {
      if (((s as any).temp_orc_k ?? 0) > 0) {
        // TODO-QSP: $result += ', '
      }
      // TODO-QSP: gs 'calendar_query', 'get_event_display_range', $temp_orc_events[temp_orc_k], appointment_offer_day[...
      // TODO-QSP: $result += $event_vars['title'] + ' (' + $func('calendar_query', 'ts_to_str', result_start_ts) + '-'...
      (s as any).temp_orc_k = ((s as any).temp_orc_k ?? 0) + (1);
      // TODO-QSP: jump 'offer_row_conflicts_loop'
    }
  }
  return;
  scene.build();
}

function enterAttendAppointment(s: GameState, scene: SceneBuilder): void {
  (s as any).appt_attend_wait = qspUntranslated(s, "ARGS[2]", { location: "clinic_functions" });
  // TODO-QSP: act "Go to your appointment with <<$appt_attend_desc>>":
  if (((s as any).appt_attend_wait ?? 0) < -4) {
    // TODO-QSP: dynamic text: "You are late!" the nurse says, looking unimpressed. "Let me see if <<$appt_atte...
    scene.text(`"You are late!" the nurse says, looking unimpressed. "Let me see if ${((s as any).appt_attend_desc ?? 0)} can still fit you in."`);
    if (((s as any).appt_attend_outcome ?? 0) === 'missed') {
      scene.text('"I\'m sorry, but your slot has already been given to someone else," the nurse tells you. "You will need to make a new appointment."');
      scene.actions([
        { label: 'Make a new appointment', handler: (st: GameState) => {
    qspCall(st, 'clinic_functions', 'request_appointment', ((st as any).appt_attend_category ?? 0));
  } },
      ]);
    } else {
      scene.text('"You are in luck, they can still see you," the nurse says.');
      qspCall(s, 'clinic_functions', 'wait_for_appointment', ((s as any).appt_attend_category ?? 0), ((s as any).appt_attend_wait ?? 0));
    }
  } else {
    qspCall(s, 'appointments', 'resolve', ((s as any).appt_attend_category ?? 0));
    // TODO-QSP: dynamic text: You approach the receptionist and politely explain that you have an appointment ...
    scene.text(`You approach the receptionist and politely explain that you have an appointment with ${((s as any).appt_attend_desc ?? 0)}.`);
    qspCall(s, 'clinic_functions', 'wait_for_appointment', ((s as any).appt_attend_category ?? 0), ((s as any).appt_attend_wait ?? 0));
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'reception_option_label':
      enterReceptionOptionLabel(s, scene);
      break;
    case 'reception_attend':
      enterReceptionAttend(s, scene);
      break;
    case '_category_name':
      enterCategoryName(s, scene);
      break;
    case '_category_desc':
      enterCategoryDesc(s, scene);
      break;
    case 'request_appointment':
      enterRequestAppointment(s, scene);
      break;
    case 'request_appointment_offer':
      enterRequestAppointmentOffer(s, scene);
      break;
    case '_offer_row':
      enterOfferRow(s, scene);
      break;
    case '_offer_row_conflicts':
      enterOfferRowConflicts(s, scene);
      break;
    case 'attend_appointment':
      enterAttendAppointment(s, scene);
      break;
    default:
      enterReceptionOptionLabel(s, scene);
      break;
  }
}

export const clinic_functions: LocationDef = {
  name: 'clinic_functions',
  title: '<table cellspacing=0 cellpadding=4 border=0><tr><th align=le',
  region: 'other',
  enter: enter,
};
