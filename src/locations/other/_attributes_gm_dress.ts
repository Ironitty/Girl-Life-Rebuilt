// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 1500 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 1650
  // TODO-QSP: 2: 1700
  // TODO-QSP: 3: 1750
  // TODO-QSP: CloQuality ranges from 1 to 3, please avoid adding too many 3s
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 3;
    (s as any).CloStrength = 148125;
    (s as any).CloThinness = 3;
    (s as any).CloTopCut = 2;
    (s as any).CloSkirtShortness = 1;
    (s as any).CloDress = 1;
    (s as any).CloPrice = 1750;
  } else {
    (s as any).CloQuality = 2;
    (s as any).CloStrength = 180000;
    (s as any).CloThinness = 1;
    (s as any).CloTopCut = 1;
    (s as any).CloSkirtShortness = 2;
    (s as any).CloDress = 1;
    (s as any).CloStyle = 5;
    (s as any).CloPrice = 1700;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 2;
      (s as any).CloStrength = 142500;
      (s as any).CloThinness = 3;
      (s as any).CloTopCut = 1;
      (s as any).CloSkirtShortness = 2;
      (s as any).CloStyle2 = 5;
      (s as any).CloOffice = 1;
      (s as any).CloPrice = 1700;
    } else {
      (s as any).CloQuality = 2;
      (s as any).CloStrength = 142500;
      (s as any).CloThinness = 2;
      (s as any).CloTopCut = 1;
      (s as any).CloSkirtShortness = 1;
      (s as any).CloDress = 1;
      (s as any).CloPrude = 1;
      (s as any).CloPrice = 1700;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 2;
        (s as any).CloStrength = 142500;
        (s as any).CloThinness = 2;
        (s as any).CloTopCut = 1;
        (s as any).CloSkirtShortness = 2;
        (s as any).CloDress = 1;
        (s as any).CloPrice = 1700;
      } else {
        (s as any).CloQuality = 2;
        (s as any).CloStrength = 142500;
        (s as any).CloThinness = 3;
        (s as any).CloTopCut = 2;
        (s as any).CloSkirtShortness = 2;
        (s as any).CloDress = 1;
        (s as any).CloPrice = 1700;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 2;
          (s as any).CloStrength = 142500;
          (s as any).CloThinness = 2;
          (s as any).CloTopCut = 1;
          (s as any).CloSkirtShortness = 2;
          (s as any).CloPrude = 1;
          (s as any).CloPrice = 1700;
        } else {
          (s as any).CloQuality = 1;
          (s as any).CloStrength = 136875;
          (s as any).CloThinness = 2;
          (s as any).CloTopCut = 1;
          (s as any).CloSkirtShortness = 2;
          (s as any).CloDress = 1;
          (s as any).CloPrice = 1650;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 1;
            (s as any).CloStrength = 174375;
            (s as any).CloThinness = 1;
            (s as any).CloTopCut = 1;
            (s as any).CloSkirtShortness = 2;
            (s as any).CloDress = 1;
            (s as any).CloStyle = 5;
            (s as any).CloPrude = 1;
            (s as any).CloPrice = 1650;
          } else {
            (s as any).CloQuality = 2;
            (s as any).CloStrength = 142500;
            (s as any).CloThinness = 3;
            (s as any).CloTopCut = 1;
            (s as any).CloSkirtShortness = 2;
            (s as any).CloStyle2 = 5;
            (s as any).CloOffice = 1;
            (s as any).CloPrude = 1;
            (s as any).CloPrice = 1700;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 1;
              (s as any).CloStrength = 174375;
              (s as any).CloThinness = 1;
              (s as any).CloTopCut = 1;
              (s as any).CloSkirtShortness = 2;
              (s as any).CloDress = 1;
              (s as any).CloStyle = 5;
              (s as any).CloPrice = 1650;
            } else {
              (s as any).CloQuality = 2;
              (s as any).CloStrength = 142500;
              (s as any).CloThinness = 3;
              (s as any).CloTopCut = 1;
              (s as any).CloSkirtShortness = 2;
              (s as any).CloStyle2 = 5;
              (s as any).CloOffice = 1;
              (s as any).CloPrice = 1700;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 2;
                (s as any).CloStrength = 142500;
                (s as any).CloThinness = 2;
                (s as any).CloTopCut = 1;
                (s as any).CloSkirtShortness = 2;
                (s as any).CloDress = 1;
                (s as any).CloPrice = 1700;
              } else {
                (s as any).CloQuality = 2;
                (s as any).CloStrength = 142500;
                (s as any).CloThinness = 2;
                (s as any).CloTopCut = 1;
                (s as any).CloSkirtShortness = 2;
                (s as any).CloDress = 1;
                (s as any).CloPrice = 1700;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 2;
                  (s as any).CloStrength = 142500;
                  (s as any).CloThinness = 2;
                  (s as any).CloTopCut = 1;
                  (s as any).CloSkirtShortness = 2;
                  (s as any).CloDress = 1;
                  (s as any).CloPrice = 1700;
                } else {
                  (s as any).CloQuality = 2;
                  (s as any).CloStrength = 142500;
                  (s as any).CloThinness = 2;
                  (s as any).CloTopCut = 1;
                  (s as any).CloSkirtShortness = 2;
                  (s as any).CloPrice = 1700;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 2;
                    (s as any).CloStrength = 142500;
                    (s as any).CloThinness = 3;
                    (s as any).CloTopCut = 1;
                    (s as any).CloSkirtShortness = 2;
                    (s as any).CloDress = 1;
                    (s as any).CloStyle2 = 5;
                    (s as any).CloOffice = 1;
                    (s as any).CloPrice = 1700;
                  } else {
                    (s as any).CloQuality = 2;
                    (s as any).CloStrength = 142500;
                    (s as any).CloThinness = 4;
                    (s as any).CloTopCut = 2;
                    (s as any).CloSkirtShortness = 2;
                    (s as any).CloDress = 1;
                    (s as any).CloStyle2 = 5;
                    (s as any).CloOffice = 1;
                    (s as any).CloPrep = 1;
                    (s as any).CloPrice = 1700;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 2;
                      (s as any).CloStrength = 142500;
                      (s as any).CloThinness = 3;
                      (s as any).CloTopCut = 2;
                      (s as any).CloSkirtShortness = 2;
                      (s as any).CloDress = 1;
                      (s as any).CloStyle2 = 5;
                      (s as any).CloOffice = 1;
                      (s as any).CloPrice = 1700;
                    } else {
                      (s as any).CloQuality = 2;
                      (s as any).CloStrength = 142500;
                      (s as any).CloThinness = 3;
                      (s as any).CloTopCut = 2;
                      (s as any).CloSkirtShortness = 2;
                      (s as any).CloDress = 1;
                      (s as any).CloStyle2 = 5;
                      (s as any).CloOffice = 1;
                      (s as any).CloPrice = 1700;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).CloQuality = 2;
                        (s as any).CloStrength = 142500;
                        (s as any).CloThinness = 4;
                        (s as any).CloTopCut = 2;
                        (s as any).CloSkirtShortness = 2;
                        (s as any).CloDress = 1;
                        (s as any).CloStyle2 = 5;
                        (s as any).CloOffice = 1;
                        (s as any).CloPrice = 1700;
                      } else {
                        (s as any).CloQuality = 2;
                        (s as any).CloStrength = 142500;
                        (s as any).CloThinness = 2;
                        (s as any).CloTopCut = 2;
                        (s as any).CloSkirtShortness = 2;
                        (s as any).CloDress = 1;
                        (s as any).CloPrice = 1700;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).CloQuality = 2;
                          (s as any).CloStrength = 142500;
                          (s as any).CloThinness = 3;
                          (s as any).CloTopCut = 2;
                          (s as any).CloSkirtShortness = 2;
                          (s as any).CloDress = 1;
                          (s as any).CloPrice = 1700;
                        } else {
                          (s as any).CloQuality = 2;
                          (s as any).CloStrength = 142500;
                          (s as any).CloThinness = 2;
                          (s as any).CloTopCut = 2;
                          (s as any).CloSkirtShortness = 2;
                          (s as any).CloDress = 1;
                          (s as any).CloStyle2 = 5;
                          (s as any).CloOffice = 1;
                          (s as any).CloPrice = 1700;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).CloQuality = 2;
                            (s as any).CloStrength = 142500;
                            (s as any).CloThinness = 3;
                            (s as any).CloTopCut = 2;
                            (s as any).CloSkirtShortness = 2;
                            (s as any).CloDress = 1;
                            (s as any).CloPrice = 1700;
                          } else {
                            (s as any).CloQuality = 2;
                            (s as any).CloStrength = 142500;
                            (s as any).CloThinness = 2;
                            (s as any).CloTopCut = 2;
                            (s as any).CloSkirtShortness = 2;
                            (s as any).CloDress = 1;
                            (s as any).CloStyle2 = 5;
                            (s as any).CloOffice = 1;
                            (s as any).CloPrice = 1700;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).CloQuality = 2;
                              (s as any).CloStrength = 142500;
                              (s as any).CloThinness = 3;
                              (s as any).CloTopCut = 3;
                              (s as any).CloSkirtShortness = 2;
                              (s as any).CloDress = 1;
                              (s as any).CloPrice = 1700;
                            } else {
                              (s as any).CloQuality = 2;
                              (s as any).CloStrength = 142500;
                              (s as any).CloThinness = 4;
                              (s as any).CloTopCut = 2;
                              (s as any).CloSkirtShortness = 2;
                              (s as any).CloDress = 1;
                              (s as any).CloStyle2 = 5;
                              (s as any).CloOffice = 1;
                              (s as any).CloPrice = 1700;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).CloQuality = 2;
                                (s as any).CloStrength = 142500;
                                (s as any).CloThinness = 5;
                                (s as any).CloTopCut = 2;
                                (s as any).CloSkirtShortness = 2;
                                (s as any).CloDress = 1;
                                (s as any).CloPrice = 1700;
                              } else {
                                (s as any).CloQuality = 2;
                                (s as any).CloStrength = 142500;
                                (s as any).CloThinness = 2;
                                (s as any).CloTopCut = 2;
                                (s as any).CloSkirtShortness = 2;
                                (s as any).CloDress = 1;
                                (s as any).CloStyle2 = 5;
                                (s as any).CloOffice = 1;
                                (s as any).CloPrice = 1700;
                                if (((s as any).ARGS ?? 0)[0] === 31) {
                                  (s as any).CloQuality = 2;
                                  (s as any).CloStrength = 142500;
                                  (s as any).CloThinness = 3;
                                  (s as any).CloTopCut = 2;
                                  (s as any).CloSkirtShortness = 2;
                                  (s as any).CloDress = 1;
                                  (s as any).CloPrice = 1700;
                                } else {
                                  (s as any).CloQuality = 2;
                                  (s as any).CloStrength = 142500;
                                  (s as any).CloThinness = 2;
                                  (s as any).CloTopCut = 2;
                                  (s as any).CloSkirtShortness = 2;
                                  (s as any).CloDress = 1;
                                  (s as any).CloPrice = 1700;
                                  if (((s as any).ARGS ?? 0)[0] === 33) {
                                    (s as any).CloQuality = 2;
                                    (s as any).CloStrength = 142500;
                                    (s as any).CloThinness = 2;
                                    (s as any).CloTopCut = 2;
                                    (s as any).CloSkirtShortness = 2;
                                    (s as any).CloDress = 1;
                                    (s as any).CloPrice = 1700;
                                  } else {
                                    (s as any).CloQuality = 2;
                                    (s as any).CloStrength = 142500;
                                    (s as any).CloThinness = 2;
                                    (s as any).CloTopCut = 2;
                                    (s as any).CloSkirtShortness = 2;
                                    (s as any).CloDress = 1;
                                    (s as any).CloPrice = 1700;
                                    if (((s as any).ARGS ?? 0)[0] === 35) {
                                      (s as any).CloQuality = 2;
                                      (s as any).CloStrength = 142500;
                                      (s as any).CloThinness = 2;
                                      (s as any).CloTopCut = 2;
                                      (s as any).CloSkirtShortness = 2;
                                      (s as any).CloDress = 1;
                                      (s as any).CloStyle2 = 5;
                                      (s as any).CloOffice = 1;
                                      (s as any).CloPrice = 1700;
                                    } else {
                                      (s as any).CloQuality = 2;
                                      (s as any).CloStrength = 142500;
                                      (s as any).CloThinness = 2;
                                      (s as any).CloTopCut = 2;
                                      (s as any).CloSkirtShortness = 2;
                                      (s as any).CloDress = 1;
                                      (s as any).CloStyle2 = 5;
                                      (s as any).CloOffice = 1;
                                      (s as any).CloPrice = 1700;
                                      if (((s as any).ARGS ?? 0)[0] === 37) {
                                        (s as any).CloQuality = 2;
                                        (s as any).CloStrength = 142500;
                                        (s as any).CloThinness = 2;
                                        (s as any).CloTopCut = 2;
                                        (s as any).CloSkirtShortness = 2;
                                        (s as any).CloDress = 1;
                                        (s as any).CloPrice = 1700;
                                      } else {
                                        (s as any).CloQuality = 1;
                                        (s as any).CloStrength = 136875;
                                        (s as any).CloThinness = 2;
                                        (s as any).CloTopCut = 2;
                                        (s as any).CloSkirtShortness = 2;
                                        (s as any).CloDress = 1;
                                        (s as any).CloPrice = 1650;
                                        if (((s as any).ARGS ?? 0)[0] === 39) {
                                          (s as any).CloQuality = 2;
                                          (s as any).CloStrength = 142500;
                                          (s as any).CloThinness = 2;
                                          (s as any).CloTopCut = 2;
                                          (s as any).CloSkirtShortness = 2;
                                          (s as any).CloStyle2 = 5;
                                          (s as any).CloOffice = 1;
                                          (s as any).CloPrice = 1700;
                                        } else {
                                          (s as any).CloQuality = 1;
                                          (s as any).CloStrength = 136875;
                                          (s as any).CloThinness = 2;
                                          (s as any).CloTopCut = 2;
                                          (s as any).CloSkirtShortness = 2;
                                          (s as any).CloDress = 1;
                                          (s as any).CloPrude = 1;
                                          (s as any).CloPrice = 1650;
                                          if (((s as any).ARGS ?? 0)[0] === 41) {
                                            (s as any).CloQuality = 1;
                                            (s as any).CloStrength = 136875;
                                            (s as any).CloThinness = 2;
                                            (s as any).CloTopCut = 2;
                                            (s as any).CloSkirtShortness = 2;
                                            (s as any).CloDress = 1;
                                            (s as any).CloStyle2 = 5;
                                            (s as any).CloOffice = 1;
                                            (s as any).CloPrice = 1650;
                                          } else {
                                            (s as any).CloQuality = 2;
                                            (s as any).CloStrength = 142500;
                                            (s as any).CloThinness = 2;
                                            (s as any).CloTopCut = 2;
                                            (s as any).CloSkirtShortness = 2;
                                            (s as any).CloDress = 1;
                                            (s as any).CloPrice = 1700;
                                            if (((s as any).ARGS ?? 0)[0] === 43) {
                                              (s as any).CloQuality = 1;
                                              (s as any).CloStrength = 136875;
                                              (s as any).CloThinness = 2;
                                              (s as any).CloTopCut = 2;
                                              (s as any).CloSkirtShortness = 2;
                                              (s as any).CloDress = 1;
                                              (s as any).CloPrice = 1650;
                                            } else {
                                              (s as any).CloQuality = 1;
                                              (s as any).CloStrength = 136875;
                                              (s as any).CloThinness = 2;
                                              (s as any).CloTopCut = 2;
                                              (s as any).CloSkirtShortness = 2;
                                              (s as any).CloDress = 1;
                                              (s as any).CloPrice = 1650;
                                              if (((s as any).ARGS ?? 0)[0] === 45) {
                                                (s as any).CloQuality = 2;
                                                (s as any).CloStrength = 142500;
                                                (s as any).CloThinness = 2;
                                                (s as any).CloTopCut = 2;
                                                (s as any).CloSkirtShortness = 2;
                                                (s as any).CloDress = 1;
                                                (s as any).CloPrice = 1700;
                                              } else {
                                                (s as any).CloQuality = 2;
                                                (s as any).CloStrength = 142500;
                                                (s as any).CloThinness = 2;
                                                (s as any).CloTopCut = 2;
                                                (s as any).CloSkirtShortness = 2;
                                                (s as any).CloDress = 1;
                                                (s as any).CloPrice = 1700;
                                                if (((s as any).ARGS ?? 0)[0] === 47) {
                                                  (s as any).CloQuality = 2;
                                                  (s as any).CloStrength = 142500;
                                                  (s as any).CloThinness = 2;
                                                  (s as any).CloTopCut = 2;
                                                  (s as any).CloSkirtShortness = 2;
                                                  (s as any).CloDress = 1;
                                                  (s as any).CloPrice = 1700;
                                                } else {
                                                  (s as any).CloQuality = 1;
                                                  (s as any).CloStrength = 136875;
                                                  (s as any).CloThinness = 2;
                                                  (s as any).CloTopCut = 2;
                                                  (s as any).CloSkirtShortness = 2;
                                                  (s as any).CloDress = 1;
                                                  (s as any).CloPrep = 1;
                                                  (s as any).CloPrice = 1650;
                                                  if (((s as any).ARGS ?? 0)[0] === 49) {
                                                    (s as any).CloQuality = 1;
                                                    (s as any).CloStrength = 174375;
                                                    (s as any).CloThinness = 1;
                                                    (s as any).CloTopCut = 2;
                                                    (s as any).CloSkirtShortness = 2;
                                                    (s as any).CloDress = 1;
                                                    (s as any).CloStyle = 5;
                                                    (s as any).CloPrice = 1650;
                                                  } else {
                                                    (s as any).CloQuality = 2;
                                                    (s as any).CloStrength = 142500;
                                                    (s as any).CloThinness = 2;
                                                    (s as any).CloTopCut = 2;
                                                    (s as any).CloSkirtShortness = 2;
                                                    (s as any).CloDress = 1;
                                                    (s as any).CloPrice = 1700;
                                                    if (((s as any).ARGS ?? 0)[0] === 51) {
                                                      (s as any).CloQuality = 2;
                                                      (s as any).CloStrength = 142500;
                                                      (s as any).CloThinness = 2;
                                                      (s as any).CloTopCut = 2;
                                                      (s as any).CloSkirtShortness = 2;
                                                      (s as any).CloDress = 1;
                                                      (s as any).CloPrice = 1700;
                                                    } else {
                                                      (s as any).CloQuality = 1;
                                                      (s as any).CloStrength = 174375;
                                                      (s as any).CloThinness = 1;
                                                      (s as any).CloTopCut = 2;
                                                      (s as any).CloSkirtShortness = 2;
                                                      (s as any).CloDress = 1;
                                                      (s as any).CloStyle = 5;
                                                      (s as any).CloPrice = 1650;
                                                      if (((s as any).ARGS ?? 0)[0] === 53) {
                                                        (s as any).CloQuality = 2;
                                                        (s as any).CloStrength = 142500;
                                                        (s as any).CloThinness = 2;
                                                        (s as any).CloTopCut = 2;
                                                        (s as any).CloSkirtShortness = 2;
                                                        (s as any).CloDress = 1;
                                                        (s as any).CloPrice = 1700;
                                                      } else {
                                                        (s as any).CloQuality = 2;
                                                        (s as any).CloStrength = 142500;
                                                        (s as any).CloThinness = 2;
                                                        (s as any).CloTopCut = 2;
                                                        (s as any).CloSkirtShortness = 2;
                                                        (s as any).CloDress = 1;
                                                        (s as any).CloPrice = 1700;
                                                        if (((s as any).ARGS ?? 0)[0] === 55) {
                                                          (s as any).CloQuality = 1;
                                                          (s as any).CloStrength = 174375;
                                                          (s as any).CloThinness = 1;
                                                          (s as any).CloTopCut = 2;
                                                          (s as any).CloSkirtShortness = 2;
                                                          (s as any).CloDress = 1;
                                                          (s as any).CloStyle = 5;
                                                          (s as any).CloPrice = 1650;
                                                        } else {
                                                          (s as any).CloQuality = 1;
                                                          (s as any).CloStrength = 136875;
                                                          (s as any).CloThinness = 2;
                                                          (s as any).CloTopCut = 2;
                                                          (s as any).CloSkirtShortness = 2;
                                                          (s as any).CloDress = 1;
                                                          (s as any).CloPrice = 1650;
                                                          if (((s as any).ARGS ?? 0)[0] === 57) {
                                                            (s as any).CloQuality = 2;
                                                            (s as any).CloStrength = 142500;
                                                            (s as any).CloThinness = 2;
                                                            (s as any).CloTopCut = 2;
                                                            (s as any).CloSkirtShortness = 2;
                                                            (s as any).CloDress = 1;
                                                            (s as any).CloPrice = 1700;
                                                          } else {
                                                            (s as any).CloQuality = 2;
                                                            (s as any).CloStrength = 142500;
                                                            (s as any).CloThinness = 2;
                                                            (s as any).CloTopCut = 2;
                                                            (s as any).CloSkirtShortness = 2;
                                                            (s as any).CloStyle2 = 5;
                                                            (s as any).CloOffice = 1;
                                                            (s as any).CloPrice = 1700;
                                                            if (((s as any).ARGS ?? 0)[0] === 59) {
                                                              (s as any).CloQuality = 2;
                                                              (s as any).CloStrength = 142500;
                                                              (s as any).CloThinness = 2;
                                                              (s as any).CloTopCut = 2;
                                                              (s as any).CloSkirtShortness = 2;
                                                              (s as any).CloStyle2 = 5;
                                                              (s as any).CloOffice = 1;
                                                              (s as any).CloPrice = 1700;
                                                            } else {
                                                              (s as any).CloQuality = 1;
                                                              (s as any).CloStrength = 174375;
                                                              (s as any).CloThinness = 1;
                                                              (s as any).CloTopCut = 2;
                                                              (s as any).CloSkirtShortness = 2;
                                                              (s as any).CloDress = 1;
                                                              (s as any).CloStyle = 5;
                                                              (s as any).CloPrice = 1650;
                                                              if (((s as any).ARGS ?? 0)[0] === 61) {
                                                                (s as any).CloQuality = 1;
                                                                (s as any).CloStrength = 174375;
                                                                (s as any).CloThinness = 1;
                                                                (s as any).CloTopCut = 2;
                                                                (s as any).CloSkirtShortness = 2;
                                                                (s as any).CloDress = 1;
                                                                (s as any).CloStyle = 5;
                                                                (s as any).CloPrude = 1;
                                                                (s as any).CloPrice = 1650;
                                                              } else {
                                                                (s as any).CloQuality = 2;
                                                                (s as any).CloStrength = 142500;
                                                                (s as any).CloThinness = 4;
                                                                (s as any).CloTopCut = 2;
                                                                (s as any).CloSkirtShortness = 3;
                                                                (s as any).CloStyle2 = 5;
                                                                (s as any).CloOffice = 1;
                                                                (s as any).CloPrice = 1700;
                                                                if (((s as any).ARGS ?? 0)[0] === 63) {
                                                                  (s as any).CloQuality = 2;
                                                                  (s as any).CloStrength = 142500;
                                                                  (s as any).CloThinness = 2;
                                                                  (s as any).CloTopCut = 2;
                                                                  (s as any).CloSkirtShortness = 3;
                                                                  (s as any).CloPrice = 1700;
                                                                } else {
                                                                  (s as any).CloQuality = 2;
                                                                  (s as any).CloStrength = 142500;
                                                                  (s as any).CloThinness = 2;
                                                                  (s as any).CloTopCut = 2;
                                                                  (s as any).CloSkirtShortness = 3;
                                                                  (s as any).CloPrice = 1700;
                                                                  if (((s as any).ARGS ?? 0)[0] === 65) {
                                                                    (s as any).CloQuality = 2;
                                                                    (s as any).CloStrength = 142500;
                                                                    (s as any).CloThinness = 2;
                                                                    (s as any).CloTopCut = 2;
                                                                    (s as any).CloSkirtShortness = 2;
                                                                    (s as any).CloDress = 1;
                                                                    (s as any).CloPrice = 1700;
                                                                  } else {
                                                                    (s as any).CloQuality = 2;
                                                                    (s as any).CloStrength = 142500;
                                                                    (s as any).CloThinness = 2;
                                                                    (s as any).CloTopCut = 2;
                                                                    (s as any).CloSkirtShortness = 2;
                                                                    (s as any).CloDress = 1;
                                                                    (s as any).CloPrice = 1700;
                                                                    if (((s as any).ARGS ?? 0)[0] === 67) {
                                                                      (s as any).CloQuality = 2;
                                                                      (s as any).CloStrength = 142500;
                                                                      (s as any).CloThinness = 2;
                                                                      (s as any).CloTopCut = 2;
                                                                      (s as any).CloSkirtShortness = 3;
                                                                      (s as any).CloDress = 1;
                                                                      (s as any).CloPrice = 1700;
                                                                    } else {
                                                                      (s as any).CloQuality = 2;
                                                                      (s as any).CloStrength = 142500;
                                                                      (s as any).CloThinness = 2;
                                                                      (s as any).CloTopCut = 2;
                                                                      (s as any).CloSkirtShortness = 3;
                                                                      (s as any).CloPrice = 1700;
                                                                      if (((s as any).ARGS ?? 0)[0] === 69) {
                                                                        (s as any).CloQuality = 2;
                                                                        (s as any).CloStrength = 180000;
                                                                        (s as any).CloThinness = 1;
                                                                        (s as any).CloTopCut = 2;
                                                                        (s as any).CloSkirtShortness = 2;
                                                                        (s as any).CloDress = 1;
                                                                        (s as any).CloStyle = 5;
                                                                        (s as any).CloPrice = 1700;
                                                                      } else {
                                                                        (s as any).CloQuality = 2;
                                                                        (s as any).CloStrength = 142500;
                                                                        (s as any).CloThinness = 2;
                                                                        (s as any).CloTopCut = 2;
                                                                        (s as any).CloSkirtShortness = 3;
                                                                        (s as any).CloDress = 1;
                                                                        (s as any).CloPrice = 1700;
                                                                        if (((s as any).ARGS ?? 0)[0] === 71) {
                                                                          (s as any).CloQuality = 2;
                                                                          (s as any).CloStrength = 142500;
                                                                          (s as any).CloThinness = 2;
                                                                          (s as any).CloTopCut = 3;
                                                                          (s as any).CloSkirtShortness = 2;
                                                                          (s as any).CloDress = 1;
                                                                          (s as any).CloPrice = 1700;
                                                                        } else {
                                                                          (s as any).CloQuality = 2;
                                                                          (s as any).CloStrength = 142500;
                                                                          (s as any).CloThinness = 3;
                                                                          (s as any).CloTopCut = 3;
                                                                          (s as any).CloSkirtShortness = 2;
                                                                          (s as any).CloStyle2 = 5;
                                                                          (s as any).CloOffice = 1;
                                                                          (s as any).CloPrice = 1700;
                                                                          if (((s as any).ARGS ?? 0)[0] === 73) {
                                                                            (s as any).CloQuality = 2;
                                                                            (s as any).CloStrength = 142500;
                                                                            (s as any).CloThinness = 4;
                                                                            (s as any).CloTopCut = 3;
                                                                            (s as any).CloSkirtShortness = 2;
                                                                            (s as any).CloDress = 1;
                                                                            (s as any).CloStyle2 = 5;
                                                                            (s as any).CloOffice = 1;
                                                                            (s as any).CloPrice = 1700;
                                                                          } else {
                                                                            (s as any).CloQuality = 2;
                                                                            (s as any).CloStrength = 142500;
                                                                            (s as any).CloThinness = 4;
                                                                            (s as any).CloTopCut = 3;
                                                                            (s as any).CloSkirtShortness = 2;
                                                                            (s as any).CloDress = 1;
                                                                            (s as any).CloPrice = 1700;
                                                                            if (((s as any).ARGS ?? 0)[0] === 75) {
                                                                              (s as any).CloQuality = 2;
                                                                              (s as any).CloStrength = 142500;
                                                                              (s as any).CloThinness = 4;
                                                                              (s as any).CloTopCut = 3;
                                                                              (s as any).CloSkirtShortness = 2;
                                                                              (s as any).CloDress = 1;
                                                                              (s as any).CloPrice = 1700;
                                                                            } else {
                                                                              (s as any).CloQuality = 2;
                                                                              (s as any).CloStrength = 142500;
                                                                              (s as any).CloThinness = 4;
                                                                              (s as any).CloTopCut = 3;
                                                                              (s as any).CloSkirtShortness = 2;
                                                                              (s as any).CloDress = 1;
                                                                              (s as any).CloStyle2 = 5;
                                                                              (s as any).CloOffice = 1;
                                                                              (s as any).CloPrice = 1700;
                                                                              if (((s as any).ARGS ?? 0)[0] === 77) {
                                                                                (s as any).CloQuality = 1;
                                                                                (s as any).CloStrength = 136875;
                                                                                (s as any).CloThinness = 2;
                                                                                (s as any).CloTopCut = 3;
                                                                                (s as any).CloSkirtShortness = 2;
                                                                                (s as any).CloDress = 1;
                                                                                (s as any).CloStyle2 = 5;
                                                                                (s as any).CloOffice = 1;
                                                                                (s as any).CloPrice = 1650;
                                                                              } else {
                                                                                (s as any).CloQuality = 1;
                                                                                (s as any).CloStrength = 136875;
                                                                                (s as any).CloThinness = 2;
                                                                                (s as any).CloTopCut = 3;
                                                                                (s as any).CloSkirtShortness = 2;
                                                                                (s as any).CloDress = 1;
                                                                                (s as any).CloPrice = 1650;
                                                                                if (((s as any).ARGS ?? 0)[0] === 79) {
                                                                                  (s as any).CloQuality = 1;
                                                                                  (s as any).CloStrength = 136875;
                                                                                  (s as any).CloThinness = 3;
                                                                                  (s as any).CloTopCut = 3;
                                                                                  (s as any).CloSkirtShortness = 2;
                                                                                  (s as any).CloDress = 1;
                                                                                  (s as any).CloPrice = 1650;
                                                                                } else {
                                                                                  (s as any).CloQuality = 1;
                                                                                  (s as any).CloStrength = 136875;
                                                                                  (s as any).CloThinness = 2;
                                                                                  (s as any).CloTopCut = 3;
                                                                                  (s as any).CloSkirtShortness = 2;
                                                                                  (s as any).CloDress = 1;
                                                                                  (s as any).CloPrice = 1650;
                                                                                  if (((s as any).ARGS ?? 0)[0] === 81) {
                                                                                    (s as any).CloQuality = 2;
                                                                                    (s as any).CloStrength = 142500;
                                                                                    (s as any).CloThinness = 2;
                                                                                    (s as any).CloTopCut = 1;
                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                    (s as any).CloStyle2 = 5;
                                                                                    (s as any).CloOffice = 1;
                                                                                    (s as any).CloPrice = 1700;
                                                                                  } else {
                                                                                    (s as any).CloQuality = 2;
                                                                                    (s as any).CloStrength = 142500;
                                                                                    (s as any).CloThinness = 3;
                                                                                    (s as any).CloTopCut = 1;
                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                    (s as any).CloDress = 1;
                                                                                    (s as any).CloStyle2 = 5;
                                                                                    (s as any).CloOffice = 1;
                                                                                    (s as any).CloPrice = 1700;
                                                                                    if (((s as any).ARGS ?? 0)[0] === 83) {
                                                                                      (s as any).CloQuality = 2;
                                                                                      (s as any).CloStrength = 142500;
                                                                                      (s as any).CloThinness = 2;
                                                                                      (s as any).CloTopCut = 1;
                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                      (s as any).CloDress = 1;
                                                                                      (s as any).CloStyle2 = 5;
                                                                                      (s as any).CloOffice = 1;
                                                                                      (s as any).CloPrice = 1700;
                                                                                    } else {
                                                                                      (s as any).CloQuality = 1;
                                                                                      (s as any).CloStrength = 174375;
                                                                                      (s as any).CloThinness = 1;
                                                                                      (s as any).CloTopCut = 1;
                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                      (s as any).CloDress = 1;
                                                                                      (s as any).CloStyle = 5;
                                                                                      (s as any).CloPrice = 1650;
                                                                                      if (((s as any).ARGS ?? 0)[0] === 85) {
                                                                                        (s as any).CloQuality = 1;
                                                                                        (s as any).CloStrength = 174375;
                                                                                        (s as any).CloThinness = 1;
                                                                                        (s as any).CloTopCut = 1;
                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                        (s as any).CloDress = 1;
                                                                                        (s as any).CloStyle = 5;
                                                                                        (s as any).CloPrice = 1650;
                                                                                      } else {
                                                                                        (s as any).CloQuality = 1;
                                                                                        (s as any).CloStrength = 174375;
                                                                                        (s as any).CloThinness = 1;
                                                                                        (s as any).CloTopCut = 1;
                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                        (s as any).CloDress = 1;
                                                                                        (s as any).CloStyle = 5;
                                                                                        (s as any).CloPrice = 1650;
                                                                                        if (((s as any).ARGS ?? 0)[0] === 87) {
                                                                                          (s as any).CloQuality = 2;
                                                                                          (s as any).CloStrength = 142500;
                                                                                          (s as any).CloThinness = 2;
                                                                                          (s as any).CloTopCut = 1;
                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                          (s as any).CloDress = 1;
                                                                                          (s as any).CloPrice = 1700;
                                                                                        } else {
                                                                                          (s as any).CloQuality = 2;
                                                                                          (s as any).CloStrength = 142500;
                                                                                          (s as any).CloThinness = 2;
                                                                                          (s as any).CloTopCut = 1;
                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                          (s as any).CloDress = 1;
                                                                                          (s as any).CloPrice = 1700;
                                                                                          if (((s as any).ARGS ?? 0)[0] === 89) {
                                                                                            (s as any).CloQuality = 2;
                                                                                            (s as any).CloStrength = 142500;
                                                                                            (s as any).CloThinness = 3;
                                                                                            (s as any).CloTopCut = 1;
                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                            (s as any).CloDress = 1;
                                                                                            (s as any).CloStyle2 = 5;
                                                                                            (s as any).CloOffice = 1;
                                                                                            (s as any).CloPrice = 1700;
                                                                                          } else {
                                                                                            (s as any).CloQuality = 2;
                                                                                            (s as any).CloStrength = 142500;
                                                                                            (s as any).CloThinness = 5;
                                                                                            (s as any).CloTopCut = 2;
                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                            (s as any).CloPrice = 1700;
                                                                                            if (((s as any).ARGS ?? 0)[0] === 91) {
                                                                                              (s as any).CloQuality = 2;
                                                                                              (s as any).CloStrength = 180000;
                                                                                              (s as any).CloThinness = 1;
                                                                                              (s as any).CloTopCut = 1;
                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                              (s as any).CloDress = 1;
                                                                                              (s as any).CloStyle = 5;
                                                                                              (s as any).CloPrice = 1700;
                                                                                            } else {
                                                                                              (s as any).CloQuality = 2;
                                                                                              (s as any).CloStrength = 142500;
                                                                                              (s as any).CloThinness = 2;
                                                                                              (s as any).CloTopCut = 1;
                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                              (s as any).CloDress = 1;
                                                                                              (s as any).CloPrice = 1700;
                                                                                              if (((s as any).ARGS ?? 0)[0] === 93) {
                                                                                                (s as any).CloQuality = 1;
                                                                                                (s as any).CloStrength = 136875;
                                                                                                (s as any).CloThinness = 2;
                                                                                                (s as any).CloTopCut = 1;
                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                (s as any).CloDress = 1;
                                                                                                (s as any).CloPrice = 1650;
                                                                                              } else {
                                                                                                (s as any).CloQuality = 2;
                                                                                                (s as any).CloStrength = 142500;
                                                                                                (s as any).CloThinness = 2;
                                                                                                (s as any).CloTopCut = 1;
                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                (s as any).CloDress = 1;
                                                                                                (s as any).CloPrice = 1700;
                                                                                                if (((s as any).ARGS ?? 0)[0] === 95) {
                                                                                                  (s as any).CloQuality = 1;
                                                                                                  (s as any).CloStrength = 136875;
                                                                                                  (s as any).CloThinness = 2;
                                                                                                  (s as any).CloTopCut = 1;
                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                  (s as any).CloDress = 1;
                                                                                                  (s as any).CloPrice = 1650;
                                                                                                } else {
                                                                                                  (s as any).CloQuality = 1;
                                                                                                  (s as any).CloStrength = 136875;
                                                                                                  (s as any).CloThinness = 2;
                                                                                                  (s as any).CloTopCut = 1;
                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                  (s as any).CloDress = 1;
                                                                                                  (s as any).CloStyle2 = 5;
                                                                                                  (s as any).CloOffice = 1;
                                                                                                  (s as any).CloPrice = 1650;
                                                                                                  if (((s as any).ARGS ?? 0)[0] === 97) {
                                                                                                    (s as any).CloQuality = 2;
                                                                                                    (s as any).CloStrength = 142500;
                                                                                                    (s as any).CloThinness = 2;
                                                                                                    (s as any).CloTopCut = 1;
                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                    (s as any).CloDress = 1;
                                                                                                    (s as any).CloPrice = 1700;
                                                                                                  } else {
                                                                                                    (s as any).CloQuality = 2;
                                                                                                    (s as any).CloStrength = 142500;
                                                                                                    (s as any).CloThinness = 2;
                                                                                                    (s as any).CloTopCut = 2;
                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                    (s as any).CloDress = 1;
                                                                                                    (s as any).CloPrice = 1700;
                                                                                                    if (((s as any).ARGS ?? 0)[0] === 99) {
                                                                                                      (s as any).CloQuality = 2;
                                                                                                      (s as any).CloStrength = 142500;
                                                                                                      (s as any).CloThinness = 3;
                                                                                                      (s as any).CloTopCut = 1;
                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                      (s as any).CloStyle2 = 5;
                                                                                                      (s as any).CloOffice = 1;
                                                                                                      (s as any).CloPrep = 1;
                                                                                                      (s as any).CloPrice = 1700;
                                                                                                    } else {
                                                                                                      (s as any).CloQuality = 2;
                                                                                                      (s as any).CloStrength = 142500;
                                                                                                      (s as any).CloThinness = 4;
                                                                                                      (s as any).CloTopCut = 1;
                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                      (s as any).CloStyle2 = 5;
                                                                                                      (s as any).CloOffice = 1;
                                                                                                      (s as any).CloPrice = 1700;
                                                                                                      if (((s as any).ARGS ?? 0)[0] === 101) {
                                                                                                        (s as any).CloQuality = 3;
                                                                                                        (s as any).CloStrength = 148125;
                                                                                                        (s as any).CloThinness = 5;
                                                                                                        (s as any).CloTopCut = 1;
                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                        (s as any).CloDress = 1;
                                                                                                        (s as any).CloPrice = 1750;
                                                                                                      } else {
                                                                                                        (s as any).CloQuality = 2;
                                                                                                        (s as any).CloStrength = 142500;
                                                                                                        (s as any).CloThinness = 6;
                                                                                                        (s as any).CloTopCut = 1;
                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                        (s as any).CloPrice = 1700;
                                                                                                        if (((s as any).ARGS ?? 0)[0] === 103) {
                                                                                                          (s as any).CloQuality = 2;
                                                                                                          (s as any).CloStrength = 142500;
                                                                                                          (s as any).CloThinness = 2;
                                                                                                          (s as any).CloTopCut = 1;
                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                          (s as any).CloDress = 1;
                                                                                                          (s as any).CloPrice = 1700;
                                                                                                        } else {
                                                                                                          (s as any).CloQuality = 2;
                                                                                                          (s as any).CloStrength = 142500;
                                                                                                          (s as any).CloThinness = 3;
                                                                                                          (s as any).CloTopCut = 1;
                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                          (s as any).CloDress = 1;
                                                                                                          (s as any).CloPrice = 1700;
                                                                                                          if (((s as any).ARGS ?? 0)[0] === 105) {
                                                                                                            (s as any).CloQuality = 2;
                                                                                                            (s as any).CloStrength = 180000;
                                                                                                            (s as any).CloThinness = 1;
                                                                                                            (s as any).CloTopCut = 2;
                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                            (s as any).CloDress = 1;
                                                                                                            (s as any).CloStyle = 5;
                                                                                                            (s as any).CloPrude = 1;
                                                                                                            (s as any).CloPrice = 1700;
                                                                                                          } else {
                                                                                                            (s as any).CloQuality = 1;
                                                                                                            (s as any).CloStrength = 136875;
                                                                                                            (s as any).CloThinness = 4;
                                                                                                            (s as any).CloTopCut = 2;
                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                            (s as any).CloPrice = 1650;
                                                                                                            if (((s as any).ARGS ?? 0)[0] === 107) {
                                                                                                              (s as any).CloQuality = 1;
                                                                                                              (s as any).CloStrength = 136875;
                                                                                                              (s as any).CloThinness = 2;
                                                                                                              (s as any).CloTopCut = 1;
                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                              (s as any).CloPrice = 1650;
                                                                                                            } else {
                                                                                                              (s as any).CloQuality = 2;
                                                                                                              (s as any).CloStrength = 142500;
                                                                                                              (s as any).CloThinness = 4;
                                                                                                              (s as any).CloTopCut = 1;
                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                              (s as any).CloDress = 1;
                                                                                                              (s as any).CloStyle2 = 5;
                                                                                                              (s as any).CloOffice = 1;
                                                                                                              (s as any).CloPrice = 1700;
                                                                                                              if (((s as any).ARGS ?? 0)[0] === 109) {
                                                                                                                (s as any).CloQuality = 2;
                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                (s as any).CloThinness = 5;
                                                                                                                (s as any).CloTopCut = 1;
                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                (s as any).CloDress = 1;
                                                                                                                (s as any).CloPrice = 1700;
                                                                                                              } else {
                                                                                                                (s as any).CloQuality = 1;
                                                                                                                (s as any).CloStrength = 136875;
                                                                                                                (s as any).CloThinness = 2;
                                                                                                                (s as any).CloTopCut = 1;
                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                if (((s as any).ARGS ?? 0)[0] === 111) {
                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                  (s as any).CloDress = 1;
                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                } else {
                                                                                                                  (s as any).CloQuality = 1;
                                                                                                                  (s as any).CloStrength = 136875;
                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                  (s as any).CloDress = 1;
                                                                                                                  (s as any).CloPrice = 1650;
                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 113) {
                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                    (s as any).CloThinness = 5;
                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                                    (s as any).CloDress = 1;
                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                  } else {
                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                                    (s as any).CloStyle2 = 5;
                                                                                                                    (s as any).CloOffice = 1;
                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 115) {
                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                      (s as any).CloThinness = 3;
                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                    } else {
                                                                                                                      (s as any).CloQuality = 1;
                                                                                                                      (s as any).CloStrength = 136875;
                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                                      (s as any).CloPrice = 1650;
                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 117) {
                                                                                                                        (s as any).CloQuality = 1;
                                                                                                                        (s as any).CloStrength = 136875;
                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                                        (s as any).CloDress = 1;
                                                                                                                        (s as any).CloPrice = 1650;
                                                                                                                      } else {
                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                                        (s as any).CloDress = 1;
                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 119) {
                                                                                                                          (s as any).CloQuality = 1;
                                                                                                                          (s as any).CloStrength = 174375;
                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                                          (s as any).CloDress = 1;
                                                                                                                          (s as any).CloStyle = 5;
                                                                                                                          (s as any).CloPrice = 1650;
                                                                                                                        } else {
                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                          (s as any).CloThinness = 3;
                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                                          (s as any).CloDress = 1;
                                                                                                                          (s as any).CloStyle2 = 5;
                                                                                                                          (s as any).CloOffice = 1;
                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 121) {
                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                            (s as any).CloDress = 1;
                                                                                                                            (s as any).CloStyle2 = 5;
                                                                                                                            (s as any).CloOffice = 1;
                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                          } else {
                                                                                                                            (s as any).CloQuality = 1;
                                                                                                                            (s as any).CloStrength = 174375;
                                                                                                                            (s as any).CloThinness = 1;
                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                            (s as any).CloDress = 1;
                                                                                                                            (s as any).CloStyle = 5;
                                                                                                                            (s as any).CloPrice = 1650;
                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 123) {
                                                                                                                              (s as any).CloQuality = 1;
                                                                                                                              (s as any).CloStrength = 174375;
                                                                                                                              (s as any).CloThinness = 1;
                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                                              (s as any).CloDress = 1;
                                                                                                                              (s as any).CloStyle = 5;
                                                                                                                              (s as any).CloPrice = 1650;
                                                                                                                            } else {
                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                                              (s as any).CloDress = 1;
                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 125) {
                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                              } else {
                                                                                                                                (s as any).CloQuality = 1;
                                                                                                                                (s as any).CloStrength = 174375;
                                                                                                                                (s as any).CloThinness = 1;
                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                (s as any).CloStyle = 5;
                                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 127) {
                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                } else {
                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                  (s as any).CloThinness = 5;
                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 129) {
                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                  } else {
                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 131) {
                                                                                                                                      (s as any).CloQuality = 1;
                                                                                                                                      (s as any).CloStrength = 174375;
                                                                                                                                      (s as any).CloThinness = 1;
                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                      (s as any).CloStyle = 5;
                                                                                                                                      (s as any).CloPrice = 1650;
                                                                                                                                    } else {
                                                                                                                                      (s as any).CloQuality = 1;
                                                                                                                                      (s as any).CloStrength = 136875;
                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                      (s as any).CloPrice = 1650;
                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 133) {
                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                      } else {
                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 135) {
                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                        } else {
                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 137) {
                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                          } else {
                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                            (s as any).CloThinness = 3;
                                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 139) {
                                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                                            } else {
                                                                                                                                              (s as any).CloQuality = 1;
                                                                                                                                              (s as any).CloStrength = 174375;
                                                                                                                                              (s as any).CloThinness = 1;
                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                              (s as any).CloStyle = 5;
                                                                                                                                              (s as any).CloPrice = 1650;
                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 141) {
                                                                                                                                                (s as any).CloQuality = 1;
                                                                                                                                                (s as any).CloStrength = 174375;
                                                                                                                                                (s as any).CloThinness = 1;
                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                (s as any).CloStyle = 5;
                                                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                                              } else {
                                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 143) {
                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                                                  (s as any).CloStyle2 = 5;
                                                                                                                                                  (s as any).CloOffice = 1;
                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                } else {
                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 145) {
                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                  } else {
                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 147) {
                                                                                                                                                      (s as any).CloQuality = 1;
                                                                                                                                                      (s as any).CloStrength = 136875;
                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                      (s as any).CloPrice = 1650;
                                                                                                                                                    } else {
                                                                                                                                                      (s as any).CloQuality = 1;
                                                                                                                                                      (s as any).CloStrength = 136875;
                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                      (s as any).CloPrice = 1650;
                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 149) {
                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                      } else {
                                                                                                                                                        (s as any).CloQuality = 1;
                                                                                                                                                        (s as any).CloStrength = 136875;
                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                        (s as any).CloStyle2 = 5;
                                                                                                                                                        (s as any).CloOffice = 1;
                                                                                                                                                        (s as any).CloPrice = 1650;
                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 151) {
                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                                                                          (s as any).CloStyle2 = 5;
                                                                                                                                                          (s as any).CloOffice = 1;
                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                        } else {
                                                                                                                                                          (s as any).CloQuality = 1;
                                                                                                                                                          (s as any).CloStrength = 136875;
                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                          (s as any).CloPrice = 1650;
                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 153) {
                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                          } else {
                                                                                                                                                            (s as any).CloQuality = 1;
                                                                                                                                                            (s as any).CloStrength = 174375;
                                                                                                                                                            (s as any).CloThinness = 1;
                                                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                            (s as any).CloStyle = 5;
                                                                                                                                                            (s as any).CloPrice = 1650;
                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 155) {
                                                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                                                                              (s as any).CloStyle2 = 5;
                                                                                                                                                              (s as any).CloOffice = 1;
                                                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                                                            } else {
                                                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 157) {
                                                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                                                (s as any).CloStrength = 180000;
                                                                                                                                                                (s as any).CloThinness = 1;
                                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                (s as any).CloStyle = 5;
                                                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                                                              } else {
                                                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 159) {
                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                } else {
                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                  (s as any).CloThinness = 5;
                                                                                                                                                                  (s as any).CloTopCut = 3;
                                                                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 161) {
                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                                                                                    (s as any).CloStyle = 4;
                                                                                                                                                                    (s as any).CloProstitute = 1;
                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                  } else {
                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 163) {
                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                      (s as any).CloThinness = 3;
                                                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                                                                                      (s as any).CloStyle2 = 5;
                                                                                                                                                                      (s as any).CloOffice = 1;
                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                    } else {
                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                      (s as any).CloThinness = 4;
                                                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                      (s as any).CloBimbo = 1;
                                                                                                                                                                      (s as any).CloStyle = 4;
                                                                                                                                                                      (s as any).CloProstitute = 1;
                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 165) {
                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                        (s as any).CloThinness = 4;
                                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                                                                                        (s as any).CloStyle2 = 5;
                                                                                                                                                                        (s as any).CloOffice = 1;
                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                      } else {
                                                                                                                                                                        (s as any).CloQuality = 1;
                                                                                                                                                                        (s as any).CloStrength = 136875;
                                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                        (s as any).CloPrice = 1650;
                                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 167) {
                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                        } else {
                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 169) {
                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                            (s as any).CloBimbo = 1;
                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                          } else {
                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 171) {
                                                                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                                              (s as any).CloTopCut = 3;
                                                                                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                                                                                              (s as any).CloStyle = 4;
                                                                                                                                                                              (s as any).CloProstitute = 1;
                                                                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                                                                            } else {
                                                                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                                              (s as any).CloTopCut = 3;
                                                                                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 173) {
                                                                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                                (s as any).CloTopCut = 3;
                                                                                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                                                                              } else {
                                                                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                                (s as any).CloTopCut = 3;
                                                                                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 175) {
                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                                                  (s as any).CloTopCut = 3;
                                                                                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                } else {
                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                                                  (s as any).CloTopCut = 3;
                                                                                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 177) {
                                                                                                                                                                                    (s as any).CloQuality = 1;
                                                                                                                                                                                    (s as any).CloStrength = 136875;
                                                                                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                                                    (s as any).CloPrice = 1650;
                                                                                                                                                                                  } else {
                                                                                                                                                                                    (s as any).CloQuality = 1;
                                                                                                                                                                                    (s as any).CloStrength = 136875;
                                                                                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                                                                                    (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                                                    (s as any).CloPrice = 1650;
                                                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 179) {
                                                                                                                                                                                      (s as any).CloQuality = 1;
                                                                                                                                                                                      (s as any).CloStrength = 136875;
                                                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                      (s as any).CloPrice = 1650;
                                                                                                                                                                                    } else {
                                                                                                                                                                                      (s as any).CloQuality = 1;
                                                                                                                                                                                      (s as any).CloStrength = 136875;
                                                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                                                                      (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                      (s as any).CloPrice = 1650;
                                                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 181) {
                                                                                                                                                                                        (s as any).CloQuality = 1;
                                                                                                                                                                                        (s as any).CloStrength = 136875;
                                                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                        (s as any).CloPrice = 1650;
                                                                                                                                                                                      } else {
                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                                                        (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 183) {
                                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                                        } else {
                                                                                                                                                                                          (s as any).CloQuality = 1;
                                                                                                                                                                                          (s as any).CloStrength = 136875;
                                                                                                                                                                                          (s as any).CloThinness = 3;
                                                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                                                          (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                          (s as any).CloStyle = 4;
                                                                                                                                                                                          (s as any).CloProstitute = 1;
                                                                                                                                                                                          (s as any).CloPrice = 1650;
                                                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 185) {
                                                                                                                                                                                            (s as any).CloQuality = 1;
                                                                                                                                                                                            (s as any).CloStrength = 136875;
                                                                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                            (s as any).CloPrice = 1650;
                                                                                                                                                                                          } else {
                                                                                                                                                                                            (s as any).CloQuality = 1;
                                                                                                                                                                                            (s as any).CloStrength = 136875;
                                                                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                            (s as any).CloPrice = 1650;
                                                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 187) {
                                                                                                                                                                                              (s as any).CloQuality = 3;
                                                                                                                                                                                              (s as any).CloStrength = 148125;
                                                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                                                              (s as any).CloTopCut = 3;
                                                                                                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                                              (s as any).CloPrice = 1750;
                                                                                                                                                                                            } else {
                                                                                                                                                                                              (s as any).CloQuality = 3;
                                                                                                                                                                                              (s as any).CloStrength = 148125;
                                                                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                                                                              (s as any).CloTopCut = 4;
                                                                                                                                                                                              (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                              (s as any).CloStyle = 4;
                                                                                                                                                                                              (s as any).CloProstitute = 1;
                                                                                                                                                                                              (s as any).CloPrice = 1750;
                                                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 189) {
                                                                                                                                                                                                (s as any).CloQuality = 1;
                                                                                                                                                                                                (s as any).CloStrength = 136875;
                                                                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                                                                (s as any).CloTopCut = 4;
                                                                                                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                                (s as any).CloStyle = 4;
                                                                                                                                                                                                (s as any).CloProstitute = 1;
                                                                                                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                                                                                              } else {
                                                                                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                                                                (s as any).CloTopCut = 4;
                                                                                                                                                                                                (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                                (s as any).CloBimbo = 1;
                                                                                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 191) {
                                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                                                                  (s as any).CloTopCut = 4;
                                                                                                                                                                                                  (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                                  (s as any).CloStyle = 4;
                                                                                                                                                                                                  (s as any).CloProstitute = 1;
                                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  (s as any).CloQuality = 1;
                                                                                                                                                                                                  (s as any).CloStrength = 174375;
                                                                                                                                                                                                  (s as any).CloThinness = 1;
                                                                                                                                                                                                  (s as any).CloTopCut = 1;
                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                                  (s as any).CloStyle = 5;
                                                                                                                                                                                                  (s as any).CloPrice = 1650;
                                                                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 193) {
                                                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                                                                    (s as any).CloTopCut = 1;
                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                                                                                                    (s as any).CloTopCut = 1;
                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 195) {
                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                      (s as any).CloThinness = 3;
                                                                                                                                                                                                      (s as any).CloTopCut = 1;
                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                      (s as any).CloStyle2 = 5;
                                                                                                                                                                                                      (s as any).CloOffice = 1;
                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                                                                      (s as any).CloTopCut = 1;
                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                      (s as any).CloStyle2 = 5;
                                                                                                                                                                                                      (s as any).CloOffice = 1;
                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 197) {
                                                                                                                                                                                                        (s as any).CloQuality = 1;
                                                                                                                                                                                                        (s as any).CloStrength = 136875;
                                                                                                                                                                                                        (s as any).CloThinness = 5;
                                                                                                                                                                                                        (s as any).CloTopCut = 1;
                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                        (s as any).CloPrice = 1650;
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                                        (s as any).CloThinness = 5;
                                                                                                                                                                                                        (s as any).CloTopCut = 1;
                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 199) {
                                                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                                                          (s as any).CloStrength = 180000;
                                                                                                                                                                                                          (s as any).CloThinness = 1;
                                                                                                                                                                                                          (s as any).CloTopCut = 1;
                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                          (s as any).CloStyle = 5;
                                                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                                                                          (s as any).CloThinness = 3;
                                                                                                                                                                                                          (s as any).CloTopCut = 1;
                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 201) {
                                                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                                                            (s as any).CloThinness = 3;
                                                                                                                                                                                                            (s as any).CloTopCut = 1;
                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                                            (s as any).CloStyle2 = 5;
                                                                                                                                                                                                            (s as any).CloOffice = 1;
                                                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            (s as any).CloQuality = 1;
                                                                                                                                                                                                            (s as any).CloStrength = 136875;
                                                                                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                                                                                            (s as any).CloTopCut = 1;
                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                                            (s as any).CloStyle2 = 5;
                                                                                                                                                                                                            (s as any).CloOffice = 1;
                                                                                                                                                                                                            (s as any).CloPrice = 1650;
                                                                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 203) {
                                                                                                                                                                                                              (s as any).CloQuality = 1;
                                                                                                                                                                                                              (s as any).CloStrength = 136875;
                                                                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                                                                              (s as any).CloTopCut = 1;
                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                                                              (s as any).CloPrice = 1650;
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              (s as any).CloQuality = 1;
                                                                                                                                                                                                              (s as any).CloStrength = 136875;
                                                                                                                                                                                                              (s as any).CloThinness = 3;
                                                                                                                                                                                                              (s as any).CloTopCut = 1;
                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                              (s as any).CloPrice = 1650;
                                                                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 205) {
                                                                                                                                                                                                                (s as any).CloQuality = 1;
                                                                                                                                                                                                                (s as any).CloStrength = 136875;
                                                                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                                                                (s as any).CloTopCut = 1;
                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                (s as any).CloQuality = 3;
                                                                                                                                                                                                                (s as any).CloStrength = 148125;
                                                                                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                                                                                (s as any).CloTopCut = 1;
                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                (s as any).CloStyle2 = 5;
                                                                                                                                                                                                                (s as any).CloOffice = 1;
                                                                                                                                                                                                                (s as any).CloPrice = 1750;
                                                                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 207) {
                                                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                                                                                  (s as any).CloTopCut = 1;
                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 209) {
                                                                                                                                                                                                                    (s as any).CloQuality = 1;
                                                                                                                                                                                                                    (s as any).CloStrength = 136875;
                                                                                                                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                    (s as any).CloPrice = 1650;
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                                                                    (s as any).CloThinness = 5;
                                                                                                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 211) {
                                                                                                                                                                                                                      (s as any).CloQuality = 1;
                                                                                                                                                                                                                      (s as any).CloStrength = 136875;
                                                                                                                                                                                                                      (s as any).CloThinness = 3;
                                                                                                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                                      (s as any).CloPrice = 1650;
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 213) {
                                                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                                                        (s as any).CloThinness = 1;
                                                                                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                        (s as any).CloStyle2 = 5;
                                                                                                                                                                                                                        (s as any).CloOffice = 1;
                                                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                                                        (s as any).CloThinness = 5;
                                                                                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 215) {
                                                                                                                                                                                                                          (s as any).CloQuality = 1;
                                                                                                                                                                                                                          (s as any).CloStrength = 136875;
                                                                                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                          (s as any).CloPrice = 1650;
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 217) {
                                                                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                                                                            (s as any).CloThinness = 3;
                                                                                                                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 3;
                                                                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 219) {
                                                                                                                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                                                                                                                              (s as any).CloThinness = 3;
                                                                                                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              (s as any).CloQuality = 1;
                                                                                                                                                                                                                              (s as any).CloStrength = 136875;
                                                                                                                                                                                                                              (s as any).CloThinness = 3;
                                                                                                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                                                                              (s as any).CloPrice = 1650;
                                                                                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 221) {
                                                                                                                                                                                                                                (s as any).CloQuality = 1;
                                                                                                                                                                                                                                (s as any).CloStrength = 174375;
                                                                                                                                                                                                                                (s as any).CloThinness = 1;
                                                                                                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                                                                (s as any).CloStyle = 5;
                                                                                                                                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                (s as any).CloQuality = 1;
                                                                                                                                                                                                                                (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 223) {
                                                                                                                                                                                                                                  (s as any).CloQuality = 1;
                                                                                                                                                                                                                                  (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                  (s as any).CloThinness = 3;
                                                                                                                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                                                                  (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                  (s as any).CloThinness = 3;
                                                                                                                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 225) {
                                                                                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 227) {
                                                                                                                                                                                                                                      (s as any).CloQuality = 1;
                                                                                                                                                                                                                                      (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                      (s as any).CloThinness = 3;
                                                                                                                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                      (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      (s as any).CloQuality = 3;
                                                                                                                                                                                                                                      (s as any).CloStrength = 148125;
                                                                                                                                                                                                                                      (s as any).CloThinness = 5;
                                                                                                                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                                                      (s as any).CloPrice = 1750;
                                                                                                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 229) {
                                                                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        (s as any).CloQuality = 1;
                                                                                                                                                                                                                                        (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                                        (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 231) {
                                                                                                                                                                                                                                          (s as any).CloQuality = 1;
                                                                                                                                                                                                                                          (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                          (s as any).CloThinness = 3;
                                                                                                                                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                                          (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          (s as any).CloQuality = 1;
                                                                                                                                                                                                                                          (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                          (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 233) {
                                                                                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            (s as any).CloQuality = 1;
                                                                                                                                                                                                                                            (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                            (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 235) {
                                                                                                                                                                                                                                              (s as any).CloQuality = 1;
                                                                                                                                                                                                                                              (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                                                                                              (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 237) {
                                                                                                                                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                                                                                (s as any).CloStyle2 = 5;
                                                                                                                                                                                                                                                (s as any).CloOffice = 1;
                                                                                                                                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 239) {
                                                                                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                  (s as any).CloStyle2 = 5;
                                                                                                                                                                                                                                                  (s as any).CloOffice = 1;
                                                                                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 241) {
                                                                                                                                                                                                                                                    (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                    (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                    (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                    (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                    (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                    (s as any).CloStyle2 = 4;
                                                                                                                                                                                                                                                    (s as any).CloSchool = 1;
                                                                                                                                                                                                                                                    (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 243) {
                                                                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                      (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                      (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 245) {
                                                                                                                                                                                                                                                        (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                        (s as any).CloStrength = 174375;
                                                                                                                                                                                                                                                        (s as any).CloThinness = 1;
                                                                                                                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                                                        (s as any).CloStyle = 5;
                                                                                                                                                                                                                                                        (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                        (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                        (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 247) {
                                                                                                                                                                                                                                                          (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                          (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                                                          (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                          (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                          (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                                                          (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 249) {
                                                                                                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                            (s as any).CloThinness = 5;
                                                                                                                                                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                            (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                            (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                                                                                            (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 251) {
                                                                                                                                                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                              (s as any).CloStyle2 = 5;
                                                                                                                                                                                                                                                              (s as any).CloOffice = 1;
                                                                                                                                                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              (s as any).CloQuality = 3;
                                                                                                                                                                                                                                                              (s as any).CloStrength = 148125;
                                                                                                                                                                                                                                                              (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                              (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                                                                                                              (s as any).CloPrice = 1750;
                                                                                                                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 253) {
                                                                                                                                                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 255) {
                                                                                                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                  (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                  (s as any).CloStyle2 = 5;
                                                                                                                                                                                                                                                                  (s as any).CloOffice = 1;
                                                                                                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                  (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 257) {
                                                                                                                                                                                                                                                                    (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                    (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                    (s as any).CloStyle = 4;
                                                                                                                                                                                                                                                                    (s as any).CloProstitute = 1;
                                                                                                                                                                                                                                                                    (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                    (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                    (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                    (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 259) {
                                                                                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 261) {
                                                                                                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                        (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                        (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                        (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 263) {
                                                                                                                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                          (s as any).CloBimbo = 1;
                                                                                                                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                          (s as any).CloStyle2 = 5;
                                                                                                                                                                                                                                                                          (s as any).CloOffice = 1;
                                                                                                                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 265) {
                                                                                                                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                            (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 267) {
                                                                                                                                                                                                                                                                              (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                              (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                              (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                              (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                              (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 269) {
                                                                                                                                                                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                (s as any).CloBimbo = 1;
                                                                                                                                                                                                                                                                                (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 271) {
                                                                                                                                                                                                                                                                                  (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                  (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                  (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                  (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                  (s as any).CloQuality = 3;
                                                                                                                                                                                                                                                                                  (s as any).CloStrength = 148125;
                                                                                                                                                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                  (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                  (s as any).CloPrice = 1750;
                                                                                                                                                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 273) {
                                                                                                                                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                    (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                    (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                    (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                    (s as any).CloBimbo = 1;
                                                                                                                                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 275) {
                                                                                                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                      (s as any).CloBimbo = 1;
                                                                                                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 277) {
                                                                                                                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                        (s as any).CloStyle = 4;
                                                                                                                                                                                                                                                                                        (s as any).CloProstitute = 1;
                                                                                                                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                        (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 279) {
                                                                                                                                                                                                                                                                                          (s as any).CloQuality = 3;
                                                                                                                                                                                                                                                                                          (s as any).CloStrength = 148125;
                                                                                                                                                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                          (s as any).CloPrice = 1750;
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                          (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 281) {
                                                                                                                                                                                                                                                                                            (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                                            (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                                            (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                            (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                            (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                                            (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                            (s as any).CloStyle = 4;
                                                                                                                                                                                                                                                                                            (s as any).CloProstitute = 1;
                                                                                                                                                                                                                                                                                            (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 283) {
                                                                                                                                                                                                                                                                                              (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                              (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                              (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                                                              (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                              (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                              (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                                              (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                              (s as any).CloTopCut = 4;
                                                                                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                              (s as any).CloStyle = 4;
                                                                                                                                                                                                                                                                                              (s as any).CloProstitute = 1;
                                                                                                                                                                                                                                                                                              (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                                              if (((s as any).ARGS ?? 0)[0] === 285) {
                                                                                                                                                                                                                                                                                                (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                                                (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                                                (s as any).CloThinness = 5;
                                                                                                                                                                                                                                                                                                (s as any).CloTopCut = 4;
                                                                                                                                                                                                                                                                                                (s as any).CloSkirtShortness = 4;
                                                                                                                                                                                                                                                                                                (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                (s as any).CloStyle = 4;
                                                                                                                                                                                                                                                                                                (s as any).CloProstitute = 1;
                                                                                                                                                                                                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                                                (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                                                (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                                (s as any).CloTopCut = 1;
                                                                                                                                                                                                                                                                                                (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                                                if (((s as any).ARGS ?? 0)[0] === 287) {
                                                                                                                                                                                                                                                                                                  (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                                                  (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                                                  (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                  (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                  (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                                                  (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                                                  (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                                  (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                                                                  (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                  (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                  (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                                                  if (((s as any).ARGS ?? 0)[0] === 289) {
                                                                                                                                                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                                    (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                    (s as any).CloBimbo = 1;
                                                                                                                                                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                                    (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                                    (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                                    (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                                    (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                                                                    (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                    (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                    (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                                    if (((s as any).ARGS ?? 0)[0] === 291) {
                                                                                                                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                                      (s as any).CloThinness = 2;
                                                                                                                                                                                                                                                                                                      (s as any).CloTopCut = 2;
                                                                                                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                      (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                                      (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                                      (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                                                                      (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                                      (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                      (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                      (s as any).CloBimbo = 1;
                                                                                                                                                                                                                                                                                                      (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                                      if (((s as any).ARGS ?? 0)[0] === 293) {
                                                                                                                                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                                        (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                                        (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                                        (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                                        (s as any).CloThinness = 3;
                                                                                                                                                                                                                                                                                                        (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                                        (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                        (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                        (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                                        if (((s as any).ARGS ?? 0)[0] === 295) {
                                                                                                                                                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                          (s as any).CloStyle = 4;
                                                                                                                                                                                                                                                                                                          (s as any).CloProstitute = 1;
                                                                                                                                                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                          (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                                          (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                                          (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                                          (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                                          (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                          (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                          (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                                          if (((s as any).ARGS ?? 0)[0] === 297) {
                                                                                                                                                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                                            (s as any).CloTopCut = 3;
                                                                                                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                                            (s as any).CloQuality = 2;
                                                                                                                                                                                                                                                                                                            (s as any).CloStrength = 142500;
                                                                                                                                                                                                                                                                                                            (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                                            (s as any).CloTopCut = 4;
                                                                                                                                                                                                                                                                                                            (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                            (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                            (s as any).CloBimbo = 1;
                                                                                                                                                                                                                                                                                                            (s as any).CloStyle = 4;
                                                                                                                                                                                                                                                                                                            (s as any).CloProstitute = 1;
                                                                                                                                                                                                                                                                                                            (s as any).CloPrice = 1700;
                                                                                                                                                                                                                                                                                                            if (((s as any).ARGS ?? 0)[0] === 299) {
                                                                                                                                                                                                                                                                                                              (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                                                              (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                                              (s as any).CloTopCut = 4;
                                                                                                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                              (s as any).CloStyle = 4;
                                                                                                                                                                                                                                                                                                              (s as any).CloProstitute = 1;
                                                                                                                                                                                                                                                                                                              (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                              (s as any).CloQuality = 1;
                                                                                                                                                                                                                                                                                                              (s as any).CloStrength = 136875;
                                                                                                                                                                                                                                                                                                              (s as any).CloThinness = 4;
                                                                                                                                                                                                                                                                                                              (s as any).CloTopCut = 4;
                                                                                                                                                                                                                                                                                                              (s as any).CloSkirtShortness = 5;
                                                                                                                                                                                                                                                                                                              (s as any).CloDress = 1;
                                                                                                                                                                                                                                                                                                              (s as any).CloBimbo = 1;
                                                                                                                                                                                                                                                                                                              (s as any).CloStyle = 4;
                                                                                                                                                                                                                                                                                                              (s as any).CloProstitute = 1;
                                                                                                                                                                                                                                                                                                              (s as any).CloPrice = 1650;
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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

export const _attributes_gm_dress: LocationDef = {
  name: '_attributes_gm_dress',
  region: 'other',
  enter: enter,
};
