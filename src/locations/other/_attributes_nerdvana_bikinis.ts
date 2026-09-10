// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CloPrice ~ 2625 * (20 + CloQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 3: 3000
  // TODO-QSP: 4: 3150
  // TODO-QSP: CloQuality ranges from 3 to 4, please avoid adding too many 4s.
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).CloQuality = 3;
    (s as any).CloStrength = 129375;
    (s as any).CloThinness = 4;
    (s as any).CloBra = 1;
    (s as any).CloPanties = 1;
    (s as any).CloInhibit = 30;
    (s as any).CloSwim = 1;
    (s as any).CloPrice = 3000;
  } else {
    (s as any).CloQuality = 3;
    (s as any).CloStrength = 129375;
    (s as any).CloThinness = 4;
    (s as any).CloBra = 1;
    (s as any).CloPanties = 1;
    (s as any).CloInhibit = 25;
    (s as any).CloSwim = 1;
    (s as any).CloPrice = 3000;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).CloQuality = 3;
      (s as any).CloStrength = 129375;
      (s as any).CloThinness = 4;
      (s as any).CloBra = 1;
      (s as any).CloPanties = 1;
      (s as any).CloInhibit = 30;
      (s as any).CloSwim = 1;
      (s as any).CloPrice = 3000;
    } else {
      (s as any).CloQuality = 3;
      (s as any).CloStrength = 129375;
      (s as any).CloThinness = 4;
      (s as any).CloBra = 1;
      (s as any).CloPanties = 1;
      (s as any).CloInhibit = 25;
      (s as any).CloSwim = 1;
      (s as any).CloPrice = 3000;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).CloQuality = 3;
        (s as any).CloStrength = 129375;
        (s as any).CloThinness = 4;
        (s as any).CloBra = 1;
        (s as any).CloPanties = 1;
        (s as any).CloInhibit = 25;
        (s as any).CloSwim = 1;
        (s as any).CloPrice = 3000;
      } else {
        (s as any).CloQuality = 3;
        (s as any).CloStrength = 129375;
        (s as any).CloThinness = 4;
        (s as any).CloBra = 1;
        (s as any).CloPanties = 1;
        (s as any).CloInhibit = 25;
        (s as any).CloSwim = 1;
        (s as any).CloPrice = 3000;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).CloQuality = 3;
          (s as any).CloStrength = 129375;
          (s as any).CloThinness = 4;
          (s as any).CloBra = 1;
          (s as any).CloPanties = 1;
          (s as any).CloInhibit = 25;
          (s as any).CloSwim = 1;
          (s as any).CloPrice = 3000;
        } else {
          (s as any).CloQuality = 3;
          (s as any).CloStrength = 129375;
          (s as any).CloThinness = 4;
          (s as any).CloBra = 1;
          (s as any).CloPanties = 1;
          (s as any).CloInhibit = 25;
          (s as any).CloSwim = 1;
          (s as any).CloPrice = 3000;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).CloQuality = 3;
            (s as any).CloStrength = 129375;
            (s as any).CloThinness = 4;
            (s as any).CloBra = 1;
            (s as any).CloPanties = 1;
            (s as any).CloInhibit = 30;
            (s as any).CloSwim = 1;
            (s as any).CloPrice = 3000;
          } else {
            (s as any).CloQuality = 3;
            (s as any).CloStrength = 129375;
            (s as any).CloThinness = 4;
            (s as any).CloBra = 1;
            (s as any).CloPanties = 1;
            (s as any).CloInhibit = 30;
            (s as any).CloSwim = 1;
            (s as any).CloPrice = 3000;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).CloQuality = 3;
              (s as any).CloStrength = 129375;
              (s as any).CloThinness = 4;
              (s as any).CloBra = 1;
              (s as any).CloPanties = 1;
              (s as any).CloInhibit = 30;
              (s as any).CloSwim = 1;
              (s as any).CloPrice = 3000;
            } else {
              (s as any).CloQuality = 4;
              (s as any).CloStrength = 135000;
              (s as any).CloThinness = 4;
              (s as any).CloBra = 1;
              (s as any).CloPanties = 1;
              (s as any).CloInhibit = 20;
              (s as any).CloSwim = 1;
              (s as any).CloPrice = 3150;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).CloQuality = 4;
                (s as any).CloStrength = 135000;
                (s as any).CloThinness = 4;
                (s as any).CloBra = 1;
                (s as any).CloPanties = 1;
                (s as any).CloInhibit = 25;
                (s as any).CloSwim = 1;
                (s as any).CloPrice = 3150;
              } else {
                (s as any).CloQuality = 4;
                (s as any).CloStrength = 135000;
                (s as any).CloThinness = 4;
                (s as any).CloBra = 1;
                (s as any).CloPanties = 1;
                (s as any).CloInhibit = 25;
                (s as any).CloSwim = 1;
                (s as any).CloPrice = 3150;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).CloQuality = 4;
                  (s as any).CloStrength = 135000;
                  (s as any).CloThinness = 4;
                  (s as any).CloBra = 1;
                  (s as any).CloPanties = 1;
                  (s as any).CloInhibit = 30;
                  (s as any).CloSwim = 1;
                  (s as any).CloPrice = 3150;
                } else {
                  (s as any).CloQuality = 4;
                  (s as any).CloStrength = 135000;
                  (s as any).CloThinness = 4;
                  (s as any).CloBra = 1;
                  (s as any).CloPanties = 1;
                  (s as any).CloInhibit = 20;
                  (s as any).CloSwim = 1;
                  (s as any).CloPrice = 3150;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).CloQuality = 4;
                    (s as any).CloStrength = 135000;
                    (s as any).CloThinness = 4;
                    (s as any).CloBra = 1;
                    (s as any).CloPanties = 1;
                    (s as any).CloInhibit = 25;
                    (s as any).CloSwim = 1;
                    (s as any).CloPrice = 3150;
                  } else {
                    (s as any).CloQuality = 4;
                    (s as any).CloStrength = 135000;
                    (s as any).CloThinness = 4;
                    (s as any).CloBra = 1;
                    (s as any).CloPanties = 1;
                    (s as any).CloInhibit = 25;
                    (s as any).CloSwim = 1;
                    (s as any).CloPrice = 3150;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).CloQuality = 4;
                      (s as any).CloStrength = 135000;
                      (s as any).CloThinness = 4;
                      (s as any).CloBra = 1;
                      (s as any).CloPanties = 1;
                      (s as any).CloInhibit = 25;
                      (s as any).CloSwim = 1;
                      (s as any).CloPrice = 3150;
                    } else {
                      (s as any).CloQuality = 4;
                      (s as any).CloStrength = 135000;
                      (s as any).CloThinness = 4;
                      (s as any).CloBra = 1;
                      (s as any).CloPanties = 1;
                      (s as any).CloInhibit = 30;
                      (s as any).CloSwim = 1;
                      (s as any).CloPrice = 3150;
                      if (((s as any).ARGS ?? 0)[0] === 21) {
                        (s as any).CloQuality = 4;
                        (s as any).CloStrength = 135000;
                        (s as any).CloThinness = 4;
                        (s as any).CloBra = 1;
                        (s as any).CloPanties = 1;
                        (s as any).CloInhibit = 30;
                        (s as any).CloSwim = 1;
                        (s as any).CloPrice = 3150;
                      } else {
                        (s as any).CloQuality = 4;
                        (s as any).CloStrength = 135000;
                        (s as any).CloThinness = 4;
                        (s as any).CloBra = 1;
                        (s as any).CloPanties = 1;
                        (s as any).CloInhibit = 30;
                        (s as any).CloSwim = 1;
                        (s as any).CloPrice = 3150;
                        if (((s as any).ARGS ?? 0)[0] === 23) {
                          (s as any).CloQuality = 4;
                          (s as any).CloStrength = 135000;
                          (s as any).CloThinness = 4;
                          (s as any).CloBra = 1;
                          (s as any).CloPanties = 1;
                          (s as any).CloInhibit = 25;
                          (s as any).CloSwim = 1;
                          (s as any).CloPrice = 3150;
                        } else {
                          (s as any).CloQuality = 4;
                          (s as any).CloStrength = 135000;
                          (s as any).CloThinness = 4;
                          (s as any).CloBra = 1;
                          (s as any).CloPanties = 1;
                          (s as any).CloInhibit = 20;
                          (s as any).CloSwim = 1;
                          (s as any).CloPrice = 3150;
                          if (((s as any).ARGS ?? 0)[0] === 25) {
                            (s as any).CloQuality = 4;
                            (s as any).CloStrength = 135000;
                            (s as any).CloThinness = 4;
                            (s as any).CloBra = 1;
                            (s as any).CloPanties = 1;
                            (s as any).CloInhibit = 20;
                            (s as any).CloSwim = 1;
                            (s as any).CloPrice = 3150;
                          } else {
                            (s as any).CloQuality = 3;
                            (s as any).CloStrength = 129375;
                            (s as any).CloThinness = 4;
                            (s as any).CloBra = 1;
                            (s as any).CloPanties = 1;
                            (s as any).CloInhibit = 25;
                            (s as any).CloSwim = 1;
                            (s as any).CloPrice = 3000;
                            if (((s as any).ARGS ?? 0)[0] === 27) {
                              (s as any).CloQuality = 4;
                              (s as any).CloStrength = 135000;
                              (s as any).CloThinness = 4;
                              (s as any).CloBra = 1;
                              (s as any).CloPanties = 1;
                              (s as any).CloInhibit = 20;
                              (s as any).CloSwim = 1;
                              (s as any).CloPrice = 3150;
                            } else {
                              (s as any).CloQuality = 4;
                              (s as any).CloStrength = 135000;
                              (s as any).CloThinness = 4;
                              (s as any).CloBra = 1;
                              (s as any).CloPanties = 1;
                              (s as any).CloInhibit = 30;
                              (s as any).CloSwim = 1;
                              (s as any).CloPrice = 3150;
                              if (((s as any).ARGS ?? 0)[0] === 29) {
                                (s as any).CloQuality = 4;
                                (s as any).CloStrength = 135000;
                                (s as any).CloThinness = 4;
                                (s as any).CloBra = 1;
                                (s as any).CloPanties = 1;
                                (s as any).CloInhibit = 20;
                                (s as any).CloSwim = 1;
                                (s as any).CloPrice = 3150;
                              } else {
                                (s as any).CloQuality = 4;
                                (s as any).CloStrength = 135000;
                                (s as any).CloThinness = 4;
                                (s as any).CloBra = 1;
                                (s as any).CloPanties = 1;
                                (s as any).CloInhibit = 25;
                                (s as any).CloSwim = 1;
                                (s as any).CloPrice = 3150;
                              }
                            }
                          }
                        }
                      }
                    }
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

export const _attributes_nerdvana_bikinis: LocationDef = {
  name: '_attributes_nerdvana_bikinis',
  region: 'other',
  enter: enter,
};
