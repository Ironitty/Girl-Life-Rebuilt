import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIntSqrt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] === 0) {
    (s as any).result = 0;
    return;
  }
  (s as any).sqrtnum = qspUntranslated(s, "ARGS[1]", { location: "math" });
  (s as any).sqrtn = 1 + ((s as any).sqrtnum ?? 0) / 2;
  (s as any).sqrtn1 = (((s as any).sqrtn ?? 0) + ((s as any).sqrtnum ?? 0) / ((s as any).sqrtn ?? 0)) / 2;
  // TODO-QSP: :sqrtloop
  if (((s as any).sqrtn1 ?? 0) < ((s as any).sqrtn ?? 0)) {
    (s as any).sqrtn = ((s as any).sqrtn1 ?? 0);
    (s as any).sqrtn1 = (((s as any).sqrtn ?? 0) + ((s as any).sqrtnum ?? 0) / ((s as any).sqrtn ?? 0)) / 2;
    // TODO-QSP: jump 'sqrtloop'
  }
  (s as any).result = ((s as any).sqrtn ?? 0);
  return;
  scene.build();
}

function enterIntDivide(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[2] === 0) {
    return;
  }
  (s as any).result = (((s as any).ARGS ?? 0)[1] + (((s as any).ARGS ?? 0)[2] / 2)) / ((s as any).ARGS ?? 0)[2];
  return;
  scene.build();
}

function enterIntRound(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[2] === 0) {
    return;
  }
  (s as any).result = ((s as any).ARGS ?? 0)[2] * qspFunc(s, 'math', 'int_divide', qspUntranslated(s, "ARGS[1]", { location: "math" }), qspUntranslated(s, "ARGS[2]", { location: "math" }));
  return;
  scene.build();
}

function enterIntClamp(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  return;
  scene.build();
}

function enterIntPower(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[2] === 0) {
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
    if (((s as any).ARGS ?? 0)[2] === 1) {
      (s as any).result = qspUntranslated(s, "ARGS[1]", { location: "math" });
    } else {
      (s as any).result = ((s as any).ARGS ?? 0)[1] * ((s as any).ARGS ?? 0)[1];
      if (((s as any).ARGS ?? 0)[2] === 3) {
        (s as any).result = ((s as any).ARGS ?? 0)[1] * ((s as any).ARGS ?? 0)[1] * ((s as any).ARGS ?? 0)[1];
      } else {
        (s as any).result = qspFunc(s, 'math', 'int_power', ((s as any).ARGS ?? 0)[1] * ((s as any).ARGS ?? 0)[1], ((s as any).ARGS ?? 0)[2] / 2);
        (s as any).result = ((s as any).ARGS ?? 0)[1] * qspFunc(s, 'math', 'int_power', ((s as any).ARGS ?? 0)[1] * ((s as any).ARGS ?? 0)[1], ((s as any).ARGS ?? 0)[2] / 4);
      }
      return;
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'int_sqrt':
      enterIntSqrt(s, scene);
      break;
    case 'int_divide':
      enterIntDivide(s, scene);
      break;
    case 'int_round':
      enterIntRound(s, scene);
      break;
    case 'int_clamp':
      enterIntClamp(s, scene);
      break;
    case 'int_power':
      enterIntPower(s, scene);
      break;
    default:
      enterIntSqrt(s, scene);
      break;
  }
}

export const math: LocationDef = {
  name: 'math',
  region: 'other',
  enter: enter,
};
