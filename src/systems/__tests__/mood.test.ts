import { describe, it, expect } from 'vitest';
import type { GameState, MoodVars } from '../../core/types';
import {
  moodClamp, moodReset, moodInterpret, moodRaise, moodLower,
  moodDoormat, moodRaiseTrauma, moodLowerTrauma,
  moodRaiseDisposition, moodLowerDisposition, moodHold,
  moodStatusEffects, moodDecay, moodUpdate,
} from '../../core/mood';

function makeMoodVars(overrides: Partial<MoodVars> = {}): MoodVars {
  return {
    disp_base: 50,
    disp: 50,
    momentum: 0,
    inertia: 0,
    max: 100,
    min: 1,
    hold_minut: 0,
    leftover_mood: 0,
    ...overrides,
  };
}

function makeMoodState(overrides: Partial<GameState> = {}): GameState {
  return {
    pcs_mood: 50,
    pcs_health: 100,
    moodVars: makeMoodVars(),
    mood_trauma: 0,
    moodSE: {},
    cheatVars: {},
    gerpes: 0,
    sifilis: 0,
    triper: 0,
    trait_vars: {},
    arch_effects: {},
    ...overrides,
  } as GameState;
}

describe('mood system', () => {
  describe('moodInterpret', () => {
    it('maps string degrees to values', () => {
      const s = makeMoodState();
      expect(moodInterpret(s, 'huge')).toBe(40);
      expect(moodInterpret(s, 'large')).toBe(30);
      expect(moodInterpret(s, 'medium')).toBe(20);
      expect(moodInterpret(s, 'small')).toBe(10);
      expect(moodInterpret(s, 'tiny')).toBe(5);
    });

    it('max returns 100 - current mood', () => {
      const s = makeMoodState({ pcs_mood: 30 });
      expect(moodInterpret(s, 'max')).toBe(70);
    });

    it('min returns current mood', () => {
      const s = makeMoodState({ pcs_mood: 30 });
      expect(moodInterpret(s, 'min')).toBe(30);
    });

    it('passes through numeric values', () => {
      const s = makeMoodState();
      expect(moodInterpret(s, 25)).toBe(25);
    });

    it('returns 0 for unknown strings', () => {
      const s = makeMoodState();
      expect(moodInterpret(s, 'unknown')).toBe(0);
    });
  });

  describe('moodRaise / moodLower', () => {
    it('moodRaise adds amount to pcs_mood', () => {
      const s = makeMoodState();
      moodRaise(s, 10);
      expect(s.pcs_mood).toBe(60);
    });

    it('moodLower subtracts amount from pcs_mood', () => {
      const s = makeMoodState();
      moodLower(s, 10);
      expect(s.pcs_mood).toBe(40);
    });

    it('applies cheat pos_mood multiplier when opt=1', () => {
      const s = makeMoodState({ cheatVars: { pos_mood_opt: 1, pos_mood_mult: 2 } });
      moodRaise(s, 10);
      expect(s.pcs_mood).toBe(70);
    });

    it('applies cheat neg_mood multiplier when opt=1', () => {
      const s = makeMoodState({ cheatVars: { neg_mood_opt: 1, neg_mood_mult: 2 } });
      moodLower(s, 10);
      expect(s.pcs_mood).toBe(30);
    });

    it('no multiplier when opt=0', () => {
      const s = makeMoodState({ cheatVars: { pos_mood_opt: 0, pos_mood_mult: 2 } });
      moodRaise(s, 10);
      expect(s.pcs_mood).toBe(60);
    });
  });

  describe('moodRaiseDisposition / moodLowerDisposition', () => {
    it('max sets disp_base to 75 then clamps to 70', () => {
      const s = makeMoodState();
      moodRaiseDisposition(s, 'max');
      expect(s.moodVars.disp_base).toBe(70);
    });

    it('min sets disp_base to 25', () => {
      const s = makeMoodState();
      moodLowerDisposition(s, 'min');
      expect(s.moodVars.disp_base).toBe(25);
    });

    it('uses numeric amount directly (no /5 scaling)', () => {
      const s = makeMoodState();
      moodRaiseDisposition(s, 10);
      expect(s.moodVars.disp_base).toBe(60);
    });

    it('scales string degree by /5', () => {
      const s = makeMoodState();
      moodRaiseDisposition(s, 'large');
      expect(s.moodVars.disp_base).toBe(56);
    });

    it('clamps disp_base to 70 max', () => {
      const s = makeMoodState({ moodVars: makeMoodVars({ disp_base: 69 }) });
      moodRaiseDisposition(s, 10);
      expect(s.moodVars.disp_base).toBe(70);
    });

    it('clamps disp_base to 20 min', () => {
      const s = makeMoodState({ moodVars: makeMoodVars({ disp_base: 21 }) });
      moodLowerDisposition(s, 10);
      expect(s.moodVars.disp_base).toBe(20);
    });

    it('applies disposition_effect to disp', () => {
      const s = makeMoodState({ arch_effects: { disposition_effect: 5 } });
      moodRaiseDisposition(s, 10);
      expect(s.moodVars.disp).toBe(s.moodVars.disp_base + 5);
    });
  });

  describe('moodDoormat', () => {
    it('level 1 uses args[1]', () => {
      const s = makeMoodState({ trait_vars: { doormat: 1 } });
      moodDoormat(s, ['', 'raise|10']);
      expect(s.pcs_mood).toBe(60);
    });

    it('level 2 uses args[2]', () => {
      const s = makeMoodState({ trait_vars: { doormat: 2 } });
      moodDoormat(s, ['', '', 'raise|20']);
      expect(s.pcs_mood).toBe(70);
    });

    it('level 3 uses args[3]', () => {
      const s = makeMoodState({ trait_vars: { doormat: 3 } });
      moodDoormat(s, ['', '', '', 'raise|30']);
      expect(s.pcs_mood).toBe(80);
    });

    it('lower direction subtracts', () => {
      const s = makeMoodState({ trait_vars: { doormat: 1 } });
      moodDoormat(s, ['', 'lower|10']);
      expect(s.pcs_mood).toBe(40);
    });

    it('no pipe is a no-op', () => {
      const s = makeMoodState({ trait_vars: { doormat: 1 } });
      moodDoormat(s, ['', 'raise']);
      expect(s.pcs_mood).toBe(50);
    });

    it('level 0 is a no-op', () => {
      const s = makeMoodState({ trait_vars: { doormat: 0 } });
      moodDoormat(s, ['', 'raise|10']);
      expect(s.pcs_mood).toBe(50);
    });
  });

  describe('moodRaiseTrauma / moodLowerTrauma', () => {
    it('raiseTrauma clamps at 15', () => {
      const s = makeMoodState({ mood_trauma: 14 });
      moodRaiseTrauma(s, 5);
      expect(s.mood_trauma).toBe(15);
    });

    it('lowerTrauma clamps at 0', () => {
      const s = makeMoodState({ mood_trauma: 1 });
      moodLowerTrauma(s, 5);
      expect(s.mood_trauma).toBe(0);
    });

    it('raiseTrauma adds amount', () => {
      const s = makeMoodState();
      moodRaiseTrauma(s, 5);
      expect(s.mood_trauma).toBe(5);
    });

    it('lowerTrauma subtracts amount', () => {
      const s = makeMoodState({ mood_trauma: 10 });
      moodLowerTrauma(s, 3);
      expect(s.mood_trauma).toBe(7);
    });
  });

  describe('moodHold', () => {
    it('sets hold_minut to max(existing, new)', () => {
      const s = makeMoodState({ moodVars: makeMoodVars({ hold_minut: 5 }) });
      moodHold(s, 10);
      expect(s.moodVars.hold_minut).toBe(10);
    });

    it('keeps existing if new is lower', () => {
      const s = makeMoodState({ moodVars: makeMoodVars({ hold_minut: 10 }) });
      moodHold(s, 5);
      expect(s.moodVars.hold_minut).toBe(10);
    });
  });

  describe('moodStatusEffects', () => {
    it('add increments SE count and lowers disposition by 5', () => {
      const s = makeMoodState();
      moodStatusEffects(s, 'add', 'gerpes');
      expect(s.moodSE['gerpes']).toBe(1);
      expect(s.moodVars.disp_base).toBe(45);
    });

    it('pop decrements SE count and raises disposition by 5', () => {
      const s = makeMoodState({ moodSE: { gerpes: 1 }, moodVars: makeMoodVars({ disp_base: 45 }) });
      moodStatusEffects(s, 'pop', 'gerpes');
      expect(s.moodSE['gerpes']).toBe(0);
      expect(s.moodVars.disp_base).toBe(50);
    });

    it('clear removes all SEs and raises disposition', () => {
      const s = makeMoodState({ moodSE: { gerpes: 3 }, moodVars: makeMoodVars({ disp_base: 35 }) });
      moodStatusEffects(s, 'clear', 'gerpes');
      expect(s.moodSE['gerpes']).toBe(0);
      expect(s.moodVars.disp_base).toBe(50);
    });

    it('unknown SE name has no effect', () => {
      const s = makeMoodState();
      moodStatusEffects(s, 'add', 'unknown');
      expect(s.moodSE['unknown']).toBe(1);
      expect(s.moodVars.disp_base).toBe(50);
    });
  });

  describe('moodClamp', () => {
    it('clamps trauma to 0-15', () => {
      const s = makeMoodState({ mood_trauma: 20 });
      moodClamp(s);
      expect(s.mood_trauma).toBe(15);
    });

    it('sets disp_base to 50 when 0', () => {
      const s = makeMoodState({ moodVars: makeMoodVars({ disp_base: 0 }) });
      moodClamp(s);
      expect(s.moodVars.disp_base).toBe(50);
    });

    it('reduces max mood by gerpes penalty', () => {
      const s = makeMoodState({ gerpes: 3 });
      moodClamp(s);
      expect(s.moodVars.max).toBe(95);
    });

    it('reduces max mood by sifilis penalty', () => {
      const s = makeMoodState({ sifilis: 21 });
      moodClamp(s);
      expect(s.moodVars.max).toBe(95);
    });

    it('reduces max mood by triper penalty', () => {
      const s = makeMoodState({ triper: 3 });
      moodClamp(s);
      expect(s.moodVars.max).toBe(95);
    });

    it('reduces max mood by trauma * 4', () => {
      const s = makeMoodState({ mood_trauma: 5 });
      moodClamp(s);
      expect(s.moodVars.max).toBe(80);
    });

    it('floors max mood at 40', () => {
      const s = makeMoodState({ mood_trauma: 15, gerpes: 3, sifilis: 21, triper: 3 });
      moodClamp(s);
      expect(s.moodVars.max).toBe(40);
    });

    it('clamps pcs_mood to max', () => {
      const s = makeMoodState({ pcs_mood: 100, mood_trauma: 10 });
      moodClamp(s);
      expect(s.pcs_mood).toBe(60);
    });

    it('clamps pcs_mood to min and penalizes health', () => {
      const s = makeMoodState({ pcs_mood: 0, pcs_health: 100 });
      moodClamp(s);
      expect(s.pcs_mood).toBe(1);
      expect(s.pcs_health).toBeLessThan(100);
    });
  });

  describe('moodDecay', () => {
    it('decrements hold_minut when active', () => {
      const s = makeMoodState({ moodVars: makeMoodVars({ hold_minut: 20 }) });
      moodDecay(s);
      expect(s.moodVars.hold_minut).toBe(5);
    });

    it('accumulates leftover_mood when hold expires', () => {
      const s = makeMoodState({ pcs_mood: 60, moodVars: makeMoodVars({ disp: 50 }) });
      moodDecay(s);
      expect(s.moodVars.leftover_mood).toBe(10);
    });

    it('raises disposition when momentum exceeds threshold', () => {
      const s = makeMoodState({
        pcs_mood: 60,
        moodVars: makeMoodVars({ disp: 50, momentum: 4999 }),
      });
      moodDecay(s);
      expect(s.moodVars.momentum).toBe(0);
      expect(s.moodVars.disp_base).toBe(51);
    });

    it('lowers disposition when momentum is very negative', () => {
      const s = makeMoodState({
        pcs_mood: 40,
        moodVars: makeMoodVars({ disp: 50, momentum: -3999 }),
      });
      moodDecay(s);
      expect(s.moodVars.momentum).toBe(0);
      expect(s.moodVars.disp_base).toBe(49);
    });
  });

  describe('moodUpdate', () => {
    it('calls decay then clamp', () => {
      const s = makeMoodState({
        pcs_mood: 200,
        moodVars: makeMoodVars({ hold_minut: 1, disp: 50 }),
      });
      moodUpdate(s);
      expect(s.moodVars.hold_minut).toBe(0);
      expect(s.pcs_mood).toBeLessThanOrEqual(100);
    });
  });

  describe('moodReset', () => {
    it('sets pcs_mood equal to disp', () => {
      const s = makeMoodState({ pcs_mood: 80, moodVars: makeMoodVars({ disp: 45 }) });
      moodReset(s);
      expect(s.pcs_mood).toBe(45);
    });
  });
});
