/**
 * Misc Key Promotion Criteria
 *
 * A misc key should be promoted to a typed GameState field when ANY of:
 *
 * A. Used by more than one major system (combat, clothing, jobs, spells, pregnancy, transport, shops)
 * B. Needed by save/load validation (required for round-trip correctness)
 * C. Needs a non-number type (string, boolean, array, object)
 * D. Part of a recurring gameplay rule rather than a one-off event trigger
 * E. Referenced by more than a small number of locations (>5, check: npx tsx scripts/state-access-report.ts)
 *
 * Promotion process:
 * 1. Add typed field to GameState in types.ts
 * 2. Add default value in store.ts initialState
 * 3. Update all locations that use the misc key
 * 4. Add migration in migration.ts (old misc key → new field)
 * 5. Remove key from any misc usage
 *
 * Do NOT add a separate `flags` bucket until misc grows beyond ~20 keys.
 * One-time event triggers stay in misc; recurring rules get promoted.
 */

export interface MiscPromotionCriteria {
  usedByMultipleSystems: boolean;
  neededBySaveValidation: boolean;
  needsNonNumberType: boolean;
  recurringGameplayRule: boolean;
  referencedByManyLocations: number;
}

export function shouldPromote(criteria: MiscPromotionCriteria): boolean {
  return (
    criteria.usedByMultipleSystems ||
    criteria.neededBySaveValidation ||
    criteria.needsNonNumberType ||
    criteria.recurringGameplayRule ||
    criteria.referencedByManyLocations > 5
  );
}
