import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['stat_display'] = 1;
  if (((s as any).sleepVars ?? 0)?.['events_active'] === 1) {
    if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['events_done'] = 0;
    if (((s as any).vomit ?? 0)?.['morning_sick'] === 1  ||  ((s as any).vomit ?? 0)?.['hangover'] === 1  ||  ((s as any).vomit ?? 0)?.['unlucky'] === 1) {
      // TODO-QSP: $sleep_events[] = 'gs ''bed_get_out_events'', ''vomit'' '
    }
    scene.actions([{ label: 'Continue', goto: ['bed_get_out_events', 'mod_sleepevents'] }]);
  }
  scene.actions([{ label: 'Continue', goto: ['bed_get_out_events', 'continue'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterModSleepevents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'bed_get_out_events', 'mod_sleepevents');
  scene.actions([{ label: 'Continue', goto: ['bed_get_out_events', 'event_handler'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_done'] < 1) {
    if (Object.keys((s as any).sleep_events_priority ?? {}).length > 0) {
      scene.actions([{ label: 'Continue', goto: ['bed_get_out_events', 'event_handler2', '\'priority\''] }]);
    } else {
      if (Object.keys((s as any).sleep_events ?? {}).length > 0) {
        scene.actions([{ label: 'Continue', goto: ['bed_get_out_events', 'event_handler2'] }]);
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['bed_get_out_events', 'continue'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler2(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['events_done'] = ((s as any).sleepVars['events_done'] ?? 0) + (1);
  if (((s as any).locArgs?.[1] ?? 0) === 'priority') {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('sleep_events_priority')-1);
  } else {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('sleep_events')-1);
  }
  scene.actions([{ label: 'Continue', goto: ['bed_get_out_events', 'event_end'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['bed_get_out_events', 'event_handler'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['events_done'] = 0;
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['stat_display'] = 0;
  (s as any).inSleep = 0;
  // TODO-QSP: end
  scene.build();
}

function enterContinue(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['events_done'] = 0;
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['stat_display'] = 0;
  scene.actions([{ label: 'Continue', goto: ['bed_get_out', 'end'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterVomit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bed_get_out_events', 'exit');
  scene.actions([{ label: 'Continue', goto: ['home_activity', 'vomiting_exit'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'mod_sleepevents':
      enterModSleepevents(s, scene);
      break;
    case 'event_handler':
      enterEventHandler(s, scene);
      break;
    case 'event_handler2':
      enterEventHandler2(s, scene);
      break;
    case 'event_end':
      enterEventEnd(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'continue':
      enterContinue(s, scene);
      break;
    case 'vomit':
      enterVomit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bed_get_out_events: LocationDef = {
  name: 'bed_get_out_events',
  region: 'other',
  enter: enter,
};
