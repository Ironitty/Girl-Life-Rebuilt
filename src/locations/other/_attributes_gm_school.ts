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
  (s as any).CloStrength = 225000 + 5625 * ((s as any).CloQuality ?? 0) + 18750 * (((s as any).CloStyle ?? 0) === 2 ? 1 : 0) + 37500 * (((s as any).CloStyle ?? 0) === 5 ? 1 : 0);
  // TODO-QSP: 2: 236250
  // TODO-QSP: 3: 241875
  // TODO-QSP: 4: 247500
  // TODO-QSP: 5: 253125
  // TODO-QSP: CloQuality ranges from 2 to 5
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 4;
    (s as any).CloStrength = 247500;
    (s as any).CloThinness = 1;
    (s as any).CloTopCut = 1;
    (s as any).CloSkirtShortness = 4;
    (s as any).CloStyle2 = 4;
    (s as any).CloSchool = 1;
    (s as any).CloPrice = 2700;
  } else {
    (s as any).CloQuality = 5;
    (s as any).CloStrength = 253125;
    (s as any).CloThinness = 1;
    (s as any).CloTopCut = 1;
    (s as any).CloSkirtShortness = 3;
    (s as any).CloStyle2 = 4;
    (s as any).CloSchool = 1;
    (s as any).CloPrice = 2800;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 5;
      (s as any).CloStrength = 253125;
      (s as any).CloThinness = 1;
      (s as any).CloTopCut = 1;
      (s as any).CloSkirtShortness = 2;
      (s as any).CloStyle2 = 4;
      (s as any).CloSchool = 1;
      (s as any).CloPrice = 2800;
    } else {
      (s as any).CloQuality = 5;
      (s as any).CloStrength = 253125;
      (s as any).CloThinness = 3;
      (s as any).CloTopCut = 1;
      (s as any).CloSkirtShortness = 3;
      (s as any).CloStyle2 = 4;
      (s as any).CloSchool = 1;
      (s as any).CloPrice = 2800;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 5;
        (s as any).CloStrength = 253125;
        (s as any).CloThinness = 1;
        (s as any).CloTopCut = 1;
        (s as any).CloSkirtShortness = 3;
        (s as any).CloStyle2 = 4;
        (s as any).CloSchool = 1;
        (s as any).CloPrice = 2800;
      } else {
        (s as any).CloQuality = 3;
        (s as any).CloStrength = 241875;
        (s as any).CloThinness = 1;
        (s as any).CloTopCut = 1;
        (s as any).CloSkirtShortness = 2;
        (s as any).CloStyle2 = 4;
        (s as any).CloSchool = 1;
        (s as any).CloPrice = 2600;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 3;
          (s as any).CloStrength = 241875;
          (s as any).CloThinness = 2;
          (s as any).CloTopCut = 1;
          (s as any).CloSkirtShortness = 2;
          (s as any).CloStyle2 = 4;
          (s as any).CloSchool = 1;
          (s as any).CloPrice = 2600;
        } else {
          (s as any).CloQuality = 3;
          (s as any).CloStrength = 241875;
          (s as any).CloThinness = 2;
          (s as any).CloTopCut = 1;
          (s as any).CloSkirtShortness = 2;
          (s as any).CloStyle2 = 4;
          (s as any).CloSchool = 1;
          (s as any).CloPrice = 2600;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 3;
            (s as any).CloStrength = 241875;
            (s as any).CloThinness = 2;
            (s as any).CloTopCut = 1;
            (s as any).CloSkirtShortness = 2;
            (s as any).CloStyle2 = 4;
            (s as any).CloSchool = 1;
            (s as any).CloPrice = 2600;
          } else {
            (s as any).CloQuality = 3;
            (s as any).CloStrength = 241875;
            (s as any).CloThinness = 3;
            (s as any).CloTopCut = 1;
            (s as any).CloSkirtShortness = 3;
            (s as any).CloStyle2 = 4;
            (s as any).CloSchool = 1;
            (s as any).CloPrice = 2600;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 3;
              (s as any).CloStrength = 241875;
              (s as any).CloThinness = 4;
              (s as any).CloTopCut = 2;
              (s as any).CloSkirtShortness = 5;
              (s as any).CloStyle2 = 4;
              (s as any).CloSchool = 1;
              (s as any).CloPrice = 2600;
            } else {
              (s as any).CloQuality = 2;
              (s as any).CloStrength = 236250;
              (s as any).CloThinness = 4;
              (s as any).CloTopCut = 1;
              (s as any).CloSkirtShortness = 2;
              (s as any).CloStyle2 = 4;
              (s as any).CloSchool = 1;
              (s as any).CloPrice = 2500;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 3;
                (s as any).CloStrength = 241875;
                (s as any).CloThinness = 3;
                (s as any).CloTopCut = 1;
                (s as any).CloSkirtShortness = 2;
                (s as any).CloStyle2 = 4;
                (s as any).CloSchool = 1;
                (s as any).CloPrice = 2600;
              } else {
                (s as any).CloQuality = 4;
                (s as any).CloStrength = 247500;
                (s as any).CloThinness = 1;
                (s as any).CloTopCut = 1;
                (s as any).CloSkirtShortness = 3;
                (s as any).CloStyle2 = 4;
                (s as any).CloSchool = 1;
                (s as any).CloPrice = 2700;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 3;
                  (s as any).CloStrength = 241875;
                  (s as any).CloThinness = 3;
                  (s as any).CloTopCut = 1;
                  (s as any).CloSkirtShortness = 4;
                  (s as any).CloBimbo = 1;
                  (s as any).CloStyle2 = 4;
                  (s as any).CloSchool = 1;
                  (s as any).CloPrice = 2600;
                } else {
                  (s as any).CloQuality = 5;
                  (s as any).CloStrength = 253125;
                  (s as any).CloThinness = 3;
                  (s as any).CloTopCut = 1;
                  (s as any).CloSkirtShortness = 3;
                  (s as any).CloStyle2 = 4;
                  (s as any).CloSchool = 1;
                  (s as any).CloPrice = 2800;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 4;
                    (s as any).CloStrength = 247500;
                    (s as any).CloThinness = 3;
                    (s as any).CloTopCut = 1;
                    (s as any).CloSkirtShortness = 3;
                    (s as any).CloStyle2 = 4;
                    (s as any).CloSchool = 1;
                    (s as any).CloPrice = 2700;
                  } else {
                    (s as any).CloQuality = 4;
                    (s as any).CloStrength = 247500;
                    (s as any).CloThinness = 3;
                    (s as any).CloTopCut = 1;
                    (s as any).CloSkirtShortness = 4;
                    (s as any).CloStyle2 = 4;
                    (s as any).CloSchool = 1;
                    (s as any).CloPrice = 2700;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 3;
                      (s as any).CloStrength = 241875;
                      (s as any).CloThinness = 3;
                      (s as any).CloTopCut = 1;
                      (s as any).CloSkirtShortness = 3;
                      (s as any).CloStyle2 = 4;
                      (s as any).CloSchool = 1;
                      (s as any).CloPrice = 2600;
                    } else {
                      (s as any).CloQuality = 3;
                      (s as any).CloStrength = 241875;
                      (s as any).CloThinness = 3;
                      (s as any).CloTopCut = 1;
                      (s as any).CloSkirtShortness = 3;
                      (s as any).CloStyle2 = 4;
                      (s as any).CloSchool = 1;
                      (s as any).CloPrice = 2600;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).CloQuality = 4;
                        (s as any).CloStrength = 247500;
                        (s as any).CloThinness = 3;
                        (s as any).CloTopCut = 1;
                        (s as any).CloSkirtShortness = 4;
                        (s as any).CloStyle2 = 4;
                        (s as any).CloSchool = 1;
                        (s as any).CloPrice = 2700;
                      } else {
                        (s as any).CloQuality = 3;
                        (s as any).CloStrength = 241875;
                        (s as any).CloThinness = 1;
                        (s as any).CloTopCut = 1;
                        (s as any).CloSkirtShortness = 5;
                        (s as any).CloStyle2 = 4;
                        (s as any).CloSchool = 1;
                        (s as any).CloPrice = 2600;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).CloQuality = 3;
                          (s as any).CloStrength = 241875;
                          (s as any).CloThinness = 3;
                          (s as any).CloTopCut = 1;
                          (s as any).CloSkirtShortness = 3;
                          (s as any).CloStyle2 = 4;
                          (s as any).CloSchool = 1;
                          (s as any).CloPrice = 2600;
                        } else {
                          (s as any).CloQuality = 4;
                          (s as any).CloStrength = 247500;
                          (s as any).CloThinness = 1;
                          (s as any).CloTopCut = 1;
                          (s as any).CloSkirtShortness = 1;
                          (s as any).CloStyle2 = 4;
                          (s as any).CloSchool = 1;
                          (s as any).CloPrice = 2700;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).CloQuality = 3;
                            (s as any).CloStrength = 241875;
                            (s as any).CloThinness = 1;
                            (s as any).CloTopCut = 1;
                            (s as any).CloSkirtShortness = 1;
                            (s as any).CloStyle2 = 4;
                            (s as any).CloSchool = 1;
                            (s as any).CloPrice = 2600;
                          } else {
                            (s as any).CloQuality = 3;
                            (s as any).CloStrength = 241875;
                            (s as any).CloThinness = 4;
                            (s as any).CloTopCut = 1;
                            (s as any).CloSkirtShortness = 4;
                            (s as any).CloStyle2 = 4;
                            (s as any).CloSchool = 1;
                            (s as any).CloPrice = 2600;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).CloQuality = 3;
                              (s as any).CloStrength = 241875;
                              (s as any).CloThinness = 4;
                              (s as any).CloTopCut = 1;
                              (s as any).CloSkirtShortness = 5;
                              (s as any).CloStyle2 = 4;
                              (s as any).CloSchool = 1;
                              (s as any).CloPrice = 2600;
                            } else {
                              (s as any).CloQuality = 3;
                              (s as any).CloStrength = 241875;
                              (s as any).CloThinness = 1;
                              (s as any).CloTopCut = 1;
                              (s as any).CloSkirtShortness = 3;
                              (s as any).CloStyle2 = 4;
                              (s as any).CloSchool = 1;
                              (s as any).CloPrice = 2600;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).CloQuality = 4;
                                (s as any).CloStrength = 247500;
                                (s as any).CloThinness = 4;
                                (s as any).CloTopCut = 1;
                                (s as any).CloSkirtShortness = 3;
                                (s as any).CloStyle2 = 4;
                                (s as any).CloSchool = 1;
                                (s as any).CloPrice = 2700;
                              } else {
                                (s as any).CloQuality = 3;
                                (s as any).CloStrength = 241875;
                                (s as any).CloThinness = 1;
                                (s as any).CloTopCut = 1;
                                (s as any).CloSkirtShortness = 2;
                                (s as any).CloStyle2 = 4;
                                (s as any).CloSchool = 1;
                                (s as any).CloPrice = 2600;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).CloQuality = 3;
                                  (s as any).CloStrength = 241875;
                                  (s as any).CloThinness = 3;
                                  (s as any).CloTopCut = 1;
                                  (s as any).CloSkirtShortness = 3;
                                  (s as any).CloStyle2 = 4;
                                  (s as any).CloSchool = 1;
                                  (s as any).CloPrice = 2600;
                                } else {
                                  (s as any).CloQuality = 5;
                                  (s as any).CloStrength = 253125;
                                  (s as any).CloThinness = 2;
                                  (s as any).CloTopCut = 1;
                                  (s as any).CloSkirtShortness = 4;
                                  (s as any).CloStyle2 = 4;
                                  (s as any).CloSchool = 1;
                                  (s as any).CloPrice = 2800;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).CloQuality = 4;
                                    (s as any).CloStrength = 247500;
                                    (s as any).CloThinness = 1;
                                    (s as any).CloTopCut = 1;
                                    (s as any).CloSkirtShortness = 4;
                                    (s as any).CloStyle2 = 4;
                                    (s as any).CloSchool = 1;
                                    (s as any).CloPrice = 2700;
                                  } else {
                                    (s as any).CloQuality = 3;
                                    (s as any).CloStrength = 241875;
                                    (s as any).CloThinness = 5;
                                    (s as any).CloTopCut = 2;
                                    (s as any).CloSkirtShortness = 5;
                                    (s as any).CloStyle2 = 4;
                                    (s as any).CloSchool = 1;
                                    (s as any).CloPrice = 2600;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).CloQuality = 3;
                                      (s as any).CloStrength = 241875;
                                      (s as any).CloThinness = 4;
                                      (s as any).CloTopCut = 3;
                                      (s as any).CloSkirtShortness = 5;
                                      (s as any).CloStyle2 = 4;
                                      (s as any).CloSchool = 1;
                                      (s as any).CloBimbo = 1;
                                      (s as any).CloPrice = 2600;
                                    } else {
                                      (s as any).CloQuality = 4;
                                      (s as any).CloStrength = 247500;
                                      (s as any).CloThinness = 3;
                                      (s as any).CloTopCut = 1;
                                      (s as any).CloSkirtShortness = 5;
                                      (s as any).CloStyle2 = 4;
                                      (s as any).CloSchool = 1;
                                      (s as any).CloPrice = 2700;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).CloQuality = 4;
                                        (s as any).CloStrength = 247500;
                                        (s as any).CloThinness = 3;
                                        (s as any).CloTopCut = 1;
                                        (s as any).CloSkirtShortness = 3;
                                        (s as any).CloStyle2 = 4;
                                        (s as any).CloSchool = 1;
                                        (s as any).CloPrice = 2700;
                                      } else {
                                        (s as any).CloQuality = 3;
                                        (s as any).CloStrength = 241875;
                                        (s as any).CloThinness = 4;
                                        (s as any).CloTopCut = 2;
                                        (s as any).CloSkirtShortness = 5;
                                        (s as any).CloStyle2 = 4;
                                        (s as any).CloSchool = 1;
                                        (s as any).CloPrice = 2600;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).CloQuality = 3;
                                          (s as any).CloStrength = 241875;
                                          (s as any).CloThinness = 4;
                                          (s as any).CloTopCut = 4;
                                          (s as any).CloSkirtShortness = 5;
                                          (s as any).CloStyle2 = 4;
                                          (s as any).CloSchool = 1;
                                          (s as any).CloStyle = 4;
                                          (s as any).CloProstitute = 1;
                                          (s as any).CloPrice = 2600;
                                        } else {
                                          (s as any).CloQuality = 3;
                                          (s as any).CloStrength = 241875;
                                          (s as any).CloThinness = 3;
                                          (s as any).CloTopCut = 2;
                                          (s as any).CloSkirtShortness = 4;
                                          (s as any).CloStyle2 = 4;
                                          (s as any).CloSchool = 1;
                                          (s as any).CloPrice = 2600;
                                          if (((s as any).ARGS ?? 0)[0] === 41) {
                                            (s as any).CloQuality = 3;
                                            (s as any).CloStrength = 241875;
                                            (s as any).CloThinness = 4;
                                            (s as any).CloTopCut = 4;
                                            (s as any).CloSkirtShortness = 5;
                                            (s as any).CloStyle2 = 4;
                                            (s as any).CloSchool = 1;
                                            (s as any).CloBimbo = 1;
                                            (s as any).CloPrice = 2600;
                                          } else {
                                            (s as any).CloQuality = 3;
                                            (s as any).CloStrength = 241875;
                                            (s as any).CloThinness = 3;
                                            (s as any).CloTopCut = 1;
                                            (s as any).CloSkirtShortness = 2;
                                            (s as any).CloStyle2 = 4;
                                            (s as any).CloSchool = 1;
                                            (s as any).CloPrice = 2600;
                                            if (((s as any).ARGS ?? 0)[0] === 43) {
                                              (s as any).CloQuality = 3;
                                              (s as any).CloStrength = 241875;
                                              (s as any).CloThinness = 3;
                                              (s as any).CloTopCut = 1;
                                              (s as any).CloSkirtShortness = 4;
                                              (s as any).CloStyle2 = 4;
                                              (s as any).CloSchool = 1;
                                              (s as any).CloPrice = 2600;
                                            } else {
                                              (s as any).CloQuality = 5;
                                              (s as any).CloStrength = 253125;
                                              (s as any).CloThinness = 2;
                                              (s as any).CloTopCut = 2;
                                              (s as any).CloSkirtShortness = 3;
                                              (s as any).CloStyle2 = 4;
                                              (s as any).CloSchool = 1;
                                              (s as any).CloGoth = 1;
                                              (s as any).CloPrice = 2800;
                                              if (((s as any).ARGS ?? 0)[0] === 45) {
                                                (s as any).CloQuality = 4;
                                                (s as any).CloStrength = 247500;
                                                (s as any).CloThinness = 2;
                                                (s as any).CloTopCut = 1;
                                                (s as any).CloSkirtShortness = 3;
                                                (s as any).CloStyle2 = 4;
                                                (s as any).CloSchool = 1;
                                                (s as any).CloPrice = 2700;
                                              } else {
                                                (s as any).CloQuality = 3;
                                                (s as any).CloStrength = 241875;
                                                (s as any).CloThinness = 4;
                                                (s as any).CloTopCut = 2;
                                                (s as any).CloSkirtShortness = 5;
                                                (s as any).CloStyle2 = 4;
                                                (s as any).CloSchool = 1;
                                                (s as any).CloPrice = 2600;
                                                if (((s as any).ARGS ?? 0)[0] === 47) {
                                                  (s as any).CloQuality = 3;
                                                  (s as any).CloStrength = 241875;
                                                  (s as any).CloThinness = 3;
                                                  (s as any).CloTopCut = 1;
                                                  (s as any).CloSkirtShortness = 4;
                                                  (s as any).CloStyle2 = 4;
                                                  (s as any).CloSchool = 1;
                                                  (s as any).CloPrice = 2600;
                                                } else {
                                                  (s as any).CloQuality = 3;
                                                  (s as any).CloStrength = 241875;
                                                  (s as any).CloThinness = 3;
                                                  (s as any).CloTopCut = 1;
                                                  (s as any).CloSkirtShortness = 3;
                                                  (s as any).CloStyle2 = 4;
                                                  (s as any).CloSchool = 1;
                                                  (s as any).CloPrice = 2600;
                                                  if (((s as any).ARGS ?? 0)[0] === 49) {
                                                    (s as any).CloQuality = 3;
                                                    (s as any).CloStrength = 241875;
                                                    (s as any).CloThinness = 4;
                                                    (s as any).CloTopCut = 2;
                                                    (s as any).CloSkirtShortness = 5;
                                                    (s as any).CloStyle2 = 4;
                                                    (s as any).CloSchool = 1;
                                                    (s as any).CloPrice = 2600;
                                                  } else {
                                                    (s as any).CloQuality = 3;
                                                    (s as any).CloStrength = 241875;
                                                    (s as any).CloThinness = 3;
                                                    (s as any).CloTopCut = 1;
                                                    (s as any).CloSkirtShortness = 3;
                                                    (s as any).CloStyle2 = 4;
                                                    (s as any).CloSchool = 1;
                                                    (s as any).CloPrice = 2600;
                                                    if (((s as any).ARGS ?? 0)[0] === 51) {
                                                      (s as any).CloQuality = 3;
                                                      (s as any).CloStrength = 241875;
                                                      (s as any).CloThinness = 3;
                                                      (s as any).CloTopCut = 1;
                                                      (s as any).CloSkirtShortness = 3;
                                                      (s as any).CloStyle2 = 4;
                                                      (s as any).CloSchool = 1;
                                                      (s as any).CloGoth = 1;
                                                      (s as any).CloPrice = 2600;
                                                    } else {
                                                      (s as any).CloQuality = 3;
                                                      (s as any).CloStrength = 260625;
                                                      (s as any).CloThinness = 2;
                                                      (s as any).CloTopCut = 1;
                                                      (s as any).CloSkirtShortness = 4;
                                                      (s as any).CloStyle2 = 4;
                                                      (s as any).CloSchool = 1;
                                                      (s as any).CloStyle = 2;
                                                      (s as any).CloPunk = 1;
                                                      (s as any).CloPrice = 2600;
                                                      if (((s as any).ARGS ?? 0)[0] === 53) {
                                                        (s as any).CloQuality = 3;
                                                        (s as any).CloStrength = 241875;
                                                        (s as any).CloThinness = 2;
                                                        (s as any).CloTopCut = 1;
                                                        (s as any).CloSkirtShortness = 3;
                                                        (s as any).CloStyle2 = 4;
                                                        (s as any).CloSchool = 1;
                                                        (s as any).CloGoth = 1;
                                                        (s as any).CloPrice = 2600;
                                                      } else {
                                                        (s as any).CloQuality = 3;
                                                        (s as any).CloStrength = 241875;
                                                        (s as any).CloThinness = 4;
                                                        (s as any).CloTopCut = 2;
                                                        (s as any).CloSkirtShortness = 5;
                                                        (s as any).CloStyle2 = 4;
                                                        (s as any).CloSchool = 1;
                                                        (s as any).CloPrice = 2600;
                                                        if (((s as any).ARGS ?? 0)[0] === 55) {
                                                          (s as any).CloQuality = 3;
                                                          (s as any).CloStrength = 241875;
                                                          (s as any).CloThinness = 3;
                                                          (s as any).CloTopCut = 1;
                                                          (s as any).CloSkirtShortness = 2;
                                                          (s as any).CloStyle2 = 4;
                                                          (s as any).CloSchool = 1;
                                                          (s as any).CloGoth = 1;
                                                          (s as any).CloPrice = 2600;
                                                        } else {
                                                          (s as any).CloQuality = 3;
                                                          (s as any).CloStrength = 241875;
                                                          (s as any).CloThinness = 4;
                                                          (s as any).CloTopCut = 4;
                                                          (s as any).CloSkirtShortness = 3;
                                                          (s as any).CloStyle2 = 4;
                                                          (s as any).CloSchool = 1;
                                                          (s as any).CloBimbo = 1;
                                                          (s as any).CloStyle = 4;
                                                          (s as any).CloProstitute = 1;
                                                          (s as any).CloPrice = 2600;
                                                          if (((s as any).ARGS ?? 0)[0] === 57) {
                                                            (s as any).CloQuality = 4;
                                                            (s as any).CloStrength = 247500;
                                                            (s as any).CloThinness = 3;
                                                            (s as any).CloTopCut = 1;
                                                            (s as any).CloSkirtShortness = 3;
                                                            (s as any).CloStyle2 = 4;
                                                            (s as any).CloSchool = 1;
                                                            (s as any).CloPrice = 2700;
                                                          } else {
                                                            (s as any).CloQuality = 3;
                                                            (s as any).CloStrength = 241875;
                                                            (s as any).CloThinness = 3;
                                                            (s as any).CloTopCut = 2;
                                                            (s as any).CloSkirtShortness = 4;
                                                            (s as any).CloStyle2 = 4;
                                                            (s as any).CloSchool = 1;
                                                            (s as any).CloPrice = 2600;
                                                            if (((s as any).ARGS ?? 0)[0] === 59) {
                                                              (s as any).CloQuality = 5;
                                                              (s as any).CloStrength = 253125;
                                                              (s as any).CloThinness = 2;
                                                              (s as any).CloTopCut = 1;
                                                              (s as any).CloSkirtShortness = 2;
                                                              (s as any).CloStyle2 = 4;
                                                              (s as any).CloSchool = 1;
                                                              (s as any).CloPrice = 2800;
                                                            } else {
                                                              (s as any).CloQuality = 4;
                                                              (s as any).CloStrength = 247500;
                                                              (s as any).CloThinness = 4;
                                                              (s as any).CloTopCut = 1;
                                                              (s as any).CloSkirtShortness = 4;
                                                              (s as any).CloStyle2 = 4;
                                                              (s as any).CloSchool = 1;
                                                              (s as any).CloPrice = 2700;
                                                              if (((s as any).ARGS ?? 0)[0] === 61) {
                                                                (s as any).CloQuality = 5;
                                                                (s as any).CloStrength = 253125;
                                                                (s as any).CloThinness = 1;
                                                                (s as any).CloTopCut = 1;
                                                                (s as any).CloSkirtShortness = 3;
                                                                (s as any).CloStyle2 = 4;
                                                                (s as any).CloSchool = 1;
                                                                (s as any).CloPrice = 2800;
                                                              } else {
                                                                (s as any).CloQuality = 4;
                                                                (s as any).CloStrength = 247500;
                                                                (s as any).CloThinness = 3;
                                                                (s as any).CloTopCut = 1;
                                                                (s as any).CloSkirtShortness = 5;
                                                                (s as any).CloStyle2 = 4;
                                                                (s as any).CloSchool = 1;
                                                                (s as any).CloGoth = 1;
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

export const _attributes_gm_school: LocationDef = {
  name: '_attributes_gm_school',
  region: 'other',
  enter: enter,
};
