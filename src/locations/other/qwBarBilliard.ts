// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pool ?? 0) < 10) {
    (s as any).billwin = Math.floor(Math.random() * 11) + 0;
  } else {
    (s as any).billwin = Math.floor(Math.random() * 13) + 0;
    if (((s as any).pcs_pool ?? 0) >= 20  &&  ((s as any).pcs_pool ?? 0) < 30) {
      (s as any).billwin = Math.floor(Math.random() * 15) + 0;
    } else {
      (s as any).billwin = Math.floor(Math.random() * 17) + 0;
      if (((s as any).pcs_pool ?? 0) >= 40  &&  ((s as any).pcs_pool ?? 0) < 50) {
        (s as any).billwin = Math.floor(Math.random() * 19) + 0;
      } else {
        (s as any).billwin = Math.floor(Math.random() * 21) + 0;
        if (((s as any).pcs_pool ?? 0) >= 60  &&  ((s as any).pcs_pool ?? 0) < 70) {
          (s as any).billwin = Math.floor(Math.random() * 23) + 0;
        } else {
          (s as any).billwin = Math.floor(Math.random() * 25) + 0;
          if (((s as any).pcs_pool ?? 0) >= 80  &&  ((s as any).pcs_pool ?? 0) < 90) {
            (s as any).billwin = Math.floor(Math.random() * 27) + 0;
          } else {
            (s as any).billwin = Math.floor(Math.random() * 29) + 0;
            if (((s as any).pcs_pool ?? 0) >= 100) {
              (s as any).billwin = Math.floor(Math.random() * 31) + 0;
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const qwBarBilliard: LocationDef = {
  name: 'qwBarBilliard',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
