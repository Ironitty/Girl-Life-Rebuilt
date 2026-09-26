import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetNickname(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'rusMale') {
    (s as any).result = qspFunc(s, 'npcrnamefile', 'get_nickname', qspFunc(s, 'npcrnamefile', 'rusMale'));
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'rusFemale') {
      (s as any).result = qspFunc(s, 'npcrnamefile', 'get_nickname', qspFunc(s, 'npcrnamefile', 'rusFemale'));
    } else {
      (s as any).result = ((s as any).locArgs?.[1] ?? 0);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_nickname':
      enterGetNickname(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npcrnamefile: LocationDef = {
  name: 'npcrnamefile',
  region: 'other',
  enter: enter,
};
