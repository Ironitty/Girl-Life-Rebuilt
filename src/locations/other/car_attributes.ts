// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).CarName = '';
  (s as any).CarPrice = 0;
  (s as any).CarCondition = 0;
  (s as any).CarTank = 0;
  if (String((s as any).locArgs?.[0] ?? '') === 1) {
    (s as any).CarName = 'VAZ 2107';
    (s as any).CarPrice = 100000;
    (s as any).CarCondition = 200;
    (s as any).CarTank = 50;
  } else {
    if (String((s as any).locArgs?.[0] ?? '') === 2) {
      (s as any).CarName = 'VAZ 2115';
      (s as any).CarPrice = 180000;
      (s as any).CarCondition = 300;
      (s as any).CarTank = 50;
    } else {
      if (String((s as any).locArgs?.[0] ?? '') === 3) {
        (s as any).CarName = 'VAZ 2113';
        (s as any).CarPrice = 180000;
        (s as any).CarCondition = 290;
        (s as any).CarTank = 50;
      } else {
        if (String((s as any).locArgs?.[0] ?? '') === 4) {
          (s as any).CarName = 'VAZ 2114';
          (s as any).CarPrice = 180000;
          (s as any).CarCondition = 300;
          (s as any).CarTank = 50;
        } else {
          if (String((s as any).locArgs?.[0] ?? '') === 5) {
            (s as any).CarName = 'VAZ 2110';
            (s as any).CarPrice = 180000;
            (s as any).CarCondition = 350;
            (s as any).CarTank = 50;
          } else {
            if (String((s as any).locArgs?.[0] ?? '') === 11) {
              (s as any).CarName = 'GAZ 3102';
              (s as any).CarPrice = 100000;
              (s as any).CarCondition = 1000;
              (s as any).CarTank = 50;
            } else {
              if (String((s as any).locArgs?.[0] ?? '') === 12) {
                (s as any).CarName = 'GAZ 3110';
                (s as any).CarPrice = 100000;
                (s as any).CarCondition = 800;
                (s as any).CarTank = 50;
              } else {
                if (String((s as any).locArgs?.[0] ?? '') === 6) {
                  (s as any).CarName = 'LADA Kalina';
                  (s as any).CarPrice = 535800;
                  (s as any).CarCondition = 400;
                  (s as any).CarTank = 50;
                } else {
                  if (String((s as any).locArgs?.[0] ?? '') === 7) {
                    (s as any).CarName = 'LADA Vesta';
                    (s as any).CarPrice = 645000;
                    (s as any).CarCondition = 450;
                    (s as any).CarTank = 50;
                  } else {
                    if (String((s as any).locArgs?.[0] ?? '') === 8) {
                      (s as any).CarName = 'Chevrolet Niva';
                      (s as any).CarPrice = 625000;
                      (s as any).CarCondition = 500;
                      (s as any).CarTank = 50;
                    } else {
                      if (String((s as any).locArgs?.[0] ?? '') === 9) {
                        (s as any).CarName = 'UAZ Hunter';
                        (s as any).CarPrice = 600000;
                        (s as any).CarCondition = 300;
                        (s as any).CarTank = 50;
                      } else {
                        if (String((s as any).locArgs?.[0] ?? '') === 10) {
                          (s as any).CarName = 'UAZ Patriot';
                          (s as any).CarPrice = 760000;
                          (s as any).CarCondition = 400;
                          (s as any).CarTank = 50;
                        } else {
                          if (String((s as any).locArgs?.[0] ?? '') === 13) {
                            (s as any).CarName = 'Ford Focus';
                            (s as any).CarPrice = 884000;
                            (s as any).CarCondition = 800;
                            (s as any).CarTank = 50;
                          } else {
                            if (String((s as any).locArgs?.[0] ?? '') === 95) {
                              (s as any).CarName = 'Mitsubishi L200';
                              (s as any).CarPrice = 1749990;
                              (s as any).CarCondition = 2000;
                              (s as any).CarTank = 50;
                            } else {
                              if (String((s as any).locArgs?.[0] ?? '') === 96) {
                                (s as any).CarName = 'Audi Q7';
                                (s as any).CarPrice = 5000000;
                                (s as any).CarCondition = 5000;
                                (s as any).CarTank = 50;
                              } else {
                                if (String((s as any).locArgs?.[0] ?? '') === 97) {
                                  (s as any).CarName = 'Lexus RX 350';
                                  (s as any).CarPrice = 3374000;
                                  (s as any).CarCondition = 4000;
                                  (s as any).CarTank = 50;
                                } else {
                                  if (String((s as any).locArgs?.[0] ?? '') === 98) {
                                    (s as any).CarName = 'Porsche Cayenne';
                                    (s as any).CarPrice = 5500000;
                                    (s as any).CarCondition = 3000;
                                    (s as any).CarTank = 50;
                                  } else {
                                    if (String((s as any).locArgs?.[0] ?? '') === 99) {
                                      (s as any).CarName = 'BMW X6';
                                      (s as any).CarPrice = 5366000;
                                      (s as any).CarCondition = 4000;
                                      (s as any).CarTank = 50;
                                    } else {
                                      if (String((s as any).locArgs?.[0] ?? '') === 100) {
                                        (s as any).CarName = 'Mercedes-Benz S-Class';
                                        (s as any).CarPrice = 7600000;
                                        (s as any).CarCondition = 8000;
                                        (s as any).CarTank = 50;
                                      } else {
                                        if (String((s as any).locArgs?.[0] ?? '') === 101) {
                                          (s as any).CarName = 'BMW 3-Seria';
                                          (s as any).CarPrice = 2721000;
                                          (s as any).CarCondition = 4000;
                                          (s as any).CarTank = 50;
                                        } else {
                                          if (String((s as any).locArgs?.[0] ?? '') === 102) {
                                            (s as any).CarName = 'Renault LOGAN';
                                            (s as any).CarPrice = 649990;
                                            (s as any).CarCondition = 1000;
                                            (s as any).CarTank = 50;
                                          } else {
                                            if (String((s as any).locArgs?.[0] ?? '') === 103) {
                                              (s as any).CarName = 'Toyota Corolla';
                                              (s as any).CarPrice = 2721000;
                                              (s as any).CarCondition = 3000;
                                              (s as any).CarTank = 50;
                                            } else {
                                              if (String((s as any).locArgs?.[0] ?? '') === 104) {
                                                (s as any).CarName = 'Toyota Camry';
                                                (s as any).CarPrice = 1484000;
                                                (s as any).CarCondition = 3000;
                                                (s as any).CarTank = 50;
                                              } else {
                                                if (String((s as any).locArgs?.[0] ?? '') === 105) {
                                                  (s as any).CarName = 'Mazda 6';
                                                  (s as any).CarPrice = 1299700;
                                                  (s as any).CarCondition = 3000;
                                                  (s as any).CarTank = 50;
                                                } else {
                                                  if (String((s as any).locArgs?.[0] ?? '') === 106) {
                                                    (s as any).CarName = 'Mercedes-Benz E-Class';
                                                    (s as any).CarPrice = 2950000;
                                                    (s as any).CarCondition = 5000;
                                                    (s as any).CarTank = 50;
                                                  } else {
                                                    if (String((s as any).locArgs?.[0] ?? '') === 107) {
                                                      (s as any).CarName = 'BMW M5';
                                                      (s as any).CarPrice = 7000000;
                                                      (s as any).CarCondition = 6000;
                                                      (s as any).CarTank = 50;
                                                    } else {
                                                      if (String((s as any).locArgs?.[0] ?? '') === 108) {
                                                        (s as any).CarName = 'Jaguar XJ';
                                                        (s as any).CarPrice = 6500000;
                                                        (s as any).CarCondition = 4000;
                                                        (s as any).CarTank = 50;
                                                      } else {
                                                        if (String((s as any).locArgs?.[0] ?? '') === 109) {
                                                          (s as any).CarName = 'Audi A6';
                                                          (s as any).CarPrice = 2914000;
                                                          (s as any).CarCondition = 5000;
                                                          (s as any).CarTank = 50;
                                                        } else {
                                                          if (String((s as any).locArgs?.[0] ?? '') === 110) {
                                                            (s as any).CarName = 'Ford Mondeo';
                                                            (s as any).CarPrice = 1329000;
                                                            (s as any).CarCondition = 2000;
                                                            (s as any).CarTank = 50;
                                                          } else {
                                                            if (String((s as any).locArgs?.[0] ?? '') === 111) {
                                                              (s as any).CarName = 'Bentley Continental GT';
                                                              (s as any).CarPrice = 13000000;
                                                              (s as any).CarCondition = 8000;
                                                              (s as any).CarTank = 50;
                                                            } else {
                                                              if (String((s as any).locArgs?.[0] ?? '') === 112) {
                                                                (s as any).CarName = 'Ferrari 458 Italia';
                                                                (s as any).CarPrice = 14000000;
                                                                (s as any).CarCondition = 10000;
                                                                (s as any).CarTank = 50;
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

export const car_attributes: LocationDef = {
  name: 'car_attributes',
  region: 'other',
  enter: enter,
};
