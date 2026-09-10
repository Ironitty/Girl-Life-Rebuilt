export type CombatPhase = 'player' | 'enemy' | 'victory' | 'defeat';

export type AttackType = 'kick' | 'punch' | 'jab';

export interface AttackDef {
  type: AttackType;
  minDamage: number;
  maxDamage: number;
  timeCost: number;
}

export const ATTACKS: Record<AttackType, AttackDef> = {
  kick: { type: 'kick', minDamage: 5, maxDamage: 8, timeCost: 40 },
  punch: { type: 'punch', minDamage: 4, maxDamage: 6, timeCost: 30 },
  jab: { type: 'jab', minDamage: 2, maxDamage: 3, timeCost: 15 },
};

export interface CombatantState {
  name: string;
  image: string;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  willpower: number;
  shield: number;
  fog: number;
  clones: number;
  stun: number;
  timer: number;
  strength: number;
  agility: number;
  vitality: number;
  reactions: number;
  kick: number;
  punch: number;
  jab: number;
  wrestling: number;
  running: number;
  shooting: number;
  magic: number;
  damageBonus: number;
  initBonus: number;
  spells: string[];
  alive: boolean;
}

export interface ActiveEffect {
  type: 'fog' | 'clone' | 'shield' | 'stun' | 'dmg_bonus';
  target: 'player' | 'enemy';
  index: number;
  value: number;
  duration: number;
}

export interface CombatState {
  active: boolean;
  round: number;
  turn: number;
  phase: CombatPhase;
  player: CombatantState[];
  enemies: CombatantState[];
  effects: ActiveEffect[];
  log: string[];
  ending: number;
}

export interface CombatantInit {
  name: string;
  image?: string;
  health: number;
  mana?: number;
  willpower?: number;
  shield?: number;
  fog?: number;
  clones?: number;
  strength: number;
  agility: number;
  vitality: number;
  reactions: number;
  kick?: number;
  punch?: number;
  jab?: number;
  wrestling?: number;
  running?: number;
  shooting?: number;
  magic?: number;
  damageBonus?: number;
  initBonus?: number;
  spells?: string[];
}
