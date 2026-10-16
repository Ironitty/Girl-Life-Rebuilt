import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import {
  npcRelModify, npcRelModifyExact, npcRelSet, npcRelCheck,
  npcRelDefaultFamilyFriends, npcRelDefault, npcRelSocialGroupSetting,
  npcRelDefaultFriendship, npcRelDefaultNotSchool,
} from '../npc_relationship';

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    npc_rel: {}, npc_known: {}, npc_rel_daily: {},
    pcs_humint: 0, aarraynumber: 0,
    ...overrides,
  } as unknown as GameState;
}

describe('npcRelModify (numeric)', () => {
  it('adds the value with no humint bonus', () => {
    const s = makeState();
    npcRelModify(s, 'A5', 10);
    expect(s.npc_rel['A5']).toBe(10);
    expect(s.npc_known['A5']).toBe(1);
  });

  it('applies a positive humint bonus', () => {
    const s = makeState({ pcs_humint: 50 });
    npcRelModify(s, 'A5', 10);
    // 10 + floor(10*50/100) = 15
    expect(s.npc_rel['A5']).toBe(15);
  });

  it('clamps at 100', () => {
    const s = makeState();
    npcRelModify(s, 'A5', 150);
    expect(s.npc_rel['A5']).toBe(100);
  });

  it('clamps negatives at 0', () => {
    const s = makeState();
    npcRelModify(s, 'A5', -10);
    expect(s.npc_rel['A5']).toBe(0);
  });

  it('accumulates on top of existing relationship', () => {
    const s = makeState({ npc_rel: { A5: 40 } });
    npcRelModify(s, 'A5', 10);
    expect(s.npc_rel['A5']).toBe(50);
  });

  it('caps A18 at 20', () => {
    const s = makeState();
    npcRelModify(s, 'A18', 50);
    expect(s.npc_rel['A18']).toBe(20);
  });

  it('daily limit blocks a second same-day modification', () => {
    const s = makeState();
    npcRelModify(s, 'A5', 5, 1, 'evt');
    const first = s.npc_rel['A5'];
    npcRelModify(s, 'A5', 5, 1, 'evt');
    expect(s.npc_rel['A5']).toBe(first);
    expect(s.npc_rel_daily['A5evt']).toBe(1);
  });
});

describe('npcRelModifyExact', () => {
  it('adds exactly and clamps', () => {
    const s = makeState();
    npcRelModifyExact(s, 'A5', 90);
    expect(s.npc_rel['A5']).toBe(90);
    npcRelModifyExact(s, 'A5', 20);
    expect(s.npc_rel['A5']).toBe(100);
    npcRelModifyExact(s, 'A5', -200);
    expect(s.npc_rel['A5']).toBe(0);
  });
});

describe('npcRelSet', () => {
  it('maps relationship labels to values', () => {
    const s = makeState();
    npcRelSet(s, 'A1', 'friend');
    expect(s.npc_rel['A1']).toBe(50);
    npcRelSet(s, 'A2', 'bestie');
    expect(s.npc_rel['A2']).toBe(70);
    npcRelSet(s, 'A3', 'loved');
    expect(s.npc_rel['A3']).toBe(90);
    npcRelSet(s, 'A4', 'unknown');
    expect(s.npc_rel['A4']).toBe(0);
  });

  it('sets a numeric value directly', () => {
    const s = makeState();
    npcRelSet(s, 'A1', 42);
    expect(s.npc_rel['A1']).toBe(42);
  });
});

describe('npcRelCheck', () => {
  it('counts NPCs at or above the threshold', () => {
    const s = makeState({ npc_rel: { A1: 60, A2: 20, A3: 80 } });
    const count = npcRelCheck(s, 50, 'A1', 'A2', 'A3');
    expect(count).toBe(2);
    expect(s.npc_rel_check).toBe(2);
  });

  it('ignores empty ids', () => {
    const s = makeState({ npc_rel: { A1: 60 } });
    expect(npcRelCheck(s, 50, 'A1', '')).toBe(1);
  });
});

describe('npcRelDefaultFamilyFriends', () => {
  it('seeds the fixed family/friend set', () => {
    const s = makeState();
    npcRelDefaultFamilyFriends(s);
    expect(s.npc_rel['A28']).toBe(50);
    expect(s.npc_rel['A33']).toBe(70);
    expect(s.npc_rel['A11']).toBe(60);
    expect(s.npc_rel['A62']).toBe(20);
  });
});

describe('npcRelDefault', () => {
  it('sets every NPC to 30', () => {
    const s = makeState({ aarraynumber: 3 });
    npcRelDefault(s);
    expect(s.npc_rel['A1']).toBe(30);
    expect(s.npc_rel['A2']).toBe(30);
    expect(s.npc_rel['A3']).toBe(30);
  });
});

describe('npcRelSocialGroupSetting', () => {
  it('modifies only matching-gender NPCs with a non-zero tipe arg', () => {
    const s = makeState({
      aarraynumber: 3,
      npc_gender: { A1: 0, A2: 1, A3: 0 },
      npc_grupTipe: { A1: 1, A2: 2, A3: 1 },
    });
    npcRelSocialGroupSetting(s, [10, 20], 1);
    // gender 1 means npc_gender === 0; A1 (tipe 1, arg 10) and A3 (tipe 1, arg 10) qualify
    expect(s.npc_rel['A1']).toBe(10);
    expect(s.npc_rel['A3']).toBe(10);
    expect(s.npc_rel['A2']).toBeUndefined();
  });
});

describe('npcRelDefaultFriendship / NotSchool', () => {
  it('friendship sets tipe 1..6 NPCs to 30', () => {
    const s = makeState({ aarraynumber: 3, npc_grupTipe: { A1: 2, A2: 7, A3: 0 } });
    npcRelDefaultFriendship(s);
    expect(s.npc_rel['A1']).toBe(30);
    expect(s.npc_rel['A2']).toBeUndefined();
    expect(s.npc_rel['A3']).toBeUndefined();
  });

  it('notSchool sets only tipe 0 NPCs to 30', () => {
    const s = makeState({ aarraynumber: 3, npc_grupTipe: { A1: 2, A2: 7, A3: 0 } });
    npcRelDefaultNotSchool(s);
    expect(s.npc_rel['A3']).toBe(30);
    expect(s.npc_rel['A1']).toBeUndefined();
  });
});
