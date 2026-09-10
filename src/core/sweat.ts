import type { GameState } from './types';

export function sweatAdd(s: GameState, amount: number): void {
  if (amount <= 0) return;
  if (s.deodorant_on === 1) {
    const min = Math.floor(amount / 3);
    const max = Math.ceil((2 * (amount + 1)) / 3);
    s.pcs_sweat += Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    s.pcs_sweat += amount;
  }
}

export function sweatShower(s: GameState): void {
  if (s.pcs_sweat >= 10) s.pcs_sweat = Math.floor(Math.random() * 10);
  sweatRemoveDeo(s);
}

export function sweatDeo(s: GameState): void {
  if (s.deodorant_on === 0) {
    s.deodorant_on = 1;
    s.pcs_sweat -= 2;
  }
  s.deodorant_time = s.totminut + 24 * 60;
}

export function sweatRemoveDeo(s: GameState): void {
  s.deodorant_on = 0;
  s.deodorant_time = 0;
}

export function sweatClamp(s: GameState): void {
  if (s.pcs_sweat < 0) s.pcs_sweat = 0;
}
