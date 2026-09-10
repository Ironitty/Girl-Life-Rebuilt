// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 30000 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 6: 39000
  // TODO-QSP: 7: 40500
  // TODO-QSP: CloQuality ranges from 6 to 7
  // TODO-QSP: Notes:
  // TODO-QSP: All items should have the wealthy style applied.
  // TODO-QSP: No items outside this category should be quality = 7, although not all items in it must be that qual...
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 6;
    (s as any).CloStrength = 80625;
    (s as any).CloThinness = 5;
    (s as any).CloTopCut = 1;
    (s as any).CloSkirtShortness = 3;
    (s as any).CloDress = 1;
    (s as any).CloStyle = 3;
    (s as any).CloPrice = 39000;
  } else {
    (s as any).CloQuality = 6;
    (s as any).CloStrength = 80625;
    (s as any).CloThinness = 4;
    (s as any).CloTopCut = 1;
    (s as any).CloSkirtShortness = 3;
    (s as any).CloDress = 1;
    (s as any).CloStyle = 3;
    (s as any).CloStyle2 = 5;
    (s as any).CloOffice = 1;
    (s as any).CloPrice = 39000;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 6;
      (s as any).CloStrength = 80625;
      (s as any).CloThinness = 4;
      (s as any).CloTopCut = 1;
      (s as any).CloSkirtShortness = 3;
      (s as any).CloDress = 1;
      (s as any).CloStyle = 3;
      (s as any).CloStyle2 = 5;
      (s as any).CloOffice = 1;
      (s as any).CloPrice = 39000;
    } else {
      (s as any).CloQuality = 6;
      (s as any).CloStrength = 80625;
      (s as any).CloThinness = 4;
      (s as any).CloTopCut = 1;
      (s as any).CloSkirtShortness = 3;
      (s as any).CloDress = 1;
      (s as any).CloStyle = 3;
      (s as any).CloPrice = 39000;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 6;
        (s as any).CloStrength = 80625;
        (s as any).CloThinness = 4;
        (s as any).CloTopCut = 2;
        (s as any).CloSkirtShortness = 3;
        (s as any).CloDress = 1;
        (s as any).CloStyle = 3;
        (s as any).CloPrice = 39000;
      } else {
        (s as any).CloQuality = 6;
        (s as any).CloStrength = 80625;
        (s as any).CloThinness = 4;
        (s as any).CloTopCut = 2;
        (s as any).CloSkirtShortness = 3;
        (s as any).CloDress = 1;
        (s as any).CloStyle = 3;
        (s as any).CloPrice = 39000;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 6;
          (s as any).CloStrength = 80625;
          (s as any).CloThinness = 4;
          (s as any).CloTopCut = 2;
          (s as any).CloSkirtShortness = 3;
          (s as any).CloDress = 1;
          (s as any).CloStyle = 3;
          (s as any).CloPrice = 39000;
        } else {
          (s as any).CloQuality = 6;
          (s as any).CloStrength = 80625;
          (s as any).CloThinness = 4;
          (s as any).CloTopCut = 1;
          (s as any).CloSkirtShortness = 4;
          (s as any).CloDress = 1;
          (s as any).CloStyle = 3;
          (s as any).CloPrice = 39000;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 6;
            (s as any).CloStrength = 80625;
            (s as any).CloThinness = 4;
            (s as any).CloTopCut = 2;
            (s as any).CloSkirtShortness = 5;
            (s as any).CloDress = 1;
            (s as any).CloStyle = 3;
            (s as any).CloPrice = 39000;
          } else {
            (s as any).CloQuality = 6;
            (s as any).CloStrength = 80625;
            (s as any).CloThinness = 4;
            (s as any).CloTopCut = 3;
            (s as any).CloSkirtShortness = 4;
            (s as any).CloDress = 1;
            (s as any).CloStyle = 3;
            (s as any).CloPrice = 39000;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 6;
              (s as any).CloStrength = 80625;
              (s as any).CloThinness = 4;
              (s as any).CloTopCut = 3;
              (s as any).CloSkirtShortness = 4;
              (s as any).CloDress = 1;
              (s as any).CloStyle = 3;
              (s as any).CloPrice = 39000;
            } else {
              (s as any).CloQuality = 6;
              (s as any).CloStrength = 80625;
              (s as any).CloThinness = 4;
              (s as any).CloTopCut = 3;
              (s as any).CloSkirtShortness = 4;
              (s as any).CloDress = 1;
              (s as any).CloStyle = 3;
              (s as any).CloPrice = 39000;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 6;
                (s as any).CloStrength = 80625;
                (s as any).CloThinness = 4;
                (s as any).CloTopCut = 2;
                (s as any).CloSkirtShortness = 5;
                (s as any).CloDress = 1;
                (s as any).CloStyle = 3;
                (s as any).CloPrice = 39000;
              } else {
                (s as any).CloQuality = 6;
                (s as any).CloStrength = 80625;
                (s as any).CloThinness = 4;
                (s as any).CloTopCut = 3;
                (s as any).CloSkirtShortness = 5;
                (s as any).CloDress = 1;
                (s as any).CloStyle = 4;
                (s as any).CloProstitute = 1;
                (s as any).CloPrice = 39000;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 6;
                  (s as any).CloStrength = 80625;
                  (s as any).CloThinness = 4;
                  (s as any).CloTopCut = 3;
                  (s as any).CloSkirtShortness = 2;
                  (s as any).CloDress = 1;
                  (s as any).CloStyle = 3;
                  (s as any).CloPrice = 39000;
                } else {
                  (s as any).CloQuality = 6;
                  (s as any).CloStrength = 80625;
                  (s as any).CloThinness = 4;
                  (s as any).CloTopCut = 3;
                  (s as any).CloSkirtShortness = 2;
                  (s as any).CloDress = 1;
                  (s as any).CloBimbo = 1;
                  (s as any).CloPrice = 39000;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 6;
                    (s as any).CloStrength = 80625;
                    (s as any).CloThinness = 4;
                    (s as any).CloTopCut = 3;
                    (s as any).CloSkirtShortness = 5;
                    (s as any).CloDress = 1;
                    (s as any).CloPrice = 39000;
                  } else {
                    (s as any).CloQuality = 6;
                    (s as any).CloStrength = 80625;
                    (s as any).CloThinness = 4;
                    (s as any).CloTopCut = 3;
                    (s as any).CloSkirtShortness = 4;
                    (s as any).CloDress = 1;
                    (s as any).CloStyle = 3;
                    (s as any).CloPrice = 39000;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 6;
                      (s as any).CloStrength = 80625;
                      (s as any).CloThinness = 4;
                      (s as any).CloTopCut = 2;
                      (s as any).CloSkirtShortness = 4;
                      (s as any).CloDress = 1;
                      (s as any).CloPrice = 39000;
                    } else {
                      (s as any).CloQuality = 6;
                      (s as any).CloStrength = 80625;
                      (s as any).CloThinness = 4;
                      (s as any).CloTopCut = 3;
                      (s as any).CloSkirtShortness = 4;
                      (s as any).CloDress = 1;
                      (s as any).CloPrice = 39000;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).CloQuality = 6;
                        (s as any).CloStrength = 80625;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 3;
                        (s as any).CloSkirtShortness = 4;
                        (s as any).CloDress = 1;
                        (s as any).CloPrice = 39000;
                      } else {
                        (s as any).CloQuality = 6;
                        (s as any).CloStrength = 80625;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 2;
                        (s as any).CloSkirtShortness = 3;
                        (s as any).CloDress = 1;
                        (s as any).CloPrice = 39000;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).CloQuality = 6;
                          (s as any).CloStrength = 80625;
                          (s as any).CloThinness = 4;
                          (s as any).CloTopCut = 2;
                          (s as any).CloSkirtShortness = 4;
                          (s as any).CloDress = 1;
                          (s as any).CloStyle = 3;
                          (s as any).CloPrice = 39000;
                        } else {
                          (s as any).CloQuality = 6;
                          (s as any).CloStrength = 80625;
                          (s as any).CloThinness = 4;
                          (s as any).CloTopCut = 3;
                          (s as any).CloSkirtShortness = 4;
                          (s as any).CloDress = 1;
                          (s as any).CloStyle = 3;
                          (s as any).CloPrice = 39000;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).CloQuality = 6;
                            (s as any).CloStrength = 80625;
                            (s as any).CloThinness = 4;
                            (s as any).CloTopCut = 3;
                            (s as any).CloSkirtShortness = 3;
                            (s as any).CloDress = 1;
                            (s as any).CloStyle = 3;
                            (s as any).CloPrice = 39000;
                          } else {
                            (s as any).CloQuality = 6;
                            (s as any).CloStrength = 80625;
                            (s as any).CloThinness = 4;
                            (s as any).CloTopCut = 2;
                            (s as any).CloSkirtShortness = 2;
                            (s as any).CloDress = 1;
                            (s as any).CloStyle = 3;
                            (s as any).CloPrice = 39000;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).CloQuality = 6;
                              (s as any).CloStrength = 80625;
                              (s as any).CloThinness = 4;
                              (s as any).CloTopCut = 3;
                              (s as any).CloSkirtShortness = 3;
                              (s as any).CloDress = 1;
                              (s as any).CloStyle = 3;
                              (s as any).CloPrice = 39000;
                            } else {
                              (s as any).CloQuality = 6;
                              (s as any).CloStrength = 80625;
                              (s as any).CloThinness = 4;
                              (s as any).CloTopCut = 2;
                              (s as any).CloSkirtShortness = 4;
                              (s as any).CloDress = 1;
                              (s as any).CloPrice = 39000;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).CloQuality = 6;
                                (s as any).CloStrength = 80625;
                                (s as any).CloThinness = 4;
                                (s as any).CloTopCut = 3;
                                (s as any).CloSkirtShortness = 5;
                                (s as any).CloDress = 1;
                                (s as any).CloPrice = 39000;
                              } else {
                                (s as any).CloQuality = 6;
                                (s as any).CloStrength = 80625;
                                (s as any).CloThinness = 4;
                                (s as any).CloTopCut = 2;
                                (s as any).CloSkirtShortness = 2;
                                (s as any).CloDress = 1;
                                (s as any).CloStyle = 3;
                                (s as any).CloPrice = 39000;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).CloQuality = 6;
                                  (s as any).CloStrength = 80625;
                                  (s as any).CloThinness = 4;
                                  (s as any).CloTopCut = 3;
                                  (s as any).CloSkirtShortness = 3;
                                  (s as any).CloDress = 1;
                                  (s as any).CloStyle = 3;
                                  (s as any).CloPrice = 39000;
                                } else {
                                  (s as any).CloQuality = 6;
                                  (s as any).CloStrength = 80625;
                                  (s as any).CloThinness = 4;
                                  (s as any).CloTopCut = 2;
                                  (s as any).CloSkirtShortness = 3;
                                  (s as any).CloDress = 1;
                                  (s as any).CloPrice = 39000;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).CloQuality = 6;
                                    (s as any).CloStrength = 80625;
                                    (s as any).CloThinness = 4;
                                    (s as any).CloTopCut = 2;
                                    (s as any).CloSkirtShortness = 4;
                                    (s as any).CloDress = 1;
                                    (s as any).CloStyle = 3;
                                    (s as any).CloPrice = 39000;
                                  } else {
                                    (s as any).CloQuality = 6;
                                    (s as any).CloStrength = 80625;
                                    (s as any).CloThinness = 6;
                                    (s as any).CloTopCut = 3;
                                    (s as any).CloSkirtShortness = 5;
                                    (s as any).CloDress = 1;
                                    (s as any).CloStyle = 3;
                                    (s as any).CloBimbo = 1;
                                    (s as any).CloPrice = 39000;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).CloQuality = 6;
                                      (s as any).CloStrength = 80625;
                                      (s as any).CloThinness = 4;
                                      (s as any).CloTopCut = 3;
                                      (s as any).CloSkirtShortness = 4;
                                      (s as any).CloDress = 1;
                                      (s as any).CloStyle = 3;
                                      (s as any).CloPrice = 39000;
                                    } else {
                                      (s as any).CloQuality = 7;
                                      (s as any).CloStrength = 86250;
                                      (s as any).CloThinness = 4;
                                      (s as any).CloTopCut = 3;
                                      (s as any).CloSkirtShortness = 5;
                                      (s as any).CloDress = 1;
                                      (s as any).CloStyle = 3;
                                      (s as any).CloPrice = 40500;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).CloQuality = 6;
                                        (s as any).CloStrength = 80625;
                                        (s as any).CloThinness = 4;
                                        (s as any).CloTopCut = 3;
                                        (s as any).CloSkirtShortness = 5;
                                        (s as any).CloDress = 1;
                                        (s as any).CloStyle = 4;
                                        (s as any).CloProstitute = 1;
                                        (s as any).CloPrice = 39000;
                                      } else {
                                        (s as any).CloQuality = 6;
                                        (s as any).CloStrength = 80625;
                                        (s as any).CloThinness = 4;
                                        (s as any).CloTopCut = 3;
                                        (s as any).CloSkirtShortness = 4;
                                        (s as any).CloDress = 1;
                                        (s as any).CloStyle = 3;
                                        (s as any).CloPrice = 39000;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).CloQuality = 6;
                                          (s as any).CloStrength = 80625;
                                          (s as any).CloThinness = 4;
                                          (s as any).CloTopCut = 3;
                                          (s as any).CloSkirtShortness = 4;
                                          (s as any).CloDress = 1;
                                          (s as any).CloStyle = 3;
                                          (s as any).CloPrice = 39000;
                                        } else {
                                          (s as any).CloQuality = 6;
                                          (s as any).CloStrength = 80625;
                                          (s as any).CloThinness = 4;
                                          (s as any).CloTopCut = 3;
                                          (s as any).CloSkirtShortness = 4;
                                          (s as any).CloDress = 1;
                                          (s as any).CloStyle = 3;
                                          (s as any).CloPrice = 39000;
                                          if (((s as any).ARGS ?? 0)[0] === 41) {
                                            (s as any).CloQuality = 6;
                                            (s as any).CloStrength = 80625;
                                            (s as any).CloThinness = 4;
                                            (s as any).CloTopCut = 3;
                                            (s as any).CloSkirtShortness = 4;
                                            (s as any).CloDress = 1;
                                            (s as any).CloStyle = 4;
                                            (s as any).CloProstitute = 1;
                                            (s as any).CloPrice = 39000;
                                          } else {
                                            (s as any).CloQuality = 6;
                                            (s as any).CloStrength = 80625;
                                            (s as any).CloThinness = 4;
                                            (s as any).CloTopCut = 2;
                                            (s as any).CloSkirtShortness = 4;
                                            (s as any).CloDress = 1;
                                            (s as any).CloStyle = 3;
                                            (s as any).CloPrice = 39000;
                                            if (((s as any).ARGS ?? 0)[0] === 43) {
                                              (s as any).CloQuality = 6;
                                              (s as any).CloStrength = 80625;
                                              (s as any).CloThinness = 4;
                                              (s as any).CloTopCut = 2;
                                              (s as any).CloSkirtShortness = 4;
                                              (s as any).CloDress = 1;
                                              (s as any).CloStyle = 3;
                                              (s as any).CloPrice = 39000;
                                            } else {
                                              (s as any).CloQuality = 6;
                                              (s as any).CloStrength = 80625;
                                              (s as any).CloThinness = 4;
                                              (s as any).CloTopCut = 2;
                                              (s as any).CloSkirtShortness = 4;
                                              (s as any).CloDress = 1;
                                              (s as any).CloStyle = 3;
                                              (s as any).CloPrice = 39000;
                                              if (((s as any).ARGS ?? 0)[0] === 45) {
                                                (s as any).CloQuality = 6;
                                                (s as any).CloStrength = 80625;
                                                (s as any).CloThinness = 4;
                                                (s as any).CloTopCut = 2;
                                                (s as any).CloSkirtShortness = 4;
                                                (s as any).CloDress = 1;
                                                (s as any).CloPrice = 39000;
                                              } else {
                                                (s as any).CloQuality = 6;
                                                (s as any).CloStrength = 80625;
                                                (s as any).CloThinness = 5;
                                                (s as any).CloTopCut = 3;
                                                (s as any).CloSkirtShortness = 3;
                                                (s as any).CloDress = 1;
                                                (s as any).CloStyle = 3;
                                                (s as any).CloPrice = 39000;
                                                if (((s as any).ARGS ?? 0)[0] === 47) {
                                                  (s as any).CloQuality = 6;
                                                  (s as any).CloStrength = 80625;
                                                  (s as any).CloThinness = 4;
                                                  (s as any).CloTopCut = 2;
                                                  (s as any).CloSkirtShortness = 4;
                                                  (s as any).CloDress = 1;
                                                  (s as any).CloStyle = 3;
                                                  (s as any).CloPrice = 39000;
                                                } else {
                                                  (s as any).CloQuality = 6;
                                                  (s as any).CloStrength = 80625;
                                                  (s as any).CloThinness = 4;
                                                  (s as any).CloTopCut = 3;
                                                  (s as any).CloSkirtShortness = 3;
                                                  (s as any).CloDress = 1;
                                                  (s as any).CloPrice = 39000;
                                                  if (((s as any).ARGS ?? 0)[0] === 49) {
                                                    (s as any).CloQuality = 6;
                                                    (s as any).CloStrength = 80625;
                                                    (s as any).CloThinness = 4;
                                                    (s as any).CloTopCut = 2;
                                                    (s as any).CloSkirtShortness = 4;
                                                    (s as any).CloDress = 1;
                                                    (s as any).CloStyle = 3;
                                                    (s as any).CloPrice = 39000;
                                                  } else {
                                                    (s as any).CloQuality = 6;
                                                    (s as any).CloStrength = 80625;
                                                    (s as any).CloThinness = 4;
                                                    (s as any).CloTopCut = 3;
                                                    (s as any).CloSkirtShortness = 4;
                                                    (s as any).CloDress = 1;
                                                    (s as any).CloPrice = 39000;
                                                    if (((s as any).ARGS ?? 0)[0] === 51) {
                                                      (s as any).CloQuality = 6;
                                                      (s as any).CloStrength = 80625;
                                                      (s as any).CloThinness = 4;
                                                      (s as any).CloTopCut = 2;
                                                      (s as any).CloSkirtShortness = 4;
                                                      (s as any).CloDress = 1;
                                                      (s as any).CloPrice = 39000;
                                                    } else {
                                                      (s as any).CloQuality = 6;
                                                      (s as any).CloStrength = 80625;
                                                      (s as any).CloThinness = 4;
                                                      (s as any).CloTopCut = 2;
                                                      (s as any).CloSkirtShortness = 4;
                                                      (s as any).CloDress = 1;
                                                      (s as any).CloStyle = 3;
                                                      (s as any).CloPrice = 39000;
                                                      if (((s as any).ARGS ?? 0)[0] === 53) {
                                                        (s as any).CloQuality = 6;
                                                        (s as any).CloStrength = 80625;
                                                        (s as any).CloThinness = 4;
                                                        (s as any).CloTopCut = 3;
                                                        (s as any).CloSkirtShortness = 3;
                                                        (s as any).CloDress = 1;
                                                        (s as any).CloStyle = 4;
                                                        (s as any).CloProstitute = 1;
                                                        (s as any).CloPrice = 39000;
                                                      } else {
                                                        (s as any).CloQuality = 6;
                                                        (s as any).CloStrength = 80625;
                                                        (s as any).CloThinness = 4;
                                                        (s as any).CloTopCut = 2;
                                                        (s as any).CloSkirtShortness = 4;
                                                        (s as any).CloDress = 1;
                                                        (s as any).CloPrice = 39000;
                                                        if (((s as any).ARGS ?? 0)[0] === 55) {
                                                          (s as any).CloQuality = 6;
                                                          (s as any).CloStrength = 80625;
                                                          (s as any).CloThinness = 4;
                                                          (s as any).CloTopCut = 2;
                                                          (s as any).CloSkirtShortness = 3;
                                                          (s as any).CloDress = 1;
                                                          (s as any).CloPrice = 39000;
                                                        } else {
                                                          (s as any).CloQuality = 6;
                                                          (s as any).CloStrength = 80625;
                                                          (s as any).CloThinness = 4;
                                                          (s as any).CloTopCut = 2;
                                                          (s as any).CloSkirtShortness = 3;
                                                          (s as any).CloDress = 1;
                                                          (s as any).CloPrice = 39000;
                                                          if (((s as any).ARGS ?? 0)[0] === 57) {
                                                            (s as any).CloQuality = 6;
                                                            (s as any).CloStrength = 80625;
                                                            (s as any).CloThinness = 4;
                                                            (s as any).CloTopCut = 3;
                                                            (s as any).CloSkirtShortness = 4;
                                                            (s as any).CloDress = 1;
                                                            (s as any).CloPrice = 39000;
                                                          } else {
                                                            (s as any).CloQuality = 6;
                                                            (s as any).CloStrength = 80625;
                                                            (s as any).CloThinness = 4;
                                                            (s as any).CloTopCut = 2;
                                                            (s as any).CloSkirtShortness = 4;
                                                            (s as any).CloDress = 1;
                                                            (s as any).CloPrice = 39000;
                                                            if (((s as any).ARGS ?? 0)[0] === 59) {
                                                              (s as any).CloQuality = 6;
                                                              (s as any).CloStrength = 80625;
                                                              (s as any).CloThinness = 4;
                                                              (s as any).CloTopCut = 3;
                                                              (s as any).CloSkirtShortness = 4;
                                                              (s as any).CloDress = 1;
                                                              (s as any).CloPrice = 39000;
                                                            } else {
                                                              (s as any).CloQuality = 6;
                                                              (s as any).CloStrength = 80625;
                                                              (s as any).CloThinness = 4;
                                                              (s as any).CloTopCut = 3;
                                                              (s as any).CloSkirtShortness = 3;
                                                              (s as any).CloDress = 1;
                                                              (s as any).CloStyle = 3;
                                                              (s as any).CloPrice = 39000;
                                                              if (((s as any).ARGS ?? 0)[0] === 61) {
                                                                (s as any).CloQuality = 6;
                                                                (s as any).CloStrength = 80625;
                                                                (s as any).CloThinness = 4;
                                                                (s as any).CloTopCut = 3;
                                                                (s as any).CloSkirtShortness = 4;
                                                                (s as any).CloDress = 1;
                                                                (s as any).CloPrice = 39000;
                                                              } else {
                                                                (s as any).CloQuality = 6;
                                                                (s as any).CloStrength = 80625;
                                                                (s as any).CloThinness = 4;
                                                                (s as any).CloTopCut = 2;
                                                                (s as any).CloSkirtShortness = 3;
                                                                (s as any).CloDress = 1;
                                                                (s as any).CloPrice = 39000;
                                                                if (((s as any).ARGS ?? 0)[0] === 63) {
                                                                  (s as any).CloQuality = 6;
                                                                  (s as any).CloStrength = 80625;
                                                                  (s as any).CloThinness = 4;
                                                                  (s as any).CloTopCut = 3;
                                                                  (s as any).CloSkirtShortness = 3;
                                                                  (s as any).CloDress = 1;
                                                                  (s as any).CloPrice = 39000;
                                                                } else {
                                                                  (s as any).CloQuality = 6;
                                                                  (s as any).CloStrength = 80625;
                                                                  (s as any).CloThinness = 4;
                                                                  (s as any).CloTopCut = 3;
                                                                  (s as any).CloSkirtShortness = 4;
                                                                  (s as any).CloDress = 1;
                                                                  (s as any).CloStyle = 3;
                                                                  (s as any).CloPrice = 39000;
                                                                  if (((s as any).ARGS ?? 0)[0] === 65) {
                                                                    (s as any).CloQuality = 6;
                                                                    (s as any).CloStrength = 80625;
                                                                    (s as any).CloThinness = 4;
                                                                    (s as any).CloTopCut = 3;
                                                                    (s as any).CloSkirtShortness = 3;
                                                                    (s as any).CloDress = 1;
                                                                    (s as any).CloStyle = 3;
                                                                    (s as any).CloPrice = 39000;
                                                                  } else {
                                                                    (s as any).CloQuality = 6;
                                                                    (s as any).CloStrength = 80625;
                                                                    (s as any).CloThinness = 4;
                                                                    (s as any).CloTopCut = 2;
                                                                    (s as any).CloSkirtShortness = 4;
                                                                    (s as any).CloDress = 1;
                                                                    (s as any).CloPrice = 39000;
                                                                    if (((s as any).ARGS ?? 0)[0] === 67) {
                                                                      (s as any).CloQuality = 6;
                                                                      (s as any).CloStrength = 80625;
                                                                      (s as any).CloThinness = 4;
                                                                      (s as any).CloTopCut = 2;
                                                                      (s as any).CloSkirtShortness = 5;
                                                                      (s as any).CloDress = 1;
                                                                      (s as any).CloPrice = 39000;
                                                                    } else {
                                                                      (s as any).CloQuality = 6;
                                                                      (s as any).CloStrength = 80625;
                                                                      (s as any).CloThinness = 4;
                                                                      (s as any).CloTopCut = 3;
                                                                      (s as any).CloSkirtShortness = 4;
                                                                      (s as any).CloStyle = 4;
                                                                      (s as any).CloProstitute = 1;
                                                                      (s as any).CloPrice = 39000;
                                                                      if (((s as any).ARGS ?? 0)[0] === 69) {
                                                                        (s as any).CloQuality = 6;
                                                                        (s as any).CloStrength = 80625;
                                                                        (s as any).CloThinness = 4;
                                                                        (s as any).CloTopCut = 3;
                                                                        (s as any).CloSkirtShortness = 5;
                                                                        (s as any).CloDress = 1;
                                                                        (s as any).CloPrice = 39000;
                                                                      } else {
                                                                        (s as any).CloQuality = 6;
                                                                        (s as any).CloStrength = 80625;
                                                                        (s as any).CloThinness = 4;
                                                                        (s as any).CloTopCut = 2;
                                                                        (s as any).CloSkirtShortness = 5;
                                                                        (s as any).CloDress = 1;
                                                                        (s as any).CloPrice = 39000;
                                                                        if (((s as any).ARGS ?? 0)[0] === 71) {
                                                                          (s as any).CloQuality = 6;
                                                                          (s as any).CloStrength = 80625;
                                                                          (s as any).CloThinness = 4;
                                                                          (s as any).CloTopCut = 3;
                                                                          (s as any).CloSkirtShortness = 2;
                                                                          (s as any).CloDress = 1;
                                                                          (s as any).CloStyle = 3;
                                                                          (s as any).CloPrice = 39000;
                                                                        } else {
                                                                          (s as any).CloQuality = 6;
                                                                          (s as any).CloStrength = 80625;
                                                                          (s as any).CloThinness = 4;
                                                                          (s as any).CloTopCut = 3;
                                                                          (s as any).CloSkirtShortness = 2;
                                                                          (s as any).CloDress = 1;
                                                                          (s as any).CloStyle = 3;
                                                                          (s as any).CloPrice = 39000;
                                                                          if (((s as any).ARGS ?? 0)[0] === 73) {
                                                                            (s as any).CloQuality = 6;
                                                                            (s as any).CloStrength = 80625;
                                                                            (s as any).CloThinness = 4;
                                                                            (s as any).CloTopCut = 3;
                                                                            (s as any).CloSkirtShortness = 3;
                                                                            (s as any).CloStyle = 4;
                                                                            (s as any).CloProstitute = 1;
                                                                            (s as any).CloBimbo = 1;
                                                                            (s as any).CloPrice = 39000;
                                                                          } else {
                                                                            (s as any).CloQuality = 6;
                                                                            (s as any).CloStrength = 80625;
                                                                            (s as any).CloThinness = 4;
                                                                            (s as any).CloTopCut = 3;
                                                                            (s as any).CloSkirtShortness = 3;
                                                                            (s as any).CloDress = 1;
                                                                            (s as any).CloPrice = 39000;
                                                                            if (((s as any).ARGS ?? 0)[0] === 75) {
                                                                              (s as any).CloQuality = 6;
                                                                              (s as any).CloStrength = 80625;
                                                                              (s as any).CloThinness = 4;
                                                                              (s as any).CloTopCut = 2;
                                                                              (s as any).CloSkirtShortness = 4;
                                                                              (s as any).CloDress = 1;
                                                                              (s as any).CloStyle = 3;
                                                                              (s as any).CloPrice = 39000;
                                                                            } else {
                                                                              (s as any).CloQuality = 6;
                                                                              (s as any).CloStrength = 80625;
                                                                              (s as any).CloThinness = 4;
                                                                              (s as any).CloTopCut = 3;
                                                                              (s as any).CloSkirtShortness = 5;
                                                                              (s as any).CloDress = 1;
                                                                              (s as any).CloBimbo = 1;
                                                                              (s as any).CloPrice = 39000;
                                                                              if (((s as any).ARGS ?? 0)[0] === 77) {
                                                                                (s as any).CloQuality = 6;
                                                                                (s as any).CloStrength = 80625;
                                                                                (s as any).CloThinness = 3;
                                                                                (s as any).CloTopCut = 2;
                                                                                (s as any).CloSkirtShortness = 2;
                                                                                (s as any).CloDress = 1;
                                                                                (s as any).CloStyle = 3;
                                                                                (s as any).CloPrice = 39000;
                                                                              } else {
                                                                                (s as any).CloQuality = 6;
                                                                                (s as any).CloStrength = 80625;
                                                                                (s as any).CloThinness = 4;
                                                                                (s as any).CloTopCut = 3;
                                                                                (s as any).CloSkirtShortness = 4;
                                                                                (s as any).CloDress = 1;
                                                                                (s as any).CloStyle = 3;
                                                                                (s as any).CloPrice = 39000;
                                                                                if (((s as any).ARGS ?? 0)[0] === 79) {
                                                                                  (s as any).CloQuality = 6;
                                                                                  (s as any).CloStrength = 80625;
                                                                                  (s as any).CloThinness = 4;
                                                                                  (s as any).CloTopCut = 2;
                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                  (s as any).CloDress = 1;
                                                                                  (s as any).CloStyle = 4;
                                                                                  (s as any).CloProstitute = 1;
                                                                                  (s as any).CloBimbo = 1;
                                                                                  (s as any).CloPrice = 39000;
                                                                                } else {
                                                                                  (s as any).CloQuality = 6;
                                                                                  (s as any).CloStrength = 80625;
                                                                                  (s as any).CloThinness = 4;
                                                                                  (s as any).CloTopCut = 3;
                                                                                  (s as any).CloSkirtShortness = 5;
                                                                                  (s as any).CloDress = 1;
                                                                                  (s as any).CloStyle = 3;
                                                                                  (s as any).CloPrice = 39000;
                                                                                  if (((s as any).ARGS ?? 0)[0] === 81) {
                                                                                    (s as any).CloQuality = 6;
                                                                                    (s as any).CloStrength = 80625;
                                                                                    (s as any).CloThinness = 4;
                                                                                    (s as any).CloTopCut = 3;
                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                    (s as any).CloDress = 1;
                                                                                    (s as any).CloStyle = 3;
                                                                                    (s as any).CloPrice = 39000;
                                                                                  } else {
                                                                                    (s as any).CloQuality = 6;
                                                                                    (s as any).CloStrength = 80625;
                                                                                    (s as any).CloThinness = 4;
                                                                                    (s as any).CloTopCut = 3;
                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                    (s as any).CloDress = 1;
                                                                                    (s as any).CloStyle = 3;
                                                                                    (s as any).CloPrice = 39000;
                                                                                    if (((s as any).ARGS ?? 0)[0] === 83) {
                                                                                      (s as any).CloQuality = 6;
                                                                                      (s as any).CloStrength = 80625;
                                                                                      (s as any).CloThinness = 5;
                                                                                      (s as any).CloTopCut = 2;
                                                                                      (s as any).CloSkirtShortness = 5;
                                                                                      (s as any).CloDress = 1;
                                                                                      (s as any).CloStyle = 3;
                                                                                      (s as any).CloPrice = 39000;
                                                                                    } else {
                                                                                      (s as any).CloQuality = 6;
                                                                                      (s as any).CloStrength = 80625;
                                                                                      (s as any).CloThinness = 4;
                                                                                      (s as any).CloTopCut = 3;
                                                                                      (s as any).CloSkirtShortness = 2;
                                                                                      (s as any).CloDress = 1;
                                                                                      (s as any).CloBimbo = 1;
                                                                                      (s as any).CloPrice = 39000;
                                                                                      if (((s as any).ARGS ?? 0)[0] === 85) {
                                                                                        (s as any).CloQuality = 6;
                                                                                        (s as any).CloStrength = 80625;
                                                                                        (s as any).CloThinness = 4;
                                                                                        (s as any).CloTopCut = 3;
                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                        (s as any).CloDress = 1;
                                                                                        (s as any).CloStyle = 3;
                                                                                        (s as any).CloPrice = 39000;
                                                                                      } else {
                                                                                        (s as any).CloQuality = 6;
                                                                                        (s as any).CloStrength = 80625;
                                                                                        (s as any).CloThinness = 4;
                                                                                        (s as any).CloTopCut = 3;
                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                        (s as any).CloDress = 1;
                                                                                        (s as any).CloBimbo = 1;
                                                                                        (s as any).CloPrice = 39000;
                                                                                        if (((s as any).ARGS ?? 0)[0] === 87) {
                                                                                          (s as any).CloQuality = 6;
                                                                                          (s as any).CloStrength = 80625;
                                                                                          (s as any).CloThinness = 4;
                                                                                          (s as any).CloTopCut = 3;
                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                          (s as any).CloDress = 1;
                                                                                          (s as any).CloStyle = 3;
                                                                                          (s as any).CloPrice = 39000;
                                                                                        } else {
                                                                                          (s as any).CloQuality = 7;
                                                                                          (s as any).CloStrength = 86250;
                                                                                          (s as any).CloThinness = 4;
                                                                                          (s as any).CloTopCut = 3;
                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                          (s as any).CloDress = 1;
                                                                                          (s as any).CloStyle = 3;
                                                                                          (s as any).CloPrice = 40500;
                                                                                          if (((s as any).ARGS ?? 0)[0] === 89) {
                                                                                            (s as any).CloQuality = 6;
                                                                                            (s as any).CloStrength = 80625;
                                                                                            (s as any).CloThinness = 4;
                                                                                            (s as any).CloTopCut = 3;
                                                                                            (s as any).CloSkirtShortness = 2;
                                                                                            (s as any).CloDress = 1;
                                                                                            (s as any).CloStyle = 3;
                                                                                            (s as any).CloPrice = 39000;
                                                                                          } else {
                                                                                            (s as any).CloQuality = 6;
                                                                                            (s as any).CloStrength = 80625;
                                                                                            (s as any).CloThinness = 4;
                                                                                            (s as any).CloTopCut = 3;
                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                            (s as any).CloDress = 1;
                                                                                            (s as any).CloStyle = 3;
                                                                                            (s as any).CloPrice = 39000;
                                                                                            if (((s as any).ARGS ?? 0)[0] === 91) {
                                                                                              (s as any).CloQuality = 6;
                                                                                              (s as any).CloStrength = 80625;
                                                                                              (s as any).CloThinness = 4;
                                                                                              (s as any).CloTopCut = 3;
                                                                                              (s as any).CloSkirtShortness = 5;
                                                                                              (s as any).CloDress = 1;
                                                                                              (s as any).CloStyle = 3;
                                                                                              (s as any).CloPrice = 39000;
                                                                                            } else {
                                                                                              (s as any).CloQuality = 6;
                                                                                              (s as any).CloStrength = 80625;
                                                                                              (s as any).CloThinness = 4;
                                                                                              (s as any).CloTopCut = 3;
                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                              (s as any).CloDress = 1;
                                                                                              (s as any).CloStyle = 3;
                                                                                              (s as any).CloPrice = 39000;
                                                                                              if (((s as any).ARGS ?? 0)[0] === 93) {
                                                                                                (s as any).CloQuality = 7;
                                                                                                (s as any).CloStrength = 86250;
                                                                                                (s as any).CloThinness = 4;
                                                                                                (s as any).CloTopCut = 3;
                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                (s as any).CloDress = 1;
                                                                                                (s as any).CloStyle = 3;
                                                                                                (s as any).CloPrice = 40500;
                                                                                              } else {
                                                                                                (s as any).CloQuality = 6;
                                                                                                (s as any).CloStrength = 80625;
                                                                                                (s as any).CloThinness = 4;
                                                                                                (s as any).CloTopCut = 2;
                                                                                                (s as any).CloSkirtShortness = 2;
                                                                                                (s as any).CloStyle = 3;
                                                                                                (s as any).CloStyle2 = 5;
                                                                                                (s as any).CloOffice = 1;
                                                                                                (s as any).CloPrice = 39000;
                                                                                                if (((s as any).ARGS ?? 0)[0] === 95) {
                                                                                                  (s as any).CloQuality = 6;
                                                                                                  (s as any).CloStrength = 80625;
                                                                                                  (s as any).CloThinness = 4;
                                                                                                  (s as any).CloTopCut = 3;
                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                  (s as any).CloDress = 1;
                                                                                                  (s as any).CloStyle = 3;
                                                                                                  (s as any).CloPrice = 39000;
                                                                                                } else {
                                                                                                  (s as any).CloQuality = 6;
                                                                                                  (s as any).CloStrength = 80625;
                                                                                                  (s as any).CloThinness = 5;
                                                                                                  (s as any).CloTopCut = 2;
                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                  (s as any).CloStyle = 3;
                                                                                                  (s as any).CloPrice = 39000;
                                                                                                  if (((s as any).ARGS ?? 0)[0] === 97) {
                                                                                                    (s as any).CloQuality = 6;
                                                                                                    (s as any).CloStrength = 80625;
                                                                                                    (s as any).CloThinness = 4;
                                                                                                    (s as any).CloTopCut = 3;
                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                    (s as any).CloDress = 1;
                                                                                                    (s as any).CloPrice = 39000;
                                                                                                  } else {
                                                                                                    (s as any).CloQuality = 6;
                                                                                                    (s as any).CloStrength = 80625;
                                                                                                    (s as any).CloThinness = 4;
                                                                                                    (s as any).CloTopCut = 3;
                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                    (s as any).CloStyle = 3;
                                                                                                    (s as any).CloPrice = 39000;
                                                                                                    if (((s as any).ARGS ?? 0)[0] === 99) {
                                                                                                      (s as any).CloQuality = 6;
                                                                                                      (s as any).CloStrength = 80625;
                                                                                                      (s as any).CloThinness = 4;
                                                                                                      (s as any).CloTopCut = 3;
                                                                                                      (s as any).CloSkirtShortness = 2;
                                                                                                      (s as any).CloDress = 1;
                                                                                                      (s as any).CloStyle = 3;
                                                                                                      (s as any).CloBimbo = 1;
                                                                                                      (s as any).CloPrice = 39000;
                                                                                                    } else {
                                                                                                      (s as any).CloQuality = 6;
                                                                                                      (s as any).CloStrength = 80625;
                                                                                                      (s as any).CloThinness = 4;
                                                                                                      (s as any).CloTopCut = 2;
                                                                                                      (s as any).CloSkirtShortness = 5;
                                                                                                      (s as any).CloDress = 1;
                                                                                                      (s as any).CloStyle = 3;
                                                                                                      (s as any).CloPrice = 39000;
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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

export const _attributes_moncheri_dress: LocationDef = {
  name: '_attributes_moncheri_dress',
  region: 'other',
  enter: enter,
};
