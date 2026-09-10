// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 1500 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 3: 1750
  // TODO-QSP: 4: 1800
  // TODO-QSP: 5: 1850
  // TODO-QSP: 6: 1900
  // TODO-QSP: CloQuality ranges from 3 to 6, please avoid adding too many 3s and 6s.
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 5;
    (s as any).CloStrength = 103125;
    (s as any).CloThinness = 6;
    (s as any).CloTopCut = 1;
    (s as any).CloPantsShortness = 1;
    (s as any).CloCoverTop = 3;
    (s as any).CloCoverfront = 3;
    (s as any).CloCoverBack = 3;
    (s as any).CloPrice = 1850;
  } else {
    (s as any).CloQuality = 4;
    (s as any).CloStrength = 97500;
    (s as any).CloThinness = 6;
    (s as any).CloTopCut = 1;
    (s as any).CloPantsShortness = 1;
    (s as any).CloCoverTop = 3;
    (s as any).CloCoverfront = 3;
    (s as any).CloCoverBack = 3;
    (s as any).CloPrice = 1800;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 4;
      (s as any).CloStrength = 97500;
      (s as any).CloThinness = 6;
      (s as any).CloTopCut = 1;
      (s as any).CloSkirtShortness = 6;
      (s as any).CloDress = 1;
      (s as any).CloStyle = 4;
      (s as any).CloProstitute = 1;
      (s as any).CloCoverTop = 3;
      (s as any).CloCoverfront = 3;
      (s as any).CloCoverBack = 3;
      (s as any).CloPrice = 1800;
    } else {
      (s as any).CloQuality = 3;
      (s as any).CloStrength = 91875;
      (s as any).CloThinness = 6;
      (s as any).CloTopCut = 1;
      (s as any).CloPantsShortness = 1;
      (s as any).CloOnePiece = 1;
      (s as any).CloCoverTop = 3;
      (s as any).CloCoverfront = 3;
      (s as any).CloCoverBack = 3;
      (s as any).CloPrice = 1750;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 3;
        (s as any).CloStrength = 91875;
        (s as any).CloThinness = 6;
        (s as any).CloTopCut = 2;
        (s as any).CloPantsShortness = 1;
        (s as any).CloOnePiece = 1;
        (s as any).CloStyle = 4;
        (s as any).CloProstitute = 1;
        (s as any).CloCoverTop = 3;
        (s as any).CloCoverfront = 3;
        (s as any).CloCoverBack = 3;
        (s as any).CloPrice = 1750;
      } else {
        (s as any).CloQuality = 5;
        (s as any).CloStrength = 103125;
        (s as any).CloThinness = 6;
        (s as any).CloTopCut = 2;
        (s as any).CloPantsShortness = 1;
        (s as any).CloCoverTop = 3;
        (s as any).CloCoverfront = 3;
        (s as any).CloCoverBack = 3;
        (s as any).CloPrice = 1850;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 4;
          (s as any).CloStrength = 97500;
          (s as any).CloThinness = 6;
          (s as any).CloTopCut = 2;
          (s as any).CloPantsShortness = 1;
          (s as any).CloOnePiece = 1;
          (s as any).CloCoverTop = 2;
          (s as any).CloCoverfront = 3;
          (s as any).CloCoverBack = 3;
          (s as any).CloPrice = 1800;
        } else {
          (s as any).CloQuality = 4;
          (s as any).CloStrength = 97500;
          (s as any).CloThinness = 6;
          (s as any).CloTopCut = 2;
          (s as any).CloPantsShortness = 1;
          (s as any).CloOnePiece = 1;
          (s as any).CloCoverTop = 3;
          (s as any).CloCoverfront = 3;
          (s as any).CloCoverBack = 3;
          (s as any).CloPrice = 1800;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 4;
            (s as any).CloStrength = 97500;
            (s as any).CloThinness = 6;
            (s as any).CloTopCut = 3;
            (s as any).CloPantsShortness = 1;
            (s as any).CloOnePiece = 1;
            (s as any).CloCoverTop = 3;
            (s as any).CloCoverfront = 3;
            (s as any).CloCoverBack = 3;
            (s as any).CloPrice = 1800;
          } else {
            (s as any).CloQuality = 3;
            (s as any).CloStrength = 91875;
            (s as any).CloThinness = 6;
            (s as any).CloTopCut = 3;
            (s as any).CloPantsShortness = 1;
            (s as any).CloPrice = 1750;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 5;
              (s as any).CloStrength = 103125;
              (s as any).CloThinness = 6;
              (s as any).CloTopCut = 1;
              (s as any).CloPantsShortness = 5;
              (s as any).CloOnePiece = 1;
              (s as any).CloBimbo = 1;
              (s as any).CloCoverTop = 3;
              (s as any).CloCoverfront = 3;
              (s as any).CloCoverBack = 3;
              (s as any).CloPrice = 1850;
            } else {
              (s as any).CloQuality = 3;
              (s as any).CloStrength = 91875;
              (s as any).CloThinness = 6;
              (s as any).CloTopCut = 1;
              (s as any).CloPantsShortness = 5;
              (s as any).CloCoverTop = 1;
              (s as any).CloCoverfront = 2;
              (s as any).CloCoverBack = 2;
              (s as any).CloPrice = 1750;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 5;
                (s as any).CloStrength = 103125;
                (s as any).CloThinness = 6;
                (s as any).CloTopCut = 1;
                (s as any).CloPantsShortness = 5;
                (s as any).CloStyle = 4;
                (s as any).CloProstitute = 1;
                (s as any).CloCoverTop = 3;
                (s as any).CloPrice = 1850;
              } else {
                (s as any).CloQuality = 4;
                (s as any).CloStrength = 97500;
                (s as any).CloThinness = 6;
                (s as any).CloTopCut = 1;
                (s as any).CloPantsShortness = 5;
                (s as any).CloCoverTop = 1;
                (s as any).CloCoverfront = 1;
                (s as any).CloCoverBack = 1;
                (s as any).CloPrice = 1800;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 6;
                  (s as any).CloStrength = 108750;
                  (s as any).CloThinness = 6;
                  (s as any).CloTopCut = 1;
                  (s as any).CloPantsShortness = 5;
                  (s as any).CloCoverTop = 3;
                  (s as any).CloPrice = 1900;
                } else {
                  (s as any).CloQuality = 5;
                  (s as any).CloStrength = 103125;
                  (s as any).CloThinness = 6;
                  (s as any).CloTopCut = 1;
                  (s as any).CloPantsShortness = 5;
                  (s as any).CloCoverTop = 3;
                  (s as any).CloPrice = 1850;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 4;
                    (s as any).CloStrength = 97500;
                    (s as any).CloThinness = 6;
                    (s as any).CloTopCut = 1;
                    (s as any).CloPantsShortness = 5;
                    (s as any).CloCoverTop = 3;
                    (s as any).CloCoverfront = 3;
                    (s as any).CloCoverBack = 3;
                    (s as any).CloPrice = 1800;
                  } else {
                    (s as any).CloQuality = 3;
                    (s as any).CloStrength = 91875;
                    (s as any).CloThinness = 6;
                    (s as any).CloTopCut = 2;
                    (s as any).CloPanties = 1;
                    (s as any).CloCoverTop = 3;
                    (s as any).CloPrice = 1750;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 4;
                      (s as any).CloStrength = 97500;
                      (s as any).CloThinness = 6;
                      (s as any).CloTopCut = 3;
                      (s as any).CloPantsShortness = 6;
                      (s as any).CloOnePiece = 1;
                      (s as any).CloCoverTop = 2;
                      (s as any).CloCoverfront = 2;
                      (s as any).CloCoverBack = 2;
                      (s as any).CloPrice = 1800;
                    } else {
                      (s as any).CloQuality = 4;
                      (s as any).CloStrength = 97500;
                      (s as any).CloThinness = 6;
                      (s as any).CloTopCut = 4;
                      (s as any).CloPanties = 1;
                      (s as any).CloOnePiece = 1;
                      (s as any).CloCoverTop = 3;
                      (s as any).CloPrice = 1800;
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

export const _attributes_salacious_outfits: LocationDef = {
  name: '_attributes_salacious_outfits',
  region: 'other',
  enter: enter,
};
