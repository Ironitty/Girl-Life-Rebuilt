import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 1;
  (s as any).sleep_events = undefined;
  (s as any).sleep_events_priority = undefined;
  if (((s as any).sleepVars ?? 0)?.['events_active'] === 1) {
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
    if (((s as any).vomit ?? 0)?.['morning_sick'] === 1  ||  ((s as any).vomit ?? 0)?.['hangover'] === 1  ||  ((s as any).vomit ?? 0)?.['unlucky'] === 1) {
      (s as any).sleep_events = [...((s as any).sleep_events ?? []), 'gs \'bed_get_out_events\', \'vomit\' '];
    }
    qspGoto(s, 'bed_get_out_events', 'mod_sleepevents');
  }
  qspGoto(s, 'bed_get_out_events', 'continue');
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 1;
  (s as any).sleep_events = undefined;
  (s as any).sleep_events_priority = undefined;
  if (((s as any).sleepVars ?? 0)?.['events_active'] === 1) {
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
    if (((s as any).vomit ?? 0)?.['morning_sick'] === 1  ||  ((s as any).vomit ?? 0)?.['hangover'] === 1  ||  ((s as any).vomit ?? 0)?.['unlucky'] === 1) {
      (s as any).sleep_events = [...((s as any).sleep_events ?? []), 'gs \'bed_get_out_events\', \'vomit\' '];
    }
    qspGoto(s, 'bed_get_out_events', 'mod_sleepevents');
  }
  qspGoto(s, 'bed_get_out_events', 'continue');
  scene.build();
}

function enterModSleepevents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'bed_get_out_events', 'mod_sleepevents');
  qspGoto(s, 'bed_get_out_events', 'event_handler');
  scene.build();
}

function enterEventHandler(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_done'] < 1) {
    if (Object.keys((s as any).sleep_events_priority ?? {}).length > 0) {
      qspGoto(s, 'bed_get_out_events', 'event_handler2', 'priority');
    } else {
      if (Object.keys((s as any).sleep_events ?? {}).length > 0) {
        qspGoto(s, 'bed_get_out_events', 'event_handler2');
      }
    }
  }
  qspGoto(s, 'bed_get_out_events', 'continue');
  scene.build();
}

function enterEventHandler2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = ((s as any).sleepVars['events_done'] ?? 0) + (1);
  if (String((s as any).locArgs?.[1] ?? '') === 'priority') {
    (s as any).temp_slev_id = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
    (s as any).temp_sleep_event_chosen = (((s as any).sleep_events_priority ?? 0)?.[String((s as any).temp_slev_id ?? 0)] ?? 0);
    (s as any).sleep_events_priority = undefined;
  } else {
    (s as any).temp_slev_id = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
    (s as any).temp_sleep_event_chosen = (((s as any).sleep_events ?? 0)?.[String((s as any).temp_slev_id ?? 0)] ?? 0);
    (s as any).sleep_events = undefined;
  }
  (s as any).temp_slev_id = undefined;
  qspFunc(s, 'temp_sleep_event_chosen');
  qspGoto(s, 'bed_get_out_events', 'event_end');
  scene.build();
}

function enterEventEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sleep_event_chosen = undefined;
  qspGoto(s, 'bed_get_out_events', 'event_handler');
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 0;
  (s as any).sleep_events = undefined;
  (s as any).sleep_events_priority = undefined;
  (s as any).temp_slev_id = undefined;
  (s as any).temp_sleep_event_chosen = undefined;
  (s as any).inSleep = 0;
  scene.build();
}

function enterContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 0;
  (s as any).sleep_events = undefined;
  (s as any).sleep_events_priority = undefined;
  (s as any).temp_slev_id = undefined;
  (s as any).temp_sleep_event_chosen = undefined;
  qspGoto(s, 'bed_get_out', 'end');
  scene.build();
}

function enterVomit(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'home_activity', 'vomiting_exit');
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
