// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 4500 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 3: 5200
  // TODO-QSP: 4: 5400
  // TODO-QSP: 5: 5600
  // TODO-QSP: 6: 5800
  // TODO-QSP: 7: 6000
  // TODO-QSP: CloQuality ranges from 3 to 7, please avoid adding too many 6s and 7s
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 6;
    (s as any).CloStrength = 202500;
    (s as any).CloThinness = 3;
    (s as any).CloTopCut = 2;
    (s as any).CloPantsShortness = 1;
    (s as any).CloPrice = 5800;
  } else {
    (s as any).CloQuality = 4;
    (s as any).CloStrength = 191250;
    (s as any).CloThinness = 4;
    (s as any).CloTopCut = 3;
    (s as any).CloPantsShortness = 5;
    (s as any).CloPrice = 5400;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 6;
      (s as any).CloStrength = 202500;
      (s as any).CloThinness = 2;
      (s as any).CloTopCut = 1;
      (s as any).CloPantsShortness = 1;
      (s as any).CloPrice = 5800;
    } else {
      (s as any).CloQuality = 6;
      (s as any).CloStrength = 202500;
      (s as any).CloThinness = 3;
      (s as any).CloTopCut = 1;
      (s as any).CloPantsShortness = 5;
      (s as any).CloPrice = 5800;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 4;
        (s as any).CloStrength = 191250;
        (s as any).CloThinness = 4;
        (s as any).CloTopCut = 2;
        (s as any).CloPantsShortness = 5;
        (s as any).CloPrice = 5400;
      } else {
        (s as any).CloQuality = 5;
        (s as any).CloStrength = 196875;
        (s as any).CloThinness = 4;
        (s as any).CloTopCut = 2;
        (s as any).CloSkirtShortness = 3;
        (s as any).CloPrice = 5600;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 5;
          (s as any).CloStrength = 196875;
          (s as any).CloThinness = 4;
          (s as any).CloTopCut = 3;
          (s as any).CloPantsShortness = 1;
          (s as any).CloPrice = 5600;
        } else {
          (s as any).CloQuality = 6;
          (s as any).CloStrength = 202500;
          (s as any).CloThinness = 3;
          (s as any).CloTopCut = 1;
          (s as any).CloPantsShortness = 1;
          (s as any).CloPrice = 5800;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 6;
            (s as any).CloStrength = 202500;
            (s as any).CloThinness = 4;
            (s as any).CloTopCut = 4;
            (s as any).CloPantsShortness = 5;
            (s as any).CloPrice = 5800;
          } else {
            (s as any).CloQuality = 6;
            (s as any).CloStrength = 202500;
            (s as any).CloThinness = 4;
            (s as any).CloTopCut = 4;
            (s as any).CloPantsShortness = 5;
            (s as any).CloBimbo = 1;
            (s as any).CloPrice = 5800;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 5;
              (s as any).CloStrength = 196875;
              (s as any).CloThinness = 2;
              (s as any).CloTopCut = 1;
              (s as any).CloPantsShortness = 1;
              (s as any).CloPrice = 5600;
            } else {
              (s as any).CloQuality = 7;
              (s as any).CloStrength = 208125;
              (s as any).CloThinness = 3;
              (s as any).CloTopCut = 1;
              (s as any).CloPantsShortness = 1;
              (s as any).CloPrice = 6000;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 5;
                (s as any).CloStrength = 196875;
                (s as any).CloThinness = 4;
                (s as any).CloTopCut = 3;
                (s as any).CloPantsShortness = 1;
                (s as any).CloPrice = 5600;
              } else {
                (s as any).CloQuality = 4;
                (s as any).CloStrength = 191250;
                (s as any).CloThinness = 4;
                (s as any).CloTopCut = 3;
                (s as any).CloPantsShortness = 5;
                (s as any).CloOnePiece = 1;
                (s as any).CloPrice = 5400;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 6;
                  (s as any).CloStrength = 202500;
                  (s as any).CloThinness = 4;
                  (s as any).CloTopCut = 1;
                  (s as any).CloPantsShortness = 1;
                  (s as any).CloOnePiece = 1;
                  (s as any).CloPrice = 5800;
                } else {
                  (s as any).CloQuality = 4;
                  (s as any).CloStrength = 191250;
                  (s as any).CloThinness = 4;
                  (s as any).CloBra = 1;
                  (s as any).CloPantsShortness = 6;
                  (s as any).CloPrice = 5400;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 4;
                    (s as any).CloStrength = 191250;
                    (s as any).CloThinness = 4;
                    (s as any).CloTopCut = 1;
                    (s as any).CloPantsShortness = 1;
                    (s as any).CloPrice = 5400;
                  } else {
                    (s as any).CloQuality = 4;
                    (s as any).CloStrength = 191250;
                    (s as any).CloThinness = 3;
                    (s as any).CloTopCut = 1;
                    (s as any).CloSkirtShortness = 4;
                    (s as any).CloPrice = 5400;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 5;
                      (s as any).CloStrength = 196875;
                      (s as any).CloThinness = 4;
                      (s as any).CloTopCut = 4;
                      (s as any).CloPantsShortness = 6;
                      (s as any).CloOnePiece = 1;
                      (s as any).CloPrice = 5600;
                    } else {
                      (s as any).CloQuality = 6;
                      (s as any).CloStrength = 202500;
                      (s as any).CloThinness = 4;
                      (s as any).CloTopCut = 3;
                      (s as any).CloPantsShortness = 1;
                      (s as any).CloPrice = 5800;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).CloQuality = 7;
                        (s as any).CloStrength = 208125;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 1;
                        (s as any).CloPantsShortness = 1;
                        (s as any).CloPrice = 6000;
                      } else {
                        (s as any).CloQuality = 4;
                        (s as any).CloStrength = 191250;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 1;
                        (s as any).CloPantsShortness = 1;
                        (s as any).CloPrice = 5400;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).CloQuality = 4;
                          (s as any).CloStrength = 191250;
                          (s as any).CloThinness = 4;
                          (s as any).CloTopCut = 1;
                          (s as any).CloPantsShortness = 1;
                          (s as any).CloPrice = 5400;
                        } else {
                          (s as any).CloQuality = 5;
                          (s as any).CloStrength = 196875;
                          (s as any).CloThinness = 4;
                          (s as any).CloTopCut = 1;
                          (s as any).CloPantsShortness = 1;
                          (s as any).CloPrice = 5600;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).CloQuality = 6;
                            (s as any).CloStrength = 202500;
                            (s as any).CloThinness = 4;
                            (s as any).CloTopCut = 1;
                            (s as any).CloPantsShortness = 1;
                            (s as any).CloPrice = 5800;
                          } else {
                            (s as any).CloQuality = 6;
                            (s as any).CloStrength = 202500;
                            (s as any).CloThinness = 4;
                            (s as any).CloTopCut = 3;
                            (s as any).CloPantsShortness = 1;
                            (s as any).CloOnePiece = 1;
                            (s as any).CloPrice = 5800;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).CloQuality = 4;
                              (s as any).CloStrength = 191250;
                              (s as any).CloThinness = 4;
                              (s as any).CloTopCut = 1;
                              (s as any).CloPantsShortness = 5;
                              (s as any).CloPrice = 5400;
                            } else {
                              (s as any).CloQuality = 6;
                              (s as any).CloStrength = 202500;
                              (s as any).CloThinness = 4;
                              (s as any).CloTopCut = 3;
                              (s as any).CloPantsShortness = 1;
                              (s as any).CloPrice = 5800;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).CloQuality = 4;
                                (s as any).CloStrength = 191250;
                                (s as any).CloThinness = 4;
                                (s as any).CloTopCut = 3;
                                (s as any).CloPantsShortness = 5;
                                (s as any).CloPrice = 5400;
                              } else {
                                (s as any).CloQuality = 6;
                                (s as any).CloStrength = 202500;
                                (s as any).CloThinness = 4;
                                (s as any).CloTopCut = 3;
                                (s as any).CloPantsShortness = 5;
                                (s as any).CloPrice = 5800;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).CloQuality = 6;
                                  (s as any).CloStrength = 202500;
                                  (s as any).CloThinness = 3;
                                  (s as any).CloTopCut = 2;
                                  (s as any).CloSkirtShortness = 4;
                                  (s as any).CloPrice = 5800;
                                } else {
                                  (s as any).CloQuality = 7;
                                  (s as any).CloStrength = 208125;
                                  (s as any).CloThinness = 2;
                                  (s as any).CloTopCut = 1;
                                  (s as any).CloPantsShortness = 1;
                                  (s as any).CloPrice = 6000;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).CloQuality = 4;
                                    (s as any).CloStrength = 191250;
                                    (s as any).CloThinness = 4;
                                    (s as any).CloTopCut = 4;
                                    (s as any).CloSkirtShortness = 5;
                                    (s as any).CloPrice = 5400;
                                  } else {
                                    (s as any).CloQuality = 5;
                                    (s as any).CloStrength = 196875;
                                    (s as any).CloThinness = 4;
                                    (s as any).CloTopCut = 2;
                                    (s as any).CloSkirtShortness = 4;
                                    (s as any).CloPrice = 5600;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).CloQuality = 5;
                                      (s as any).CloStrength = 196875;
                                      (s as any).CloThinness = 4;
                                      (s as any).CloTopCut = 4;
                                      (s as any).CloPantsShortness = 1;
                                      (s as any).CloPrice = 5600;
                                    } else {
                                      (s as any).CloQuality = 4;
                                      (s as any).CloStrength = 191250;
                                      (s as any).CloThinness = 4;
                                      (s as any).CloTopCut = 3;
                                      (s as any).CloPantsShortness = 6;
                                      (s as any).CloOnePiece = 1;
                                      (s as any).CloPrice = 5400;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).CloQuality = 6;
                                        (s as any).CloStrength = 202500;
                                        (s as any).CloThinness = 4;
                                        (s as any).CloTopCut = 3;
                                        (s as any).CloPantsShortness = 6;
                                        (s as any).CloOnePiece = 1;
                                        (s as any).CloPrice = 5800;
                                      } else {
                                        (s as any).CloQuality = 5;
                                        (s as any).CloStrength = 196875;
                                        (s as any).CloThinness = 4;
                                        (s as any).CloTopCut = 1;
                                        (s as any).CloPantsShortness = 1;
                                        (s as any).CloOnePiece = 1;
                                        (s as any).CloPrice = 5600;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).CloQuality = 5;
                                          (s as any).CloStrength = 196875;
                                          (s as any).CloThinness = 4;
                                          (s as any).CloTopCut = 1;
                                          (s as any).CloPantsShortness = 1;
                                          (s as any).CloOnePiece = 1;
                                          (s as any).CloPrice = 5600;
                                        } else {
                                          (s as any).CloQuality = 6;
                                          (s as any).CloStrength = 202500;
                                          (s as any).CloThinness = 4;
                                          (s as any).CloTopCut = 1;
                                          (s as any).CloPantsShortness = 1;
                                          (s as any).CloOnePiece = 1;
                                          (s as any).CloPrice = 5800;
                                          if (((s as any).ARGS ?? 0)[0] === 41) {
                                            (s as any).CloQuality = 5;
                                            (s as any).CloStrength = 196875;
                                            (s as any).CloThinness = 4;
                                            (s as any).CloBra = 1;
                                            (s as any).CloPantsShortness = 1;
                                            (s as any).CloPrice = 5600;
                                          } else {
                                            (s as any).CloQuality = 5;
                                            (s as any).CloStrength = 196875;
                                            (s as any).CloThinness = 3;
                                            (s as any).CloTopCut = 1;
                                            (s as any).CloPantsShortness = 1;
                                            (s as any).CloOnePiece = 1;
                                            (s as any).CloPrice = 5600;
                                            if (((s as any).ARGS ?? 0)[0] === 43) {
                                              (s as any).CloQuality = 4;
                                              (s as any).CloStrength = 191250;
                                              (s as any).CloThinness = 4;
                                              (s as any).CloTopCut = 1;
                                              (s as any).CloPantsShortness = 1;
                                              (s as any).CloOnePiece = 1;
                                              (s as any).CloPrice = 5400;
                                            } else {
                                              (s as any).CloQuality = 5;
                                              (s as any).CloStrength = 196875;
                                              (s as any).CloThinness = 4;
                                              (s as any).CloTopCut = 1;
                                              (s as any).CloPantsShortness = 1;
                                              (s as any).CloOnePiece = 1;
                                              (s as any).CloPrice = 5600;
                                              if (((s as any).ARGS ?? 0)[0] === 45) {
                                                (s as any).CloQuality = 6;
                                                (s as any).CloStrength = 202500;
                                                (s as any).CloThinness = 3;
                                                (s as any).CloTopCut = 1;
                                                (s as any).CloPantsShortness = 1;
                                                (s as any).CloPrice = 5800;
                                              } else {
                                                (s as any).CloQuality = 4;
                                                (s as any).CloStrength = 191250;
                                                (s as any).CloThinness = 5;
                                                (s as any).CloBra = 1;
                                                (s as any).CloPanties = 1;
                                                (s as any).CloPrice = 5400;
                                                if (((s as any).ARGS ?? 0)[0] === 47) {
                                                  (s as any).CloQuality = 7;
                                                  (s as any).CloStrength = 208125;
                                                  (s as any).CloThinness = 5;
                                                  (s as any).CloBra = 1;
                                                  (s as any).CloPanties = 1;
                                                  (s as any).CloPrice = 6000;
                                                } else {
                                                  (s as any).CloQuality = 6;
                                                  (s as any).CloStrength = 202500;
                                                  (s as any).CloThinness = 3;
                                                  (s as any).CloTopCut = 2;
                                                  (s as any).CloPantsShortness = 1;
                                                  (s as any).CloPrice = 5800;
                                                  if (((s as any).ARGS ?? 0)[0] === 49) {
                                                    (s as any).CloQuality = 4;
                                                    (s as any).CloStrength = 191250;
                                                    (s as any).CloThinness = 3;
                                                    (s as any).CloTopCut = 1;
                                                    (s as any).CloPantsShortness = 1;
                                                    (s as any).CloPrice = 5400;
                                                  } else {
                                                    (s as any).CloQuality = 5;
                                                    (s as any).CloStrength = 196875;
                                                    (s as any).CloThinness = 4;
                                                    (s as any).CloTopCut = 1;
                                                    (s as any).CloPantsShortness = 1;
                                                    (s as any).CloPrice = 5600;
                                                    if (((s as any).ARGS ?? 0)[0] === 51) {
                                                      (s as any).CloQuality = 6;
                                                      (s as any).CloStrength = 202500;
                                                      (s as any).CloThinness = 3;
                                                      (s as any).CloTopCut = 1;
                                                      (s as any).CloPantsShortness = 1;
                                                      (s as any).CloPrice = 5800;
                                                    } else {
                                                      (s as any).CloQuality = 7;
                                                      (s as any).CloStrength = 208125;
                                                      (s as any).CloThinness = 2;
                                                      (s as any).CloTopCut = 1;
                                                      (s as any).CloPantsShortness = 1;
                                                      (s as any).CloPrice = 6000;
                                                      if (((s as any).ARGS ?? 0)[0] === 53) {
                                                        (s as any).CloQuality = 5;
                                                        (s as any).CloStrength = 196875;
                                                        (s as any).CloThinness = 2;
                                                        (s as any).CloTopCut = 2;
                                                        (s as any).CloSkirtShortness = 4;
                                                        (s as any).CloPrice = 5600;
                                                      } else {
                                                        (s as any).CloQuality = 4;
                                                        (s as any).CloStrength = 191250;
                                                        (s as any).CloThinness = 4;
                                                        (s as any).CloTopCut = 3;
                                                        (s as any).CloPantsShortness = 1;
                                                        (s as any).CloPrice = 5400;
                                                        if (((s as any).ARGS ?? 0)[0] === 55) {
                                                          (s as any).CloQuality = 6;
                                                          (s as any).CloStrength = 202500;
                                                          (s as any).CloThinness = 4;
                                                          (s as any).CloTopCut = 3;
                                                          (s as any).CloPantsShortness = 1;
                                                          (s as any).CloOnePiece = 1;
                                                          (s as any).CloPrice = 5800;
                                                        } else {
                                                          (s as any).CloQuality = 6;
                                                          (s as any).CloStrength = 202500;
                                                          (s as any).CloThinness = 3;
                                                          (s as any).CloTopCut = 3;
                                                          (s as any).CloPantsShortness = 1;
                                                          (s as any).CloPrice = 5800;
                                                          if (((s as any).ARGS ?? 0)[0] === 57) {
                                                            (s as any).CloQuality = 4;
                                                            (s as any).CloStrength = 191250;
                                                            (s as any).CloThinness = 4;
                                                            (s as any).CloTopCut = 1;
                                                            (s as any).CloPantsShortness = 1;
                                                            (s as any).CloOnePiece = 1;
                                                            (s as any).CloPrice = 5400;
                                                          } else {
                                                            (s as any).CloQuality = 5;
                                                            (s as any).CloStrength = 196875;
                                                            (s as any).CloThinness = 4;
                                                            (s as any).CloTopCut = 1;
                                                            (s as any).CloPantsShortness = 1;
                                                            (s as any).CloOnePiece = 1;
                                                            (s as any).CloPrice = 5600;
                                                            if (((s as any).ARGS ?? 0)[0] === 59) {
                                                              (s as any).CloQuality = 6;
                                                              (s as any).CloStrength = 202500;
                                                              (s as any).CloThinness = 4;
                                                              (s as any).CloTopCut = 1;
                                                              (s as any).CloPantsShortness = 1;
                                                              (s as any).CloOnePiece = 1;
                                                              (s as any).CloPrice = 5800;
                                                            } else {
                                                              (s as any).CloQuality = 5;
                                                              (s as any).CloStrength = 196875;
                                                              (s as any).CloThinness = 4;
                                                              (s as any).CloTopCut = 1;
                                                              (s as any).CloPantsShortness = 6;
                                                              (s as any).CloOnePiece = 1;
                                                              (s as any).CloPrice = 5600;
                                                              if (((s as any).ARGS ?? 0)[0] === 61) {
                                                                (s as any).CloQuality = 6;
                                                                (s as any).CloStrength = 202500;
                                                                (s as any).CloThinness = 4;
                                                                (s as any).CloTopCut = 1;
                                                                (s as any).CloPantsShortness = 1;
                                                                (s as any).CloPrice = 5800;
                                                              } else {
                                                                (s as any).CloQuality = 5;
                                                                (s as any).CloStrength = 196875;
                                                                (s as any).CloThinness = 4;
                                                                (s as any).CloTopCut = 1;
                                                                (s as any).CloPantsShortness = 1;
                                                                (s as any).CloPrice = 5600;
                                                                if (((s as any).ARGS ?? 0)[0] === 63) {
                                                                  (s as any).CloQuality = 4;
                                                                  (s as any).CloStrength = 191250;
                                                                  (s as any).CloThinness = 4;
                                                                  (s as any).CloTopCut = 1;
                                                                  (s as any).CloPantsShortness = 1;
                                                                  (s as any).CloOnePiece = 1;
                                                                  (s as any).CloPrice = 5400;
                                                                } else {
                                                                  (s as any).CloQuality = 4;
                                                                  (s as any).CloStrength = 191250;
                                                                  (s as any).CloThinness = 4;
                                                                  (s as any).CloTopCut = 1;
                                                                  (s as any).CloPantsShortness = 6;
                                                                  (s as any).CloOnePiece = 1;
                                                                  (s as any).CloPrice = 5400;
                                                                  if (((s as any).ARGS ?? 0)[0] === 65) {
                                                                    (s as any).CloQuality = 6;
                                                                    (s as any).CloStrength = 202500;
                                                                    (s as any).CloThinness = 3;
                                                                    (s as any).CloTopCut = 2;
                                                                    (s as any).CloPantsShortness = 1;
                                                                    (s as any).CloOnePiece = 1;
                                                                    (s as any).CloPrice = 5800;
                                                                  } else {
                                                                    (s as any).CloQuality = 4;
                                                                    (s as any).CloStrength = 191250;
                                                                    (s as any).CloThinness = 4;
                                                                    (s as any).CloTopCut = 3;
                                                                    (s as any).CloPantsShortness = 5;
                                                                    (s as any).CloPrice = 5400;
                                                                    if (((s as any).ARGS ?? 0)[0] === 67) {
                                                                      (s as any).CloQuality = 4;
                                                                      (s as any).CloStrength = 191250;
                                                                      (s as any).CloThinness = 4;
                                                                      (s as any).CloTopCut = 3;
                                                                      (s as any).CloSkirtShortness = 1;
                                                                      (s as any).CloPrice = 5400;
                                                                    } else {
                                                                      (s as any).CloQuality = 5;
                                                                      (s as any).CloStrength = 196875;
                                                                      (s as any).CloThinness = 4;
                                                                      (s as any).CloTopCut = 4;
                                                                      (s as any).CloPantsShortness = 6;
                                                                      (s as any).CloOnePiece = 1;
                                                                      (s as any).CloCoverBack = 4;
                                                                      (s as any).CloPrice = 5600;
                                                                      if (((s as any).ARGS ?? 0)[0] === 69) {
                                                                        (s as any).CloQuality = 3;
                                                                        (s as any).CloStrength = 185625;
                                                                        (s as any).CloThinness = 4;
                                                                        (s as any).CloTopCut = 1;
                                                                        (s as any).CloPantsShortness = 1;
                                                                        (s as any).CloOnePiece = 1;
                                                                        (s as any).CloPrice = 5200;
                                                                      } else {
                                                                        (s as any).CloQuality = 5;
                                                                        (s as any).CloStrength = 196875;
                                                                        (s as any).CloThinness = 4;
                                                                        (s as any).CloTopCut = 3;
                                                                        (s as any).CloPantsShortness = 1;
                                                                        (s as any).CloPrice = 5600;
                                                                        if (((s as any).ARGS ?? 0)[0] === 71) {
                                                                          (s as any).CloQuality = 7;
                                                                          (s as any).CloStrength = 208125;
                                                                          (s as any).CloThinness = 4;
                                                                          (s as any).CloTopCut = 3;
                                                                          (s as any).CloPantsShortness = 1;
                                                                          (s as any).CloPrice = 6000;
                                                                        } else {
                                                                          (s as any).CloQuality = 7;
                                                                          (s as any).CloStrength = 208125;
                                                                          (s as any).CloThinness = 4;
                                                                          (s as any).CloTopCut = 1;
                                                                          (s as any).CloPantsShortness = 1;
                                                                          (s as any).CloOnePiece = 1;
                                                                          (s as any).CloPrice = 6000;
                                                                          if (((s as any).ARGS ?? 0)[0] === 73) {
                                                                            (s as any).CloQuality = 5;
                                                                            (s as any).CloStrength = 196875;
                                                                            (s as any).CloThinness = 4;
                                                                            (s as any).CloTopCut = 3;
                                                                            (s as any).CloPantsShortness = 1;
                                                                            (s as any).CloPrice = 5600;
                                                                          } else {
                                                                            (s as any).CloQuality = 6;
                                                                            (s as any).CloStrength = 202500;
                                                                            (s as any).CloThinness = 4;
                                                                            (s as any).CloTopCut = 3;
                                                                            (s as any).CloPantsShortness = 5;
                                                                            (s as any).CloPrice = 5800;
                                                                            if (((s as any).ARGS ?? 0)[0] === 75) {
                                                                              (s as any).CloQuality = 4;
                                                                              (s as any).CloStrength = 191250;
                                                                              (s as any).CloThinness = 4;
                                                                              (s as any).CloTopCut = 4;
                                                                              (s as any).CloPanties = 1;
                                                                              (s as any).CloPrice = 5400;
                                                                            } else {
                                                                              (s as any).CloQuality = 5;
                                                                              (s as any).CloStrength = 196875;
                                                                              (s as any).CloThinness = 4;
                                                                              (s as any).CloTopCut = 3;
                                                                              (s as any).CloSkirtShortness = 5;
                                                                              (s as any).CloPrice = 5600;
                                                                              if (((s as any).ARGS ?? 0)[0] === 77) {
                                                                                (s as any).CloQuality = 6;
                                                                                (s as any).CloStrength = 202500;
                                                                                (s as any).CloThinness = 4;
                                                                                (s as any).CloTopCut = 1;
                                                                                (s as any).CloPantsShortness = 1;
                                                                                (s as any).CloPrice = 5800;
                                                                              } else {
                                                                                (s as any).CloQuality = 5;
                                                                                (s as any).CloStrength = 196875;
                                                                                (s as any).CloThinness = 3;
                                                                                (s as any).CloTopCut = 1;
                                                                                (s as any).CloPantsShortness = 1;
                                                                                (s as any).CloPrice = 5600;
                                                                                if (((s as any).ARGS ?? 0)[0] === 79) {
                                                                                  (s as any).CloQuality = 5;
                                                                                  (s as any).CloStrength = 196875;
                                                                                  (s as any).CloThinness = 5;
                                                                                  (s as any).CloTopCut = 4;
                                                                                  (s as any).CloSkirtShortness = 6;
                                                                                  (s as any).CloCoverBack = 3;
                                                                                  (s as any).CloPrice = 5600;
                                                                                } else {
                                                                                  (s as any).CloQuality = 4;
                                                                                  (s as any).CloStrength = 191250;
                                                                                  (s as any).CloThinness = 5;
                                                                                  (s as any).CloTopCut = 3;
                                                                                  (s as any).CloPantsShortness = 1;
                                                                                  (s as any).CloPrice = 5400;
                                                                                  if (((s as any).ARGS ?? 0)[0] === 81) {
                                                                                    (s as any).CloQuality = 6;
                                                                                    (s as any).CloStrength = 202500;
                                                                                    (s as any).CloThinness = 5;
                                                                                    (s as any).CloBra = 1;
                                                                                    (s as any).CloPanties = 1;
                                                                                    (s as any).CloPrice = 5800;
                                                                                  } else {
                                                                                    (s as any).CloQuality = 5;
                                                                                    (s as any).CloStrength = 196875;
                                                                                    (s as any).CloThinness = 4;
                                                                                    (s as any).CloBra = 1;
                                                                                    (s as any).CloSkirtShortness = 5;
                                                                                    (s as any).CloPrice = 5600;
                                                                                    if (((s as any).ARGS ?? 0)[0] === 83) {
                                                                                      (s as any).CloQuality = 4;
                                                                                      (s as any).CloStrength = 191250;
                                                                                      (s as any).CloThinness = 4;
                                                                                      (s as any).CloBra = 1;
                                                                                      (s as any).CloPanties = 1;
                                                                                      (s as any).CloPrice = 5400;
                                                                                    } else {
                                                                                      (s as any).CloQuality = 5;
                                                                                      (s as any).CloStrength = 196875;
                                                                                      (s as any).CloThinness = 4;
                                                                                      (s as any).CloTopCut = 3;
                                                                                      (s as any).CloPanties = 1;
                                                                                      (s as any).CloCoverBack = 4;
                                                                                      (s as any).CloPrice = 5600;
                                                                                      if (((s as any).ARGS ?? 0)[0] === 85) {
                                                                                        (s as any).CloQuality = 4;
                                                                                        (s as any).CloStrength = 191250;
                                                                                        (s as any).CloThinness = 4;
                                                                                        (s as any).CloTopCut = 3;
                                                                                        (s as any).CloPantsShortness = 6;
                                                                                        (s as any).CloOnePiece = 1;
                                                                                        (s as any).CloPrice = 5400;
                                                                                      } else {
                                                                                        (s as any).CloQuality = 5;
                                                                                        (s as any).CloStrength = 196875;
                                                                                        (s as any).CloThinness = 4;
                                                                                        (s as any).CloTopCut = 2;
                                                                                        (s as any).CloSkirtShortness = 5;
                                                                                        (s as any).CloPrice = 5600;
                                                                                        if (((s as any).ARGS ?? 0)[0] === 87) {
                                                                                          (s as any).CloQuality = 6;
                                                                                          (s as any).CloStrength = 202500;
                                                                                          (s as any).CloThinness = 4;
                                                                                          (s as any).CloTopCut = 2;
                                                                                          (s as any).CloPantsShortness = 3;
                                                                                          (s as any).CloPrice = 5800;
                                                                                        } else {
                                                                                          (s as any).CloQuality = 5;
                                                                                          (s as any).CloStrength = 196875;
                                                                                          (s as any).CloThinness = 4;
                                                                                          (s as any).CloTopCut = 2;
                                                                                          (s as any).CloSkirtShortness = 5;
                                                                                          (s as any).CloPrice = 5600;
                                                                                          if (((s as any).ARGS ?? 0)[0] === 89) {
                                                                                            (s as any).CloQuality = 5;
                                                                                            (s as any).CloStrength = 196875;
                                                                                            (s as any).CloThinness = 4;
                                                                                            (s as any).CloTopCut = 3;
                                                                                            (s as any).CloSkirtShortness = 1;
                                                                                            (s as any).CloDress = 1;
                                                                                            (s as any).CloPrice = 5600;
                                                                                          } else {
                                                                                            (s as any).CloQuality = 6;
                                                                                            (s as any).CloStrength = 202500;
                                                                                            (s as any).CloThinness = 4;
                                                                                            (s as any).CloTopCut = 3;
                                                                                            (s as any).CloPantsShortness = 1;
                                                                                            (s as any).CloPrice = 5800;
                                                                                            if (((s as any).ARGS ?? 0)[0] === 91) {
                                                                                              (s as any).CloQuality = 5;
                                                                                              (s as any).CloStrength = 196875;
                                                                                              (s as any).CloThinness = 4;
                                                                                              (s as any).CloBra = 1;
                                                                                              (s as any).CloSkirtShortness = 5;
                                                                                              (s as any).CloPrice = 5600;
                                                                                            } else {
                                                                                              (s as any).CloQuality = 6;
                                                                                              (s as any).CloStrength = 202500;
                                                                                              (s as any).CloThinness = 4;
                                                                                              (s as any).CloTopCut = 2;
                                                                                              (s as any).CloSkirtShortness = 1;
                                                                                              (s as any).CloPrice = 5800;
                                                                                              if (((s as any).ARGS ?? 0)[0] === 93) {
                                                                                                (s as any).CloQuality = 4;
                                                                                                (s as any).CloStrength = 191250;
                                                                                                (s as any).CloThinness = 4;
                                                                                                (s as any).CloTopCut = 3;
                                                                                                (s as any).CloPantsShortness = 5;
                                                                                                (s as any).CloPrice = 5400;
                                                                                              } else {
                                                                                                (s as any).CloQuality = 5;
                                                                                                (s as any).CloStrength = 196875;
                                                                                                (s as any).CloThinness = 4;
                                                                                                (s as any).CloTopCut = 2;
                                                                                                (s as any).CloPantsShortness = 5;
                                                                                                (s as any).CloPrice = 5600;
                                                                                                if (((s as any).ARGS ?? 0)[0] === 95) {
                                                                                                  (s as any).CloQuality = 6;
                                                                                                  (s as any).CloStrength = 202500;
                                                                                                  (s as any).CloThinness = 4;
                                                                                                  (s as any).CloTopCut = 2;
                                                                                                  (s as any).CloSkirtShortness = 5;
                                                                                                  (s as any).CloPrice = 5800;
                                                                                                } else {
                                                                                                  (s as any).CloQuality = 6;
                                                                                                  (s as any).CloStrength = 202500;
                                                                                                  (s as any).CloThinness = 3;
                                                                                                  (s as any).CloTopCut = 1;
                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                  (s as any).CloPrice = 5800;
                                                                                                  if (((s as any).ARGS ?? 0)[0] === 97) {
                                                                                                    (s as any).CloQuality = 5;
                                                                                                    (s as any).CloStrength = 196875;
                                                                                                    (s as any).CloThinness = 4;
                                                                                                    (s as any).CloTopCut = 4;
                                                                                                    (s as any).CloPantsShortness = 5;
                                                                                                    (s as any).CloPrice = 5600;
                                                                                                  } else {
                                                                                                    (s as any).CloQuality = 5;
                                                                                                    (s as any).CloStrength = 196875;
                                                                                                    (s as any).CloThinness = 4;
                                                                                                    (s as any).CloTopCut = 1;
                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                    (s as any).CloOnePiece = 1;
                                                                                                    (s as any).CloPrice = 5600;
                                                                                                    if (((s as any).ARGS ?? 0)[0] === 99) {
                                                                                                      (s as any).CloQuality = 6;
                                                                                                      (s as any).CloStrength = 202500;
                                                                                                      (s as any).CloThinness = 4;
                                                                                                      (s as any).CloTopCut = 1;
                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                      (s as any).CloOnePiece = 1;
                                                                                                      (s as any).CloPrice = 5800;
                                                                                                    } else {
                                                                                                      (s as any).CloQuality = 5;
                                                                                                      (s as any).CloStrength = 196875;
                                                                                                      (s as any).CloThinness = 4;
                                                                                                      (s as any).CloTopCut = 1;
                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                      (s as any).CloPrice = 5600;
                                                                                                      if (((s as any).ARGS ?? 0)[0] === 101) {
                                                                                                        (s as any).CloQuality = 3;
                                                                                                        (s as any).CloStrength = 185625;
                                                                                                        (s as any).CloThinness = 1;
                                                                                                        (s as any).CloTopCut = 1;
                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                        (s as any).CloPrice = 5200;
                                                                                                      } else {
                                                                                                        (s as any).CloQuality = 7;
                                                                                                        (s as any).CloStrength = 208125;
                                                                                                        (s as any).CloThinness = 1;
                                                                                                        (s as any).CloTopCut = 1;
                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                        (s as any).CloPrice = 6000;
                                                                                                        if (((s as any).ARGS ?? 0)[0] === 103) {
                                                                                                          (s as any).CloQuality = 4;
                                                                                                          (s as any).CloStrength = 191250;
                                                                                                          (s as any).CloThinness = 4;
                                                                                                          (s as any).CloTopCut = 3;
                                                                                                          (s as any).CloSkirtShortness = 6;
                                                                                                          (s as any).CloCoverBack = 4;
                                                                                                          (s as any).CloPrice = 5400;
                                                                                                        } else {
                                                                                                          (s as any).CloQuality = 6;
                                                                                                          (s as any).CloStrength = 202500;
                                                                                                          (s as any).CloThinness = 4;
                                                                                                          (s as any).CloTopCut = 3;
                                                                                                          (s as any).CloSkirtShortness = 6;
                                                                                                          (s as any).CloCoverBack = 4;
                                                                                                          (s as any).CloPrice = 5800;
                                                                                                          if (((s as any).ARGS ?? 0)[0] === 105) {
                                                                                                            (s as any).CloQuality = 4;
                                                                                                            (s as any).CloStrength = 191250;
                                                                                                            (s as any).CloThinness = 4;
                                                                                                            (s as any).CloTopCut = 4;
                                                                                                            (s as any).CloSkirtShortness = 6;
                                                                                                            (s as any).CloCoverBack = 4;
                                                                                                            (s as any).CloPrice = 5400;
                                                                                                          } else {
                                                                                                            (s as any).CloQuality = 5;
                                                                                                            (s as any).CloStrength = 196875;
                                                                                                            (s as any).CloThinness = 4;
                                                                                                            (s as any).CloTopCut = 3;
                                                                                                            (s as any).CloPantsShortness = 1;
                                                                                                            (s as any).CloPrice = 5600;
                                                                                                            if (((s as any).ARGS ?? 0)[0] === 107) {
                                                                                                              (s as any).CloQuality = 5;
                                                                                                              (s as any).CloStrength = 196875;
                                                                                                              (s as any).CloThinness = 4;
                                                                                                              (s as any).CloTopCut = 3;
                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                              (s as any).CloPrice = 5600;
                                                                                                            } else {
                                                                                                              (s as any).CloQuality = 6;
                                                                                                              (s as any).CloStrength = 202500;
                                                                                                              (s as any).CloThinness = 4;
                                                                                                              (s as any).CloTopCut = 2;
                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                              (s as any).CloPrice = 5800;
                                                                                                              if (((s as any).ARGS ?? 0)[0] === 109) {
                                                                                                                (s as any).CloQuality = 4;
                                                                                                                (s as any).CloStrength = 191250;
                                                                                                                (s as any).CloThinness = 4;
                                                                                                                (s as any).CloTopCut = 3;
                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                (s as any).CloPrice = 5400;
                                                                                                              } else {
                                                                                                                (s as any).CloQuality = 4;
                                                                                                                (s as any).CloStrength = 191250;
                                                                                                                (s as any).CloThinness = 4;
                                                                                                                (s as any).CloTopCut = 1;
                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                (s as any).CloPrice = 5400;
                                                                                                                if (((s as any).ARGS ?? 0)[0] === 111) {
                                                                                                                  (s as any).CloQuality = 6;
                                                                                                                  (s as any).CloStrength = 202500;
                                                                                                                  (s as any).CloThinness = 1;
                                                                                                                  (s as any).CloTopCut = 1;
                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                  (s as any).CloPrice = 5800;
                                                                                                                } else {
                                                                                                                  (s as any).CloQuality = 6;
                                                                                                                  (s as any).CloStrength = 202500;
                                                                                                                  (s as any).CloThinness = 3;
                                                                                                                  (s as any).CloTopCut = 1;
                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                  (s as any).CloPrice = 5800;
                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 113) {
                                                                                                                    (s as any).CloQuality = 6;
                                                                                                                    (s as any).CloStrength = 202500;
                                                                                                                    (s as any).CloThinness = 3;
                                                                                                                    (s as any).CloTopCut = 1;
                                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                                    (s as any).CloPrice = 5800;
                                                                                                                  } else {
                                                                                                                    (s as any).CloQuality = 7;
                                                                                                                    (s as any).CloStrength = 208125;
                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                                    (s as any).CloPrice = 6000;
                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 115) {
                                                                                                                      (s as any).CloQuality = 7;
                                                                                                                      (s as any).CloStrength = 208125;
                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                      (s as any).CloTopCut = 1;
                                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                                      (s as any).CloPrice = 6000;
                                                                                                                    } else {
                                                                                                                      (s as any).CloQuality = 5;
                                                                                                                      (s as any).CloStrength = 196875;
                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                                      (s as any).CloPrice = 5600;
                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 117) {
                                                                                                                        (s as any).CloQuality = 5;
                                                                                                                        (s as any).CloStrength = 196875;
                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                        (s as any).CloPrice = 5600;
                                                                                                                      } else {
                                                                                                                        (s as any).CloQuality = 4;
                                                                                                                        (s as any).CloStrength = 191250;
                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                        (s as any).CloPrice = 5400;
                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 119) {
                                                                                                                          (s as any).CloQuality = 4;
                                                                                                                          (s as any).CloStrength = 191250;
                                                                                                                          (s as any).CloThinness = 5;
                                                                                                                          (s as any).CloBra = 1;
                                                                                                                          (s as any).CloPantsShortness = 1;
                                                                                                                          (s as any).CloPrice = 5400;
                                                                                                                        } else {
                                                                                                                          (s as any).CloQuality = 6;
                                                                                                                          (s as any).CloStrength = 202500;
                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                          (s as any).CloTopCut = 4;
                                                                                                                          (s as any).CloPantsShortness = 5;
                                                                                                                          (s as any).CloPrice = 5800;
                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 121) {
                                                                                                                            (s as any).CloQuality = 6;
                                                                                                                            (s as any).CloStrength = 202500;
                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                            (s as any).CloSkirtShortness = 5;
                                                                                                                            (s as any).CloPrice = 5800;
                                                                                                                          } else {
                                                                                                                            (s as any).CloQuality = 4;
                                                                                                                            (s as any).CloStrength = 191250;
                                                                                                                            (s as any).CloThinness = 5;
                                                                                                                            (s as any).CloTopCut = 4;
                                                                                                                            (s as any).CloPantsShortness = 6;
                                                                                                                            (s as any).CloOnePiece = 1;
                                                                                                                            (s as any).CloPrice = 5400;
                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 123) {
                                                                                                                              (s as any).CloQuality = 5;
                                                                                                                              (s as any).CloStrength = 196875;
                                                                                                                              (s as any).CloThinness = 5;
                                                                                                                              (s as any).CloTopCut = 4;
                                                                                                                              (s as any).CloSkirtShortness = 6;
                                                                                                                              (s as any).CloPrice = 5600;
                                                                                                                            } else {
                                                                                                                              (s as any).CloQuality = 4;
                                                                                                                              (s as any).CloStrength = 191250;
                                                                                                                              (s as any).CloThinness = 5;
                                                                                                                              (s as any).CloBra = 1;
                                                                                                                              (s as any).CloPanties = 1;
                                                                                                                              (s as any).CloCoverBack = 2;
                                                                                                                              (s as any).CloPrice = 5400;
                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 125) {
                                                                                                                                (s as any).CloQuality = 5;
                                                                                                                                (s as any).CloStrength = 196875;
                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                (s as any).CloTopCut = 3;
                                                                                                                                (s as any).CloSkirtShortness = 1;
                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                (s as any).CloPrice = 5600;
                                                                                                                              } else {
                                                                                                                                (s as any).CloQuality = 5;
                                                                                                                                (s as any).CloStrength = 196875;
                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                (s as any).CloTopCut = 3;
                                                                                                                                (s as any).CloPantsShortness = 5;
                                                                                                                                (s as any).CloPrice = 5600;
                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 127) {
                                                                                                                                  (s as any).CloQuality = 4;
                                                                                                                                  (s as any).CloStrength = 191250;
                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                  (s as any).CloTopCut = 1;
                                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                                  (s as any).CloPrice = 5400;
                                                                                                                                } else {
                                                                                                                                  (s as any).CloQuality = 3;
                                                                                                                                  (s as any).CloStrength = 185625;
                                                                                                                                  (s as any).CloThinness = 5;
                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                  (s as any).CloPantsShortness = 5;
                                                                                                                                  (s as any).CloPrice = 5200;
                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 129) {
                                                                                                                                    (s as any).CloQuality = 4;
                                                                                                                                    (s as any).CloStrength = 191250;
                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                    (s as any).CloTopCut = 1;
                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                    (s as any).CloPrice = 5400;
                                                                                                                                  } else {
                                                                                                                                    (s as any).CloQuality = 5;
                                                                                                                                    (s as any).CloStrength = 196875;
                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                    (s as any).CloSkirtShortness = 5;
                                                                                                                                    (s as any).CloPrice = 5600;
                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 131) {
                                                                                                                                      (s as any).CloQuality = 5;
                                                                                                                                      (s as any).CloStrength = 196875;
                                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                      (s as any).CloPrice = 5600;
                                                                                                                                    } else {
                                                                                                                                      (s as any).CloQuality = 5;
                                                                                                                                      (s as any).CloStrength = 196875;
                                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                                      (s as any).CloBra = 1;
                                                                                                                                      (s as any).CloPanties = 1;
                                                                                                                                      (s as any).CloOnePiece = 1;
                                                                                                                                      (s as any).CloPrice = 5600;
                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 133) {
                                                                                                                                        (s as any).CloQuality = 5;
                                                                                                                                        (s as any).CloStrength = 196875;
                                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                        (s as any).CloPantsShortness = 5;
                                                                                                                                        (s as any).CloPrice = 5600;
                                                                                                                                      } else {
                                                                                                                                        (s as any).CloQuality = 6;
                                                                                                                                        (s as any).CloStrength = 202500;
                                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                                        (s as any).CloTopCut = 1;
                                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                                        (s as any).CloOnePiece = 1;
                                                                                                                                        (s as any).CloPrice = 5800;
                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 135) {
                                                                                                                                          (s as any).CloQuality = 4;
                                                                                                                                          (s as any).CloStrength = 191250;
                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                          (s as any).CloTopCut = 1;
                                                                                                                                          (s as any).CloSkirtShortness = 2;
                                                                                                                                          (s as any).CloPrice = 5400;
                                                                                                                                        } else {
                                                                                                                                          (s as any).CloQuality = 4;
                                                                                                                                          (s as any).CloStrength = 191250;
                                                                                                                                          (s as any).CloThinness = 5;
                                                                                                                                          (s as any).CloTopCut = 4;
                                                                                                                                          (s as any).CloSkirtShortness = 2;
                                                                                                                                          (s as any).CloPrice = 5400;
                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 137) {
                                                                                                                                            (s as any).CloQuality = 4;
                                                                                                                                            (s as any).CloStrength = 191250;
                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                            (s as any).CloTopCut = 1;
                                                                                                                                            (s as any).CloPantsShortness = 6;
                                                                                                                                            (s as any).CloCoverBack = 4;
                                                                                                                                            (s as any).CloPrice = 5400;
                                                                                                                                          } else {
                                                                                                                                            (s as any).CloQuality = 6;
                                                                                                                                            (s as any).CloStrength = 202500;
                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                            (s as any).CloTopCut = 1;
                                                                                                                                            (s as any).CloPantsShortness = 6;
                                                                                                                                            (s as any).CloCoverBack = 4;
                                                                                                                                            (s as any).CloPrice = 5800;
                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 139) {
                                                                                                                                              (s as any).CloQuality = 5;
                                                                                                                                              (s as any).CloStrength = 196875;
                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                              (s as any).CloTopCut = 1;
                                                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                                                              (s as any).CloPrice = 5600;
                                                                                                                                            } else {
                                                                                                                                              (s as any).CloQuality = 6;
                                                                                                                                              (s as any).CloStrength = 202500;
                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                              (s as any).CloTopCut = 3;
                                                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                                                              (s as any).CloPrice = 5800;
                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 141) {
                                                                                                                                                (s as any).CloQuality = 5;
                                                                                                                                                (s as any).CloStrength = 196875;
                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                (s as any).CloTopCut = 3;
                                                                                                                                                (s as any).CloSkirtShortness = 1;
                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                (s as any).CloPrice = 5600;
                                                                                                                                              } else {
                                                                                                                                                (s as any).CloQuality = 4;
                                                                                                                                                (s as any).CloStrength = 191250;
                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                (s as any).CloPantsShortness = 5;
                                                                                                                                                (s as any).CloPrice = 5400;
                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 143) {
                                                                                                                                                  (s as any).CloQuality = 5;
                                                                                                                                                  (s as any).CloStrength = 196875;
                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                  (s as any).CloTopCut = 3;
                                                                                                                                                  (s as any).CloPantsShortness = 5;
                                                                                                                                                  (s as any).CloOnePiece = 1;
                                                                                                                                                  (s as any).CloPrice = 5600;
                                                                                                                                                } else {
                                                                                                                                                  (s as any).CloQuality = 4;
                                                                                                                                                  (s as any).CloStrength = 191250;
                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                  (s as any).CloBra = 1;
                                                                                                                                                  (s as any).CloPanties = 1;
                                                                                                                                                  (s as any).CloPrice = 5400;
                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 145) {
                                                                                                                                                    (s as any).CloQuality = 5;
                                                                                                                                                    (s as any).CloStrength = 196875;
                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                    (s as any).CloBra = 4;
                                                                                                                                                    (s as any).CloPanties = 1;
                                                                                                                                                    (s as any).CloPrice = 5600;
                                                                                                                                                  } else {
                                                                                                                                                    (s as any).CloQuality = 5;
                                                                                                                                                    (s as any).CloStrength = 196875;
                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                                                    (s as any).CloPantsShortness = 5;
                                                                                                                                                    (s as any).CloPrice = 5600;
                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 147) {
                                                                                                                                                      (s as any).CloQuality = 5;
                                                                                                                                                      (s as any).CloStrength = 196875;
                                                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                                      (s as any).CloPantsShortness = 5;
                                                                                                                                                      (s as any).CloPrice = 5600;
                                                                                                                                                    } else {
                                                                                                                                                      (s as any).CloQuality = 5;
                                                                                                                                                      (s as any).CloStrength = 196875;
                                                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                                                      (s as any).CloBra = 1;
                                                                                                                                                      (s as any).CloPantsShortness = 6;
                                                                                                                                                      (s as any).CloPrice = 5600;
                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 149) {
                                                                                                                                                        (s as any).CloQuality = 7;
                                                                                                                                                        (s as any).CloStrength = 208125;
                                                                                                                                                        (s as any).CloThinness = 3;
                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                                                        (s as any).CloPrice = 6000;
                                                                                                                                                      } else {
                                                                                                                                                        (s as any).CloQuality = 6;
                                                                                                                                                        (s as any).CloStrength = 202500;
                                                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                                                        (s as any).CloPrice = 5800;
                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 151) {
                                                                                                                                                          (s as any).CloQuality = 5;
                                                                                                                                                          (s as any).CloStrength = 196875;
                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                          (s as any).CloTopCut = 1;
                                                                                                                                                          (s as any).CloPantsShortness = 6;
                                                                                                                                                          (s as any).CloPrice = 5600;
                                                                                                                                                        } else {
                                                                                                                                                          (s as any).CloQuality = 6;
                                                                                                                                                          (s as any).CloStrength = 202500;
                                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                          (s as any).CloPantsShortness = 1;
                                                                                                                                                          (s as any).CloPrice = 5800;
                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 153) {
                                                                                                                                                            (s as any).CloQuality = 6;
                                                                                                                                                            (s as any).CloStrength = 202500;
                                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                                            (s as any).CloTopCut = 4;
                                                                                                                                                            (s as any).CloPantsShortness = 6;
                                                                                                                                                            (s as any).CloPrice = 5800;
                                                                                                                                                          } else {
                                                                                                                                                            (s as any).CloQuality = 4;
                                                                                                                                                            (s as any).CloStrength = 191250;
                                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                                            (s as any).CloTopCut = 1;
                                                                                                                                                            (s as any).CloSkirtShortness = 2;
                                                                                                                                                            (s as any).CloPrice = 5400;
                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 155) {
                                                                                                                                                              (s as any).CloQuality = 7;
                                                                                                                                                              (s as any).CloStrength = 208125;
                                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                                              (s as any).CloTopCut = 3;
                                                                                                                                                              (s as any).CloPantsShortness = 6;
                                                                                                                                                              (s as any).CloPrice = 6000;
                                                                                                                                                            } else {
                                                                                                                                                              (s as any).CloQuality = 7;
                                                                                                                                                              (s as any).CloStrength = 208125;
                                                                                                                                                              (s as any).CloThinness = 1;
                                                                                                                                                              (s as any).CloTopCut = 1;
                                                                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                                                                              (s as any).CloPrice = 6000;
                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 157) {
                                                                                                                                                                (s as any).CloQuality = 5;
                                                                                                                                                                (s as any).CloStrength = 196875;
                                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                                                                (s as any).CloPrice = 5600;
                                                                                                                                                              } else {
                                                                                                                                                                (s as any).CloQuality = 5;
                                                                                                                                                                (s as any).CloStrength = 196875;
                                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                                                                (s as any).CloPrice = 5600;
                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 159) {
                                                                                                                                                                  (s as any).CloQuality = 5;
                                                                                                                                                                  (s as any).CloStrength = 196875;
                                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                                  (s as any).CloTopCut = 3;
                                                                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                                                                  (s as any).CloPrice = 5600;
                                                                                                                                                                } else {
                                                                                                                                                                  (s as any).CloQuality = 7;
                                                                                                                                                                  (s as any).CloStrength = 208125;
                                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                                  (s as any).CloTopCut = 3;
                                                                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                                                                  (s as any).CloPrice = 6000;
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

export const _attributes_nerdvana_cosplay: LocationDef = {
  name: '_attributes_nerdvana_cosplay',
  region: 'other',
  enter: enter,
};
