import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).NO_ACCESS = 0;
  (s as any).RENTED = 1;
  (s as any).OWNED = 2;
  (s as any).TENANTS = 3;
  (s as any).ACCESSIBLE = 4;
  (s as any).PURCHASED = 5;
  if (Object.keys((s as any).homes ?? {}).length < 16  ||  Object.keys((s as any).home_name ?? {}).length < 7) {
    qspCall(s, 'homes_properties_attr', '');
  }
  scene.build();
}

function enterCalculateRentablePropertyCount(s: GameState, scene: SceneBuilder): void {
  ((s as any).accessible_property ?? {})['rentable_home_count'] = 0;
  ((s as any).accessible_property ?? {})['rentable_business_count'] = 0;
  ((s as any).accessible_property ?? {})['rentable_other_count'] = 0;
  ((s as any).temp_hpVars ?? {})['max_i'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['max_i'] <= 0) {
    return;
  }
  ((s as any).temp_hpVars ?? {})['i'] = 0;
  // TODO-QSP: :get_rentable_property_count_loop
  // TODO-QSP: gs 'homes_properties_attr', 'get_property_attr', $homes[temp_hpVars['i']]
  if (((s as any).property ?? 0)?.['rental']) {
    if (((((s as any).property ?? 0)?.['type']).indexOf(('residence'))) + 1 > 0) {
      ((s as any).accessible_property ?? {})['rentable_home_count'] = (((s as any).accessible_property ?? {})['rentable_home_count'] ?? 0) + (1);
    } else {
      if (((((s as any).property ?? 0)?.['type']).indexOf(('business'))) + 1 > 0) {
        ((s as any).accessible_property ?? {})['rentable_business_count'] = (((s as any).accessible_property ?? {})['rentable_business_count'] ?? 0) + (1);
      } else {
        ((s as any).accessible_property ?? {})['rentable_other_count'] = (((s as any).accessible_property ?? {})['rentable_other_count'] ?? 0) + (1);
      }
    }
  }
  ((s as any).temp_hpVars ?? {})['i'] = (((s as any).temp_hpVars ?? {})['i'] ?? 0) + (1);
  if (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['max_i']) {
    // TODO-QSP: jump 'get_rentable_property_count_loop'
  }
  ((s as any).accessible_property ?? {})['available_for_rent_home_count'] = ((s as any).accessible_property ?? 0)?.['rentable_home_count'];
  ((s as any).accessible_property ?? {})['available_for_rent_business_count'] = ((s as any).accessible_property ?? 0)?.['rentable_business_count'];
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetHome(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_homepropcode ?? 0) !== '') {
    qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).temp_homepropcode ?? 0));
    if (((((s as any).property ?? 0)?.['type']).indexOf(('residence'))) + 1 > 0) {
      // TODO-QSP: copyarr 'home', 'property'
      ((s as any).home ?? {})['current'] = ((s as any).property ?? 0)?.['code'];
      if (((s as any).accessible_property ?? 0)[((s as any).home ?? 0)?.['current']] === 0) {
        // TODO-QSP: gs 'homes_properties', 'set_access', $home['current'], 1
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetAccess(s: GameState, scene: SceneBuilder): void {
  (s as any).original_access_code = ((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)];
  (s as any).new_access_code = qspUntranslated(s, "ARGS[2]", { location: "homes_properties" });
  if (((s as any).original_access_code ?? 0) !== ((s as any).new_access_code ?? 0)) {
    if (((s as any).accessible_property ?? 0)?.[String((s as any)._display ?? 0)] === ''  ||  ((s as any).accessible_property ?? 0)?.[String((s as any)._name ?? 0)] === '') {
      if (((s as any).property ?? 0)?.['code'] !== ((s as any).property_code ?? 0)) {
        qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).property_code ?? 0));
      } else {
        (s as any).nokill = 1;
      }
      // TODO-QSP: $accessible_property_codes[] = $property_code
      // TODO-QSP: $accessible_property[$_name] = $property['name']
      // TODO-QSP: $accessible_property[$_type] = $property['type']
      if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
        ((s as any).accessible_property ?? {})[String((s as any)._construction_state ?? 0)] = qspUntranslated(s, "ARGS[3]", { location: "homes_properties" });
        // TODO-QSP: $accessible_property[$_display] = $property['display_<<ARGS[3]>>']
      } else {
        ((s as any).accessible_property ?? {})[String((s as any)._construction_state ?? 0)] = 2;
        // TODO-QSP: $accessible_property[$_display] = $property['display']
      }
      if (((((s as any).property ?? 0)?.['type']).indexOf(('residence'))) + 1 > 0) {
        ((s as any).accessible_property ?? {})[String((s as any)._is_home ?? 0)] = 1;
      }
      ((s as any).accessible_property ?? {})[String((s as any)._is_rental ?? 0)] = ((s as any).property ?? 0)?.['rental'];
      ((s as any).accessible_property ?? {})[String((s as any)._renovated ?? 0)] = qspUntranslated(s, "ARGS[4]", { location: "homes_properties" });
      ((s as any).accessible_property ?? {})[String((s as any)._sales_price ?? 0)] = ((s as any).property ?? 0)?.['price'];
      ((s as any).accessible_property ?? {})[String((s as any)._rent ?? 0)] = ((s as any).property ?? 0)?.['rent'];
    }
    if (((s as any).new_access_code ?? 0) === ((s as any).ACCESSIBLE ?? 0)  &&  ((s as any).property ?? 0)?.['rental'] === 1) {
      (s as any).new_access_code = ((s as any).RENTED ?? 0);
    }
    ((s as any).accessible_property ?? {})[String((s as any).property_code ?? 0)] = ((s as any).new_access_code ?? 0);
    if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).NO_ACCESS ?? 0)) {
      if (((s as any).home ?? 0)?.['current'] === ((s as any).property_code ?? 0)) {
        // TODO-QSP: killvar 'home'
      }
      if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
        if (((s as any).original_access_code ?? 0) === ((s as any).RENTED ?? 0)) {
          ((s as any).accessible_property ?? {})['rental_home_count'] = (((s as any).accessible_property ?? {})['rental_home_count'] ?? 0) - (1);
          ((s as any).accessible_property ?? {})['available_for_rent_home_count'] = (((s as any).accessible_property ?? {})['available_for_rent_home_count'] ?? 0) + (1);
        }
        if (((s as any).original_access_code ?? 0) === ((s as any).OWNED ?? 0)) {
          ((s as any).accessible_property ?? {})['owned_home_count'] = (((s as any).accessible_property ?? {})['owned_home_count'] ?? 0) - (1);
        }
        if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2) {
          ((s as any).accessible_property ?? {})['furnishable_home_count'] = (((s as any).accessible_property ?? {})['furnishable_home_count'] ?? 0) - (1);
        }
        ((s as any).accessible_property ?? {})['accessible_home_count'] = (((s as any).accessible_property ?? {})['accessible_home_count'] ?? 0) - (1);
      }
      if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1) {
        qspCall(s, 'homes_properties', 'get_accessible_properties', 'home');
        if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
          qspCall(s, 'homes_properties', 'set_home', ((s as any).property_code ?? 0));
        }
        qspCall(s, 'homes_properties', 'clean_up_property_data');
      }
    } else {
      if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).RENTED ?? 0)) {
        if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
          ((s as any).accessible_property ?? {})['rental_home_count'] = (((s as any).accessible_property ?? {})['rental_home_count'] ?? 0) + (1);
          ((s as any).accessible_property ?? {})['accessible_home_count'] = (((s as any).accessible_property ?? {})['accessible_home_count'] ?? 0) + (1);
          ((s as any).accessible_property ?? {})['available_for_rent_home_count'] = (((s as any).accessible_property ?? {})['available_for_rent_home_count'] ?? 0) - (1);
          if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2) {
            ((s as any).accessible_property ?? {})['furnishable_home_count'] = (((s as any).accessible_property ?? {})['furnishable_home_count'] ?? 0) + (1);
          }
        }
      } else {
        if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).OWNED ?? 0)) {
          if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
            if ((!((s as any).original_access_code ?? 0))) {
              ((s as any).accessible_property ?? {})['accessible_home_count'] = (((s as any).accessible_property ?? {})['accessible_home_count'] ?? 0) + (1);
            } else {
              if (((s as any).original_access_code ?? 0) === ((s as any).RENTED ?? 0)) {
                ((s as any).accessible_property ?? {})['rental_home_count'] = (((s as any).accessible_property ?? {})['rental_home_count'] ?? 0) - (1);
                ((s as any).accessible_property ?? {})['available_for_rent_home_count'] = (((s as any).accessible_property ?? {})['available_for_rent_home_count'] ?? 0) + (1);
              } else {
                if (((s as any).original_access_code ?? 0) === ((s as any).TENANTS ?? 0)) {
                  ((s as any).accessible_property ?? {})['tenant_home_count'] = (((s as any).accessible_property ?? {})['tenant_home_count'] ?? 0) - (1);
                  ((s as any).accessible_property ?? {})[String((s as any)._tenant_day ?? 0)] = (-1);
                  ((s as any).accessible_property ?? {})[String((s as any)._tenant_month ?? 0)] = (-1);
                }
              }
            }
            if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2  &&  ((s as any).original_access_code ?? 0) !== 1) {
              ((s as any).accessible_property ?? {})['furnishable_home_count'] = (((s as any).accessible_property ?? {})['furnishable_home_count'] ?? 0) + (1);
            }
            ((s as any).accessible_property ?? {})['owned_home_count'] = (((s as any).accessible_property ?? {})['owned_home_count'] ?? 0) + (1);
          }
        } else {
          if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).TENANTS ?? 0)) {
            if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
              if (((s as any).home ?? 0)?.['current'] === ((s as any).property_code ?? 0)) {
                // TODO-QSP: killvar 'home'
              }
              ((s as any).accessible_property ?? {})['tenant_home_count'] = (((s as any).accessible_property ?? {})['tenant_home_count'] ?? 0) + (1);
              ((s as any).accessible_property ?? {})['owned_home_count'] = (((s as any).accessible_property ?? {})['owned_home_count'] ?? 0) - (1);
              ((s as any).accessible_property ?? {})['accessible_home_count'] = (((s as any).accessible_property ?? {})['accessible_home_count'] ?? 0) - (1);
              if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2) {
                ((s as any).accessible_property ?? {})['furnishable_home_count'] = (((s as any).accessible_property ?? {})['furnishable_home_count'] ?? 0) - (1);
              }
            }
          } else {
            if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).ACCESSIBLE ?? 0)) {
              if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
                ((s as any).accessible_property ?? {})['accessible_home_count'] = (((s as any).accessible_property ?? {})['accessible_home_count'] ?? 0) + (1);
              }
            }
          }
        }
      }
    }
    if ((!((s as any).nokill ?? 0))) {
      // TODO-QSP: killvar 'property'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsHomeless(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).home ?? 0)?.['current'] === 'homeless');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCanLiveHere(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).accessible_property ?? 0)?.[String((s as any).canlivecode ?? 0)] !== ((s as any).NO_ACCESS ?? 0)  &&  ((s as any).accessible_property ?? 0)?.[String((s as any).canlivecode ?? 0)] !== ((s as any).TENANTS ?? 0)  &&  qspFunc(s, 'homes_properties', 'get_property_construction_status', ((s as any).canlivecode ?? 0)) === 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsCurrentHome(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).home ?? 0)?.['current'] === ((s as any).temp_currenthomecode ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsAtAHome(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).accessible_property ?? 0)[((s as any).isathomecode ?? 0) + '-is-home'] === 1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsPropertyOfStatus(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).locArgs?.[1] ?? 0) === 'rented') {
    (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).RENTED ?? 0));
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'owned') {
      (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).OWNED ?? 0));
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'tenants') {
        (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).TENANTS ?? 0));
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'blocked') {
          (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).NO_ACCESS ?? 0));
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'hasaccess') {
            (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).ACCESSIBLE ?? 0));
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'purchased') {
              (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).OWNED ?? 0)  ||  ((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).TENANTS ?? 0));
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetPropertyCode(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetRentedPropertyCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'home') {
    (s as any).result = ((s as any).accessible_property ?? 0)?.['rental_home_count'];
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'business') {
      (s as any).result = ((s as any).accessible_property ?? 0)?.['rental_business_count'];
    } else {
      (s as any).result = ((s as any).accessible_property ?? {})?.['rental_home_count'] + ((s as any).accessible_property ?? {})?.['rental_business_count'];
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetAccessiblePropertyCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'home') {
    (s as any).result = ((s as any).accessible_property ?? 0)?.['accessible_home_count'];
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'business') {
      (s as any).result = ((s as any).accessible_property ?? 0)?.['accessible_business_count'];
    } else {
      (s as any).result = ((s as any).accessible_property ?? {})?.['accessible_home_count'] + ((s as any).accessible_property ?? {})?.['accessible_business_count'];
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetRentablePropertyCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'home') {
    (s as any).result = ((s as any).accessible_property ?? 0)?.['rentable_home_count'];
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'business') {
      (s as any).result = ((s as any).accessible_property ?? 0)?.['rentable_business_count'];
    } else {
      (s as any).result = ((s as any).accessible_property ?? {})?.['rentable_home_count'] + ((s as any).accessible_property ?? {})?.['rentable_business_count'];
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetAvailableForRentPropertyCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'home') {
    (s as any).result = ((s as any).accessible_property ?? 0)?.['available_for_rent_home_count'];
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'business') {
      (s as any).result = ((s as any).accessible_property ?? 0)?.['available_for_rent_business_count'];
    } else {
      (s as any).result = ((s as any).accessible_property ?? {})?.['available_for_rent_home_count'] + ((s as any).accessible_property ?? {})?.['available_for_rent_business_count'];
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetFurnishablePropertyCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'home') {
    (s as any).result = ((s as any).accessible_property ?? 0)?.['furnishable_home_count'];
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'business') {
      (s as any).result = ((s as any).accessible_property ?? 0)?.['furnishable_business_count'];
    } else {
      (s as any).result = ((s as any).accessible_property ?? {})?.['furnishable_home_count'] + ((s as any).accessible_property ?? {})?.['furnishable_business_count'];
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetRentedProperties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  ((s as any).remp_hpVars ?? {})['type'] = ((((s as any).locArgs?.[1] ?? 0) === '') ? ('all') : (((s as any).locArgs?.[1] ?? 0)));
  ((s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars ?? {})['j'] = 0;
  ((s as any).temp_hpVars ?? {})['i_max'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['i_max'] > 0) {
    // TODO-QSP: :get_rented_properties_loop
    ((s as any).temp_hpVars ?? {})['code'] = qspUntranslated(s, "accessible_property_codes[temp_hpVars['i']]", { location: "homes_properties" });
    if (((s as any).home_name ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] !== ''  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 1) {
      if ((((s as any).remp_hpVars ?? 0)?.['type'] !== 'home'  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-is-home'] === 0)  ||  (((s as any).remp_hpVars ?? 0)?.['type'] !== 'business'  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-is-home'])) {
        // TODO-QSP: $property_code[temp_hpVars['j']] = $temp_hpVars['code']
        if ((!((s as any).locArgs?.[2] ?? 0))) {
          // TODO-QSP: $property_name[temp_hpVars['j']] = $accessible_property['<<$temp_hpVars[''code'']>>-name']
          // TODO-QSP: $property_display[temp_hpVars['j']] = $accessible_property['<<$temp_hpVars[''code'']>>-display']
          // TODO-QSP: property_days[temp_hpVars['j']] = accessible_property['<<$temp_hpVars[''code'']>>-days-left']
          // TODO-QSP: property_rent[temp_hpVars['j']] = accessible_property['<<$temp_hpVars[''code'']>>-rent']
        }
        ((s as any).temp_hpVars ?? {})['j'] = (((s as any).temp_hpVars ?? {})['j'] ?? 0) + (1);
      }
    }
    ((s as any).temp_hpVars ?? {})['i'] = (((s as any).temp_hpVars ?? {})['i'] ?? 0) + (1);
    if (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['i_max']) {
      // TODO-QSP: jump 'get_rented_properties_loop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetOwnedProperties(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars ?? {})['j'] = 0;
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  ((s as any).temp_hpVars ?? {})['i_max'] = ((((s as any).locArgs?.[2] ?? 0) === '') ? (0) : (1));
  if (((s as any).temp_hpVars ?? 0)?.['i_max'] > 0) {
    // TODO-QSP: :get_owned_properties_loop
    ((s as any).temp_hpVars ?? {})['code'] = ((((s as any).locArgs?.[2] ?? 0) === '') ? (qspUntranslated(s, "accessible_property_codes[temp_hpVars['i']]", { location: "homes_properties" })) : (((s as any).locArgs?.[2] ?? 0)));
    if (((s as any).home_name ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] !== ''  &&  ((((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).OWNED ?? 0))  ||  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).TENANTS ?? 0))) {
      if ((((s as any).type ?? 0) !== 'home'  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-is-home'] === 0)  ||  (((s as any).type ?? 0) !== 'business'  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-is-home'] === 1)) {
        // TODO-QSP: $property_code[temp_hpVars['j']] = $temp_hpVars['code']
        // TODO-QSP: $property_name[temp_hpVars['j']] = $accessible_property['<<$temp_hpVars[''code'']>>-name']
        if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
          // TODO-QSP: $property_display[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = ...
        } else {
          // TODO-QSP: $property_display[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = ...
        }
        // TODO-QSP: $property_type[temp_hpVars['j']] = $accessible_property['<<$temp_hpVars[''code'']>>-type']
        if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).TENANTS ?? 0)) {
          // TODO-QSP: $property_status_display[temp_hpVars['j']] = "A(n) <<$property_display[temp_hpVars['j']]>> which is ...
        } else {
          if (((s as any).temp_hpVars ?? 0)?.['code'] === ((s as any).home ?? 0)?.['current']) {
            // TODO-QSP: $property_status_display[temp_hpVars['j']] = "A(n) <<$property_display[temp_hpVars['j']]>> where you...
          } else {
            // TODO-QSP: $property_status_display[temp_hpVars['j']] = "A(n) <<$property_display[temp_hpVars['j']]>> which is ...
          }
        }
        // TODO-QSP: property_status[temp_hpVars['j']] = accessible_property[$temp_hpVars['code']]
        // TODO-QSP: property_construction_status[temp_hpVars['j']] = accessible_property['<<$temp_hpVars[''code'']>>-con...
        // TODO-QSP: property_is_renovated[temp_hpVars['j']] = accessible_property['<<$temp_hpVars[''code'']>>-renovated'...
        // TODO-QSP: property_sales_price[temp_hpVars['j']] = accessible_property['<<$temp_hpVars[''code'']>>-sales-price...
        // TODO-QSP: property_renovation_value[temp_hpVars['j']] = accessible_property['<<$temp_hpVars[''code'']>>-renova...
        ((s as any).temp_hpVars ?? {})['j'] = (((s as any).temp_hpVars ?? {})['j'] ?? 0) + (1);
      }
    }
    ((s as any).temp_hpVars ?? {})['i'] = (((s as any).temp_hpVars ?? {})['i'] ?? 0) + (1);
    if (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['i_max']) {
      // TODO-QSP: jump 'get_owned_properties_loop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetAccessibleProperties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  ((s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars ?? {})['j'] = 0;
  ((s as any).temp_hpVars ?? {})['i_max'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['i_max'] > 0) {
    // TODO-QSP: :get_accessible_properties_loop
    ((s as any).temp_hpVars ?? {})['code'] = qspUntranslated(s, "accessible_property_codes[temp_hpVars['i']]", { location: "homes_properties" });
    if (((s as any).home_name ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] !== ''  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] > 0) {
      if ((((s as any).locArgs?.[1] ?? 0) !== 'home'  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-is-home'] === 0)  ||  (((s as any).locArgs?.[1] ?? 0) !== 'business'  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-is-home'] === 1)) {
        // TODO-QSP: $property_code[temp_hpVars['j']] = $temp_hpVars['code']
        // TODO-QSP: $property_name[temp_hpVars['j']] = $accessible_property['<<$temp_hpVars[''code'']>>-name']
        if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
          // TODO-QSP: $property_display[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = ...
        } else {
          // TODO-QSP: $property_display[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = ...
        }
        if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).RENTED ?? 0)) {
          // TODO-QSP: $property_status_display[temp_hpVars['j']] = "You rent the <<$property_display[temp_hpVars['j']]>> "...
        } else {
          if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).OWNED ?? 0)) {
            // TODO-QSP: $property_status_display[temp_hpVars['j']] = "You own the <<$property_display[temp_hpVars['j']]>> " ...
          } else {
            if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).TENANTS ?? 0)) {
              // TODO-QSP: $property_status_display[temp_hpVars['j']] = "You own the <<$property_display[temp_hpVars['j']]>> wh...
            } else {
              // TODO-QSP: $property_status_display[temp_hpVars['j']] = "You can stay at the <<$property_display[temp_hpVars['j...
            }
          }
        }
        // TODO-QSP: property_status[temp_hpVars['j']] = accessible_property[$temp_hpVars['code']]
        // TODO-QSP: property_construction_status[temp_hpVars['j']] = accessible_property['<<$temp_hpVars[''code'']>>-con...
        // TODO-QSP: property_is_renovated[temp_hpVars['j']] = accessible_property['<<$temp_hpVars[''code'']>>-renovated'...
        // TODO-QSP: $property_type[temp_hpVars['j']] = $accessible_property['<<$temp_hpVars[''code'']>>-type']
        ((s as any).temp_hpVars ?? {})['j'] = (((s as any).temp_hpVars ?? {})['j'] ?? 0) + (1);
      }
    }
    ((s as any).temp_hpVars ?? {})['i'] = (((s as any).temp_hpVars ?? {})['i'] ?? 0) + (1);
    if (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['i_max']) {
      // TODO-QSP: jump 'get_accessible_properties_loop'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetPropertiesForSale(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  ((s as any).temp_hpVars ?? {})['max_i'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['max_i'] <= 0) {
    return;
  }
  ((s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars ?? {})['j'] = 0;
  // TODO-QSP: :get_properties_for_sale_loop
  ((s as any).temp_hpVars ?? {})['code'] = qspUntranslated(s, "homes[temp_hpVars['i']]", { location: "homes_properties" });
  if (((s as any).temp_hpVars ?? 0)?.['code'] !== ''  &&  ((s as any).checked_homes ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 0  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] < 2) {
    // TODO-QSP: checked_homes[$temp_hpVars['code']] = 1
    if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-name'] === '') {
      // TODO-QSP: gs 'homes_properties_attr', 'get_property_attr', $temp_hpVars['code']
    }
    if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-name'] === '') {
      ((s as any).temp_hpVars ?? {})['is_home'] = qspUntranslated(s, "instr(property['type'], 'residence') > 0", { location: "homes_properties" });
    } else {
      ((s as any).temp_hpVars ?? {})['is_home'] = ((((s as any).accessible_property ?? 0)?.['' + qspUntranslated(s, "temp_hpVars['code']>", { location: "homes_properties" }) + '-type']).indexOf(('residence'))) + 1 > 0;
    }
    ((s as any).temp_hpVars ?? {})['price'] = ((((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-name'] === '') ? (qspUntranslated(s, "property['price'] > 0", { location: "homes_properties" })) : (((s as any).accessible_property ?? 0)['' + ((s as any).temp_hpVars ?? 0)?.['code'] + '-sales-price'] > 0));
    if (((((s as any).locArgs?.[1] ?? 0) !== 'home'  &&  ((s as any).temp_hpVars ?? 0)?.['is_home'] === 0)  ||  (((s as any).locArgs?.[1] ?? 0) !== 'business'  &&  ((s as any).temp_hpVars ?? 0)?.['is_home']))  &&  ((s as any).temp_hpVars ?? 0)?.['price']) {
      // TODO-QSP: $property_code[temp_hpVars['j']] = $temp_hpVars['code']
      // TODO-QSP: $property_name[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = '',...
      // TODO-QSP: $property_type[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = '',...
      if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
        // TODO-QSP: $property_display[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = ...
      } else {
        // TODO-QSP: $property_display[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = ...
      }
      // TODO-QSP: property_is_rented[temp_hpVars['j']] = accessible_property[$temp_hpVars['code']] = 1
      // TODO-QSP: property_construction_status[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>...
      // TODO-QSP: property_is_renovated[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'...
      // TODO-QSP: property_sales_price[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name']...
      ((s as any).temp_hpVars ?? {})['j'] = (((s as any).temp_hpVars ?? {})['j'] ?? 0) + (1);
    }
  }
  ((s as any).temp_hpVars ?? {})['i'] = (((s as any).temp_hpVars ?? {})['i'] ?? 0) + (1);
  if (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['max_i']) {
    // TODO-QSP: jump 'get_properties_for_sale_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetPropertiesForRent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  ((s as any).temp_hpVars ?? {})['max_i'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['max_i'] <= 0) {
    return;
  }
  ((s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars ?? {})['j'] = 0;
  // TODO-QSP: :get_properties_for_rent_loop
  ((s as any).temp_hpVars ?? {})['code'] = qspUntranslated(s, "homes[temp_hpVars['i']]", { location: "homes_properties" });
  if (((s as any).temp_hpVars ?? 0)?.['code'] !== ''  &&  ((s as any).checked_homes ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 0  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 0) {
    // TODO-QSP: checked_homes[$temp_hpVars['code']] = 1
    if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-name'] === '') {
      // TODO-QSP: gs 'homes_properties_attr', 'get_property_attr', $temp_hpVars['code']
    }
    if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-name'] === '') {
      ((s as any).temp_hpVars ?? {})['is_home'] = qspUntranslated(s, "instr(property['type'], 'residence') > 1", { location: "homes_properties" });
    } else {
      ((s as any).temp_hpVars ?? {})['is_home'] = ((((s as any).accessible_property ?? 0)?.['' + qspUntranslated(s, "temp_hpVars['code']>", { location: "homes_properties" }) + '-type']).indexOf(('residence'))) + 1 > 1;
    }
    ((s as any).temp_hpVars ?? {})['is_rental'] = ((((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code'] + '-name'] === '') ? (qspUntranslated(s, "property['rental'] = 1", { location: "homes_properties" })) : (((s as any).accessible_property ?? 0)['' + ((s as any).temp_hpVars ?? 0)?.['code'] + '-rental'] = 1));
    if (((((s as any).locArgs?.[1] ?? 0) !== 'home'  &&  ((s as any).temp_hpVars ?? 0)?.['is_home'] === 0)  ||  (((s as any).locArgs?.[1] ?? 0) !== 'business'  &&  ((s as any).temp_hpVars ?? 0)?.['is_home']))  &&  ((s as any).temp_hpVars ?? 0)?.['is_rental']) {
      // TODO-QSP: $property_code[temp_hpVars['j']] = $temp_hpVars['code']
      // TODO-QSP: $property_name[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = '',...
      if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
        // TODO-QSP: $property_display[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = ...
      } else {
        // TODO-QSP: $property_display[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = ...
      }
      // TODO-QSP: property_days[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = '', ...
      // TODO-QSP: property_rent[temp_hpVars['j']] = iif($accessible_property['<<$temp_hpVars[''code'']>>-name'] = '', ...
      ((s as any).temp_hpVars ?? {})['j'] = (((s as any).temp_hpVars ?? {})['j'] ?? 0) + (1);
    }
  }
  ((s as any).temp_hpVars ?? {})['i'] = (((s as any).temp_hpVars ?? {})['i'] ?? 0) + (1);
  if (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['max_i']) {
    // TODO-QSP: jump 'get_properties_for_rent_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetInternetEnabledProperties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  (s as any).hp_i = 0;
  (s as any).hp_j = 0;
  (s as any).count = 0;
  ((s as any).temp_hpVars ?? {})['max_i'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['max_i'] <= 0) {
    return;
  }
  ((s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars ?? {})['j'] = 0;
  // TODO-QSP: :get_internet_enabled_properties_loop
  ((s as any).temp_hpVars ?? {})['code'] = qspUntranslated(s, "homes[temp_hpVars['i']]", { location: "homes_properties" });
  if (((s as any).checked_homes ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 0) {
    // TODO-QSP: checked_homes[$temp_hpVars['code']] = 1
    // TODO-QSP: gs 'homes_properties_attr', 'get_property_attr', $temp_hpVars['code']
    if (((s as any).property ?? 0)?.['internet_enabled']) {
      if ((((s as any).locArgs?.[1] ?? 0) !== 'home'  &&  ((((s as any).property ?? 0)?.['type']).indexOf(('residence'))) + 1 === 0)  ||  (((s as any).locArgs?.[1] ?? 0) !== 'business'  &&  ((((s as any).property ?? 0)?.['type']).indexOf(('residence'))) + 1 > 0)) {
        if ((((s as any).locArgs?.[2] ?? 0) === 'hasaccess'  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] !== 0  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] !== 4)  ||  ((s as any).locArgs?.[2] ?? 0) === '') {
          // TODO-QSP: $property_name[temp_hpVars['j']] = $property['name']
          // TODO-QSP: $property_code[temp_hpVars['j']] = $temp_hpVars['code']
          if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 0) {
            // TODO-QSP: $property_status_label[temp_hpVars['j']] = 'no access'
          } else {
            if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 1) {
              // TODO-QSP: $property_status_label[temp_hpVars['j']] = 'rented'
            } else {
              if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 2) {
                // TODO-QSP: $property_status_label[temp_hpVars['j']] = 'owned'
              } else {
                if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 3) {
                  // TODO-QSP: $property_status_label[temp_hpVars['j']] = 'tenants'
                }
              }
            }
          }
          // TODO-QSP: property__is_current_home[temp_hpVars['j']] = $home['current'] = $temp_hpVars['code']
          ((s as any).temp_hpVars ?? {})['j'] = (((s as any).temp_hpVars ?? {})['j'] ?? 0) + (1);
        }
      }
    }
  }
  ((s as any).temp_hpVars ?? {})['i'] = (((s as any).temp_hpVars ?? {})['i'] ?? 0) + (1);
  if (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['max_i']) {
    // TODO-QSP: jump 'get_internet_enabled_properties_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCleanUpPropertyData(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetHomeless(s: GameState, scene: SceneBuilder): void {
  ((s as any).home ?? {})['current'] = 'homeless';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGiveAccess(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'set_access', ((s as any).accesscode ?? 0), ((s as any).ACCESSIBLE ?? 0));
  if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1  &&  ((s as any).accessible_property ?? 0)[((s as any).accesscode ?? 0) + '-is-home'] === 1  &&  (((s as any).home ?? 0)?.['current'] === ''  ||  qspFunc(s, 'homes_properties', 'is_homeless'))) {
    qspCall(s, 'homes_properties', 'set_home', ((s as any).accesscode ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBlockAccess(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'set_access', ((s as any).blockcode ?? 0), ((s as any).NO_ACCESS ?? 0));
  if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1  &&  (((s as any).home ?? 0)?.['current'] === ''  ||  qspFunc(s, 'homes_properties', 'is_homeless'))) {
    qspCall(s, 'homes_properties', 'get_accessible_properties', 'home');
    if (((s as any).accessible_property ?? 0)[((s as any).property_code ?? 0) + '-is-home'] === 1) {
      qspCall(s, 'homes_properties', 'set_home', ((s as any).property_code ?? 0));
    }
    qspCall(s, 'homes_properties', 'clean_up_property_data');
  } else {
    if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] < 1) {
      qspCall(s, 'homes_properties', 'set_homeless');
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHasAccess(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)];
  }
  (s as any).result = ((s as any).accessible_property ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== ((s as any).NO_ACCESS ?? 0)  &&  ((s as any).accessible_property ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== ((s as any).TENANTS ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetPropertySalesInfo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-name'] === '') {
    qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
  }
  (s as any).property_sales_price = ((((s as any).accessible_property ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-name'] === '') ? (((s as any).property ?? 0)?.['price']) : (((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-sales-price']));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBuyProperty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'set_access', ((s as any).locArgs?.[1] ?? 0), ((s as any).OWNED ?? 0));
  ((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-sales-price'] = qspUntranslated(s, "ARGS[2]", { location: "homes_properties" });
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSellProperty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'set_access', ((s as any).locArgs?.[1] ?? 0), ((s as any).NO_ACCESS ?? 0));
  ((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-sales-price'] = qspUntranslated(s, "ARGS[2]", { location: "homes_properties" });
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTenantsMoveIn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'set_access', ((s as any).locArgs?.[1] ?? 0), ((s as any).TENANTS ?? 0));
  ((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-tenant-day'] = qspUntranslated(s, "ARGS[2]", { location: "homes_properties" });
  ((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-tenant-month'] = qspUntranslated(s, "ARGS[3]", { location: "homes_properties" });
  if ((((s as any).home ?? 0)?.['current'] === ''  ||  qspFunc(s, 'homes_properties', 'is_homeless'))  &&  ((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1) {
    qspCall(s, 'homes_properties', 'get_accessible_properties', 'home');
    if (((s as any).accessible_property ?? 0)[((s as any).property_code ?? 0) + '-is-home']) {
      qspCall(s, 'homes_properties', 'set_home', ((s as any).property_code ?? 0));
    }
    qspCall(s, 'homes_properties', 'clean_up_property_data');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTenantsMoveOut(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
    qspCall(s, 'homes_properties', 'set_access', ((s as any).locArgs?.[1] ?? 0), 2);
    if (((s as any).home ?? 0)?.['current'] === ''  &&  ((s as any).accessible_property ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-is-home'] === 1  &&  ((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1) {
      qspCall(s, 'homes_properties', 'set_home', ((s as any).locArgs?.[1] ?? 0));
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTenantMoveOutCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).count = 0;
  (s as any).hp_i = 0;
  (s as any).hp_j = 0;
  if (((s as any).count ?? 0) > 0) {
    // TODO-QSP: :tenantloop
    if (((s as any).home_name ?? 0)?.[String((s as any).tenantcode ?? 0)] !== ''  &&  ((s as any).accessible_property ?? 0)?.[String((s as any).tenantcode ?? 0)] === 3) {
      if ((((s as any).accessible_property ?? 0)[((s as any).tenantcode ?? 0) + '-tenant-day'] === ((s as any).day ?? 0))  &&  ((s as any).accessible_property ?? 0)[((s as any).tenantcode ?? 0) + '-tenant-month'] === ((s as any).month ?? 0)) {
        qspCall(s, 'homes_properties', 'set_access', ((s as any).tenantcode ?? 0), ((s as any).OWNED ?? 0));
        // TODO-QSP: $temp_text += $func('wrap', 'v_neg b', '<br>Your tenants have moved out from your <<$accessible_prop...
        (s as any).hp_j = ((s as any).hp_j ?? 0) + (1);
      }
    }
    (s as any).hp_i = ((s as any).hp_i ?? 0) + (1);
    if (((s as any).hp_i ?? 0) < ((s as any).count ?? 0)) {
      // TODO-QSP: jump 'tenantloop'
    }
  }
  if (((((s as any).temp_text ?? 0)).length) > 0) {
  }
  // TODO-QSP: dynamic text: <<$temp_text>>
  scene.text(`${((s as any).temp_text ?? 0)}`);
  if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1  &&  (((s as any).home ?? 0)?.['current'] === ''  ||  qspFunc(s, 'homes_properties', 'is_homeless'))) {
    qspCall(s, 'homes_properties', 'get_accessible_properties', 'home');
    if (((s as any).accessible_property ?? 0)[((s as any).property_code ?? 0) + '-is-home'] === 1) {
      qspCall(s, 'homes_properties', 'set_home', ((s as any).property_code ?? 0));
    }
    qspCall(s, 'homes_properties', 'clean_up_property_data');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetPropertySalesPrice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-name'] !== '') {
    (s as any).result = ((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-sales-price'];
  } else {
    qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).locArgs?.[1] ?? 0));
    (s as any).result = ((s as any).property ?? 0)?.['price'];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRentProperty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'set_access', ((s as any).locArgs?.[1] ?? 0), ((s as any).RENTED ?? 0));
  // TODO-QSP: gs 'homes_properties', 'set_rent_days', $ARGS[1], ARGS[2]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCancelRent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'set_access', ((s as any).locArgs?.[1] ?? 0), ((s as any).NO_ACCESS ?? 0));
  qspCall(s, 'homes_properties', 'set_rent_days', ((s as any).locArgs?.[1] ?? 0), (-1));
  if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1  &&  (((s as any).home ?? 0)?.['current'] === ''  ||  qspFunc(s, 'homes_properties', 'is_homeless'))) {
    qspCall(s, 'homes_properties', 'get_accessible_properties', 'home');
    if (((s as any).accessible_property ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-is-home'] === 1) {
      qspCall(s, 'homes_properties', 'set_home', ((s as any).property_code ?? 0));
    }
    qspCall(s, 'homes_properties', 'clean_up_property_data');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPayRent(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', accessible_property['<<$ARGS[1]>>-rent'], $ARGS[2]
  qspCall(s, 'homes_properties', 'add_rent_days', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddRentDays(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-days-left'] = (((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-days-left'] ?? 0) + (qspFunc(s, 'homes_properties', 'days_in_month'));
  } else {
    ((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-days-left'] = (((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-days-left'] ?? 0) + (qspUntranslated(s, "ARGS[2]", { location: "homes_properties" }));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetRentDays(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-days-left'] = qspFunc(s, 'homes_properties', 'days_in_month');
  } else {
    ((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-days-left'] = qspUntranslated(s, "ARGS[2]", { location: "homes_properties" });
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetRentAmount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-rental']  &&  ((s as any).locArgs?.[2] ?? 0) >= 0) {
    ((s as any).accessible_property ?? {})['' + String((s as any).$ARGS[1] || '') + '-rent'] = qspUntranslated(s, "ARGS[2]", { location: "homes_properties" });
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetRentDays(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-days-left'];
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetRentAmount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-name'] !== '') {
    (s as any).result = ((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-rent'];
  } else {
    qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).locArgs?.[1] ?? 0));
    (s as any).result = ((s as any).property ?? 0)?.['rent'];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterProgressPropertyRentTime(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'get_rented_properties', '', 1);
  (s as any).count = 0;
  (s as any).hp_i = 0;
  if (((s as any).count ?? 0) > 0) {
    // TODO-QSP: :progress_property_rent_time_loop
    // TODO-QSP: gs 'homes_properties', 'add_rent_days', $property_code[hp_i], -1
    (s as any).hp_i = ((s as any).hp_i ?? 0) + (1);
    if (((s as any).hp_i ?? 0) < ((s as any).count ?? 0)) {
      // TODO-QSP: jump 'progress_property_rent_time_loop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDaysInMonth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).monthsend ?? 0)[1] === 0) {
    qspCall(s, 'time', 'init_monthends');
  }
  (s as any).result = ((s as any).monthsend ?? 0)?.[String((s as any).month ?? 0)];
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetPropertyConstructionStatus(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).accessible_property ?? 0)?.[String(((s as any).constrstatcheckpropcode ?? 0)) + '-construction-status'];
  return;
  // TODO-QSP: end
  scene.build();
}

function enterProgressConstructionStatus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)[((s as any).constrstatpropcode ?? 0) + '-construction-status'] < 2) {
    ((s as any).accessible_property ?? {})['' + String((s as any).$constrstatpropcode || '') + '-construction-status'] = (((s as any).accessible_property ?? {})['' + String((s as any).$constrstatpropcode || '') + '-construction-status'] ?? 0) + (1);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsPropertyRenovated(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).accessible_property ?? 0)?.[String(((s as any).checkrenpropcode ?? 0)) + '-renovated'];
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenovateProperty(s: GameState, scene: SceneBuilder): void {
  ((s as any).accessible_property ?? {})['' + String((s as any).$renovatepropcode || '') + '-renovated'] = 1;
  ((s as any).accessible_property ?? {})['' + String((s as any).$renovatepropcode || '') + '-renovation-value'] = (((s as any).accessible_property ?? {})['' + String((s as any).$renovatepropcode || '') + '-renovation-value'] ?? 0) + (qspUntranslated(s, "ARGS[2]", { location: "homes_properties" }));
  if (((s as any).locArgs?.[3] ?? 0) !== '') {
    ((s as any).accessible_property ?? {})['' + String((s as any).$renovatepropcode || '') + '-renovations'] = (((s as any).accessible_property ?? {})['' + String((s as any).$renovatepropcode || '') + '-renovations'] ?? 0) + (';' + qspUntranslated(s, "ARGS[3]>", { location: "homes_properties" }) + '');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGoHome(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'homes_properties', 'is_homeless')  ||  ((s as any).home ?? 0)?.['region'] !== ((s as any).region ?? 0)) {
    // TODO-QSP: dynamic($train_station[$region])
  } else {
    if (((s as any).loc ?? 0)(((s as any).home ?? 0)?.['location'])) {
      // TODO-QSP: gt $home['location'], $home['location_arg']
    } else {
      scene.text(`Home Error: home location '${((s as any).home ?? 0)?.['location']}' does not exist.`);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGoStraightHome(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'homes_properties', 'is_homeless')  ||  ((s as any).home ?? 0)?.['region'] !== ((s as any).region ?? 0)) {
    // TODO-QSP: dynamic($train_station[$region])
  } else {
    if (((s as any).loc ?? 0)(((s as any).home ?? 0)?.['entrance'])) {
      // TODO-QSP: gt $home['entrance'], $home['entrance_arg']
    } else {
      scene.text(`Home Error: home entrance '${((s as any).home ?? 0)?.['entrance']}' does not exist.`);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGoBathroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_prop_code ?? 0) === '') {
  }
  qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).temp_prop_code ?? 0));
  if (((s as any).loc ?? 0)(((s as any).property ?? 0)?.['bathroom'])) {
    // TODO-QSP: dynamic "
    // TODO-QSP: gt '<<$property['bathroom']>>', '<<$property['bathroom_arg']>>'
    // TODO-QSP: "
  } else {
    scene.text(`Home Error: bathroom location '${((s as any).property ?? 0)?.['bathroom']}' does not exist.`);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGoBedroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_prop_code ?? 0) === '') {
  }
  qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).temp_prop_code ?? 0));
  if (((s as any).loc ?? 0)(((s as any).property ?? 0)?.['bedroom'])) {
    // TODO-QSP: dynamic "
    // TODO-QSP: gt '<<$property['bedroom']>>', '<<$property['bedroom_arg']>>'
    // TODO-QSP: "
  } else {
    scene.text(`Home Error: bedroom location '${((s as any).property ?? 0)?.['bedroom']}' does not exist.`);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFreeInternetAvailable(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties_attr', 'get_property_attr', ((((s as any).locArgs?.[1] ?? 0) === '') ? (((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)]) : (((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)])));
  (s as any).result = qspUntranslated(s, "property['free_internet'] = 1", { location: "homes_properties" });
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetHomeDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['current'] === 'city_apartment') {
  } else {
    if (((s as any).home ?? 0)?.['location'] === 'pav_complex') {
    } else {
      if (((s as any).home ?? 0)?.['current'] === 'village_cottage') {
      } else {
        if (((s as any).home ?? 0)?.['current'] === 'old_town_apartment') {
        } else {
          if (((s as any).home ?? 0)?.['current'] === 'matryona_mansion') {
          } else {
            if (((s as any).home ?? 0)?.['current'] === 'pavlovsk_hotel') {
            } else {
              if (((s as any).home ?? 0)?.['current'] === 'maid_bedroom') {
              } else {
                if (((s as any).home ?? 0)?.['current'] === 'niko_apartment') {
                } else {
                  if (((s as any).home ?? 0)?.['current'] === 'lyceum_dorm') {
                  } else {
                    if (((s as any).home ?? 0)?.['current'] === 'university_dorm') {
                    } else {
                      if (((s as any).home ?? 0)?.['town'] === 'gadukino') {
                      } else {
                        if (((s as any).home ?? 0)?.['current'] === 'city_house') {
                        } else {
                          if (((s as any).home ?? 0)?.['current'] === 'meynold_household') {
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'calculate_rentable_property_count':
      enterCalculateRentablePropertyCount(s, scene);
      break;
    case 'set_home':
      enterSetHome(s, scene);
      break;
    case 'set_access':
      enterSetAccess(s, scene);
      break;
    case 'is_homeless':
      enterIsHomeless(s, scene);
      break;
    case 'can_live_here':
      enterCanLiveHere(s, scene);
      break;
    case 'is_current_home':
      enterIsCurrentHome(s, scene);
      break;
    case 'is_at_a_home':
      enterIsAtAHome(s, scene);
      break;
    case 'is_property_of_status':
      enterIsPropertyOfStatus(s, scene);
      break;
    case 'get_property_code':
      enterGetPropertyCode(s, scene);
      break;
    case 'get_rented_property_count':
      enterGetRentedPropertyCount(s, scene);
      break;
    case 'get_accessible_property_count':
      enterGetAccessiblePropertyCount(s, scene);
      break;
    case 'get_rentable_property_count':
      enterGetRentablePropertyCount(s, scene);
      break;
    case 'get_available_for_rent_property_count':
      enterGetAvailableForRentPropertyCount(s, scene);
      break;
    case 'get_furnishable_property_count':
      enterGetFurnishablePropertyCount(s, scene);
      break;
    case 'get_rented_properties':
      enterGetRentedProperties(s, scene);
      break;
    case 'get_owned_properties':
      enterGetOwnedProperties(s, scene);
      break;
    case 'get_accessible_properties':
      enterGetAccessibleProperties(s, scene);
      break;
    case 'get_properties_for_sale':
      enterGetPropertiesForSale(s, scene);
      break;
    case 'get_properties_for_rent':
      enterGetPropertiesForRent(s, scene);
      break;
    case 'get_internet_enabled_properties':
      enterGetInternetEnabledProperties(s, scene);
      break;
    case 'clean_up_property_data':
      enterCleanUpPropertyData(s, scene);
      break;
    case 'set_homeless':
      enterSetHomeless(s, scene);
      break;
    case 'give_access':
      enterGiveAccess(s, scene);
      break;
    case 'block_access':
      enterBlockAccess(s, scene);
      break;
    case 'has_access':
      enterHasAccess(s, scene);
      break;
    case 'get_property_sales_info':
      enterGetPropertySalesInfo(s, scene);
      break;
    case 'buy_property':
      enterBuyProperty(s, scene);
      break;
    case 'sell_property':
      enterSellProperty(s, scene);
      break;
    case 'tenants_move_in':
      enterTenantsMoveIn(s, scene);
      break;
    case 'tenants_move_out':
      enterTenantsMoveOut(s, scene);
      break;
    case 'tenant_move_out_check':
      enterTenantMoveOutCheck(s, scene);
      break;
    case 'get_property_sales_price':
      enterGetPropertySalesPrice(s, scene);
      break;
    case 'rent_property':
      enterRentProperty(s, scene);
      break;
    case 'cancel_rent':
      enterCancelRent(s, scene);
      break;
    case 'pay_rent':
      enterPayRent(s, scene);
      break;
    case 'add_rent_days':
      enterAddRentDays(s, scene);
      break;
    case 'set_rent_days':
      enterSetRentDays(s, scene);
      break;
    case 'set_rent_amount':
      enterSetRentAmount(s, scene);
      break;
    case 'get_rent_days':
      enterGetRentDays(s, scene);
      break;
    case 'get_rent_amount':
      enterGetRentAmount(s, scene);
      break;
    case 'progress_property_rent_time':
      enterProgressPropertyRentTime(s, scene);
      break;
    case 'days_in_month':
      enterDaysInMonth(s, scene);
      break;
    case 'get_property_construction_status':
      enterGetPropertyConstructionStatus(s, scene);
      break;
    case 'progress_construction_status':
      enterProgressConstructionStatus(s, scene);
      break;
    case 'is_property_renovated':
      enterIsPropertyRenovated(s, scene);
      break;
    case 'renovate_property':
      enterRenovateProperty(s, scene);
      break;
    case 'go_home':
      enterGoHome(s, scene);
      break;
    case 'go_straight_home':
      enterGoStraightHome(s, scene);
      break;
    case 'go_bathroom':
      enterGoBathroom(s, scene);
      break;
    case 'go_bedroom':
      enterGoBedroom(s, scene);
      break;
    case 'free_internet_available':
      enterFreeInternetAvailable(s, scene);
      break;
    case 'get_home_desc':
      enterGetHomeDesc(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const homes_properties: LocationDef = {
  name: 'homes_properties',
  title: '<br>Your tenants have moved out from your <<$accessible_property[\'<<$tenantcode>>-display\']>> and your apartment is now vacant.',
  region: 'other',
  enter: enter,
};
