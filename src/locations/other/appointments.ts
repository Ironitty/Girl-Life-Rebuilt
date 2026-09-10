import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHasAppointment(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((((s as any).appointment_active ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') ? (1) : (0));
  return;
  scene.build();
}

function enterGetAppointmentId(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetEventDisplayTs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = ((((s as any).event_vars ?? 0)?.['flex_type'] === 1) ? (((s as any).event_vars ?? 0)?.['window_end_ts']) : (((s as any).event_vars ?? 0)?.['start_ts']));
  return;
  scene.build();
}

function enterGetState(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'appointments', '_resolve_state', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterGetWaitMinutes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'appointments', '_resolve_state', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  (s as any).result = ((s as any).appointment_state_wait ?? 0);
  return;
  scene.build();
}

function enterResolveState(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['appointments'] === 1) {
    (s as any).appointment_state_wait = 0;
    return;
  }
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
    if (qspFunc(s, 'calendar_events', 'event_occurs_in_day', ((s as any).locArgs?.[2] ?? 0), ((s as any).daystart ?? 0)) === 0) {
      (s as any).appointment_state_wait = 0;
      return;
    }
    qspCall(s, 'appointments', '_state_from_event', ((s as any).locArgs?.[2] ?? 0), ((s as any).daystart ?? 0));
    return;
  }
  if (((s as any).appointment_active ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
    (s as any).appointment_state_wait = 0;
    return;
  }
  // TODO-QSP: gs 'calendar_events', 'get_event', $appointment_active[$ARGS[1]]
  if (((s as any).event_vars ?? 0)?.['daystart'] < ((s as any).daystart ?? 0)) {
    qspCall(s, 'appointments', 'resolve', ((s as any).locArgs?.[1] ?? 0));
    (s as any).appointment_state_wait = 0;
    return;
  }
  // TODO-QSP: gs 'appointments', '_state_from_event', $appointment_active[$ARGS[1]], event_vars['daystart']
  return;
  scene.build();
}

function enterStateFromEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_apptState['ts'] = qspFunc(s, 'appointments', 'get_event_display_ts', ((s as any).locArgs?.[1] ?? 0));
  (s as any).appointment_state_wait = (((s as any).temp_apptState ?? 0)?.['ts'] * 15 + ((s as any).ARGS ?? 0)[2] * 1440) - ((s as any).totminut ?? 0);
  if (((s as any).appointment_state_wait ?? 0) > 65) {
  }
  return;
  scene.build();
}

function enterOfferSlots(s: GameState, scene: SceneBuilder): void {
  (s as any).appointment_offer_count = qspUntranslated(s, "ARGS[1]", { location: "appointments" });
  (s as any).appointment_offer_duration = qspUntranslated(s, "ARGS[4]", { location: "appointments" });
  (s as any).appointment_offer_buffer = qspUntranslated(s, "ARGS[5]", { location: "appointments" });
  (s as any).appointment_offer_late_limit = 90;
  (s as any).temp_apptOffer['found'] = 0;
  (s as any).temp_apptOffer['day'] = 1;
  // TODO-QSP: :offer_sweep
  if (((s as any).temp_apptOffer ?? 0)?.['found'] < ((s as any).ARGS ?? 0)[1]  &&  ((s as any).temp_apptOffer ?? 0)?.['day'] <= ((s as any).ARGS ?? 0)[3]) {
    // TODO-QSP: gs 'appointments', '_offer_try_day', ARGS[2], temp_apptOffer['day'], ARGS[6], ARGS[7], ARGS[8]
    (s as any).temp_apptOffer['day'] = ((s as any).temp_apptOffer['day'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_sweep'
  }
  (s as any).temp_apptOffer['i'] = ((s as any).temp_apptOffer ?? 0)?.['found'];
  // TODO-QSP: :offer_pad
  if (((s as any).temp_apptOffer ?? 0)?.['i'] < ((s as any).ARGS ?? 0)[1]) {
    // TODO-QSP: appointment_offer_day[temp_apptOffer['i']] = -1
    (s as any).temp_apptOffer['i'] = ((s as any).temp_apptOffer['i'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_pad'
  }
  qspCall(s, 'appointments', '_offer_describe');
  return;
  scene.build();
}

function enterOfferTryDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_apptTry['offset'] = qspUntranslated(s, "ARGS[2]", { location: "appointments" });
  (s as any).temp_apptTry['daystart'] = ((s as any).daystart ?? 0) + ((s as any).temp_apptTry ?? 0)?.['offset'];
  (s as any).temp_apptTry['done'] = 0;
  if (((s as any).ARGS ?? 0)[5] === 1) {
    (s as any).temp_apptTry['wk'] = (((s as any).week ?? 0) + ((s as any).temp_apptTry ?? 0)?.['offset']) % 7;
    if (((s as any).temp_apptTry ?? 0)?.['wk'] === 0) {
      (s as any).temp_apptTry['wk'] = 7;
    }
    if (((s as any).temp_apptTry ?? 0)?.['wk'] > 5) {
      (s as any).temp_apptTry['done'] = 1;
    }
  }
  (s as any).temp_apptTry['attempt'] = 0;
  // TODO-QSP: :offer_try_draw
  if (((s as any).temp_apptTry ?? 0)?.['done'] === 0  &&  ((s as any).temp_apptTry ?? 0)?.['attempt'] < 3) {
    (s as any).temp_apptTry['end'] = qspFunc(s, 'random', 'srand', ((s as any).ARGS ?? 0)[1] + ((s as any).daystart ?? 0) + ((s as any).temp_apptTry ?? 0)?.['offset'] * 654321 + ((s as any).temp_apptTry ?? 0)?.['attempt'] * 7654321, qspUntranslated(s, "ARGS[3]", { location: "appointments" }), qspUntranslated(s, "ARGS[4]", { location: "appointments" }));
    if (qspFunc(s, 'appointments', 'check_conflict', qspUntranslated(s, "\u00000\u0000", { location: "appointments" }), qspUntranslated(s, "\u00001\u0000", { location: "appointments" })) === 0) {
      // TODO-QSP: appointment_offer_day[temp_apptOffer['found']] = temp_apptTry['daystart']
      // TODO-QSP: appointment_offer_window_end[temp_apptOffer['found']] = temp_apptTry['end']
      (s as any).temp_apptOffer['found'] = ((s as any).temp_apptOffer['found'] ?? 0) + (1);
      (s as any).temp_apptTry['done'] = 1;
    }
    (s as any).temp_apptTry['attempt'] = ((s as any).temp_apptTry['attempt'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_try_draw'
  }
  return;
  scene.build();
}

function enterSlotEventVars(s: GameState, scene: SceneBuilder): void {
  (s as any).event_vars['daystart'] = qspUntranslated(s, "ARGS[1]", { location: "appointments" });
  (s as any).event_vars['flex_type'] = 1;
  (s as any).event_vars['window_start_ts'] = ((s as any).ARGS ?? 0)[2] - ((s as any).appointment_offer_buffer ?? 0);
  (s as any).event_vars['window_end_ts'] = qspUntranslated(s, "ARGS[2]", { location: "appointments" });
  (s as any).event_vars['duration_ts'] = ((s as any).appointment_offer_duration ?? 0);
  (s as any).event_vars['blocking'] = 1;
  (s as any).event_vars['priority'] = 2;
  return;
  scene.build();
}

function enterCheckConflict(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_list', 'init_event_vars');
  (s as any).event_vars['id'] = 'appointment_offer_check';
  // TODO-QSP: gs 'appointments', '_slot_event_vars', ARGS[1], ARGS[2]
  (s as any).result = qspFunc(s, 'calendar_events', 'new_event', ((s as any).event_vars ?? 0)?.['id'], 'dry_run');
  return;
  scene.build();
}

function enterOfferDescribe(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_apptDesc['i'] = 0;
  // TODO-QSP: :offer_desc_loop
  if (((s as any).temp_apptDesc ?? 0)?.['i'] < ((s as any).appointment_offer_count ?? 0)) {
    if (((s as any).appointment_offer_day ?? 0)[((s as any).temp_apptDesc ?? 0)?.['i']] >= 0) {
      (s as any).temp_apptDesc['offset'] = ((s as any).appointment_offer_day ?? 0)[((s as any).temp_apptDesc ?? 0)?.['i']] - ((s as any).daystart ?? 0);
      if (((s as any).temp_apptDesc ?? 0)?.['offset'] === 1) {
        (s as any).temp_apptDesc['day'] = 'Tomorrow';
      } else {
        (s as any).temp_apptDesc['day'] = 'In two days';
        if (((s as any).temp_apptDesc ?? 0)?.['offset'] < 7) {
          (s as any).temp_apptDesc['day'] = 'On <<$weekName[(week + temp_apptDesc[\'offset\']) mod 7]>>';
        } else {
          (s as any).temp_apptDesc['day'] = 'On <<$weekName[(week + temp_apptDesc[\'offset\']) mod 7]>> (in <<temp_apptDesc[\'offset\']>> days)';
        }
        (s as any).temp_apptDesc['h1'] = qspFunc(s, 'calendar_query', 'ts_to_str', qspUntranslated(s, "appointment_offer_window_end[temp_apptDesc['i']]", { location: "appointments" }));
        (s as any).temp_apptDesc['h2'] = qspFunc(s, 'calendar_query', 'ts_to_str', ((s as any).appointment_offer_window_end ?? 0)[((s as any).temp_apptDesc ?? 0)?.['i']] + ((s as any).appointment_offer_duration ?? 0));
        // TODO-QSP: $appointment_offer_desc[temp_apptDesc['i']] = "<<$temp_apptDesc['day']>> from <<$temp_apptDesc['h1']...
        (s as any).temp_apptDesc['note'] = qspFunc(s, 'appointments', '_offer_conflict_note', ((s as any).temp_apptDesc ?? 0)?.['i']);
        if (((s as any).temp_apptDesc ?? 0)?.['note'] !== '') {
          // TODO-QSP: $appointment_offer_desc[temp_apptDesc['i']] = "<<$appointment_offer_desc[temp_apptDesc['i']]>> <<$te...
        }
      }
      (s as any).temp_apptDesc['i'] = ((s as any).temp_apptDesc['i'] ?? 0) + (1);
      // TODO-QSP: jump 'offer_desc_loop'
    }
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'has_appointment':
      enterHasAppointment(s, scene);
      break;
    case 'get_appointment_id':
      enterGetAppointmentId(s, scene);
      break;
    case 'get_event_display_ts':
      enterGetEventDisplayTs(s, scene);
      break;
    case 'get_state':
      enterGetState(s, scene);
      break;
    case 'get_wait_minutes':
      enterGetWaitMinutes(s, scene);
      break;
    case '_resolve_state':
      enterResolveState(s, scene);
      break;
    case '_state_from_event':
      enterStateFromEvent(s, scene);
      break;
    case 'offer_slots':
      enterOfferSlots(s, scene);
      break;
    case '_offer_try_day':
      enterOfferTryDay(s, scene);
      break;
    case '_slot_event_vars':
      enterSlotEventVars(s, scene);
      break;
    case 'check_conflict':
      enterCheckConflict(s, scene);
      break;
    case '_offer_describe':
      enterOfferDescribe(s, scene);
      break;
    default:
      enterHasAppointment(s, scene);
      break;
  }
}

export const appointments: LocationDef = {
  name: 'appointments',
  region: 'other',
  enter: enter,
};
