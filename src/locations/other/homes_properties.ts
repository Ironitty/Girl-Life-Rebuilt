import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCalculateRentablePropertyCount(s: GameState, scene: SceneBuilder): void {
  (s as any).accessible_property['rentable_home_count'] = 0;
  (s as any).accessible_property['rentable_business_count'] = 0;
  (s as any).accessible_property['rentable_other_count'] = 0;
  (s as any).temp_hpVars['max_i'] = 0;
  if (((s as any).temp_hpVars ?? 0)?.['max_i'] <= 0) {
    return;
  }
  (s as any).temp_hpVars['i'] = 0;
  // TODO-QSP: :get_rentable_property_count_loop
  // TODO-QSP: gs 'homes_properties_attr', 'get_property_attr', $homes[temp_hpVars['i']]
  if (((s as any).property ?? 0)?.['rental']) {
    if (((qspUntranslated(s, "\u00000\u0000", { location: "homes_properties" })).indexOf(('residence'))) + 1 > 0) {
      (s as any).accessible_property['rentable_home_count'] = ((s as any).accessible_property['rentable_home_count'] ?? 0) + (1);
    } else {
      (s as any).accessible_property['rentable_business_count'] = ((s as any).accessible_property['rentable_business_count'] ?? 0) + (1);
      (s as any).accessible_property['rentable_other_count'] = ((s as any).accessible_property['rentable_other_count'] ?? 0) + (1);
    }
  }
  (s as any).temp_hpVars['i'] = ((s as any).temp_hpVars['i'] ?? 0) + (1);
  if (((s as any).temp_hpVars ?? 0)?.['i'] < ((s as any).temp_hpVars ?? 0)?.['max_i']) {
    // TODO-QSP: jump 'get_rentable_property_count_loop'
  }
  (s as any).accessible_property['available_for_rent_home_count'] = ((s as any).accessible_property ?? 0)?.['rentable_home_count'];
  (s as any).accessible_property['available_for_rent_business_count'] = ((s as any).accessible_property ?? 0)?.['rentable_business_count'];
  return;
  scene.build();
}

function enterSetHome(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_homepropcode ?? 0) !== '') {
    qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).temp_homepropcode ?? 0));
    if (((qspUntranslated(s, "\u00000\u0000", { location: "homes_properties" })).indexOf(('residence'))) + 1 > 0) {
      // TODO-QSP: copyarr 'home', 'property'
      (s as any).home['current'] = ((s as any).property ?? 0)?.['code'];
      if (((s as any).accessible_property ?? 0)[((s as any).home ?? 0)?.['current']] === 0) {
        // TODO-QSP: gs 'homes_properties', 'set_access', $home['current'], 1
      }
    }
  }
  return;
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
        (s as any).accessible_property[String((s as any)._construction_state ?? 0)] = qspUntranslated(s, "ARGS[3]", { location: "homes_properties" });
        // TODO-QSP: $accessible_property[$_display] = $property['display_<<ARGS[3]>>']
      } else {
        (s as any).accessible_property[String((s as any)._construction_state ?? 0)] = 2;
        // TODO-QSP: $accessible_property[$_display] = $property['display']
      }
      if (((qspUntranslated(s, "\u00000\u0000", { location: "homes_properties" })).indexOf(('residence'))) + 1 > 0) {
        (s as any).accessible_property[String((s as any)._is_home ?? 0)] = 1;
      }
      (s as any).accessible_property[String((s as any)._is_rental ?? 0)] = ((s as any).property ?? 0)?.['rental'];
      (s as any).accessible_property[String((s as any)._renovated ?? 0)] = qspUntranslated(s, "ARGS[4]", { location: "homes_properties" });
      (s as any).accessible_property[String((s as any)._sales_price ?? 0)] = ((s as any).property ?? 0)?.['price'];
      (s as any).accessible_property[String((s as any)._rent ?? 0)] = ((s as any).property ?? 0)?.['rent'];
    }
    if (((s as any).new_access_code ?? 0) === ((s as any).ACCESSIBLE ?? 0)  &&  ((s as any).property ?? 0)?.['rental'] === 1) {
      (s as any).new_access_code = ((s as any).RENTED ?? 0);
    }
    (s as any).accessible_property[String((s as any).property_code ?? 0)] = ((s as any).new_access_code ?? 0);
    if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).NO_ACCESS ?? 0)) {
      if (((s as any).home ?? 0)?.['current'] === ((s as any).property_code ?? 0)) {
        // TODO-QSP: killvar 'home'
      }
      if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
        if (((s as any).original_access_code ?? 0) === ((s as any).RENTED ?? 0)) {
          (s as any).accessible_property['rental_home_count'] = ((s as any).accessible_property['rental_home_count'] ?? 0) - (1);
          (s as any).accessible_property['available_for_rent_home_count'] = ((s as any).accessible_property['available_for_rent_home_count'] ?? 0) + (1);
        }
        if (((s as any).original_access_code ?? 0) === ((s as any).OWNED ?? 0)) {
          (s as any).accessible_property['owned_home_count'] = ((s as any).accessible_property['owned_home_count'] ?? 0) - (1);
        }
        if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2) {
          (s as any).accessible_property['furnishable_home_count'] = ((s as any).accessible_property['furnishable_home_count'] ?? 0) - (1);
        }
        (s as any).accessible_property['accessible_home_count'] = ((s as any).accessible_property['accessible_home_count'] ?? 0) - (1);
      }
      if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] === 1) {
        qspCall(s, 'homes_properties', 'get_accessible_properties', 'home');
        if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
          qspCall(s, 'homes_properties', 'set_home', ((s as any).property_code ?? 0));
        }
        qspCall(s, 'homes_properties', 'clean_up_property_data');
      }
    } else {
      if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
        (s as any).accessible_property['rental_home_count'] = ((s as any).accessible_property['rental_home_count'] ?? 0) + (1);
        (s as any).accessible_property['accessible_home_count'] = ((s as any).accessible_property['accessible_home_count'] ?? 0) + (1);
        (s as any).accessible_property['available_for_rent_home_count'] = ((s as any).accessible_property['available_for_rent_home_count'] ?? 0) - (1);
        if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2) {
          (s as any).accessible_property['furnishable_home_count'] = ((s as any).accessible_property['furnishable_home_count'] ?? 0) + (1);
        }
      }
      if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).OWNED ?? 0)) {
        if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
          if ((!((s as any).original_access_code ?? 0))) {
            (s as any).accessible_property['accessible_home_count'] = ((s as any).accessible_property['accessible_home_count'] ?? 0) + (1);
          } else {
            (s as any).accessible_property['rental_home_count'] = ((s as any).accessible_property['rental_home_count'] ?? 0) - (1);
            (s as any).accessible_property['available_for_rent_home_count'] = ((s as any).accessible_property['available_for_rent_home_count'] ?? 0) + (1);
            if (((s as any).original_access_code ?? 0) === ((s as any).TENANTS ?? 0)) {
              (s as any).accessible_property['tenant_home_count'] = ((s as any).accessible_property['tenant_home_count'] ?? 0) - (1);
              (s as any).accessible_property[String((s as any)._tenant_day ?? 0)] = (-1);
              (s as any).accessible_property[String((s as any)._tenant_month ?? 0)] = (-1);
            }
            if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2  &&  ((s as any).original_access_code ?? 0) !== 1) {
              (s as any).accessible_property['furnishable_home_count'] = ((s as any).accessible_property['furnishable_home_count'] ?? 0) + (1);
            }
            (s as any).accessible_property['owned_home_count'] = ((s as any).accessible_property['owned_home_count'] ?? 0) + (1);
          }
        } else {
          if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
            if (((s as any).home ?? 0)?.['current'] === ((s as any).property_code ?? 0)) {
              // TODO-QSP: killvar 'home'
            }
            (s as any).accessible_property['tenant_home_count'] = ((s as any).accessible_property['tenant_home_count'] ?? 0) + (1);
            (s as any).accessible_property['owned_home_count'] = ((s as any).accessible_property['owned_home_count'] ?? 0) - (1);
            (s as any).accessible_property['accessible_home_count'] = ((s as any).accessible_property['accessible_home_count'] ?? 0) - (1);
            if (((s as any).accessible_property ?? 0)?.[String((s as any)._construction_state ?? 0)] === 2) {
              (s as any).accessible_property['furnishable_home_count'] = ((s as any).accessible_property['furnishable_home_count'] ?? 0) - (1);
            }
          }
          if (((s as any).accessible_property ?? 0)?.[String((s as any).property_code ?? 0)] === ((s as any).ACCESSIBLE ?? 0)) {
            if (((s as any).accessible_property ?? 0)?.[String((s as any)._is_home ?? 0)] === 1) {
              (s as any).accessible_property['accessible_home_count'] = ((s as any).accessible_property['accessible_home_count'] ?? 0) + (1);
            }
          }
          if ((!((s as any).nokill ?? 0))) {
            // TODO-QSP: killvar 'property'
          }
        }
        return;
      }
    }
  }
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
    default:
      enterCalculateRentablePropertyCount(s, scene);
      break;
  }
}

export const homes_properties: LocationDef = {
  name: 'homes_properties',
  title: '<br>Your tenants have moved out from your <<$accessible_property[\'<<$tenantcode>>-display\']>> and your apartment is now vacant.',
  region: 'other',
  enter: enter,
};
