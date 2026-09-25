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
      (s as any).result = (((s as any).weekName ?? 0)?.[((((s as any).week ?? 0) - 1 + ((s as any).temp_frd_offset ?? 0)) % 7) + 1] ?? 0);
    }
  }
  (s as any).temp_frd_offset = undefined;
  return;
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
    (s as any).result_start_ts = (((s as any).event_vars ?? 0)?.['window_start_ts']);
    (s as any).result_end_ts = (((s as any).event_vars ?? {})?.['window_end_ts'] ?? 0) + (((s as any).event_vars ?? {})?.['duration_ts'] ?? 0) - 1;
    (s as any).result_is_flex = 1;
    (s as any).result_window_end_ts = (((s as any).event_vars ?? 0)?.['window_end_ts']);
    (s as any).result_duration_ts = (((s as any).event_vars ?? 0)?.['duration_ts']);
  } else {
    (s as any).result_start_ts = (((s as any).event_vars ?? 0)?.['start_ts']);
    (s as any).result_end_ts = (((s as any).event_vars ?? {})?.['start_ts'] ?? 0) + (((s as any).event_vars ?? {})?.['duration_ts'] ?? 0) - 1;
    (s as any).result_is_flex = 0;
    (s as any).result_window_end_ts = 0;
    (s as any).result_duration_ts = 0;
  }
  return;
  scene.build();
}

function enterGetEventsForDay(s: GameState, scene: SceneBuilder): void {
  (s as any).query_events_for_day = undefined;
  (s as any).temp_count = 0;
  (s as any).temp_i = 0;
  while (true) {
    if (((s as any).temp_i ?? 0) < Object.keys((s as any).events_list ?? {}).length) {
      (s as any).temp_event_id = (((s as any).events_list ?? 0)?.[String((s as any).temp_i ?? 0)] ?? 0);
      if (((s as any).temp_event_id ?? 0) !== '') {
        if (qspFunc(s, 'calendar_events', 'event_occurs_in_day', ((s as any).temp_event_id ?? 0), ((s as any).locArgs?.[1] ?? 0)) === 1) {
          ((s as any).query_events_for_day = (s as any).query_events_for_day ?? {})[String((s as any).temp_count ?? 0)] = ((s as any).temp_event_id ?? 0);
          (s as any).temp_count = ((s as any).temp_count ?? 0) + (1);
        }
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      break;
    }
    (s as any).temp_count = undefined;
    (s as any).temp_i = undefined;
    (s as any).temp_event_id = undefined;
    return;
  }
  scene.build();
}

function enterGetEventsForTimeRange(s: GameState, scene: SceneBuilder): void {
  (s as any).query_events_for_time_range = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetEventsForDay(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any)[query_events_for_day] ? (s as any)[query_events_for_day] = { ...(s as any)[day_events] } : (s as any)[query_events_for_day] = { ...(s as any)[day_events] };
  (s as any).temp_count = 0;
  (s as any).temp_i = 0;
  (s as any).temp_timeslot_start = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_timeslot_end = ((s as any).locArgs?.[2] ?? 0) + ((s as any).locArgs?.[3] ?? 0);
  while (true) {
    if (((s as any).temp_i ?? 0) < Object.keys((s as any).day_events ?? {}).length) {
      (s as any).temp_event_id = (((s as any).day_events ?? 0)?.[String((s as any).temp_i ?? 0)] ?? 0);
      if (((s as any).temp_event_id ?? 0) !== '') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_event_id ?? 0), ((s as any).locArgs?.[1] ?? 0)]; enterGetEventDisplayRange(s, scene); (s as any).locArgs = __savedLocArgs; }
        (s as any).temp_range_start = ((s as any).result_start_ts ?? 0);
        (s as any).temp_range_end = ((s as any).result_end_ts ?? 0);
        if (((s as any).event_vars ?? 0)?.['all_day'] === 0  &&  ((s as any).temp_timeslot_start ?? 0) <= ((s as any).temp_range_end ?? 0)  &&  ((s as any).temp_timeslot_end ?? 0) >= ((s as any).temp_range_start ?? 0)) {
          ((s as any).query_events_for_time_range = (s as any).query_events_for_time_range ?? {})[String((s as any).temp_count ?? 0)] = ((s as any).temp_event_id ?? 0);
          (s as any).temp_count = ((s as any).temp_count ?? 0) + (1);
        }
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      break;
    }
    (s as any).temp_count = undefined;
    (s as any).temp_i = undefined;
    (s as any).temp_event_id = undefined;
    (s as any).temp_timeslot_start = undefined;
    (s as any).temp_timeslot_end = undefined;
    (s as any).temp_range_start = undefined;
    (s as any).temp_range_end = undefined;
    (s as any).day_events = undefined;
    return;
  }
  scene.build();
}

function enterShouldEventBeVisible(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  (s as any).check_priority = (((s as any).event_vars ?? 0)?.['priority']);
  (s as any).check_all_day = (((s as any).event_vars ?? 0)?.['all_day']);
  if (((s as any).check_priority ?? 0) === 2  ||  ((s as any).check_all_day ?? 0) === 1) {
    (s as any).result = 1;
    (s as any).check_priority = undefined;
    (s as any).check_all_day = undefined;
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterGetEventDisplayRange(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).check_start_ts = ((s as any).result_start_ts ?? 0);
  (s as any).check_end_ts = ((s as any).result_end_ts ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[2] ?? 0)]; enterGetEventsForDay(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any)[query_events_for_day] ? (s as any)[query_events_for_day] = { ...(s as any)[day_events] } : (s as any)[query_events_for_day] = { ...(s as any)[day_events] };
  (s as any).temp_i = 0;
  while (true) {
    if (((s as any).temp_i ?? 0) < Object.keys((s as any).day_events ?? {}).length) {
      (s as any).other_event_id = (((s as any).day_events ?? 0)?.[String((s as any).temp_i ?? 0)] ?? 0);
      if (((s as any).other_event_id ?? 0) !== ''  &&  ((s as any).other_event_id ?? 0) !== String((s as any).locArgs?.[1] ?? '')) {
        qspCall(s, 'calendar_events', 'get_event', ((s as any).other_event_id ?? 0));
        if (((s as any).event_vars ?? 0)?.['priority'] > ((s as any).check_priority ?? 0)  &&  ((s as any).event_vars ?? 0)?.['all_day'] === 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).other_event_id ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterGetEventDisplayRange(s, scene); (s as any).locArgs = __savedLocArgs; }
          (s as any).other_start_ts = ((s as any).result_start_ts ?? 0);
          (s as any).other_end_ts = ((s as any).result_end_ts ?? 0);
          if (((s as any).other_start_ts ?? 0) <= ((s as any).check_end_ts ?? 0)  &&  ((s as any).other_end_ts ?? 0) >= ((s as any).check_start_ts ?? 0)) {
            (s as any).result = 0;
            (s as any).check_priority = undefined;
            (s as any).check_all_day = undefined;
            (s as any).check_start_ts = undefined;
            (s as any).check_end_ts = undefined;
            (s as any).temp_i = undefined;
            (s as any).other_event_id = undefined;
            (s as any).other_start_ts = undefined;
            (s as any).other_end_ts = undefined;
            (s as any).day_events = undefined;
            return;
          }
        }
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      break;
    }
    (s as any).result = 1;
    (s as any).check_priority = undefined;
    (s as any).check_all_day = undefined;
    (s as any).check_start_ts = undefined;
    (s as any).check_end_ts = undefined;
    (s as any).temp_i = undefined;
    (s as any).other_event_id = undefined;
    (s as any).other_start_ts = undefined;
    (s as any).other_end_ts = undefined;
    (s as any).day_events = undefined;
    return;
  }
  scene.build();
}

function enterGetEventSpanForDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
    (s as any).result = ((((s as any).event_vars ?? {})?.['window_end_ts'] ?? 0) - (((s as any).event_vars ?? {})?.['window_start_ts'] ?? 0)) + (((s as any).event_vars ?? {})?.['duration_ts'] ?? 0);
  } else {
    (s as any).result = (((s as any).event_vars ?? 0)?.['duration_ts']);
  }
  return;
  scene.build();
}

function enterGetEventStartTimeslot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).event_vars ?? 0)?.['all_day'] === 1) {
    (s as any).result = 0;
    return;
  }
  if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
    (s as any).result = (((s as any).event_vars ?? 0)?.['window_start_ts']);
  } else {
    (s as any).result = (((s as any).event_vars ?? 0)?.['start_ts']);
  }
  return;
  scene.build();
}

function enterGetUpcoming(s: GameState, scene: SceneBuilder): void {
  ((s as any).upc = (s as any).upc ?? {})['max'] = ((String((s as any).locArgs?.[1] ?? '') > 0) ? (((s as any).locArgs?.[1] ?? 0)) : (3));
  ((s as any).upc = (s as any).upc ?? {})['today'] = ((String((s as any).locArgs?.[2] ?? '') > 0) ? (((s as any).locArgs?.[2] ?? 0)) : (((s as any).daystart ?? 0)));
  ((s as any).upc = (s as any).upc ?? {})['cur_ts'] = ((s as any).locArgs?.[3] ?? 0);
  (s as any).upcoming_ids = undefined;
  (s as any).upcoming_days = undefined;
  (s as any).upcoming_ts = undefined;
  ((s as any).upc = (s as any).upc ?? {})['count'] = 0;
  ((s as any).upc = (s as any).upc ?? {})['ei'] = 0;
  ((s as any).upc = (s as any).upc ?? {})['emax'] = 0;
  while (true) {
    if (((s as any).upc ?? 0)?.['ei'] < ((s as any).upc ?? 0)?.['emax']) {
      ((s as any).upc = (s as any).upc ?? {})['id'] = qspUntranslated(s, "events_list[upc['ei']]", { location: "calendar_query" });
      if (((s as any).upc ?? 0)?.['id'] !== '') {
        qspCall(s, 'calendar_events', 'get_event', (((s as any).upc ?? 0)?.['id']));
        qspCall(s, 'calendar_events', 'load_new_ev', 1);
        ((s as any).upc = (s as any).upc ?? {})['search_from'] = Math.max((((s as any).upc ?? {})?.['today'] ?? 0) - 1, (((s as any).event_vars ?? {})?.['daystart'] ?? 0) - 1);
        if (((s as any).new_ev ?? 0)?.['recur'] === '') {
          ((s as any).upc = (s as any).upc ?? {})['occ'] = ((((s as any).new_ev ?? 0)?.['daystart'] >= ((s as any).upc ?? 0)?.['search_from'] + 1) ? ((((s as any).new_ev ?? 0)?.['daystart'])) : ((-1)));
        } else {
          ((s as any).upc = (s as any).upc ?? {})['occ'] = qspFunc(s, 'calendar_events', 'next_occurrence_daystart', (((s as any).upc ?? 0)?.['search_from']));
        }
        if (((s as any).upc ?? 0)?.['occ'] === ((s as any).upc ?? 0)?.['today']  &&  ((s as any).event_vars ?? 0)?.['all_day'] === 0) {
          ((s as any).upc = (s as any).upc ?? {})['ets'] = ((((s as any).event_vars ?? 0)?.['flex_type'] === 1) ? ((((s as any).event_vars ?? 0)?.['window_start_ts'])) : ((((s as any).event_vars ?? 0)?.['start_ts'])));
          if (((s as any).upc ?? 0)?.['ets'] <= ((s as any).upc ?? 0)?.['cur_ts']) {
            ((s as any).upc = (s as any).upc ?? {})['occ'] = qspFunc(s, 'calendar_events', 'next_occurrence_daystart', (((s as any).upc ?? 0)?.['occ']));
          }
        }
        if (((s as any).upc ?? 0)?.['occ'] >= 0) {
          ((s as any).upc = (s as any).upc ?? {})['sort_ts'] = ((((s as any).event_vars ?? 0)?.['all_day'] === 1) ? (0) : (((((s as any).event_vars ?? 0)?.['flex_type'] === 1) ? ((((s as any).event_vars ?? 0)?.['window_start_ts'])) : ((((s as any).event_vars ?? 0)?.['start_ts'])))));
          ((s as any).upc = (s as any).upc ?? {})['do_insert'] = 0;
          if (((s as any).upc ?? 0)?.['count'] < ((s as any).upc ?? 0)?.['max']) {
            ((s as any).upc = (s as any).upc ?? {})['ins'] = (((s as any).upc ?? 0)?.['count']);
            ((s as any).upc = (s as any).upc ?? {})['count'] = ((s as any).upc['count'] ?? 0) + (1);
            ((s as any).upc = (s as any).upc ?? {})['do_insert'] = 1;
          } else {
            if (((s as any).upc ?? 0)?.['occ'] < ((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['count'] - 1]  ||  (((s as any).upc ?? 0)?.['occ'] === ((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['count'] - 1]  &&  ((s as any).upc ?? 0)?.['sort_ts'] < ((s as any).upcoming_ts ?? 0)[((s as any).upc ?? 0)?.['count'] - 1])) {
              ((s as any).upc = (s as any).upc ?? {})['ins'] = (((s as any).upc ?? {})?.['count'] ?? 0) - 1;
              ((s as any).upc = (s as any).upc ?? {})['do_insert'] = 1;
            }
          }
          if (((s as any).upc ?? 0)?.['do_insert'] === 1) {
            ((s as any).upcoming_ids = (s as any).upcoming_ids ?? {})[(((s as any).upc ?? 0)?.['ins'])] = (((s as any).upc ?? 0)?.['id']);
            ((s as any).upcoming_days = (s as any).upcoming_days ?? {})[(((s as any).upc ?? 0)?.['ins'])] = (((s as any).upc ?? 0)?.['occ']);
            ((s as any).upcoming_ts = (s as any).upcoming_ts ?? {})[(((s as any).upc ?? 0)?.['ins'])] = (((s as any).upc ?? 0)?.['sort_ts']);
            ((s as any).upc = (s as any).upc ?? {})['bi'] = (((s as any).upc ?? 0)?.['ins']);
            while (true) {
              if (((s as any).upc ?? 0)?.['bi'] > 0) {
                ((s as any).upc = (s as any).upc ?? {})['bj'] = (((s as any).upc ?? {})?.['bi'] ?? 0) - 1;
                if (((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['bi']] < ((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['bj']]  ||  (((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['bi']] === ((s as any).upcoming_days ?? 0)[((s as any).upc ?? 0)?.['bj']]  &&  ((s as any).upcoming_ts ?? 0)[((s as any).upc ?? 0)?.['bi']] < ((s as any).upcoming_ts ?? 0)[((s as any).upc ?? 0)?.['bj']])) {
                  ((s as any).upc = (s as any).upc ?? {})['tmp'] = qspUntranslated(s, "upcoming_ids[upc['bj']]", { location: "calendar_query" });
                  ((s as any).upc = (s as any).upc ?? {})['tmp_d'] = qspUntranslated(s, "upcoming_days[upc['bj']]", { location: "calendar_query" });
                  ((s as any).upc = (s as any).upc ?? {})['tmp_t'] = qspUntranslated(s, "upcoming_ts[upc['bj']]", { location: "calendar_query" });
                  ((s as any).upcoming_ids = (s as any).upcoming_ids ?? {})[(((s as any).upc ?? 0)?.['bj'])] = qspUntranslated(s, "upcoming_ids[upc['bi']]", { location: "calendar_query" });
                  ((s as any).upcoming_days = (s as any).upcoming_days ?? {})[(((s as any).upc ?? 0)?.['bj'])] = qspUntranslated(s, "upcoming_days[upc['bi']]", { location: "calendar_query" });
                  ((s as any).upcoming_ts = (s as any).upcoming_ts ?? {})[(((s as any).upc ?? 0)?.['bj'])] = qspUntranslated(s, "upcoming_ts[upc['bi']]", { location: "calendar_query" });
                  ((s as any).upcoming_ids = (s as any).upcoming_ids ?? {})[(((s as any).upc ?? 0)?.['bi'])] = (((s as any).upc ?? 0)?.['tmp']);
                  ((s as any).upcoming_days = (s as any).upcoming_days ?? {})[(((s as any).upc ?? 0)?.['bi'])] = (((s as any).upc ?? 0)?.['tmp_d']);
                  ((s as any).upcoming_ts = (s as any).upcoming_ts ?? {})[(((s as any).upc ?? 0)?.['bi'])] = (((s as any).upc ?? 0)?.['tmp_t']);
                  ((s as any).upc = (s as any).upc ?? {})['bi'] = ((s as any).upc['bi'] ?? 0) - (1);
                  break;
                }
              }
            }
          }
        }
      }
      ((s as any).upc = (s as any).upc ?? {})['ei'] = ((s as any).upc['ei'] ?? 0) + (1);
      break;
    }
    (s as any).upcoming_count = (((s as any).upc ?? 0)?.['count']);
    (s as any).upc = undefined;
    return;
  }
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
