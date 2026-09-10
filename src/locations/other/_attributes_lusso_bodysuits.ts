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
  // TODO-QSP: BraPrice ~ 1600 * (20 + BraQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 4: 1900
  // TODO-QSP: 5: 2000
  // TODO-QSP: 6: 2100
  // TODO-QSP: BraQaulity ranges from 4 to 6
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).BraType = 2;
    (s as any).BraMaterial = 6;
    (s as any).BraFun = 1;
    (s as any).BraQuality = 4;
    (s as any).BraStrength = 100000;
    (s as any).BraThinness = 5;
    (s as any).BraCover = 3;
    (s as any).PanThinness = 5;
    (s as any).PanCoverFront = 3;
    (s as any).PanCoverBack = 3;
    (s as any).BraPrice = 1900;
  } else {
    (s as any).BraType = 5;
    (s as any).BraMaterial = 6;
    (s as any).BraFun = 1;
    (s as any).BraQuality = 4;
    (s as any).BraStrength = 100000;
    (s as any).BraThinness = 5;
    (s as any).BraCover = 3;
    (s as any).PanThinness = 5;
    (s as any).PanCoverFront = 3;
    (s as any).PanCoverBack = 3;
    (s as any).BraPrice = 1900;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).BraType = 7;
      (s as any).BraFun = 1;
      (s as any).BraQuality = 4;
      (s as any).BraStrength = 100000;
      (s as any).BraThinness = 2;
      (s as any).PanThinness = 2;
      (s as any).BraPrice = 1900;
    } else {
      (s as any).BraType = 7;
      (s as any).BraFun = 1;
      (s as any).BraQuality = 4;
      (s as any).BraStrength = 100000;
      (s as any).BraThinness = 2;
      (s as any).PanThinness = 2;
      (s as any).BraPrice = 1900;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).BraType = 7;
        (s as any).BraFun = 1;
        (s as any).BraQuality = 4;
        (s as any).BraStrength = 100000;
        (s as any).BraThinness = 3;
        (s as any).PanThinness = 3;
        (s as any).BraPrice = 1900;
      } else {
        (s as any).BraType = 7;
        (s as any).BraMaterial = 3;
        (s as any).BraFun = 1;
        (s as any).BraQuality = 4;
        (s as any).BraStrength = 100000;
        (s as any).BraThinness = 3;
        (s as any).PanThinness = 3;
        (s as any).BraPrice = 1900;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).BraType = 6;
          (s as any).BraFun = 1;
          (s as any).BraQuality = 4;
          (s as any).BraStrength = 100000;
          (s as any).BraThinness = 4;
          (s as any).BraCover = 1;
          (s as any).PanThinness = 4;
          (s as any).BraPrice = 1900;
        } else {
          (s as any).BraType = 6;
          (s as any).BraMaterial = 3;
          (s as any).BraFun = 1;
          (s as any).BraQuality = 4;
          (s as any).BraStrength = 100000;
          (s as any).BraThinness = 4;
          (s as any).BraCover = 1;
          (s as any).PanThinness = 4;
          (s as any).BraPrice = 1900;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).BraType = 7;
            (s as any).BraMaterial = 3;
            (s as any).BraFun = 1;
            (s as any).BraQuality = 5;
            (s as any).BraStrength = 120000;
            (s as any).BraThinness = 2;
            (s as any).BraCover = 1;
            (s as any).PanThinness = 2;
            (s as any).BraPrice = 2000;
          } else {
            (s as any).BraType = 7;
            (s as any).BraMaterial = 6;
            (s as any).BraFun = 1;
            (s as any).BraQuality = 4;
            (s as any).BraStrength = 100000;
            (s as any).BraThinness = 4;
            (s as any).BraCover = 1;
            (s as any).PanThinness = 5;
            (s as any).BraPrice = 1900;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).BraType = 5;
              (s as any).BraMaterial = 7;
              (s as any).BraFun = 1;
              (s as any).BraQuality = 6;
              (s as any).BraStrength = 140000;
              (s as any).BraThinness = 2;
              (s as any).PanThinness = 2;
              (s as any).BraPrice = 2100;
            } else {
              (s as any).BraType = 7;
              (s as any).BraFun = 1;
              (s as any).BraQuality = 4;
              (s as any).BraStrength = 100000;
              (s as any).BraThinness = 3;
              (s as any).PanThinness = 3;
              (s as any).BraPrice = 1900;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).BraType = 7;
                (s as any).BraFun = 1;
                (s as any).BraQuality = 4;
                (s as any).BraStrength = 100000;
                (s as any).BraThinness = 3;
                (s as any).PanThinness = 3;
                (s as any).BraPrice = 1900;
              } else {
                (s as any).BraType = 7;
                (s as any).BraFun = 1;
                (s as any).BraQuality = 5;
                (s as any).BraStrength = 120000;
                (s as any).BraThinness = 2;
                (s as any).PanThinness = 2;
                (s as any).BraPrice = 2000;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).BraType = 7;
                  (s as any).BraMaterial = 3;
                  (s as any).BraFun = 1;
                  (s as any).BraQuality = 5;
                  (s as any).BraStrength = 120000;
                  (s as any).BraThinness = 3;
                  (s as any).BraCover = 1;
                  (s as any).PanThinness = 5;
                  (s as any).PanCoverBack = 3;
                  (s as any).BraPrice = 2000;
                } else {
                  (s as any).BraType = 7;
                  (s as any).BraMaterial = 3;
                  (s as any).BraFun = 1;
                  (s as any).BraQuality = 5;
                  (s as any).BraStrength = 120000;
                  (s as any).BraThinness = 3;
                  (s as any).PanThinness = 3;
                  (s as any).PanCoverBack = 3;
                  (s as any).BraPrice = 2000;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).BraType = 7;
                    (s as any).BraMaterial = 3;
                    (s as any).BraFun = 1;
                    (s as any).BraQuality = 4;
                    (s as any).BraStrength = 100000;
                    (s as any).BraThinness = 3;
                    (s as any).BraCover = 1;
                    (s as any).PanThinness = 2;
                    (s as any).BraPrice = 1900;
                  } else {
                    (s as any).BraType = 6;
                    (s as any).BraMaterial = 3;
                    (s as any).BraFun = 1;
                    (s as any).BraQuality = 4;
                    (s as any).BraStrength = 100000;
                    (s as any).BraThinness = 4;
                    (s as any).PanThinness = 2;
                    (s as any).BraPrice = 1900;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).BraType = 7;
                      (s as any).BraFun = 1;
                      (s as any).BraQuality = 4;
                      (s as any).BraStrength = 100000;
                      (s as any).BraThinness = 4;
                      (s as any).PanThinness = 3;
                      (s as any).BraPrice = 1900;
                    } else {
                      (s as any).BraType = 7;
                      (s as any).BraFun = 1;
                      (s as any).BraQuality = 4;
                      (s as any).BraStrength = 100000;
                      (s as any).BraThinness = 3;
                      (s as any).PanThinness = 3;
                      (s as any).BraPrice = 1900;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).BraType = 7;
                        (s as any).BraMaterial = 6;
                        (s as any).BraFun = 1;
                        (s as any).BraQuality = 5;
                        (s as any).BraStrength = 120000;
                        (s as any).BraThinness = 2;
                        (s as any).PanThinness = 2;
                        (s as any).BraPrice = 2000;
                      } else {
                        (s as any).BraType = 7;
                        (s as any).BraMaterial = 6;
                        (s as any).BraFun = 1;
                        (s as any).BraQuality = 4;
                        (s as any).BraStrength = 100000;
                        (s as any).BraThinness = 4;
                        (s as any).PanThinness = 5;
                        (s as any).PanCoverBack = 3;
                        (s as any).BraPrice = 1900;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).BraType = 7;
                          (s as any).BraMaterial = 3;
                          (s as any).BraFun = 1;
                          (s as any).BraQuality = 4;
                          (s as any).BraStrength = 100000;
                          (s as any).BraThinness = 5;
                          (s as any).BraCover = 1;
                          (s as any).PanThinness = 5;
                          (s as any).PanCoverFront = 1;
                          (s as any).PanCoverBack = 1;
                          (s as any).BraPrice = 1900;
                        } else {
                          (s as any).BraType = 7;
                          (s as any).BraMaterial = 6;
                          (s as any).BraFun = 1;
                          (s as any).BraQuality = 5;
                          (s as any).BraStrength = 120000;
                          (s as any).BraThinness = 4;
                          (s as any).BraCover = 4;
                          (s as any).PanThinness = 4;
                          (s as any).PanCoverBack = 4;
                          (s as any).BraPrice = 2000;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).BraType = 7;
                            (s as any).BraMaterial = 6;
                            (s as any).BraFun = 1;
                            (s as any).BraQuality = 4;
                            (s as any).BraStrength = 100000;
                            (s as any).BraThinness = 3;
                            (s as any).PanThinness = 3;
                            (s as any).PanCoverBack = 4;
                            (s as any).BraPrice = 1900;
                          } else {
                            (s as any).BraType = 6;
                            (s as any).BraMaterial = 3;
                            (s as any).BraFun = 1;
                            (s as any).BraQuality = 5;
                            (s as any).BraStrength = 120000;
                            (s as any).BraThinness = 4;
                            (s as any).PanThinness = 4;
                            (s as any).BraPrice = 2000;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).BraType = 6;
                              (s as any).BraMaterial = 3;
                              (s as any).BraFun = 1;
                              (s as any).BraQuality = 5;
                              (s as any).BraStrength = 120000;
                              (s as any).BraThinness = 5;
                              (s as any).BraCover = 3;
                              (s as any).PanThinness = 4;
                              (s as any).BraPrice = 2000;
                            } else {
                              (s as any).BraType = 7;
                              (s as any).BraMaterial = 3;
                              (s as any).BraFun = 1;
                              (s as any).BraQuality = 5;
                              (s as any).BraStrength = 120000;
                              (s as any).BraThinness = 3;
                              (s as any).PanThinness = 5;
                              (s as any).PanCoverBack = 3;
                              (s as any).BraPrice = 2000;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).BraType = 7;
                                (s as any).BraMaterial = 3;
                                (s as any).BraFun = 1;
                                (s as any).BraQuality = 5;
                                (s as any).BraStrength = 120000;
                                (s as any).BraThinness = 5;
                                (s as any).BraCover = 3;
                                (s as any).PanThinness = 5;
                                (s as any).PanCoverFront = 3;
                                (s as any).PanCoverBack = 3;
                                (s as any).BraPrice = 2000;
                              } else {
                                (s as any).BraType = 7;
                                (s as any).BraMaterial = 3;
                                (s as any).BraFun = 1;
                                (s as any).BraQuality = 4;
                                (s as any).BraStrength = 100000;
                                (s as any).BraThinness = 4;
                                (s as any).PanThinness = 5;
                                (s as any).PanCoverFront = 1;
                                (s as any).PanCoverBack = 1;
                                (s as any).BraPrice = 1900;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).BraType = 5;
                                  (s as any).BraMaterial = 6;
                                  (s as any).BraFun = 1;
                                  (s as any).BraQuality = 5;
                                  (s as any).BraStrength = 120000;
                                  (s as any).BraThinness = 5;
                                  (s as any).BraCover = 1;
                                  (s as any).PanThinness = 5;
                                  (s as any).PanCoverFront = 1;
                                  (s as any).PanCoverBack = 1;
                                  (s as any).BraPrice = 2000;
                                } else {
                                  (s as any).BraType = 7;
                                  (s as any).BraMaterial = 3;
                                  (s as any).BraFun = 1;
                                  (s as any).BraQuality = 4;
                                  (s as any).BraStrength = 100000;
                                  (s as any).BraThinness = 5;
                                  (s as any).PanThinness = 5;
                                  (s as any).PanCoverBack = 4;
                                  (s as any).BraPrice = 1900;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).BraType = 7;
                                    (s as any).BraMaterial = 3;
                                    (s as any).BraFun = 1;
                                    (s as any).BraQuality = 4;
                                    (s as any).BraStrength = 100000;
                                    (s as any).BraThinness = 4;
                                    (s as any).BraCover = 1;
                                    (s as any).PanThinness = 4;
                                    (s as any).PanCoverFront = 2;
                                    (s as any).PanCoverBack = 4;
                                    (s as any).BraPrice = 1900;
                                  } else {
                                    (s as any).BraType = 7;
                                    (s as any).BraMaterial = 6;
                                    (s as any).BraFun = 1;
                                    (s as any).BraQuality = 4;
                                    (s as any).BraStrength = 100000;
                                    (s as any).BraThinness = 4;
                                    (s as any).PanThinness = 4;
                                    (s as any).PanCoverFront = 2;
                                    (s as any).PanCoverBack = 2;
                                    (s as any).BraPrice = 1900;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).BraType = 7;
                                      (s as any).BraMaterial = 3;
                                      (s as any).BraFun = 1;
                                      (s as any).BraQuality = 4;
                                      (s as any).BraStrength = 100000;
                                      (s as any).BraThinness = 5;
                                      (s as any).PanThinness = 5;
                                      (s as any).PanCoverFront = 2;
                                      (s as any).PanCoverBack = 2;
                                      (s as any).BraPrice = 1900;
                                    } else {
                                      (s as any).BraType = 7;
                                      (s as any).BraMaterial = 6;
                                      (s as any).BraFun = 1;
                                      (s as any).BraQuality = 4;
                                      (s as any).BraStrength = 100000;
                                      (s as any).BraThinness = 4;
                                      (s as any).BraCover = 1;
                                      (s as any).PanThinness = 4;
                                      (s as any).PanCoverFront = 1;
                                      (s as any).PanCoverBack = 1;
                                      (s as any).BraPrice = 1900;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).BraType = 7;
                                        (s as any).BraMaterial = 6;
                                        (s as any).BraFun = 1;
                                        (s as any).BraQuality = 4;
                                        (s as any).BraStrength = 100000;
                                        (s as any).BraThinness = 4;
                                        (s as any).BraCover = 1;
                                        (s as any).PanThinness = 4;
                                        (s as any).PanCoverBack = 4;
                                        (s as any).BraPrice = 1900;
                                      } else {
                                        (s as any).BraType = 7;
                                        (s as any).BraMaterial = 3;
                                        (s as any).BraFun = 1;
                                        (s as any).BraQuality = 4;
                                        (s as any).BraStrength = 100000;
                                        (s as any).BraThinness = 5;
                                        (s as any).BraCover = 2;
                                        (s as any).PanThinness = 5;
                                        (s as any).PanCoverFront = 3;
                                        (s as any).PanCoverBack = 3;
                                        (s as any).BraPrice = 1900;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).BraType = 7;
                                          (s as any).BraMaterial = 3;
                                          (s as any).BraFun = 1;
                                          (s as any).BraQuality = 4;
                                          (s as any).BraStrength = 100000;
                                          (s as any).BraThinness = 4;
                                          (s as any).BraCover = 2;
                                          (s as any).PanThinness = 4;
                                          (s as any).PanCoverFront = 3;
                                          (s as any).PanCoverBack = 3;
                                          (s as any).BraPrice = 1900;
                                        } else {
                                          (s as any).BraType = 7;
                                          (s as any).BraFun = 1;
                                          (s as any).BraQuality = 4;
                                          (s as any).BraStrength = 100000;
                                          (s as any).BraThinness = 3;
                                          (s as any).PanThinness = 2;
                                          (s as any).PanCoverBack = 4;
                                          (s as any).BraPrice = 1900;
                                          if (((s as any).ARGS ?? 0)[0] === 41) {
                                            (s as any).BraType = 2;
                                            (s as any).BraMaterial = 6;
                                            (s as any).BraFun = 1;
                                            (s as any).BraQuality = 6;
                                            (s as any).BraStrength = 140000;
                                            (s as any).BraThinness = 4;
                                            (s as any).PanThinness = 4;
                                            (s as any).PanCoverBack = 4;
                                            (s as any).BraPrice = 2100;
                                          } else {
                                            (s as any).BraType = 7;
                                            (s as any).BraMaterial = 3;
                                            (s as any).BraFun = 1;
                                            (s as any).BraQuality = 5;
                                            (s as any).BraStrength = 120000;
                                            (s as any).BraThinness = 4;
                                            (s as any).BraCover = 1;
                                            (s as any).PanThinness = 4;
                                            (s as any).PanCoverFront = 1;
                                            (s as any).PanCoverBack = 1;
                                            (s as any).BraPrice = 2000;
                                            if (((s as any).ARGS ?? 0)[0] === 43) {
                                              (s as any).BraType = 7;
                                              (s as any).BraMaterial = 6;
                                              (s as any).BraFun = 1;
                                              (s as any).BraQuality = 5;
                                              (s as any).BraStrength = 120000;
                                              (s as any).BraThinness = 2;
                                              (s as any).PanThinness = 2;
                                              (s as any).PanCoverBack = 1;
                                              (s as any).BraPrice = 2000;
                                            } else {
                                              (s as any).BraType = 7;
                                              (s as any).BraFun = 1;
                                              (s as any).BraQuality = 5;
                                              (s as any).BraStrength = 120000;
                                              (s as any).BraThinness = 1;
                                              (s as any).PanThinness = 1;
                                              (s as any).BraPrice = 2000;
                                              if (((s as any).ARGS ?? 0)[0] === 45) {
                                                (s as any).BraType = 7;
                                                (s as any).BraFun = 1;
                                                (s as any).BraQuality = 5;
                                                (s as any).BraStrength = 120000;
                                                (s as any).BraThinness = 1;
                                                (s as any).PanThinness = 1;
                                                (s as any).BraPrice = 2000;
                                              } else {
                                                (s as any).BraType = 7;
                                                (s as any).BraMaterial = 6;
                                                (s as any).BraQuality = 4;
                                                (s as any).BraStrength = 100000;
                                                (s as any).BraThinness = 4;
                                                (s as any).BraCover = 1;
                                                (s as any).PanThinness = 4;
                                                (s as any).BraPrice = 1900;
                                                if (((s as any).ARGS ?? 0)[0] === 47) {
                                                  (s as any).BraType = 7;
                                                  (s as any).BraFun = 1;
                                                  (s as any).BraQuality = 5;
                                                  (s as any).BraStrength = 120000;
                                                  (s as any).BraThinness = 3;
                                                  (s as any).PanThinness = 3;
                                                  (s as any).BraPrice = 2000;
                                                } else {
                                                  (s as any).BraType = 7;
                                                  (s as any).BraMaterial = 6;
                                                  (s as any).BraFun = 1;
                                                  (s as any).BraQuality = 4;
                                                  (s as any).BraStrength = 100000;
                                                  (s as any).BraThinness = 4;
                                                  (s as any).BraCover = 1;
                                                  (s as any).PanThinness = 4;
                                                  (s as any).PanCoverBack = 1;
                                                  (s as any).BraPrice = 1900;
                                                  if (((s as any).ARGS ?? 0)[0] === 49) {
                                                    (s as any).BraType = 7;
                                                    (s as any).BraFun = 1;
                                                    (s as any).BraQuality = 4;
                                                    (s as any).BraStrength = 100000;
                                                    (s as any).BraThinness = 4;
                                                    (s as any).PanThinness = 4;
                                                    (s as any).BraPrice = 1900;
                                                  } else {
                                                    (s as any).BraType = 7;
                                                    (s as any).BraMaterial = 3;
                                                    (s as any).BraFun = 1;
                                                    (s as any).BraQuality = 4;
                                                    (s as any).BraStrength = 100000;
                                                    (s as any).BraThinness = 4;
                                                    (s as any).BraCover = 1;
                                                    (s as any).PanThinness = 4;
                                                    (s as any).PanCoverFront = 2;
                                                    (s as any).PanCoverBack = 2;
                                                    (s as any).BraPrice = 1900;
                                                    if (((s as any).ARGS ?? 0)[0] === 51) {
                                                      (s as any).BraType = 7;
                                                      (s as any).BraMaterial = 6;
                                                      (s as any).BraFun = 1;
                                                      (s as any).BraQuality = 6;
                                                      (s as any).BraStrength = 140000;
                                                      (s as any).BraThinness = 4;
                                                      (s as any).BraCover = 1;
                                                      (s as any).PanThinness = 4;
                                                      (s as any).PanCoverFront = 1;
                                                      (s as any).PanCoverBack = 4;
                                                      (s as any).BraPrice = 2100;
                                                    } else {
                                                      (s as any).BraType = 6;
                                                      (s as any).BraFun = 1;
                                                      (s as any).BraQuality = 4;
                                                      (s as any).BraStrength = 100000;
                                                      (s as any).BraThinness = 1;
                                                      (s as any).PanThinness = 1;
                                                      (s as any).BraPrice = 1900;
                                                      if (((s as any).ARGS ?? 0)[0] === 53) {
                                                        (s as any).BraType = 7;
                                                        (s as any).BraFun = 1;
                                                        (s as any).BraQuality = 6;
                                                        (s as any).BraStrength = 140000;
                                                        (s as any).BraThinness = 3;
                                                        (s as any).PanThinness = 3;
                                                        (s as any).PanCoverBack = 4;
                                                        (s as any).BraPrice = 2100;
                                                      } else {
                                                        (s as any).BraType = 7;
                                                        (s as any).BraMaterial = 6;
                                                        (s as any).BraFun = 1;
                                                        (s as any).BraQuality = 5;
                                                        (s as any).BraStrength = 120000;
                                                        (s as any).BraThinness = 1;
                                                        (s as any).PanThinness = 1;
                                                        (s as any).BraPrice = 2000;
                                                        if (((s as any).ARGS ?? 0)[0] === 55) {
                                                          (s as any).BraType = 7;
                                                          (s as any).BraFun = 1;
                                                          (s as any).BraQuality = 4;
                                                          (s as any).BraStrength = 100000;
                                                          (s as any).BraThinness = 3;
                                                          (s as any).PanThinness = 1;
                                                          (s as any).BraPrice = 1900;
                                                        } else {
                                                          (s as any).BraType = 7;
                                                          (s as any).BraFun = 1;
                                                          (s as any).BraQuality = 4;
                                                          (s as any).BraStrength = 100000;
                                                          (s as any).BraThinness = 1;
                                                          (s as any).PanThinness = 1;
                                                          (s as any).BraPrice = 1900;
                                                          if (((s as any).ARGS ?? 0)[0] === 57) {
                                                            (s as any).BraType = 7;
                                                            (s as any).BraMaterial = 6;
                                                            (s as any).BraFun = 1;
                                                            (s as any).BraQuality = 4;
                                                            (s as any).BraStrength = 100000;
                                                            (s as any).BraThinness = 1;
                                                            (s as any).PanThinness = 1;
                                                            (s as any).BraPrice = 1900;
                                                          } else {
                                                            (s as any).BraType = 7;
                                                            (s as any).BraFun = 1;
                                                            (s as any).BraQuality = 4;
                                                            (s as any).BraStrength = 100000;
                                                            (s as any).BraThinness = 1;
                                                            (s as any).PanThinness = 1;
                                                            (s as any).BraPrice = 1900;
                                                            if (((s as any).ARGS ?? 0)[0] === 59) {
                                                              (s as any).BraType = 7;
                                                              (s as any).BraFun = 1;
                                                              (s as any).BraQuality = 5;
                                                              (s as any).BraStrength = 120000;
                                                              (s as any).BraThinness = 4;
                                                              (s as any).PanThinness = 4;
                                                              (s as any).BraPrice = 2000;
                                                            } else {
                                                              (s as any).BraType = 7;
                                                              (s as any).BraFun = 1;
                                                              (s as any).BraQuality = 5;
                                                              (s as any).BraStrength = 120000;
                                                              (s as any).BraThinness = 1;
                                                              (s as any).PanThinness = 1;
                                                              (s as any).BraPrice = 2000;
                                                              if (((s as any).ARGS ?? 0)[0] === 61) {
                                                                (s as any).BraType = 5;
                                                                (s as any).BraFun = 1;
                                                                (s as any).BraQuality = 4;
                                                                (s as any).BraStrength = 100000;
                                                                (s as any).BraThinness = 3;
                                                                (s as any).PanThinness = 3;
                                                                (s as any).PanCoverBack = 4;
                                                                (s as any).BraPrice = 1900;
                                                              } else {
                                                                (s as any).BraType = 7;
                                                                (s as any).BraFun = 1;
                                                                (s as any).BraQuality = 4;
                                                                (s as any).BraStrength = 100000;
                                                                (s as any).BraThinness = 2;
                                                                (s as any).BraCover = 1;
                                                                (s as any).PanThinness = 1;
                                                                (s as any).PanCoverFront = 1;
                                                                (s as any).PanCoverBack = 1;
                                                                (s as any).BraPrice = 1900;
                                                                if (((s as any).ARGS ?? 0)[0] === 63) {
                                                                  (s as any).BraType = 7;
                                                                  (s as any).BraMaterial = 3;
                                                                  (s as any).BraFun = 1;
                                                                  (s as any).BraQuality = 4;
                                                                  (s as any).BraStrength = 100000;
                                                                  (s as any).BraThinness = 2;
                                                                  (s as any).PanThinness = 2;
                                                                  (s as any).BraPrice = 1900;
                                                                } else {
                                                                  (s as any).BraType = 7;
                                                                  (s as any).BraFun = 1;
                                                                  (s as any).BraQuality = 5;
                                                                  (s as any).BraStrength = 120000;
                                                                  (s as any).BraThinness = 3;
                                                                  (s as any).BraCover = 1;
                                                                  (s as any).PanThinness = 3;
                                                                  (s as any).PanCoverFront = 1;
                                                                  (s as any).PanCoverBack = 1;
                                                                  (s as any).BraPrice = 2000;
                                                                  if (((s as any).ARGS ?? 0)[0] === 65) {
                                                                    (s as any).BraType = 7;
                                                                    (s as any).BraFun = 1;
                                                                    (s as any).BraQuality = 4;
                                                                    (s as any).BraStrength = 100000;
                                                                    (s as any).BraThinness = 2;
                                                                    (s as any).PanThinness = 2;
                                                                    (s as any).BraPrice = 1900;
                                                                  } else {
                                                                    (s as any).BraType = 7;
                                                                    (s as any).BraFun = 1;
                                                                    (s as any).BraQuality = 4;
                                                                    (s as any).BraStrength = 100000;
                                                                    (s as any).BraThinness = 2;
                                                                    (s as any).PanThinness = 2;
                                                                    (s as any).BraPrice = 1900;
                                                                    if (((s as any).ARGS ?? 0)[0] === 67) {
                                                                      (s as any).BraType = 7;
                                                                      (s as any).BraMaterial = 6;
                                                                      (s as any).BraFun = 1;
                                                                      (s as any).BraQuality = 5;
                                                                      (s as any).BraStrength = 120000;
                                                                      (s as any).BraThinness = 4;
                                                                      (s as any).BraCover = 4;
                                                                      (s as any).PanThinness = 4;
                                                                      (s as any).PanCoverBack = 4;
                                                                      (s as any).BraPrice = 2000;
                                                                    } else {
                                                                      (s as any).BraType = 7;
                                                                      (s as any).BraMaterial = 6;
                                                                      (s as any).BraFun = 1;
                                                                      (s as any).BraQuality = 4;
                                                                      (s as any).BraStrength = 100000;
                                                                      (s as any).BraThinness = 4;
                                                                      (s as any).BraCover = 1;
                                                                      (s as any).PanThinness = 4;
                                                                      (s as any).PanCoverBack = 4;
                                                                      (s as any).BraPrice = 1900;
                                                                      if (((s as any).ARGS ?? 0)[0] === 69) {
                                                                        (s as any).BraType = 7;
                                                                        (s as any).BraMaterial = 6;
                                                                        (s as any).BraFun = 1;
                                                                        (s as any).BraQuality = 4;
                                                                        (s as any).BraStrength = 100000;
                                                                        (s as any).BraThinness = 4;
                                                                        (s as any).PanThinness = 4;
                                                                        (s as any).PanCoverBack = 4;
                                                                        (s as any).BraPrice = 1900;
                                                                      } else {
                                                                        (s as any).BraType = 7;
                                                                        (s as any).BraMaterial = 3;
                                                                        (s as any).BraFun = 1;
                                                                        (s as any).BraQuality = 5;
                                                                        (s as any).BraStrength = 120000;
                                                                        (s as any).BraThinness = 5;
                                                                        (s as any).BraCover = 1;
                                                                        (s as any).PanThinness = 4;
                                                                        (s as any).PanCoverFront = 1;
                                                                        (s as any).PanCoverBack = 4;
                                                                        (s as any).BraPrice = 2000;
                                                                        if (((s as any).ARGS ?? 0)[0] === 71) {
                                                                          (s as any).BraType = 7;
                                                                          (s as any).BraMaterial = 3;
                                                                          (s as any).BraFun = 1;
                                                                          (s as any).BraQuality = 4;
                                                                          (s as any).BraStrength = 100000;
                                                                          (s as any).BraThinness = 4;
                                                                          (s as any).BraCover = 1;
                                                                          (s as any).PanThinness = 4;
                                                                          (s as any).PanCoverFront = 1;
                                                                          (s as any).PanCoverBack = 4;
                                                                          (s as any).BraPrice = 1900;
                                                                        } else {
                                                                          (s as any).BraType = 5;
                                                                          (s as any).BraMaterial = 3;
                                                                          (s as any).BraFun = 1;
                                                                          (s as any).BraQuality = 4;
                                                                          (s as any).BraStrength = 100000;
                                                                          (s as any).BraThinness = 5;
                                                                          (s as any).BraCover = 1;
                                                                          (s as any).PanThinness = 5;
                                                                          (s as any).PanCoverFront = 1;
                                                                          (s as any).PanCoverBack = 3;
                                                                          (s as any).BraPrice = 1900;
                                                                          if (((s as any).ARGS ?? 0)[0] === 73) {
                                                                            (s as any).BraType = 7;
                                                                            (s as any).BraFun = 1;
                                                                            (s as any).BraQuality = 6;
                                                                            (s as any).BraStrength = 140000;
                                                                            (s as any).BraThinness = 2;
                                                                            (s as any).PanThinness = 2;
                                                                            (s as any).PanCoverBack = 4;
                                                                            (s as any).BraPrice = 2100;
                                                                          } else {
                                                                            (s as any).BraType = 7;
                                                                            (s as any).BraFun = 1;
                                                                            (s as any).BraQuality = 6;
                                                                            (s as any).BraStrength = 140000;
                                                                            (s as any).BraThinness = 1;
                                                                            (s as any).PanThinness = 1;
                                                                            (s as any).BraPrice = 2100;
                                                                            if (((s as any).ARGS ?? 0)[0] === 75) {
                                                                              (s as any).BraType = 7;
                                                                              (s as any).BraFun = 1;
                                                                              (s as any).BraQuality = 4;
                                                                              (s as any).BraStrength = 100000;
                                                                              (s as any).BraThinness = 3;
                                                                              (s as any).PanThinness = 3;
                                                                              (s as any).BraPrice = 1900;
                                                                            } else {
                                                                              (s as any).BraType = 7;
                                                                              (s as any).BraMaterial = 6;
                                                                              (s as any).BraFun = 1;
                                                                              (s as any).BraQuality = 6;
                                                                              (s as any).BraStrength = 140000;
                                                                              (s as any).BraThinness = 3;
                                                                              (s as any).BraCover = 1;
                                                                              (s as any).PanThinness = 3;
                                                                              (s as any).PanCoverBack = 4;
                                                                              (s as any).BraPrice = 2100;
                                                                              if (((s as any).ARGS ?? 0)[0] === 77) {
                                                                                (s as any).BraType = 6;
                                                                                (s as any).BraFun = 1;
                                                                                (s as any).BraQuality = 4;
                                                                                (s as any).BraStrength = 100000;
                                                                                (s as any).BraThinness = 3;
                                                                                (s as any).PanThinness = 3;
                                                                                (s as any).BraPrice = 1900;
                                                                              } else {
                                                                                (s as any).BraType = 7;
                                                                                (s as any).BraFun = 1;
                                                                                (s as any).BraQuality = 4;
                                                                                (s as any).BraStrength = 100000;
                                                                                (s as any).BraThinness = 3;
                                                                                (s as any).PanThinness = 3;
                                                                                (s as any).BraPrice = 1900;
                                                                                if (((s as any).ARGS ?? 0)[0] === 79) {
                                                                                  (s as any).BraType = 7;
                                                                                  (s as any).BraMaterial = 6;
                                                                                  (s as any).BraFun = 1;
                                                                                  (s as any).BraQuality = 4;
                                                                                  (s as any).BraStrength = 100000;
                                                                                  (s as any).BraThinness = 4;
                                                                                  (s as any).BraCover = 1;
                                                                                  (s as any).PanThinness = 4;
                                                                                  (s as any).PanCoverFront = 1;
                                                                                  (s as any).PanCoverBack = 4;
                                                                                  (s as any).BraPrice = 1900;
                                                                                } else {
                                                                                  (s as any).BraType = 7;
                                                                                  (s as any).BraMaterial = 6;
                                                                                  (s as any).BraFun = 1;
                                                                                  (s as any).BraQuality = 4;
                                                                                  (s as any).BraStrength = 100000;
                                                                                  (s as any).BraThinness = 4;
                                                                                  (s as any).PanThinness = 5;
                                                                                  (s as any).PanCoverBack = 4;
                                                                                  (s as any).BraPrice = 1900;
                                                                                  if (((s as any).ARGS ?? 0)[0] === 81) {
                                                                                    (s as any).BraType = 7;
                                                                                    (s as any).BraMaterial = 6;
                                                                                    (s as any).BraFun = 1;
                                                                                    (s as any).BraQuality = 4;
                                                                                    (s as any).BraStrength = 100000;
                                                                                    (s as any).BraThinness = 4;
                                                                                    (s as any).PanThinness = 4;
                                                                                    (s as any).PanCoverBack = 4;
                                                                                    (s as any).BraPrice = 1900;
                                                                                  } else {
                                                                                    (s as any).BraType = 7;
                                                                                    (s as any).BraFun = 1;
                                                                                    (s as any).BraQuality = 4;
                                                                                    (s as any).BraStrength = 100000;
                                                                                    (s as any).BraThinness = 4;
                                                                                    (s as any).PanThinness = 4;
                                                                                    (s as any).PanCoverBack = 4;
                                                                                    (s as any).BraPrice = 1900;
                                                                                    if (((s as any).ARGS ?? 0)[0] === 83) {
                                                                                      (s as any).BraType = 7;
                                                                                      (s as any).BraFun = 1;
                                                                                      (s as any).BraQuality = 5;
                                                                                      (s as any).BraStrength = 120000;
                                                                                      (s as any).BraThinness = 5;
                                                                                      (s as any).BraCover = 2;
                                                                                      (s as any).PanThinness = 5;
                                                                                      (s as any).PanCoverFront = 2;
                                                                                      (s as any).PanCoverBack = 4;
                                                                                      (s as any).BraPrice = 2000;
                                                                                    } else {
                                                                                      (s as any).BraType = 7;
                                                                                      (s as any).BraMaterial = 6;
                                                                                      (s as any).BraFun = 1;
                                                                                      (s as any).BraQuality = 5;
                                                                                      (s as any).BraStrength = 120000;
                                                                                      (s as any).BraThinness = 5;
                                                                                      (s as any).BraCover = 2;
                                                                                      (s as any).PanThinness = 5;
                                                                                      (s as any).PanCoverFront = 2;
                                                                                      (s as any).PanCoverBack = 4;
                                                                                      (s as any).BraPrice = 2000;
                                                                                      if (((s as any).ARGS ?? 0)[0] === 85) {
                                                                                        (s as any).BraType = 7;
                                                                                        (s as any).BraMaterial = 6;
                                                                                        (s as any).BraFun = 1;
                                                                                        (s as any).BraQuality = 4;
                                                                                        (s as any).BraStrength = 100000;
                                                                                        (s as any).BraThinness = 5;
                                                                                        (s as any).BraCover = 1;
                                                                                        (s as any).PanThinness = 4;
                                                                                        (s as any).PanCoverBack = 4;
                                                                                        (s as any).BraPrice = 1900;
                                                                                      } else {
                                                                                        (s as any).BraType = 7;
                                                                                        (s as any).BraMaterial = 3;
                                                                                        (s as any).BraFun = 1;
                                                                                        (s as any).BraQuality = 6;
                                                                                        (s as any).BraStrength = 140000;
                                                                                        (s as any).BraThinness = 3;
                                                                                        (s as any).BraCover = 1;
                                                                                        (s as any).PanThinness = 3;
                                                                                        (s as any).PanCoverBack = 4;
                                                                                        (s as any).BraPrice = 2100;
                                                                                        if (((s as any).ARGS ?? 0)[0] === 87) {
                                                                                          (s as any).BraType = 7;
                                                                                          (s as any).BraFun = 1;
                                                                                          (s as any).BraQuality = 4;
                                                                                          (s as any).BraStrength = 100000;
                                                                                          (s as any).BraThinness = 3;
                                                                                          (s as any).PanThinness = 3;
                                                                                          (s as any).BraPrice = 1900;
                                                                                        } else {
                                                                                          (s as any).BraType = 5;
                                                                                          (s as any).BraMaterial = 6;
                                                                                          (s as any).BraFun = 1;
                                                                                          (s as any).BraQuality = 4;
                                                                                          (s as any).BraStrength = 100000;
                                                                                          (s as any).BraThinness = 4;
                                                                                          (s as any).BraCover = 3;
                                                                                          (s as any).PanThinness = 4;
                                                                                          (s as any).PanCoverFront = 3;
                                                                                          (s as any).PanCoverBack = 3;
                                                                                          (s as any).BraPrice = 1900;
                                                                                          if (((s as any).ARGS ?? 0)[0] === 89) {
                                                                                            (s as any).BraType = 6;
                                                                                            (s as any).BraMaterial = 6;
                                                                                            (s as any).BraFun = 1;
                                                                                            (s as any).BraQuality = 4;
                                                                                            (s as any).BraStrength = 100000;
                                                                                            (s as any).BraThinness = 4;
                                                                                            (s as any).BraCover = 1;
                                                                                            (s as any).PanThinness = 4;
                                                                                            (s as any).BraPrice = 1900;
                                                                                          } else {
                                                                                            (s as any).BraType = 7;
                                                                                            (s as any).BraFun = 1;
                                                                                            (s as any).BraQuality = 4;
                                                                                            (s as any).BraStrength = 100000;
                                                                                            (s as any).BraThinness = 3;
                                                                                            (s as any).PanThinness = 3;
                                                                                            (s as any).BraPrice = 1900;
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
          }
        }
      }
    }
  }
  scene.build();
}

export const _attributes_lusso_bodysuits: LocationDef = {
  name: '_attributes_lusso_bodysuits',
  region: 'other',
  enter: enter,
};
