import type { GameState } from './types';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getBaseStimmag(s: GameState): number {
  let mag = 5;
  if (s.pcs_horny > 100) mag += 1;
  if (s.pcs_horny > 200) mag += 1;
  if (s.pcs_horny > 300) mag += 1;
  if (s.trait_vars['sensitivity'] > 0) mag += s.trait_vars['sensitivity'];
  if (s.trait_vars['sensitivity'] < 0) mag -= s.trait_vars['sensitivity'];
  return Math.max(1, Math.min(mag, 9));
}

export function calcStimTotal(mag: number, act: number, kink: number, pref: number, time: number): number {
  const base = mag * act;
  const kinkBonus = (kink - 100) / 100;
  const prefBonus = pref / 200;
  const timeMult = Math.max(1, time / 5);
  return Math.max(0, Math.floor(base * (1 + kinkBonus + prefBonus) * timeMult / 10));
}

export function feed(s: GameState, level: number): void {
  s.pcs_hydra -= level * 2;
  s.pcs_energy -= level;
}

export function inVag(s: GameState, stim: Record<string, number>): void {
  const time = Math.max(1, stim['time']);
  s.pcs_stam -= rand(2, 5) * Math.max(1, time / 5);
  s.pcs_hydra -= rand(3, 6) * Math.max(1, time / 5);
  s.fat += rand(1, 3) * Math.max(1, time / 5);
  stim['act'] = 30;
  if (s.ar_anal_lube === 0 && s.auto_vag_lube === 1) {
    s.vaginal_slip = Math.max(s.vaginal_slip, 8);
  }
}

export function inAnal(s: GameState, stim: Record<string, number>): void {
  const time = Math.max(1, stim['time']);
  s.pcs_stam -= rand(3, 6) * Math.max(1, time / 5);
  s.pcs_hydra -= rand(2, 4) * Math.max(1, time / 5);
  s.fat += rand(1, 2) * Math.max(1, time / 5);
  stim['act'] = 10;
  if (s.ar_anal_lube === 0 && s.auto_anal_lube === 1) {
    s.anal_slip = Math.max(s.anal_slip, 8);
  }
}

export function inThroat(s: GameState, stim: Record<string, number>): void {
  const time = Math.max(1, stim['time']);
  s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
  s.pcs_hydra -= rand(2, 4) * Math.max(1, time / 5);
  stim['act'] = 40;
}

export function getHolePain(
  s: GameState,
  holeSize: number,
  slip: number,
  currentPain: number,
  minPain: number,
  maxPain: number,
  extra: number,
  time: number
): void {
  const arousalVars = s as unknown as Record<string, unknown>;
  const girth = s.dick_width11;
  const length = s.dick_length11;
  const girthDiff = Math.max(0, (girth - holeSize) * 2);
  const lengthDiff = Math.max(0, (length - holeSize * 2) / 2);
  const slipReduction = slip / 10;
  const total = Math.max(minPain, Math.min(maxPain, girthDiff + lengthDiff - slipReduction + extra + rand(0, 3)));
  (arousalVars as Record<string, number>)['girth_diff'] = girthDiff;
  (arousalVars as Record<string, number>)['length_diff'] = lengthDiff;
  s.pain['vaginal'] = Math.min(currentPain + total, 120);
}

export function stretch(s: GameState, type: string, _anal?: number): void {
  if (type === 'vaginal') {
    if (s.dick_length11 > s.pcs_vag + s.vgape * 2) {
      s.vgape += 1;
    }
  } else if (type === 'anal') {
    if (s.dick_length11 > s.pcs_ass + s.agape * 2) {
      s.agape += 1;
    }
  }
}

export function setVirginityStats(s: GameState, cause?: string): void {
  s.stat['think_virgin'] = 0;
  if (cause) {
    (s.virgin_stats as Record<string, unknown>)['lost_cause'] = cause;
  }
}

export function autoLube(s: GameState, type: string): void {
  if (type === 'anal') {
    s.anal_slip = Math.max(s.anal_slip, 8);
    s.ar_anal_lube = 1;
  } else if (type === 'vag') {
    s.vaginal_slip = Math.max(s.vaginal_slip, 8);
    s.ar_vag_lube = 1;
  }
}

export function checkEvents(s: GameState, _args: string[]): void {
  // Placeholder for arousal event checks
}

export function arousalStatsEnd(s: GameState, _noStat?: string): void {
  s.ar_anal_lube = 0;
  s.ar_vag_lube = 0;
  s.orgasm_or = '';
  s.orgasm_txt = '';
}
