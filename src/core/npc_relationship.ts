import type { GameState } from './types';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ensureNpcObjects(s: GameState): void {
  if (!s.npc_rel) s.npc_rel = {};
  if (!s.npc_known) s.npc_known = {};
  if (!s.npc_rel_daily) s.npc_rel_daily = {};
}

export function npcRelModify(s: GameState, npcId: string, value: string | number, dailyLimit?: number, eventKey?: string): void {
  ensureNpcObjects(s);
  let val: number;

  if (typeof value === 'number') {
    val = value;
  } else {
    switch (value) {
      case 'like': val = rand(1, 2); break;
      case 'love': val = rand(3, 4); break;
      case 'adore': val = rand(5, 6); break;
      case 'dislike': val = -rand(1, 2); break;
      case 'hate': val = -rand(3, 4); break;
      case 'loathe': val = -rand(5, 6); break;
      default: val = 0;
    }
  }

  if (val > 0) {
    val += Math.floor((val * (s.pcs_humint || 0)) / 100);
  } else if (val < 0) {
    val -= Math.floor((val * (s.pcs_humint || 0)) / 200);
  }

  val += s.npc_rel[npcId] || 0;
  if (val > 100) val = 100;
  if (val < 0) val = 0;

  if (dailyLimit && dailyLimit > 0) {
    const key = npcId + (eventKey || '');
    if (dailyLimit > (s.npc_rel_daily[key] || 0)) {
      s.npc_rel_daily[key] = (s.npc_rel_daily[key] || 0) + 1;
    } else {
      val = s.npc_rel[npcId] || 0;
    }
  }

  if (npcId === 'A1') {
    const dimaLocked =
      (s.dimaRevenge === 6 && (s.dimaRevChoice === 3 || s.dimaRevChoice === 5 || s.dimaRevChoice === 6)) ||
      (s.dimaRevenge === 7 && s.dimaRevChoice === 2) ||
      (s.dimaRevenge === 8 && (s.dimaRevChoice === 1 || s.dimaRevChoice === 4));
    if (dimaLocked) val = s.npc_rel[npcId] || 0;
  } else if (npcId === 'A18') {
    if (val > 20) val = 20;
  } else if (npcId === 'A23') {
    if (s.grupTipe === 4 && (s.gschoolVars['school_diploma'] as number) === 0 && val > 20) val = 20;
  }

  s.npc_rel[npcId] = val;
  if (val > 0) s.npc_known[npcId] = 1;
}

export function npcRelModifyExact(s: GameState, npcId: string, amount: number): void {
  ensureNpcObjects(s);
  let val = (s.npc_rel[npcId] || 0) + amount;
  if (val > 100) val = 100;
  if (val < 0) val = 0;
  s.npc_rel[npcId] = val;
  if (val > 0) s.npc_known[npcId] = 1;
}

export function npcRelSet(s: GameState, npcId: string, value: string | number): void {
  ensureNpcObjects(s);
  let val: number;
  if (typeof value === 'number') {
    val = value;
  } else {
    switch (value) {
      case 'unknown': val = 0; break;
      case 'acquaintance': val = 20; break;
      case 'friend': val = 50; break;
      case 'bestie': val = 70; break;
      case 'loved': val = 90; break;
      default: val = 0;
    }
  }
  if (val > 100) val = 100;
  if (val < 0) val = 0;
  s.npc_rel[npcId] = val;
  if (val > 0) s.npc_known[npcId] = 1;
}

export function npcRelCheck(s: GameState, threshold: number, ...npcIds: string[]): number {
  ensureNpcObjects(s);
  let count = 0;
  for (const id of npcIds) {
    if (!id) continue;
    if ((s.npc_rel[id] || 0) >= threshold) count++;
  }
  s.npc_rel_check = count;
  return count;
}

export function npcRelDefaultFamilyFriends(s: GameState): void {
  const sets: [string, number][] = [
    ['A28', 50], ['A29', 50], ['A30', 50], ['A31', 50], ['A32', 50],
    ['A33', 70], ['A34', 50],
    ['A11', 60], ['A63', 40], ['A62', 20], ['A61', 20],
  ];
  for (const [id, val] of sets) npcRelSet(s, id, val);
}

export function npcRelSocialGroupSetting(s: GameState, args: number[], gender: number): void {
  ensureNpcObjects(s);
  if (!s.npc_gender) s.npc_gender = {};
  if (!s.npc_grupTipe) s.npc_grupTipe = {};
  for (let r = 1; r <= s.aarraynumber; r++) {
    const id = `A${r}`;
    if (gender !== 0 && (s.npc_gender[id] || 0) !== gender - 1) continue;
    const tipe = s.npc_grupTipe[id] || 0;
    if (tipe > 0 && args[tipe - 1] !== 0) {
      npcRelModify(s, id, args[tipe - 1]);
    }
  }
}

export function npcRelDefaultFriendship(s: GameState): void {
  ensureNpcObjects(s);
  if (!s.npc_grupTipe) s.npc_grupTipe = {};
  for (let r = 1; r <= s.aarraynumber; r++) {
    const id = `A${r}`;
    const t = s.npc_grupTipe[id] || 0;
    if (t >= 1 && t <= 6) npcRelSet(s, id, 30);
  }
}

export function npcRelDefaultNotSchool(s: GameState): void {
  ensureNpcObjects(s);
  if (!s.npc_grupTipe) s.npc_grupTipe = {};
  for (let r = 1; r <= s.aarraynumber; r++) {
    const id = `A${r}`;
    if ((s.npc_grupTipe[id] || 0) === 0) npcRelSet(s, id, 30);
  }
}

export function npcRelDefault(s: GameState): void {
  ensureNpcObjects(s);
  for (let r = 1; r <= s.aarraynumber; r++) {
    npcRelSet(s, `A${r}`, 30);
  }
}
