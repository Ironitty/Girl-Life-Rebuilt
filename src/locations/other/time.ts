import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).minut ?? 0) < 0  ||  ((s as any).hour ?? 0) < 0) {
    qspCall(s, 'time', 'time_cheat_fix');
  }
  (s as any).prevtotmin = ((s as any).totminut ?? 0);
  (s as any).totminut = ((s as any).minut ?? 0) + ((s as any).hour ?? 0) * 60 + ((s as any).daystart ?? 0) * 1440;
  if (((s as any).totminut ?? 0) !== ((s as any).prevtotmin ?? 0)) {
    // TODO-QSP: :time_time_loop
    (s as any).time_temp_jump_flag = 0;
    if (((s as any).minut ?? 0) >= 60) {
      (s as any).hour = ((s as any).hour ?? 0) + (1);
      (s as any).minut = ((s as any).minut ?? 0) - (60);
      qspCall(s, 'hourly_events', '');
      (s as any).time_temp_jump_flag = 1;
    }
    if (((s as any).hour ?? 0) >= 24) {
      (s as any).hour = ((s as any).hour ?? 0) - (24);
      (s as any).daystart = ((s as any).daystart ?? 0) + (1);
      qspCall(s, 'time', 'update_date');
      qspCall(s, 'cikl', '');
      (s as any).time_temp_jump_flag = 1;
    }
    if (((s as any).time_temp_jump_flag ?? 0) === 1) {
      // TODO-QSP: jump 'time_time_loop'
    }
    qspCall(s, 'time', 'update_daystage', ((s as any).totminut ?? 0));
  }
  return;
  scene.build();
}

function enterTimeCheatFix(s: GameState, scene: SceneBuilder): void {
  if (((s as any).minut ?? 0) < 0) {
    (s as any).hour = ((s as any).hour ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    // TODO-QSP: jump 'time_time_loop'
  }
  if (((s as any).hour ?? 0) < 0) {
    (s as any).daystart = ((s as any).daystart ?? 0) - (1);
    (s as any).hour = ((s as any).hour ?? 0) + (24);
    // TODO-QSP: jump 'time_time_loop'
  }
  qspCall(s, 'time', 'update_date');
  return;
  scene.build();
}

function enterUpdateDate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_date', ((s as any).daystart ?? 0));
  (s as any).day = ((s as any).dateVars ?? 0)?.['day'];
  (s as any).month = ((s as any).dateVars ?? 0)?.['month'];
  (s as any).year = ((s as any).dateVars ?? 0)?.['year'];
  (s as any).week = ((s as any).dateVars ?? 0)?.['week'];
  (s as any).odd_week = ((s as any).dateVars ?? 0)?.['odd_week'];
  (s as any).day_of_year = ((s as any).dateVars ?? 0)?.['day_of_year'];
  qspCall(s, 'time', 'init_monthends', ((s as any).year ?? 0));
  return;
  scene.build();
}

function enterToDate(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    (s as any).ARGS[1] = ((s as any).daystart ?? 0);
  }
  (s as any).dateVars['daystart'] = qspUntranslated(s, "ARGS[1]", { location: "time" });
  (s as any).temp_timeVars['mod_daystart'] = ((s as any).dateVars ?? 0)?.['daystart'] + 151574;
  (s as any).temp_timeVars['week_drift'] = 6;
  (s as any).dateVars['odd_week'] = ((((s as any).temp_timeVars ?? 0)?.['mod_daystart'] + 6 - ((s as any).temp_timeVars ?? 0)?.['week_drift']) / 7) % 2;
  (s as any).dateVars['week'] = (((s as any).temp_timeVars ?? 0)?.['mod_daystart'] + 7 - ((s as any).temp_timeVars ?? 0)?.['week_drift']) % 7;
  if (((s as any).dateVars ?? 0)?.['week'] === 0) {
    (s as any).dateVars['week'] = 7;
  }
  (s as any).dateVars['weekName'] = qspUntranslated(s, "weekName[dateVars['week']]", { location: "time" });
  (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars ?? 0)?.['mod_daystart'];
  (s as any).dateVars['year'] = 1601;
  (s as any).temp_timeVars['400cycles'] = ((s as any).temp_timeVars ?? 0)?.['inner_daystart'] / 146097;
  (s as any).dateVars['year'] = ((s as any).dateVars['year'] ?? 0) + (400 * ((s as any).temp_timeVars ?? 0)?.['400cycles']);
  (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (146097 * ((s as any).temp_timeVars ?? 0)?.['400cycles']);
  (s as any).temp_timeVars['100cycles'] = ((s as any).temp_timeVars ?? 0)?.['inner_daystart'] / 36524;
  (s as any).dateVars['year'] = ((s as any).dateVars['year'] ?? 0) + (100 * ((s as any).temp_timeVars ?? 0)?.['100cycles']);
  (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (36524 * ((s as any).temp_timeVars ?? 0)?.['100cycles']);
  (s as any).temp_timeVars['4cycles'] = ((s as any).temp_timeVars ?? 0)?.['inner_daystart'] / 1461;
  (s as any).dateVars['year'] = ((s as any).dateVars['year'] ?? 0) + (4 * ((s as any).temp_timeVars ?? 0)?.['4cycles']);
  (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (1461 * ((s as any).temp_timeVars ?? 0)?.['4cycles']);
  if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] >= 1095) {
    (s as any).temp_timeVars['inner_years'] = 3;
  } else {
    (s as any).temp_timeVars['inner_years'] = 2;
    if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] >= 365) {
      (s as any).temp_timeVars['inner_years'] = 1;
    } else {
      (s as any).temp_timeVars['inner_years'] = 0;
    }
    (s as any).dateVars['year'] = ((s as any).dateVars['year'] ?? 0) + (((s as any).temp_timeVars ?? 0)?.['inner_years']);
    (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (365 * ((s as any).temp_timeVars ?? 0)?.['inner_years']);
    (s as any).temp_timeVars['leapyear'] = 0;
    if (((((s as any).dateVars ?? 0)?.['year'] % 4) === 0  &&  (((s as any).dateVars ?? 0)?.['year'] % 100) !== 0)  ||  (((s as any).dateVars ?? 0)?.['year'] % 400 === 0)) {
      if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] >= 59) {
        (s as any).temp_timeVars['leapyear'] = 1;
        (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (1);
      }
    }
    (s as any).dateVars['day_of_year'] = 1 + ((s as any).temp_timeVars ?? 0)?.['inner_daystart'];
    if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 31) {
      (s as any).dateVars['month'] = 1;
    } else {
      (s as any).dateVars['month'] = 2;
      (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) + (((s as any).temp_timeVars ?? 0)?.['leapyear']);
      (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (31);
      if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 90) {
        (s as any).dateVars['month'] = 3;
        (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (59);
      } else {
        (s as any).dateVars['month'] = 4;
        (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (90);
        if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 151) {
          (s as any).dateVars['month'] = 5;
          (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (120);
        } else {
          (s as any).dateVars['month'] = 6;
          (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (151);
          if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 212) {
            (s as any).dateVars['month'] = 7;
            (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (181);
          } else {
            (s as any).dateVars['month'] = 8;
            (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (212);
            if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 273) {
              (s as any).dateVars['month'] = 9;
              (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (243);
            } else {
              (s as any).dateVars['month'] = 10;
              (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (273);
              if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 334) {
                (s as any).dateVars['month'] = 11;
                (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (304);
              } else {
                (s as any).dateVars['month'] = 12;
                (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (334);
              }
              (s as any).dateVars['monthName'] = qspUntranslated(s, "monthName[dateVars['month']]", { location: "time" });
              if (((s as any).dateVars ?? 0)?.['month'] >= 12  ||  ((s as any).dateVars ?? 0)?.['month'] < 3) {
                (s as any).dateVars['season'] = 'winter';
              } else {
                (s as any).dateVars['season'] = 'spring';
                if (((s as any).dateVars ?? 0)?.['month'] < 9) {
                  (s as any).dateVars['season'] = 'summer';
                } else {
                  (s as any).dateVars['season'] = 'fall';
                }
                (s as any).dateVars['day'] = 1 + ((s as any).temp_timeVars ?? 0)?.['inner_daystart'];
                (s as any).dateVars['suffix'] = qspFunc(s, 'time', 'get_number_suffix', ((s as any).dateVars ?? 0)?.['day']);
                if (((s as any).locArgs?.[2] ?? 0) === 'test') {
                  // TODO-QSP: dynamic text: new_daystart: <<ARGS[1]>> | old_daystart: <<daystart>>
                  scene.text(`new_daystart: ${qspUntranslated(s, "ARGS[1]", { location: "time" })} | old_daystart: ${((s as any).daystart ?? 0)}`);
                  // TODO-QSP: dynamic text: new_day: <<dateVars['day']>> | old_day: <<day>>
                  scene.text(`new_day: ${((s as any).dateVars ?? 0)?.['day']} | old_day: ${((s as any).day ?? 0)}`);
                  // TODO-QSP: dynamic text: new_month: <<dateVars['month']>> | old_month: <<month>>
                  scene.text(`new_month: ${((s as any).dateVars ?? 0)?.['month']} | old_month: ${((s as any).month ?? 0)}`);
                  // TODO-QSP: dynamic text: new_year: <<dateVars['year']>> | old_year: <<year>>
                  scene.text(`new_year: ${((s as any).dateVars ?? 0)?.['year']} | old_year: ${((s as any).year ?? 0)}`);
                  // TODO-QSP: dynamic text: new_week: <<dateVars['week']>> | old_week: <<week>>
                  scene.text(`new_week: ${((s as any).dateVars ?? 0)?.['week']} | old_week: ${((s as any).week ?? 0)}`);
                  // TODO-QSP: dynamic text: new_odd_week: <<dateVars['odd_week']>> | old_odd_week: <<odd_week>>
                  scene.text(`new_odd_week: ${((s as any).dateVars ?? 0)?.['odd_week']} | old_odd_week: ${((s as any).odd_week ?? 0)}`);
                  scene.text('Temp:');
                  // TODO-QSP: dynamic text: mod_daystart: <<temp_timeVars['mod_daystart']>>
                  scene.text(`mod_daystart: ${((s as any).temp_timeVars ?? 0)?.['mod_daystart']}`);
                  // TODO-QSP: dynamic text: inner_daystart: <<temp_timeVars['inner_daystart']>>
                  scene.text(`inner_daystart: ${((s as any).temp_timeVars ?? 0)?.['inner_daystart']}`);
                  // TODO-QSP: dynamic text: leapyear: <<temp_timeVars['leapyear']>>
                  scene.text(`leapyear: ${((s as any).temp_timeVars ?? 0)?.['leapyear']}`);
                  // TODO-QSP: dynamic text: 4cycles: <<temp_timeVars['4cycles']>>
                  scene.text(`4cycles: ${((s as any).temp_timeVars ?? 0)?.['4cycles']}`);
                  // TODO-QSP: dynamic text: 100cycles: <<temp_timeVars['100cycles']>>
                  scene.text(`100cycles: ${((s as any).temp_timeVars ?? 0)?.['100cycles']}`);
                  // TODO-QSP: dynamic text: 400cycles: <<temp_timeVars['400cycles']>>
                  scene.text(`400cycles: ${((s as any).temp_timeVars ?? 0)?.['400cycles']}`);
                  // TODO-QSP: dynamic text: inner_years: <<temp_timeVars['inner_years']>>
                  scene.text(`inner_years: ${((s as any).temp_timeVars ?? 0)?.['inner_years']}`);
                }
                return;
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'time_cheat_fix':
      enterTimeCheatFix(s, scene);
      break;
    case 'update_date':
      enterUpdateDate(s, scene);
      break;
    case 'to_date':
      enterToDate(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const time: LocationDef = {
  name: 'time',
  region: 'other',
  enter: enter,
};
