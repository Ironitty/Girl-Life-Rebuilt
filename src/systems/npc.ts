import type { GameState } from '../core/types';
import { getAge } from '../core/time';

export function getNpcAge(s: GameState, npcId: string): number {
  const dob = s.npc_dob[npcId];
  if (dob === undefined) return 0;
  const day = dob % 100;
  const month = Math.floor(dob / 100) % 100;
  const year = Math.floor(dob / 10000);
  return getAge(year, month, day, s);
}

export function isNpcId(id: string): boolean {
  return id.length > 1 && 'ABCDM'.includes(id[0]) && /^\d/.test(id[1]);
}

export function findNpc(s: GameState, name: string): string {
  const idx = s.npcID.indexOf(name);
  if (idx >= 0) return `[${idx}]`;
  return 'none';
}

export function copyNpcStats(s: GameState, from: string, to: string): void {
  const fromKey = resolveNpcKey(s, from);
  const toKey = resolveNpcKey(s, to);
  if (fromKey && toKey) {
    s.npc_dob[toKey] = s.npc_dob[fromKey];
  }
}

function resolveNpcKey(s: GameState, key: string): string {
  if (/^\d+$/.test(key)) return `[${key}]`;
  if (key.length === 1 && 'abcdefghijklmnopqrstuvwxyz'.includes(key)) {
    const idx = 'abcdefghijklmnopqrstuvwxyz'.indexOf(key) + 1;
    return s.npcID[idx - 1] ?? '';
  }
  return key;
}
