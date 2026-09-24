import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).inSleep = 1;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 1;
  qspCall(s, 'stat', '');
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['no_sleep_loss'] = 1;
  qspGoto(s, 'wakeup', 'mod_sleeptriggers');
  // TODO-QSP: end
  scene.build();
}

function enterWake(s: GameState, scene: SceneBuilder): void {
  (s as any).inSleep = 1;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 1;
  qspCall(s, 'stat', '');
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['no_sleep_loss'] = 1;
  qspGoto(s, 'wakeup', 'mod_sleeptriggers');
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).inSleep = 1;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 1;
  qspCall(s, 'stat', '');
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['no_sleep_loss'] = 1;
  qspGoto(s, 'wakeup', 'mod_sleeptriggers');
  // TODO-QSP: end
  scene.build();
}

function enterModSleeptriggers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'wakeup', 'mod_sleeptriggers');
  qspGoto(s, 'wakeup_events', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterGetOut(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['woke_at_min'] = ((s as any).totminut ?? 0);
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_now'] = ((s as any).daystart ?? 0) * 1440 + ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0);
  if (((s as any).sleepVars ?? 0)?.['slept_in'] === 1) {
    // TODO-QSP: dynamic text: You wake up at <b><<func(''time'', ''get_time_string'', hour, minut, cheatVars['...
    scene.text(`You wake up at <b>${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? ''), ((s as any).minut ?? ''), ((s as any).cheatVars ?? 0)?.['time_format'] ?? '')}</b>, after sleeping-in a little longer than planned, but at least you've had plenty of sleep.`);
  } else {
    if (((s as any).pcs_sleep ?? 0) >= 100) {
      if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1) {
        if (((s as any).sleepVars ?? 0)?.['time_now'] < ((s as any).sleepVars ?? 0)?.['alarm_time'] - 15) {
          // TODO-QSP: dynamic text: You wake up at <b><<func(''time'', ''get_time_string'', hour, minut, cheatVars['...
          scene.text(`You wake up at <b>${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? ''), ((s as any).minut ?? ''), ((s as any).cheatVars ?? 0)?.['time_format'] ?? '')}</b>, well before your alarm goes off. You've had plenty of sleep.`);
        } else {
          // TODO-QSP: dynamic text: You wake up at <b><<func(''time'', ''get_time_string'', hour, minut, cheatVars['...
          scene.text(`You wake up at <b>${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? ''), ((s as any).minut ?? ''), ((s as any).cheatVars ?? 0)?.['time_format'] ?? '')}</b>, just before your alarm goes off. You've had plenty of sleep.`);
        }
      } else {
        // TODO-QSP: dynamic text: You wake up at <b><<func(''time'', ''get_time_string'', hour, minut, cheatVars['...
        scene.text(`You wake up at <b>${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? ''), ((s as any).minut ?? ''), ((s as any).cheatVars ?? 0)?.['time_format'] ?? '')}</b> no longer tired and ready to start the day with plenty of sleep.`);
      }
    } else {
      if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1  &&  ((s as any).sleepVars ?? 0)?.['time_now'] === ((s as any).sleepVars ?? 0)?.['alarm_time']) {
        qspCall(s, 'mood', 'lower', 'tiny');
        // TODO-QSP: dynamic text: 'Your alarm goes off at <b><<func(''time'', ''get_time_string'', hour, minut, ch...
        scene.text('Your alarm goes off at <b>' + qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? ''), ((s as any).minut ?? ''), ((s as any).cheatVars ?? 0)?.['time_format'] ?? '') + '</b>, \'+iif(pcs_sleep < 90, \'but you could do with some extra sleep.\', \'and you\'ve had plenty of sleep.\')+\'');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSnoozeAlarm(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('');
      }
    }
  }
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) < 9) {
    scene.actions([
      { label: 'Get out of bed and get dressed for school (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'wardrobe', 'school_outfit');
    qspGoto(st, 'bed_get_out', 'start');
  } },
    ]);
  }
  if (((s as any).strip_here ?? 0) === 1) {
    scene.actions([
      { label: 'Get out of bed and get dressed (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWearBedClothes(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'bed_get_out', 'start');
  } },
    ]);
  }
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1  &&  ((s as any).sleepVars ?? 0)?.['time_now'] < ((s as any).sleepVars ?? 0)?.['alarm_time']) {
    (s as any).temp_hour = ((((s as any).sleepVars ?? {})?.['alarm_time'] ?? 0) - (((s as any).sleepVars ?? {})?.['time_now'] ?? 0)) / 60;
    (s as any).temp_minut = ((((s as any).sleepVars ?? {})?.['alarm_time'] ?? 0) - (((s as any).sleepVars ?? {})?.['time_now'] ?? 0)) % 60;
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Nap until your alarm rings (' + String(((s as any).temp_hour ?? '') ?? '') + ':' + String((String(100+((s as any).temp_minut ?? '')).slice((2)-1)) ?? '') + ')', handler: (st: GameState) => {
    scene.text('You turn around on your bed and close your eyes.');
    qspCall(st, 'sleep_simple', 'forced', (((st as any).sleepVars ?? {})?.['alarm_time'] ?? 0) - (((st as any).sleepVars ?? {})?.['time_now'] ?? 0));
    qspGoto(st, 'wakeup', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of bed (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['slept_in'] = 0;
    qspGoto(st, 'bed_get_out', 'start');
  } },
  ]);
  scene.build();
}

function enterSnoozeAlarm(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '"Snooze" a few minutes more…', handler: (st: GameState) => {
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['slept_in'] = 1;
    qspCall(st, 'stat', '');
    qspGoto(st, 'sleep', 'start');
  } },
  ]);
  scene.build();
}

function enterWearBedClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'restore', 'bed');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'wake':
      enterWake(s, scene);
      break;
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
      enterDefault(s, scene);
      break;
  }
}

export const wakeup: LocationDef = {
  name: 'wakeup',
  region: 'other',
  enter: enter,
};
