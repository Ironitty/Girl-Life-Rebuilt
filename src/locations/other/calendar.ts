import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShow(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') > 0) {
    (s as any).calendar_ui_week_start = ((s as any).locArgs?.[1] ?? 0);
  } else {
    (s as any).calendar_ui_week_start = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 1;
  }
  qspCall(s, 'calendar_schedule', 'build_week_schedule', ((s as any).calendar_ui_week_start ?? 0));
  (s as any).result = '<center><div class="calendar-controls" style="margin: 10px 0;">';
  (s as any).result = ((s as any).result ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027calendar\u0027, \u0027navigate\u0027, \u0027prev\u0027); return false;">« Previous Week</a> | ');
  (s as any).result = ((s as any).result ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027calendar\u0027, \u0027navigate\u0027, \u0027today\u0027); return false;">Today</a> | ');
  (s as any).result = ((s as any).result ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027calendar\u0027, \u0027navigate\u0027, \u0027next\u0027); return false;">Next Week »</a>');
  (s as any).result = ((s as any).result ?? 0) + ('</div></center>');
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'calendar_render', 'render_calendar'));
  qspCall(s, 'journal', 'journalmenu');
  s.scene = { ...s.scene, mainText: String((s as any).result || ''), curActs: [] };
  (s as any).calendar_html = undefined;
  (s as any).controls_html = undefined;
  (s as any).week_schedule = undefined;
  return;
  scene.build();
}

function enterNavigate(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_nav_direction = ((s as any).locArgs?.[1] ?? 0);
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).calendar_ui_week_start ?? 0)]; enterShow(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_nav_direction = undefined;
  return;
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_list', 'init_event_vars');
  qspCall(s, 'calendar_list', '$ARGS[1]');
  qspCall(s, 'calendar_list', 'assign_color');
  qspCall(s, 'calendar_events', 'new_event', (((s as any).event_vars ?? 0)?.['id']));
  return;
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar_events', 'remove_event', ((s as any).locArgs?.[1] ?? 0));
  (s as any).event_vars = undefined;
  return;
  scene.build();
}

function enterPack(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_function = ((s as any).locArgs?.[1] ?? 0);
  if (String((s as any).locArgs?.[2] ?? '') === 'holidays') {
    qspCall(s, 'calendar', '$temp_function', 'holiday_new_year');
    qspCall(s, 'calendar', '$temp_function', 'holiday_christmas');
    qspCall(s, 'calendar', '$temp_function', 'holiday_fatherland');
    qspCall(s, 'calendar', '$temp_function', 'holiday_womens_day');
    qspCall(s, 'calendar', '$temp_function', 'holiday_labor_day');
    qspCall(s, 'calendar', '$temp_function', 'holiday_may_2');
    qspCall(s, 'calendar', '$temp_function', 'holiday_victory_day');
    qspCall(s, 'calendar', '$temp_function', 'holiday_russia_day');
    qspCall(s, 'calendar', '$temp_function', 'holiday_june_13');
    qspCall(s, 'calendar', '$temp_function', 'holiday_unity_day');
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'school') {
      qspCall(s, 'calendar', '$temp_function', 'school_winter_break');
      qspCall(s, 'calendar', '$temp_function', 'school_spring_break');
      qspCall(s, 'calendar', '$temp_function', 'school_summer_break');
      qspCall(s, 'calendar', '$temp_function', 'school_autumn_break');
      qspCall(s, 'calendar', '$temp_function', 'school_graduation');
      qspCall(s, 'calendar', '$temp_function', 'school_monday_fall2016');
      qspCall(s, 'calendar', '$temp_function', 'school_tuesday_fall2016');
      qspCall(s, 'calendar', '$temp_function', 'school_wednesday_fall2016');
      qspCall(s, 'calendar', '$temp_function', 'school_thursday_fall2016');
      qspCall(s, 'calendar', '$temp_function', 'school_friday_fall2016');
      qspCall(s, 'calendar', '$temp_function', 'school_monday_winter2016');
      qspCall(s, 'calendar', '$temp_function', 'school_tuesday_winter2016');
      qspCall(s, 'calendar', '$temp_function', 'school_wednesday_winter2016');
      qspCall(s, 'calendar', '$temp_function', 'school_thursday_winter2016');
      qspCall(s, 'calendar', '$temp_function', 'school_friday_winter2016');
      qspCall(s, 'calendar', '$temp_function', 'school_monday_spring2017');
      qspCall(s, 'calendar', '$temp_function', 'school_tuesday_spring2017');
      qspCall(s, 'calendar', '$temp_function', 'school_wednesday_spring2017');
      qspCall(s, 'calendar', '$temp_function', 'school_thursday_spring2017');
      qspCall(s, 'calendar', '$temp_function', 'school_friday_spring2017');
      qspCall(s, 'calendar', '$temp_function', 'school_monday_final2017');
      qspCall(s, 'calendar', '$temp_function', 'school_tuesday_final2017');
      qspCall(s, 'calendar', '$temp_function', 'school_wednesday_final2017');
      qspCall(s, 'calendar', '$temp_function', 'school_thursday_final2017');
      qspCall(s, 'calendar', '$temp_function', 'school_friday_final2017');
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'church') {
        qspCall(s, 'calendar', '$temp_function', 'church_vigil');
        qspCall(s, 'calendar', '$temp_function', 'church_liturgy');
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'intercity_trains') {
          qspCall(s, 'calendar', '$temp_function', 'train_morning');
          qspCall(s, 'calendar', '$temp_function', 'train_evening');
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'starlets') {
            qspCall(s, 'calendar', '$temp_function', 'starlets_practice_regular');
            qspCall(s, 'calendar', '$temp_function', 'starlets_practice_friday');
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'cheerleading_practice') {
              qspCall(s, 'calendar', '$temp_function', 'cheerleading_practice_1');
              qspCall(s, 'calendar', '$temp_function', 'cheerleading_practice_2');
              qspCall(s, 'calendar', '$temp_function', 'cheerleading_practice_3');
              qspCall(s, 'calendar', '$temp_function', 'cheerleading_practice_4');
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'cheerleading_games') {
                qspCall(s, 'calendar', '$temp_function', 'cheerleading_game_1');
                qspCall(s, 'calendar', '$temp_function', 'cheerleading_game_2');
                qspCall(s, 'calendar', '$temp_function', 'cheerleading_game_3');
                qspCall(s, 'calendar', '$temp_function', 'cheerleading_game_4');
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'cycle_phases') {
                  qspCall(s, 'calendar', '$temp_function', 'cycle_0');
                  qspCall(s, 'calendar', '$temp_function', 'cycle_1');
                  qspCall(s, 'calendar', '$temp_function', 'cycle_2');
                  qspCall(s, 'calendar', '$temp_function', 'cycle_3');
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterCycleRebuild(s: GameState, scene: SceneBuilder): void {
  if (((s as any).calCycleOpts ?? 0)?.['rebuild_day'] === ((s as any).daystart ?? 0)  &&  String((s as any).locArgs?.[1] ?? '') !== 1) {
    return;
  }
  ((s as any).calCycleOpts = (s as any).calCycleOpts ?? {})['rebuild_day'] = ((s as any).daystart ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'remove', 'cycle_phases']; enterPack(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).succubusflag ?? 0) === 1  ||  ((s as any).cycle ?? 0) >= 4  ||  ((s as any).calCycleOpts ?? 0)['phase_start_' + ((s as any).cycle ?? 0)] === 0  ||  ((s as any).calCycleOpts ?? 0)?.['show_0'] + ((s as any).calCycleOpts ?? 0)?.['show_1'] + ((s as any).calCycleOpts ?? 0)?.['show_2'] + ((s as any).calCycleOpts ?? 0)?.['show_3'] === 0) {
    return;
  }
  ((s as any).cal_cycle = (s as any).cal_cycle ?? {})['dur_0'] = 5;
  ((s as any).cal_cycle = (s as any).cal_cycle ?? {})['dur_1'] = 9;
  ((s as any).cal_cycle = (s as any).cal_cycle ?? {})['dur_2'] = 2;
  ((s as any).cal_cycle = (s as any).cal_cycle ?? {})['dur_3'] = 12;
  (s as any).chain_end = (((s as any).calCycleOpts ?? {})?.['phase_start_'] ?? 0) - 1;
  (s as any).ph_n = 0;
  do {
    (s as any).ph_idx = (((s as any).cycle ?? 0) + ((s as any).ph_n ?? 0)) % 4;
    qspCall(s, 'calendar_list', 'init_event_vars');
    qspCall(s, 'calendar_list', '', 'cycle_phase_' + ((s as any).ph_idx ?? 0));
    ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).chain_end ?? 0) + 1;
    ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = Math.max(((s as any).chain_end ?? 0) + (((s as any).cal_cycle ?? {})?.['dur_'] ?? 0), ((s as any).daystart ?? 0));
    if (((s as any).calCycleOpts ?? 0)['show_' + ((s as any).ph_idx ?? 0)] === 1) {
      qspCall(s, 'calendar_events', 'new_event', (((s as any).event_vars ?? 0)?.['id']));
    }
    (s as any).chain_end = (((s as any).event_vars ?? 0)?.['recur_end']);
    (s as any).ph_n = ((s as any).ph_n ?? 0) + (1);
    (s as any).cal_upcoming_dirty = 1;
    (s as any).cal_cycle = undefined;
    return;
  } while (((s as any).ph_n ?? 0) < 4);
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
