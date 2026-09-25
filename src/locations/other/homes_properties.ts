import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCalculateRentablePropertyCount(s: GameState, scene: SceneBuilder): void {
  ((s as any).accessible_property = (s as any).accessible_property ?? {})['rentable_home_count'] = 0;
  ((s as any).accessible_property = (s as any).accessible_property ?? {})['rentable_business_count'] = 0;
  ((s as any).accessible_property = (s as any).accessible_property ?? {})['rentable_other_count'] = 0;
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['max_i'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['max_i'] <= 0) {
    alert('ERROR: homes_properties, get_properties_for_rent: homes array is empty');
    (s as any).temp_hpacVars = undefined;
    return;
  }
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = 0;
  do {
    qspCall(s, 'homes_properties_attr', 'get_property_attr', qspUntranslated(s, "homes[temp_hpVars['i']]", { location: "homes_properties" }));
    if (((s as any).property ?? 0)?.['rental']) {
      if (((String(((s as any).property ?? 0)?.['type']).indexOf(String('residence'))) + 1) > 0) {
        ((s as any).accessible_property = (s as any).accessible_property ?? {})['rentable_home_count'] = ((s as any).accessible_property['rentable_home_count'] ?? 0) + (1);
      } else {
        if (((String(((s as any).property ?? 0)?.['type']).indexOf(String('business'))) + 1) > 0) {
          ((s as any).accessible_property = (s as any).accessible_property ?? {})['rentable_business_count'] = ((s as any).accessible_property['rentable_business_count'] ?? 0) + (1);
        } else {
          ((s as any).accessible_property = (s as any).accessible_property ?? {})['rentable_other_count'] = ((s as any).accessible_property['rentable_other_count'] ?? 0) + (1);
        }
      }
    }
    ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = ((s as any).temp_hpVars['i'] ?? 0) + (1);
    (s as any).temp_hpVars = undefined;
    ((s as any).accessible_property = (s as any).accessible_property ?? {})['available_for_rent_home_count'] = (((s as any).accessible_property ?? 0)?.['rentable_home_count']);
    ((s as any).accessible_property = (s as any).accessible_property ?? {})['available_for_rent_business_count'] = (((s as any).accessible_property ?? 0)?.['rentable_business_count']);
    return;
  } while (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['max_i']);
  scene.build();
}

function enterSetHome(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_homepropcode = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  if (((s as any).temp_homepropcode ?? 0) !== '') {
    qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).temp_homepropcode ?? 0));
    if (((String(((s as any).property ?? 0)?.['type']).indexOf(String('residence'))) + 1) > 0) {
      (s as any).home = undefined;
      (s as any)[property] ? (s as any)[property] = { ...(s as any)[home] } : (s as any)[property] = { ...(s as any)[home] };
      ((s as any).home = (s as any).home ?? {})['current'] = (((s as any).property ?? 0)?.['code']);
      if (((s as any).accessible_property ?? 0)[((s as any).home ?? 0)?.['current']] === 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).home ?? 0)?.['current']), 1]; enterSetAccess(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      (s as any).property = undefined;
    }
  }
  (s as any).temp_homepropcode = undefined;
  return;
  scene.build();
}

function enterSetAccess(s: GameState, scene: SceneBuilder): void {
  (s as any).property_code = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  (s as any).original_access_code = (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] ?? 0);
  (s as any).new_access_code = ((s as any).locArgs?.[2] ?? 0);
  if (((s as any).original_access_code ?? 0) !== ((s as any).new_access_code ?? 0)) {
    (s as any)._display = ((s as any).property_code ?? 0) + '-display';
    (s as any)._name = ((s as any).property_code ?? 0) + '-name';
    (s as any)._type = ((s as any).property_code ?? 0) + '-type';
    (s as any)._construction_state = ((s as any).property_code ?? 0) + '-construction-status';
    (s as any)._is_home = ((s as any).property_code ?? 0) + '-is-home';
    (s as any)._is_rental = ((s as any).property_code ?? 0) + '-rental';
    (s as any)._renovated = ((s as any).property_code ?? 0) + '-renovated';
    (s as any)._sales_price = ((s as any).property_code ?? 0) + '-sales-price';
    (s as any)._rent = ((s as any).property_code ?? 0) + '-rent';
    (s as any)._tenant_day = ((s as any).property_code ?? 0) + '-tenant-day';
    (s as any)._tenant_month = ((s as any).property_code ?? 0) + '-tenant-month';
    if (((s as any).accessible_property ?? 0)?.[String((s as any)._display ?? 0)] === ''  ||  ((s as any).accessible_property ?? 0)?.[String((s as any)._name ?? 0)] === '') {
      if (((s as any).property ?? 0)?.['code'] !== ((s as any).property_code ?? 0)) {
        qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).property_code ?? 0));
      } else {
        (s as any).nokill = 1;
      }
      (s as any).accessible_property_codes = [...((s as any).accessible_property_codes ?? []), ((s as any).property_code ?? 0)];
      ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._name ?? 0)] = (((s as any).property ?? 0)?.['name']);
      ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._type ?? 0)] = (((s as any).property ?? 0)?.['type']);
      if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
        ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._construction_state ?? 0)] = ((s as any).locArgs?.[3] ?? 0);
        ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._display ?? 0)] = (((s as any).property ?? 0)?.['display_' + String(((s as any).locArgs?.[3] ?? 0))]);
      } else {
        ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._construction_state ?? 0)] = 2;
        ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._display ?? 0)] = (((s as any).property ?? 0)?.['display']);
      }
      if (((String(((s as any).property ?? 0)?.['type']).indexOf(String('residence'))) + 1) > 0) {
        ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._is_home ?? 0)] = 1;
      }
      ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._is_rental ?? 0)] = (((s as any).property ?? 0)?.['rental']);
      ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._renovated ?? 0)] = ((s as any).locArgs?.[4] ?? 0);
      ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._sales_price ?? 0)] = (((s as any).property ?? 0)?.['price']);
      ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._rent ?? 0)] = (((s as any).property ?? 0)?.['rent']);
    }
    if (((s as any).new_access_code ?? 0) === ((s as any).ACCESSIBLE ?? 0)  &&  ((s as any).property ?? 0)?.['rental'] === 1) {
      (s as any).new_access_code = ((s as any).RENTED ?? 0);
    }
    ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any).property_code ?? 0)] = ((s as any).new_access_code ?? 0);
    if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).NO_ACCESS ?? 0)) {
      if (((s as any).home ?? 0)?.['current'] === ((s as any).property_code ?? 0)) {
        (s as any).home = undefined;
      }
      if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
        if (((s as any).original_access_code ?? 0) === ((s as any).RENTED ?? 0)) {
          ((s as any).accessible_property = (s as any).accessible_property ?? {})['rental_home_count'] = ((s as any).accessible_property['rental_home_count'] ?? 0) - (1);
          ((s as any).accessible_property = (s as any).accessible_property ?? {})['available_for_rent_home_count'] = ((s as any).accessible_property['available_for_rent_home_count'] ?? 0) + (1);
        }
        if (((s as any).original_access_code ?? 0) === ((s as any).OWNED ?? 0)) {
          ((s as any).accessible_property = (s as any).accessible_property ?? {})['owned_home_count'] = ((s as any).accessible_property['owned_home_count'] ?? 0) - (1);
        }
        if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2) {
          ((s as any).accessible_property = (s as any).accessible_property ?? {})['furnishable_home_count'] = ((s as any).accessible_property['furnishable_home_count'] ?? 0) - (1);
        }
        ((s as any).accessible_property = (s as any).accessible_property ?? {})['accessible_home_count'] = ((s as any).accessible_property['accessible_home_count'] ?? 0) - (1);
      }
      if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'home']; enterGetAccessibleProperties(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).property_code ?? 0)]; enterSetHome(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).RENTED ?? 0)) {
        if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
          ((s as any).accessible_property = (s as any).accessible_property ?? {})['rental_home_count'] = ((s as any).accessible_property['rental_home_count'] ?? 0) + (1);
          ((s as any).accessible_property = (s as any).accessible_property ?? {})['accessible_home_count'] = ((s as any).accessible_property['accessible_home_count'] ?? 0) + (1);
          ((s as any).accessible_property = (s as any).accessible_property ?? {})['available_for_rent_home_count'] = ((s as any).accessible_property['available_for_rent_home_count'] ?? 0) - (1);
          if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2) {
            ((s as any).accessible_property = (s as any).accessible_property ?? {})['furnishable_home_count'] = ((s as any).accessible_property['furnishable_home_count'] ?? 0) + (1);
          }
        }
      } else {
        if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).OWNED ?? 0)) {
          if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
            if ((!((s as any).original_access_code ?? 0))) {
              ((s as any).accessible_property = (s as any).accessible_property ?? {})['accessible_home_count'] = ((s as any).accessible_property['accessible_home_count'] ?? 0) + (1);
            } else {
              if (((s as any).original_access_code ?? 0) === ((s as any).RENTED ?? 0)) {
                ((s as any).accessible_property = (s as any).accessible_property ?? {})['rental_home_count'] = ((s as any).accessible_property['rental_home_count'] ?? 0) - (1);
                ((s as any).accessible_property = (s as any).accessible_property ?? {})['available_for_rent_home_count'] = ((s as any).accessible_property['available_for_rent_home_count'] ?? 0) + (1);
              } else {
                if (((s as any).original_access_code ?? 0) === ((s as any).TENANTS ?? 0)) {
                  ((s as any).accessible_property = (s as any).accessible_property ?? {})['tenant_home_count'] = ((s as any).accessible_property['tenant_home_count'] ?? 0) - (1);
                  ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._tenant_day ?? 0)] = (-1);
                  ((s as any).accessible_property = (s as any).accessible_property ?? {})[String((s as any)._tenant_month ?? 0)] = (-1);
                }
              }
            }
            if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2  &&  ((s as any).original_access_code ?? 0) !== 1) {
              ((s as any).accessible_property = (s as any).accessible_property ?? {})['furnishable_home_count'] = ((s as any).accessible_property['furnishable_home_count'] ?? 0) + (1);
            }
            ((s as any).accessible_property = (s as any).accessible_property ?? {})['owned_home_count'] = ((s as any).accessible_property['owned_home_count'] ?? 0) + (1);
          }
        } else {
          if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).TENANTS ?? 0)) {
            if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
              if (((s as any).home ?? 0)?.['current'] === ((s as any).property_code ?? 0)) {
                (s as any).home = undefined;
              }
              ((s as any).accessible_property = (s as any).accessible_property ?? {})['tenant_home_count'] = ((s as any).accessible_property['tenant_home_count'] ?? 0) + (1);
              ((s as any).accessible_property = (s as any).accessible_property ?? {})['owned_home_count'] = ((s as any).accessible_property['owned_home_count'] ?? 0) - (1);
              ((s as any).accessible_property = (s as any).accessible_property ?? {})['accessible_home_count'] = ((s as any).accessible_property['accessible_home_count'] ?? 0) - (1);
              if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2) {
                ((s as any).accessible_property = (s as any).accessible_property ?? {})['furnishable_home_count'] = ((s as any).accessible_property['furnishable_home_count'] ?? 0) - (1);
              }
            }
          } else {
            if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).ACCESSIBLE ?? 0)) {
              if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
                ((s as any).accessible_property = (s as any).accessible_property ?? {})['accessible_home_count'] = ((s as any).accessible_property['accessible_home_count'] ?? 0) + (1);
              }
            }
          }
        }
      }
    }
    if ((!((s as any).nokill ?? 0))) {
      (s as any).property = undefined;
    }
    (s as any)._display = undefined;
    (s as any)._name = undefined;
    (s as any)._type = undefined;
    (s as any)._construction_state = undefined;
    (s as any)._is_home = undefined;
    (s as any)._is_rental = undefined;
    (s as any)._renovated = undefined;
    (s as any)._sales_price = undefined;
    (s as any)._rent = undefined;
    (s as any)._tenant_day = undefined;
    (s as any)._tenant_month = undefined;
    (s as any).nokill = undefined;
  }
  (s as any).property_code = undefined;
  (s as any).original_access_code = undefined;
  (s as any).new_access_code = undefined;
  return;
  scene.build();
}

function enterIsHomeless(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).home ?? 0)?.['current'] === 'homeless');
  return;
  scene.build();
}

function enterCanLiveHere(s: GameState, scene: SceneBuilder): void {
  (s as any).canlivecode = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  (s as any).result = ((s as any).accessible_property ?? 0)?.[String((s as any).canlivecode ?? 0)] !== ((s as any).NO_ACCESS ?? 0)  &&  ((s as any).accessible_property ?? 0)?.[String((s as any).canlivecode ?? 0)] !== ((s as any).TENANTS ?? 0)  &&  qspFunc(s, 'homes_properties', 'get_property_construction_status', ((s as any).canlivecode ?? 0)) === 2;
  (s as any).canlivecode = undefined;
  return;
  scene.build();
}

function enterIsCurrentHome(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_currenthomecode = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  (s as any).result = (((s as any).home ?? 0)?.['current'] === ((s as any).temp_currenthomecode ?? 0));
  (s as any).temp_currenthomecode = undefined;
  return;
  scene.build();
}

function enterIsAtAHome(s: GameState, scene: SceneBuilder): void {
  (s as any).isathomecode = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  (s as any).result = (((s as any).accessible_property ?? 0)[(((s as any).isathomecode ?? 0)) + '-is-home'] === 1);
  (s as any).isathomecode = undefined;
  return;
  scene.build();
}

function enterIsPropertyOfStatus(s: GameState, scene: SceneBuilder): void {
  (s as any).propstatcode = ((String((s as any).locArgs?.[2] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[2] ?? 0)] ?? 0)));
  (s as any).result = 0;
  if (String((s as any).locArgs?.[1] ?? '') === 'rented') {
    (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).RENTED ?? 0));
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'owned') {
      (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).OWNED ?? 0));
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'tenants') {
        (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).TENANTS ?? 0));
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'blocked') {
          (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).NO_ACCESS ?? 0));
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'hasaccess') {
            (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).ACCESSIBLE ?? 0));
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'purchased') {
              (s as any).result = (((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).OWNED ?? 0)  ||  ((s as any).accessible_property ?? 0)?.[String((s as any).propstatcode ?? 0)] === ((s as any).TENANTS ?? 0));
            }
          }
        }
      }
    }
  }
  (s as any).propstatcode = undefined;
  return;
  scene.build();
}

function enterGetPropertyCode(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  return;
  scene.build();
}

function enterGetRentedPropertyCount(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'home') {
    (s as any).result = (((s as any).accessible_property ?? 0)?.['rental_home_count']);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'business') {
      (s as any).result = (((s as any).accessible_property ?? 0)?.['rental_business_count']);
    } else {
      (s as any).result = (((s as any).accessible_property ?? {})?.['rental_home_count'] ?? 0) + (((s as any).accessible_property ?? {})?.['rental_business_count'] ?? 0);
    }
  }
  return;
  scene.build();
}

function enterGetAccessiblePropertyCount(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'home') {
    (s as any).result = (((s as any).accessible_property ?? 0)?.['accessible_home_count']);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'business') {
      (s as any).result = (((s as any).accessible_property ?? 0)?.['accessible_business_count']);
    } else {
      (s as any).result = (((s as any).accessible_property ?? {})?.['accessible_home_count'] ?? 0) + (((s as any).accessible_property ?? {})?.['accessible_business_count'] ?? 0);
    }
  }
  return;
  scene.build();
}

function enterGetRentablePropertyCount(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'home') {
    (s as any).result = (((s as any).accessible_property ?? 0)?.['rentable_home_count']);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'business') {
      (s as any).result = (((s as any).accessible_property ?? 0)?.['rentable_business_count']);
    } else {
      (s as any).result = (((s as any).accessible_property ?? {})?.['rentable_home_count'] ?? 0) + (((s as any).accessible_property ?? {})?.['rentable_business_count'] ?? 0);
    }
  }
  return;
  scene.build();
}

function enterGetAvailableForRentPropertyCount(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'home') {
    (s as any).result = (((s as any).accessible_property ?? 0)?.['available_for_rent_home_count']);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'business') {
      (s as any).result = (((s as any).accessible_property ?? 0)?.['available_for_rent_business_count']);
    } else {
      (s as any).result = (((s as any).accessible_property ?? {})?.['available_for_rent_home_count'] ?? 0) + (((s as any).accessible_property ?? {})?.['available_for_rent_business_count'] ?? 0);
    }
  }
  return;
  scene.build();
}

function enterGetFurnishablePropertyCount(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'home') {
    (s as any).result = (((s as any).accessible_property ?? 0)?.['furnishable_home_count']);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'business') {
      (s as any).result = (((s as any).accessible_property ?? 0)?.['furnishable_business_count']);
    } else {
      (s as any).result = (((s as any).accessible_property ?? {})?.['furnishable_home_count'] ?? 0) + (((s as any).accessible_property ?? {})?.['furnishable_business_count'] ?? 0);
    }
  }
  return;
  scene.build();
}

function enterGetRentedProperties(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).remp_hpVars = (s as any).remp_hpVars ?? {})['type'] = ((String((s as any).locArgs?.[1] ?? '') === '') ? ('all') : (((s as any).locArgs?.[1] ?? 0)));
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = 0;
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i_max'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['i_max'] > 0) {
    do {
      ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['code'] = qspUntranslated(s, "accessible_property_codes[temp_hpVars['i']]", { location: "homes_properties" });
      if (((s as any).home_name ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] !== ''  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 1) {
        if ((((s as any).remp_hpVars ?? 0)?.['type'] !== 'home'  &&  ((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-is-home'] === 0)  ||  (((s as any).remp_hpVars ?? 0)?.['type'] !== 'business'  &&  ((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-is-home'])) {
          ((s as any).property_code = (s as any).property_code ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).temp_hpVars ?? 0)?.['code']);
          if (String((s as any).locArgs?.[2] ?? '') === 0) {
            ((s as any).property_name = (s as any).property_name ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] ?? 0);
            ((s as any).property_display = (s as any).property_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-display'] ?? 0);
            ((s as any).property_days = (s as any).property_days ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-days-left'] ?? 0);
            ((s as any).property_rent = (s as any).property_rent ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-rent'] ?? 0);
          }
          ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = ((s as any).temp_hpVars['j'] ?? 0) + (1);
        }
      }
      ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = ((s as any).temp_hpVars['i'] ?? 0) + (1);
    } while (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['i_max']);
  }
  (s as any).temp_hpVars = undefined;
  return;
  scene.build();
}

function enterGetOwnedProperties(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).type = ((String((s as any).locArgs?.[2] ?? '') === '') ? (((s as any).locArgs?.[1] ?? 0)) : ('all'));
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i_max'] = ((String((s as any).locArgs?.[2] ?? '') === '') ? (0) : (1));
  if (((s as any).temp_hpVars ?? 0)?.['i_max'] > 0) {
    do {
      ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['code'] = ((String((s as any).locArgs?.[2] ?? '') === '') ? (qspUntranslated(s, "accessible_property_codes[temp_hpVars['i']]", { location: "homes_properties" })) : (((s as any).locArgs?.[2] ?? 0)));
      if (((s as any).home_name ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] !== ''  &&  ((((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).OWNED ?? 0))  ||  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).TENANTS ?? 0))) {
        if ((((s as any).type ?? 0) !== 'home'  &&  ((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-is-home'] === 0)  ||  (((s as any).type ?? 0) !== 'business'  &&  ((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-is-home'] === 1)) {
          ((s as any).property_code = (s as any).property_code ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).temp_hpVars ?? 0)?.['code']);
          ((s as any).property_name = (s as any).property_name ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] ?? 0);
          if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
            ((s as any).property_display = (s as any).property_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['display_0'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-display'] ?? 0)));
          } else {
            ((s as any).property_display = (s as any).property_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['display'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-display'] ?? 0)));
          }
          ((s as any).property_type = (s as any).property_type ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-type'] ?? 0);
          if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).TENANTS ?? 0)) {
            ((s as any).property_status_display = (s as any).property_status_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'A(n) ' + qspUntranslated(s, "property_display[temp_hpVars['j']]", { location: "homes_properties" }) + ' which is currently occupied by your tenants.';
          } else {
            if (((s as any).temp_hpVars ?? 0)?.['code'] === ((s as any).home ?? 0)?.['current']) {
              ((s as any).property_status_display = (s as any).property_status_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'A(n) ' + qspUntranslated(s, "property_display[temp_hpVars['j']]", { location: "homes_properties" }) + ' where you currently live.';
            } else {
              ((s as any).property_status_display = (s as any).property_status_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'A(n) ' + qspUntranslated(s, "property_display[temp_hpVars['j']]", { location: "homes_properties" }) + ' which is currently empty.';
            }
          }
          ((s as any).property_status = (s as any).property_status ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.[(((s as any).temp_hpVars ?? 0)?.['code'])] ?? 0);
          ((s as any).property_construction_status = (s as any).property_construction_status ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-construction-status'] ?? 0);
          ((s as any).property_is_renovated = (s as any).property_is_renovated ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-renovated'] ?? 0);
          ((s as any).property_sales_price = (s as any).property_sales_price ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-sales-price'] ?? 0);
          ((s as any).property_renovation_value = (s as any).property_renovation_value ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-renovation-value'] ?? 0);
          ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = ((s as any).temp_hpVars['j'] ?? 0) + (1);
        }
      }
      ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = ((s as any).temp_hpVars['i'] ?? 0) + (1);
    } while (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['i_max']);
  }
  (s as any).temp_hpVars = undefined;
  return;
  scene.build();
}

function enterGetAccessibleProperties(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = 0;
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i_max'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['i_max'] > 0) {
    do {
      ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['code'] = qspUntranslated(s, "accessible_property_codes[temp_hpVars['i']]", { location: "homes_properties" });
      if (((s as any).home_name ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] !== ''  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] > 0) {
        if ((String((s as any).locArgs?.[1] ?? '') !== 'home'  &&  ((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-is-home'] === 0)  ||  (String((s as any).locArgs?.[1] ?? '') !== 'business'  &&  ((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-is-home'] === 1)) {
          ((s as any).property_code = (s as any).property_code ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).temp_hpVars ?? 0)?.['code']);
          ((s as any).property_name = (s as any).property_name ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] ?? 0);
          if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
            ((s as any).property_display = (s as any).property_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['display_0'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-display'] ?? 0)));
          } else {
            ((s as any).property_display = (s as any).property_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['display'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-display'] ?? 0)));
          }
          if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).RENTED ?? 0)) {
            ((s as any).property_status_display = (s as any).property_status_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'You rent the ' + qspUntranslated(s, "property_display[temp_hpVars['j']]", { location: "homes_properties" }) + ' ' + ((((s as any).temp_hpVars ?? 0)?.['code'] === ((s as any).home ?? 0)?.['current']) ? ('where you currently live.') : ('which is currently empty.'));
          } else {
            if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).OWNED ?? 0)) {
              ((s as any).property_status_display = (s as any).property_status_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'You own the ' + qspUntranslated(s, "property_display[temp_hpVars['j']]", { location: "homes_properties" }) + ' ' + ((((s as any).temp_hpVars ?? 0)?.['code'] === ((s as any).home ?? 0)?.['current']) ? ('where you currently live.') : ('which is currently empty.'));
            } else {
              if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === ((s as any).TENANTS ?? 0)) {
                ((s as any).property_status_display = (s as any).property_status_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'You own the ' + qspUntranslated(s, "property_display[temp_hpVars['j']]", { location: "homes_properties" }) + ' which is currently occupied by your tenants';
              } else {
                ((s as any).property_status_display = (s as any).property_status_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'You can stay at the ' + qspUntranslated(s, "property_display[temp_hpVars['j']]", { location: "homes_properties" }) + ' which is currently occupied by your tenants';
              }
            }
          }
          ((s as any).property_status = (s as any).property_status ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.[(((s as any).temp_hpVars ?? 0)?.['code'])] ?? 0);
          ((s as any).property_construction_status = (s as any).property_construction_status ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-construction-status'] ?? 0);
          ((s as any).property_is_renovated = (s as any).property_is_renovated ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-renovated'] ?? 0);
          ((s as any).property_type = (s as any).property_type ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-type'] ?? 0);
          ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = ((s as any).temp_hpVars['j'] ?? 0) + (1);
        }
      }
      ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = ((s as any).temp_hpVars['i'] ?? 0) + (1);
    } while (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['i_max']);
  }
  (s as any).temp_hpVars = undefined;
  scene.build();
}

function enterGetPropertiesForSale(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['max_i'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['max_i'] <= 0) {
    alert('ERROR: homes_properties, get_properties_for_sale: homes array is empty');
    (s as any).temp_hpacVars = undefined;
    return;
  }
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = 0;
  (s as any).checked_homes = undefined;
  do {
    ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['code'] = qspUntranslated(s, "homes[temp_hpVars['i']]", { location: "homes_properties" });
    if (((s as any).temp_hpVars ?? 0)?.['code'] !== ''  &&  ((s as any).checked_homes ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 0  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] < 2) {
      ((s as any).checked_homes = (s as any).checked_homes ?? {})[(((s as any).temp_hpVars ?? 0)?.['code'])] = 1;
      if (((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') {
        qspCall(s, 'homes_properties_attr', 'get_property_attr', (((s as any).temp_hpVars ?? 0)?.['code']));
      }
      if (((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') {
        ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['is_home'] = qspUntranslated(s, "instr(property['type'], 'residence') > 0", { location: "homes_properties" });
      } else {
        ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['is_home'] = ((String((((s as any).accessible_property ?? 0)?.[String(qspUntranslated(s, "$\u00000\u0000", { location: "homes_properties" })) + '-type'])).indexOf(String('residence'))) + 1) > 0;
      }
      ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['price'] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? (qspUntranslated(s, "property['price'] > 0", { location: "homes_properties" })) : (((s as any).accessible_property ?? 0)['' + qspUntranslated(s, "$\u00000\u0000", { location: "homes_properties" }) + '-sales-price'] > 0));
      if (((String((s as any).locArgs?.[1] ?? '') !== 'home'  &&  ((s as any).temp_hpVars ?? 0)?.['is_home'] === 0)  ||  (String((s as any).locArgs?.[1] ?? '') !== 'business'  &&  ((s as any).temp_hpVars ?? 0)?.['is_home']))  &&  ((s as any).temp_hpVars ?? 0)?.['price']) {
        ((s as any).property_code = (s as any).property_code ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).temp_hpVars ?? 0)?.['code']);
        ((s as any).property_name = (s as any).property_name ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['name'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] ?? 0)));
        ((s as any).property_type = (s as any).property_type ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['type'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-type'] ?? 0)));
        if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
          ((s as any).property_display = (s as any).property_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['display_0'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-display'] ?? 0)));
        } else {
          ((s as any).property_display = (s as any).property_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['display'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-display'] ?? 0)));
        }
        ((s as any).property_is_rented = (s as any).property_is_rented ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = qspUntranslated(s, "accessible_property[temp_hpVars['code']] = 1", { location: "homes_properties" });
        ((s as any).property_construction_status = (s as any).property_construction_status ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? (0) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-construction-status'] ?? 0)));
        ((s as any).property_is_renovated = (s as any).property_is_renovated ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? (0) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-renovated'] ?? 0)));
        ((s as any).property_sales_price = (s as any).property_sales_price ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['price'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-sales-price'] ?? 0)));
        ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = ((s as any).temp_hpVars['j'] ?? 0) + (1);
      }
      (s as any).property = undefined;
    }
    ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = ((s as any).temp_hpVars['i'] ?? 0) + (1);
    (s as any).checked_homes = undefined;
    (s as any).temp_hpVars = undefined;
  } while (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['max_i']);
  scene.build();
}

function enterGetPropertiesForRent(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['max_i'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['max_i'] <= 0) {
    alert('ERROR: homes_properties, get_properties_for_rent: homes array is empty');
    (s as any).temp_hpacVars = undefined;
    return;
  }
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = 0;
  (s as any).checked_homes = undefined;
  do {
    ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['code'] = qspUntranslated(s, "homes[temp_hpVars['i']]", { location: "homes_properties" });
    if (((s as any).temp_hpVars ?? 0)?.['code'] !== ''  &&  ((s as any).checked_homes ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 0  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 0) {
      ((s as any).checked_homes = (s as any).checked_homes ?? {})[(((s as any).temp_hpVars ?? 0)?.['code'])] = 1;
      if (((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') {
        qspCall(s, 'homes_properties_attr', 'get_property_attr', (((s as any).temp_hpVars ?? 0)?.['code']));
      }
      if (((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') {
        ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['is_home'] = qspUntranslated(s, "instr(property['type'], 'residence') > 1", { location: "homes_properties" });
      } else {
        ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['is_home'] = ((String((((s as any).accessible_property ?? 0)?.[String(qspUntranslated(s, "$\u00000\u0000", { location: "homes_properties" })) + '-type'])).indexOf(String('residence'))) + 1) > 1;
      }
      ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['is_rental'] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? (qspUntranslated(s, "property['rental'] = 1", { location: "homes_properties" })) : (((s as any).accessible_property ?? 0)['' + qspUntranslated(s, "$\u00000\u0000", { location: "homes_properties" }) + '-rental'] = 1));
      if (((String((s as any).locArgs?.[1] ?? '') !== 'home'  &&  ((s as any).temp_hpVars ?? 0)?.['is_home'] === 0)  ||  (String((s as any).locArgs?.[1] ?? '') !== 'business'  &&  ((s as any).temp_hpVars ?? 0)?.['is_home']))  &&  ((s as any).temp_hpVars ?? 0)?.['is_rental']) {
        ((s as any).property_code = (s as any).property_code ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).temp_hpVars ?? 0)?.['code']);
        ((s as any).property_name = (s as any).property_name ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['name'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] ?? 0)));
        if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
          ((s as any).property_display = (s as any).property_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['display_0'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-display'] ?? 0)));
        } else {
          ((s as any).property_display = (s as any).property_display ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['display'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-display'] ?? 0)));
        }
        ((s as any).property_days = (s as any).property_days ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? (0) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-days-left'] ?? 0)));
        ((s as any).property_rent = (s as any).property_rent ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = ((((s as any).accessible_property ?? 0)[(((s as any).temp_hpVars ?? 0)?.['code']) + '-name'] === '') ? ((((s as any).property ?? 0)?.['rent'])) : ((((s as any).accessible_property ?? 0)?.['' + (((s as any).temp_hpVars ?? 0)?.['code']) + '-rent'] ?? 0)));
        ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = ((s as any).temp_hpVars['j'] ?? 0) + (1);
      }
      (s as any).property = undefined;
    }
    ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = ((s as any).temp_hpVars['i'] ?? 0) + (1);
    (s as any).checked_homes = undefined;
    (s as any).temp_hpVars = undefined;
    return;
  } while (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['max_i']);
  scene.build();
}

function enterGetInternetEnabledProperties(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).hp_i = 0;
  (s as any).hp_j = 0;
  (s as any).count = 0;
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['max_i'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['max_i'] <= 0) {
    alert('ERROR: homes_properties, get_internet_enabled_properties: homes array is empty');
    (s as any).temp_hpacVars = undefined;
    return;
  }
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = 0;
  ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = 0;
  (s as any).checked_homes = undefined;
  do {
    ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['code'] = qspUntranslated(s, "homes[temp_hpVars['i']]", { location: "homes_properties" });
    if (((s as any).checked_homes ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 0) {
      ((s as any).checked_homes = (s as any).checked_homes ?? {})[(((s as any).temp_hpVars ?? 0)?.['code'])] = 1;
      qspCall(s, 'homes_properties_attr', 'get_property_attr', (((s as any).temp_hpVars ?? 0)?.['code']));
      if (((s as any).property ?? 0)?.['internet_enabled']) {
        if ((String((s as any).locArgs?.[1] ?? '') !== 'home'  &&  ((String(((s as any).property ?? 0)?.['type']).indexOf(String('residence'))) + 1) === 0)  ||  (String((s as any).locArgs?.[1] ?? '') !== 'business'  &&  ((String(((s as any).property ?? 0)?.['type']).indexOf(String('residence'))) + 1) > 0)) {
          if ((String((s as any).locArgs?.[2] ?? '') === 'hasaccess'  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] !== 0  &&  ((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] !== 4)  ||  String((s as any).locArgs?.[2] ?? '') === '') {
            ((s as any).property_name = (s as any).property_name ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).property ?? 0)?.['name']);
            ((s as any).property_code = (s as any).property_code ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = (((s as any).temp_hpVars ?? 0)?.['code']);
            if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 0) {
              ((s as any).property_status_label = (s as any).property_status_label ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'no access';
            } else {
              if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 1) {
                ((s as any).property_status_label = (s as any).property_status_label ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'rented';
              } else {
                if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 2) {
                  ((s as any).property_status_label = (s as any).property_status_label ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'owned';
                } else {
                  if (((s as any).accessible_property ?? 0)[((s as any).temp_hpVars ?? 0)?.['code']] === 3) {
                    ((s as any).property_status_label = (s as any).property_status_label ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = 'tenants';
                  }
                }
              }
            }
            ((s as any).property__is_current_home = (s as any).property__is_current_home ?? {})[(((s as any).temp_hpVars ?? 0)?.['j'])] = qspUntranslated(s, "home['current'] = temp_hpVars['code']", { location: "homes_properties" });
            ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['j'] = ((s as any).temp_hpVars['j'] ?? 0) + (1);
          }
        }
      }
      (s as any).property = undefined;
    }
    ((s as any).temp_hpVars = (s as any).temp_hpVars ?? {})['i'] = ((s as any).temp_hpVars['i'] ?? 0) + (1);
    (s as any).checked_homes = undefined;
    (s as any).temp_hpVars = undefined;
    return;
  } while (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['max_i']);
  scene.build();
}

function enterCleanUpPropertyData(s: GameState, scene: SceneBuilder): void {
  (s as any).property_rent = undefined;
  (s as any).property_days = undefined;
  (s as any).property_code = undefined;
  (s as any).property_status = undefined;
  (s as any).property_status_label = undefined;
  (s as any).property_name = undefined;
  (s as any).property_display = undefined;
  (s as any).property_type = undefined;
  (s as any).property_status_display = undefined;
  (s as any).property_is_rented = undefined;
  (s as any).property_construction_status = undefined;
  (s as any).property_is_renovated = undefined;
  (s as any).property_sales_price = undefined;
  (s as any).property_renovation_value = undefined;
  (s as any).property__is_current_home = undefined;
  return;
  scene.build();
}

function enterSetHomeless(s: GameState, scene: SceneBuilder): void {
  (s as any).home = undefined;
  ((s as any).home = (s as any).home ?? {})['current'] = 'homeless';
  return;
  scene.build();
}

function enterGiveAccess(s: GameState, scene: SceneBuilder): void {
  (s as any).accesscode = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : (((s as any).locArgs?.[1] ?? 0)));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).accesscode ?? 0), ((s as any).ACCESSIBLE ?? 0)]; enterSetAccess(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1  &&  ((s as any).accessible_property ?? 0)[(((s as any).accesscode ?? 0)) + '-is-home'] === 1  &&  (((s as any).home ?? 0)?.['current'] === ''  ||  qspFunc(s, 'homes_properties', 'is_homeless'))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).accesscode ?? 0)]; enterSetHome(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).accesscode = undefined;
  return;
  scene.build();
}

function enterBlockAccess(s: GameState, scene: SceneBuilder): void {
  (s as any).blockcode = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : (((s as any).locArgs?.[1] ?? 0)));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).blockcode ?? 0), ((s as any).NO_ACCESS ?? 0)]; enterSetAccess(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1  &&  (((s as any).home ?? 0)?.['current'] === ''  ||  qspFunc(s, 'homes_properties', 'is_homeless'))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'home']; enterGetAccessibleProperties(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).accessible_property ?? 0)[(((s as any).property_code ?? 0)) + '-is-home'] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).property_code ?? 0)]; enterSetHome(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] < 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetHomeless(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  (s as any).blockcode = undefined;
  return;
  scene.build();
}

function enterHasAccess(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0);
  }
  (s as any).result = ((s as any).accessible_property ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== ((s as any).NO_ACCESS ?? 0)  &&  ((s as any).accessible_property ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== ((s as any).TENANTS ?? 0);
  return;
  scene.build();
}

function enterGetPropertySalesInfo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '-name'] === '') {
    qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).property ?? 0)?.['construction_needed'] === 1) {
    (s as any).property_display = ((((s as any).accessible_property ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '-name'] === '') ? ((((s as any).property ?? 0)?.['display_0'])) : ((((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-display'])));
  } else {
    (s as any).property_display = ((((s as any).accessible_property ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '-name'] === '') ? ((((s as any).property ?? 0)?.['display'])) : ((((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-display'])));
  }
  (s as any).property_sales_price = ((((s as any).accessible_property ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '-name'] === '') ? ((((s as any).property ?? 0)?.['price'])) : ((((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-sales-price'])));
  (s as any).property = undefined;
  return;
  scene.build();
}

function enterBuyProperty(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).OWNED ?? 0)]; enterSetAccess(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '-sales-price'] = ((s as any).locArgs?.[2] ?? 0);
  return;
  scene.build();
}

function enterSellProperty(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).NO_ACCESS ?? 0)]; enterSetAccess(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '-sales-price'] = ((s as any).locArgs?.[2] ?? 0);
  return;
  scene.build();
}

function enterTenantsMoveIn(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).TENANTS ?? 0)]; enterSetAccess(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '-tenant-day'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '-tenant-month'] = ((s as any).locArgs?.[3] ?? 0);
  if ((((s as any).home ?? 0)?.['current'] === ''  ||  qspFunc(s, 'homes_properties', 'is_homeless'))  &&  ((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'home']; enterGetAccessibleProperties(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).accessible_property ?? 0)[(((s as any).property_code ?? 0)) + '-is-home']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).property_code ?? 0)]; enterSetHome(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  scene.build();
}

function enterTenantsMoveOut(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 2]; enterSetAccess(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).home ?? 0)?.['current'] === ''  &&  ((s as any).accessible_property ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '-is-home'] === 1  &&  ((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterSetHome(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  return;
  scene.build();
}

function enterTenantMoveOutCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_text = '';
  (s as any).count = 0;
  (s as any).hp_i = 0;
  (s as any).hp_j = 0;
  if (((s as any).count ?? 0) > 0) {
    do {
      (s as any).tenantcode = (((s as any).accessible_property_codes ?? 0)?.[String((s as any).hp_i ?? 0)] ?? 0);
      if (((s as any).home_name ?? 0)?.[String((s as any).tenantcode ?? 0)] !== ''  &&  ((s as any).accessible_property ?? 0)?.[String((s as any).tenantcode ?? 0)] === 3) {
        if ((((s as any).accessible_property ?? 0)[(((s as any).tenantcode ?? 0)) + '-tenant-day'] === ((s as any).day ?? 0))  &&  ((s as any).accessible_property ?? 0)[(((s as any).tenantcode ?? 0)) + '-tenant-month'] === ((s as any).month ?? 0)) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).tenantcode ?? 0), ((s as any).OWNED ?? 0)]; enterSetAccess(s, scene); (s as any).locArgs = __savedLocArgs; }
          (s as any).temp_text = ((s as any).temp_text ?? 0) + (qspFunc(s, 'wrap', 'v_neg b', '<br>Your tenants have moved out from your ' + (((s as any).accessible_property ?? 0)[((s as any).tenantcode ?? 0)-((s as any).display ?? 0)]) + '  &&  your apartment is now vacant.'));
          (s as any).hp_j = ((s as any).hp_j ?? 0) + (1);
        }
      }
      (s as any).hp_i = ((s as any).hp_i ?? 0) + (1);
      (s as any).property = undefined;
    } while (((s as any).hp_i ?? 0) < ((s as any).count ?? 0));
  }
  if ((String(((s as any).temp_text ?? 0)).length) > 0) {
    (s as any).temp_text = (String(((s as any).temp_text ?? 0)).slice((5)-1));
  }
  scene.text(`${((s as any).temp_text ?? '')}`);
  if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1  &&  (((s as any).home ?? 0)?.['current'] === ''  ||  qspFunc(s, 'homes_properties', 'is_homeless'))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'home']; enterGetAccessibleProperties(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).accessible_property ?? 0)[(((s as any).property_code ?? 0)) + '-is-home'] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).property_code ?? 0)]; enterSetHome(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).hp_i = undefined;
  (s as any).hp_j = undefined;
  (s as any).count = undefined;
  (s as any).temp_text = undefined;
  return;
  scene.build();
}

function enterGetPropertySalesPrice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '-name'] !== '') {
    (s as any).result = (((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-sales-price']);
  } else {
    qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).locArgs?.[1] ?? 0));
    (s as any).result = (((s as any).property ?? 0)?.['price']);
    (s as any).property = undefined;
  }
  return;
  scene.build();
}

function enterRentProperty(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).RENTED ?? 0)]; enterSetAccess(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterSetRentDays(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCancelRent(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).NO_ACCESS ?? 0)]; enterSetAccess(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), (-1)]; enterSetRentDays(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1  &&  (((s as any).home ?? 0)?.['current'] === ''  ||  qspFunc(s, 'homes_properties', 'is_homeless'))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'home']; enterGetAccessibleProperties(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).accessible_property ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '-is-home'] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).property_code ?? 0)]; enterSetHome(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanUpPropertyData(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  scene.build();
}

function enterPayRent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', (((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-rent']), ((s as any).locArgs?.[2] ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAddRentDays(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterAddRentDays(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '-days-left'] = ((s as any).accessible_property[String(((s as any).locArgs?.[1] ?? 0)) + '-days-left'] ?? 0) + (qspFunc(s, 'homes_properties', 'days_in_month'));
  } else {
    ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '-days-left'] = ((s as any).accessible_property[String(((s as any).locArgs?.[1] ?? 0)) + '-days-left'] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
  }
  return;
  scene.build();
}

function enterSetRentDays(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '-days-left'] = qspFunc(s, 'homes_properties', 'days_in_month');
  } else {
    ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '-days-left'] = ((s as any).locArgs?.[2] ?? 0);
  }
  return;
  scene.build();
}

function enterSetRentAmount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '-rental']  &&  String((s as any).locArgs?.[2] ?? '') >= 0) {
    ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '-rent'] = ((s as any).locArgs?.[2] ?? 0);
  }
  return;
  scene.build();
}

function enterGetRentDays(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-days-left']);
  return;
  scene.build();
}

function enterGetRentAmount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '-name'] !== '') {
    (s as any).result = (((s as any).accessible_property ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-rent']);
  } else {
    qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).locArgs?.[1] ?? 0));
    (s as any).result = (((s as any).property ?? 0)?.['rent']);
    (s as any).property = undefined;
  }
  return;
  scene.build();
}

function enterProgressPropertyRentTime(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '', 1]; enterGetRentedProperties(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).count = 0;
  (s as any).hp_i = 0;
  if (((s as any).count ?? 0) > 0) {
    do {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).property_code ?? 0)?.[String((s as any).hp_i ?? 0)] ?? 0), (-1)]; enterAddRentDays(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).hp_i = ((s as any).hp_i ?? 0) + (1);
    } while (((s as any).hp_i ?? 0) < ((s as any).count ?? 0));
  }
  (s as any).property_code = undefined;
  (s as any).count = undefined;
  (s as any).hp_i = undefined;
  return;
  scene.build();
}

function enterDaysInMonth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).monthsend ?? 0)[1] === 0) {
    qspCall(s, 'time', 'init_monthends');
  }
  (s as any).result = (((s as any).monthsend ?? 0)?.[String((s as any).month ?? 0)] ?? 0);
  return;
  scene.build();
}

function enterGetPropertyConstructionStatus(s: GameState, scene: SceneBuilder): void {
  (s as any).constrstatcheckpropcode = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  (s as any).result = (((s as any).accessible_property ?? 0)?.[String(((s as any).constrstatcheckpropcode ?? 0)) + '-construction-status']);
  (s as any).constrstatcheckpropcode = undefined;
  return;
  scene.build();
}

function enterProgressConstructionStatus(s: GameState, scene: SceneBuilder): void {
  (s as any).constrstatpropcode = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  if (((s as any).accessible_property ?? 0)[(((s as any).constrstatpropcode ?? 0)) + '-construction-status'] < 2) {
    ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).constrstatpropcode ?? 0)) + '-construction-status'] = ((s as any).accessible_property[String(((s as any).constrstatpropcode ?? 0)) + '-construction-status'] ?? 0) + (1);
  }
  (s as any).constrstatpropcode = undefined;
  return;
  scene.build();
}

function enterIsPropertyRenovated(s: GameState, scene: SceneBuilder): void {
  (s as any).checkrenpropcode = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  (s as any).result = (((s as any).accessible_property ?? 0)?.[String(((s as any).checkrenpropcode ?? 0)) + '-renovated']);
  (s as any).checkrenpropcode = undefined;
  return;
  scene.build();
}

function enterRenovateProperty(s: GameState, scene: SceneBuilder): void {
  (s as any).renovatepropcode = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).renovatepropcode ?? 0)) + '-renovated'] = 1;
  ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).renovatepropcode ?? 0)) + '-renovation-value'] = ((s as any).accessible_property[String(((s as any).renovatepropcode ?? 0)) + '-renovation-value'] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
  if (String((s as any).locArgs?.[3] ?? '') !== '') {
    ((s as any).accessible_property = (s as any).accessible_property ?? {})[String(((s as any).renovatepropcode ?? 0)) + '-renovations'] = ((s as any).accessible_property[String(((s as any).renovatepropcode ?? 0)) + '-renovations'] ?? 0) + (';' + ((s as any).locArgs?.[3] ?? 0) + '');
  }
  (s as any).renovatepropcode = undefined;
  return;
  scene.build();
}

function enterGoHome(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'homes_properties', 'is_homeless')  ||  ((s as any).home ?? 0)?.['region'] !== ((s as any).region ?? 0)) {
    // TODO-QSP: dynamic($train_station[$region])
  } else {
    if (hasLocation(((s as any).home ?? 0)?.['location'])) {
      dynamicGoto(s, (((s as any).home ?? {}))['location'], (((s as any).home ?? {}))['location_arg']);
    } else {
      scene.text(`Home Error: home location '${(((s as any).home ?? 0)?.['location'] ?? '')}' does not exist.`);
    }
  }
  return;
  scene.build();
}

function enterGoStraightHome(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'homes_properties', 'is_homeless')  ||  ((s as any).home ?? 0)?.['region'] !== ((s as any).region ?? 0)) {
    // TODO-QSP: dynamic($train_station[$region])
  } else {
    if (hasLocation(((s as any).home ?? 0)?.['entrance'])) {
      dynamicGoto(s, (((s as any).home ?? {}))['entrance'], (((s as any).home ?? {}))['entrance_arg']);
    } else {
      scene.text(`Home Error: home entrance '${(((s as any).home ?? 0)?.['entrance'] ?? '')}' does not exist.`);
    }
  }
  return;
  scene.build();
}

function enterGoBathroom(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_prop_code = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  if (((s as any).temp_prop_code ?? 0) === '') {
    (s as any).temp_prop_code = (((s as any).home ?? 0)?.['code']);
  }
  qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).temp_prop_code ?? 0));
  if (hasLocation(((s as any).property ?? 0)?.['bathroom'])) {
  } else {
    scene.text(`Home Error: bathroom location '${(((s as any).property ?? 0)?.['bathroom'] ?? '')}' does not exist.`);
  }
  return;
  scene.build();
}

function enterGoBedroom(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_prop_code = ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)));
  if (((s as any).temp_prop_code ?? 0) === '') {
    (s as any).temp_prop_code = (((s as any).home ?? 0)?.['code']);
  }
  qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).temp_prop_code ?? 0));
  if (hasLocation(((s as any).property ?? 0)?.['bedroom'])) {
  } else {
    scene.text(`Home Error: bedroom location '${(((s as any).property ?? 0)?.['bedroom'] ?? '')}' does not exist.`);
  }
  return;
  scene.build();
}

function enterFreeInternetAvailable(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties_attr', 'get_property_attr', ((String((s as any).locArgs?.[1] ?? '') === '') ? ((((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] ?? 0)) : ((((s as any).home_name ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0))));
  (s as any).result = qspUntranslated(s, "property['free_internet'] = 1", { location: "homes_properties" });
  (s as any).property = undefined;
  return;
  scene.build();
}

function enterGetHomeDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['current'] === 'city_apartment') {
    (s as any).result = 'your apartment';
  } else {
    if (((s as any).home ?? 0)?.['location'] === 'pav_complex') {
      (s as any).result = 'your apartment block';
    } else {
      if (((s as any).home ?? 0)?.['current'] === 'village_cottage') {
        (s as any).result = 'your cottage';
      } else {
        if (((s as any).home ?? 0)?.['current'] === 'old_town_apartment') {
          (s as any).result = 'your apartment building at Okhlopkov Square';
        } else {
          if (((s as any).home ?? 0)?.['current'] === 'matryona_mansion') {
            (s as any).result = 'the entrance to your mansion';
          } else {
            if (((s as any).home ?? 0)?.['current'] === 'pavlovsk_hotel') {
              (s as any).result = 'the hotel at Pavlovsk market.';
            } else {
              if (((s as any).home ?? 0)?.['current'] === 'maid_bedroom') {
                (s as any).result = 'Tanya\'s apartment';
              } else {
                if (((s as any).home ?? 0)?.['current'] === 'niko_apartment') {
                  (s as any).result = 'Niko\'s apartment block';
                } else {
                  if (((s as any).home ?? 0)?.['current'] === 'lyceum_dorm') {
                    (s as any).result = 'High Street in the Pavlovsk Commercial District';
                  } else {
                    if (((s as any).home ?? 0)?.['current'] === 'university_dorm') {
                      (s as any).result = 'your dorm';
                    } else {
                      if (((s as any).home ?? 0)?.['town'] === 'gadukino') {
                        (s as any).result = 'the street in Gadukino';
                      } else {
                        if (((s as any).home ?? 0)?.['current'] === 'city_house') {
                          (s as any).result = 'your house';
                        } else {
                          if (((s as any).home ?? 0)?.['current'] === 'meynold_household') {
                            (s as any).result = 'the Meynold Residence';
                          } else {
                            (s as any).result = 'the city center';
                          }
                        }
                      }
                    }
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).NO_ACCESS = 0;
  (s as any).RENTED = 1;
  (s as any).OWNED = 2;
  (s as any).TENANTS = 3;
  (s as any).ACCESSIBLE = 4;
  (s as any).PURCHASED = 5;
  if (Object.keys((s as any).homes ?? {}).length < 16  ||  Object.keys((s as any).home_name ?? {}).length < 7) {
    qspCall(s, 'homes_properties_attr', '');
  }
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
  title: '<br>Your tenants have moved out from your -display\']>> and y',
  region: 'other',
  enter: enter,
};
