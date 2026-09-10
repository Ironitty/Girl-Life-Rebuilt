import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBuildWeekSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_week_start = qspUntranslated(s, "ARGS[1]", { location: "calendar_schedule" });
  (s as any).week_schedule['start_daystart'] = ((s as any).temp_week_start ?? 0);
  qspCall(s, 'calendar_schedule', 'collect_events_for_week', ((s as any).temp_week_start ?? 0));
  qspCall(s, 'calendar_schedule', 'place_allday_events');
  (s as any).temp_d = 1;
  // TODO-QSP: :loop_days
  if (((s as any).temp_d ?? 0) <= 7) {
    qspCall(s, 'calendar_schedule', 'place_day_events', ((s as any).temp_d ?? 0));
    (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
    // TODO-QSP: jump 'loop_days'
  }
  qspCall(s, 'calendar_schedule', 'assign_columns');
  qspCall(s, 'calendar_schedule', 'cleanup_temp_structures');
  return;
  scene.build();
}

function enterCollectEventsForWeek(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_week_start = qspUntranslated(s, "ARGS[1]", { location: "calendar_schedule" });
  (s as any).temp_allday_count = 0;
  (s as any).temp_d = 1;
  // TODO-QSP: :loop_collect_days
  if (((s as any).temp_d ?? 0) <= 7) {
    (s as any).temp_daystart = ((s as any).temp_week_start ?? 0) + (((s as any).temp_d ?? 0) - 1);
    (s as any).week_schedule['days=' + String((s as any).temp_d ?? '') + ', date'] = ((s as any).temp_daystart ?? 0);
    qspCall(s, 'calendar_query', 'get_events_for_day', ((s as any).temp_daystart ?? 0));
    (s as any).temp_static_count = 0;
    (s as any).temp_flex_count = 0;
    (s as any).temp_i = 0;
    // TODO-QSP: :loop_categorize
    if (((s as any).temp_i ?? 0) < ((s as any).arrsize ?? 0)('query_events_for_day')) {
      qspCall(s, 'calendar_events', 'get_event', ((s as any).temp_evt_id ?? 0));
      if (((s as any).event_vars ?? 0)?.['all_day'] === 1) {
        (s as any).temp_found = 0;
        (s as any).temp_check = 0;
        // TODO-QSP: :check_allday_dup
        if (((s as any).temp_check ?? 0) < ((s as any).temp_allday_count ?? 0)) {
          if (((s as any).allday_events_week ?? 0)?.[String((s as any).temp_check ?? 0)] === ((s as any).temp_evt_id ?? 0)) {
            (s as any).temp_found = 1;
            // TODO-QSP: jump 'skip_allday_dup'
          }
          (s as any).temp_check = ((s as any).temp_check ?? 0) + (1);
          // TODO-QSP: jump 'check_allday_dup'
        }
        // TODO-QSP: :skip_allday_dup
        if (((s as any).temp_found ?? 0) === 0) {
          // TODO-QSP: $allday_events_week[temp_allday_count] = $temp_evt_id
          (s as any).temp_allday_count = ((s as any).temp_allday_count ?? 0) + (1);
        }
      } else {
        if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
          (s as any).event_range_cache['' + String((s as any).$temp_evt_id ?? '') + ', orig_start'] = ((s as any).event_vars ?? 0)?.['window_start_ts'];
          (s as any).event_range_cache['' + String((s as any).$temp_evt_id ?? '') + ', orig_end'] = ((s as any).event_vars ?? 0)?.['window_end_ts'];
          (s as any).event_range_cache['' + String((s as any).$temp_evt_id ?? '') + ', duration'] = ((s as any).event_vars ?? 0)?.['duration_ts'];
          (s as any).event_range_cache['' + String((s as any).$temp_evt_id ?? '') + ', priority'] = ((s as any).event_vars ?? 0)?.['priority'];
          // TODO-QSP: dyneval('$flexible_events_day_<<temp_d>>[<<temp_flex_count>>] = $temp_evt_id')
          (s as any).temp_flex_count = ((s as any).temp_flex_count ?? 0) + (1);
        } else {
          (s as any).temp_start = ((s as any).event_vars ?? 0)?.['start_ts'];
          (s as any).temp_end = ((s as any).temp_start ?? 0) + ((s as any).event_vars ?? 0)?.['duration_ts'] - 1;
          if (((s as any).temp_end ?? 0) > 95) {
            (s as any).temp_end = 95;
          }
          (s as any).event_range_cache['' + String((s as any).$temp_evt_id ?? '') + ', start'] = ((s as any).temp_start ?? 0);
          (s as any).event_range_cache['' + String((s as any).$temp_evt_id ?? '') + ', end'] = ((s as any).temp_end ?? 0);
          (s as any).event_range_cache['' + String((s as any).$temp_evt_id ?? '') + ', duration'] = ((s as any).temp_end ?? 0) - ((s as any).temp_start ?? 0) + 1;
          (s as any).event_range_cache['' + String((s as any).$temp_evt_id ?? '') + ', priority'] = ((s as any).event_vars ?? 0)?.['priority'];
          // TODO-QSP: dyneval('$static_events_day_<<temp_d>>[<<temp_static_count>>] = $temp_evt_id')
          (s as any).temp_static_count = ((s as any).temp_static_count ?? 0) + (1);
        }
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      // TODO-QSP: jump 'loop_categorize'
    }
    (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
    // TODO-QSP: jump 'loop_collect_days'
  }
  return;
  scene.build();
}

function enterPlaceAlldayEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_allday_count = 0;
  if (((s as any).temp_allday_count ?? 0) === 0) {
    // TODO-QSP: exit
  }
  (s as any).temp_i = 0;
  // TODO-QSP: :loop_build_spans
  if (((s as any).temp_i ?? 0) < ((s as any).temp_allday_count ?? 0)) {
    (s as any).temp_first_day = (-1);
    (s as any).temp_last_day = (-1);
    (s as any).temp_d = 1;
    // TODO-QSP: :loop_find_span
    if (((s as any).temp_d ?? 0) <= 7) {
      (s as any).temp_daystart = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', date'];
      (s as any).temp_occurs = qspFunc(s, 'calendar_events', 'event_occurs_in_day', ((s as any).temp_evt_id ?? 0), ((s as any).temp_daystart ?? 0));
      if (((s as any).temp_occurs ?? 0) === 1) {
        if (((s as any).temp_first_day ?? 0) === -1) {
          (s as any).temp_first_day = ((s as any).temp_d ?? 0);
        }
        (s as any).temp_last_day = ((s as any).temp_d ?? 0);
      }
      (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
      // TODO-QSP: jump 'loop_find_span'
    }
    (s as any).allday_spans['' + String((s as any).temp_i ?? '') + ', first'] = 0;
    (s as any).allday_spans['' + String((s as any).temp_i ?? '') + ', last'] = 0;
    (s as any).allday_spans['' + String((s as any).temp_i ?? '') + ', length'] = ((s as any).temp_last_day ?? 0) - ((s as any).temp_first_day ?? 0) + 1;
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    // TODO-QSP: jump 'loop_build_spans'
  }
  (s as any).temp_swapped = 1;
  // TODO-QSP: :loop_sort
  if (((s as any).temp_swapped ?? 0) === 1) {
    (s as any).temp_swapped = 0;
    (s as any).temp_i = 0;
    // TODO-QSP: :loop_sort_pass
    if (((s as any).temp_i ?? 0) < ((s as any).temp_allday_count ?? 0) - 1) {
      if (((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', length'] < ((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)+1) + ', length']) {
        // TODO-QSP: $allday_events_week[temp_i] = $allday_events_week[temp_i+1]
        // TODO-QSP: $allday_events_week[temp_i+1] = $temp_swap
        (s as any).temp_swap_first = ((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', first'];
        (s as any).temp_swap_last = ((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', last'];
        (s as any).temp_swap_len = ((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', length'];
        (s as any).allday_spans['' + String((s as any).temp_i ?? '') + ', first'] = ((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)+1) + ', first'];
        (s as any).allday_spans['' + String((s as any).temp_i ?? '') + ', last'] = ((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)+1) + ', last'];
        (s as any).allday_spans['' + String((s as any).temp_i ?? '') + ', length'] = ((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)+1) + ', length'];
        (s as any).allday_spans['' + String((s as any).temp_i+1 ?? '') + ', first'] = ((s as any).temp_swap_first ?? 0);
        (s as any).allday_spans['' + String((s as any).temp_i+1 ?? '') + ', last'] = ((s as any).temp_swap_last ?? 0);
        (s as any).allday_spans['' + String((s as any).temp_i+1 ?? '') + ', length'] = ((s as any).temp_swap_len ?? 0);
        (s as any).temp_swapped = 1;
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      // TODO-QSP: jump 'loop_sort_pass'
    }
    // TODO-QSP: jump 'loop_sort'
  }
  (s as any).temp_r = 0;
  // TODO-QSP: :init_rows
  if (((s as any).temp_r ?? 0) < 5) {
    (s as any).row_last_occupied[temp_r] = 0;
    (s as any).row_first_occupied[temp_r] = 8;
    (s as any).temp_r = ((s as any).temp_r ?? 0) + (1);
    // TODO-QSP: jump 'init_rows'
  }
  (s as any).temp_max_row = (-1);
  (s as any).temp_i = 0;
  // TODO-QSP: :loop_place_events
  if (((s as any).temp_i ?? 0) < ((s as any).temp_allday_count ?? 0)) {
    qspCall(s, 'calendar_events', 'get_event', ((s as any).temp_evt_id ?? 0));
    (s as any).temp_first_day = ((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', first'];
    (s as any).temp_last_day = ((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', last'];
    (s as any).temp_span_days = ((s as any).temp_last_day ?? 0) - ((s as any).temp_first_day ?? 0) + 1;
    (s as any).temp_r = 0;
    // TODO-QSP: :find_row
    if (((s as any).temp_r ?? 0) < 5) {
      if (((s as any).temp_last_day ?? 0) < ((s as any).row_first_occupied ?? 0)?.[String((s as any).temp_r ?? 0)]  ||  ((s as any).temp_first_day ?? 0) > ((s as any).row_last_occupied ?? 0)?.[String((s as any).temp_r ?? 0)]) {
        (s as any).temp_d = ((s as any).temp_first_day ?? 0);
        // TODO-QSP: :place_days
        if (((s as any).temp_d ?? 0) <= ((s as any).temp_last_day ?? 0)) {
          if (((s as any).temp_d ?? 0) === ((s as any).temp_first_day ?? 0)) {
            (s as any).week_schedule['days=' + String((s as any).temp_d ?? '') + ', allday=' + String((s as any).temp_r ?? '') + ', id'] = ((s as any).temp_evt_id ?? 0);
            (s as any).week_schedule['days=' + String((s as any).temp_d ?? '') + ', allday=' + String((s as any).temp_r ?? '') + ', title'] = ((s as any).event_vars ?? 0)?.['title'];
            (s as any).week_schedule['days=' + String((s as any).temp_d ?? '') + ', allday=' + String((s as any).temp_r ?? '') + ', color'] = ((s as any).event_vars ?? 0)?.['color'];
            (s as any).week_schedule['days=' + String((s as any).temp_d ?? '') + ', allday=' + String((s as any).temp_r ?? '') + ', colspan'] = ((s as any).temp_span_days ?? 0);
          } else {
            (s as any).week_schedule['days=' + String((s as any).temp_d ?? '') + ', allday=' + String((s as any).temp_r ?? '') + ', id'] = '';
            (s as any).week_schedule['days=' + String((s as any).temp_d ?? '') + ', allday=' + String((s as any).temp_r ?? '') + ', continued'] = 1;
          }
          (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
          // TODO-QSP: jump 'place_days'
        }
        (s as any).row_first_occupied[temp_r] = 0;
        (s as any).row_last_occupied[temp_r] = 0;
        if (((s as any).temp_r ?? 0) > ((s as any).temp_max_row ?? 0)) {
          (s as any).temp_max_row = ((s as any).temp_r ?? 0);
        }
        // TODO-QSP: jump 'next_allday'
      }
      (s as any).temp_r = ((s as any).temp_r ?? 0) + (1);
      // TODO-QSP: jump 'find_row'
    }
    // TODO-QSP: :next_allday
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    // TODO-QSP: jump 'loop_place_events'
  }
  (s as any).temp_max_rows = ((s as any).temp_max_row ?? 0) + 1;
  if (((s as any).temp_max_rows ?? 0) < 0) {
    (s as any).temp_max_rows = 0;
  }
  (s as any).temp_d = 1;
  // TODO-QSP: :set_max_rows
  if (((s as any).temp_d ?? 0) <= 7) {
    (s as any).week_schedule['days=' + String((s as any).temp_d ?? '') + ', max_allday_rows'] = ((s as any).temp_max_rows ?? 0);
    (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
    // TODO-QSP: jump 'set_max_rows'
  }
  return;
  scene.build();
}

function enterPlaceDayEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = qspUntranslated(s, "ARGS[1]", { location: "calendar_schedule" });
  qspCall(s, 'calendar_schedule', 'place_static_events', ((s as any).temp_d ?? 0));
  qspCall(s, 'calendar_schedule', 'place_flexible_events', ((s as any).temp_d ?? 0));
  return;
  scene.build();
}

function enterPlaceStaticEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = qspUntranslated(s, "ARGS[1]", { location: "calendar_schedule" });
  (s as any).temp_priority = 2;
  // TODO-QSP: :loop_priority_pse
  if (((s as any).temp_priority ?? 0) >= 0) {
    (s as any).temp_static_count = 0;
    (s as any).temp_i = 0;
    // TODO-QSP: :loop_events_pse
    if (((s as any).temp_i ?? 0) < ((s as any).temp_static_count ?? 0)) {
      (s as any).temp_evt_priority = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', priority'];
      if (((s as any).temp_evt_priority ?? 0) === ((s as any).temp_priority ?? 0)) {
        qspCall(s, 'calendar_events', 'get_event', ((s as any).temp_evt_id ?? 0));
        (s as any).temp_start_ts = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', start'];
        (s as any).temp_end_ts = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', end'];
        qspCall(s, 'calendar_schedule', 'add_event_to_schedule', ((s as any).temp_d ?? 0), ((s as any).temp_start_ts ?? 0), ((s as any).temp_evt_id ?? 0));
        (s as any).temp_this_event_index = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_start_ts ?? 0)) + ', event_count'] - 1;
        (s as any).temp_check_t = ((s as any).temp_end_ts ?? 0);
        // TODO-QSP: :loop_check_conflicts
        if (((s as any).temp_check_t ?? 0) >= 0) {
          (s as any).temp_check_count = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', event_count'];
          if (((s as any).temp_check_count ?? 0) > 0) {
            (s as any).temp_check_e = 0;
            // TODO-QSP: :loop_check_events
            if (((s as any).temp_check_e ?? 0) < ((s as any).temp_check_count ?? 0)) {
              if (((s as any).temp_other_id ?? 0) !== ((s as any).temp_evt_id ?? 0)) {
                (s as any).temp_overlaps = qspFunc(s, 'calendar_schedule', 'check_overlap', ((s as any).temp_evt_id ?? 0), ((s as any).temp_other_id ?? 0));
                if (((s as any).temp_overlaps ?? 0) === 1) {
                  (s as any).temp_other_priority = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', priority'];
                  if (((s as any).temp_other_priority ?? 0) > ((s as any).temp_evt_priority ?? 0)) {
                    (s as any).week_schedule['days=' + String((s as any).temp_d ?? '') + ', timeslots=' + String((s as any).temp_start_ts ?? '') + ', events=' + String((s as any).temp_this_event_index ?? '') + ', is_hidden'] = 1;
                    qspCall(s, 'calendar_schedule', 'change_busy_timeslots', ((s as any).temp_d ?? 0), ((s as any).temp_start_ts ?? 0), ((s as any).temp_this_event_index ?? 0), (-1));
                    // TODO-QSP: jump 'skip_conflict_check'
                  } else {
                    (s as any).week_schedule['days=' + String((s as any).temp_d ?? '') + ', timeslots=' + String((s as any).temp_check_t ?? '') + ', events=' + String((s as any).temp_check_e ?? '') + ', is_hidden'] = 1;
                    qspCall(s, 'calendar_schedule', 'change_busy_timeslots', ((s as any).temp_d ?? 0), ((s as any).temp_check_t ?? 0), ((s as any).temp_check_e ?? 0), (-1));
                  }
                }
              }
              (s as any).temp_check_e = ((s as any).temp_check_e ?? 0) + (1);
              // TODO-QSP: jump 'loop_check_events'
            }
          }
          (s as any).temp_check_t = ((s as any).temp_check_t ?? 0) - (1);
          // TODO-QSP: jump 'loop_check_conflicts'
        }
        // TODO-QSP: :skip_conflict_check
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      // TODO-QSP: jump 'loop_events_pse'
    }
    (s as any).temp_priority = ((s as any).temp_priority ?? 0) - (1);
    // TODO-QSP: jump 'loop_priority_pse'
  }
  return;
  scene.build();
}

function enterPlaceFlexibleEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = qspUntranslated(s, "ARGS[1]", { location: "calendar_schedule" });
  (s as any).temp_priority = 2;
  // TODO-QSP: :loop_priority_pfe
  if (((s as any).temp_priority ?? 0) >= 0) {
    (s as any).temp_flex_count = 0;
    (s as any).temp_i = 0;
    // TODO-QSP: :loop_events_pfe
    if (((s as any).temp_i ?? 0) < ((s as any).temp_flex_count ?? 0)) {
      (s as any).temp_evt_priority = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', priority'];
      if (((s as any).temp_evt_priority ?? 0) === ((s as any).temp_priority ?? 0)) {
        qspCall(s, 'calendar_schedule', 'find_best_placement', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0), 'conflict_free');
        if (((s as any).placement_found ?? 0) === 1) {
          qspCall(s, 'calendar_schedule', 'apply_placement', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0));
          (s as any).placement_state['' + String((s as any).$temp_evt_id ?? '') + ', attempt'] = 1;
          // TODO-QSP: jump 'next_flex_event'
        }
        qspCall(s, 'calendar_schedule', 'find_best_placement', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0), 'hide_lower');
        if (((s as any).placement_found ?? 0) === 1) {
          qspCall(s, 'calendar_schedule', 'apply_placement', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0));
          qspCall(s, 'calendar_schedule', 'hide_overlapping_lower_priority', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0));
          (s as any).placement_state['' + String((s as any).$temp_evt_id ?? '') + ', attempt'] = 2;
          // TODO-QSP: jump 'next_flex_event'
        }
        qspCall(s, 'calendar_schedule', 'find_best_placement', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0), 'coexist_same');
        if (((s as any).placement_found ?? 0) === 1) {
          qspCall(s, 'calendar_schedule', 'apply_placement', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0));
          (s as any).placement_state['' + String((s as any).$temp_evt_id ?? '') + ', attempt'] = 3;
          // TODO-QSP: jump 'next_flex_event'
        }
        (s as any).placement_state['' + String((s as any).$temp_evt_id ?? '') + ', attempt'] = 0;
        // TODO-QSP: :next_flex_event
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      // TODO-QSP: jump 'loop_events_pfe'
    }
    (s as any).temp_priority = ((s as any).temp_priority ?? 0) - (1);
    // TODO-QSP: jump 'loop_priority_pfe'
  }
  return;
  scene.build();
}

function enterCheckOverlap(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_start1 = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt1 ?? 0)) + ', start'];
  (s as any).temp_end1 = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt1 ?? 0)) + ', end'];
  (s as any).temp_start2 = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt2 ?? 0)) + ', start'];
  (s as any).temp_end2 = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt2 ?? 0)) + ', end'];
  if (((s as any).temp_start1 ?? 0) <= ((s as any).temp_end2 ?? 0)  &&  ((s as any).temp_end1 ?? 0) >= ((s as any).temp_start2 ?? 0)) {
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsRangeBlocked(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = qspUntranslated(s, "ARGS[1]", { location: "calendar_schedule" });
  (s as any).temp_range_start = qspUntranslated(s, "ARGS[2]", { location: "calendar_schedule" });
  (s as any).temp_range_end = qspUntranslated(s, "ARGS[3]", { location: "calendar_schedule" });
  (s as any).temp_evt_priority = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', priority'];
  (s as any).temp_check_t = ((s as any).temp_range_end ?? 0);
  // TODO-QSP: :loop_scan_backward
  if (((s as any).temp_check_t ?? 0) >= 0) {
    (s as any).temp_event_count = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', event_count'];
    if (((s as any).temp_event_count ?? 0) > 0) {
      (s as any).temp_e = 0;
      // TODO-QSP: :loop_scan_events
      if (((s as any).temp_e ?? 0) < ((s as any).temp_event_count ?? 0)) {
        (s as any).temp_is_hidden = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_hidden'];
        if (((s as any).temp_other_id ?? 0) !== ((s as any).temp_evt_id ?? 0)  &&  ((s as any).temp_is_hidden ?? 0) === 0) {
          (s as any).temp_other_is_flex = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_flex'];
          if (((s as any).temp_other_is_flex ?? 0) === 1) {
            (s as any).temp_other_start = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', window_start'];
            (s as any).temp_other_end = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', window_end'];
          } else {
            (s as any).temp_other_start = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', start'];
            (s as any).temp_other_end = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', end'];
          }
          if (((s as any).temp_other_start ?? 0) <= ((s as any).temp_range_end ?? 0)  &&  ((s as any).temp_other_end ?? 0) >= ((s as any).temp_range_start ?? 0)) {
            (s as any).temp_other_priority = ((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', priority'];
            if (((s as any).temp_mode ?? 0) === 'conflict_free') {
              (s as any).result = 1;
              return;
            } else {
              if (((s as any).temp_other_priority ?? 0) >= ((s as any).temp_evt_priority ?? 0)) {
                (s as any).result = 1;
                return;
              }
              if (((s as any).temp_mode ?? 0) === 'coexist_same') {
                if (((s as any).temp_other_priority ?? 0) > ((s as any).temp_evt_priority ?? 0)) {
                  (s as any).result = 1;
                  return;
                }
              }
            }
          }
          (s as any).temp_e = ((s as any).temp_e ?? 0) + (1);
          // TODO-QSP: jump 'loop_scan_events'
        }
      }
      (s as any).temp_check_t = ((s as any).temp_check_t ?? 0) - (1);
      // TODO-QSP: jump 'loop_scan_backward'
    }
    (s as any).result = 0;
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'build_week_schedule':
      enterBuildWeekSchedule(s, scene);
      break;
    case 'collect_events_for_week':
      enterCollectEventsForWeek(s, scene);
      break;
    case 'place_allday_events':
      enterPlaceAlldayEvents(s, scene);
      break;
    case 'place_day_events':
      enterPlaceDayEvents(s, scene);
      break;
    case 'place_static_events':
      enterPlaceStaticEvents(s, scene);
      break;
    case 'place_flexible_events':
      enterPlaceFlexibleEvents(s, scene);
      break;
    case 'check_overlap':
      enterCheckOverlap(s, scene);
      break;
    case 'is_range_blocked':
      enterIsRangeBlocked(s, scene);
      break;
    default:
      enterBuildWeekSchedule(s, scene);
      break;
  }
}

export const calendar_schedule: LocationDef = {
  name: 'calendar_schedule',
  region: 'other',
  enter: enter,
};
