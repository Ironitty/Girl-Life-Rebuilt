// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: ShoPrice ~ 7500 * (20 + ShoQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 5:  9400
  // TODO-QSP: 6:  9800
  // TODO-QSP: 7: 10200
  // TODO-QSP: ShoQuality ranges from 5 to 7 but please avoid adding too many 7s
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).ShoStyle = 0;
    (s as any).ShoQuality = 6;
    (s as any).ShoStrength = 450000;
    (s as any).ShoCut = 1;
    (s as any).ShoHeels = 1;
    (s as any).ShoBimbo = 1;
    (s as any).ShoPrice = 9800;
  } else {
    (s as any).ShoStyle = 0;
    (s as any).ShoQuality = 6;
    (s as any).ShoStrength = 450000;
    (s as any).ShoCut = 1;
    (s as any).ShoHeels = 1;
    (s as any).ShoBimbo = 1;
    (s as any).ShoPrice = 9800;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).ShoStyle = 0;
      (s as any).ShoQuality = 6;
      (s as any).ShoStrength = 450000;
      (s as any).ShoCut = 1;
      (s as any).ShoHeels = 1;
      (s as any).ShoPrice = 9800;
    } else {
      (s as any).ShoStyle = 0;
      (s as any).ShoQuality = 6;
      (s as any).ShoStrength = 450000;
      (s as any).ShoCut = 1;
      (s as any).ShoHeels = 1;
      (s as any).ShoBimbo = 1;
      (s as any).ShoPrice = 9800;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).ShoStyle = 0;
        (s as any).ShoQuality = 6;
        (s as any).ShoStrength = 450000;
        (s as any).ShoCut = 1;
        (s as any).ShoHeels = 1;
        (s as any).ShoBimbo = 1;
        (s as any).ShoPrice = 9800;
      } else {
        (s as any).ShoStyle = 0;
        (s as any).ShoQuality = 6;
        (s as any).ShoStrength = 450000;
        (s as any).ShoCut = 1;
        (s as any).ShoHeels = 1;
        (s as any).ShoBimbo = 1;
        (s as any).ShoPrice = 9800;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).ShoStyle = 0;
          (s as any).ShoQuality = 5;
          (s as any).ShoStrength = 400000;
          (s as any).ShoCut = 1;
          (s as any).ShoHeels = 2;
          (s as any).ShoPrice = 9400;
        } else {
          (s as any).ShoStyle = 0;
          (s as any).ShoQuality = 6;
          (s as any).ShoStrength = 450000;
          (s as any).ShoCut = 1;
          (s as any).ShoHeels = 4;
          (s as any).ShoBimbo = 1;
          (s as any).ShoPrice = 9800;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).ShoStyle = 0;
            (s as any).ShoQuality = 6;
            (s as any).ShoStrength = 450000;
            (s as any).ShoCut = 1;
            (s as any).ShoHeels = 4;
            (s as any).ShoBimbo = 1;
            (s as any).ShoPrice = 9800;
          } else {
            (s as any).ShoStyle = 0;
            (s as any).ShoQuality = 6;
            (s as any).ShoStrength = 450000;
            (s as any).ShoCut = 1;
            (s as any).ShoHeels = 4;
            (s as any).ShoBimbo = 1;
            (s as any).ShoPrice = 9800;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).ShoStyle = 0;
              (s as any).ShoQuality = 6;
              (s as any).ShoStrength = 450000;
              (s as any).ShoCut = 1;
              (s as any).ShoHeels = 2;
              (s as any).ShoPrice = 9800;
            } else {
              (s as any).ShoStyle = 0;
              (s as any).ShoQuality = 6;
              (s as any).ShoStrength = 450000;
              (s as any).ShoCut = 1;
              (s as any).ShoHeels = 3;
              (s as any).ShoPrice = 9800;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).ShoStyle = 0;
                (s as any).ShoQuality = 6;
                (s as any).ShoStrength = 450000;
                (s as any).ShoCut = 1;
                (s as any).ShoHeels = 3;
                (s as any).ShoPrice = 9800;
              } else {
                (s as any).ShoStyle = 0;
                (s as any).ShoQuality = 6;
                (s as any).ShoStrength = 450000;
                (s as any).ShoCut = 1;
                (s as any).ShoHeels = 4;
                (s as any).ShoPrice = 9800;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).ShoStyle = 0;
                  (s as any).ShoQuality = 6;
                  (s as any).ShoStrength = 450000;
                  (s as any).ShoCut = 1;
                  (s as any).ShoHeels = 4;
                  (s as any).ShoBimbo = 1;
                  (s as any).ShoPrice = 9800;
                } else {
                  (s as any).ShoStyle = 0;
                  (s as any).ShoQuality = 6;
                  (s as any).ShoStrength = 450000;
                  (s as any).ShoCut = 1;
                  (s as any).ShoHeels = 4;
                  (s as any).ShoPrice = 9800;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).ShoStyle = 0;
                    (s as any).ShoQuality = 6;
                    (s as any).ShoStrength = 450000;
                    (s as any).ShoCut = 2;
                    (s as any).ShoHeels = 2;
                    (s as any).ShoPrice = 9800;
                  } else {
                    (s as any).ShoStyle = 0;
                    (s as any).ShoQuality = 6;
                    (s as any).ShoStrength = 450000;
                    (s as any).ShoCut = 2;
                    (s as any).ShoHeels = 2;
                    (s as any).ShoPrice = 9800;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).ShoStyle = 0;
                      (s as any).ShoQuality = 6;
                      (s as any).ShoStrength = 450000;
                      (s as any).ShoCut = 2;
                      (s as any).ShoHeels = 3;
                      (s as any).ShoPrice = 9800;
                    } else {
                      (s as any).ShoStyle = 0;
                      (s as any).ShoQuality = 6;
                      (s as any).ShoStrength = 450000;
                      (s as any).ShoCut = 2;
                      (s as any).ShoHeels = 3;
                      (s as any).ShoPrice = 9800;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).ShoStyle = 0;
                        (s as any).ShoQuality = 6;
                        (s as any).ShoStrength = 450000;
                        (s as any).ShoCut = 2;
                        (s as any).ShoHeels = 3;
                        (s as any).ShoPrice = 9800;
                      } else {
                        (s as any).ShoStyle = 0;
                        (s as any).ShoQuality = 6;
                        (s as any).ShoStrength = 450000;
                        (s as any).ShoCut = 3;
                        (s as any).ShoHeels = 2;
                        (s as any).ShoPrice = 9800;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).ShoStyle = 0;
                          (s as any).ShoQuality = 6;
                          (s as any).ShoStrength = 450000;
                          (s as any).ShoCut = 3;
                          (s as any).ShoHeels = 2;
                          (s as any).ShoPrice = 9800;
                        } else {
                          (s as any).ShoStyle = 0;
                          (s as any).ShoQuality = 7;
                          (s as any).ShoStrength = 500000;
                          (s as any).ShoCut = 3;
                          (s as any).ShoHeels = 3;
                          (s as any).ShoPrice = 10200;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).ShoStyle = 0;
                            (s as any).ShoQuality = 6;
                            (s as any).ShoStrength = 450000;
                            (s as any).ShoCut = 2;
                            (s as any).ShoHeels = 1;
                            (s as any).ShoBimbo = 1;
                            (s as any).ShoPrice = 9800;
                          } else {
                            (s as any).ShoStyle = 0;
                            (s as any).ShoQuality = 6;
                            (s as any).ShoStrength = 450000;
                            (s as any).ShoCut = 2;
                            (s as any).ShoHeels = 1;
                            (s as any).ShoPrice = 9800;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).ShoStyle = 0;
                              (s as any).ShoQuality = 6;
                              (s as any).ShoStrength = 450000;
                              (s as any).ShoCut = 2;
                              (s as any).ShoHeels = 1;
                              (s as any).ShoPrice = 9800;
                            } else {
                              (s as any).ShoStyle = 0;
                              (s as any).ShoQuality = 6;
                              (s as any).ShoStrength = 450000;
                              (s as any).ShoCut = 1;
                              (s as any).ShoHeels = 1;
                              (s as any).ShoPrice = 9800;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).ShoStyle = 0;
                                (s as any).ShoQuality = 6;
                                (s as any).ShoStrength = 450000;
                                (s as any).ShoCut = 1;
                                (s as any).ShoHeels = 1;
                                (s as any).ShoBimbo = 1;
                                (s as any).ShoPrice = 9800;
                              } else {
                                (s as any).ShoStyle = 0;
                                (s as any).ShoQuality = 6;
                                (s as any).ShoStrength = 450000;
                                (s as any).ShoCut = 1;
                                (s as any).ShoHeels = 3;
                                (s as any).ShoPrice = 9800;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).ShoStyle = 0;
                                  (s as any).ShoQuality = 6;
                                  (s as any).ShoStrength = 450000;
                                  (s as any).ShoCut = 1;
                                  (s as any).ShoHeels = 2;
                                  (s as any).ShoPrice = 9800;
                                } else {
                                  (s as any).ShoStyle = 0;
                                  (s as any).ShoQuality = 6;
                                  (s as any).ShoStrength = 450000;
                                  (s as any).ShoCut = 1;
                                  (s as any).ShoHeels = 2;
                                  (s as any).ShoPrice = 9800;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).ShoStyle = 0;
                                    (s as any).ShoQuality = 6;
                                    (s as any).ShoStrength = 450000;
                                    (s as any).ShoCut = 1;
                                    (s as any).ShoHeels = 2;
                                    (s as any).ShoPrice = 9800;
                                  } else {
                                    (s as any).ShoStyle = 0;
                                    (s as any).ShoQuality = 6;
                                    (s as any).ShoStrength = 450000;
                                    (s as any).ShoCut = 1;
                                    (s as any).ShoHeels = 2;
                                    (s as any).ShoPrice = 9800;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).ShoStyle = 0;
                                      (s as any).ShoQuality = 6;
                                      (s as any).ShoStrength = 450000;
                                      (s as any).ShoCut = 1;
                                      (s as any).ShoHeels = 2;
                                      (s as any).ShoPrice = 9800;
                                    } else {
                                      (s as any).ShoStyle = 0;
                                      (s as any).ShoQuality = 6;
                                      (s as any).ShoStrength = 450000;
                                      (s as any).ShoCut = 1;
                                      (s as any).ShoHeels = 3;
                                      (s as any).ShoPrice = 9800;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).ShoStyle = 0;
                                        (s as any).ShoQuality = 6;
                                        (s as any).ShoStrength = 450000;
                                        (s as any).ShoCut = 1;
                                        (s as any).ShoHeels = 3;
                                        (s as any).ShoPrice = 9800;
                                      } else {
                                        (s as any).ShoStyle = 0;
                                        (s as any).ShoQuality = 6;
                                        (s as any).ShoStrength = 450000;
                                        (s as any).ShoCut = 1;
                                        (s as any).ShoHeels = 3;
                                        (s as any).ShoBimbo = 1;
                                        (s as any).ShoPrice = 9800;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).ShoStyle = 0;
                                          (s as any).ShoQuality = 6;
                                          (s as any).ShoStrength = 450000;
                                          (s as any).ShoCut = 1;
                                          (s as any).ShoHeels = 3;
                                          (s as any).ShoPrice = 9800;
                                        } else {
                                          (s as any).ShoStyle = 0;
                                          (s as any).ShoQuality = 6;
                                          (s as any).ShoStrength = 450000;
                                          (s as any).ShoCut = 1;
                                          (s as any).ShoHeels = 3;
                                          (s as any).ShoPrice = 9800;
                                          if (((s as any).ARGS ?? 0)[0] === 41) {
                                            (s as any).ShoStyle = 0;
                                            (s as any).ShoQuality = 6;
                                            (s as any).ShoStrength = 450000;
                                            (s as any).ShoCut = 1;
                                            (s as any).ShoHeels = 3;
                                            (s as any).ShoPrice = 9800;
                                          } else {
                                            (s as any).ShoStyle = 0;
                                            (s as any).ShoQuality = 6;
                                            (s as any).ShoStrength = 450000;
                                            (s as any).ShoCut = 1;
                                            (s as any).ShoHeels = 4;
                                            (s as any).ShoBimbo = 1;
                                            (s as any).ShoPrice = 9800;
                                            if (((s as any).ARGS ?? 0)[0] === 43) {
                                              (s as any).ShoStyle = 0;
                                              (s as any).ShoQuality = 6;
                                              (s as any).ShoStrength = 450000;
                                              (s as any).ShoCut = 1;
                                              (s as any).ShoHeels = 4;
                                              (s as any).ShoPrice = 9800;
                                            } else {
                                              (s as any).ShoStyle = 0;
                                              (s as any).ShoQuality = 6;
                                              (s as any).ShoStrength = 450000;
                                              (s as any).ShoCut = 1;
                                              (s as any).ShoHeels = 4;
                                              (s as any).ShoPrice = 9800;
                                              if (((s as any).ARGS ?? 0)[0] === 45) {
                                                (s as any).ShoStyle = 0;
                                                (s as any).ShoQuality = 7;
                                                (s as any).ShoStrength = 500000;
                                                (s as any).ShoCut = 1;
                                                (s as any).ShoHeels = 4;
                                                (s as any).ShoBimbo = 1;
                                                (s as any).ShoPrice = 10200;
                                              } else {
                                                (s as any).ShoStyle = 0;
                                                (s as any).ShoQuality = 7;
                                                (s as any).ShoStrength = 500000;
                                                (s as any).ShoCut = 1;
                                                (s as any).ShoHeels = 4;
                                                (s as any).ShoPrice = 10200;
                                                if (((s as any).ARGS ?? 0)[0] === 47) {
                                                  (s as any).ShoStyle = 0;
                                                  (s as any).ShoQuality = 6;
                                                  (s as any).ShoStrength = 450000;
                                                  (s as any).ShoCut = 1;
                                                  (s as any).ShoHeels = 4;
                                                  (s as any).ShoPrice = 9800;
                                                } else {
                                                  (s as any).ShoStyle = 0;
                                                  (s as any).ShoQuality = 6;
                                                  (s as any).ShoStrength = 450000;
                                                  (s as any).ShoCut = 1;
                                                  (s as any).ShoHeels = 4;
                                                  (s as any).ShoPrice = 9800;
                                                  if (((s as any).ARGS ?? 0)[0] === 49) {
                                                    (s as any).ShoStyle = 0;
                                                    (s as any).ShoQuality = 6;
                                                    (s as any).ShoStrength = 450000;
                                                    (s as any).ShoCut = 1;
                                                    (s as any).ShoHeels = 4;
                                                    (s as any).ShoBimbo = 1;
                                                    (s as any).ShoPrice = 9800;
                                                  } else {
                                                    (s as any).ShoStyle = 0;
                                                    (s as any).ShoQuality = 6;
                                                    (s as any).ShoStrength = 450000;
                                                    (s as any).ShoCut = 1;
                                                    (s as any).ShoHeels = 4;
                                                    (s as any).ShoPrice = 9800;
                                                    if (((s as any).ARGS ?? 0)[0] === 51) {
                                                      (s as any).ShoStyle = 0;
                                                      (s as any).ShoQuality = 6;
                                                      (s as any).ShoStrength = 450000;
                                                      (s as any).ShoCut = 1;
                                                      (s as any).ShoHeels = 4;
                                                      (s as any).ShoPrice = 9800;
                                                    } else {
                                                      (s as any).ShoStyle = 0;
                                                      (s as any).ShoQuality = 6;
                                                      (s as any).ShoStrength = 450000;
                                                      (s as any).ShoCut = 3;
                                                      (s as any).ShoHeels = 4;
                                                      (s as any).ShoBimbo = 1;
                                                      (s as any).ShoPrice = 9800;
                                                      if (((s as any).ARGS ?? 0)[0] === 53) {
                                                        (s as any).ShoStyle = 0;
                                                        (s as any).ShoQuality = 6;
                                                        (s as any).ShoStrength = 450000;
                                                        (s as any).ShoCut = 1;
                                                        (s as any).ShoHeels = 4;
                                                        (s as any).ShoPrice = 9800;
                                                      } else {
                                                        (s as any).ShoStyle = 0;
                                                        (s as any).ShoQuality = 6;
                                                        (s as any).ShoStrength = 450000;
                                                        (s as any).ShoCut = 1;
                                                        (s as any).ShoHeels = 4;
                                                        (s as any).ShoBimbo = 1;
                                                        (s as any).ShoPrice = 9800;
                                                        if (((s as any).ARGS ?? 0)[0] === 55) {
                                                          (s as any).ShoStyle = 0;
                                                          (s as any).ShoQuality = 6;
                                                          (s as any).ShoStrength = 450000;
                                                          (s as any).ShoCut = 1;
                                                          (s as any).ShoHeels = 4;
                                                          (s as any).ShoBimbo = 1;
                                                          (s as any).ShoPrice = 9800;
                                                        } else {
                                                          (s as any).ShoStyle = 0;
                                                          (s as any).ShoQuality = 6;
                                                          (s as any).ShoStrength = 450000;
                                                          (s as any).ShoCut = 1;
                                                          (s as any).ShoHeels = 4;
                                                          (s as any).ShoBimbo = 1;
                                                          (s as any).ShoPrice = 9800;
                                                          if (((s as any).ARGS ?? 0)[0] === 57) {
                                                            (s as any).ShoStyle = 0;
                                                            (s as any).ShoQuality = 6;
                                                            (s as any).ShoStrength = 450000;
                                                            (s as any).ShoCut = 2;
                                                            (s as any).ShoHeels = 5;
                                                            (s as any).ShoPrice = 9800;
                                                          } else {
                                                            (s as any).ShoStyle = 0;
                                                            (s as any).ShoQuality = 6;
                                                            (s as any).ShoStrength = 450000;
                                                            (s as any).ShoCut = 2;
                                                            (s as any).ShoHeels = 5;
                                                            (s as any).ShoPrice = 9800;
                                                            if (((s as any).ARGS ?? 0)[0] === 59) {
                                                              (s as any).ShoStyle = 0;
                                                              (s as any).ShoQuality = 6;
                                                              (s as any).ShoStrength = 450000;
                                                              (s as any).ShoCut = 2;
                                                              (s as any).ShoHeels = 5;
                                                              (s as any).ShoPrice = 9800;
                                                            } else {
                                                              (s as any).ShoStyle = 0;
                                                              (s as any).ShoQuality = 5;
                                                              (s as any).ShoStrength = 400000;
                                                              (s as any).ShoCut = 1;
                                                              (s as any).ShoHeels = 4;
                                                              (s as any).ShoPrice = 9400;
                                                              if (((s as any).ARGS ?? 0)[0] === 61) {
                                                                (s as any).ShoStyle = 0;
                                                                (s as any).ShoQuality = 5;
                                                                (s as any).ShoStrength = 400000;
                                                                (s as any).ShoCut = 1;
                                                                (s as any).ShoHeels = 4;
                                                                (s as any).ShoPrice = 9400;
                                                              } else {
                                                                (s as any).ShoStyle = 0;
                                                                (s as any).ShoQuality = 5;
                                                                (s as any).ShoStrength = 400000;
                                                                (s as any).ShoCut = 1;
                                                                (s as any).ShoHeels = 4;
                                                                (s as any).ShoPrice = 9400;
                                                                if (((s as any).ARGS ?? 0)[0] === 63) {
                                                                  (s as any).ShoStyle = 0;
                                                                  (s as any).ShoQuality = 6;
                                                                  (s as any).ShoStrength = 450000;
                                                                  (s as any).ShoCut = 1;
                                                                  (s as any).ShoHeels = 4;
                                                                  (s as any).ShoPrice = 9800;
                                                                } else {
                                                                  (s as any).ShoStyle = 0;
                                                                  (s as any).ShoQuality = 6;
                                                                  (s as any).ShoStrength = 450000;
                                                                  (s as any).ShoCut = 1;
                                                                  (s as any).ShoHeels = 4;
                                                                  (s as any).ShoPrice = 9800;
                                                                  if (((s as any).ARGS ?? 0)[0] === 65) {
                                                                    (s as any).ShoStyle = 0;
                                                                    (s as any).ShoQuality = 6;
                                                                    (s as any).ShoStrength = 450000;
                                                                    (s as any).ShoCut = 1;
                                                                    (s as any).ShoHeels = 4;
                                                                    (s as any).ShoPrice = 9800;
                                                                  } else {
                                                                    (s as any).ShoStyle = 0;
                                                                    (s as any).ShoQuality = 6;
                                                                    (s as any).ShoStrength = 450000;
                                                                    (s as any).ShoCut = 1;
                                                                    (s as any).ShoHeels = 4;
                                                                    (s as any).ShoPrice = 9800;
                                                                    if (((s as any).ARGS ?? 0)[0] === 67) {
                                                                      (s as any).ShoStyle = 0;
                                                                      (s as any).ShoQuality = 6;
                                                                      (s as any).ShoStrength = 450000;
                                                                      (s as any).ShoCut = 1;
                                                                      (s as any).ShoHeels = 4;
                                                                      (s as any).ShoPrice = 9800;
                                                                    } else {
                                                                      (s as any).ShoStyle = 0;
                                                                      (s as any).ShoQuality = 6;
                                                                      (s as any).ShoStrength = 450000;
                                                                      (s as any).ShoCut = 1;
                                                                      (s as any).ShoHeels = 4;
                                                                      (s as any).ShoPrice = 9800;
                                                                      if (((s as any).ARGS ?? 0)[0] === 69) {
                                                                        (s as any).ShoStyle = 0;
                                                                        (s as any).ShoQuality = 6;
                                                                        (s as any).ShoStrength = 450000;
                                                                        (s as any).ShoCut = 1;
                                                                        (s as any).ShoHeels = 4;
                                                                        (s as any).ShoBimbo = 1;
                                                                        (s as any).ShoPrice = 9800;
                                                                      } else {
                                                                        (s as any).ShoStyle = 0;
                                                                        (s as any).ShoQuality = 6;
                                                                        (s as any).ShoStrength = 450000;
                                                                        (s as any).ShoCut = 2;
                                                                        (s as any).ShoHeels = 3;
                                                                        (s as any).ShoPrice = 9800;
                                                                        if (((s as any).ARGS ?? 0)[0] === 71) {
                                                                          (s as any).ShoStyle = 0;
                                                                          (s as any).ShoQuality = 6;
                                                                          (s as any).ShoStrength = 450000;
                                                                          (s as any).ShoCut = 2;
                                                                          (s as any).ShoHeels = 3;
                                                                          (s as any).ShoPrice = 9800;
                                                                        } else {
                                                                          (s as any).ShoStyle = 0;
                                                                          (s as any).ShoQuality = 6;
                                                                          (s as any).ShoStrength = 450000;
                                                                          (s as any).ShoCut = 2;
                                                                          (s as any).ShoHeels = 3;
                                                                          (s as any).ShoPrice = 9800;
                                                                          if (((s as any).ARGS ?? 0)[0] === 73) {
                                                                            (s as any).ShoStyle = 0;
                                                                            (s as any).ShoQuality = 7;
                                                                            (s as any).ShoStrength = 500000;
                                                                            (s as any).ShoCut = 2;
                                                                            (s as any).ShoHeels = 3;
                                                                            (s as any).ShoPrice = 10200;
                                                                          } else {
                                                                            (s as any).ShoStyle = 0;
                                                                            (s as any).ShoQuality = 6;
                                                                            (s as any).ShoStrength = 450000;
                                                                            (s as any).ShoCut = 4;
                                                                            (s as any).ShoHeels = 3;
                                                                            (s as any).ShoPrice = 9800;
                                                                            if (((s as any).ARGS ?? 0)[0] === 75) {
                                                                              (s as any).ShoStyle = 0;
                                                                              (s as any).ShoQuality = 6;
                                                                              (s as any).ShoStrength = 450000;
                                                                              (s as any).ShoCut = 4;
                                                                              (s as any).ShoHeels = 3;
                                                                              (s as any).ShoPrice = 9800;
                                                                            } else {
                                                                              (s as any).ShoStyle = 0;
                                                                              (s as any).ShoQuality = 7;
                                                                              (s as any).ShoStrength = 500000;
                                                                              (s as any).ShoCut = 2;
                                                                              (s as any).ShoHeels = 4;
                                                                              (s as any).ShoPrice = 10200;
                                                                              if (((s as any).ARGS ?? 0)[0] === 77) {
                                                                                (s as any).ShoStyle = 0;
                                                                                (s as any).ShoQuality = 7;
                                                                                (s as any).ShoStrength = 500000;
                                                                                (s as any).ShoCut = 2;
                                                                                (s as any).ShoHeels = 4;
                                                                                (s as any).ShoPrice = 10200;
                                                                              } else {
                                                                                (s as any).ShoStyle = 0;
                                                                                (s as any).ShoQuality = 7;
                                                                                (s as any).ShoStrength = 500000;
                                                                                (s as any).ShoCut = 2;
                                                                                (s as any).ShoHeels = 4;
                                                                                (s as any).ShoPrice = 10200;
                                                                                if (((s as any).ARGS ?? 0)[0] === 79) {
                                                                                  (s as any).ShoStyle = 0;
                                                                                  (s as any).ShoQuality = 7;
                                                                                  (s as any).ShoStrength = 500000;
                                                                                  (s as any).ShoCut = 2;
                                                                                  (s as any).ShoHeels = 4;
                                                                                  (s as any).ShoPrice = 10200;
                                                                                } else {
                                                                                  (s as any).ShoStyle = 0;
                                                                                  (s as any).ShoQuality = 6;
                                                                                  (s as any).ShoStrength = 450000;
                                                                                  (s as any).ShoCut = 2;
                                                                                  (s as any).ShoHeels = 1;
                                                                                  (s as any).ShoPrice = 9800;
                                                                                  if (((s as any).ARGS ?? 0)[0] === 81) {
                                                                                    (s as any).ShoStyle = 0;
                                                                                    (s as any).ShoQuality = 6;
                                                                                    (s as any).ShoStrength = 450000;
                                                                                    (s as any).ShoCut = 3;
                                                                                    (s as any).ShoHeels = 1;
                                                                                    (s as any).ShoPrice = 9800;
                                                                                  } else {
                                                                                    (s as any).ShoStyle = 0;
                                                                                    (s as any).ShoQuality = 6;
                                                                                    (s as any).ShoStrength = 450000;
                                                                                    (s as any).ShoCut = 3;
                                                                                    (s as any).ShoHeels = 1;
                                                                                    (s as any).ShoPrice = 9800;
                                                                                    if (((s as any).ARGS ?? 0)[0] === 83) {
                                                                                      (s as any).ShoStyle = 0;
                                                                                      (s as any).ShoQuality = 6;
                                                                                      (s as any).ShoStrength = 450000;
                                                                                      (s as any).ShoCut = 2;
                                                                                      (s as any).ShoHeels = 1;
                                                                                      (s as any).ShoPrice = 9800;
                                                                                    } else {
                                                                                      (s as any).ShoStyle = 0;
                                                                                      (s as any).ShoQuality = 6;
                                                                                      (s as any).ShoStrength = 450000;
                                                                                      (s as any).ShoCut = 1;
                                                                                      (s as any).ShoHeels = 1;
                                                                                      (s as any).ShoPrice = 9800;
                                                                                      if (((s as any).ARGS ?? 0)[0] === 85) {
                                                                                        (s as any).ShoStyle = 0;
                                                                                        (s as any).ShoQuality = 6;
                                                                                        (s as any).ShoStrength = 450000;
                                                                                        (s as any).ShoCut = 1;
                                                                                        (s as any).ShoHeels = 1;
                                                                                        (s as any).ShoBimbo = 1;
                                                                                        (s as any).ShoPrice = 9800;
                                                                                      } else {
                                                                                        (s as any).ShoStyle = 0;
                                                                                        (s as any).ShoQuality = 6;
                                                                                        (s as any).ShoStrength = 450000;
                                                                                        (s as any).ShoCut = 1;
                                                                                        (s as any).ShoHeels = 1;
                                                                                        (s as any).ShoBimbo = 1;
                                                                                        (s as any).ShoPrice = 9800;
                                                                                        if (((s as any).ARGS ?? 0)[0] === 87) {
                                                                                          (s as any).ShoStyle = 0;
                                                                                          (s as any).ShoQuality = 6;
                                                                                          (s as any).ShoStrength = 450000;
                                                                                          (s as any).ShoCut = 1;
                                                                                          (s as any).ShoHeels = 1;
                                                                                          (s as any).ShoBimbo = 1;
                                                                                          (s as any).ShoPrice = 9800;
                                                                                        } else {
                                                                                          (s as any).ShoStyle = 0;
                                                                                          (s as any).ShoQuality = 6;
                                                                                          (s as any).ShoStrength = 450000;
                                                                                          (s as any).ShoCut = 1;
                                                                                          (s as any).ShoHeels = 1;
                                                                                          (s as any).ShoBimbo = 1;
                                                                                          (s as any).ShoPrice = 9800;
                                                                                          if (((s as any).ARGS ?? 0)[0] === 89) {
                                                                                            (s as any).ShoStyle = 0;
                                                                                            (s as any).ShoQuality = 6;
                                                                                            (s as any).ShoStrength = 450000;
                                                                                            (s as any).ShoCut = 1;
                                                                                            (s as any).ShoHeels = 1;
                                                                                            (s as any).ShoPrice = 9800;
                                                                                          } else {
                                                                                            (s as any).ShoStyle = 0;
                                                                                            (s as any).ShoQuality = 6;
                                                                                            (s as any).ShoStrength = 450000;
                                                                                            (s as any).ShoCut = 1;
                                                                                            (s as any).ShoHeels = 1;
                                                                                            (s as any).ShoPrice = 9800;
                                                                                            if (((s as any).ARGS ?? 0)[0] === 91) {
                                                                                              (s as any).ShoStyle = 0;
                                                                                              (s as any).ShoQuality = 7;
                                                                                              (s as any).ShoStrength = 500000;
                                                                                              (s as any).ShoCut = 1;
                                                                                              (s as any).ShoHeels = 1;
                                                                                              (s as any).ShoPrice = 10200;
                                                                                            } else {
                                                                                              (s as any).ShoStyle = 0;
                                                                                              (s as any).ShoQuality = 6;
                                                                                              (s as any).ShoStrength = 450000;
                                                                                              (s as any).ShoCut = 1;
                                                                                              (s as any).ShoHeels = 1;
                                                                                              (s as any).ShoPrice = 9800;
                                                                                              if (((s as any).ARGS ?? 0)[0] === 93) {
                                                                                                (s as any).ShoStyle = 0;
                                                                                                (s as any).ShoQuality = 6;
                                                                                                (s as any).ShoStrength = 450000;
                                                                                                (s as any).ShoCut = 1;
                                                                                                (s as any).ShoHeels = 1;
                                                                                                (s as any).ShoBimbo = 1;
                                                                                                (s as any).ShoPrice = 9800;
                                                                                              } else {
                                                                                                (s as any).ShoStyle = 0;
                                                                                                (s as any).ShoQuality = 6;
                                                                                                (s as any).ShoStrength = 450000;
                                                                                                (s as any).ShoCut = 1;
                                                                                                (s as any).ShoHeels = 1;
                                                                                                (s as any).ShoPrice = 9800;
                                                                                                if (((s as any).ARGS ?? 0)[0] === 95) {
                                                                                                  (s as any).ShoStyle = 0;
                                                                                                  (s as any).ShoQuality = 6;
                                                                                                  (s as any).ShoStrength = 450000;
                                                                                                  (s as any).ShoCut = 1;
                                                                                                  (s as any).ShoHeels = 1;
                                                                                                  (s as any).ShoPrice = 9800;
                                                                                                } else {
                                                                                                  (s as any).ShoStyle = 0;
                                                                                                  (s as any).ShoQuality = 6;
                                                                                                  (s as any).ShoStrength = 450000;
                                                                                                  (s as any).ShoCut = 1;
                                                                                                  (s as any).ShoHeels = 1;
                                                                                                  (s as any).ShoPrice = 9800;
                                                                                                  if (((s as any).ARGS ?? 0)[0] === 97) {
                                                                                                    (s as any).ShoStyle = 0;
                                                                                                    (s as any).ShoQuality = 6;
                                                                                                    (s as any).ShoStrength = 450000;
                                                                                                    (s as any).ShoCut = 1;
                                                                                                    (s as any).ShoHeels = 1;
                                                                                                    (s as any).ShoPrice = 9800;
                                                                                                  } else {
                                                                                                    (s as any).ShoStyle = 0;
                                                                                                    (s as any).ShoQuality = 6;
                                                                                                    (s as any).ShoStrength = 450000;
                                                                                                    (s as any).ShoCut = 1;
                                                                                                    (s as any).ShoHeels = 1;
                                                                                                    (s as any).ShoPrice = 9800;
                                                                                                    if (((s as any).ARGS ?? 0)[0] === 99) {
                                                                                                      (s as any).ShoStyle = 0;
                                                                                                      (s as any).ShoQuality = 6;
                                                                                                      (s as any).ShoStrength = 450000;
                                                                                                      (s as any).ShoCut = 1;
                                                                                                      (s as any).ShoHeels = 1;
                                                                                                      (s as any).ShoBimbo = 1;
                                                                                                      (s as any).ShoPrice = 9800;
                                                                                                    } else {
                                                                                                      (s as any).ShoStyle = 0;
                                                                                                      (s as any).ShoQuality = 6;
                                                                                                      (s as any).ShoStrength = 450000;
                                                                                                      (s as any).ShoCut = 1;
                                                                                                      (s as any).ShoHeels = 1;
                                                                                                      (s as any).ShoPrice = 9800;
                                                                                                      if (((s as any).ARGS ?? 0)[0] === 101) {
                                                                                                        (s as any).ShoStyle = 0;
                                                                                                        (s as any).ShoQuality = 6;
                                                                                                        (s as any).ShoStrength = 450000;
                                                                                                        (s as any).ShoCut = 1;
                                                                                                        (s as any).ShoHeels = 2;
                                                                                                        (s as any).ShoPrice = 9800;
                                                                                                      } else {
                                                                                                        (s as any).ShoStyle = 0;
                                                                                                        (s as any).ShoQuality = 6;
                                                                                                        (s as any).ShoStrength = 450000;
                                                                                                        (s as any).ShoCut = 1;
                                                                                                        (s as any).ShoHeels = 3;
                                                                                                        (s as any).ShoPrice = 9800;
                                                                                                        if (((s as any).ARGS ?? 0)[0] === 103) {
                                                                                                          (s as any).ShoStyle = 0;
                                                                                                          (s as any).ShoQuality = 6;
                                                                                                          (s as any).ShoStrength = 450000;
                                                                                                          (s as any).ShoCut = 1;
                                                                                                          (s as any).ShoHeels = 3;
                                                                                                          (s as any).ShoBimbo = 1;
                                                                                                          (s as any).ShoPrice = 9800;
                                                                                                        } else {
                                                                                                          (s as any).ShoStyle = 0;
                                                                                                          (s as any).ShoQuality = 6;
                                                                                                          (s as any).ShoStrength = 450000;
                                                                                                          (s as any).ShoCut = 1;
                                                                                                          (s as any).ShoHeels = 3;
                                                                                                          (s as any).ShoPrice = 9800;
                                                                                                          if (((s as any).ARGS ?? 0)[0] === 105) {
                                                                                                            (s as any).ShoStyle = 0;
                                                                                                            (s as any).ShoQuality = 6;
                                                                                                            (s as any).ShoStrength = 450000;
                                                                                                            (s as any).ShoCut = 1;
                                                                                                            (s as any).ShoHeels = 3;
                                                                                                            (s as any).ShoPrice = 9800;
                                                                                                          } else {
                                                                                                            (s as any).ShoStyle = 0;
                                                                                                            (s as any).ShoQuality = 7;
                                                                                                            (s as any).ShoStrength = 500000;
                                                                                                            (s as any).ShoCut = 1;
                                                                                                            (s as any).ShoHeels = 3;
                                                                                                            (s as any).ShoPrice = 10200;
                                                                                                            if (((s as any).ARGS ?? 0)[0] === 107) {
                                                                                                              (s as any).ShoStyle = 0;
                                                                                                              (s as any).ShoQuality = 6;
                                                                                                              (s as any).ShoStrength = 450000;
                                                                                                              (s as any).ShoCut = 1;
                                                                                                              (s as any).ShoHeels = 3;
                                                                                                              (s as any).ShoPrice = 9800;
                                                                                                            } else {
                                                                                                              (s as any).ShoStyle = 0;
                                                                                                              (s as any).ShoQuality = 5;
                                                                                                              (s as any).ShoStrength = 400000;
                                                                                                              (s as any).ShoCut = 1;
                                                                                                              (s as any).ShoHeels = 3;
                                                                                                              (s as any).ShoBimbo = 1;
                                                                                                              (s as any).ShoPrice = 9400;
                                                                                                              if (((s as any).ARGS ?? 0)[0] === 109) {
                                                                                                                (s as any).ShoStyle = 0;
                                                                                                                (s as any).ShoQuality = 5;
                                                                                                                (s as any).ShoStrength = 400000;
                                                                                                                (s as any).ShoCut = 1;
                                                                                                                (s as any).ShoHeels = 3;
                                                                                                                (s as any).ShoBimbo = 1;
                                                                                                                (s as any).ShoPrice = 9400;
                                                                                                              } else {
                                                                                                                (s as any).ShoStyle = 0;
                                                                                                                (s as any).ShoQuality = 6;
                                                                                                                (s as any).ShoStrength = 450000;
                                                                                                                (s as any).ShoCut = 1;
                                                                                                                (s as any).ShoHeels = 3;
                                                                                                                (s as any).ShoPrice = 9800;
                                                                                                                if (((s as any).ARGS ?? 0)[0] === 111) {
                                                                                                                  (s as any).ShoStyle = 0;
                                                                                                                  (s as any).ShoQuality = 6;
                                                                                                                  (s as any).ShoStrength = 450000;
                                                                                                                  (s as any).ShoCut = 1;
                                                                                                                  (s as any).ShoHeels = 3;
                                                                                                                  (s as any).ShoPrice = 9800;
                                                                                                                } else {
                                                                                                                  (s as any).ShoStyle = 0;
                                                                                                                  (s as any).ShoQuality = 6;
                                                                                                                  (s as any).ShoStrength = 450000;
                                                                                                                  (s as any).ShoCut = 1;
                                                                                                                  (s as any).ShoHeels = 3;
                                                                                                                  (s as any).ShoPrice = 9800;
                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 113) {
                                                                                                                    (s as any).ShoStyle = 0;
                                                                                                                    (s as any).ShoQuality = 7;
                                                                                                                    (s as any).ShoStrength = 500000;
                                                                                                                    (s as any).ShoCut = 1;
                                                                                                                    (s as any).ShoHeels = 4;
                                                                                                                    (s as any).ShoPrice = 10200;
                                                                                                                  } else {
                                                                                                                    (s as any).ShoStyle = 0;
                                                                                                                    (s as any).ShoQuality = 7;
                                                                                                                    (s as any).ShoStrength = 500000;
                                                                                                                    (s as any).ShoCut = 1;
                                                                                                                    (s as any).ShoHeels = 4;
                                                                                                                    (s as any).ShoPrice = 10200;
                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 115) {
                                                                                                                      (s as any).ShoStyle = 0;
                                                                                                                      (s as any).ShoQuality = 7;
                                                                                                                      (s as any).ShoStrength = 500000;
                                                                                                                      (s as any).ShoCut = 1;
                                                                                                                      (s as any).ShoHeels = 4;
                                                                                                                      (s as any).ShoBimbo = 1;
                                                                                                                      (s as any).ShoPrice = 10200;
                                                                                                                    } else {
                                                                                                                      (s as any).ShoStyle = 0;
                                                                                                                      (s as any).ShoQuality = 7;
                                                                                                                      (s as any).ShoStrength = 500000;
                                                                                                                      (s as any).ShoCut = 1;
                                                                                                                      (s as any).ShoHeels = 4;
                                                                                                                      (s as any).ShoPrice = 10200;
                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 117) {
                                                                                                                        (s as any).ShoStyle = 0;
                                                                                                                        (s as any).ShoQuality = 7;
                                                                                                                        (s as any).ShoStrength = 500000;
                                                                                                                        (s as any).ShoCut = 1;
                                                                                                                        (s as any).ShoHeels = 4;
                                                                                                                        (s as any).ShoPrice = 10200;
                                                                                                                      } else {
                                                                                                                        (s as any).ShoStyle = 0;
                                                                                                                        (s as any).ShoQuality = 7;
                                                                                                                        (s as any).ShoStrength = 500000;
                                                                                                                        (s as any).ShoCut = 1;
                                                                                                                        (s as any).ShoHeels = 4;
                                                                                                                        (s as any).ShoBimbo = 1;
                                                                                                                        (s as any).ShoPrice = 10200;
                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 119) {
                                                                                                                          (s as any).ShoStyle = 0;
                                                                                                                          (s as any).ShoQuality = 6;
                                                                                                                          (s as any).ShoStrength = 450000;
                                                                                                                          (s as any).ShoCut = 1;
                                                                                                                          (s as any).ShoHeels = 4;
                                                                                                                          (s as any).ShoPrice = 9800;
                                                                                                                        } else {
                                                                                                                          (s as any).ShoStyle = 0;
                                                                                                                          (s as any).ShoQuality = 7;
                                                                                                                          (s as any).ShoStrength = 500000;
                                                                                                                          (s as any).ShoCut = 1;
                                                                                                                          (s as any).ShoHeels = 4;
                                                                                                                          (s as any).ShoPrice = 10200;
                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 121) {
                                                                                                                            (s as any).ShoStyle = 0;
                                                                                                                            (s as any).ShoQuality = 6;
                                                                                                                            (s as any).ShoStrength = 450000;
                                                                                                                            (s as any).ShoCut = 1;
                                                                                                                            (s as any).ShoHeels = 3;
                                                                                                                            (s as any).ShoPrice = 9800;
                                                                                                                          } else {
                                                                                                                            (s as any).ShoStyle = 0;
                                                                                                                            (s as any).ShoQuality = 6;
                                                                                                                            (s as any).ShoStrength = 450000;
                                                                                                                            (s as any).ShoCut = 1;
                                                                                                                            (s as any).ShoHeels = 3;
                                                                                                                            (s as any).ShoPrice = 9800;
                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 123) {
                                                                                                                              (s as any).ShoStyle = 0;
                                                                                                                              (s as any).ShoQuality = 6;
                                                                                                                              (s as any).ShoStrength = 450000;
                                                                                                                              (s as any).ShoCut = 1;
                                                                                                                              (s as any).ShoHeels = 4;
                                                                                                                              (s as any).ShoPrice = 9800;
                                                                                                                            } else {
                                                                                                                              (s as any).ShoStyle = 0;
                                                                                                                              (s as any).ShoQuality = 6;
                                                                                                                              (s as any).ShoStrength = 450000;
                                                                                                                              (s as any).ShoCut = 1;
                                                                                                                              (s as any).ShoHeels = 4;
                                                                                                                              (s as any).ShoPrice = 9800;
                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 125) {
                                                                                                                                (s as any).ShoStyle = 0;
                                                                                                                                (s as any).ShoQuality = 6;
                                                                                                                                (s as any).ShoStrength = 450000;
                                                                                                                                (s as any).ShoCut = 1;
                                                                                                                                (s as any).ShoHeels = 3;
                                                                                                                                (s as any).ShoPrice = 9800;
                                                                                                                              } else {
                                                                                                                                (s as any).ShoStyle = 0;
                                                                                                                                (s as any).ShoQuality = 6;
                                                                                                                                (s as any).ShoStrength = 450000;
                                                                                                                                (s as any).ShoCut = 1;
                                                                                                                                (s as any).ShoHeels = 3;
                                                                                                                                (s as any).ShoPrice = 9800;
                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 127) {
                                                                                                                                  (s as any).ShoStyle = 0;
                                                                                                                                  (s as any).ShoQuality = 6;
                                                                                                                                  (s as any).ShoStrength = 450000;
                                                                                                                                  (s as any).ShoCut = 1;
                                                                                                                                  (s as any).ShoHeels = 4;
                                                                                                                                  (s as any).ShoPrice = 9800;
                                                                                                                                } else {
                                                                                                                                  (s as any).ShoStyle = 0;
                                                                                                                                  (s as any).ShoQuality = 6;
                                                                                                                                  (s as any).ShoStrength = 450000;
                                                                                                                                  (s as any).ShoCut = 1;
                                                                                                                                  (s as any).ShoHeels = 4;
                                                                                                                                  (s as any).ShoBimbo = 1;
                                                                                                                                  (s as any).ShoPrice = 9800;
                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 129) {
                                                                                                                                    (s as any).ShoStyle = 0;
                                                                                                                                    (s as any).ShoQuality = 6;
                                                                                                                                    (s as any).ShoStrength = 450000;
                                                                                                                                    (s as any).ShoCut = 1;
                                                                                                                                    (s as any).ShoHeels = 4;
                                                                                                                                    (s as any).ShoPrice = 9800;
                                                                                                                                  } else {
                                                                                                                                    (s as any).ShoStyle = 0;
                                                                                                                                    (s as any).ShoQuality = 6;
                                                                                                                                    (s as any).ShoStrength = 450000;
                                                                                                                                    (s as any).ShoCut = 1;
                                                                                                                                    (s as any).ShoHeels = 4;
                                                                                                                                    (s as any).ShoPrice = 9800;
                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 131) {
                                                                                                                                      (s as any).ShoStyle = 0;
                                                                                                                                      (s as any).ShoQuality = 7;
                                                                                                                                      (s as any).ShoStrength = 500000;
                                                                                                                                      (s as any).ShoCut = 1;
                                                                                                                                      (s as any).ShoHeels = 3;
                                                                                                                                      (s as any).ShoPrice = 10200;
                                                                                                                                    } else {
                                                                                                                                      (s as any).ShoStyle = 0;
                                                                                                                                      (s as any).ShoQuality = 7;
                                                                                                                                      (s as any).ShoStrength = 500000;
                                                                                                                                      (s as any).ShoCut = 1;
                                                                                                                                      (s as any).ShoHeels = 3;
                                                                                                                                      (s as any).ShoPrice = 10200;
                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 133) {
                                                                                                                                        (s as any).ShoStyle = 0;
                                                                                                                                        (s as any).ShoQuality = 7;
                                                                                                                                        (s as any).ShoStrength = 500000;
                                                                                                                                        (s as any).ShoCut = 1;
                                                                                                                                        (s as any).ShoHeels = 4;
                                                                                                                                        (s as any).ShoPrice = 10200;
                                                                                                                                      } else {
                                                                                                                                        (s as any).ShoStyle = 0;
                                                                                                                                        (s as any).ShoQuality = 6;
                                                                                                                                        (s as any).ShoStrength = 450000;
                                                                                                                                        (s as any).ShoCut = 1;
                                                                                                                                        (s as any).ShoHeels = 4;
                                                                                                                                        (s as any).ShoPrice = 9800;
                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 135) {
                                                                                                                                          (s as any).ShoStyle = 0;
                                                                                                                                          (s as any).ShoQuality = 6;
                                                                                                                                          (s as any).ShoStrength = 450000;
                                                                                                                                          (s as any).ShoCut = 1;
                                                                                                                                          (s as any).ShoHeels = 4;
                                                                                                                                          (s as any).ShoBimbo = 1;
                                                                                                                                          (s as any).ShoPrice = 9800;
                                                                                                                                        } else {
                                                                                                                                          (s as any).ShoStyle = 0;
                                                                                                                                          (s as any).ShoQuality = 6;
                                                                                                                                          (s as any).ShoStrength = 450000;
                                                                                                                                          (s as any).ShoCut = 1;
                                                                                                                                          (s as any).ShoHeels = 4;
                                                                                                                                          (s as any).ShoBimbo = 1;
                                                                                                                                          (s as any).ShoPrice = 9800;
                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 137) {
                                                                                                                                            (s as any).ShoStyle = 0;
                                                                                                                                            (s as any).ShoQuality = 6;
                                                                                                                                            (s as any).ShoStrength = 450000;
                                                                                                                                            (s as any).ShoCut = 2;
                                                                                                                                            (s as any).ShoHeels = 2;
                                                                                                                                            (s as any).ShoPrice = 9800;
                                                                                                                                          } else {
                                                                                                                                            (s as any).ShoStyle = 0;
                                                                                                                                            (s as any).ShoQuality = 7;
                                                                                                                                            (s as any).ShoStrength = 500000;
                                                                                                                                            (s as any).ShoCut = 1;
                                                                                                                                            (s as any).ShoHeels = 3;
                                                                                                                                            (s as any).ShoPrice = 10200;
                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 139) {
                                                                                                                                              (s as any).ShoStyle = 0;
                                                                                                                                              (s as any).ShoQuality = 6;
                                                                                                                                              (s as any).ShoStrength = 450000;
                                                                                                                                              (s as any).ShoCut = 1;
                                                                                                                                              (s as any).ShoHeels = 4;
                                                                                                                                              (s as any).ShoPrice = 9800;
                                                                                                                                            } else {
                                                                                                                                              (s as any).ShoStyle = 0;
                                                                                                                                              (s as any).ShoQuality = 6;
                                                                                                                                              (s as any).ShoStrength = 450000;
                                                                                                                                              (s as any).ShoCut = 3;
                                                                                                                                              (s as any).ShoHeels = 1;
                                                                                                                                              (s as any).ShoPrice = 9800;
                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 141) {
                                                                                                                                                (s as any).ShoStyle = 0;
                                                                                                                                                (s as any).ShoQuality = 7;
                                                                                                                                                (s as any).ShoStrength = 500000;
                                                                                                                                                (s as any).ShoCut = 1;
                                                                                                                                                (s as any).ShoHeels = 3;
                                                                                                                                                (s as any).ShoPrice = 10200;
                                                                                                                                              } else {
                                                                                                                                                (s as any).ShoStyle = 0;
                                                                                                                                                (s as any).ShoQuality = 6;
                                                                                                                                                (s as any).ShoStrength = 450000;
                                                                                                                                                (s as any).ShoCut = 1;
                                                                                                                                                (s as any).ShoHeels = 4;
                                                                                                                                                (s as any).ShoPrice = 9800;
                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 143) {
                                                                                                                                                  (s as any).ShoStyle = 0;
                                                                                                                                                  (s as any).ShoQuality = 6;
                                                                                                                                                  (s as any).ShoStrength = 450000;
                                                                                                                                                  (s as any).ShoCut = 1;
                                                                                                                                                  (s as any).ShoHeels = 4;
                                                                                                                                                  (s as any).ShoPrice = 9800;
                                                                                                                                                } else {
                                                                                                                                                  (s as any).ShoStyle = 0;
                                                                                                                                                  (s as any).ShoQuality = 6;
                                                                                                                                                  (s as any).ShoStrength = 450000;
                                                                                                                                                  (s as any).ShoCut = 1;
                                                                                                                                                  (s as any).ShoHeels = 3;
                                                                                                                                                  (s as any).ShoPrice = 9800;
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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

export const _attributes_moncheri_shoes: LocationDef = {
  name: '_attributes_moncheri_shoes',
  region: 'other',
  enter: enter,
};
