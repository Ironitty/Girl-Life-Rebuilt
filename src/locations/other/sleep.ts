import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFull(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['pre_sleep', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['pre_sleep', 'prepare_sleep'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterDream(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['sleep', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterWake(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['wakeup', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['bed_get_out', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['pre_sleep', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 1) {
    if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['time_to_full'] = ((100 - ((s as any).pcs_sleep ?? 0)) * 353) / 100;
  } else {
    if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === -1) {
      if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['time_to_full'] = ((100 - ((s as any).pcs_sleep ?? 0)) * 636) / 100;
    } else {
      if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['time_to_full'] = (100 - ((s as any).pcs_sleep ?? 0)) * 5;
    }
  }
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['time_to_full'] = ((s as any).sleepVars['time_to_full'] ?? 0) + (60 + (Math.floor(Math.random() * 91) + 0));
  scene.actions([{ label: 'Continue', goto: ['dream_events', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterPostDream(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['sleep', 'sleep_handler'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterSleepHandler(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalcMinutesToWakeup(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sleepVars ?? 0)?.['minutes_to_wakeup'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['sleep', 'sleep_loop'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['sleep', 'post_sleep'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCalcMinutesToWakeup(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['time_now'] = ((s as any).daystart ?? 0) * 1440 + ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0);
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1  &&  ((s as any).sleepVars ?? 0)?.['slept_in'] === 0) {
    if ((((s as any).hour ?? 0) < ((s as any).alarmVars ?? 0)?.['timerEndH']  &&  ((((s as any).alarmVars ?? 0)?.['alarm_holiday'] === 1  &&  ((s as any).kanikuli ?? 0) !== 0)  ||  (((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7)))  ||  (((s as any).hour ?? 0) >= ((s as any).alarmVars ?? 0)?.['timerEndH']  &&  ((((s as any).alarmVars ?? 0)?.['alarm_holiday'] === 1  &&  qspFunc(s, 'sleep', 'is_tomorrow_school_vacation') !== 0)  ||  (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)))) {
      if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['alarm_time'] = ((s as any).daystart ?? 0) * 1440 + (((s as any).alarmVars ?? {})?.['timerEndH'] ?? 0) * 60 + (((s as any).alarmVars ?? {})?.['timerEndM'] ?? 0);
    } else {
      if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['alarm_time'] = ((s as any).daystart ?? 0) * 1440 + (((s as any).alarmVars ?? {})?.['timerH'] ?? 0) * 60 + (((s as any).alarmVars ?? {})?.['timerM'] ?? 0);
    }
    if (((s as any).sleepVars ?? 0)?.['time_now'] > ((s as any).sleepVars ?? 0)?.['alarm_time']) {
      if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['alarm_time'] = ((s as any).sleepVars['alarm_time'] ?? 0) + (1440);
    }
    if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['minutes_to_wakeup'] = Math.min(((s as any).sleepVars ?? 0)?.['time_to_full'], (((s as any).sleepVars ?? {})?.['alarm_time'] ?? 0) - (((s as any).sleepVars ?? {})?.['time_now'] ?? 0));
  } else {
    if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['minutes_to_wakeup'] = ((s as any).sleepVars ?? 0)?.['time_to_full'];
  }
  // TODO-QSP: end
  scene.build();
}

function enterIsTomorrowSchoolVacation(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if ((((s as any).month ?? 0) === 12  &&  ((s as any).day ?? 0) === 31)  ||  (((s as any).month ?? 0) === 1  &&  ((s as any).day ?? 0) <= 14)) {
      (s as any).result = 2;
    } else {
      if (((s as any).month ?? 0) === 3  &&  (((s as any).day ?? 0) >= 19  &&  ((s as any).day ?? 0) <= 25)) {
        (s as any).result = 3;
      } else {
        if ((((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) === 31)  ||  ((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  (((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) <= 30)) {
          (s as any).result = 4;
        } else {
          if (((s as any).month ?? 0) === 11  &&  (((s as any).day ?? 0) >= 3  &&  ((s as any).day ?? 0) <= 10)) {
            (s as any).result = 1;
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSleepLoop(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['stat_display'] = 0;
  // TODO-QSP: :sleep_loop_loop
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['stime'] = ((s as any).sleepVars['stime'] ?? 0) + (1);
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['time_now'] = ((s as any).sleepVars['time_now'] ?? 0) + (1);
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['minutes_to_wakeup'] = ((s as any).sleepVars['minutes_to_wakeup'] ?? 0) - (1);
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['time_to_full'] = ((s as any).sleepVars['time_to_full'] ?? 0) - (1);
  if (((s as any).vibratorIN ?? 0) === 1) {
    if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['vtime'] = ((s as any).sleepVars['vtime'] ?? 0) + (1);
    if (((s as any).sleepVars ?? 0)?.['vtime'] >= 5) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
      if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['vtime'] = 0;
    }
  }
  if (((s as any).recuperation ?? 0) === 0  ||  ((s as any).sleepVars ?? 0)?.['no_health'] === 1) {
    if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['health_stock'] = ((s as any).sleepVars['health_stock'] ?? 0) + (((s as any).healthmax ?? 0));
  }
  if (((s as any).sleepVars ?? 0)?.['health_stock'] >= 960) {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + ((((s as any).sleepVars ?? {})?.['health_stock'] ?? 0) / 960);
    if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['health_stock'] = (((s as any).sleepVars ?? {})?.['health_stock'] ?? 0) % 960;
  }
  if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 1) {
    if (((s as any).sleepVars ?? 0)?.['stime'] % 5 === 0) {
      (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (1);
    }
    if (((s as any).sleepVars ?? 0)?.['stime'] % 11 === 0) {
      (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (1);
    }
  } else {
    if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === -1) {
      if (((s as any).sleepVars ?? 0)?.['stime'] % 7 === 0) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (1);
        if ((Math.floor(Math.random() * 100) + 1) <= 18) {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (1);
        }
      }
    } else {
      if (((s as any).sleepVars ?? 0)?.['stime'] % 5 === 0) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (1);
      }
    }
  }
  if (((s as any).sleepVars ?? 0)?.['stime'] >= 60) {
    if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['stime'] = 0;
    if (((s as any).pcs_sleep ?? 0) >= 100  ||  ((s as any).succublvl ?? 0) > 0) {
      if (!(s as any).pcs_condition) (s as any).pcs_condition = {}; (s as any).pcs_condition['lack_of_sleep'] = 0;
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] > 0) {
        if (!(s as any).pcs_condition) (s as any).pcs_condition = {}; (s as any).pcs_condition['lack_of_sleep'] = ((s as any).pcs_condition['lack_of_sleep'] ?? 0) - (1);
      }
    }
    qspCall(s, 'stat', '');
  }
  if (((s as any).minut ?? 0) === 60) {
    qspCall(s, 'stat', '');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterModSleeptriggers(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sleepVars ?? 0)?.['stime'] % 5 === 0) {
    qspCall(s, 'sleep_events', 'start');
  }
  if (((s as any).sleepVars ?? 0)?.['minutes_to_wakeup'] > 0) {
    // TODO-QSP: jump 'sleep_loop_loop'
  }
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['no_health'] = 0;
  scene.actions([{ label: 'Continue', goto: ['sleep', 'post_sleep'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterModSleeptriggers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'sleep', 'mod_sleeptriggers');
  // TODO-QSP: end
  scene.build();
}

function enterPostSleep(s: GameState, scene: SceneBuilder): void {
  if (((s as any).succublvl ?? 0) < 0) {
    (s as any).skinDailyPenalty = ((s as any).skinDailyPenalty ?? 0) - (1);
  } else {
    if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 10) {
      (s as any).skinDailyPenalty = ((s as any).skinDailyPenalty ?? 0) + (2);
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 2) {
        (s as any).skinDailyPenalty = ((s as any).skinDailyPenalty ?? 0) + (1);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] > 0) {
          (s as any).skinDailyPenalty = ((s as any).skinDailyPenalty ?? 0) + (0);
        } else {
          (s as any).skinDailyPenalty = ((s as any).skinDailyPenalty ?? 0) - (1);
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', goto: ['wakeup', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'full':
      enterFull(s, scene);
      break;
    case 'sleep':
      enterSleep(s, scene);
      break;
    case 'dream':
      enterDream(s, scene);
      break;
    case 'wake':
      enterWake(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'post_dream':
      enterPostDream(s, scene);
      break;
    case 'sleep_handler':
      enterSleepHandler(s, scene);
      break;
    case 'calc_minutes_to_wakeup':
      enterCalcMinutesToWakeup(s, scene);
      break;
    case 'is_tomorrow_school_vacation':
      enterIsTomorrowSchoolVacation(s, scene);
      break;
    case 'sleep_loop':
      enterSleepLoop(s, scene);
      break;
    case 'mod_sleeptriggers':
      enterModSleeptriggers(s, scene);
      break;
    case 'post_sleep':
      enterPostSleep(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sleep: LocationDef = {
  name: 'sleep',
  region: 'other',
  enter: enter,
};
