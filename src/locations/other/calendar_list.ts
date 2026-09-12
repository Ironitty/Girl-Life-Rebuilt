import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInitEventVars(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['blocking'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['holiday'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '';
  qspCall(s, 'time', 'to_daystart', 2024, 12, 31);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = 4;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAssignColor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).event_vars ?? 0)?.['color'] === 0) {
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = Math.floor(Math.random() * 20) + 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayNewYear(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 1, 1);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'holiday_new_year';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'New Year Holidays';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly-0101-0108';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayChristmas(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 1, 7);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'holiday_christmas';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Christmas';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayFatherland(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 2, 23);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'holiday_fatherland';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Defender of Fatherland Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayWomensDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 3, 8);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'holiday_womens_day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Women\'s Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayLaborDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 5, 1);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'holiday_labor_day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Spring and Labor Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayMay_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 5, 2);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'holiday_may_2';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'National Holiday';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayVictoryDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 5, 9);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'holiday_victory_day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Victory Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayRussiaDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 12);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'holiday_russia_day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Russia Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayJune_13(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 13);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'holiday_june_13';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'National Holiday';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayUnityDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'holiday_unity_day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Unity Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolWinterBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 12, 31);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_winter_break';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Winter Break';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly-1231-0114';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolSpringBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 3, 19);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_spring_break';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Spring Break';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly-0319-0325';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolSummerBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 5, 31);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_summer_break';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Summer Break';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly-0531-0830';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolAutumnBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 3);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_autumn_break';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Autumn Break';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'yearly-1103-1110';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolGraduation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 5, 26);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_graduation';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Graduation';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Graduation ceremony at school';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (4 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolMondayFall2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 5);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_monday_fall2016';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Literature, Art, Biology and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '1';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTuesdayFall2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 6);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_tuesday_fall2016';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '2';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolWednesdayFall2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 7);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_wednesday_fall2016';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Biology, History, Computer and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '3';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolThursdayFall2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 1);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_thursday_fall2016';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '4';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolFridayFall2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 2);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_friday_fall2016';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Literature, Art, History and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '5';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolMondayWinter2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 16);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_monday_winter2016';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Literature, Art, Biology and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '1';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTuesdayWinter2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 17);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_tuesday_winter2016';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '2';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolWednesdayWinter2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 11);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_wednesday_winter2016';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Biology, History, Computer and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '3';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolThursdayWinter2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 12);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_thursday_winter2016';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '4';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolFridayWinter2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 13);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_friday_winter2016';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Literature, Art, History and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '5';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolMondaySpring2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 16);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_monday_spring2017';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Literature, Art, Biology and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '1';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTuesdaySpring2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 17);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_tuesday_spring2017';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '2';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolWednesdaySpring2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 18);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_wednesday_spring2017';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Biology, History, Computer and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '3';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolThursdaySpring2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 19);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_thursday_spring2017';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '4';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolFridaySpring2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 20);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_friday_spring2017';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Literature, Art, History and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '5';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolMondayFinal2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 27);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_monday_final2017';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Literature, Art, Biology and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '1';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTuesdayFinal2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 28);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_tuesday_final2017';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '2';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolWednesdayFinal2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 29);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_wednesday_final2017';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Biology, History, Computer and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '3';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolThursdayFinal2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 30);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_thursday_final2017';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '4';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolFridayFinal2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 31);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'school_friday_final2017';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'School Day';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Residential Area School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Lessons today: Math, Russian, Literature, Art, History and P.E.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '5';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (8 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (6 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTherapistAppointment(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - (((s as any).week ?? 0) - 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'therapist_appointment';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Therapist Appointment';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Clinic';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (18 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (19 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '4';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTherapistHotelVisit(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 6;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'therapist_hotel_visit';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Hotel Visit';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Hotel';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'You don\'t know why, but you have to visit a specific hotel room.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (20 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (4 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '6';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDiscoParty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 3);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'disco_party';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Disco Party';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Community Center';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (20 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (22 * 4) + (30 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4) + (30 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '5 6';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGopnikInitiationEvent(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'gopnik_initiation_event';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Gopnik Initiation';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Apartment Garages';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Meet Lena and Lera at the apartment garages at eight. Don\'t be late.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (20 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (2 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).daystart ?? 0);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 9;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTrainMorning(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 1);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'train_morning';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Intercity Train';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Station';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (11 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (0 * 4) + (30 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'daily';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 9;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTrainEvening(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 1);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'train_evening';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Intercity Train';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Station';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (18 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (0 * 4) + (30 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'daily';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 9;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterChurchVigil(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'church_vigil';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Church Vigil';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Church';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (19 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (22 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (0 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '6';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 7;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterChurchLiturgy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 5);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'church_liturgy';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Divine Liturgy';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Church';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (9 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (11 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '7';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 7;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStarletsPracticeRegular(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'starlets_practice_regular';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Starlets Practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Community Center';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (16 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (2 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '1 3 6 7';
  qspCall(s, 'time', 'to_daystart', 2017, 5, 31);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['blocking'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['holiday'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 3;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStarletsPracticeFriday(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).odd_week ?? 0))) {
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 5;
  } else {
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 12;
  }
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'starlets_practice_friday';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Starlets Practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Community Center';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (16 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (2 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'biweekly';
  qspCall(s, 'time', 'to_daystart', 2017, 5, 31);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 3;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAnnaBdsmSession(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'anna_bdsm_session';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Session with Anna';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Hotel Pavlovsk';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Anna\'s BDSM training session.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (20 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (21 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (2 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '1 2';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 6;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNerdGameNightEvent(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + ((s as any).nerd_game ?? {})?.['fixed_uni_day'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'nerd_game_night_event';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Game Night';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Coffee Hole';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Weekly tabletop game night with Feofan and the nerds. Starts at \' + $func(\'time\', \'get_time_string\', 18, 0) + \'.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (17 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (18 * 4) + (15 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (3 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = qspUntranslated(s, "str(nerd_game['fixed_uni_day'])", { location: "calendar_list" });
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 4;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGopnikFightNightEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 1);
  // TODO-QSP: gs 'time', 'to_date', dateVars['daystart']
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? {})?.['daystart'] + ((6 - ((s as any).dateVars ?? {})?.['week'] + 7) % 7) + 14;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'gopnik_fight_night_event';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Gopnik Fight Night';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Old Pavlovsk School';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Fight night at the old school gymnasium. Starts at \' + $func(\'time\', \'get_time_string\', 20, 0) + \'.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (20 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (3 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'monthly-3-6';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 9;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBandPracticeEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 1);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'band_practice_event';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Band Practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Five Eight Estate Garages';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Radomir and the Praiders practice in a converted garage. Stop by to listen or hang out.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (16 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (20 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (2 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '3';
  qspCall(s, 'time', 'to_daystart', 2017, 5, 31);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 5;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingPractice_1(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cheerleading_practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Cheerleading Practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'School Gym';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (14 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '2 4';
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingPractice_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 11);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = Math.max(((s as any).daystart ?? 0), ((s as any).dateVars ?? 0)?.['daystart']) - ((s as any).week ?? 0) + 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cheerleading_practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Cheerleading Practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'School Gym';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (14 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '2 4';
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingPractice_3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = Math.max(((s as any).daystart ?? 0), ((s as any).dateVars ?? 0)?.['daystart']) - ((s as any).week ?? 0) + 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cheerleading_practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Cheerleading Practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'School Gym';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (14 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '2 4';
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingPractice_4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 26);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = Math.max(((s as any).daystart ?? 0), ((s as any).dateVars ?? 0)?.['daystart']) - ((s as any).week ?? 0) + 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cheerleading_practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Cheerleading Practice';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'School Gym';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (14 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '2 4';
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingGameTomorrow(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) + 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cheerleading_game';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Cheerleading at Game';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'School Gym';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (14 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingGame_1(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).odd_week ?? 0) === 1  &&  ((s as any).week ?? 0) <= 5)  ||  (((s as any).odd_week ?? 0) === 0  &&  ((s as any).week ?? 0) >= 6)) {
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 5;
  } else {
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 12;
  }
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cheerleading_game';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Cheerleading at Game';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'School Gym';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (14 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'biweekly';
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingGame_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cheerleading_game';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Cheerleading at Game';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'School Gym';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (14 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'biweekly';
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingGame_3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 27);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cheerleading_game';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Cheerleading at Game';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'School Gym';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (14 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'biweekly';
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingGame_4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 24);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cheerleading_game';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Cheerleading at Game';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'School Gym';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (14 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (15 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (1 * 4) + (45 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'biweekly';
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterVolleyballTournament(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 6;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'volleyball_tournament';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Volleyball Tournament';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Community Center';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Weekly tournament. Make sure to bring your A-game.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (16 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = (18 * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (4 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '6';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGuitarLesson(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).ml_guitarlesson ?? 0)?.['nextlesson'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'guitar_lessons_' + ((s as any).ml_guitarlesson ?? {})?.['nextlesson'] + '_' + ((s as any).ml_guitarlesson ?? {})?.['lessonhour'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Guitar Lesson';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Pavlovsk Community Center';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_start_ts'] = (((s as any).ml_guitarlesson ?? {})?.['lessonhour'] * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['window_end_ts'] = ((((s as any).ml_guitarlesson ?? {})?.['lessonhour'] + 1) * 4) + (0 / 15);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (45 / 15);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMitkaDrinkingInvite(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'mitka_drinking_invite';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Drinks with Mitka';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = 'Forest Road, Gadukino';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Mitka, Kolyamba, and Vasyan meet by the forest road outside the village to drink moonshine, starting at \' + $func(\'time\', \'get_time_string\', 20, 0) + \'.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['flex_type'] = 0;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['start_ts'] = (20 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['duration_ts'] = (3 * 4);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).daystart ?? 0);
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 9;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFineDeadline(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).policeQW ?? 0)?.['fine_deadline'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'fine_deadline_' + ((s as any).policeQW ?? {})?.['fine_deadline'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = ((s as any).policeQW ?? {})?.['legal_fine'] + ' Fine Due';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBlackmailPaymentDeadline(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).blackmailQW ?? 0)?.['smsday'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'blackmail_payment_deadline';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Blackmailer Payment Due';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Leave \' + $func(\'money\', \'string_price\', blackmailQW[\'next_payment\']) + \' in a park before midnight. Don\'t be late or there will be consequences.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).blackmailQW ?? 0)?.['smsday'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBelgangPaymentDeadline(s: GameState, scene: SceneBuilder): void {
  if (((s as any).belfirstweek ?? 0) === 1) {
    if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 14;
  } else {
    if (((s as any).week ?? 0) === 7) {
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) + 7;
    } else {
      if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 7;
    }
  }
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'belgang_payment_deadline';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Vadim Bely Payment Due';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['loc'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['desc'] = 'Weekly payment of \' + $func(\'money\', \'string_debt\', belgangPayWeek) + \' due to Vadim Bely. Find him somewhere in town on Sunday.';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = '';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur_end'] = ((s as any).event_vars ?? 0)?.['daystart'];
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['priority'] = 2;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCyclePhase_0(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cycle_0';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Menstrual Phase' + ((((s as any).cheatVars ?? 0)?.['track_period'] === 1) ? ('') : (' (est.)'));
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 3;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'daily';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCyclePhase_1(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cycle_1';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Follicular Phase' + ((((s as any).cheatVars ?? 0)?.['track_period'] === 1) ? ('') : (' (est.)'));
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 5;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'daily';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCyclePhase_2(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cycle_2';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Fertile Phase' + ((((s as any).cheatVars ?? 0)?.['track_period'] === 1) ? ('') : (' (est.)'));
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 7;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'daily';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCyclePhase_3(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['id'] = 'cycle_3';
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['title'] = 'Luteal Phase' + ((((s as any).cheatVars ?? 0)?.['track_period'] === 1) ? ('') : (' (est.)'));
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['color'] = 9;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['all_day'] = 1;
  if (!(s as any).event_vars) (s as any).event_vars = {}; (s as any).event_vars['recur'] = 'daily';
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init_event_vars':
      enterInitEventVars(s, scene);
      break;
    case 'assign_color':
      enterAssignColor(s, scene);
      break;
    case 'holiday_new_year':
      enterHolidayNewYear(s, scene);
      break;
    case 'holiday_christmas':
      enterHolidayChristmas(s, scene);
      break;
    case 'holiday_fatherland':
      enterHolidayFatherland(s, scene);
      break;
    case 'holiday_womens_day':
      enterHolidayWomensDay(s, scene);
      break;
    case 'holiday_labor_day':
      enterHolidayLaborDay(s, scene);
      break;
    case 'holiday_may_2':
      enterHolidayMay_2(s, scene);
      break;
    case 'holiday_victory_day':
      enterHolidayVictoryDay(s, scene);
      break;
    case 'holiday_russia_day':
      enterHolidayRussiaDay(s, scene);
      break;
    case 'holiday_june_13':
      enterHolidayJune_13(s, scene);
      break;
    case 'holiday_unity_day':
      enterHolidayUnityDay(s, scene);
      break;
    case 'school_winter_break':
      enterSchoolWinterBreak(s, scene);
      break;
    case 'school_spring_break':
      enterSchoolSpringBreak(s, scene);
      break;
    case 'school_summer_break':
      enterSchoolSummerBreak(s, scene);
      break;
    case 'school_autumn_break':
      enterSchoolAutumnBreak(s, scene);
      break;
    case 'school_graduation':
      enterSchoolGraduation(s, scene);
      break;
    case 'school_monday_fall2016':
      enterSchoolMondayFall2016(s, scene);
      break;
    case 'school_tuesday_fall2016':
      enterSchoolTuesdayFall2016(s, scene);
      break;
    case 'school_wednesday_fall2016':
      enterSchoolWednesdayFall2016(s, scene);
      break;
    case 'school_thursday_fall2016':
      enterSchoolThursdayFall2016(s, scene);
      break;
    case 'school_friday_fall2016':
      enterSchoolFridayFall2016(s, scene);
      break;
    case 'school_monday_winter2016':
      enterSchoolMondayWinter2016(s, scene);
      break;
    case 'school_tuesday_winter2016':
      enterSchoolTuesdayWinter2016(s, scene);
      break;
    case 'school_wednesday_winter2016':
      enterSchoolWednesdayWinter2016(s, scene);
      break;
    case 'school_thursday_winter2016':
      enterSchoolThursdayWinter2016(s, scene);
      break;
    case 'school_friday_winter2016':
      enterSchoolFridayWinter2016(s, scene);
      break;
    case 'school_monday_spring2017':
      enterSchoolMondaySpring2017(s, scene);
      break;
    case 'school_tuesday_spring2017':
      enterSchoolTuesdaySpring2017(s, scene);
      break;
    case 'school_wednesday_spring2017':
      enterSchoolWednesdaySpring2017(s, scene);
      break;
    case 'school_thursday_spring2017':
      enterSchoolThursdaySpring2017(s, scene);
      break;
    case 'school_friday_spring2017':
      enterSchoolFridaySpring2017(s, scene);
      break;
    case 'school_monday_final2017':
      enterSchoolMondayFinal2017(s, scene);
      break;
    case 'school_tuesday_final2017':
      enterSchoolTuesdayFinal2017(s, scene);
      break;
    case 'school_wednesday_final2017':
      enterSchoolWednesdayFinal2017(s, scene);
      break;
    case 'school_thursday_final2017':
      enterSchoolThursdayFinal2017(s, scene);
      break;
    case 'school_friday_final2017':
      enterSchoolFridayFinal2017(s, scene);
      break;
    case 'therapist_appointment':
      enterTherapistAppointment(s, scene);
      break;
    case 'therapist_hotel_visit':
      enterTherapistHotelVisit(s, scene);
      break;
    case 'disco_party':
      enterDiscoParty(s, scene);
      break;
    case 'gopnik_initiation_event':
      enterGopnikInitiationEvent(s, scene);
      break;
    case 'train_morning':
      enterTrainMorning(s, scene);
      break;
    case 'train_evening':
      enterTrainEvening(s, scene);
      break;
    case 'church_vigil':
      enterChurchVigil(s, scene);
      break;
    case 'church_liturgy':
      enterChurchLiturgy(s, scene);
      break;
    case 'starlets_practice_regular':
      enterStarletsPracticeRegular(s, scene);
      break;
    case 'starlets_practice_friday':
      enterStarletsPracticeFriday(s, scene);
      break;
    case 'anna_bdsm_session':
      enterAnnaBdsmSession(s, scene);
      break;
    case 'nerd_game_night_event':
      enterNerdGameNightEvent(s, scene);
      break;
    case 'gopnik_fight_night_event':
      enterGopnikFightNightEvent(s, scene);
      break;
    case 'band_practice_event':
      enterBandPracticeEvent(s, scene);
      break;
    case 'cheerleading_practice_1':
      enterCheerleadingPractice_1(s, scene);
      break;
    case 'cheerleading_practice_2':
      enterCheerleadingPractice_2(s, scene);
      break;
    case 'cheerleading_practice_3':
      enterCheerleadingPractice_3(s, scene);
      break;
    case 'cheerleading_practice_4':
      enterCheerleadingPractice_4(s, scene);
      break;
    case 'cheerleading_game_tomorrow':
      enterCheerleadingGameTomorrow(s, scene);
      break;
    case 'cheerleading_game_1':
      enterCheerleadingGame_1(s, scene);
      break;
    case 'cheerleading_game_2':
      enterCheerleadingGame_2(s, scene);
      break;
    case 'cheerleading_game_3':
      enterCheerleadingGame_3(s, scene);
      break;
    case 'cheerleading_game_4':
      enterCheerleadingGame_4(s, scene);
      break;
    case 'volleyball_tournament':
      enterVolleyballTournament(s, scene);
      break;
    case 'guitar_lesson':
      enterGuitarLesson(s, scene);
      break;
    case 'mitka_drinking_invite':
      enterMitkaDrinkingInvite(s, scene);
      break;
    case 'fine_deadline':
      enterFineDeadline(s, scene);
      break;
    case 'blackmail_payment_deadline':
      enterBlackmailPaymentDeadline(s, scene);
      break;
    case 'belgang_payment_deadline':
      enterBelgangPaymentDeadline(s, scene);
      break;
    case 'cycle_phase_0':
      enterCyclePhase_0(s, scene);
      break;
    case 'cycle_phase_1':
      enterCyclePhase_1(s, scene);
      break;
    case 'cycle_phase_2':
      enterCyclePhase_2(s, scene);
      break;
    case 'cycle_phase_3':
      enterCyclePhase_3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const calendar_list: LocationDef = {
  name: 'calendar_list',
  region: 'other',
  enter: enter,
};
