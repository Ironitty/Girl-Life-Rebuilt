import type { GameState } from '../core/types';

export interface NpcDef {
  id: string;
  firstname: string;
  lastname: string;
  gender: number;
  dob: number;
  pic: string;
  nickname: string;
}

export interface NpcState {
  relationship: number;
  drunk: number;
  hotcat: number;
  hotcatMovement: number;
  met: boolean;
  location?: string;
  flags: Record<string, number | boolean>;
}

export type NpcData = NpcDef & NpcState;

export function getNpc(s: GameState, id: string): NpcData | undefined {
  const def = s.npcDefs[id];
  const state = s.npcs[id];
  if (!def || !state) return undefined;
  return { ...def, ...state };
}

export function getNpcName(s: GameState, id: string): string {
  const def = s.npcDefs[id];
  if (!def) return id;
  return `${def.firstname} ${def.lastname}`;
}

export function getNpcNickname(s: GameState, id: string): string {
  const def = s.npcDefs[id];
  if (!def) return id;
  return def.nickname || def.firstname;
}

export function createNpcState(): NpcState {
  return {
    relationship: 0,
    drunk: 0,
    hotcat: 0,
    hotcatMovement: 0,
    met: false,
    flags: {},
  };
}
