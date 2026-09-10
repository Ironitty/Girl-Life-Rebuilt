// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
    (s as any).result = 41;
  } else {
    (s as any).result = 8;
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto') {
      (s as any).result = 27;
    } else {
      (s as any).result = 42;
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
        (s as any).result = 19;
      } else {
        (s as any).result = 33;
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious') {
          (s as any).result = 37;
        }
        return;
      }
    }
  }
  scene.build();
}

export const bras: LocationDef = {
  name: 'bras',
  region: 'other',
  enter: enter,
};
