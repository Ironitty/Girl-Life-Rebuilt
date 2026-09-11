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
  (s as any).temp_timeVars['mod_daystart'] = ((s as any).dateVars ?? {})?.['daystart'] + 151574;
  (s as any).temp_timeVars['week_drift'] = 6;
  (s as any).dateVars['odd_week'] = ((((s as any).temp_timeVars ?? {})?.['mod_daystart'] + 6 - ((s as any).temp_timeVars ?? {})?.['week_drift']) / 7) % 2;
  (s as any).dateVars['week'] = (((s as any).temp_timeVars ?? {})?.['mod_daystart'] + 7 - ((s as any).temp_timeVars ?? {})?.['week_drift']) % 7;
  if (((s as any).dateVars ?? 0)?.['week'] === 0) {
    (s as any).dateVars['week'] = 7;
  }
  (s as any).dateVars['weekName'] = qspUntranslated(s, "weekName[dateVars['week']]", { location: "time" });
  (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars ?? 0)?.['mod_daystart'];
  (s as any).dateVars['year'] = 1601;
  (s as any).temp_timeVars['400cycles'] = ((s as any).temp_timeVars ?? {})?.['inner_daystart'] / 146097;
  (s as any).dateVars['year'] = ((s as any).dateVars['year'] ?? 0) + (400 * ((s as any).temp_timeVars ?? {})?.['400cycles']);
  (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (146097 * ((s as any).temp_timeVars ?? {})?.['400cycles']);
  (s as any).temp_timeVars['100cycles'] = ((s as any).temp_timeVars ?? {})?.['inner_daystart'] / 36524;
  (s as any).dateVars['year'] = ((s as any).dateVars['year'] ?? 0) + (100 * ((s as any).temp_timeVars ?? {})?.['100cycles']);
  (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (36524 * ((s as any).temp_timeVars ?? {})?.['100cycles']);
  (s as any).temp_timeVars['4cycles'] = ((s as any).temp_timeVars ?? {})?.['inner_daystart'] / 1461;
  (s as any).dateVars['year'] = ((s as any).dateVars['year'] ?? 0) + (4 * ((s as any).temp_timeVars ?? {})?.['4cycles']);
  (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (1461 * ((s as any).temp_timeVars ?? {})?.['4cycles']);
  if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] >= 1095) {
    (s as any).temp_timeVars['inner_years'] = 3;
  } else {
    if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] >= 730) {
      (s as any).temp_timeVars['inner_years'] = 2;
    } else {
      if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] >= 365) {
        (s as any).temp_timeVars['inner_years'] = 1;
      } else {
        (s as any).temp_timeVars['inner_years'] = 0;
      }
    }
  }
  (s as any).dateVars['year'] = ((s as any).dateVars['year'] ?? 0) + (((s as any).temp_timeVars ?? 0)?.['inner_years']);
  (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (365 * ((s as any).temp_timeVars ?? {})?.['inner_years']);
  (s as any).temp_timeVars['leapyear'] = 0;
  if (((((s as any).dateVars ?? 0)?.['year'] % 4) === 0  &&  (((s as any).dateVars ?? 0)?.['year'] % 100) !== 0)  ||  (((s as any).dateVars ?? 0)?.['year'] % 400 === 0)) {
    if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] >= 59) {
      (s as any).temp_timeVars['leapyear'] = 1;
      (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (1);
    }
  }
  (s as any).dateVars['day_of_year'] = 1 + ((s as any).temp_timeVars ?? {})?.['inner_daystart'];
  if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 31) {
    (s as any).dateVars['month'] = 1;
  } else {
    if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 59) {
      (s as any).dateVars['month'] = 2;
      (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) + (((s as any).temp_timeVars ?? 0)?.['leapyear']);
      (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (31);
    } else {
      if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 90) {
        (s as any).dateVars['month'] = 3;
        (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (59);
      } else {
        if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 120) {
          (s as any).dateVars['month'] = 4;
          (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (90);
        } else {
          if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 151) {
            (s as any).dateVars['month'] = 5;
            (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (120);
          } else {
            if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 181) {
              (s as any).dateVars['month'] = 6;
              (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (151);
            } else {
              if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 212) {
                (s as any).dateVars['month'] = 7;
                (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (181);
              } else {
                if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 243) {
                  (s as any).dateVars['month'] = 8;
                  (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (212);
                } else {
                  if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 273) {
                    (s as any).dateVars['month'] = 9;
                    (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (243);
                  } else {
                    if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 304) {
                      (s as any).dateVars['month'] = 10;
                      (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (273);
                    } else {
                      if (((s as any).temp_timeVars ?? 0)?.['inner_daystart'] < 334) {
                        (s as any).dateVars['month'] = 11;
                        (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (304);
                      } else {
                        (s as any).dateVars['month'] = 12;
                        (s as any).temp_timeVars['inner_daystart'] = ((s as any).temp_timeVars['inner_daystart'] ?? 0) - (334);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).dateVars['monthName'] = qspUntranslated(s, "monthName[dateVars['month']]", { location: "time" });
  if (((s as any).dateVars ?? 0)?.['month'] >= 12  ||  ((s as any).dateVars ?? 0)?.['month'] < 3) {
    (s as any).dateVars['season'] = 'winter';
  } else {
    if (((s as any).dateVars ?? 0)?.['month'] < 6) {
      (s as any).dateVars['season'] = 'spring';
    } else {
      if (((s as any).dateVars ?? 0)?.['month'] < 9) {
        (s as any).dateVars['season'] = 'summer';
      } else {
        (s as any).dateVars['season'] = 'fall';
      }
    }
  }
  (s as any).dateVars['day'] = 1 + ((s as any).temp_timeVars ?? {})?.['inner_daystart'];
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
  scene.build();
}

function enterGetWeekFromDaystart(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).ARGS ?? 0)[1] + 4) % 7;
  if (((s as any).result ?? 0) <= 0) {
    (s as any).result = ((s as any).result ?? 0) + (7);
  }
  return;
  scene.build();
}

function enterGetOddWeekFromDaystart(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((((s as any).ARGS ?? 0)[1] + 4) / 7) % 2;
  if (((s as any).result ?? 0) < 0) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterGetNumberSuffix(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).locArgs?.[1] ?? 0) >= 4  &&  ((s as any).locArgs?.[1] ?? 0) <= 20)) {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) % 10 === 1) {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) % 10 === 2) {
      } else {
        if (((s as any).locArgs?.[1] ?? 0) % 10 === 3) {
        }
      }
    }
  }
  return;
  scene.build();
}

function enterToDaystart(s: GameState, scene: SceneBuilder): void {
  (s as any).dateVars['year'] = qspUntranslated(s, "ARGS[1]", { location: "time" });
  (s as any).dateVars['month'] = qspUntranslated(s, "ARGS[2]", { location: "time" });
  (s as any).dateVars['day'] = qspUntranslated(s, "ARGS[3]", { location: "time" });
  if (((s as any).dateVars ?? 0)?.['year'] < 1601) {
    (s as any).dateVars['year'] = 1601;
  }
  if (((s as any).dateVars ?? 0)?.['month'] < 1) {
    (s as any).dateVars['month'] = 1;
  }
  if (((s as any).dateVars ?? 0)?.['day'] < 1) {
    (s as any).dateVars['day'] = 1;
  }
  (s as any).temp_timeVars['year_diff'] = ((s as any).dateVars ?? {})?.['year'] - 1601;
  (s as any).temp_timeVars['daystart_offset'] = 151575;
  (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars ?? {})?.['year_diff'] * 365;
  (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (((s as any).temp_timeVars ?? {})?.['year_diff'] / 4);
  (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) - (((s as any).temp_timeVars ?? {})?.['year_diff'] / 100);
  (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (((s as any).temp_timeVars ?? {})?.['year_diff'] / 400);
  if (((s as any).dateVars ?? 0)?.['month'] > 1) {
    (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (31);
  }
  if (((s as any).dateVars ?? 0)?.['month'] > 2) {
    if (((((s as any).dateVars ?? 0)?.['year'] % 4 === 0)  &&  (((s as any).dateVars ?? 0)?.['year'] % 100 !== 0))  ||  (((s as any).dateVars ?? 0)?.['year'] % 400 === 0)) {
      (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (29);
    } else {
      (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (28);
    }
  }
  if (((s as any).dateVars ?? 0)?.['month'] > 3) {
    (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (31);
  }
  if (((s as any).dateVars ?? 0)?.['month'] > 4) {
    (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (30);
  }
  if (((s as any).dateVars ?? 0)?.['month'] > 5) {
    (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (31);
  }
  if (((s as any).dateVars ?? 0)?.['month'] > 6) {
    (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (30);
  }
  if (((s as any).dateVars ?? 0)?.['month'] > 7) {
    (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (31);
  }
  if (((s as any).dateVars ?? 0)?.['month'] > 8) {
    (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (31);
  }
  if (((s as any).dateVars ?? 0)?.['month'] > 9) {
    (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (30);
  }
  if (((s as any).dateVars ?? 0)?.['month'] > 10) {
    (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (31);
  }
  if (((s as any).dateVars ?? 0)?.['month'] > 11) {
    (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (30);
  }
  (s as any).temp_timeVars['mod_daystart'] = ((s as any).temp_timeVars['mod_daystart'] ?? 0) + (((s as any).dateVars ?? 0)?.['day']);
  (s as any).dateVars['daystart'] = (((s as any).temp_timeVars ?? {})?.['mod_daystart'] - ((s as any).temp_timeVars ?? {})?.['daystart_offset']);
  if (((s as any).locArgs?.[4] ?? 0) === 'test') {
    // TODO-QSP: dynamic text: new_daystart <<dateVars['daystart']>> | old_daystart <<daystart>>
    scene.text(`new_daystart ${((s as any).dateVars ?? 0)?.['daystart']} | old_daystart ${((s as any).daystart ?? 0)}`);
    // TODO-QSP: dynamic text: mod_daystart: <<temp_timeVars['mod_daystart']>>
    scene.text(`mod_daystart: ${((s as any).temp_timeVars ?? 0)?.['mod_daystart']}`);
    // TODO-QSP: dynamic text: year_diff: <<temp_timeVars['year_diff']>>
    scene.text(`year_diff: ${((s as any).temp_timeVars ?? 0)?.['year_diff']}`);
    // TODO-QSP: dynamic text: daystart_offset: <<temp_timeVars['daystart_offset']>>
    scene.text(`daystart_offset: ${((s as any).temp_timeVars ?? 0)?.['daystart_offset']}`);
  }
  return;
  scene.build();
}

function enterUpdateDaystage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    (s as any).ARGS[1] = ((s as any).totminut ?? 0);
  }
  (s as any).DayLength = qspFunc(s, 'time', 'get_DayLength', ((s as any).totminut ?? 0) / 1440);
  (s as any).CurTimeSun = qspFunc(s, 'time', 'get_CurTimeSun', ((s as any).totminut ?? 0));
  if (((s as any).CurTimeSun ?? 0) < -((s as any).DayLength ?? 0) - 64) {
    (s as any).DayStage = 5;
    (s as any).BColorBase = 0;
  } else {
    if (((s as any).CurTimeSun ?? 0) < -((s as any).DayLength ?? 0)) {
      (s as any).DayStage = 6;
      (s as any).BColorBase = 128 + (((s as any).DayLength ?? 0) + ((s as any).CurTimeSun ?? 0)) * 2;
    } else {
      if (((s as any).CurTimeSun ?? 0) < -((s as any).DayLength ?? 0) + 64) {
        (s as any).DayStage = 1;
        (s as any).BColorBase = 128 + (((s as any).DayLength ?? 0) + ((s as any).CurTimeSun ?? 0)) * 2;
      } else {
        if (((s as any).CurTimeSun ?? 0) < ((s as any).DayLength ?? 0) - 64) {
          (s as any).DayStage = 2;
          (s as any).BColorBase = 255;
        } else {
          if (((s as any).CurTimeSun ?? 0) < ((s as any).DayLength ?? 0)) {
            (s as any).DayStage = 3;
            (s as any).BColorBase = 128 + (((s as any).DayLength ?? 0) - ((s as any).CurTimeSun ?? 0)) * 2;
          } else {
            if (((s as any).CurTimeSun ?? 0) < ((s as any).DayLength ?? 0) + 64) {
              (s as any).DayStage = 4;
              (s as any).BColorBase = 128 + (((s as any).DayLength ?? 0) - ((s as any).CurTimeSun ?? 0)) * 2;
            } else {
              (s as any).DayStage = 5;
              (s as any).BColorBase = 0;
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGet_DayLength(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    (s as any).ARGS[1] = ((s as any).daystart ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).daystart ?? 0)) {
    (s as any).temp_timeVars['day_of_year'] = ((s as any).day_of_year ?? 0);
  } else {
    if (((s as any).dateVars ?? 0)?.['daystart'] !== ((s as any).locArgs?.[1] ?? 0)) {
      // TODO-QSP: gs 'time', 'to_date', ARGS[1]
    }
    (s as any).temp_timeVars['day_of_year'] = ((s as any).dateVars ?? 0)?.['day_of_year'];
  }
  (s as any).temp_timeVars['DayLengthMin'] = 177;
  (s as any).temp_timeVars['DayLengthMax'] = 563;
  if (((s as any).temp_timeVars ?? 0)?.['day_of_year'] < 172) {
    (s as any).temp_timeVars['DayInYear2'] = 172 - ((s as any).temp_timeVars ?? {})?.['day_of_year'];
  } else {
    if (((s as any).temp_timeVars ?? 0)?.['day_of_year'] < 355) {
      (s as any).temp_timeVars['DayInYear2'] = ((s as any).temp_timeVars ?? {})?.['day_of_year'] - 172;
    } else {
      (s as any).temp_timeVars['DayInYear2'] = 536 - ((s as any).temp_timeVars ?? {})?.['day_of_year'];
    }
  }
  (s as any).result = ((s as any).temp_timeVars ?? {})?.['DayLengthMax'] - ((((s as any).temp_timeVars ?? {})?.['DayLengthMax'] - ((s as any).temp_timeVars ?? {})?.['DayLengthMin']) * ((s as any).temp_timeVars ?? {})?.['DayInYear2']) / 182;
  return;
  scene.build();
}

function enterGet_CurTimeSun(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    (s as any).ARGS[1] = ((s as any).totminut ?? 0);
  }
  (s as any).result = (((s as any).ARGS ?? 0)[1] % 1440) - 780;
  return;
  scene.build();
}

function enterGetDurationString(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_dur['days'] = ((s as any).ARGS ?? 0)[1] / 1440;
  (s as any).temp_dur['hours'] = (((s as any).ARGS ?? 0)[1] % 1440) / 60;
  (s as any).temp_dur['mins'] = ((s as any).ARGS ?? 0)[1] % 60;
  (s as any).temp_dur['n'] = 0;
  if (((s as any).temp_dur ?? 0)?.['days'] > 0) {
    // TODO-QSP: $temp_dur_part[temp_dur['n']] = "<<temp_dur['days']>> " + iif(temp_dur['days'] = 1, 'day', 'days')
    (s as any).temp_dur['n'] = ((s as any).temp_dur['n'] ?? 0) + (1);
  }
  if (((s as any).temp_dur ?? 0)?.['hours'] > 0) {
    // TODO-QSP: $temp_dur_part[temp_dur['n']] = "<<temp_dur['hours']>> " + iif(temp_dur['hours'] = 1, 'hour', 'hours...
    (s as any).temp_dur['n'] = ((s as any).temp_dur['n'] ?? 0) + (1);
  }
  if (((s as any).temp_dur ?? 0)?.['mins'] > 0  ||  ((s as any).temp_dur ?? 0)?.['n'] === 0) {
    // TODO-QSP: $temp_dur_part[temp_dur['n']] = "<<temp_dur['mins']>> " + iif(temp_dur['mins'] = 1, 'minute', 'minut...
    (s as any).temp_dur['n'] = ((s as any).temp_dur['n'] ?? 0) + (1);
  }
  if (((s as any).temp_dur ?? 0)?.['n'] === 1) {
  } else {
    if (((s as any).temp_dur ?? 0)?.['n'] === 2) {
    }
  }
  return;
  scene.build();
}

function enterGetTimeString(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length <= 1) {
    (s as any).ARGS[1] = ((s as any).hour ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 2) {
    (s as any).ARGS[2] = ((s as any).minut ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 3) {
    (s as any).ARGS[3] = ((s as any).cheatVars ?? 0)?.['time_format'];
  }
  if (((s as any).locArgs?.[3] ?? 0) === 0  &&  ((s as any).locArgs?.[3] ?? 0) === '') {
  } else {
    (s as any).dateVars['period'] = 'AM';
    if (((s as any).locArgs?.[1] ?? 0) >= 12) {
      (s as any).dateVars['period'] = 'PM';
      if (((s as any).locArgs?.[1] ?? 0) > 12) {
        (s as any).ARGS[1] = ((s as any).ARGS[1] ?? 0) - (12);
      }
    } else {
      if ((!((s as any).locArgs?.[1] ?? 0))) {
        (s as any).ARGS[1] = 12;
      }
    }
    if ((!((s as any).locArgs?.[2] ?? 0))) {
    }
  }
  return;
  scene.build();
}

function enterGetDateString(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length <= 1) {
    (s as any).ARGS[1] = ((s as any).year ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 2) {
    (s as any).ARGS[2] = ((s as any).month ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 3) {
    (s as any).ARGS[3] = ((s as any).day ?? 0);
  }
  if (((s as any).locArgs?.[4] ?? 0) === 1) {
  } else {
    if (((s as any).locArgs?.[4] ?? 0) === 2) {
    } else {
      if (((s as any).locArgs?.[4] ?? 0) === 3) {
      } else {
        if (((s as any).locArgs?.[4] ?? 0) === 4) {
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGetAge(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length <= 1) {
    (s as any).ARGS[1] = ((s as any).birthyear ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 2) {
    (s as any).ARGS[2] = ((s as any).birthmonth ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 3) {
    (s as any).ARGS[3] = ((s as any).birthday ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 4) {
    (s as any).ARGS[4] = ((s as any).year ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 5) {
    (s as any).ARGS[5] = ((s as any).month ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 6) {
    (s as any).ARGS[6] = ((s as any).day ?? 0);
  }
  (s as any).result = ((s as any).ARGS ?? 0)[4] - ((s as any).ARGS ?? 0)[1];
  if (((s as any).locArgs?.[5] ?? 0) < ((s as any).locArgs?.[2] ?? 0)  ||  ((s as any).locArgs?.[5] ?? 0) === ((s as any).locArgs?.[2] ?? 0)  &&  ((s as any).locArgs?.[6] ?? 0) < ((s as any).locArgs?.[3] ?? 0)) {
    (s as any).result = ((s as any).result ?? 0) - (1);
  }
  return;
  scene.build();
}

function enterInitMonthnames(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $monthName[1] = 'January'
  // TODO-QSP: $monthName[2] = 'February'
  // TODO-QSP: $monthName[3] = 'March'
  // TODO-QSP: $monthName[4] = 'April'
  // TODO-QSP: $monthName[5] = 'May'
  // TODO-QSP: $monthName[6] = 'June'
  // TODO-QSP: $monthName[7] = 'July'
  // TODO-QSP: $monthName[8] = 'August'
  // TODO-QSP: $monthName[9] = 'September'
  // TODO-QSP: $monthName[10] = 'October'
  // TODO-QSP: $monthName[11] = 'November'
  // TODO-QSP: $monthName[12] = 'December'
  return;
  scene.build();
}

function enterInitWeeknames(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $weekName[1] = 'Monday'
  // TODO-QSP: $weekName[2] = 'Tuesday'
  // TODO-QSP: $weekName[3] = 'Wednesday'
  // TODO-QSP: $weekName[4] = 'Thursday'
  // TODO-QSP: $weekName[5] = 'Friday'
  // TODO-QSP: $weekName[6] = 'Saturday'
  // TODO-QSP: $weekName[7] = 'Sunday'
  return;
  scene.build();
}

function enterInitMonthends(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    (s as any).ARGS[1] = ((s as any).year ?? 0);
  }
  (s as any).monthsend[1] = 31;
  (s as any).monthsend[2] = 28;
  if (((((s as any).locArgs?.[1] ?? 0) % 4 === 0)  &&  (((s as any).locArgs?.[1] ?? 0) % 100 !== 0))  ||  (((s as any).locArgs?.[1] ?? 0) % 400 === 0)) {
    (s as any).monthsend[2] = ((s as any).monthsend[2] ?? 0) + (1);
  }
  (s as any).monthsend[3] = 31;
  (s as any).monthsend[4] = 30;
  (s as any).monthsend[5] = 31;
  (s as any).monthsend[6] = 30;
  (s as any).monthsend[7] = 31;
  (s as any).monthsend[8] = 31;
  (s as any).monthsend[9] = 30;
  (s as any).monthsend[10] = 31;
  (s as any).monthsend[11] = 30;
  (s as any).monthsend[12] = 31;
  return;
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
    case 'get_week_from_daystart':
      enterGetWeekFromDaystart(s, scene);
      break;
    case 'get_odd_week_from_daystart':
      enterGetOddWeekFromDaystart(s, scene);
      break;
    case 'get_number_suffix':
      enterGetNumberSuffix(s, scene);
      break;
    case 'to_daystart':
      enterToDaystart(s, scene);
      break;
    case 'update_daystage':
      enterUpdateDaystage(s, scene);
      break;
    case 'get_DayLength':
      enterGet_DayLength(s, scene);
      break;
    case 'get_CurTimeSun':
      enterGet_CurTimeSun(s, scene);
      break;
    case 'get_duration_string':
      enterGetDurationString(s, scene);
      break;
    case 'get_time_string':
      enterGetTimeString(s, scene);
      break;
    case 'get_date_string':
      enterGetDateString(s, scene);
      break;
    case 'get_age':
      enterGetAge(s, scene);
      break;
    case 'init_monthnames':
      enterInitMonthnames(s, scene);
      break;
    case 'init_weeknames':
      enterInitWeeknames(s, scene);
      break;
    case 'init_monthends':
      enterInitMonthends(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const time: LocationDef = {
  name: 'time',
  title: 'Temp:',
  region: 'other',
  enter: enter,
};
