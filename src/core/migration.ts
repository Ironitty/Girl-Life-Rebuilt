import type { GameState } from './types';

export const CURRENT_SCHEMA_VERSION = 2;

export interface SaveEnvelope {
  schemaVersion: number;
  savedAt: number;
  slot: number;
}

export type MigrationFn = (data: Record<string, unknown>) => Record<string, unknown>;

interface Migration {
  from: number;
  to: number;
  migrate: MigrationFn;
}

const migrations: Migration[] = [
  { from: 1, to: 2, migrate: (d) => {
    if (d.event_isPlayer === undefined) d.event_isPlayer = {};
    const list = (d.events_list as string[]) ?? [];
    let maxId = 0;
    for (const id of list) {
      const m = /^evt_(\d+)$/.exec(id);
      if (m) {
        const n = parseInt(m[1], 10);
        if (n > maxId) maxId = n;
      }
    }
    const existing = typeof d.nextEventId === 'number' ? d.nextEventId : 1;
    d.nextEventId = Math.max(existing, maxId + 1);
    return d;
  } },
];

export class SaveError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SaveError';
  }
}

const REQUIRED_FIELDS: (keyof GameState)[] = [
  'loc',
  'locArg',
  'daystart',
  'money',
];

export function parseSave(json: string): Record<string, unknown> {
  let data: unknown;
  try {
    data = JSON.parse(json);
  } catch {
    throw new SaveError('Invalid save format: could not parse JSON.');
  }
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    throw new SaveError('Invalid save format: expected a JSON object.');
  }
  return data as Record<string, unknown>;
}

export function validateEnvelope(data: Record<string, unknown>): SaveEnvelope {
  const sv = data.schemaVersion;
  if (typeof sv !== 'number' || !Number.isInteger(sv) || sv < 1) {
    throw new SaveError('Invalid save format: missing or invalid schemaVersion.');
  }
  const savedAt = data.savedAt;
  if (typeof savedAt !== 'number') {
    throw new SaveError('Invalid save format: missing savedAt.');
  }
  const slot = data.slot;
  if (typeof slot !== 'number' || !Number.isInteger(slot) || slot < 0) {
    throw new SaveError('Invalid save format: missing or invalid slot.');
  }
  return { schemaVersion: sv, savedAt, slot };
}

export function runMigrations(data: Record<string, unknown>, fromVersion: number): Record<string, unknown> {
  if (fromVersion > CURRENT_SCHEMA_VERSION) {
    throw new SaveError(`Unsupported save version: ${fromVersion}. Save is newer than current schema v${CURRENT_SCHEMA_VERSION}.`);
  }

  let current = { ...data };
  let version = fromVersion;

  while (version < CURRENT_SCHEMA_VERSION) {
    const migration = migrations.find(m => m.from === version && m.to === version + 1);
    if (!migration) {
      throw new SaveError(`Unsupported save version: ${version}. No migration path to v${CURRENT_SCHEMA_VERSION}.`);
    }
    current = migration.migrate(current);
    version++;
  }

  current.schemaVersion = CURRENT_SCHEMA_VERSION;
  return current;
}

export function validateGameState(data: Record<string, unknown>): Partial<GameState> {
  for (const field of REQUIRED_FIELDS) {
    if (!(field in data)) {
      throw new SaveError(`Corrupted data: missing required field "${field}".`);
    }
  }
  if (typeof data.loc !== 'string' || data.loc.length === 0) {
    throw new SaveError('Corrupted data: invalid loc field.');
  }
  return data as Partial<GameState>;
}

export function loadSave(json: string): Partial<GameState> {
  const parsed = parseSave(json);
  const envelope = validateEnvelope(parsed);
  const migrated = runMigrations(parsed, envelope.schemaVersion);
  const state = validateGameState(migrated);
  const result = { ...state } as Record<string, unknown>;
  delete result.schemaVersion;
  delete result.savedAt;
  delete result.slot;
  return result as Partial<GameState>;
}

export function formatSaveError(e: unknown): string {
  if (e instanceof SaveError) {
    return `This save file could not be loaded.\n\nReason:\n${e.message}`;
  }
  return `This save file could not be loaded.\n\nReason:\nUnexpected error: ${e instanceof Error ? e.message : String(e)}`;
}
