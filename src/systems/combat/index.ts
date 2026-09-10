export type { CombatState, CombatantState, CombatantInit, ActiveEffect, AttackType, CombatPhase } from './types';
export { ATTACKS } from './types';
export { startCombat, endTurn, playerAttack, advanceCombat, resolveVictory, executeAttack, createCombatant } from './combat';
export { calculateHitChance, calculateDamage, applyDamage, getAttackSkill } from './damage';
export { applyFog, applyShield, applyClone, applyStun, tickEffects, getActiveEffects } from './effects';
export { enemyAi, findNextActor } from './ai';
export type { AiDecision } from './ai';
export type { DamageResult } from './damage';
