import type { GameState } from '../../core/types';

export function qspUntranslated(_s: GameState, raw: string, meta: { location: string; line?: number }): string {
  if (import.meta.env.MODE === 'test') {
    throw new Error(`[QSP UNTRANSLATED] ${meta.location}:${meta.line ?? '?'}: ${raw}`);
  }
  console.warn(`[QSP TRANSPILER FALLBACK] ${meta.location}:${meta.line ?? '?'}: ${raw}`);
  return `[UNTRANSLATED: ${raw}]`;
}
