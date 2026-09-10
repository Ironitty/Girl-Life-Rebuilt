import type { GameState } from '../core/types';

export function monthlyCycle(s: GameState): void {
  const month = s.month;
  if (month === 1) {
    s.yearstart = s.year;
  }
}
