import type { GameState, SceneState } from './types';

export interface DebugSnapshot {
  index: number;
  location: string;
  action: string;
  timestamp: number;
  state: GameState;
  scene: SceneState;
}

const MAX_SNAPSHOTS = 100;
const IS_DEV = import.meta.env.DEV;

let undoStack: DebugSnapshot[] = [];
let redoStack: DebugSnapshot[] = [];
let lastSnapshot: DebugSnapshot | null = null;
let counter = 0;

function snapshotScene(scene: SceneState): SceneState {
  return {
    ...scene,
    curActs: [...scene.curActs],
  };
}

function cloneState(state: GameState): GameState {
  const { scene, ...rest } = state;
  return { ...structuredClone(rest), scene: snapshotScene(scene) };
}

export function pushSnapshot(state: GameState, location: string, action: string): void {
  const cloned = cloneState(state);
  const snap: DebugSnapshot = {
    index: counter++,
    location,
    action,
    timestamp: Date.now(),
    state: cloned,
    scene: cloned.scene,
  };
  lastSnapshot = snap;
  if (IS_DEV) {
    undoStack.push(snap);
    if (undoStack.length > MAX_SNAPSHOTS) undoStack.shift();
    redoStack = [];
    expose();
  }
}

export function canUndo(): boolean {
  return IS_DEV && undoStack.length > 0;
}

export function canRedo(): boolean {
  return IS_DEV && redoStack.length > 0;
}

export function undo(currentState: GameState): GameState | null {
  if (!IS_DEV || undoStack.length === 0) return null;
  const snap = undoStack.pop()!;
  const cloned = cloneState(currentState);
  redoStack.push({
    index: counter++,
    location: snap.location,
    action: snap.action,
    timestamp: Date.now(),
    state: cloned,
    scene: cloned.scene,
  });
  expose();
  return snap.state;
}

export function redo(currentState: GameState): GameState | null {
  if (!IS_DEV || redoStack.length === 0) return null;
  const snap = redoStack.pop()!;
  const cloned = cloneState(currentState);
  undoStack.push({
    index: counter++,
    location: snap.location,
    action: snap.action,
    timestamp: Date.now(),
    state: cloned,
    scene: cloned.scene,
  });
  expose();
  return snap.state;
}

export function restoreLast(): GameState | null {
  if (!lastSnapshot) return null;
  return lastSnapshot.state;
}

export function getHistory(): DebugSnapshot[] {
  return IS_DEV ? [...undoStack] : [];
}

function expose(): void {
  if (typeof window !== 'undefined') {
    (window as any).__debugHistory = undoStack.map(s => ({
      index: s.index,
      location: s.location,
      action: s.action,
      timestamp: s.timestamp,
    }));
  }
}

export function clearHistory(): void {
  undoStack = [];
  redoStack = [];
  lastSnapshot = null;
  expose();
}
