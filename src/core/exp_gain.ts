import type { GameState } from './types';

function getExpGainMult(s: GameState): number {
  return s.cheatVars['exp_gain_mult'] || 1;
}

export function expGain(s: GameState, skillName: string, amount: number): void {
  if (!skillName || amount <= 0) return;
  if (s.no_exp_gain === 1) return;

  if (skillName === 'stren_plus' && s.stren_plus_lvl >= 50 && (s.drugVars['steroids_dose'] || 0) === 0) return;

  if (skillName === 'inhib') {
    s.inhib_exp += amount;
    return;
  }

  let mult = getExpGainMult(s);

  const lackOfSleep = s.pcs_condition['lack_of_sleep'] || 0;
  if (s.pcs_stam <= 0) {
    if (lackOfSleep >= 20) mult *= 50 / 400;
    else if (lackOfSleep >= 10) mult *= 100 / 400;
    else if (lackOfSleep >= 5) mult *= 150 / 400;
    else if (lackOfSleep >= 2) mult *= 180 / 400;
    else mult *= 200 / 400;
  } else if (s.pcs_stam < s.stammax / 5) {
    if (lackOfSleep >= 20) mult *= 75 / 400;
    else if (lackOfSleep >= 10) mult *= 150 / 400;
    else if (lackOfSleep >= 5) mult *= 225 / 400;
    else if (lackOfSleep >= 2) mult *= 270 / 400;
    else mult *= 300 / 400;
  } else {
    if (lackOfSleep >= 20) mult *= 100 / 400;
    else if (lackOfSleep >= 10) mult *= 200 / 400;
    else if (lackOfSleep >= 5) mult *= 300 / 400;
    else if (lackOfSleep >= 2) mult *= 360 / 400;
    else mult *= 400 / 400;
  }

  if (mult <= 0) return;

  const statName = skillName;
  const expKey = `${statName}_exp_frac`;
  const expGainKey = `${statName}_exp`;
  const lvlKey = `${statName}_lvl`;
  const mutaKey = `${statName}_muta`;

  const rec = s as unknown as Record<string, unknown>;
  const expFrac = ((rec[expKey] as number) || 0) + amount * mult;
  const gained = Math.floor(expFrac / 100);
  rec[expKey] = expFrac % 100;

  if (gained <= 0) return;

  const lvl = (rec[lvlKey] as number) || 0;
  const muta = (rec[mutaKey] as number) || 0;

  if (lvl >= 100 + muta) return;

  if (statName === 'magik') {
    rec['magik_adj'] = ((rec['magik_adj'] as number) || 0) + gained;
  } else {
    rec[expGainKey] = ((rec[expGainKey] as number) || 0) + gained;
  }

  if (statName === 'intel') {
    s.drugVars['mentats_expgain'] = (s.drugVars['mentats_expgain'] || 0) + gained * (s.drugVars['mentats_dose'] || 0);
  } else if (statName === 'stren') {
    s.drugVars['steroids_stren_expgain'] = (s.drugVars['steroids_stren_expgain'] || 0) + gained * (s.drugVars['steroids_dose'] || 0);
    s.drugVars['steroids_check'] = 1;
  } else if (statName === 'vital') {
    s.drugVars['steroids_vital_expgain'] = (s.drugVars['steroids_vital_expgain'] || 0) + gained * (s.drugVars['steroids_dose'] || 0);
    s.drugVars['steroids_check'] = 1;
  }
}
