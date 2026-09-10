import type { GameState } from './types';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMultiplied(opt: number, val: number, mult: number): number {
  if (opt === 0) return val;
  if (opt === 1) return Math.round(val * mult);
  return val;
}

export function willpowerCalc(s: GameState, fetishes: string = ''): void {
  s.will_dnd = Math.floor(Math.random() * 21);
  s.will_calc = s.will_dnd;

  s.will_fetish_mod = 0;
  s.will_fetish_mod_pref = 0;
  if (fetishes) {
    const list = fetishes.split(';').map(f => f.trim()).filter(f => f && f !== 'creampie' && f !== 'pregnant');
    let count = 0;
    for (const f of list) {
      const exp = s.stat[f] || 0;
      const pref = s.stat[f + '_pref'] || 0;
      s.will_fetish_mod += Math.max(0, exp - 25);
      s.will_fetish_mod_pref += Math.max(0, pref - 25);
      count++;
    }
    if (count > 1) {
      s.will_fetish_mod = Math.floor(s.will_fetish_mod / count);
      s.will_fetish_mod_pref = Math.floor(s.will_fetish_mod_pref / count);
    }
  }

  if (s.pcs_sleep < 5) s.will_calc += 50;
  else if (s.pcs_sleep < 10) s.will_calc += 25;
  else if (s.pcs_sleep < 20) s.will_calc += 10;
  else if (s.pcs_sleep < 30) s.will_calc += 5;

  if (s.pcs_stam <= 0) s.will_calc += 10;
  else if (s.pcs_stam < s.stammax / 5) s.will_calc += 5;

  if (s.pcs_energy < 5) s.will_calc += 50;
  else if (s.pcs_energy < 10) s.will_calc += 25;
  else if (s.pcs_energy < 20) s.will_calc += 10;
  else if (s.pcs_energy < 30) s.will_calc += 5;

  if (s.pcs_hydra < 5) s.will_calc += 50;
  else if (s.pcs_hydra < 10) s.will_calc += 25;
  else if (s.pcs_hydra < 20) s.will_calc += 10;
  else if (s.pcs_hydra < 30) s.will_calc += 5;

  if (s.pcs_mood < 5) s.will_calc += 50;
  else if (s.pcs_mood < 10) s.will_calc += 25;
  else if (s.pcs_mood < 25) s.will_calc += 15;
  else if (s.pcs_mood < 40) s.will_calc += 10;
  else if (s.pcs_mood < 50) s.will_calc += 6;
  else if (s.pcs_mood < 60) s.will_calc += 3;

  if (s.sifilis >= 50) s.will_calc += 100;

  if (s.sick > 72) s.will_calc += 35;
  else if (s.sick > 48) s.will_calc += 20;
  else if (s.sick > 24) s.will_calc += 10;
  else if (s.sick > 1) s.will_calc += 5;

  s.will_calc += s.pain['total'] || 0;

  s.will_arousal_mod = Math.max(-25, Math.min((s.pcs_horny - 50) / 2 + s.will_fetish_mod, 25)) + s.will_fetish_mod_pref;
  s.will_succubus_mod = s.succublvl * 25;
}

export function willpowerDifficulty(s: GameState, type: string, difficulty: string = ''): void {
  if (s.cheatVars['willpower'] === 1) {
    s.will_cost = 0;
    return;
  }

  if (difficulty === 'easy') {
    if (s.will_cost < 5) s.will_cost = 5;
  } else if (difficulty === 'hard') {
    s.will_cost = Math.floor(s.will_cost * 9 / 4);
    if (s.will_cost < 7) s.will_cost = 7;
  } else {
    s.will_cost = Math.floor(s.will_cost * 3 / 2);
    if (s.will_cost < 6) s.will_cost = 6;
  }

  if (type === 'force') {
    s.will_cost = Math.floor(s.will_cost * (200 - s.pcs_persuas) / 100);
  } else if (type === 'resist') {
    s.will_cost = Math.floor(s.will_cost * (200 - s.pcs_sprt) / 100);
    if (s.trait_vars['doormat'] > 0) {
      s.will_cost = Math.floor(s.will_cost * (100 + 15 * s.trait_vars['doormat']) / 100);
    }
  }

  if (s.cheatVars['wp_cost_opt'] !== 0) {
    s.will_cost = getMultiplied(s.cheatVars['wp_cost_opt'], s.will_cost, s.cheatVars['wp_cost_mult'] || 1);
  }
}

export function willpowerPay(s: GameState, type: string, chore: string = ''): void {
  if (s.cheatVars['willpower'] === 0) {
    if (s.will_cost < 1) s.will_cost = 1;
    s.pcs_willpwr -= s.will_cost;
  }
  if (chore !== 'chore') {
    if (s.willpowermax < 150) s.will_counter += 1;
    if (type === 'force') {
      if (s.willpowermax < 150) s.will_counter += 9;
      if (s.will_enforced < 20) s.will_enforced += 1;
      s.pcs_persuas += rand(1, 2);
    } else if (type === 'resist') {
      s.pcs_sprt += rand(1, 2);
    }
  }
  if (s.will_counter >= 20) {
    s.will_counter -= 20;
    s.willpowermax += 1;
  }
}

export function willpowerGetCostString(s: GameState, cost: number = 0, wp: number = 0): string {
  if (cost <= 0) return '';
  if (wp <= 0) wp = s.pcs_willpwr;
  const style = s.cheatVars['willcost_style'] || 0;
  let str: string;
  if (style === 1) str = `${cost}/${wp}`;
  else if (style === 2) str = `${cost}`;
  else str = `${wp}/${cost}`;

  if (wp < cost) return ` (<span style="color:red">${str} Willpower</span>)`;
  return ` (${str} Willpower)`;
}

function calcAction(s: GameState, _statKey: string, type: string, difficulty: string, fetishes: string, statVal: number): void {
  willpowerCalc(s, fetishes);
  const succ = s.will_succubus_mod;
  const arousal = s.will_arousal_mod;
  const calc = s.will_calc;

  if (type === 'self') {
    if (statVal <= 90) s.will_cost = Math.floor((100 - statVal + calc - arousal - succ) / 10);
    else s.will_cost = Math.floor((10 + calc - arousal - succ) / 10);
  } else if (type === 'force') {
    if (statVal <= 40) s.will_cost = Math.floor((110 - s.will_enforced - statVal + calc - arousal - succ / 2) / 10);
    else s.will_cost = Math.floor((70 - s.will_enforced + calc - arousal - succ / 2) / 10);
  } else {
    if (statVal <= 90) s.will_cost = Math.floor((10 + statVal + calc + arousal + succ) / 10);
    else s.will_cost = Math.floor((100 + calc + arousal + succ) / 10);
  }
  willpowerDifficulty(s, type, difficulty);
}

export function willpowerVoyeur(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  const statVal = (s.stat['voyeur'] || 0) + (s.stat['voyeur_sex'] || 0);
  calcAction(s, 'voyeur', type, difficulty, fetishes, statVal);
}

export function willpowerFlash(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  const statVal = (s.stat['flash'] || 0) + (s.stat['flashlite'] || 0) / 2;
  calcAction(s, 'flash', type, difficulty, fetishes, statVal);
}

export function willpowerMast(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  calcAction(s, 'mast', type, difficulty, fetishes, s.stat['mast'] || 0);
}

export function willpowerHj(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  willpowerCalc(s, fetishes);
  if (type === 'self' && s.missCum >= s.timeTresh) s.will_calc = 0;
  if (type === 'resist' && s.missCum >= s.timeTresh) s.will_calc += 100;
  const statVal = s.stat['hj'] || 0;
  const succ = s.will_succubus_mod;
  const arousal = s.will_arousal_mod;
  const calc = s.will_calc;
  if (type === 'self') {
    if (statVal <= 90) s.will_cost = Math.floor((100 - statVal + calc - arousal - succ) / 10);
    else s.will_cost = Math.floor((10 + calc - arousal - succ) / 10);
  } else if (type === 'force') {
    if (statVal <= 40) s.will_cost = Math.floor((110 - s.will_enforced - statVal + calc - arousal - succ / 2) / 10);
    else s.will_cost = Math.floor((70 - s.will_enforced + calc - arousal - succ / 2) / 10);
  } else {
    if (statVal <= 90) s.will_cost = Math.floor((10 + statVal + calc + arousal + succ) / 10);
    else s.will_cost = Math.floor((100 + calc + arousal + succ) / 10);
  }
  willpowerDifficulty(s, type, difficulty);
}

export function willpowerBj(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  willpowerCalc(s, fetishes);
  if (type === 'self' && s.missCum >= s.timeTresh) s.will_calc = 0;
  if (type === 'resist' && s.missCum >= s.timeTresh) s.will_calc += 100;
  const statVal = s.stat['bj'] || 0;
  const succ = s.will_succubus_mod;
  const arousal = s.will_arousal_mod;
  const calc = s.will_calc;
  if (type === 'self') {
    if (statVal <= 90) s.will_cost = Math.floor((100 - statVal + calc - arousal - succ) / 10);
    else s.will_cost = Math.floor((10 + calc - arousal - succ) / 10);
  } else if (type === 'force') {
    if (statVal <= 40) s.will_cost = Math.floor((110 - s.will_enforced - statVal + calc - arousal - succ / 2) / 10);
    else s.will_cost = Math.floor((70 - s.will_enforced + calc - arousal - succ / 2) / 10);
  } else {
    if (statVal <= 90) s.will_cost = Math.floor((10 + statVal + calc + arousal + succ) / 10);
    else s.will_cost = Math.floor((100 + calc + arousal + succ) / 10);
  }
  willpowerDifficulty(s, type, difficulty);
}

export function willpowerCuni(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  willpowerCalc(s, fetishes);
  const statVal = ((s.stat['cuni'] || 0) + (s.stat['cuni_give'] || 0)) / 2;
  const succ = s.will_succubus_mod;
  const arousal = s.will_arousal_mod;
  const calc = s.will_calc;
  if (type === 'self') {
    if (statVal <= 90) s.will_cost = Math.floor((100 - statVal + calc - arousal - succ) / 10);
    else s.will_cost = Math.floor((10 + calc - arousal - succ) / 10);
  } else if (type === 'force') {
    if (statVal <= 40) s.will_cost = Math.floor((110 - s.will_enforced - statVal + calc - arousal - succ / 2) / 10);
    else s.will_cost = Math.floor((70 - s.will_enforced + calc - arousal - succ / 2) / 10);
  } else {
    if (statVal <= 90) s.will_cost = Math.floor((10 + statVal + calc + arousal + succ) / 10);
    else s.will_cost = Math.floor((100 + calc + arousal + succ) / 10);
  }
  willpowerDifficulty(s, type, difficulty);
}

export function willpowerSex(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  willpowerCalc(s, fetishes);
  const statVal = s.stat['vaginal'] || 0;
  const succ = s.will_succubus_mod;
  const arousal = s.will_arousal_mod;
  const calc = s.will_calc;
  if (type === 'self') {
    if (statVal <= 90) s.will_cost = Math.floor((100 - statVal + calc - arousal - succ) / 10);
    else s.will_cost = Math.floor((10 + calc - arousal - succ) / 10);
  } else if (type === 'force') {
    if (statVal <= 40) s.will_cost = Math.floor((110 - s.will_enforced - statVal + calc - arousal - succ / 2) / 10);
    else s.will_cost = Math.floor((70 - s.will_enforced + calc - arousal - succ / 2) / 10);
  } else {
    if (statVal <= 90) s.will_cost = Math.floor((10 + statVal + calc + arousal + succ) / 10);
    else s.will_cost = Math.floor((100 + calc + arousal + succ) / 10);
  }
  willpowerDifficulty(s, type, difficulty);
}

export function willpowerAnal(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  willpowerCalc(s, fetishes);
  const statVal = s.stat['anal'] || 0;
  const succ = s.will_succubus_mod;
  const arousal = s.will_arousal_mod;
  const calc = s.will_calc;
  if (type === 'self') {
    if (statVal <= 90) s.will_cost = Math.floor((100 - statVal + calc - arousal - succ) / 10);
    else s.will_cost = Math.floor((10 + calc - arousal - succ) / 10);
  } else if (type === 'force') {
    if (statVal <= 40) s.will_cost = Math.floor((110 - s.will_enforced - statVal + calc - arousal - succ / 2) / 10);
    else s.will_cost = Math.floor((70 - s.will_enforced + calc - arousal - succ / 2) / 10);
  } else {
    if (statVal <= 90) s.will_cost = Math.floor((10 + statVal + calc + arousal + succ) / 10);
    else s.will_cost = Math.floor((100 + calc + arousal + succ) / 10);
  }
  willpowerDifficulty(s, type, difficulty);
}

export function willpowerKiss(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  willpowerCalc(s, fetishes);
  const statVal = s.stat['kiss'] || 0;
  const arousal = s.will_arousal_mod;
  const calc = s.will_calc;
  if (type === 'self') {
    if (statVal <= 90) s.will_cost = Math.floor((100 - statVal + calc - arousal) / 10);
    else s.will_cost = Math.floor((10 + calc - arousal) / 10);
  } else if (type === 'force') {
    if (statVal <= 40) s.will_cost = Math.floor((110 - s.will_enforced - statVal + calc - arousal) / 10);
    else s.will_cost = Math.floor((70 - s.will_enforced + calc - arousal) / 10);
  } else {
    if (statVal <= 90) s.will_cost = Math.floor((10 + statVal + calc + arousal) / 10);
    else s.will_cost = Math.floor((100 + calc + arousal) / 10);
  }
  willpowerDifficulty(s, type, difficulty);
}

export function willpowerMisc(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  willpowerCalc(s, fetishes);
  const calc = s.will_calc;
  if (type === 'self') {
    s.will_cost = Math.floor((50 + calc) / 10);
  } else if (type === 'force') {
    s.will_cost = Math.floor((60 - s.will_enforced + calc) / 10);
  } else {
    s.will_cost = Math.floor((40 + calc) / 10);
  }
  if (difficulty === 'easy') {
    if (s.will_cost < 5) s.will_cost = 5;
  } else if (difficulty === 'hard') {
    s.will_cost = Math.floor(s.will_cost * 9 / 4);
    if (s.will_cost < 7) s.will_cost = 7;
  } else if (difficulty === 'medium') {
    s.will_cost = Math.floor(s.will_cost * 3 / 2);
    if (s.will_cost < 6) s.will_cost = 6;
  }
  willpowerDifficulty(s, type, '');
}

export function willpowerForeplay(s: GameState, type: string, difficulty: string = '', fetishes: string = ''): void {
  willpowerCalc(s, fetishes);
  const statVal = s.stat['foreplay'] || 0;
  const succ = s.will_succubus_mod;
  const arousal = s.will_arousal_mod;
  const calc = s.will_calc;
  if (type === 'self') {
    if (statVal <= 90) s.will_cost = Math.floor((100 - statVal + calc - arousal - succ) / 10);
    else s.will_cost = Math.floor((10 + calc - arousal - succ) / 10);
  } else if (type === 'force') {
    if (statVal <= 40) s.will_cost = Math.floor((110 - s.will_enforced - statVal + calc - arousal - succ / 2) / 10);
    else s.will_cost = Math.floor((70 - s.will_enforced + calc - arousal - succ / 2) / 10);
  } else {
    if (statVal <= 90) s.will_cost = Math.floor((10 + statVal + calc + arousal + succ) / 10);
    else s.will_cost = Math.floor((100 + calc + arousal + succ) / 10);
  }
  willpowerDifficulty(s, type, difficulty);
}
