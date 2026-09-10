// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) === 1  &&  (((s as any).month ?? 0) < 6  ||  ((s as any).year ?? 0) === 2016)) {
    if (((s as any).week ?? 0) < 6) {
      if (((s as any).hour ?? 0) < 8) {
        (s as any).locat['A158'] = 20;
      } else {
        (s as any).locat['A158'] = 23;
        if (((s as any).hour ?? 0) < 20) {
          if (((s as any).week ?? 0) === 3) {
            (s as any).locat['A158'] = 24;
          } else {
            (s as any).locat['A158'] = 23;
          }
        } else {
          if (((s as any).week ?? 0) === 3) {
            (s as any).locat['A158'] = 24;
          } else {
            (s as any).locat['A158'] = 25;
            (s as any).locat['A158'] = 23;
          }
          if (((s as any).week ?? 0) === 5) {
            (s as any).locat['A158'] = 25;
          } else {
            (s as any).locat['A158'] = 20;
          }
        }
        if (((s as any).week ?? 0) === 6) {
          if (((s as any).hour ?? 0) < 9) {
            (s as any).locat['A158'] = 20;
          } else {
            (s as any).locat['A158'] = 23;
            (s as any).locat['A158'] = 25;
          }
        } else {
          if (((s as any).hour ?? 0) < 9) {
            (s as any).locat['A158'] = 20;
          } else {
            (s as any).locat['A158'] = 23;
            (s as any).locat['A158'] = 20;
          }
        }
        if (((s as any).yearstart ?? 0) === 1  ||  (((s as any).yearstart ?? 0) === 2  &&  ((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) < 10)) {
          (s as any).locat['A158'] = 30;
        } else {
          if (((s as any).week ?? 0) === 1) {
            if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
              (s as any).locat['A158'] = 9;
            } else {
              (s as any).locat['A158'] = 10;
            }
          } else {
            if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
              (s as any).locat['A158'] = 9;
            } else {
              (s as any).locat['A158'] = 6;
            }
            if (((s as any).week ?? 0) === 3) {
              if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                (s as any).locat['A158'] = 9;
              } else {
                (s as any).locat['A158'] = 8;
              }
            } else {
              if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                (s as any).locat['A158'] = 9;
              } else {
                (s as any).locat['A158'] = 6;
              }
              if (((s as any).week ?? 0) === 5) {
                if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                  (s as any).locat['A158'] = 9;
                } else {
                  (s as any).locat['A158'] = 0;
                }
              } else {
                if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
                  (s as any).locat['A158'] = 6;
                } else {
                  (s as any).locat['A158'] = 0;
                }
                if (((s as any).week ?? 0) === 7) {
                }
              }
              if (((s as any).locat ?? 0)?.['A158'] > 0  &&  ((s as any).locat ?? 0)?.['A158'] < 8) {
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const valentin_bogdanov_schedule: LocationDef = {
  name: 'valentin_bogdanov_schedule',
  region: 'other',
  enter: enter,
};
