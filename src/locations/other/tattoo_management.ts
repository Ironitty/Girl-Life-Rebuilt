// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).locArgs?.[1] ?? 0) === 'ankle') {
    (s as any).result = 25;
  } else {
    (s as any).result = 77;
    if (((s as any).locArgs?.[1] ?? 0) === 'ass') {
      (s as any).result = 25;
    } else {
      (s as any).result = 61;
      if (((s as any).locArgs?.[1] ?? 0) === 'belly') {
        (s as any).result = 21;
      } else {
        (s as any).result = 11;
        if (((s as any).locArgs?.[1] ?? 0) === 'chest') {
          (s as any).result = 15;
        } else {
          (s as any).result = 8;
          if (((s as any).locArgs?.[1] ?? 0) === 'hand') {
            (s as any).result = 9;
          } else {
            (s as any).result = 47;
            if (((s as any).locArgs?.[1] ?? 0) === 'lip') {
              (s as any).result = 9;
            } else {
              (s as any).result = 30;
              if (((s as any).locArgs?.[1] ?? 0) === 'pussy') {
                (s as any).result = 53;
              } else {
                (s as any).result = 25;
                if (((s as any).locArgs?.[1] ?? 0) === 'side') {
                  (s as any).result = 23;
                } else {
                  (s as any).result = 32;
                  if (((s as any).locArgs?.[1] ?? 0) === 'under') {
                    (s as any).result = 22;
                  } else {
                    (s as any).result = 51;
                  }
                  return;
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const tattoo_management: LocationDef = {
  name: 'tattoo_management',
  region: 'other',
  enter: enter,
};
