// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'bomba') {
    (s as any).result = 40;
  } else {
    (s as any).result = 40;
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      (s as any).result = 40;
    } else {
      (s as any).result = 120;
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto') {
        (s as any).result = 40;
      } else {
        (s as any).result = 30;
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
          (s as any).result = 140;
        } else {
          (s as any).result = 80;
        }
        return;
      }
    }
  }
  scene.build();
}

export const shoes: LocationDef = {
  name: 'shoes',
  region: 'other',
  enter: enter,
};
