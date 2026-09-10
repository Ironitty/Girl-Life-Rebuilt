// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = Math.floor(Math.random() * 3) + 0;
  if ((!((s as any).temp ?? 0))) {
    if (((s as any).fame ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_kickboxing'] >= (Math.floor(Math.random() * 501) + 500)) {
      (s as any).fame['activity'] = 'kickboxing';
      (s as any).fame['noun'] = 'kickboxer';
      // TODO-QSP: gt 'fame_events', 'boy', $ARGS[1]
    }
  } else {
    if (((s as any).fame ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_running'] >= (Math.floor(Math.random() * 501) + 500)) {
      (s as any).fame['activity'] = 'running';
      (s as any).fame['noun'] = 'runner';
      // TODO-QSP: gt 'fame_events', 'boy', $ARGS[1]
    }
    if (((s as any).temp ?? 0) === 2) {
      if (((s as any).fame ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_music'] >= (Math.floor(Math.random() * 501) + 500)) {
        (s as any).fame['activity'] = 'singing';
        (s as any).fame['noun'] = 'singer';
        // TODO-QSP: gt 'fame_events', 'boy', $ARGS[1]
      }
    } else {
      if (((s as any).fame ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_kickboxing'] >= (Math.floor(Math.random() * 501) + 500)) {
        (s as any).fame['activity'] = 'kickboxing';
        (s as any).fame['noun'] = 'kickboxer';
        // TODO-QSP: gt 'fame_events', 'girl', $ARGS[1]
      }
      if (((s as any).temp ?? 0) === 4) {
        if (((s as any).fame ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_running'] >= (Math.floor(Math.random() * 501) + 500)) {
          (s as any).fame['activity'] = 'running';
          (s as any).fame['noun'] = 'runner';
          // TODO-QSP: gt 'fame_events', 'girl', $ARGS[1]
        }
      } else {
        if (((s as any).fame ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_music'] >= (Math.floor(Math.random() * 501) + 500)) {
          (s as any).fame['activity'] = 'singing';
          (s as any).fame['noun'] = 'singer';
          // TODO-QSP: gt 'fame_events', 'girl', $ARGS[1]
        }
      }
    }
  }
  scene.build();
}

export const fame_events: LocationDef = {
  name: 'fame_events',
  region: 'other',
  enter: enter,
};
