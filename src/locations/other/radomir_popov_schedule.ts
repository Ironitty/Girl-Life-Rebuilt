// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) === 1  &&  (((s as any).month ?? 0) < 6  ||  ((s as any).year ?? 0) === 2016)) {
    if (((s as any).week ?? 0) < 6) {
      if (((s as any).hour ?? 0) < 8) {
        (s as any).locat['A154'] = 20;
      } else {
        (s as any).locat['A154'] = 21;
        if (((s as any).hour ?? 0) < 16) {
          if (((s as any).locat ?? 0)?.['154_rand1'] === ((s as any).daystart ?? 0)) {
            (s as any).locat['A154'] = ((s as any).locat ?? 0)?.['154_save1'];
          } else {
            (s as any).locat['A154'] = 20;
          }
        } else {
          if (((s as any).locat ?? 0)?.['154_rand2'] === ((s as any).daystart ?? 0)) {
            (s as any).locat['A154'] = ((s as any).locat ?? 0)?.['154_save2'];
          } else {
            if (((s as any).week ?? 0) === 3) {
              (s as any).locat['A154'] = 24;
            } else {
              (s as any).locat['A154'] = 23;
            }
          }
          if (((s as any).hour ?? 0) < 20) {
            if (((s as any).locat ?? 0)?.['154_rand2'] === ((s as any).daystart ?? 0)) {
              (s as any).locat['A154'] = ((s as any).locat ?? 0)?.['154_save2'];
            } else {
              if (((s as any).week ?? 0) === 3) {
                (s as any).locat['A154'] = 24;
              } else {
                (s as any).locat['A154'] = 20;
              }
            }
          } else {
            if (((s as any).locat ?? 0)?.['154_rand3'] === ((s as any).daystart ?? 0)) {
              (s as any).locat['A154'] = ((s as any).locat ?? 0)?.['154_save3'];
            } else {
              if (((s as any).week ?? 0) === 3) {
                (s as any).locat['A154'] = 24;
              } else {
                (s as any).locat['A154'] = 25;
                (s as any).locat['A154'] = 20;
              }
            }
            if (((s as any).week ?? 0) === 5) {
              (s as any).locat['A154'] = 25;
            } else {
              (s as any).locat['A154'] = 20;
            }
          }
          if (((s as any).week ?? 0) === 6) {
            if (((s as any).hour ?? 0) < 12) {
              (s as any).locat['A154'] = 20;
            } else {
              (s as any).locat['A154'] = 23;
              if (((s as any).hour ?? 0) < 20) {
                (s as any).locat['A154'] = 20;
              } else {
                (s as any).locat['A154'] = 25;
              }
              if (((s as any).hour ?? 0) < 12) {
                (s as any).locat['A154'] = 20;
              } else {
                (s as any).locat['A154'] = 23;
                if (((s as any).hour ?? 0) < 22) {
                  (s as any).locat['A154'] = 20;
                } else {
                  (s as any).locat['A154'] = 20;
                }
              }
              if (((s as any).yearstart ?? 0) === 1  ||  (((s as any).yearstart ?? 0) === 2  &&  ((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) < 10)) {
                (s as any).locat['A154'] = 30;
              } else {
                if (((s as any).week ?? 0) === 1) {
                  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                    (s as any).locat['A154'] = 9;
                  } else {
                    (s as any).locat['A154'] = 3;
                  }
                } else {
                  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                    (s as any).locat['A154'] = 9;
                  } else {
                    (s as any).locat['A154'] = 3;
                  }
                  if (((s as any).week ?? 0) === 3) {
                    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                      (s as any).locat['A154'] = 9;
                    } else {
                      (s as any).locat['A154'] = 8;
                    }
                  } else {
                    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                      (s as any).locat['A154'] = 9;
                    } else {
                      (s as any).locat['A154'] = 3;
                    }
                    if (((s as any).week ?? 0) === 5) {
                      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                        (s as any).locat['A154'] = 9;
                      } else {
                        (s as any).locat['A154'] = 0;
                      }
                    } else {
                      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
                        (s as any).locat['A154'] = 3;
                      } else {
                        (s as any).locat['A154'] = 0;
                      }
                      if (((s as any).week ?? 0) === 7) {
                        (s as any).locat['A154'] = 3;
                      }
                    }
                    if (((s as any).locat ?? 0)?.['A154'] > 0  &&  ((s as any).locat ?? 0)?.['A154'] < 8) {
                    }
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

export const radomir_popov_schedule: LocationDef = {
  name: 'radomir_popov_schedule',
  region: 'other',
  enter: enter,
};
