import type { CombatState, CombatantState, CombatantInit, AttackType, CombatPhase } from './types';
import { ATTACKS } from './types';
import { calculateHitChance, calculateDamage, applyDamage } from './damage';
import { findNextActor, enemyAi } from './ai';
import { tickEffects } from './effects';

export function createCombatant(init: CombatantInit): CombatantState {
  return {
    name: init.name,
    image: init.image ?? '',
    health: init.health,
    maxHealth: init.health,
    mana: init.mana ?? 0,
    maxMana: init.mana ?? 0,
    willpower: init.willpower ?? 50,
    shield: init.shield ?? 0,
    fog: init.fog ?? 0,
    clones: init.clones ?? 0,
    stun: 0,
    timer: 60 - Math.floor((init.reactions) / 2),
    strength: init.strength,
    agility: init.agility,
    vitality: init.vitality,
    reactions: init.reactions,
    kick: init.kick ?? 10,
    punch: init.punch ?? 10,
    jab: init.jab ?? 10,
    wrestling: init.wrestling ?? 10,
    running: init.running ?? 10,
    shooting: init.shooting ?? 10,
    magic: init.magic ?? 0,
    damageBonus: init.damageBonus ?? 0,
    initBonus: init.initBonus ?? 0,
    spells: init.spells ?? [],
    alive: true,
  };
}

export function startCombat(
  players: CombatantInit[],
  enemies: CombatantInit[],
  ending = 0
): CombatState {
  const state: CombatState = {
    active: true,
    round: 1,
    turn: 0,
    phase: 'player',
    player: players.map(createCombatant),
    enemies: enemies.map(createCombatant),
    effects: [],
    log: [],
    ending,
  };

  for (const p of state.player) {
    p.timer = 60 - Math.floor(p.reactions / 2) + p.initBonus;
  }
  for (const e of state.enemies) {
    e.timer = 60 - Math.floor(e.reactions / 2) + e.initBonus;
  }

  return state;
}

export function resolveVictory(state: CombatState): CombatPhase {
  if (state.player.every(p => !p.alive)) return 'defeat';
  if (state.player[0] && state.player[0].willpower <= 0) return 'defeat';
  if (state.enemies.every(e => !e.alive)) return 'victory';
  return state.phase;
}

export function executeAttack(
  state: CombatState,
  attackerSide: 'player' | 'enemy',
  attackerIndex: number,
  attackType: AttackType,
  targetSide: 'player' | 'enemy',
  targetIndex: number
): string[] {
  const logs: string[] = [];
  const attacker = attackerSide === 'player' ? state.player[attackerIndex] : state.enemies[attackerIndex];
  const defender = targetSide === 'player' ? state.player[targetIndex] : state.enemies[targetIndex];
  const atk = ATTACKS[attackType];

  if (attacker.stun > 0) {
    logs.push(`${attacker.name} is stunned and cannot act.`);
    return logs;
  }

  const hit = calculateHitChance(attacker, defender, attackType);

  if (hit) {
    const damage = calculateDamage(attacker, defender, attackType);
    const result = applyDamage(defender, damage);

    if (result.cloneAbsorbed) {
      logs.push(`${attacker.name} attacks ${defender.name}! A clone absorbs the blow.`);
    } else if (result.shieldAbsorbed > 0 && result.healthLost === 0) {
      logs.push(`${attacker.name} attacks ${defender.name}! Shield absorbs ${result.shieldAbsorbed} damage.`);
    } else {
      logs.push(`${attacker.name} hits ${defender.name} for ${result.healthLost} damage.`);
      if (result.shieldAbsorbed > 0) {
        logs.push(`Shield absorbed ${result.shieldAbsorbed}.`);
      }
      if (result.devastating) {
        defender.stun += 1;
        logs.push(`${defender.name} is stunned!`);
      }
    }

    if (defender.health <= 0) {
      defender.alive = false;
      logs.push(`${defender.name} is knocked out!`);
    }
  } else {
    logs.push(`${attacker.name} attacks ${defender.name}... but misses!`);
  }

  attacker.timer += atk.timeCost;
  state.turn++;

  return logs;
}

export function endTurn(state: CombatState): string[] {
  const logs: string[] = [];
  tickEffects(state);

  const next = findNextActor(state);
  if (!next) {
    state.round++;
    for (const p of state.player) p.timer = 60 - Math.floor(p.reactions / 2);
    for (const e of state.enemies) e.timer = 60 - Math.floor(e.reactions / 2);
    const retry = findNextActor(state);
    if (!retry) {
      state.phase = resolveVictory(state);
      if (state.phase === 'victory' || state.phase === 'defeat') {
        state.active = false;
        logs.push(state.phase === 'victory' ? 'You won!' : 'You lost!');
      }
      return logs;
    }
    return logs;
  }

  if (next.side === 'enemy') {
    const decision = enemyAi(state, next.index);
    const atkLogs = executeAttack(state, 'enemy', next.index, decision.attackType, 'player', decision.targetIndex);
    logs.push(...atkLogs);
  }

  const phase = resolveVictory(state);
  if (phase === 'victory' || phase === 'defeat') {
    state.phase = phase;
    state.active = false;
    logs.push(phase === 'victory' ? 'You won!' : 'You lost!');
  } else {
    state.phase = next.side === 'player' ? 'player' : 'enemy';
  }

  return logs;
}

export function playerAttack(
  state: CombatState,
  attackerIndex: number,
  attackType: AttackType,
  targetIndex: number
): string[] {
  const logs = executeAttack(state, 'player', attackerIndex, attackType, 'enemy', targetIndex);
  const phase = resolveVictory(state);
  if (phase === 'victory' || phase === 'defeat') {
    state.phase = phase;
    state.active = false;
    logs.push(phase === 'victory' ? 'You won!' : 'You lost!');
  }
  return logs;
}

export function advanceCombat(state: CombatState): string[] {
  if (!state.active) return [];
  return endTurn(state);
}
