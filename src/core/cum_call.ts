import type { GameState } from './types';

export interface CumCallParams {
  location: string;
  partnerName?: string;
  known?: number;
  contraception?: string | number;
  potency?: number;
  volume?: number;
}

const LOCATION_MAP: Record<string, number> = {
  labia: 1, pantyfront: 2, anus: 3, anal: 3, butt: 4, pantyrear: 5,
  clothes_hidden: 6, clothes: 7, back: 8, legs: 9, feet: 9, arms: 10,
  face: 11, mouth: 12, mouth_swallow: 12, hands: 13, stomach: 14,
  breasts: 15, hair: 16, internalcondom: 17,
};

export function cumCall(s: GameState, params: CumCallParams): void {
  const { location, known = 0, contraception = '', potency = 0, volume = 0 } = params;
  if (!s.npc_love) s.npc_love = {};
  if (!s.stat) s.stat = {};

  s.sexpartkno = (s.npc_love['npcID'] || 0) > 0 ? 1 : 0;
  if (known === 1) s.sexpartkno = 1;
  if (known === 2) s.sexunaware = 1;

  let sexContra: number;
  if (typeof contraception === 'number') {
    sexContra = Math.max(0, Math.min(contraception, 7));
  } else if (contraception === '') {
    sexContra = s.sexcontra;
  } else {
    switch (contraception) {
      case 'none': sexContra = s.pillcon2 > 1000 ? 2 : 1; break;
      case 'sabotaged': sexContra = 7; break;
      case 'sabotaged_other': sexContra = 6; break;
      case 'slipped': sexContra = 5; break;
      case 'broken': sexContra = 4; break;
      default: sexContra = 3;
    }
  }
  s.sexcontra = sexContra;

  let sexSpecPot = potency > 0 ? potency : s.npcSpermPot;
  let sexVolume = volume > 0 ? volume : Math.max(0, s.npcSpermVol);

  if (location === 'precum') {
    sexSpecPot /= 40;
    sexVolume = 1;
    s.spafinloc = 0;
    s.cumprecheck = 1;
  } else {
    s.spafinloc = LOCATION_MAP[location] ?? Math.max(0, Math.min(Number(location) || 0, 17));
    if (location === 'anal') {
      s.stat['cum_anal_ml'] = (s.stat['cum_anal_ml'] || 0) + sexVolume;
    }
    if (location === 'mouth_swallow') {
      s.stat['swallow'] = (s.stat['swallow'] || 0) + 1;
      if (known === 2) s.stat['swallow_unaware'] = (s.stat['swallow_unaware'] || 0) + 1;
      s.stat['cum_swallowed_ml'] = (s.stat['cum_swallowed_ml'] || 0) + sexVolume;
    }
  }

  s.npcSpermPot = sexSpecPot;
  s.npcSpermVol = sexVolume;
}
