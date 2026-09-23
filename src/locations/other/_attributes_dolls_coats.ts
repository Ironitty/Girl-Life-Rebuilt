// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') === 1) {
    (s as any).CoatQuality = 6;
    (s as any).CoatStrength = 450000;
    (s as any).CoatWarm = 2;
    (s as any).CoatPrice = 2600;
    (s as any).coat_description = 'Moderate: A gothic style coat with flared, pointed sleeves and decorative D-rings.';
  } else {
    if (String((s as any).locArgs?.[0] ?? '') === 2) {
      (s as any).CoatQuality = 6;
      (s as any).CoatStrength = 450000;
      (s as any).CoatWarm = 3;
      (s as any).CoatPrice = 2600;
      (s as any).coat_description = 'Great: A gothic style coat made from suede in the color black.';
    } else {
      if (String((s as any).locArgs?.[0] ?? '') === 3) {
        (s as any).CoatQuality = 5;
        (s as any).CoatStrength = 400000;
        (s as any).CoatWarm = 3;
        (s as any).CoatPrice = 2500;
        (s as any).coat_description = 'Great: A gothic style coat with faux fur and hood. It has decorative metal rivets.';
      } else {
        if (String((s as any).locArgs?.[0] ?? '') === 4) {
          (s as any).CoatQuality = 5;
          (s as any).CoatStrength = 400000;
          (s as any).CoatWarm = 2;
          (s as any).CoatPrice = 2500;
          (s as any).coat_description = 'Moderate: A belted gothic style coat with faux fur and faux leather.';
        } else {
          if (String((s as any).locArgs?.[0] ?? '') === 5) {
            (s as any).CoatQuality = 5;
            (s as any).CoatStrength = 400000;
            (s as any).CoatWarm = 2;
            (s as any).CoatPrice = 2500;
            (s as any).coat_description = 'Moderate: A gothic style Parka jacket with oversized hood and front zipper.';
          } else {
            if (String((s as any).locArgs?.[0] ?? '') === 6) {
              (s as any).CoatQuality = 5;
              (s as any).CoatStrength = 400000;
              (s as any).CoatWarm = 2;
              (s as any).CoatPrice = 2500;
              (s as any).coat_description = 'Moderate: A gothic style duffle coat with oversized hood and front zipper with bat toggles.';
            } else {
              if (String((s as any).locArgs?.[0] ?? '') === 7) {
                (s as any).CoatQuality = 5;
                (s as any).CoatStrength = 400000;
                (s as any).CoatWarm = 2;
                (s as any).CoatPrice = 2500;
                (s as any).coat_description = 'Moderate: A high waist gothic style trench coat with puff shoulders and a turn down collar';
              } else {
                if (String((s as any).locArgs?.[0] ?? '') === 8) {
                  (s as any).CoatQuality = 6;
                  (s as any).CoatStrength = 450000;
                  (s as any).CoatWarm = 3;
                  (s as any).CoatPrice = 2600;
                  (s as any).coat_description = 'Great: A gothic style hooded Parka coat with faux fur and belt.';
                } else {
                  if (String((s as any).locArgs?.[0] ?? '') === 9) {
                    (s as any).CoatQuality = 4;
                    (s as any).CoatStrength = 350000;
                    (s as any).CoatWarm = 2;
                    (s as any).CoatPrice = 2400;
                    (s as any).coat_description = 'Moderate: A gothic style, hooded coat with faux fur.';
                  } else {
                    if (String((s as any).locArgs?.[0] ?? '') === 10) {
                      (s as any).CoatQuality = 5;
                      (s as any).CoatStrength = 400000;
                      (s as any).CoatWarm = 2;
                      (s as any).CoatPrice = 2500;
                      (s as any).coat_description = 'Moderate: A gothic style long coat.';
                    } else {
                      if (String((s as any).locArgs?.[0] ?? '') === 11) {
                        (s as any).CoatQuality = 4;
                        (s as any).CoatStrength = 350000;
                        (s as any).CoatWarm = 2;
                        (s as any).CoatPrice = 2400;
                        (s as any).coat_description = 'Moderate: A gothic style short coat.';
                      } else {
                        if (String((s as any).locArgs?.[0] ?? '') === 12) {
                          (s as any).CoatQuality = 5;
                          (s as any).CoatStrength = 400000;
                          (s as any).CoatWarm = 1;
                          (s as any).CoatPrice = 2500;
                          (s as any).coat_description = 'Low: A gothic style cape.';
                        } else {
                          if (String((s as any).locArgs?.[0] ?? '') === 13) {
                            (s as any).CoatQuality = 5;
                            (s as any).CoatStrength = 400000;
                            (s as any).CoatWarm = 1;
                            (s as any).CoatPrice = 2500;
                            (s as any).coat_description = 'Low: A gothic style hooded jersey with bondage straps.';
                          } else {
                            if (String((s as any).locArgs?.[0] ?? '') === 14) {
                              (s as any).CoatQuality = 6;
                              (s as any).CoatStrength = 450000;
                              (s as any).CoatWarm = 2;
                              (s as any).CoatPrice = 2600;
                              (s as any).coat_description = 'Moderate: A crop top jacket with faux fur and an oversized hood.';
                            } else {
                              if (String((s as any).locArgs?.[0] ?? '') === 15) {
                                (s as any).CoatQuality = 5;
                                (s as any).CoatStrength = 400000;
                                (s as any).CoatWarm = 1;
                                (s as any).CoatPrice = 2500;
                                (s as any).coat_description = 'Low: A gothic style medium length cape.';
                              } else {
                                if (String((s as any).locArgs?.[0] ?? '') === 16) {
                                  (s as any).CoatQuality = 5;
                                  (s as any).CoatStrength = 400000;
                                  (s as any).CoatWarm = 2;
                                  (s as any).CoatPrice = 2500;
                                  (s as any).coat_description = 'Moderate: A gothic style long coat.';
                                } else {
                                  if (String((s as any).locArgs?.[0] ?? '') === 17) {
                                    (s as any).CoatQuality = 5;
                                    (s as any).CoatStrength = 400000;
                                    (s as any).CoatWarm = 1;
                                    (s as any).CoatPrice = 2500;
                                    (s as any).coat_description = 'Low: An alternative style tailcoat in black and purple.';
                                  } else {
                                    if (String((s as any).locArgs?.[0] ?? '') === 18) {
                                      (s as any).CoatQuality = 5;
                                      (s as any).CoatStrength = 400000;
                                      (s as any).CoatWarm = 1;
                                      (s as any).CoatPrice = 2500;
                                      (s as any).coat_description = 'Low: A gothic style jacket in relaxed fit.';
                                    } else {
                                      if (String((s as any).locArgs?.[0] ?? '') === 19) {
                                        (s as any).CoatQuality = 4;
                                        (s as any).CoatStrength = 350000;
                                        (s as any).CoatWarm = 1;
                                        (s as any).CoatPrice = 2400;
                                        (s as any).coat_description = 'Low: A dark velvet lace fringed shawl.';
                                      } else {
                                        if (String((s as any).locArgs?.[0] ?? '') === 20) {
                                          (s as any).CoatQuality = 6;
                                          (s as any).CoatStrength = 450000;
                                          (s as any).CoatWarm = 2;
                                          (s as any).CoatPrice = 2600;
                                          (s as any).coat_description = 'Moderate: A punk style long coat in the color black.';
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
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const _attributes_dolls_coats: LocationDef = {
  name: '_attributes_dolls_coats',
  region: 'other',
  enter: enter,
};
