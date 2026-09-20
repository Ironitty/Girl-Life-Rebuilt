import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInitEventVars(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['blocking'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['holiday'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '';
  qspCall(s, 'time', 'to_daystart', 2024, 12, 31);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = 4;
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAssignColor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).event_vars ?? 0)?.['color'] === 0) {
    ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = (Math.floor(Math.random() * 20) + 1);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayNewYear(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 1, 1);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'holiday_new_year';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'New Year Holidays';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly-0101-0108';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayChristmas(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 1, 7);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'holiday_christmas';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Christmas';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayFatherland(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 2, 23);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'holiday_fatherland';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Defender of Fatherland Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayWomensDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 3, 8);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'holiday_womens_day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Women\'s Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayLaborDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 5, 1);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'holiday_labor_day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Spring and Labor Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayMay_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 5, 2);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'holiday_may_2';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'National Holiday';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayVictoryDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 5, 9);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'holiday_victory_day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Victory Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayRussiaDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 12);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'holiday_russia_day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Russia Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayJune_13(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 13);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'holiday_june_13';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'National Holiday';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHolidayUnityDay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'holiday_unity_day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Unity Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolWinterBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 12, 31);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_winter_break';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Winter Break';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly-1231-0114';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolSpringBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 3, 19);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_spring_break';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Spring Break';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly-0319-0325';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolSummerBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 5, 31);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_summer_break';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Summer Break';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly-0531-0830';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolAutumnBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 3);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_autumn_break';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Autumn Break';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'yearly-1103-1110';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolGraduation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 5, 26);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_graduation';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Graduation';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Graduation ceremony at school';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (4 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolMondayFall2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 5);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_monday_fall2016';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Literature, Art, Biology and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '1';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTuesdayFall2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 6);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_tuesday_fall2016';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '2';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolWednesdayFall2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 7);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_wednesday_fall2016';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Biology, History, Computer and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '3';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolThursdayFall2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 1);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_thursday_fall2016';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '4';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolFridayFall2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 2);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_friday_fall2016';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Literature, Art, History and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '5';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolMondayWinter2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 16);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_monday_winter2016';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Literature, Art, Biology and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '1';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTuesdayWinter2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 17);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_tuesday_winter2016';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '2';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolWednesdayWinter2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 11);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_wednesday_winter2016';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Biology, History, Computer and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '3';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolThursdayWinter2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 12);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_thursday_winter2016';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '4';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolFridayWinter2016(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 13);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_friday_winter2016';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Literature, Art, History and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '5';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolMondaySpring2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 16);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_monday_spring2017';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Literature, Art, Biology and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '1';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTuesdaySpring2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 17);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_tuesday_spring2017';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '2';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolWednesdaySpring2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 18);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_wednesday_spring2017';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Biology, History, Computer and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '3';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolThursdaySpring2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 19);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_thursday_spring2017';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '4';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolFridaySpring2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 20);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_friday_spring2017';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Literature, Art, History and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '5';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolMondayFinal2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 27);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_monday_final2017';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Literature, Art, Biology and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '1';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTuesdayFinal2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 28);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_tuesday_final2017';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '2';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolWednesdayFinal2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 29);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_wednesday_final2017';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Biology, History, Computer and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '3';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolThursdayFinal2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 30);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_thursday_final2017';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: English, Geography, Science, Shop, Computer and Music.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '4';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolFridayFinal2017(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 31);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'school_friday_final2017';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'School Day';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Residential Area School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Lessons today: Math, Russian, Literature, Art, History and P.E.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '5';
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (8 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (6 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 20;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTherapistAppointment(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - (((s as any).week ?? 0) - 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'therapist_appointment';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Therapist Appointment';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Clinic';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (18 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (19 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '4';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTherapistHotelVisit(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 6;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'therapist_hotel_visit';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Hotel Visit';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Hotel';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'You don\'t know why, but you have to visit a specific hotel room.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (20 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (4 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '6';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDiscoParty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 3);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'disco_party';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Disco Party';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Community Center';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (20 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (22 * 4) + (30 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4) + (30 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '5 6';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGopnikInitiationEvent(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'gopnik_initiation_event';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Gopnik Initiation';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Apartment Garages';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Meet Lena and Lera at the apartment garages at eight. Don\'t be late.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (20 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (2 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).daystart ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 9;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTrainMorning(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 1);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'train_morning';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Intercity Train';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Station';
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (11 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (0 * 4) + (30 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'daily';
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 9;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTrainEvening(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 1);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'train_evening';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Intercity Train';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Station';
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (18 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (0 * 4) + (30 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'daily';
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 9;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterChurchVigil(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'church_vigil';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Church Vigil';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Church';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (19 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (22 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (0 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '6';
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 7;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterChurchLiturgy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 5);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'church_liturgy';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Divine Liturgy';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Church';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (9 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (11 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '7';
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 7;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStarletsPracticeRegular(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'starlets_practice_regular';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Starlets Practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Community Center';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (16 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (2 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '1 3 6 7';
  qspCall(s, 'time', 'to_daystart', 2017, 5, 31);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['blocking'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['holiday'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 3;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStarletsPracticeFriday(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).odd_week ?? 0))) {
    ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 5;
  } else {
    ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 12;
  }
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'starlets_practice_friday';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Starlets Practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Community Center';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (16 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (2 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'biweekly';
  qspCall(s, 'time', 'to_daystart', 2017, 5, 31);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 3;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAnnaBdsmSession(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'anna_bdsm_session';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Session with Anna';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Hotel Pavlovsk';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Anna\'s BDSM training session.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (20 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (21 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (2 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '1 2';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 6;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNerdGameNightEvent(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + (((s as any).nerd_game ?? {})?.['fixed_uni_day'] ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'nerd_game_night_event';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Game Night';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Coffee Hole';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Weekly tabletop game night with Feofan and the nerds. Starts at ' + qspFunc(s, 'time', 'get_time_string', 18, 0) + '.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (17 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (18 * 4) + (15 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (3 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = String(((s as any).nerd_game ?? 0)?.['fixed_uni_day']);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 4;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGopnikFightNightEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 9, 1);
  // TODO-QSP: gs 'time', 'to_date', dateVars['daystart']
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = (((s as any).dateVars ?? {})?.['daystart'] ?? 0) + ((6 - (((s as any).dateVars ?? {})?.['week'] ?? 0) + 7) % 7) + 14;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'gopnik_fight_night_event';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Gopnik Fight Night';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Old Pavlovsk School';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Fight night at the old school gymnasium. Starts at ' + qspFunc(s, 'time', 'get_time_string', 20, 0) + '.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (20 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (3 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'monthly-3-6';
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 9;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBandPracticeEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 6, 1);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'band_practice_event';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Band Practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Five Eight Estate Garages';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Radomir and the Praiders practice in a converted garage. Stop by to listen or hang out.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (16 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (20 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (2 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '3';
  qspCall(s, 'time', 'to_daystart', 2017, 5, 31);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 5;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingPractice_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cheerleading_practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Cheerleading Practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'School Gym';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (14 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '2 4';
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingPractice_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 11);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = Math.max(((s as any).daystart ?? 0), ((s as any).dateVars ?? 0)?.['daystart']) - ((s as any).week ?? 0) + 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cheerleading_practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Cheerleading Practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'School Gym';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (14 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '2 4';
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingPractice_3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = Math.max(((s as any).daystart ?? 0), ((s as any).dateVars ?? 0)?.['daystart']) - ((s as any).week ?? 0) + 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cheerleading_practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Cheerleading Practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'School Gym';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (14 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '2 4';
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingPractice_4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 26);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = Math.max(((s as any).daystart ?? 0), ((s as any).dateVars ?? 0)?.['daystart']) - ((s as any).week ?? 0) + 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cheerleading_practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Cheerleading Practice';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'School Gym';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (14 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '2 4';
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingGameTomorrow(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) + 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cheerleading_game';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Cheerleading at Game';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'School Gym';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (14 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingGame_1(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).odd_week ?? 0) === 1  &&  ((s as any).week ?? 0) <= 5)  ||  (((s as any).odd_week ?? 0) === 0  &&  ((s as any).week ?? 0) >= 6)) {
    ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 5;
  } else {
    ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 12;
  }
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cheerleading_game';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Cheerleading at Game';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'School Gym';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (14 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'biweekly';
  qspCall(s, 'time', 'to_daystart', 2016, 11, 2);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingGame_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2016, 11, 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cheerleading_game';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Cheerleading at Game';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'School Gym';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (14 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'biweekly';
  qspCall(s, 'time', 'to_daystart', 2016, 12, 30);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingGame_3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 1, 27);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cheerleading_game';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Cheerleading at Game';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'School Gym';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (14 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'biweekly';
  qspCall(s, 'time', 'to_daystart', 2017, 3, 18);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingGame_4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', 2017, 3, 24);
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cheerleading_game';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Cheerleading at Game';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'School Gym';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (14 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (15 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (1 * 4) + (45 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'biweekly';
  qspCall(s, 'time', 'to_daystart', 2017, 5, 25);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).dateVars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterVolleyballTournament(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 6;
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'volleyball_tournament';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Volleyball Tournament';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Community Center';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Weekly tournament. Make sure to bring your A-game.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = (16 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (18 * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (4 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '6';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGuitarLesson(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).ml_guitarlesson ?? 0)?.['nextlesson'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'guitar_lessons_' + ((s as any).ml_guitarlesson ?? 0)?.['nextlesson'] + '_' + ((s as any).ml_guitarlesson ?? 0)?.['lessonhour'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Guitar Lesson';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Pavlovsk Community Center';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = ((((s as any).ml_guitarlesson ?? {})?.['lessonhour'] ?? 0) * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (((((s as any).ml_guitarlesson ?? {})?.['lessonhour'] ?? 0) + 1) * 4) + (0 / 15);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (45 / 15);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMitkaDrinkingInvite(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'mitka_drinking_invite';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Drinks with Mitka';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = 'Forest Road, Gadukino';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Mitka, Kolyamba, and Vasyan meet by the forest road outside the village to drink moonshine, starting at ' + qspFunc(s, 'time', 'get_time_string', 20, 0) + '.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 0;
  ((s as any).event_vars = (s as any).event_vars ?? {})['start_ts'] = (20 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = (3 * 4);
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).daystart ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 9;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFineDeadline(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).policeQW ?? 0)?.['fine_deadline'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'fine_deadline_' + ((s as any).policeQW ?? 0)?.['fine_deadline'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = ((s as any).policeQW ?? 0)?.['legal_fine'] + ' Fine Due';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBlackmailPaymentDeadline(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).blackmailQW ?? 0)?.['smsday'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'blackmail_payment_deadline';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Blackmailer Payment Due';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Leave ' + qspFunc(s, 'money', 'string_price', ((s as any).blackmailQW ?? 0)?.['next_payment']) + ' in a park before midnight. Don\'t be late or there will be consequences.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).blackmailQW ?? 0)?.['smsday'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBelgangPaymentDeadline(s: GameState, scene: SceneBuilder): void {
  if (((s as any).belfirstweek ?? 0) === 1) {
    ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 14;
  } else {
    if (((s as any).week ?? 0) === 7) {
      ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) + 7;
    } else {
      ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 7;
    }
  }
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'belgang_payment_deadline';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Vadim Bely Payment Due';
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'Weekly payment of ' + qspFunc(s, 'money', 'string_debt', ((s as any).belgangPayWeek ?? 0)) + ' due to Vadim Bely. Find him somewhere in town on Sunday.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = '';
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur_end'] = ((s as any).event_vars ?? 0)?.['daystart'];
  ((s as any).event_vars = (s as any).event_vars ?? {})['priority'] = 2;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCyclePhase_0(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cycle_0';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Menstrual Phase' + ((((s as any).cheatVars ?? 0)?.['track_period'] === 1) ? ('') : (' (est.)'));
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 3;
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'daily';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCyclePhase_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cycle_1';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Follicular Phase' + ((((s as any).cheatVars ?? 0)?.['track_period'] === 1) ? ('') : (' (est.)'));
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 5;
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'daily';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCyclePhase_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cycle_2';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Fertile Phase' + ((((s as any).cheatVars ?? 0)?.['track_period'] === 1) ? ('') : (' (est.)'));
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 7;
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'daily';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCyclePhase_3(s: GameState, scene: SceneBuilder): void {
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'cycle_3';
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Luteal Phase' + ((((s as any).cheatVars ?? 0)?.['track_period'] === 1) ? ('') : (' (est.)'));
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 9;
  ((s as any).event_vars = (s as any).event_vars ?? {})['all_day'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['recur'] = 'daily';
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
