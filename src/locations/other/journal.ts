import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterRecords(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'housing', 'rent');
  qspCall(s, 'journal', 'journalmenu');
  scene.build();
}

function enterJournalmenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    // TODO-QSP: $tablebody += '<th><a href="exec:menutrack = 0
    // TODO-QSP: gs ''journal'', ''magictab''">Magic</a></th>'
  }
  // TODO-QSP: $tablebody += '<th><a href="exec:menutrack = 1 & gt ''journal'', ''calendar''">Calendar</a></th>'
  // TODO-QSP: $tablebody += '<th><a href="exec:menutrack = 2 & gt ''journal'', ''housingtab''">Housing</a></th>'
  // TODO-QSP: $tablebody += '<th><a href="exec:menutrack = 3 & gt ''journal_work'', ''start''">Work</a></th>'
  // TODO-QSP: $tablebody += '<th><a href="exec:menutrack = 4 & gt ''journal_quests'', ''start''">Quests</a></th>'
  // TODO-QSP: $tablebody += '<th><a href="exec:menutrack = 5 & gt ''journal'', ''relationstab''">Relations</a></th...
  // TODO-QSP: $tablebody += '<th><a href="exec:menutrack = 6 & gt ''journal'', ''generaltab''">Game Information</a...
  // TODO-QSP: $tablebody += '<th><a href="exec:menutrack = 7 & gt ''journal'', ''notestab''">Notes</a></th>'
  // TODO-QSP: $tablebody += '<th><a href="exec:menutrack = 8 & gt ''journal'', ''notification_log''">Notifications...
  // TODO-QSP: $tablebody += '</tr>'
  // TODO-QSP: dynamic text: <center><table width="90%" align="center" width="90%" cellspacing="0" cellpaddin...
  scene.text(`<center><table width="90%" align="center" width="90%" cellspacing="0" cellpadding="0" valign="top"><tr>${((s as any).tablebody ?? 0)}</tr></table></center>`);
  if (((s as any).jumploc ?? 0) === 'worktab'  &&  ((s as any).jclose ?? 0) === 1) {
    (s as any).jclose = 0;
    (s as any).menutrack = 3;
    scene.actions([{ label: 'Continue', goto: ['journal_work', 'start'] }]);
  } else {
    (s as any).jclose = 0;
    (s as any).menutrack = 1;
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
      (s as any).menutrack = 0;
      scene.actions([{ label: 'Continue', goto: ['journal', 'magictab'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['journal', 'calendar'] }]);
    }
  }
  qspCall(s, 'journal', 'leaveactions');
  scene.build();
}

function enterCalendar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar', 'show');
  scene.build();
}

function enterMagictab(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Magic</h2></center><br>');
  scene.text('<center><h2>Spells to Cast</h2></center><br>');
  // TODO-QSP: func('spellBook', 'cast', '$nonComSpells', 'gt ''journal'', ''magictab''', 'jclose = 1')
  scene.text('<br><center><h2>Spell Learning</h2></center><br>');
  scene.text('<br><center><h3>Combat</h3></center><br>');
  // TODO-QSP: func('spellBook', 'learn', '$combatSpells')
  scene.text('<br><center><h3>Story</h3></center><br>');
  // TODO-QSP: func('spellBook', 'learn', '$storySpells')
  scene.text('<br><center><h3>Non-Combat</h3></center><br>');
  // TODO-QSP: func('spellBook', 'learn', '$nonComSpells')
  scene.text('<br><center><h2>Known Spells</h2></center><br>');
  scene.text('<br><center><h3>Combat</h3></center><br>');
  // TODO-QSP: func('spellBook', 'list', '$combatSpells')
  scene.text('<br><center><h3>Story</h3></center><br>');
  // TODO-QSP: func('spellBook', 'list', '$storySpells')
  scene.text('<br><center><h3>Non-Combat</h3></center><br>');
  // TODO-QSP: func('spellBook', 'list', '$nonComSpells')
  // TODO-QSP: delact 'Never mind'
  scene.build();
}

function enterHousingtab(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Housing</h2></center>');
  if (((s as any).accessible_property ?? 0)?.['shared_apartment'] === 4) {
    scene.text('You share an apartment with three others in Pavlovsk. Your bills are paid by the other tenants in exchange for your house services.');
  }
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 1) {
    // TODO-QSP: dynamic text: You rent a two bedroom apartment in the city residential area. Your rent for the...
    scene.text(`You rent a two bedroom apartment in the city residential area. Your rent for the apartment is subtracted automatically in sum of ${qspFunc(s, 'money', 'string_price', qspUntranslated(s, "(func('homes_properties', 'get_rent_amount', 'city_apartment'))", { location: "journal" }))} plus electric bill on 25th of each month. You are currently paid up for <b>${qspFunc(s, 'homes_properties', 'get_rent_days', 'city_apartment')}</b> days.`);
  }
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 2) {
    scene.text('You own a two bedroom apartment in the city residential area. Your utility bills are due on the 25th of each month.');
  }
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 3) {
    scene.text('You own a two bedroom apartment in the city residential area. It\'s currently occupied by your tenants.');
  }
  if (((s as any).accessible_property ?? 0)?.['parents_home'] === 4) {
    scene.text('You live with your parents and siblings in a two bedroom apartment in Pavlovsk.');
  }
  if (((s as any).accessible_property ?? 0)?.['village_cottage'] === 2) {
    scene.text('You own a small holiday cottage with an adjacent allotment in the communal village.');
  }
  if (((s as any).accessible_property ?? 0)?.['old_town_apartment'] === 1) {
    // TODO-QSP: dynamic text: You rent a two bedroom apartment in Pushkin. Your rent for the apartment is subt...
    scene.text(`You rent a two bedroom apartment in Pushkin. Your rent for the apartment is subtracted automatically in the sum of ${qspFunc(s, 'money', 'string_price', qspUntranslated(s, "(func('homes_properties', 'get_rent_amount', 'old_town_apartment'))", { location: "journal" }))} plus electric bill on the 25th of each month. You are currently paid up for <b>${qspFunc(s, 'homes_properties', 'get_rent_days', 'old_town_apartment')}</b> days.`);
  }
  if (((s as any).accessible_property ?? 0)?.['matryona_mansion'] === 2  &&  (!((s as any).constructionstatus ?? 0))) {
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
  if (qspFunc(s, 'car_funcs', 'has_car')) {
    scene.text('<center><h2>Car</h2></center>');
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
                  scene.text('Your car is parked in Old Town district of Pushkin.');
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
                              scene.text('Your car is parked near the Gazpromneft gas station on the highway.');
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'records':
      enterRecords(s, scene);
      break;
    case 'journalmenu':
      enterJournalmenu(s, scene);
      break;
    case 'calendar':
      enterCalendar(s, scene);
      break;
    case 'magictab':
      enterMagictab(s, scene);
      break;
    case 'housingtab':
      enterHousingtab(s, scene);
      break;
    default:
      enterRecords(s, scene);
      break;
  }
}

export const journal: LocationDef = {
  name: 'journal',
  title: ' You have to work on your clique standing. You\'re in danger of being cast out.',
  region: 'other',
  enter: enter,
};
