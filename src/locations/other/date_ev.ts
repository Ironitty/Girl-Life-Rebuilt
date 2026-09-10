// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).ARGS[1] = ((s as any).npcID ?? 0);
  }
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    (s as any).ARGS[2] = ((s as any).npc_date_type ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  }
  if (((s as any).locArgs?.[2] ?? 0) === 'movie_date') {
    scene.actions([{ label: 'Continue', goto: ['date_movie', 'start'] }]);
  } else {
    // TODO-QSP: gt 'date_casual_meal', 'start', 'separate'
    if (((s as any).locArgs?.[2] ?? 0) === 'netflix_chill') {
      // TODO-QSP: gt 'date_chill', 'knock_start', $ARGS[1]
    }
  }
  scene.build();
}

export const date_ev: LocationDef = {
  name: 'date_ev',
  title: '"Depends. When?"',
  region: 'other',
  enter: enter,
};
