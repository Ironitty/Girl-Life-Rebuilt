// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: BraPrice ~ 600 * (20 + BraQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 3: 700
  // TODO-QSP: 4: 750
  // TODO-QSP: BraQuality ranges from 3 to 4
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).BraQuality = 3;
    (s as any).BraStrength = 80000;
    (s as any).BraMaterial = 6;
    (s as any).BraType = 9;
    (s as any).BraFun = 1;
    (s as any).BraThinness = 4;
    (s as any).BraPrice = 700;
    (s as any).underwear['pair'] = 1;
  } else {
    (s as any).BraQuality = 4;
    (s as any).BraStrength = 100000;
    (s as any).BraMaterial = 6;
    (s as any).BraType = 3;
    (s as any).BraFun = 1;
    (s as any).BraThinness = 4;
    (s as any).BraCover = 1;
    (s as any).BraPrice = 750;
    (s as any).underwear['pair'] = 2;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).BraQuality = 4;
      (s as any).BraStrength = 100000;
      (s as any).BraMaterial = 6;
      (s as any).BraType = 5;
      (s as any).BraFun = 1;
      (s as any).BraThinness = 4;
      (s as any).BraPrice = 750;
      (s as any).underwear['pair'] = 3;
    } else {
      (s as any).BraQuality = 4;
      (s as any).BraStrength = 100000;
      (s as any).BraMaterial = 6;
      (s as any).BraType = 9;
      (s as any).BraFun = 1;
      (s as any).BraThinness = 2;
      (s as any).BraPrice = 750;
      (s as any).underwear['pair'] = 4;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).BraQuality = 4;
        (s as any).BraStrength = 100000;
        (s as any).BraMaterial = 6;
        (s as any).BraType = 5;
        (s as any).BraFun = 1;
        (s as any).BraThinness = 4;
        (s as any).BraPrice = 750;
        (s as any).underwear['pair'] = 5;
      } else {
        (s as any).BraQuality = 4;
        (s as any).BraStrength = 100000;
        (s as any).BraMaterial = 6;
        (s as any).BraType = 9;
        (s as any).BraFun = 1;
        (s as any).BraThinness = 4;
        (s as any).BraPrice = 750;
        (s as any).underwear['pair'] = 6;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).BraQuality = 3;
          (s as any).BraStrength = 80000;
          (s as any).BraMaterial = 6;
          (s as any).BraType = 9;
          (s as any).BraFun = 1;
          (s as any).BraThinness = 4;
          (s as any).BraCover = 1;
          (s as any).BraPrice = 700;
          (s as any).underwear['pair'] = 7;
        } else {
          (s as any).BraQuality = 4;
          (s as any).BraStrength = 100000;
          (s as any).BraMaterial = 6;
          (s as any).BraType = 7;
          (s as any).BraFun = 1;
          (s as any).BraThinness = 4;
          (s as any).BraPrice = 750;
          (s as any).underwear['pair'] = 8;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).BraQuality = 4;
            (s as any).BraStrength = 100000;
            (s as any).BraMaterial = 6;
            (s as any).BraType = 5;
            (s as any).BraFun = 1;
            (s as any).BraThinness = 4;
            (s as any).BraCover = 1;
            (s as any).BraPrice = 750;
            (s as any).underwear['pair'] = 9;
          } else {
            (s as any).BraQuality = 3;
            (s as any).BraStrength = 80000;
            (s as any).BraMaterial = 6;
            (s as any).BraType = 5;
            (s as any).BraFun = 1;
            (s as any).BraThinness = 4;
            (s as any).BraCover = 2;
            (s as any).BraPrice = 700;
            (s as any).underwear['pair'] = 10;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).BraQuality = 4;
              (s as any).BraStrength = 100000;
              (s as any).BraMaterial = 6;
              (s as any).BraType = 9;
              (s as any).BraFun = 1;
              (s as any).BraThinness = 5;
              (s as any).BraCover = 2;
              (s as any).BraPrice = 750;
              (s as any).underwear['pair'] = 11;
            } else {
              (s as any).BraQuality = 3;
              (s as any).BraStrength = 80000;
              (s as any).BraMaterial = 6;
              (s as any).BraType = 1;
              (s as any).BraFun = 1;
              (s as any).BraThinness = 4;
              (s as any).BraCover = 1;
              (s as any).BraPrice = 700;
              (s as any).underwear['pair'] = 12;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).BraQuality = 4;
                (s as any).BraStrength = 100000;
                (s as any).BraMaterial = 6;
                (s as any).BraType = 9;
                (s as any).BraFun = 1;
                (s as any).BraThinness = 4;
                (s as any).BraCover = 1;
                (s as any).BraPrice = 750;
                (s as any).underwear['pair'] = 13;
              } else {
                (s as any).BraQuality = 3;
                (s as any).BraStrength = 80000;
                (s as any).BraType = 5;
                (s as any).BraFun = 1;
                (s as any).BraThinness = 2;
                (s as any).BraPrice = 700;
                (s as any).underwear['pair'] = 14;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).BraQuality = 3;
                  (s as any).BraStrength = 80000;
                  (s as any).BraMaterial = 6;
                  (s as any).BraType = 1;
                  (s as any).BraFun = 1;
                  (s as any).BraThinness = 4;
                  (s as any).BraCover = 1;
                  (s as any).BraPrice = 700;
                  (s as any).underwear['pair'] = 15;
                } else {
                  (s as any).BraQuality = 4;
                  (s as any).BraStrength = 100000;
                  (s as any).BraMaterial = 6;
                  (s as any).BraType = 7;
                  (s as any).BraFun = 1;
                  (s as any).BraThinness = 2;
                  (s as any).BraPrice = 750;
                  (s as any).underwear['pair'] = 16;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).BraQuality = 4;
                    (s as any).BraStrength = 100000;
                    (s as any).BraMaterial = 6;
                    (s as any).BraType = 1;
                    (s as any).BraFun = 1;
                    (s as any).BraThinness = 4;
                    (s as any).BraPrice = 750;
                    (s as any).underwear['pair'] = 17;
                  } else {
                    (s as any).BraQuality = 4;
                    (s as any).BraStrength = 100000;
                    (s as any).BraMaterial = 6;
                    (s as any).BraType = 3;
                    (s as any).BraFun = 1;
                    (s as any).BraThinness = 5;
                    (s as any).BraCover = 2;
                    (s as any).BraPrice = 750;
                    (s as any).underwear['pair'] = 18;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).BraQuality = 3;
                      (s as any).BraStrength = 80000;
                      (s as any).BraMaterial = 6;
                      (s as any).BraType = 7;
                      (s as any).BraFun = 1;
                      (s as any).BraThinness = 4;
                      (s as any).BraPrice = 700;
                      (s as any).underwear['pair'] = 19;
                    } else {
                      (s as any).BraQuality = 4;
                      (s as any).BraStrength = 100000;
                      (s as any).BraMaterial = 6;
                      (s as any).BraType = 5;
                      (s as any).BraFun = 1;
                      (s as any).BraThinness = 5;
                      (s as any).BraCover = 2;
                      (s as any).BraPrice = 750;
                      (s as any).underwear['pair'] = 20;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).BraQuality = 3;
                        (s as any).BraStrength = 80000;
                        (s as any).BraType = 8;
                        (s as any).BraFun = 1;
                        (s as any).BraThinness = 2;
                        (s as any).BraCover = 4;
                        (s as any).BraPrice = 700;
                        (s as any).underwear['pair'] = 21;
                      } else {
                        (s as any).BraQuality = 4;
                        (s as any).BraStrength = 100000;
                        (s as any).BraMaterial = 6;
                        (s as any).BraType = 8;
                        (s as any).BraFun = 1;
                        (s as any).BraThinness = 4;
                        (s as any).BraCover = 4;
                        (s as any).BraPrice = 750;
                        (s as any).underwear['pair'] = 22;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).BraQuality = 3;
                          (s as any).BraStrength = 80000;
                          (s as any).BraType = 8;
                          (s as any).BraFun = 1;
                          (s as any).BraThinness = 6;
                          (s as any).BraCover = 4;
                          (s as any).BraPrice = 700;
                          (s as any).underwear['pair'] = 23;
                        } else {
                          (s as any).BraQuality = 3;
                          (s as any).BraStrength = 80000;
                          (s as any).BraMaterial = 3;
                          (s as any).BraType = 9;
                          (s as any).BraFun = 1;
                          (s as any).BraThinness = 4;
                          (s as any).BraCover = 1;
                          (s as any).BraPrice = 700;
                          (s as any).underwear['pair'] = 24;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).BraQuality = 3;
                            (s as any).BraStrength = 80000;
                            (s as any).BraMaterial = 6;
                            (s as any).BraType = 7;
                            (s as any).BraFun = 1;
                            (s as any).BraThinness = 5;
                            (s as any).BraCover = 2;
                            (s as any).BraPrice = 700;
                            (s as any).underwear['pair'] = 25;
                          } else {
                            (s as any).BraQuality = 3;
                            (s as any).BraStrength = 80000;
                            (s as any).BraMaterial = 6;
                            (s as any).BraType = 7;
                            (s as any).BraFun = 1;
                            (s as any).BraThinness = 5;
                            (s as any).BraCover = 2;
                            (s as any).BraPrice = 700;
                            (s as any).underwear['pair'] = 26;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).BraQuality = 3;
                              (s as any).BraStrength = 80000;
                              (s as any).BraMaterial = 6;
                              (s as any).BraType = 7;
                              (s as any).BraFun = 1;
                              (s as any).BraThinness = 5;
                              (s as any).BraCover = 2;
                              (s as any).BraPrice = 700;
                              (s as any).underwear['pair'] = 27;
                            } else {
                              (s as any).BraQuality = 3;
                              (s as any).BraStrength = 80000;
                              (s as any).BraMaterial = 6;
                              (s as any).BraType = 7;
                              (s as any).BraFun = 1;
                              (s as any).BraThinness = 5;
                              (s as any).BraCover = 2;
                              (s as any).BraPrice = 700;
                              (s as any).underwear['pair'] = 28;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).BraQuality = 3;
                                (s as any).BraStrength = 80000;
                                (s as any).BraMaterial = 3;
                                (s as any).BraType = 1;
                                (s as any).BraFun = 1;
                                (s as any).BraThinness = 5;
                                (s as any).BraCover = 2;
                                (s as any).BraPrice = 700;
                                (s as any).underwear['pair'] = 29;
                              } else {
                                (s as any).BraQuality = 3;
                                (s as any).BraStrength = 80000;
                                (s as any).BraMaterial = 6;
                                (s as any).BraType = 7;
                                (s as any).BraFun = 1;
                                (s as any).BraThinness = 5;
                                (s as any).BraCover = 2;
                                (s as any).BraPrice = 700;
                                (s as any).underwear['pair'] = 30;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).BraQuality = 3;
                                  (s as any).BraStrength = 80000;
                                  (s as any).BraMaterial = 3;
                                  (s as any).BraType = 9;
                                  (s as any).BraFun = 1;
                                  (s as any).BraThinness = 5;
                                  (s as any).BraCover = 3;
                                  (s as any).BraPrice = 700;
                                  (s as any).underwear['pair'] = 31;
                                } else {
                                  (s as any).BraQuality = 4;
                                  (s as any).BraStrength = 100000;
                                  (s as any).BraMaterial = 6;
                                  (s as any).BraType = 3;
                                  (s as any).BraFun = 1;
                                  (s as any).BraThinness = 5;
                                  (s as any).BraCover = 3;
                                  (s as any).BraPrice = 750;
                                  (s as any).underwear['pair'] = 32;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).BraQuality = 3;
                                    (s as any).BraStrength = 80000;
                                    (s as any).BraMaterial = 3;
                                    (s as any).BraType = 5;
                                    (s as any).BraFun = 1;
                                    (s as any).BraThinness = 5;
                                    (s as any).BraCover = 3;
                                    (s as any).BraPrice = 700;
                                    (s as any).underwear['pair'] = 33;
                                  } else {
                                    (s as any).BraQuality = 4;
                                    (s as any).BraStrength = 100000;
                                    (s as any).BraMaterial = 3;
                                    (s as any).BraType = 5;
                                    (s as any).BraFun = 1;
                                    (s as any).BraThinness = 5;
                                    (s as any).BraCover = 3;
                                    (s as any).BraPrice = 750;
                                    (s as any).underwear['pair'] = 34;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).BraQuality = 4;
                                      (s as any).BraStrength = 100000;
                                      (s as any).BraMaterial = 3;
                                      (s as any).BraType = 10;
                                      (s as any).BraFun = 1;
                                      (s as any).BraThinness = 4;
                                      (s as any).BraCover = 1;
                                      (s as any).BraPrice = 750;
                                      (s as any).underwear['pair'] = 35;
                                    } else {
                                      (s as any).BraQuality = 4;
                                      (s as any).BraStrength = 100000;
                                      (s as any).BraMaterial = 6;
                                      (s as any).BraType = 5;
                                      (s as any).BraFun = 1;
                                      (s as any).BraThinness = 4;
                                      (s as any).BraCover = 1;
                                      (s as any).BraPrice = 750;
                                      (s as any).underwear['pair'] = 36;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).BraQuality = 3;
                                        (s as any).BraStrength = 80000;
                                        (s as any).BraMaterial = 3;
                                        (s as any).BraType = 5;
                                        (s as any).BraFun = 1;
                                        (s as any).BraThinness = 4;
                                        (s as any).BraCover = 1;
                                        (s as any).BraPrice = 700;
                                        (s as any).underwear['pair'] = 37;
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

export const _attributes_salacious_bras: LocationDef = {
  name: '_attributes_salacious_bras',
  region: 'other',
  enter: enter,
};
