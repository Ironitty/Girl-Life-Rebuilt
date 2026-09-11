// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['gameover'] === 0) {
    // TODO-QSP: gt 'gameover', 'screen', '<<ARGS[1]>>'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'force') {
    // TODO-QSP: gt 'gameover', 'screen', '<<ARGS[1]>>'
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check':
      enterCheck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gameover: LocationDef = {
  name: 'gameover',
  title: 'GAME OVER',
  region: 'other',
  enter: enter,
};
