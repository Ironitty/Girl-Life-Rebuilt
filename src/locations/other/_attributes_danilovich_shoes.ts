// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: ShoPrice ~ 2250 * (20 + ShoQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 4: 2700
  // TODO-QSP: 5: 2800
  // TODO-QSP: 6: 2900
  // TODO-QSP: 7: 3000
  // TODO-QSP: ShoQuality ranges from 4 to 7 but please avoid adding too many 7s
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).ShoStyle = 0;
    (s as any).ShoQuality = 7;
    (s as any).ShoStrength = 500000;
    (s as any).ShoHeels = 1;
    (s as any).ShoCut = 1;
    (s as any).ShoStyle2 = 2;
    (s as any).ShoSport = 1;
    (s as any).ShoPrice = 3000;
  } else {
    (s as any).ShoStyle = 0;
    (s as any).ShoQuality = 5;
    (s as any).ShoStrength = 400000;
    (s as any).ShoHeels = 1;
    (s as any).ShoCut = 1;
    (s as any).ShoStyle2 = 2;
    (s as any).ShoSport = 1;
    (s as any).ShoPrice = 2800;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).ShoStyle = 0;
      (s as any).ShoQuality = 5;
      (s as any).ShoStrength = 400000;
      (s as any).ShoHeels = 1;
      (s as any).ShoCut = 1;
      (s as any).ShoStyle2 = 2;
      (s as any).ShoSport = 1;
      (s as any).ShoPrice = 2800;
    } else {
      (s as any).ShoStyle = 0;
      (s as any).ShoQuality = 5;
      (s as any).ShoStrength = 400000;
      (s as any).ShoHeels = 1;
      (s as any).ShoCut = 1;
      (s as any).ShoStyle2 = 2;
      (s as any).ShoSport = 1;
      (s as any).ShoPrice = 2800;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).ShoStyle = 0;
        (s as any).ShoQuality = 6;
        (s as any).ShoStrength = 450000;
        (s as any).ShoHeels = 1;
        (s as any).ShoCut = 1;
        (s as any).ShoStyle2 = 2;
        (s as any).ShoSport = 1;
        (s as any).ShoPrice = 2900;
      } else {
        (s as any).ShoStyle = 0;
        (s as any).ShoQuality = 6;
        (s as any).ShoStrength = 450000;
        (s as any).ShoHeels = 1;
        (s as any).ShoCut = 1;
        (s as any).ShoBimbo = 1;
        (s as any).ShoStyle2 = 2;
        (s as any).ShoSport = 1;
        (s as any).ShoPrice = 2900;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).ShoStyle = 0;
          (s as any).ShoQuality = 6;
          (s as any).ShoStrength = 450000;
          (s as any).ShoHeels = 1;
          (s as any).ShoCut = 1;
          (s as any).ShoStyle2 = 2;
          (s as any).ShoSport = 1;
          (s as any).ShoPrice = 2900;
        } else {
          (s as any).ShoStyle = 0;
          (s as any).ShoQuality = 6;
          (s as any).ShoStrength = 450000;
          (s as any).ShoHeels = 1;
          (s as any).ShoCut = 1;
          (s as any).ShoStyle2 = 2;
          (s as any).ShoSport = 1;
          (s as any).ShoPrice = 2900;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).ShoStyle = 0;
            (s as any).ShoQuality = 7;
            (s as any).ShoStrength = 500000;
            (s as any).ShoHeels = 1;
            (s as any).ShoCut = 1;
            (s as any).ShoStyle2 = 2;
            (s as any).ShoSport = 1;
            (s as any).ShoPrice = 3000;
          } else {
            (s as any).ShoStyle = 0;
            (s as any).ShoQuality = 7;
            (s as any).ShoStrength = 500000;
            (s as any).ShoHeels = 1;
            (s as any).ShoCut = 1;
            (s as any).ShoStyle2 = 2;
            (s as any).ShoSport = 1;
            (s as any).ShoPrice = 3000;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).ShoStyle = 0;
              (s as any).ShoQuality = 4;
              (s as any).ShoStrength = 350000;
              (s as any).ShoHeels = 1;
              (s as any).ShoCut = 1;
              (s as any).ShoStyle2 = 2;
              (s as any).ShoSport = 1;
              (s as any).ShoPrice = 2700;
            } else {
              (s as any).ShoStyle = 0;
              (s as any).ShoQuality = 4;
              (s as any).ShoStrength = 350000;
              (s as any).ShoHeels = 1;
              (s as any).ShoCut = 1;
              (s as any).ShoBimbo = 1;
              (s as any).ShoStyle2 = 2;
              (s as any).ShoSport = 1;
              (s as any).ShoPrice = 2700;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).ShoStyle = 0;
                (s as any).ShoQuality = 4;
                (s as any).ShoStrength = 350000;
                (s as any).ShoHeels = 1;
                (s as any).ShoCut = 1;
                (s as any).ShoStyle2 = 2;
                (s as any).ShoSport = 1;
                (s as any).ShoPrice = 2700;
              } else {
                (s as any).ShoStyle = 0;
                (s as any).ShoQuality = 6;
                (s as any).ShoStrength = 450000;
                (s as any).ShoHeels = 1;
                (s as any).ShoCut = 1;
                (s as any).ShoStyle2 = 2;
                (s as any).ShoSport = 1;
                (s as any).ShoPrice = 2900;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).ShoStyle = 0;
                  (s as any).ShoQuality = 6;
                  (s as any).ShoStrength = 450000;
                  (s as any).ShoHeels = 1;
                  (s as any).ShoCut = 1;
                  (s as any).ShoStyle2 = 2;
                  (s as any).ShoSport = 1;
                  (s as any).ShoGoth = 1;
                  (s as any).ShoPrice = 2900;
                } else {
                  (s as any).ShoStyle = 0;
                  (s as any).ShoQuality = 4;
                  (s as any).ShoStrength = 350000;
                  (s as any).ShoHeels = 1;
                  (s as any).ShoCut = 1;
                  (s as any).ShoStyle2 = 2;
                  (s as any).ShoSport = 1;
                  (s as any).ShoPrice = 2700;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).ShoStyle = 0;
                    (s as any).ShoQuality = 4;
                    (s as any).ShoStrength = 350000;
                    (s as any).ShoHeels = 1;
                    (s as any).ShoCut = 1;
                    (s as any).ShoStyle2 = 2;
                    (s as any).ShoSport = 1;
                    (s as any).ShoPrice = 2700;
                  } else {
                    (s as any).ShoStyle = 0;
                    (s as any).ShoQuality = 4;
                    (s as any).ShoStrength = 350000;
                    (s as any).ShoHeels = 1;
                    (s as any).ShoCut = 1;
                    (s as any).ShoStyle2 = 2;
                    (s as any).ShoSport = 1;
                    (s as any).ShoPrice = 2700;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).ShoStyle = 0;
                      (s as any).ShoQuality = 4;
                      (s as any).ShoStrength = 350000;
                      (s as any).ShoHeels = 1;
                      (s as any).ShoCut = 1;
                      (s as any).ShoStyle2 = 2;
                      (s as any).ShoSport = 1;
                      (s as any).ShoGoth = 1;
                      (s as any).ShoPrice = 2700;
                    } else {
                      (s as any).ShoStyle = 0;
                      (s as any).ShoQuality = 5;
                      (s as any).ShoStrength = 400000;
                      (s as any).ShoHeels = 1;
                      (s as any).ShoCut = 1;
                      (s as any).ShoStyle2 = 2;
                      (s as any).ShoSport = 1;
                      (s as any).ShoPrice = 2800;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).ShoStyle = 0;
                        (s as any).ShoQuality = 4;
                        (s as any).ShoStrength = 350000;
                        (s as any).ShoHeels = 1;
                        (s as any).ShoCut = 1;
                        (s as any).ShoStyle2 = 2;
                        (s as any).ShoSport = 1;
                        (s as any).ShoPrice = 2700;
                      } else {
                        (s as any).ShoStyle = 0;
                        (s as any).ShoQuality = 4;
                        (s as any).ShoStrength = 350000;
                        (s as any).ShoHeels = 1;
                        (s as any).ShoCut = 1;
                        (s as any).ShoStyle2 = 2;
                        (s as any).ShoSport = 1;
                        (s as any).ShoPrice = 2700;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).ShoStyle = 0;
                          (s as any).ShoQuality = 4;
                          (s as any).ShoStrength = 350000;
                          (s as any).ShoHeels = 1;
                          (s as any).ShoCut = 1;
                          (s as any).ShoStyle2 = 2;
                          (s as any).ShoSport = 1;
                          (s as any).ShoPrice = 2700;
                        } else {
                          (s as any).ShoStyle = 0;
                          (s as any).ShoQuality = 5;
                          (s as any).ShoStrength = 400000;
                          (s as any).ShoHeels = 1;
                          (s as any).ShoCut = 1;
                          (s as any).ShoStyle2 = 2;
                          (s as any).ShoSport = 1;
                          (s as any).ShoPrice = 2800;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).ShoStyle = 0;
                            (s as any).ShoQuality = 5;
                            (s as any).ShoStrength = 400000;
                            (s as any).ShoHeels = 1;
                            (s as any).ShoCut = 1;
                            (s as any).ShoBimbo = 1;
                            (s as any).ShoStyle2 = 2;
                            (s as any).ShoSport = 1;
                            (s as any).ShoPrice = 2800;
                          } else {
                            (s as any).ShoStyle = 0;
                            (s as any).ShoQuality = 5;
                            (s as any).ShoStrength = 400000;
                            (s as any).ShoHeels = 1;
                            (s as any).ShoCut = 1;
                            (s as any).ShoStyle2 = 2;
                            (s as any).ShoSport = 1;
                            (s as any).ShoPrice = 2800;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).ShoStyle = 0;
                              (s as any).ShoQuality = 6;
                              (s as any).ShoStrength = 450000;
                              (s as any).ShoHeels = 1;
                              (s as any).ShoCut = 1;
                              (s as any).ShoStyle2 = 2;
                              (s as any).ShoSport = 1;
                              (s as any).ShoPrice = 2900;
                            } else {
                              (s as any).ShoStyle = 0;
                              (s as any).ShoQuality = 6;
                              (s as any).ShoStrength = 450000;
                              (s as any).ShoHeels = 1;
                              (s as any).ShoCut = 1;
                              (s as any).ShoStyle2 = 2;
                              (s as any).ShoSport = 1;
                              (s as any).ShoPrice = 2900;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).ShoStyle = 0;
                                (s as any).ShoQuality = 6;
                                (s as any).ShoStrength = 450000;
                                (s as any).ShoHeels = 1;
                                (s as any).ShoCut = 1;
                                (s as any).ShoStyle2 = 2;
                                (s as any).ShoSport = 1;
                                (s as any).ShoPrice = 2900;
                              } else {
                                (s as any).ShoStyle = 0;
                                (s as any).ShoQuality = 4;
                                (s as any).ShoStrength = 350000;
                                (s as any).ShoHeels = 1;
                                (s as any).ShoCut = 1;
                                (s as any).ShoStyle2 = 2;
                                (s as any).ShoSport = 1;
                                (s as any).ShoPrice = 2700;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).ShoStyle = 0;
                                  (s as any).ShoQuality = 5;
                                  (s as any).ShoStrength = 400000;
                                  (s as any).ShoHeels = 1;
                                  (s as any).ShoCut = 1;
                                  (s as any).ShoStyle2 = 2;
                                  (s as any).ShoSport = 1;
                                  (s as any).ShoPrice = 2800;
                                } else {
                                  (s as any).ShoStyle = 0;
                                  (s as any).ShoQuality = 5;
                                  (s as any).ShoStrength = 400000;
                                  (s as any).ShoHeels = 1;
                                  (s as any).ShoCut = 1;
                                  (s as any).ShoStyle2 = 2;
                                  (s as any).ShoSport = 1;
                                  (s as any).ShoPrice = 2800;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).ShoStyle = 0;
                                    (s as any).ShoQuality = 5;
                                    (s as any).ShoStrength = 400000;
                                    (s as any).ShoHeels = 1;
                                    (s as any).ShoCut = 1;
                                    (s as any).ShoStyle2 = 2;
                                    (s as any).ShoSport = 1;
                                    (s as any).ShoPrice = 2800;
                                  } else {
                                    (s as any).ShoStyle = 0;
                                    (s as any).ShoQuality = 5;
                                    (s as any).ShoStrength = 400000;
                                    (s as any).ShoHeels = 1;
                                    (s as any).ShoCut = 1;
                                    (s as any).ShoStyle2 = 2;
                                    (s as any).ShoSport = 1;
                                    (s as any).ShoPrice = 2800;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).ShoStyle = 0;
                                      (s as any).ShoQuality = 6;
                                      (s as any).ShoStrength = 450000;
                                      (s as any).ShoHeels = 1;
                                      (s as any).ShoCut = 1;
                                      (s as any).ShoStyle2 = 2;
                                      (s as any).ShoSport = 1;
                                      (s as any).ShoPrice = 2900;
                                    } else {
                                      (s as any).ShoStyle = 0;
                                      (s as any).ShoQuality = 6;
                                      (s as any).ShoStrength = 450000;
                                      (s as any).ShoHeels = 1;
                                      (s as any).ShoCut = 1;
                                      (s as any).ShoStyle2 = 2;
                                      (s as any).ShoSport = 1;
                                      (s as any).ShoGoth = 1;
                                      (s as any).ShoPrice = 2900;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).ShoStyle = 0;
                                        (s as any).ShoQuality = 4;
                                        (s as any).ShoStrength = 350000;
                                        (s as any).ShoHeels = 1;
                                        (s as any).ShoCut = 1;
                                        (s as any).ShoStyle2 = 2;
                                        (s as any).ShoSport = 1;
                                        (s as any).ShoPrice = 2700;
                                      } else {
                                        (s as any).ShoStyle = 0;
                                        (s as any).ShoQuality = 5;
                                        (s as any).ShoStrength = 400000;
                                        (s as any).ShoHeels = 1;
                                        (s as any).ShoCut = 1;
                                        (s as any).ShoStyle2 = 2;
                                        (s as any).ShoSport = 1;
                                        (s as any).ShoPrice = 2800;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).ShoStyle = 0;
                                          (s as any).ShoQuality = 5;
                                          (s as any).ShoStrength = 400000;
                                          (s as any).ShoHeels = 1;
                                          (s as any).ShoCut = 1;
                                          (s as any).ShoStyle2 = 2;
                                          (s as any).ShoSport = 1;
                                          (s as any).ShoPrice = 2800;
                                        } else {
                                          (s as any).ShoStyle = 0;
                                          (s as any).ShoQuality = 5;
                                          (s as any).ShoStrength = 400000;
                                          (s as any).ShoHeels = 1;
                                          (s as any).ShoCut = 1;
                                          (s as any).ShoStyle2 = 2;
                                          (s as any).ShoSport = 1;
                                          (s as any).ShoPrice = 2800;
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

export const _attributes_danilovich_shoes: LocationDef = {
  name: '_attributes_danilovich_shoes',
  region: 'other',
  enter: enter,
};
