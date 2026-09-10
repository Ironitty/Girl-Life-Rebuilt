// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 1125 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 1200
  // TODO-QSP: 2: 1250
  // TODO-QSP: CloQuality ranges from 1 to 2
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 2;
    (s as any).CloStrength = 123750;
    (s as any).CloThinness = 2;
    (s as any).CloTopCut = 3;
    (s as any).CloPantsShortness = 1;
    (s as any).CloPrice = 1250;
  } else {
    (s as any).CloQuality = 2;
    (s as any).CloStrength = 123750;
    (s as any).CloThinness = 4;
    (s as any).CloTopCut = 2;
    (s as any).CloPantsShortness = 5;
    (s as any).CloPrice = 1250;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 1;
      (s as any).CloStrength = 118125;
      (s as any).CloThinness = 4;
      (s as any).CloTopCut = 2;
      (s as any).CloPantsShortness = 5;
      (s as any).CloPrice = 1200;
    } else {
      (s as any).CloQuality = 1;
      (s as any).CloStrength = 118125;
      (s as any).CloThinness = 4;
      (s as any).CloTopCut = 2;
      (s as any).CloPantsShortness = 4;
      (s as any).CloPrice = 1200;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 1;
        (s as any).CloStrength = 118125;
        (s as any).CloThinness = 5;
        (s as any).CloTopCut = 2;
        (s as any).CloPantsShortness = 5;
        (s as any).CloPrice = 1200;
      } else {
        (s as any).CloQuality = 2;
        (s as any).CloStrength = 123750;
        (s as any).CloThinness = 5;
        (s as any).CloTopCut = 2;
        (s as any).CloPantsShortness = 5;
        (s as any).CloStyle = 4;
        (s as any).CloProstitute = 1;
        (s as any).CloPrice = 1250;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 1;
          (s as any).CloStrength = 118125;
          (s as any).CloThinness = 4;
          (s as any).CloTopCut = 2;
          (s as any).CloPantsShortness = 5;
          (s as any).CloPrice = 1200;
        } else {
          (s as any).CloQuality = 1;
          (s as any).CloStrength = 118125;
          (s as any).CloThinness = 4;
          (s as any).CloTopCut = 2;
          (s as any).CloPantsShortness = 5;
          (s as any).CloPrice = 1200;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 2;
            (s as any).CloStrength = 123750;
            (s as any).CloThinness = 4;
            (s as any).CloTopCut = 2;
            (s as any).CloPantsShortness = 5;
            (s as any).CloStyle = 4;
            (s as any).CloProstitute = 1;
            (s as any).CloPrice = 1250;
          } else {
            (s as any).CloQuality = 2;
            (s as any).CloStrength = 123750;
            (s as any).CloThinness = 4;
            (s as any).CloTopCut = 2;
            (s as any).CloPantsShortness = 5;
            (s as any).CloPrice = 1250;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 2;
              (s as any).CloStrength = 123750;
              (s as any).CloThinness = 5;
              (s as any).CloTopCut = 2;
              (s as any).CloPantsShortness = 5;
              (s as any).CloStyle = 4;
              (s as any).CloProstitute = 1;
              (s as any).CloPrice = 1250;
            } else {
              (s as any).CloQuality = 1;
              (s as any).CloStrength = 118125;
              (s as any).CloThinness = 5;
              (s as any).CloTopCut = 2;
              (s as any).CloPantsShortness = 5;
              (s as any).CloStyle = 4;
              (s as any).CloProstitute = 1;
              (s as any).CloPrice = 1200;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 2;
                (s as any).CloStrength = 123750;
                (s as any).CloThinness = 4;
                (s as any).CloTopCut = 2;
                (s as any).CloPantsShortness = 5;
                (s as any).CloPrice = 1250;
              } else {
                (s as any).CloQuality = 2;
                (s as any).CloStrength = 123750;
                (s as any).CloThinness = 4;
                (s as any).CloTopCut = 3;
                (s as any).CloPantsShortness = 5;
                (s as any).CloStyle = 4;
                (s as any).CloProstitute = 1;
                (s as any).CloPrice = 1250;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 2;
                  (s as any).CloStrength = 123750;
                  (s as any).CloThinness = 4;
                  (s as any).CloTopCut = 4;
                  (s as any).CloPantsShortness = 4;
                  (s as any).CloGoth = 1;
                  (s as any).CloStyle = 4;
                  (s as any).CloProstitute = 1;
                  (s as any).CloPrice = 1250;
                } else {
                  (s as any).CloQuality = 2;
                  (s as any).CloStrength = 123750;
                  (s as any).CloThinness = 4;
                  (s as any).CloBra = 1;
                  (s as any).CloPantsShortness = 5;
                  (s as any).CloStyle = 4;
                  (s as any).CloProstitute = 1;
                  (s as any).CloPrice = 1250;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 1;
                    (s as any).CloStrength = 118125;
                    (s as any).CloThinness = 4;
                    (s as any).CloBra = 1;
                    (s as any).CloPantsShortness = 5;
                    (s as any).CloStyle = 4;
                    (s as any).CloProstitute = 1;
                    (s as any).CloPrice = 1200;
                  } else {
                    (s as any).CloQuality = 1;
                    (s as any).CloStrength = 118125;
                    (s as any).CloThinness = 4;
                    (s as any).CloBra = 1;
                    (s as any).CloPantsShortness = 5;
                    (s as any).CloStyle = 4;
                    (s as any).CloProstitute = 1;
                    (s as any).CloPrice = 1200;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 1;
                      (s as any).CloStrength = 118125;
                      (s as any).CloThinness = 4;
                      (s as any).CloBra = 1;
                      (s as any).CloPantsShortness = 5;
                      (s as any).CloStyle = 4;
                      (s as any).CloProstitute = 1;
                      (s as any).CloBimbo = 1;
                      (s as any).CloPrice = 1200;
                    } else {
                      (s as any).CloQuality = 1;
                      (s as any).CloStrength = 118125;
                      (s as any).CloThinness = 4;
                      (s as any).CloBra = 1;
                      (s as any).CloPantsShortness = 5;
                      (s as any).CloStyle = 4;
                      (s as any).CloProstitute = 1;
                      (s as any).CloPrice = 1200;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).CloQuality = 2;
                        (s as any).CloStrength = 123750;
                        (s as any).CloThinness = 3;
                        (s as any).CloTopCut = 1;
                        (s as any).CloSkirtShortness = 4;
                        (s as any).CloDress = 1;
                        (s as any).CloPrice = 1250;
                      } else {
                        (s as any).CloQuality = 2;
                        (s as any).CloStrength = 123750;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 2;
                        (s as any).CloSkirtShortness = 4;
                        (s as any).CloPrice = 1250;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).CloQuality = 1;
                          (s as any).CloStrength = 118125;
                          (s as any).CloThinness = 4;
                          (s as any).CloTopCut = 2;
                          (s as any).CloSkirtShortness = 4;
                          (s as any).CloPrice = 1200;
                        } else {
                          (s as any).CloQuality = 1;
                          (s as any).CloStrength = 118125;
                          (s as any).CloThinness = 4;
                          (s as any).CloTopCut = 2;
                          (s as any).CloSkirtShortness = 4;
                          (s as any).CloPrice = 1200;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).CloQuality = 2;
                            (s as any).CloStrength = 123750;
                            (s as any).CloThinness = 5;
                            (s as any).CloTopCut = 2;
                            (s as any).CloSkirtShortness = 4;
                            (s as any).CloStyle = 4;
                            (s as any).CloProstitute = 1;
                            (s as any).CloPrice = 1250;
                          } else {
                            (s as any).CloQuality = 2;
                            (s as any).CloStrength = 123750;
                            (s as any).CloThinness = 4;
                            (s as any).CloTopCut = 2;
                            (s as any).CloSkirtShortness = 4;
                            (s as any).CloPrice = 1250;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).CloQuality = 2;
                              (s as any).CloStrength = 123750;
                              (s as any).CloThinness = 4;
                              (s as any).CloTopCut = 2;
                              (s as any).CloSkirtShortness = 4;
                              (s as any).CloStyle = 4;
                              (s as any).CloProstitute = 1;
                              (s as any).CloBimbo = 1;
                              (s as any).CloPrice = 1250;
                            } else {
                              (s as any).CloQuality = 2;
                              (s as any).CloStrength = 123750;
                              (s as any).CloThinness = 4;
                              (s as any).CloTopCut = 2;
                              (s as any).CloSkirtShortness = 4;
                              (s as any).CloStyle = 4;
                              (s as any).CloProstitute = 1;
                              (s as any).CloPrice = 1250;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).CloQuality = 1;
                                (s as any).CloStrength = 118125;
                                (s as any).CloThinness = 4;
                                (s as any).CloTopCut = 2;
                                (s as any).CloSkirtShortness = 4;
                                (s as any).CloPrice = 1200;
                              } else {
                                (s as any).CloQuality = 2;
                                (s as any).CloStrength = 123750;
                                (s as any).CloThinness = 4;
                                (s as any).CloTopCut = 2;
                                (s as any).CloSkirtShortness = 4;
                                (s as any).CloStyle = 4;
                                (s as any).CloProstitute = 1;
                                (s as any).CloPrice = 1250;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).CloQuality = 1;
                                  (s as any).CloStrength = 118125;
                                  (s as any).CloThinness = 4;
                                  (s as any).CloTopCut = 2;
                                  (s as any).CloSkirtShortness = 4;
                                  (s as any).CloPrice = 1200;
                                } else {
                                  (s as any).CloQuality = 1;
                                  (s as any).CloStrength = 118125;
                                  (s as any).CloThinness = 4;
                                  (s as any).CloTopCut = 2;
                                  (s as any).CloSkirtShortness = 5;
                                  (s as any).CloStyle = 4;
                                  (s as any).CloProstitute = 1;
                                  (s as any).CloPrice = 1200;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).CloQuality = 1;
                                    (s as any).CloStrength = 118125;
                                    (s as any).CloThinness = 4;
                                    (s as any).CloTopCut = 2;
                                    (s as any).CloSkirtShortness = 5;
                                    (s as any).CloPrice = 1200;
                                  } else {
                                    (s as any).CloQuality = 1;
                                    (s as any).CloStrength = 118125;
                                    (s as any).CloThinness = 5;
                                    (s as any).CloTopCut = 2;
                                    (s as any).CloSkirtShortness = 5;
                                    (s as any).CloStyle = 4;
                                    (s as any).CloProstitute = 1;
                                    (s as any).CloPrice = 1200;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).CloQuality = 1;
                                      (s as any).CloStrength = 118125;
                                      (s as any).CloThinness = 4;
                                      (s as any).CloTopCut = 2;
                                      (s as any).CloSkirtShortness = 5;
                                      (s as any).CloStyle = 4;
                                      (s as any).CloProstitute = 1;
                                      (s as any).CloPrice = 1200;
                                    } else {
                                      (s as any).CloQuality = 1;
                                      (s as any).CloStrength = 118125;
                                      (s as any).CloThinness = 5;
                                      (s as any).CloTopCut = 2;
                                      (s as any).CloSkirtShortness = 5;
                                      (s as any).CloStyle = 4;
                                      (s as any).CloProstitute = 1;
                                      (s as any).CloBimbo = 1;
                                      (s as any).CloPrice = 1200;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).CloQuality = 1;
                                        (s as any).CloStrength = 118125;
                                        (s as any).CloThinness = 4;
                                        (s as any).CloTopCut = 3;
                                        (s as any).CloSkirtShortness = 6;
                                        (s as any).CloStyle = 4;
                                        (s as any).CloProstitute = 1;
                                        (s as any).CloPrice = 1200;
                                      } else {
                                        (s as any).CloQuality = 1;
                                        (s as any).CloStrength = 118125;
                                        (s as any).CloThinness = 5;
                                        (s as any).CloTopCut = 4;
                                        (s as any).CloSkirtShortness = 5;
                                        (s as any).CloStyle = 4;
                                        (s as any).CloProstitute = 1;
                                        (s as any).CloPrice = 1200;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).CloQuality = 1;
                                          (s as any).CloStrength = 118125;
                                          (s as any).CloThinness = 4;
                                          (s as any).CloTopCut = 2;
                                          (s as any).CloSkirtShortness = 6;
                                          (s as any).CloPrice = 1200;
                                        } else {
                                          (s as any).CloQuality = 1;
                                          (s as any).CloStrength = 118125;
                                          (s as any).CloThinness = 5;
                                          (s as any).CloBra = 1;
                                          (s as any).CloSkirtShortness = 6;
                                          (s as any).CloStyle = 4;
                                          (s as any).CloProstitute = 1;
                                          (s as any).CloPrice = 1200;
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

export const _attributes_market_outfits: LocationDef = {
  name: '_attributes_market_outfits',
  region: 'other',
  enter: enter,
};
