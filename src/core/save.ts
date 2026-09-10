import type { GameState } from './types';
import { CURRENT_SCHEMA_VERSION, loadSave, formatSaveError } from './migration';

const DB_NAME = 'girl_life_saves';
const DB_VERSION = 1;
const STORE_NAME = 'saves';
const SCHEMA_VERSION = CURRENT_SCHEMA_VERSION;

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'slot' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  return dbPromise;
}

export async function saveGame(slot: number, state: GameState): Promise<void> {
  const db = await getDB();
  const json = serializeSave(state, slot);

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put({ slot, json });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function loadGame(slot: number): Promise<Partial<GameState> | null> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).get(slot);
    req.onsuccess = () => {
      const data = req.result as { slot: number; json: string } | undefined;
      if (data) {
        try {
          resolve(deserializeSave(data.json));
        } catch (e) {
          reject(new Error(formatSaveError(e)));
        }
      } else {
        resolve(null);
      }
    };
    req.onerror = () => reject(req.error);
  });
}

export async function listSaves(): Promise<{ slot: number; savedAt: number; loc: string; daystart: number }[]> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).getAll();
    req.onsuccess = () => {
      const saves = (req.result ?? []).map((s: { slot: number; json: string }) => {
        const parsed = JSON.parse(s.json);
        return {
          slot: s.slot,
          savedAt: parsed.savedAt as number,
          loc: parsed.loc as string,
          daystart: parsed.daystart as number,
        };
      });
      resolve(saves.sort((a, b) => a.slot - b.slot));
    };
    req.onerror = () => reject(req.error);
  });
}

export async function deleteSave(slot: number): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(slot);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export function serializeSave(state: GameState, slot: number = 0): string {
  const data: Record<string, unknown> = {};
  const exclude = new Set(['stateStack', 'scene', 'navigationVersion']);
  for (const key of Object.keys(state)) {
    if (!exclude.has(key)) {
      data[key] = (state as unknown as Record<string, unknown>)[key];
    }
  }
  data.savedAt = Date.now();
  data.slot = slot;
  data.schemaVersion = SCHEMA_VERSION;
  return JSON.stringify(data, null, 2);
}

export function deserializeSave(json: string): Partial<GameState> {
  return loadSave(json);
}

export { formatSaveError };
