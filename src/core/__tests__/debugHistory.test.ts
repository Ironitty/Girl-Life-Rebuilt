import { describe, it, expect, beforeEach } from 'vitest';
import type { GameState } from '../types';
import {
  pushSnapshot, canUndo, canRedo, undo, redo, restoreLast, getHistory, clearHistory,
} from '../debugHistory';

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    pcs_mood: 50,
    scene: { curActs: ['a', 'b'] },
    ...overrides,
  } as unknown as GameState;
}

beforeEach(() => clearHistory());

describe('pushSnapshot / canUndo / getHistory', () => {
  it('records a snapshot and enables undo', () => {
    pushSnapshot(makeState({ pcs_mood: 50 }), 'city_center', 'look');
    expect(canUndo()).toBe(true);
    expect(canRedo()).toBe(false);
    expect(getHistory()).toHaveLength(1);
    expect(getHistory()[0].location).toBe('city_center');
    expect(getHistory()[0].action).toBe('look');
  });

  it('starts empty', () => {
    expect(canUndo()).toBe(false);
    expect(getHistory()).toHaveLength(0);
  });
});

describe('undo / redo round-trip', () => {
  it('undoes to the previous state and enables redo', () => {
    pushSnapshot(makeState({ pcs_mood: 50 }), 'loc_a', 'act_a');
    const restored = undo(makeState({ pcs_mood: 99 }));
    expect(restored).not.toBeNull();
    expect(restored!.pcs_mood).toBe(50);
    expect(canUndo()).toBe(false);
    expect(canRedo()).toBe(true);
  });

  it('redoes back to the undone state', () => {
    pushSnapshot(makeState({ pcs_mood: 50 }), 'loc_a', 'act_a');
    undo(makeState({ pcs_mood: 99 }));
    const redone = redo(makeState({ pcs_mood: 1 }));
    expect(redone).not.toBeNull();
    expect(redone!.pcs_mood).toBe(99);
    expect(canRedo()).toBe(false);
    expect(canUndo()).toBe(true);
  });

  it('returns null when there is nothing to undo or redo', () => {
    expect(undo(makeState())).toBeNull();
    expect(redo(makeState())).toBeNull();
  });
});

describe('snapshot isolation', () => {
  it('clones state so later mutation does not leak in', () => {
    const s = makeState({ pcs_mood: 50 });
    pushSnapshot(s, 'loc', 'act');
    (s as { pcs_mood: number }).pcs_mood = 999;
    const restored = undo(makeState());
    expect(restored!.pcs_mood).toBe(50);
  });
});

describe('restoreLast / clearHistory', () => {
  it('restores the most recent snapshot', () => {
    pushSnapshot(makeState({ pcs_mood: 50 }), 'loc_a', 'act_a');
    pushSnapshot(makeState({ pcs_mood: 75 }), 'loc_b', 'act_b');
    expect(restoreLast()!.pcs_mood).toBe(75);
  });

  it('returns null before any snapshot', () => {
    expect(restoreLast()).toBeNull();
  });

  it('clears all history and snapshots', () => {
    pushSnapshot(makeState(), 'loc', 'act');
    clearHistory();
    expect(canUndo()).toBe(false);
    expect(canRedo()).toBe(false);
    expect(getHistory()).toHaveLength(0);
    expect(restoreLast()).toBeNull();
  });
});
