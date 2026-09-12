// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) === 1) {
    (s as any).ArendHouseSL_due = 31;
  } else {
    if (((s as any).month ?? 0) === 2) {
      if (((((s as any).year ?? 0) % 4 === 0)  &&  (((s as any).year ?? 0) % 100 !== 0))  ||  (((s as any).year ?? 0) % 400 === 0)) {
        (s as any).ArendHouseSL_due = 29;
      } else {
        (s as any).ArendHouseSL_due = 28;
      }
    } else {
      if (((s as any).month ?? 0) === 3) {
        (s as any).ArendHouseSL_due = 31;
      } else {
        if (((s as any).month ?? 0) === 4) {
          (s as any).ArendHouseSL_due = 30;
        } else {
          if (((s as any).month ?? 0) === 5) {
            (s as any).ArendHouseSL_due = 31;
          } else {
            if (((s as any).month ?? 0) === 6) {
              (s as any).ArendHouseSL_due = 30;
            } else {
              if (((s as any).month ?? 0) === 7) {
                (s as any).ArendHouseSL_due = 31;
              } else {
                if (((s as any).month ?? 0) === 8) {
                  (s as any).ArendHouseSL_due = 31;
                } else {
                  if (((s as any).month ?? 0) === 9) {
                    (s as any).ArendHouseSL_due = 30;
                  } else {
                    if (((s as any).month ?? 0) === 10) {
                      (s as any).ArendHouseSL_due = 31;
                    } else {
                      if (((s as any).month ?? 0) === 11) {
                        (s as any).ArendHouseSL_due = 30;
                      } else {
                        if (((s as any).month ?? 0) === 12) {
                          (s as any).ArendHouseSL_due = 31;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (!(s as any).home_rent) (s as any).home_rent = {}; (s as any).home_rent[1] = 15000;
  // TODO-QSP: $home_rent_txt[1] = $func('money', 'string_price', 15000)
  if (!(s as any).home_rent) (s as any).home_rent = {}; (s as any).home_rent[4] = 10000;
  // TODO-QSP: $home_rent_txt[4] = $func('money', 'string_price', 10000)
  // TODO-QSP: end
  scene.build();
}

function enterSale(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).home_value) (s as any).home_value = {}; (s as any).home_value[1] = 800000;
  // TODO-QSP: $home_value_txt[1] = $func('money', 'string_price', 800000)
  if (!(s as any).home_value) (s as any).home_value = {}; (s as any).home_value[3] = 150000;
  // TODO-QSP: $home_value_txt[3] = $func('money', 'string_price', 150000)
  if (!(s as any).home_value) (s as any).home_value = {}; (s as any).home_value[5] = 1500000;
  // TODO-QSP: $home_value_txt[5] = $func('money', 'string_price', 1500000)
  if (!(s as any).home_value) (s as any).home_value = {}; (s as any).home_value[15] = 800000;
  // TODO-QSP: $home_value_txt[15] = $func('money', 'string_price', 800000)
  // TODO-QSP: end
  scene.build();
}

function enterUtil(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 1) {
    (s as any).hcount_util = ((s as any).hcount_util ?? 0) + (1);
  }
  if (((s as any).accessible_property ?? 0)?.['village_cottage'] > 1) {
    (s as any).hcount_util = ((s as any).hcount_util ?? 0) + (1);
  }
  if (((s as any).accessible_property ?? 0)?.['old_town_apartment'] > 0) {
    (s as any).hcount_util = ((s as any).hcount_util ?? 0) + (1);
  }
  if (((s as any).accessible_property ?? 0)?.['matryona_mansion'] > 2) {
    (s as any).hcount_util = ((s as any).hcount_util ?? 0) + (1);
  }
  if (((s as any).accessible_property ?? 0)?.['city_house'] === 1) {
    (s as any).hcount_util = ((s as any).hcount_util ?? 0) + (1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCable(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 1) {
    (s as any).hcount_cable = ((s as any).hcount_cable ?? 0) + (1);
  }
  if (((s as any).accessible_property ?? 0)?.['old_town_apartment'] > 0) {
    (s as any).hcount_cable = ((s as any).hcount_cable ?? 0) + (1);
  }
  if (((s as any).accessible_property ?? 0)?.['matryona_mansion'] > 2) {
    (s as any).hcount_cable = ((s as any).hcount_cable ?? 0) + (1);
  }
  if (((s as any).accessible_property ?? 0)?.['city_house'] === 1) {
    (s as any).hcount_cable = ((s as any).hcount_cable ?? 0) + (1);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'rent':
      enterRent(s, scene);
      break;
    case 'sale':
      enterSale(s, scene);
      break;
    case 'util':
      enterUtil(s, scene);
      break;
    case 'cable':
      enterCable(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const housing: LocationDef = {
  name: 'housing',
  region: 'other',
  enter: enter,
};
