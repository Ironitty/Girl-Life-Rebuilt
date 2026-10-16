import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import { pushState, popState } from '../stateStack';

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    loc: 'loc_a', locArg: 'arg_a',
    prevLoc: undefined, prevArg: undefined,
    stateStack: [],
    ...overrides,
  } as unknown as GameState;
}

describe('pushState / popState', () => {
  it('pushState stores a frame', () => {
    const s = makeState();
    pushState(s);
    expect(s.stateStack).toHaveLength(1);
    expect(s.stateStack[0]).toEqual({ loc: 'loc_a', locArg: 'arg_a', prevLoc: undefined, prevArg: undefined });
  });

  it('popState restores loc and locArg', () => {
    const s = makeState();
    pushState(s);
    s.loc = 'loc_b';
    s.locArg = 'arg_b';
    popState(s);
    expect(s.loc).toBe('loc_a');
    expect(s.locArg).toBe('arg_a');
    expect(s.stateStack).toHaveLength(0);
  });

  it('popState restores prevLoc/prevArg when present', () => {
    const s = makeState({ prevLoc: 'prev_a', prevArg: 'prev_arg_a' });
    pushState(s);
    s.loc = 'loc_b';
    s.prevLoc = 'prev_b';
    popState(s);
    expect(s.prevLoc).toBe('prev_a');
    expect(s.prevArg).toBe('prev_arg_a');
  });

  it('popState on empty stack is a no-op', () => {
    const s = makeState({ loc: 'only' });
    popState(s);
    expect(s.loc).toBe('only');
    expect(s.stateStack).toHaveLength(0);
  });
});
