import { describe, it, expect } from 'vitest';
import type { GameState } from '../../core/types';
import { getNpcAge, isNpcId, findNpc, copyNpcStats } from '../npc';

function makeNpcState(overrides: Partial<GameState> = {}): GameState {
  return {
    npc_dob: {},
    npcID: [],
    dateVars: { day: 15, month: 10, year: 2026, week: 3 },
    ...overrides,
  } as GameState;
}

describe('npc system', () => {
  describe('isNpcId', () => {
    it('accepts valid NPC IDs', () => {
      expect(isNpcId('A1')).toBe(true);
      expect(isNpcId('B2')).toBe(true);
      expect(isNpcId('C3')).toBe(true);
      expect(isNpcId('D4')).toBe(true);
      expect(isNpcId('M9')).toBe(true);
    });

    it('rejects invalid NPC IDs', () => {
      expect(isNpcId('1A')).toBe(false);
      expect(isNpcId('AB')).toBe(false);
      expect(isNpcId('A')).toBe(false);
      expect(isNpcId('')).toBe(false);
      expect(isNpcId('E1')).toBe(false);
    });
  });

  describe('findNpc', () => {
    it('returns [idx] when found', () => {
      const s = makeNpcState({ npcID: ['Alice', 'Bob', 'Carol'] });
      expect(findNpc(s, 'Bob')).toBe('[1]');
    });

    it('returns none when not found', () => {
      const s = makeNpcState({ npcID: ['Alice', 'Bob'] });
      expect(findNpc(s, 'Dave')).toBe('none');
    });
  });

  describe('getNpcAge', () => {
    it('returns 0 for undefined DOB', () => {
      const s = makeNpcState();
      expect(getNpcAge(s, 'A1')).toBe(0);
    });

    it('calculates age from DOB encoding', () => {
      const s = makeNpcState({ npc_dob: { A1: 19900115 } });
      const age = getNpcAge(s, 'A1');
      expect(age).toBeGreaterThanOrEqual(36);
      expect(age).toBeLessThanOrEqual(37);
    });
  });

  describe('copyNpcStats', () => {
    it('copies DOB from one NPC to another', () => {
      const s = makeNpcState({ npc_dob: { A1: 1501019900 } });
      copyNpcStats(s, 'A1', 'B2');
      expect(s.npc_dob['B2']).toBe(1501019900);
    });

    it('does nothing when source has no DOB', () => {
      const s = makeNpcState({ npc_dob: {} });
      copyNpcStats(s, 'A1', 'B2');
      expect(s.npc_dob['B2']).toBeUndefined();
    });
  });
});
