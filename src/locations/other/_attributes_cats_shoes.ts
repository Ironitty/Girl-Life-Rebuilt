// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: ShoPrice ~ 1350 * (20 + ShoQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 4: 1600
  // TODO-QSP: 5: 1650
  // TODO-QSP: 6: 1700
  // TODO-QSP: ShoQuality ranges from 4 to 6 but please avoid adding too many 6s
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).ShoStyle = 0;
    (s as any).ShoQuality = 5;
    (s as any).ShoStrength = 400000;
    (s as any).ShoCut = 1;
    (s as any).ShoHeels = 1;
    (s as any).ShoPrice = 1650;
  } else {
    (s as any).ShoStyle = 0;
    (s as any).ShoQuality = 5;
    (s as any).ShoStrength = 400000;
    (s as any).ShoCut = 1;
    (s as any).ShoHeels = 1;
    (s as any).ShoPrice = 1650;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).ShoStyle = 0;
      (s as any).ShoQuality = 5;
      (s as any).ShoStrength = 400000;
      (s as any).ShoCut = 1;
      (s as any).ShoHeels = 1;
      (s as any).ShoPrice = 1650;
    } else {
      (s as any).ShoStyle = 0;
      (s as any).ShoQuality = 5;
      (s as any).ShoStrength = 400000;
      (s as any).ShoCut = 1;
      (s as any).ShoHeels = 1;
      (s as any).ShoPrice = 1650;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).ShoStyle = 0;
        (s as any).ShoQuality = 5;
        (s as any).ShoStrength = 400000;
        (s as any).ShoCut = 1;
        (s as any).ShoHeels = 1;
        (s as any).ShoPrice = 1650;
      } else {
        (s as any).ShoStyle = 0;
        (s as any).ShoQuality = 5;
        (s as any).ShoStrength = 400000;
        (s as any).ShoCut = 1;
        (s as any).ShoHeels = 1;
        (s as any).ShoPrice = 1650;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).ShoStyle = 0;
          (s as any).ShoQuality = 5;
          (s as any).ShoStrength = 400000;
          (s as any).ShoCut = 1;
          (s as any).ShoHeels = 1;
          (s as any).ShoPrice = 1650;
        } else {
          (s as any).ShoStyle = 0;
          (s as any).ShoQuality = 5;
          (s as any).ShoStrength = 400000;
          (s as any).ShoCut = 1;
          (s as any).ShoHeels = 1;
          (s as any).ShoPrice = 1650;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).ShoStyle = 0;
            (s as any).ShoQuality = 6;
            (s as any).ShoStrength = 450000;
            (s as any).ShoCut = 1;
            (s as any).ShoHeels = 1;
            (s as any).ShoPrice = 1700;
          } else {
            (s as any).ShoStyle = 0;
            (s as any).ShoQuality = 6;
            (s as any).ShoStrength = 450000;
            (s as any).ShoCut = 1;
            (s as any).ShoHeels = 1;
            (s as any).ShoPrice = 1700;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).ShoStyle = 0;
              (s as any).ShoQuality = 6;
              (s as any).ShoStrength = 450000;
              (s as any).ShoCut = 1;
              (s as any).ShoHeels = 1;
              (s as any).ShoPrice = 1700;
            } else {
              (s as any).ShoStyle = 0;
              (s as any).ShoQuality = 6;
              (s as any).ShoStrength = 450000;
              (s as any).ShoCut = 1;
              (s as any).ShoHeels = 1;
              (s as any).ShoPrice = 1700;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).ShoStyle = 0;
                (s as any).ShoQuality = 4;
                (s as any).ShoStrength = 350000;
                (s as any).ShoCut = 1;
                (s as any).ShoHeels = 1;
                (s as any).ShoPrice = 1600;
              } else {
                (s as any).ShoStyle = 0;
                (s as any).ShoQuality = 4;
                (s as any).ShoStrength = 350000;
                (s as any).ShoCut = 1;
                (s as any).ShoHeels = 1;
                (s as any).ShoBimbo = 1;
                (s as any).ShoPrice = 1600;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).ShoStyle = 0;
                  (s as any).ShoQuality = 4;
                  (s as any).ShoStrength = 350000;
                  (s as any).ShoCut = 1;
                  (s as any).ShoHeels = 1;
                  (s as any).ShoPrice = 1600;
                } else {
                  (s as any).ShoStyle = 0;
                  (s as any).ShoQuality = 4;
                  (s as any).ShoStrength = 350000;
                  (s as any).ShoCut = 1;
                  (s as any).ShoHeels = 1;
                  (s as any).ShoBimbo = 1;
                  (s as any).ShoPrice = 1600;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).ShoStyle = 0;
                    (s as any).ShoQuality = 4;
                    (s as any).ShoStrength = 350000;
                    (s as any).ShoCut = 1;
                    (s as any).ShoHeels = 1;
                    (s as any).ShoPrice = 1600;
                  } else {
                    (s as any).ShoStyle = 0;
                    (s as any).ShoQuality = 4;
                    (s as any).ShoStrength = 350000;
                    (s as any).ShoCut = 1;
                    (s as any).ShoHeels = 1;
                    (s as any).ShoPrice = 1600;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).ShoStyle = 0;
                      (s as any).ShoQuality = 4;
                      (s as any).ShoStrength = 350000;
                      (s as any).ShoCut = 1;
                      (s as any).ShoHeels = 1;
                      (s as any).ShoPrice = 1600;
                    } else {
                      (s as any).ShoStyle = 0;
                      (s as any).ShoQuality = 4;
                      (s as any).ShoStrength = 350000;
                      (s as any).ShoCut = 1;
                      (s as any).ShoHeels = 1;
                      (s as any).ShoPrice = 1600;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).ShoStyle = 0;
                        (s as any).ShoQuality = 4;
                        (s as any).ShoStrength = 350000;
                        (s as any).ShoCut = 1;
                        (s as any).ShoHeels = 1;
                        (s as any).ShoPrice = 1600;
                      } else {
                        (s as any).ShoStyle = 0;
                        (s as any).ShoQuality = 4;
                        (s as any).ShoStrength = 350000;
                        (s as any).ShoCut = 1;
                        (s as any).ShoHeels = 1;
                        (s as any).ShoPrice = 1600;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).ShoStyle = 0;
                          (s as any).ShoQuality = 4;
                          (s as any).ShoStrength = 350000;
                          (s as any).ShoCut = 1;
                          (s as any).ShoHeels = 1;
                          (s as any).ShoPrice = 1600;
                        } else {
                          (s as any).ShoStyle = 0;
                          (s as any).ShoQuality = 4;
                          (s as any).ShoStrength = 350000;
                          (s as any).ShoCut = 1;
                          (s as any).ShoHeels = 1;
                          (s as any).ShoPrice = 1600;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).ShoStyle = 0;
                            (s as any).ShoQuality = 4;
                            (s as any).ShoStrength = 350000;
                            (s as any).ShoCut = 1;
                            (s as any).ShoHeels = 1;
                            (s as any).ShoPrice = 1600;
                          } else {
                            (s as any).ShoStyle = 0;
                            (s as any).ShoQuality = 4;
                            (s as any).ShoStrength = 350000;
                            (s as any).ShoCut = 1;
                            (s as any).ShoHeels = 1;
                            (s as any).ShoPrice = 1600;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).ShoStyle = 0;
                              (s as any).ShoQuality = 4;
                              (s as any).ShoStrength = 350000;
                              (s as any).ShoCut = 1;
                              (s as any).ShoHeels = 1;
                              (s as any).ShoPrice = 1600;
                            } else {
                              (s as any).ShoStyle = 0;
                              (s as any).ShoQuality = 4;
                              (s as any).ShoStrength = 350000;
                              (s as any).ShoCut = 1;
                              (s as any).ShoHeels = 1;
                              (s as any).ShoPrice = 1600;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).ShoStyle = 0;
                                (s as any).ShoQuality = 4;
                                (s as any).ShoStrength = 350000;
                                (s as any).ShoCut = 1;
                                (s as any).ShoHeels = 1;
                                (s as any).ShoPrice = 1600;
                              } else {
                                (s as any).ShoStyle = 0;
                                (s as any).ShoQuality = 5;
                                (s as any).ShoStrength = 400000;
                                (s as any).ShoCut = 1;
                                (s as any).ShoHeels = 1;
                                (s as any).ShoPrice = 1650;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).ShoStyle = 0;
                                  (s as any).ShoQuality = 4;
                                  (s as any).ShoStrength = 350000;
                                  (s as any).ShoCut = 1;
                                  (s as any).ShoHeels = 1;
                                  (s as any).ShoPrice = 1600;
                                } else {
                                  (s as any).ShoStyle = 0;
                                  (s as any).ShoQuality = 5;
                                  (s as any).ShoStrength = 400000;
                                  (s as any).ShoCut = 1;
                                  (s as any).ShoHeels = 1;
                                  (s as any).ShoPrice = 1650;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).ShoStyle = 0;
                                    (s as any).ShoQuality = 5;
                                    (s as any).ShoStrength = 400000;
                                    (s as any).ShoCut = 1;
                                    (s as any).ShoHeels = 1;
                                    (s as any).ShoPrice = 1650;
                                  } else {
                                    (s as any).ShoStyle = 0;
                                    (s as any).ShoQuality = 5;
                                    (s as any).ShoStrength = 400000;
                                    (s as any).ShoCut = 1;
                                    (s as any).ShoHeels = 1;
                                    (s as any).ShoPrice = 1650;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).ShoStyle = 0;
                                      (s as any).ShoQuality = 5;
                                      (s as any).ShoStrength = 400000;
                                      (s as any).ShoCut = 1;
                                      (s as any).ShoHeels = 1;
                                      (s as any).ShoPrice = 1650;
                                    } else {
                                      (s as any).ShoStyle = 0;
                                      (s as any).ShoQuality = 5;
                                      (s as any).ShoStrength = 400000;
                                      (s as any).ShoCut = 1;
                                      (s as any).ShoHeels = 1;
                                      (s as any).ShoBimbo = 1;
                                      (s as any).ShoPrice = 1650;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).ShoStyle = 0;
                                        (s as any).ShoQuality = 5;
                                        (s as any).ShoStrength = 400000;
                                        (s as any).ShoCut = 1;
                                        (s as any).ShoHeels = 1;
                                        (s as any).ShoPrice = 1650;
                                      } else {
                                        (s as any).ShoStyle = 0;
                                        (s as any).ShoQuality = 5;
                                        (s as any).ShoStrength = 400000;
                                        (s as any).ShoCut = 1;
                                        (s as any).ShoHeels = 1;
                                        (s as any).ShoPrice = 1650;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).ShoStyle = 0;
                                          (s as any).ShoQuality = 5;
                                          (s as any).ShoStrength = 400000;
                                          (s as any).ShoCut = 1;
                                          (s as any).ShoHeels = 1;
                                          (s as any).ShoPrice = 1650;
                                        } else {
                                          (s as any).ShoStyle = 0;
                                          (s as any).ShoQuality = 5;
                                          (s as any).ShoStrength = 400000;
                                          (s as any).ShoCut = 1;
                                          (s as any).ShoHeels = 1;
                                          (s as any).ShoPrice = 1650;
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

export const _attributes_cats_shoes: LocationDef = {
  name: '_attributes_cats_shoes',
  region: 'other',
  enter: enter,
};
