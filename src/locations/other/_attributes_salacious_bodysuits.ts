// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: BraType:      1-Full      2-long sleeve  3-high neck  4-backless  5-t-shirt  6-vest  7-spaghetti str...
  // TODO-QSP: BraMaterial:    1-Leather    2-rubber    3-mesh    4-fishnet  5-vinyl    6-lace
  // TODO-QSP: BraFun:        1-regular    2-sports
  // TODO-QSP: BraQuality      1-6 (6 most expensive)
  // TODO-QSP: Thiness:      1-Thick      2-not particularly thick    3-thin      4-slightly transparent      5-sem...
  // TODO-QSP: BraCover:      1-Just visible  2-Quite visible (ie mesh/lace)  3-Fully visible, but covered (fishnet...
  // TODO-QSP: PanCoverFront:    1-Just visible  2-Quite visible (ie mesh/lace)  3-Fully visible, but covered (fish...
  // TODO-QSP: PanCoverBack:    1-Just visible  2-Quite visible (ie mesh/lace)  3-Fully visible, but covered (fishn...
  // TODO-QSP: BraPrice ~ 1000 * (20 + BraQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 3: 1150
  // TODO-QSP: 4: 1200
  // TODO-QSP: 5: 1250
  // TODO-QSP: 6: 1300
  // TODO-QSP: BraQuality ranges from 3 to 6, please avoid adding too many 3s and 6s.
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).BraType = 1;
    (s as any).BraMaterial = 3;
    (s as any).BraFun = 1;
    (s as any).BraQuality = 5;
    (s as any).BraStrength = 120000;
    (s as any).BraThinness = 6;
    (s as any).BraCover = 3;
    (s as any).PanThinness = 4;
    (s as any).PanCoverBack = 4;
    (s as any).BraPrice = 1250;
  } else {
    (s as any).BraType = 2;
    (s as any).BraMaterial = 3;
    (s as any).BraFun = 1;
    (s as any).BraQuality = 4;
    (s as any).BraStrength = 100000;
    (s as any).BraThinness = 6;
    (s as any).BraCover = 3;
    (s as any).PanThinness = 6;
    (s as any).PanCoverFront = 3;
    (s as any).PanCoverBack = 3;
    (s as any).BraPrice = 1200;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).BraType = 2;
      (s as any).BraMaterial = 3;
      (s as any).BraFun = 1;
      (s as any).BraQuality = 4;
      (s as any).BraStrength = 100000;
      (s as any).BraThinness = 6;
      (s as any).BraCover = 3;
      (s as any).PanThinness = 6;
      (s as any).PanCoverFront = 3;
      (s as any).PanCoverBack = 3;
      (s as any).BraPrice = 1200;
    } else {
      (s as any).BraType = 7;
      (s as any).BraMaterial = 3;
      (s as any).BraFun = 1;
      (s as any).BraQuality = 4;
      (s as any).BraStrength = 100000;
      (s as any).BraThinness = 6;
      (s as any).BraCover = 3;
      (s as any).PanThinness = 6;
      (s as any).PanCoverFront = 3;
      (s as any).PanCoverBack = 4;
      (s as any).BraPrice = 1200;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).BraType = 7;
        (s as any).BraMaterial = 3;
        (s as any).BraFun = 1;
        (s as any).BraQuality = 4;
        (s as any).BraStrength = 100000;
        (s as any).BraThinness = 6;
        (s as any).BraCover = 2;
        (s as any).PanThinness = 6;
        (s as any).PanCoverFront = 4;
        (s as any).PanCoverBack = 4;
        (s as any).BraPrice = 1200;
      } else {
        (s as any).BraType = 7;
        (s as any).BraMaterial = 3;
        (s as any).BraFun = 1;
        (s as any).BraQuality = 6;
        (s as any).BraStrength = 140000;
        (s as any).BraThinness = 3;
        (s as any).BraCover = 3;
        (s as any).PanThinness = 6;
        (s as any).PanCoverFront = 4;
        (s as any).PanCoverBack = 4;
        (s as any).BraPrice = 1300;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).BraType = 6;
          (s as any).BraMaterial = 3;
          (s as any).BraFun = 1;
          (s as any).BraQuality = 4;
          (s as any).BraStrength = 100000;
          (s as any).BraThinness = 5;
          (s as any).BraCover = 3;
          (s as any).PanThinness = 5;
          (s as any).PanCoverFront = 4;
          (s as any).PanCoverBack = 3;
          (s as any).BraPrice = 1200;
        } else {
          (s as any).BraType = 7;
          (s as any).BraMaterial = 3;
          (s as any).BraFun = 1;
          (s as any).BraQuality = 5;
          (s as any).BraStrength = 120000;
          (s as any).BraThinness = 5;
          (s as any).BraCover = 2;
          (s as any).PanThinness = 5;
          (s as any).PanCoverFront = 3;
          (s as any).PanCoverBack = 4;
          (s as any).BraPrice = 1250;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).BraType = 7;
            (s as any).BraMaterial = 3;
            (s as any).BraFun = 1;
            (s as any).BraQuality = 4;
            (s as any).BraStrength = 100000;
            (s as any).BraThinness = 5;
            (s as any).BraCover = 3;
            (s as any).PanThinness = 5;
            (s as any).PanCoverFront = 3;
            (s as any).PanCoverBack = 4;
            (s as any).BraPrice = 1200;
          } else {
            (s as any).BraType = 6;
            (s as any).BraMaterial = 3;
            (s as any).BraFun = 1;
            (s as any).BraQuality = 4;
            (s as any).BraStrength = 100000;
            (s as any).BraThinness = 5;
            (s as any).BraCover = 2;
            (s as any).PanThinness = 5;
            (s as any).PanCoverFront = 3;
            (s as any).PanCoverBack = 4;
            (s as any).BraPrice = 1200;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).BraType = 6;
              (s as any).BraMaterial = 3;
              (s as any).BraFun = 1;
              (s as any).BraQuality = 4;
              (s as any).BraStrength = 100000;
              (s as any).BraThinness = 5;
              (s as any).BraCover = 3;
              (s as any).PanThinness = 5;
              (s as any).PanCoverFront = 4;
              (s as any).PanCoverBack = 1;
              (s as any).BraPrice = 1200;
            } else {
              (s as any).BraType = 6;
              (s as any).BraMaterial = 3;
              (s as any).BraFun = 1;
              (s as any).BraQuality = 4;
              (s as any).BraStrength = 100000;
              (s as any).BraThinness = 6;
              (s as any).BraCover = 4;
              (s as any).PanThinness = 6;
              (s as any).PanCoverFront = 4;
              (s as any).PanCoverBack = 3;
              (s as any).BraPrice = 1200;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).BraType = 7;
                (s as any).BraMaterial = 3;
                (s as any).BraFun = 1;
                (s as any).BraQuality = 4;
                (s as any).BraStrength = 100000;
                (s as any).BraThinness = 5;
                (s as any).BraCover = 3;
                (s as any).PanThinness = 5;
                (s as any).PanCoverFront = 3;
                (s as any).PanCoverBack = 3;
                (s as any).BraPrice = 1200;
              } else {
                (s as any).BraType = 7;
                (s as any).BraMaterial = 6;
                (s as any).BraFun = 1;
                (s as any).BraQuality = 5;
                (s as any).BraStrength = 120000;
                (s as any).BraThinness = 5;
                (s as any).BraCover = 4;
                (s as any).PanThinness = 6;
                (s as any).PanCoverFront = 4;
                (s as any).PanCoverBack = 4;
                (s as any).BraPrice = 1250;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).BraType = 2;
                  (s as any).BraMaterial = 3;
                  (s as any).BraFun = 1;
                  (s as any).BraQuality = 4;
                  (s as any).BraStrength = 100000;
                  (s as any).BraThinness = 6;
                  (s as any).BraCover = 3;
                  (s as any).PanThinness = 6;
                  (s as any).PanCoverFront = 3;
                  (s as any).PanCoverBack = 4;
                  (s as any).BraPrice = 1200;
                } else {
                  (s as any).BraType = 6;
                  (s as any).BraMaterial = 3;
                  (s as any).BraFun = 1;
                  (s as any).BraQuality = 4;
                  (s as any).BraStrength = 100000;
                  (s as any).BraThinness = 5;
                  (s as any).BraCover = 3;
                  (s as any).PanThinness = 5;
                  (s as any).PanCoverFront = 3;
                  (s as any).PanCoverBack = 4;
                  (s as any).BraPrice = 1200;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).BraType = 7;
                    (s as any).BraMaterial = 6;
                    (s as any).BraFun = 1;
                    (s as any).BraQuality = 4;
                    (s as any).BraStrength = 100000;
                    (s as any).BraThinness = 6;
                    (s as any).BraCover = 3;
                    (s as any).PanThinness = 6;
                    (s as any).PanCoverFront = 4;
                    (s as any).PanCoverBack = 4;
                    (s as any).BraPrice = 1200;
                  } else {
                    (s as any).BraType = 6;
                    (s as any).BraMaterial = 3;
                    (s as any).BraFun = 1;
                    (s as any).BraQuality = 5;
                    (s as any).BraStrength = 120000;
                    (s as any).BraThinness = 6;
                    (s as any).BraCover = 3;
                    (s as any).PanThinness = 6;
                    (s as any).PanCoverBack = 3;
                    (s as any).BraPrice = 1250;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).BraType = 4;
                      (s as any).BraMaterial = 3;
                      (s as any).BraFun = 1;
                      (s as any).BraQuality = 5;
                      (s as any).BraStrength = 120000;
                      (s as any).BraThinness = 6;
                      (s as any).BraCover = 3;
                      (s as any).PanThinness = 6;
                      (s as any).PanCoverFront = 3;
                      (s as any).PanCoverBack = 4;
                      (s as any).BraPrice = 1250;
                    } else {
                      (s as any).BraType = 4;
                      (s as any).BraMaterial = 3;
                      (s as any).BraFun = 1;
                      (s as any).BraQuality = 4;
                      (s as any).BraStrength = 100000;
                      (s as any).BraThinness = 6;
                      (s as any).BraCover = 3;
                      (s as any).PanThinness = 6;
                      (s as any).PanCoverFront = 3;
                      (s as any).PanCoverBack = 4;
                      (s as any).BraPrice = 1200;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).BraType = 7;
                        (s as any).BraMaterial = 3;
                        (s as any).BraFun = 1;
                        (s as any).BraQuality = 4;
                        (s as any).BraStrength = 100000;
                        (s as any).BraThinness = 6;
                        (s as any).BraCover = 3;
                        (s as any).PanThinness = 6;
                        (s as any).PanCoverFront = 3;
                        (s as any).PanCoverBack = 4;
                        (s as any).BraPrice = 1200;
                      } else {
                        (s as any).BraType = 3;
                        (s as any).BraMaterial = 3;
                        (s as any).BraFun = 1;
                        (s as any).BraQuality = 5;
                        (s as any).BraStrength = 120000;
                        (s as any).BraThinness = 6;
                        (s as any).BraCover = 3;
                        (s as any).PanThinness = 6;
                        (s as any).PanCoverFront = 4;
                        (s as any).PanCoverBack = 4;
                        (s as any).BraPrice = 1250;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).BraType = 6;
                          (s as any).BraMaterial = 3;
                          (s as any).BraFun = 1;
                          (s as any).BraQuality = 4;
                          (s as any).BraStrength = 100000;
                          (s as any).BraThinness = 4;
                          (s as any).BraCover = 3;
                          (s as any).PanThinness = 4;
                          (s as any).PanCoverFront = 3;
                          (s as any).PanCoverBack = 4;
                          (s as any).BraPrice = 1200;
                        } else {
                          (s as any).BraType = 7;
                          (s as any).BraMaterial = 3;
                          (s as any).BraFun = 1;
                          (s as any).BraQuality = 4;
                          (s as any).BraStrength = 100000;
                          (s as any).BraThinness = 6;
                          (s as any).BraCover = 3;
                          (s as any).PanThinness = 6;
                          (s as any).PanCoverBack = 3;
                          (s as any).BraPrice = 1200;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).BraType = 6;
                            (s as any).BraMaterial = 3;
                            (s as any).BraFun = 1;
                            (s as any).BraQuality = 4;
                            (s as any).BraStrength = 100000;
                            (s as any).BraThinness = 6;
                            (s as any).BraCover = 3;
                            (s as any).PanThinness = 6;
                            (s as any).PanCoverBack = 4;
                            (s as any).BraPrice = 1200;
                          } else {
                            (s as any).BraType = 7;
                            (s as any).BraMaterial = 3;
                            (s as any).BraFun = 1;
                            (s as any).BraQuality = 5;
                            (s as any).BraStrength = 120000;
                            (s as any).BraThinness = 5;
                            (s as any).BraCover = 2;
                            (s as any).PanThinness = 5;
                            (s as any).PanCoverFront = 3;
                            (s as any).PanCoverBack = 4;
                            (s as any).BraPrice = 1250;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).BraType = 3;
                              (s as any).BraMaterial = 3;
                              (s as any).BraFun = 1;
                              (s as any).BraQuality = 4;
                              (s as any).BraStrength = 100000;
                              (s as any).BraThinness = 6;
                              (s as any).BraCover = 4;
                              (s as any).PanThinness = 5;
                              (s as any).PanCoverFront = 1;
                              (s as any).PanCoverBack = 4;
                              (s as any).BraPrice = 1200;
                            } else {
                              (s as any).BraType = 7;
                              (s as any).BraMaterial = 6;
                              (s as any).BraFun = 1;
                              (s as any).BraQuality = 4;
                              (s as any).BraStrength = 100000;
                              (s as any).BraThinness = 3;
                              (s as any).BraCover = 4;
                              (s as any).PanThinness = 3;
                              (s as any).PanCoverFront = 1;
                              (s as any).PanCoverBack = 4;
                              (s as any).BraPrice = 1200;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).BraType = 7;
                                (s as any).BraMaterial = 6;
                                (s as any).BraFun = 1;
                                (s as any).BraQuality = 5;
                                (s as any).BraStrength = 120000;
                                (s as any).BraThinness = 6;
                                (s as any).BraCover = 4;
                                (s as any).PanThinness = 4;
                                (s as any).PanCoverBack = 4;
                                (s as any).BraPrice = 1250;
                              } else {
                                (s as any).BraType = 7;
                                (s as any).BraMaterial = 3;
                                (s as any).BraFun = 1;
                                (s as any).BraQuality = 5;
                                (s as any).BraStrength = 120000;
                                (s as any).BraThinness = 6;
                                (s as any).BraCover = 2;
                                (s as any).PanThinness = 6;
                                (s as any).PanCoverBack = 3;
                                (s as any).BraPrice = 1250;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).BraType = 7;
                                  (s as any).BraMaterial = 3;
                                  (s as any).BraFun = 1;
                                  (s as any).BraQuality = 3;
                                  (s as any).BraStrength = 80000;
                                  (s as any).BraThinness = 5;
                                  (s as any).BraCover = 3;
                                  (s as any).PanThinness = 5;
                                  (s as any).PanCoverFront = 1;
                                  (s as any).PanCoverBack = 4;
                                  (s as any).BraPrice = 1150;
                                } else {
                                  (s as any).BraType = 6;
                                  (s as any).BraMaterial = 3;
                                  (s as any).BraFun = 1;
                                  (s as any).BraQuality = 5;
                                  (s as any).BraStrength = 120000;
                                  (s as any).BraThinness = 6;
                                  (s as any).BraCover = 3;
                                  (s as any).PanThinness = 6;
                                  (s as any).PanCoverBack = 3;
                                  (s as any).BraPrice = 1250;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).BraType = 7;
                                    (s as any).BraMaterial = 3;
                                    (s as any).BraFun = 1;
                                    (s as any).BraQuality = 4;
                                    (s as any).BraStrength = 100000;
                                    (s as any).BraThinness = 5;
                                    (s as any).BraCover = 3;
                                    (s as any).PanThinness = 5;
                                    (s as any).PanCoverFront = 1;
                                    (s as any).PanCoverBack = 4;
                                    (s as any).BraPrice = 1200;
                                  } else {
                                    (s as any).BraType = 7;
                                    (s as any).BraMaterial = 3;
                                    (s as any).BraFun = 1;
                                    (s as any).BraQuality = 3;
                                    (s as any).BraStrength = 80000;
                                    (s as any).BraThinness = 5;
                                    (s as any).BraCover = 3;
                                    (s as any).PanThinness = 5;
                                    (s as any).PanCoverFront = 3;
                                    (s as any).PanCoverBack = 4;
                                    (s as any).BraPrice = 1150;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).BraType = 7;
                                      (s as any).BraMaterial = 3;
                                      (s as any).BraFun = 1;
                                      (s as any).BraQuality = 5;
                                      (s as any).BraStrength = 120000;
                                      (s as any).BraThinness = 4;
                                      (s as any).BraCover = 3;
                                      (s as any).PanThinness = 5;
                                      (s as any).PanCoverFront = 4;
                                      (s as any).PanCoverBack = 4;
                                      (s as any).BraPrice = 1250;
                                    } else {
                                      (s as any).BraType = 7;
                                      (s as any).BraMaterial = 3;
                                      (s as any).BraFun = 1;
                                      (s as any).BraQuality = 4;
                                      (s as any).BraStrength = 100000;
                                      (s as any).BraThinness = 3;
                                      (s as any).BraCover = 3;
                                      (s as any).PanThinness = 3;
                                      (s as any).PanCoverFront = 4;
                                      (s as any).PanCoverBack = 4;
                                      (s as any).BraPrice = 1200;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).BraType = 7;
                                        (s as any).BraMaterial = 3;
                                        (s as any).BraFun = 1;
                                        (s as any).BraQuality = 4;
                                        (s as any).BraStrength = 100000;
                                        (s as any).BraThinness = 3;
                                        (s as any).BraCover = 3;
                                        (s as any).PanThinness = 3;
                                        (s as any).PanCoverBack = 4;
                                        (s as any).BraPrice = 1200;
                                      } else {
                                        (s as any).BraType = 7;
                                        (s as any).BraMaterial = 3;
                                        (s as any).BraFun = 1;
                                        (s as any).BraQuality = 4;
                                        (s as any).BraStrength = 100000;
                                        (s as any).BraThinness = 4;
                                        (s as any).BraCover = 3;
                                        (s as any).PanThinness = 4;
                                        (s as any).PanCoverBack = 4;
                                        (s as any).BraPrice = 1200;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).BraType = 7;
                                          (s as any).BraMaterial = 3;
                                          (s as any).BraFun = 1;
                                          (s as any).BraQuality = 4;
                                          (s as any).BraStrength = 100000;
                                          (s as any).BraThinness = 3;
                                          (s as any).BraCover = 2;
                                          (s as any).PanThinness = 3;
                                          (s as any).PanCoverFront = 1;
                                          (s as any).PanCoverBack = 4;
                                          (s as any).BraPrice = 1200;
                                        } else {
                                          (s as any).BraType = 2;
                                          (s as any).BraMaterial = 3;
                                          (s as any).BraFun = 1;
                                          (s as any).BraQuality = 4;
                                          (s as any).BraStrength = 100000;
                                          (s as any).BraThinness = 6;
                                          (s as any).BraCover = 3;
                                          (s as any).PanThinness = 6;
                                          (s as any).PanCoverFront = 3;
                                          (s as any).PanCoverBack = 4;
                                          (s as any).BraPrice = 1200;
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

export const _attributes_salacious_bodysuits: LocationDef = {
  name: '_attributes_salacious_bodysuits',
  region: 'other',
  enter: enter,
};
