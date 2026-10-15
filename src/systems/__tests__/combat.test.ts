import { describe, it, expect, vi, afterEach } from 'vitest';
import type { CombatState, CombatantState, CombatantInit, ActiveEffect } from '../combat/types';
import { ATTACKS } from '../combat/types';
import { createCombatant, startCombat, resolveVictory, executeAttack, endTurn, playerAttack, advanceCombat } from '../combat/combat';
import { calculateHitChance, getAttackSkill, applyDamage, calculateDamage } from '../combat/damage';
import { applyFog, applyShield, applyClone, applyStun, tickEffects, getActiveEffects } from '../combat/effects';
import { enemyAi, findNextActor } from '../combat/ai';

let randomQueue: number[] = [];
let randomIndex = 0;

function mockRandom(...values: number[]) {
  randomQueue = values;
  randomIndex = 0;
  vi.spyOn(Math, 'random').mockImplementation(() => {
    if (randomIndex >= randomQueue.length) return 0;
    return randomQueue[randomIndex++];
  });
}

function makeCombatant(overrides: Partial<CombatantInit> = {}): CombatantInit {
  return {
    name: 'Test',
    health: 100,
    strength: 10,
    agility: 10,
    vitality: 10,
    reactions: 10,
    ...overrides,
  };
}

function makeCombatantState(overrides: Partial<CombatantState> = {}): CombatantState {
  return {
    name: 'Test',
    image: '',
    health: 100,
    maxHealth: 100,
    mana: 0,
    maxMana: 0,
    willpower: 50,
    shield: 0,
    fog: 0,
    clones: 0,
    stun: 0,
    timer: 55,
    strength: 10,
    agility: 10,
    vitality: 10,
    reactions: 10,
    kick: 10,
    punch: 10,
    jab: 10,
    wrestling: 10,
    running: 10,
    shooting: 10,
    magic: 0,
    damageBonus: 0,
    initBonus: 0,
    spells: [],
    alive: true,
    ...overrides,
  };
}

describe('combat system', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('createCombatant', () => {
    it('applies defaults for optional fields', () => {
      const c = createCombatant(makeCombatant());
      expect(c.kick).toBe(10);
      expect(c.punch).toBe(10);
      expect(c.jab).toBe(10);
      expect(c.wrestling).toBe(10);
      expect(c.running).toBe(10);
      expect(c.shooting).toBe(10);
      expect(c.magic).toBe(0);
      expect(c.damageBonus).toBe(0);
      expect(c.initBonus).toBe(0);
      expect(c.spells).toEqual([]);
      expect(c.alive).toBe(true);
      expect(c.stun).toBe(0);
    });

    it('calculates timer from reactions', () => {
      const c = createCombatant(makeCombatant({ reactions: 20 }));
      expect(c.timer).toBe(60 - Math.floor(20 / 2));
      expect(c.timer).toBe(50);
    });

    it('uses custom values when provided', () => {
      const c = createCombatant(makeCombatant({ kick: 25, punch: 15, damageBonus: 5, initBonus: 3, spells: ['fire'] }));
      expect(c.kick).toBe(25);
      expect(c.punch).toBe(15);
      expect(c.damageBonus).toBe(5);
      expect(c.initBonus).toBe(3);
      expect(c.spells).toEqual(['fire']);
    });

    it('sets maxHealth equal to health', () => {
      const c = createCombatant(makeCombatant({ health: 75 }));
      expect(c.health).toBe(75);
      expect(c.maxHealth).toBe(75);
    });
  });

  describe('startCombat', () => {
    it('creates player and enemy combatants', () => {
      const state = startCombat([makeCombatant({ name: 'P1' })], [makeCombatant({ name: 'E1' })]);
      expect(state.active).toBe(true);
      expect(state.round).toBe(1);
      expect(state.turn).toBe(0);
      expect(state.phase).toBe('player');
      expect(state.player).toHaveLength(1);
      expect(state.enemies).toHaveLength(1);
      expect(state.player[0].name).toBe('P1');
      expect(state.enemies[0].name).toBe('E1');
    });

    it('applies initBonus to timer', () => {
      const state = startCombat(
        [makeCombatant({ reactions: 10, initBonus: 5 })],
        [makeCombatant({ reactions: 10, initBonus: -3 })]
      );
      expect(state.player[0].timer).toBe(60 - 5 + 5);
      expect(state.enemies[0].timer).toBe(60 - 5 - 3);
    });

    it('stores ending value', () => {
      const state = startCombat([makeCombatant()], [makeCombatant()], 42);
      expect(state.ending).toBe(42);
    });
  });

  describe('resolveVictory', () => {
    it('returns defeat when all players are dead', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ alive: false })],
        enemies: [makeCombatantState()],
        effects: [], log: [], ending: 0,
      };
      expect(resolveVictory(state)).toBe('defeat');
    });

    it('returns defeat when player willpower <= 0', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ willpower: 0 })],
        enemies: [makeCombatantState()],
        effects: [], log: [], ending: 0,
      };
      expect(resolveVictory(state)).toBe('defeat');
    });

    it('returns victory when all enemies are dead', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState()],
        enemies: [makeCombatantState({ alive: false })],
        effects: [], log: [], ending: 0,
      };
      expect(resolveVictory(state)).toBe('victory');
    });

    it('returns current phase when combat is ongoing', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState()],
        enemies: [makeCombatantState()],
        effects: [], log: [], ending: 0,
      };
      expect(resolveVictory(state)).toBe('player');
    });
  });

  describe('executeAttack', () => {
    it('returns stun message when attacker is stunned', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ stun: 1 })],
        enemies: [makeCombatantState()],
        effects: [], log: [], ending: 0,
      };
      const logs = executeAttack(state, 'player', 0, 'jab', 'enemy', 0);
      expect(logs[0]).toContain('stunned');
      expect(state.turn).toBe(0);
    });

    it('lands a hit with high skill and low defender reactions', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ kick: 50, punch: 50, jab: 50 })],
        enemies: [makeCombatantState({ reactions: 0, agility: 0 })],
        effects: [], log: [], ending: 0,
      };
      const logs = executeAttack(state, 'player', 0, 'jab', 'enemy', 0);
      expect(logs[0]).toContain('hits');
      expect(state.enemies[0].health).toBeLessThan(100);
      expect(state.turn).toBe(1);
    });

    it('misses with low skill and high defender reactions', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ kick: 1, punch: 1, jab: 1 })],
        enemies: [makeCombatantState({ reactions: 100, agility: 100 })],
        effects: [], log: [], ending: 0,
      };
      const logs = executeAttack(state, 'player', 0, 'jab', 'enemy', 0);
      expect(logs[0]).toContain('misses');
      expect(state.enemies[0].health).toBe(100);
    });

    it('clone absorbs the blow', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ kick: 50, punch: 50, jab: 50 })],
        enemies: [makeCombatantState({ reactions: 0, agility: 0, clones: 1 })],
        effects: [], log: [], ending: 0,
      };
      const logs = executeAttack(state, 'player', 0, 'jab', 'enemy', 0);
      expect(logs[0]).toContain('clone absorbs');
      expect(state.enemies[0].clones).toBe(0);
      expect(state.enemies[0].health).toBe(100);
    });

    it('shield fully absorbs damage', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ kick: 50, punch: 50, jab: 50, strength: 10 })],
        enemies: [makeCombatantState({ reactions: 0, agility: 0, shield: 100 })],
        effects: [], log: [], ending: 0,
      };
      const logs = executeAttack(state, 'player', 0, 'jab', 'enemy', 0);
      expect(logs.some(l => l.includes('Shield absorbs'))).toBe(true);
      expect(state.enemies[0].health).toBe(100);
      expect(state.enemies[0].shield).toBeLessThan(100);
    });

    it('partial shield absorbs then overflows to health', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ kick: 50, punch: 50, jab: 50, strength: 20 })],
        enemies: [makeCombatantState({ reactions: 0, agility: 0, shield: 2 })],
        effects: [], log: [], ending: 0,
      };
      const logs = executeAttack(state, 'player', 0, 'jab', 'enemy', 0);
      expect(logs.some(l => l.includes('Shield absorbed'))).toBe(true);
      expect(state.enemies[0].shield).toBe(0);
      expect(state.enemies[0].health).toBeLessThan(100);
    });

    it('devastating hit stuns the defender', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ kick: 100, punch: 100, jab: 100, strength: 100 })],
        enemies: [makeCombatantState({ reactions: 0, agility: 0, health: 10, maxHealth: 10 })],
        effects: [], log: [], ending: 0,
      };
      const logs = executeAttack(state, 'player', 0, 'jab', 'enemy', 0);
      expect(logs.some(l => l.includes('stunned'))).toBe(true);
      expect(state.enemies[0].stun).toBe(1);
    });

    it('knocks out defender when health reaches 0', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ kick: 100, punch: 100, jab: 100, strength: 100 })],
        enemies: [makeCombatantState({ reactions: 0, agility: 0, health: 1, maxHealth: 100 })],
        effects: [], log: [], ending: 0,
      };
      const logs = executeAttack(state, 'player', 0, 'jab', 'enemy', 0);
      expect(logs.some(l => l.includes('knocked out'))).toBe(true);
      expect(state.enemies[0].alive).toBe(false);
      expect(state.enemies[0].health).toBe(0);
    });

    it('increments attacker timer by attack timeCost', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ kick: 50, punch: 50, jab: 50 })],
        enemies: [makeCombatantState({ reactions: 0, agility: 0 })],
        effects: [], log: [], ending: 0,
      };
      const beforeTimer = state.player[0].timer;
      executeAttack(state, 'player', 0, 'kick', 'enemy', 0);
      expect(state.player[0].timer).toBe(beforeTimer + ATTACKS.kick.timeCost);
    });
  });

  describe('endTurn', () => {
    it('selects next actor by lowest timer', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ timer: 10, name: 'P1' })],
        enemies: [makeCombatantState({ timer: 5, name: 'E1' })],
        effects: [], log: [], ending: 0,
      };
      mockRandom(0);
      const logs = endTurn(state);
      expect(state.phase).toBe('enemy');
      expect(logs.length).toBeGreaterThan(0);
    });

    it('resets timers on new round when no actor available', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ alive: false })],
        enemies: [makeCombatantState({ alive: false })],
        effects: [], log: [], ending: 0,
      };
      endTurn(state);
      expect(state.round).toBe(2);
    });

    it('ends combat on victory', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState()],
        enemies: [makeCombatantState({ alive: false })],
        effects: [], log: [], ending: 0,
      };
      const logs = endTurn(state);
      expect(state.active).toBe(false);
      expect(state.phase).toBe('victory');
      expect(logs.some(l => l.includes('won'))).toBe(true);
    });

    it('ends combat on defeat', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ alive: false })],
        enemies: [makeCombatantState()],
        effects: [], log: [], ending: 0,
      };
      const logs = endTurn(state);
      expect(state.active).toBe(false);
      expect(state.phase).toBe('defeat');
      expect(logs.some(l => l.includes('lost'))).toBe(true);
    });
  });

  describe('playerAttack', () => {
    it('executes attack and checks for victory', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ kick: 100, punch: 100, jab: 100, strength: 100 })],
        enemies: [makeCombatantState({ reactions: 0, agility: 0, health: 1, maxHealth: 100 })],
        effects: [], log: [], ending: 0,
      };
      const logs = playerAttack(state, 0, 'jab', 0);
      expect(state.active).toBe(false);
      expect(state.phase).toBe('victory');
      expect(logs.some(l => l.includes('won'))).toBe(true);
    });

    it('executes attack without ending combat', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ kick: 10, punch: 10, jab: 10 })],
        enemies: [makeCombatantState({ reactions: 0, agility: 0 })],
        effects: [], log: [], ending: 0,
      };
      playerAttack(state, 0, 'jab', 0);
      expect(state.active).toBe(true);
    });
  });

  describe('advanceCombat', () => {
    it('returns empty array when combat is inactive', () => {
      const state: CombatState = {
        active: false, round: 1, turn: 0, phase: 'victory',
        player: [], enemies: [], effects: [], log: [], ending: 0,
      };
      expect(advanceCombat(state)).toEqual([]);
    });

    it('delegates to endTurn when active', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ timer: 10 })],
        enemies: [makeCombatantState({ timer: 5 })],
        effects: [], log: [], ending: 0,
      };
      mockRandom(0);
      const logs = advanceCombat(state);
      expect(logs.length).toBeGreaterThan(0);
    });
  });

  describe('calculateHitChance', () => {
    it('always hits when defender is stunned', () => {
      mockRandom(0);
      const attacker = makeCombatantState({ kick: 1, punch: 1, jab: 1 });
      const defender = makeCombatantState({ stun: 1, reactions: 100, agility: 100 });
      expect(calculateHitChance(attacker, defender, 'jab')).toBe(true);
    });

    it('uses skill + roll vs threshold', () => {
      mockRandom(0);
      const attacker = makeCombatantState({ jab: 50 });
      const defender = makeCombatantState({ reactions: 10, agility: 10 });
      const threshold = 10 / 4 + (3 * 10) / 4;
      expect(50 + 0 > threshold).toBe(true);
      expect(calculateHitChance(attacker, defender, 'jab')).toBe(true);
    });
  });

  describe('getAttackSkill', () => {
    it('returns kick skill for kick attack', () => {
      const c = makeCombatantState({ kick: 25 });
      expect(getAttackSkill(c, 'kick')).toBe(25);
    });

    it('returns punch skill for punch attack', () => {
      const c = makeCombatantState({ punch: 30 });
      expect(getAttackSkill(c, 'punch')).toBe(30);
    });

    it('returns jab skill for jab attack', () => {
      const c = makeCombatantState({ jab: 15 });
      expect(getAttackSkill(c, 'jab')).toBe(15);
    });
  });

  describe('applyDamage', () => {
    it('clone absorbs all damage', () => {
      const target = makeCombatantState({ clones: 2 });
      const result = applyDamage(target, 50);
      expect(result.cloneAbsorbed).toBe(true);
      expect(result.healthLost).toBe(0);
      expect(target.clones).toBe(1);
      expect(target.health).toBe(100);
    });

    it('shield fully absorbs damage', () => {
      const target = makeCombatantState({ shield: 100 });
      const result = applyDamage(target, 30);
      expect(result.shieldAbsorbed).toBe(30);
      expect(result.healthLost).toBe(0);
      expect(target.shield).toBe(70);
      expect(target.health).toBe(100);
    });

    it('partial shield absorbs then overflows', () => {
      const target = makeCombatantState({ shield: 10 });
      const result = applyDamage(target, 30);
      expect(result.shieldAbsorbed).toBe(10);
      expect(result.healthLost).toBe(20);
      expect(target.shield).toBe(0);
      expect(target.health).toBe(80);
    });

    it('no shield means full damage to health', () => {
      const target = makeCombatantState();
      const result = applyDamage(target, 25);
      expect(result.shieldAbsorbed).toBe(0);
      expect(result.healthLost).toBe(25);
      expect(target.health).toBe(75);
    });

    it('flags devastating when damage * 2 > maxHealth', () => {
      const target = makeCombatantState({ health: 50, maxHealth: 50 });
      const result = applyDamage(target, 30);
      expect(result.devastating).toBe(true);
      expect(result.healthLost).toBe(30);
    });

    it('does not flag devastating when damage * 2 <= maxHealth', () => {
      const target = makeCombatantState({ health: 100, maxHealth: 100 });
      const result = applyDamage(target, 20);
      expect(result.devastating).toBe(false);
    });

    it('clamps health to 0 minimum', () => {
      const target = makeCombatantState({ health: 10 });
      const result = applyDamage(target, 50);
      expect(target.health).toBe(0);
      expect(result.healthLost).toBe(50);
    });
  });

  describe('calculateDamage', () => {
    it('scales with strength', () => {
      mockRandom(0.5);
      const attacker = makeCombatantState({ strength: 10 });
      const defender = makeCombatantState();
      const dmg = calculateDamage(attacker, defender, 'jab');
      const minDmg = ATTACKS.jab.minDamage;
      const maxDmg = ATTACKS.jab.maxDamage;
      const roll = minDmg + Math.floor(0.5 * (maxDmg - minDmg + 1));
      expect(dmg).toBe(Math.max(0, Math.floor(10 * roll / 3)));
    });

    it('adds damageBonus', () => {
      mockRandom(0);
      const attacker = makeCombatantState({ strength: 10, damageBonus: 5 });
      const defender = makeCombatantState();
      const dmg = calculateDamage(attacker, defender, 'jab');
      expect(dmg).toBe(Math.floor(10 * ATTACKS.jab.minDamage / 3) + 5);
    });

    it('reduces damage when defender has fog', () => {
      mockRandom(0, 0, 0);
      const attacker = makeCombatantState({ strength: 10 });
      const defender = makeCombatantState({ fog: 5 });
      const dmg = calculateDamage(attacker, defender, 'jab');
      expect(defender.fog).toBeLessThan(5);
      expect(dmg).toBeGreaterThanOrEqual(0);
    });

    it('clamps damage to 0 minimum', () => {
      mockRandom(0);
      const attacker = makeCombatantState({ strength: 0, damageBonus: 0 });
      const defender = makeCombatantState();
      const dmg = calculateDamage(attacker, defender, 'jab');
      expect(dmg).toBe(0);
    });
  });

  describe('effects', () => {
    it('applyFog increases fog', () => {
      const target = makeCombatantState();
      applyFog(target, 5);
      expect(target.fog).toBe(5);
    });

    it('applyShield increases shield', () => {
      const target = makeCombatantState();
      applyShield(target, 20);
      expect(target.shield).toBe(20);
    });

    it('applyClone increases clones', () => {
      const target = makeCombatantState();
      applyClone(target, 3);
      expect(target.clones).toBe(3);
    });

    it('applyStun increases stun', () => {
      const target = makeCombatantState();
      applyStun(target, 2);
      expect(target.stun).toBe(2);
    });

    it('tickEffects decrements duration and filters expired', () => {
      const effects: ActiveEffect[] = [
        { type: 'fog', target: 'player', index: 0, value: 5, duration: 2 },
        { type: 'shield', target: 'enemy', index: 0, value: 10, duration: 1 },
      ];
      const state = { effects };
      tickEffects(state);
      expect(state.effects).toHaveLength(1);
      expect(state.effects[0].duration).toBe(1);
    });

    it('getActiveEffects filters by side and index', () => {
      const effects: ActiveEffect[] = [
        { type: 'fog', target: 'player', index: 0, value: 5, duration: 3 },
        { type: 'shield', target: 'player', index: 1, value: 10, duration: 2 },
        { type: 'clone', target: 'enemy', index: 0, value: 1, duration: 1 },
      ];
      const result = getActiveEffects(effects, 'player', 0);
      expect(result).toHaveLength(1);
      expect(result[0].type).toBe('fog');
    });
  });

  describe('ai', () => {
    it('enemyAi targets a living player', () => {
      mockRandom(0);
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'enemy',
        player: [makeCombatantState({ name: 'P1' }), makeCombatantState({ name: 'P2', alive: false })],
        enemies: [makeCombatantState({ name: 'E1' })],
        effects: [], log: [], ending: 0,
      };
      const decision = enemyAi(state, 0);
      expect(decision.targetIndex).toBe(0);
      expect(state.player[decision.targetIndex].alive).toBe(true);
    });

    it('enemyAi returns jab when no players alive', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'enemy',
        player: [makeCombatantState({ alive: false })],
        enemies: [makeCombatantState()],
        effects: [], log: [], ending: 0,
      };
      const decision = enemyAi(state, 0);
      expect(decision.attackType).toBe('jab');
      expect(decision.targetIndex).toBe(0);
    });

    it('findNextActor returns lowest timer', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ timer: 20, name: 'P1' }), makeCombatantState({ timer: 10, name: 'P2' })],
        enemies: [makeCombatantState({ timer: 15, name: 'E1' })],
        effects: [], log: [], ending: 0,
      };
      const next = findNextActor(state);
      expect(next).toEqual({ side: 'player', index: 1 });
    });

    it('findNextActor skips stunned combatants and decrements stun', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ timer: 5, stun: 1, name: 'P1' })],
        enemies: [makeCombatantState({ timer: 10, name: 'E1' })],
        effects: [], log: [], ending: 0,
      };
      const next = findNextActor(state);
      expect(next).toEqual({ side: 'enemy', index: 0 });
      expect(state.player[0].stun).toBe(0);
    });

    it('findNextActor returns null when all dead or stunned', () => {
      const state: CombatState = {
        active: true, round: 1, turn: 0, phase: 'player',
        player: [makeCombatantState({ alive: false })],
        enemies: [makeCombatantState({ alive: false })],
        effects: [], log: [], ending: 0,
      };
      expect(findNextActor(state)).toBeNull();
    });
  });
});
