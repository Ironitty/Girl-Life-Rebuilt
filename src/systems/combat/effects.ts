import type { CombatantState, ActiveEffect } from './types';

export function applyFog(target: CombatantState, amount: number): void {
  target.fog += amount;
}

export function applyShield(target: CombatantState, amount: number): void {
  target.shield += amount;
}

export function applyClone(target: CombatantState, count: number): void {
  target.clones += count;
}

export function applyStun(target: CombatantState, rounds: number): void {
  target.stun += rounds;
}

export function tickEffects(state: { effects: ActiveEffect[] }): void {
  state.effects = state.effects
    .map(e => ({ ...e, duration: e.duration - 1 }))
    .filter(e => e.duration > 0);
}

export function getActiveEffects(
  effects: ActiveEffect[],
  side: 'player' | 'enemy',
  index: number
): ActiveEffect[] {
  return effects.filter(e => e.target === side && e.index === index);
}
