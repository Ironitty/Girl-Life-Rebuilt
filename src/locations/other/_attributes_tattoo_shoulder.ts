// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: TatPrice ~ 8000 * (20 + TatQUality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1:  8400
  // TODO-QSP: 2:  8800
  // TODO-QSP: 3:  9200
  // TODO-QSP: 4:  9600
  // TODO-QSP: 5: 10000
  // TODO-QSP: 6: 10400
  // TODO-QSP: 7: 10800
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).TatQuality = 3;
    (s as any).TatPrice = 9200;
  } else {
    (s as any).TatQuality = 3;
    (s as any).TatPrice = 9200;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).TatQuality = 3;
      (s as any).TatPrice = 9200;
    } else {
      (s as any).TatQuality = 3;
      (s as any).TatPrice = 9200;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).TatQuality = 3;
        (s as any).TatPrice = 9200;
      } else {
        (s as any).TatQuality = 3;
        (s as any).TatPrice = 9200;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).TatQuality = 3;
          (s as any).TatPrice = 9200;
        } else {
          (s as any).TatQuality = 3;
          (s as any).TatPrice = 9200;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).TatQuality = 3;
            (s as any).TatPrice = 9200;
          } else {
            (s as any).TatQuality = 3;
            (s as any).TatPrice = 9200;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).TatQuality = 3;
              (s as any).TatPrice = 9200;
            } else {
              (s as any).TatQuality = 3;
              (s as any).TatPrice = 9200;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).TatQuality = 3;
                (s as any).TatPrice = 9200;
              } else {
                (s as any).TatQuality = 3;
                (s as any).TatPrice = 9200;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).TatQuality = 3;
                  (s as any).TatPrice = 9200;
                } else {
                  (s as any).TatQuality = 3;
                  (s as any).TatPrice = 9200;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).TatQuality = 3;
                    (s as any).TatPrice = 9200;
                  } else {
                    (s as any).TatQuality = 3;
                    (s as any).TatPrice = 9200;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).TatQuality = 3;
                      (s as any).TatPrice = 9200;
                    } else {
                      (s as any).TatQuality = 3;
                      (s as any).TatPrice = 9200;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).TatQuality = 3;
                        (s as any).TatPrice = 9200;
                      } else {
                        (s as any).TatQuality = 3;
                        (s as any).TatPrice = 9200;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).TatQuality = 3;
                          (s as any).TatPrice = 9200;
                        } else {
                          (s as any).TatQuality = 3;
                          (s as any).TatPrice = 9200;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).TatQuality = 3;
                            (s as any).TatPrice = 9200;
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
      }
    }
  }
  scene.build();
}

export const _attributes_tattoo_shoulder: LocationDef = {
  name: '_attributes_tattoo_shoulder',
  region: 'other',
  enter: enter,
};
