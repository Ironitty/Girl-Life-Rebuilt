import type { GameState } from './types';

const REGIONS = ['pav', 'city', 'village', 'pushkin'] as const;
const SPREADABLE = ['acting', 'dance', 'painting', 'music', 'ballet', 'modelling', 'porn', 'stripping', 'kickboxing', 'running', 'volleyball', 'chess', 'teaching', 'media'] as const;
const LOCAL_ONLY = ['sex', 'prostitute', 'flash'] as const;

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isLocalOnly(act: string): boolean {
  return LOCAL_ONLY.includes(act as typeof LOCAL_ONLY[number]);
}

export function fameAdd(s: GameState, region: string, act: string, value: string | number, local?: string): void {
  const fame = s.fame;
  let key = `${region}_${act}`;

  if (!isLocalOnly(act)) {
    key += local === 'local' ? '_local' : '_core';
  }

  const current = fame[key] || 0;
  let add: number;

  if (current > 1000) {
    if (value === 'tiny') add = 0;
    else if (value === 'small') add = 0;
    else if (value === 'medium') add = rand(0, 1);
    else if (value === 'large') add = rand(1, 2);
    else if (value === 'huge') add = rand(1, 4);
    else if (value === 'BronzeMedal') add = rand(15, 25);
    else if (value === 'SilverMedal') add = rand(25, 35);
    else if (value === 'GoldMedal') add = rand(35, 45);
    else add = (typeof value === 'number' ? value : Number(value)) / 10;
  } else if (current > 700) {
    if (value === 'tiny') add = rand(0, 1);
    else if (value === 'small') add = rand(1, 2);
    else if (value === 'medium') add = rand(1, 4);
    else if (value === 'large') add = rand(6, 12);
    else if (value === 'huge') add = rand(10, 24);
    else if (value === 'BronzeMedal') add = rand(25, 60);
    else if (value === 'SilverMedal') add = rand(60, 100);
    else if (value === 'GoldMedal') add = rand(100, 150);
    else {
      const num = typeof value === 'number' ? value : Number(value);
      const target = current + num / 6;
      add = target < 1000 ? num / 6 : 1000 + (3 * (target - 1000)) / 5;
      if (add > 1000) { fame[key] = add; fameCalculate(s, act); fameCalculateGroups(s); return; }
    }
  } else if (current > 400) {
    if (value === 'tiny') add = rand(1, 2);
    else if (value === 'small') add = rand(1, 4);
    else if (value === 'medium') add = rand(6, 12);
    else if (value === 'large') add = rand(10, 24);
    else if (value === 'huge') add = rand(20, 50);
    else if (value === 'BronzeMedal') add = rand(50, 100);
    else if (value === 'SilverMedal') add = rand(100, 150);
    else if (value === 'GoldMedal') add = rand(150, 200);
    else {
      const num = typeof value === 'number' ? value : Number(value);
      const target = current + num / 3;
      if (target < 700) add = num / 3;
      else if (target < 1300) { fame[key] = 700 + (target - 700) / 2; fameCalculate(s, act); fameCalculateGroups(s); return; }
      else { fame[key] = 1000 + (3 * ((target - 700) / 2 - 300)) / 5; fameCalculate(s, act); fameCalculateGroups(s); return; }
    }
  } else {
    if (value === 'tiny') add = rand(1, 4);
    else if (value === 'small') add = rand(6, 12);
    else if (value === 'medium') add = rand(10, 24);
    else if (value === 'large') add = rand(20, 50);
    else if (value === 'huge') add = rand(40, 70);
    else if (value === 'BronzeMedal') add = rand(150, 250);
    else if (value === 'SilverMedal') add = rand(250, 350);
    else if (value === 'GoldMedal') add = rand(350, 450);
    else {
      const num = typeof value === 'number' ? value : Number(value);
      const target = current + num;
      if (target < 400) add = num;
      else if (target < 1300) { fame[key] = 400 + (target - 400) / 3; fameCalculate(s, act); fameCalculateGroups(s); return; }
      else if (target < 3100) { fame[key] = 700 + ((target - 400) / 3 - 300) / 2; fameCalculate(s, act); fameCalculateGroups(s); return; }
      else { fame[key] = 1000 + (3 * (((target - 400) / 3 - 300) / 2 - 300)) / 5; fameCalculate(s, act); fameCalculateGroups(s); return; }
    }
  }

  fame[key] = current + add;

  if (!isLocalOnly(act)) {
    const coreKey = `${region}_${act}_core`;
    if (fame[coreKey] < 0) fame[coreKey] = 0;
    fameCalculate(s, act);
  }
  fameCalculateGroups(s);
}

function fameSetContributions(s: GameState, act: string): void {
  const f = s.fame;
  const a = act;

  const pavCore = f[`pav_${a}_core`] || 0;
  const cityCore = f[`city_${a}_core`] || 0;
  const pushkinCore = f[`pushkin_${a}_core`] || 0;
  const villageCore = f[`village_${a}_core`] || 0;

  f[`pav_${a}_contribution_low`] = pavCore >= 2000 ? 525 : 1050 - (42000000 / ((pavCore / 10) * (pavCore / 10) + 40000));
  f[`pav_${a}_contribution_high`] = pavCore >= 1005 ? 1005 : (pavCore * (1050 - 525000000 / (500000 + (pavCore / 10) ** 4))) / 1050;
  f[`pav_${a}_contribution_medium`] = pavCore >= 2000 ? 1050 : pavCore >= 400 ? 1050 - (672000000 / (((pavCore / 10) - 40) ** 4 + 640000)) : 0;

  f[`city_${a}_contribution_high`] = cityCore >= 2000 ? 1050 : 1050 - (52500000 / ((cityCore / 10) ** 3 + 50000));
  f[`city_${a}_contribution_medium`] = cityCore >= 1000 ? 1000 : (cityCore * cityCore) / 1000;
  f[`city_${a}_contribution_low`] = cityCore >= 2000 ? 1050 : cityCore >= 200 ? 1050 - (672000000 / (((cityCore / 10) - 20) ** 4 + 640000)) : 0;

  f[`pushkin_${a}_contribution_high`] = pushkinCore >= 1005 ? 1050 : (pushkinCore * (1050 - 525000000 / (500000 + (pushkinCore / 10) ** 4))) / 1050;
  f[`pushkin_${a}_low`] = pushkinCore >= 2000 ? 525 : 1050 - (42000000 / ((pushkinCore / 10) ** 2 + 40000));
  f[`pushkin_${a}_contribution_medium`] = pushkinCore >= 2000 ? 1050 : pushkinCore >= 400 ? 1050 - (672000000 / (((pushkinCore / 10) - 40) ** 4 + 640000)) : 0;

  f[`village_${a}_contribution`] = villageCore / 100;
}

export function fameCalculate(s: GameState, act: string): void {
  if (isLocalOnly(act)) return;
  fameSetContributions(s, act);
  const f = s.fame;
  const a = act;

  for (const region of REGIONS) {
    const core = f[`${region}_${a}_core`] || 0;
    const local = f[`${region}_${a}_local`] || 0;
    let val = core >= 1000 ? core + local / 1000 : (1000 * core + (1000 - core) * local) / 1000;

    if (region === 'pav') {
      const contribs = [f[`city_${a}_contribution_high`] || 0, f[`pushkin_${a}_contribution_high`] || 0, f[`village_${a}_contribution`] || 0];
      for (const c of contribs) val += val >= 1000 ? c / 1000 : ((1000 - val) * c) / 1000;
    } else if (region === 'city') {
      const contribs = [f[`pav_${a}_contribution_low`] || 0, f[`pushkin_${a}_low`] || 0, f[`village_${a}_contribution`] || 0];
      for (const c of contribs) val += val >= 1000 ? c / 1000 : ((1000 - val) * c) / 1000;
    } else if (region === 'pushkin') {
      const contribs = [f[`pav_${a}_contribution_high`] || 0, f[`city_${a}_contribution_high`] || 0, f[`village_${a}_contribution`] || 0];
      for (const c of contribs) val += val >= 1000 ? c / 1000 : ((1000 - val) * c) / 1000;
    } else {
      const contribs = [f[`pav_${a}_contribution_medium`] || 0, f[`city_${a}_contribution_low`] || 0, f[`pushkin_${a}_contribution_medium`] || 0];
      for (const c of contribs) val += val >= 1000 ? c / 1000 : ((1000 - val) * c) / 1000;
    }

    f[`${region}_${a}`] = Math.max(0, Math.min(1200, val));
  }
}

export function fameCalculateGroups(s: GameState): void {
  const f = s.fame;
  for (const r of REGIONS) {
    let performer = 0;
    for (const a of ['acting', 'dance', 'painting', 'music', 'ballet', 'modelling']) {
      const v = f[`${r}_${a}`] || 0;
      if (v > 30) performer += (v - 30) / 3;
    }
    f[`${r}_performer`] = performer;

    let sexind = 0;
    for (const a of ['porn', 'stripping']) {
      const v = f[`${r}_${a}`] || 0;
      if (v > 30) sexind += (v - 30) / 2;
    }
    f[`${r}_sexind`] = sexind;

    let slut = 0;
    for (const a of ['sex', 'prostitute']) {
      const v = f[`${r}_${a}`] || 0;
      if (v > 30) slut += (v - 30) / 2;
    }
    const flash = f[`${r}_flash`] || 0;
    if (flash > 30) slut += Math.min(flash - 30, 100) / 4;
    f[`${r}_slut`] = slut;

    let sport = 0;
    for (const a of ['kickboxing', 'running', 'volleyball']) {
      const v = f[`${r}_${a}`] || 0;
      if (v > 30) sport += (v - 30) / 3;
    }
    f[`${r}_sport`] = sport;

    let int = 0;
    const chess = f[`${r}_chess`] || 0;
    if (chess > 30) int += (chess - 30) / 2;
    const teaching = f[`${r}_teaching`] || 0;
    if (teaching > 30) int += (teaching - 30) / 3;
    f[`${r}_int`] = int;

    let social = 0;
    const media = f[`${r}_media`] || 0;
    if (media > 30) social += (media - 30) / 2;
    f[`${r}_social`] = social;
  }
}

export function fameDeg(s: GameState): void {
  const f = s.fame;
  for (const r of REGIONS) {
    for (const a of LOCAL_ONLY) {
      const key = `${r}_${a}`;
      if (f[key] > 2) f[key] -= rand(-1, 3);
    }
    for (const a of SPREADABLE) {
      for (const suffix of ['_core', '_local']) {
        const key = `${r}_${a}${suffix}`;
        if (f[key] > 2) f[key] -= rand(-1, 3);
      }
    }
  }
  for (const a of SPREADABLE) fameCalculate(s, a);
  fameCalculateGroups(s);
}

export function fameChurchReduction(s: GameState, region: string, amount: number): void {
  const f = s.fame;
  f[`${region}_sex`] = Math.max(0, (f[`${region}_sex`] || 0) - amount);
  f[`${region}_prostitute`] = Math.max(0, (f[`${region}_prostitute`] || 0) - amount);
  f[`${region}_flash`] = Math.max(0, (f[`${region}_flash`] || 0) - 2 * amount);
  fameCalculateGroups(s);
}
