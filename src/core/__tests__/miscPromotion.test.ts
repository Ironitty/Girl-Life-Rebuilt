import { describe, it, expect } from 'vitest';
import { shouldPromote } from '../miscPromotion';
import type { MiscPromotionCriteria } from '../miscPromotion';

const base: MiscPromotionCriteria = {
  usedByMultipleSystems: false,
  neededBySaveValidation: false,
  needsNonNumberType: false,
  recurringGameplayRule: false,
  referencedByManyLocations: 0,
};

describe('shouldPromote', () => {
  it('false when all criteria are false', () => {
    expect(shouldPromote(base)).toBe(false);
  });

  it('true for each individual criterion', () => {
    expect(shouldPromote({ ...base, usedByMultipleSystems: true })).toBe(true);
    expect(shouldPromote({ ...base, neededBySaveValidation: true })).toBe(true);
    expect(shouldPromote({ ...base, needsNonNumberType: true })).toBe(true);
    expect(shouldPromote({ ...base, recurringGameplayRule: true })).toBe(true);
  });

  it('true when referenced by more than 5 locations', () => {
    expect(shouldPromote({ ...base, referencedByManyLocations: 6 })).toBe(true);
    expect(shouldPromote({ ...base, referencedByManyLocations: 5 })).toBe(false);
  });
});
