import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterModSleeptriggers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'wakeup', 'mod_sleeptriggers');
  scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'start'] }]);
  scene.build();
}

function enterGetOut(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine ?? {})['woke_at_min'] = ((s as any).totminut ?? 0);
  ((s as any).sleepVars ?? {})['time_now'] = ((s as any).daystart ?? 0) * 1440 + ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0);
  if (((s as any).sleepVars ?? 0)?.['slept_in'] === 1) {
    // TODO-QSP: dynamic text: You wake up at <b><<func('time', 'get_time_string', hour, minut, cheatVars['time...
    scene.text(`You wake up at <b>${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? 0), ((s as any).minut ?? 0), ((s as any).cheatVars ?? 0)?.['time_format'])}</b>, after sleeping-in a little longer than planned, but at least you've had plenty of sleep.`);
  } else {
    if (((s as any).pcs_sleep ?? 0) >= 100) {
      if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1) {
        if (((s as any).sleepVars ?? 0)?.['time_now'] < ((s as any).sleepVars ?? 0)?.['alarm_time'] - 15) {
          // TODO-QSP: dynamic text: You wake up at <b><<func('time', 'get_time_string', hour, minut, cheatVars['time...
          scene.text(`You wake up at <b>${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? 0), ((s as any).minut ?? 0), ((s as any).cheatVars ?? 0)?.['time_format'])}</b>, well before your alarm goes off. You've had plenty of sleep.`);
        } else {
          // TODO-QSP: dynamic text: You wake up at <b><<func('time', 'get_time_string', hour, minut, cheatVars['time...
          scene.text(`You wake up at <b>${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? 0), ((s as any).minut ?? 0), ((s as any).cheatVars ?? 0)?.['time_format'])}</b>, just before your alarm goes off. You've had plenty of sleep.`);
        }
      } else {
        // TODO-QSP: dynamic text: You wake up at <b><<func('time', 'get_time_string', hour, minut, cheatVars['time...
        scene.text(`You wake up at <b>${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? 0), ((s as any).minut ?? 0), ((s as any).cheatVars ?? 0)?.['time_format'])}</b> no longer tired and ready to start the day with plenty of sleep.`);
      }
    } else {
      if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1  &&  ((s as any).sleepVars ?? 0)?.['time_now'] === ((s as any).sleepVars ?? 0)?.['alarm_time']) {
        qspCall(s, 'mood', 'lower', 'tiny');
        // TODO-QSP: dynamic text: Your alarm goes off at <b><<func('time', 'get_time_string', hour, minut, cheatVa...
        scene.text(`Your alarm goes off at <b>${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? 0), ((s as any).minut ?? 0), ((s as any).cheatVars ?? 0)?.['time_format'])}</b>, '+iif(pcs_sleep < 90, 'but you could do with some extra sleep.', 'and you've had plenty of sleep.')+'`);
        qspCall(s, 'wakeup', 'snooze_alarm');
      } else {
        scene.text('');
      }
    }
  }
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) < 9) {
    scene.actions([
      { label: 'Get out of bed and get dressed for school (0:10)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'wardrobe', 'school_outfit');
  }, goto: ['bed_get_out', 'start'] },
    ]);
  }
  if (((s as any).strip_here ?? 0) === 1) {
    scene.actions([
      { label: 'Get out of bed and get dressed (0:10)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'wakeup', 'wear_bed_clothes');
  }, goto: ['bed_get_out', 'start'] },
    ]);
  }
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1  &&  ((s as any).sleepVars ?? 0)?.['time_now'] < ((s as any).sleepVars ?? 0)?.['alarm_time']) {
    (s as any).temp_hour = (((s as any).sleepVars ?? {})?.['alarm_time'] - ((s as any).sleepVars ?? {})?.['time_now']) / 60;
    (s as any).temp_minut = (((s as any).sleepVars ?? {})?.['alarm_time'] - ((s as any).sleepVars ?? {})?.['time_now']) % 60;
    scene.actions([
      { label: 'Nap until your alarm rings (<<temp_hour>>:<<$mid(100+temp_minut, 2)>>)', handler: (st: GameState) => {
    scene.text('You turn around on your bed and close your eyes.');
    // TODO-QSP: gs 'sleep_simple', 'forced', sleepVars['alarm_time'] - sleepVars['time_now']
  }, goto: ['wakeup', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Get out of bed (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).sleepVars ?? {})['slept_in'] = 0;
  }, goto: ['bed_get_out', 'start'] },
  ]);
  scene.build();
}

function enterSnoozeAlarm(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '"Snooze" a few minutes more…', handler: (st: GameState) => {
    ((s as any).sleepVars ?? {})['slept_in'] = 1;
    qspCall(s, 'stat', '');
  }, goto: ['sleep', 'start'] },
  ]);
  scene.build();
}

function enterWearBedClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'restore', 'bed');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mod_sleeptriggers':
      enterModSleeptriggers(s, scene);
      break;
    case 'get_out':
      enterGetOut(s, scene);
      break;
    case 'snooze_alarm':
      enterSnoozeAlarm(s, scene);
      break;
    case 'wear_bed_clothes':
      enterWearBedClothes(s, scene);
      break;
    default:
      enterModSleeptriggers(s, scene);
      break;
  }
}

export const wakeup: LocationDef = {
  name: 'wakeup',
  region: 'other',
  enter: enter,
};
