// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 3000 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 2: 3300
  // TODO-QSP: 3: 3450
  // TODO-QSP: 4: 3600
  // TODO-QSP: 5: 3750
  // TODO-QSP: CloQuality range is 2-5. 3 for casual short-and-shorts, 4 for clothing specially designed for exerci...
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 2;
    (s as any).CloStrength = 198750;
    (s as any).CloThinness = 4;
    (s as any).CloTopCut = 1;
    (s as any).CloPantsShortness = 5;
    (s as any).CloStyle2 = 6;
    (s as any).CloSport = 1;
    (s as any).CloPrice = 3300;
  } else {
    (s as any).CloQuality = 2;
    (s as any).CloStrength = 198750;
    (s as any).CloThinness = 4;
    (s as any).CloTopCut = 1;
    (s as any).CloPantsShortness = 4;
    (s as any).CloStyle2 = 6;
    (s as any).CloSport = 1;
    (s as any).CloPrice = 3300;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 3;
      (s as any).CloStrength = 204375;
      (s as any).CloThinness = 4;
      (s as any).CloTopCut = 1;
      (s as any).CloPantsShortness = 5;
      (s as any).CloStyle2 = 6;
      (s as any).CloSport = 1;
      (s as any).CloPrice = 3450;
    } else {
      (s as any).CloQuality = 4;
      (s as any).CloStrength = 210000;
      (s as any).CloThinness = 3;
      (s as any).CloTopCut = 1;
      (s as any).CloPantsShortness = 5;
      (s as any).CloStyle2 = 6;
      (s as any).CloSport = 1;
      (s as any).CloPrice = 3600;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 5;
        (s as any).CloStrength = 215625;
        (s as any).CloThinness = 2;
        (s as any).CloTopCut = 1;
        (s as any).CloPantsShortness = 4;
        (s as any).CloOnePiece = 1;
        (s as any).CloStyle2 = 6;
        (s as any).CloSport = 1;
        (s as any).CloPrice = 3750;
      } else {
        (s as any).CloQuality = 2;
        (s as any).CloStrength = 198750;
        (s as any).CloThinness = 4;
        (s as any).CloTopCut = 1;
        (s as any).CloPantsShortness = 4;
        (s as any).CloStyle2 = 6;
        (s as any).CloSport = 1;
        (s as any).CloPrice = 3300;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 3;
          (s as any).CloStrength = 204375;
          (s as any).CloThinness = 6;
          (s as any).CloTopCut = 1;
          (s as any).CloPantsShortness = 5;
          (s as any).CloStyle2 = 6;
          (s as any).CloSport = 1;
          (s as any).CloPrice = 3450;
        } else {
          (s as any).CloQuality = 2;
          (s as any).CloStrength = 198750;
          (s as any).CloThinness = 4;
          (s as any).CloTopCut = 4;
          (s as any).CloPantsShortness = 5;
          (s as any).CloStyle2 = 6;
          (s as any).CloSport = 1;
          (s as any).CloPrice = 3300;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 3;
            (s as any).CloStrength = 204375;
            (s as any).CloThinness = 2;
            (s as any).CloTopCut = 1;
            (s as any).CloPantsShortness = 5;
            (s as any).CloStyle2 = 6;
            (s as any).CloSport = 1;
            (s as any).CloPrice = 3450;
          } else {
            (s as any).CloQuality = 2;
            (s as any).CloStrength = 198750;
            (s as any).CloThinness = 4;
            (s as any).CloTopCut = 2;
            (s as any).CloPantsShortness = 5;
            (s as any).CloStyle2 = 6;
            (s as any).CloSport = 1;
            (s as any).CloPrice = 3300;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 3;
              (s as any).CloStrength = 204375;
              (s as any).CloThinness = 4;
              (s as any).CloTopCut = 3;
              (s as any).CloPantsShortness = 5;
              (s as any).CloStyle2 = 6;
              (s as any).CloSport = 1;
              (s as any).CloPrice = 3450;
            } else {
              (s as any).CloQuality = 2;
              (s as any).CloStrength = 198750;
              (s as any).CloThinness = 4;
              (s as any).CloTopCut = 2;
              (s as any).CloPantsShortness = 5;
              (s as any).CloStyle2 = 6;
              (s as any).CloSport = 1;
              (s as any).CloPrice = 3300;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 3;
                (s as any).CloStrength = 204375;
                (s as any).CloThinness = 4;
                (s as any).CloTopCut = 4;
                (s as any).CloPantsShortness = 6;
                (s as any).CloStyle2 = 6;
                (s as any).CloSport = 1;
                (s as any).CloPrice = 3450;
              } else {
                (s as any).CloQuality = 3;
                (s as any).CloStrength = 204375;
                (s as any).CloThinness = 4;
                (s as any).CloTopCut = 4;
                (s as any).CloPantsShortness = 5;
                (s as any).CloStyle2 = 6;
                (s as any).CloSport = 1;
                (s as any).CloPrice = 3450;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 3;
                  (s as any).CloStrength = 204375;
                  (s as any).CloThinness = 4;
                  (s as any).CloBra = 1;
                  (s as any).CloPantsShortness = 5;
                  (s as any).CloBimbo = 1;
                  (s as any).CloStyle2 = 6;
                  (s as any).CloSport = 1;
                  (s as any).CloPrice = 3450;
                } else {
                  (s as any).CloQuality = 3;
                  (s as any).CloStrength = 204375;
                  (s as any).CloThinness = 4;
                  (s as any).CloBra = 1;
                  (s as any).CloPantsShortness = 5;
                  (s as any).CloStyle2 = 6;
                  (s as any).CloSport = 1;
                  (s as any).CloPrice = 3450;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 3;
                    (s as any).CloStrength = 204375;
                    (s as any).CloThinness = 4;
                    (s as any).CloTopCut = 4;
                    (s as any).CloPantsShortness = 5;
                    (s as any).CloStyle2 = 6;
                    (s as any).CloSport = 1;
                    (s as any).CloPrice = 3450;
                  } else {
                    (s as any).CloQuality = 3;
                    (s as any).CloStrength = 204375;
                    (s as any).CloThinness = 4;
                    (s as any).CloTopCut = 4;
                    (s as any).CloPantsShortness = 5;
                    (s as any).CloStyle2 = 6;
                    (s as any).CloSport = 1;
                    (s as any).CloPrice = 3450;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 3;
                      (s as any).CloStrength = 204375;
                      (s as any).CloThinness = 4;
                      (s as any).CloBra = 1;
                      (s as any).CloPantsShortness = 5;
                      (s as any).CloStyle2 = 6;
                      (s as any).CloSport = 1;
                      (s as any).CloPrice = 3450;
                    } else {
                      (s as any).CloQuality = 3;
                      (s as any).CloStrength = 204375;
                      (s as any).CloThinness = 4;
                      (s as any).CloBra = 1;
                      (s as any).CloPantsShortness = 5;
                      (s as any).CloStyle2 = 6;
                      (s as any).CloSport = 1;
                      (s as any).CloPrice = 3450;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).CloQuality = 3;
                        (s as any).CloStrength = 204375;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 4;
                        (s as any).CloPantsShortness = 5;
                        (s as any).CloStyle2 = 6;
                        (s as any).CloSport = 1;
                        (s as any).CloPrice = 3450;
                      } else {
                        (s as any).CloQuality = 2;
                        (s as any).CloStrength = 198750;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 4;
                        (s as any).CloPantsShortness = 4;
                        (s as any).CloStyle2 = 6;
                        (s as any).CloSport = 1;
                        (s as any).CloPrice = 3300;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).CloQuality = 4;
                          (s as any).CloStrength = 210000;
                          (s as any).CloThinness = 4;
                          (s as any).CloBra = 1;
                          (s as any).CloPantsShortness = 5;
                          (s as any).CloStyle2 = 6;
                          (s as any).CloSport = 1;
                          (s as any).CloPrice = 3600;
                        } else {
                          (s as any).CloQuality = 4;
                          (s as any).CloStrength = 210000;
                          (s as any).CloThinness = 4;
                          (s as any).CloBra = 1;
                          (s as any).CloPantsShortness = 5;
                          (s as any).CloStyle2 = 6;
                          (s as any).CloSport = 1;
                          (s as any).CloPrice = 3600;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).CloQuality = 2;
                            (s as any).CloStrength = 198750;
                            (s as any).CloThinness = 4;
                            (s as any).CloBra = 1;
                            (s as any).CloPantsShortness = 5;
                            (s as any).CloStyle2 = 6;
                            (s as any).CloSport = 1;
                            (s as any).CloPrice = 3300;
                          } else {
                            (s as any).CloQuality = 3;
                            (s as any).CloStrength = 204375;
                            (s as any).CloThinness = 4;
                            (s as any).CloTopCut = 4;
                            (s as any).CloPantsShortness = 5;
                            (s as any).CloStyle2 = 6;
                            (s as any).CloSport = 1;
                            (s as any).CloPrice = 3450;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).CloQuality = 3;
                              (s as any).CloStrength = 204375;
                              (s as any).CloThinness = 4;
                              (s as any).CloTopCut = 4;
                              (s as any).CloPantsShortness = 4;
                              (s as any).CloStyle2 = 6;
                              (s as any).CloSport = 1;
                              (s as any).CloPrice = 3450;
                            } else {
                              (s as any).CloQuality = 2;
                              (s as any).CloStrength = 198750;
                              (s as any).CloThinness = 4;
                              (s as any).CloTopCut = 4;
                              (s as any).CloPantsShortness = 4;
                              (s as any).CloStyle2 = 6;
                              (s as any).CloSport = 1;
                              (s as any).CloPrice = 3300;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).CloQuality = 3;
                                (s as any).CloStrength = 204375;
                                (s as any).CloThinness = 4;
                                (s as any).CloTopCut = 4;
                                (s as any).CloPantsShortness = 4;
                                (s as any).CloStyle2 = 6;
                                (s as any).CloSport = 1;
                                (s as any).CloPrice = 3450;
                              } else {
                                (s as any).CloQuality = 2;
                                (s as any).CloStrength = 198750;
                                (s as any).CloThinness = 4;
                                (s as any).CloTopCut = 4;
                                (s as any).CloPantsShortness = 5;
                                (s as any).CloStyle2 = 6;
                                (s as any).CloSport = 1;
                                (s as any).CloPrice = 3300;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).CloQuality = 3;
                                  (s as any).CloStrength = 204375;
                                  (s as any).CloThinness = 4;
                                  (s as any).CloBra = 1;
                                  (s as any).CloPantsShortness = 5;
                                  (s as any).CloStyle2 = 6;
                                  (s as any).CloSport = 1;
                                  (s as any).CloPrice = 3450;
                                } else {
                                  (s as any).CloQuality = 2;
                                  (s as any).CloStrength = 198750;
                                  (s as any).CloThinness = 4;
                                  (s as any).CloTopCut = 4;
                                  (s as any).CloPantsShortness = 5;
                                  (s as any).CloStyle2 = 6;
                                  (s as any).CloSport = 1;
                                  (s as any).CloPrice = 3300;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).CloQuality = 2;
                                    (s as any).CloStrength = 198750;
                                    (s as any).CloThinness = 4;
                                    (s as any).CloTopCut = 4;
                                    (s as any).CloPantsShortness = 5;
                                    (s as any).CloStyle2 = 6;
                                    (s as any).CloSport = 1;
                                    (s as any).CloPrice = 3300;
                                  } else {
                                    (s as any).CloQuality = 2;
                                    (s as any).CloStrength = 198750;
                                    (s as any).CloThinness = 4;
                                    (s as any).CloTopCut = 4;
                                    (s as any).CloPantsShortness = 5;
                                    (s as any).CloStyle2 = 6;
                                    (s as any).CloSport = 1;
                                    (s as any).CloPrice = 3300;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).CloQuality = 3;
                                      (s as any).CloStrength = 204375;
                                      (s as any).CloThinness = 4;
                                      (s as any).CloTopCut = 2;
                                      (s as any).CloPantsShortness = 5;
                                      (s as any).CloStyle2 = 6;
                                      (s as any).CloSport = 1;
                                      (s as any).CloGoth = 1;
                                      (s as any).CloPrice = 3450;
                                    } else {
                                      (s as any).CloQuality = 3;
                                      (s as any).CloStrength = 204375;
                                      (s as any).CloThinness = 4;
                                      (s as any).CloTopCut = 4;
                                      (s as any).CloPantsShortness = 5;
                                      (s as any).CloStyle2 = 6;
                                      (s as any).CloSport = 1;
                                      (s as any).CloPrice = 3450;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).CloQuality = 3;
                                        (s as any).CloStrength = 204375;
                                        (s as any).CloThinness = 4;
                                        (s as any).CloTopCut = 4;
                                        (s as any).CloPanties = 1;
                                        (s as any).CloStyle2 = 6;
                                        (s as any).CloSport = 1;
                                        (s as any).CloPrice = 3450;
                                      } else {
                                        (s as any).CloQuality = 3;
                                        (s as any).CloStrength = 204375;
                                        (s as any).CloThinness = 4;
                                        (s as any).CloTopCut = 4;
                                        (s as any).CloPanties = 1;
                                        (s as any).CloStyle2 = 6;
                                        (s as any).CloSport = 1;
                                        (s as any).CloPrice = 3450;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).CloQuality = 4;
                                          (s as any).CloStrength = 210000;
                                          (s as any).CloThinness = 4;
                                          (s as any).CloTopCut = 4;
                                          (s as any).CloPanties = 1;
                                          (s as any).CloStyle2 = 6;
                                          (s as any).CloSport = 1;
                                          (s as any).CloPrice = 3600;
                                        } else {
                                          (s as any).CloQuality = 4;
                                          (s as any).CloStrength = 210000;
                                          (s as any).CloThinness = 4;
                                          (s as any).CloTopCut = 4;
                                          (s as any).CloPantsShortness = 5;
                                          (s as any).CloStyle2 = 6;
                                          (s as any).CloSport = 1;
                                          (s as any).CloPrice = 3600;
                                          if (((s as any).ARGS ?? 0)[0] === 41) {
                                            (s as any).CloQuality = 2;
                                            (s as any).CloStrength = 198750;
                                            (s as any).CloThinness = 4;
                                            (s as any).CloTopCut = 4;
                                            (s as any).CloPantsShortness = 5;
                                            (s as any).CloStyle2 = 6;
                                            (s as any).CloSport = 1;
                                            (s as any).CloPrice = 3300;
                                          } else {
                                            (s as any).CloQuality = 3;
                                            (s as any).CloStrength = 204375;
                                            (s as any).CloThinness = 4;
                                            (s as any).CloBra = 1;
                                            (s as any).CloPantsShortness = 4;
                                            (s as any).CloStyle2 = 6;
                                            (s as any).CloSport = 1;
                                            (s as any).CloPrice = 3450;
                                            if (((s as any).ARGS ?? 0)[0] === 43) {
                                              (s as any).CloQuality = 3;
                                              (s as any).CloStrength = 204375;
                                              (s as any).CloThinness = 4;
                                              (s as any).CloTopCut = 4;
                                              (s as any).CloPantsShortness = 4;
                                              (s as any).CloStyle2 = 6;
                                              (s as any).CloSport = 1;
                                              (s as any).CloPrice = 3450;
                                            } else {
                                              (s as any).CloQuality = 3;
                                              (s as any).CloStrength = 204375;
                                              (s as any).CloThinness = 4;
                                              (s as any).CloBra = 1;
                                              (s as any).CloPantsShortness = 4;
                                              (s as any).CloStyle2 = 6;
                                              (s as any).CloSport = 1;
                                              (s as any).CloPrice = 3450;
                                              if (((s as any).ARGS ?? 0)[0] === 45) {
                                                (s as any).CloQuality = 3;
                                                (s as any).CloStrength = 204375;
                                                (s as any).CloThinness = 4;
                                                (s as any).CloBra = 1;
                                                (s as any).CloPantsShortness = 5;
                                                (s as any).CloStyle2 = 6;
                                                (s as any).CloSport = 1;
                                                (s as any).CloPrice = 3450;
                                              } else {
                                                (s as any).CloQuality = 3;
                                                (s as any).CloStrength = 204375;
                                                (s as any).CloThinness = 4;
                                                (s as any).CloTopCut = 4;
                                                (s as any).CloPantsShortness = 5;
                                                (s as any).CloStyle2 = 6;
                                                (s as any).CloSport = 1;
                                                (s as any).CloPrice = 3450;
                                                if (((s as any).ARGS ?? 0)[0] === 47) {
                                                  (s as any).CloQuality = 3;
                                                  (s as any).CloStrength = 204375;
                                                  (s as any).CloThinness = 4;
                                                  (s as any).CloTopCut = 4;
                                                  (s as any).CloPantsShortness = 4;
                                                  (s as any).CloStyle2 = 6;
                                                  (s as any).CloSport = 1;
                                                  (s as any).CloPrice = 3450;
                                                } else {
                                                  (s as any).CloQuality = 3;
                                                  (s as any).CloStrength = 204375;
                                                  (s as any).CloThinness = 4;
                                                  (s as any).CloTopCut = 4;
                                                  (s as any).CloPantsShortness = 4;
                                                  (s as any).CloStyle2 = 6;
                                                  (s as any).CloSport = 1;
                                                  (s as any).CloPrice = 3450;
                                                  if (((s as any).ARGS ?? 0)[0] === 49) {
                                                    (s as any).CloQuality = 4;
                                                    (s as any).CloStrength = 210000;
                                                    (s as any).CloThinness = 4;
                                                    (s as any).CloTopCut = 4;
                                                    (s as any).CloPantsShortness = 5;
                                                    (s as any).CloStyle2 = 6;
                                                    (s as any).CloSport = 1;
                                                    (s as any).CloPrice = 3600;
                                                  } else {
                                                    (s as any).CloQuality = 3;
                                                    (s as any).CloStrength = 204375;
                                                    (s as any).CloThinness = 4;
                                                    (s as any).CloTopCut = 4;
                                                    (s as any).CloPantsShortness = 5;
                                                    (s as any).CloStyle2 = 6;
                                                    (s as any).CloSport = 1;
                                                    (s as any).CloPrice = 3450;
                                                    if (((s as any).ARGS ?? 0)[0] === 51) {
                                                      (s as any).CloQuality = 3;
                                                      (s as any).CloStrength = 204375;
                                                      (s as any).CloThinness = 4;
                                                      (s as any).CloTopCut = 4;
                                                      (s as any).CloPantsShortness = 5;
                                                      (s as any).CloStyle2 = 6;
                                                      (s as any).CloSport = 1;
                                                      (s as any).CloPrice = 3450;
                                                    } else {
                                                      (s as any).CloQuality = 3;
                                                      (s as any).CloStrength = 204375;
                                                      (s as any).CloThinness = 4;
                                                      (s as any).CloBra = 1;
                                                      (s as any).CloPantsShortness = 5;
                                                      (s as any).CloStyle2 = 6;
                                                      (s as any).CloSport = 1;
                                                      (s as any).CloPrice = 3450;
                                                      if (((s as any).ARGS ?? 0)[0] === 53) {
                                                        (s as any).CloQuality = 3;
                                                        (s as any).CloStrength = 204375;
                                                        (s as any).CloThinness = 4;
                                                        (s as any).CloTopCut = 4;
                                                        (s as any).CloPantsShortness = 5;
                                                        (s as any).CloStyle2 = 6;
                                                        (s as any).CloSport = 1;
                                                        (s as any).CloPrice = 3450;
                                                      } else {
                                                        (s as any).CloQuality = 3;
                                                        (s as any).CloStrength = 204375;
                                                        (s as any).CloThinness = 4;
                                                        (s as any).CloTopCut = 4;
                                                        (s as any).CloPantsShortness = 5;
                                                        (s as any).CloStyle2 = 6;
                                                        (s as any).CloSport = 1;
                                                        (s as any).CloPrice = 3450;
                                                        if (((s as any).ARGS ?? 0)[0] === 55) {
                                                          (s as any).CloQuality = 3;
                                                          (s as any).CloStrength = 204375;
                                                          (s as any).CloThinness = 4;
                                                          (s as any).CloBra = 1;
                                                          (s as any).CloPantsShortness = 5;
                                                          (s as any).CloStyle2 = 6;
                                                          (s as any).CloSport = 1;
                                                          (s as any).CloPrice = 3450;
                                                        } else {
                                                          (s as any).CloQuality = 4;
                                                          (s as any).CloStrength = 210000;
                                                          (s as any).CloThinness = 4;
                                                          (s as any).CloTopCut = 4;
                                                          (s as any).CloPantsShortness = 5;
                                                          (s as any).CloStyle2 = 6;
                                                          (s as any).CloSport = 1;
                                                          (s as any).CloPrice = 3600;
                                                          if (((s as any).ARGS ?? 0)[0] === 57) {
                                                            (s as any).CloQuality = 3;
                                                            (s as any).CloStrength = 204375;
                                                            (s as any).CloThinness = 4;
                                                            (s as any).CloTopCut = 4;
                                                            (s as any).CloPantsShortness = 5;
                                                            (s as any).CloStyle2 = 6;
                                                            (s as any).CloSport = 1;
                                                            (s as any).CloPrice = 3450;
                                                          } else {
                                                            (s as any).CloQuality = 3;
                                                            (s as any).CloStrength = 204375;
                                                            (s as any).CloThinness = 4;
                                                            (s as any).CloBra = 1;
                                                            (s as any).CloPantsShortness = 4;
                                                            (s as any).CloStyle2 = 6;
                                                            (s as any).CloSport = 1;
                                                            (s as any).CloPrice = 3450;
                                                            if (((s as any).ARGS ?? 0)[0] === 59) {
                                                              (s as any).CloQuality = 2;
                                                              (s as any).CloStrength = 198750;
                                                              (s as any).CloThinness = 4;
                                                              (s as any).CloBra = 1;
                                                              (s as any).CloPantsShortness = 5;
                                                              (s as any).CloStyle2 = 6;
                                                              (s as any).CloSport = 1;
                                                              (s as any).CloPrice = 3300;
                                                            } else {
                                                              (s as any).CloQuality = 3;
                                                              (s as any).CloStrength = 204375;
                                                              (s as any).CloThinness = 4;
                                                              (s as any).CloTopCut = 2;
                                                              (s as any).CloPantsShortness = 4;
                                                              (s as any).CloStyle2 = 6;
                                                              (s as any).CloSport = 1;
                                                              (s as any).CloPrice = 3450;
                                                              if (((s as any).ARGS ?? 0)[0] === 61) {
                                                                (s as any).CloQuality = 3;
                                                                (s as any).CloStrength = 204375;
                                                                (s as any).CloThinness = 4;
                                                                (s as any).CloTopCut = 2;
                                                                (s as any).CloSkirtShortness = 4;
                                                                (s as any).CloStyle2 = 6;
                                                                (s as any).CloSport = 1;
                                                                (s as any).CloPrice = 3450;
                                                              } else {
                                                                (s as any).CloQuality = 3;
                                                                (s as any).CloStrength = 204375;
                                                                (s as any).CloThinness = 4;
                                                                (s as any).CloTopCut = 2;
                                                                (s as any).CloSkirtShortness = 4;
                                                                (s as any).CloStyle2 = 6;
                                                                (s as any).CloSport = 1;
                                                                (s as any).CloPrice = 3450;
                                                                if (((s as any).ARGS ?? 0)[0] === 63) {
                                                                  (s as any).CloQuality = 3;
                                                                  (s as any).CloStrength = 204375;
                                                                  (s as any).CloThinness = 4;
                                                                  (s as any).CloTopCut = 2;
                                                                  (s as any).CloSkirtShortness = 4;
                                                                  (s as any).CloStyle2 = 6;
                                                                  (s as any).CloSport = 1;
                                                                  (s as any).CloPrice = 3450;
                                                                } else {
                                                                  (s as any).CloQuality = 2;
                                                                  (s as any).CloStrength = 198750;
                                                                  (s as any).CloThinness = 4;
                                                                  (s as any).CloTopCut = 2;
                                                                  (s as any).CloSkirtShortness = 4;
                                                                  (s as any).CloStyle2 = 6;
                                                                  (s as any).CloSport = 1;
                                                                  (s as any).CloPrice = 3300;
                                                                  if (((s as any).ARGS ?? 0)[0] === 65) {
                                                                    (s as any).CloQuality = 5;
                                                                    (s as any).CloStrength = 215625;
                                                                    (s as any).CloThinness = 4;
                                                                    (s as any).CloTopCut = 2;
                                                                    (s as any).CloSkirtShortness = 4;
                                                                    (s as any).CloStyle2 = 6;
                                                                    (s as any).CloSport = 1;
                                                                    (s as any).CloPrice = 3750;
                                                                  } else {
                                                                    (s as any).CloQuality = 3;
                                                                    (s as any).CloStrength = 204375;
                                                                    (s as any).CloThinness = 4;
                                                                    (s as any).CloTopCut = 1;
                                                                    (s as any).CloSkirtShortness = 4;
                                                                    (s as any).CloStyle2 = 6;
                                                                    (s as any).CloSport = 1;
                                                                    (s as any).CloPrice = 3450;
                                                                    if (((s as any).ARGS ?? 0)[0] === 67) {
                                                                      (s as any).CloQuality = 3;
                                                                      (s as any).CloStrength = 204375;
                                                                      (s as any).CloThinness = 4;
                                                                      (s as any).CloTopCut = 1;
                                                                      (s as any).CloSkirtShortness = 4;
                                                                      (s as any).CloStyle2 = 6;
                                                                      (s as any).CloSport = 1;
                                                                      (s as any).CloPrice = 3450;
                                                                    } else {
                                                                      (s as any).CloQuality = 4;
                                                                      (s as any).CloStrength = 210000;
                                                                      (s as any).CloThinness = 4;
                                                                      (s as any).CloTopCut = 1;
                                                                      (s as any).CloSkirtShortness = 4;
                                                                      (s as any).CloStyle2 = 6;
                                                                      (s as any).CloSport = 1;
                                                                      (s as any).CloPrice = 3600;
                                                                      if (((s as any).ARGS ?? 0)[0] === 69) {
                                                                        (s as any).CloQuality = 4;
                                                                        (s as any).CloStrength = 210000;
                                                                        (s as any).CloThinness = 4;
                                                                        (s as any).CloTopCut = 1;
                                                                        (s as any).CloSkirtShortness = 4;
                                                                        (s as any).CloStyle2 = 6;
                                                                        (s as any).CloSport = 1;
                                                                        (s as any).CloPrice = 3600;
                                                                      } else {
                                                                        (s as any).CloQuality = 4;
                                                                        (s as any).CloStrength = 210000;
                                                                        (s as any).CloThinness = 4;
                                                                        (s as any).CloTopCut = 1;
                                                                        (s as any).CloSkirtShortness = 5;
                                                                        (s as any).CloStyle2 = 6;
                                                                        (s as any).CloSport = 1;
                                                                        (s as any).CloPrice = 3600;
                                                                        if (((s as any).ARGS ?? 0)[0] === 71) {
                                                                          (s as any).CloQuality = 4;
                                                                          (s as any).CloStrength = 210000;
                                                                          (s as any).CloThinness = 4;
                                                                          (s as any).CloTopCut = 4;
                                                                          (s as any).CloPantsShortness = 1;
                                                                          (s as any).CloStyle2 = 6;
                                                                          (s as any).CloSport = 1;
                                                                          (s as any).CloPrice = 3600;
                                                                        } else {
                                                                          (s as any).CloQuality = 4;
                                                                          (s as any).CloStrength = 210000;
                                                                          (s as any).CloThinness = 5;
                                                                          (s as any).CloTopCut = 2;
                                                                          (s as any).CloPantsShortness = 1;
                                                                          (s as any).CloStyle2 = 6;
                                                                          (s as any).CloSport = 1;
                                                                          (s as any).CloPrice = 3600;
                                                                          if (((s as any).ARGS ?? 0)[0] === 73) {
                                                                            (s as any).CloQuality = 4;
                                                                            (s as any).CloStrength = 210000;
                                                                            (s as any).CloThinness = 4;
                                                                            (s as any).CloTopCut = 1;
                                                                            (s as any).CloPantsShortness = 1;
                                                                            (s as any).CloStyle2 = 6;
                                                                            (s as any).CloSport = 1;
                                                                            (s as any).CloPrice = 3600;
                                                                          } else {
                                                                            (s as any).CloQuality = 4;
                                                                            (s as any).CloStrength = 210000;
                                                                            (s as any).CloThinness = 4;
                                                                            (s as any).CloTopCut = 1;
                                                                            (s as any).CloPantsShortness = 1;
                                                                            (s as any).CloStyle2 = 6;
                                                                            (s as any).CloSport = 1;
                                                                            (s as any).CloPrice = 3600;
                                                                            if (((s as any).ARGS ?? 0)[0] === 75) {
                                                                              (s as any).CloQuality = 4;
                                                                              (s as any).CloStrength = 210000;
                                                                              (s as any).CloThinness = 4;
                                                                              (s as any).CloTopCut = 1;
                                                                              (s as any).CloPantsShortness = 1;
                                                                              (s as any).CloStyle2 = 6;
                                                                              (s as any).CloSport = 1;
                                                                              (s as any).CloPrice = 3600;
                                                                            } else {
                                                                              (s as any).CloQuality = 4;
                                                                              (s as any).CloStrength = 210000;
                                                                              (s as any).CloThinness = 4;
                                                                              (s as any).CloTopCut = 4;
                                                                              (s as any).CloPantsShortness = 1;
                                                                              (s as any).CloStyle2 = 6;
                                                                              (s as any).CloSport = 1;
                                                                              (s as any).CloPrice = 3600;
                                                                              if (((s as any).ARGS ?? 0)[0] === 77) {
                                                                                (s as any).CloQuality = 4;
                                                                                (s as any).CloStrength = 210000;
                                                                                (s as any).CloThinness = 3;
                                                                                (s as any).CloTopCut = 1;
                                                                                (s as any).CloPantsShortness = 1;
                                                                                (s as any).CloStyle2 = 6;
                                                                                (s as any).CloSport = 1;
                                                                                (s as any).CloPrice = 3600;
                                                                              } else {
                                                                                (s as any).CloQuality = 3;
                                                                                (s as any).CloStrength = 204375;
                                                                                (s as any).CloThinness = 4;
                                                                                (s as any).CloTopCut = 4;
                                                                                (s as any).CloPantsShortness = 3;
                                                                                (s as any).CloBimbo = 1;
                                                                                (s as any).CloStyle2 = 6;
                                                                                (s as any).CloSport = 1;
                                                                                (s as any).CloPrice = 3450;
                                                                                if (((s as any).ARGS ?? 0)[0] === 79) {
                                                                                  (s as any).CloQuality = 4;
                                                                                  (s as any).CloStrength = 210000;
                                                                                  (s as any).CloThinness = 3;
                                                                                  (s as any).CloTopCut = 4;
                                                                                  (s as any).CloPantsShortness = 1;
                                                                                  (s as any).CloStyle2 = 6;
                                                                                  (s as any).CloSport = 1;
                                                                                  (s as any).CloPrice = 3600;
                                                                                } else {
                                                                                  (s as any).CloQuality = 4;
                                                                                  (s as any).CloStrength = 210000;
                                                                                  (s as any).CloThinness = 1;
                                                                                  (s as any).CloTopCut = 2;
                                                                                  (s as any).CloPantsShortness = 1;
                                                                                  (s as any).CloStyle2 = 6;
                                                                                  (s as any).CloSport = 1;
                                                                                  (s as any).CloGoth = 1;
                                                                                  (s as any).CloPrice = 3600;
                                                                                  if (((s as any).ARGS ?? 0)[0] === 81) {
                                                                                    (s as any).CloQuality = 4;
                                                                                    (s as any).CloStrength = 210000;
                                                                                    (s as any).CloThinness = 1;
                                                                                    (s as any).CloTopCut = 1;
                                                                                    (s as any).CloPantsShortness = 1;
                                                                                    (s as any).CloStyle2 = 6;
                                                                                    (s as any).CloSport = 1;
                                                                                    (s as any).CloPrice = 3600;
                                                                                  } else {
                                                                                    (s as any).CloQuality = 3;
                                                                                    (s as any).CloStrength = 204375;
                                                                                    (s as any).CloThinness = 3;
                                                                                    (s as any).CloTopCut = 1;
                                                                                    (s as any).CloPantsShortness = 1;
                                                                                    (s as any).CloStyle2 = 6;
                                                                                    (s as any).CloSport = 1;
                                                                                    (s as any).CloPrice = 3450;
                                                                                    if (((s as any).ARGS ?? 0)[0] === 83) {
                                                                                      (s as any).CloQuality = 3;
                                                                                      (s as any).CloStrength = 204375;
                                                                                      (s as any).CloThinness = 3;
                                                                                      (s as any).CloTopCut = 2;
                                                                                      (s as any).CloPantsShortness = 1;
                                                                                      (s as any).CloStyle2 = 6;
                                                                                      (s as any).CloSport = 1;
                                                                                      (s as any).CloPrice = 3450;
                                                                                    } else {
                                                                                      (s as any).CloQuality = 4;
                                                                                      (s as any).CloStrength = 210000;
                                                                                      (s as any).CloThinness = 6;
                                                                                      (s as any).CloTopCut = 2;
                                                                                      (s as any).CloPantsShortness = 1;
                                                                                      (s as any).CloStyle2 = 6;
                                                                                      (s as any).CloSport = 1;
                                                                                      (s as any).CloPrice = 3600;
                                                                                      if (((s as any).ARGS ?? 0)[0] === 85) {
                                                                                        (s as any).CloQuality = 4;
                                                                                        (s as any).CloStrength = 210000;
                                                                                        (s as any).CloThinness = 4;
                                                                                        (s as any).CloTopCut = 1;
                                                                                        (s as any).CloPantsShortness = 1;
                                                                                        (s as any).CloStyle2 = 6;
                                                                                        (s as any).CloSport = 1;
                                                                                        (s as any).CloPrice = 3600;
                                                                                      } else {
                                                                                        (s as any).CloQuality = 5;
                                                                                        (s as any).CloStrength = 215625;
                                                                                        (s as any).CloThinness = 3;
                                                                                        (s as any).CloTopCut = 1;
                                                                                        (s as any).CloPantsShortness = 1;
                                                                                        (s as any).CloStyle2 = 6;
                                                                                        (s as any).CloSport = 1;
                                                                                        (s as any).CloPrice = 3750;
                                                                                        if (((s as any).ARGS ?? 0)[0] === 87) {
                                                                                          (s as any).CloQuality = 4;
                                                                                          (s as any).CloStrength = 210000;
                                                                                          (s as any).CloThinness = 2;
                                                                                          (s as any).CloTopCut = 1;
                                                                                          (s as any).CloPantsShortness = 1;
                                                                                          (s as any).CloStyle2 = 6;
                                                                                          (s as any).CloSport = 1;
                                                                                          (s as any).CloPrice = 3600;
                                                                                        } else {
                                                                                          (s as any).CloQuality = 4;
                                                                                          (s as any).CloStrength = 210000;
                                                                                          (s as any).CloThinness = 2;
                                                                                          (s as any).CloTopCut = 1;
                                                                                          (s as any).CloPantsShortness = 1;
                                                                                          (s as any).CloStyle2 = 6;
                                                                                          (s as any).CloSport = 1;
                                                                                          (s as any).CloPrice = 3600;
                                                                                          if (((s as any).ARGS ?? 0)[0] === 89) {
                                                                                            (s as any).CloQuality = 4;
                                                                                            (s as any).CloStrength = 210000;
                                                                                            (s as any).CloThinness = 3;
                                                                                            (s as any).CloTopCut = 1;
                                                                                            (s as any).CloPantsShortness = 1;
                                                                                            (s as any).CloStyle2 = 6;
                                                                                            (s as any).CloSport = 1;
                                                                                            (s as any).CloPrice = 3600;
                                                                                          } else {
                                                                                            (s as any).CloQuality = 3;
                                                                                            (s as any).CloStrength = 204375;
                                                                                            (s as any).CloThinness = 3;
                                                                                            (s as any).CloTopCut = 1;
                                                                                            (s as any).CloPantsShortness = 1;
                                                                                            (s as any).CloStyle2 = 6;
                                                                                            (s as any).CloSport = 1;
                                                                                            (s as any).CloPrice = 3450;
                                                                                            if (((s as any).ARGS ?? 0)[0] === 91) {
                                                                                              (s as any).CloQuality = 3;
                                                                                              (s as any).CloStrength = 204375;
                                                                                              (s as any).CloThinness = 1;
                                                                                              (s as any).CloTopCut = 1;
                                                                                              (s as any).CloPantsShortness = 1;
                                                                                              (s as any).CloStyle2 = 6;
                                                                                              (s as any).CloSport = 1;
                                                                                              (s as any).CloPrice = 3450;
                                                                                            } else {
                                                                                              (s as any).CloQuality = 3;
                                                                                              (s as any).CloStrength = 204375;
                                                                                              (s as any).CloThinness = 1;
                                                                                              (s as any).CloTopCut = 1;
                                                                                              (s as any).CloPantsShortness = 1;
                                                                                              (s as any).CloStyle2 = 6;
                                                                                              (s as any).CloSport = 1;
                                                                                              (s as any).CloPrice = 3450;
                                                                                              if (((s as any).ARGS ?? 0)[0] === 93) {
                                                                                                (s as any).CloQuality = 4;
                                                                                                (s as any).CloStrength = 210000;
                                                                                                (s as any).CloThinness = 1;
                                                                                                (s as any).CloTopCut = 1;
                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                (s as any).CloStyle2 = 6;
                                                                                                (s as any).CloSport = 1;
                                                                                                (s as any).CloPrice = 3600;
                                                                                              } else {
                                                                                                (s as any).CloQuality = 4;
                                                                                                (s as any).CloStrength = 210000;
                                                                                                (s as any).CloThinness = 1;
                                                                                                (s as any).CloTopCut = 1;
                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                (s as any).CloStyle2 = 6;
                                                                                                (s as any).CloSport = 1;
                                                                                                (s as any).CloPrice = 3600;
                                                                                                if (((s as any).ARGS ?? 0)[0] === 95) {
                                                                                                  (s as any).CloQuality = 3;
                                                                                                  (s as any).CloStrength = 204375;
                                                                                                  (s as any).CloThinness = 6;
                                                                                                  (s as any).CloTopCut = 1;
                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                  (s as any).CloStyle2 = 6;
                                                                                                  (s as any).CloSport = 1;
                                                                                                  (s as any).CloPrice = 3450;
                                                                                                } else {
                                                                                                  (s as any).CloQuality = 3;
                                                                                                  (s as any).CloStrength = 204375;
                                                                                                  (s as any).CloThinness = 5;
                                                                                                  (s as any).CloTopCut = 2;
                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                  (s as any).CloStyle2 = 6;
                                                                                                  (s as any).CloSport = 1;
                                                                                                  (s as any).CloPrice = 3450;
                                                                                                  if (((s as any).ARGS ?? 0)[0] === 97) {
                                                                                                    (s as any).CloQuality = 3;
                                                                                                    (s as any).CloStrength = 204375;
                                                                                                    (s as any).CloThinness = 4;
                                                                                                    (s as any).CloTopCut = 4;
                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                    (s as any).CloStyle2 = 6;
                                                                                                    (s as any).CloSport = 1;
                                                                                                    (s as any).CloPrice = 3450;
                                                                                                  } else {
                                                                                                    (s as any).CloQuality = 4;
                                                                                                    (s as any).CloStrength = 210000;
                                                                                                    (s as any).CloThinness = 4;
                                                                                                    (s as any).CloTopCut = 1;
                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                    (s as any).CloStyle2 = 6;
                                                                                                    (s as any).CloSport = 1;
                                                                                                    (s as any).CloPrice = 3600;
                                                                                                    if (((s as any).ARGS ?? 0)[0] === 99) {
                                                                                                      (s as any).CloQuality = 4;
                                                                                                      (s as any).CloStrength = 210000;
                                                                                                      (s as any).CloThinness = 4;
                                                                                                      (s as any).CloTopCut = 4;
                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                      (s as any).CloStyle2 = 6;
                                                                                                      (s as any).CloSport = 1;
                                                                                                      (s as any).CloPrice = 3600;
                                                                                                    } else {
                                                                                                      (s as any).CloQuality = 3;
                                                                                                      (s as any).CloStrength = 204375;
                                                                                                      (s as any).CloThinness = 4;
                                                                                                      (s as any).CloTopCut = 4;
                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                      (s as any).CloStyle2 = 6;
                                                                                                      (s as any).CloSport = 1;
                                                                                                      (s as any).CloPrice = 3450;
                                                                                                      if (((s as any).ARGS ?? 0)[0] === 101) {
                                                                                                        (s as any).CloQuality = 3;
                                                                                                        (s as any).CloStrength = 204375;
                                                                                                        (s as any).CloThinness = 4;
                                                                                                        (s as any).CloTopCut = 2;
                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                        (s as any).CloStyle2 = 6;
                                                                                                        (s as any).CloSport = 1;
                                                                                                        (s as any).CloPrice = 3450;
                                                                                                      } else {
                                                                                                        (s as any).CloQuality = 3;
                                                                                                        (s as any).CloStrength = 204375;
                                                                                                        (s as any).CloThinness = 4;
                                                                                                        (s as any).CloTopCut = 2;
                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                        (s as any).CloStyle2 = 6;
                                                                                                        (s as any).CloSport = 1;
                                                                                                        (s as any).CloPrice = 3450;
                                                                                                        if (((s as any).ARGS ?? 0)[0] === 103) {
                                                                                                          (s as any).CloQuality = 3;
                                                                                                          (s as any).CloStrength = 204375;
                                                                                                          (s as any).CloThinness = 4;
                                                                                                          (s as any).CloTopCut = 4;
                                                                                                          (s as any).CloPantsShortness = 1;
                                                                                                          (s as any).CloStyle2 = 6;
                                                                                                          (s as any).CloSport = 1;
                                                                                                          (s as any).CloPrice = 3450;
                                                                                                        } else {
                                                                                                          (s as any).CloQuality = 3;
                                                                                                          (s as any).CloStrength = 204375;
                                                                                                          (s as any).CloThinness = 4;
                                                                                                          (s as any).CloTopCut = 4;
                                                                                                          (s as any).CloPantsShortness = 1;
                                                                                                          (s as any).CloStyle2 = 6;
                                                                                                          (s as any).CloSport = 1;
                                                                                                          (s as any).CloPrice = 3450;
                                                                                                          if (((s as any).ARGS ?? 0)[0] === 105) {
                                                                                                            (s as any).CloQuality = 4;
                                                                                                            (s as any).CloStrength = 210000;
                                                                                                            (s as any).CloThinness = 3;
                                                                                                            (s as any).CloTopCut = 2;
                                                                                                            (s as any).CloPantsShortness = 1;
                                                                                                            (s as any).CloStyle2 = 6;
                                                                                                            (s as any).CloSport = 1;
                                                                                                            (s as any).CloPrice = 3600;
                                                                                                          } else {
                                                                                                            (s as any).CloQuality = 4;
                                                                                                            (s as any).CloStrength = 210000;
                                                                                                            (s as any).CloThinness = 3;
                                                                                                            (s as any).CloTopCut = 2;
                                                                                                            (s as any).CloPantsShortness = 1;
                                                                                                            (s as any).CloStyle2 = 6;
                                                                                                            (s as any).CloSport = 1;
                                                                                                            (s as any).CloPrice = 3600;
                                                                                                            if (((s as any).ARGS ?? 0)[0] === 107) {
                                                                                                              (s as any).CloQuality = 4;
                                                                                                              (s as any).CloStrength = 210000;
                                                                                                              (s as any).CloThinness = 4;
                                                                                                              (s as any).CloTopCut = 3;
                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                              (s as any).CloStyle2 = 6;
                                                                                                              (s as any).CloSport = 1;
                                                                                                              (s as any).CloBimbo = 1;
                                                                                                              (s as any).CloPrice = 3600;
                                                                                                            } else {
                                                                                                              (s as any).CloQuality = 3;
                                                                                                              (s as any).CloStrength = 204375;
                                                                                                              (s as any).CloThinness = 4;
                                                                                                              (s as any).CloBra = 1;
                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                              (s as any).CloStyle2 = 6;
                                                                                                              (s as any).CloSport = 1;
                                                                                                              (s as any).CloPrice = 3450;
                                                                                                              if (((s as any).ARGS ?? 0)[0] === 109) {
                                                                                                                (s as any).CloQuality = 4;
                                                                                                                (s as any).CloStrength = 210000;
                                                                                                                (s as any).CloThinness = 4;
                                                                                                                (s as any).CloBra = 1;
                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                (s as any).CloStyle2 = 6;
                                                                                                                (s as any).CloSport = 1;
                                                                                                                (s as any).CloPrice = 3600;
                                                                                                              } else {
                                                                                                                (s as any).CloQuality = 3;
                                                                                                                (s as any).CloStrength = 204375;
                                                                                                                (s as any).CloThinness = 4;
                                                                                                                (s as any).CloTopCut = 4;
                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                (s as any).CloStyle2 = 6;
                                                                                                                (s as any).CloSport = 1;
                                                                                                                (s as any).CloPrice = 3450;
                                                                                                                if (((s as any).ARGS ?? 0)[0] === 111) {
                                                                                                                  (s as any).CloQuality = 3;
                                                                                                                  (s as any).CloStrength = 204375;
                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                  (s as any).CloTopCut = 4;
                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                  (s as any).CloStyle2 = 6;
                                                                                                                  (s as any).CloSport = 1;
                                                                                                                  (s as any).CloPrice = 3450;
                                                                                                                } else {
                                                                                                                  (s as any).CloQuality = 4;
                                                                                                                  (s as any).CloStrength = 210000;
                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                  (s as any).CloTopCut = 4;
                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                  (s as any).CloStyle2 = 6;
                                                                                                                  (s as any).CloSport = 1;
                                                                                                                  (s as any).CloPrice = 3600;
                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 113) {
                                                                                                                    (s as any).CloQuality = 3;
                                                                                                                    (s as any).CloStrength = 204375;
                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                    (s as any).CloTopCut = 4;
                                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                                    (s as any).CloStyle2 = 6;
                                                                                                                    (s as any).CloSport = 1;
                                                                                                                    (s as any).CloPrice = 3450;
                                                                                                                  } else {
                                                                                                                    (s as any).CloQuality = 4;
                                                                                                                    (s as any).CloStrength = 210000;
                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                    (s as any).CloTopCut = 4;
                                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                                    (s as any).CloStyle2 = 6;
                                                                                                                    (s as any).CloSport = 1;
                                                                                                                    (s as any).CloPrice = 3600;
                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 115) {
                                                                                                                      (s as any).CloQuality = 3;
                                                                                                                      (s as any).CloStrength = 204375;
                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                      (s as any).CloBra = 1;
                                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                                      (s as any).CloStyle2 = 6;
                                                                                                                      (s as any).CloSport = 1;
                                                                                                                      (s as any).CloPrice = 3450;
                                                                                                                    } else {
                                                                                                                      (s as any).CloQuality = 3;
                                                                                                                      (s as any).CloStrength = 204375;
                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                      (s as any).CloBra = 1;
                                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                                      (s as any).CloStyle2 = 6;
                                                                                                                      (s as any).CloSport = 1;
                                                                                                                      (s as any).CloPrice = 3450;
                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 117) {
                                                                                                                        (s as any).CloQuality = 3;
                                                                                                                        (s as any).CloStrength = 204375;
                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                        (s as any).CloBra = 1;
                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                        (s as any).CloStyle2 = 6;
                                                                                                                        (s as any).CloSport = 1;
                                                                                                                        (s as any).CloPrice = 3450;
                                                                                                                      } else {
                                                                                                                        (s as any).CloQuality = 4;
                                                                                                                        (s as any).CloStrength = 210000;
                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                        (s as any).CloBra = 1;
                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                        (s as any).CloStyle2 = 6;
                                                                                                                        (s as any).CloSport = 1;
                                                                                                                        (s as any).CloPrice = 3600;
                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 119) {
                                                                                                                          (s as any).CloQuality = 3;
                                                                                                                          (s as any).CloStrength = 204375;
                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                          (s as any).CloTopCut = 4;
                                                                                                                          (s as any).CloPantsShortness = 1;
                                                                                                                          (s as any).CloStyle2 = 6;
                                                                                                                          (s as any).CloSport = 1;
                                                                                                                          (s as any).CloPrice = 3450;
                                                                                                                        } else {
                                                                                                                          (s as any).CloQuality = 3;
                                                                                                                          (s as any).CloStrength = 204375;
                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                          (s as any).CloTopCut = 4;
                                                                                                                          (s as any).CloPantsShortness = 1;
                                                                                                                          (s as any).CloStyle2 = 6;
                                                                                                                          (s as any).CloSport = 1;
                                                                                                                          (s as any).CloPrice = 3450;
                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 121) {
                                                                                                                            (s as any).CloQuality = 3;
                                                                                                                            (s as any).CloStrength = 204375;
                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                            (s as any).CloTopCut = 4;
                                                                                                                            (s as any).CloPantsShortness = 1;
                                                                                                                            (s as any).CloStyle2 = 6;
                                                                                                                            (s as any).CloSport = 1;
                                                                                                                            (s as any).CloPrice = 3450;
                                                                                                                          } else {
                                                                                                                            (s as any).CloQuality = 3;
                                                                                                                            (s as any).CloStrength = 204375;
                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                            (s as any).CloTopCut = 4;
                                                                                                                            (s as any).CloPantsShortness = 1;
                                                                                                                            (s as any).CloStyle2 = 6;
                                                                                                                            (s as any).CloSport = 1;
                                                                                                                            (s as any).CloPrice = 3450;
                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 123) {
                                                                                                                              (s as any).CloQuality = 3;
                                                                                                                              (s as any).CloStrength = 204375;
                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                              (s as any).CloTopCut = 4;
                                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                                              (s as any).CloStyle2 = 6;
                                                                                                                              (s as any).CloSport = 1;
                                                                                                                              (s as any).CloPrice = 3450;
                                                                                                                            } else {
                                                                                                                              (s as any).CloQuality = 4;
                                                                                                                              (s as any).CloStrength = 210000;
                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                              (s as any).CloTopCut = 3;
                                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                                              (s as any).CloBimbo = 1;
                                                                                                                              (s as any).CloStyle2 = 6;
                                                                                                                              (s as any).CloSport = 1;
                                                                                                                              (s as any).CloPrice = 3600;
                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 125) {
                                                                                                                                (s as any).CloQuality = 3;
                                                                                                                                (s as any).CloStrength = 204375;
                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                (s as any).CloTopCut = 4;
                                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                                (s as any).CloStyle2 = 6;
                                                                                                                                (s as any).CloSport = 1;
                                                                                                                                (s as any).CloPrice = 3450;
                                                                                                                              } else {
                                                                                                                                (s as any).CloQuality = 4;
                                                                                                                                (s as any).CloStrength = 210000;
                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                (s as any).CloBra = 1;
                                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                                (s as any).CloStyle2 = 6;
                                                                                                                                (s as any).CloSport = 1;
                                                                                                                                (s as any).CloPrice = 3600;
                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 127) {
                                                                                                                                  (s as any).CloQuality = 4;
                                                                                                                                  (s as any).CloStrength = 210000;
                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                  (s as any).CloBra = 1;
                                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                                  (s as any).CloStyle2 = 6;
                                                                                                                                  (s as any).CloSport = 1;
                                                                                                                                  (s as any).CloPrice = 3600;
                                                                                                                                } else {
                                                                                                                                  (s as any).CloQuality = 4;
                                                                                                                                  (s as any).CloStrength = 210000;
                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                  (s as any).CloTopCut = 4;
                                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                                  (s as any).CloStyle2 = 6;
                                                                                                                                  (s as any).CloSport = 1;
                                                                                                                                  (s as any).CloPrice = 3600;
                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 129) {
                                                                                                                                    (s as any).CloQuality = 4;
                                                                                                                                    (s as any).CloStrength = 210000;
                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                    (s as any).CloTopCut = 4;
                                                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                                                    (s as any).CloStyle2 = 6;
                                                                                                                                    (s as any).CloSport = 1;
                                                                                                                                    (s as any).CloPrice = 3600;
                                                                                                                                  } else {
                                                                                                                                    (s as any).CloQuality = 4;
                                                                                                                                    (s as any).CloStrength = 210000;
                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                    (s as any).CloTopCut = 4;
                                                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                                                    (s as any).CloStyle2 = 6;
                                                                                                                                    (s as any).CloSport = 1;
                                                                                                                                    (s as any).CloPrice = 3600;
                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 131) {
                                                                                                                                      (s as any).CloQuality = 4;
                                                                                                                                      (s as any).CloStrength = 210000;
                                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                                      (s as any).CloTopCut = 4;
                                                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                                                      (s as any).CloStyle2 = 6;
                                                                                                                                      (s as any).CloSport = 1;
                                                                                                                                      (s as any).CloPrice = 3600;
                                                                                                                                    } else {
                                                                                                                                      (s as any).CloQuality = 4;
                                                                                                                                      (s as any).CloStrength = 210000;
                                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                                      (s as any).CloTopCut = 4;
                                                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                                                      (s as any).CloStyle2 = 6;
                                                                                                                                      (s as any).CloSport = 1;
                                                                                                                                      (s as any).CloPrice = 3600;
                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 133) {
                                                                                                                                        (s as any).CloQuality = 3;
                                                                                                                                        (s as any).CloStrength = 204375;
                                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                                        (s as any).CloTopCut = 4;
                                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                                        (s as any).CloStyle2 = 6;
                                                                                                                                        (s as any).CloSport = 1;
                                                                                                                                        (s as any).CloPrice = 3450;
                                                                                                                                      } else {
                                                                                                                                        (s as any).CloQuality = 3;
                                                                                                                                        (s as any).CloStrength = 204375;
                                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                                        (s as any).CloTopCut = 4;
                                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                                        (s as any).CloStyle2 = 6;
                                                                                                                                        (s as any).CloSport = 1;
                                                                                                                                        (s as any).CloPrice = 3450;
                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 135) {
                                                                                                                                          (s as any).CloQuality = 3;
                                                                                                                                          (s as any).CloStrength = 204375;
                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                          (s as any).CloTopCut = 4;
                                                                                                                                          (s as any).CloPantsShortness = 1;
                                                                                                                                          (s as any).CloStyle2 = 6;
                                                                                                                                          (s as any).CloSport = 1;
                                                                                                                                          (s as any).CloBimbo = 1;
                                                                                                                                          (s as any).CloPrice = 3450;
                                                                                                                                        } else {
                                                                                                                                          (s as any).CloQuality = 3;
                                                                                                                                          (s as any).CloStrength = 204375;
                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                          (s as any).CloBra = 1;
                                                                                                                                          (s as any).CloPantsShortness = 1;
                                                                                                                                          (s as any).CloStyle2 = 6;
                                                                                                                                          (s as any).CloSport = 1;
                                                                                                                                          (s as any).CloPrice = 3450;
                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 137) {
                                                                                                                                            (s as any).CloQuality = 4;
                                                                                                                                            (s as any).CloStrength = 210000;
                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                            (s as any).CloTopCut = 4;
                                                                                                                                            (s as any).CloPantsShortness = 1;
                                                                                                                                            (s as any).CloStyle2 = 6;
                                                                                                                                            (s as any).CloSport = 1;
                                                                                                                                            (s as any).CloPrice = 3600;
                                                                                                                                          } else {
                                                                                                                                            (s as any).CloQuality = 3;
                                                                                                                                            (s as any).CloStrength = 204375;
                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                            (s as any).CloBra = 1;
                                                                                                                                            (s as any).CloPantsShortness = 1;
                                                                                                                                            (s as any).CloStyle2 = 6;
                                                                                                                                            (s as any).CloSport = 1;
                                                                                                                                            (s as any).CloPrice = 3450;
                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 139) {
                                                                                                                                              (s as any).CloQuality = 3;
                                                                                                                                              (s as any).CloStrength = 204375;
                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                              (s as any).CloTopCut = 4;
                                                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                                                              (s as any).CloStyle2 = 6;
                                                                                                                                              (s as any).CloSport = 1;
                                                                                                                                              (s as any).CloGoth = 1;
                                                                                                                                              (s as any).CloPrice = 3450;
                                                                                                                                            } else {
                                                                                                                                              (s as any).CloQuality = 4;
                                                                                                                                              (s as any).CloStrength = 210000;
                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                              (s as any).CloTopCut = 4;
                                                                                                                                              (s as any).CloPantsShortness = 1;
                                                                                                                                              (s as any).CloStyle2 = 6;
                                                                                                                                              (s as any).CloSport = 1;
                                                                                                                                              (s as any).CloPrice = 3600;
                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 141) {
                                                                                                                                                (s as any).CloQuality = 5;
                                                                                                                                                (s as any).CloStrength = 215625;
                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                (s as any).CloBra = 1;
                                                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                                                (s as any).CloStyle2 = 6;
                                                                                                                                                (s as any).CloSport = 1;
                                                                                                                                                (s as any).CloPrice = 3750;
                                                                                                                                              } else {
                                                                                                                                                (s as any).CloQuality = 4;
                                                                                                                                                (s as any).CloStrength = 210000;
                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                (s as any).CloTopCut = 4;
                                                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                                                (s as any).CloStyle2 = 6;
                                                                                                                                                (s as any).CloSport = 1;
                                                                                                                                                (s as any).CloPrice = 3600;
                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 143) {
                                                                                                                                                  (s as any).CloQuality = 3;
                                                                                                                                                  (s as any).CloStrength = 204375;
                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                  (s as any).CloTopCut = 4;
                                                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                                                  (s as any).CloStyle2 = 6;
                                                                                                                                                  (s as any).CloSport = 1;
                                                                                                                                                  (s as any).CloPrice = 3450;
                                                                                                                                                } else {
                                                                                                                                                  (s as any).CloQuality = 3;
                                                                                                                                                  (s as any).CloStrength = 204375;
                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                  (s as any).CloTopCut = 4;
                                                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                                                  (s as any).CloStyle2 = 6;
                                                                                                                                                  (s as any).CloSport = 1;
                                                                                                                                                  (s as any).CloPrice = 3450;
                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 145) {
                                                                                                                                                    (s as any).CloQuality = 4;
                                                                                                                                                    (s as any).CloStrength = 210000;
                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                    (s as any).CloTopCut = 4;
                                                                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                                                                    (s as any).CloStyle2 = 6;
                                                                                                                                                    (s as any).CloSport = 1;
                                                                                                                                                    (s as any).CloPrice = 3600;
                                                                                                                                                  } else {
                                                                                                                                                    (s as any).CloQuality = 3;
                                                                                                                                                    (s as any).CloStrength = 204375;
                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                    (s as any).CloTopCut = 4;
                                                                                                                                                    (s as any).CloPantsShortness = 1;
                                                                                                                                                    (s as any).CloStyle2 = 6;
                                                                                                                                                    (s as any).CloSport = 1;
                                                                                                                                                    (s as any).CloPrice = 3450;
                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 147) {
                                                                                                                                                      (s as any).CloQuality = 3;
                                                                                                                                                      (s as any).CloStrength = 204375;
                                                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                                                      (s as any).CloBra = 1;
                                                                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                                                                      (s as any).CloStyle2 = 6;
                                                                                                                                                      (s as any).CloSport = 1;
                                                                                                                                                      (s as any).CloPrice = 3450;
                                                                                                                                                    } else {
                                                                                                                                                      (s as any).CloQuality = 4;
                                                                                                                                                      (s as any).CloStrength = 210000;
                                                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                                      (s as any).CloPantsShortness = 1;
                                                                                                                                                      (s as any).CloStyle2 = 6;
                                                                                                                                                      (s as any).CloSport = 1;
                                                                                                                                                      (s as any).CloPrice = 3600;
                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 149) {
                                                                                                                                                        (s as any).CloQuality = 3;
                                                                                                                                                        (s as any).CloStrength = 204375;
                                                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                                                        (s as any).CloStyle2 = 6;
                                                                                                                                                        (s as any).CloSport = 1;
                                                                                                                                                        (s as any).CloPrice = 3450;
                                                                                                                                                      } else {
                                                                                                                                                        (s as any).CloQuality = 5;
                                                                                                                                                        (s as any).CloStrength = 215625;
                                                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                        (s as any).CloPantsShortness = 1;
                                                                                                                                                        (s as any).CloStyle2 = 6;
                                                                                                                                                        (s as any).CloSport = 1;
                                                                                                                                                        (s as any).CloPrice = 3750;
                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 151) {
                                                                                                                                                          (s as any).CloQuality = 4;
                                                                                                                                                          (s as any).CloStrength = 210000;
                                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                                          (s as any).CloTopCut = 4;
                                                                                                                                                          (s as any).CloPanties = 1;
                                                                                                                                                          (s as any).CloOnePiece = 1;
                                                                                                                                                          (s as any).CloStyle2 = 6;
                                                                                                                                                          (s as any).CloSport = 1;
                                                                                                                                                          (s as any).CloPrice = 3600;
                                                                                                                                                        } else {
                                                                                                                                                          (s as any).CloQuality = 4;
                                                                                                                                                          (s as any).CloStrength = 210000;
                                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                                          (s as any).CloTopCut = 4;
                                                                                                                                                          (s as any).CloPanties = 1;
                                                                                                                                                          (s as any).CloStyle2 = 6;
                                                                                                                                                          (s as any).CloSport = 1;
                                                                                                                                                          (s as any).CloPrice = 3600;
                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 153) {
                                                                                                                                                            (s as any).CloQuality = 5;
                                                                                                                                                            (s as any).CloStrength = 215625;
                                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                                            (s as any).CloTopCut = 1;
                                                                                                                                                            (s as any).CloPanties = 1;
                                                                                                                                                            (s as any).CloOnePiece = 1;
                                                                                                                                                            (s as any).CloStyle2 = 6;
                                                                                                                                                            (s as any).CloSport = 1;
                                                                                                                                                            (s as any).CloPrice = 3750;
                                                                                                                                                          } else {
                                                                                                                                                            (s as any).CloQuality = 4;
                                                                                                                                                            (s as any).CloStrength = 210000;
                                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                                                            (s as any).CloPanties = 1;
                                                                                                                                                            (s as any).CloOnePiece = 1;
                                                                                                                                                            (s as any).CloStyle2 = 6;
                                                                                                                                                            (s as any).CloSport = 1;
                                                                                                                                                            (s as any).CloPrice = 3600;
                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 155) {
                                                                                                                                                              (s as any).CloQuality = 4;
                                                                                                                                                              (s as any).CloStrength = 210000;
                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                                              (s as any).CloPanties = 1;
                                                                                                                                                              (s as any).CloOnePiece = 1;
                                                                                                                                                              (s as any).CloStyle2 = 6;
                                                                                                                                                              (s as any).CloSport = 1;
                                                                                                                                                              (s as any).CloPrice = 3600;
                                                                                                                                                            } else {
                                                                                                                                                              (s as any).CloQuality = 4;
                                                                                                                                                              (s as any).CloStrength = 210000;
                                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                                              (s as any).CloPanties = 1;
                                                                                                                                                              (s as any).CloOnePiece = 1;
                                                                                                                                                              (s as any).CloStyle2 = 6;
                                                                                                                                                              (s as any).CloSport = 1;
                                                                                                                                                              (s as any).CloPrice = 3600;
                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 157) {
                                                                                                                                                                (s as any).CloQuality = 5;
                                                                                                                                                                (s as any).CloStrength = 215625;
                                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                                (s as any).CloPanties = 1;
                                                                                                                                                                (s as any).CloOnePiece = 1;
                                                                                                                                                                (s as any).CloStyle2 = 6;
                                                                                                                                                                (s as any).CloSport = 1;
                                                                                                                                                                (s as any).CloPrice = 3750;
                                                                                                                                                              } else {
                                                                                                                                                                (s as any).CloQuality = 3;
                                                                                                                                                                (s as any).CloStrength = 204375;
                                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                                (s as any).CloBra = 1;
                                                                                                                                                                (s as any).CloPantsShortness = 1;
                                                                                                                                                                (s as any).CloStyle2 = 6;
                                                                                                                                                                (s as any).CloSport = 1;
                                                                                                                                                                (s as any).CloBimbo = 1;
                                                                                                                                                                (s as any).CloPrice = 3450;
                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 159) {
                                                                                                                                                                  (s as any).CloQuality = 5;
                                                                                                                                                                  (s as any).CloStrength = 215625;
                                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                                  (s as any).CloBra = 1;
                                                                                                                                                                  (s as any).CloPantsShortness = 5;
                                                                                                                                                                  (s as any).CloStyle2 = 6;
                                                                                                                                                                  (s as any).CloSport = 1;
                                                                                                                                                                  (s as any).CloBimbo = 1;
                                                                                                                                                                  (s as any).CloPrice = 3750;
                                                                                                                                                                } else {
                                                                                                                                                                  (s as any).CloQuality = 5;
                                                                                                                                                                  (s as any).CloStrength = 215625;
                                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                                  (s as any).CloTopCut = 4;
                                                                                                                                                                  (s as any).CloPantsShortness = 1;
                                                                                                                                                                  (s as any).CloStyle2 = 6;
                                                                                                                                                                  (s as any).CloSport = 1;
                                                                                                                                                                  (s as any).CloPrice = 3750;
                                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 161) {
                                                                                                                                                                    (s as any).CloQuality = 3;
                                                                                                                                                                    (s as any).CloStrength = 204375;
                                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                    (s as any).CloStyle2 = 6;
                                                                                                                                                                    (s as any).CloSport = 1;
                                                                                                                                                                    (s as any).CloPrice = 3450;
                                                                                                                                                                  } else {
                                                                                                                                                                    (s as any).CloQuality = 5;
                                                                                                                                                                    (s as any).CloStrength = 215625;
                                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                                    (s as any).CloTopCut = 4;
                                                                                                                                                                    (s as any).CloPantsShortness = 4;
                                                                                                                                                                    (s as any).CloStyle2 = 6;
                                                                                                                                                                    (s as any).CloSport = 1;
                                                                                                                                                                    (s as any).CloPrice = 3750;
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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

export const _attributes_danilovich_outfits: LocationDef = {
  name: '_attributes_danilovich_outfits',
  region: 'other',
  enter: enter,
};
