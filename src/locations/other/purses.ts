// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
    (s as any).result = 20;
  } else {
    (s as any).result = 60;
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
      (s as any).result = 40;
    } else {
      (s as any).result = 40;
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'flamingos') {
        (s as any).result = 20;
      } else {
        (s as any).result = 60;
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
          (s as any).result = 20;
        } else {
          (s as any).result = 20;
          if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
            (s as any).result = 60;
          } else {
            (s as any).result = 40;
          }
          return;
        }
      }
    }
  }
  scene.build();
}

export const purses: LocationDef = {
  name: 'purses',
  region: 'other',
  enter: enter,
};
