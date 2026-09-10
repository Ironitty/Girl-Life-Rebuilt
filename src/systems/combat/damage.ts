import type { CombatantState, AttackType } from './types';
import { ATTACKS } from './types';

export interface DamageResult {
  damage: number;
  hit: boolean;
  devastating: boolean;
  shieldAbsorbed: number;
  cloneAbsorbed: boolean;
  healthLost: number;
}

export function calculateHitChance(
  attacker: CombatantState,
  defender: CombatantState,
  attackType: AttackType
): boolean {
  const skill = getAttackSkill(attacker, attackType);
  const react = defender.stun > 0 ? 0 : defender.reactions;
  const agil = defender.stun > 0 ? 0 : defender.agility;
  const roll = Math.floor(Math.random() * 41);
  const threshold = react / 4 + (3 * agil) / 4;
  return skill + roll > threshold;
}

export function getAttackSkill(c: CombatantState, type: AttackType): number {
  switch (type) {
    case 'kick': return c.kick;
    case 'punch': return c.punch;
    case 'jab': return c.jab;
  }
}

export function applyDamage(
  target: CombatantState,
  rawDamage: number
): DamageResult {
  const result: DamageResult = {
    damage: rawDamage,
    hit: true,
    devastating: false,
    shieldAbsorbed: 0,
    cloneAbsorbed: false,
    healthLost: 0,
  };

  if (target.clones > 0) {
    target.clones -= 1;
    result.cloneAbsorbed = true;
    result.healthLost = 0;
    return result;
  }

  if (target.shield >= rawDamage) {
    target.shield -= rawDamage;
    result.shieldAbsorbed = rawDamage;
    result.healthLost = 0;
    return result;
  }

  if (target.shield > 0) {
    result.shieldAbsorbed = target.shield;
    target.shield = 0;
  }

  const overShield = rawDamage - result.shieldAbsorbed;
  target.health = Math.max(0, target.health - overShield);
  result.healthLost = overShield;

  if (result.healthLost * 2 > target.maxHealth) {
    result.devastating = true;
  }

  return result;
}

export function calculateDamage(
  attacker: CombatantState,
  defender: CombatantState,
  attackType: AttackType
): number {
  const atk = ATTACKS[attackType];
  let minDmg = atk.minDamage;
  let maxDmg = atk.maxDamage;

  if (defender.fog > 0) {
    const fogRedMax = Math.floor(Math.random() * (maxDmg - minDmg)) + minDmg;
    const fogRedMin = Math.floor(Math.random() * (minDmg + 1));
    maxDmg -= fogRedMax;
    minDmg -= fogRedMin;
    if (maxDmg < minDmg) maxDmg = minDmg;
    defender.fog = Math.max(0, defender.fog - (1 + Math.floor(Math.random() * 5)));
  }

  const strength = attacker.strength;
  const roll = minDmg + Math.floor(Math.random() * (maxDmg - minDmg + 1));
  return Math.max(0, Math.floor(strength * roll / 3) + attacker.damageBonus);
}
