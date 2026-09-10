import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'beta_journal', 'nav_construct');
  // TODO-QSP: gs $loc_id, 'nav_construct'
  if (((s as any).accessible_property ?? 0)?.['shared_apartment'] === 4) {
    scene.text('You share an apartment with three others in Pavlovsk. Your bills are paid by the other tenants in exchange for your house services.');
  }
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 1) {
    // TODO-QSP: dynamic text: You rent a two bedroom apartment in the city residential area. Your rent for the...
    scene.text(`You rent a two bedroom apartment in the city residential area. Your rent for the apartment is subtracted automatically in sum of ${qspFunc(s, 'money', 'string_price', qspFunc(s, 'homes_properties', 'get_rent_amount', 'city_apartment'))} us electric bill on 25th of each month. You are currently paid up for <b>${qspFunc(s, 'homes_properties', 'get_rent_days', 'city_apartment')}</b> days.`);
  }
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 2) {
    scene.text('You own a two bedroom apartment in the city residential area. Your utility bills are due on the 25th of each month.');
  }
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 3) {
    scene.text('You own a two bedroom apartment in the city residential area. It\'s currently occupied by your tenants.');
  }
  if (((s as any).accessible_property ?? 0)?.['parents_home'] === 4) {
    scene.text('<center><table width="90%" cellspacing="0" cellpadding="0" valign="top"><tr>');
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('<th width="70%" align="left">You currently live with your parents, Natasha and Vladimir, and your siblings Anya and Kolka in a two bedroom apartment located in the Five Eight Estate in Pavlovsk.</th>');
    scene.text('</tr></table></center>');
  }
  if (((s as any).accessible_property ?? 0)?.['village_cottage']=== 2) {
    scene.text('You own a small holiday cottage with an adjacent allotment in the communal village.');
  }
  if (((s as any).accessible_property ?? 0)?.['old_town_apartment'] === 1) {
    // TODO-QSP: dynamic text: You rent a two bedroom apartment in Pushkin. Your rent for the apartment is subt...
    scene.text(`You rent a two bedroom apartment in Pushkin. Your rent for the apartment is subtracted automatically in the sum of ${qspFunc(s, 'money', 'string_price', qspFunc(s, 'homes_properties', 'get_rent_amount', 'old_town_apartment'))} us electric bill on the 25th of each month. You are currently paid up for <b>${qspFunc(s, 'homes_properties', 'get_rent_days', 'old_town_apartment')}</b> days.`);
  }
  if (((s as any).accessible_property ?? 0)?.['matryona_mansion'] === 2  &&  ((s as any).constructionstatus ?? 0) === 0) {
    scene.text('You own a vacant block in the city suburbs.');
  }
  if (((s as any).accessible_property ?? 0)?.['matryona_mansion'] === 2  &&  ((s as any).constructionstatus ?? 0) === 1) {
    // TODO-QSP: 'You own a plot of land in the city suburbs upon which you are building a house.' + iif(banaMansion ...
  }
  if (((s as any).accessible_property ?? 0)?.['matryona_mansion'] === 2  &&  ((s as any).constructionstatus ?? 0) === 2) {
    // TODO-QSP: 'You own an impressive mansion in the city suburbs. ' + iif(banaMansion = 1, 'Your utility bills are...
  }
  if (((s as any).accessible_property ?? 0)?.['city_house'] === 2) {
    scene.text('You own a nice house on the edge of the city residential district. Your utility bills are due on the 25th of each month.');
  }
  if (((s as any).accessible_property ?? 0)?.['meynold_household'] === 4) {
    scene.text('You live with Vicky, Katja and Tamara Meynold. You have your own room and get an allowance based on helping out around the house and/or studying with Tamara.');
  }
  if (((s as any).car ?? 0) > 0) {
    scene.text('<center><h2>Car</h2></center>');
    qspCall(s, 'carF', 'car_condition');
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_residential', '')) {
      scene.text('Your car is parked in St. Petersburg\'s residential area.');
    } else {
      scene.text('Your car is parked in St. Petersburg\'s city center.');
      if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial', '')) {
        scene.text('Your car is parked in St. Petersburg\'s industrial region.');
      } else {
        scene.text('Your car is parked at St. Petersburg\'s Lake.');
        if (qspFunc(s, 'car_funcs', 'is_here', 'cty_park', 'start')) {
          scene.text('Your car is parked at St. Petersburg\'s Park.');
        } else {
          scene.text('Your car is parked at the gas station in St. Petersburg\'s industrial region.');
          if (qspFunc(s, 'car_funcs', 'is_here', 'autoservisF', 'start')) {
            scene.text('Your car is parked at the Car Repair Shop in St. Petersburg.');
          } else {
            scene.text('Your car is parked at your house in St. Petersburg\'s residential area.');
            if (qspFunc(s, 'car_funcs', 'is_here', 'autotraidF', 'start')) {
              scene.text('Your car is parked at the Car Dealership in St. Petersburg.');
            } else {
              scene.text('Your car is parked at St. Petersburg\'s Park.');
              if (qspFunc(s, 'car_funcs', 'is_here', 'city_sauna', '')) {
                scene.text('Your car is parked at St. Petersburg\'s Sauna.');
              } else {
                scene.text('Your car is parked at the construction site.');
                if (qspFunc(s, 'car_funcs', 'is_here', 'dachi', '')) {
                  scene.text('Your car is parked in the Suburban Cooperative.');
                } else {
                  scene.text('Your car is parked in Old Town district of Pavlovsk.');
                  if (qspFunc(s, 'car_funcs', 'is_here', 'city_mansion_entrance', '')) {
                    scene.text('Your car is parked at Matryona Mansion.');
                  } else {
                    scene.text('Your car is parked at St. Petersburg\'s industrial train station.');
                    if (qspFunc(s, 'car_funcs', 'is_here', 'pav_residential', '')) {
                      scene.text('Your car is parked in Pavlovsk\'s residential area.');
                    } else {
                      scene.text('Your car is parked at the gas station near Pavlovsk.');
                      if (qspFunc(s, 'car_funcs', 'is_here', 'road')) {
                        scene.text('Your car is parked on the highway.');
                      } else {
                        scene.text('Your car is parked in Gadukino.');
                        if (qspFunc(s, 'car_funcs', 'is_here', 'pav_commercial', '')) {
                          scene.text('Your car is parked in Pavlovsk\'s commercial region.');
                        } else {
                          scene.text('Your car is parked in Vasilyevsky Island');
                          if (qspFunc(s, 'car_funcs', 'is_here', 'pav_industrial', '')) {
                            scene.text('Your car is parked in Pavlovsk\'s industrial region.');
                          } else {
                            scene.text('Your car is parked in St. Petersburg\'s red light district.');
                            if (qspFunc(s, 'car_funcs', 'is_here', 'city_suburbs', 'start')) {
                              scene.text('Your car is parked in St. Petersburg\'s suburbs.');
                            } else {
                              scene.text('Your car is parked at the Gazpromneft gas station on the highway.');
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

export const beta_journal_home: LocationDef = {
  name: 'beta_journal_home',
  title: 'You share an apartment with three others in Pavlovsk. Your b',
  region: 'other',
  description: ['You share an apartment with three others in Pavlovsk. Your bills are paid by the other tenants in exchange for your house services.'],
  enter: enter,
};
