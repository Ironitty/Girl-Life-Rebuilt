import type { GameState } from './types';
import { expGain } from './exp_gain';
import { moodRaise } from './mood';
import { sweatAdd } from './sweat';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getSportClothesExerciseBonus(s: GameState): number {
  let bonus = 0;
  if (s.PBraSport) bonus += 1;
  else if (s.PCloBra && s.PCloSport) bonus += 1;

  if (s.PPanSport) bonus += 1;
  else if (s.PCloPanties && s.PCloSport) bonus += 1;

  if (s.PCloSport) bonus += 1;
  if (s.PShoSport) bonus += 1;

  s.sport_clothes_exercise_bonus = bonus;
  return bonus;
}

export function exerciseTier1(s: GameState, timeOverride: number, stat1: string, stat2?: string): void {
  let mult: number;
  if (timeOverride === 0) {
    s.minut += 15;
    mult = 3;
  } else if (timeOverride > 0) {
    s.minut += timeOverride;
    mult = (3 + timeOverride) / 5;
  } else {
    mult = (3 - timeOverride) / 5;
  }

  getSportClothesExerciseBonus(s);
  moodRaise(s, 'tiny');
  s.fat -= 4;

  s.lastexerciseexp = 0;
  let m = 0;
  while (m < mult) {
    s.lastexerciseexp += rand(1, 6) / 6;
    if (!stat2) {
      expGain(s, stat1, rand(0, 1));
    } else {
      expGain(s, stat1, rand(1, 6) / 6);
      expGain(s, stat2, rand(1, 6) / 6);
    }
    s.pcs_stam -= (5 * (10 - s.sport_clothes_exercise_bonus) + rand(0, 5)) / 6;
    s.pcs_energy -= rand(1, 3) / 3;
    s.pcs_hydra -= rand(2, 4) / 3;
    moodRaise(s, rand(1, 3) / 3);
    s.fat -= rand(1, 6) / 6;
    sweatAdd(s, 1);
    if (s.trait_vars['fitness_freak'] === 1) s.pcs_horny += 2 + rand(1, 2) / 2;
    m += 1;
  }

  s.stat['last_workout_trig'] = 1;
}

export function exerciseTier2(s: GameState, timeOverride: number, stat1: string, stat2?: string): void {
  let mult: number;
  if (timeOverride === 0) {
    s.minut += 15;
    mult = 3;
  } else if (timeOverride > 0) {
    s.minut += timeOverride;
    mult = (3 + timeOverride) / 5;
  } else {
    mult = (3 - timeOverride) / 5;
  }

  getSportClothesExerciseBonus(s);
  moodRaise(s, 'tiny');
  s.fat -= 3;

  s.lastexerciseexp = 0;
  let m = 0;
  while (m < mult) {
    s.lastexerciseexp += rand(0, 1);
    if (!stat2) {
      expGain(s, stat1, rand(5, 10) / 6);
    } else {
      expGain(s, stat1, rand(1, 3) / 3);
      expGain(s, stat2, rand(1, 3) / 3);
    }
    s.pcs_stam -= (5 * (10 - s.sport_clothes_exercise_bonus) + rand(0, 2)) / 3;
    s.pcs_energy -= rand(2, 4) / 3;
    s.pcs_hydra -= 1 + rand(1, 3) / 3;
    moodRaise(s, rand(1, 3) / 3);
    s.fat -= rand(1, 6) / 6;
    sweatAdd(s, 3 + rand(1, 3) / 3);
    if (s.trait_vars['fitness_freak'] === 1) s.pcs_horny += 5 + rand(1, 2) / 2;
    m += 1;
  }

  s.stat['last_workout_trig'] = 1;
}

export function exerciseTier3(s: GameState, timeOverride: number, stat1: string, stat2?: string): void {
  let mult: number;
  if (timeOverride === 0) {
    s.minut += 15;
    mult = 3;
  } else if (timeOverride > 0) {
    s.minut += timeOverride;
    mult = (3 + timeOverride) / 5;
  } else {
    mult = (3 - timeOverride) / 5;
  }

  getSportClothesExerciseBonus(s);
  moodRaise(s, 'tiny');
  s.fat -= 2;

  s.lastexerciseexp = 0;
  let m = 0;
  while (m < mult) {
    s.lastexerciseexp += rand(0, 1);
    if (!stat2) {
      expGain(s, stat1, rand(1, 2));
    } else {
      expGain(s, stat1, rand(0, 1));
      expGain(s, stat2, rand(0, 1));
    }
    s.pcs_stam -= (5 * (10 - s.sport_clothes_exercise_bonus) + rand(1, 2)) / 2;
    s.pcs_energy -= 1;
    s.pcs_hydra -= 2;
    moodRaise(s, rand(1, 3) / 3);
    s.fat -= rand(1, 6) / 6;
    sweatAdd(s, 5);
    if (s.trait_vars['fitness_freak'] === 1) s.pcs_horny += 5;
    m += 1;
  }

  s.stat['last_workout_trig'] = 1;
}

export function exerciseTier4(s: GameState, timeOverride: number, stat1: string, stat2?: string): void {
  let mult: number;
  if (timeOverride === 0) {
    s.minut += 15;
    mult = 3;
  } else if (timeOverride > 0) {
    s.minut += timeOverride;
    mult = (3 + timeOverride) / 5;
  } else {
    mult = (3 - timeOverride) / 5;
  }

  getSportClothesExerciseBonus(s);
  moodRaise(s, 'tiny');
  s.fat -= 1;

  s.lastexerciseexp = 0;
  let m = 0;
  while (m < mult) {
    s.lastexerciseexp += rand(1, 2);
    if (!stat2) {
      expGain(s, stat1, rand(2, 3));
    } else {
      expGain(s, stat1, rand(1, 2));
      expGain(s, stat2, rand(1, 2));
    }
    s.pcs_stam -= (25 * (10 - s.sport_clothes_exercise_bonus) + rand(1, 6)) / 6;
    s.pcs_energy -= 1 + rand(1, 3) / 3;
    s.pcs_hydra -= 4;
    moodRaise(s, rand(1, 3) / 3);
    s.fat -= rand(1, 6) / 6;
    sweatAdd(s, 8 + rand(2, 4) / 3);
    if (s.trait_vars['fitness_freak'] === 1) s.pcs_horny += 5;
    m += 1;
  }

  s.stat['last_workout_trig'] = 1;
}

export function exercisePushupsInner(s: GameState): number {
  let tempEnergyBonus: number;
  if (s.pcs_energy <= 100) {
    tempEnergyBonus = s.pcs_energy;
  } else {
    tempEnergyBonus = 200 - s.pcs_energy;
  }

  let pushnum = 10 * (s.pcs_stren + s.pcs_vital + s.pcs_sleep + tempEnergyBonus) / 33 + rand(-10, 10);
  pushnum = Math.max(pushnum, rand(1, 5));
  s.pushnum = pushnum;

  if (s.pushrecord < pushnum) {
    s.pushrecord = pushnum;
  }

  return pushnum;
}

export function timeString(s: GameState): string {
  if (s.timemult === 1) s.timestring = 'five';
  if (s.timemult === 2) s.timestring = 'ten';
  if (s.timemult === 3) s.timestring = 'fifteen';
  if (s.timemult === 4) s.timestring = 'twenty';
  return s.timestring;
}
