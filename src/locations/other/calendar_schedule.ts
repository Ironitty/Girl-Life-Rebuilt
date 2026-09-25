import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBuildWeekSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_week_start = ((s as any).locArgs?.[1] ?? 0);
  (s as any).week_schedule = undefined;
  (s as any).event_range_cache = undefined;
  (s as any).placement_state = undefined;
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['start_daystart'] = ((s as any).temp_week_start ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_week_start ?? 0)]; enterCollectEventsForWeek(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPlaceAlldayEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_d = 1;
  while (true) {
    if (((s as any).temp_d ?? 0) <= 7) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0)]; enterPlaceDayEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
      break;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAssignColumns(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanupTempStructures(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  scene.build();
}

function enterCollectEventsForWeek(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_week_start = ((s as any).locArgs?.[1] ?? 0);
  (s as any).allday_events_week = undefined;
  (s as any).temp_allday_count = 0;
  (s as any).temp_d = 1;
  while (true) {
    if (((s as any).temp_d ?? 0) <= 7) {
      (s as any).temp_daystart = ((s as any).temp_week_start ?? 0) + (((s as any).temp_d ?? 0) - 1);
      ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', date'] = ((s as any).temp_daystart ?? 0);
      qspCall(s, 'calendar_query', 'get_events_for_day', ((s as any).temp_daystart ?? 0));
      delete (s as any)['static_events_day_' + ((s as any).temp_d ?? 0) + ''];
      delete (s as any)['flexible_events_day_' + ((s as any).temp_d ?? 0) + ''];
      (s as any).temp_static_count = 0;
      (s as any).temp_flex_count = 0;
      (s as any).temp_i = 0;
      while (true) {
        if (((s as any).temp_i ?? 0) < Object.keys((s as any).query_events_for_day ?? {}).length) {
          (s as any).temp_evt_id = (((s as any).query_events_for_day ?? 0)?.[String((s as any).temp_i ?? 0)] ?? 0);
          qspCall(s, 'calendar_events', 'get_event', ((s as any).temp_evt_id ?? 0));
          if (((s as any).event_vars ?? 0)?.['all_day'] === 1) {
            while (true) {
              (s as any).temp_found = 0;
              (s as any).temp_check = 0;
              while (true) {
                if (((s as any).temp_check ?? 0) < ((s as any).temp_allday_count ?? 0)) {
                  if (((s as any).allday_events_week ?? 0)?.[String((s as any).temp_check ?? 0)] === ((s as any).temp_evt_id ?? 0)) {
                    (s as any).temp_found = 1;
                    break;
                  }
                  (s as any).temp_check = ((s as any).temp_check ?? 0) + (1);
                  break;
                }
              }
              break;
            }
            // LABEL: skip_allday_dup
            if ((!((s as any).temp_found ?? 0))) {
              ((s as any).allday_events_week = (s as any).allday_events_week ?? {})[String((s as any).temp_allday_count ?? 0)] = ((s as any).temp_evt_id ?? 0);
              (s as any).temp_allday_count = ((s as any).temp_allday_count ?? 0) + (1);
            }
          } else {
            if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
              ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', orig_start'] = (((s as any).event_vars ?? 0)?.['window_start_ts']);
              ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', orig_end'] = (((s as any).event_vars ?? 0)?.['window_end_ts']);
              ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', duration'] = (((s as any).event_vars ?? 0)?.['duration_ts']);
              ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', priority'] = (((s as any).event_vars ?? 0)?.['priority']);
              // TODO-QSP: dyneval('$flexible_events_day_<<temp_d>>[<<temp_flex_count>>] = $temp_evt_id')
              (s as any).temp_flex_count = ((s as any).temp_flex_count ?? 0) + (1);
            } else {
              (s as any).temp_start = (((s as any).event_vars ?? 0)?.['start_ts']);
              (s as any).temp_end = ((s as any).temp_start ?? 0) + (((s as any).event_vars ?? {})?.['duration_ts'] ?? 0) - 1;
              if (((s as any).temp_end ?? 0) > 95) {
                (s as any).temp_end = 95;
              }
              ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', start'] = ((s as any).temp_start ?? 0);
              ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', end'] = ((s as any).temp_end ?? 0);
              ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', duration'] = ((s as any).temp_end ?? 0) - ((s as any).temp_start ?? 0) + 1;
              ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', priority'] = (((s as any).event_vars ?? 0)?.['priority']);
              // TODO-QSP: dyneval('$static_events_day_<<temp_d>>[<<temp_static_count>>] = $temp_evt_id')
              (s as any).temp_static_count = ((s as any).temp_static_count ?? 0) + (1);
            }
          }
          (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
          break;
        }
        (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
        break;
      }
    }
    return;
  }
  scene.build();
}

function enterPlaceAlldayEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_allday_count = 0;
  if ((!((s as any).temp_allday_count ?? 0))) {
    return;
  }
  (s as any).allday_spans = undefined;
  (s as any).temp_i = 0;
  while (true) {
    if (((s as any).temp_i ?? 0) < ((s as any).temp_allday_count ?? 0)) {
      (s as any).temp_evt_id = (((s as any).allday_events_week ?? 0)?.[String((s as any).temp_i ?? 0)] ?? 0);
      (s as any).temp_first_day = (-1);
      (s as any).temp_last_day = (-1);
      (s as any).temp_d = 1;
      while (true) {
        if (((s as any).temp_d ?? 0) <= 7) {
          (s as any).temp_daystart = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', date']);
          (s as any).temp_occurs = qspFunc(s, 'calendar_events', 'event_occurs_in_day', ((s as any).temp_evt_id ?? 0), ((s as any).temp_daystart ?? 0));
          if (((s as any).temp_occurs ?? 0) === 1) {
            if (((s as any).temp_first_day ?? 0) === -1) {
              (s as any).temp_first_day = ((s as any).temp_d ?? 0);
            }
            (s as any).temp_last_day = ((s as any).temp_d ?? 0);
          }
          (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
          break;
        }
        ((s as any).allday_spans = (s as any).allday_spans ?? {})[String(((s as any).temp_i ?? 0)) + ', first'] = Math.max(((s as any).temp_first_day ?? 0), 1);
        ((s as any).allday_spans = (s as any).allday_spans ?? {})[String(((s as any).temp_i ?? 0)) + ', last'] = Math.min(((s as any).temp_last_day ?? 0), 7);
        ((s as any).allday_spans = (s as any).allday_spans ?? {})[String(((s as any).temp_i ?? 0)) + ', length'] = ((s as any).temp_last_day ?? 0) - ((s as any).temp_first_day ?? 0) + 1;
        (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
        break;
      }
    }
    (s as any).temp_swapped = 1;
    while (true) {
      if (((s as any).temp_swapped ?? 0) === 1) {
        (s as any).temp_swapped = 0;
        (s as any).temp_i = 0;
        while (true) {
          if (((s as any).temp_i ?? 0) < ((s as any).temp_allday_count ?? 0) - 1) {
            if (((s as any).allday_spans ?? 0)[(((s as any).temp_i ?? 0)) + ', length'] < ((s as any).allday_spans ?? 0)[(((s as any).temp_i ?? 0)+1) + ', length']) {
              (s as any).temp_swap = (((s as any).allday_events_week ?? 0)?.[String((s as any).temp_i ?? 0)] ?? 0);
              ((s as any).allday_events_week = (s as any).allday_events_week ?? {})[String((s as any).temp_i ?? 0)] = (((s as any).allday_events_week ?? 0)?.[((s as any).temp_i ?? 0)+1] ?? 0);
              ((s as any).allday_events_week = (s as any).allday_events_week ?? {})[((s as any).temp_i ?? 0)+1] = ((s as any).temp_swap ?? 0);
              (s as any).temp_swap_first = (((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', first']);
              (s as any).temp_swap_last = (((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', last']);
              (s as any).temp_swap_len = (((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', length']);
              ((s as any).allday_spans = (s as any).allday_spans ?? {})[String(((s as any).temp_i ?? 0)) + ', first'] = (((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)+1) + ', first']);
              ((s as any).allday_spans = (s as any).allday_spans ?? {})[String(((s as any).temp_i ?? 0)) + ', last'] = (((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)+1) + ', last']);
              ((s as any).allday_spans = (s as any).allday_spans ?? {})[String(((s as any).temp_i ?? 0)) + ', length'] = (((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)+1) + ', length']);
              ((s as any).allday_spans = (s as any).allday_spans ?? {})[String(((s as any).temp_i ?? 0)+1) + ', first'] = ((s as any).temp_swap_first ?? 0);
              ((s as any).allday_spans = (s as any).allday_spans ?? {})[String(((s as any).temp_i ?? 0)+1) + ', last'] = ((s as any).temp_swap_last ?? 0);
              ((s as any).allday_spans = (s as any).allday_spans ?? {})[String(((s as any).temp_i ?? 0)+1) + ', length'] = ((s as any).temp_swap_len ?? 0);
              (s as any).temp_swapped = 1;
            }
            (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
            break;
          }
          break;
        }
      }
      (s as any).temp_r = 0;
      while (true) {
        if (((s as any).temp_r ?? 0) < 5) {
          ((s as any).row_last_occupied = (s as any).row_last_occupied ?? {})[String((s as any).temp_r ?? 0)] = 0;
          ((s as any).row_first_occupied = (s as any).row_first_occupied ?? {})[String((s as any).temp_r ?? 0)] = 8;
          (s as any).temp_r = ((s as any).temp_r ?? 0) + (1);
          break;
        }
        (s as any).temp_max_row = (-1);
        (s as any).temp_i = 0;
        while (true) {
          if (((s as any).temp_i ?? 0) < ((s as any).temp_allday_count ?? 0)) {
            while (true) {
              (s as any).temp_evt_id = (((s as any).allday_events_week ?? 0)?.[String((s as any).temp_i ?? 0)] ?? 0);
              qspCall(s, 'calendar_events', 'get_event', ((s as any).temp_evt_id ?? 0));
              (s as any).temp_first_day = (((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', first']);
              (s as any).temp_last_day = (((s as any).allday_spans ?? 0)?.[String(((s as any).temp_i ?? 0)) + ', last']);
              (s as any).temp_span_days = ((s as any).temp_last_day ?? 0) - ((s as any).temp_first_day ?? 0) + 1;
              (s as any).temp_r = 0;
              while (true) {
                if (((s as any).temp_r ?? 0) < 5) {
                  if (((s as any).temp_last_day ?? 0) < ((s as any).row_first_occupied ?? 0)?.[String((s as any).temp_r ?? 0)]  ||  ((s as any).temp_first_day ?? 0) > ((s as any).row_last_occupied ?? 0)?.[String((s as any).temp_r ?? 0)]) {
                    (s as any).temp_d = ((s as any).temp_first_day ?? 0);
                    while (true) {
                      if (((s as any).temp_d ?? 0) <= ((s as any).temp_last_day ?? 0)) {
                        if (((s as any).temp_d ?? 0) === ((s as any).temp_first_day ?? 0)) {
                          ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', allday=' + String(((s as any).temp_r ?? 0)) + ', id'] = ((s as any).temp_evt_id ?? 0);
                          ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', allday=' + String(((s as any).temp_r ?? 0)) + ', title'] = (((s as any).event_vars ?? 0)?.['title']);
                          ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', allday=' + String(((s as any).temp_r ?? 0)) + ', color'] = (((s as any).event_vars ?? 0)?.['color']);
                          ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', allday=' + String(((s as any).temp_r ?? 0)) + ', colspan'] = ((s as any).temp_span_days ?? 0);
                        } else {
                          ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', allday=' + String(((s as any).temp_r ?? 0)) + ', id'] = '';
                          ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', allday=' + String(((s as any).temp_r ?? 0)) + ', continued'] = 1;
                        }
                        (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
                        break;
                      }
                      ((s as any).row_first_occupied = (s as any).row_first_occupied ?? {})[String((s as any).temp_r ?? 0)] = Math.min((((s as any).row_first_occupied ?? 0)?.[String((s as any).temp_r ?? 0)] ?? 0), ((s as any).temp_first_day ?? 0));
                      ((s as any).row_last_occupied = (s as any).row_last_occupied ?? {})[String((s as any).temp_r ?? 0)] = Math.max((((s as any).row_last_occupied ?? 0)?.[String((s as any).temp_r ?? 0)] ?? 0), ((s as any).temp_last_day ?? 0));
                      if (((s as any).temp_r ?? 0) > ((s as any).temp_max_row ?? 0)) {
                        (s as any).temp_max_row = ((s as any).temp_r ?? 0);
                      }
                      break;
                    }
                  }
                  (s as any).temp_r = ((s as any).temp_r ?? 0) + (1);
                  break;
                }
              }
              break;
            }
            // LABEL: next_allday
            (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
            break;
          }
          (s as any).temp_max_rows = ((s as any).temp_max_row ?? 0) + 1;
          if (((s as any).temp_max_rows ?? 0) < 0) {
            (s as any).temp_max_rows = 0;
          }
          (s as any).temp_d = 1;
          while (true) {
            if (((s as any).temp_d ?? 0) <= 7) {
              ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', max_allday_rows'] = ((s as any).temp_max_rows ?? 0);
              (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
              break;
            }
            (s as any).row_last_occupied = undefined;
            (s as any).row_first_occupied = undefined;
            (s as any).temp_i = undefined;
            (s as any).temp_r = undefined;
            (s as any).temp_d = undefined;
            return;
          }
        }
      }
    }
  }
  scene.build();
}

function enterPlaceDayEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0)]; enterPlaceStaticEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0)]; enterPlaceFlexibleEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterPlaceStaticEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_priority = 2;
  while (true) {
    if (((s as any).temp_priority ?? 0) >= 0) {
      (s as any).temp_static_count = 0;
      (s as any).temp_i = 0;
      while (true) {
        if (((s as any).temp_i ?? 0) < ((s as any).temp_static_count ?? 0)) {
          (s as any).temp_evt_id = 0;
          (s as any).temp_evt_priority = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', priority']);
          if (((s as any).temp_evt_priority ?? 0) === ((s as any).temp_priority ?? 0)) {
            while (true) {
              qspCall(s, 'calendar_events', 'get_event', ((s as any).temp_evt_id ?? 0));
              (s as any).temp_start_ts = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', start']);
              (s as any).temp_end_ts = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', end']);
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_start_ts ?? 0), ((s as any).temp_evt_id ?? 0)]; enterAddEventToSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: temp_this_event_index = week_schedule['days=<<temp_d>>, timeslots=<<temp_start_ts>>, event_count'] - 1
              (s as any).temp_check_t = ((s as any).temp_end_ts ?? 0);
              while (true) {
                if (((s as any).temp_check_t ?? 0) >= 0) {
                  (s as any).temp_check_count = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', event_count']);
                  if (((s as any).temp_check_count ?? 0) > 0) {
                    (s as any).temp_check_e = 0;
                    while (true) {
                      if (((s as any).temp_check_e ?? 0) < ((s as any).temp_check_count ?? 0)) {
                        (s as any).temp_other_id = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', events=' + String(((s as any).temp_check_e ?? 0)) + ', id']);
                        if (((s as any).temp_other_id ?? 0) !== ((s as any).temp_evt_id ?? 0)) {
                          (s as any).temp_overlaps = qspFunc(s, 'calendar_schedule', 'check_overlap', ((s as any).temp_evt_id ?? 0), ((s as any).temp_other_id ?? 0));
                          if (((s as any).temp_overlaps ?? 0) === 1) {
                            (s as any).temp_other_priority = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', priority']);
                            if (((s as any).temp_other_priority ?? 0) > ((s as any).temp_evt_priority ?? 0)) {
                              ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_start_ts ?? 0)) + ', events=' + String(((s as any).temp_this_event_index ?? 0)) + ', is_hidden'] = 1;
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_start_ts ?? 0), ((s as any).temp_this_event_index ?? 0), (-1)]; enterChangeBusyTimeslots(s, scene); (s as any).locArgs = __savedLocArgs; }
                              break;
                            } else {
                              if (((s as any).temp_other_priority ?? 0) < ((s as any).temp_evt_priority ?? 0)) {
                                ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', events=' + String(((s as any).temp_check_e ?? 0)) + ', is_hidden'] = 1;
                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_check_t ?? 0), ((s as any).temp_check_e ?? 0), (-1)]; enterChangeBusyTimeslots(s, scene); (s as any).locArgs = __savedLocArgs; }
                              }
                            }
                          }
                        }
                        (s as any).temp_check_e = ((s as any).temp_check_e ?? 0) + (1);
                        break;
                      }
                    }
                  }
                  (s as any).temp_check_t = ((s as any).temp_check_t ?? 0) - (1);
                  break;
                }
              }
              break;
            }
            // LABEL: skip_conflict_check
          }
          (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
          break;
        }
        (s as any).temp_priority = ((s as any).temp_priority ?? 0) - (1);
        break;
      }
    }
    return;
  }
  scene.build();
}

function enterPlaceFlexibleEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_priority = 2;
  while (true) {
    if (((s as any).temp_priority ?? 0) >= 0) {
      (s as any).temp_flex_count = 0;
      (s as any).temp_i = 0;
      while (true) {
        if (((s as any).temp_i ?? 0) < ((s as any).temp_flex_count ?? 0)) {
          (s as any).temp_evt_id = 0;
          (s as any).temp_evt_priority = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', priority']);
          if (((s as any).temp_evt_priority ?? 0) === ((s as any).temp_priority ?? 0)) {
            while (true) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0), 'conflict_free']; enterFindBestPlacement(s, scene); (s as any).locArgs = __savedLocArgs; }
              if (((s as any).placement_found ?? 0) === 1) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0)]; enterApplyPlacement(s, scene); (s as any).locArgs = __savedLocArgs; }
                ((s as any).placement_state = (s as any).placement_state ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', attempt'] = 1;
                break;
              }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0), 'hide_lower']; enterFindBestPlacement(s, scene); (s as any).locArgs = __savedLocArgs; }
              if (((s as any).placement_found ?? 0) === 1) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0)]; enterApplyPlacement(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0)]; enterHideOverlappingLowerPriority(s, scene); (s as any).locArgs = __savedLocArgs; }
                ((s as any).placement_state = (s as any).placement_state ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', attempt'] = 2;
                break;
              }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0), 'coexist_same']; enterFindBestPlacement(s, scene); (s as any).locArgs = __savedLocArgs; }
              if (((s as any).placement_found ?? 0) === 1) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_evt_id ?? 0)]; enterApplyPlacement(s, scene); (s as any).locArgs = __savedLocArgs; }
                ((s as any).placement_state = (s as any).placement_state ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', attempt'] = 3;
                break;
              }
              ((s as any).placement_state = (s as any).placement_state ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', attempt'] = 0;
              break;
            }
            // LABEL: next_flex_event
          }
          (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
          break;
        }
        (s as any).temp_priority = ((s as any).temp_priority ?? 0) - (1);
        break;
      }
    }
    return;
  }
  scene.build();
}

function enterCheckOverlap(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_evt1 = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_evt2 = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_start1 = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt1 ?? 0)) + ', start']);
  (s as any).temp_end1 = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt1 ?? 0)) + ', end']);
  (s as any).temp_start2 = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt2 ?? 0)) + ', start']);
  (s as any).temp_end2 = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt2 ?? 0)) + ', end']);
  if (((s as any).temp_start1 ?? 0) <= ((s as any).temp_end2 ?? 0)  &&  ((s as any).temp_end1 ?? 0) >= ((s as any).temp_start2 ?? 0)) {
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsRangeBlocked(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_range_start = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_range_end = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_evt_id = ((s as any).locArgs?.[4] ?? 0);
  (s as any).temp_mode = ((s as any).locArgs?.[5] ?? 0);
  (s as any).temp_evt_priority = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', priority']);
  (s as any).temp_check_t = ((s as any).temp_range_end ?? 0);
  while (true) {
    if (((s as any).temp_check_t ?? 0) >= 0) {
      (s as any).temp_event_count = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', event_count']);
      if (((s as any).temp_event_count ?? 0) > 0) {
        (s as any).temp_e = 0;
        while (true) {
          if (((s as any).temp_e ?? 0) < ((s as any).temp_event_count ?? 0)) {
            (s as any).temp_other_id = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', id']);
            (s as any).temp_is_hidden = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_hidden']);
            if (((s as any).temp_other_id ?? 0) !== ((s as any).temp_evt_id ?? 0)  &&  (!((s as any).temp_is_hidden ?? 0))) {
              (s as any).temp_other_is_flex = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_check_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_flex']);
              if (((s as any).temp_other_is_flex ?? 0) === 1) {
                (s as any).temp_other_start = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', window_start']);
                (s as any).temp_other_end = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', window_end']);
              } else {
                (s as any).temp_other_start = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', start']);
                (s as any).temp_other_end = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', end']);
              }
              if (((s as any).temp_other_start ?? 0) <= ((s as any).temp_range_end ?? 0)  &&  ((s as any).temp_other_end ?? 0) >= ((s as any).temp_range_start ?? 0)) {
                (s as any).temp_other_priority = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', priority']);
                if (((s as any).temp_mode ?? 0) === 'conflict_free') {
                  (s as any).result = 1;
                  return;
                } else {
                  if (((s as any).temp_mode ?? 0) === 'hide_lower') {
                    if (((s as any).temp_other_priority ?? 0) >= ((s as any).temp_evt_priority ?? 0)) {
                      (s as any).result = 1;
                      return;
                    }
                  } else {
                    if (((s as any).temp_mode ?? 0) === 'coexist_same') {
                      if (((s as any).temp_other_priority ?? 0) > ((s as any).temp_evt_priority ?? 0)) {
                        (s as any).result = 1;
                        return;
                      }
                    }
                  }
                }
              }
            }
            (s as any).temp_e = ((s as any).temp_e ?? 0) + (1);
            break;
          }
        }
      }
      (s as any).temp_check_t = ((s as any).temp_check_t ?? 0) - (1);
      break;
    }
    (s as any).result = 0;
    return;
  }
  scene.build();
}

function enterFindBestPlacement(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_evt_id = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_mode = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_orig_start = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', orig_start']);
  (s as any).temp_orig_end = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', orig_end']);
  (s as any).temp_duration = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', duration']);
  (s as any).temp_best_window_size = (-1);
  (s as any).placement_found = 0;
  (s as any).temp_try_start = ((s as any).temp_orig_start ?? 0);
  while (true) {
    if (((s as any).temp_try_start ?? 0) <= ((s as any).temp_orig_end ?? 0)) {
      (s as any).temp_blocked = qspFunc(s, 'calendar_schedule', 'is_range_blocked', ((s as any).temp_d ?? 0), ((s as any).temp_try_start ?? 0), ((s as any).temp_try_start ?? 0) + ((s as any).temp_duration ?? 0) - 1, ((s as any).temp_evt_id ?? 0), ((s as any).temp_mode ?? 0));
      if ((!((s as any).temp_blocked ?? 0))) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_try_start ?? 0), ((s as any).temp_evt_id ?? 0), ((s as any).temp_mode ?? 0)]; enterFindFreeWindowAround(s, scene); (s as any).locArgs = __savedLocArgs; }
        (s as any).temp_window_size = ((s as any).result_window_end ?? 0) - ((s as any).result_window_start ?? 0) + 1;
        if (((s as any).temp_window_size ?? 0) > ((s as any).temp_best_window_size ?? 0)) {
          (s as any).temp_best_window_size = ((s as any).temp_window_size ?? 0);
          (s as any).placement_found = 1;
          (s as any).placement_start = ((s as any).temp_try_start ?? 0);
          (s as any).placement_window_start = ((s as any).result_window_start ?? 0);
          (s as any).placement_window_end = ((s as any).result_window_end ?? 0);
        }
      }
      (s as any).temp_try_start = ((s as any).temp_try_start ?? 0) + (1);
      break;
    }
    (s as any).temp_blocked = undefined;
    return;
  }
  scene.build();
}

function enterFindFreeWindowAround(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_center = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_evt_id = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_mode = ((s as any).locArgs?.[4] ?? 0);
  (s as any).temp_orig_start = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', orig_start']);
  (s as any).temp_orig_end = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', orig_end']);
  (s as any).temp_left = ((s as any).temp_center ?? 0);
  while (true) {
    if (((s as any).temp_left ?? 0) > ((s as any).temp_orig_start ?? 0)) {
      (s as any).temp_blocked = qspFunc(s, 'calendar_schedule', 'is_range_blocked', ((s as any).temp_d ?? 0), ((s as any).temp_left ?? 0) - 1, ((s as any).temp_left ?? 0) - 1, ((s as any).temp_evt_id ?? 0), ((s as any).temp_mode ?? 0));
      if ((!((s as any).temp_blocked ?? 0))) {
        (s as any).temp_left = ((s as any).temp_left ?? 0) - (1);
        break;
      }
    }
    (s as any).temp_duration = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', duration']);
    (s as any).temp_right = ((s as any).temp_center ?? 0) + ((s as any).temp_duration ?? 0) - 1;
    while (true) {
      if (((s as any).temp_right ?? 0) < ((s as any).temp_orig_end ?? 0)) {
        (s as any).temp_blocked = qspFunc(s, 'calendar_schedule', 'is_range_blocked', ((s as any).temp_d ?? 0), ((s as any).temp_right ?? 0) + 1, ((s as any).temp_right ?? 0) + 1, ((s as any).temp_evt_id ?? 0), ((s as any).temp_mode ?? 0));
        if ((!((s as any).temp_blocked ?? 0))) {
          (s as any).temp_right = ((s as any).temp_right ?? 0) + (1);
          break;
        }
      }
      (s as any).result_window_start = ((s as any).temp_left ?? 0);
      (s as any).result_window_end = ((s as any).temp_right ?? 0);
      return;
    }
  }
  scene.build();
}

function enterApplyPlacement(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_evt_id = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', start'] = ((s as any).placement_start ?? 0);
  ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', end'] = ((s as any).placement_start ?? 0) + ((s as any).event_range_cache ?? 0)['' + ((s as any).temp_evt_id ?? 0) + ', duration'] - 1;
  ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', window_start'] = ((s as any).placement_window_start ?? 0);
  ((s as any).event_range_cache = (s as any).event_range_cache ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', window_end'] = ((s as any).placement_window_end ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).placement_window_start ?? 0), ((s as any).temp_evt_id ?? 0)]; enterAddEventToSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).placement_state = (s as any).placement_state ?? {})[String(((s as any).temp_evt_id ?? 0)) + ', placed'] = 1;
  return;
  scene.build();
}

function enterHideOverlappingLowerPriority(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_evt_id = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_evt_priority = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', priority']);
  (s as any).temp_t = 0;
  while (true) {
    if (((s as any).temp_t ?? 0) < 96) {
      (s as any).temp_count = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', event_count']);
      if (((s as any).temp_count ?? 0) > 0) {
        (s as any).temp_e = 0;
        while (true) {
          if (((s as any).temp_e ?? 0) < ((s as any).temp_count ?? 0)) {
            (s as any).temp_other_id = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', id']);
            if (((s as any).temp_other_id ?? 0) !== ((s as any).temp_evt_id ?? 0)) {
              (s as any).temp_other_priority = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_other_id ?? 0)) + ', priority']);
              if (((s as any).temp_other_priority ?? 0) < ((s as any).temp_evt_priority ?? 0)) {
                (s as any).temp_overlaps = qspFunc(s, 'calendar_schedule', 'check_overlap', ((s as any).temp_evt_id ?? 0), ((s as any).temp_other_id ?? 0));
                if (((s as any).temp_overlaps ?? 0) === 1) {
                  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_hidden'] = 1;
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_t ?? 0), ((s as any).temp_e ?? 0), (-1)]; enterChangeBusyTimeslots(s, scene); (s as any).locArgs = __savedLocArgs; }
                }
              }
            }
            (s as any).temp_e = ((s as any).temp_e ?? 0) + (1);
            break;
          }
        }
      }
      (s as any).temp_t = ((s as any).temp_t ?? 0) + (1);
      break;
    }
    return;
  }
  scene.build();
}

function enterAddEventToSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_t = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_evt_id = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_e = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', event_count']);
  qspCall(s, 'calendar_events', 'get_event', ((s as any).temp_evt_id ?? 0));
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', id'] = ((s as any).temp_evt_id ?? 0);
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', title'] = (((s as any).event_vars ?? 0)?.['title']);
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', location'] = (((s as any).event_vars ?? 0)?.['loc']);
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', description'] = (((s as any).event_vars ?? 0)?.['desc']);
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', color'] = (((s as any).event_vars ?? 0)?.['color']);
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', priority'] = (((s as any).event_vars ?? 0)?.['priority']);
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_flex'] = (((s as any).event_vars ?? 0)?.['flex_type']);
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', start_ts'] = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', start']);
  if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
    (s as any).temp_valid_window_start = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', window_start']);
    (s as any).temp_valid_window_end = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', window_end']);
    (s as any).temp_event_duration = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', duration']);
    (s as any).temp_window_slots = ((s as any).temp_valid_window_end ?? 0) - ((s as any).temp_valid_window_start ?? 0) + 1 - ((s as any).temp_event_duration ?? 0);
    (s as any).temp_event_slots = ((s as any).temp_event_duration ?? 0);
    (s as any).temp_total_span = ((s as any).temp_window_slots ?? 0) + ((s as any).temp_event_slots ?? 0);
    if (((s as any).temp_t ?? 0) + ((s as any).temp_total_span ?? 0) > 96) {
      (s as any).temp_total_span = 96 - ((s as any).temp_t ?? 0);
    }
    ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', span'] = ((s as any).temp_total_span ?? 0);
    ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', window_slots'] = ((s as any).temp_window_slots ?? 0);
    ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', event_slots'] = ((s as any).temp_event_slots ?? 0);
  } else {
    ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', span'] = (((s as any).event_range_cache ?? 0)?.[String(((s as any).temp_evt_id ?? 0)) + ', duration']);
  }
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_hidden'] = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0), ((s as any).temp_t ?? 0), ((s as any).temp_e ?? 0), 1]; enterChangeBusyTimeslots(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', event_count'] = ((s as any).temp_e ?? 0) + 1;
  return;
  scene.build();
}

function enterChangeBusyTimeslots(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_mb_ts = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).locArgs?.[1] ?? 0)) + ', timeslots=' + String(((s as any).locArgs?.[2] ?? 0)) + ', events=' + String(((s as any).locArgs?.[3] ?? 0)) + ', start_ts']);
  // TODO-QSP: temp_mb_end = temp_mb_ts + week_schedule['days=<<ARGS[1]>>, timeslots=<<ARGS[2]>>, events=<<ARGS[3]>>, span'] - 1
  while (true) {
    if (((s as any).temp_mb_ts ?? 0) <= ((s as any).temp_mb_end ?? 0)  &&  ((s as any).temp_mb_ts ?? 0) < 96) {
      ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).locArgs?.[1] ?? 0)) + ', timeslots=' + String(((s as any).temp_mb_ts ?? 0)) + ', busy_count'] = ((s as any).week_schedule['days=' + String(((s as any).locArgs?.[1] ?? 0)) + ', timeslots=' + String(((s as any).temp_mb_ts ?? 0)) + ', busy_count'] ?? 0) + (((s as any).locArgs?.[4] ?? 0));
      (s as any).temp_mb_ts = ((s as any).temp_mb_ts ?? 0) + (1);
      break;
    }
    (s as any).temp_mb_ts = undefined;
    (s as any).temp_mb_end = undefined;
    return;
  }
  scene.build();
}

function enterAssignColumns(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = 1;
  while (true) {
    if (((s as any).temp_d ?? 0) <= 7) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0)]; enterAssignDayColumns(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
      break;
    }
    (s as any).temp_d = 1;
    while (true) {
      if (((s as any).temp_d ?? 0) <= 7) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_d ?? 0)]; enterCalculateDayColspans(s, scene); (s as any).locArgs = __savedLocArgs; }
        (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
        break;
      }
      return;
    }
  }
  scene.build();
}

function enterAssignDayColumns(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).column_end_slot = undefined;
  (s as any).temp_init_c = 0;
  while (true) {
    if (((s as any).temp_init_c ?? 0) < 4) {
      ((s as any).column_end_slot = (s as any).column_end_slot ?? {})[String((s as any).temp_init_c ?? 0)] = (-1);
      (s as any).temp_init_c = ((s as any).temp_init_c ?? 0) + (1);
      break;
    }
    (s as any).temp_max_col_used = (-1);
    (s as any).temp_t = 0;
    while (true) {
      if (((s as any).temp_t ?? 0) < 96) {
        (s as any).temp_event_count = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', event_count']);
        if (((s as any).temp_event_count ?? 0) > 0) {
          (s as any).temp_e = 0;
          while (true) {
            if (((s as any).temp_e ?? 0) < ((s as any).temp_event_count ?? 0)) {
              (s as any).temp_is_hidden = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_hidden']);
              if ((!((s as any).temp_is_hidden ?? 0))) {
                while (true) {
                  (s as any).temp_event_span = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', span']);
                  (s as any).temp_event_end_slot = ((s as any).temp_t ?? 0) + ((s as any).temp_event_span ?? 0) - 1;
                  (s as any).temp_col = 0;
                  while (true) {
                    if (((s as any).temp_col ?? 0) >= 4) {
                      (s as any).temp_col = 3;
                      // TODO-QSP: jump 'assign_column'
                    }
                    if (((s as any).column_end_slot ?? 0)?.[String((s as any).temp_col ?? 0)] < ((s as any).temp_t ?? 0)) {
                      // LABEL: assign_column
                      ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', column'] = ((s as any).temp_col ?? 0);
                      ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', colspan'] = 1;
                      ((s as any).column_end_slot = (s as any).column_end_slot ?? {})[String((s as any).temp_col ?? 0)] = ((s as any).temp_event_end_slot ?? 0);
                      if (((s as any).temp_col ?? 0) > ((s as any).temp_max_col_used ?? 0)) {
                        (s as any).temp_max_col_used = ((s as any).temp_col ?? 0);
                      }
                      break;
                    }
                    (s as any).temp_col = ((s as any).temp_col ?? 0) + (1);
                    break;
                  }
                  break;
                }
                // LABEL: found_column
              }
              (s as any).temp_e = ((s as any).temp_e ?? 0) + (1);
              break;
            }
          }
        }
        (s as any).temp_t = ((s as any).temp_t ?? 0) + (1);
        break;
      }
      ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', max_columns'] = ((s as any).temp_max_col_used ?? 0) + 1;
      return;
    }
  }
  scene.build();
}

function enterCalculateDayColspans(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_t = 0;
  while (true) {
    if (((s as any).temp_t ?? 0) < 96) {
      (s as any).temp_event_count = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', event_count']);
      if (((s as any).temp_event_count ?? 0) > 0) {
        (s as any).temp_e = 0;
        while (true) {
          if (((s as any).temp_e ?? 0) < ((s as any).temp_event_count ?? 0)) {
            ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', colspan'] = 1;
            (s as any).temp_e = ((s as any).temp_e ?? 0) + (1);
            break;
          }
        }
      }
      (s as any).temp_t = ((s as any).temp_t ?? 0) + (1);
      break;
    }
    (s as any).temp_t = 0;
    while (true) {
      if (((s as any).temp_t ?? 0) < 96) {
        (s as any).temp_event_count = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', event_count']);
        if (((s as any).temp_event_count ?? 0) > 0) {
          (s as any).temp_e = 0;
          while (true) {
            if (((s as any).temp_e ?? 0) < ((s as any).temp_event_count ?? 0)) {
              (s as any).temp_is_hidden = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_hidden']);
              if ((!((s as any).temp_is_hidden ?? 0))) {
                (s as any).temp_colspan = qspFunc(s, 'calendar_schedule', 'calculate_event_colspan', ((s as any).temp_d ?? 0), ((s as any).temp_t ?? 0), ((s as any).temp_e ?? 0));
                ((s as any).week_schedule = (s as any).week_schedule ?? {})['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', colspan'] = ((s as any).temp_colspan ?? 0);
              }
              (s as any).temp_e = ((s as any).temp_e ?? 0) + (1);
              break;
            }
          }
        }
        (s as any).temp_t = ((s as any).temp_t ?? 0) + (1);
        break;
      }
      return;
    }
  }
  scene.build();
}

function enterCalculateEventColspan(s: GameState, scene: SceneBuilder): void {
  while (true) {
    (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
    (s as any).temp_t = ((s as any).locArgs?.[2] ?? 0);
    (s as any).temp_e = ((s as any).locArgs?.[3] ?? 0);
    (s as any).temp_col = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', column']);
    (s as any).temp_span = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', span']);
    (s as any).temp_event_end = ((s as any).temp_t ?? 0) + ((s as any).temp_span ?? 0) - 1;
    (s as any).temp_max_cols = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', max_columns']);
    (s as any).temp_colspan = 1;
    (s as any).temp_check_col = ((s as any).temp_col ?? 0) + 1;
    while (true) {
      if (((s as any).temp_check_col ?? 0) >= ((s as any).temp_max_cols ?? 0)) {
        break;
      }
      if (((s as any).temp_check_col ?? 0) >= 4) {
        break;
      }
      (s as any).temp_is_free = qspFunc(s, 'calendar_schedule', 'is_column_free_for_span', ((s as any).temp_d ?? 0), ((s as any).temp_check_col ?? 0), ((s as any).temp_t ?? 0), ((s as any).temp_event_end ?? 0));
      if (((s as any).temp_is_free ?? 0) === 1) {
        (s as any).temp_colspan = ((s as any).temp_colspan ?? 0) + (1);
        (s as any).temp_check_col = ((s as any).temp_check_col ?? 0) + (1);
        break;
      }
    }
    break;
  }
  // LABEL: done
  (s as any).result = ((s as any).temp_colspan ?? 0);
  return;
  scene.build();
}

function enterIsColumnFreeForSpan(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_check_col = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_start_ts = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_end_ts = ((s as any).locArgs?.[4] ?? 0);
  (s as any).temp_scan_t = 0;
  while (true) {
    if (((s as any).temp_scan_t ?? 0) < ((s as any).temp_start_ts ?? 0)) {
      (s as any).temp_scan_count = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_t ?? 0)) + ', event_count']);
      if (((s as any).temp_scan_count ?? 0) > 0) {
        (s as any).temp_scan_e = 0;
        while (true) {
          if (((s as any).temp_scan_e ?? 0) < ((s as any).temp_scan_count ?? 0)) {
            (s as any).temp_is_hidden = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_t ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', is_hidden']);
            if ((!((s as any).temp_is_hidden ?? 0))) {
              (s as any).temp_evt_span = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_t ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', span']);
              (s as any).temp_evt_end = ((s as any).temp_scan_t ?? 0) + ((s as any).temp_evt_span ?? 0) - 1;
              if (((s as any).temp_evt_end ?? 0) >= ((s as any).temp_start_ts ?? 0)) {
                (s as any).temp_evt_col = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_t ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', column']);
                (s as any).temp_evt_colspan = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_t ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', colspan']);
                if (((s as any).temp_check_col ?? 0) >= ((s as any).temp_evt_col ?? 0)  &&  ((s as any).temp_check_col ?? 0) < ((s as any).temp_evt_col ?? 0) + ((s as any).temp_evt_colspan ?? 0)) {
                  (s as any).result = 0;
                  return;
                }
              }
            }
            (s as any).temp_scan_e = ((s as any).temp_scan_e ?? 0) + (1);
            break;
          }
        }
      }
      (s as any).temp_scan_t = ((s as any).temp_scan_t ?? 0) + (1);
      break;
    }
    (s as any).temp_scan_t = ((s as any).temp_start_ts ?? 0);
    while (true) {
      if (((s as any).temp_scan_t ?? 0) <= ((s as any).temp_end_ts ?? 0)) {
        (s as any).temp_scan_count = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_t ?? 0)) + ', event_count']);
        if (((s as any).temp_scan_count ?? 0) > 0) {
          (s as any).temp_scan_e = 0;
          while (true) {
            if (((s as any).temp_scan_e ?? 0) < ((s as any).temp_scan_count ?? 0)) {
              (s as any).temp_is_hidden = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_t ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', is_hidden']);
              if ((!((s as any).temp_is_hidden ?? 0))) {
                (s as any).temp_evt_col = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_t ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', column']);
                (s as any).temp_evt_colspan = (((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_t ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', colspan']);
                if (((s as any).temp_check_col ?? 0) >= ((s as any).temp_evt_col ?? 0)  &&  ((s as any).temp_check_col ?? 0) < ((s as any).temp_evt_col ?? 0) + ((s as any).temp_evt_colspan ?? 0)) {
                  (s as any).result = 0;
                  return;
                }
              }
              (s as any).temp_scan_e = ((s as any).temp_scan_e ?? 0) + (1);
              break;
            }
          }
        }
        (s as any).temp_scan_t = ((s as any).temp_scan_t ?? 0) + (1);
        break;
      }
      (s as any).result = 1;
      return;
    }
  }
  scene.build();
}

function enterCleanupTempStructures(s: GameState, scene: SceneBuilder): void {
  (s as any).event_range_cache = undefined;
  (s as any).placement_state = undefined;
  (s as any).allday_spans = undefined;
  (s as any).column_end_slot = undefined;
  (s as any).temp_other_is_flex = undefined;
  (s as any).temp_other_start = undefined;
  (s as any).temp_other_end = undefined;
  (s as any).temp_check_t = undefined;
  (s as any).temp_check_col = undefined;
  (s as any).temp_start = undefined;
  (s as any).temp_end = undefined;
  (s as any).placement_found = undefined;
  (s as any).placement_window_start = undefined;
  (s as any).placement_window_end = undefined;
  (s as any).temp_colspan = undefined;
  (s as any).temp_other_id = undefined;
  (s as any).temp_other_priority = undefined;
  (s as any).temp_range_start = undefined;
  (s as any).temp_range_end = undefined;
  (s as any).temp_evt_id = undefined;
  (s as any).temp_found = undefined;
  (s as any).temp_check = undefined;
  (s as any).temp_is_hidden = undefined;
  (s as any).temp_week_start = undefined;
  (s as any).temp_d = 1;
  while (true) {
    if (((s as any).temp_d ?? 0) <= 7) {
      delete (s as any)['static_events_day_' + ((s as any).temp_d ?? 0) + ''];
      delete (s as any)['flexible_events_day_' + ((s as any).temp_d ?? 0) + ''];
      (s as any).temp_d = ((s as any).temp_d ?? 0) + (1);
      break;
    }
    (s as any).allday_events_week = undefined;
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
    case 'find_best_placement':
      enterFindBestPlacement(s, scene);
      break;
    case 'find_free_window_around':
      enterFindFreeWindowAround(s, scene);
      break;
    case 'apply_placement':
      enterApplyPlacement(s, scene);
      break;
    case 'hide_overlapping_lower_priority':
      enterHideOverlappingLowerPriority(s, scene);
      break;
    case 'add_event_to_schedule':
      enterAddEventToSchedule(s, scene);
      break;
    case 'change_busy_timeslots':
      enterChangeBusyTimeslots(s, scene);
      break;
    case 'assign_columns':
      enterAssignColumns(s, scene);
      break;
    case 'assign_day_columns':
      enterAssignDayColumns(s, scene);
      break;
    case 'calculate_day_colspans':
      enterCalculateDayColspans(s, scene);
      break;
    case 'calculate_event_colspan':
      enterCalculateEventColspan(s, scene);
      break;
    case 'is_column_free_for_span':
      enterIsColumnFreeForSpan(s, scene);
      break;
    case 'cleanup_temp_structures':
      enterCleanupTempStructures(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const calendar_schedule: LocationDef = {
  name: 'calendar_schedule',
  region: 'other',
  enter: enter,
};
