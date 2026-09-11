// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimaRevenge ?? 0) === 3) {
    // TODO-QSP: gt 'dimaRevenge', 3
  } else {
    if (((s as any).dimaRevenge ?? 0) === 4) {
      if ((!((s as any).dimaRevChoice ?? 0))) {
        // TODO-QSP: gt 'dimaRevenge', 4
      } else {
        if (((s as any).dimaRevChoice ?? 0) === 2) {
          // TODO-QSP: gt 'dimaRevenge', 4, 'lunch'
        } else {
          if (((s as any).dimaRevChoice ?? 0) === 3) {
            // TODO-QSP: gt 'dimaRevenge', 4
          }
        }
      }
    } else {
      if (((s as any).dimaRevenge ?? 0) === 5) {
        if (((s as any).dimaRevChoice ?? 0) === 1) {
          // TODO-QSP: gt 'dimaRevenge', 5, 'lunch'
        } else {
          if (((s as any).dimaRevChoice ?? 0) === 5) {
            // TODO-QSP: gt 'dimaRevenge', 5, 'afterlunch'
          } else {
            if (((s as any).dimaRevChoice ?? 0) === 6) {
              // TODO-QSP: gt 'dimaRevenge', 5
            }
          }
        }
      } else {
        if (((s as any).dimaRevenge ?? 0) === 6) {
          if (((s as any).dimaRevChoice ?? 0) === 1) {
            // TODO-QSP: gt 'dimaRevenge', 6, 'lunch'
          }
        }
      }
    }
  }
  return;
  scene.build();
}

export const dimaRevenge: LocationDef = {
  name: 'dimaRevenge',
  title: 'Classroom',
  region: 'other',
  enter: enter,
};
