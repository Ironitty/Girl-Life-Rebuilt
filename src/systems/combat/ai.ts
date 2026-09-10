import type { CombatState, CombatantState, AttackType } from './types';

export interface AiDecision {
  attackType: AttackType;
  targetIndex: number;
}

export function enemyAi(state: CombatState, enemyIndex: number): AiDecision {
  const enemy = state.enemies[enemyIndex];
  const alivePlayers = state.player.filter(p => p.alive);

  if (alivePlayers.length === 0) {
    return { attackType: 'jab', targetIndex: 0 };
  }

  const target = alivePlayers[Math.floor(Math.random() * alivePlayers.length)];
  const targetIndex = state.player.indexOf(target);

  const attackType = chooseAttack(enemy);

  return { attackType, targetIndex };
}

function chooseAttack(enemy: CombatantState): AttackType {
  const roll = Math.random();

  if (enemy.kick > enemy.punch && roll < 0.4) return 'kick';
  if (enemy.punch > enemy.jab && roll < 0.7) return 'punch';
  if (roll < 0.5) return 'jab';
  if (enemy.punch > 0) return 'punch';
  return 'kick';
}

export function findNextActor(state: CombatState): { side: 'player' | 'enemy'; index: number } | null {
  let lowest = Infinity;
  let side: 'player' | 'enemy' = 'player';
  let index = 0;

  for (let i = 0; i < state.player.length; i++) {
    const p = state.player[i];
    if (!p.alive) continue;
    if (p.stun > 0) {
      p.stun -= 1;
      continue;
    }
    if (p.timer < lowest) {
      lowest = p.timer;
      side = 'player';
      index = i;
    }
  }

  for (let i = 0; i < state.enemies.length; i++) {
    const e = state.enemies[i];
    if (!e.alive) continue;
    if (e.stun > 0) {
      e.stun -= 1;
      continue;
    }
    if (e.timer < lowest) {
      lowest = e.timer;
      side = 'enemy';
      index = i;
    }
  }

  return lowest === Infinity ? null : { side, index };
}
