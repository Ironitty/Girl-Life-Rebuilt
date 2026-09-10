// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CoatPrice ~ 2000 * (20 + CoatQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 3: 2300
  // TODO-QSP: 4: 2400
  // TODO-QSP: 5: 2500
  // TODO-QSP: CoatQuality ranges from 3 to 5, please avoid adding too many 5s
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CoatQuality = 3;
    (s as any).CoatStrength = 300000;
    (s as any).CoatWarm = 1;
    (s as any).CoatPrice = 2300;
  } else {
    (s as any).CoatQuality = 4;
    (s as any).CoatStrength = 350000;
    (s as any).CoatWarm = 3;
    (s as any).CoatPrice = 2400;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CoatQuality = 4;
      (s as any).CoatStrength = 350000;
      (s as any).CoatWarm = 2;
      (s as any).CoatPrice = 2400;
    } else {
      (s as any).CoatQuality = 3;
      (s as any).CoatStrength = 300000;
      (s as any).CoatWarm = 1;
      (s as any).CoatPrice = 2300;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CoatQuality = 4;
        (s as any).CoatStrength = 350000;
        (s as any).CoatWarm = 1;
        (s as any).CoatPrice = 2400;
      } else {
        (s as any).CoatQuality = 3;
        (s as any).CoatStrength = 300000;
        (s as any).CoatWarm = 2;
        (s as any).CoatPrice = 2300;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CoatQuality = 3;
          (s as any).CoatStrength = 300000;
          (s as any).CoatWarm = 1;
          (s as any).CoatPrice = 2300;
        } else {
          (s as any).CoatQuality = 5;
          (s as any).CoatStrength = 400000;
          (s as any).CoatWarm = 1;
          (s as any).CoatPrice = 2500;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CoatQuality = 3;
            (s as any).CoatStrength = 300000;
            (s as any).CoatWarm = 2;
            (s as any).CoatPrice = 2300;
          } else {
            (s as any).CoatQuality = 3;
            (s as any).CoatStrength = 300000;
            (s as any).CoatWarm = 1;
            (s as any).CoatPrice = 2300;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CoatQuality = 3;
              (s as any).CoatStrength = 300000;
              (s as any).CoatWarm = 2;
              (s as any).CoatPrice = 2300;
            } else {
              (s as any).CoatQuality = 4;
              (s as any).CoatStrength = 350000;
              (s as any).CoatWarm = 3;
              (s as any).CoatPrice = 2400;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CoatQuality = 4;
                (s as any).CoatStrength = 350000;
                (s as any).CoatWarm = 1;
                (s as any).CoatPrice = 2400;
              } else {
                (s as any).CoatQuality = 4;
                (s as any).CoatStrength = 350000;
                (s as any).CoatWarm = 2;
                (s as any).CoatPrice = 2400;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CoatQuality = 4;
                  (s as any).CoatStrength = 350000;
                  (s as any).CoatWarm = 2;
                  (s as any).CoatPrice = 2400;
                } else {
                  (s as any).CoatQuality = 4;
                  (s as any).CoatStrength = 350000;
                  (s as any).CoatWarm = 2;
                  (s as any).CoatPrice = 2400;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CoatQuality = 3;
                    (s as any).CoatStrength = 300000;
                    (s as any).CoatWarm = 1;
                    (s as any).CoatPrice = 2300;
                  } else {
                    (s as any).CoatQuality = 4;
                    (s as any).CoatStrength = 350000;
                    (s as any).CoatWarm = 2;
                    (s as any).CoatPrice = 2400;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CoatQuality = 4;
                      (s as any).CoatStrength = 350000;
                      (s as any).CoatWarm = 1;
                      (s as any).CoatPrice = 2400;
                    } else {
                      (s as any).CoatQuality = 4;
                      (s as any).CoatStrength = 350000;
                      (s as any).CoatWarm = 2;
                      (s as any).CoatPrice = 2400;
                    }
                  }
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

export const _attributes_cats_coats: LocationDef = {
  name: '_attributes_cats_coats',
  region: 'other',
  enter: enter,
};
