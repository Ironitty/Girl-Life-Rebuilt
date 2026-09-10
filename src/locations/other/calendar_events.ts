import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAddToEventsList(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).events_list) ? ((s as any).events_list as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) === -1) {
    // TODO-QSP: $events_list[] = $ARGS[1]
  }
  return;
  scene.build();
}

function enterRemoveFromEventsList(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_index = qspUntranslated(s, "arrpos('events_list', ARGS[1])", { location: "calendar_events" });
  if (((s as any).temp_index ?? 0) !== -1) {
  }
  return;
  scene.build();
}

function enterChangeTitle(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).events_list) ? ((s as any).events_list as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) >= 0) {
    // TODO-QSP: $event_title[$ARGS[1]] = $ARGS[2]
  }
  return;
  scene.build();
}

function enterMarkDone(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).events_list) ? ((s as any).events_list as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) >= 0) {
    // TODO-QSP: $event_title[$ARGS[1]] = '<s><<$event_title[$ARGS[1]]>></s>'
  }
  return;
  scene.build();
}

function enterGetBlockingEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_block_idx = 0;
  // TODO-QSP: :build_blocking_list
  if (((s as any).temp_block_idx ?? 0) < Object.keys((s as any).events_list ?? {}).length) {
    if (((s as any).temp_block_id ?? 0) !== ''  &&  ((s as any).event_blocking ?? 0)?.[String((s as any).temp_block_id ?? 0)] !== 0) {
      // TODO-QSP: $blocking_events_list[] = $temp_block_id
    }
    (s as any).temp_block_idx = ((s as any).temp_block_idx ?? 0) + (1);
    // TODO-QSP: jump 'build_blocking_list'
  }
  (s as any).blocking_events_count = 0;
  return;
  scene.build();
}

function enterIsDayHoliday(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'time', 'to_date', ARGS[1]
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
  scene.build();
}

function enterEventOccursInDay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
    qspCall(s, 'calendar_events', 'get_event', ((s as any).locArgs?.[1] ?? 0));
  }
  (s as any).result = 0;
  if (((s as any).event_vars ?? 0)?.['daystart'] > ((s as any).ARGS ?? 0)[2]) {
    return;
  }
  if (((s as any).event_vars ?? 0)?.['holiday'] !== 0) {
    (s as any).temp_is_holiday = qspFunc(s, 'calendar_events', 'is_day_holiday', qspUntranslated(s, "ARGS[2]", { location: "calendar_events" }));
    if ((((s as any).event_vars ?? 0)?.['holiday'] === 1  &&  ((s as any).temp_is_holiday ?? 0) === 1)  ||  (((s as any).event_vars ?? 0)?.['holiday'] === 2  &&  ((s as any).temp_is_holiday ?? 0) === 0)) {
      return;
    }
  }
  if (((s as any).event_vars ?? 0)?.['daystart'] === ((s as any).ARGS ?? 0)[2]  &&  parseFloat(qspUntranslated(s, "\u00002\u0000", { location: "calendar_events" })) === 0) {
    (s as any).result = 1;
    return;
  }
  if (((s as any).event_vars ?? 0)?.['recur'] !== ''  &&  (((s as any).event_vars ?? 0)?.['recur_end'] === 0  ||  ((s as any).event_vars ?? 0)?.['recur_end'] >= ((s as any).ARGS ?? 0)[2])) {
    if (((s as any).event_vars ?? 0)?.['recur'] === 'yearly') {
      // TODO-QSP: gs 'time', 'to_date', ARGS[2]
      (s as any).temp_month_1 = ((s as any).dateVars ?? 0)?.['month'];
      (s as any).temp_day_1 = ((s as any).dateVars ?? 0)?.['day'];
      // TODO-QSP: gs 'time', 'to_date', event_vars['daystart']
      (s as any).temp_month_2 = ((s as any).dateVars ?? 0)?.['month'];
      (s as any).temp_day_2 = ((s as any).dateVars ?? 0)?.['day'];
      if (((s as any).temp_month_1 ?? 0) === ((s as any).temp_month_2 ?? 0)  &&  ((s as any).temp_day_1 ?? 0) === ((s as any).temp_day_2 ?? 0)) {
        (s as any).result = 1;
      }
    } else {
      // TODO-QSP: gs 'time', 'to_date', ARGS[2]
      (s as any).temp_check_month = ((s as any).dateVars ?? 0)?.['month'];
      (s as any).temp_check_day = ((s as any).dateVars ?? 0)?.['day'];
      (s as any).temp_check_mmdd = ((s as any).temp_check_month ?? 0) * 100 + ((s as any).temp_check_day ?? 0);
      (s as any).temp_start_mmdd = qspUntranslated(s, "val(mid(event_vars['recur'], 8, 4))", { location: "calendar_events" });
      (s as any).temp_end_mmdd = qspUntranslated(s, "val(mid(event_vars['recur'], 13, 4))", { location: "calendar_events" });
      if (((s as any).temp_start_mmdd ?? 0) <= ((s as any).temp_end_mmdd ?? 0)) {
        if (((s as any).temp_check_mmdd ?? 0) >= ((s as any).temp_start_mmdd ?? 0)  &&  ((s as any).temp_check_mmdd ?? 0) <= ((s as any).temp_end_mmdd ?? 0)) {
          (s as any).result = 1;
        }
      } else {
        if (((s as any).temp_check_mmdd ?? 0) >= ((s as any).temp_start_mmdd ?? 0)  ||  ((s as any).temp_check_mmdd ?? 0) <= ((s as any).temp_end_mmdd ?? 0)) {
          (s as any).result = 1;
        }
      }
      if (((qspUntranslated(s, "\u00000\u0000", { location: "calendar_events" })).slice((1)-1, ((1)-1)+(8))) === 'monthly-') {
        // TODO-QSP: gs 'time', 'to_date', ARGS[2]
        if (((s as any).dateVars ?? 0)?.['week'] === parseFloat(qspUntranslated(s, "\u00002\u0000", { location: "calendar_events" }))) {
          if ((((s as any).dateVars ?? 0)?.['day'] - 1) / 7 + 1 === parseFloat(qspUntranslated(s, "\u00002\u0000", { location: "calendar_events" }))) {
            (s as any).result = 1;
          }
        }
      } else {
        // TODO-QSP: gs 'time', 'to_date', ARGS[2]
        (s as any).temp_month_day_1 = ((s as any).dateVars ?? 0)?.['day'];
        // TODO-QSP: gs 'time', 'to_date', event_vars['daystart']
        (s as any).temp_month_day_2 = ((s as any).dateVars ?? 0)?.['day'];
        if (((s as any).temp_month_day_1 ?? 0) === ((s as any).temp_month_day_2 ?? 0)) {
          (s as any).result = 1;
        }
        if (((s as any).event_vars ?? 0)?.['recur'] === 'biweekly') {
          (s as any).day_diff = ((s as any).event_vars ?? 0)?.['daystart'] - ((s as any).ARGS ?? 0)[2];
          (s as any).day_diff = ((((s as any).day_diff ?? 0) < 0) ? (0 - ((s as any).day_diff ?? 0)) : (((s as any).day_diff ?? 0)));
          if (((s as any).day_diff ?? 0) % 14 === 0) {
            (s as any).result = 1;
          }
        } else {
          (s as any).day_diff = ((s as any).event_vars ?? 0)?.['daystart'] - ((s as any).ARGS ?? 0)[2];
          (s as any).day_diff = ((((s as any).day_diff ?? 0) < 0) ? (0 - ((s as any).day_diff ?? 0)) : (((s as any).day_diff ?? 0)));
          if (((s as any).day_diff ?? 0) % 7 === 0) {
            (s as any).result = 1;
          }
          if (((s as any).event_vars ?? 0)?.['recur'] === 'daily') {
            (s as any).result = 1;
          } else {
            (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', qspUntranslated(s, "ARGS[2]", { location: "calendar_events" }));
            if (((' \' + \'0\' + \' ').indexOf((' \' + $str(temp_weekday) + \' '))) + 1 > 0) {
              (s as any).result = 1;
            }
          }
        }
        return;
      }
    }
  }
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
    default:
      enterAddToEventsList(s, scene);
      break;
  }
}

export const calendar_events: LocationDef = {
  name: 'calendar_events',
  region: 'other',
  enter: enter,
};
