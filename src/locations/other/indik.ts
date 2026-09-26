import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'progressbar', 'positive', ((s as any).locArgs?.[1] ?? 0));
  (s as any).ind = ((s as any).result ?? 0);
  return;
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'progressbar', 'negative', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[3] ?? 0));
  (s as any).ind = ((s as any).result ?? 0);
  return;
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'progressbar', 'smooth_positive', ((s as any).locArgs?.[1] ?? 0));
  (s as any).ind = ((s as any).result ?? 0);
  return;
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'progressbar', 'positive', ((s as any).locArgs?.[1] ?? 0));
  (s as any).ind = ((s as any).result ?? 0);
  return;
  (s as any).result = qspFunc(s, 'progressbar', 'positive', ((s as any).locArgs?.[1] ?? 0));
  (s as any).ind = ((s as any).result ?? 0);
  return;
  if (((String(';1;2;3;4;').indexOf(String(';' + (String((s as any).locArgs?.[0] ?? '')) + ';'))) + 1)) {
    if (((s as any).cheatStatusBars ?? 0) === 1) {
      (s as any).indik_text_size = 2;
    } else {
      (s as any).indik_text_size = 3;
    }
    if (((s as any).Enable_statfsize ?? 0) > 0  &&  ((s as any).Enable_statfsize ?? 0) < ((s as any).indik_text_size ?? 0)) {
      (s as any).indik_text_size = ((s as any).Enable_statfsize ?? 0);
    }
    (s as any).indix_counter_increase = 5;
    (s as any).indik_counter = 0;
    (s as any).indik_stop_looping = 0;
    (s as any).ind = '<font face="courier new" size = ' + ((s as any).indik_text_size ?? 0) + '> ';
    (s as any).result = ((s as any).ind ?? 0);
    (s as any).indik_stop_looping = undefined;
    (s as any).indik_counter = undefined;
    (s as any).indik_damage = undefined;
    (s as any).indik_text_size = undefined;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const indik: LocationDef = {
  name: 'indik',
  region: 'other',
  enter: enter,
};
