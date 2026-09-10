import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'city_apartment') {
    (s as any).property['id'] = 1;
    (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
    (s as any).property['name'] = 'City residential apartment';
    (s as any).property['display'] = 'apartment in St. Petersburg\'s residential area';
    (s as any).property['region'] = 'city';
    (s as any).property['town'] = 'city';
    (s as any).property['location'] = 'city_residential';
    (s as any).property['location_arg'] = '';
    (s as any).property['entrance'] = 'korr';
    (s as any).property['entrance_arg'] = '';
    (s as any).property['bathroom'] = 'vanr';
    (s as any).property['bathroom_arg'] = '';
    (s as any).property['bedroom'] = 'bedr';
    (s as any).property['bedroom_arg'] = '';
    (s as any).property['type'] = 'permanent_residence';
    (s as any).property['price'] = 800000;
    (s as any).property['rent'] = 15000;
    (s as any).property['rental'] = 1;
    (s as any).property['internet_enabled'] = 1;
    (s as any).property['can_be_renovated'] = 1;
  } else {
    (s as any).property['id'] = 2;
    (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
    (s as any).property['name'] = 'Parent\'s home in Pavlovsk';
    (s as any).property['display'] = 'parent\'s home in Pavlovsk';
    (s as any).property['region'] = 'pav';
    (s as any).property['town'] = 'pavlovsk';
    (s as any).property['location'] = 'pav_complex';
    (s as any).property['location_arg'] = 'start';
    (s as any).property['entrance'] = 'korrPar';
    (s as any).property['entrance_arg'] = 'start';
    (s as any).property['bathroom'] = 'vanrPar';
    (s as any).property['bathroom_arg'] = '';
    (s as any).property['bedroom'] = 'bedrPar';
    (s as any).property['bedroom_arg'] = 'start';
    (s as any).property['type'] = 'permanent_residence';
    (s as any).property['free_internet'] = 1;
    if (((s as any).locArgs?.[1] ?? 0) === 'village_cottage') {
      (s as any).property['id'] = 3;
      (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
      (s as any).property['name'] = 'My cottage in the cooperative village';
      (s as any).property['display'] = 'cottage located in the cooperative village';
      (s as any).property['region'] = 'other';
      (s as any).property['town'] = 'dachi';
      (s as any).property['location'] = 'dachamy';
      (s as any).property['location_arg'] = '';
      (s as any).property['entrance'] = 'dachamy';
      (s as any).property['entrance_arg'] = '';
      (s as any).property['bathroom'] = 'dachain';
      (s as any).property['bathroom_arg'] = 'dachabath';
      (s as any).property['bedroom'] = 'dachain';
      (s as any).property['bedroom_arg'] = 'start';
      (s as any).property['type'] = 'permanent_residence';
      (s as any).property['price'] = 150000;
      (s as any).property['internet_enabled'] = 0;
    } else {
      (s as any).property['id'] = 4;
      (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
      (s as any).property['name'] = 'Old town apartment';
      (s as any).property['display'] = 'apartment in the old town of Pushkin';
      (s as any).property['region'] = 'pushkin';
      (s as any).property['town'] = 'pushkin';
      (s as any).property['location'] = 'pushkin_sq';
      (s as any).property['location_arg'] = '';
      (s as any).property['entrance'] = 'korr2x';
      (s as any).property['entrance_arg'] = '';
      (s as any).property['bathroom'] = 'vanr2x';
      (s as any).property['bathroom_arg'] = '';
      (s as any).property['bedroom'] = 'bedr2x';
      (s as any).property['bedroom_arg'] = '';
      (s as any).property['type'] = 'permanent_residence';
      (s as any).property['rental'] = 1;
      (s as any).property['rent'] = 10000;
      (s as any).property['internet_enabled'] = 1;
      if (((s as any).locArgs?.[1] ?? 0) === 'matryona_mansion') {
        (s as any).property['id'] = 5;
        (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
        (s as any).property['name'] = 'Matryona mansion';
        (s as any).property['display_0'] = 'plot of land in the St. Petersburg\'s suburbs';
        (s as any).property['display_1'] = 'impressive mansion under construction in the St. Petersburg\'s suburbs';
        (s as any).property['display_2'] = 'impressive mansion in the St. Petersburg\'s suburbs';
        (s as any).property['display'] = ((s as any).property ?? 0)?.['display_' + String(((s as any).accessible_property ?? 0)?.[String(qspUntranslated(s, "args[1]", { location: "homes_properties_attr" })) + '-construction-status'])];
        (s as any).property['region'] = 'city';
        (s as any).property['town'] = 'city';
        (s as any).property['location'] = 'city_mansion_entrance';
        (s as any).property['location_arg'] = '';
        (s as any).property['entrance'] = 'city_mansion_residence_1';
        (s as any).property['entrance_arg'] = 'yfoyer';
        (s as any).property['bathroom'] = 'city_mansion_residence_1';
        (s as any).property['bathroom_arg'] = 'ybathroom';
        (s as any).property['bedroom'] = 'city_mansion_residence_1';
        (s as any).property['bedroom_arg'] = 'ybedroom';
        (s as any).property['type'] = 'permanent_residence';
        (s as any).property['price'] = 1500000;
        (s as any).property['internet_enabled'] = 1;
        (s as any).property['construction_needed'] = 1;
      } else {
        (s as any).property['id'] = 6;
        (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
        (s as any).property['name'] = 'My hotel room in Pavlovsk';
        (s as any).property['display'] = 'hotel room in Pavlovsk';
        (s as any).property['region'] = 'pav';
        (s as any).property['town'] = 'pavlovsk';
        (s as any).property['location'] = 'pav_market';
        (s as any).property['location_arg'] = '';
        (s as any).property['entrance'] = 'pav_hotel';
        (s as any).property['entrance_arg'] = '';
        (s as any).property['bathroom'] = 'HotelRoom';
        (s as any).property['bathroom_arg'] = 'shower1';
        (s as any).property['bedroom'] = 'HotelRoom';
        (s as any).property['bedroom_arg'] = 'normal';
        (s as any).property['type'] = 'temporary_residence';
        (s as any).property['free_internet'] = 1;
        if (((s as any).locArgs?.[1] ?? 0) === 'maid_bedroom') {
          (s as any).property['id'] = 7;
          (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
          (s as any).property['name'] = 'Nicholas\' Apartment';
          (s as any).property['display'] = 'maid bedroom in Nicholas\' apartment';
          (s as any).property['region'] = 'city';
          (s as any).property['town'] = 'city';
          (s as any).property['location'] = 'city_center';
          (s as any).property['location_arg'] = '';
          (s as any).property['entrance'] = 'nichBedroomServant';
          (s as any).property['entrance_arg'] = 'start';
          (s as any).property['bathroom'] = 'nichBathServant';
          (s as any).property['bathroom_arg'] = '';
          (s as any).property['bedroom'] = 'nichBedroomServant';
          (s as any).property['bedroom_arg'] = 'start';
          (s as any).property['type'] = 'permanent_residence';
          (s as any).property['free_internet'] = 1;
        } else {
          (s as any).property['id'] = 8;
          (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
          (s as any).property['name'] = 'Niko\'s apartment';
          (s as any).property['display'] = 'Niko\'s apartment';
          (s as any).property['region'] = 'pav';
          (s as any).property['town'] = 'pavlovsk';
          (s as any).property['location'] = 'pav_residential';
          (s as any).property['location_arg'] = '';
          (s as any).property['entrance'] = 'pav_residential';
          (s as any).property['entrance_arg'] = '';
          (s as any).property['bathroom'] = 'pav_residential';
          (s as any).property['bathroom_arg'] = '';
          (s as any).property['bedroom'] = 'pav_residential';
          (s as any).property['bedroom_arg'] = '';
          (s as any).property['type'] = 'temporary_residence';
          if (((s as any).locArgs?.[1] ?? 0) === 'shulga_apartment') {
            (s as any).property['id'] = 9;
            (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
            (s as any).property['name'] = 'Uncle Sergey\'s apartment';
            (s as any).property['display'] = 'Uncle Sergey\'s apartment';
            (s as any).property['region'] = 'pav';
            (s as any).property['town'] = 'pavlovsk';
            (s as any).property['location'] = 'pav_complex';
            (s as any).property['location_arg'] = 'start';
            (s as any).property['entrance'] = 'vasilyhome';
            (s as any).property['entrance_arg'] = 'hallway';
            (s as any).property['bathroom'] = 'vasilyhome';
            (s as any).property['bathroom_arg'] = 'bathroom';
            (s as any).property['bedroom'] = 'vasilyhome';
            (s as any).property['bedroom_arg'] = 'vasily_room';
            (s as any).property['type'] = 'temporary_residence';
            (s as any).property['free_internet'] = 1;
          } else {
            (s as any).property['id'] = 10;
            (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
            (s as any).property['name'] = 'Lyceum school';
            (s as any).property['display'] = 'room in the Lyceum dorm';
            (s as any).property['region'] = 'pav';
            (s as any).property['town'] = 'pavlovsk';
            (s as any).property['location'] = 'pav_commercial';
            (s as any).property['location_arg'] = '';
            (s as any).property['entrance'] = 'ETO_hostel';
            (s as any).property['entrance_arg'] = 'town_hostel';
            (s as any).property['bathroom'] = 'ETO_hostel';
            (s as any).property['bathroom_arg'] = 'shared_bathroom';
            (s as any).property['bedroom'] = 'dom_gor';
            (s as any).property['bedroom_arg'] = '';
            (s as any).property['type'] = 'permanent_residence';
            (s as any).property['free_internet'] = 1;
            if (((s as any).locArgs?.[1] ?? 0) === 'university_dorm') {
              (s as any).property['id'] = 11;
              (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
              (s as any).property['name'] = 'University halls';
              (s as any).property['display'] = 'room in the university dorm';
              (s as any).property['region'] = 'city';
              (s as any).property['town'] = 'city';
              (s as any).property['location'] = 'city_island';
              (s as any).property['location_arg'] = '';
              (s as any).property['entrance'] = 'uni_dorm';
              (s as any).property['entrance_arg'] = 'dorm_room';
              (s as any).property['bathroom'] = 'uni_dorm';
              (s as any).property['bathroom_arg'] = 'womens_restroom';
              (s as any).property['bedroom'] = 'uni_dorm';
              (s as any).property['bedroom_arg'] = 'dorm_room';
              (s as any).property['type'] = 'permanent_residence';
              (s as any).property['free_internet'] = 1;
            } else {
              (s as any).property['id'] = 12;
              (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
              (s as any).property['name'] = 'Hunter\'s lodge in Gadukino';
              (s as any).property['display'] = 'hunter\'s lodge in Gadukino';
              (s as any).property['region'] = 'gad_forest';
              (s as any).property['town'] = 'gadukino';
              (s as any).property['location'] = 'gad_swamp_yard';
              (s as any).property['location_arg'] = 'start';
              (s as any).property['entrance'] = 'gad_swamphouse';
              (s as any).property['entrance_arg'] = 'start';
              (s as any).property['bathroom'] = 'gad_swamphouse';
              (s as any).property['bathroom_arg'] = 'washstand';
              (s as any).property['bedroom'] = 'gad_swamphouse';
              (s as any).property['bedroom_arg'] = 'start';
              (s as any).property['type'] = 'temporary_residence';
              if (((s as any).locArgs?.[1] ?? 0) === 'shared_apartment') {
                (s as any).property['id'] = 13;
                (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                (s as any).property['name'] = 'Shared apartment in Pavlovsk';
                (s as any).property['display'] = 'shared apartment in Pavlovsk';
                (s as any).property['region'] = 'pav';
                (s as any).property['town'] = 'pavlovsk';
                (s as any).property['location'] = 'pav_complex';
                (s as any).property['location_arg'] = 'start';
                (s as any).property['entrance'] = 'pav_shared_apt';
                (s as any).property['entrance_arg'] = 'start';
                (s as any).property['bathroom'] = 'pav_shared_apt';
                (s as any).property['bathroom_arg'] = 'bathroom';
                (s as any).property['bedroom'] = 'pav_shared_apt';
                (s as any).property['bedroom_arg'] = 'pcsRoom';
                (s as any).property['type'] = 'temporary_residence';
                (s as any).property['free_internet'] = 1;
              } else {
                (s as any).property['id'] = 14;
                (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                (s as any).property['name'] = 'Grandparent\'s house in Gadukino';
                (s as any).property['display'] = 'grandparent\'s house in Gadukino';
                (s as any).property['region'] = 'gad';
                (s as any).property['town'] = 'gadukino';
                (s as any).property['location'] = 'gad_gpyard';
                (s as any).property['location_arg'] = 'start';
                (s as any).property['entrance'] = 'gad_gpyard';
                (s as any).property['entrance_arg'] = 'start';
                (s as any).property['bathroom'] = 'gad_gpbath';
                (s as any).property['bathroom_arg'] = 'start';
                (s as any).property['bedroom'] = 'gad_gpbarn';
                (s as any).property['bedroom_arg'] = 'barn_room';
                (s as any).property['type'] = 'temporary_residence';
                if (((s as any).locArgs?.[1] ?? 0) === 'city_house') {
                  (s as any).property['id'] = 15;
                  (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                  (s as any).property['name'] = 'City residential house';
                  (s as any).property['display'] = 'house in the St. Petersburg\'s residential area';
                  (s as any).property['region'] = 'city';
                  (s as any).property['town'] = 'city';
                  (s as any).property['location'] = 'city_residential';
                  (s as any).property['location_arg'] = '';
                  (s as any).property['entrance'] = 'city_house_res_misc';
                  (s as any).property['entrance_arg'] = 'fronty';
                  (s as any).property['bathroom'] = 'city_house_res_bathr';
                  (s as any).property['bathroom_arg'] = 'bathr';
                  (s as any).property['bedroom'] = 'city_house_res_bedr';
                  (s as any).property['bedroom_arg'] = 'bedro';
                  (s as any).property['type'] = 'permanent_residence';
                  (s as any).property['price'] = 800000;
                  (s as any).property['internet_enabled'] = 1;
                } else {
                  (s as any).property['id'] = 16;
                  (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                  (s as any).property['name'] = 'Meynold Household';
                  (s as any).property['display'] = 'the Meynold Household';
                  (s as any).property['region'] = 'pav';
                  (s as any).property['town'] = 'pavlovsk';
                  (s as any).property['location'] = 'pav_residential';
                  (s as any).property['location_arg'] = '';
                  (s as any).property['entrance'] = 'mey_home';
                  (s as any).property['entrance_arg'] = 'door';
                  (s as any).property['bathroom'] = 'mey_home';
                  (s as any).property['bathroom_arg'] = 'bathroom';
                  (s as any).property['bedroom'] = 'mey_home';
                  (s as any).property['bedroom_arg'] = 'guest_bedroom';
                  (s as any).property['type'] = 'temporary_residence';
                  (s as any).property['free_internet'] = 1;
                  if (((s as any).locArgs?.[1] ?? 0) === 'hotel_therapist') {
                    (s as any).property['id'] = 17;
                    (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                    (s as any).property['name'] = 'Pavlovsk Hotel Room';
                    (s as any).property['display'] = 'husband\'s hotel room';
                    (s as any).property['region'] = 'pav';
                    (s as any).property['town'] = 'pavlovsk';
                    (s as any).property['location'] = 'pav_residential';
                    (s as any).property['location_arg'] = '';
                    (s as any).property['entrance'] = 'pav_hotel';
                    (s as any).property['entrance_arg'] = '';
                    (s as any).property['bathroom'] = 'HotelRoom';
                    (s as any).property['bathroom_arg'] = 'shower1';
                    (s as any).property['bedroom'] = 'HotelRoom';
                    (s as any).property['bedroom_arg'] = 'therapist';
                    (s as any).property['type'] = 'temporary_residence';
                    (s as any).property['free_internet'] = 1;
                  } else {
                    (s as any).property['id'] = 18;
                    (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                    (s as any).property['name'] = 'Pushkin Ballet Dorm';
                    (s as any).property['display'] = 'ballet dorm';
                    (s as any).property['region'] = 'pushkin';
                    (s as any).property['town'] = 'pushkin';
                    (s as any).property['location'] = 'pushkin_sq';
                    (s as any).property['location_arg'] = '';
                    (s as any).property['entrance'] = 'pushkin_ballet_center';
                    (s as any).property['entrance_arg'] = 'start';
                    (s as any).property['bathroom'] = 'pushkin_ballet_class';
                    (s as any).property['bathroom_arg'] = 'shower';
                    (s as any).property['bedroom'] = 'pushkin_ballet_res';
                    (s as any).property['bedroom_arg'] = 'bedroom';
                    (s as any).property['type'] = 'temporary_residence';
                    if (((s as any).arrsize ?? 0)('home_property_attr_calls') > 0) {
                      (s as any).i = 0;
                      // TODO-QSP: :mod_get_property_attr_calls_loop
                      (s as any).temp_app_loc = qspUntranslated(s, "instr(mid(home_property_attr_calls[i], 3), \"'\")", { location: "homes_properties_attr" });
                      if (((s as any).loc ?? 0)(((s as any).temp_loc_name ?? 0))) {
                        // TODO-QSP: dynamic "gs <<$home_property_attr_calls[i]>>"
                      }
                      (s as any).i = ((s as any).i ?? 0) + (1);
                      if (((s as any).i ?? 0) < ((s as any).arrsize ?? 0)('home_property_attr_calls')  &&  ((s as any).property ?? 0)?.['code'] !== ((s as any).locArgs?.[1] ?? 0)) {
                        // TODO-QSP: jump 'mod_get_property_attr_calls_loop'
                      }
                      if (((s as any).property ?? 0)?.['code'] !== ((s as any).locArgs?.[1] ?? 0)) {
                        // TODO-QSP: killvar 'property'
                      }
                    }
                  }
                  // TODO-QSP: **OR** they rename an existing home location.
                  // TODO-QSP: Call this when the mod is initialised and then never again
                  // TODO-QSP: Example: A mod changes some things in the bedroom at the parents home and for this
                  // TODO-QSP: redirects to `mod_whatever_bedrPar`.
                  // TODO-QSP: In this case it would fail as the location code passed would not match
                  // TODO-QSP: `bedrPar` and would get back an empty string as the name of the home
                  // TODO-QSP: To avoid this, the mod should call this function with to location to the mapping.
                  // TODO-QSP: IMPORTANT: $ARGS[1] is mandatory, and either $ARGS[2] or $ARGS[3] must have a value!
                  // TODO-QSP: $ARGS[1]  the new location name as it would appear in the $loc variable. This must start with `mod_`...
                  // TODO-QSP: $ARGS[2]  the name of the home if it is a completely new location - otherwise pass '' or don''t pass...
                  // TODO-QSP: $ARGS[3]  the location that is being replaced - if it is a new location, leave this as an empty stri...
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

export const homes_properties_attr: LocationDef = {
  name: 'homes_properties_attr',
  region: 'other',
  enter: enter,
};
