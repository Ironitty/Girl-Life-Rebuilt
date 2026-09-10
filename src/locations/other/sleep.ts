import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFull(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['pre_sleep', 'start'] }]);
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['pre_sleep', 'prepare_sleep'] }]);
  scene.build();
}

function enterDream(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['sleep', 'start'] }]);
  scene.build();
}

function enterWake(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['wakeup', 'start'] }]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['bed_get_out', 'start'] }]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['pre_sleep', 'start'] }]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 1) {
    (s as any).sleepVars['time_to_full'] = ((100 - ((s as any).pcs_sleep ?? 0)) * 353) / 100;
  } else {
    (s as any).sleepVars['time_to_full'] = ((100 - ((s as any).pcs_sleep ?? 0)) * 636) / 100;
    (s as any).sleepVars['time_to_full'] = (100 - ((s as any).pcs_sleep ?? 0)) * 5;
  }
  (s as any).sleepVars['time_to_full'] = ((s as any).sleepVars['time_to_full'] ?? 0) + (60 + ((s as any).rand ?? 0)(0, 90));
  scene.actions([{ label: 'Continue', goto: ['dream_events', 'start'] }]);
  scene.build();
}

function enterPostDream(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: xgt 'sleep', 'sleep_handler'
  scene.build();
}

function enterSleepHandler(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sleep', 'calc_minutes_to_wakeup');
  if (((s as any).sleepVars ?? 0)?.['minutes_to_wakeup'] > 0) {
    // TODO-QSP: xgt 'sleep', 'sleep_loop'
  } else {
    // TODO-QSP: xgt 'sleep', 'post_sleep'
  }
  scene.build();
}

function enterCalcMinutesToWakeup(s: GameState, scene: SceneBuilder): void {
  (s as any).sleepVars['time_now'] = ((s as any).daystart ?? 0) * 1440 + ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0);
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1  &&  ((s as any).sleepVars ?? 0)?.['slept_in'] === 0) {
    if ((((s as any).hour ?? 0) < ((s as any).alarmVars ?? 0)?.['timerEndH']  &&  ((((s as any).alarmVars ?? 0)?.['alarm_holiday'] === 1  &&  ((s as any).kanikuli ?? 0) !== 0)  ||  (((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7)))  ||  (((s as any).hour ?? 0) >= ((s as any).alarmVars ?? 0)?.['timerEndH']  &&  ((((s as any).alarmVars ?? 0)?.['alarm_holiday'] === 1  &&  qspFunc(s, 'sleep', 'is_tomorrow_school_vacation') !== 0)  ||  (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)))) {
      (s as any).sleepVars['alarm_time'] = ((s as any).daystart ?? 0) * 1440 + ((s as any).alarmVars ?? 0)?.['timerEndH'] * 60 + ((s as any).alarmVars ?? 0)?.['timerEndM'];
    } else {
      (s as any).sleepVars['alarm_time'] = ((s as any).daystart ?? 0) * 1440 + ((s as any).alarmVars ?? 0)?.['timerH'] * 60 + ((s as any).alarmVars ?? 0)?.['timerM'];
    }
    if (((s as any).sleepVars ?? 0)?.['time_now'] > ((s as any).sleepVars ?? 0)?.['alarm_time']) {
      (s as any).sleepVars['alarm_time'] = ((s as any).sleepVars['alarm_time'] ?? 0) + (1440);
    }
    (s as any).sleepVars['minutes_to_wakeup'] = ((s as any).min ?? 0)(((s as any).sleepVars ?? 0)?.['time_to_full'], ((s as any).sleepVars ?? 0)?.['alarm_time'] - ((s as any).sleepVars ?? 0)?.['time_now']);
  } else {
    (s as any).sleepVars['minutes_to_wakeup'] = ((s as any).sleepVars ?? 0)?.['time_to_full'];
  }
  scene.build();
}

function enterIsTomorrowSchoolVacation(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if ((((s as any).month ?? 0) === 12  &&  ((s as any).day ?? 0) === 31)  ||  (((s as any).month ?? 0) === 1  &&  ((s as any).day ?? 0) <= 14)) {
      (s as any).result = 2;
    } else {
      (s as any).result = 3;
      if ((((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) === 31)  ||  ((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  (((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) <= 30)) {
        (s as any).result = 4;
      } else {
        (s as any).result = 1;
      }
    }
  }
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
