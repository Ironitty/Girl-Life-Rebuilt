import type { RoutineDef } from './types';

const routineRegistry: Record<string, RoutineDef> = {};

export function defineRoutine<T extends RoutineDef>(r: T): T {
  return r;
}

export function registerRoutine(def: RoutineDef): void {
  if (routineRegistry[def.name]) {
    throw new Error(`Duplicate routine: ${def.name}`);
  }
  routineRegistry[def.name] = def;
}

export function getRoutine(name: string): RoutineDef | undefined {
  return routineRegistry[name];
}

export function getRegisteredRoutines(): string[] {
  return Object.keys(routineRegistry);
}
