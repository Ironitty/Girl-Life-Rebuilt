// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: ShoPrice ~ 3000 * (20 + ShoQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 3: 3450
  // TODO-QSP: 4: 3600
  // TODO-QSP: ShoQuality ranges from 3 to 4
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).ShoStyle = 0;
    (s as any).ShoQuality = 4;
    (s as any).ShoStrength = 350000;
    (s as any).ShoCut = 1;
    (s as any).ShoHeels = 1;
    (s as any).ShoPrice = 3600;
  } else {
    (s as any).ShoStyle = 0;
    (s as any).ShoQuality = 4;
    (s as any).ShoStrength = 350000;
    (s as any).ShoCut = 1;
    (s as any).ShoHeels = 1;
    (s as any).ShoBimbo = 1;
    (s as any).ShoPrice = 3600;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).ShoStyle = 0;
      (s as any).ShoQuality = 4;
      (s as any).ShoStrength = 350000;
      (s as any).ShoCut = 1;
      (s as any).ShoHeels = 1;
      (s as any).ShoPrice = 3600;
    } else {
      (s as any).ShoStyle = 0;
      (s as any).ShoQuality = 4;
      (s as any).ShoStrength = 350000;
      (s as any).ShoCut = 1;
      (s as any).ShoHeels = 1;
      (s as any).ShoPrice = 3600;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).ShoStyle = 0;
        (s as any).ShoQuality = 3;
        (s as any).ShoStrength = 300000;
        (s as any).ShoCut = 1;
        (s as any).ShoHeels = 1;
        (s as any).ShoPrice = 3450;
      } else {
        (s as any).ShoStyle = 0;
        (s as any).ShoQuality = 3;
        (s as any).ShoStrength = 300000;
        (s as any).ShoCut = 1;
        (s as any).ShoHeels = 1;
        (s as any).ShoPrice = 3450;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).ShoStyle = 0;
          (s as any).ShoQuality = 3;
          (s as any).ShoStrength = 300000;
          (s as any).ShoCut = 1;
          (s as any).ShoHeels = 1;
          (s as any).ShoBimbo = 1;
          (s as any).ShoPrice = 3450;
        } else {
          (s as any).ShoStyle = 0;
          (s as any).ShoQuality = 4;
          (s as any).ShoStrength = 350000;
          (s as any).ShoCut = 2;
          (s as any).ShoHeels = 1;
          (s as any).ShoPrice = 3600;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).ShoStyle = 0;
            (s as any).ShoQuality = 4;
            (s as any).ShoStrength = 350000;
            (s as any).ShoCut = 2;
            (s as any).ShoHeels = 1;
            (s as any).ShoPrice = 3600;
          } else {
            (s as any).ShoStyle = 0;
            (s as any).ShoQuality = 4;
            (s as any).ShoStrength = 350000;
            (s as any).ShoCut = 2;
            (s as any).ShoHeels = 1;
            (s as any).ShoPrice = 3600;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).ShoStyle = 0;
              (s as any).ShoQuality = 4;
              (s as any).ShoStrength = 350000;
              (s as any).ShoCut = 1;
              (s as any).ShoHeels = 1;
              (s as any).ShoPrice = 3600;
            } else {
              (s as any).ShoStyle = 0;
              (s as any).ShoQuality = 3;
              (s as any).ShoStrength = 300000;
              (s as any).ShoCut = 1;
              (s as any).ShoHeels = 3;
              (s as any).ShoPrice = 3450;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).ShoStyle = 0;
                (s as any).ShoQuality = 3;
                (s as any).ShoStrength = 300000;
                (s as any).ShoCut = 1;
                (s as any).ShoHeels = 3;
                (s as any).ShoBimbo = 1;
                (s as any).ShoPrice = 3450;
              } else {
                (s as any).ShoStyle = 0;
                (s as any).ShoQuality = 4;
                (s as any).ShoStrength = 350000;
                (s as any).ShoCut = 1;
                (s as any).ShoHeels = 3;
                (s as any).ShoPrice = 3600;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).ShoStyle = 0;
                  (s as any).ShoQuality = 4;
                  (s as any).ShoStrength = 350000;
                  (s as any).ShoCut = 1;
                  (s as any).ShoHeels = 3;
                  (s as any).ShoPrice = 3600;
                } else {
                  (s as any).ShoStyle = 0;
                  (s as any).ShoQuality = 4;
                  (s as any).ShoStrength = 350000;
                  (s as any).ShoCut = 1;
                  (s as any).ShoHeels = 4;
                  (s as any).ShoPrice = 3600;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).ShoStyle = 0;
                    (s as any).ShoQuality = 4;
                    (s as any).ShoStrength = 350000;
                    (s as any).ShoCut = 1;
                    (s as any).ShoHeels = 4;
                    (s as any).ShoBimbo = 1;
                    (s as any).ShoGoth = 1;
                    (s as any).ShoPrice = 3600;
                  } else {
                    (s as any).ShoStyle = 0;
                    (s as any).ShoQuality = 4;
                    (s as any).ShoStrength = 350000;
                    (s as any).ShoCut = 1;
                    (s as any).ShoHeels = 4;
                    (s as any).ShoPrice = 3600;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).ShoStyle = 0;
                      (s as any).ShoQuality = 4;
                      (s as any).ShoStrength = 350000;
                      (s as any).ShoCut = 1;
                      (s as any).ShoHeels = 4;
                      (s as any).ShoPrice = 3600;
                    } else {
                      (s as any).ShoStyle = 0;
                      (s as any).ShoQuality = 4;
                      (s as any).ShoStrength = 350000;
                      (s as any).ShoCut = 1;
                      (s as any).ShoHeels = 4;
                      (s as any).ShoPrice = 3600;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).ShoStyle = 0;
                        (s as any).ShoQuality = 4;
                        (s as any).ShoStrength = 350000;
                        (s as any).ShoCut = 1;
                        (s as any).ShoHeels = 4;
                        (s as any).ShoGoth = 1;
                        (s as any).ShoPrice = 3600;
                      } else {
                        (s as any).ShoStyle = 0;
                        (s as any).ShoQuality = 4;
                        (s as any).ShoStrength = 350000;
                        (s as any).ShoCut = 1;
                        (s as any).ShoHeels = 4;
                        (s as any).ShoPrice = 3600;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).ShoStyle = 0;
                          (s as any).ShoQuality = 4;
                          (s as any).ShoStrength = 350000;
                          (s as any).ShoCut = 1;
                          (s as any).ShoHeels = 4;
                          (s as any).ShoPrice = 3600;
                        } else {
                          (s as any).ShoStyle = 0;
                          (s as any).ShoQuality = 3;
                          (s as any).ShoStrength = 300000;
                          (s as any).ShoCut = 1;
                          (s as any).ShoHeels = 4;
                          (s as any).ShoBimbo = 1;
                          (s as any).ShoPrice = 3450;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).ShoStyle = 0;
                            (s as any).ShoQuality = 3;
                            (s as any).ShoStrength = 300000;
                            (s as any).ShoCut = 1;
                            (s as any).ShoHeels = 4;
                            (s as any).ShoPrice = 3450;
                          } else {
                            (s as any).ShoStyle = 0;
                            (s as any).ShoQuality = 4;
                            (s as any).ShoStrength = 350000;
                            (s as any).ShoCut = 1;
                            (s as any).ShoHeels = 4;
                            (s as any).ShoPrice = 3600;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).ShoStyle = 0;
                              (s as any).ShoQuality = 3;
                              (s as any).ShoStrength = 300000;
                              (s as any).ShoCut = 1;
                              (s as any).ShoHeels = 4;
                              (s as any).ShoPrice = 3450;
                            } else {
                              (s as any).ShoStyle = 0;
                              (s as any).ShoQuality = 4;
                              (s as any).ShoStrength = 350000;
                              (s as any).ShoCut = 1;
                              (s as any).ShoHeels = 4;
                              (s as any).ShoPrice = 3600;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).ShoStyle = 0;
                                (s as any).ShoQuality = 4;
                                (s as any).ShoStrength = 350000;
                                (s as any).ShoCut = 2;
                                (s as any).ShoHeels = 4;
                                (s as any).ShoPrice = 3600;
                              } else {
                                (s as any).ShoStyle = 0;
                                (s as any).ShoQuality = 4;
                                (s as any).ShoStrength = 350000;
                                (s as any).ShoCut = 1;
                                (s as any).ShoHeels = 4;
                                (s as any).ShoPrice = 3600;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).ShoStyle = 0;
                                  (s as any).ShoQuality = 4;
                                  (s as any).ShoStrength = 350000;
                                  (s as any).ShoCut = 1;
                                  (s as any).ShoHeels = 4;
                                  (s as any).ShoBimbo = 1;
                                  (s as any).ShoPrice = 3600;
                                } else {
                                  (s as any).ShoStyle = 0;
                                  (s as any).ShoQuality = 4;
                                  (s as any).ShoStrength = 350000;
                                  (s as any).ShoCut = 1;
                                  (s as any).ShoHeels = 4;
                                  (s as any).ShoPrice = 3600;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).ShoStyle = 0;
                                    (s as any).ShoQuality = 4;
                                    (s as any).ShoStrength = 350000;
                                    (s as any).ShoCut = 1;
                                    (s as any).ShoHeels = 4;
                                    (s as any).ShoPrice = 3600;
                                  } else {
                                    (s as any).ShoStyle = 0;
                                    (s as any).ShoQuality = 4;
                                    (s as any).ShoStrength = 350000;
                                    (s as any).ShoCut = 1;
                                    (s as any).ShoHeels = 4;
                                    (s as any).ShoPrice = 3600;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).ShoStyle = 0;
                                      (s as any).ShoQuality = 4;
                                      (s as any).ShoStrength = 350000;
                                      (s as any).ShoCut = 1;
                                      (s as any).ShoHeels = 5;
                                      (s as any).ShoPrice = 3600;
                                    } else {
                                      (s as any).ShoStyle = 0;
                                      (s as any).ShoQuality = 3;
                                      (s as any).ShoStrength = 300000;
                                      (s as any).ShoCut = 1;
                                      (s as any).ShoHeels = 1;
                                      (s as any).ShoPrice = 3450;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).ShoStyle = 0;
                                        (s as any).ShoQuality = 4;
                                        (s as any).ShoStrength = 350000;
                                        (s as any).ShoCut = 1;
                                        (s as any).ShoHeels = 4;
                                        (s as any).ShoPrice = 3600;
                                      } else {
                                        (s as any).ShoStyle = 0;
                                        (s as any).ShoQuality = 4;
                                        (s as any).ShoStrength = 350000;
                                        (s as any).ShoCut = 3;
                                        (s as any).ShoHeels = 3;
                                        (s as any).ShoPrice = 3600;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).ShoStyle = 0;
                                          (s as any).ShoQuality = 4;
                                          (s as any).ShoStrength = 350000;
                                          (s as any).ShoCut = 3;
                                          (s as any).ShoHeels = 3;
                                          (s as any).ShoBimbo = 1;
                                          (s as any).ShoPrice = 3600;
                                        } else {
                                          (s as any).ShoStyle = 0;
                                          (s as any).ShoQuality = 4;
                                          (s as any).ShoStrength = 350000;
                                          (s as any).ShoCut = 3;
                                          (s as any).ShoHeels = 3;
                                          (s as any).ShoBimbo = 1;
                                          (s as any).ShoPrice = 3600;
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

export const _attributes_bomba_shoes: LocationDef = {
  name: '_attributes_bomba_shoes',
  region: 'other',
  enter: enter,
};
