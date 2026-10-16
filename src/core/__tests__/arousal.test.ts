import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../types';
import { arousal } from '../arousal';

afterEach(() => vi.restoreAllMocks());

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    npcID: [],
    dick_width11: 10, dick_length11: 10,
    pain: { total: 0, vaginal: 0, asshole: 0, throat: 0 },
    pcs_ass: 10, anal_slip: 0, ar_anal_lube: 0, auto_anal_lube: 0,
    pcs_vag: 10, vaginal_slip: 0, ar_vag_lube: 0, auto_vag_lube: 0,
    cumvol: { 0: 10, 3: 10 }, lubonus: 0,
    pcs_horny: 0, pcs_throat: 10, pcs_vital: 100,
    trait_vars: { sensitivity: 0, elasticity: 0, sizequeen_temp: 0 },
    succubusflag: 0, sucskill: 0,
    stat: {}, inhib_exp: 0,
    rape: [0], daystart: 0, count: {}, virgin_stats: {},
    pcs_hairbsh: 0, pcs_hairlng: 100,
    pcs_makeup: 0, makeup: { base: 0 }, pcs_makupskl: 0,
    orgasm_buildup: 0, orgasm_or: '', orgasm_txt: '', orgasm: 0,
    minut: 0, silavag11: 0,
    arousal_npc_kissed: [], arousal_npc_hidden_kissed: [],
    arousal_npc_anal: [], arousal_npc_hidden_anal: [],
    arousal_npc_vaginal: [], arousal_npc_hidden_vaginal: [],
    arousal_npc_oral: [], arousal_npc_hidden_oral: [],
    arousal_npc_handstuff: [], arousal_npc_hidden_handstuff: [],
    arousal_npc_titstuff: [], arousal_npc_hidden_titstuff: [],
    arousal_npc_footstuff: [], arousal_npc_hidden_footstuff: [],
    ...overrides,
  } as unknown as GameState;
}

describe('arousal', () => {
  it('end act resets lube and orgasm text', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ ar_anal_lube: 1, ar_vag_lube: 1, orgasm_or: 'yes', orgasm_txt: 'x' });
    arousal(s, { act: 'end', time: 0 });
    expect(s.ar_anal_lube).toBe(0);
    expect(s.ar_vag_lube).toBe(0);
    expect(s.orgasm_or).toBe('');
    expect(s.orgasm_txt).toBe('');
  });

  it('advances the clock by the given time', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState();
    arousal(s, { act: 'kiss', time: 15, themes: ['no_arousal'] });
    expect(s.minut).toBe(15);
  });

  it('no_arousal theme leaves horny untouched', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ pcs_horny: 20 });
    arousal(s, { act: 'kiss', time: 15, themes: ['no_arousal'] });
    expect(s.pcs_horny).toBe(20);
  });

  it('counts a kiss', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState();
    arousal(s, { act: 'kiss', time: 15, themes: ['no_arousal'] });
    expect(s.count['kiss']).toBe(1);
  });

  it('counts vaginal sex and drains resources', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ pcs_hydra: 100, pcs_energy: 100 });
    arousal(s, { act: 'vaginal', time: 15 });
    expect(s.count['vaginal']).toBe(1);
    expect(s.pcs_hydra).toBeLessThan(100);
    expect(s.pcs_energy).toBeLessThan(100);
  });

  it('records an NPC for a vaginal act', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ npcID: ['A5'] });
    arousal(s, { act: 'vaginal', time: 15 });
    expect(s.arousal_npc_vaginal).toContain('A5');
  });
});
