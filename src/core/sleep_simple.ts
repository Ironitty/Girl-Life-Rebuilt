import type { GameState } from './types';
import { advanceTime } from './time';

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcTimeToFull(s: GameState): number {
  const dur = s.trait_vars['sleep_duration'] || 0;
  if (dur === 1) return Math.floor(((100 - s.pcs_sleep) * 353) / 100);
  if (dur === -1) return Math.floor(((100 - s.pcs_sleep) * 636) / 100);
  return (100 - s.pcs_sleep) * 5;
}

export function sleepSimple(s: GameState): void {
  s.sleepVars['time_to_full'] = calcTimeToFull(s) + 60 + randInt(0, 90);
  sleepCalcMinutesToWakeup(s);
  sleepLoop(s);
}

export function sleepForced(s: GameState, minutes: number): void {
  if (minutes <= 0) {
    sleepSimple(s);
    return;
  }
  s.sleepVars['time_to_full'] = calcTimeToFull(s) + 60 + randInt(0, 90);
  s.sleepVars['minutes_to_wakeup'] = minutes;
  sleepLoop(s);
}

export function sleepUntil(s: GameState, targetHour: number, targetMinute: number): void {
  let tempMinutes = (targetHour - s.hour) * 60 + targetMinute - s.minut;
  if (tempMinutes < 0) tempMinutes += 1440;
  sleepForced(s, tempMinutes);
}

function sleepCalcMinutesToWakeup(s: GameState): void {
  s.sleepVars['minutes_to_wakeup'] = s.sleepVars['time_to_full'] || 0;
  s.sleepVars['stime'] = 0;
  s.sleepVars['time_now'] = 0;
  s.sleepVars['health_stock'] = 0;
  s.sleepVars['no_health'] = 0;
}

export function sleepLoop(s: GameState): void {
  s.inSleep = 1;

  while ((s.sleepVars['minutes_to_wakeup'] || 0) > 0) {
    advanceTime(s, 1);
    s.sleepVars['stime'] = (s.sleepVars['stime'] || 0) + 1;
    s.sleepVars['time_now'] = (s.sleepVars['time_now'] || 0) + 1;
    s.sleepVars['minutes_to_wakeup'] = (s.sleepVars['minutes_to_wakeup'] || 0) - 1;
    s.sleepVars['time_to_full'] = (s.sleepVars['time_to_full'] || 0) - 1;

    if ((s as any).recuperation === 0 || s.sleepVars['no_health'] === 1) {
      s.sleepVars['health_stock'] = (s.sleepVars['health_stock'] || 0) + s.healthmax;
    }
    if ((s.sleepVars['health_stock'] || 0) >= 960) {
      s.pcs_health += s.sleepVars['health_stock'] / 960;
      s.sleepVars['health_stock'] = s.sleepVars['health_stock'] % 960;
    }

    const dur = s.trait_vars['sleep_duration'] || 0;
    const stime = s.sleepVars['stime'] || 0;
    if (dur === 1) {
      if (stime % 5 === 0) s.pcs_sleep += 1;
      if (stime % 11 === 0) s.pcs_sleep += 1;
    } else if (dur === -1) {
      if (stime % 7 === 0) {
        s.pcs_sleep += 1;
        if (randInt(1, 100) <= 18) s.pcs_sleep += 1;
      }
    } else {
      if (stime % 5 === 0) s.pcs_sleep += 1;
    }

    if (s.sleepVars['stime'] >= 60) s.sleepVars['stime'] = 0;
  }

  s.sleepVars['no_health'] = 0;
  s.sleepVars['time_now'] = s.daystart * 1440 + s.hour * 60 + s.minut;
  s.inSleep = 0;
}

export function sleepNapBase(s: GameState, minutes: number): void {
  if (minutes > 0) {
    s.minut += minutes;
  } else {
    minutes *= -1;
  }
  s.pcs_sleep += minutes / 6;
  s.pcs_health += minutes / 12;
}
