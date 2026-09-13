import type { GameState } from './types';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ensureDrugObjects(s: GameState): void {
  if (!s.drugVars) s.drugVars = {};
  if (!s.cheatVars) s.cheatVars = {};
  if (!s.trait_vars) s.trait_vars = {};
}

export function drugsAlcohol(s: GameState, type: string, count = 1): void {
  ensureDrugObjects(s);
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['alcohol_used'] = (s.drugVars['alcohol_used'] || 0) + 1;
    if (s.drugVars['alcohol_used'] > 15 && s.drugVars['alcohol_exp'] === 0) s.drugVars['alcohol_exp'] = 1;
  }
  const t = type.toLowerCase();
  count = Math.max(1, count);
  for (let i = 0; i < count; i++) {
    s.pcs_health -= 5;
    s.pcs_energy -= 5;
    const drink = s.trait_vars['drinking'] || 0;
    if (t === 'beer') {
      s.alko += drink < 0 ? rand(1, 2) : drink === 0 ? 1 : rand(0, 1);
      s.trait_vars['alko_today'] = (s.trait_vars['alko_today'] || 0) + 1;
      s.fat += 3;
      s.pcs_hydra += s.pcs_hydra >= 100 ? 5 : 10;
    } else if (t === 'wine' || t === 'champagne') {
      s.alko += drink < 0 ? 3 : drink === 0 ? 2 : 1;
      s.trait_vars['alko_today'] = (s.trait_vars['alko_today'] || 0) + 2;
      s.fat += 4;
      s.pcs_hydra += s.pcs_hydra >= 100 ? 5 : 10;
    } else if (t === 'vodka' || t === 'whiskey' || t === 'scotch' || t === 'rum') {
      s.alko += drink < 0 ? rand(4, 5) : drink === 0 ? 3 : rand(1, 2);
      s.trait_vars['alko_today'] = (s.trait_vars['alko_today'] || 0) + 3;
      s.fat += 6;
      s.pcs_hydra -= s.pcs_hydra >= 100 ? 5 : 10;
    } else if (t === 'moonshine') {
      s.alko += drink < 0 ? rand(7, 8) : drink === 0 ? 5 : rand(2, 3);
      s.trait_vars['alko_today'] = (s.trait_vars['alko_today'] || 0) + 5;
      s.fat += rand(1, 2);
      s.pcs_hydra -= s.pcs_hydra >= 100 ? 5 : 10;
    }
  }
  if ((s.drugVars['painkiller_points'] || 0) >= 50) {
    if (s.alko >= 12) s.pcs_health -= 150;
    else if (s.alko >= 6) s.pcs_health -= 50;
  }
}

export function drugsCaffeine(s: GameState, strength = 4, count = 1): void {
  ensureDrugObjects(s);
  if (s.drugVars['caffeine_dose'] > 0) return;
  if (strength <= 0) strength = 4;
  if (count <= 0) count = 1;
  s.drugVars['caffeine_dose'] = count;
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['caffeine_used'] = (s.drugVars['caffeine_used'] || 0) + 1;
    s.drugVars['caffeine_system'] = (s.drugVars['caffeine_system'] || 0) + strength * count;
  }
  s.drugVars['caffeine_minut'] = s.totminut + (strength - 1) * 60 + rand(0, 30) * 4;
  s.drugVars['sleep_actual'] = s.pcs_sleep;
  if (s.drugVars['caffeine_addict'] === 0) {
    s.drugVars['sleep_displayed'] = (101 * count + s.pcs_sleep) / (1 + count);
  } else {
    s.drugVars['sleep_displayed'] = (102 * count + s.pcs_sleep * (count + 2)) / (2 * count + 2);
  }
}

export function drugsSmoke(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if (!s.stat) s.stat = {};
  if (!gift) {
    s.mc_inventory['cigarettes'] = (s.mc_inventory['cigarettes'] || 0) - 1;
    if (s.mc_inventory['cigarettes'] <= 0) s.mc_inventory['cigarettes'] = 0;
  }
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['cigarettes_used'] = (s.drugVars['cigarettes_used'] || 0) + 1;
    s.drugVars['cigarettes_ever'] = (s.drugVars['cigarettes_ever'] || 0) + 1;
    if (s.drugVars['cigarettes_used'] > 20 && s.drugVars['cigarettes_exp'] === 0) s.drugVars['cigarettes_exp'] = 1;
  }
  s.stat['cigarettes_smoked'] = (s.stat['cigarettes_smoked'] || 0) + 1;
  s.drugVars['cigarettes_minute'] = s.totminut + 3;
  s.drugVars['cigarettes_need'] = 0;
  s.pcs_breath = 0;
  s.pcs_hydra -= s.pcs_hydra >= 100 ? 5 : 10;
  if (s.pcs_energy < 80) s.pcs_energy += 4;
}

export function drugsWeed(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if (!gift) {
    s.mc_inventory['joints'] = (s.mc_inventory['joints'] || 0) - 1;
    if (s.mc_inventory['joints'] <= 0) s.mc_inventory['joints'] = 0;
  }
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['weed_used'] = (s.drugVars['weed_used'] || 0) + 1;
    if (s.drugVars['weed_used'] > 5 && s.drugVars['weed_exp'] === 0) s.drugVars['weed_exp'] = 1;
  }
  s.drugVars['weed_high'] = s.minut > 30 ? 2 : 1;
  s.drugVars['weed_day'] = s.daystart;
  s.drugVars['weed_hour'] = s.hour;
  s.drugVars['weed_minute'] = s.totminut + 2;
  s.pcs_breath = 0;
  s.pcs_hydra -= s.pcs_hydra >= 100 ? 5 : 10;
  s.pcs_energy = Math.max(0, s.pcs_energy - 20);
}

export function drugsAmphetamine(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if ((s.drugVars['amphetamine_intake'] || 0) >= 2) return;
  if (!gift) {
    s.mc_inventory['amphetamine'] = (s.mc_inventory['amphetamine'] || 0) - 1;
    if (s.mc_inventory['amphetamine'] <= 0) s.mc_inventory['amphetamine'] = 0;
  }
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['amphetamine_used'] = (s.drugVars['amphetamine_used'] || 0) + 1;
    if (s.drugVars['amphetamine_used'] > 5 && s.drugVars['amphetamine_exp'] === 0) s.drugVars['amphetamine_exp'] = 1;
  }
  s.drugVars['amphetamine_intake'] = (s.drugVars['amphetamine_intake'] || 0) + 1;
  s.drugVars['amphetamine_high'] = 12;
}

export function drugsCocaine(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if (!gift) {
    s.mc_inventory['cocaine'] = (s.mc_inventory['cocaine'] || 0) - 1;
    if (s.mc_inventory['cocaine'] <= 0) s.mc_inventory['cocaine'] = 0;
  }
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['cocaine_used'] = (s.drugVars['cocaine_used'] || 0) + 1;
    if (s.drugVars['cocaine_used'] > 3 && s.drugVars['cocaine_exp'] === 0) s.drugVars['cocaine_exp'] = 1;
  }
  s.drugVars['cocaine_high'] = Math.min(200, (s.drugVars['cocaine_high'] || 0) + 100);
  s.drugVars['cocaine_system'] = Math.min(60, (s.drugVars['cocaine_system'] || 0) + 8);
  s.drugVars['cocaine_day'] = s.daystart;
  s.drugVars['cocaine_crash'] = 0;
  s.drugVars['cocaine_need'] = 0;
  if (s.drugVars['cocaine_willday'] !== s.daystart) {
    s.drugVars['cocaine_willday'] = s.daystart;
    s.pcs_willpwr += 10;
  }
  s.pcs_health = s.pcs_vital * 10 + s.pcs_stren * 5;
  s.pcs_horny = Math.max(100, s.pcs_horny);
}

export function drugsHeroin(s: GameState): void {
  ensureDrugObjects(s);
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['heroin_used'] = (s.drugVars['heroin_used'] || 0) + 1;
    if (s.drugVars['heroin_used'] > 1 && s.drugVars['heroin_exp'] === 0) s.drugVars['heroin_exp'] = 1;
  }
  s.drugVars['heroin_high'] = (s.drugVars['heroin_high'] || 0) + 25;
  s.drugVars['heroin_day'] = s.daystart;
  s.pcs_health -= 10;
}

export function drugsPainkiller(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if (!gift) {
    s.mc_inventory['painkillers'] = (s.mc_inventory['painkillers'] || 0) - 1;
    if (s.mc_inventory['painkillers'] <= 0) s.mc_inventory['painkillers'] = 0;
  }
  s.drugVars['painkiller_points'] = (s.drugVars['painkiller_points'] || 0) + 100;
  if (s.cheatVars['drugs_immune'] === 0 && gift !== 'spell') {
    s.drugVars['painkiller_tolerance'] = Math.min(60, (s.drugVars['painkiller_tolerance'] || 0) + 2);
  }
  if (gift !== 'spell') {
    if (s.alko >= 12) s.pcs_health -= 150;
    else if (s.alko >= 6) s.pcs_health -= 50;
  }
}

export function drugsAphrodisiac(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if (s.drugVars['aphrodisiac_overdose'] === 1) return;
  if (!gift) {
    s.mc_inventory['aphrodisiac'] = (s.mc_inventory['aphrodisiac'] || 0) - 1;
    if (s.mc_inventory['aphrodisiac'] <= 0) s.mc_inventory['aphrodisiac'] = 0;
  }
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['aphrodisiac_used'] = (s.drugVars['aphrodisiac_used'] || 0) + 1;
  }
  const timer = s.drugVars['aphrodisiac_timer'] || 0;
  if (timer <= 0) {
    s.drugVars['aphrodisiac_timer'] = 8;
    s.pcs_horny = Math.max(80, s.pcs_horny);
  } else if (timer >= 1 && timer < 9) {
    s.drugVars['aphrodisiac_timer'] = timer + 8;
    s.pcs_horny = Math.max(100, s.pcs_horny);
  } else if (s.min_arousal < 60) {
    s.drugVars['aphrodisiac_overdose'] = 1;
    s.pcs_horny = s.min_arousal;
    s.orgasm += 1;
    s.min_arousal += 10;
  }
}

export function drugsMentats(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if (!gift) {
    s.mc_inventory['mentats'] = (s.mc_inventory['mentats'] || 0) - 1;
    if (s.mc_inventory['mentats'] <= 0) s.mc_inventory['mentats'] = 0;
  }
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['mentats_used'] = (s.drugVars['mentats_used'] || 0) + 1;
  }
  s.drugVars['mentats_dose'] = (s.drugVars['mentats_dose'] || 0) + 1;
}

export function drugsSteroids(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if ((s.drugVars['steroids_dose'] || 0) >= 3) return;
  if (!gift) {
    s.mc_inventory['steroids'] = (s.mc_inventory['steroids'] || 0) - 1;
    if (s.mc_inventory['steroids'] <= 0) s.mc_inventory['steroids'] = 0;
  }
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['steroids_used'] = (s.drugVars['steroids_used'] || 0) + 1;
  }
  s.drugVars['steroids_dose'] = (s.drugVars['steroids_dose'] || 0) + 1;
}

export function drugsBreastCream(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if ((s.drugVars['breastcream_dose'] || 0) >= 1) return;
  if (!gift) {
    s.mc_inventory['breastcream'] = (s.mc_inventory['breastcream'] || 0) - 1;
    if (s.mc_inventory['breastcream'] <= 0) s.mc_inventory['breastcream'] = 0;
  }
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['breastcream_used'] = (s.drugVars['breastcream_used'] || 0) + 1;
  }
  s.drugVars['breastcream_dose'] = 1;
}

export function drugsHairCream(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if ((s.drugVars['hair_extensioncream_dose'] || 0) >= 1) return;
  if (!gift) {
    s.mc_inventory['hair_extensioncream'] = (s.mc_inventory['hair_extensioncream'] || 0) - 1;
    if (s.mc_inventory['hair_extensioncream'] <= 0) s.mc_inventory['hair_extensioncream'] = 0;
  }
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['hair_extensioncream_used'] = (s.drugVars['hair_extensioncream_used'] || 0) + 1;
  }
  s.drugVars['hair_extensioncream_dose'] = 1;
}

export function drugsButtInjection(s: GameState, gift?: string): void {
  ensureDrugObjects(s);
  if (!s.mc_inventory) s.mc_inventory = {};
  if ((s.drugVars['butt_injection_dose'] || 0) >= 1) return;
  if (!gift) {
    s.mc_inventory['butt_injection'] = (s.mc_inventory['butt_injection'] || 0) - 1;
    if (s.mc_inventory['butt_injection'] <= 0) s.mc_inventory['butt_injection'] = 0;
  }
  if (s.cheatVars['drugs_immune'] === 0) {
    s.drugVars['butt_injection_used'] = (s.drugVars['butt_injection_used'] || 0) + 1;
  }
  s.drugVars['butt_injection_dose'] = 1;
}

export function drugsCikl(s: GameState): void {
  ensureDrugObjects(s);
  drugsCaffeineCikl(s);
  drugsMentatsCikl(s);
  drugsSteroidsCikl(s);
  drugsAphrodisiacCikl(s);
  drugsHairCreamCikl(s);
  drugsButtInjectionCikl(s);
  drugsBreastCreamCikl(s);
  drugsCocaineCikl(s);
  drugsPainkillerCikl(s);
}

export function drugsHourlyEvents(s: GameState): void {
  ensureDrugObjects(s);
  drugsCigaretteHourly(s);
  drugsWeedHourly(s);
  drugsHeroinHourly(s);
  drugsCocaineHourly(s);
  drugsAmphetamineHourly(s);
  drugsSteroidsHourly(s);
  drugsAphrodisiacHourly(s);
  drugsCaffeineHourly(s);
  drugsPainkillerHourly(s);
}

export function drugsStat(s: GameState): void {
  ensureDrugObjects(s);
  drugsHeroinStat(s);
  drugsCocaineStat(s);
  drugsAmphetamineStat(s);
  drugsCaffeineStat(s);
  drugsPainkillerStat(s);
}

export function drugsPainRelief(s: GameState): number {
  ensureDrugObjects(s);
  let relief = 0;
  if (s.alko <= 3) {}
  else if (s.alko <= 6) relief += 15;
  else if (s.alko <= 9) relief += 30;
  else relief += 60;
  if ((s.drugVars['heroin_high'] || 0) > 0) relief += 90;
  else if ((s.drugVars['cocaine_high'] || 0) > 0) relief += 50;
  else if ((s.drugVars['painkiller_points'] || 0) > 0) {
    const ceiling = 60 - (s.drugVars['painkiller_tolerance'] || 0) / 3;
    const saturation = 140 + (s.drugVars['painkiller_tolerance'] || 0) * 2;
    const pts = s.drugVars['painkiller_points'] || 0;
    relief += (ceiling * pts) / (pts + saturation);
  }
  return Math.max(0, Math.min(relief, 95));
}

function drugsCaffeineCikl(s: GameState): void {
  const sys = s.drugVars['caffeine_system'] || 0;
  if (sys <= 0) s.drugVars['caffeine_system'] = 0;
  else if (sys < 20) s.drugVars['caffeine_system'] = sys - 1;
  else if (sys < 40) s.drugVars['caffeine_system'] = sys - 2;
  else if (sys < 60) s.drugVars['caffeine_system'] = sys - 3;
  else s.drugVars['caffeine_system'] = 60;
}

function drugsCaffeineHourly(s: GameState): void {
  if (s.drugVars['caffeine_addict'] === 1 && (s.drugVars['caffeine_dose'] || 0) === 0) {
    s.drugVars['caffeine_need'] = (s.drugVars['caffeine_need'] || 0) + 1;
  }
  if ((s.drugVars['caffeine_dose'] || 0) > 0) {
    s.pcs_sleep += Math.max(0, Math.min(rand(-1, s.drugVars['caffeine_dose']), 1));
  }
  if ((s.drugVars['caffeine_addict'] || 0) > 0) {
    s.pcs_sleep -= rand(0, 1);
  }
}

function drugsCaffeineStat(s: GameState): void {
  const sys = s.drugVars['caffeine_system'] || 0;
  if (sys >= 60) s.drugVars['caffeine_addict'] = 1;
  else if (sys <= 0) s.drugVars['caffeine_addict'] = 0;
  if ((s.drugVars['caffeine_dose'] || 0) > 0) {
    s.drugVars['caffeine_need'] = 0;
    if (s.pcs_sleep < (s.drugVars['sleep_displayed'] || 0)) {
      s.drugVars['sleep_actual'] = (s.drugVars['sleep_actual'] || 0) - ((s.drugVars['sleep_displayed'] || 0) - s.pcs_sleep);
    }
    if (s.totminut <= (s.drugVars['caffeine_minut'] || 0)) {
      s.pcs_sleep = s.drugVars['sleep_displayed'] || 0;
    } else {
      s.pcs_sleep = s.drugVars['sleep_actual'] || 0;
      s.drugVars['caffeine_dose'] = 0;
    }
  }
}

function drugsCigaretteHourly(s: GameState): void {
  if (s.cheatVars['drugs_immune'] === 0) {
    const used = s.drugVars['cigarettes_used'] || 0;
    const ever = s.drugVars['cigarettes_ever'] || 0;
    if (used >= 20 || (ever >= 150 && used >= 5)) {
      if (rand(1, 100) <= 40 + Math.min(used - 20, 240) / 4) {
        s.drugVars['cigarettes_need'] = (s.drugVars['cigarettes_need'] || 0) + 1;
      }
      if (rand(1, 3) <= Math.max(0, Math.min(used - 260, 740)) / 370) {
        s.drugVars['cigarettes_need'] = (s.drugVars['cigarettes_need'] || 0) + 1;
      }
    }
  }
  const need = s.drugVars['cigarettes_need'] || 0;
  if (need > 80 + (s.drugVars['cigarettes_used'] || 0) * 3 / 5) {
    s.drugVars['cigarettes_need'] = 0;
    s.drugVars['cigarettes_used'] = 0;
  }
}

function drugsWeedHourly(s: GameState): void {
  if ((s.drugVars['weed_high'] || 0) > 0) {
    s.drugVars['weed_high'] = (s.drugVars['weed_high'] || 0) - 1;
    s.pcs_energy -= s.drugVars['weed_high'] > 1 ? 8 : 4;
  }
}

function drugsHeroinHourly(s: GameState): void {
  if ((s.drugVars['heroin_used'] || 0) >= 3) s.drugVars['heroin_hours_addicted'] = (s.drugVars['heroin_hours_addicted'] || 0) + 1;
  if ((s.drugVars['heroin_high'] || 0) > 0) {
    s.drugVars['heroin_high'] = (s.drugVars['heroin_high'] || 0) - 1;
  } else if ((s.drugVars['heroin_taper'] || 0) > 0) {
    s.drugVars['heroin_taper'] = (s.drugVars['heroin_taper'] || 0) - 1;
    if (s.drugVars['heroin_taper'] <= 0) {
      s.drugVars['heroin_need'] = 0;
      s.drugVars['heroin_used'] = 0;
      s.drugVars['heroin_hours_addicted'] = 0;
    }
  } else if ((s.drugVars['heroin_need'] || 0) > 0) {
    s.drugVars['heroin_need'] = (s.drugVars['heroin_need'] || 0) + 1;
    const cap = Math.min(120, 24 + (s.drugVars['heroin_used'] || 0) * 2);
    if (s.drugVars['heroin_need'] >= cap) {
      s.drugVars['heroin_taper'] = Math.min(1200, 24 + (s.drugVars['heroin_hours_addicted'] || 0) * 2);
    }
  }
}

function drugsHeroinStat(s: GameState): void {
  if ((s.drugVars['heroin_high'] || 0) > 0) {
    if (s.drugVars['heroin_high'] >= 20 && s.alko > 0) s.alko = 0;
    s.drugVars['heroin_need'] = 0;
    s.drugVars['heroin_taper'] = 0;
  } else if ((s.drugVars['heroin_used'] || 0) >= 3) {
    s.drugVars['heroin_need'] = Math.max(1, s.drugVars['heroin_need'] || 0);
  }
  if ((s.drugVars['heroin_used'] || 0) >= (s.drugVars['heroin_penalty'] || 0) * 25) {
    if ((s.drugVars['heroin_penalty'] || 0) > 0) s.vidage += 1;
    s.drugVars['heroin_penalty'] = (s.drugVars['heroin_penalty'] || 0) + 1;
  }
}

function drugsCocaineCikl(s: GameState): void {
  const sys = s.drugVars['cocaine_system'] || 0;
  if (sys < 20) s.drugVars['cocaine_system'] = Math.max(0, sys - 1);
  else if (sys < 40) s.drugVars['cocaine_system'] = sys - 2;
  else if (sys < 60) s.drugVars['cocaine_system'] = sys - 3;
  else s.drugVars['cocaine_system'] = 60;
}

function drugsCocaineHourly(s: GameState): void {
  if ((s.drugVars['cocaine_high'] || 0) > 0) {
    s.drugVars['cocaine_high'] = Math.max(0, (s.drugVars['cocaine_high'] || 0) - 20);
    if (s.drugVars['cocaine_high'] === 0) s.drugVars['cocaine_crash'] = 60;
  }
  if ((s.drugVars['cocaine_crash'] || 0) > 0 && (s.drugVars['cocaine_high'] || 0) === 0) {
    s.drugVars['cocaine_crash'] = Math.max(0, (s.drugVars['cocaine_crash'] || 0) - 10);
    s.pcs_stam -= 10;
  }
  if ((s.drugVars['cocaine_addict'] || 0) === 0) return;
  if ((s.drugVars['cocaine_high'] || 0) > 0) return;
  if (s.drugVars['cocaine_day'] === s.daystart) return;
  s.drugVars['cocaine_need'] = (s.drugVars['cocaine_need'] || 0) + 1;
  s.pcs_health -= 2 + (s.drugVars['cocaine_need'] || 0) / 10;
}

function drugsCocaineStat(s: GameState): void {
  if (s.cheatVars['drugs_immune'] === 1) {
    s.drugVars['cocaine_addict'] = 0;
    s.drugVars['cocaine_need'] = 0;
  } else if ((s.drugVars['cocaine_system'] || 0) >= 25) {
    s.drugVars['cocaine_addict'] = 1;
  } else if ((s.drugVars['cocaine_system'] || 0) <= 0) {
    s.drugVars['cocaine_addict'] = 0;
    s.drugVars['cocaine_need'] = 0;
  }
}

function drugsAmphetamineHourly(s: GameState): void {
  const wd = s.drugVars['amphetamine_withdrawl'] || 0;
  if (wd >= 5) {
    s.drugVars['amphetamine_withdrawl'] = wd + 1;
  }
  if ((s.drugVars['amphetamine_high'] || 0) > 0) {
    if ((s.drugVars['amphetamine_withdrawl'] || 0) < 2) s.drugVars['amphetamine_withdrawl'] = 2;
    s.drugVars['amphetamine_bonus'] = 2;
    s.drugVars['amphetamine_high'] = (s.drugVars['amphetamine_high'] || 0) - 4;
  } else if ((s.drugVars['amphetamine_withdrawl'] || 0) === 2) {
    if ((s.drugVars['amphetamine_intake'] || 0) > 0) s.drugVars['amphetamine_intake'] = (s.drugVars['amphetamine_intake'] || 0) - 1;
    else s.drugVars['amphetamine_withdrawl'] = 0;
    s.drugVars['amphetamine_high'] = 0;
    s.drugVars['amphetamine_bonus'] = 1;
  } else if ((s.drugVars['amphetamine_intake'] || 0) > 0) {
    s.drugVars['amphetamine_withdrawl'] = (s.drugVars['amphetamine_withdrawl'] || 0) + 1;
  } else if ((s.drugVars['amphetamine_withdrawl'] || 0) === 0) {
    s.drugVars['amphetamine_bonus'] = 0;
  }
  if ((s.drugVars['amphetamine_withdrawl'] || 0) > 169) {
    s.drugVars['amphetamine_withdrawl'] = 1;
    s.drugVars['amphetamine_bonus'] = 0;
    s.drugVars['amphetamine_used'] = 0;
  }
  const bonus = s.drugVars['amphetamine_bonus'] || 0;
  const mult = s.inSleep === 1 ? 0.5 : 1;
  if ((s.drugVars['amphetamine_high'] || 0) <= 0) {
    s.pcs_energy -= 8 * bonus * mult;
    s.pcs_hydra -= 16 * bonus * mult;
  } else {
    s.pcs_energy += (8 * bonus * mult) / (1 + bonus);
    s.pcs_hydra += (16 * bonus * mult) / (1 + bonus);
  }
}

function drugsAmphetamineStat(s: GameState): void {
  if ((s.drugVars['amphetamine_used'] || 0) <= 3 || (s.drugVars['amphetamine_high'] || 0) > 0) return;
  if (rand(1, 5) > 4) s.drugVars['amphetamine_withdrawl'] = 2;
}

function drugsMentatsCikl(s: GameState): void {
  if ((s.drugVars['mentats_expgain'] || 0) > 0) {
    const rec = s as unknown as Record<string, unknown>;
    rec['intel_exp'] = ((rec['intel_exp'] as number) || 0) + rand(0, Math.floor((s.drugVars['mentats_expgain'] || 0) / 2));
    s.drugVars['mentats_expgain'] = 0;
  }
  if (s.drugVars['mentats_dose'] === 1) s.drugVars['mentats_dose'] = 0;
  else if ((s.drugVars['mentats_dose'] || 0) > 1) {
    s.pain['head'] = (s.pain['head'] || 0) + 20 * s.drugVars['mentats_dose'];
    s.drugVars['mentats_dose'] = 0;
  }
}

function drugsSteroidsCikl(s: GameState): void {
  if ((s.drugVars['steroids_stren_expgain'] || 0) > 0) {
    const rec = s as unknown as Record<string, unknown>;
    rec['stren_exp'] = ((rec['stren_exp'] as number) || 0) + rand(0, Math.floor((s.drugVars['steroids_stren_expgain'] || 0) / 2));
    s.drugVars['steroids_stren_expgain'] = 0;
  }
  if ((s.drugVars['steroids_vital_expgain'] || 0) > 0) {
    const rec = s as unknown as Record<string, unknown>;
    rec['vital_exp'] = ((rec['vital_exp'] as number) || 0) + rand(0, Math.floor((s.drugVars['steroids_vital_expgain'] || 0) / 2));
    s.drugVars['steroids_vital_expgain'] = 0;
  }
  if ((s.drugVars['steroids_dose'] || 0) > 0) {
    s.drugVars['steroids_dose'] = (s.drugVars['steroids_dose'] || 0) - 1;
  }
}

function drugsSteroidsHourly(s: GameState): void {
  if ((s.drugVars['steroids_dose'] || 0) > 0) {
    s.pcs_stam += 2;
    s.pcs_hydra -= 3;
  }
}

function drugsAphrodisiacCikl(s: GameState): void {
  if ((s.drugVars['aphrodisiac_timer'] || 0) > 0) {
    s.drugVars['aphrodisiac_timer'] = (s.drugVars['aphrodisiac_timer'] || 0) - 1;
    if (s.drugVars['aphrodisiac_timer'] <= 0) s.drugVars['aphrodisiac_overdose'] = 0;
  }
}

function drugsAphrodisiacHourly(s: GameState): void {
  if ((s.drugVars['aphrodisiac_timer'] || 0) > 0) {
    s.pcs_horny += 2;
  }
}

function drugsHairCreamCikl(s: GameState): void {
  if ((s.drugVars['hair_extensioncream_dose'] || 0) > 0) {
    s.hair_length = Math.min(100, s.hair_length + 5);
    s.drugVars['hair_extensioncream_dose'] = 0;
  }
}

function drugsButtInjectionCikl(s: GameState): void {
  if ((s.drugVars['butt_injection_dose'] || 0) > 0) {
    s.butt += 1;
    s.drugVars['butt_injection_dose'] = 0;
  }
}

function drugsBreastCreamCikl(s: GameState): void {
  if ((s.drugVars['breastcream_dose'] || 0) > 0) {
    s.breast += 1;
    s.drugVars['breastcream_dose'] = 0;
  }
}

function drugsPainkillerCikl(s: GameState): void {
  if ((s.drugVars['painkiller_points'] || 0) > 0) {
    s.drugVars['painkiller_points'] = Math.max(0, (s.drugVars['painkiller_points'] || 0) - 10);
  }
}

function drugsPainkillerHourly(s: GameState): void {
  if ((s.drugVars['painkiller_points'] || 0) > 0) {
    s.pcs_health += 1;
  }
}

function drugsPainkillerStat(s: GameState): void {
  if ((s.drugVars['painkiller_points'] || 0) <= 0) {
    s.drugVars['painkiller_tolerance'] = Math.max(0, (s.drugVars['painkiller_tolerance'] || 0) - 1);
  }
}
