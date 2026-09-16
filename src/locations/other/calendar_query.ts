import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTsToStr(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'time', 'get_time_string', ((s as any).locArgs?.[1] ?? 0) / 4, (((s as any).locArgs?.[1] ?? 0) % 4) * 15);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFormatRelativeDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_frd_offset = ((s as any).locArgs?.[1] ?? 0) - ((s as any).daystart ?? 0);
  if ((!((s as any).temp_frd_offset ?? 0))) {
    (s as any).result = 'today';
  } else {
    if (((s as any).temp_frd_offset ?? 0) === 1) {
      (s as any).result = 'tomorrow';
    } else {
      (s as any).result = ((s as any).weekName ?? 0)?.[((((s as any).week ?? 0) - 1 + ((s as any).temp_frd_offset ?? 0)) % 7) + 1];
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEventDisplayRange(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).event_vars ?? 0)?.['all_day'] === 1) {
    (s as any).result_start_ts = 0;
    (s as any).result_end_ts = 95;
    (s as any).result_is_flex = 0;
    (s as any).result_window_end_ts = 0;
    (s as any).result_duration_ts = 0;
    return;
  }
  if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
    (s as any).result_start_ts = ((s as any).event_vars ?? 0)?.['window_start_ts'];
    (s as any).result_end_ts = (((s as any).event_vars ?? {})?.['window_end_ts'] ?? 0) + (((s as any).event_vars ?? {})?.['duration_ts'] ?? 0) - 1;
    (s as any).result_is_flex = 1;
    (s as any).result_window_end_ts = ((s as any).event_vars ?? 0)?.['window_end_ts'];
    (s as any).result_duration_ts = ((s as any).event_vars ?? 0)?.['duration_ts'];
  } else {
    (s as any).result_start_ts = ((s as any).event_vars ?? 0)?.['start_ts'];
    (s as any).result_end_ts = (((s as any).event_vars ?? {})?.['start_ts'] ?? 0) + (((s as any).event_vars ?? {})?.['duration_ts'] ?? 0) - 1;
    (s as any).result_is_flex = 0;
    (s as any).result_window_end_ts = 0;
    (s as any).result_duration_ts = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEventsForDay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_count = 0;
  (s as any).temp_i = 0;
  // TODO-QSP: :loop_events_day
  if (((s as any).temp_i ?? 0) < Object.keys((s as any).events_list ?? {}).length) {
    (s as any).temp_event_id = ((s as any).events_list ?? 0)?.[String((s as any).temp_i ?? 0)];
    if (((s as any).temp_event_id ?? 0) !== '') {
      if (qspFunc(s, 'calendar_events', 'event_occurs_in_day', ((s as any).temp_event_id ?? 0), ((s as any).locArgs?.[1] ?? 0)) === 1) {
        // TODO-QSP: $query_events_for_day[temp_count] = $temp_event_id
        (s as any).temp_count = ((s as any).temp_count ?? 0) + (1);
      }
    }
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    // TODO-QSP: jump 'loop_events_day'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEventsForTimeRange(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'calendar_query', 'get_events_for_day', ARGS[1]
  // TODO-QSP: copyarr '$day_events', '$query_events_for_day'
  (s as any).temp_count = 0;
  (s as any).temp_i = 0;
  (s as any).temp_timeslot_start = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_timeslot_end = ((s as any).locArgs?.[2] ?? 0) + ((s as any).locArgs?.[3] ?? 0);
  // TODO-QSP: :loop_events_time_range
  if (((s as any).temp_i ?? 0) < Object.keys((s as any).day_events ?? {}).length) {
    (s as any).temp_event_id = ((s as any).day_events ?? 0)?.[String((s as any).temp_i ?? 0)];
    if (((s as any).temp_event_id ?? 0) !== '') {
      // TODO-QSP: gs 'calendar_query', 'get_event_display_range', $temp_event_id, ARGS[1]
      (s as any).temp_range_start = ((s as any).result_start_ts ?? 0);
      (s as any).temp_range_end = ((s as any).result_end_ts ?? 0);
      if (((s as any).event_vars ?? 0)?.['all_day'] === 0  &&  ((s as any).temp_timeslot_start ?? 0) <= ((s as any).temp_range_end ?? 0)  &&  ((s as any).temp_timeslot_end ?? 0) >= ((s as any).temp_range_start ?? 0)) {
        // TODO-QSP: $query_events_for_time_range[temp_count] = $temp_event_id
        (s as any).temp_count = ((s as any).temp_count ?? 0) + (1);
      }
    }
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    // TODO-QSP: jump 'loop_events_time_range'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShouldEventBeVisible(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  (s as any).check_priority = ((s as any).event_vars ?? 0)?.['priority'];
  (s as any).check_all_day = ((s as any).event_vars ?? 0)?.['all_day'];
  if (((s as any).check_priority ?? 0) === 2  ||  ((s as any).check_all_day ?? 0) === 1) {
    (s as any).result = 1;
    return;
  }
  // TODO-QSP: gs 'calendar_query', 'get_event_display_range', $ARGS[1], ARGS[2]
  (s as any).check_start_ts = ((s as any).result_start_ts ?? 0);
  (s as any).check_end_ts = ((s as any).result_end_ts ?? 0);
  // TODO-QSP: gs 'calendar_query', 'get_events_for_day', ARGS[2]
  // TODO-QSP: copyarr '$day_events', '$query_events_for_day'
  (s as any).temp_i = 0;
  // TODO-QSP: :loop_check_conflicts
  if (((s as any).temp_i ?? 0) < Object.keys((s as any).day_events ?? {}).length) {
    (s as any).other_event_id = ((s as any).day_events ?? 0)?.[String((s as any).temp_i ?? 0)];
    if (((s as any).other_event_id ?? 0) !== ''  &&  ((s as any).other_event_id ?? 0) !== ((s as any).locArgs?.[1] ?? 0)) {
      qspCall(s, 'calendar_events', 'get_event', ((s as any).other_event_id ?? 0));
      if (((s as any).event_vars ?? 0)?.['priority'] > ((s as any).check_priority ?? 0)  &&  ((s as any).event_vars ?? 0)?.['all_day'] === 0) {
        // TODO-QSP: gs 'calendar_query', 'get_event_display_range', $other_event_id, ARGS[2]
        (s as any).other_start_ts = ((s as any).result_start_ts ?? 0);
        (s as any).other_end_ts = ((s as any).result_end_ts ?? 0);
        if (((s as any).other_start_ts ?? 0) <= ((s as any).check_end_ts ?? 0)  &&  ((s as any).other_end_ts ?? 0) >= ((s as any).check_start_ts ?? 0)) {
          (s as any).result = 0;
          return;
        }
      }
    }
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    // TODO-QSP: jump 'loop_check_conflicts'
  }
  (s as any).result = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEventSpanForDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
    (s as any).result = ((((s as any).event_vars ?? {})?.['window_end_ts'] ?? 0) - (((s as any).event_vars ?? {})?.['window_start_ts'] ?? 0)) + (((s as any).event_vars ?? {})?.['duration_ts'] ?? 0);
  } else {
    (s as any).result = ((s as any).event_vars ?? 0)?.['duration_ts'];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEventStartTimeslot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).event_vars ?? 0)?.['all_day'] === 1) {
    (s as any).result = 0;
    return;
  }
  if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
    (s as any).result = ((s as any).event_vars ?? 0)?.['window_start_ts'];
  } else {
    (s as any).result = ((s as any).event_vars ?? 0)?.['start_ts'];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetUpcoming(s: GameState, scene: SceneBuilder): void {
  ((s as any).upc = (s as any).upc ?? {})['max'] = ((((s as any).locArgs?.[1] ?? 0) > 0) ? (((s as any).locArgs?.[1] ?? 0)) : (3));
  ((s as any).upc = (s as any).upc ?? {})['today'] = ((((s as any).locArgs?.[2] ?? 0) > 0) ? (((s as any).locArgs?.[2] ?? 0)) : (((s as any).daystart ?? 0)));
  ((s as any).upc = (s as any).upc ?? {})['cur_ts'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).upc = (s as any).upc ?? {})['count'] = 0;
  ((s as any).upc = (s as any).upc ?? {})['ei'] = 0;
  ((s as any).upc = (s as any).upc ?? {})['emax'] = 0;
  // TODO-QSP: :upc_event_loop
  if (((s as any).upc ?? 0)?.['ei'] < ((s as any).upc ?? 0)?.['emax']) {
    ((s as any).upc = (s as any).upc ?? {})['id'] = qspUntranslated(s, "events_list[upc['ei']]", { location: "calendar_query" });
    if (((s as any).upc ?? 0)?.['id'] !== '') {
      // TODO-QSP: gs 'calendar_events', 'get_event', $upc['id']
      qspCall(s, 'calendar_events', 'load_new_ev', 1);
      ((s as any).upc = (s as any).upc ?? {})['search_from'] = Math.max((((s as any).upc ?? {})?.['today'] ?? 0) - 1, (((s as any).event_vars ?? {})?.['daystart'] ?? 0) - 1);
      if (((s as any).new_ev ?? 0)?.['recur'] === '') {
        ((s as any).upc = (s as any).upc ?? {})['occ'] = ((((s as any).new_ev ?? 0)?.['daystart'] >= ((s as any).upc ?? 0)?.['search_from'] + 1) ? (((s as any).new_ev ?? 0)?.['daystart']) : ((-1)));
      } else {
        ((s as any).upc = (s as any).upc ?? {})['occ'] = qspFunc(s, 'calendar_events', 'next_occurrence_daystart', ((s as any).upc ?? 0)?.['search_from']);
      }
      if (((s as any).upc ?? 0)?.['occ'] === ((s as any).upc ?? 0)?.['today']  &&  ((s as any).event_vars ?? 0)?.['all_day'] === 0) {
        ((s as any).upc = (s as any).upc ?? {})['ets'] = ((((s as any).event_vars ?? 0)?.['flex_type'] === 1) ? (((s as any).event_vars ?? 0)?.['window_start_ts']) : (((s as any).event_vars ?? 0)?.['start_ts']));
        if (((s as any).upc ?? 0)?.['ets'] <= ((s as any).upc ?? 0)?.['cur_ts']) {
          ((s as any).upc = (s as any).upc ?? {})['occ'] = qspFunc(s, 'calendar_events', 'next_occurrence_daystart', ((s as any).upc ?? 0)?.['occ']);
        }
      }
      if (((s as any).upc ?? 0)?.['occ'] >= 0) {
        ((s as any).upc = (s as any).upc ?? {})['sort_ts'] = ((((s as any).event_vars ?? 0)?.['all_day'] === 1) ? (0) : (((((s as any).event_vars ?? 0)?.['flex_type'] === 1) ? (((s as any).event_vars ?? 0)?.['window_start_ts']) : (((s as any).event_vars ?? 0)?.['start_ts']))));
        ((s as any).upc = (s as any).upc ?? {})['do_insert'] = 0;
        if (((s as any).upc ?? 0)?.['count'] < ((s as any).upc ?? 0)?.['max']) {
          ((s as any).upc = (s as any).upc ?? {})['ins'] = ((s as any).upc ?? 0)?.['count'];
          ((s as any).upc = (s as any).upc ?? {})['count'] = ((s as any).upc['count'] ?? 0) + (1);
          ((s as any).upc = (s as any).upc ?? {})['do_insert'] = 1;
        } else {
          if (((s as any).upc ?? 0)?.['occ'] < ((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['count'] - 1]  ||  (((s as any).upc ?? 0)?.['occ'] === ((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['count'] - 1]  &&  ((s as any).upc ?? 0)?.['sort_ts'] < ((s as any).upcoming_ts ?? 0)[((s as any).upc ?? 0)?.['count'] - 1])) {
            ((s as any).upc = (s as any).upc ?? {})['ins'] = (((s as any).upc ?? {})?.['count'] ?? 0) - 1;
            ((s as any).upc = (s as any).upc ?? {})['do_insert'] = 1;
          }
        }
        if (((s as any).upc ?? 0)?.['do_insert'] === 1) {
          // TODO-QSP: $upcoming_ids[upc['ins']] = $upc['id']
          // TODO-QSP: upcoming_days[upc['ins']] = upc['occ']
          // TODO-QSP: upcoming_ts[upc['ins']] = upc['sort_ts']
          ((s as any).upc = (s as any).upc ?? {})['bi'] = ((s as any).upc ?? 0)?.['ins'];
          // TODO-QSP: :upc_bubble
          if (((s as any).upc ?? 0)?.['bi'] > 0) {
            ((s as any).upc = (s as any).upc ?? {})['bj'] = (((s as any).upc ?? {})?.['bi'] ?? 0) - 1;
            if (((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['bi']] < ((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['bj']]  ||  (((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['bi']] === ((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['bj']]  &&  ((s as any).upcoming_ts ?? 0)[((s as any).upc ?? 0)?.['bi']] < ((s as any).upcoming_ts ?? 0)[((s as any).upc ?? 0)?.['bj']])) {
              ((s as any).upc = (s as any).upc ?? {})['tmp'] = qspUntranslated(s, "upcoming_ids[upc['bj']]", { location: "calendar_query" });
              ((s as any).upc = (s as any).upc ?? {})['tmp_d'] = qspUntranslated(s, "upcoming_days[upc['bj']]", { location: "calendar_query" });
              ((s as any).upc = (s as any).upc ?? {})['tmp_t'] = qspUntranslated(s, "upcoming_ts[upc['bj']]", { location: "calendar_query" });
              // TODO-QSP: $upcoming_ids[upc['bj']] = $upcoming_ids[upc['bi']]
              // TODO-QSP: upcoming_days[upc['bj']] = upcoming_days[upc['bi']]
              // TODO-QSP: upcoming_ts[upc['bj']] = upcoming_ts[upc['bi']]
              // TODO-QSP: $upcoming_ids[upc['bi']] = $upc['tmp']
              // TODO-QSP: upcoming_days[upc['bi']] = upc['tmp_d']
              // TODO-QSP: upcoming_ts[upc['bi']] = upc['tmp_t']
              ((s as any).upc = (s as any).upc ?? {})['bi'] = ((s as any).upc['bi'] ?? 0) - (1);
              // TODO-QSP: jump 'upc_bubble'
            }
          }
        }
      }
    }
    ((s as any).upc = (s as any).upc ?? {})['ei'] = ((s as any).upc['ei'] ?? 0) + (1);
    // TODO-QSP: jump 'upc_event_loop'
  }
  (s as any).upcoming_count = ((s as any).upc ?? 0)?.['count'];
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ts_to_str':
      enterTsToStr(s, scene);
      break;
    case 'format_relative_day':
      enterFormatRelativeDay(s, scene);
      break;
    case 'get_event_display_range':
      enterGetEventDisplayRange(s, scene);
      break;
    case 'get_events_for_day':
      enterGetEventsForDay(s, scene);
      break;
    case 'get_events_for_time_range':
      enterGetEventsForTimeRange(s, scene);
      break;
    case 'should_event_be_visible':
      enterShouldEventBeVisible(s, scene);
      break;
    case 'get_event_span_for_day':
      enterGetEventSpanForDay(s, scene);
      break;
    case 'get_event_start_timeslot':
      enterGetEventStartTimeslot(s, scene);
      break;
    case 'get_upcoming':
      enterGetUpcoming(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const calendar_query: LocationDef = {
  name: 'calendar_query',
  region: 'other',
  enter: enter,
};
