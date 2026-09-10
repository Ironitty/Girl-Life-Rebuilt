// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 1500 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 3: 1750
  // TODO-QSP: 4: 1800
  // TODO-QSP: CloQuality ranges from 3 to 4
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 3;
    (s as any).CloStrength = 91875;
    (s as any).CloThinness = 5;
    (s as any).CloTopCut = 3;
    (s as any).CloStyle2 = 3;
    (s as any).CloStrip = 1;
    (s as any).CloPanties = 1;
    (s as any).CloOnePiece = 1;
    (s as any).CloPrice = 1750;
  } else {
    (s as any).CloQuality = 3;
    (s as any).CloStrength = 91875;
    (s as any).CloThinness = 4;
    (s as any).CloTopCut = 3;
    (s as any).CloStyle2 = 3;
    (s as any).CloStrip = 1;
    (s as any).CloPantsShortness = 5;
    (s as any).CloPrice = 1750;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 3;
      (s as any).CloStrength = 91875;
      (s as any).CloThinness = 4;
      (s as any).CloTopCut = 3;
      (s as any).CloStyle2 = 3;
      (s as any).CloStrip = 1;
      (s as any).CloPanties = 1;
      (s as any).CloPrice = 1750;
    } else {
      (s as any).CloQuality = 3;
      (s as any).CloStrength = 91875;
      (s as any).CloThinness = 4;
      (s as any).CloTopCut = 3;
      (s as any).CloStyle2 = 3;
      (s as any).CloStrip = 1;
      (s as any).CloSkirtShortness = 6;
      (s as any).CloDress = 1;
      (s as any).CloPrice = 1750;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 4;
        (s as any).CloStrength = 97500;
        (s as any).CloThinness = 4;
        (s as any).CloTopCut = 3;
        (s as any).CloStyle2 = 3;
        (s as any).CloStrip = 1;
        (s as any).CloPantsShortness = 6;
        (s as any).CloPrice = 1800;
      } else {
        (s as any).CloQuality = 4;
        (s as any).CloStrength = 97500;
        (s as any).CloThinness = 4;
        (s as any).CloTopCut = 3;
        (s as any).CloStyle2 = 3;
        (s as any).CloStrip = 1;
        (s as any).CloPantsShortness = 6;
        (s as any).CloPrice = 1800;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 3;
          (s as any).CloStrength = 91875;
          (s as any).CloThinness = 5;
          (s as any).CloStyle2 = 3;
          (s as any).CloStrip = 1;
          (s as any).CloBra = 1;
          (s as any).CloPanties = 1;
          (s as any).CloPrice = 1750;
        } else {
          (s as any).CloQuality = 3;
          (s as any).CloStrength = 91875;
          (s as any).CloThinness = 5;
          (s as any).CloStyle2 = 3;
          (s as any).CloStrip = 1;
          (s as any).CloBra = 1;
          (s as any).CloSkirtShortness = 6;
          (s as any).CloPrice = 1750;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 3;
            (s as any).CloStrength = 91875;
            (s as any).CloThinness = 5;
            (s as any).CloStyle2 = 3;
            (s as any).CloStrip = 1;
            (s as any).CloBra = 1;
            (s as any).CloSkirtShortness = 5;
            (s as any).CloBimbo = 1;
            (s as any).CloPrice = 1750;
          } else {
            (s as any).CloQuality = 3;
            (s as any).CloStrength = 91875;
            (s as any).CloThinness = 5;
            (s as any).CloStyle2 = 3;
            (s as any).CloStrip = 1;
            (s as any).CloTopCut = 2;
            (s as any).CloPanties = 1;
            (s as any).CloPrice = 1750;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 3;
              (s as any).CloStrength = 91875;
              (s as any).CloThinness = 5;
              (s as any).CloStyle2 = 3;
              (s as any).CloStrip = 1;
              (s as any).CloTopCut = 4;
              (s as any).CloSkirtShortness = 6;
              (s as any).CloDress = 1;
              (s as any).CloPrice = 1750;
            } else {
              (s as any).CloQuality = 4;
              (s as any).CloStrength = 97500;
              (s as any).CloThinness = 5;
              (s as any).CloStyle2 = 3;
              (s as any).CloStrip = 1;
              (s as any).CloBra = 1;
              (s as any).CloSkirtShortness = 6;
              (s as any).CloBimbo = 1;
              (s as any).CloPrice = 1800;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 4;
                (s as any).CloStrength = 97500;
                (s as any).CloThinness = 5;
                (s as any).CloStyle2 = 3;
                (s as any).CloStrip = 1;
                (s as any).CloBra = 1;
                (s as any).CloPanties = 1;
                (s as any).CloBimbo = 1;
                (s as any).CloPrice = 1800;
              } else {
                (s as any).CloQuality = 4;
                (s as any).CloStrength = 97500;
                (s as any).CloThinness = 5;
                (s as any).CloStyle2 = 3;
                (s as any).CloStrip = 1;
                (s as any).CloBra = 1;
                (s as any).CloPanties = 1;
                (s as any).CloPrice = 1800;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 3;
                  (s as any).CloStrength = 91875;
                  (s as any).CloThinness = 5;
                  (s as any).CloStyle2 = 3;
                  (s as any).CloStrip = 1;
                  (s as any).CloBra = 1;
                  (s as any).CloPanties = 1;
                  (s as any).CloBimbo = 1;
                  (s as any).CloPrice = 1750;
                } else {
                  (s as any).CloQuality = 3;
                  (s as any).CloStrength = 91875;
                  (s as any).CloThinness = 5;
                  (s as any).CloStyle2 = 3;
                  (s as any).CloStrip = 1;
                  (s as any).CloBra = 1;
                  (s as any).CloPanties = 1;
                  (s as any).CloBimbo = 1;
                  (s as any).CloPrice = 1750;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 3;
                    (s as any).CloStrength = 91875;
                    (s as any).CloThinness = 6;
                    (s as any).CloStyle2 = 3;
                    (s as any).CloStrip = 1;
                    (s as any).CloTopCut = 4;
                    (s as any).CloDress = 1;
                    (s as any).CloPanties = 1;
                    (s as any).CloOnePiece = 1;
                    (s as any).CloBimbo = 1;
                    (s as any).CloPrice = 1750;
                  } else {
                    (s as any).CloQuality = 3;
                    (s as any).CloStrength = 91875;
                    (s as any).CloThinness = 5;
                    (s as any).CloStyle2 = 3;
                    (s as any).CloStrip = 1;
                    (s as any).CloBra = 1;
                    (s as any).CloPanties = 1;
                    (s as any).CloPrice = 1750;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 3;
                      (s as any).CloStrength = 91875;
                      (s as any).CloThinness = 5;
                      (s as any).CloStyle2 = 3;
                      (s as any).CloStrip = 1;
                      (s as any).CloBra = 1;
                      (s as any).CloPanties = 1;
                      (s as any).CloPrice = 1750;
                    } else {
                      (s as any).CloQuality = 3;
                      (s as any).CloStrength = 91875;
                      (s as any).CloThinness = 5;
                      (s as any).CloStyle2 = 3;
                      (s as any).CloStrip = 1;
                      (s as any).CloBra = 1;
                      (s as any).CloPanties = 1;
                      (s as any).CloPrice = 1750;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).CloQuality = 3;
                        (s as any).CloStrength = 91875;
                        (s as any).CloThinness = 5;
                        (s as any).CloStyle2 = 3;
                        (s as any).CloStrip = 1;
                        (s as any).CloBra = 1;
                        (s as any).CloPanties = 1;
                        (s as any).CloOnePiece = 1;
                        (s as any).CloBimbo = 1;
                        (s as any).CloCoverBack = 4;
                        (s as any).CloPrice = 1750;
                      } else {
                        (s as any).CloQuality = 4;
                        (s as any).CloStrength = 97500;
                        (s as any).CloThinness = 5;
                        (s as any).CloStyle2 = 3;
                        (s as any).CloStrip = 1;
                        (s as any).CloBra = 1;
                        (s as any).CloPanties = 1;
                        (s as any).CloPrice = 1800;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).CloQuality = 3;
                          (s as any).CloStrength = 91875;
                          (s as any).CloThinness = 5;
                          (s as any).CloStyle2 = 3;
                          (s as any).CloStrip = 1;
                          (s as any).CloBra = 1;
                          (s as any).CloPanties = 1;
                          (s as any).CloPrice = 1750;
                        } else {
                          (s as any).CloQuality = 3;
                          (s as any).CloStrength = 91875;
                          (s as any).CloThinness = 5;
                          (s as any).CloStyle2 = 3;
                          (s as any).CloStrip = 1;
                          (s as any).CloBra = 1;
                          (s as any).CloPanties = 1;
                          (s as any).CloCoverBack = 4;
                          (s as any).CloPrice = 1750;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).CloQuality = 3;
                            (s as any).CloStrength = 91875;
                            (s as any).CloThinness = 5;
                            (s as any).CloStyle2 = 3;
                            (s as any).CloStrip = 1;
                            (s as any).CloTopCut = 4;
                            (s as any).CloSkirtShortness = 5;
                            (s as any).CloPrice = 1750;
                          } else {
                            (s as any).CloQuality = 3;
                            (s as any).CloStrength = 91875;
                            (s as any).CloThinness = 5;
                            (s as any).CloStyle2 = 3;
                            (s as any).CloStrip = 1;
                            (s as any).CloBra = 1;
                            (s as any).CloSkirtShortness = 5;
                            (s as any).CloPrice = 1750;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).CloQuality = 3;
                              (s as any).CloStrength = 91875;
                              (s as any).CloThinness = 5;
                              (s as any).CloStyle2 = 3;
                              (s as any).CloStrip = 1;
                              (s as any).CloTopCut = 6;
                              (s as any).CloPanties = 1;
                              (s as any).CloCoverBack = 4;
                              (s as any).CloPrice = 1750;
                            } else {
                              (s as any).CloQuality = 3;
                              (s as any).CloStrength = 91875;
                              (s as any).CloThinness = 5;
                              (s as any).CloStyle2 = 3;
                              (s as any).CloStrip = 1;
                              (s as any).CloTopCut = 4;
                              (s as any).CloPantsShortness = 6;
                              (s as any).CloPrice = 1750;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).CloQuality = 3;
                                (s as any).CloStrength = 91875;
                                (s as any).CloThinness = 5;
                                (s as any).CloStyle2 = 3;
                                (s as any).CloStrip = 1;
                                (s as any).CloBra = 1;
                                (s as any).CloPanties = 1;
                                (s as any).CloPrice = 1750;
                              } else {
                                (s as any).CloQuality = 3;
                                (s as any).CloStrength = 91875;
                                (s as any).CloThinness = 5;
                                (s as any).CloStyle2 = 3;
                                (s as any).CloStrip = 1;
                                (s as any).CloBra = 1;
                                (s as any).CloPanties = 1;
                                (s as any).CloBimbo = 1;
                                (s as any).CloPrice = 1750;
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

export const _attributes_eroto_strip: LocationDef = {
  name: '_attributes_eroto_strip',
  region: 'other',
  enter: enter,
};
