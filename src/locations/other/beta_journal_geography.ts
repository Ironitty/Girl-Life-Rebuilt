// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGeoPavlovsk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '58_estate') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0)=== 'industrial') {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'park') {
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'geo_pavlovsk':
      enterGeoPavlovsk(s, scene);
      break;
    default:
      enterInit(s, scene);
      break;
  }
}

export const beta_journal_geography: LocationDef = {
  name: 'beta_journal_geography',
  region: 'other',
  enter: enter,
};
