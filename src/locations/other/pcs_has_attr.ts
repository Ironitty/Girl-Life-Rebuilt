// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_buttsize ?? 0) < 15) {
    (s as any).result = 1;
  }
  return;
  if (((s as any).locArgs?.[0] ?? 0) === 'body_ass_average') {
    if (((s as any).pcs_buttsize ?? 0) >= 15  &&  ((s as any).pcs_buttsize ?? 0) < 30) {
      (s as any).result = 1;
    }
    return;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'body_ass_big') {
      if (((s as any).pcs_buttsize ?? 0) >= 30  &&  ((s as any).pcs_buttsize ?? 0) < 45) {
        (s as any).result = 1;
      }
      return;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'body_ass_heart') {
        if (((s as any).pcs_buttsize ?? 0) >= 45  &&  ((s as any).pcs_buttsize ?? 0) < 60) {
          (s as any).result = 1;
        }
        return;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'body_ass_bubble') {
          if (((s as any).pcs_buttsize ?? 0) >= 60) {
            (s as any).result = 1;
          }
          return;
        }
      }
    }
  }
  scene.build();
}

export const pcs_has_attr: LocationDef = {
  name: 'pcs_has_attr',
  region: 'other',
  enter: enter,
};
