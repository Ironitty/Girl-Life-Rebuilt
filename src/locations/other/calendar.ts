import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShow(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) > 0) {
    (s as any).calendar_ui_week_start = qspUntranslated(s, "ARGS[1]", { location: "calendar" });
  } else {
    (s as any).calendar_ui_week_start = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 1;
  }
  qspCall(s, 'calendar_schedule', 'build_week_schedule', ((s as any).calendar_ui_week_start ?? 0));
  // TODO-QSP: $result += '<a href="exec: gs ''calendar'', ''navigate'', ''prev''">« Previous Week</a> | '
  // TODO-QSP: $result += '<a href="exec: gs ''calendar'', ''navigate'', ''today''">Today</a> | '
  // TODO-QSP: $result += '<a href="exec: gs ''calendar'', ''navigate'', ''next''">Next Week »</a>'
  // TODO-QSP: $result += '</div></center>'
  // TODO-QSP: $result +=  $func('calendar_render', 'render_calendar')
  qspCall(s, 'journal', 'journalmenu');
  // TODO-QSP: $result
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNavigate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_nav_direction ?? 0) === 'prev') {
    (s as any).calendar_ui_week_start = ((s as any).calendar_ui_week_start ?? 0) - (7);
  } else {
    if (((s as any).temp_nav_direction ?? 0) === 'next') {
      (s as any).calendar_ui_week_start = ((s as any).calendar_ui_week_start ?? 0) + (7);
    } else {
      if (((s as any).temp_nav_direction ?? 0) === 'today') {
        (s as any).calendar_ui_week_start = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 1;
      }
    }
  }
  qspCall(s, 'calendar', 'show', ((s as any).calendar_ui_week_start ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_list', 'init_event_vars');
  qspCall(s, 'calendar_list', '', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'calendar_list', 'assign_color');
  // TODO-QSP: gs 'calendar_events', 'new_event', $event_vars['id']
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'remove_event', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPack(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'holidays') {
    qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'holiday_new_year');
    qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'holiday_christmas');
    qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'holiday_fatherland');
    qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'holiday_womens_day');
    qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'holiday_labor_day');
    qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'holiday_may_2');
    qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'holiday_victory_day');
    qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'holiday_russia_day');
    qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'holiday_june_13');
    qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'holiday_unity_day');
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'school') {
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_winter_break');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_spring_break');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_summer_break');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_autumn_break');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_graduation');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_monday_fall2016');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_tuesday_fall2016');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_wednesday_fall2016');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_thursday_fall2016');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_friday_fall2016');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_monday_winter2016');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_tuesday_winter2016');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_wednesday_winter2016');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_thursday_winter2016');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_friday_winter2016');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_monday_spring2017');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_tuesday_spring2017');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_wednesday_spring2017');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_thursday_spring2017');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_friday_spring2017');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_monday_final2017');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_tuesday_final2017');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_wednesday_final2017');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_thursday_final2017');
      qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'school_friday_final2017');
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'church') {
        qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'church_vigil');
        qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'church_liturgy');
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'intercity_trains') {
          qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'train_morning');
          qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'train_evening');
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'starlets') {
            qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'starlets_practice_regular');
            qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'starlets_practice_friday');
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 'cheerleading_practice') {
              qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cheerleading_practice_1');
              qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cheerleading_practice_2');
              qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cheerleading_practice_3');
              qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cheerleading_practice_4');
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'cheerleading_games') {
                qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cheerleading_game_1');
                qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cheerleading_game_2');
                qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cheerleading_game_3');
                qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cheerleading_game_4');
              } else {
                if (((s as any).locArgs?.[2] ?? 0) === 'cycle_phases') {
                  qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cycle_0');
                  qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cycle_1');
                  qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cycle_2');
                  qspCall(s, 'calendar', '', ((s as any).temp_function ?? 0), 'cycle_3');
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

function enterCycleRebuild(s: GameState, scene: SceneBuilder): void {
  if (((s as any).calCycleOpts ?? 0)?.['rebuild_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).locArgs?.[1] ?? 0) !== 1) {
    // TODO-QSP: exit
  }
  ((s as any).calCycleOpts ?? {})['rebuild_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'calendar', 'pack', 'remove', 'cycle_phases');
  if (((s as any).succubusflag ?? 0) === 1  ||  ((s as any).cycle ?? 0) >= 4  ||  ((s as any).calCycleOpts ?? 0)['phase_start_' + ((s as any).cycle ?? 0)] === 0  ||  ((s as any).calCycleOpts ?? 0)?.['show_0'] + ((s as any).calCycleOpts ?? 0)?.['show_1'] + ((s as any).calCycleOpts ?? 0)?.['show_2'] + ((s as any).calCycleOpts ?? 0)?.['show_3'] === 0) {
    // TODO-QSP: exit
  }
  ((s as any).cal_cycle ?? {})['dur_0'] = 5;
  ((s as any).cal_cycle ?? {})['dur_1'] = 9;
  ((s as any).cal_cycle ?? {})['dur_2'] = 2;
  ((s as any).cal_cycle ?? {})['dur_3'] = 12;
  (s as any).chain_end = ((s as any).calCycleOpts ?? {})?.['phase_start_'] - 1;
  (s as any).ph_n = 0;
  // TODO-QSP: :phase_loop
  (s as any).ph_idx = (((s as any).cycle ?? 0) + ((s as any).ph_n ?? 0)) % 4;
  qspCall(s, 'calendar_list', 'init_event_vars');
  // TODO-QSP: gs 'calendar_list', 'cycle_phase_' + ph_idx
  ((s as any).event_vars ?? {})['daystart'] = ((s as any).chain_end ?? 0) + 1;
  ((s as any).event_vars ?? {})['recur_end'] = Math.max(((s as any).chain_end ?? 0) + ((s as any).cal_cycle ?? {})?.['dur_'], ((s as any).daystart ?? 0));
  if (((s as any).calCycleOpts ?? 0)['show_' + ((s as any).ph_idx ?? 0)] === 1) {
    // TODO-QSP: gs 'calendar_events', 'new_event', $event_vars['id']
  }
  (s as any).chain_end = ((s as any).event_vars ?? 0)?.['recur_end'];
  (s as any).ph_n = ((s as any).ph_n ?? 0) + (1);
  if (((s as any).ph_n ?? 0) < 4) {
    // TODO-QSP: jump 'phase_loop'
  }
  (s as any).cal_upcoming_dirty = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'show':
      enterShow(s, scene);
      break;
    case 'navigate':
      enterNavigate(s, scene);
      break;
    case 'add':
      enterAdd(s, scene);
      break;
    case 'remove':
      enterRemove(s, scene);
      break;
    case 'pack':
      enterPack(s, scene);
      break;
    case 'cycle_rebuild':
      enterCycleRebuild(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const calendar: LocationDef = {
  name: 'calendar',
  region: 'other',
  enter: enter,
};
