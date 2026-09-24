import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAddToEventsList(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).events_list) ? ((s as any).events_list as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) === -1) {
    // TODO-QSP: $events_list[] = $ARGS[1]
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveFromEventsList(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_index = qspUntranslated(s, "arrpos('events_list', ARGS[1])", { location: "calendar_events" });
  if (((s as any).temp_index ?? 0) !== -1) {
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterChangeTitle(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).events_list) ? ((s as any).events_list as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) >= 0) {
    // TODO-QSP: $event_title[$ARGS[1]] = $ARGS[2]
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMarkDone(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).events_list) ? ((s as any).events_list as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) >= 0) {
    // TODO-QSP: $event_title[$ARGS[1]] = '<s><<$event_title[$ARGS[1]]>></s>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBlockingEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_block_idx = 0;
  // TODO-QSP: :build_blocking_list
  if (((s as any).temp_block_idx ?? 0) < Object.keys((s as any).events_list ?? {}).length) {
    (s as any).temp_block_id = (((s as any).events_list ?? 0)?.[String((s as any).temp_block_idx ?? 0)] ?? 0);
    if (((s as any).temp_block_id ?? 0) !== ''  &&  ((s as any).event_blocking ?? 0)?.[String((s as any).temp_block_id ?? 0)] !== 0) {
      // TODO-QSP: $blocking_events_list[] = $temp_block_id
    }
    (s as any).temp_block_idx = ((s as any).temp_block_idx ?? 0) + (1);
    // TODO-QSP: jump 'build_blocking_list'
  }
  (s as any).blocking_events_count = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsDayHoliday(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_date', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = 0;
  if (((s as any).dateVars ?? 0)?.['month'] === 1  &&  ((s as any).dateVars ?? 0)?.['day'] >= 1  &&  ((s as any).dateVars ?? 0)?.['day'] <= 8) {
    (s as any).result = 1;
  }
  if (((s as any).dateVars ?? 0)?.['month'] === 2  &&  ((s as any).dateVars ?? 0)?.['day'] === 23) {
    (s as any).result = 1;
  }
  if (((s as any).dateVars ?? 0)?.['month'] === 3  &&  ((s as any).dateVars ?? 0)?.['day'] === 8) {
    (s as any).result = 1;
  }
  if (((s as any).dateVars ?? 0)?.['month'] === 5  &&  ((s as any).dateVars ?? 0)?.['day'] === 1) {
    (s as any).result = 1;
  }
  if (((s as any).dateVars ?? 0)?.['month'] === 5  &&  ((s as any).dateVars ?? 0)?.['day'] === 2) {
    (s as any).result = 1;
  }
  if (((s as any).dateVars ?? 0)?.['month'] === 5  &&  ((s as any).dateVars ?? 0)?.['day'] === 9) {
    (s as any).result = 1;
  }
  if (((s as any).dateVars ?? 0)?.['month'] === 6  &&  ((s as any).dateVars ?? 0)?.['day'] === 12) {
    (s as any).result = 1;
  }
  if (((s as any).dateVars ?? 0)?.['month'] === 6  &&  ((s as any).dateVars ?? 0)?.['day'] === 13) {
    (s as any).result = 1;
  }
  if (((s as any).dateVars ?? 0)?.['month'] === 11  &&  ((s as any).dateVars ?? 0)?.['day'] === 4) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterEventOccursInDay(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).result = 0;
  if (((s as any).event_vars ?? 0)?.['daystart'] > String((s as any).locArgs?.[2] ?? '')) {
    return;
  }
  if (((s as any).event_vars ?? 0)?.['holiday'] !== 0) {
    (s as any).temp_is_holiday = qspFunc(s, 'calendar_events', 'is_day_holiday', ((s as any).locArgs?.[2] ?? 0));
    if ((((s as any).event_vars ?? 0)?.['holiday'] === 1  &&  ((s as any).temp_is_holiday ?? 0) === 1)  ||  (((s as any).event_vars ?? 0)?.['holiday'] === 2  &&  ((s as any).temp_is_holiday ?? 0) === 0)) {
      return;
    }
  }
  if (((s as any).event_vars ?? 0)?.['daystart'] === String((s as any).locArgs?.[2] ?? '')  &&  parseFloat((String(((s as any).event_vars ?? 0)?.['recur']).slice((1)-1, ((1)-1)+(1)))) === 0) {
    (s as any).result = 1;
    return;
  }
  if (((s as any).event_vars ?? 0)?.['recur'] !== ''  &&  (((s as any).event_vars ?? 0)?.['recur_end'] === 0  ||  ((s as any).event_vars ?? 0)?.['recur_end'] >= String((s as any).locArgs?.[2] ?? ''))) {
    if (((s as any).event_vars ?? 0)?.['recur'] === 'yearly') {
      qspCall(s, 'time', 'to_date', ((s as any).locArgs?.[2] ?? 0));
      (s as any).temp_month_1 = ((s as any).dateVars ?? 0)?.['month'];
      (s as any).temp_day_1 = ((s as any).dateVars ?? 0)?.['day'];
      qspCall(s, 'time', 'to_date', ((s as any).event_vars ?? 0)?.['daystart']);
      (s as any).temp_month_2 = ((s as any).dateVars ?? 0)?.['month'];
      (s as any).temp_day_2 = ((s as any).dateVars ?? 0)?.['day'];
      if (((s as any).temp_month_1 ?? 0) === ((s as any).temp_month_2 ?? 0)  &&  ((s as any).temp_day_1 ?? 0) === ((s as any).temp_day_2 ?? 0)) {
        (s as any).result = 1;
      }
    } else {
      if ((String(((s as any).event_vars ?? 0)?.['recur']).slice((1)-1, ((1)-1)+(7))) === 'yearly-') {
        qspCall(s, 'time', 'to_date', ((s as any).locArgs?.[2] ?? 0));
        (s as any).temp_check_month = ((s as any).dateVars ?? 0)?.['month'];
        (s as any).temp_check_day = ((s as any).dateVars ?? 0)?.['day'];
        (s as any).temp_check_mmdd = ((s as any).temp_check_month ?? 0) * 100 + ((s as any).temp_check_day ?? 0);
        (s as any).temp_start_mmdd = parseFloat((String(((s as any).event_vars ?? 0)?.['recur']).slice((8)-1, ((8)-1)+(4))));
        (s as any).temp_end_mmdd = parseFloat((String(((s as any).event_vars ?? 0)?.['recur']).slice((13)-1, ((13)-1)+(4))));
        if (((s as any).temp_start_mmdd ?? 0) <= ((s as any).temp_end_mmdd ?? 0)) {
          if (((s as any).temp_check_mmdd ?? 0) >= ((s as any).temp_start_mmdd ?? 0)  &&  ((s as any).temp_check_mmdd ?? 0) <= ((s as any).temp_end_mmdd ?? 0)) {
            (s as any).result = 1;
          }
        } else {
          if (((s as any).temp_check_mmdd ?? 0) >= ((s as any).temp_start_mmdd ?? 0)  ||  ((s as any).temp_check_mmdd ?? 0) <= ((s as any).temp_end_mmdd ?? 0)) {
            (s as any).result = 1;
          }
        }
      } else {
        if ((String(((s as any).event_vars ?? 0)?.['recur']).slice((1)-1, ((1)-1)+(8))) === 'monthly-') {
          qspCall(s, 'time', 'to_date', ((s as any).locArgs?.[2] ?? 0));
          if (((s as any).dateVars ?? 0)?.['week'] === parseFloat((String(((s as any).event_vars ?? 0)?.['recur']).slice((11)-1, ((11)-1)+(1))))) {
            if ((((s as any).dateVars ?? 0)?.['day'] - 1) / 7 + 1 === parseFloat((String(((s as any).event_vars ?? 0)?.['recur']).slice((9)-1, ((9)-1)+(1))))) {
              (s as any).result = 1;
            }
          }
        } else {
          if (((s as any).event_vars ?? 0)?.['recur'] === 'monthly') {
            qspCall(s, 'time', 'to_date', ((s as any).locArgs?.[2] ?? 0));
            (s as any).temp_month_day_1 = ((s as any).dateVars ?? 0)?.['day'];
            qspCall(s, 'time', 'to_date', ((s as any).event_vars ?? 0)?.['daystart']);
            (s as any).temp_month_day_2 = ((s as any).dateVars ?? 0)?.['day'];
            if (((s as any).temp_month_day_1 ?? 0) === ((s as any).temp_month_day_2 ?? 0)) {
              (s as any).result = 1;
            }
          } else {
            if (((s as any).event_vars ?? 0)?.['recur'] === 'biweekly') {
              (s as any).day_diff = (((s as any).event_vars ?? {})?.['daystart'] ?? 0) - ((s as any).locArgs?.[2] ?? 0);
              (s as any).day_diff = ((((s as any).day_diff ?? 0) < 0) ? (0 - ((s as any).day_diff ?? 0)) : (((s as any).day_diff ?? 0)));
              if (((s as any).day_diff ?? 0) % 14 === 0) {
                (s as any).result = 1;
              }
            } else {
              if (((s as any).event_vars ?? 0)?.['recur'] === 'weekly') {
                (s as any).day_diff = (((s as any).event_vars ?? {})?.['daystart'] ?? 0) - ((s as any).locArgs?.[2] ?? 0);
                (s as any).day_diff = ((((s as any).day_diff ?? 0) < 0) ? (0 - ((s as any).day_diff ?? 0)) : (((s as any).day_diff ?? 0)));
                if (((s as any).day_diff ?? 0) % 7 === 0) {
                  (s as any).result = 1;
                }
              } else {
                if (((s as any).event_vars ?? 0)?.['recur'] === 'daily') {
                  (s as any).result = 1;
                } else {
                  (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).locArgs?.[2] ?? 0));
                  if (((String(' ' + ((s as any).event_vars ?? 0)?.['recur'] + ' ').indexOf(String(' ' + String(((s as any).temp_weekday ?? 0)) + ' '))) + 1) > 0) {
                    (s as any).result = 1;
                  }
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

function enterNextOccurrenceDaystart(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === -1) {
    if (parseFloat((String(((s as any).new_ev ?? 0)?.['recur']).slice((1)-1, ((1)-1)+(1)))) > 0) {
      (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).new_ev ?? 0)?.['daystart']);
      if ((!((String(' ' + ((s as any).new_ev ?? 0)?.['recur'] + ' ').indexOf(String(' ' + String(((s as any).temp_weekday ?? 0)) + ' '))) + 1))) {
        (s as any).temp_check_day = (((s as any).new_ev ?? {})?.['daystart'] ?? 0) + 1;
        (s as any).temp_days_scanned = 0;
        // TODO-QSP: :find_first_match
        (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).temp_check_day ?? 0));
        if (((String(' ' + ((s as any).new_ev ?? 0)?.['recur'] + ' ').indexOf(String(' ' + String(((s as any).temp_weekday ?? 0)) + ' '))) + 1) > 0) {
          (s as any).result = ((s as any).temp_check_day ?? 0);
          return;
        }
        (s as any).temp_check_day = ((s as any).temp_check_day ?? 0) + (1);
        (s as any).temp_days_scanned = ((s as any).temp_days_scanned ?? 0) + (1);
        if (((s as any).temp_days_scanned ?? 0) < 7) {
          // TODO-QSP: jump 'find_first_match'
        }
      }
    }
    (s as any).result = ((s as any).new_ev ?? 0)?.['daystart'];
    return;
  }
  if (((s as any).new_ev ?? 0)?.['recur'] === '') {
    (s as any).result = (-1);
    return;
  }
  (s as any).candidate = ((s as any).locArgs?.[1] ?? 0) + 1;
  if (((s as any).new_ev ?? 0)?.['recur'] === 'daily') {
    (s as any).candidate = ((s as any).locArgs?.[1] ?? 0) + 1;
  } else {
    if (((s as any).new_ev ?? 0)?.['recur'] === 'weekly') {
      (s as any).candidate = ((s as any).locArgs?.[1] ?? 0) + 7;
    } else {
      if (((s as any).new_ev ?? 0)?.['recur'] === 'biweekly') {
        (s as any).candidate = ((s as any).locArgs?.[1] ?? 0) + 14;
      } else {
        if ((String(((s as any).new_ev ?? 0)?.['recur']).slice((1)-1, ((1)-1)+(8))) === 'monthly-') {
          (s as any).temp_N = parseFloat((String(((s as any).new_ev ?? 0)?.['recur']).slice((9)-1, ((9)-1)+(1))));
          (s as any).temp_W = parseFloat((String(((s as any).new_ev ?? 0)?.['recur']).slice((11)-1, ((11)-1)+(1))));
          qspCall(s, 'time', 'to_date', ((s as any).locArgs?.[1] ?? 0));
          (s as any).temp_month = (((s as any).dateVars ?? {})?.['month'] ?? 0) + 1;
          (s as any).temp_year = ((s as any).dateVars ?? 0)?.['year'];
          if (((s as any).temp_month ?? 0) > 12) {
            (s as any).temp_month = 1;
            (s as any).temp_year = ((s as any).temp_year ?? 0) + (1);
          }
          qspCall(s, 'time', 'to_daystart', ((s as any).temp_year ?? 0), ((s as any).temp_month ?? 0), 1);
          qspCall(s, 'time', 'to_date', ((s as any).dateVars ?? 0)?.['daystart']);
          (s as any).temp_day = 1 + ((((s as any).temp_W ?? 0) - (((s as any).dateVars ?? {})?.['week'] ?? 0) + 7) % 7) + (((s as any).temp_N ?? 0) - 1) * 7;
          qspCall(s, 'time', 'to_daystart', ((s as any).temp_year ?? 0), ((s as any).temp_month ?? 0), ((s as any).temp_day ?? 0));
          (s as any).candidate = ((s as any).dateVars ?? 0)?.['daystart'];
        } else {
          if (((s as any).new_ev ?? 0)?.['recur'] === 'monthly') {
            qspCall(s, 'time', 'to_date', ((s as any).locArgs?.[1] ?? 0));
            (s as any).temp_day = ((s as any).dateVars ?? 0)?.['day'];
            (s as any).temp_month = ((s as any).dateVars ?? 0)?.['month'];
            (s as any).temp_year = ((s as any).dateVars ?? 0)?.['year'];
            (s as any).temp_month = ((s as any).temp_month ?? 0) + (1);
            if (((s as any).temp_month ?? 0) > 12) {
              (s as any).temp_month = 1;
              (s as any).temp_year = ((s as any).temp_year ?? 0) + (1);
            }
            qspCall(s, 'time', 'to_daystart', ((s as any).temp_year ?? 0), ((s as any).temp_month ?? 0), ((s as any).temp_day ?? 0));
            (s as any).candidate = ((s as any).dateVars ?? 0)?.['daystart'];
          } else {
            if (((s as any).new_ev ?? 0)?.['recur'] === 'yearly') {
              qspCall(s, 'time', 'to_date', ((s as any).locArgs?.[1] ?? 0));
              (s as any).temp_day = ((s as any).dateVars ?? 0)?.['day'];
              (s as any).temp_month = ((s as any).dateVars ?? 0)?.['month'];
              (s as any).temp_year = ((s as any).dateVars ?? 0)?.['year'];
              (s as any).temp_year = ((s as any).temp_year ?? 0) + (1);
              qspCall(s, 'time', 'to_daystart', ((s as any).temp_year ?? 0), ((s as any).temp_month ?? 0), ((s as any).temp_day ?? 0));
              (s as any).candidate = ((s as any).dateVars ?? 0)?.['daystart'];
            } else {
              if ((String(((s as any).new_ev ?? 0)?.['recur']).slice((1)-1, ((1)-1)+(7))) === 'yearly-') {
                qspCall(s, 'time', 'to_date', ((s as any).locArgs?.[1] ?? 0));
                (s as any).temp_year = ((s as any).dateVars ?? 0)?.['year'];
                (s as any).temp_start_mmdd = parseFloat((String(((s as any).new_ev ?? 0)?.['recur']).slice((8)-1, ((8)-1)+(4))));
                (s as any).temp_end_mmdd = parseFloat((String(((s as any).new_ev ?? 0)?.['recur']).slice((13)-1, ((13)-1)+(4))));
                (s as any).temp_start_month = ((s as any).temp_start_mmdd ?? 0) / 100;
                (s as any).temp_start_day = ((s as any).temp_start_mmdd ?? 0) % 100;
                (s as any).temp_end_month = ((s as any).temp_end_mmdd ?? 0) / 100;
                (s as any).temp_end_day = ((s as any).temp_end_mmdd ?? 0) % 100;
                qspCall(s, 'time', 'to_daystart', ((s as any).temp_year ?? 0), ((s as any).temp_end_month ?? 0), ((s as any).temp_end_day ?? 0));
                (s as any).temp_end_this_year = ((s as any).dateVars ?? 0)?.['daystart'];
                if (((s as any).temp_start_mmdd ?? 0) <= ((s as any).temp_end_mmdd ?? 0)) {
                  qspCall(s, 'time', 'to_daystart', ((s as any).temp_year ?? 0), ((s as any).temp_start_month ?? 0), ((s as any).temp_start_day ?? 0));
                  (s as any).temp_start_this_year = ((s as any).dateVars ?? 0)?.['daystart'];
                  if (String((s as any).locArgs?.[1] ?? '') >= ((s as any).temp_start_this_year ?? 0)  &&  String((s as any).locArgs?.[1] ?? '') < ((s as any).temp_end_this_year ?? 0)) {
                    (s as any).candidate = ((s as any).locArgs?.[1] ?? 0) + 1;
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') < ((s as any).temp_start_this_year ?? 0)) {
                      (s as any).candidate = ((s as any).temp_start_this_year ?? 0);
                    } else {
                      (s as any).temp_year = ((s as any).temp_year ?? 0) + (1);
                      qspCall(s, 'time', 'to_daystart', ((s as any).temp_year ?? 0), ((s as any).temp_start_month ?? 0), ((s as any).temp_start_day ?? 0));
                      (s as any).candidate = ((s as any).dateVars ?? 0)?.['daystart'];
                    }
                  }
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') < ((s as any).temp_end_this_year ?? 0)) {
                    (s as any).candidate = ((s as any).locArgs?.[1] ?? 0) + 1;
                  } else {
                    qspCall(s, 'time', 'to_daystart', ((s as any).temp_year ?? 0), ((s as any).temp_start_month ?? 0), ((s as any).temp_start_day ?? 0));
                    (s as any).temp_start_this_year = ((s as any).dateVars ?? 0)?.['daystart'];
                    if (String((s as any).locArgs?.[1] ?? '') < ((s as any).temp_start_this_year ?? 0)) {
                      (s as any).candidate = ((s as any).temp_start_this_year ?? 0);
                    } else {
                      (s as any).candidate = ((s as any).locArgs?.[1] ?? 0) + 1;
                    }
                  }
                }
              } else {
                (s as any).temp_found = 0;
                (s as any).temp_check = ((s as any).locArgs?.[1] ?? 0) + 1;
                (s as any).temp_days_checked = 0;
                // TODO-QSP: :loop_weekdays
                (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).temp_check ?? 0));
                if (((String(' ' + ((s as any).new_ev ?? 0)?.['recur'] + ' ').indexOf(String(' ' + String(((s as any).temp_weekday ?? 0)) + ' '))) + 1) > 0) {
                  (s as any).candidate = ((s as any).temp_check ?? 0);
                  (s as any).temp_found = 1;
                  // TODO-QSP: jump 'done_weekdays'
                }
                (s as any).temp_check = ((s as any).temp_check ?? 0) + (1);
                (s as any).temp_days_checked = ((s as any).temp_days_checked ?? 0) + (1);
                if (((s as any).temp_days_checked ?? 0) < 7) {
                  // TODO-QSP: jump 'loop_weekdays'
                }
                // TODO-QSP: :done_weekdays
                if ((!((s as any).temp_found ?? 0))) {
                  (s as any).result = (-1);
                  return;
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).new_ev ?? 0)?.['recur_end'] > 0  &&  ((s as any).candidate ?? 0) > ((s as any).new_ev ?? 0)?.['recur_end']) {
    (s as any).result = (-1);
    return;
  }
  (s as any).result = ((s as any).candidate ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNewEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'calendar_events', 'check_event_conflicts');
  if (((s as any).result ?? 0) === 0  &&  String((s as any).locArgs?.[2] ?? '') !== 'dry_run') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAddEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddEvent(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAddToEventsList(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'calendar_list', 'assign_color');
  // TODO-QSP: $event_title[$ARGS[1]] = $event_vars['title']
  // TODO-QSP: $event_location[$ARGS[1]] = $event_vars['loc']
  // TODO-QSP: $event_desc[$ARGS[1]] = $event_vars['desc']
  // TODO-QSP: event_daystart[$ARGS[1]] = event_vars['daystart']
  // TODO-QSP: event_all_day[$ARGS[1]] = event_vars['all_day']
  // TODO-QSP: event_blocking[$ARGS[1]] = event_vars['blocking']
  // TODO-QSP: event_priority[$ARGS[1]] = event_vars['priority']
  // TODO-QSP: event_holiday[$ARGS[1]] = event_vars['holiday']
  // TODO-QSP: $event_recur[$ARGS[1]] = $event_vars['recur']
  // TODO-QSP: event_recur_end[$ARGS[1]] = event_vars['recur_end']
  // TODO-QSP: event_color[$ARGS[1]] = event_vars['color']
  // TODO-QSP: event_flex_type[$ARGS[1]] = event_vars['flex_type']
  // TODO-QSP: event_duration_ts[$ARGS[1]] = event_vars['duration_ts']
  if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
    // TODO-QSP: event_window_start_ts[$ARGS[1]] = event_vars['window_start_ts']
    // TODO-QSP: event_window_end_ts[$ARGS[1]] = event_vars['window_end_ts']
  } else {
    // TODO-QSP: event_start_ts[$ARGS[1]] = event_vars['start_ts']
  }
  (s as any).cal_upcoming_dirty = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLoadNewEv(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    ((s as any).new_ev = (s as any).new_ev ?? {})['id'] = ((s as any).event_vars ?? 0)?.['id'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['title'] = ((s as any).event_vars ?? 0)?.['title'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['loc'] = ((s as any).event_vars ?? 0)?.['loc'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['desc'] = ((s as any).event_vars ?? 0)?.['desc'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['daystart'] = ((s as any).event_vars ?? 0)?.['daystart'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['all_day'] = ((s as any).event_vars ?? 0)?.['all_day'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['color'] = ((s as any).event_vars ?? 0)?.['color'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['blocking'] = ((s as any).event_vars ?? 0)?.['blocking'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['priority'] = ((s as any).event_vars ?? 0)?.['priority'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['recur'] = ((s as any).event_vars ?? 0)?.['recur'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['recur_end'] = ((s as any).event_vars ?? 0)?.['recur_end'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['holiday'] = ((s as any).event_vars ?? 0)?.['holiday'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['flex_type'] = ((s as any).event_vars ?? 0)?.['flex_type'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['exclude_prefix'] = ((s as any).event_vars ?? 0)?.['exclude_prefix'];
    ((s as any).new_ev = (s as any).new_ev ?? {})['duration_ts'] = ((s as any).event_vars ?? 0)?.['duration_ts'];
    if (((s as any).new_ev ?? 0)?.['flex_type'] === 1) {
      ((s as any).new_ev = (s as any).new_ev ?? {})['window_start_ts'] = ((s as any).event_vars ?? 0)?.['window_start_ts'];
      ((s as any).new_ev = (s as any).new_ev ?? {})['window_end_ts'] = ((s as any).event_vars ?? 0)?.['window_end_ts'];
    } else {
      ((s as any).new_ev = (s as any).new_ev ?? {})['start_ts'] = ((s as any).event_vars ?? 0)?.['start_ts'];
    }
  } else {
    ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = ((s as any).new_ev ?? 0)?.['id'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = ((s as any).new_ev ?? 0)?.['title'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = ((s as any).new_ev ?? 0)?.['loc'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = ((s as any).new_ev ?? 0)?.['desc'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).new_ev ?? 0)?.['daystart'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = ((s as any).new_ev ?? 0)?.['all_day'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = ((s as any).new_ev ?? 0)?.['color'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['blocking'] = ((s as any).new_ev ?? 0)?.['blocking'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = ((s as any).new_ev ?? 0)?.['priority'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = ((s as any).new_ev ?? 0)?.['recur'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).new_ev ?? 0)?.['recur_end'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['holiday'] = ((s as any).new_ev ?? 0)?.['holiday'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = ((s as any).new_ev ?? 0)?.['flex_type'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['exclude_prefix'] = ((s as any).new_ev ?? 0)?.['exclude_prefix'];
    ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = ((s as any).new_ev ?? 0)?.['duration_ts'];
    if (((s as any).new_ev ?? 0)?.['flex_type'] === 1) {
      ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = ((s as any).new_ev ?? 0)?.['window_start_ts'];
      ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = ((s as any).new_ev ?? 0)?.['window_end_ts'];
    } else {
      ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = ((s as any).new_ev ?? 0)?.['start_ts'];
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckEventConflicts(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).event_vars ?? 0)?.['blocking'] === 0) {
    // TODO-QSP: exit
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetBlockingEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterLoadNewEv(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).new_ev ?? 0)?.['all_day'] === 1) {
    ((s as any).new_ev = (s as any).new_ev ?? {})['start_span'] = 0;
    ((s as any).new_ev = (s as any).new_ev ?? {})['len_span'] = 96;
  } else {
    if (((s as any).new_ev ?? 0)?.['flex_type'] === 1) {
      ((s as any).new_ev = (s as any).new_ev ?? {})['start_span'] = ((s as any).new_ev ?? 0)?.['window_start_ts'];
      ((s as any).new_ev = (s as any).new_ev ?? {})['len_span'] = ((((s as any).new_ev ?? {})?.['window_end_ts'] ?? 0) - (((s as any).new_ev ?? {})?.['window_start_ts'] ?? 0)) + (((s as any).new_ev ?? {})?.['duration_ts'] ?? 0);
    } else {
      ((s as any).new_ev = (s as any).new_ev ?? {})['start_span'] = ((s as any).new_ev ?? 0)?.['start_ts'];
      ((s as any).new_ev = (s as any).new_ev ?? {})['len_span'] = Math.max(1, ((s as any).new_ev ?? 0)?.['duration_ts']);
    }
  }
  ((s as any).new_ev = (s as any).new_ev ?? {})['end_span'] = (((s as any).new_ev ?? {})?.['start_span'] ?? 0) + (((s as any).new_ev ?? {})?.['len_span'] ?? 0) - 1;
  (s as any).new_occurrences = 0;
  (s as any).new_last = (-1);
  // TODO-QSP: :loop_new_occurrence
  (s as any).new_occurrences = ((s as any).new_occurrences ?? 0) + (1);
  (s as any).new_day = qspFunc(s, 'calendar_events', 'next_occurrence_daystart', ((s as any).new_last ?? 0));
  if (((s as any).new_day ?? 0) === -1  ||  ((s as any).new_occurrences ?? 0) > 100) {
    return;
  }
  (s as any).new_last = ((s as any).new_day ?? 0);
  (s as any).temp_i = 0;
  // TODO-QSP: :loop_existing_events
  (s as any).temp_event_id = (((s as any).blocking_events_list ?? 0)?.[String((s as any).temp_i ?? 0)] ?? 0);
  if (((s as any).temp_event_id ?? 0) !== ''  &&  ((s as any).temp_event_id ?? 0) !== ((s as any).new_ev ?? 0)?.['id']) {
    if (((s as any).new_ev ?? 0)?.['exclude_prefix'] === ''  ||  ((String(((s as any).temp_event_id ?? 0)).indexOf(String(((s as any).new_ev ?? 0)?.['exclude_prefix']))) + 1) !== 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_event_id ?? 0)]; enterGetEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (qspFunc(s, 'calendar_events', 'event_occurs_in_day', ((s as any).temp_event_id ?? 0), ((s as any).new_day ?? 0)) === 1) {
        if (((s as any).event_vars ?? 0)?.['all_day'] === 1) {
          (s as any).other_start = 0;
          (s as any).other_len = 96;
        } else {
          if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
            (s as any).other_start = ((s as any).event_vars ?? 0)?.['window_start_ts'];
            (s as any).other_len = ((((s as any).event_vars ?? {})?.['window_end_ts'] ?? 0) - (((s as any).event_vars ?? {})?.['window_start_ts'] ?? 0)) + (((s as any).event_vars ?? {})?.['duration_ts'] ?? 0);
          } else {
            (s as any).other_start = ((s as any).event_vars ?? 0)?.['start_ts'];
            (s as any).other_len = Math.max(1, ((s as any).event_vars ?? 0)?.['duration_ts']);
          }
        }
        (s as any).other_end = ((s as any).other_start ?? 0) + ((s as any).other_len ?? 0) - 1;
        if (((s as any).other_start ?? 0) <= ((s as any).new_ev ?? 0)?.['end_span']  &&  ((s as any).other_end ?? 0) >= ((s as any).new_ev ?? 0)?.['start_span']) {
          (s as any).result = 1;
          // TODO-QSP: jump 'cec_conflict_found'
        }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_event_id ?? 0)]; enterGetEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (qspFunc(s, 'calendar_events', 'event_occurs_in_day', ((s as any).temp_event_id ?? 0), ((s as any).new_day ?? 0) - 1) === 1) {
        if (((s as any).event_vars ?? 0)?.['all_day'] === 0) {
          if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
            (s as any).cec_overflow_end = (((s as any).event_vars ?? {})?.['window_start_ts'] ?? 0) + ((((s as any).event_vars ?? {})?.['window_end_ts'] ?? 0) - (((s as any).event_vars ?? {})?.['window_start_ts'] ?? 0)) + (((s as any).event_vars ?? {})?.['duration_ts'] ?? 0) - 1;
          } else {
            (s as any).cec_overflow_end = (((s as any).event_vars ?? {})?.['start_ts'] ?? 0) + Math.max(1, ((s as any).event_vars ?? 0)?.['duration_ts']) - 1;
          }
          if (((s as any).cec_overflow_end ?? 0) > 95) {
            (s as any).cec_overflow_start = 0;
            (s as any).cec_overflow_end = ((s as any).cec_overflow_end ?? 0) - 96;
            if (((s as any).cec_overflow_start ?? 0) <= ((s as any).new_ev ?? 0)?.['end_span']  &&  ((s as any).cec_overflow_end ?? 0) >= ((s as any).new_ev ?? 0)?.['start_span']) {
              (s as any).result = 1;
              // TODO-QSP: jump 'cec_conflict_found'
            }
          }
        }
      }
      if (((s as any).new_ev ?? 0)?.['end_span'] > 95) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_event_id ?? 0)]; enterGetEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (qspFunc(s, 'calendar_events', 'event_occurs_in_day', ((s as any).temp_event_id ?? 0), ((s as any).new_day ?? 0) + 1) === 1) {
          if (((s as any).event_vars ?? 0)?.['all_day'] === 1) {
            (s as any).other_start = 0;
            (s as any).other_len = 96;
          } else {
            if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
              (s as any).other_start = ((s as any).event_vars ?? 0)?.['window_start_ts'];
              (s as any).other_len = ((((s as any).event_vars ?? {})?.['window_end_ts'] ?? 0) - (((s as any).event_vars ?? {})?.['window_start_ts'] ?? 0)) + (((s as any).event_vars ?? {})?.['duration_ts'] ?? 0);
            } else {
              (s as any).other_start = ((s as any).event_vars ?? 0)?.['start_ts'];
              (s as any).other_len = Math.max(1, ((s as any).event_vars ?? 0)?.['duration_ts']);
            }
          }
          (s as any).other_end = ((s as any).other_start ?? 0) + ((s as any).other_len ?? 0) - 1;
          (s as any).cec_overflow_start = 0;
          (s as any).cec_overflow_end = (((s as any).new_ev ?? {})?.['end_span'] ?? 0) - 96;
          if (((s as any).other_start ?? 0) <= ((s as any).cec_overflow_end ?? 0)  &&  ((s as any).other_end ?? 0) >= ((s as any).cec_overflow_start ?? 0)) {
            (s as any).result = 1;
            // TODO-QSP: jump 'cec_conflict_found'
          }
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 0]; enterLoadNewEv(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
  if (((s as any).temp_i ?? 0) < Object.keys((s as any).blocking_events_list ?? {}).length) {
    // TODO-QSP: jump 'loop_existing_events'
  }
  // TODO-QSP: jump 'loop_new_occurrence'
  // TODO-QSP: :cec_conflict_found
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveEvent(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterRemoveFromEventsList(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: $event_title[$ARGS[1]] = ''
  // TODO-QSP: $event_location[$ARGS[1]] = ''
  // TODO-QSP: $event_desc[$ARGS[1]] = ''
  // TODO-QSP: event_daystart[$ARGS[1]] = 0
  // TODO-QSP: event_all_day[$ARGS[1]] = 0
  // TODO-QSP: event_color[$ARGS[1]] = 0
  // TODO-QSP: event_priority[$ARGS[1]] = 0
  // TODO-QSP: event_blocking[$ARGS[1]] = 0
  // TODO-QSP: $event_recur[$ARGS[1]] = ''
  // TODO-QSP: event_recur_end[$ARGS[1]] = 0
  // TODO-QSP: event_holiday[$ARGS[1]] = 0
  // TODO-QSP: event_flex_type[$ARGS[1]] = 0
  // TODO-QSP: event_window_start_ts[$ARGS[1]] = 0
  // TODO-QSP: event_window_end_ts[$ARGS[1]] = 0
  // TODO-QSP: event_duration_ts[$ARGS[1]] = 0
  // TODO-QSP: event_start_ts[$ARGS[1]] = 0
  (s as any).cal_upcoming_dirty = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEvent(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = (((s as any).event_title ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = (((s as any).event_location ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = (((s as any).event_desc ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = (((s as any).event_daystart ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = (((s as any).event_all_day ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = (((s as any).event_color ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['blocking'] = (((s as any).event_blocking ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = (((s as any).event_priority ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = (((s as any).event_recur ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = (((s as any).event_recur_end ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['holiday'] = (((s as any).event_holiday ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = (((s as any).event_flex_type ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  if (((s as any).event_flex_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (((s as any).event_window_start_ts ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
    ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (((s as any).event_window_end_ts ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
    ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (((s as any).event_duration_ts ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  } else {
    ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (((s as any).event_start_ts ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
    ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (((s as any).event_duration_ts ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'add_to_events_list':
      enterAddToEventsList(s, scene);
      break;
    case 'remove_from_events_list':
      enterRemoveFromEventsList(s, scene);
      break;
    case 'change_title':
      enterChangeTitle(s, scene);
      break;
    case 'mark_done':
      enterMarkDone(s, scene);
      break;
    case 'get_blocking_event':
      enterGetBlockingEvent(s, scene);
      break;
    case 'is_day_holiday':
      enterIsDayHoliday(s, scene);
      break;
    case 'event_occurs_in_day':
      enterEventOccursInDay(s, scene);
      break;
    case 'next_occurrence_daystart':
      enterNextOccurrenceDaystart(s, scene);
      break;
    case 'new_event':
      enterNewEvent(s, scene);
      break;
    case 'add_event':
      enterAddEvent(s, scene);
      break;
    case 'load_new_ev':
      enterLoadNewEv(s, scene);
      break;
    case 'check_event_conflicts':
      enterCheckEventConflicts(s, scene);
      break;
    case 'remove_event':
      enterRemoveEvent(s, scene);
      break;
    case 'get_event':
      enterGetEvent(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const calendar_events: LocationDef = {
  name: 'calendar_events',
  region: 'other',
  enter: enter,
};
