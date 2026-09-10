import type { GameState } from './types';
import { updateMood, lowerMood } from '../systems/mood';
import { computeAppearance } from './appearance';

export function computeStats(s: GameState): void {
  applyCaps(s);
  statusMinima(s);
  fifteenMinuteLoop(s);
  updateMood(s);
  computeAppearance(s);
  checkAlerts(s);
}

export function applyCaps(s: GameState): void {
  s.pcs_vag = clamp(s.pcs_vag, 0, 36);
  s.pcs_ass = clamp(s.pcs_ass, 0, 36);
  s.pcs_throat = clamp(s.pcs_throat, 0, 36);
  s.pcs_inhib = clamp(s.pcs_inhib, 0, 100);
  s.pcs_sweat = clamp(s.pcs_sweat, 0, 69);
  s.pcs_sleep = Math.min(100, s.pcs_sleep);

  s.willpowermax = Math.max(50, s.willpowermax);
  s.healthmax = Math.max(1, s.pcs_vital * 10 + s.pcs_stren * 5);
  s.manamax = Math.max(1, (s.pcs_intel + 100) * s.pcs_magik + s.pcs_vital * 10);
  const stamBase = (30 * (2 * s.pcs_vital + s.pcs_agil + s.pcs_stren) + 1000) / 13;
  s.stammax = Math.max(1, stamBase / 10);

  s.pcs_willpwr = clamp(s.pcs_willpwr, 0, s.willpowermax);
  s.pcs_health = Math.min(s.healthmax, s.pcs_health);
  s.pcs_mana = Math.min(s.manamax, s.pcs_mana);
  s.pcs_stam = Math.min(s.stammax, s.pcs_stam);

  if (s.arch_vars['main_active'] === 'prude') {
    s.pcs_faith = Math.min(100, s.pcs_faith);
  } else {
    s.pcs_faith = 100;
  }

  const domNet = s.pcs_dom - s.sub;
  if (domNet >= 0) {
    s.pcs_dom = Math.min(100, domNet);
    s.sub = 0;
  } else {
    s.pcs_dom = 0;
    s.sub = Math.min(100, -domNet);
  }

  if (s.cheatVars['inf_willpower'] === 1) s.pcs_willpwr = s.willpowermax;
  if (s.cheatVars['no_sweat'] === 1) s.pcs_sweat = 0;
  if (s.cheatVars['hunger'] === 1) s.pcs_energy = Math.max(60, s.pcs_energy);
  if (s.cheatVars['thirst'] === 1) s.pcs_hydra = Math.max(60, s.pcs_hydra);
  if (s.cheatVars['sleep'] === 1) s.pcs_sleep = Math.max(35, s.pcs_sleep);
  if (s.cheatVars['always_horny'] === 1) s.pcs_horny = Math.max(50, s.pcs_horny);
}

export function statusMinima(s: GameState): void {
  if (s.pcs_sleep < 0) {
    s.pcs_sleep = 0;
    lowerMood(s, 'tiny');
  }

  let deathCauseEnergy = 0;
  if (s.pcs_energy < 0) {
    deathCauseEnergy = 1;
    s.pcs_energy = 0;
    s.pcs_health -= 5;
    if (s.fat >= 1) {
      if (s.cheatVars['fat'] !== 1) s.fat -= 1;
      s.pcs_energy += 8 + s.succublvl;
    } else {
      s.pcs_energy += 8 + s.succublvl;
    }
  }

  let deathCauseHydra = 0;
  if (s.pcs_hydra <= 0) {
    deathCauseHydra = 1;
    s.pcs_health -= Math.floor(Math.random() * (1 - s.pcs_hydra)) + 1;
    s.pcs_hydra = 1;
  }

  if (s.arch_vars['main_active'] === 'prude' && s.pcs_faith <= 0) {
    lowerMood(s, 3 * (1 - s.pcs_faith));
    s.pcs_faith = 1;
  }

  if (s.pcs_willpwr <= 0 && s.pcs_mood <= 1) {
    s.statAlerts.push('You are insane! (Willpower and Mood both at 0)');
  }

  if (s.pcs_health < 0) {
    if (deathCauseHydra === 1 && deathCauseEnergy === 1) {
      s.statAlerts.push('You died of dehydration and malnutrition!');
    } else if (deathCauseHydra === 1) {
      s.statAlerts.push('You died of dehydration!');
    } else if (deathCauseEnergy === 1) {
      s.statAlerts.push('You died of malnutrition!');
    } else {
      s.statAlerts.push('You died from injuries!');
    }
    s.pcs_health = 0;
  }
}

let trig15Minute = 0;

export function fifteenMinuteLoop(s: GameState): void {
  if (s.inSleep !== 0 || trig15Minute > s.totminut) {
    trig15Minute = s.totminut;
    return;
  }

  if (s.totminut - trig15Minute > 1440) trig15Minute = s.totminut - 1440;

  while (s.totminut - trig15Minute >= 15) {
    s.pcs_horny = Math.min(100, s.pcs_horny + 0.5);

    if (s.succubusflag === 1) {
      if (s.pcs_horny < 50) s.pcs_horny = 50;
      if (s.pcs_horny < 100) s.pcs_horny += s.succublvl;
    }

    if (s.arch_vars['main_active'] === 'prude') {
      if (Math.random() < 0.4) s.pcs_faith -= 1;
    }

    trig15Minute += 15;
  }
}

export function checkAlerts(s: GameState): void {
  s.statAlerts = [];

  if (s.pcs_energy <= 10) {
    s.statAlerts.push('You are starving!');
  }
  if (s.pcs_hydra <= 10) {
    s.statAlerts.push('You are dehydrated!');
  }
  if (s.pcs_sleep <= 10) {
    s.statAlerts.push('You are exhausted!');
  }
  if (s.pcs_health <= s.healthmax * 0.2) {
    s.statAlerts.push('Your health is critical!');
  }

  if (s.HotelRoom['pav'] > 0) {
    if (s.hotelRoomDays['pav'] - 1 === s.daystart) {
      s.statAlerts.push('You have 1 night left on your Pavlosk hotel booking.');
    } else if (s.hotelRoomDays['pav'] === s.daystart && s.hour < 11) {
      s.statAlerts.push('Your Pavlosk hotel room checks out today at 11:00!');
    }
  }

  if (s.HotelRoom['city'] > 0) {
    if (s.hotelRoomDays['city'] - 1 === s.daystart) {
      s.statAlerts.push('You have 1 night left on your St Petersburg hotel booking.');
    } else if (s.hotelRoomDays['city'] === s.daystart && s.hour < 11) {
      s.statAlerts.push('Your St Petersburg hotel room checks out today at 11:00!');
    }
  }

  if (s.birth_control['remind_hour'] > 0 && s.birth_control['auto_hour'] === 0) {
    const rh = s.birth_control['remind_hour'];
    if (s.hour >= rh && s.hour <= rh + 1) {
      s.statAlerts.push('Time to take your birth control pill!');
    }
  }
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}
