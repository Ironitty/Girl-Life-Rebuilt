import type { GameState } from './types';

export function loca(s: GameState): void {
  if (s.debug['trace_loc_change'] === 1) {
    console.log('Location changed:', s.loc, s.locArg);
  }
}
