import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 1) {
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_to_full'] = ((100 - ((s as any).pcs_sleep ?? 0)) * 353) / 100;
  } else {
    if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === -1) {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_to_full'] = ((100 - ((s as any).pcs_sleep ?? 0)) * 636) / 100;
    } else {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_to_full'] = (100 - ((s as any).pcs_sleep ?? 0)) * 5;
    }
  }
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_to_full'] = ((s as any).sleepVars['time_to_full'] ?? 0) + (60 + (Math.floor(Math.random() * 91) + 0));
  qspCall(s, 'sleep', 'calc_minutes_to_wakeup');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterForced(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    qspCall(s, 'sleep_simple', 'simple');
    return;
  }
  if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 1) {
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_to_full'] = ((100 - ((s as any).pcs_sleep ?? 0)) * 353) / 100;
  } else {
    if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === -1) {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_to_full'] = ((100 - ((s as any).pcs_sleep ?? 0)) * 636) / 100;
    } else {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_to_full'] = (100 - ((s as any).pcs_sleep ?? 0)) * 5;
    }
  }
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_to_full'] = ((s as any).sleepVars['time_to_full'] ?? 0) + (60 + (Math.floor(Math.random() * 91) + 0));
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['minutes_to_wakeup'] = ((s as any).locArgs?.[1] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSleepUntil(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_minutes = (((s as any).locArgs?.[1] ?? 0) - ((s as any).hour ?? 0)) * 60 + ((s as any).locArgs?.[2] ?? 0) - ((s as any).minut ?? 0);
  if (((s as any).temp_minutes ?? 0) < 0) {
    (s as any).temp_minutes = ((s as any).temp_minutes ?? 0) + (1440);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_minutes ?? 0)]; enterForced(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterLoop(s: GameState, scene: SceneBuilder): void {
  (s as any).inSleep = 1;
  // TODO-QSP: :sleep_simple_loop
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stime'] = ((s as any).sleepVars['stime'] ?? 0) + (1);
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_now'] = ((s as any).sleepVars['time_now'] ?? 0) + (1);
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['minutes_to_wakeup'] = ((s as any).sleepVars['minutes_to_wakeup'] ?? 0) - (1);
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_to_full'] = ((s as any).sleepVars['time_to_full'] ?? 0) - (1);
  if (((s as any).recuperation ?? 0) === 0  ||  ((s as any).sleepVars ?? 0)?.['no_health'] === 1) {
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['health_stock'] = ((s as any).sleepVars['health_stock'] ?? 0) + (((s as any).healthmax ?? 0));
  }
  if (((s as any).sleepVars ?? 0)?.['health_stock'] >= 960) {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + ((((s as any).sleepVars ?? {})?.['health_stock'] ?? 0) / 960);
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['health_stock'] = (((s as any).sleepVars ?? {})?.['health_stock'] ?? 0) % 960;
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
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['stime'] = 0;
  }
  if (((s as any).minut ?? 0) === 60) {
    qspCall(s, 'stat', '');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterModSleeptriggers(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sleepVars ?? 0)?.['minutes_to_wakeup'] > 0) {
    // TODO-QSP: jump 'sleep_simple_loop'
  }
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['no_health'] = 0;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['time_now'] = ((s as any).daystart ?? 0) * 1440 + ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0);
  (s as any).inSleep = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterModSleeptriggers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'sleep_simple', 'mod_sleeptriggers');
  // TODO-QSP: end
  scene.build();
}

function enterNapBed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sleep ?? 0) < 10) {
    qspCall(s, 'shortgs', 'autosave');
    qspGoto(s, 'pre_sleep', 'prepare_sleep');
  } else {
    if (((s as any).pcs_sleep ?? 0) <= 90) {
      (s as any).inSleep = 1;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 60]; enterNapBase(s, scene); (s as any).locArgs = __savedLocArgs; }
      if ((!((s as any).locArgs?.[1] ?? 0))) {
        scene.text('You sleep about an hour.');
      }
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      if ((!((s as any).locArgs?.[1] ?? 0))) {
        scene.text('You are not tired enough to sleep, even for a short nap.');
      }
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up', handler: (st: GameState) => {
    (st as any).inSleep = 0;
  }, goto: ['bed_get_out', 'start'] },
  ]);
  scene.build();
}

function enterNap(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sleep ?? 0) <= 90) {
    (s as any).inSleep = 1;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 60]; enterNapBase(s, scene); (s as any).locArgs = __savedLocArgs; }
    if ((!((s as any).locArgs?.[1] ?? 0))) {
      scene.text('You nap for about an hour.');
    }
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if ((!((s as any).locArgs?.[1] ?? 0))) {
      scene.text('You are not tired enough even for a short nap.');
    }
  }
  qspCall(s, 'stat', '');
  (s as any).inSleep = 0;
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterNapBase(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  } else {
    // TODO-QSP: ARGS[1] *= -1
  }
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (((s as any).locArgs?.[1] ?? 0) / 6);
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (((s as any).locArgs?.[1] ?? 0) / 12);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'forced':
      enterForced(s, scene);
      break;
    case 'sleep_until':
      enterSleepUntil(s, scene);
      break;
    case 'loop':
      enterLoop(s, scene);
      break;
    case 'mod_sleeptriggers':
      enterModSleeptriggers(s, scene);
      break;
    case 'nap_bed':
      enterNapBed(s, scene);
      break;
    case 'nap':
      enterNap(s, scene);
      break;
    case 'nap_base':
      enterNapBase(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sleep_simple: LocationDef = {
  name: 'sleep_simple',
  title: 'You nap for about an hour.',
  region: 'other',
  enter: enter,
};
