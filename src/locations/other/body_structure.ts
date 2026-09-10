// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arrsize ?? 0)('ARGS') === 1) {
    (s as any).ARGS[1] = ((s as any).pcs_bmi ?? 0);
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 2) {
    (s as any).ARGS[2] = ((s as any).strenbuf ?? 0);
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 3) {
    (s as any).ARGS[3] = ((s as any).pregChem ?? 0);
  }
  if (((s as any).ARGS ?? 0)[3] < 2184) {
    (s as any).result = 0;
  } else {
    (s as any).result = 1000;
    if (((s as any).ARGS ?? 0)[3] < 3192) {
      (s as any).result = 2000;
    } else {
      (s as any).result = 3000;
      if (((s as any).ARGS ?? 0)[3] < 4200) {
        (s as any).result = 4000;
      } else {
        (s as any).result = 5000;
        if (((s as any).ARGS ?? 0)[3] < 5208) {
          (s as any).result = 6000;
        } else {
          (s as any).result = 7000;
          if (((s as any).ARGS ?? 0)[3] < 6216) {
            (s as any).result = 8000;
          } else {
            (s as any).result = 9000;
          }
          if (((s as any).ARGS ?? 0)[1] < 16) {
            (s as any).result = ((s as any).result ?? 0) + (0);
          } else {
            (s as any).result = ((s as any).result ?? 0) + (100);
            if (((s as any).ARGS ?? 0)[1] < 22) {
              (s as any).result = ((s as any).result ?? 0) + (200);
            } else {
              (s as any).result = ((s as any).result ?? 0) + (300);
              if (((s as any).ARGS ?? 0)[1] < 30) {
                (s as any).result = ((s as any).result ?? 0) + (400);
              } else {
                (s as any).result = ((s as any).result ?? 0) + (500);
                if (((s as any).ARGS ?? 0)[1] < 40) {
                  (s as any).result = ((s as any).result ?? 0) + (600);
                } else {
                  (s as any).result = ((s as any).result ?? 0) + (700);
                  (s as any).result = ((s as any).result ?? 0) + (800);
                }
                if (((s as any).ARGS ?? 0)[2] <= 5) {
                  (s as any).result = ((s as any).result ?? 0) + (0);
                } else {
                  (s as any).result = ((s as any).result ?? 0) + (1);
                  if (((s as any).ARGS ?? 0)[2] <= 15) {
                    (s as any).result = ((s as any).result ?? 0) + (2);
                  } else {
                    (s as any).result = ((s as any).result ?? 0) + (3);
                    if (((s as any).ARGS ?? 0)[2] <= 35) {
                      (s as any).result = ((s as any).result ?? 0) + (4);
                    } else {
                      (s as any).result = ((s as any).result ?? 0) + (5);
                      if (((s as any).ARGS ?? 0)[2] <= 70) {
                        (s as any).result = ((s as any).result ?? 0) + (6);
                      } else {
                        (s as any).result = ((s as any).result ?? 0) + (7);
                        if (((s as any).ARGS ?? 0)[2] <= 110) {
                          (s as any).result = ((s as any).result ?? 0) + (8);
                        } else {
                          (s as any).result = ((s as any).result ?? 0) + (9);
                          if (((s as any).ARGS ?? 0)[2] <= 130) {
                            (s as any).result = ((s as any).result ?? 0) + (10);
                          } else {
                            (s as any).result = ((s as any).result ?? 0) + (11);
                            if (((s as any).ARGS ?? 0)[2] <= 150) {
                              (s as any).result = ((s as any).result ?? 0) + (12);
                            } else {
                              (s as any).result = ((s as any).result ?? 0) + (13);
                              if (((s as any).ARGS ?? 0)[2] <= 170) {
                                (s as any).result = ((s as any).result ?? 0) + (14);
                              } else {
                                (s as any).result = ((s as any).result ?? 0) + (15);
                                if (((s as any).ARGS ?? 0)[2] <= 190) {
                                  (s as any).result = ((s as any).result ?? 0) + (16);
                                } else {
                                  (s as any).result = ((s as any).result ?? 0) + (17);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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

export const body_structure: LocationDef = {
  name: 'body_structure',
  region: 'other',
  enter: enter,
};
