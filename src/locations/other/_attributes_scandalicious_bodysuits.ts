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
  // TODO-QSP: BraPrice ~ 1250 * (20 + BraQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 2: 1400
  // TODO-QSP: 3: 1450
  // TODO-QSP: 4: 1500
  // TODO-QSP: 5: 1550
  // TODO-QSP: 6: 1600
  // TODO-QSP: BraQuality ranges from 2 to 6
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).BraType = 2;
    (s as any).BraMaterial = 3;
    (s as any).BraFun = 1;
    (s as any).BraQuality = 5;
    (s as any).BraStrength = 120000;
    (s as any).BraThinness = 5;
    (s as any).PanThinness = 5;
    (s as any).PanCoverFront = 3;
    (s as any).PanCoverBack = 4;
    (s as any).BraPrice = 1550;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).BraType = 2;
      (s as any).BraFun = 1;
      (s as any).BraQuality = 3;
      (s as any).BraStrength = 80000;
      (s as any).BraThinness = 4;
      (s as any).PanThinness = 4;
      (s as any).PanCoverFront = 3;
      (s as any).PanCoverBack = 4;
      (s as any).BraPrice = 1450;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).BraType = 5;
        (s as any).BraMaterial = 3;
        (s as any).BraFun = 1;
        (s as any).BraQuality = 4;
        (s as any).BraStrength = 100000;
        (s as any).BraThinness = 5;
        (s as any).BraCover = 2;
        (s as any).PanThinness = 5;
        (s as any).PanCoverFront = 3;
        (s as any).PanCoverBack = 4;
        (s as any).BraPrice = 1500;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).BraType = 6;
          (s as any).BraMaterial = 3;
          (s as any).BraFun = 1;
          (s as any).BraQuality = 3;
          (s as any).BraStrength = 80000;
          (s as any).BraThinness = 5;
          (s as any).BraCover = 2;
          (s as any).PanThinness = 5;
          (s as any).PanCoverFront = 4;
          (s as any).PanCoverBack = 3;
          (s as any).BraPrice = 1450;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).BraType = 7;
            (s as any).BraMaterial = 3;
            (s as any).BraFun = 1;
            (s as any).BraQuality = 4;
            (s as any).BraStrength = 100000;
            (s as any).BraThinness = 3;
            (s as any).BraCover = 1;
            (s as any).PanThinness = 3;
            (s as any).PanCoverFront = 1;
            (s as any).PanCoverBack = 1;
            (s as any).BraPrice = 1500;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).BraType = 7;
              (s as any).BraMaterial = 3;
              (s as any).BraFun = 1;
              (s as any).BraQuality = 6;
              (s as any).BraStrength = 140000;
              (s as any).BraThinness = 3;
              (s as any).BraCover = 1;
              (s as any).PanThinness = 5;
              (s as any).PanCoverFront = 1;
              (s as any).PanCoverBack = 4;
              (s as any).BraPrice = 1600;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).BraType = 7;
                (s as any).BraMaterial = 6;
                (s as any).BraFun = 1;
                (s as any).BraQuality = 3;
                (s as any).BraStrength = 80000;
                (s as any).BraThinness = 4;
                (s as any).BraCover = 1;
                (s as any).PanThinness = 4;
                (s as any).PanCoverFront = 3;
                (s as any).PanCoverBack = 4;
                (s as any).BraPrice = 1450;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).BraType = 7;
                  (s as any).BraMaterial = 3;
                  (s as any).BraFun = 1;
                  (s as any).BraQuality = 3;
                  (s as any).BraStrength = 80000;
                  (s as any).BraThinness = 4;
                  (s as any).BraCover = 1;
                  (s as any).PanThinness = 3;
                  (s as any).BraPrice = 1450;
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 9) {
                    (s as any).BraType = 7;
                    (s as any).BraMaterial = 3;
                    (s as any).BraFun = 1;
                    (s as any).BraQuality = 4;
                    (s as any).BraStrength = 100000;
                    (s as any).BraThinness = 5;
                    (s as any).BraCover = 1;
                    (s as any).PanThinness = 5;
                    (s as any).PanCoverFront = 3;
                    (s as any).PanCoverBack = 4;
                    (s as any).BraPrice = 1500;
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 10) {
                      (s as any).BraType = 7;
                      (s as any).BraMaterial = 6;
                      (s as any).BraFun = 1;
                      (s as any).BraQuality = 3;
                      (s as any).BraStrength = 80000;
                      (s as any).BraThinness = 4;
                      (s as any).BraCover = 1;
                      (s as any).PanThinness = 4;
                      (s as any).PanCoverFront = 3;
                      (s as any).PanCoverBack = 4;
                      (s as any).BraPrice = 1450;
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 11) {
                        (s as any).BraType = 4;
                        (s as any).BraMaterial = 6;
                        (s as any).BraFun = 1;
                        (s as any).BraQuality = 3;
                        (s as any).BraStrength = 80000;
                        (s as any).BraThinness = 4;
                        (s as any).BraCover = 1;
                        (s as any).PanThinness = 4;
                        (s as any).PanCoverFront = 1;
                        (s as any).PanCoverBack = 1;
                        (s as any).BraPrice = 1450;
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 12) {
                          (s as any).BraType = 4;
                          (s as any).BraFun = 1;
                          (s as any).BraQuality = 3;
                          (s as any).BraStrength = 80000;
                          (s as any).BraThinness = 4;
                          (s as any).PanThinness = 4;
                          (s as any).PanCoverFront = 1;
                          (s as any).PanCoverBack = 4;
                          (s as any).BraPrice = 1450;
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 13) {
                            (s as any).BraType = 7;
                            (s as any).BraMaterial = 3;
                            (s as any).BraFun = 1;
                            (s as any).BraQuality = 2;
                            (s as any).BraStrength = 60000;
                            (s as any).BraThinness = 3;
                            (s as any).BraCover = 3;
                            (s as any).PanThinness = 3;
                            (s as any).PanCoverBack = 4;
                            (s as any).BraPrice = 1400;
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 14) {
                              (s as any).BraType = 7;
                              (s as any).BraMaterial = 3;
                              (s as any).BraFun = 1;
                              (s as any).BraQuality = 4;
                              (s as any).BraStrength = 100000;
                              (s as any).BraThinness = 3;
                              (s as any).PanThinness = 4;
                              (s as any).PanCoverFront = 3;
                              (s as any).PanCoverBack = 4;
                              (s as any).BraPrice = 1500;
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 15) {
                                (s as any).BraType = 7;
                                (s as any).BraMaterial = 3;
                                (s as any).BraFun = 1;
                                (s as any).BraQuality = 4;
                                (s as any).BraStrength = 100000;
                                (s as any).BraThinness = 3;
                                (s as any).BraCover = 1;
                                (s as any).PanThinness = 3;
                                (s as any).PanCoverFront = 4;
                                (s as any).PanCoverBack = 1;
                                (s as any).BraPrice = 1500;
                              } else {
                                if (((s as any).locArgs?.[0] ?? 0) === 16) {
                                  (s as any).BraType = 4;
                                  (s as any).BraMaterial = 6;
                                  (s as any).BraFun = 1;
                                  (s as any).BraQuality = 4;
                                  (s as any).BraStrength = 100000;
                                  (s as any).BraThinness = 4;
                                  (s as any).BraCover = 2;
                                  (s as any).PanThinness = 3;
                                  (s as any).PanCoverBack = 1;
                                  (s as any).BraPrice = 1500;
                                } else {
                                  if (((s as any).locArgs?.[0] ?? 0) === 17) {
                                    (s as any).BraType = 7;
                                    (s as any).BraMaterial = 6;
                                    (s as any).BraFun = 1;
                                    (s as any).BraQuality = 4;
                                    (s as any).BraStrength = 100000;
                                    (s as any).BraThinness = 4;
                                    (s as any).BraCover = 1;
                                    (s as any).PanThinness = 4;
                                    (s as any).PanCoverFront = 3;
                                    (s as any).PanCoverBack = 4;
                                    (s as any).BraPrice = 1500;
                                  } else {
                                    if (((s as any).locArgs?.[0] ?? 0) === 18) {
                                      (s as any).BraType = 4;
                                      (s as any).BraMaterial = 6;
                                      (s as any).BraFun = 1;
                                      (s as any).BraQuality = 3;
                                      (s as any).BraStrength = 80000;
                                      (s as any).BraThinness = 5;
                                      (s as any).BraCover = 1;
                                      (s as any).PanThinness = 5;
                                      (s as any).PanCoverFront = 3;
                                      (s as any).PanCoverBack = 4;
                                      (s as any).BraPrice = 1450;
                                    } else {
                                      if (((s as any).locArgs?.[0] ?? 0) === 19) {
                                        (s as any).BraType = 6;
                                        (s as any).BraMaterial = 6;
                                        (s as any).BraFun = 1;
                                        (s as any).BraQuality = 3;
                                        (s as any).BraStrength = 80000;
                                        (s as any).BraThinness = 4;
                                        (s as any).BraCover = 1;
                                        (s as any).PanThinness = 4;
                                        (s as any).PanCoverFront = 4;
                                        (s as any).PanCoverBack = 4;
                                        (s as any).BraPrice = 1450;
                                      } else {
                                        if (((s as any).locArgs?.[0] ?? 0) === 20) {
                                          (s as any).BraType = 7;
                                          (s as any).BraMaterial = 6;
                                          (s as any).BraFun = 1;
                                          (s as any).BraQuality = 4;
                                          (s as any).BraStrength = 100000;
                                          (s as any).BraThinness = 4;
                                          (s as any).BraCover = 1;
                                          (s as any).PanThinness = 3;
                                          (s as any).PanCoverFront = 1;
                                          (s as any).PanCoverBack = 4;
                                          (s as any).BraPrice = 1500;
                                        } else {
                                          if (((s as any).locArgs?.[0] ?? 0) === 21) {
                                            (s as any).BraType = 7;
                                            (s as any).BraMaterial = 6;
                                            (s as any).BraFun = 1;
                                            (s as any).BraQuality = 5;
                                            (s as any).BraStrength = 120000;
                                            (s as any).BraThinness = 4;
                                            (s as any).BraCover = 1;
                                            (s as any).PanThinness = 3;
                                            (s as any).BraPrice = 1550;
                                          } else {
                                            if (((s as any).locArgs?.[0] ?? 0) === 22) {
                                              (s as any).BraType = 7;
                                              (s as any).BraMaterial = 6;
                                              (s as any).BraFun = 1;
                                              (s as any).BraQuality = 4;
                                              (s as any).BraStrength = 100000;
                                              (s as any).BraThinness = 5;
                                              (s as any).BraCover = 3;
                                              (s as any).PanThinness = 5;
                                              (s as any).PanCoverFront = 4;
                                              (s as any).PanCoverBack = 3;
                                              (s as any).BraPrice = 1500;
                                            } else {
                                              if (((s as any).locArgs?.[0] ?? 0) === 23) {
                                                (s as any).BraType = 7;
                                                (s as any).BraMaterial = 6;
                                                (s as any).BraFun = 1;
                                                (s as any).BraQuality = 3;
                                                (s as any).BraStrength = 80000;
                                                (s as any).BraThinness = 4;
                                                (s as any).BraCover = 1;
                                                (s as any).PanThinness = 4;
                                                (s as any).PanCoverFront = 3;
                                                (s as any).PanCoverBack = 4;
                                                (s as any).BraPrice = 1450;
                                              } else {
                                                if (((s as any).locArgs?.[0] ?? 0) === 24) {
                                                  (s as any).BraType = 7;
                                                  (s as any).BraMaterial = 6;
                                                  (s as any).BraFun = 1;
                                                  (s as any).BraQuality = 4;
                                                  (s as any).BraStrength = 100000;
                                                  (s as any).BraThinness = 4;
                                                  (s as any).BraCover = 1;
                                                  (s as any).PanThinness = 5;
                                                  (s as any).PanCoverFront = 3;
                                                  (s as any).PanCoverBack = 4;
                                                  (s as any).BraPrice = 1500;
                                                } else {
                                                  if (((s as any).locArgs?.[0] ?? 0) === 25) {
                                                    (s as any).BraType = 7;
                                                    (s as any).BraMaterial = 6;
                                                    (s as any).BraFun = 1;
                                                    (s as any).BraQuality = 4;
                                                    (s as any).BraStrength = 100000;
                                                    (s as any).BraThinness = 3;
                                                    (s as any).PanThinness = 3;
                                                    (s as any).PanCoverBack = 4;
                                                    (s as any).BraPrice = 1500;
                                                  } else {
                                                    if (((s as any).locArgs?.[0] ?? 0) === 26) {
                                                      (s as any).BraType = 7;
                                                      (s as any).BraMaterial = 6;
                                                      (s as any).BraFun = 1;
                                                      (s as any).BraQuality = 4;
                                                      (s as any).BraStrength = 100000;
                                                      (s as any).BraThinness = 4;
                                                      (s as any).BraCover = 2;
                                                      (s as any).PanThinness = 4;
                                                      (s as any).PanCoverFront = 1;
                                                      (s as any).PanCoverBack = 3;
                                                      (s as any).BraPrice = 1500;
                                                    } else {
                                                      if (((s as any).locArgs?.[0] ?? 0) === 27) {
                                                        (s as any).BraType = 4;
                                                        (s as any).BraMaterial = 6;
                                                        (s as any).BraFun = 1;
                                                        (s as any).BraQuality = 4;
                                                        (s as any).BraStrength = 100000;
                                                        (s as any).BraThinness = 4;
                                                        (s as any).BraCover = 3;
                                                        (s as any).PanThinness = 4;
                                                        (s as any).PanCoverFront = 3;
                                                        (s as any).PanCoverBack = 4;
                                                        (s as any).BraPrice = 1500;
                                                      } else {
                                                        if (((s as any).locArgs?.[0] ?? 0) === 28) {
                                                          (s as any).BraType = 7;
                                                          (s as any).BraMaterial = 6;
                                                          (s as any).BraFun = 1;
                                                          (s as any).BraQuality = 5;
                                                          (s as any).BraStrength = 120000;
                                                          (s as any).BraThinness = 3;
                                                          (s as any).PanThinness = 3;
                                                          (s as any).PanCoverBack = 4;
                                                          (s as any).BraPrice = 1550;
                                                        } else {
                                                          if (((s as any).locArgs?.[0] ?? 0) === 29) {
                                                            (s as any).BraType = 7;
                                                            (s as any).BraMaterial = 6;
                                                            (s as any).BraFun = 1;
                                                            (s as any).BraQuality = 4;
                                                            (s as any).BraStrength = 100000;
                                                            (s as any).BraThinness = 3;
                                                            (s as any).BraCover = 1;
                                                            (s as any).PanThinness = 3;
                                                            (s as any).PanCoverFront = 4;
                                                            (s as any).PanCoverBack = 4;
                                                            (s as any).BraPrice = 1500;
                                                          } else {
                                                            if (((s as any).locArgs?.[0] ?? 0) === 30) {
                                                              (s as any).BraType = 7;
                                                              (s as any).BraMaterial = 6;
                                                              (s as any).BraFun = 1;
                                                              (s as any).BraQuality = 6;
                                                              (s as any).BraStrength = 140000;
                                                              (s as any).BraThinness = 4;
                                                              (s as any).BraCover = 1;
                                                              (s as any).PanThinness = 5;
                                                              (s as any).PanCoverBack = 4;
                                                              (s as any).BraPrice = 1600;
                                                            } else {
                                                              if (((s as any).locArgs?.[0] ?? 0) === 31) {
                                                                (s as any).BraType = 7;
                                                                (s as any).BraMaterial = 6;
                                                                (s as any).BraFun = 1;
                                                                (s as any).BraQuality = 3;
                                                                (s as any).BraStrength = 80000;
                                                                (s as any).BraThinness = 3;
                                                                (s as any).BraCover = 1;
                                                                (s as any).PanThinness = 3;
                                                                (s as any).PanCoverBack = 4;
                                                                (s as any).BraPrice = 1450;
                                                              } else {
                                                                if (((s as any).locArgs?.[0] ?? 0) === 32) {
                                                                  (s as any).BraType = 7;
                                                                  (s as any).BraMaterial = 6;
                                                                  (s as any).BraFun = 1;
                                                                  (s as any).BraQuality = 4;
                                                                  (s as any).BraStrength = 100000;
                                                                  (s as any).BraThinness = 3;
                                                                  (s as any).BraCover = 1;
                                                                  (s as any).PanThinness = 4;
                                                                  (s as any).PanCoverFront = 3;
                                                                  (s as any).PanCoverBack = 4;
                                                                  (s as any).BraPrice = 1500;
                                                                } else {
                                                                  if (((s as any).locArgs?.[0] ?? 0) === 33) {
                                                                    (s as any).BraType = 7;
                                                                    (s as any).BraMaterial = 6;
                                                                    (s as any).BraFun = 1;
                                                                    (s as any).BraQuality = 4;
                                                                    (s as any).BraStrength = 100000;
                                                                    (s as any).BraThinness = 3;
                                                                    (s as any).BraCover = 1;
                                                                    (s as any).PanThinness = 3;
                                                                    (s as any).PanCoverFront = 3;
                                                                    (s as any).PanCoverBack = 4;
                                                                    (s as any).BraPrice = 1500;
                                                                  } else {
                                                                    if (((s as any).locArgs?.[0] ?? 0) === 34) {
                                                                      (s as any).BraType = 7;
                                                                      (s as any).BraMaterial = 6;
                                                                      (s as any).BraFun = 1;
                                                                      (s as any).BraQuality = 4;
                                                                      (s as any).BraStrength = 100000;
                                                                      (s as any).BraThinness = 4;
                                                                      (s as any).BraCover = 1;
                                                                      (s as any).PanThinness = 4;
                                                                      (s as any).PanCoverFront = 3;
                                                                      (s as any).PanCoverBack = 4;
                                                                      (s as any).BraPrice = 1500;
                                                                    } else {
                                                                      if (((s as any).locArgs?.[0] ?? 0) === 35) {
                                                                        (s as any).BraType = 7;
                                                                        (s as any).BraMaterial = 6;
                                                                        (s as any).BraFun = 1;
                                                                        (s as any).BraQuality = 5;
                                                                        (s as any).BraStrength = 120000;
                                                                        (s as any).BraThinness = 4;
                                                                        (s as any).BraCover = 4;
                                                                        (s as any).PanThinness = 5;
                                                                        (s as any).PanCoverFront = 4;
                                                                        (s as any).PanCoverBack = 4;
                                                                        (s as any).BraPrice = 1550;
                                                                      } else {
                                                                        if (((s as any).locArgs?.[0] ?? 0) === 36) {
                                                                          (s as any).BraType = 7;
                                                                          (s as any).BraFun = 1;
                                                                          (s as any).BraQuality = 4;
                                                                          (s as any).BraStrength = 100000;
                                                                          (s as any).BraThinness = 3;
                                                                          (s as any).BraCover = 4;
                                                                          (s as any).PanThinness = 3;
                                                                          (s as any).PanCoverFront = 4;
                                                                          (s as any).PanCoverBack = 4;
                                                                          (s as any).BraPrice = 1500;
                                                                        } else {
                                                                          if (((s as any).locArgs?.[0] ?? 0) === 37) {
                                                                            (s as any).BraType = 7;
                                                                            (s as any).BraFun = 1;
                                                                            (s as any).BraQuality = 4;
                                                                            (s as any).BraStrength = 100000;
                                                                            (s as any).BraThinness = 3;
                                                                            (s as any).BraCover = 4;
                                                                            (s as any).PanThinness = 3;
                                                                            (s as any).PanCoverFront = 1;
                                                                            (s as any).PanCoverBack = 4;
                                                                            (s as any).BraPrice = 1500;
                                                                          } else {
                                                                            if (((s as any).locArgs?.[0] ?? 0) === 38) {
                                                                              (s as any).BraType = 7;
                                                                              (s as any).BraFun = 1;
                                                                              (s as any).BraQuality = 4;
                                                                              (s as any).BraStrength = 100000;
                                                                              (s as any).BraThinness = 4;
                                                                              (s as any).BraCover = 4;
                                                                              (s as any).PanThinness = 4;
                                                                              (s as any).PanCoverFront = 4;
                                                                              (s as any).PanCoverBack = 4;
                                                                              (s as any).BraPrice = 1500;
                                                                            } else {
                                                                              if (((s as any).locArgs?.[0] ?? 0) === 39) {
                                                                                (s as any).BraType = 7;
                                                                                (s as any).BraFun = 1;
                                                                                (s as any).BraQuality = 4;
                                                                                (s as any).BraStrength = 100000;
                                                                                (s as any).BraThinness = 3;
                                                                                (s as any).BraCover = 4;
                                                                                (s as any).PanThinness = 3;
                                                                                (s as any).PanCoverFront = 4;
                                                                                (s as any).PanCoverBack = 4;
                                                                                (s as any).BraPrice = 1500;
                                                                              } else {
                                                                                if (((s as any).locArgs?.[0] ?? 0) === 40) {
                                                                                  (s as any).BraType = 2;
                                                                                  (s as any).BraFun = 1;
                                                                                  (s as any).BraQuality = 4;
                                                                                  (s as any).BraStrength = 100000;
                                                                                  (s as any).BraThinness = 4;
                                                                                  (s as any).PanThinness = 4;
                                                                                  (s as any).PanCoverBack = 4;
                                                                                  (s as any).BraPrice = 1500;
                                                                                } else {
                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 41) {
                                                                                    (s as any).BraType = 7;
                                                                                    (s as any).BraMaterial = 6;
                                                                                    (s as any).BraFun = 1;
                                                                                    (s as any).BraQuality = 4;
                                                                                    (s as any).BraStrength = 100000;
                                                                                    (s as any).BraThinness = 3;
                                                                                    (s as any).BraCover = 1;
                                                                                    (s as any).PanThinness = 3;
                                                                                    (s as any).PanCoverFront = 3;
                                                                                    (s as any).PanCoverBack = 4;
                                                                                    (s as any).BraPrice = 1500;
                                                                                  } else {
                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 42) {
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
                                                                                      (s as any).BraPrice = 1500;
                                                                                    } else {
                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 43) {
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
                                                                                        (s as any).BraPrice = 1500;
                                                                                      } else {
                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 44) {
                                                                                          (s as any).BraType = 7;
                                                                                          (s as any).BraMaterial = 6;
                                                                                          (s as any).BraFun = 1;
                                                                                          (s as any).BraQuality = 4;
                                                                                          (s as any).BraStrength = 100000;
                                                                                          (s as any).BraThinness = 3;
                                                                                          (s as any).PanThinness = 3;
                                                                                          (s as any).PanCoverBack = 4;
                                                                                          (s as any).BraPrice = 1500;
                                                                                        } else {
                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 45) {
                                                                                            (s as any).BraType = 7;
                                                                                            (s as any).BraMaterial = 6;
                                                                                            (s as any).BraFun = 1;
                                                                                            (s as any).BraQuality = 5;
                                                                                            (s as any).BraStrength = 120000;
                                                                                            (s as any).BraThinness = 4;
                                                                                            (s as any).BraCover = 2;
                                                                                            (s as any).PanThinness = 3;
                                                                                            (s as any).PanCoverBack = 4;
                                                                                            (s as any).BraPrice = 1550;
                                                                                          } else {
                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 46) {
                                                                                              (s as any).BraType = 7;
                                                                                              (s as any).BraMaterial = 6;
                                                                                              (s as any).BraFun = 1;
                                                                                              (s as any).BraQuality = 5;
                                                                                              (s as any).BraStrength = 120000;
                                                                                              (s as any).BraThinness = 4;
                                                                                              (s as any).BraCover = 4;
                                                                                              (s as any).PanThinness = 4;
                                                                                              (s as any).PanCoverBack = 4;
                                                                                              (s as any).BraPrice = 1550;
                                                                                            } else {
                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 47) {
                                                                                                (s as any).BraType = 7;
                                                                                                (s as any).BraFun = 1;
                                                                                                (s as any).BraQuality = 4;
                                                                                                (s as any).BraStrength = 100000;
                                                                                                (s as any).BraThinness = 4;
                                                                                                (s as any).BraCover = 1;
                                                                                                (s as any).PanThinness = 4;
                                                                                                (s as any).PanCoverBack = 4;
                                                                                                (s as any).BraPrice = 1500;
                                                                                              } else {
                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 48) {
                                                                                                  (s as any).BraType = 7;
                                                                                                  (s as any).BraFun = 1;
                                                                                                  (s as any).BraQuality = 4;
                                                                                                  (s as any).BraStrength = 100000;
                                                                                                  (s as any).BraThinness = 2;
                                                                                                  (s as any).PanThinness = 2;
                                                                                                  (s as any).PanCoverBack = 4;
                                                                                                  (s as any).BraPrice = 1500;
                                                                                                } else {
                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 49) {
                                                                                                    (s as any).BraType = 7;
                                                                                                    (s as any).BraMaterial = 6;
                                                                                                    (s as any).BraFun = 1;
                                                                                                    (s as any).BraQuality = 5;
                                                                                                    (s as any).BraStrength = 120000;
                                                                                                    (s as any).BraThinness = 4;
                                                                                                    (s as any).BraCover = 1;
                                                                                                    (s as any).PanThinness = 4;
                                                                                                    (s as any).PanCoverFront = 3;
                                                                                                    (s as any).PanCoverBack = 4;
                                                                                                    (s as any).BraPrice = 1550;
                                                                                                  } else {
                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 50) {
                                                                                                      (s as any).BraType = 7;
                                                                                                      (s as any).BraMaterial = 6;
                                                                                                      (s as any).BraFun = 1;
                                                                                                      (s as any).BraQuality = 4;
                                                                                                      (s as any).BraStrength = 100000;
                                                                                                      (s as any).BraThinness = 4;
                                                                                                      (s as any).BraCover = 1;
                                                                                                      (s as any).PanThinness = 4;
                                                                                                      (s as any).PanCoverBack = 4;
                                                                                                      (s as any).BraPrice = 1500;
                                                                                                    } else {
                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 51) {
                                                                                                        (s as any).BraType = 7;
                                                                                                        (s as any).BraMaterial = 6;
                                                                                                        (s as any).BraFun = 1;
                                                                                                        (s as any).BraQuality = 4;
                                                                                                        (s as any).BraStrength = 100000;
                                                                                                        (s as any).BraThinness = 3;
                                                                                                        (s as any).PanThinness = 3;
                                                                                                        (s as any).PanCoverBack = 4;
                                                                                                        (s as any).BraPrice = 1500;
                                                                                                      } else {
                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 52) {
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
                                                                                                          (s as any).BraPrice = 1500;
                                                                                                        } else {
                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 53) {
                                                                                                            (s as any).BraType = 7;
                                                                                                            (s as any).BraMaterial = 6;
                                                                                                            (s as any).BraFun = 1;
                                                                                                            (s as any).BraQuality = 4;
                                                                                                            (s as any).BraStrength = 100000;
                                                                                                            (s as any).BraThinness = 5;
                                                                                                            (s as any).BraCover = 1;
                                                                                                            (s as any).PanThinness = 5;
                                                                                                            (s as any).PanCoverFront = 3;
                                                                                                            (s as any).PanCoverBack = 4;
                                                                                                            (s as any).BraPrice = 1500;
                                                                                                          } else {
                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 54) {
                                                                                                              (s as any).BraType = 7;
                                                                                                              (s as any).BraMaterial = 6;
                                                                                                              (s as any).BraFun = 1;
                                                                                                              (s as any).BraQuality = 5;
                                                                                                              (s as any).BraStrength = 120000;
                                                                                                              (s as any).BraThinness = 4;
                                                                                                              (s as any).BraCover = 1;
                                                                                                              (s as any).PanThinness = 4;
                                                                                                              (s as any).PanCoverFront = 3;
                                                                                                              (s as any).PanCoverBack = 3;
                                                                                                              (s as any).BraPrice = 1550;
                                                                                                            } else {
                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 55) {
                                                                                                                (s as any).BraType = 7;
                                                                                                                (s as any).BraFun = 1;
                                                                                                                (s as any).BraQuality = 4;
                                                                                                                (s as any).BraStrength = 100000;
                                                                                                                (s as any).BraThinness = 3;
                                                                                                                (s as any).PanThinness = 5;
                                                                                                                (s as any).PanCoverBack = 4;
                                                                                                                (s as any).BraPrice = 1500;
                                                                                                              } else {
                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 56) {
                                                                                                                  (s as any).BraType = 7;
                                                                                                                  (s as any).BraMaterial = 3;
                                                                                                                  (s as any).BraFun = 1;
                                                                                                                  (s as any).BraQuality = 4;
                                                                                                                  (s as any).BraStrength = 100000;
                                                                                                                  (s as any).BraThinness = 4;
                                                                                                                  (s as any).PanThinness = 4;
                                                                                                                  (s as any).PanCoverFront = 3;
                                                                                                                  (s as any).PanCoverBack = 3;
                                                                                                                  (s as any).BraPrice = 1500;
                                                                                                                } else {
                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 57) {
                                                                                                                    (s as any).BraType = 7;
                                                                                                                    (s as any).BraMaterial = 6;
                                                                                                                    (s as any).BraFun = 1;
                                                                                                                    (s as any).BraQuality = 6;
                                                                                                                    (s as any).BraStrength = 140000;
                                                                                                                    (s as any).BraThinness = 4;
                                                                                                                    (s as any).BraCover = 1;
                                                                                                                    (s as any).PanThinness = 4;
                                                                                                                    (s as any).PanCoverFront = 3;
                                                                                                                    (s as any).PanCoverBack = 4;
                                                                                                                    (s as any).BraPrice = 1600;
                                                                                                                  } else {
                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 58) {
                                                                                                                      (s as any).BraType = 7;
                                                                                                                      (s as any).BraMaterial = 6;
                                                                                                                      (s as any).BraFun = 1;
                                                                                                                      (s as any).BraQuality = 4;
                                                                                                                      (s as any).BraStrength = 100000;
                                                                                                                      (s as any).BraThinness = 4;
                                                                                                                      (s as any).BraCover = 1;
                                                                                                                      (s as any).PanThinness = 4;
                                                                                                                      (s as any).PanCoverFront = 3;
                                                                                                                      (s as any).PanCoverBack = 4;
                                                                                                                      (s as any).BraPrice = 1500;
                                                                                                                    } else {
                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 59) {
                                                                                                                        (s as any).BraType = 4;
                                                                                                                        (s as any).BraMaterial = 6;
                                                                                                                        (s as any).BraFun = 1;
                                                                                                                        (s as any).BraQuality = 3;
                                                                                                                        (s as any).BraStrength = 80000;
                                                                                                                        (s as any).BraThinness = 4;
                                                                                                                        (s as any).BraCover = 1;
                                                                                                                        (s as any).PanThinness = 4;
                                                                                                                        (s as any).PanCoverFront = 3;
                                                                                                                        (s as any).PanCoverBack = 3;
                                                                                                                        (s as any).BraPrice = 1450;
                                                                                                                      } else {
                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 60) {
                                                                                                                          (s as any).BraType = 7;
                                                                                                                          (s as any).BraFun = 1;
                                                                                                                          (s as any).BraQuality = 4;
                                                                                                                          (s as any).BraStrength = 100000;
                                                                                                                          (s as any).BraThinness = 3;
                                                                                                                          (s as any).BraCover = 4;
                                                                                                                          (s as any).PanThinness = 3;
                                                                                                                          (s as any).PanCoverBack = 4;
                                                                                                                          (s as any).BraPrice = 1500;
                                                                                                                        } else {
                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 61) {
                                                                                                                            (s as any).BraType = 7;
                                                                                                                            (s as any).BraMaterial = 6;
                                                                                                                            (s as any).BraFun = 1;
                                                                                                                            (s as any).BraQuality = 4;
                                                                                                                            (s as any).BraStrength = 100000;
                                                                                                                            (s as any).BraThinness = 5;
                                                                                                                            (s as any).BraCover = 1;
                                                                                                                            (s as any).PanThinness = 5;
                                                                                                                            (s as any).PanCoverFront = 4;
                                                                                                                            (s as any).PanCoverBack = 4;
                                                                                                                            (s as any).BraPrice = 1500;
                                                                                                                          } else {
                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 62) {
                                                                                                                              (s as any).BraType = 2;
                                                                                                                              (s as any).BraFun = 1;
                                                                                                                              (s as any).BraQuality = 3;
                                                                                                                              (s as any).BraStrength = 80000;
                                                                                                                              (s as any).BraThinness = 4;
                                                                                                                              (s as any).PanThinness = 4;
                                                                                                                              (s as any).PanCoverBack = 4;
                                                                                                                              (s as any).BraPrice = 1450;
                                                                                                                            } else {
                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 63) {
                                                                                                                                (s as any).BraType = 7;
                                                                                                                                (s as any).BraMaterial = 6;
                                                                                                                                (s as any).BraFun = 1;
                                                                                                                                (s as any).BraQuality = 4;
                                                                                                                                (s as any).BraStrength = 100000;
                                                                                                                                (s as any).BraThinness = 4;
                                                                                                                                (s as any).BraCover = 1;
                                                                                                                                (s as any).PanThinness = 4;
                                                                                                                                (s as any).PanCoverFront = 3;
                                                                                                                                (s as any).PanCoverBack = 4;
                                                                                                                                (s as any).BraPrice = 1500;
                                                                                                                              } else {
                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 64) {
                                                                                                                                  (s as any).BraType = 7;
                                                                                                                                  (s as any).BraMaterial = 6;
                                                                                                                                  (s as any).BraFun = 1;
                                                                                                                                  (s as any).BraQuality = 5;
                                                                                                                                  (s as any).BraStrength = 120000;
                                                                                                                                  (s as any).BraThinness = 3;
                                                                                                                                  (s as any).PanThinness = 5;
                                                                                                                                  (s as any).BraPrice = 1550;
                                                                                                                                } else {
                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 65) {
                                                                                                                                    (s as any).BraType = 7;
                                                                                                                                    (s as any).BraMaterial = 6;
                                                                                                                                    (s as any).BraFun = 1;
                                                                                                                                    (s as any).BraQuality = 4;
                                                                                                                                    (s as any).BraStrength = 100000;
                                                                                                                                    (s as any).BraThinness = 4;
                                                                                                                                    (s as any).BraCover = 4;
                                                                                                                                    (s as any).PanThinness = 3;
                                                                                                                                    (s as any).PanCoverBack = 4;
                                                                                                                                    (s as any).BraPrice = 1500;
                                                                                                                                  } else {
                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 66) {
                                                                                                                                      (s as any).BraType = 7;
                                                                                                                                      (s as any).BraMaterial = 6;
                                                                                                                                      (s as any).BraFun = 1;
                                                                                                                                      (s as any).BraQuality = 4;
                                                                                                                                      (s as any).BraStrength = 100000;
                                                                                                                                      (s as any).BraThinness = 3;
                                                                                                                                      (s as any).BraCover = 1;
                                                                                                                                      (s as any).PanThinness = 3;
                                                                                                                                      (s as any).PanCoverBack = 4;
                                                                                                                                      (s as any).BraPrice = 1500;
                                                                                                                                    } else {
                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 67) {
                                                                                                                                        (s as any).BraType = 7;
                                                                                                                                        (s as any).BraMaterial = 6;
                                                                                                                                        (s as any).BraFun = 1;
                                                                                                                                        (s as any).BraQuality = 4;
                                                                                                                                        (s as any).BraStrength = 100000;
                                                                                                                                        (s as any).BraThinness = 4;
                                                                                                                                        (s as any).BraCover = 1;
                                                                                                                                        (s as any).PanThinness = 4;
                                                                                                                                        (s as any).PanCoverFront = 3;
                                                                                                                                        (s as any).PanCoverBack = 4;
                                                                                                                                        (s as any).BraPrice = 1500;
                                                                                                                                      } else {
                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 68) {
                                                                                                                                          (s as any).BraType = 7;
                                                                                                                                          (s as any).BraMaterial = 6;
                                                                                                                                          (s as any).BraFun = 1;
                                                                                                                                          (s as any).BraQuality = 4;
                                                                                                                                          (s as any).BraStrength = 100000;
                                                                                                                                          (s as any).BraThinness = 5;
                                                                                                                                          (s as any).BraCover = 1;
                                                                                                                                          (s as any).PanThinness = 5;
                                                                                                                                          (s as any).PanCoverFront = 4;
                                                                                                                                          (s as any).PanCoverBack = 4;
                                                                                                                                          (s as any).BraPrice = 1500;
                                                                                                                                        } else {
                                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 69) {
                                                                                                                                            (s as any).BraType = 2;
                                                                                                                                            (s as any).BraFun = 1;
                                                                                                                                            (s as any).BraQuality = 3;
                                                                                                                                            (s as any).BraStrength = 80000;
                                                                                                                                            (s as any).BraThinness = 4;
                                                                                                                                            (s as any).PanThinness = 4;
                                                                                                                                            (s as any).PanCoverBack = 4;
                                                                                                                                            (s as any).BraPrice = 1450;
                                                                                                                                          } else {
                                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 70) {
                                                                                                                                              (s as any).BraType = 7;
                                                                                                                                              (s as any).BraMaterial = 6;
                                                                                                                                              (s as any).BraFun = 1;
                                                                                                                                              (s as any).BraQuality = 5;
                                                                                                                                              (s as any).BraStrength = 120000;
                                                                                                                                              (s as any).BraThinness = 4;
                                                                                                                                              (s as any).BraCover = 1;
                                                                                                                                              (s as any).PanThinness = 4;
                                                                                                                                              (s as any).PanCoverFront = 3;
                                                                                                                                              (s as any).PanCoverBack = 3;
                                                                                                                                              (s as any).BraPrice = 1550;
                                                                                                                                            } else {
                                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 71) {
                                                                                                                                                (s as any).BraType = 7;
                                                                                                                                                (s as any).BraMaterial = 6;
                                                                                                                                                (s as any).BraFun = 1;
                                                                                                                                                (s as any).BraQuality = 5;
                                                                                                                                                (s as any).BraStrength = 120000;
                                                                                                                                                (s as any).BraThinness = 4;
                                                                                                                                                (s as any).BraCover = 1;
                                                                                                                                                (s as any).PanThinness = 4;
                                                                                                                                                (s as any).PanCoverFront = 3;
                                                                                                                                                (s as any).PanCoverBack = 4;
                                                                                                                                                (s as any).BraPrice = 1550;
                                                                                                                                              } else {
                                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 72) {
                                                                                                                                                  (s as any).BraType = 7;
                                                                                                                                                  (s as any).BraMaterial = 6;
                                                                                                                                                  (s as any).BraFun = 1;
                                                                                                                                                  (s as any).BraQuality = 4;
                                                                                                                                                  (s as any).BraStrength = 100000;
                                                                                                                                                  (s as any).BraThinness = 5;
                                                                                                                                                  (s as any).BraCover = 2;
                                                                                                                                                  (s as any).PanThinness = 5;
                                                                                                                                                  (s as any).PanCoverFront = 3;
                                                                                                                                                  (s as any).PanCoverBack = 4;
                                                                                                                                                  (s as any).BraPrice = 1500;
                                                                                                                                                } else {
                                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 73) {
                                                                                                                                                    (s as any).BraType = 7;
                                                                                                                                                    (s as any).BraFun = 1;
                                                                                                                                                    (s as any).BraQuality = 4;
                                                                                                                                                    (s as any).BraStrength = 100000;
                                                                                                                                                    (s as any).BraThinness = 3;
                                                                                                                                                    (s as any).BraCover = 1;
                                                                                                                                                    (s as any).PanThinness = 3;
                                                                                                                                                    (s as any).PanCoverFront = 1;
                                                                                                                                                    (s as any).PanCoverBack = 4;
                                                                                                                                                    (s as any).BraPrice = 1500;
                                                                                                                                                  } else {
                                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 74) {
                                                                                                                                                      (s as any).BraType = 2;
                                                                                                                                                      (s as any).BraMaterial = 6;
                                                                                                                                                      (s as any).BraFun = 1;
                                                                                                                                                      (s as any).BraQuality = 3;
                                                                                                                                                      (s as any).BraStrength = 80000;
                                                                                                                                                      (s as any).BraThinness = 4;
                                                                                                                                                      (s as any).PanThinness = 4;
                                                                                                                                                      (s as any).PanCoverBack = 4;
                                                                                                                                                      (s as any).BraPrice = 1450;
                                                                                                                                                    } else {
                                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 75) {
                                                                                                                                                        (s as any).BraType = 7;
                                                                                                                                                        (s as any).BraMaterial = 6;
                                                                                                                                                        (s as any).BraFun = 1;
                                                                                                                                                        (s as any).BraQuality = 4;
                                                                                                                                                        (s as any).BraStrength = 100000;
                                                                                                                                                        (s as any).BraThinness = 3;
                                                                                                                                                        (s as any).BraCover = 1;
                                                                                                                                                        (s as any).PanThinness = 3;
                                                                                                                                                        (s as any).BraPrice = 1500;
                                                                                                                                                      } else {
                                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 76) {
                                                                                                                                                          (s as any).BraType = 7;
                                                                                                                                                          (s as any).BraMaterial = 6;
                                                                                                                                                          (s as any).BraFun = 1;
                                                                                                                                                          (s as any).BraQuality = 5;
                                                                                                                                                          (s as any).BraStrength = 120000;
                                                                                                                                                          (s as any).BraThinness = 4;
                                                                                                                                                          (s as any).BraCover = 1;
                                                                                                                                                          (s as any).PanThinness = 4;
                                                                                                                                                          (s as any).PanCoverFront = 3;
                                                                                                                                                          (s as any).PanCoverBack = 4;
                                                                                                                                                          (s as any).BraPrice = 1550;
                                                                                                                                                        } else {
                                                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 77) {
                                                                                                                                                            (s as any).BraType = 7;
                                                                                                                                                            (s as any).BraFun = 1;
                                                                                                                                                            (s as any).BraQuality = 4;
                                                                                                                                                            (s as any).BraStrength = 100000;
                                                                                                                                                            (s as any).BraThinness = 4;
                                                                                                                                                            (s as any).BraCover = 1;
                                                                                                                                                            (s as any).PanThinness = 4;
                                                                                                                                                            (s as any).PanCoverBack = 4;
                                                                                                                                                            (s as any).BraPrice = 1500;
                                                                                                                                                          } else {
                                                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 78) {
                                                                                                                                                              (s as any).BraType = 7;
                                                                                                                                                              (s as any).BraMaterial = 6;
                                                                                                                                                              (s as any).BraFun = 1;
                                                                                                                                                              (s as any).BraQuality = 4;
                                                                                                                                                              (s as any).BraStrength = 100000;
                                                                                                                                                              (s as any).BraThinness = 3;
                                                                                                                                                              (s as any).BraCover = 1;
                                                                                                                                                              (s as any).PanThinness = 3;
                                                                                                                                                              (s as any).PanCoverFront = 1;
                                                                                                                                                              (s as any).PanCoverBack = 4;
                                                                                                                                                              (s as any).BraPrice = 1500;
                                                                                                                                                            } else {
                                                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 79) {
                                                                                                                                                                (s as any).BraType = 7;
                                                                                                                                                                (s as any).BraMaterial = 6;
                                                                                                                                                                (s as any).BraFun = 1;
                                                                                                                                                                (s as any).BraQuality = 3;
                                                                                                                                                                (s as any).BraStrength = 80000;
                                                                                                                                                                (s as any).BraThinness = 5;
                                                                                                                                                                (s as any).BraCover = 1;
                                                                                                                                                                (s as any).PanThinness = 5;
                                                                                                                                                                (s as any).PanCoverFront = 4;
                                                                                                                                                                (s as any).PanCoverBack = 4;
                                                                                                                                                                (s as any).BraPrice = 1450;
                                                                                                                                                              } else {
                                                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 80) {
                                                                                                                                                                  (s as any).BraType = 7;
                                                                                                                                                                  (s as any).BraFun = 1;
                                                                                                                                                                  (s as any).BraQuality = 4;
                                                                                                                                                                  (s as any).BraStrength = 100000;
                                                                                                                                                                  (s as any).BraThinness = 4;
                                                                                                                                                                  (s as any).PanThinness = 4;
                                                                                                                                                                  (s as any).PanCoverFront = 1;
                                                                                                                                                                  (s as any).PanCoverBack = 1;
                                                                                                                                                                  (s as any).BraPrice = 1500;
                                                                                                                                                                } else {
                                                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 81) {
                                                                                                                                                                    (s as any).BraType = 7;
                                                                                                                                                                    (s as any).BraFun = 1;
                                                                                                                                                                    (s as any).BraQuality = 4;
                                                                                                                                                                    (s as any).BraStrength = 100000;
                                                                                                                                                                    (s as any).BraThinness = 3;
                                                                                                                                                                    (s as any).PanThinness = 5;
                                                                                                                                                                    (s as any).PanCoverFront = 3;
                                                                                                                                                                    (s as any).PanCoverBack = 4;
                                                                                                                                                                    (s as any).BraPrice = 1500;
                                                                                                                                                                  } else {
                                                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 82) {
                                                                                                                                                                      (s as any).BraType = 7;
                                                                                                                                                                      (s as any).BraMaterial = 3;
                                                                                                                                                                      (s as any).BraFun = 1;
                                                                                                                                                                      (s as any).BraQuality = 5;
                                                                                                                                                                      (s as any).BraStrength = 120000;
                                                                                                                                                                      (s as any).BraThinness = 5;
                                                                                                                                                                      (s as any).BraCover = 1;
                                                                                                                                                                      (s as any).PanThinness = 5;
                                                                                                                                                                      (s as any).PanCoverBack = 4;
                                                                                                                                                                      (s as any).BraPrice = 1550;
                                                                                                                                                                    } else {
                                                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 83) {
                                                                                                                                                                        (s as any).BraType = 7;
                                                                                                                                                                        (s as any).BraMaterial = 3;
                                                                                                                                                                        (s as any).BraFun = 1;
                                                                                                                                                                        (s as any).BraQuality = 4;
                                                                                                                                                                        (s as any).BraStrength = 100000;
                                                                                                                                                                        (s as any).BraThinness = 5;
                                                                                                                                                                        (s as any).BraCover = 1;
                                                                                                                                                                        (s as any).PanThinness = 3;
                                                                                                                                                                        (s as any).PanCoverBack = 4;
                                                                                                                                                                        (s as any).BraPrice = 1500;
                                                                                                                                                                      } else {
                                                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 84) {
                                                                                                                                                                          (s as any).BraType = 7;
                                                                                                                                                                          (s as any).BraMaterial = 6;
                                                                                                                                                                          (s as any).BraFun = 1;
                                                                                                                                                                          (s as any).BraQuality = 3;
                                                                                                                                                                          (s as any).BraStrength = 80000;
                                                                                                                                                                          (s as any).BraThinness = 5;
                                                                                                                                                                          (s as any).BraCover = 1;
                                                                                                                                                                          (s as any).PanThinness = 5;
                                                                                                                                                                          (s as any).PanCoverFront = 4;
                                                                                                                                                                          (s as any).PanCoverBack = 3;
                                                                                                                                                                          (s as any).BraPrice = 1450;
                                                                                                                                                                        } else {
                                                                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 85) {
                                                                                                                                                                            (s as any).BraType = 7;
                                                                                                                                                                            (s as any).BraMaterial = 6;
                                                                                                                                                                            (s as any).BraFun = 1;
                                                                                                                                                                            (s as any).BraQuality = 5;
                                                                                                                                                                            (s as any).BraStrength = 120000;
                                                                                                                                                                            (s as any).BraThinness = 3;
                                                                                                                                                                            (s as any).PanThinness = 5;
                                                                                                                                                                            (s as any).PanCoverBack = 4;
                                                                                                                                                                            (s as any).BraPrice = 1550;
                                                                                                                                                                          } else {
                                                                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 86) {
                                                                                                                                                                              (s as any).BraType = 7;
                                                                                                                                                                              (s as any).BraMaterial = 6;
                                                                                                                                                                              (s as any).BraFun = 1;
                                                                                                                                                                              (s as any).BraQuality = 4;
                                                                                                                                                                              (s as any).BraStrength = 100000;
                                                                                                                                                                              (s as any).BraThinness = 3;
                                                                                                                                                                              (s as any).BraCover = 1;
                                                                                                                                                                              (s as any).PanThinness = 3;
                                                                                                                                                                              (s as any).PanCoverFront = 1;
                                                                                                                                                                              (s as any).PanCoverBack = 4;
                                                                                                                                                                              (s as any).BraPrice = 1500;
                                                                                                                                                                            } else {
                                                                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 87) {
                                                                                                                                                                                (s as any).BraType = 7;
                                                                                                                                                                                (s as any).BraMaterial = 6;
                                                                                                                                                                                (s as any).BraFun = 1;
                                                                                                                                                                                (s as any).BraQuality = 4;
                                                                                                                                                                                (s as any).BraStrength = 100000;
                                                                                                                                                                                (s as any).BraThinness = 4;
                                                                                                                                                                                (s as any).BraCover = 1;
                                                                                                                                                                                (s as any).PanThinness = 4;
                                                                                                                                                                                (s as any).PanCoverBack = 3;
                                                                                                                                                                                (s as any).BraPrice = 1500;
                                                                                                                                                                              } else {
                                                                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 88) {
                                                                                                                                                                                  (s as any).BraType = 7;
                                                                                                                                                                                  (s as any).BraFun = 1;
                                                                                                                                                                                  (s as any).BraQuality = 4;
                                                                                                                                                                                  (s as any).BraStrength = 100000;
                                                                                                                                                                                  (s as any).BraThinness = 3;
                                                                                                                                                                                  (s as any).PanThinness = 3;
                                                                                                                                                                                  (s as any).PanCoverBack = 4;
                                                                                                                                                                                  (s as any).BraPrice = 1500;
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 89) {
                                                                                                                                                                                    (s as any).BraType = 7;
                                                                                                                                                                                    (s as any).BraMaterial = 6;
                                                                                                                                                                                    (s as any).BraFun = 1;
                                                                                                                                                                                    (s as any).BraQuality = 3;
                                                                                                                                                                                    (s as any).BraStrength = 80000;
                                                                                                                                                                                    (s as any).BraThinness = 4;
                                                                                                                                                                                    (s as any).BraCover = 1;
                                                                                                                                                                                    (s as any).PanThinness = 4;
                                                                                                                                                                                    (s as any).PanCoverFront = 4;
                                                                                                                                                                                    (s as any).PanCoverBack = 4;
                                                                                                                                                                                    (s as any).BraPrice = 1450;
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 90) {
                                                                                                                                                                                      (s as any).BraType = 7;
                                                                                                                                                                                      (s as any).BraMaterial = 6;
                                                                                                                                                                                      (s as any).BraFun = 1;
                                                                                                                                                                                      (s as any).BraQuality = 3;
                                                                                                                                                                                      (s as any).BraStrength = 80000;
                                                                                                                                                                                      (s as any).BraThinness = 4;
                                                                                                                                                                                      (s as any).BraCover = 1;
                                                                                                                                                                                      (s as any).PanThinness = 4;
                                                                                                                                                                                      (s as any).PanCoverFront = 1;
                                                                                                                                                                                      (s as any).PanCoverBack = 4;
                                                                                                                                                                                      (s as any).BraPrice = 1450;
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 91) {
                                                                                                                                                                                        (s as any).BraType = 7;
                                                                                                                                                                                        (s as any).BraMaterial = 6;
                                                                                                                                                                                        (s as any).BraFun = 1;
                                                                                                                                                                                        (s as any).BraQuality = 3;
                                                                                                                                                                                        (s as any).BraStrength = 80000;
                                                                                                                                                                                        (s as any).BraThinness = 5;
                                                                                                                                                                                        (s as any).BraCover = 1;
                                                                                                                                                                                        (s as any).PanThinness = 5;
                                                                                                                                                                                        (s as any).BraPrice = 1450;
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 92) {
                                                                                                                                                                                          (s as any).BraType = 7;
                                                                                                                                                                                          (s as any).BraMaterial = 6;
                                                                                                                                                                                          (s as any).BraFun = 1;
                                                                                                                                                                                          (s as any).BraQuality = 5;
                                                                                                                                                                                          (s as any).BraStrength = 120000;
                                                                                                                                                                                          (s as any).BraThinness = 4;
                                                                                                                                                                                          (s as any).BraCover = 4;
                                                                                                                                                                                          (s as any).PanThinness = 4;
                                                                                                                                                                                          (s as any).PanCoverFront = 4;
                                                                                                                                                                                          (s as any).PanCoverBack = 4;
                                                                                                                                                                                          (s as any).BraPrice = 1550;
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 93) {
                                                                                                                                                                                            (s as any).BraType = 7;
                                                                                                                                                                                            (s as any).BraFun = 1;
                                                                                                                                                                                            (s as any).BraQuality = 4;
                                                                                                                                                                                            (s as any).BraStrength = 100000;
                                                                                                                                                                                            (s as any).BraThinness = 3;
                                                                                                                                                                                            (s as any).BraCover = 4;
                                                                                                                                                                                            (s as any).PanThinness = 3;
                                                                                                                                                                                            (s as any).PanCoverBack = 4;
                                                                                                                                                                                            (s as any).BraPrice = 1500;
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 94) {
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
                                                                                                                                                                                              (s as any).BraPrice = 1450;
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 95) {
                                                                                                                                                                                                (s as any).BraType = 7;
                                                                                                                                                                                                (s as any).BraFun = 1;
                                                                                                                                                                                                (s as any).BraQuality = 4;
                                                                                                                                                                                                (s as any).BraStrength = 100000;
                                                                                                                                                                                                (s as any).BraThinness = 4;
                                                                                                                                                                                                (s as any).PanThinness = 4;
                                                                                                                                                                                                (s as any).PanCoverBack = 4;
                                                                                                                                                                                                (s as any).BraPrice = 1500;
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 96) {
                                                                                                                                                                                                  (s as any).BraType = 7;
                                                                                                                                                                                                  (s as any).BraMaterial = 6;
                                                                                                                                                                                                  (s as any).BraFun = 1;
                                                                                                                                                                                                  (s as any).BraQuality = 5;
                                                                                                                                                                                                  (s as any).BraStrength = 120000;
                                                                                                                                                                                                  (s as any).BraThinness = 3;
                                                                                                                                                                                                  (s as any).PanThinness = 3;
                                                                                                                                                                                                  (s as any).PanCoverBack = 4;
                                                                                                                                                                                                  (s as any).BraPrice = 1550;
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 97) {
                                                                                                                                                                                                    (s as any).BraType = 7;
                                                                                                                                                                                                    (s as any).BraFun = 1;
                                                                                                                                                                                                    (s as any).BraQuality = 5;
                                                                                                                                                                                                    (s as any).BraStrength = 120000;
                                                                                                                                                                                                    (s as any).BraThinness = 3;
                                                                                                                                                                                                    (s as any).BraCover = 4;
                                                                                                                                                                                                    (s as any).PanThinness = 3;
                                                                                                                                                                                                    (s as any).PanCoverFront = 4;
                                                                                                                                                                                                    (s as any).PanCoverBack = 4;
                                                                                                                                                                                                    (s as any).BraPrice = 1550;
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 98) {
                                                                                                                                                                                                      (s as any).BraType = 7;
                                                                                                                                                                                                      (s as any).BraMaterial = 6;
                                                                                                                                                                                                      (s as any).BraFun = 1;
                                                                                                                                                                                                      (s as any).BraQuality = 5;
                                                                                                                                                                                                      (s as any).BraStrength = 120000;
                                                                                                                                                                                                      (s as any).BraThinness = 5;
                                                                                                                                                                                                      (s as any).BraCover = 3;
                                                                                                                                                                                                      (s as any).PanThinness = 5;
                                                                                                                                                                                                      (s as any).PanCoverFront = 4;
                                                                                                                                                                                                      (s as any).PanCoverBack = 4;
                                                                                                                                                                                                      (s as any).BraPrice = 1550;
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 99) {
                                                                                                                                                                                                        (s as any).BraType = 7;
                                                                                                                                                                                                        (s as any).BraMaterial = 3;
                                                                                                                                                                                                        (s as any).BraFun = 1;
                                                                                                                                                                                                        (s as any).BraQuality = 4;
                                                                                                                                                                                                        (s as any).BraStrength = 100000;
                                                                                                                                                                                                        (s as any).BraThinness = 4;
                                                                                                                                                                                                        (s as any).PanThinness = 4;
                                                                                                                                                                                                        (s as any).PanCoverBack = 3;
                                                                                                                                                                                                        (s as any).BraPrice = 1500;
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 100) {
                                                                                                                                                                                                          (s as any).BraType = 7;
                                                                                                                                                                                                          (s as any).BraMaterial = 6;
                                                                                                                                                                                                          (s as any).BraFun = 1;
                                                                                                                                                                                                          (s as any).BraQuality = 4;
                                                                                                                                                                                                          (s as any).BraStrength = 100000;
                                                                                                                                                                                                          (s as any).BraThinness = 4;
                                                                                                                                                                                                          (s as any).BraCover = 1;
                                                                                                                                                                                                          (s as any).PanThinness = 4;
                                                                                                                                                                                                          (s as any).PanCoverFront = 4;
                                                                                                                                                                                                          (s as any).PanCoverBack = 1;
                                                                                                                                                                                                          (s as any).BraPrice = 1500;
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

export const _attributes_scandalicious_bodysuits: LocationDef = {
  name: '_attributes_scandalicious_bodysuits',
  region: 'other',
  enter: enter,
};
