import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHasAppointment(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((((s as any).appointment_active ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') ? (1) : (0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetAppointmentId(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).appointment_active ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEventDisplayTs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = ((((s as any).event_vars ?? 0)?.['flex_type'] === 1) ? ((((s as any).event_vars ?? 0)?.['window_end_ts'])) : ((((s as any).event_vars ?? 0)?.['start_ts'])));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetState(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterResolveState(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).result = ((s as any).appointment_state ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetWaitMinutes(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterResolveState(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).result = ((s as any).appointment_state_wait ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResolveState(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['appointments'] === 1) {
    (s as any).appointment_state = 'current';
    (s as any).appointment_state_wait = 0;
    return;
  }
  if (String((s as any).locArgs?.[2] ?? '') !== '') {
    if (qspFunc(s, 'calendar_events', 'event_occurs_in_day', ((s as any).locArgs?.[2] ?? 0), ((s as any).daystart ?? 0)) === 0) {
      (s as any).appointment_state = 'none';
      (s as any).appointment_state_wait = 0;
      return;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[2] ?? 0), ((s as any).daystart ?? 0)]; enterStateFromEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  if (((s as any).appointment_active ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    (s as any).appointment_state = 'none';
    (s as any).appointment_state_wait = 0;
    return;
  }
  qspCall(s, 'calendar_events', 'get_event', (((s as any).appointment_active ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
  if (((s as any).event_vars ?? 0)?.['daystart'] < ((s as any).daystart ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterResolve(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).appointment_state = 'none';
    (s as any).appointment_state_wait = 0;
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).appointment_active ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0), (((s as any).event_vars ?? 0)?.['daystart'])]; enterStateFromEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStateFromEvent(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_apptState = (s as any).temp_apptState ?? {})['ts'] = qspFunc(s, 'appointments', 'get_event_display_ts', ((s as any).locArgs?.[1] ?? 0));
  (s as any).appointment_state_wait = ((((s as any).temp_apptState ?? {})?.['ts'] ?? 0) * 15 + ((s as any).locArgs?.[2] ?? 0) * 1440) - ((s as any).totminut ?? 0);
  if (((s as any).appointment_state_wait ?? 0) > 65) {
    (s as any).appointment_state = 'pending';
  } else {
    if (((s as any).appointment_state_wait ?? 0) >= 0) {
      (s as any).appointment_state = 'current';
    } else {
      (s as any).appointment_state = 'late';
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferSlots(s: GameState, scene: SceneBuilder): void {
  (s as any).appointment_offer_count = ((s as any).locArgs?.[1] ?? 0);
  (s as any).appointment_offer_duration = ((s as any).locArgs?.[4] ?? 0);
  (s as any).appointment_offer_buffer = ((s as any).locArgs?.[5] ?? 0);
  (s as any).appointment_offer_late_limit = 90;
  ((s as any).temp_apptOffer = (s as any).temp_apptOffer ?? {})['found'] = 0;
  ((s as any).temp_apptOffer = (s as any).temp_apptOffer ?? {})['day'] = 1;
  // TODO-QSP: :offer_sweep
  if (((s as any).temp_apptOffer ?? 0)?.['found'] < String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).temp_apptOffer ?? 0)?.['day'] <= String((s as any).locArgs?.[3] ?? '')) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[2] ?? 0), (((s as any).temp_apptOffer ?? 0)?.['day']), ((s as any).locArgs?.[6] ?? 0), ((s as any).locArgs?.[7] ?? 0), ((s as any).locArgs?.[8] ?? 0)]; enterOfferTryDay(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).temp_apptOffer = (s as any).temp_apptOffer ?? {})['day'] = ((s as any).temp_apptOffer['day'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_sweep'
  }
  ((s as any).temp_apptOffer = (s as any).temp_apptOffer ?? {})['i'] = (((s as any).temp_apptOffer ?? 0)?.['found']);
  // TODO-QSP: :offer_pad
  if (((s as any).temp_apptOffer ?? 0)?.['i'] < String((s as any).locArgs?.[1] ?? '')) {
    // TODO-QSP: appointment_offer_day[temp_apptOffer['i']] = -1
    ((s as any).temp_apptOffer = (s as any).temp_apptOffer ?? {})['i'] = ((s as any).temp_apptOffer['i'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_pad'
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOfferDescribe(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferTryDay(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_apptTry = (s as any).temp_apptTry ?? {})['offset'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).temp_apptTry = (s as any).temp_apptTry ?? {})['daystart'] = ((s as any).daystart ?? 0) + (((s as any).temp_apptTry ?? {})?.['offset'] ?? 0);
  ((s as any).temp_apptTry = (s as any).temp_apptTry ?? {})['done'] = 0;
  if (String((s as any).locArgs?.[5] ?? '') === 1) {
    ((s as any).temp_apptTry = (s as any).temp_apptTry ?? {})['wk'] = (((s as any).week ?? 0) + (((s as any).temp_apptTry ?? {})?.['offset'] ?? 0)) % 7;
    if (((s as any).temp_apptTry ?? 0)?.['wk'] === 0) {
      ((s as any).temp_apptTry = (s as any).temp_apptTry ?? {})['wk'] = 7;
    }
    if (((s as any).temp_apptTry ?? 0)?.['wk'] > 5) {
      ((s as any).temp_apptTry = (s as any).temp_apptTry ?? {})['done'] = 1;
    }
  }
  ((s as any).temp_apptTry = (s as any).temp_apptTry ?? {})['attempt'] = 0;
  // TODO-QSP: :offer_try_draw
  if (((s as any).temp_apptTry ?? 0)?.['done'] === 0  &&  ((s as any).temp_apptTry ?? 0)?.['attempt'] < 3) {
    ((s as any).temp_apptTry = (s as any).temp_apptTry ?? {})['end'] = qspFunc(s, 'random', 'srand', ((s as any).locArgs?.[1] ?? 0) + ((s as any).daystart ?? 0) + (((s as any).temp_apptTry ?? {})?.['offset'] ?? 0) * 654321 + (((s as any).temp_apptTry ?? {})?.['attempt'] ?? 0) * 7654321, ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
    if (qspFunc(s, 'appointments', 'check_conflict', ((s as any).temp_apptTry ?? 0)?.['daystart'], ((s as any).temp_apptTry ?? 0)?.['end']) === 0) {
      // TODO-QSP: appointment_offer_day[temp_apptOffer['found']] = temp_apptTry['daystart']
      // TODO-QSP: appointment_offer_window_end[temp_apptOffer['found']] = temp_apptTry['end']
      ((s as any).temp_apptOffer = (s as any).temp_apptOffer ?? {})['found'] = ((s as any).temp_apptOffer['found'] ?? 0) + (1);
      ((s as any).temp_apptTry = (s as any).temp_apptTry ?? {})['done'] = 1;
    }
    ((s as any).temp_apptTry = (s as any).temp_apptTry ?? {})['attempt'] = ((s as any).temp_apptTry['attempt'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_try_draw'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSlotEventVars(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = ((s as any).locArgs?.[2] ?? 0) - ((s as any).appointment_offer_buffer ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = ((s as any).appointment_offer_duration ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['blocking'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckConflict(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_list', 'init_event_vars');
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'appointment_offer_check';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterSlotEventVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).result = qspFunc(s, 'calendar_events', 'new_event', (((s as any).event_vars ?? 0)?.['id']), 'dry_run');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferDescribe(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_apptDesc = (s as any).temp_apptDesc ?? {})['i'] = 0;
  // TODO-QSP: :offer_desc_loop
  if (((s as any).temp_apptDesc ?? 0)?.['i'] < ((s as any).appointment_offer_count ?? 0)) {
    if (((s as any).appointment_offer_day ?? 0)[((s as any).temp_apptDesc ?? 0)?.['i']] >= 0) {
      ((s as any).temp_apptDesc = (s as any).temp_apptDesc ?? {})['offset'] = ((s as any).appointment_offer_day ?? 0)[(((s as any).temp_apptDesc ?? {})?.['i'] ?? 0)] - ((s as any).daystart ?? 0);
      if (((s as any).temp_apptDesc ?? 0)?.['offset'] === 1) {
        ((s as any).temp_apptDesc = (s as any).temp_apptDesc ?? {})['day'] = 'Tomorrow';
      } else {
        if (((s as any).temp_apptDesc ?? 0)?.['offset'] === 2) {
          ((s as any).temp_apptDesc = (s as any).temp_apptDesc ?? {})['day'] = 'In two days';
        } else {
          if (((s as any).temp_apptDesc ?? 0)?.['offset'] < 7) {
            ((s as any).temp_apptDesc = (s as any).temp_apptDesc ?? {})['day'] = 'On ' + (((s as any).weekName ?? 0)?.[(((s as any).week ?? 0) + (((s as any).temp_apptDesc ?? {})?.['offset'] ?? 0)) % 7] ?? 0) + '';
          } else {
            ((s as any).temp_apptDesc = (s as any).temp_apptDesc ?? {})['day'] = 'On ' + (((s as any).weekName ?? 0)?.[(((s as any).week ?? 0) + (((s as any).temp_apptDesc ?? {})?.['offset'] ?? 0)) % 7] ?? 0) + ' (in ' + (((s as any).temp_apptDesc ?? 0)?.['offset']) + ' days)';
          }
        }
      }
      ((s as any).temp_apptDesc = (s as any).temp_apptDesc ?? {})['h1'] = qspFunc(s, 'calendar_query', 'ts_to_str', qspUntranslated(s, "appointment_offer_window_end[temp_apptDesc['i']]", { location: "appointments" }));
      ((s as any).temp_apptDesc = (s as any).temp_apptDesc ?? {})['h2'] = qspFunc(s, 'calendar_query', 'ts_to_str', ((s as any).appointment_offer_window_end ?? 0)[(((s as any).temp_apptDesc ?? {})?.['i'] ?? 0)] + ((s as any).appointment_offer_duration ?? 0));
      // TODO-QSP: $appointment_offer_desc[temp_apptDesc['i']] = "<<$temp_apptDesc['day']>> from <<$temp_apptDesc['h1']...
      ((s as any).temp_apptDesc = (s as any).temp_apptDesc ?? {})['note'] = qspFunc(s, 'appointments', '_offer_conflict_note', (((s as any).temp_apptDesc ?? 0)?.['i']));
      if (((s as any).temp_apptDesc ?? 0)?.['note'] !== '') {
        // TODO-QSP: $appointment_offer_desc[temp_apptDesc['i']] = "<<$appointment_offer_desc[temp_apptDesc['i']]>> <<$te...
      }
    }
    ((s as any).temp_apptDesc = (s as any).temp_apptDesc ?? {})['i'] = ((s as any).temp_apptDesc['i'] ?? 0) + (1);
    // TODO-QSP: jump 'offer_desc_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferConflictNote(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_apptConf = (s as any).temp_apptConf ?? {})['idx'] = ((s as any).locArgs?.[1] ?? 0);
  qspCall(s, 'calendar_query', 'get_events_for_time_range', qspUntranslated(s, "appointment_offer_day[temp_apptConf['idx']]", { location: "appointments" }), ((s as any).appointment_offer_window_end ?? 0)[(((s as any).temp_apptConf ?? {})?.['idx'] ?? 0)] - ((s as any).appointment_offer_buffer ?? 0), ((s as any).appointment_offer_buffer ?? 0) + ((s as any).appointment_offer_duration ?? 0));
  // TODO-QSP: copyarr '$temp_apptConf', '$query_events_for_time_range'
  if (Object.keys((s as any).temp_apptConf ?? {}).length > 0) {
    (s as any).result = 'Conflicting with: ';
    ((s as any).temp_apptConf = (s as any).temp_apptConf ?? {})['k'] = 0;
    // TODO-QSP: :offer_conf_loop
    if (((s as any).temp_apptConf ?? 0)?.['k'] < Object.keys((s as any).temp_apptConf ?? {}).length) {
      if (((s as any).temp_apptConf ?? 0)?.['k'] > 0) {
        // TODO-QSP: $result += ', '
      }
      qspCall(s, 'calendar_query', 'get_event_display_range', qspUntranslated(s, "temp_apptConf[temp_apptConf['k']]", { location: "appointments" }), qspUntranslated(s, "appointment_offer_day[temp_apptConf['idx']]", { location: "appointments" }));
      (s as any).temp_apptConf_time = qspFunc(s, 'calendar_query', 'ts_to_str', ((s as any).result_start_ts ?? 0)) + '-' + qspFunc(s, 'calendar_query', 'ts_to_str', ((s as any).result_end_ts ?? 0));
      // TODO-QSP: $result += $event_vars['title'] + ': ' + $temp_apptConf_time
      ((s as any).temp_apptConf = (s as any).temp_apptConf ?? {})['k'] = ((s as any).temp_apptConf['k'] ?? 0) + (1);
      // TODO-QSP: jump 'offer_conf_loop'
    }
    (s as any).result = '(' + ((s as any).result ?? 0) + ')';
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBook(s: GameState, scene: SceneBuilder): void {
  if (((s as any).appointment_active ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== ''  ||  ((s as any).appointment_offer_day ?? 0)[String((s as any).locArgs?.[2] ?? '')] < 0) {
    (s as any).result = 0;
    return;
  }
  qspCall(s, 'calendar_list', 'init_event_vars');
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'appointment_' + ((s as any).locArgs?.[1] ?? 0) + '_' + String(qspUntranslated(s, "appointment_offer_day[ARGS[2]]", { location: "appointments" }));
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = ((s as any).locArgs?.[4] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspUntranslated(s, "appointment_offer_day[ARGS[2]]", { location: "appointments" }), qspUntranslated(s, "appointment_offer_window_end[ARGS[2]]", { location: "appointments" })]; enterSlotEventVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'calendar_list', 'assign_color');
  if (qspFunc(s, 'calendar_events', 'new_event', ((s as any).event_vars ?? 0)?.['id']) === 1) {
    (s as any).result = 0;
    return;
  }
  if ((Array.isArray((s as any).appointment_categories) ? ((s as any).appointment_categories as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) === -1) {
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
  if (((s as any).appointment_active ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
    qspCall(s, 'calendar_events', 'remove_event', (((s as any).appointment_active ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
  }
  // TODO-QSP: $appointment_active[$ARGS[1]] = ''
  // TODO-QSP: appointment_late_limit[$ARGS[1]] = 0
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDailyCheck(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_apptDaily = (s as any).temp_apptDaily ?? {})['i'] = 0;
  // TODO-QSP: :daily_check_loop
  if (((s as any).temp_apptDaily ?? 0)?.['i'] < Object.keys((s as any).appointment_categories ?? {}).length) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspUntranslated(s, "appointment_categories[temp_apptDaily['i']]", { location: "appointments" }), '']; enterGetState(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).temp_apptDaily = (s as any).temp_apptDaily ?? {})['i'] = ((s as any).temp_apptDaily['i'] ?? 0) + (1);
    // TODO-QSP: jump 'daily_check_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckIn(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_apptCheckin = (s as any).temp_apptCheckin ?? {})['state'] = qspFunc(s, 'appointments', 'get_state', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  if (((s as any).temp_apptCheckin ?? 0)?.['state'] !== 'late') {
    (s as any).result = 'too_early';
    return;
  }
  if (String((s as any).locArgs?.[2] ?? '') !== '') {
    (s as any).result = 'ok';
    return;
  }
  ((s as any).temp_apptCheckin = (s as any).temp_apptCheckin ?? {})['lateness'] = -1 * qspFunc(s, 'appointments', 'get_wait_minutes', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  ((s as any).temp_apptCheckin = (s as any).temp_apptCheckin ?? {})['late_limit'] = ((((s as any).appointment_late_limit ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) ? ((((s as any).appointment_late_limit ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)) : (90));
  ((s as any).temp_apptCheckin = (s as any).temp_apptCheckin ?? {})['severity'] = Math.min(100, (((s as any).temp_apptCheckin ?? {})?.['lateness'] ?? 0) * 100 / (((s as any).temp_apptCheckin ?? {})?.['late_limit'] ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterResolve(s, scene); (s as any).locArgs = __savedLocArgs; }
  if ((Math.floor(Math.random() * 100) + 0) < ((s as any).temp_apptCheckin ?? 0)?.['severity']) {
    (s as any).result = 'missed';
  } else {
    (s as any).result = 'ok';
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderActs(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[5] ?? 0)]; enterResolveState(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).temp_apptRender = (s as any).temp_apptRender ?? {})['wait'] = ((s as any).appointment_state_wait ?? 0);
  ((s as any).temp_apptRender = (s as any).temp_apptRender ?? {})['state'] = ((s as any).appointment_state ?? 0);
  if (((s as any).temp_apptRender ?? 0)?.['state'] === 'none') {
    qspCall(s, '$ARGS[2]', '$ARGS[3]', ((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).temp_apptRender ?? 0)?.['state'] === 'pending') {
      // TODO-QSP: "You still have some time before your appointment (about <<$func('time', 'get_duration_string', temp...
      if (((s as any).temp_apptRender ?? 0)?.['wait'] <= 120) {
        (s as any).appt_pending_loc = ((s as any).locArgs?.[2] ?? 0);
        (s as any).appt_pending_none_func = ((s as any).locArgs?.[3] ?? 0);
        (s as any).appt_pending_func = ((s as any).locArgs?.[4] ?? 0);
        (s as any).appt_pending_category = ((s as any).locArgs?.[1] ?? 0);
        (s as any).appt_pending_recur = ((s as any).locArgs?.[5] ?? 0);
        (s as any).appt_pending_wait = (((s as any).temp_apptRender ?? 0)?.['wait']);
        scene.actions([
          { label: 'Wait for your appointment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (((st as any).appt_pending_wait ?? 0) - 60);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ((st as any).appt_pending_category ?? 0), ((st as any).appt_pending_loc ?? 0), ((st as any).appt_pending_none_func ?? 0), ((st as any).appt_pending_func ?? 0), ((st as any).appt_pending_recur ?? 0)]; enterRenderActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Go back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      qspCall(s, '$ARGS[2]', '$ARGS[4]', ((s as any).locArgs?.[1] ?? 0), (((s as any).temp_apptRender ?? 0)?.['wait']), ((s as any).locArgs?.[5] ?? 0));
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
