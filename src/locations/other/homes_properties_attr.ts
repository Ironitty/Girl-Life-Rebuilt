import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetPropertyAttr(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'city_apartment') {
    ((s as any).property ?? {})['id'] = 1;
    ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
    ((s as any).property ?? {})['name'] = 'City residential apartment';
    ((s as any).property ?? {})['display'] = 'apartment in St. Petersburg\'s residential area';
    ((s as any).property ?? {})['region'] = 'city';
    ((s as any).property ?? {})['town'] = 'city';
    ((s as any).property ?? {})['location'] = 'city_residential';
    ((s as any).property ?? {})['location_arg'] = '';
    ((s as any).property ?? {})['entrance'] = 'korr';
    ((s as any).property ?? {})['entrance_arg'] = '';
    ((s as any).property ?? {})['bathroom'] = 'vanr';
    ((s as any).property ?? {})['bathroom_arg'] = '';
    ((s as any).property ?? {})['bedroom'] = 'bedr';
    ((s as any).property ?? {})['bedroom_arg'] = '';
    ((s as any).property ?? {})['type'] = 'permanent_residence';
    ((s as any).property ?? {})['price'] = 800000;
    ((s as any).property ?? {})['rent'] = 15000;
    ((s as any).property ?? {})['rental'] = 1;
    ((s as any).property ?? {})['internet_enabled'] = 1;
    ((s as any).property ?? {})['can_be_renovated'] = 1;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'parents_home') {
      ((s as any).property ?? {})['id'] = 2;
      ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
      ((s as any).property ?? {})['name'] = 'Parent\'s home in Pavlovsk';
      ((s as any).property ?? {})['display'] = 'parent\'s home in Pavlovsk';
      ((s as any).property ?? {})['region'] = 'pav';
      ((s as any).property ?? {})['town'] = 'pavlovsk';
      ((s as any).property ?? {})['location'] = 'pav_complex';
      ((s as any).property ?? {})['location_arg'] = 'start';
      ((s as any).property ?? {})['entrance'] = 'korrPar';
      ((s as any).property ?? {})['entrance_arg'] = 'start';
      ((s as any).property ?? {})['bathroom'] = 'vanrPar';
      ((s as any).property ?? {})['bathroom_arg'] = '';
      ((s as any).property ?? {})['bedroom'] = 'bedrPar';
      ((s as any).property ?? {})['bedroom_arg'] = 'start';
      ((s as any).property ?? {})['type'] = 'permanent_residence';
      ((s as any).property ?? {})['free_internet'] = 1;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'village_cottage') {
        ((s as any).property ?? {})['id'] = 3;
        ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
        ((s as any).property ?? {})['name'] = 'My cottage in the cooperative village';
        ((s as any).property ?? {})['display'] = 'cottage located in the cooperative village';
        ((s as any).property ?? {})['region'] = 'other';
        ((s as any).property ?? {})['town'] = 'dachi';
        ((s as any).property ?? {})['location'] = 'dachamy';
        ((s as any).property ?? {})['location_arg'] = '';
        ((s as any).property ?? {})['entrance'] = 'dachamy';
        ((s as any).property ?? {})['entrance_arg'] = '';
        ((s as any).property ?? {})['bathroom'] = 'dachain';
        ((s as any).property ?? {})['bathroom_arg'] = 'dachabath';
        ((s as any).property ?? {})['bedroom'] = 'dachain';
        ((s as any).property ?? {})['bedroom_arg'] = 'start';
        ((s as any).property ?? {})['type'] = 'permanent_residence';
        ((s as any).property ?? {})['price'] = 150000;
        ((s as any).property ?? {})['internet_enabled'] = 0;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'old_town_apartment') {
          ((s as any).property ?? {})['id'] = 4;
          ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
          ((s as any).property ?? {})['name'] = 'Old town apartment';
          ((s as any).property ?? {})['display'] = 'apartment in the old town of Pushkin';
          ((s as any).property ?? {})['region'] = 'pushkin';
          ((s as any).property ?? {})['town'] = 'pushkin';
          ((s as any).property ?? {})['location'] = 'pushkin_sq';
          ((s as any).property ?? {})['location_arg'] = '';
          ((s as any).property ?? {})['entrance'] = 'korr2x';
          ((s as any).property ?? {})['entrance_arg'] = '';
          ((s as any).property ?? {})['bathroom'] = 'vanr2x';
          ((s as any).property ?? {})['bathroom_arg'] = '';
          ((s as any).property ?? {})['bedroom'] = 'bedr2x';
          ((s as any).property ?? {})['bedroom_arg'] = '';
          ((s as any).property ?? {})['type'] = 'permanent_residence';
          ((s as any).property ?? {})['rental'] = 1;
          ((s as any).property ?? {})['rent'] = 10000;
          ((s as any).property ?? {})['internet_enabled'] = 1;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'matryona_mansion') {
            ((s as any).property ?? {})['id'] = 5;
            ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
            ((s as any).property ?? {})['name'] = 'Matryona mansion';
            ((s as any).property ?? {})['display_0'] = 'plot of land in the St. Petersburg\'s suburbs';
            ((s as any).property ?? {})['display_1'] = 'impressive mansion under construction in the St. Petersburg\'s suburbs';
            ((s as any).property ?? {})['display_2'] = 'impressive mansion in the St. Petersburg\'s suburbs';
            ((s as any).property ?? {})['display'] = ((s as any).property ?? 0)?.['display_' + String(((s as any).accessible_property ?? 0)?.[String(qspUntranslated(s, "args[1]", { location: "homes_properties_attr" })) + '-construction-status'])];
            ((s as any).property ?? {})['region'] = 'city';
            ((s as any).property ?? {})['town'] = 'city';
            ((s as any).property ?? {})['location'] = 'city_mansion_entrance';
            ((s as any).property ?? {})['location_arg'] = '';
            ((s as any).property ?? {})['entrance'] = 'city_mansion_residence_1';
            ((s as any).property ?? {})['entrance_arg'] = 'yfoyer';
            ((s as any).property ?? {})['bathroom'] = 'city_mansion_residence_1';
            ((s as any).property ?? {})['bathroom_arg'] = 'ybathroom';
            ((s as any).property ?? {})['bedroom'] = 'city_mansion_residence_1';
            ((s as any).property ?? {})['bedroom_arg'] = 'ybedroom';
            ((s as any).property ?? {})['type'] = 'permanent_residence';
            ((s as any).property ?? {})['price'] = 1500000;
            ((s as any).property ?? {})['internet_enabled'] = 1;
            ((s as any).property ?? {})['construction_needed'] = 1;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'pavlovsk_hotel') {
              ((s as any).property ?? {})['id'] = 6;
              ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
              ((s as any).property ?? {})['name'] = 'My hotel room in Pavlovsk';
              ((s as any).property ?? {})['display'] = 'hotel room in Pavlovsk';
              ((s as any).property ?? {})['region'] = 'pav';
              ((s as any).property ?? {})['town'] = 'pavlovsk';
              ((s as any).property ?? {})['location'] = 'pav_market';
              ((s as any).property ?? {})['location_arg'] = '';
              ((s as any).property ?? {})['entrance'] = 'pav_hotel';
              ((s as any).property ?? {})['entrance_arg'] = '';
              ((s as any).property ?? {})['bathroom'] = 'HotelRoom';
              ((s as any).property ?? {})['bathroom_arg'] = 'shower1';
              ((s as any).property ?? {})['bedroom'] = 'HotelRoom';
              ((s as any).property ?? {})['bedroom_arg'] = 'normal';
              ((s as any).property ?? {})['type'] = 'temporary_residence';
              ((s as any).property ?? {})['free_internet'] = 1;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'maid_bedroom') {
                ((s as any).property ?? {})['id'] = 7;
                ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                ((s as any).property ?? {})['name'] = 'Nicholas\' Apartment';
                ((s as any).property ?? {})['display'] = 'maid bedroom in Nicholas\' apartment';
                ((s as any).property ?? {})['region'] = 'city';
                ((s as any).property ?? {})['town'] = 'city';
                ((s as any).property ?? {})['location'] = 'city_center';
                ((s as any).property ?? {})['location_arg'] = '';
                ((s as any).property ?? {})['entrance'] = 'nichBedroomServant';
                ((s as any).property ?? {})['entrance_arg'] = 'start';
                ((s as any).property ?? {})['bathroom'] = 'nichBathServant';
                ((s as any).property ?? {})['bathroom_arg'] = '';
                ((s as any).property ?? {})['bedroom'] = 'nichBedroomServant';
                ((s as any).property ?? {})['bedroom_arg'] = 'start';
                ((s as any).property ?? {})['type'] = 'permanent_residence';
                ((s as any).property ?? {})['free_internet'] = 1;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'niko_apartment') {
                  ((s as any).property ?? {})['id'] = 8;
                  ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                  ((s as any).property ?? {})['name'] = 'Niko\'s apartment';
                  ((s as any).property ?? {})['display'] = 'Niko\'s apartment';
                  ((s as any).property ?? {})['region'] = 'pav';
                  ((s as any).property ?? {})['town'] = 'pavlovsk';
                  ((s as any).property ?? {})['location'] = 'pav_residential';
                  ((s as any).property ?? {})['location_arg'] = '';
                  ((s as any).property ?? {})['entrance'] = 'pav_residential';
                  ((s as any).property ?? {})['entrance_arg'] = '';
                  ((s as any).property ?? {})['bathroom'] = 'pav_residential';
                  ((s as any).property ?? {})['bathroom_arg'] = '';
                  ((s as any).property ?? {})['bedroom'] = 'pav_residential';
                  ((s as any).property ?? {})['bedroom_arg'] = '';
                  ((s as any).property ?? {})['type'] = 'temporary_residence';
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 'shulga_apartment') {
                    ((s as any).property ?? {})['id'] = 9;
                    ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                    ((s as any).property ?? {})['name'] = 'Uncle Sergey\'s apartment';
                    ((s as any).property ?? {})['display'] = 'Uncle Sergey\'s apartment';
                    ((s as any).property ?? {})['region'] = 'pav';
                    ((s as any).property ?? {})['town'] = 'pavlovsk';
                    ((s as any).property ?? {})['location'] = 'pav_complex';
                    ((s as any).property ?? {})['location_arg'] = 'start';
                    ((s as any).property ?? {})['entrance'] = 'vasilyhome';
                    ((s as any).property ?? {})['entrance_arg'] = 'hallway';
                    ((s as any).property ?? {})['bathroom'] = 'vasilyhome';
                    ((s as any).property ?? {})['bathroom_arg'] = 'bathroom';
                    ((s as any).property ?? {})['bedroom'] = 'vasilyhome';
                    ((s as any).property ?? {})['bedroom_arg'] = 'vasily_room';
                    ((s as any).property ?? {})['type'] = 'temporary_residence';
                    ((s as any).property ?? {})['free_internet'] = 1;
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 'lyceum_dorm') {
                      ((s as any).property ?? {})['id'] = 10;
                      ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                      ((s as any).property ?? {})['name'] = 'Lyceum school';
                      ((s as any).property ?? {})['display'] = 'room in the Lyceum dorm';
                      ((s as any).property ?? {})['region'] = 'pav';
                      ((s as any).property ?? {})['town'] = 'pavlovsk';
                      ((s as any).property ?? {})['location'] = 'pav_commercial';
                      ((s as any).property ?? {})['location_arg'] = '';
                      ((s as any).property ?? {})['entrance'] = 'ETO_hostel';
                      ((s as any).property ?? {})['entrance_arg'] = 'town_hostel';
                      ((s as any).property ?? {})['bathroom'] = 'ETO_hostel';
                      ((s as any).property ?? {})['bathroom_arg'] = 'shared_bathroom';
                      ((s as any).property ?? {})['bedroom'] = 'dom_gor';
                      ((s as any).property ?? {})['bedroom_arg'] = '';
                      ((s as any).property ?? {})['type'] = 'permanent_residence';
                      ((s as any).property ?? {})['free_internet'] = 1;
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 'university_dorm') {
                        ((s as any).property ?? {})['id'] = 11;
                        ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                        ((s as any).property ?? {})['name'] = 'University halls';
                        ((s as any).property ?? {})['display'] = 'room in the university dorm';
                        ((s as any).property ?? {})['region'] = 'city';
                        ((s as any).property ?? {})['town'] = 'city';
                        ((s as any).property ?? {})['location'] = 'city_island';
                        ((s as any).property ?? {})['location_arg'] = '';
                        ((s as any).property ?? {})['entrance'] = 'uni_dorm';
                        ((s as any).property ?? {})['entrance_arg'] = 'dorm_room';
                        ((s as any).property ?? {})['bathroom'] = 'uni_dorm';
                        ((s as any).property ?? {})['bathroom_arg'] = 'womens_restroom';
                        ((s as any).property ?? {})['bedroom'] = 'uni_dorm';
                        ((s as any).property ?? {})['bedroom_arg'] = 'dorm_room';
                        ((s as any).property ?? {})['type'] = 'permanent_residence';
                        ((s as any).property ?? {})['free_internet'] = 1;
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 'hunters_lodge') {
                          ((s as any).property ?? {})['id'] = 12;
                          ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                          ((s as any).property ?? {})['name'] = 'Hunter\'s lodge in Gadukino';
                          ((s as any).property ?? {})['display'] = 'hunter\'s lodge in Gadukino';
                          ((s as any).property ?? {})['region'] = 'gad_forest';
                          ((s as any).property ?? {})['town'] = 'gadukino';
                          ((s as any).property ?? {})['location'] = 'gad_swamp_yard';
                          ((s as any).property ?? {})['location_arg'] = 'start';
                          ((s as any).property ?? {})['entrance'] = 'gad_swamphouse';
                          ((s as any).property ?? {})['entrance_arg'] = 'start';
                          ((s as any).property ?? {})['bathroom'] = 'gad_swamphouse';
                          ((s as any).property ?? {})['bathroom_arg'] = 'washstand';
                          ((s as any).property ?? {})['bedroom'] = 'gad_swamphouse';
                          ((s as any).property ?? {})['bedroom_arg'] = 'start';
                          ((s as any).property ?? {})['type'] = 'temporary_residence';
                        } else {
                          if (((s as any).locArgs?.[1] ?? 0) === 'shared_apartment') {
                            ((s as any).property ?? {})['id'] = 13;
                            ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                            ((s as any).property ?? {})['name'] = 'Shared apartment in Pavlovsk';
                            ((s as any).property ?? {})['display'] = 'shared apartment in Pavlovsk';
                            ((s as any).property ?? {})['region'] = 'pav';
                            ((s as any).property ?? {})['town'] = 'pavlovsk';
                            ((s as any).property ?? {})['location'] = 'pav_complex';
                            ((s as any).property ?? {})['location_arg'] = 'start';
                            ((s as any).property ?? {})['entrance'] = 'pav_shared_apt';
                            ((s as any).property ?? {})['entrance_arg'] = 'start';
                            ((s as any).property ?? {})['bathroom'] = 'pav_shared_apt';
                            ((s as any).property ?? {})['bathroom_arg'] = 'bathroom';
                            ((s as any).property ?? {})['bedroom'] = 'pav_shared_apt';
                            ((s as any).property ?? {})['bedroom_arg'] = 'pcsRoom';
                            ((s as any).property ?? {})['type'] = 'temporary_residence';
                            ((s as any).property ?? {})['free_internet'] = 1;
                          } else {
                            if (((s as any).locArgs?.[1] ?? 0) === 'grandparents_house') {
                              ((s as any).property ?? {})['id'] = 14;
                              ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                              ((s as any).property ?? {})['name'] = 'Grandparent\'s house in Gadukino';
                              ((s as any).property ?? {})['display'] = 'grandparent\'s house in Gadukino';
                              ((s as any).property ?? {})['region'] = 'gad';
                              ((s as any).property ?? {})['town'] = 'gadukino';
                              ((s as any).property ?? {})['location'] = 'gad_gpyard';
                              ((s as any).property ?? {})['location_arg'] = 'start';
                              ((s as any).property ?? {})['entrance'] = 'gad_gpyard';
                              ((s as any).property ?? {})['entrance_arg'] = 'start';
                              ((s as any).property ?? {})['bathroom'] = 'gad_gpbath';
                              ((s as any).property ?? {})['bathroom_arg'] = 'start';
                              ((s as any).property ?? {})['bedroom'] = 'gad_gpbarn';
                              ((s as any).property ?? {})['bedroom_arg'] = 'barn_room';
                              ((s as any).property ?? {})['type'] = 'temporary_residence';
                            } else {
                              if (((s as any).locArgs?.[1] ?? 0) === 'city_house') {
                                ((s as any).property ?? {})['id'] = 15;
                                ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                                ((s as any).property ?? {})['name'] = 'City residential house';
                                ((s as any).property ?? {})['display'] = 'house in the St. Petersburg\'s residential area';
                                ((s as any).property ?? {})['region'] = 'city';
                                ((s as any).property ?? {})['town'] = 'city';
                                ((s as any).property ?? {})['location'] = 'city_residential';
                                ((s as any).property ?? {})['location_arg'] = '';
                                ((s as any).property ?? {})['entrance'] = 'city_house_res_misc';
                                ((s as any).property ?? {})['entrance_arg'] = 'fronty';
                                ((s as any).property ?? {})['bathroom'] = 'city_house_res_bathr';
                                ((s as any).property ?? {})['bathroom_arg'] = 'bathr';
                                ((s as any).property ?? {})['bedroom'] = 'city_house_res_bedr';
                                ((s as any).property ?? {})['bedroom_arg'] = 'bedro';
                                ((s as any).property ?? {})['type'] = 'permanent_residence';
                                ((s as any).property ?? {})['price'] = 800000;
                                ((s as any).property ?? {})['internet_enabled'] = 1;
                              } else {
                                if (((s as any).locArgs?.[1] ?? 0) === 'meynold_household') {
                                  ((s as any).property ?? {})['id'] = 16;
                                  ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                                  ((s as any).property ?? {})['name'] = 'Meynold Household';
                                  ((s as any).property ?? {})['display'] = 'the Meynold Household';
                                  ((s as any).property ?? {})['region'] = 'pav';
                                  ((s as any).property ?? {})['town'] = 'pavlovsk';
                                  ((s as any).property ?? {})['location'] = 'pav_residential';
                                  ((s as any).property ?? {})['location_arg'] = '';
                                  ((s as any).property ?? {})['entrance'] = 'mey_home';
                                  ((s as any).property ?? {})['entrance_arg'] = 'door';
                                  ((s as any).property ?? {})['bathroom'] = 'mey_home';
                                  ((s as any).property ?? {})['bathroom_arg'] = 'bathroom';
                                  ((s as any).property ?? {})['bedroom'] = 'mey_home';
                                  ((s as any).property ?? {})['bedroom_arg'] = 'guest_bedroom';
                                  ((s as any).property ?? {})['type'] = 'temporary_residence';
                                  ((s as any).property ?? {})['free_internet'] = 1;
                                } else {
                                  if (((s as any).locArgs?.[1] ?? 0) === 'hotel_therapist') {
                                    ((s as any).property ?? {})['id'] = 17;
                                    ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                                    ((s as any).property ?? {})['name'] = 'Pavlovsk Hotel Room';
                                    ((s as any).property ?? {})['display'] = 'husband\'s hotel room';
                                    ((s as any).property ?? {})['region'] = 'pav';
                                    ((s as any).property ?? {})['town'] = 'pavlovsk';
                                    ((s as any).property ?? {})['location'] = 'pav_residential';
                                    ((s as any).property ?? {})['location_arg'] = '';
                                    ((s as any).property ?? {})['entrance'] = 'pav_hotel';
                                    ((s as any).property ?? {})['entrance_arg'] = '';
                                    ((s as any).property ?? {})['bathroom'] = 'HotelRoom';
                                    ((s as any).property ?? {})['bathroom_arg'] = 'shower1';
                                    ((s as any).property ?? {})['bedroom'] = 'HotelRoom';
                                    ((s as any).property ?? {})['bedroom_arg'] = 'therapist';
                                    ((s as any).property ?? {})['type'] = 'temporary_residence';
                                    ((s as any).property ?? {})['free_internet'] = 1;
                                  } else {
                                    if (((s as any).locArgs?.[1] ?? 0) === 'pushkin_ballet_dorm') {
                                      ((s as any).property ?? {})['id'] = 18;
                                      ((s as any).property ?? {})['code'] = ((s as any).locArgs?.[1] ?? 0);
                                      ((s as any).property ?? {})['name'] = 'Pushkin Ballet Dorm';
                                      ((s as any).property ?? {})['display'] = 'ballet dorm';
                                      ((s as any).property ?? {})['region'] = 'pushkin';
                                      ((s as any).property ?? {})['town'] = 'pushkin';
                                      ((s as any).property ?? {})['location'] = 'pushkin_sq';
                                      ((s as any).property ?? {})['location_arg'] = '';
                                      ((s as any).property ?? {})['entrance'] = 'pushkin_ballet_center';
                                      ((s as any).property ?? {})['entrance_arg'] = 'start';
                                      ((s as any).property ?? {})['bathroom'] = 'pushkin_ballet_class';
                                      ((s as any).property ?? {})['bathroom_arg'] = 'shower';
                                      ((s as any).property ?? {})['bedroom'] = 'pushkin_ballet_res';
                                      ((s as any).property ?? {})['bedroom_arg'] = 'bedroom';
                                      ((s as any).property ?? {})['type'] = 'temporary_residence';
                                    } else {
                                      if (Object.keys((s as any).home_property_attr_calls ?? {}).length > 0) {
                                        (s as any).i = 0;
                                        // TODO-QSP: :mod_get_property_attr_calls_loop
                                        (s as any).temp_app_loc = qspUntranslated(s, "instr(mid(home_property_attr_calls[i], 3), \"'\")", { location: "homes_properties_attr" });
                                        if (((s as any).loc ?? 0)(((s as any).temp_loc_name ?? 0))) {
                                          // TODO-QSP: dynamic "gs <<$home_property_attr_calls[i]>>"
                                        }
                                        (s as any).i = ((s as any).i ?? 0) + (1);
                                        if (((s as any).i ?? 0) < Object.keys((s as any).home_property_attr_calls ?? {}).length  &&  ((s as any).property ?? 0)?.['code'] !== ((s as any).locArgs?.[1] ?? 0)) {
                                          // TODO-QSP: jump 'mod_get_property_attr_calls_loop'
                                        }
                                        if (((s as any).property ?? 0)?.['code'] !== ((s as any).locArgs?.[1] ?? 0)) {
                                          // TODO-QSP: killvar 'property'
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
        }
      }
    }
  }
  scene.build();
}

function enterGetPropertyAttribute(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).name ?? 0));
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
  } else {
    (s as any).result = ((s as any).property ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  }
  scene.build();
}

function enterRegisterModGetPropertyAttributeCall(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).home_property_attr_calls) ? ((s as any).home_property_attr_calls as any[]).indexOf(((s as any).temp_hpac ?? 0)) : -1) < 0) {
    // TODO-QSP: $home_property_attr_calls[] = $temp_hpac
  }
  scene.build();
}

function enterRemoveModGetPropertyAttributeCall(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_hpacVars ?? {})['call'] = qspUntranslated(s, "trim(ARGS[1])", { location: "homes_properties_attr" });
  ((s as any).temp_hpacVars ?? {})['pos'] = qspUntranslated(s, "arrpos('home_property_attr_calls', temp_hpacVars['call'])", { location: "homes_properties_attr" });
  if (((s as any).temp_hpacVars ?? 0)?.['pos'] >= 0) {
    ((s as any).temp_hpacVars ?? {})['loc'] = qspUntranslated(s, "instr(mid(temp_hpacVars['call'], 3), \"'\")", { location: "homes_properties_attr" });
    ((s as any).temp_hpacVars ?? {})['name'] = qspUntranslated(s, "mid(temp_hpacVars['call'], 2, temp_hpacVars['loc'])", { location: "homes_properties_attr" });
    if (((s as any).loc ?? 0)(((s as any).temp_hpacVars ?? 0)?.['name'])) {
      // TODO-QSP: dynamic "gs <<$temp_hpacVars['call']>>"
      if (((s as any).home ?? 0)?.['current'] === ((s as any).property ?? 0)?.['code']) {
        qspCall(s, 'homes_properties', 'set_homeless');
      }
    }
  }
  scene.build();
}

function enterAddNewHomeLocation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home_name ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === ''  &&  ((s as any).locArgs?.[3] ?? 0) === '') {
      // TODO-QSP: $home_name[$ARGS[1]] = ''
    } else {
      if (((s as any).locArgs?.[2] ?? 0) !== '') {
        // TODO-QSP: $home_name[$ARGS[1]] = $ARGS[2]
        if ((Array.isArray((s as any).homes) ? ((s as any).homes as any[]).indexOf(((s as any).locArgs?.[2] ?? 0)) : -1) < 0) {
          // TODO-QSP: $homes[] = $ARGS[2]
        }
      } else {
        // TODO-QSP: $home_name[$ARGS[1]] = $home_name[$ARGS[3]]
      }
    }
  }
  scene.build();
}

function enterAddNewTrainStation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).train_station ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
  } else {
    // TODO-QSP: $train_station[$ARGS[1]] = "gt '<<$ARGS[2]>>', '<<$ARGS[3]>>'"
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_property_attr':
      enterGetPropertyAttr(s, scene);
      break;
    case 'get_property_attribute':
      enterGetPropertyAttribute(s, scene);
      break;
    case 'register_mod_get_property_attribute_call':
      enterRegisterModGetPropertyAttributeCall(s, scene);
      break;
    case 'remove_mod_get_property_attribute_call':
      enterRemoveModGetPropertyAttributeCall(s, scene);
      break;
    case 'add_new_home_location':
      enterAddNewHomeLocation(s, scene);
      break;
    case 'add_new_train_station':
      enterAddNewTrainStation(s, scene);
      break;
    default:
      enterGetPropertyAttr(s, scene);
      break;
  }
}

export const homes_properties_attr: LocationDef = {
  name: 'homes_properties_attr',
  region: 'other',
  enter: enter,
};
