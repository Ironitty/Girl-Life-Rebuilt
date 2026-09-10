// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 5250 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 3: 6050
  // TODO-QSP: 4: 6300
  // TODO-QSP: 5: 6550
  // TODO-QSP: CloQuality range from 3 to 5, avoid adding too many 5s
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 4;
    (s as any).CloStrength = 153750;
    (s as any).CloThinness = 3;
    (s as any).CloTopCut = 1;
    (s as any).CloSkirtShortness = 2;
    (s as any).CloDress = 1;
    (s as any).CloStyle = 2;
    (s as any).CloPrice = 6300;
  } else {
    (s as any).CloQuality = 3;
    (s as any).CloStrength = 148125;
    (s as any).CloThinness = 1;
    (s as any).CloTopCut = 1;
    (s as any).CloSkirtShortness = 3;
    (s as any).CloDress = 1;
    (s as any).CloPunk = 1;
    (s as any).CloStyle = 2;
    (s as any).CloPrice = 6050;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 4;
      (s as any).CloStrength = 153750;
      (s as any).CloThinness = 1;
      (s as any).CloTopCut = 1;
      (s as any).CloSkirtShortness = 3;
      (s as any).CloDress = 1;
      (s as any).CloStyle = 2;
      (s as any).CloPrice = 6300;
    } else {
      (s as any).CloQuality = 4;
      (s as any).CloStrength = 153750;
      (s as any).CloThinness = 1;
      (s as any).CloTopCut = 1;
      (s as any).CloSkirtShortness = 3;
      (s as any).CloDress = 1;
      (s as any).CloStyle = 2;
      (s as any).CloPrice = 6300;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 4;
        (s as any).CloStrength = 153750;
        (s as any).CloThinness = 1;
        (s as any).CloTopCut = 1;
        (s as any).CloSkirtShortness = 3;
        (s as any).CloStyle = 2;
        (s as any).CloPrice = 6300;
      } else {
        (s as any).CloQuality = 4;
        (s as any).CloStrength = 135000;
        (s as any).CloThinness = 1;
        (s as any).CloTopCut = 1;
        (s as any).CloSkirtShortness = 3;
        (s as any).CloDress = 1;
        (s as any).CloStyle = 2;
        (s as any).CloPrice = 6300;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 4;
          (s as any).CloStrength = 153750;
          (s as any).CloThinness = 1;
          (s as any).CloTopCut = 1;
          (s as any).CloSkirtShortness = 3;
          (s as any).CloDress = 1;
          (s as any).CloStyle = 2;
          (s as any).CloPrice = 6300;
        } else {
          (s as any).CloQuality = 4;
          (s as any).CloStrength = 153750;
          (s as any).CloThinness = 3;
          (s as any).CloTopCut = 1;
          (s as any).CloSkirtShortness = 3;
          (s as any).CloDress = 1;
          (s as any).CloStyle = 2;
          (s as any).CloPrice = 6300;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 3;
            (s as any).CloStrength = 148125;
            (s as any).CloThinness = 2;
            (s as any).CloTopCut = 1;
            (s as any).CloSkirtShortness = 3;
            (s as any).CloDress = 1;
            (s as any).CloGoth = 1;
            (s as any).CloStyle = 2;
            (s as any).CloPrice = 6050;
          } else {
            (s as any).CloQuality = 4;
            (s as any).CloStrength = 153750;
            (s as any).CloThinness = 3;
            (s as any).CloTopCut = 1;
            (s as any).CloSkirtShortness = 3;
            (s as any).CloDress = 1;
            (s as any).CloStyle = 2;
            (s as any).CloPrice = 6300;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 4;
              (s as any).CloStrength = 153750;
              (s as any).CloThinness = 3;
              (s as any).CloTopCut = 1;
              (s as any).CloSkirtShortness = 3;
              (s as any).CloDress = 1;
              (s as any).CloStyle = 2;
              (s as any).CloStyle2 = 4;
              (s as any).CloSchool = 1;
              (s as any).CloPunk = 1;
              (s as any).CloPrice = 6300;
            } else {
              (s as any).CloQuality = 4;
              (s as any).CloStrength = 153750;
              (s as any).CloThinness = 4;
              (s as any).CloTopCut = 1;
              (s as any).CloSkirtShortness = 3;
              (s as any).CloStyle = 2;
              (s as any).CloPrice = 6300;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 3;
                (s as any).CloStrength = 129375;
                (s as any).CloThinness = 5;
                (s as any).CloTopCut = 1;
                (s as any).CloSkirtShortness = 3;
                (s as any).CloStyle = 4;
                (s as any).CloProstitute = 1;
                (s as any).CloPrice = 6050;
              } else {
                (s as any).CloQuality = 4;
                (s as any).CloStrength = 153750;
                (s as any).CloThinness = 1;
                (s as any).CloTopCut = 2;
                (s as any).CloSkirtShortness = 3;
                (s as any).CloDress = 1;
                (s as any).CloStyle = 2;
                (s as any).CloPrice = 6300;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 4;
                  (s as any).CloStrength = 135000;
                  (s as any).CloThinness = 1;
                  (s as any).CloTopCut = 2;
                  (s as any).CloSkirtShortness = 3;
                  (s as any).CloDress = 1;
                  (s as any).CloPrice = 6300;
                } else {
                  (s as any).CloQuality = 5;
                  (s as any).CloStrength = 159375;
                  (s as any).CloThinness = 4;
                  (s as any).CloTopCut = 2;
                  (s as any).CloSkirtShortness = 3;
                  (s as any).CloDress = 1;
                  (s as any).CloStyle = 2;
                  (s as any).CloPrice = 6550;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 3;
                    (s as any).CloStrength = 148125;
                    (s as any).CloThinness = 4;
                    (s as any).CloTopCut = 2;
                    (s as any).CloSkirtShortness = 3;
                    (s as any).CloDress = 1;
                    (s as any).CloStyle = 2;
                    (s as any).CloPrice = 6050;
                  } else {
                    (s as any).CloQuality = 4;
                    (s as any).CloStrength = 135000;
                    (s as any).CloThinness = 4;
                    (s as any).CloTopCut = 2;
                    (s as any).CloSkirtShortness = 3;
                    (s as any).CloDress = 1;
                    (s as any).CloPrice = 6300;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 4;
                      (s as any).CloStrength = 153750;
                      (s as any).CloThinness = 4;
                      (s as any).CloTopCut = 2;
                      (s as any).CloSkirtShortness = 3;
                      (s as any).CloStyle = 2;
                      (s as any).CloPrice = 6300;
                    } else {
                      (s as any).CloQuality = 4;
                      (s as any).CloStrength = 153750;
                      (s as any).CloThinness = 3;
                      (s as any).CloTopCut = 2;
                      (s as any).CloSkirtShortness = 3;
                      (s as any).CloStyle = 2;
                      (s as any).CloPrice = 6300;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).CloQuality = 3;
                        (s as any).CloStrength = 129375;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 3;
                        (s as any).CloSkirtShortness = 3;
                        (s as any).CloPrice = 6050;
                      } else {
                        (s as any).CloQuality = 3;
                        (s as any).CloStrength = 148125;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 3;
                        (s as any).CloSkirtShortness = 3;
                        (s as any).CloStyle = 2;
                        (s as any).CloPrice = 6050;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).CloQuality = 3;
                          (s as any).CloStrength = 148125;
                          (s as any).CloThinness = 4;
                          (s as any).CloTopCut = 3;
                          (s as any).CloSkirtShortness = 3;
                          (s as any).CloStyle = 2;
                          (s as any).CloPrice = 6050;
                        } else {
                          (s as any).CloQuality = 4;
                          (s as any).CloStrength = 135000;
                          (s as any).CloThinness = 1;
                          (s as any).CloTopCut = 1;
                          (s as any).CloSkirtShortness = 4;
                          (s as any).CloDress = 1;
                          (s as any).CloPrice = 6300;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).CloQuality = 3;
                            (s as any).CloStrength = 148125;
                            (s as any).CloThinness = 1;
                            (s as any).CloTopCut = 1;
                            (s as any).CloSkirtShortness = 4;
                            (s as any).CloStyle = 2;
                            (s as any).CloPrice = 6050;
                          } else {
                            (s as any).CloQuality = 4;
                            (s as any).CloStrength = 135000;
                            (s as any).CloThinness = 3;
                            (s as any).CloTopCut = 1;
                            (s as any).CloSkirtShortness = 4;
                            (s as any).CloDress = 1;
                            (s as any).CloPrice = 6300;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).CloQuality = 4;
                              (s as any).CloStrength = 135000;
                              (s as any).CloThinness = 1;
                              (s as any).CloTopCut = 1;
                              (s as any).CloSkirtShortness = 4;
                              (s as any).CloDress = 1;
                              (s as any).CloPrice = 6300;
                            } else {
                              (s as any).CloQuality = 4;
                              (s as any).CloStrength = 135000;
                              (s as any).CloThinness = 1;
                              (s as any).CloTopCut = 1;
                              (s as any).CloSkirtShortness = 4;
                              (s as any).CloDress = 1;
                              (s as any).CloPrice = 6300;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).CloQuality = 3;
                                (s as any).CloStrength = 129375;
                                (s as any).CloThinness = 1;
                                (s as any).CloTopCut = 1;
                                (s as any).CloSkirtShortness = 4;
                                (s as any).CloDress = 1;
                                (s as any).CloPrice = 6050;
                              } else {
                                (s as any).CloQuality = 4;
                                (s as any).CloStrength = 153750;
                                (s as any).CloThinness = 1;
                                (s as any).CloTopCut = 1;
                                (s as any).CloSkirtShortness = 4;
                                (s as any).CloStyle = 2;
                                (s as any).CloPrice = 6300;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).CloQuality = 4;
                                  (s as any).CloStrength = 153750;
                                  (s as any).CloThinness = 3;
                                  (s as any).CloTopCut = 1;
                                  (s as any).CloSkirtShortness = 4;
                                  (s as any).CloStyle = 2;
                                  (s as any).CloPrice = 6300;
                                } else {
                                  (s as any).CloQuality = 4;
                                  (s as any).CloStrength = 153750;
                                  (s as any).CloThinness = 3;
                                  (s as any).CloTopCut = 1;
                                  (s as any).CloSkirtShortness = 4;
                                  (s as any).CloPunk = 1;
                                  (s as any).CloStyle = 2;
                                  (s as any).CloPrice = 6300;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).CloQuality = 3;
                                    (s as any).CloStrength = 166875;
                                    (s as any).CloThinness = 1;
                                    (s as any).CloTopCut = 2;
                                    (s as any).CloSkirtShortness = 4;
                                    (s as any).CloDress = 1;
                                    (s as any).CloStyle = 5;
                                    (s as any).CloPrice = 6050;
                                  } else {
                                    (s as any).CloQuality = 3;
                                    (s as any).CloStrength = 148125;
                                    (s as any).CloThinness = 3;
                                    (s as any).CloTopCut = 1;
                                    (s as any).CloSkirtShortness = 4;
                                    (s as any).CloDress = 1;
                                    (s as any).CloPunk = 1;
                                    (s as any).CloStyle = 2;
                                    (s as any).CloPrice = 6050;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).CloQuality = 4;
                                      (s as any).CloStrength = 153750;
                                      (s as any).CloThinness = 3;
                                      (s as any).CloTopCut = 1;
                                      (s as any).CloSkirtShortness = 4;
                                      (s as any).CloGoth = 1;
                                      (s as any).CloStyle = 2;
                                      (s as any).CloStyle2 = 4;
                                      (s as any).CloSchool = 1;
                                      (s as any).CloPrice = 6300;
                                    } else {
                                      (s as any).CloQuality = 3;
                                      (s as any).CloStrength = 148125;
                                      (s as any).CloThinness = 4;
                                      (s as any).CloTopCut = 1;
                                      (s as any).CloSkirtShortness = 4;
                                      (s as any).CloStyle = 2;
                                      (s as any).CloPunk = 1;
                                      (s as any).CloPrice = 6050;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).CloQuality = 4;
                                        (s as any).CloStrength = 153750;
                                        (s as any).CloThinness = 3;
                                        (s as any).CloTopCut = 1;
                                        (s as any).CloSkirtShortness = 4;
                                        (s as any).CloPunk = 1;
                                        (s as any).CloGoth = 1;
                                        (s as any).CloStyle = 2;
                                        (s as any).CloPrice = 6300;
                                      } else {
                                        (s as any).CloQuality = 4;
                                        (s as any).CloStrength = 153750;
                                        (s as any).CloThinness = 2;
                                        (s as any).CloTopCut = 1;
                                        (s as any).CloSkirtShortness = 4;
                                        (s as any).CloStyle = 2;
                                        (s as any).CloPrice = 6300;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).CloQuality = 4;
                                          (s as any).CloStrength = 153750;
                                          (s as any).CloThinness = 5;
                                          (s as any).CloTopCut = 1;
                                          (s as any).CloSkirtShortness = 4;
                                          (s as any).CloPunk = 1;
                                          (s as any).CloStyle = 2;
                                          (s as any).CloPrice = 6300;
                                        } else {
                                          (s as any).CloQuality = 4;
                                          (s as any).CloStrength = 153750;
                                          (s as any).CloThinness = 5;
                                          (s as any).CloTopCut = 1;
                                          (s as any).CloSkirtShortness = 4;
                                          (s as any).CloStyle = 2;
                                          (s as any).CloPunk = 1;
                                          (s as any).CloPrice = 6300;
                                          if (((s as any).ARGS ?? 0)[0] === 41) {
                                            (s as any).CloQuality = 3;
                                            (s as any).CloStrength = 148125;
                                            (s as any).CloThinness = 4;
                                            (s as any).CloTopCut = 1;
                                            (s as any).CloSkirtShortness = 4;
                                            (s as any).CloDress = 1;
                                            (s as any).CloStyle = 2;
                                            (s as any).CloPrice = 6050;
                                          } else {
                                            (s as any).CloQuality = 4;
                                            (s as any).CloStrength = 135000;
                                            (s as any).CloThinness = 1;
                                            (s as any).CloTopCut = 2;
                                            (s as any).CloSkirtShortness = 4;
                                            (s as any).CloDress = 1;
                                            (s as any).CloPrice = 6300;
                                            if (((s as any).ARGS ?? 0)[0] === 43) {
                                              (s as any).CloQuality = 4;
                                              (s as any).CloStrength = 153750;
                                              (s as any).CloThinness = 3;
                                              (s as any).CloTopCut = 2;
                                              (s as any).CloSkirtShortness = 4;
                                              (s as any).CloStyle = 2;
                                              (s as any).CloPrice = 6300;
                                            } else {
                                              (s as any).CloQuality = 4;
                                              (s as any).CloStrength = 135000;
                                              (s as any).CloThinness = 3;
                                              (s as any).CloTopCut = 2;
                                              (s as any).CloSkirtShortness = 4;
                                              (s as any).CloDress = 1;
                                              (s as any).CloPrice = 6300;
                                              if (((s as any).ARGS ?? 0)[0] === 45) {
                                                (s as any).CloQuality = 3;
                                                (s as any).CloStrength = 129375;
                                                (s as any).CloThinness = 4;
                                                (s as any).CloTopCut = 2;
                                                (s as any).CloSkirtShortness = 4;
                                                (s as any).CloStyle = 4;
                                                (s as any).CloProstitute = 1;
                                                (s as any).CloBimbo = 1;
                                                (s as any).CloPrice = 6050;
                                              } else {
                                                (s as any).CloQuality = 4;
                                                (s as any).CloStrength = 153750;
                                                (s as any).CloThinness = 4;
                                                (s as any).CloTopCut = 2;
                                                (s as any).CloSkirtShortness = 4;
                                                (s as any).CloDress = 1;
                                                (s as any).CloStyle = 2;
                                                (s as any).CloPrice = 6300;
                                                if (((s as any).ARGS ?? 0)[0] === 47) {
                                                  (s as any).CloQuality = 3;
                                                  (s as any).CloStrength = 129375;
                                                  (s as any).CloThinness = 5;
                                                  (s as any).CloTopCut = 2;
                                                  (s as any).CloSkirtShortness = 4;
                                                  (s as any).CloDress = 1;
                                                  (s as any).CloStyle = 4;
                                                  (s as any).CloProstitute = 1;
                                                  (s as any).CloPrice = 6050;
                                                } else {
                                                  (s as any).CloQuality = 3;
                                                  (s as any).CloStrength = 148125;
                                                  (s as any).CloThinness = 4;
                                                  (s as any).CloTopCut = 2;
                                                  (s as any).CloSkirtShortness = 4;
                                                  (s as any).CloStyle = 2;
                                                  (s as any).CloPrice = 6050;
                                                  if (((s as any).ARGS ?? 0)[0] === 49) {
                                                    (s as any).CloQuality = 4;
                                                    (s as any).CloStrength = 153750;
                                                    (s as any).CloThinness = 4;
                                                    (s as any).CloTopCut = 2;
                                                    (s as any).CloSkirtShortness = 4;
                                                    (s as any).CloDress = 1;
                                                    (s as any).CloStyle = 2;
                                                    (s as any).CloPunk = 1;
                                                    (s as any).CloPrice = 6300;
                                                  } else {
                                                    (s as any).CloQuality = 4;
                                                    (s as any).CloStrength = 153750;
                                                    (s as any).CloThinness = 4;
                                                    (s as any).CloTopCut = 2;
                                                    (s as any).CloSkirtShortness = 4;
                                                    (s as any).CloDress = 1;
                                                    (s as any).CloStyle = 2;
                                                    (s as any).CloPrice = 6300;
                                                    if (((s as any).ARGS ?? 0)[0] === 51) {
                                                      (s as any).CloQuality = 4;
                                                      (s as any).CloStrength = 153750;
                                                      (s as any).CloThinness = 4;
                                                      (s as any).CloTopCut = 2;
                                                      (s as any).CloSkirtShortness = 4;
                                                      (s as any).CloStyle = 2;
                                                      (s as any).CloPrice = 6300;
                                                    } else {
                                                      (s as any).CloQuality = 4;
                                                      (s as any).CloStrength = 153750;
                                                      (s as any).CloThinness = 4;
                                                      (s as any).CloTopCut = 2;
                                                      (s as any).CloSkirtShortness = 4;
                                                      (s as any).CloDress = 1;
                                                      (s as any).CloStyle = 2;
                                                      (s as any).CloPrice = 6300;
                                                      if (((s as any).ARGS ?? 0)[0] === 53) {
                                                        (s as any).CloQuality = 4;
                                                        (s as any).CloStrength = 135000;
                                                        (s as any).CloThinness = 5;
                                                        (s as any).CloTopCut = 2;
                                                        (s as any).CloSkirtShortness = 4;
                                                        (s as any).CloPrice = 6300;
                                                      } else {
                                                        (s as any).CloQuality = 4;
                                                        (s as any).CloStrength = 135000;
                                                        (s as any).CloThinness = 5;
                                                        (s as any).CloTopCut = 2;
                                                        (s as any).CloSkirtShortness = 4;
                                                        (s as any).CloPrice = 6300;
                                                        if (((s as any).ARGS ?? 0)[0] === 55) {
                                                          (s as any).CloQuality = 3;
                                                          (s as any).CloStrength = 129375;
                                                          (s as any).CloThinness = 6;
                                                          (s as any).CloTopCut = 2;
                                                          (s as any).CloSkirtShortness = 4;
                                                          (s as any).CloStyle = 4;
                                                          (s as any).CloProstitute = 1;
                                                          (s as any).CloPrice = 6050;
                                                        } else {
                                                          (s as any).CloQuality = 3;
                                                          (s as any).CloStrength = 129375;
                                                          (s as any).CloThinness = 4;
                                                          (s as any).CloTopCut = 2;
                                                          (s as any).CloSkirtShortness = 4;
                                                          (s as any).CloPrice = 6050;
                                                          if (((s as any).ARGS ?? 0)[0] === 57) {
                                                            (s as any).CloQuality = 3;
                                                            (s as any).CloStrength = 129375;
                                                            (s as any).CloThinness = 5;
                                                            (s as any).CloTopCut = 2;
                                                            (s as any).CloSkirtShortness = 4;
                                                            (s as any).CloStyle = 4;
                                                            (s as any).CloProstitute = 1;
                                                            (s as any).CloPrice = 6050;
                                                          } else {
                                                            (s as any).CloQuality = 4;
                                                            (s as any).CloStrength = 153750;
                                                            (s as any).CloThinness = 4;
                                                            (s as any).CloTopCut = 2;
                                                            (s as any).CloSkirtShortness = 4;
                                                            (s as any).CloPunk = 1;
                                                            (s as any).CloStyle = 2;
                                                            (s as any).CloPrice = 6300;
                                                            if (((s as any).ARGS ?? 0)[0] === 59) {
                                                              (s as any).CloQuality = 3;
                                                              (s as any).CloStrength = 148125;
                                                              (s as any).CloThinness = 4;
                                                              (s as any).CloTopCut = 2;
                                                              (s as any).CloSkirtShortness = 4;
                                                              (s as any).CloDress = 1;
                                                              (s as any).CloStyle = 2;
                                                              (s as any).CloPrice = 6050;
                                                            } else {
                                                              (s as any).CloQuality = 3;
                                                              (s as any).CloStrength = 129375;
                                                              (s as any).CloThinness = 4;
                                                              (s as any).CloTopCut = 2;
                                                              (s as any).CloSkirtShortness = 4;
                                                              (s as any).CloDress = 1;
                                                              (s as any).CloBimbo = 1;
                                                              (s as any).CloPrice = 6050;
                                                              if (((s as any).ARGS ?? 0)[0] === 61) {
                                                                (s as any).CloQuality = 4;
                                                                (s as any).CloStrength = 153750;
                                                                (s as any).CloThinness = 5;
                                                                (s as any).CloTopCut = 2;
                                                                (s as any).CloSkirtShortness = 4;
                                                                (s as any).CloDress = 1;
                                                                (s as any).CloStyle = 2;
                                                                (s as any).CloPrice = 6300;
                                                              } else {
                                                                (s as any).CloQuality = 4;
                                                                (s as any).CloStrength = 135000;
                                                                (s as any).CloThinness = 5;
                                                                (s as any).CloTopCut = 3;
                                                                (s as any).CloSkirtShortness = 5;
                                                                (s as any).CloDress = 1;
                                                                (s as any).CloStyle = 4;
                                                                (s as any).CloProstitute = 1;
                                                                (s as any).CloPrice = 6300;
                                                                if (((s as any).ARGS ?? 0)[0] === 63) {
                                                                  (s as any).CloQuality = 4;
                                                                  (s as any).CloStrength = 153750;
                                                                  (s as any).CloThinness = 4;
                                                                  (s as any).CloTopCut = 3;
                                                                  (s as any).CloSkirtShortness = 4;
                                                                  (s as any).CloDress = 1;
                                                                  (s as any).CloStyle = 2;
                                                                  (s as any).CloPrice = 6300;
                                                                } else {
                                                                  (s as any).CloQuality = 4;
                                                                  (s as any).CloStrength = 135000;
                                                                  (s as any).CloThinness = 5;
                                                                  (s as any).CloTopCut = 3;
                                                                  (s as any).CloSkirtShortness = 4;
                                                                  (s as any).CloDress = 1;
                                                                  (s as any).CloStyle = 4;
                                                                  (s as any).CloProstitute = 1;
                                                                  (s as any).CloBimbo = 1;
                                                                  (s as any).CloPrice = 6300;
                                                                  if (((s as any).ARGS ?? 0)[0] === 65) {
                                                                    (s as any).CloQuality = 4;
                                                                    (s as any).CloStrength = 135000;
                                                                    (s as any).CloThinness = 5;
                                                                    (s as any).CloTopCut = 3;
                                                                    (s as any).CloSkirtShortness = 4;
                                                                    (s as any).CloDress = 1;
                                                                    (s as any).CloStyle = 4;
                                                                    (s as any).CloProstitute = 1;
                                                                    (s as any).CloPunk = 1;
                                                                    (s as any).CloPrice = 6300;
                                                                  } else {
                                                                    (s as any).CloQuality = 4;
                                                                    (s as any).CloStrength = 153750;
                                                                    (s as any).CloThinness = 5;
                                                                    (s as any).CloTopCut = 3;
                                                                    (s as any).CloSkirtShortness = 4;
                                                                    (s as any).CloStyle = 2;
                                                                    (s as any).CloGoth = 1;
                                                                    (s as any).CloPunk = 1;
                                                                    (s as any).CloPrice = 6300;
                                                                    if (((s as any).ARGS ?? 0)[0] === 67) {
                                                                      (s as any).CloQuality = 4;
                                                                      (s as any).CloStrength = 135000;
                                                                      (s as any).CloThinness = 4;
                                                                      (s as any).CloTopCut = 3;
                                                                      (s as any).CloSkirtShortness = 4;
                                                                      (s as any).CloPrice = 6300;
                                                                    } else {
                                                                      (s as any).CloQuality = 4;
                                                                      (s as any).CloStrength = 135000;
                                                                      (s as any).CloThinness = 4;
                                                                      (s as any).CloTopCut = 3;
                                                                      (s as any).CloSkirtShortness = 4;
                                                                      (s as any).CloBimbo = 1;
                                                                      (s as any).CloPrice = 6300;
                                                                      if (((s as any).ARGS ?? 0)[0] === 69) {
                                                                        (s as any).CloQuality = 4;
                                                                        (s as any).CloStrength = 135000;
                                                                        (s as any).CloThinness = 4;
                                                                        (s as any).CloTopCut = 3;
                                                                        (s as any).CloSkirtShortness = 4;
                                                                        (s as any).CloPrice = 6300;
                                                                      } else {
                                                                        (s as any).CloQuality = 3;
                                                                        (s as any).CloStrength = 129375;
                                                                        (s as any).CloThinness = 4;
                                                                        (s as any).CloTopCut = 4;
                                                                        (s as any).CloSkirtShortness = 4;
                                                                        (s as any).CloStyle = 4;
                                                                        (s as any).CloProstitute = 1;
                                                                        (s as any).CloBimbo = 1;
                                                                        (s as any).CloPrice = 6050;
                                                                        if (((s as any).ARGS ?? 0)[0] === 71) {
                                                                          (s as any).CloQuality = 4;
                                                                          (s as any).CloStrength = 135000;
                                                                          (s as any).CloThinness = 4;
                                                                          (s as any).CloTopCut = 3;
                                                                          (s as any).CloSkirtShortness = 4;
                                                                          (s as any).CloBimbo = 1;
                                                                          (s as any).CloPrice = 6300;
                                                                        } else {
                                                                          (s as any).CloQuality = 3;
                                                                          (s as any).CloStrength = 129375;
                                                                          (s as any).CloThinness = 4;
                                                                          (s as any).CloTopCut = 4;
                                                                          (s as any).CloSkirtShortness = 4;
                                                                          (s as any).CloStyle = 4;
                                                                          (s as any).CloProstitute = 1;
                                                                          (s as any).CloPrice = 6050;
                                                                          if (((s as any).ARGS ?? 0)[0] === 73) {
                                                                            (s as any).CloQuality = 3;
                                                                            (s as any).CloStrength = 129375;
                                                                            (s as any).CloThinness = 5;
                                                                            (s as any).CloTopCut = 4;
                                                                            (s as any).CloSkirtShortness = 4;
                                                                            (s as any).CloStyle = 4;
                                                                            (s as any).CloProstitute = 1;
                                                                            (s as any).CloBimbo = 1;
                                                                            (s as any).CloPrice = 6050;
                                                                          } else {
                                                                            (s as any).CloQuality = 3;
                                                                            (s as any).CloStrength = 148125;
                                                                            (s as any).CloThinness = 1;
                                                                            (s as any).CloTopCut = 2;
                                                                            (s as any).CloSkirtShortness = 5;
                                                                            (s as any).CloDress = 1;
                                                                            (s as any).CloStyle = 2;
                                                                            (s as any).CloPrice = 6050;
                                                                            if (((s as any).ARGS ?? 0)[0] === 75) {
                                                                              (s as any).CloQuality = 5;
                                                                              (s as any).CloStrength = 140625;
                                                                              (s as any).CloThinness = 5;
                                                                              (s as any).CloTopCut = 1;
                                                                              (s as any).CloSkirtShortness = 5;
                                                                              (s as any).CloPrice = 6550;
                                                                            } else {
                                                                              (s as any).CloQuality = 3;
                                                                              (s as any).CloStrength = 129375;
                                                                              (s as any).CloThinness = 5;
                                                                              (s as any).CloTopCut = 2;
                                                                              (s as any).CloSkirtShortness = 5;
                                                                              (s as any).CloStyle = 4;
                                                                              (s as any).CloProstitute = 1;
                                                                              (s as any).CloPrice = 6050;
                                                                              if (((s as any).ARGS ?? 0)[0] === 77) {
                                                                                (s as any).CloQuality = 3;
                                                                                (s as any).CloStrength = 129375;
                                                                                (s as any).CloThinness = 5;
                                                                                (s as any).CloTopCut = 2;
                                                                                (s as any).CloSkirtShortness = 5;
                                                                                (s as any).CloStyle = 4;
                                                                                (s as any).CloProstitute = 1;
                                                                                (s as any).CloPrice = 6050;
                                                                              } else {
                                                                                (s as any).CloQuality = 3;
                                                                                (s as any).CloStrength = 129375;
                                                                                (s as any).CloThinness = 5;
                                                                                (s as any).CloTopCut = 2;
                                                                                (s as any).CloSkirtShortness = 5;
                                                                                (s as any).CloDress = 1;
                                                                                (s as any).CloPrice = 6050;
                                                                                if (((s as any).ARGS ?? 0)[0] === 79) {
                                                                                  (s as any).CloQuality = 5;
                                                                                  (s as any).CloStrength = 159375;
                                                                                  (s as any).CloThinness = 4;
                                                                                  (s as any).CloTopCut = 2;
                                                                                  (s as any).CloSkirtShortness = 5;
                                                                                  (s as any).CloStyle = 2;
                                                                                  (s as any).CloPrice = 6550;
                                                                                } else {
                                                                                  (s as any).CloQuality = 5;
                                                                                  (s as any).CloStrength = 140625;
                                                                                  (s as any).CloThinness = 4;
                                                                                  (s as any).CloTopCut = 2;
                                                                                  (s as any).CloSkirtShortness = 5;
                                                                                  (s as any).CloDress = 1;
                                                                                  (s as any).CloPrice = 6550;
                                                                                  if (((s as any).ARGS ?? 0)[0] === 81) {
                                                                                    (s as any).CloQuality = 3;
                                                                                    (s as any).CloStrength = 148125;
                                                                                    (s as any).CloThinness = 5;
                                                                                    (s as any).CloTopCut = 2;
                                                                                    (s as any).CloSkirtShortness = 5;
                                                                                    (s as any).CloStyle = 2;
                                                                                    (s as any).CloStyle2 = 4;
                                                                                    (s as any).CloSchool = 1;
                                                                                    (s as any).CloPrice = 6050;
                                                                                  } else {
                                                                                    (s as any).CloQuality = 4;
                                                                                    (s as any).CloStrength = 135000;
                                                                                    (s as any).CloThinness = 4;
                                                                                    (s as any).CloTopCut = 2;
                                                                                    (s as any).CloSkirtShortness = 5;
                                                                                    (s as any).CloPrice = 6300;
                                                                                    if (((s as any).ARGS ?? 0)[0] === 83) {
                                                                                      (s as any).CloQuality = 3;
                                                                                      (s as any).CloStrength = 129375;
                                                                                      (s as any).CloThinness = 5;
                                                                                      (s as any).CloTopCut = 2;
                                                                                      (s as any).CloSkirtShortness = 5;
                                                                                      (s as any).CloStyle = 4;
                                                                                      (s as any).CloProstitute = 1;
                                                                                      (s as any).CloBimbo = 1;
                                                                                      (s as any).CloPrice = 6050;
                                                                                    } else {
                                                                                      (s as any).CloQuality = 3;
                                                                                      (s as any).CloStrength = 148125;
                                                                                      (s as any).CloThinness = 4;
                                                                                      (s as any).CloTopCut = 2;
                                                                                      (s as any).CloSkirtShortness = 5;
                                                                                      (s as any).CloDress = 1;
                                                                                      (s as any).CloGoth = 1;
                                                                                      (s as any).CloStyle = 2;
                                                                                      (s as any).CloPrice = 6050;
                                                                                      if (((s as any).ARGS ?? 0)[0] === 85) {
                                                                                        (s as any).CloQuality = 4;
                                                                                        (s as any).CloStrength = 135000;
                                                                                        (s as any).CloThinness = 4;
                                                                                        (s as any).CloTopCut = 2;
                                                                                        (s as any).CloSkirtShortness = 5;
                                                                                        (s as any).CloDress = 1;
                                                                                        (s as any).CloBimbo = 1;
                                                                                        (s as any).CloPrice = 6300;
                                                                                      } else {
                                                                                        (s as any).CloQuality = 4;
                                                                                        (s as any).CloStrength = 153750;
                                                                                        (s as any).CloThinness = 4;
                                                                                        (s as any).CloTopCut = 2;
                                                                                        (s as any).CloSkirtShortness = 5;
                                                                                        (s as any).CloStyle = 2;
                                                                                        (s as any).CloPrice = 6300;
                                                                                        if (((s as any).ARGS ?? 0)[0] === 87) {
                                                                                          (s as any).CloQuality = 3;
                                                                                          (s as any).CloStrength = 148125;
                                                                                          (s as any).CloThinness = 4;
                                                                                          (s as any).CloTopCut = 3;
                                                                                          (s as any).CloSkirtShortness = 5;
                                                                                          (s as any).CloDress = 1;
                                                                                          (s as any).CloStyle = 2;
                                                                                          (s as any).CloPrice = 6050;
                                                                                        } else {
                                                                                          (s as any).CloQuality = 3;
                                                                                          (s as any).CloStrength = 129375;
                                                                                          (s as any).CloThinness = 4;
                                                                                          (s as any).CloTopCut = 4;
                                                                                          (s as any).CloSkirtShortness = 5;
                                                                                          (s as any).CloPrice = 6050;
                                                                                          if (((s as any).ARGS ?? 0)[0] === 89) {
                                                                                            (s as any).CloQuality = 4;
                                                                                            (s as any).CloStrength = 135000;
                                                                                            (s as any).CloThinness = 4;
                                                                                            (s as any).CloTopCut = 4;
                                                                                            (s as any).CloSkirtShortness = 5;
                                                                                            (s as any).CloStyle = 4;
                                                                                            (s as any).CloProstitute = 1;
                                                                                            (s as any).CloPrice = 6300;
                                                                                          } else {
                                                                                            (s as any).CloQuality = 4;
                                                                                            (s as any).CloStrength = 153750;
                                                                                            (s as any).CloThinness = 4;
                                                                                            (s as any).CloTopCut = 4;
                                                                                            (s as any).CloSkirtShortness = 5;
                                                                                            (s as any).CloStyle = 2;
                                                                                            (s as any).CloPunk = 1;
                                                                                            (s as any).CloPrice = 6300;
                                                                                            if (((s as any).ARGS ?? 0)[0] === 91) {
                                                                                              (s as any).CloQuality = 4;
                                                                                              (s as any).CloStrength = 135000;
                                                                                              (s as any).CloThinness = 6;
                                                                                              (s as any).CloTopCut = 4;
                                                                                              (s as any).CloSkirtShortness = 5;
                                                                                              (s as any).CloStyle = 4;
                                                                                              (s as any).CloProstitute = 1;
                                                                                              (s as any).CloBimbo = 1;
                                                                                              (s as any).CloPunk = 1;
                                                                                              (s as any).CloPrice = 6300;
                                                                                            } else {
                                                                                              (s as any).CloQuality = 4;
                                                                                              (s as any).CloStrength = 135000;
                                                                                              (s as any).CloThinness = 6;
                                                                                              (s as any).CloTopCut = 4;
                                                                                              (s as any).CloSkirtShortness = 5;
                                                                                              (s as any).CloStyle = 4;
                                                                                              (s as any).CloProstitute = 1;
                                                                                              (s as any).CloBimbo = 1;
                                                                                              (s as any).CloPrice = 6300;
                                                                                              if (((s as any).ARGS ?? 0)[0] === 93) {
                                                                                                (s as any).CloQuality = 3;
                                                                                                (s as any).CloStrength = 129375;
                                                                                                (s as any).CloThinness = 4;
                                                                                                (s as any).CloTopCut = 4;
                                                                                                (s as any).CloSkirtShortness = 5;
                                                                                                (s as any).CloStyle = 4;
                                                                                                (s as any).CloProstitute = 1;
                                                                                                (s as any).CloPunk = 1;
                                                                                                (s as any).CloPrice = 6050;
                                                                                              } else {
                                                                                                (s as any).CloQuality = 4;
                                                                                                (s as any).CloStrength = 135000;
                                                                                                (s as any).CloThinness = 4;
                                                                                                (s as any).CloTopCut = 2;
                                                                                                (s as any).CloSkirtShortness = 6;
                                                                                                (s as any).CloDress = 1;
                                                                                                (s as any).CloPrice = 6300;
                                                                                                if (((s as any).ARGS ?? 0)[0] === 95) {
                                                                                                  (s as any).CloQuality = 4;
                                                                                                  (s as any).CloStrength = 153750;
                                                                                                  (s as any).CloThinness = 5;
                                                                                                  (s as any).CloTopCut = 1;
                                                                                                  (s as any).CloSkirtShortness = 6;
                                                                                                  (s as any).CloStyle = 2;
                                                                                                  (s as any).CloPunk = 1;
                                                                                                  (s as any).CloPrice = 6300;
                                                                                                } else {
                                                                                                  (s as any).CloQuality = 4;
                                                                                                  (s as any).CloStrength = 153750;
                                                                                                  (s as any).CloThinness = 4;
                                                                                                  (s as any).CloTopCut = 2;
                                                                                                  (s as any).CloSkirtShortness = 6;
                                                                                                  (s as any).CloStyle = 2;
                                                                                                  (s as any).CloPrice = 6300;
                                                                                                  if (((s as any).ARGS ?? 0)[0] === 97) {
                                                                                                    (s as any).CloQuality = 4;
                                                                                                    (s as any).CloStrength = 135000;
                                                                                                    (s as any).CloThinness = 4;
                                                                                                    (s as any).CloBra = 1;
                                                                                                    (s as any).CloSkirtShortness = 6;
                                                                                                    (s as any).CloStyle = 4;
                                                                                                    (s as any).CloProstitute = 1;
                                                                                                    (s as any).CloPrice = 6300;
                                                                                                  } else {
                                                                                                    (s as any).CloQuality = 4;
                                                                                                    (s as any).CloStrength = 135000;
                                                                                                    (s as any).CloThinness = 5;
                                                                                                    (s as any).CloBra = 1;
                                                                                                    (s as any).CloSkirtShortness = 6;
                                                                                                    (s as any).CloStyle = 4;
                                                                                                    (s as any).CloProstitute = 1;
                                                                                                    (s as any).CloPrice = 6300;
                                                                                                    if (((s as any).ARGS ?? 0)[0] === 99) {
                                                                                                      (s as any).CloQuality = 4;
                                                                                                      (s as any).CloStrength = 135000;
                                                                                                      (s as any).CloThinness = 4;
                                                                                                      (s as any).CloTopCut = 4;
                                                                                                      (s as any).CloSkirtShortness = 6;
                                                                                                      (s as any).CloStyle = 4;
                                                                                                      (s as any).CloProstitute = 1;
                                                                                                      (s as any).CloBimbo = 1;
                                                                                                      (s as any).CloPrice = 6300;
                                                                                                    } else {
                                                                                                      (s as any).CloQuality = 4;
                                                                                                      (s as any).CloStrength = 135000;
                                                                                                      (s as any).CloThinness = 4;
                                                                                                      (s as any).CloTopCut = 4;
                                                                                                      (s as any).CloSkirtShortness = 6;
                                                                                                      (s as any).CloStyle = 4;
                                                                                                      (s as any).CloProstitute = 1;
                                                                                                      (s as any).CloPrice = 6300;
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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

export const _attributes_bomba_dress: LocationDef = {
  name: '_attributes_bomba_dress',
  region: 'other',
  enter: enter,
};
