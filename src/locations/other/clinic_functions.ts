import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterReceptionOptionLabel(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rol_recur = ((Number((s as any).locArgs?.[1] ?? 0) === 'Pavlov'  &&  ((s as any).hypnoSchedule ?? 0) === 1) ? ('therapist_appointment') : (''));
  (s as any).temp_rol_state = qspFunc(s, 'appointments', 'get_state', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_rol_recur ?? 0));
  if (((s as any).temp_rol_state ?? 0) === 'none') {
    (s as any).result = 'Book an appointment with ' + ((s as any).locArgs?.[2] ?? 0);
  } else {
    (s as any).temp_rol_id = ((((s as any).temp_rol_recur ?? 0) !== '') ? (((s as any).temp_rol_recur ?? 0)) : (qspFunc(s, 'appointments', 'get_appointment_id', ((s as any).locArgs?.[1] ?? 0))));
    (s as any).temp_rol_time = qspFunc(s, 'calendar_query', 'ts_to_str', qspFunc(s, 'appointments', 'get_event_display_ts', ((s as any).temp_rol_id ?? 0)));
    if (((s as any).temp_rol_state ?? 0) === 'pending') {
      (s as any).temp_rol_daystart = ((((s as any).temp_rol_recur ?? 0) !== '') ? (((s as any).daystart ?? 0)) : (((s as any).event_daystart ?? 0)?.[String((s as any).temp_rol_id ?? 0)]));
      if (((s as any).temp_rol_daystart ?? 0) === ((s as any).daystart ?? 0)) {
        (s as any).result = 'Check on your appointment with ' + ((s as any).locArgs?.[2] ?? 0) + ' (at ' + ((s as any).temp_rol_time ?? 0) + ')';
      } else {
        (s as any).result = 'Check on your appointment with ' + ((s as any).locArgs?.[2] ?? 0) + ' (' + qspFunc(s, 'calendar_query', 'format_relative_day', ((s as any).temp_rol_daystart ?? 0)) + ')';
      }
    } else {
      (s as any).result = '<b>Go to your appointment with ' + ((s as any).locArgs?.[2] ?? 0) + ' (at ' + ((s as any).temp_rol_time ?? 0) + ')</b>';
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReceptionAttend(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ra_recur = ((Number((s as any).locArgs?.[1] ?? 0) === 'Pavlov'  &&  ((s as any).hypnoSchedule ?? 0) === 1) ? ('therapist_appointment') : (''));
  qspCall(s, 'appointments', 'render_acts', ((s as any).locArgs?.[1] ?? 0), 'clinic_functions', 'request_appointment', 'attend_appointment', ((s as any).temp_ra_recur ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCategoryName(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'Pavlov') {
    (s as any).result = 'Dr. Pavlov';
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'Ninel') {
      (s as any).result = 'Dr. Ninel';
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'Petrovich') {
        (s as any).result = 'Dr. Petrovich';
      } else {
        (s as any).result = '';
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCategoryDesc(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_cd_name = qspFunc(s, 'clinic_functions', '_category_name', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).temp_cd_name ?? 0) !== '') {
    (s as any).result = ((s as any).temp_cd_name ?? 0);
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'Optometrist') {
      (s as any).result = 'an ' + (String(((s as any).locArgs?.[1] ?? 0)).toLowerCase());
    } else {
      (s as any).result = 'a ' + (String(((s as any).locArgs?.[1] ?? 0)).toLowerCase());
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRequestAppointment(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (Number((s as any).locArgs?.[1] ?? 0) === 'Pavlov'  &&  ((s as any).hypnoSchedule ?? 0) === 1) {
    // TODO-QSP: dynamic text: "Dr. Pavlov only sees you on Thursdays, between ' + func('time', 'get_time_strin...
    scene.text('"Dr. Pavlov only sees you on Thursdays, between 18:00 and 19:00," the receptionist tells you. "Come back then."');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
    return;
  }
  (s as any).doctorname = qspFunc(s, 'clinic_functions', '_category_name', ((s as any).locArgs?.[1] ?? 0));
  if (Number((s as any).locArgs?.[1] ?? 0) === 'Pavlov') {
    (s as any).doctortype = 'Therapist';
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'Ninel') {
      (s as any).doctortype = 'General practitioner';
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'Petrovich') {
        (s as any).doctortype = 'Gynecologist';
      } else {
        (s as any).doctortype = ((s as any).locArgs?.[1] ?? 0);
      }
    }
  }
  (s as any).doc_category = ((s as any).locArgs?.[1] ?? 0);
  (s as any).doc_loc = ((((s as any).region ?? 0)[1] !== 'pav') ? ('City Clinic') : ('Pavlovsk Clinic'));
  (s as any).doc_title = ((((s as any).doctorname ?? 0) === '') ? (((s as any).doctortype ?? 0)) : (((s as any).doctorname ?? 0))) + ' Appointment';
  (s as any).tmp_doc_seed = qspFunc(s, 'random', 'string_hash', ((s as any).locArgs?.[1] ?? 0) + '_' + qspUntranslated(s, "region[1]", { location: "clinic_functions" }));
  (s as any).tmp_doc_duration = 4;
  (s as any).tmp_doc_range_min = 27;
  (s as any).appointment_offer_duration = ((s as any).tmp_doc_duration ?? 0);
  (s as any).appointment_offer_buffer = 2;
  (s as any).temp_lucky_end = (((s as any).totminut ?? 0) % 1440) / 15 + (Math.floor(Math.random() * 3) + 1);
  if (((s as any).temp_lucky_end ?? 0) >= ((s as any).tmp_doc_range_min ?? 0)  &&  ((s as any).temp_lucky_end ?? 0) <= 82  &&  qspFunc(s, 'appointments', 'check_conflict', ((s as any).daystart ?? 0), ((s as any).temp_lucky_end ?? 0)) === 0) {
    (s as any).same_day_window_end = ((s as any).temp_lucky_end ?? 0);
    (s as any).same_day_free = (((Math.floor(Math.random() * 100) + 0) < 15) ? (1) : (0));
  } else {
    (s as any).same_day_window_end = (-1);
    (s as any).same_day_free = 0;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRequestAppointmentOffer(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterRequestAppointmentOffer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).appt_ret_loc ?? 0) === '') {
    (s as any).appt_ret_loc = ((s as any).loc ?? 0);
    (s as any).appt_ret_arg = ((s as any).loc_arg ?? 0);
    (s as any).appointment_selected_index = (-1);
  }
  qspCall(s, 'appointments', 'offer_slots', 6, ((s as any).tmp_doc_seed ?? 0), 14, ((s as any).tmp_doc_duration ?? 0), 2, ((s as any).tmp_doc_range_min ?? 0), 82, 1);
  (s as any).same_day_offer_index = (-1);
  if (((s as any).same_day_window_end ?? 0) >= 0) {
    (s as any).same_day_offer_index = ((s as any).appointment_offer_count ?? 0);
    ((s as any).appointment_offer_day = (s as any).appointment_offer_day ?? {})[String((s as any).same_day_offer_index ?? 0)] = ((s as any).daystart ?? 0);
    ((s as any).appointment_offer_window_end = (s as any).appointment_offer_window_end ?? {})[String((s as any).same_day_offer_index ?? 0)] = ((s as any).same_day_window_end ?? 0);
  }
  (s as any).temp_doc_desc = qspFunc(s, 'clinic_functions', '_category_desc', ((s as any).doc_category ?? 0));
  (s as any).temp_rand = (Math.floor(Math.random() * 5) + 0);
  if (((s as any).temp_rand ?? 0) === 1) {
    // TODO-QSP: dynamic text: "For an appointment with <<$temp_doc_desc>>, we have some options:"
    scene.text(`"For an appointment with ${((s as any).temp_doc_desc ?? '')}, we have some options:"`);
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      // TODO-QSP: dynamic text: "We currently have some available slots for an appointment with <<$temp_doc_desc...
      scene.text(`"We currently have some available slots for an appointment with ${((s as any).temp_doc_desc ?? '')}:"`);
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        // TODO-QSP: dynamic text: "For your check-up with <<$temp_doc_desc>>, here are some possible times:"
        scene.text(`"For your check-up with ${((s as any).temp_doc_desc ?? '')}, here are some possible times:"`);
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          // TODO-QSP: dynamic text: The nurse smiles and says, "We have some openings left this week for your appoin...
          scene.text(`The nurse smiles and says, "We have some openings left this week for your appointment with ${((s as any).temp_doc_desc ?? '')}:"`);
        } else {
          // TODO-QSP: dynamic text: "For the appointment with <<$temp_doc_desc>> we have some options available:"
          scene.text(`"For the appointment with ${((s as any).temp_doc_desc ?? '')} we have some options available:"`);
        }
      }
    }
  }
  scene.text('<table cellspacing=0 cellpadding=4 border=0><tr><th align=left>Day</th><th align=left>Time</th><th align=left>Notes</th></tr>');
  (s as any).temp_roff_i = 0;
  // TODO-QSP: :request_offer_loop
  if (((s as any).temp_roff_i ?? 0) < ((s as any).appointment_offer_count ?? 0)) {
    if (((s as any).appointment_offer_day ?? 0)?.[String((s as any).temp_roff_i ?? 0)] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_roff_i ?? 0)]; enterOfferRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    (s as any).temp_roff_i = ((s as any).temp_roff_i ?? 0) + (1);
    // TODO-QSP: jump 'request_offer_loop'
  }
  scene.text('</table>');
  if (((s as any).same_day_offer_index ?? 0) >= 0) {
    if (((s as any).same_day_free ?? 0) === 1) {
      // TODO-QSP: dynamic text: "Actually, it looks like something opened up for later today, too. You''re welco...
      scene.text(`"Actually, it looks like something opened up for later today, too. You're welcome to wait for ${((s as any).temp_doc_desc ?? '')}, free of charge, if you'd rather not book ahead."`);
    } else {
      // TODO-QSP: dynamic text: "If you''d prefer not to wait for one of these, we also offer an expedited appoi...
      scene.text(`"If you'd prefer not to wait for one of these, we also offer an expedited appointment with ${((s as any).temp_doc_desc ?? '')} today, for a fee."`);
    }
  }
  if (((s as any).appointment_selected_index ?? 0) >= 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).temp_appt_dest_loc = ((st as any).appt_ret_loc ?? 0);
    (st as any).temp_appt_dest_arg = ((st as any).appt_ret_arg ?? 0);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ((st as any).appointment_selected_index ?? 0)]; enterBookAppointmentConfirm(s, scene); (st as any).locArgs = __savedLocArgs; }
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
    (st as any).temp_wait_minutes = ((st as any).appointment_offer_window_end ?? 0)?.[String((st as any).same_day_offer_index ?? 0)] * 15 - (((st as any).totminut ?? 0) % 1440);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ((st as any).same_day_offer_index ?? 0)]; enterBookAppointmentConfirm(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'appointments', 'resolve', ((st as any).doc_category ?? 0));
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ((st as any).doc_category ?? 0), ((st as any).temp_wait_minutes ?? 0)]; enterWaitForAppointment(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pay for an expedited appointment', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 1000);
      (st as any).temp_wait_minutes = ((st as any).appointment_offer_window_end ?? 0)?.[String((st as any).same_day_offer_index ?? 0)] * 15 - (((st as any).totminut ?? 0) % 1440);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ((st as any).same_day_offer_index ?? 0)]; enterBookAppointmentConfirm(s, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'appointments', 'resolve', ((st as any).doc_category ?? 0));
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ((st as any).doc_category ?? 0), ((st as any).temp_wait_minutes ?? 0)]; enterWaitForAppointment(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
      ]);
    }
  }
  scene.actions([
{ label: 'Go back', handler: (st: GameState) => {
    (st as any).temp_appt_dest_loc = ((st as any).appt_ret_loc ?? 0);
    (st as any).temp_appt_dest_arg = ((st as any).appt_ret_arg ?? 0);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBookAppointmentCleanup(s, scene); (st as any).locArgs = __savedLocArgs; }
    dynamicGoto(st, 'temp_appt_dest_loc', 'temp_appt_dest_arg');
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferRow(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_or_i = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_or_offset = ((s as any).appointment_offer_day ?? 0)?.[String((s as any).temp_or_i ?? 0)] - ((s as any).daystart ?? 0);
  (s as any).temp_or_rel = (((!((s as any).temp_or_offset ?? 0))) ? ('Today') : (((((s as any).temp_or_offset ?? 0) === 1) ? ('in 1 day') : ('in ' + ((s as any).temp_or_offset ?? 0) + ' days'))));
  (s as any).temp_or_label = ((s as any).weekName ?? 0)[(((s as any).week ?? 0) + ((s as any).temp_or_offset ?? 0) - 1) % 7 + 1] + ' (' + ((s as any).temp_or_rel ?? 0) + ')';
  (s as any).temp_or_time = qspFunc(s, 'calendar_query', 'ts_to_str', ((s as any).appointment_offer_window_end ?? 0)?.[String((s as any).temp_or_i ?? 0)]) + '–' + qspFunc(s, 'calendar_query', 'ts_to_str', ((s as any).appointment_offer_window_end ?? 0)?.[String((s as any).temp_or_i ?? 0)] + ((s as any).appointment_offer_duration ?? 0));
  (s as any).temp_or_note = qspFunc(s, 'clinic_functions', '_offer_row_conflicts', ((s as any).temp_or_i ?? 0));
  (s as any).temp_or_link = '<a href="exec: appointment_selected_index = ' + ((s as any).temp_or_i ?? 0) + ' & gt \'clinic_functions\', \'request_appointment_offer\'" style="text-decoration:none;color:inherit;display:block;">';
  // TODO-QSP: dynamic text: '<tr' + $iif(appointment_selected_index = temp_or_i, ' style="font-weight:bold;"...
  scene.text('\'<tr\' + $iif(appointment_selected_index = temp_or_i, \' style="font-weight:bold;"\', \') + \'><td>\' + $temp_or_link + $temp_or_label + \'</a></td><td>\' + $temp_or_link + $temp_or_time + \'</a></td><td>\' + $temp_or_note + \'</td></tr>\'');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferRowConflicts(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_orc_i = ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: gs 'calendar_query', 'get_events_for_time_range', appointment_offer_day[temp_orc_i], appointment_off...
  // TODO-QSP: copyarr '$temp_orc_events', '$query_events_for_time_range'
  (s as any).result = '';
  if (Object.keys((s as any).temp_orc_events ?? {}).length > 0) {
    (s as any).result = 'Conflict: ';
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
  // TODO-QSP: end
  scene.build();
}

function enterAttendAppointment(s: GameState, scene: SceneBuilder): void {
  (s as any).appt_attend_category = ((s as any).locArgs?.[1] ?? 0);
  (s as any).appt_attend_wait = ((s as any).locArgs?.[2] ?? 0);
  (s as any).appt_attend_recur = ((s as any).locArgs?.[3] ?? 0);
  (s as any).appt_attend_desc = qspFunc(s, 'clinic_functions', '_category_desc', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: act "Go to your appointment with <<$appt_attend_desc>>":
  if (((s as any).appt_attend_wait ?? 0) < -4) {
    // TODO-QSP: dynamic text: "You are late!" the nurse says, looking unimpressed. "Let me see if <<$appt_atte...
    scene.text(`"You are late!" the nurse says, looking unimpressed. "Let me see if ${((s as any).appt_attend_desc ?? '')} can still fit you in."`);
    (s as any).appt_attend_outcome = qspFunc(s, 'appointments', 'check_in', ((s as any).appt_attend_category ?? 0), ((s as any).appt_attend_recur ?? 0));
    if (((s as any).appt_attend_outcome ?? 0) === 'missed') {
      scene.text('"I\'m sorry, but your slot has already been given to someone else," the nurse tells you. "You will need to make a new appointment."');
      scene.actions([
        { label: 'Make a new appointment', handler: (st: GameState) => {
    qspCall(st, 'clinic_functions', 'request_appointment', ((st as any).appt_attend_category ?? 0));
  } },
      ]);
    } else {
      scene.text('"You are in luck, they can still see you," the nurse says.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).appt_attend_category ?? 0), ((s as any).appt_attend_wait ?? 0)]; enterWaitForAppointment(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    qspCall(s, 'appointments', 'resolve', ((s as any).appt_attend_category ?? 0));
    // TODO-QSP: dynamic text: You approach the receptionist and politely explain that you have an appointment ...
    scene.text(`You approach the receptionist and politely explain that you have an appointment with ${((s as any).appt_attend_desc ?? '')}.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).appt_attend_category ?? 0), ((s as any).appt_attend_wait ?? 0)]; enterWaitForAppointment(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWaitingGenericScene(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_wgs_rand = (Math.floor(Math.random() * 9) + 0);
  if ((!((s as any).temp_wgs_rand ?? 0))) {
    scene.text('You are waiting patiently in the waiting area.');
  } else {
    if (((s as any).temp_wgs_rand ?? 0) === 1) {
      scene.text('You flip through a dog-eared magazine without really reading it.');
    } else {
      if (((s as any).temp_wgs_rand ?? 0) === 2) {
        scene.text('Somewhere down the hall, a phone keeps ringing.');
      } else {
        if (((s as any).temp_wgs_rand ?? 0) === 3) {
          scene.text('An old woman across from you keeps glancing at the clock on the wall.');
        } else {
          if (((s as any).temp_wgs_rand ?? 0) === 4) {
            scene.text('A nurse hurries past with a clipboard, not even glancing your way.');
          } else {
            if (((s as any).temp_wgs_rand ?? 0) === 5) {
              scene.text('You check your phone for what feels like the tenth time.');
            } else {
              if (((s as any).temp_wgs_rand ?? 0) === 6) {
                scene.text('The chair beneath you creaks as you shift, trying to get comfortable.');
              } else {
                if (((s as any).temp_wgs_rand ?? 0) === 7) {
                  scene.text('A muffled announcement crackles over the intercom, but you can\'t make out the words.');
                } else {
                  scene.text('Someone coughs a few seats over. You try not to think about it.');
                }
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

function enterWaitForAppointment(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[2] ?? 0) > 0) {
    scene.text('"Please take a seat in the waiting area. We will call you as soon as the Doctor is available." The nurse replies and marks something in her papers.');
    (s as any).tmp_doc = ((s as any).locArgs?.[1] ?? 0);
    (s as any).tmp_remain = ((s as any).locArgs?.[2] ?? 0);
    scene.actions([
      { label: 'Take a seat in the waiting area', handler: (st: GameState) => {
    qspCall(st, 'clinic_functions', 'wait_for_appointment_wait', ((st as any).tmp_doc ?? 0), ((st as any).tmp_remain ?? 0));
  } },
    ]);
  } else {
    scene.text('"Good timing, the Doctor is ready for you." The nurse replies and marks something in her papers.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterWaitForAppointmentEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWaitForAppointmentWait(s: GameState, scene: SceneBuilder): void {
  (s as any).tmp_minut = Math.max(0, Math.min(((s as any).locArgs?.[2] ?? 0), (Math.floor(Math.random() * 30) + 1)));
  (s as any).tmp_remain = ((s as any).locArgs?.[2] ?? 0) - ((s as any).tmp_minut ?? 0);
  (s as any).tmp_doc = ((s as any).locArgs?.[1] ?? 0);
  qspCall(s, 'stat', '');
  if (((s as any).tmp_remain ?? 0) > 0) {
    if (((s as any).global_appointment_custom_wait_call ?? 0) !== '') {
      (s as any).tmp_appointment_wait = '';
      qspCall(s, 'string', 'parse_string', '$tmp_appointment_wait', ((s as any).global_appointment_custom_wait_call ?? 0), ';');
      // TODO-QSP: gs $tmp_appointment_wait[0], $tmp_appointment_wait[1], $tmp_appointment_wait[2], $tmp_appointment_wa...
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWaitingGenericScene(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Wait (' + String(((s as any).tmp_minut ?? '') ?? '') + ')', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (((st as any).tmp_minut ?? 0));
    // TODO-QSP: gt 'clinic_functions' , 'wait_for_appointment_wait', $tmp_do...
  } },
    ]);
  } else {
    scene.text('"The Doctor will see you now." the nurse call out to you');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).tmp_doc ?? 0)]; enterWaitForAppointmentEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWaitForAppointmentEnd(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'General practitioner') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetGeneralAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'City General practitioner') {
      if (((s as any).sick ?? 0) > 0) {
        if ((!((s as any).ninelsex ?? 0))) {
          scene.actions([
            { label: 'Go to the Doctor', goto: ['city_clinic', 'ninel'] },
          ]);
        } else {
          scene.actions([
            { label: 'Go to the Doctor', goto: ['city_clinic', 'ninel2'] },
          ]);
        }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetGeneralAct(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'Petrovich') {
        scene.actions([
          { label: 'Go to the Doctor', goto: ['pav_clinic', 'Petrovich1'] },
        ]);
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'Pavlov') {
          scene.actions([
            { label: 'Go to the Doctor', goto: ['therapist', 'start'] },
          ]);
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 'Therapist') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetPsycologistAct(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 'Dentist'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'City Dentist') {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetDentistAct(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) === 'Optometrist'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'City Optometrist') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetOptometristActs(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) === 'Pediatrician') {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetPediatricianAct(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  scene.actions([
                    { label: 'Go back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBookAppointmentConfirm(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'appointments', 'book', $doc_category, ARGS[1], $doc_title, $doc_loc
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBookAppointmentCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterBookAppointmentCleanup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterSetAbortionAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).preg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) < 1863  &&  ((s as any).knowpreg ?? 0) === 1) {
    scene.actions([
      { label: 'Get an abortion', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 15000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'clinic_functions', 'get_abortion');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetAbortion(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 15000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (((s as any).region ?? 0) === 'city') {
    scene.img('images/locations/city/residential/clinic/abort.jpg');
  }
  scene.text('You spread out on a gynecological chair at an angle where you can\'t see what\'s going on. You feel nauseous and violated as a nurse hands you a single aspirin and a glass of muddy-looking water to down it with.');
  qspCall(s, 'medical_din', 'abortion');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSetGeneralAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the Doctor (1:00)', handler: (st: GameState) => {
    scene.img(`images/locations/city/residential/clinic/experiments/doc${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    if ((((st as any).pcs_health ?? 0) < ((st as any).healthmax ?? 0) / 2  ||  ((st as any).pain ?? 0)?.['total'] >= 70)  &&  ((st as any).clinic ?? 0)?.['docheal'] !== ((st as any).daystart ?? 0)) {
      (st as any).minut = ((st as any).minut ?? 0) + 60;
      ((st as any).clinic = (st as any).clinic ?? {})['docheal'] = ((st as any).daystart ?? 0);
      qspCall(st, 'medical_din', 'healthTreatment');
      qspCall(st, 'stat', '');
      scene.text('After a quick discussion about your health, the doctor gives you an injection of a combined painkiller, steroid and vitamin shot which not only helps the pain, but speeds your recovery too, reducing your current pain and increasing your health. You immediately feel much better, and should recover health faster over the coming days.');
      (st as any).general_treated = 1;
    }
    if (((st as any).sick ?? 0) >= 1) {
      (st as any).minut = ((st as any).minut ?? 0) + 15;
      (st as any).sick = 0;
      qspCall(st, 'stat', '');
      scene.text('The doctor quickly examines you, and establishes that you\'ve caught a cold. He prescribes you some pills and suggests you dress warmer when going outdoors so it doesn\'t come back.');
      (st as any).general_treated = 1;
    }
    if ((!((st as any).general_treated ?? 0))) {
      (st as any).minut = ((st as any).minut ?? 0) + 15;
      qspCall(st, 'stat', '');
      scene.text('The doctor gives you a quick check-up and finds nothing wrong with you. He advises you to keep taking care of yourself and to come back if anything changes.');
    }
    scene.actions([
      { label: 'Return to the entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetGynocolonistAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the Doctor (1:00)', handler: (st: GameState) => {
    if (((st as any).region ?? 0)[1] === 'pav') {
      qspGoto(st, 'pav_clinic', 'Petrovich1');
    } else {
      scene.text('<br><b><font color="red">DEVELOPER WARNING: "clinic_functions","set_gynocolonist_act" for regions other than pavlovsk not Implemented.</font></b>');
    }
    scene.actions([
      { label: 'Return to the entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetPsycologistAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the therapist (1:00)', handler: (st: GameState) => {
    if (((st as any).region ?? 0)[1] === 'pav') {
      if (((st as any).therapistQW ?? 0)?.['met'] === 0) {
        qspGoto(st, 'therapist', 'intro');
      } else {
        qspGoto(st, 'therapist', 'start');
      }
    } else {
      scene.text('<br><b><font color="red">DEVELOPER WARNING: "clinic_functions","set_psycologist_act" for regions other than pavlovsk not Implemented.</font></b>');
    }
    scene.actions([
      { label: 'Return to the entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetPediatricianAct(s: GameState, scene: SceneBuilder): void {
  scene.text('<br><b><font color="red">DEVELOPER WARNING: "clinic_functions","set_pediatrician_act" called but not implemented.</font></b>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSetDentistAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the dentist', handler: (st: GameState) => {
    qspCall(st, 'clinic_functions', 'dentist_inspection');
  } },
  ]);
  scene.build();
}

function enterDentistInspection(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/clinic/dentist.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).pcs_missing_teeth ?? 0) > 0) {
    (s as any).zubpay = qspFunc(s, 'clinic_functions', 'get_fix_teeth_price_missing_teeth');
    (s as any).tmp_brace_txt = '';
    if (((s as any).pcs_brace ?? 0) === 1) {
      (s as any).tmp_brace_txt = ' and fix your braces';
    }
    if (((s as any).pcs_missing_teeth ?? 0) === 1) {
      // TODO-QSP: dynamic text: The dentist examines you and says it will cost ' + $func('money', 'string_price'...
      scene.text(`The dentist examines you and says it will cost ' + $func('money', 'string_price', zubpay) + ' to replace your tooth${((s as any).tmp_brace_txt ?? '')}.`);
    } else {
      // TODO-QSP: dynamic text: The dentist examines you and says it will cost ' + $func('money', 'string_price'...
      scene.text(`The dentist examines you and says it will cost ' + $func('money', 'string_price', zubpay) + ' to fill the gaps${((s as any).tmp_brace_txt ?? '')}.`);
    }
    scene.actions([
      { label: 'Sort out your missing teeth', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).zubpay ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', ((st as any).zubpay ?? 0));
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFixMissingTeeth(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  if ((((s as any).pcs_teeth ?? 0) >= 0  &&  (((s as any).daystart ?? 0) > ((s as any).dentistday ?? 0)  ||  ((s as any).dentistday ?? 0) === 0))) {
    if (((s as any).zubpay ?? 0) > 0) {
      scene.text('Afterwards he goes over the rest of your denture.');
    }
    if (((s as any).pcs_brace ?? 0) === 1) {
      (s as any).pcs_brace = 0;
      (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) - (1);
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      // TODO-QSP: 'The dentist spends 15 minutes taking off your brace and cleaning up. You look in the mirror afterwa...
      qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
      qspCall(s, 'stat', '');
    } else {
      (s as any).zubpay = qspFunc(s, 'clinic_functions', 'get_fix_teeth_price');
      if (((s as any).pcs_teeth ?? 0) > 0) {
        // TODO-QSP: dynamic text: The dentist examines you and says it will cost ' + $func('money', 'string_price'...
        scene.text('The dentist examines you and says it will cost \' + $func(\'money\', \'string_price\', zubpay) + \' to straighten your teeth and that you\'ll have to wear a brace for six months. However, he states that he can\'t promise they will be completely straight after one treatment.');
      } else {
        if ((!((s as any).pcs_teeth ?? 0))) {
          // TODO-QSP: dynamic text: The dentist examines you and says, it will cost ' + $func('money', 'string_price...
          scene.text('The dentist examines you and says, it will cost \' + $func(\'money\', \'string_price\', zubpay) + \' to brighten and polish your teeth.');
        }
      }
      scene.actions([
        { label: 'Sort out your croocked teeth', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).zubpay ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', ((st as any).zubpay ?? 0));
      qspGoto(st, 'clinic_functions', 'fix_teeth');
    }
  } },
      ]);
    }
  }
  if ((!((s as any).zubpay ?? 0))) {
    scene.text('The Dentist examines your teeth and finds nothing wrong with them.');
  }
  if (((s as any).pcs_brace ?? 0) === 1  &&  ((s as any).dentistday ?? 0) > 0  &&  ((s as any).daystart ?? 0) < ((s as any).dentistday ?? 0)) {
    (s as any).tmp_brace_days = (((s as any).dentistday ?? 0) - ((s as any).daystart ?? 0));
    if (((s as any).tmp_brace_days ?? 0) > 30) {
      (s as any).tmp_brace_txt = 'another month';
      if (((s as any).tmp_brace_days ?? 0) > 60) {
        (s as any).tmp_brace_txt = 'another ' + qspFunc(s, 'string', 'parse_number', ((s as any).tmp_brace_days ?? 0)/30) + ' months';
      }
    } else {
      if (((s as any).tmp_brace_days ?? 0) > 21) {
        (s as any).tmp_brace_txt = 'three weeks';
      } else {
        if (((s as any).tmp_brace_days ?? 0) > 14) {
          (s as any).tmp_brace_txt = 'two weeks';
        } else {
          (s as any).tmp_brace_txt = '' + ((s as any).tmp_brace_days ?? 0) + ' days';
        }
      }
    }
    // TODO-QSP: dynamic text: "Unfortunately your braces will have to stay on for approximately <<$tmp_brace_t...
    scene.text(`"Unfortunately your braces will have to stay on for approximately ${((s as any).tmp_brace_txt ?? '')}." the dentist says.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the entrance', handler: (st: GameState) => {
    // TODO-QSP: killvar 'zubpay'
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterFixTeeth(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 50;
  if (((s as any).pcs_teeth ?? 0) > 0) {
    (s as any).dentistday = ((s as any).daystart ?? 0) + 180;
    (s as any).pcs_brace = 1;
    scene.text('You pay the dentist to straighten your teeth. After an hour of work, he has attached a brace to your teeth and tells you to come back in six months to have it taken off.');
  } else {
    (s as any).dentistday = ((s as any).daystart ?? 0) + 90;
    (s as any).pcs_teeth = (-1);
    scene.text('You pay the dentist to brighten and polish your teeth and an hour later, your smile is much brighter and more attractive.');
  }
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_missing_teeth ?? 0) > 0) {
    scene.actions([
      { label: 'Get the rest of your denture fixed', handler: (st: GameState) => {
    qspCall(st, 'clinic_functions', 'dentist_inspection');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the entrance', handler: (st: GameState) => {
    // TODO-QSP: killvar 'zubpay'
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterFixMissingTeeth(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 50;
  if (((s as any).pcs_missing_teeth ?? 0) > 0) {
    (s as any).pcs_missing_teeth = 0;
    scene.text('You pay the dentist to fix your teeth and he has restored your winning smile within an hour.');
  }
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_teeth ?? 0) > 0  &&  ((s as any).pcs_brace ?? 0) === 1) {
    scene.actions([
      { label: 'Get the rest of your denture fixed', handler: (st: GameState) => {
    qspCall(st, 'clinic_functions', 'dentist_inspection');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the entrance', handler: (st: GameState) => {
    // TODO-QSP: killvar 'zubpay'
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterGetFixTeethPriceMissingTeeth(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).pcs_missing_teeth ?? 0) * 30000;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetFixTeethPrice(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).pcs_teeth ?? 0) > 0) {
    (s as any).result = 4500;
  } else {
    if ((!((s as any).pcs_teeth ?? 0))) {
      (s as any).result = 3000;
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetOptometristActs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Visit the optometrist (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/optometrist.jpg');
    scene.text('The optometrist takes you through a series of tests to measure the condition of your eyes.');
    if (((st as any).glassqw ?? 0) === 1  ||  ((st as any).glass ?? 0) > 0) {
      scene.text('He looks at you as if he has bad news for you. "Well, you probably already expected this, but your vision has deteriorated significantly. You\'re going to need glasses to be able to read. The prescription I\'m writing for you is for a simple set of rimmed glasses which you can pick up at the front desk before you leave."');
      scene.text('He hands you a piece of paper. "Of course you can get a different pair elsewhere if you want better looking ones, the details for which ones you need are on your prescription. You can also get laser vision correction if you really don\'t want to use glasses, but I\'m going to be honest with you: that\'s a very expensive procedure."');
      ((st as any).trait_vars = (st as any).trait_vars ?? {})['bookworm_exp'] = ((st as any).trait_vars['bookworm_exp'] ?? 0) + (1);
      (st as any).glassqw = 2;
      (st as any).glass = 1;
      (st as any).blizoruk = ((st as any).blizoruk ?? 0) + (1);
    } else {
      scene.text('He looks at you. "Well, your vision has not deteriorated."');
    }
    if (((st as any).glass ?? 0) > 0) {
      qspCall(st, 'stat', '');
      scene.img('images/locations/pavlovsk/clinic/optometrist.jpg');
      // TODO-QSP: dynamic text: The optometrist examines your eyes and says that he can perform laser eye surger...
      scene.text('The optometrist examines your eyes and says that he can perform laser eye surgery for 75000₽. Of course, reading books can cause your eyesight to deteriorate again.');
      if (((st as any).glass ?? 0) === 1) {
        // TODO-QSP: dynamic text: The optometrist also tells you about the option to buy glasses for ' + $func('mo...
        scene.text('The optometrist also tells you about the option to buy glasses for 4500₽.');
      }
      if (((st as any).glass ?? 0) === 1) {
        scene.actions([
          { label: 'Buy glasses', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 4500) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'clinic_functions', 'buy_stylish_glasses');
    }
  } },
        ]);
      }
      if (((st as any).glass ?? 0) !== 0) {
        scene.actions([
          { label: 'Pay for laser correction', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 75000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'clinic_functions', 'buy_laser_correction');
    }
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Return to the entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBuyStylishGlasses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 4500);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).glass = 2;
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  qspCall(s, 'stat', '');
  scene.text('You buy a new, more stylish pair of glasses.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterBuyLaserCorrection(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 75000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).blizoruk = 0;
  (s as any).glass = 0;
  qspCall(s, 'body_desc', '');
  qspCall(s, 'stat', '');
  scene.text('You undergo laser eye surgery. Your eyesight is much better now.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSetStdHerpesShotAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).GerpesNapr ?? 0) > 0  &&  ((s as any).GerpesUkolDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Get herpes shot', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 450) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'clinic_functions', 'herpes_shot');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetStdGonorrheaShotAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).TriperNapr ?? 0) > 0  &&  ((s as any).TriperUkolDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Get gonorrhea shot', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 750) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'clinic_functions', 'gonorrhea_shot');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetStdSyphilisShotAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SifNapr ?? 0) === 1) {
    scene.actions([
      { label: 'Get syphilis shot', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'clinic_functions', 'syphilis_shot');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetStdHerpesCureAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).GerpesOnce ?? 0) === 1  &&  ((s as any).week ?? 0) === 1  &&  ((s as any).day ?? 0) <= 10) {
    scene.actions([
      { label: 'Go to private clinic and completely cure your herpes', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 45000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'clinic_functions', 'herpes_cure');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetStdYeastCureAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KandidozOnce ?? 0) === 1) {
    scene.actions([
      { label: 'Go to private clinic and completely cure your yeast infection.', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 15000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'clinic_functions', 'yeast_cure');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHerpesShot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 450);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).GerpesUkolDay = ((s as any).daystart ?? 0);
  (s as any).GerpesNapr = ((s as any).GerpesNapr ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('You see the nurse and she gives you a painful injection in your ass.');
  if ((!((s as any).GerpesNapr ?? 0))) {
    (s as any).Gerpes = (-10);
    scene.text('You have completed the treatment.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterGonorrheaShot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 750);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).TriperUkolDay = ((s as any).daystart ?? 0);
  (s as any).TriperNapr = ((s as any).TriperNapr ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('You see the nurse and she gives you a painful injection in your ass.');
  if ((!((s as any).TriperNapr ?? 0))) {
    (s as any).TriperOral = 0;
    (s as any).TriperOralSigns = 0;
    (s as any).Triper = 0;
    (s as any).Venera = ((s as any).Venera ?? 0) - (1);
    (s as any).TriperOnce = 0;
    scene.text('You have completed the treatment.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSyphilisShot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 1000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).SifNapr = 0;
  (s as any).SifacOnce = 0;
  (s as any).Sifilis = 0;
  (s as any).Venera = ((s as any).Venera ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('You see the nurse and she gives you a painful injection in your ass.');
  scene.text('"That\'s it. You might still feel a little off, but the infection is now cured."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterYeastCure(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 15000);
  (s as any).day = ((s as any).day ?? 0) + (3);
  (s as any).week = ((s as any).week ?? 0) + (3);
  (s as any).KandidozOnce = 0;
  (s as any).Kandidoz = 0;
  qspCall(s, 'stat', '');
  scene.text('There\'s an ambulance waiting outside. It drives you to a cutting edge medical facility, where you spend 3 days being treated and pampered.');
  scene.text('After a long recovery, you have been completely cured of your yeast infection.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterHerpesCure(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 45000);
  (s as any).day = ((s as any).day ?? 0) + (3);
  (s as any).week = ((s as any).week ?? 0) + (3);
  (s as any).GerpesOnce = 0;
  (s as any).Gerpes = 0;
  (s as any).OrHerpes = 0;
  (s as any).GenHerpes = 0;
  (s as any).Venera = ((s as any).Venera ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('There\'s an ambulance waiting outside. It drives you to a cutting edge medical facility, where you spend 3 days being treated and pampered.');
  scene.text('After a long recovery, you have been completely cured of your herpes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSetElectrolysisAct(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).lashair ?? 0))) {
    if (qspFunc(s, 'money', 'can_afford', 80000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''electrolysis''">Electrolysis</a> laser hair removal of le...
    } else {
      // TODO-QSP: 'Electrolysis - laser hair removal of legs and pubic area - ' + $func('money', 'string_price', 80000...
    }
  } else {
    // TODO-QSP: dynamic text: Electrolysis - laser hair removal of legs and pubic area - ' + $func('money', 's...
    scene.text('Electrolysis - laser hair removal of legs and pubic area - 80000₽ - You have no hair to remove.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetLipEnlargementAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lip ?? 0) < 4) {
    if (qspFunc(s, 'money', 'can_afford', 25000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''lipPlus''">Lip enlargement surgery</a> - ' + $func('money...
    } else {
      // TODO-QSP: 'Lip enlargement surgery - ' + $func('money', 'string_price', 25000)
    }
  } else {
    // TODO-QSP: dynamic text: Lip enlargement surgery - ' + $func('money', 'string_price', 25000) + ' - Your l...
    scene.text('Lip enlargement surgery - 25000₽ - Your lips are already big.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetLipReductionAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lip ?? 0) > 0) {
    if (qspFunc(s, 'money', 'can_afford', 30000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''lipMin''">Lip reduction surgery</a> - ' + $func('money', ...
    } else {
      // TODO-QSP: 'Lip reduction surgery - ' + $func('money', 'string_price', 30000)
    }
  } else {
    // TODO-QSP: dynamic text: Lip reduction surgery - ' + $func('money', 'string_price', 30000) + ' - Your lip...
    scene.text('Lip reduction surgery - 30000₽ - Your lips are already thin');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetEyeEnlargementAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_eyesize ?? 0) < 3) {
    if (qspFunc(s, 'money', 'can_afford', 90000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''eyePlus''">Eye enlargement surgery</a> - ' + $func('money...
    } else {
      // TODO-QSP: 'Eye enlargement surgery - ' + $func('money', 'string_price', 90000)
    }
  } else {
    // TODO-QSP: dynamic text: Eye enlargement surgery - ' + $func('money', 'string_price', 90000) + ' - Your e...
    scene.text('Eye enlargement surgery - 90000₽ - Your eyes are already big.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetEyeReductionAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_eyesize ?? 0) > 0) {
    if (qspFunc(s, 'money', 'can_afford', 90000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''eyeMin''">Eye reduction surgery</a> - ' + $func('money', ...
    } else {
      // TODO-QSP: 'Eye reduction surgery - ' + $func('money', 'string_price', 90000)
    }
  } else {
    // TODO-QSP: dynamic text: Eye reduction surgery - ' + $func('money', 'string_price', 90000) + ' - Your eye...
    scene.text('Eye reduction surgery - 90000₽ - Your eyes are already small.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetLiposuctionAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_mass ?? 0)?.['body'] > 40) {
    if (qspFunc(s, 'money', 'can_afford', 75000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''lyposuction''">Liposuction</a> - ' + $func('money', 'stri...
    } else {
      // TODO-QSP: 'Liposuction - ' + $func('money', 'string_price', 75000)
    }
  } else {
    // TODO-QSP: dynamic text: Liposuction - ' + $func('money', 'string_price', 75000) + ' - You''re already th...
    scene.text('Liposuction - 75000₽ - You\'re already thin.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetRemoveBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] !== 0) {
    if (qspFunc(s, 'money', 'can_afford', 90000)) {
      // TODO-QSP: '<a href="exec: stringimplant = 0 & fillimplant = 0 & gt ''clinic_functions'', ''bImplantA'', 0">Rem...
    } else {
      // TODO-QSP: 'Remove breast implants - ' + $func('money', 'string_price', 90000)
    }
  } else {
    // TODO-QSP: dynamic text: Remove breast implants - ' + $func('money', 'string_price', 90000) + ' - You hav...
    scene.text('Remove breast implants - 90000₽ - You have no breast implants.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetGetSmallBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get small breast implants - ' + $func('money', 'string_price', 170000) + ' - You...
    scene.text('Get small breast implants - 170000₽ - You already have ' + ((((s as any).fillimplant ?? 0) === 1) ? ('fillable') : ('string')) + ' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 170000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''small''">Get small breast implants</a> - '...
  } else {
    // TODO-QSP: 'Get small breast implants - ' + $func('money', 'string_price', 170000)
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetGetMediumBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get medium breast implants - ' + $func('money', 'string_price', 180000) + ' - Yo...
    scene.text('Get medium breast implants - 180000₽ - You already have ' + ((((s as any).fillimplant ?? 0) === 1) ? ('fillable') : ('string')) + ' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 180000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''medium''">Get medium breast implants</a> -...
  } else {
    // TODO-QSP: 'Get medium breast implants - ' + $func('money', 'string_price', 180000)
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetGetLargeBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get large breast implants - ' + $func('money', 'string_price', 190000) + ' - You...
    scene.text('Get large breast implants - 190000₽ - You already have ' + ((((s as any).fillimplant ?? 0) === 1) ? ('fillable') : ('string')) + ' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 190000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''large''">Get large breast implants</a> - '...
  } else {
    // TODO-QSP: 'Get large breast implants - ' + $func('money', 'string_price', 190000)
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetGet_XXLBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get XXL breast implants - ' + $func('money', 'string_price', 200000) + ' - You a...
    scene.text('Get XXL breast implants - 200000₽ - You already have ' + ((((s as any).fillimplant ?? 0) === 1) ? ('fillable') : ('string')) + ' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 200000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''XXL''">Get XXL breast implants</a> - ' + $...
  } else {
    // TODO-QSP: 'Get XXL breast implants - ' + $func('money', 'string_price', 200000)
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetGetFillableBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get fillable implants - ' + $func('money', 'string_price', 200000) + ' - You alr...
    scene.text('Get fillable implants - 200000₽ - You already have ' + ((((s as any).fillimplant ?? 0) === 1) ? ('fillable') : ('string')) + ' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 200000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''fillable''">Get fillable implants</a> - ' ...
  } else {
    // TODO-QSP: 'Get fillable implants - ' + $func('money', 'string_price', 200000)
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetGetStringBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get string implants - ' + $func('money', 'string_price', 250000) + ' - You alrea...
    scene.text('Get string implants - 250000₽ - You already have ' + ((((s as any).fillimplant ?? 0) === 1) ? ('fillable') : ('string')) + ' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 250000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''string''">Get string implants</a> - ' + $f...
  } else {
    // TODO-QSP: 'Get string implants - ' + $func('money', 'string_price', 250000)
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetDrainStringBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).stringimplant ?? 0))) {
    // TODO-QSP: dynamic text: Drain string implant - ' + $func('money', 'string_price', 2000) + ' - You don''t...
    scene.text('Drain string implant - 2000₽ - You don\'t have string implants.');
    return;
  }
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] < 30) {
    // TODO-QSP: dynamic text: Drain string implant - ' + $func('money', 'string_price', 2000) + ' - Your strin...
    scene.text('Drain string implant - 2000₽ - Your string implant is too small to drain.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 2000)) {
    // TODO-QSP: '<a href="exec: xgt ''clinic_functions'', ''bImplantB'', ''drain''">Drain string implant</a> - ' + $...
  } else {
    // TODO-QSP: 'Drain string implant - ' + $func('money', 'string_price', 2000)
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetBuySiliconeBagAct(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).fillimplant ?? 0))) {
    // TODO-QSP: dynamic text: Buy silicone bag - ' + $func('money', 'string_price', 500) + ' - You don''t have...
    scene.text('Buy silicone bag - 500₽ - You don\'t have fillable implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 500)) {
    // TODO-QSP: '<a href="exec: xgt ''clinic_functions'', ''bImplantB'', ''bag''">Buy silicone bag</a> - ' + $func('...
  } else {
    // TODO-QSP: 'Buy silicone bag - ' + $func('money', 'string_price', 500)
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterElectrolysis(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 80000);
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).pcs_leghair = 0;
  (s as any).pcs_pubes = 0;
  (s as any).lashair = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/electrolysis.jpg');
  scene.text('The surgeon has you strip completely and lie down on the table. Over the next few hours, you\'re treated by a laser over and over again. When the treatment is finished and you get up from the table, your skin feels silky smooth.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterLipPlus(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 25000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply. We\'ll be done before you know it."');
  scene.text('When you wake up, the procedure is complete and your lips are fuller.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterLipMin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 30000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply. We\'ll be done before you know it."');
  scene.text('When you wake up, the procedure is complete and your lips are thinner.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterEyePlus(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 90000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply. We\'ll be done before you know it."');
  scene.text('When you wake up again, the procedure is complete and your eyes are larger.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterEyeMin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 90000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply. We\'ll be done before you know it."');
  scene.text('When you wake up, the procedure is complete and your eyes are smaller.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterLyposuction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 75000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) - (40);
  if (((s as any).pcs_mass ?? 0)?.['body'] < 11) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 11;
  }
  qspCall(s, 'body', 'softreset');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply. We\'ll be done before you know it."');
  scene.text('When you wake up, the procedure is complete and you\'re looking thinner.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterBImplantA(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (Number((s as any).locArgs?.[1] ?? 0) === 'small') {
    (s as any).temp_pay_amount = 170000;
    (s as any).temp_bust_size = 10;
    (s as any).fillimplant = 0;
    (s as any).stringimplant = 0;
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'medium') {
      (s as any).temp_pay_amount = 180000;
      (s as any).temp_bust_size = 20;
      (s as any).fillimplant = 0;
      (s as any).stringimplant = 0;
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'large') {
        (s as any).temp_pay_amount = 190000;
        (s as any).temp_bust_size = 30;
        (s as any).fillimplant = 0;
        (s as any).stringimplant = 0;
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'XXL') {
          (s as any).temp_pay_amount = 200000;
          (s as any).temp_bust_size = 40;
          (s as any).fillimplant = 0;
          (s as any).stringimplant = 0;
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 'fillable') {
            (s as any).temp_pay_amount = 200000;
            (s as any).temp_bust_size = 20;
            (s as any).fillimplant = 1;
            (s as any).stringimplant = 0;
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 'string') {
              (s as any).temp_pay_amount = 250000;
              (s as any).temp_bust_size = 20;
              (s as any).fillimplant = 0;
              (s as any).stringimplant = 1;
            }
          }
        }
      }
    }
  }
  qspCall(s, 'money', 'pay', ((s as any).temp_pay_amount ?? 0));
  ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_silicone'] = ((s as any).temp_bust_size ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply… we\'ll be done before you know it."');
  scene.text('When you wake up again, the procedure is complete and you look down at your new breasts.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterBImplantB(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'drain') {
    qspCall(s, 'money', 'pay', 2000);
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_silicone'] = ((s as any).bodyVars['bust_silicone'] ?? 0) - (10);
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'bag') {
      qspCall(s, 'money', 'pay', 500);
      (s as any).siliconeBag = ((s as any).siliconeBag ?? 0) + (1);
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
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
    case 'waiting_generic_scene':
      enterWaitingGenericScene(s, scene);
      break;
    case 'wait_for_appointment':
      enterWaitForAppointment(s, scene);
      break;
    case 'wait_for_appointment_wait':
      enterWaitForAppointmentWait(s, scene);
      break;
    case 'wait_for_appointment_end':
      enterWaitForAppointmentEnd(s, scene);
      break;
    case 'book_appointment_confirm':
      enterBookAppointmentConfirm(s, scene);
      break;
    case 'book_appointment_cleanup':
      enterBookAppointmentCleanup(s, scene);
      break;
    case 'set_abortion_act':
      enterSetAbortionAct(s, scene);
      break;
    case 'get_abortion':
      enterGetAbortion(s, scene);
      break;
    case 'set_general_act':
      enterSetGeneralAct(s, scene);
      break;
    case 'set_gynocolonist_act':
      enterSetGynocolonistAct(s, scene);
      break;
    case 'set_psycologist_act':
      enterSetPsycologistAct(s, scene);
      break;
    case 'set_pediatrician_act':
      enterSetPediatricianAct(s, scene);
      break;
    case 'set_dentist_act':
      enterSetDentistAct(s, scene);
      break;
    case 'dentist_inspection':
      enterDentistInspection(s, scene);
      break;
    case 'fix_teeth':
      enterFixTeeth(s, scene);
      break;
    case 'fix_missing_teeth':
      enterFixMissingTeeth(s, scene);
      break;
    case 'get_fix_teeth_price_missing_teeth':
      enterGetFixTeethPriceMissingTeeth(s, scene);
      break;
    case 'get_fix_teeth_price':
      enterGetFixTeethPrice(s, scene);
      break;
    case 'set_optometrist_acts':
      enterSetOptometristActs(s, scene);
      break;
    case 'buy_stylish_glasses':
      enterBuyStylishGlasses(s, scene);
      break;
    case 'buy_laser_correction':
      enterBuyLaserCorrection(s, scene);
      break;
    case 'set_std_herpes_shot_act':
      enterSetStdHerpesShotAct(s, scene);
      break;
    case 'set_std_gonorrhea_shot_act':
      enterSetStdGonorrheaShotAct(s, scene);
      break;
    case 'set_std_syphilis_shot_act':
      enterSetStdSyphilisShotAct(s, scene);
      break;
    case 'set_std_herpes_cure_act':
      enterSetStdHerpesCureAct(s, scene);
      break;
    case 'set_std_yeast_cure_act':
      enterSetStdYeastCureAct(s, scene);
      break;
    case 'herpes_shot':
      enterHerpesShot(s, scene);
      break;
    case 'gonorrhea_shot':
      enterGonorrheaShot(s, scene);
      break;
    case 'syphilis_shot':
      enterSyphilisShot(s, scene);
      break;
    case 'yeast_cure':
      enterYeastCure(s, scene);
      break;
    case 'herpes_cure':
      enterHerpesCure(s, scene);
      break;
    case 'set_electrolysis_act':
      enterSetElectrolysisAct(s, scene);
      break;
    case 'set_lip_enlargement_act':
      enterSetLipEnlargementAct(s, scene);
      break;
    case 'set_lip_reduction_act':
      enterSetLipReductionAct(s, scene);
      break;
    case 'set_eye_enlargement_act':
      enterSetEyeEnlargementAct(s, scene);
      break;
    case 'set_eye_reduction_act':
      enterSetEyeReductionAct(s, scene);
      break;
    case 'set_liposuction_act':
      enterSetLiposuctionAct(s, scene);
      break;
    case 'set_remove_breast_implant_act':
      enterSetRemoveBreastImplantAct(s, scene);
      break;
    case 'set_get_small_breast_implant_act':
      enterSetGetSmallBreastImplantAct(s, scene);
      break;
    case 'set_get_medium_breast_implant_act':
      enterSetGetMediumBreastImplantAct(s, scene);
      break;
    case 'set_get_large_breast_implant_act':
      enterSetGetLargeBreastImplantAct(s, scene);
      break;
    case 'set_get_XXL_breast_implant_act':
      enterSetGet_XXLBreastImplantAct(s, scene);
      break;
    case 'set_get_fillable_breast_implant_act':
      enterSetGetFillableBreastImplantAct(s, scene);
      break;
    case 'set_get_string_breast_implant_act':
      enterSetGetStringBreastImplantAct(s, scene);
      break;
    case 'set_drain_string_breast_implant_act':
      enterSetDrainStringBreastImplantAct(s, scene);
      break;
    case 'set_buy_silicone_bag_act':
      enterSetBuySiliconeBagAct(s, scene);
      break;
    case 'electrolysis':
      enterElectrolysis(s, scene);
      break;
    case 'lipPlus':
      enterLipPlus(s, scene);
      break;
    case 'lipMin':
      enterLipMin(s, scene);
      break;
    case 'eyePlus':
      enterEyePlus(s, scene);
      break;
    case 'eyeMin':
      enterEyeMin(s, scene);
      break;
    case 'lyposuction':
      enterLyposuction(s, scene);
      break;
    case 'bImplantA':
      enterBImplantA(s, scene);
      break;
    case 'bImplantB':
      enterBImplantB(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const clinic_functions: LocationDef = {
  name: 'clinic_functions',
  title: '<table cellspacing=0 cellpadding=4 border=0><tr><th align=le',
  region: 'other',
  enter: enter,
};
