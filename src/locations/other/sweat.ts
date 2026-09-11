import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sweat ?? 0) < 0) {
    (s as any).pcs_sweat = 0;
  }
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    // TODO-QSP: exit
  }
  if (((s as any).deodorant_on ?? 0) === 1) {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) + (((s as any).rand ?? 0)(((s as any).ARGS ?? 0)[1] / 3, 2 * (((s as any).ARGS ?? 0)[1]+1) / 3));
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "sweat" }));
  }
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sweat ?? 0) >= 10) {
    (s as any).pcs_sweat = Math.floor(Math.random() * 10) + 0;
  }
  qspCall(s, 'sweat', 'remove_deo');
  scene.build();
}

function enterDeo(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).deodorant_on ?? 0))) {
    (s as any).deodorant_on = 1;
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (2);
  }
  (s as any).deodorant_time = ((s as any).totminut ?? 0) + 24 * 60;
  scene.build();
}

function enterRemoveDeo(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'add':
      enterAdd(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'deo':
      enterDeo(s, scene);
      break;
    case 'remove_deo':
      enterRemoveDeo(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sweat: LocationDef = {
  name: 'sweat',
  region: 'other',
  enter: enter,
};
