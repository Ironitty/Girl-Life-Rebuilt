import { describe, it, expect } from 'vitest';
import { defineRoutine, registerRoutine, getRoutine, getRegisteredRoutines } from '../routines';
import type { RoutineDef } from '../types';

describe('routines registry', () => {
  it('defineRoutine returns the same object', () => {
    const def: RoutineDef = { name: 'test_routine_a', run: () => {} };
    expect(defineRoutine(def)).toBe(def);
  });

  it('registerRoutine + getRoutine round-trip', () => {
    const def: RoutineDef = { name: 'test_routine_b', run: () => {} };
    registerRoutine(def);
    expect(getRoutine('test_routine_b')).toBe(def);
  });

  it('getRoutine returns undefined for unknown', () => {
    expect(getRoutine('no_such_routine_xyz')).toBeUndefined();
  });

  it('registerRoutine throws on duplicate', () => {
    const def: RoutineDef = { name: 'test_routine_dup', run: () => {} };
    registerRoutine(def);
    expect(() => registerRoutine(def)).toThrow(/Duplicate routine/);
  });

  it('getRegisteredRoutines lists registered names', () => {
    const before = getRegisteredRoutines();
    const def: RoutineDef = { name: 'test_routine_listed', run: () => {} };
    registerRoutine(def);
    const after = getRegisteredRoutines();
    expect(after).toContain('test_routine_listed');
    expect(after.length).toBe(before.length + 1);
  });
});
