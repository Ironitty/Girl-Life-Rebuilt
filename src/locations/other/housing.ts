// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) === 1) {
    (s as any).ArendHouseSL_due = 31;
  } else {
    if (((((s as any).year ?? 0) % 4 === 0)  &&  (((s as any).year ?? 0) % 100 !== 0))  ||  (((s as any).year ?? 0) % 400 === 0)) {
      (s as any).ArendHouseSL_due = 29;
    } else {
      (s as any).ArendHouseSL_due = 28;
    }
    if (((s as any).month ?? 0) === 3) {
      (s as any).ArendHouseSL_due = 31;
    } else {
      (s as any).ArendHouseSL_due = 30;
      if (((s as any).month ?? 0) === 5) {
        (s as any).ArendHouseSL_due = 31;
      } else {
        (s as any).ArendHouseSL_due = 30;
        if (((s as any).month ?? 0) === 7) {
          (s as any).ArendHouseSL_due = 31;
        } else {
          (s as any).ArendHouseSL_due = 31;
          if (((s as any).month ?? 0) === 9) {
            (s as any).ArendHouseSL_due = 30;
          } else {
            (s as any).ArendHouseSL_due = 31;
            if (((s as any).month ?? 0) === 11) {
              (s as any).ArendHouseSL_due = 30;
            } else {
              (s as any).ArendHouseSL_due = 31;
            }
            (s as any).home_rent[1] = 15000;
            // TODO-QSP: $home_rent_txt[1] = $func('money', 'string_price', 15000)
            (s as any).home_rent[4] = 10000;
            // TODO-QSP: $home_rent_txt[4] = $func('money', 'string_price', 10000)
          }
        }
      }
    }
  }
  scene.build();
}

export const housing: LocationDef = {
  name: 'housing',
  region: 'other',
  enter: enter,
};
