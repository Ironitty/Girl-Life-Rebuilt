// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
    (s as any).result = 72;
  } else {
    (s as any).result = 8;
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto') {
      (s as any).result = 43;
    } else {
      (s as any).result = 79;
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
        (s as any).result = 37;
      } else {
        (s as any).result = 82;
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious') {
          (s as any).result = 59;
        }
        return;
      }
    }
  }
  scene.build();
}

export const panties: LocationDef = {
  name: 'panties',
  region: 'other',
  enter: enter,
};
