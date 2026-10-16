import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import { cumCall } from '../cum_call';

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    npc_love: {}, stat: {},
    sexpartkno: 0, sexunaware: 0,
    sexcontra: 0, pillcon2: 0,
    npcSpermPot: 10, npcSpermVol: 5,
    spafinloc: 0, cumprecheck: 0,
    ...overrides,
  } as unknown as GameState;
}

describe('cumCall', () => {
  it('sets sexpartkno from npc_love', () => {
    const s = makeState();
    cumCall(s, { location: 'labia' });
    expect(s.sexpartkno).toBe(0);
    const s2 = makeState({ npc_love: { npcID: 5 } });
    cumCall(s2, { location: 'labia' });
    expect(s2.sexpartkno).toBe(1);
  });

  it('known=1 forces sexpartkno, known=2 sets sexunaware', () => {
    const s = makeState();
    cumCall(s, { location: 'labia', known: 1 });
    expect(s.sexpartkno).toBe(1);
    const s2 = makeState();
    cumCall(s2, { location: 'labia', known: 2 });
    expect(s2.sexunaware).toBe(1);
  });

  it('numeric contraception clamps to 0..7', () => {
    const s = makeState();
    cumCall(s, { location: 'labia', contraception: 9 });
    expect(s.sexcontra).toBe(7);
    const s2 = makeState();
    cumCall(s2, { location: 'labia', contraception: -3 });
    expect(s2.sexcontra).toBe(0);
  });

  it('empty contraception uses existing sexcontra', () => {
    const s = makeState({ sexcontra: 4 });
    cumCall(s, { location: 'labia', contraception: '' });
    expect(s.sexcontra).toBe(4);
  });

  it('string contraception maps to values', () => {
    const cases: Record<string, number> = {
      none: 1, sabotaged: 7, sabotaged_other: 6, slipped: 5, broken: 4,
    };
    for (const [str, expected] of Object.entries(cases)) {
      const s = makeState({ pillcon2: 0 });
      cumCall(s, { location: 'labia', contraception: str });
      expect(s.sexcontra).toBe(expected);
    }
    // 'none' with pillcon2 > 1000 gives 2
    const s = makeState({ pillcon2: 2000 });
    cumCall(s, { location: 'labia', contraception: 'none' });
    expect(s.sexcontra).toBe(2);
  });

  it('precum divides potency by 40 and sets volume 1', () => {
    const s = makeState({ npcSpermPot: 400, npcSpermVol: 10 });
    cumCall(s, { location: 'precum' });
    expect(s.npcSpermPot).toBe(10);
    expect(s.npcSpermVol).toBe(1);
    expect(s.spafinloc).toBe(0);
    expect(s.cumprecheck).toBe(1);
  });

  it('normal location sets spafinloc from map', () => {
    const s = makeState();
    cumCall(s, { location: 'mouth' });
    expect(s.spafinloc).toBe(12);
    const s2 = makeState();
    cumCall(s2, { location: 'anus' });
    expect(s2.spafinloc).toBe(3);
  });

  it('anal location accumulates cum_anal_ml', () => {
    const s = makeState({ npcSpermVol: 5 });
    cumCall(s, { location: 'anal' });
    expect(s.stat['cum_anal_ml']).toBe(5);
    cumCall(s, { location: 'anal' });
    expect(s.stat['cum_anal_ml']).toBe(10);
  });

  it('mouth_swallow increments swallow counters', () => {
    const s = makeState({ npcSpermVol: 5 });
    cumCall(s, { location: 'mouth_swallow' });
    expect(s.stat['swallow']).toBe(1);
    expect(s.stat['cum_swallowed_ml']).toBe(5);
    const s2 = makeState({ npcSpermVol: 5 });
    cumCall(s2, { location: 'mouth_swallow', known: 2 });
    expect(s2.stat['swallow_unaware']).toBe(1);
  });

  it('explicit potency/volume override npc values', () => {
    const s = makeState({ npcSpermPot: 10, npcSpermVol: 5 });
    cumCall(s, { location: 'labia', potency: 50, volume: 20 });
    expect(s.npcSpermPot).toBe(50);
    expect(s.npcSpermVol).toBe(20);
  });
});
