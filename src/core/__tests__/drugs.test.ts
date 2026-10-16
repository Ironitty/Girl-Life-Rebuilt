import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../types';
import {
  drugsAlcohol, drugsCaffeine, drugsSmoke, drugsWeed, drugsAmphetamine,
  drugsCocaine, drugsHeroin, drugsPainkiller, drugsAphrodisiac, drugsSteroids,
  drugsPainRelief, drugsCikl, drugsHourlyEvents,
} from '../drugs';

afterEach(() => vi.restoreAllMocks());

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    drugVars: {}, cheatVars: { drugs_immune: 0 }, trait_vars: { drinking: 0 },
    mc_inventory: {}, stat: {},
    pcs_health: 100, pcs_energy: 100, alko: 0, fat: 0, pcs_hydra: 50,
    totminut: 0, pcs_sleep: 50, minut: 10, daystart: 5, hour: 12,
    pcs_breath: 5, pcs_willpwr: 100, pcs_vital: 10, pcs_stren: 10,
    pcs_horny: 50, min_arousal: 50, orgasm: 0,
    pain: { head: 0 }, vidage: 0, inSleep: 0,
    hair_length: 50, butt: 3, breast: 2,
    intel_exp: 0, stren_exp: 0, vital_exp: 0,
    ...overrides,
  } as unknown as GameState;
}

describe('drugsAlcohol', () => {
  it('beer adds 1 alko and tracks usage', () => {
    const s = makeState();
    drugsAlcohol(s, 'beer');
    expect(s.alko).toBe(1);
    expect(s.drugVars['alcohol_used']).toBe(1);
    expect(s.trait_vars['alko_today']).toBe(1);
    expect(s.fat).toBe(3);
    expect(s.pcs_hydra).toBe(60);
  });

  it('wine adds 2 alko', () => {
    const s = makeState();
    drugsAlcohol(s, 'wine');
    expect(s.alko).toBe(2);
    expect(s.trait_vars['alko_today']).toBe(2);
  });

  it('vodka drains hydration', () => {
    const s = makeState();
    drugsAlcohol(s, 'vodka');
    expect(s.alko).toBe(3);
    expect(s.pcs_hydra).toBe(40);
  });
});

describe('drugsCaffeine', () => {
  it('sets the dose and a displayed sleep boost', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ drugVars: { caffeine_addict: 0 } });
    drugsCaffeine(s, 4, 1);
    expect(s.drugVars['caffeine_dose']).toBe(1);
    expect(s.drugVars['caffeine_system']).toBe(4);
    // (101*1 + 50)/(1+1) = 75.5
    expect(s.drugVars['sleep_displayed']).toBe(75.5);
  });

  it('is a no-op when a dose is already active', () => {
    const s = makeState({ drugVars: { caffeine_dose: 1 } });
    drugsCaffeine(s, 4, 1);
    expect(s.drugVars['caffeine_dose']).toBe(1);
  });
});

describe('drugsSmoke', () => {
  it('consumes a cigarette and records the smoke', () => {
    const s = makeState({ mc_inventory: { cigarettes: 5 }, pcs_energy: 50 });
    drugsSmoke(s);
    expect(s.mc_inventory['cigarettes']).toBe(4);
    expect(s.stat['cigarettes_smoked']).toBe(1);
    expect(s.pcs_breath).toBe(0);
    expect(s.pcs_energy).toBe(54);
  });
});

describe('drugsWeed', () => {
  it('sets a low-high when early in the day', () => {
    const s = makeState({ minut: 10, pcs_energy: 100 });
    drugsWeed(s);
    expect(s.drugVars['weed_high']).toBe(1);
    expect(s.pcs_energy).toBe(80);
  });
});

describe('drugsAmphetamine', () => {
  it('records intake and sets the high', () => {
    const s = makeState();
    drugsAmphetamine(s);
    expect(s.drugVars['amphetamine_intake']).toBe(1);
    expect(s.drugVars['amphetamine_high']).toBe(12);
  });

  it('refuses a third dose', () => {
    const s = makeState({ drugVars: { amphetamine_intake: 2 } });
    drugsAmphetamine(s);
    expect(s.drugVars['amphetamine_intake']).toBe(2);
  });
});

describe('drugsCocaine', () => {
  it('raises the high and system, boosts health and willpower', () => {
    const s = makeState({ pcs_horny: 50 });
    drugsCocaine(s);
    expect(s.drugVars['cocaine_high']).toBe(100);
    expect(s.drugVars['cocaine_system']).toBe(8);
    expect(s.pcs_health).toBe(150);
    expect(s.pcs_willpwr).toBe(110);
    expect(s.pcs_horny).toBe(100);
  });
});

describe('drugsHeroin', () => {
  it('raises the high and costs health', () => {
    const s = makeState({ pcs_health: 100 });
    drugsHeroin(s);
    expect(s.drugVars['heroin_high']).toBe(25);
    expect(s.pcs_health).toBe(90);
  });
});

describe('drugsPainkiller', () => {
  it('adds 100 points and builds tolerance', () => {
    const s = makeState();
    drugsPainkiller(s);
    expect(s.drugVars['painkiller_points']).toBe(100);
    expect(s.drugVars['painkiller_tolerance']).toBe(2);
  });
});

describe('drugsAphrodisiac', () => {
  it('starts the timer and lifts arousal', () => {
    const s = makeState({ pcs_horny: 50 });
    drugsAphrodisiac(s);
    expect(s.drugVars['aphrodisiac_timer']).toBe(8);
    expect(s.pcs_horny).toBe(80);
  });
});

describe('drugsSteroids', () => {
  it('increments the dose up to three', () => {
    const s = makeState();
    drugsSteroids(s);
    expect(s.drugVars['steroids_dose']).toBe(1);
  });
});

describe('drugsPainRelief', () => {
  it('returns 0 with no drugs and no alcohol', () => {
    expect(drugsPainRelief(makeState())).toBe(0);
  });

  it('grants relief for moderate alcohol', () => {
    expect(drugsPainRelief(makeState({ alko: 8 }))).toBe(30);
    expect(drugsPainRelief(makeState({ alko: 10 }))).toBe(60);
  });

  it('computes painkiller relief and caps at 95', () => {
    // ceiling 60, saturation 140, pts 100 => 60*100/240 = 25
    expect(drugsPainRelief(makeState({ drugVars: { painkiller_points: 100 } }))).toBe(25);
    expect(drugsPainRelief(makeState({ drugVars: { heroin_high: 5 } }))).toBe(90);
  });
});

describe('drugsCikl', () => {
  it('decays painkiller points and applies hair cream', () => {
    const s = makeState({
      drugVars: { painkiller_points: 100, hair_extensioncream_dose: 1 },
      hair_length: 50,
    });
    drugsCikl(s);
    expect(s.drugVars['painkiller_points']).toBe(90);
    expect(s.drugVars['hair_extensioncream_dose']).toBe(0);
    expect(s.hair_length).toBe(55);
  });
});

describe('drugsHourlyEvents', () => {
  it('steroids boost stamina and drain hydration', () => {
    const s = makeState({ drugVars: { steroids_dose: 1 }, pcs_stam: 100, pcs_hydra: 50 });
    drugsHourlyEvents(s);
    expect(s.pcs_stam).toBe(102);
    expect(s.pcs_hydra).toBe(47);
  });

  it('an active aphrodisiac adds arousal', () => {
    const s = makeState({ drugVars: { aphrodisiac_timer: 5 }, pcs_horny: 50 });
    drugsHourlyEvents(s);
    expect(s.pcs_horny).toBe(52);
  });
});
