import type { GameState } from './types';

function intClamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Math.round(v)));
}

function getMultiplied(opt: number, val: number, mult: number): number {
  if (opt === 0) return val;
  if (opt === 1) return Math.round(val * mult);
  return val;
}

export function moodClamp(s: GameState): void {
  s.mood_trauma = intClamp(s.mood_trauma, 0, 15);
  if (s.moodVars.disp_base === 0) s.moodVars.disp_base = 50;

  let maxMood = 100;
  if (s.gerpes >= 3) maxMood -= 5;
  if (s.sifilis >= 21) maxMood -= 5;
  if (s.triper > 2) maxMood -= 5;
  maxMood -= s.mood_trauma * 4;
  s.moodVars.max = Math.max(40, maxMood);

  s.moodVars.min = 1;

  s.moodVars.disp_base = intClamp(s.moodVars.disp_base, 20, 70);
  s.moodVars.disp = intClamp(s.moodVars.disp_base + (s.arch_effects['disposition_effect'] || 0), 20, 70);
  s.pcs_mood = Math.min(s.moodVars.max, s.pcs_mood);
  if (s.pcs_mood < s.moodVars.min) {
    s.pcs_mood = s.moodVars.min;
    s.pcs_health -= Math.max(5, Math.min(20, s.pcs_mood - s.moodVars.min));
  }
}

export function moodReset(s: GameState): void {
  s.pcs_mood = s.moodVars.disp;
}

export function moodInterpret(s: GameState, degree: string | number): number {
  if (typeof degree === 'number') return degree;
  switch (degree) {
    case 'max': return 100 - s.pcs_mood;
    case 'min': return s.pcs_mood;
    case 'huge': return 40;
    case 'large': return 30;
    case 'medium': return 20;
    case 'small': return 10;
    case 'tiny': return 5;
    default: return Number(degree) || 0;
  }
}

export function moodRaise(s: GameState, val: string | number): void {
  const v = typeof val === 'number' && val !== 0 ? val : moodInterpret(s, val);
  s.pcs_mood += getMultiplied(s.cheatVars['pos_mood_opt'] || 0, v, s.cheatVars['pos_mood_mult'] || 1);
  moodClamp(s);
}

export function moodLower(s: GameState, val: string | number): void {
  const v = typeof val === 'number' && val !== 0 ? val : moodInterpret(s, val);
  s.pcs_mood -= getMultiplied(s.cheatVars['neg_mood_opt'] || 0, v, s.cheatVars['neg_mood_mult'] || 1);
  moodClamp(s);
}

export function moodDoormat(s: GameState, args: string[]): void {
  const level = Math.min(3, s.trait_vars['doormat'] || 0);
  const str = args[level] || '';
  if (str) {
    const pipe = str.indexOf('|');
    if (pipe > 0) {
      const dir = str.slice(0, pipe);
      const degree = str.slice(pipe + 1);
      if (dir === 'raise') moodRaise(s, degree);
      else if (dir === 'lower') moodLower(s, degree);
    }
  }
}

export function moodRaiseTrauma(s: GameState, val: number): void {
  s.mood_trauma += val;
  moodClamp(s);
}

export function moodLowerTrauma(s: GameState, val: number): void {
  s.mood_trauma -= val;
  moodClamp(s);
}

export function moodRaiseDisposition(s: GameState, val: string | number): void {
  if (val === 'max') {
    s.moodVars.disp_base = 75;
  } else {
    const v = typeof val === 'number' && val !== 0 ? val : Math.round(moodInterpret(s, val) / 5);
    s.moodVars.disp_base += getMultiplied(s.cheatVars['pos_mood_opt'] || 0, v, s.cheatVars['pos_mood_mult'] || 1);
  }
  moodClamp(s);
}

export function moodLowerDisposition(s: GameState, val: string | number): void {
  if (val === 'min') {
    s.moodVars.disp_base = 25;
  } else {
    const v = typeof val === 'number' && val !== 0 ? val : Math.round(moodInterpret(s, val) / 5);
    s.moodVars.disp_base -= getMultiplied(s.cheatVars['neg_mood_opt'] || 0, v, s.cheatVars['neg_mood_mult'] || 1);
  }
  moodClamp(s);
}

export function moodHold(s: GameState, minutes: number): void {
  s.moodVars.hold_minut = Math.max(s.moodVars.hold_minut, minutes);
}

export function moodStatusEffects(s: GameState, action: string, name: string): void {
  const seValues: Record<string, number> = { gerpes: -5, sifilis: -5, triper: -5 };
  const val = seValues[name] || 0;
  if (action === 'add') {
    s.moodSE[name] = (s.moodSE[name] || 0) + 1;
    moodRaiseDisposition(s, val);
  } else if (action === 'pop') {
    if ((s.moodSE[name] || 0) === 0) {
      console.warn(`removed nonexistent mood status effect ${name}`);
    } else {
      s.moodSE[name] = s.moodSE[name] - 1;
      moodLowerDisposition(s, val);
    }
  } else if (action === 'clear') {
    moodLowerDisposition(s, val * (s.moodSE[name] || 0));
    s.moodSE[name] = 0;
  }
}

export function moodDecay(s: GameState): void {
  if (s.moodVars.hold_minut > 0) {
    s.moodVars.hold_minut -= Math.min(15, s.moodVars.hold_minut);
  } else {
    s.moodVars.leftover_mood += s.pcs_mood - s.moodVars.disp;
    moodLower(s, s.moodVars.leftover_mood / 15);
    s.moodVars.leftover_mood = s.moodVars.leftover_mood % 15;
  }

  s.moodVars.momentum += s.pcs_mood - s.moodVars.disp;
  if (s.moodVars.momentum > 5000 + 50 * (s.moodVars.disp_base - 50)) {
    moodRaiseDisposition(s, 1);
    s.moodVars.momentum = 0;
  } else if (s.moodVars.momentum < -4000 + 50 * (s.moodVars.disp_base - 50)) {
    moodLowerDisposition(s, 1);
    s.moodVars.momentum = 0;
  }

  s.moodVars.inertia += s.moodVars.disp_base - 50;
  if (s.moodVars.inertia > 3200 - 50 * (s.moodVars.disp_base - 50)) {
    moodLowerDisposition(s, 1);
    s.moodVars.inertia = 0;
  } else if (s.moodVars.inertia < -4000 - 50 * (s.moodVars.disp_base - 50)) {
    moodRaiseDisposition(s, 1);
    s.moodVars.inertia = 0;
  }
}

export function moodUpdate(s: GameState): void {
  moodDecay(s);
  moodClamp(s);
}
