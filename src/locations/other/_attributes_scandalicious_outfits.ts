// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 2250 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 2: 2500
  // TODO-QSP: 3: 2600
  // TODO-QSP: 4: 2700
  // TODO-QSP: 5: 2800
  // TODO-QSP: CloQuality ranges from 2 to 5, please avoid adding too many 5s
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 5;
    (s as any).CloStrength = 140625;
    (s as any).CloThinness = 5;
    (s as any).CloTopCut = 4;
    (s as any).CloPantsShortness = 1;
    (s as any).CloOnePiece = 1;
    (s as any).CloPrice = 2800;
  } else {
    (s as any).CloQuality = 3;
    (s as any).CloStrength = 129375;
    (s as any).CloThinness = 5;
    (s as any).CloTopCut = 4;
    (s as any).CloPantsShortness = 6;
    (s as any).CloOnePiece = 1;
    (s as any).CloBimbo = 1;
    (s as any).CloPrice = 2600;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 3;
      (s as any).CloStrength = 129375;
      (s as any).CloThinness = 6;
      (s as any).CloTopCut = 3;
      (s as any).CloPantsShortness = 6;
      (s as any).CloOnePiece = 1;
      (s as any).CloStyle = 4;
      (s as any).CloProstitute = 1;
      (s as any).CloPrice = 2600;
    } else {
      (s as any).CloQuality = 3;
      (s as any).CloStrength = 129375;
      (s as any).CloThinness = 5;
      (s as any).CloTopCut = 4;
      (s as any).CloPantsShortness = 1;
      (s as any).CloCoverBack = 3;
      (s as any).CloPrice = 2600;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 4;
        (s as any).CloStrength = 135000;
        (s as any).CloThinness = 5;
        (s as any).CloTopCut = 4;
        (s as any).CloPantsShortness = 6;
        (s as any).CloOnePiece = 1;
        (s as any).CloPrice = 2700;
      } else {
        (s as any).CloQuality = 4;
        (s as any).CloStrength = 135000;
        (s as any).CloThinness = 5;
        (s as any).CloTopCut = 4;
        (s as any).CloPantsShortness = 6;
        (s as any).CloOnePiece = 1;
        (s as any).CloPrice = 2700;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 4;
          (s as any).CloStrength = 135000;
          (s as any).CloThinness = 5;
          (s as any).CloTopCut = 4;
          (s as any).CloPantsShortness = 6;
          (s as any).CloOnePiece = 1;
          (s as any).CloBimbo = 1;
          (s as any).CloPrice = 2700;
        } else {
          (s as any).CloQuality = 4;
          (s as any).CloStrength = 135000;
          (s as any).CloThinness = 5;
          (s as any).CloTopCut = 4;
          (s as any).CloPantsShortness = 6;
          (s as any).CloOnePiece = 1;
          (s as any).CloBimbo = 1;
          (s as any).CloPrice = 2700;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 4;
            (s as any).CloStrength = 135000;
            (s as any).CloThinness = 5;
            (s as any).CloBra = 1;
            (s as any).CloPanties = 1;
            (s as any).CloStyle = 4;
            (s as any).CloProstitute = 1;
            (s as any).CloCoverBack = 4;
            (s as any).CloPrice = 2700;
          } else {
            (s as any).CloQuality = 4;
            (s as any).CloStrength = 135000;
            (s as any).CloThinness = 5;
            (s as any).CloBra = 1;
            (s as any).CloPanties = 1;
            (s as any).CloStyle = 4;
            (s as any).CloProstitute = 1;
            (s as any).CloPrice = 2700;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 4;
              (s as any).CloStrength = 135000;
              (s as any).CloThinness = 5;
              (s as any).CloBra = 1;
              (s as any).CloPanties = 1;
              (s as any).CloStyle = 4;
              (s as any).CloProstitute = 1;
              (s as any).CloCoverBack = 4;
              (s as any).CloPrice = 2700;
            } else {
              (s as any).CloQuality = 4;
              (s as any).CloStrength = 135000;
              (s as any).CloThinness = 5;
              (s as any).CloBra = 1;
              (s as any).CloPanties = 1;
              (s as any).CloStyle = 4;
              (s as any).CloProstitute = 1;
              (s as any).CloPrice = 2700;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 4;
                (s as any).CloStrength = 135000;
                (s as any).CloThinness = 5;
                (s as any).CloBra = 1;
                (s as any).CloPanties = 1;
                (s as any).CloStyle = 4;
                (s as any).CloProstitute = 1;
                (s as any).CloCoverBack = 4;
                (s as any).CloPrice = 2700;
              } else {
                (s as any).CloQuality = 3;
                (s as any).CloStrength = 129375;
                (s as any).CloThinness = 5;
                (s as any).CloTopCut = 3;
                (s as any).CloPantsShortness = 5;
                (s as any).CloStyle = 4;
                (s as any).CloProstitute = 1;
                (s as any).CloPrice = 2600;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 5;
                  (s as any).CloStrength = 140625;
                  (s as any).CloThinness = 5;
                  (s as any).CloTopCut = 4;
                  (s as any).CloPantsShortness = 5;
                  (s as any).CloOnePiece = 1;
                  (s as any).CloBimbo = 1;
                  (s as any).CloStyle = 4;
                  (s as any).CloProstitute = 1;
                  (s as any).CloPrice = 2800;
                } else {
                  (s as any).CloQuality = 3;
                  (s as any).CloStrength = 129375;
                  (s as any).CloThinness = 5;
                  (s as any).CloTopCut = 3;
                  (s as any).CloPantsShortness = 5;
                  (s as any).CloStyle = 4;
                  (s as any).CloProstitute = 1;
                  (s as any).CloPrice = 2600;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 5;
                    (s as any).CloStrength = 140625;
                    (s as any).CloThinness = 5;
                    (s as any).CloTopCut = 4;
                    (s as any).CloPantsShortness = 5;
                    (s as any).CloStyle = 4;
                    (s as any).CloProstitute = 1;
                    (s as any).CloPrice = 2800;
                  } else {
                    (s as any).CloQuality = 5;
                    (s as any).CloStrength = 140625;
                    (s as any).CloThinness = 5;
                    (s as any).CloTopCut = 4;
                    (s as any).CloPantsShortness = 5;
                    (s as any).CloStyle = 4;
                    (s as any).CloProstitute = 1;
                    (s as any).CloPrice = 2800;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 5;
                      (s as any).CloStrength = 140625;
                      (s as any).CloThinness = 5;
                      (s as any).CloTopCut = 4;
                      (s as any).CloPantsShortness = 5;
                      (s as any).CloStyle = 4;
                      (s as any).CloProstitute = 1;
                      (s as any).CloPrice = 2800;
                    } else {
                      (s as any).CloQuality = 3;
                      (s as any).CloStrength = 129375;
                      (s as any).CloThinness = 5;
                      (s as any).CloBra = 1;
                      (s as any).CloPantsShortness = 5;
                      (s as any).CloBimbo = 1;
                      (s as any).CloStyle = 4;
                      (s as any).CloProstitute = 1;
                      (s as any).CloPrice = 2600;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).CloQuality = 5;
                        (s as any).CloStrength = 140625;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 3;
                        (s as any).CloPantsShortness = 6;
                        (s as any).CloPrice = 2800;
                      } else {
                        (s as any).CloQuality = 3;
                        (s as any).CloStrength = 129375;
                        (s as any).CloThinness = 5;
                        (s as any).CloTopCut = 3;
                        (s as any).CloPantsShortness = 5;
                        (s as any).CloStyle = 4;
                        (s as any).CloProstitute = 1;
                        (s as any).CloPrice = 2600;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).CloQuality = 2;
                          (s as any).CloStrength = 123750;
                          (s as any).CloThinness = 5;
                          (s as any).CloTopCut = 3;
                          (s as any).CloPantsShortness = 5;
                          (s as any).CloStyle = 4;
                          (s as any).CloProstitute = 1;
                          (s as any).CloPrice = 2500;
                        } else {
                          (s as any).CloQuality = 4;
                          (s as any).CloStrength = 135000;
                          (s as any).CloThinness = 4;
                          (s as any).CloTopCut = 4;
                          (s as any).CloPantsShortness = 5;
                          (s as any).CloPrice = 2700;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).CloQuality = 2;
                            (s as any).CloStrength = 123750;
                            (s as any).CloThinness = 5;
                            (s as any).CloTopCut = 4;
                            (s as any).CloPantsShortness = 5;
                            (s as any).CloStyle = 4;
                            (s as any).CloProstitute = 1;
                            (s as any).CloPrice = 2500;
                          } else {
                            (s as any).CloQuality = 2;
                            (s as any).CloStrength = 123750;
                            (s as any).CloThinness = 5;
                            (s as any).CloTopCut = 4;
                            (s as any).CloPantsShortness = 5;
                            (s as any).CloStyle = 4;
                            (s as any).CloProstitute = 1;
                            (s as any).CloPrice = 2500;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).CloQuality = 4;
                              (s as any).CloStrength = 135000;
                              (s as any).CloThinness = 5;
                              (s as any).CloBra = 1;
                              (s as any).CloPanties = 1;
                              (s as any).CloStyle = 4;
                              (s as any).CloProstitute = 1;
                              (s as any).CloPrice = 2700;
                            } else {
                              (s as any).CloQuality = 5;
                              (s as any).CloStrength = 140625;
                              (s as any).CloThinness = 5;
                              (s as any).CloBra = 1;
                              (s as any).CloPantsShortness = 5;
                              (s as any).CloBimbo = 1;
                              (s as any).CloStyle = 4;
                              (s as any).CloProstitute = 1;
                              (s as any).CloPrice = 2800;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).CloQuality = 4;
                                (s as any).CloStrength = 135000;
                                (s as any).CloThinness = 5;
                                (s as any).CloBra = 1;
                                (s as any).CloPanties = 1;
                                (s as any).CloStyle = 4;
                                (s as any).CloProstitute = 1;
                                (s as any).CloPrice = 2700;
                              } else {
                                (s as any).CloQuality = 4;
                                (s as any).CloStrength = 135000;
                                (s as any).CloThinness = 5;
                                (s as any).CloBra = 1;
                                (s as any).CloPanties = 1;
                                (s as any).CloBimbo = 1;
                                (s as any).CloStyle = 4;
                                (s as any).CloProstitute = 1;
                                (s as any).CloPrice = 2700;
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

export const _attributes_scandalicious_outfits: LocationDef = {
  name: '_attributes_scandalicious_outfits',
  region: 'other',
  enter: enter,
};
