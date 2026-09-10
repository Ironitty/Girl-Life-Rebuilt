// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).roll_3d = Math.floor(Math.random() * 3) + 1;
  (s as any).roll_2d = Math.floor(Math.random() * 2) + 1;
  if (((s as any).dick ?? 0) <= 8) {
    if (((s as any).roll_3d ?? 0) === 1) {
    }
    if (((s as any).roll_3d ?? 0) === 2) {
    }
    if (((s as any).roll_3d ?? 0) === 3) {
    }
  } else {
    if (((s as any).roll_2d ?? 0) === 1) {
    }
    if (((s as any).roll_2d ?? 0) === 2) {
    }
    if (((s as any).dick ?? 0) <= 14) {
      if (((s as any).roll_3d ?? 0) === 1) {
      }
      if (((s as any).roll_3d ?? 0) === 2) {
      }
      if (((s as any).roll_3d ?? 0) === 3) {
      }
    } else {
      if (((s as any).roll_2d ?? 0) === 1) {
      }
      if (((s as any).roll_2d ?? 0) === 2) {
      }
      if (((s as any).dick ?? 0) <= 20) {
        if (((s as any).roll_2d ?? 0) === 1) {
        }
        if (((s as any).roll_2d ?? 0) === 2) {
        }
      } else {
        if (((s as any).roll_2d ?? 0) === 1) {
        }
        if (((s as any).roll_2d ?? 0) === 2) {
        }
        if (((s as any).dick ?? 0) >= 24) {
          if (((s as any).roll_3d ?? 0) === 1) {
          }
          if (((s as any).roll_3d ?? 0) === 2) {
          }
          if (((s as any).roll_3d ?? 0) === 3) {
          }
        }
      }
    }
  }
  scene.build();
}

export const dinSex: LocationDef = {
  name: 'dinSex',
  region: 'other',
  enter: enter,
};
