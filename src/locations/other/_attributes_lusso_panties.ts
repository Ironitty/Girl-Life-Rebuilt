// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: PanPrice ~ 1000 * (20 + PanQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 5: 1250
  // TODO-QSP: 6: 1300
  // TODO-QSP: PanQuality ranges from 5 to 6
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).PanType = 1;
    (s as any).PanFun = 1;
    (s as any).PanMaterial = 6;
    (s as any).PanQuality = 5;
    (s as any).PanStrength = 120000;
    (s as any).PanThinness = 3;
    (s as any).PanPrice = 1250;
    (s as any).underwear['pair'] = 1;
  } else {
    (s as any).PanType = 1;
    (s as any).PanFun = 1;
    (s as any).PanMaterial = 6;
    (s as any).PanQuality = 6;
    (s as any).PanStrength = 140000;
    (s as any).PanThinness = 2;
    (s as any).PanPrice = 1300;
    (s as any).underwear['pair'] = 2;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).PanType = 1;
      (s as any).PanFun = 1;
      (s as any).PanQuality = 6;
      (s as any).PanStrength = 140000;
      (s as any).PanThinness = 2;
      (s as any).PanPrice = 1300;
      (s as any).underwear['pair'] = 3;
    } else {
      (s as any).PanType = 1;
      (s as any).PanFun = 1;
      (s as any).PanQuality = 5;
      (s as any).PanStrength = 120000;
      (s as any).PanThinness = 2;
      (s as any).PanPrice = 1250;
      (s as any).underwear['pair'] = 4;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).PanType = 1;
        (s as any).PanFun = 1;
        (s as any).PanQuality = 6;
        (s as any).PanStrength = 140000;
        (s as any).PanThinness = 2;
        (s as any).PanPrice = 1300;
        (s as any).underwear['pair'] = 5;
      } else {
        (s as any).PanType = 1;
        (s as any).PanFun = 1;
        (s as any).PanQuality = 6;
        (s as any).PanStrength = 140000;
        (s as any).PanThinness = 2;
        (s as any).PanPrice = 1300;
        (s as any).underwear['pair'] = 6;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).PanType = 1;
          (s as any).PanFun = 1;
          (s as any).PanQuality = 5;
          (s as any).PanStrength = 120000;
          (s as any).PanThinness = 2;
          (s as any).PanPrice = 1250;
          (s as any).underwear['pair'] = 7;
        } else {
          (s as any).PanType = 1;
          (s as any).PanFun = 1;
          (s as any).PanMaterial = 6;
          (s as any).PanQuality = 6;
          (s as any).PanStrength = 140000;
          (s as any).PanThinness = 2;
          (s as any).PanPrice = 1300;
          (s as any).underwear['pair'] = 8;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).PanType = 2;
            (s as any).PanFun = 1;
            (s as any).PanMaterial = 6;
            (s as any).PanQuality = 6;
            (s as any).PanStrength = 140000;
            (s as any).PanThinness = 2;
            (s as any).PanPrice = 1300;
            (s as any).underwear['pair'] = 9;
          } else {
            (s as any).PanType = 1;
            (s as any).PanFun = 1;
            (s as any).PanMaterial = 6;
            (s as any).PanQuality = 5;
            (s as any).PanStrength = 120000;
            (s as any).PanThinness = 4;
            (s as any).PanPrice = 1250;
            (s as any).underwear['pair'] = 10;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).PanType = 1;
              (s as any).PanFun = 1;
              (s as any).PanQuality = 6;
              (s as any).PanStrength = 140000;
              (s as any).PanThinness = 2;
              (s as any).PanPrice = 1300;
              (s as any).underwear['pair'] = 11;
            } else {
              (s as any).PanType = 1;
              (s as any).PanFun = 1;
              (s as any).PanMaterial = 6;
              (s as any).PanQuality = 6;
              (s as any).PanStrength = 140000;
              (s as any).PanThinness = 3;
              (s as any).PanPrice = 1300;
              (s as any).underwear['pair'] = 12;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).PanType = 1;
                (s as any).PanFun = 1;
                (s as any).PanMaterial = 6;
                (s as any).PanQuality = 6;
                (s as any).PanStrength = 140000;
                (s as any).PanThinness = 2;
                (s as any).PanPrice = 1300;
                (s as any).underwear['pair'] = 13;
              } else {
                (s as any).PanType = 1;
                (s as any).PanFun = 1;
                (s as any).PanMaterial = 6;
                (s as any).PanQuality = 5;
                (s as any).PanStrength = 120000;
                (s as any).PanThinness = 2;
                (s as any).PanPrice = 1250;
                (s as any).underwear['pair'] = 14;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).PanType = 1;
                  (s as any).PanFun = 1;
                  (s as any).PanQuality = 5;
                  (s as any).PanStrength = 120000;
                  (s as any).PanThinness = 2;
                  (s as any).PanPrice = 1250;
                  (s as any).underwear['pair'] = 15;
                } else {
                  (s as any).PanType = 1;
                  (s as any).PanFun = 1;
                  (s as any).PanMaterial = 6;
                  (s as any).PanQuality = 5;
                  (s as any).PanStrength = 120000;
                  (s as any).PanThinness = 4;
                  (s as any).PanPrice = 1250;
                  (s as any).underwear['pair'] = 16;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).PanType = 1;
                    (s as any).PanFun = 1;
                    (s as any).PanMaterial = 6;
                    (s as any).PanQuality = 6;
                    (s as any).PanStrength = 140000;
                    (s as any).PanThinness = 3;
                    (s as any).PanPrice = 1300;
                    (s as any).underwear['pair'] = 17;
                  } else {
                    (s as any).PanType = 1;
                    (s as any).PanFun = 1;
                    (s as any).PanMaterial = 6;
                    (s as any).PanQuality = 6;
                    (s as any).PanStrength = 140000;
                    (s as any).PanThinness = 2;
                    (s as any).PanPrice = 1300;
                    (s as any).underwear['pair'] = 18;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).PanType = 1;
                      (s as any).PanFun = 1;
                      (s as any).PanMaterial = 6;
                      (s as any).PanQuality = 5;
                      (s as any).PanStrength = 120000;
                      (s as any).PanThinness = 3;
                      (s as any).PanPrice = 1250;
                      (s as any).underwear['pair'] = 19;
                    } else {
                      (s as any).PanType = 1;
                      (s as any).PanFun = 1;
                      (s as any).PanMaterial = 6;
                      (s as any).PanQuality = 5;
                      (s as any).PanStrength = 120000;
                      (s as any).PanThinness = 3;
                      (s as any).PanPrice = 1250;
                      (s as any).underwear['pair'] = 20;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).PanType = 1;
                        (s as any).PanFun = 1;
                        (s as any).PanMaterial = 6;
                        (s as any).PanQuality = 6;
                        (s as any).PanStrength = 140000;
                        (s as any).PanThinness = 2;
                        (s as any).PanPrice = 1300;
                        (s as any).underwear['pair'] = 21;
                      } else {
                        (s as any).PanType = 1;
                        (s as any).PanFun = 1;
                        (s as any).PanMaterial = 6;
                        (s as any).PanQuality = 6;
                        (s as any).PanStrength = 140000;
                        (s as any).PanThinness = 5;
                        (s as any).PanPrice = 1300;
                        (s as any).underwear['pair'] = 22;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).PanType = 1;
                          (s as any).PanFun = 1;
                          (s as any).PanQuality = 5;
                          (s as any).PanStrength = 120000;
                          (s as any).PanThinness = 2;
                          (s as any).PanPrice = 1250;
                          (s as any).underwear['pair'] = 23;
                        } else {
                          (s as any).PanType = 1;
                          (s as any).PanFun = 1;
                          (s as any).PanQuality = 5;
                          (s as any).PanStrength = 120000;
                          (s as any).PanThinness = 2;
                          (s as any).PanPrice = 1250;
                          (s as any).underwear['pair'] = 24;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).PanType = 1;
                            (s as any).PanFun = 1;
                            (s as any).PanQuality = 5;
                            (s as any).PanStrength = 120000;
                            (s as any).PanThinness = 2;
                            (s as any).PanPrice = 1250;
                            (s as any).underwear['pair'] = 25;
                          } else {
                            (s as any).PanType = 1;
                            (s as any).PanFun = 1;
                            (s as any).PanMaterial = 6;
                            (s as any).PanQuality = 6;
                            (s as any).PanStrength = 140000;
                            (s as any).PanThinness = 2;
                            (s as any).PanPrice = 1300;
                            (s as any).underwear['pair'] = 26;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).PanType = 1;
                              (s as any).PanFun = 1;
                              (s as any).PanQuality = 5;
                              (s as any).PanStrength = 120000;
                              (s as any).PanThinness = 2;
                              (s as any).PanPrice = 1250;
                              (s as any).underwear['pair'] = 27;
                            } else {
                              (s as any).PanType = 1;
                              (s as any).PanFun = 1;
                              (s as any).PanMaterial = 6;
                              (s as any).PanQuality = 5;
                              (s as any).PanStrength = 120000;
                              (s as any).PanThinness = 2;
                              (s as any).PanPrice = 1250;
                              (s as any).underwear['pair'] = 28;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).PanType = 1;
                                (s as any).PanFun = 1;
                                (s as any).PanMaterial = 6;
                                (s as any).PanQuality = 5;
                                (s as any).PanStrength = 120000;
                                (s as any).PanThinness = 2;
                                (s as any).PanPrice = 1250;
                                (s as any).underwear['pair'] = 29;
                              } else {
                                (s as any).PanType = 1;
                                (s as any).PanFun = 1;
                                (s as any).PanQuality = 5;
                                (s as any).PanStrength = 120000;
                                (s as any).PanThinness = 2;
                                (s as any).PanPrice = 1250;
                                (s as any).underwear['pair'] = 30;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).PanType = 1;
                                  (s as any).PanFun = 1;
                                  (s as any).PanMaterial = 6;
                                  (s as any).PanQuality = 5;
                                  (s as any).PanStrength = 120000;
                                  (s as any).PanThinness = 2;
                                  (s as any).PanPrice = 1250;
                                  (s as any).underwear['pair'] = 31;
                                } else {
                                  (s as any).PanType = 1;
                                  (s as any).PanFun = 1;
                                  (s as any).PanMaterial = 6;
                                  (s as any).PanQuality = 5;
                                  (s as any).PanStrength = 120000;
                                  (s as any).PanThinness = 2;
                                  (s as any).PanPrice = 1250;
                                  (s as any).underwear['pair'] = 32;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).PanType = 1;
                                    (s as any).PanFun = 1;
                                    (s as any).PanMaterial = 6;
                                    (s as any).PanQuality = 5;
                                    (s as any).PanStrength = 120000;
                                    (s as any).PanThinness = 2;
                                    (s as any).PanPrice = 1250;
                                    (s as any).underwear['pair'] = 33;
                                  } else {
                                    (s as any).PanType = 1;
                                    (s as any).PanFun = 1;
                                    (s as any).PanMaterial = 6;
                                    (s as any).PanQuality = 6;
                                    (s as any).PanStrength = 140000;
                                    (s as any).PanThinness = 3;
                                    (s as any).PanPrice = 1300;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).PanType = 1;
                                      (s as any).PanFun = 1;
                                      (s as any).PanMaterial = 6;
                                      (s as any).PanQuality = 5;
                                      (s as any).PanStrength = 120000;
                                      (s as any).PanThinness = 2;
                                      (s as any).PanPrice = 1250;
                                    } else {
                                      (s as any).PanType = 1;
                                      (s as any).PanFun = 1;
                                      (s as any).PanMaterial = 6;
                                      (s as any).PanQuality = 5;
                                      (s as any).PanStrength = 120000;
                                      (s as any).PanThinness = 4;
                                      (s as any).PanPrice = 1250;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).PanType = 1;
                                        (s as any).PanFun = 1;
                                        (s as any).PanMaterial = 6;
                                        (s as any).PanQuality = 5;
                                        (s as any).PanStrength = 120000;
                                        (s as any).PanThinness = 4;
                                        (s as any).PanPrice = 1250;
                                      } else {
                                        (s as any).PanType = 1;
                                        (s as any).PanFun = 1;
                                        (s as any).PanMaterial = 6;
                                        (s as any).PanQuality = 5;
                                        (s as any).PanStrength = 120000;
                                        (s as any).PanThinness = 2;
                                        (s as any).PanPrice = 1250;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).PanType = 1;
                                          (s as any).PanFun = 1;
                                          (s as any).PanMaterial = 6;
                                          (s as any).PanCoverFront = 2;
                                          (s as any).PanCoverBack = 2;
                                          (s as any).PanQuality = 6;
                                          (s as any).PanStrength = 140000;
                                          (s as any).PanThinness = 5;
                                          (s as any).PanPrice = 1300;
                                        } else {
                                          (s as any).PanType = 1;
                                          (s as any).PanFun = 1;
                                          (s as any).PanMaterial = 6;
                                          (s as any).PanQuality = 5;
                                          (s as any).PanStrength = 120000;
                                          (s as any).PanThinness = 2;
                                          (s as any).PanPrice = 1250;
                                          if (((s as any).ARGS ?? 0)[0] === 41) {
                                            (s as any).PanType = 1;
                                            (s as any).PanFun = 1;
                                            (s as any).PanMaterial = 6;
                                            (s as any).PanQuality = 6;
                                            (s as any).PanStrength = 140000;
                                            (s as any).PanThinness = 3;
                                            (s as any).PanPrice = 1300;
                                          } else {
                                            (s as any).PanType = 1;
                                            (s as any).PanFun = 1;
                                            (s as any).PanMaterial = 6;
                                            (s as any).PanQuality = 5;
                                            (s as any).PanStrength = 120000;
                                            (s as any).PanThinness = 2;
                                            (s as any).PanPrice = 1250;
                                            if (((s as any).ARGS ?? 0)[0] === 43) {
                                              (s as any).PanType = 1;
                                              (s as any).PanFun = 1;
                                              (s as any).PanMaterial = 6;
                                              (s as any).PanQuality = 6;
                                              (s as any).PanStrength = 140000;
                                              (s as any).PanThinness = 5;
                                              (s as any).PanPrice = 1300;
                                            } else {
                                              (s as any).PanType = 1;
                                              (s as any).PanFun = 1;
                                              (s as any).PanQuality = 5;
                                              (s as any).PanStrength = 120000;
                                              (s as any).PanThinness = 2;
                                              (s as any).PanPrice = 1250;
                                              if (((s as any).ARGS ?? 0)[0] === 45) {
                                                (s as any).PanType = 1;
                                                (s as any).PanFun = 1;
                                                (s as any).PanMaterial = 6;
                                                (s as any).PanQuality = 5;
                                                (s as any).PanStrength = 120000;
                                                (s as any).PanThinness = 2;
                                                (s as any).PanPrice = 1250;
                                              } else {
                                                (s as any).PanType = 1;
                                                (s as any).PanFun = 1;
                                                (s as any).PanQuality = 5;
                                                (s as any).PanStrength = 120000;
                                                (s as any).PanThinness = 2;
                                                (s as any).PanPrice = 1250;
                                                if (((s as any).ARGS ?? 0)[0] === 47) {
                                                  (s as any).PanType = 1;
                                                  (s as any).PanFun = 1;
                                                  (s as any).PanMaterial = 6;
                                                  (s as any).PanQuality = 6;
                                                  (s as any).PanStrength = 140000;
                                                  (s as any).PanThinness = 2;
                                                  (s as any).PanPrice = 1300;
                                                } else {
                                                  (s as any).PanType = 1;
                                                  (s as any).PanFun = 1;
                                                  (s as any).PanMaterial = 6;
                                                  (s as any).PanQuality = 5;
                                                  (s as any).PanStrength = 120000;
                                                  (s as any).PanThinness = 5;
                                                  (s as any).PanPrice = 1250;
                                                  if (((s as any).ARGS ?? 0)[0] === 49) {
                                                    (s as any).PanType = 1;
                                                    (s as any).PanFun = 1;
                                                    (s as any).PanMaterial = 6;
                                                    (s as any).PanQuality = 6;
                                                    (s as any).PanStrength = 140000;
                                                    (s as any).PanThinness = 2;
                                                    (s as any).PanPrice = 1300;
                                                  } else {
                                                    (s as any).PanType = 1;
                                                    (s as any).PanFun = 1;
                                                    (s as any).PanMaterial = 6;
                                                    (s as any).PanQuality = 5;
                                                    (s as any).PanStrength = 120000;
                                                    (s as any).PanThinness = 2;
                                                    (s as any).PanPrice = 1250;
                                                    if (((s as any).ARGS ?? 0)[0] === 51) {
                                                      (s as any).PanType = 1;
                                                      (s as any).PanFun = 1;
                                                      (s as any).PanMaterial = 6;
                                                      (s as any).PanQuality = 6;
                                                      (s as any).PanStrength = 140000;
                                                      (s as any).PanThinness = 2;
                                                      (s as any).PanPrice = 1300;
                                                    } else {
                                                      (s as any).PanType = 1;
                                                      (s as any).PanFun = 1;
                                                      (s as any).PanMaterial = 6;
                                                      (s as any).PanQuality = 5;
                                                      (s as any).PanStrength = 120000;
                                                      (s as any).PanThinness = 6;
                                                      (s as any).PanPrice = 1250;
                                                      if (((s as any).ARGS ?? 0)[0] === 53) {
                                                        (s as any).PanType = 1;
                                                        (s as any).PanFun = 1;
                                                        (s as any).PanMaterial = 6;
                                                        (s as any).PanQuality = 6;
                                                        (s as any).PanStrength = 140000;
                                                        (s as any).PanThinness = 5;
                                                        (s as any).PanPrice = 1300;
                                                      } else {
                                                        (s as any).PanType = 1;
                                                        (s as any).PanFun = 1;
                                                        (s as any).PanMaterial = 6;
                                                        (s as any).PanQuality = 5;
                                                        (s as any).PanStrength = 120000;
                                                        (s as any).PanThinness = 5;
                                                        (s as any).PanPrice = 1250;
                                                        if (((s as any).ARGS ?? 0)[0] === 55) {
                                                          (s as any).PanType = 1;
                                                          (s as any).PanFun = 1;
                                                          (s as any).PanMaterial = 6;
                                                          (s as any).PanQuality = 6;
                                                          (s as any).PanStrength = 140000;
                                                          (s as any).PanThinness = 2;
                                                          (s as any).PanPrice = 1300;
                                                        } else {
                                                          (s as any).PanType = 1;
                                                          (s as any).PanFun = 1;
                                                          (s as any).PanMaterial = 6;
                                                          (s as any).PanQuality = 5;
                                                          (s as any).PanStrength = 120000;
                                                          (s as any).PanCoverFront = 4;
                                                          (s as any).PanThinness = 5;
                                                          (s as any).PanPrice = 1250;
                                                          if (((s as any).ARGS ?? 0)[0] === 57) {
                                                            (s as any).PanType = 1;
                                                            (s as any).PanFun = 1;
                                                            (s as any).PanMaterial = 6;
                                                            (s as any).PanQuality = 5;
                                                            (s as any).PanStrength = 120000;
                                                            (s as any).PanThinness = 4;
                                                            (s as any).PanPrice = 1250;
                                                          } else {
                                                            (s as any).PanType = 1;
                                                            (s as any).PanFun = 1;
                                                            (s as any).PanMaterial = 6;
                                                            (s as any).PanQuality = 5;
                                                            (s as any).PanStrength = 120000;
                                                            (s as any).PanThinness = 4;
                                                            (s as any).PanPrice = 1250;
                                                            if (((s as any).ARGS ?? 0)[0] === 59) {
                                                              (s as any).PanType = 1;
                                                              (s as any).PanFun = 1;
                                                              (s as any).PanQuality = 5;
                                                              (s as any).PanStrength = 120000;
                                                              (s as any).PanThinness = 2;
                                                              (s as any).PanPrice = 1250;
                                                            } else {
                                                              (s as any).PanType = 1;
                                                              (s as any).PanFun = 1;
                                                              (s as any).PanMaterial = 6;
                                                              (s as any).PanQuality = 6;
                                                              (s as any).PanStrength = 140000;
                                                              (s as any).PanThinness = 2;
                                                              (s as any).PanPrice = 1300;
                                                              if (((s as any).ARGS ?? 0)[0] === 61) {
                                                                (s as any).PanType = 1;
                                                                (s as any).PanFun = 1;
                                                                (s as any).PanMaterial = 6;
                                                                (s as any).PanQuality = 5;
                                                                (s as any).PanStrength = 120000;
                                                                (s as any).PanCoverFront = 4;
                                                                (s as any).PanThinness = 2;
                                                                (s as any).PanPrice = 1250;
                                                              } else {
                                                                (s as any).PanType = 1;
                                                                (s as any).PanFun = 1;
                                                                (s as any).PanMaterial = 6;
                                                                (s as any).PanQuality = 6;
                                                                (s as any).PanStrength = 140000;
                                                                (s as any).PanThinness = 3;
                                                                (s as any).PanPrice = 1300;
                                                                if (((s as any).ARGS ?? 0)[0] === 63) {
                                                                  (s as any).PanType = 1;
                                                                  (s as any).PanFun = 1;
                                                                  (s as any).PanMaterial = 6;
                                                                  (s as any).PanQuality = 6;
                                                                  (s as any).PanStrength = 140000;
                                                                  (s as any).PanThinness = 3;
                                                                  (s as any).PanPrice = 1300;
                                                                } else {
                                                                  (s as any).PanType = 1;
                                                                  (s as any).PanFun = 1;
                                                                  (s as any).PanMaterial = 3;
                                                                  (s as any).PanQuality = 6;
                                                                  (s as any).PanStrength = 140000;
                                                                  (s as any).PanThinness = 5;
                                                                  (s as any).PanPrice = 1300;
                                                                  if (((s as any).ARGS ?? 0)[0] === 65) {
                                                                    (s as any).PanType = 2;
                                                                    (s as any).PanFun = 1;
                                                                    (s as any).PanMaterial = 3;
                                                                    (s as any).PanQuality = 5;
                                                                    (s as any).PanStrength = 120000;
                                                                    (s as any).PanThinness = 5;
                                                                    (s as any).PanPrice = 1250;
                                                                  } else {
                                                                    (s as any).PanType = 1;
                                                                    (s as any).PanFun = 1;
                                                                    (s as any).PanMaterial = 3;
                                                                    (s as any).PanQuality = 6;
                                                                    (s as any).PanStrength = 140000;
                                                                    (s as any).PanThinness = 5;
                                                                    (s as any).PanPrice = 1300;
                                                                    if (((s as any).ARGS ?? 0)[0] === 67) {
                                                                      (s as any).PanType = 1;
                                                                      (s as any).PanFun = 1;
                                                                      (s as any).PanQuality = 5;
                                                                      (s as any).PanStrength = 120000;
                                                                      (s as any).PanThinness = 2;
                                                                      (s as any).PanPrice = 1250;
                                                                    } else {
                                                                      (s as any).PanType = 1;
                                                                      (s as any).PanFun = 1;
                                                                      (s as any).PanMaterial = 6;
                                                                      (s as any).PanQuality = 5;
                                                                      (s as any).PanStrength = 120000;
                                                                      (s as any).PanThinness = 4;
                                                                      (s as any).PanPrice = 1250;
                                                                      if (((s as any).ARGS ?? 0)[0] === 69) {
                                                                        (s as any).PanType = 1;
                                                                        (s as any).PanFun = 1;
                                                                        (s as any).PanMaterial = 6;
                                                                        (s as any).PanQuality = 5;
                                                                        (s as any).PanStrength = 120000;
                                                                        (s as any).PanThinness = 4;
                                                                        (s as any).PanPrice = 1250;
                                                                      } else {
                                                                        (s as any).PanType = 1;
                                                                        (s as any).PanFun = 1;
                                                                        (s as any).PanMaterial = 6;
                                                                        (s as any).PanQuality = 5;
                                                                        (s as any).PanStrength = 120000;
                                                                        (s as any).PanThinness = 3;
                                                                        (s as any).PanPrice = 1250;
                                                                        if (((s as any).ARGS ?? 0)[0] === 71) {
                                                                          (s as any).PanType = 1;
                                                                          (s as any).PanFun = 1;
                                                                          (s as any).PanMaterial = 6;
                                                                          (s as any).PanQuality = 6;
                                                                          (s as any).PanStrength = 140000;
                                                                          (s as any).PanThinness = 2;
                                                                          (s as any).PanPrice = 1300;
                                                                        } else {
                                                                          (s as any).PanType = 1;
                                                                          (s as any).PanFun = 1;
                                                                          (s as any).PanMaterial = 6;
                                                                          (s as any).PanQuality = 5;
                                                                          (s as any).PanStrength = 120000;
                                                                          (s as any).PanThinness = 2;
                                                                          (s as any).PanPrice = 1250;
                                                                          if (((s as any).ARGS ?? 0)[0] === 73) {
                                                                            (s as any).PanType = 1;
                                                                            (s as any).PanFun = 1;
                                                                            (s as any).PanMaterial = 6;
                                                                            (s as any).PanQuality = 5;
                                                                            (s as any).PanStrength = 120000;
                                                                            (s as any).PanThinness = 4;
                                                                            (s as any).PanPrice = 1250;
                                                                          } else {
                                                                            (s as any).PanType = 1;
                                                                            (s as any).PanFun = 1;
                                                                            (s as any).PanMaterial = 6;
                                                                            (s as any).PanQuality = 5;
                                                                            (s as any).PanStrength = 120000;
                                                                            (s as any).PanThinness = 2;
                                                                            (s as any).PanPrice = 1250;
                                                                            if (((s as any).ARGS ?? 0)[0] === 75) {
                                                                              (s as any).PanType = 1;
                                                                              (s as any).PanFun = 1;
                                                                              (s as any).PanMaterial = 6;
                                                                              (s as any).PanQuality = 6;
                                                                              (s as any).PanStrength = 140000;
                                                                              (s as any).PanThinness = 4;
                                                                              (s as any).PanPrice = 1300;
                                                                            } else {
                                                                              (s as any).PanType = 1;
                                                                              (s as any).PanFun = 1;
                                                                              (s as any).PanMaterial = 6;
                                                                              (s as any).PanQuality = 5;
                                                                              (s as any).PanStrength = 120000;
                                                                              (s as any).PanThinness = 2;
                                                                              (s as any).PanPrice = 1250;
                                                                              if (((s as any).ARGS ?? 0)[0] === 77) {
                                                                                (s as any).PanType = 1;
                                                                                (s as any).PanFun = 1;
                                                                                (s as any).PanMaterial = 6;
                                                                                (s as any).PanQuality = 6;
                                                                                (s as any).PanStrength = 140000;
                                                                                (s as any).PanThinness = 4;
                                                                                (s as any).PanPrice = 1300;
                                                                              } else {
                                                                                (s as any).PanType = 1;
                                                                                (s as any).PanFun = 1;
                                                                                (s as any).PanQuality = 6;
                                                                                (s as any).PanStrength = 140000;
                                                                                (s as any).PanThinness = 2;
                                                                                (s as any).PanPrice = 1300;
                                                                                if (((s as any).ARGS ?? 0)[0] === 79) {
                                                                                  (s as any).PanType = 1;
                                                                                  (s as any).PanFun = 1;
                                                                                  (s as any).PanMaterial = 6;
                                                                                  (s as any).PanQuality = 5;
                                                                                  (s as any).PanStrength = 120000;
                                                                                  (s as any).PanThinness = 2;
                                                                                  (s as any).PanPrice = 1250;
                                                                                } else {
                                                                                  (s as any).PanType = 1;
                                                                                  (s as any).PanFun = 1;
                                                                                  (s as any).PanMaterial = 6;
                                                                                  (s as any).PanQuality = 5;
                                                                                  (s as any).PanStrength = 120000;
                                                                                  (s as any).PanThinness = 3;
                                                                                  (s as any).PanPrice = 1250;
                                                                                  if (((s as any).ARGS ?? 0)[0] === 81) {
                                                                                    (s as any).PanType = 1;
                                                                                    (s as any).PanFun = 1;
                                                                                    (s as any).PanMaterial = 6;
                                                                                    (s as any).PanQuality = 5;
                                                                                    (s as any).PanStrength = 120000;
                                                                                    (s as any).PanThinness = 2;
                                                                                    (s as any).PanPrice = 1250;
                                                                                  } else {
                                                                                    (s as any).PanType = 2;
                                                                                    (s as any).PanFun = 1;
                                                                                    (s as any).PanMaterial = 6;
                                                                                    (s as any).PanQuality = 6;
                                                                                    (s as any).PanStrength = 140000;
                                                                                    (s as any).PanThinness = 2;
                                                                                    (s as any).PanPrice = 1300;
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

export const _attributes_lusso_panties: LocationDef = {
  name: '_attributes_lusso_panties',
  region: 'other',
  enter: enter,
};
