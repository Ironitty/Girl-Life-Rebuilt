// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 12000 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 4: 14400
  // TODO-QSP: 5: 15000
  // TODO-QSP: CloQuality ranges from 4 to 5
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 5;
    (s as any).CloStrength = 140625;
    (s as any).CloThinness = 2;
    (s as any).CloTopCut = 3;
    (s as any).CloPantsShortness = 1;
    (s as any).CloStyle2 = 5;
    (s as any).CloOffice = 1;
    (s as any).CloPrice = 15000;
  } else {
    (s as any).CloQuality = 5;
    (s as any).CloStrength = 140625;
    (s as any).CloThinness = 2;
    (s as any).CloTopCut = 2;
    (s as any).CloPantsShortness = 1;
    (s as any).CloStyle2 = 5;
    (s as any).CloOffice = 1;
    (s as any).CloPrice = 15000;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 4;
      (s as any).CloStrength = 135000;
      (s as any).CloThinness = 2;
      (s as any).CloTopCut = 2;
      (s as any).CloPantsShortness = 1;
      (s as any).CloStyle2 = 5;
      (s as any).CloOffice = 1;
      (s as any).CloPrice = 14400;
    } else {
      (s as any).CloQuality = 4;
      (s as any).CloStrength = 135000;
      (s as any).CloThinness = 2;
      (s as any).CloTopCut = 2;
      (s as any).CloPantsShortness = 1;
      (s as any).CloStyle2 = 5;
      (s as any).CloOffice = 1;
      (s as any).CloPrice = 14400;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 4;
        (s as any).CloStrength = 135000;
        (s as any).CloThinness = 2;
        (s as any).CloTopCut = 2;
        (s as any).CloPantsShortness = 1;
        (s as any).CloStyle2 = 5;
        (s as any).CloOffice = 1;
        (s as any).CloPrice = 14400;
      } else {
        (s as any).CloQuality = 5;
        (s as any).CloStrength = 140625;
        (s as any).CloThinness = 2;
        (s as any).CloTopCut = 3;
        (s as any).CloPantsShortness = 1;
        (s as any).CloStyle2 = 5;
        (s as any).CloOffice = 1;
        (s as any).CloPrice = 15000;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 5;
          (s as any).CloStrength = 140625;
          (s as any).CloThinness = 2;
          (s as any).CloTopCut = 2;
          (s as any).CloPantsShortness = 1;
          (s as any).CloStyle2 = 5;
          (s as any).CloOffice = 1;
          (s as any).CloPrice = 15000;
        } else {
          (s as any).CloQuality = 5;
          (s as any).CloStrength = 140625;
          (s as any).CloThinness = 2;
          (s as any).CloTopCut = 2;
          (s as any).CloPantsShortness = 1;
          (s as any).CloStyle2 = 5;
          (s as any).CloOffice = 1;
          (s as any).CloPrice = 15000;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 5;
            (s as any).CloStrength = 140625;
            (s as any).CloThinness = 2;
            (s as any).CloTopCut = 2;
            (s as any).CloPantsShortness = 1;
            (s as any).CloStyle2 = 5;
            (s as any).CloOffice = 1;
            (s as any).CloPrice = 15000;
          } else {
            (s as any).CloQuality = 5;
            (s as any).CloStrength = 140625;
            (s as any).CloThinness = 2;
            (s as any).CloTopCut = 2;
            (s as any).CloPantsShortness = 1;
            (s as any).CloStyle2 = 5;
            (s as any).CloOffice = 1;
            (s as any).CloPrice = 15000;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 5;
              (s as any).CloStrength = 140625;
              (s as any).CloThinness = 2;
              (s as any).CloTopCut = 2;
              (s as any).CloPantsShortness = 1;
              (s as any).CloStyle2 = 5;
              (s as any).CloOffice = 1;
              (s as any).CloPrice = 15000;
            } else {
              (s as any).CloQuality = 5;
              (s as any).CloStrength = 140625;
              (s as any).CloThinness = 2;
              (s as any).CloTopCut = 2;
              (s as any).CloPantsShortness = 1;
              (s as any).CloStyle2 = 5;
              (s as any).CloOffice = 1;
              (s as any).CloPrice = 15000;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 4;
                (s as any).CloStrength = 135000;
                (s as any).CloThinness = 2;
                (s as any).CloTopCut = 2;
                (s as any).CloPantsShortness = 1;
                (s as any).CloStyle2 = 5;
                (s as any).CloOffice = 1;
                (s as any).CloPrice = 14400;
              } else {
                (s as any).CloQuality = 5;
                (s as any).CloStrength = 140625;
                (s as any).CloThinness = 2;
                (s as any).CloTopCut = 2;
                (s as any).CloPantsShortness = 1;
                (s as any).CloStyle2 = 5;
                (s as any).CloOffice = 1;
                (s as any).CloPrice = 15000;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 5;
                  (s as any).CloStrength = 140625;
                  (s as any).CloThinness = 2;
                  (s as any).CloTopCut = 3;
                  (s as any).CloPantsShortness = 1;
                  (s as any).CloStyle2 = 5;
                  (s as any).CloOffice = 1;
                  (s as any).CloBimbo = 1;
                  (s as any).CloPrice = 15000;
                } else {
                  (s as any).CloQuality = 5;
                  (s as any).CloStrength = 140625;
                  (s as any).CloThinness = 2;
                  (s as any).CloTopCut = 3;
                  (s as any).CloPantsShortness = 1;
                  (s as any).CloStyle2 = 5;
                  (s as any).CloOffice = 1;
                  (s as any).CloPrice = 15000;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 5;
                    (s as any).CloStrength = 140625;
                    (s as any).CloThinness = 2;
                    (s as any).CloTopCut = 2;
                    (s as any).CloPantsShortness = 1;
                    (s as any).CloStyle2 = 5;
                    (s as any).CloOffice = 1;
                    (s as any).CloPrice = 15000;
                  } else {
                    (s as any).CloQuality = 5;
                    (s as any).CloStrength = 140625;
                    (s as any).CloThinness = 2;
                    (s as any).CloTopCut = 2;
                    (s as any).CloPantsShortness = 1;
                    (s as any).CloStyle2 = 5;
                    (s as any).CloOffice = 1;
                    (s as any).CloPrice = 15000;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 4;
                      (s as any).CloStrength = 135000;
                      (s as any).CloThinness = 2;
                      (s as any).CloTopCut = 2;
                      (s as any).CloPantsShortness = 1;
                      (s as any).CloStyle2 = 5;
                      (s as any).CloOffice = 1;
                      (s as any).CloPrice = 14400;
                    } else {
                      (s as any).CloQuality = 5;
                      (s as any).CloStrength = 140625;
                      (s as any).CloThinness = 2;
                      (s as any).CloTopCut = 2;
                      (s as any).CloPantsShortness = 1;
                      (s as any).CloStyle2 = 5;
                      (s as any).CloOffice = 1;
                      (s as any).CloPrice = 15000;
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

export const _attributes_fashionista_outfits: LocationDef = {
  name: '_attributes_fashionista_outfits',
  region: 'other',
  enter: enter,
};
