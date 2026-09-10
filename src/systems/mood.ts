import type { GameState } from '../core/types';

export type MoodDegree = 'max' | 'min' | 'huge' | 'large' | 'medium' | 'small' | 'tiny';

const MOOD_VALUES: Record<MoodDegree, number> = {
  max: 100,
  min: 1,
  huge: 40,
  large: 30,
  medium: 20,
  small: 10,
  tiny: 5,
};

const MOOD_SE_VALUES: Record<string, number> = {
  gerpes: -5,
  sifilis: -5,
  triper: -5,
};

export function interpretDegree(degree: MoodDegree | number): number {
  if (typeof degree === 'number') return degree;
  return MOOD_VALUES[degree] ?? 0;
}

export function raiseMood(s: GameState, degree: MoodDegree | number): void {
  const amount = interpretDegree(degree);
  const mult = s.cheatVars['pos_mood_mult'] ?? 1;
  const opt = s.cheatVars['pos_mood_opt'] ?? 0;
  s.pcs_mood += opt > 0 ? amount * mult : amount;
  clampMood(s);
}

export function lowerMood(s: GameState, degree: MoodDegree | number): void {
  const amount = interpretDegree(degree);
  const mult = s.cheatVars['neg_mood_mult'] ?? 1;
  const opt = s.cheatVars['neg_mood_opt'] ?? 0;
  s.pcs_mood -= opt > 0 ? amount * mult : amount;
  clampMood(s);
}

export function raiseDisposition(s: GameState, degree: MoodDegree | number): void {
  if (degree === 'max') {
    s.moodVars.disp_base = 75;
  } else {
    const raw = interpretDegree(degree);
    const val = Math.floor(raw / 5);
    const mult = s.cheatVars['pos_mood_mult'] ?? 1;
    const opt = s.cheatVars['pos_mood_opt'] ?? 0;
    s.moodVars.disp_base += opt > 0 ? val * mult : val;
  }
  clampMood(s);
}

export function lowerDisposition(s: GameState, degree: MoodDegree | number): void {
  if (degree === 'min') {
    s.moodVars.disp_base = 25;
  } else {
    const raw = interpretDegree(degree);
    const val = Math.floor(raw / 5);
    const mult = s.cheatVars['neg_mood_mult'] ?? 1;
    const opt = s.cheatVars['neg_mood_opt'] ?? 0;
    s.moodVars.disp_base -= opt > 0 ? val * mult : val;
  }
  clampMood(s);
}

export function doormatMood(s: GameState, args: [string, string, string, string]): void {
  const level = Math.min(3, s.trait_vars['doormat'] ?? 0);
  const str = args[level];
  if (!str) return;
  const pipe = str.indexOf('|');
  if (pipe < 0) return;
  const dir = str.slice(0, pipe);
  const deg = str.slice(pipe + 1);
  if (dir === 'raise') raiseMood(s, deg as MoodDegree);
  else if (dir === 'lower') lowerMood(s, deg as MoodDegree);
}

export function raiseTrauma(s: GameState, amount: number): void {
  s.mood_trauma += amount;
  clampMood(s);
}

export function lowerTrauma(s: GameState, amount: number): void {
  s.mood_trauma -= amount;
  clampMood(s);
}

export function holdMood(s: GameState, minutes: number): void {
  s.moodVars.hold_minut = Math.max(s.moodVars.hold_minut, minutes);
}

export function addMoodSE(s: GameState, name: string): void {
  s.moodSE[name] = (s.moodSE[name] ?? 0) + 1;
  const val = MOOD_SE_VALUES[name];
  if (val !== undefined) raiseDisposition(s, val);
}

export function popMoodSE(s: GameState, name: string): void {
  if ((s.moodSE[name] ?? 0) === 0) return;
  s.moodSE[name] = (s.moodSE[name] ?? 1) - 1;
  const val = MOOD_SE_VALUES[name];
  if (val !== undefined) lowerDisposition(s, val);
}

export function clearMoodSE(s: GameState, name: string): void {
  const count = s.moodSE[name] ?? 0;
  const val = MOOD_SE_VALUES[name];
  if (val !== undefined && count > 0) lowerDisposition(s, val * count);
  s.moodSE[name] = 0;
}

export function clampMood(s: GameState): void {
  s.mood_trauma = Math.min(15, Math.max(0, s.mood_trauma));
  if (s.moodVars.disp_base === 0) s.moodVars.disp_base = 50;

  s.moodVars.max = 100;
  if ((s.moodSE['gerpes'] ?? 0) >= 3) s.moodVars.max -= 5;
  if ((s.moodSE['sifilis'] ?? 0) >= 21) s.moodVars.max -= 5;
  if ((s.moodSE['triper'] ?? 0) > 2) s.moodVars.max -= 5;
  s.moodVars.max -= s.mood_trauma * 4;
  s.moodVars.max = Math.max(40, s.moodVars.max);

  s.moodVars.min = 1;

  s.moodVars.disp_base = Math.min(70, Math.max(20, s.moodVars.disp_base));
  const archEff = s.arch_effects['disposition_effect'] ?? 0;
  s.moodVars.disp = Math.min(70, Math.max(20, s.moodVars.disp_base + archEff));

  s.pcs_mood = Math.min(s.moodVars.max, s.pcs_mood);
  if (s.pcs_mood < s.moodVars.min) {
    s.pcs_mood = s.moodVars.min;
    s.pcs_health -= Math.max(5, Math.min(20, s.pcs_mood - s.moodVars.min));
  }
}

export function decayMood(s: GameState): void {
  if (s.moodVars.hold_minut > 0) {
    s.moodVars.hold_minut -= Math.min(15, s.moodVars.hold_minut);
  } else {
    s.moodVars.leftover_mood += s.pcs_mood - s.moodVars.disp;
    lowerMood(s, s.moodVars.leftover_mood / 15);
    s.moodVars.leftover_mood = s.moodVars.leftover_mood % 15;
  }

  s.moodVars.momentum += s.pcs_mood - s.moodVars.disp;
  const momThresholdHigh = 5000 + 50 * (s.moodVars.disp_base - 50);
  const momThresholdLow = -4000 + 50 * (s.moodVars.disp_base - 50);
  if (s.moodVars.momentum > momThresholdHigh) {
    raiseDisposition(s, 1);
    s.moodVars.momentum = 0;
  } else if (s.moodVars.momentum < momThresholdLow) {
    lowerDisposition(s, 1);
    s.moodVars.momentum = 0;
  }

  s.moodVars.inertia += s.moodVars.disp_base - 50;
  const inThresholdHigh = 3200 - 50 * (s.moodVars.disp_base - 50);
  const inThresholdLow = -4000 - 50 * (s.moodVars.disp_base - 50);
  if (s.moodVars.inertia > inThresholdHigh) {
    lowerDisposition(s, 1);
    s.moodVars.inertia = 0;
  } else if (s.moodVars.inertia < inThresholdLow) {
    raiseDisposition(s, 1);
    s.moodVars.inertia = 0;
  }
}

export function updateMood(s: GameState): void {
  decayMood(s);
  clampMood(s);
}

export function resetMood(s: GameState): void {
  s.pcs_mood = s.moodVars.disp;
}
