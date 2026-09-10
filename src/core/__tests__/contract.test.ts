import { describe, it, expect, vi } from 'vitest';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

vi.mock('../stats', () => ({ computeStats: vi.fn() }));
vi.mock('../loca', () => ({ loca: vi.fn() }));
vi.mock('../../systems/calendar', async () => {
  const actual = await vi.importActual<typeof import('../../systems/calendar')>('../../systems/calendar');
  return { ...actual, checkReminders: vi.fn(() => []) };
});

import type { GameState } from '../types';
import { getRegisteredLocations, getLocation, goto } from '../location';
import { initialState } from '../store';
import { addEvent, removeEvent } from '../../systems/calendar';
import '../../locations/auto-register';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../../../');

function createTestState(): GameState {
  return JSON.parse(JSON.stringify(initialState));
}

function hasNaN(obj: unknown): boolean {
  if (typeof obj === 'number') return Number.isNaN(obj);
  if (Array.isArray(obj)) return obj.some(hasNaN);
  if (obj !== null && typeof obj === 'object') {
    return Object.values(obj).some(hasNaN);
  }
  return false;
}

const locs = getRegisteredLocations();
const registered = new Set(locs);
const missingGoto: string[] = [];
const missingCall: string[] = [];
const stubMissingGoto: string[] = [];
const stubMissingCall: string[] = [];

for (const name of locs) {
  const def = getLocation(name);
  if (def?.component) continue;
  const isStub = !def?.enter;
  try {
    const s = createTestState();
    goto(s, name, '');
    for (const act of s.scene.curActs) {
      if (act.goto && !registered.has(act.goto[0])) {
        (isStub ? stubMissingGoto : missingGoto).push(`${name} → ${act.goto[0]}`);
      }
      if (act.call && !registered.has(act.call[0])) {
        (isStub ? stubMissingCall : missingCall).push(`${name} → ${act.call[0]}`);
      }
    }
  } catch { /* component or enter error handled per-location below */ }
}

describe('Location contract tests', () => {
  it('registry has locations', () => {
    expect(locs.length).toBeGreaterThan(0);
  });

  it('location names are unique', () => {
    expect(new Set(locs).size).toBe(locs.length);
  });

  for (const name of locs) {
    const def = getLocation(name);
    const isComponent = !!def?.component;

    describe(name, () => {
      it('has a definition', () => {
        expect(def).toBeDefined();
      });

      if (isComponent) {
        it('is component-based (scene tests skipped)', () => {
          expect(def!.component).toBeDefined();
        });
      } else {
        it('enters without throwing', () => {
          const s = createTestState();
          expect(() => goto(s, name, '')).not.toThrow();
        });

        it('builds a scene', () => {
          const s = createTestState();
          goto(s, name, '');
          expect(s.scene).toBeDefined();
          expect(typeof s.scene.mainText).toBe('string');
          expect(Array.isArray(s.scene.curActs)).toBe(true);
        });

        it('actions have labels', () => {
          const s = createTestState();
          goto(s, name, '');
          for (const act of s.scene.curActs) {
            expect(act.label, `action in ${name} has no label`).toBeTruthy();
          }
        });

        it('no NaN in state after enter', () => {
          const s = createTestState();
          goto(s, name, '');
          expect(hasNaN(s), `NaN found in state after entering ${name}`).toBe(false);
        });

        it('background asset exists', () => {
          if (def?.background && def.enter) {
            const bgPath = join(ROOT, def.background);
            expect(existsSync(bgPath), `background "${def.background}" not found`).toBe(true);
          }
        });
      }
    });
  }

  it('goto targets are registered (real locations)', () => {
    expect(missingGoto, `Unregistered goto targets (${missingGoto.length}):\n${missingGoto.join('\n')}`).toEqual([]);
  });

  it('call targets are registered (real locations)', () => {
    expect(missingCall, `Unregistered call targets (${missingCall.length}):\n${missingCall.join('\n')}`).toEqual([]);
  });

  it('stub goto targets (soft)', () => {
    if (stubMissingGoto.length > 0) {
      console.warn(`Unregistered stub goto targets (${stubMissingGoto.length}):\n${stubMissingGoto.slice(0, 10).join('\n')}${stubMissingGoto.length > 10 ? `\n... and ${stubMissingGoto.length - 10} more` : ''}`);
    }
  });

  it('initialState is structuredClone-able', () => {
    expect(() => structuredClone(initialState)).not.toThrow();
  });

  it('cal_player_event_count stays in sync with event_isPlayer', () => {
    const s = createTestState();

    addEvent(s, { title: 'A', daystart: 1, startTs: 0, durationTs: 1, allDay: false, color: '#fff', recur: 'none', isPlayerEvent: true });
    addEvent(s, { title: 'B', daystart: 1, startTs: 100, durationTs: 1, allDay: false, color: '#fff', recur: 'none', isPlayerEvent: false });
    addEvent(s, { title: 'C', daystart: 1, startTs: 200, durationTs: 1, allDay: false, color: '#fff', recur: 'none', isPlayerEvent: true });
    expect(s.cal_player_event_count).toBe(2);

    const ids = [...s.events_list];
    removeEvent(s, ids[0]);
    expect(s.cal_player_event_count).toBe(1);

    removeEvent(s, ids[1]);
    expect(s.cal_player_event_count).toBe(1);

    removeEvent(s, ids[2]);
    expect(s.cal_player_event_count).toBe(0);
  });
});
