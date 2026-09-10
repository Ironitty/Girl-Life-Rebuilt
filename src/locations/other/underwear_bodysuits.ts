// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'lusso') {
    (s as any).result = 90;
  } else {
    (s as any).result = 50;
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious') {
      (s as any).result = 40;
    } else {
      (s as any).result = 100;
    }
    return;
  }
  scene.build();
}

export const underwear_bodysuits: LocationDef = {
  name: 'underwear_bodysuits',
  region: 'other',
  enter: enter,
};
