import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHasAppointment(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((((s as any).appointment_active ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') ? (1) : (0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetAppointmentId(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEventDisplayTs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = ((((s as any).event_vars ?? 0)?.['flex_type'] === 1) ? (((s as any).event_vars ?? 0)?.['window_end_ts']) : (((s as any).event_vars ?? 0)?.['start_ts']));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetState(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'appointments', '_resolve_state', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetWaitMinutes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'appointments', '_resolve_state', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  (s as any).result = ((s as any).appointment_state_wait ?? 0);
  return;
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterStateFromEvent(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_apptState) (s as any).temp_apptState = {}; (s as any).temp_apptState['ts'] = qspFunc(s, 'appointments', 'get_event_display_ts', ((s as any).locArgs?.[1] ?? 0));
  (s as any).appointment_state_wait = (((s as any).temp_apptState ?? {})?.['ts'] * 15 + ((s as any).ARGS ?? 0)[2] * 1440) - ((s as any).totminut ?? 0);
  if (((s as any).appointment_state_wait ?? 0) > 65) {
  } else {
    if (((s as any).appointment_state_wait ?? 0) >= 0) {
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferSlots(s: GameState, scene: SceneBuilder): void {
  (s as any).appointment_offer_count = qspUntranslated(s, "ARGS[1]", { location: "appointments" });
  (s as any).appointment_offer_duration = qspUntranslated(s, "ARGS[4]", { location: "appointments" });
  (s as any).appointment_offer_buffer = qspUntranslated(s, "ARGS[5]", { location: "appointments" });
  (s as any).appointment_offer_late_limit = 90;
  if (!(s as any).temp_apptOffer) (s as any).temp_apptOffer = {}; (s as any).temp_apptOffer['found'] = 0;
  if (!(s as any).temp_apptOffer) (s as any).temp_apptOffer = {}; (s as any).temp_apptOffer['day'] = 1;
  // TODO-QSP: :offer_sweep
  if (((s as any).temp_apptOffer ?? 0)?.['found'] < ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).temp_apptOffer ?? 0)?.['day'] <= ((s as any).locArgs?.[3] ?? 0)) {
    // TODO-QSP: gs 'appointments', '_offer_try_day', ARGS[2], temp_apptOffer['day'], ARGS[6], ARGS[7], ARGS[8]
    if (!(s as any).temp_apptOffer) (s as any).temp_apptOffer = {}; (s as any).temp_apptOffer['day'] = ((s as any).temp_apptOffer['day'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_sweep'
  }
  if (!(s as any).temp_apptOffer) (s as any).temp_apptOffer = {}; (s as any).temp_apptOffer['i'] = ((s as any).temp_apptOffer ?? 0)?.['found'];
  // TODO-QSP: :offer_pad
  if (((s as any).temp_apptOffer ?? 0)?.['i'] < ((s as any).locArgs?.[1] ?? 0)) {
    // TODO-QSP: appointment_offer_day[temp_apptOffer['i']] = -1
    if (!(s as any).temp_apptOffer) (s as any).temp_apptOffer = {}; (s as any).temp_apptOffer['i'] = ((s as any).temp_apptOffer['i'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_pad'
  }
  qspCall(s, 'appointments', '_offer_describe');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferTryDay(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_apptTry) (s as any).temp_apptTry = {}; (s as any).temp_apptTry['offset'] = qspUntranslated(s, "ARGS[2]", { location: "appointments" });
  if (!(s as any).temp_apptTry) (s as any).temp_apptTry = {}; (s as any).temp_apptTry['daystart'] = ((s as any).daystart ?? 0) + ((s as any).temp_apptTry ?? {})?.['offset'];
  if (!(s as any).temp_apptTry) (s as any).temp_apptTry = {}; (s as any).temp_apptTry['done'] = 0;
  if (((s as any).locArgs?.[5] ?? 0) === 1) {
    if (!(s as any).temp_apptTry) (s as any).temp_apptTry = {}; (s as any).temp_apptTry['wk'] = (((s as any).week ?? 0) + ((s as any).temp_apptTry ?? {})?.['offset']) % 7;
    if (((s as any).temp_apptTry ?? 0)?.['wk'] === 0) {
      if (!(s as any).temp_apptTry) (s as any).temp_apptTry = {}; (s as any).temp_apptTry['wk'] = 7;
    }
    if (((s as any).temp_apptTry ?? 0)?.['wk'] > 5) {
      if (!(s as any).temp_apptTry) (s as any).temp_apptTry = {}; (s as any).temp_apptTry['done'] = 1;
    }
  }
  if (!(s as any).temp_apptTry) (s as any).temp_apptTry = {}; (s as any).temp_apptTry['attempt'] = 0;
  // TODO-QSP: :offer_try_draw
  if (((s as any).temp_apptTry ?? 0)?.['done'] === 0  &&  ((s as any).temp_apptTry ?? 0)?.['attempt'] < 3) {
    if (!(s as any).temp_apptTry) (s as any).temp_apptTry = {}; (s as any).temp_apptTry['end'] = qspFunc(s, 'random', 'srand', ((s as any).ARGS ?? 0)[1] + ((s as any).daystart ?? 0) + ((s as any).temp_apptTry ?? {})?.['offset'] * 654321 + ((s as any).temp_apptTry ?? {})?.['attempt'] * 7654321, qspUntranslated(s, "ARGS[3]", { location: "appointments" }), qspUntranslated(s, "ARGS[4]", { location: "appointments" }));
    if (qspFunc(s, 'appointments', 'check_conflict', ((s as any).temp_apptTry ?? 0)?.['daystart'], ((s as any).temp_apptTry ?? 0)?.['end']) === 0) {
      // TODO-QSP: appointment_offer_day[temp_apptOffer['found']] = temp_apptTry['daystart']
      // TODO-QSP: appointment_offer_window_end[temp_apptOffer['found']] = temp_apptTry['end']
      if (!(s as any).temp_apptOffer) (s as any).temp_apptOffer = {}; (s as any).temp_apptOffer['found'] = ((s as any).temp_apptOffer['found'] ?? 0) + (1);
      if (!(s as any).temp_apptTry) (s as any).temp_apptTry = {}; (s as any).temp_apptTry['done'] = 1;
    }
    if (!(s as any).temp_apptTry) (s as any).temp_apptTry = {}; (s as any).temp_apptTry['attempt'] = ((s as any).temp_apptTry['attempt'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_try_draw'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSlotEventVars(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = qspUntranslated(s, "ARGS[1]", { location: "appointments" });
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = ((s as any).ARGS ?? 0)[2] - ((s as any).appointment_offer_buffer ?? 0);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = qspUntranslated(s, "ARGS[2]", { location: "appointments" });
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = ((s as any).appointment_offer_duration ?? 0);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['blocking'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckConflict(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_list', 'init_event_vars');
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'appointment_offer_check';
  // TODO-QSP: gs 'appointments', '_slot_event_vars', ARGS[1], ARGS[2]
  (s as any).result = qspFunc(s, 'calendar_events', 'new_event', ((s as any).event_vars ?? 0)?.['id'], 'dry_run');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferDescribe(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_apptDesc) (s as any).temp_apptDesc = {}; (s as any).temp_apptDesc['i'] = 0;
  // TODO-QSP: :offer_desc_loop
  if (((s as any).temp_apptDesc ?? 0)?.['i'] < ((s as any).appointment_offer_count ?? 0)) {
    if (((s as any).appointment_offer_day ?? 0)[((s as any).temp_apptDesc ?? 0)?.['i']] >= 0) {
      if (!(s as any).temp_apptDesc) (s as any).temp_apptDesc = {}; (s as any).temp_apptDesc['offset'] = ((s as any).appointment_offer_day ?? 0)[((s as any).temp_apptDesc ?? {})?.['i']] - ((s as any).daystart ?? 0);
      if (((s as any).temp_apptDesc ?? 0)?.['offset'] === 1) {
        if (!(s as any).temp_apptDesc) (s as any).temp_apptDesc = {}; (s as any).temp_apptDesc['day'] = 'Tomorrow';
      } else {
        if (((s as any).temp_apptDesc ?? 0)?.['offset'] === 2) {
          if (!(s as any).temp_apptDesc) (s as any).temp_apptDesc = {}; (s as any).temp_apptDesc['day'] = 'In two days';
        } else {
          if (((s as any).temp_apptDesc ?? 0)?.['offset'] < 7) {
            // TODO-QSP: $temp_apptDesc['day'] = "On <<$weekName[(week + temp_apptDesc['offset']) mod 7]>>"
          } else {
            // TODO-QSP: $temp_apptDesc['day'] = "On <<$weekName[(week + temp_apptDesc['offset']) mod 7]>> (in <<temp_apptDesc['offset']>> days)"
          }
        }
      }
      if (!(s as any).temp_apptDesc) (s as any).temp_apptDesc = {}; (s as any).temp_apptDesc['h1'] = qspFunc(s, 'calendar_query', 'ts_to_str', qspUntranslated(s, "appointment_offer_window_end[temp_apptDesc['i']]", { location: "appointments" }));
      if (!(s as any).temp_apptDesc) (s as any).temp_apptDesc = {}; (s as any).temp_apptDesc['h2'] = qspFunc(s, 'calendar_query', 'ts_to_str', ((s as any).appointment_offer_window_end ?? 0)[((s as any).temp_apptDesc ?? {})?.['i']] + ((s as any).appointment_offer_duration ?? 0));
      // TODO-QSP: $appointment_offer_desc[temp_apptDesc['i']] = "<<$temp_apptDesc['day']>> from <<$temp_apptDesc['h1']...
      if (!(s as any).temp_apptDesc) (s as any).temp_apptDesc = {}; (s as any).temp_apptDesc['note'] = qspFunc(s, 'appointments', '_offer_conflict_note', ((s as any).temp_apptDesc ?? 0)?.['i']);
      if (((s as any).temp_apptDesc ?? 0)?.['note'] !== '') {
        // TODO-QSP: $appointment_offer_desc[temp_apptDesc['i']] = "<<$appointment_offer_desc[temp_apptDesc['i']]>> <<$te...
      }
    }
    if (!(s as any).temp_apptDesc) (s as any).temp_apptDesc = {}; (s as any).temp_apptDesc['i'] = ((s as any).temp_apptDesc['i'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_desc_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferConflictNote(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_apptConf) (s as any).temp_apptConf = {}; (s as any).temp_apptConf['idx'] = qspUntranslated(s, "ARGS[1]", { location: "appointments" });
  // TODO-QSP: gs 'calendar_query', 'get_events_for_time_range', appointment_offer_day[temp_apptConf['idx']], appoi...
  // TODO-QSP: copyarr '$temp_apptConf', '$query_events_for_time_range'
  if (Object.keys((s as any).temp_apptConf ?? {}).length > 0) {
    if (!(s as any).temp_apptConf) (s as any).temp_apptConf = {}; (s as any).temp_apptConf['k'] = 0;
    // TODO-QSP: :offer_conf_loop
    if (((s as any).temp_apptConf ?? 0)?.['k'] < Object.keys((s as any).temp_apptConf ?? {}).length) {
      if (((s as any).temp_apptConf ?? 0)?.['k'] > 0) {
        // TODO-QSP: $result += ', '
      }
      // TODO-QSP: gs 'calendar_query', 'get_event_display_range', $temp_apptConf[temp_apptConf['k']], appointment_offe...
      // TODO-QSP: $result += $event_vars['title'] + ': ' + $temp_apptConf_time
      if (!(s as any).temp_apptConf) (s as any).temp_apptConf = {}; (s as any).temp_apptConf['k'] = ((s as any).temp_apptConf['k'] ?? 0) + (1);
      // TODO-QSP: jump 'offer_conf_loop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBook(s: GameState, scene: SceneBuilder): void {
  if (((s as any).appointment_active ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== ''  ||  ((s as any).appointment_offer_day ?? 0)[((s as any).locArgs?.[2] ?? 0)] < 0) {
    (s as any).result = 0;
    return;
  }
  qspCall(s, 'calendar_list', 'init_event_vars');
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'appointment_' + ((s as any).locArgs?.[1] ?? 0) + '_' + String(qspUntranslated(s, "appointment_offer_day[ARGS[2]]", { location: "appointments" }));
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = ((s as any).locArgs?.[3] ?? 0);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = ((s as any).locArgs?.[4] ?? 0);
  // TODO-QSP: gs 'appointments', '_slot_event_vars', appointment_offer_day[ARGS[2]], appointment_offer_window_end[...
  qspCall(s, 'calendar_list', 'assign_color');
  if (qspFunc(s, 'calendar_events', 'new_event', ((s as any).event_vars ?? 0)?.['id']) === 1) {
    (s as any).result = 0;
    return;
  }
  if ((Array.isArray((s as any).appointment_categories) ? ((s as any).appointment_categories as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) === -1) {
    // TODO-QSP: $appointment_categories[] = $ARGS[1]
  }
  // TODO-QSP: $appointment_active[$ARGS[1]] = $event_vars['id']
  // TODO-QSP: appointment_late_limit[$ARGS[1]] = appointment_offer_late_limit
  (s as any).result = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResolve(s: GameState, scene: SceneBuilder): void {
  if (((s as any).appointment_active ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
    // TODO-QSP: gs 'calendar_events', 'remove_event', $appointment_active[$ARGS[1]]
  }
  // TODO-QSP: $appointment_active[$ARGS[1]] = ''
  // TODO-QSP: appointment_late_limit[$ARGS[1]] = 0
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDailyCheck(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_apptDaily) (s as any).temp_apptDaily = {}; (s as any).temp_apptDaily['i'] = 0;
  // TODO-QSP: :daily_check_loop
  if (((s as any).temp_apptDaily ?? 0)?.['i'] < Object.keys((s as any).appointment_categories ?? {}).length) {
    // TODO-QSP: gs 'appointments', 'get_state', $appointment_categories[temp_apptDaily['i']], ''
    if (!(s as any).temp_apptDaily) (s as any).temp_apptDaily = {}; (s as any).temp_apptDaily['i'] = ((s as any).temp_apptDaily['i'] ?? 0) + (1);
    // TODO-QSP: jump 'daily_check_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckIn(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_apptCheckin) (s as any).temp_apptCheckin = {}; (s as any).temp_apptCheckin['state'] = qspFunc(s, 'appointments', 'get_state', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  if (((s as any).temp_apptCheckin ?? 0)?.['state'] !== 'late') {
    return;
  }
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
    return;
  }
  if (!(s as any).temp_apptCheckin) (s as any).temp_apptCheckin = {}; (s as any).temp_apptCheckin['lateness'] = -1 * qspFunc(s, 'appointments', 'get_wait_minutes', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  if (!(s as any).temp_apptCheckin) (s as any).temp_apptCheckin = {}; (s as any).temp_apptCheckin['late_limit'] = ((((s as any).appointment_late_limit ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) ? (((s as any).appointment_late_limit ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]) : (90));
  if (!(s as any).temp_apptCheckin) (s as any).temp_apptCheckin = {}; (s as any).temp_apptCheckin['severity'] = Math.min(100, ((s as any).temp_apptCheckin ?? {})?.['lateness'] * 100 / ((s as any).temp_apptCheckin ?? {})?.['late_limit']);
  qspCall(s, 'appointments', 'resolve', ((s as any).locArgs?.[1] ?? 0));
  if ((Math.floor(Math.random() * 100) + 0) < ((s as any).temp_apptCheckin ?? 0)?.['severity']) {
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderActs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'appointments', '_resolve_state', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[5] ?? 0));
  if (!(s as any).temp_apptRender) (s as any).temp_apptRender = {}; (s as any).temp_apptRender['wait'] = ((s as any).appointment_state_wait ?? 0);
  if (!(s as any).temp_apptRender) (s as any).temp_apptRender = {}; (s as any).temp_apptRender['state'] = ((s as any).appointment_state ?? 0);
  if (((s as any).temp_apptRender ?? 0)?.['state'] === 'none') {
    // TODO-QSP: gs $ARGS[2], $ARGS[3], $ARGS[1]
  } else {
    if (((s as any).temp_apptRender ?? 0)?.['state'] === 'pending') {
      // TODO-QSP: "You still have some time before your appointment (about <<$func('time', 'get_duration_string', temp...
      if (((s as any).temp_apptRender ?? 0)?.['wait'] <= 120) {
        (s as any).appt_pending_wait = ((s as any).temp_apptRender ?? 0)?.['wait'];
        scene.actions([
          { label: 'Wait for your appointment', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).appt_pending_wait ?? 0) - 60);
    qspCall(s, 'stat', '');
    qspCall(s, 'appointments', 'render_acts', ((s as any).appt_pending_category ?? 0), ((s as any).appt_pending_loc ?? 0), ((s as any).appt_pending_none_func ?? 0), ((s as any).appt_pending_func ?? 0), ((s as any).appt_pending_recur ?? 0));
  } },
        ]);
      }
      scene.actions([
        { label: 'Go back', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      // TODO-QSP: gs $ARGS[2], $ARGS[4], $ARGS[1], temp_apptRender['wait'], $ARGS[5]
    }
  }
  return;
  // TODO-QSP: end
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
    case '_offer_conflict_note':
      enterOfferConflictNote(s, scene);
      break;
    case 'book':
      enterBook(s, scene);
      break;
    case 'resolve':
      enterResolve(s, scene);
      break;
    case 'daily_check':
      enterDailyCheck(s, scene);
      break;
    case 'check_in':
      enterCheckIn(s, scene);
      break;
    case 'render_acts':
      enterRenderActs(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const appointments: LocationDef = {
  name: 'appointments',
  region: 'other',
  enter: enter,
};
