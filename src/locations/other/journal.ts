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
    // TODO-QSP: $tablebody += '<th><a href="exec:menutrack = 0 & gs ''journal'', ''magictab''">Magic</a></th>'
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
    if (((s as any).jumploc ?? 0) === ''  ||  ((s as any).jclose ?? 0) === 1) {
      (s as any).jclose = 0;
      (s as any).menutrack = 1;
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
        (s as any).menutrack = 0;
        scene.actions([{ label: 'Continue', goto: ['journal', 'magictab'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['journal', 'calendar'] }]);
      }
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
      if (qspFunc(s, 'car_funcs', 'is_here', 'city_center', '')) {
        scene.text('Your car is parked in St. Petersburg\'s city center.');
      } else {
        if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial', '')) {
          scene.text('Your car is parked in St. Petersburg\'s industrial region.');
        } else {
          if (qspFunc(s, 'car_funcs', 'is_here', 'city_lake', 'start')) {
            scene.text('Your car is parked at St. Petersburg\'s Lake.');
          } else {
            if (qspFunc(s, 'car_funcs', 'is_here', 'cty_park', 'start')) {
              scene.text('Your car is parked at St. Petersburg\'s Park.');
            } else {
              if (qspFunc(s, 'car_funcs', 'is_here', 'fuelstation', 'start', 'city')) {
                scene.text('Your car is parked at the gas station in St. Petersburg\'s industrial region.');
              } else {
                if (qspFunc(s, 'car_funcs', 'is_here', 'autoservisF', 'start')) {
                  scene.text('Your car is parked at the Car Repair Shop in St. Petersburg.');
                } else {
                  if (qspFunc(s, 'car_funcs', 'is_here', 'city_house_res_misc', 'fronty')) {
                    scene.text('Your car is parked at your house in St. Petersburg\'s residential area.');
                  } else {
                    if (qspFunc(s, 'car_funcs', 'is_here', 'autotraidF', 'start')) {
                      scene.text('Your car is parked at the Car Dealership in St. Petersburg.');
                    } else {
                      if (qspFunc(s, 'car_funcs', 'is_here', 'city_park', 'whore')) {
                        scene.text('Your car is parked at St. Petersburg\'s Park.');
                      } else {
                        if (qspFunc(s, 'car_funcs', 'is_here', 'city_sauna', '')) {
                          scene.text('Your car is parked at St. Petersburg\'s Sauna.');
                        } else {
                          if (qspFunc(s, 'car_funcs', 'is_here', 'obekt', '')) {
                            scene.text('Your car is parked at the construction site.');
                          } else {
                            if (qspFunc(s, 'car_funcs', 'is_here', 'dachi', '')) {
                              scene.text('Your car is parked in the Suburban Cooperative.');
                            } else {
                              if (qspFunc(s, 'car_funcs', 'is_here', 'pushkin', '')) {
                                scene.text('Your car is parked in Old Town district of Pushkin.');
                              } else {
                                if (qspFunc(s, 'car_funcs', 'is_here', 'city_mansion_entrance', '')) {
                                  scene.text('Your car is parked at Matryona Mansion.');
                                } else {
                                  if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial_train', 'outside')) {
                                    scene.text('Your car is parked at St. Petersburg\'s industrial train station.');
                                  } else {
                                    if (qspFunc(s, 'car_funcs', 'is_here', 'pav_residential', '')) {
                                      scene.text('Your car is parked in Pavlovsk\'s residential area.');
                                    } else {
                                      if (qspFunc(s, 'car_funcs', 'is_here', 'fuelstation', 'start', 'pav')) {
                                        scene.text('Your car is parked at the gas station near Pavlovsk.');
                                      } else {
                                        if (qspFunc(s, 'car_funcs', 'is_here', 'road')) {
                                          scene.text('Your car is parked on the highway.');
                                        } else {
                                          if (qspFunc(s, 'car_funcs', 'is_here', 'gadukino', '')) {
                                            scene.text('Your car is parked in Gadukino.');
                                          } else {
                                            if (qspFunc(s, 'car_funcs', 'is_here', 'pav_commercial', '')) {
                                              scene.text('Your car is parked in Pavlovsk\'s commercial region.');
                                            } else {
                                              if (qspFunc(s, 'car_funcs', 'is_here', 'city_island', '')) {
                                                scene.text('Your car is parked in Vasilyevsky Island');
                                              } else {
                                                if (qspFunc(s, 'car_funcs', 'is_here', 'pav_industrial', '')) {
                                                  scene.text('Your car is parked in Pavlovsk\'s industrial region.');
                                                } else {
                                                  if (qspFunc(s, 'car_funcs', 'is_here', 'city_redlight', 'start')) {
                                                    scene.text('Your car is parked in St. Petersburg\'s red light district.');
                                                  } else {
                                                    if (qspFunc(s, 'car_funcs', 'is_here', 'city_suburbs', 'start')) {
                                                      scene.text('Your car is parked in St. Petersburg\'s suburbs.');
                                                    } else {
                                                      if (qspFunc(s, 'car_funcs', 'is_here', 'gas_station_gp_117', 'outside')) {
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

function enterRelationstab(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Relationships</h2></center>');
  scene.text('<h2>Family</h2>');
  scene.text('Mother:');
  qspCall(s, 'journal', 'relindex', 'A29');
  scene.text('Stepfather:');
  qspCall(s, 'journal', 'relindex', 'A28');
  scene.text('Sister:');
  qspCall(s, 'journal', 'relindex', 'A33');
  scene.text('Brother:');
  qspCall(s, 'journal', 'relindex', 'A34');
  scene.text('Aunt Luda:');
  qspCall(s, 'journal', 'relindex', 'A30');
  if (((s as any).npc_known ?? 0)?.['A55'] === 1) {
    scene.text('Olu:');
    qspCall(s, 'journal', 'relindex', 'A55');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    scene.text('<center><h2>Standings by Social Group</h2></center>');
    if (((s as any).grupTipe ?? 0) < 5  &&  ((s as any).grupvalue ?? 0)?.[String((s as any).grupTipe ?? 0)] > 700) {
    } else {
      if (((s as any).grupTipe ?? 0) < 5  &&  ((s as any).grupvalue ?? 0)?.[String((s as any).grupTipe ?? 0)] > 300) {
      } else {
        if (((s as any).grupTipe ?? 0) < 5) {
        }
      }
    }
    if ((!((s as any).grupTipe ?? 0))) {
      // TODO-QSP: 'You are not a member of any particular school social group.' + $journal_school_standing
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        // TODO-QSP: 'Your school social group consists of the popular, cool and beautiful.' + $journal_school_standing
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          // TODO-QSP: 'Your school social group consists of jocks and natural athletes.' + $journal_school_standing
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            // TODO-QSP: 'Your school social group consists of nerds, geeks and good students.' + $journal_school_standing
            if (((s as any).nerd_game ?? 0)?.['game_day'] > ((s as any).daystart ?? 0)) {
              // TODO-QSP: dynamic text: You have been invited to a games night on <<$weekName[(week + (nerd_game['game_d...
              scene.text(`You have been invited to a games night on ${((s as any).weekName ?? 0)?.[(((s as any).week ?? 0) + (((s as any).nerd_game ?? {})?.['game_day'] - ((s as any).daystart ?? 0)))]} at ' + func('time', 'get_time_string', 20, 0) + ' in the community center library.`);
            }
            if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)) {
              // TODO-QSP: dynamic text: You have been invited to a games night tonight at ' + func('time', 'get_time_str...
              scene.text('You have been invited to a games night tonight at \' + func(\'time\', \'get_time_string\', 20, 0) + \' in the community center library.');
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              // TODO-QSP: 'Your school social group consists of gopniks, rebels, punks or troublemakers.' + $journal_school_st...
            } else {
              if (((s as any).grupTipe ?? 0) === 5) {
                scene.text('Your school social group consists of losers, teacher\'s pets, sluts and the ugly.');
              }
            }
          }
        }
      }
    }
    (s as any).i = 1;
    // TODO-QSP: :grupbar_loop
    if (((s as any).i ?? 0) === 1) {
    }
    if (((s as any).i ?? 0) === 2) {
    }
    if (((s as any).i ?? 0) === 3) {
    }
    if (((s as any).i ?? 0) === 4) {
    }
    if (((s as any).grupTipe ?? 0) === ((s as any).i ?? 0)) {
      if (((s as any).grupvalue ?? 0)?.[String((s as any).i ?? 0)] / 10 < 20) {
      } else {
        if (((s as any).grupvalue ?? 0)?.[String((s as any).i ?? 0)] / 10 < 30) {
        } else {
          if (((s as any).grupvalue ?? 0)?.[String((s as any).i ?? 0)] / 10 < 40) {
          } else {
            if (((s as any).grupvalue ?? 0)?.[String((s as any).i ?? 0)] / 10 < 60) {
            } else {
              if (((s as any).grupvalue ?? 0)?.[String((s as any).i ?? 0)] / 10 < 85) {
              }
            }
          }
        }
      }
    } else {
      if (((s as any).grupvalue ?? 0)?.[String((s as any).i ?? 0)] / 10 < 10) {
      } else {
        if (((s as any).grupvalue ?? 0)?.[String((s as any).i ?? 0)] / 10 < 20) {
        } else {
          if (((s as any).grupvalue ?? 0)?.[String((s as any).i ?? 0)] / 10 < 50) {
          } else {
            if (((s as any).grupvalue ?? 0)?.[String((s as any).i ?? 0)] / 10 < 70) {
            } else {
              if (((s as any).grupvalue ?? 0)?.[String((s as any).i ?? 0)] / 10 < 80) {
              }
            }
          }
        }
      }
    }
    // TODO-QSP: dynamic text: <<$grupbar_name>>
    scene.text(`${((s as any).grupbar_name ?? 0)}`);
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 4) {
      // TODO-QSP: jump 'grupbar_loop'
    }
    scene.text('<center><h2>Popular Kids Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A1'] === 1) {
      scene.text('Friendship with Dimka:');
      qspCall(s, 'journal', 'relindex', 'A1');
    }
    if (((s as any).npc_known ?? 0)?.['A4'] === 1) {
      scene.text('Friendship with Igor:');
      qspCall(s, 'journal', 'relindex', 'A4');
    }
    if (((s as any).npc_known ?? 0)?.['A14'] === 1) {
      scene.text('Friendship with Katja:');
      qspCall(s, 'journal', 'relindex', 'A14');
    }
    if (((s as any).npc_known ?? 0)?.['A15'] === 1) {
      scene.text('Friendship with Vicky:');
      qspCall(s, 'journal', 'relindex', 'A15');
    }
    if (((s as any).npc_known ?? 0)?.['A17'] === 1) {
      scene.text('Friendship with Irina:');
      qspCall(s, 'journal', 'relindex', 'A17');
    }
    if (((s as any).npc_known ?? 0)?.['A22'] === 1) {
      scene.text('Friendship with Bella:');
      qspCall(s, 'journal', 'relindex', 'A22');
    }
    if (((s as any).npc_known ?? 0)?.['A146'] === 1) {
      scene.text('Friendship with Marcus:');
      qspCall(s, 'journal', 'relindex', 'A146');
    }
    if (((s as any).npc_known ?? 0)?.['A147'] === 1) {
      scene.text('Friendship with Andrey:');
      qspCall(s, 'journal', 'relindex', 'A147');
    }
    if (((s as any).npc_known ?? 0)?.['A148'] === 1) {
      scene.text('Friendship with Mefodiy:');
      qspCall(s, 'journal', 'relindex', 'A148');
    }
    if (((s as any).soniaQW ?? 0)?.['slut'] === 0  &&  ((s as any).npc_known ?? 0)?.['A25'] === 1) {
      scene.text('Friendship with Sonia:');
      qspCall(s, 'journal', 'relindex', 'A25');
    }
    if (((s as any).npc_known ?? 0)?.['A139'] === 1) {
      scene.text('Friendship with Stasya:');
      qspCall(s, 'journal', 'relindex', 'A139');
    }
    if (((s as any).npc_known ?? 0)?.['A140'] === 1) {
      scene.text('Friendship with Lizaveta:');
      qspCall(s, 'journal', 'relindex', 'A140');
    }
    scene.text('<center><h2>Jocks Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A3'] === 1) {
      scene.text('Friendship with Ivan:');
      qspCall(s, 'journal', 'relindex', 'A3');
    }
    if (((s as any).fedormasha ?? 0) === 0  &&  ((s as any).npc_known ?? 0)?.['A5'] === 1) {
      scene.text('Friendship with Fedor:');
      qspCall(s, 'journal', 'relindex', 'A5');
    }
    if (((s as any).npc_known ?? 0)?.['A8'] === 1) {
      scene.text('Friendship with Svyatoslav:');
      qspCall(s, 'journal', 'relindex', 'A8');
    }
    if (((s as any).npc_known ?? 0)?.['A13'] === 1) {
      scene.text('Friendship with Lariska:');
      qspCall(s, 'journal', 'relindex', 'A13');
    }
    if (((s as any).npc_known ?? 0)?.['A18'] === 1) {
      scene.text('Friendship with Christina:');
      qspCall(s, 'journal', 'relindex', 'A18');
    }
    if (((s as any).npc_known ?? 0)?.['A19'] === 1) {
      scene.text('Friendship with Lina:');
      qspCall(s, 'journal', 'relindex', 'A19');
    }
    if (((s as any).npc_known ?? 0)?.['A23'] === 1) {
      scene.text('Friendship with Albina:');
      qspCall(s, 'journal', 'relindex', 'A23');
    }
    if (((s as any).npc_known ?? 0)?.['A149'] === 1) {
      scene.text('Friendship with Lazar:');
      qspCall(s, 'journal', 'relindex', 'A149');
    }
    if (((s as any).npc_known ?? 0)?.['A150'] === 1) {
      scene.text('Friendship with Erast:');
      qspCall(s, 'journal', 'relindex', 'A150');
    }
    if (((s as any).npc_known ?? 0)?.['A141'] === 1) {
      scene.text('Friendship with Veronika:');
      qspCall(s, 'journal', 'relindex', 'A141');
    }
    if (((s as any).npc_known ?? 0)?.['A165'] === 1) {
      scene.text('Friendship with Vanya:');
      qspCall(s, 'journal', 'relindex', 'A165');
    }
    scene.text('<center><h2>Nerds Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A2'] === 1) {
      scene.text('Friendship with Artem:');
      qspCall(s, 'journal', 'relindex', 'A2');
    }
    if (((s as any).npc_known ?? 0)?.['A6'] === 1) {
      scene.text('Friendship with Petka:');
      qspCall(s, 'journal', 'relindex', 'A6');
    }
    if (((s as any).npc_known ?? 0)?.['A12'] === 1) {
      scene.text('Friendship with Julia:');
      qspCall(s, 'journal', 'relindex', 'A12');
    }
    if (((s as any).npc_known ?? 0)?.['A16'] === 1) {
      scene.text('Friendship with Natasha:');
      qspCall(s, 'journal', 'relindex', 'A16');
    }
    if (((s as any).npc_known ?? 0)?.['A151'] === 1) {
      scene.text('Friendship with Evgeny:');
      qspCall(s, 'journal', 'relindex', 'A151');
    }
    if (((s as any).npc_known ?? 0)?.['A152'] === 1) {
      scene.text('Friendship with Feofan:');
      qspCall(s, 'journal', 'relindex', 'A152');
    }
    if (((s as any).npc_known ?? 0)?.['A153'] === 1) {
      scene.text('Friendship with Gerasim:');
      qspCall(s, 'journal', 'relindex', 'A153');
    }
    if (((s as any).npc_known ?? 0)?.['A142'] === 1) {
      scene.text('Friendship with Zinaida:');
      qspCall(s, 'journal', 'relindex', 'A142');
    }
    if (((s as any).npc_known ?? 0)?.['A240'] === 1) {
      scene.text('Friendship with Natalia:');
      qspCall(s, 'journal', 'relindex', 'A240');
    }
    scene.text('<center><h2>Gopnik Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A9'] === 1) {
      scene.text('Friendship with Vitek:');
      qspCall(s, 'journal', 'relindex', 'A9');
    }
    if (((s as any).npc_known ?? 0)?.['A10'] === 1) {
      scene.text('Friendship with Dan:');
      qspCall(s, 'journal', 'relindex', 'A10');
    }
    if (((s as any).npc_known ?? 0)?.['A11'] === 1) {
      scene.text('Friendship with Vasily:');
      qspCall(s, 'journal', 'relindex', 'A11');
    }
    if (((s as any).npc_known ?? 0)?.['A20'] === 1) {
      scene.text('Friendship with Lena:');
      qspCall(s, 'journal', 'relindex', 'A20');
    }
    if (((s as any).npc_known ?? 0)?.['A21'] === 1) {
      scene.text('Friendship with Lera:');
      qspCall(s, 'journal', 'relindex', 'A21');
    }
    if (((s as any).npc_known ?? 0)?.['A24'] === 1) {
      scene.text('Friendship with Pauline:');
      qspCall(s, 'journal', 'relindex', 'A24');
    }
    if (((s as any).npc_known ?? 0)?.['A154'] === 1) {
      scene.text('Friendship with Radomir:');
      qspCall(s, 'journal', 'relindex', 'A154');
    }
    if (((s as any).npc_known ?? 0)?.['A155'] === 1) {
      scene.text('Friendship with Lavrenti:');
      qspCall(s, 'journal', 'relindex', 'A155');
    }
    if (((s as any).npc_known ?? 0)?.['A156'] === 1) {
      scene.text('Friendship with Arkadi:');
      qspCall(s, 'journal', 'relindex', 'A156');
    }
    if (((s as any).npc_known ?? 0)?.['A157'] === 1) {
      scene.text('Friendship with Roman:');
      qspCall(s, 'journal', 'relindex', 'A157');
    }
    if (((s as any).npc_known ?? 0)?.['A158'] === 1) {
      scene.text('Friendship with Valentin:');
      qspCall(s, 'journal', 'relindex', 'A158');
    }
    if (((s as any).npc_known ?? 0)?.['A143'] === 1) {
      scene.text('Friendship with Alyona:');
      qspCall(s, 'journal', 'relindex', 'A143');
    }
    if (((s as any).npc_known ?? 0)?.['A144'] === 1) {
      scene.text('Friendship with Anushka:');
      qspCall(s, 'journal', 'relindex', 'A144');
    }
    if (((s as any).npc_known ?? 0)?.['A145'] === 1) {
      scene.text('Friendship with Katyusha:');
      qspCall(s, 'journal', 'relindex', 'A145');
    }
    if (((s as any).npc_known ?? 0)?.['A189'] === 1) {
      scene.text('Friendship with Niko:');
      qspCall(s, 'journal', 'relindex', 'A189');
    }
    scene.text('<center><h2>Outcast/Loner Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A7'] === 1) {
      scene.text('Friendship with Lesco:');
      qspCall(s, 'journal', 'relindex', 'A7');
    }
    if (((s as any).npc_known ?? 0)?.['A159'] === 1) {
      scene.text('Friendship with Petia:');
      qspCall(s, 'journal', 'relindex', 'A159');
    }
    if (((s as any).soniaQW ?? 0)?.['slut'] > 0  &&  ((s as any).npc_known ?? 0)?.['A25'] === 1) {
      scene.text('Friendship with Sonia:');
      qspCall(s, 'journal', 'relindex', 'A25');
    }
    if (((s as any).fedormasha ?? 0) === 1  &&  ((s as any).npc_known ?? 0)?.['A5'] === 1) {
      scene.text('Friendship with Fedor:');
      qspCall(s, 'journal', 'relindex', 'A5');
    }
    scene.text('<center><h2>Teachers/Coaches/School Staff Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A26'] === 1) {
      scene.text('Friendship with Anatoly Tsarev (Math Teacher):');
      qspCall(s, 'journal', 'relindex', 'A26');
    }
    if (((s as any).npc_known ?? 0)?.['A69'] === 1) {
      scene.text('Friendship with Mikhail Nikolaevich (Volleyball Coach):');
      qspCall(s, 'journal', 'relindex', 'A69');
    }
    if (((s as any).npc_known ?? 0)?.['A128'] === 1) {
      scene.text('Friendship with Makar Vasilyev (Art Teacher):');
      qspCall(s, 'journal', 'relindex', 'A128');
    }
    if (((s as any).npc_known ?? 0)?.['A129'] === 1) {
      scene.text('Friendship with Serafim Ivanov (Computer Science Teacher):');
      qspCall(s, 'journal', 'relindex', 'A129');
    }
    if (((s as any).npc_known ?? 0)?.['A130'] === 1) {
      scene.text('Friendship with Ilya Yenotin (Literature Teacher):');
      qspCall(s, 'journal', 'relindex', 'A130');
    }
    if (((s as any).npc_known ?? 0)?.['A131'] === 1) {
      scene.text('Friendship with Viktor Pavlovich (P.E. Teacher):');
      qspCall(s, 'journal', 'relindex', 'A131');
    }
    if (((s as any).npc_known ?? 0)?.['A132'] === 1) {
      scene.text('Friendship with Ruslan Kuznetsov (Shop Teacher):');
      qspCall(s, 'journal', 'relindex', 'A132');
    }
    if (((s as any).npc_known ?? 0)?.['A133'] === 1) {
      scene.text('Friendship with Rolan Metveev (Janitor):');
      qspCall(s, 'journal', 'relindex', 'A133');
    }
    if (((s as any).npc_known ?? 0)?.['A134'] === 1) {
      scene.text('Friendship with Aleksandrina Volkov (Headmistress):');
      qspCall(s, 'journal', 'relindex', 'A134');
    }
    if (((s as any).npc_known ?? 0)?.['A135'] === 1) {
      scene.text('Friendship with Yeva Sokoloff (Geography Teacher):');
      qspCall(s, 'journal', 'relindex', 'A135');
    }
    if (((s as any).npc_known ?? 0)?.['A136'] === 1) {
      scene.text('Friendship with Olga Aleksandrov (School Nurse):');
      qspCall(s, 'journal', 'relindex', 'A136');
    }
    if (((s as any).npc_known ?? 0)?.['A137'] === 1) {
      scene.text('Friendship with Raven Braakman (English Teacher):');
      qspCall(s, 'journal', 'relindex', 'A137');
    }
    if (((s as any).npc_known ?? 0)?.['A138'] === 1) {
      scene.text('Friendship with Arina Orlov (Biology Teacher):');
      qspCall(s, 'journal', 'relindex', 'A138');
    }
    if (((s as any).npc_known ?? 0)?.['A93'] === 1  ||  ((s as any).npc_rel ?? 0)?.['A41'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A42'] > 0  ||  ((s as any).npc_known ?? 0)?.['A43'] === 1  ||  ((s as any).gosh ?? 0) > 0  ||  ((s as any).npc_known ?? 0)?.['A220'] === 1  ||  ((s as any).npc_known ?? 0)?.['A219'] === 1  ||  ((s as any).npc_QW ?? 0)?.['A192'] > 0  ||  ((s as any).npc_known ?? 0)?.['A218'] === 1) {
    }
  }
  if (((s as any).university ?? 0)?.['student'] === 1) {
    scene.text('<center><h2>University Students from Pavlovsk</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A149'] === 1) {
      scene.text('Friendship with Lazar:');
      qspCall(s, 'journal', 'relindex', 'A149');
    }
    if (((s as any).npc_known ?? 0)?.['A1'] === 1) {
      scene.text('Friendship with Dima:');
      qspCall(s, 'journal', 'relindex', 'A1');
    }
    if (((s as any).npc_known ?? 0)?.['A22'] === 1) {
      scene.text('Friendship with Bella:');
      qspCall(s, 'journal', 'relindex', 'A22');
    }
    if (((s as any).npc_known ?? 0)?.['A23'] === 1) {
      scene.text('Friendship with Albina:');
      qspCall(s, 'journal', 'relindex', 'A23');
    }
    if (((s as any).npc_known ?? 0)?.['A17'] === 1) {
      scene.text('Friendship with Irina:');
      qspCall(s, 'journal', 'relindex', 'A17');
    }
    if (((s as any).npc_known ?? 0)?.['A144'] === 1) {
      scene.text('Friendship with Anushka:');
      qspCall(s, 'journal', 'relindex', 'A144');
    }
    if (((s as any).npc_known ?? 0)?.['A155'] === 1) {
      scene.text('Friendship with Lavrenti:');
      qspCall(s, 'journal', 'relindex', 'A155');
    }
    if (((s as any).npc_known ?? 0)?.['A15'] === 1) {
      scene.text('Friendship with Vicky:');
      qspCall(s, 'journal', 'relindex', 'A15');
    }
    if (((s as any).npc_known ?? 0)?.['A147'] === 1) {
      scene.text('Friendship with Andrey:');
      qspCall(s, 'journal', 'relindex', 'A147');
    }
    if (((s as any).npc_known ?? 0)?.['A139'] === 1) {
      scene.text('Friendship with Stasya:');
      qspCall(s, 'journal', 'relindex', 'A139');
    }
    if (((s as any).npc_known ?? 0)?.['A146'] === 1) {
      scene.text('Friendship with Marcus:');
      qspCall(s, 'journal', 'relindex', 'A146');
    }
    if (((s as any).npc_known ?? 0)?.['A16'] === 1) {
      scene.text('Friendship with Natasha:');
      qspCall(s, 'journal', 'relindex', 'A16');
    }
    if (((s as any).npc_known ?? 0)?.['A152'] === 1) {
      scene.text('Friendship with Feofan:');
      qspCall(s, 'journal', 'relindex', 'A152');
    }
    if (((s as any).npc_known ?? 0)?.['A140'] === 1) {
      scene.text('Friendship with Lizaveta:');
      qspCall(s, 'journal', 'relindex', 'A140');
    }
    if (((s as any).npc_known ?? 0)?.['A2'] === 1) {
      scene.text('Friendship with Artem:');
      qspCall(s, 'journal', 'relindex', 'A2');
    }
    if (((s as any).npc_known ?? 0)?.['A18'] === 1) {
      scene.text('Friendship with Christina:');
      qspCall(s, 'journal', 'relindex', 'A18');
    }
    if (((s as any).npc_known ?? 0)?.['A14'] === 1) {
      scene.text('Friendship with Katja:');
      qspCall(s, 'journal', 'relindex', 'A14');
    }
    if (((s as any).npc_known ?? 0)?.['A165'] === 1) {
      scene.text('Friendship with Vanya:');
      qspCall(s, 'journal', 'relindex', 'A165');
    }
    if (((s as any).npc_known ?? 0)?.['A153'] === 1) {
      scene.text('Friendship with Gerasim:');
      qspCall(s, 'journal', 'relindex', 'A153');
    }
    if (((s as any).npc_known ?? 0)?.['A12'] === 1) {
      scene.text('Friendship with Julia:');
      qspCall(s, 'journal', 'relindex', 'A12');
    }
    if (((s as any).npc_known ?? 0)?.['A6'] === 1) {
      scene.text('Friendship with Petka:');
      qspCall(s, 'journal', 'relindex', 'A6');
    }
    if (((s as any).npc_known ?? 0)?.['A13'] === 1) {
      scene.text('Friendship with Lariska:');
      qspCall(s, 'journal', 'relindex', 'A13');
    }
    if (((s as any).npc_known ?? 0)?.['A19'] === 1) {
      scene.text('Friendship with Lina:');
      qspCall(s, 'journal', 'relindex', 'A19');
    }
    if (((s as any).npc_known ?? 0)?.['A25'] === 1) {
      scene.text('Friendship with Sonia:');
      qspCall(s, 'journal', 'relindex', 'A25');
    }
    if (((s as any).npc_known ?? 0)?.['A4'] === 1) {
      scene.text('Friendship with Igor:');
      qspCall(s, 'journal', 'relindex', 'A4');
    }
    if (((s as any).npc_known ?? 0)?.['A142'] === 1) {
      scene.text('Friendship with Zinaida:');
      qspCall(s, 'journal', 'relindex', 'A142');
    }
    if (((s as any).npc_known ?? 0)?.['A7'] === 1) {
      scene.text('Friendship with Lesco:');
      qspCall(s, 'journal', 'relindex', 'A7');
    }
    if (((s as any).npc_known ?? 0)?.['A159'] === 1) {
      scene.text('Friendship with Petia:');
      qspCall(s, 'journal', 'relindex', 'A159');
    }
    scene.text('<center><h2>Other University Students</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A82'] === 1) {
      scene.text('Friendship with Djibril:');
      qspCall(s, 'journal', 'relindex', 'A82');
    }
    if (((s as any).npc_known ?? 0)?.['A83'] === 1) {
      scene.text('Friendship with Goshi:');
      qspCall(s, 'journal', 'relindex', 'A83');
    }
    if (((s as any).npc_known ?? 0)?.['A77'] === 1) {
      scene.text('Friendship with Tryndin:');
      qspCall(s, 'journal', 'relindex', 'A77');
    }
    if (((s as any).npc_known ?? 0)?.['A242'] === 1) {
      scene.text('Friendship with Lebogang:');
      qspCall(s, 'journal', 'relindex', 'A242');
    }
    if (((s as any).npc_known ?? 0)?.['A243'] === 1) {
      scene.text('Friendship with Ermias:');
      qspCall(s, 'journal', 'relindex', 'A243');
    }
    if (((s as any).npc_known ?? 0)?.['A244'] === 1) {
      scene.text('Friendship with Farai:');
      qspCall(s, 'journal', 'relindex', 'A244');
    }
    if (((s as any).npc_known ?? 0)?.['A245'] === 1) {
      scene.text('Friendship with Haruna:');
      qspCall(s, 'journal', 'relindex', 'A245');
    }
    if (((s as any).npc_known ?? 0)?.['A246'] === 1) {
      scene.text('Friendship with Arendse:');
      qspCall(s, 'journal', 'relindex', 'A246');
    }
    if (((s as any).npc_known ?? 0)?.['A84'] === 1) {
      scene.text('Friendship with Kendra:');
      qspCall(s, 'journal', 'relindex', 'A84');
    }
    if (((s as any).npc_known ?? 0)?.['A247'] === 1) {
      scene.text('Friendship with Liliya:');
      qspCall(s, 'journal', 'relindex', 'A247');
    }
    if (((s as any).npc_known ?? 0)?.['A267'] === 1) {
      scene.text('Friendship with Mia:');
      qspCall(s, 'journal', 'relindex', 'A267');
    }
    if (((s as any).npc_known ?? 0)?.['A268'] === 1) {
      scene.text('Friendship with Yana:');
      qspCall(s, 'journal', 'relindex', 'A268');
    }
    scene.text('<center><h2>Former Pavlovsk Students</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A148'] === 1) {
      scene.text('Friendship with Mefodiy:');
      qspCall(s, 'journal', 'relindex', 'A148');
    }
    if (((s as any).npc_known ?? 0)?.['A3'] === 1) {
      scene.text('Friendship with Ivan:');
      qspCall(s, 'journal', 'relindex', 'A3');
    }
    if (((s as any).npc_known ?? 0)?.['A8'] === 1) {
      scene.text('Friendship with Svyatoslav:');
      qspCall(s, 'journal', 'relindex', 'A8');
    }
    if (((s as any).npc_known ?? 0)?.['A5'] === 1) {
      scene.text('Friendship with Fedor:');
      qspCall(s, 'journal', 'relindex', 'A5');
    }
    if (((s as any).npc_known ?? 0)?.['A150'] === 1) {
      scene.text('Friendship with Erast:');
      qspCall(s, 'journal', 'relindex', 'A150');
    }
    if (((s as any).npc_known ?? 0)?.['A141'] === 1) {
      scene.text('Friendship with Veronika:');
      qspCall(s, 'journal', 'relindex', 'A141');
    }
    if (((s as any).npc_known ?? 0)?.['A151'] === 1) {
      scene.text('Friendship with Evgeny:');
      qspCall(s, 'journal', 'relindex', 'A151');
    }
    if (((s as any).npc_known ?? 0)?.['A240'] === 1) {
      scene.text('Friendship with Natalia:');
      qspCall(s, 'journal', 'relindex', 'A240');
    }
    if (((s as any).npc_known ?? 0)?.['A9'] === 1) {
      scene.text('Friendship with Vitek:');
      qspCall(s, 'journal', 'relindex', 'A9');
    }
    if (((s as any).npc_known ?? 0)?.['A10'] === 1) {
      scene.text('Friendship with Dan:');
      qspCall(s, 'journal', 'relindex', 'A10');
    }
    if (((s as any).npc_known ?? 0)?.['A11'] === 1) {
      scene.text('Friendship with Vasily:');
      qspCall(s, 'journal', 'relindex', 'A11');
    }
    if (((s as any).npc_known ?? 0)?.['A154'] === 1) {
      scene.text('Friendship with Radomir:');
      qspCall(s, 'journal', 'relindex', 'A154');
    }
    if (((s as any).npc_known ?? 0)?.['A156'] === 1) {
      scene.text('Friendship with Arkadi:');
      qspCall(s, 'journal', 'relindex', 'A156');
    }
    if (((s as any).npc_known ?? 0)?.['A157'] === 1) {
      scene.text('Friendship with Roman:');
      qspCall(s, 'journal', 'relindex', 'A157');
    }
    if (((s as any).npc_known ?? 0)?.['A158'] === 1) {
      scene.text('Friendship with Valentin:');
      qspCall(s, 'journal', 'relindex', 'A158');
    }
    if (((s as any).npc_known ?? 0)?.['A145'] === 1) {
      scene.text('Friendship with Katyusha:');
      qspCall(s, 'journal', 'relindex', 'A145');
    }
    if (((s as any).npc_known ?? 0)?.['A20'] === 1) {
      scene.text('Friendship with Lena:');
      qspCall(s, 'journal', 'relindex', 'A20');
    }
    if (((s as any).npc_known ?? 0)?.['A21'] === 1) {
      scene.text('Friendship with Lera:');
      qspCall(s, 'journal', 'relindex', 'A21');
    }
    if (((s as any).npc_known ?? 0)?.['A24'] === 1) {
      scene.text('Friendship with Pauline:');
      qspCall(s, 'journal', 'relindex', 'A24');
    }
    if (((s as any).npc_known ?? 0)?.['A143'] === 1) {
      scene.text('Friendship with Alyona:');
      qspCall(s, 'journal', 'relindex', 'A143');
    }
    if (((s as any).npc_known ?? 0)?.['A189'] === 1) {
      scene.text('Friendship with Nikolai:');
      qspCall(s, 'journal', 'relindex', 'A189');
    }
    scene.text('<center><h2>Professors</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A254'] === 1) {
      scene.text('Friendship with Mr. Kovalyov:');
      qspCall(s, 'journal', 'relindex', 'A254');
    }
    if (((s as any).npc_known ?? 0)?.['A255'] === 1) {
      scene.text('Friendship with Mr. Pasternak:');
      qspCall(s, 'journal', 'relindex', 'A255');
    }
    if (((s as any).npc_known ?? 0)?.['A256'] === 1) {
      scene.text('Friendship with Mrs. Kovalchuk:');
      qspCall(s, 'journal', 'relindex', 'A256');
    }
    if (((s as any).npc_known ?? 0)?.['A269'] === 1) {
      scene.text('Friendship with Miss Marinova:');
      qspCall(s, 'journal', 'relindex', 'A269');
    }
    if (((s as any).npc_known ?? 0)?.['A270'] === 1) {
      scene.text('Friendship with Ms. Kudelina:');
      qspCall(s, 'journal', 'relindex', 'A270');
    }
    if (((s as any).npc_known ?? 0)?.['A271'] === 1) {
      scene.text('Friendship with Mr. Borisov:');
      qspCall(s, 'journal', 'relindex', 'A271');
    }
  }
  scene.text('<center><h2>Pavlovsk Relations</h2></center>');
  if (((s as any).npc_known ?? 0)?.['A27'] === 1) {
    scene.text('Friendship with Vera:');
    qspCall(s, 'journal', 'relindex', 'A27');
  }
  if (((s as any).npc_known ?? 0)?.['A54'] === 1) {
    scene.text('Friendship with Uncle Misha:');
    qspCall(s, 'journal', 'relindex', 'A54');
  }
  if (((s as any).npc_known ?? 0)?.['A57'] === 1) {
    scene.text('Friendship with Rex:');
    qspCall(s, 'journal', 'relindex', 'A57');
  }
  if (((s as any).npc_known ?? 0)?.['A217'] === 1) {
    scene.text('Friendship with Pavlin:');
    qspCall(s, 'journal', 'relindex', 'A217');
  }
  if (((s as any).npc_known ?? 0)?.['A112'] === 1) {
    scene.text('Friendship with Sergey Shulgin:');
    qspCall(s, 'journal', 'relindex', 'A112');
  }
  if (((s as any).npc_known ?? 0)?.['A119'] === 1) {
    scene.text('Friendship with Borislav:');
    qspCall(s, 'journal', 'relindex', 'A119');
  }
  scene.text('<center><h2>Gadukino Relations</h2></center>');
  if (((s as any).npc_known ?? 0)?.['A31'] === 1) {
    scene.text('Friendship with Elena (your great-grandmother):');
    qspCall(s, 'journal', 'relindex', 'A31');
  }
  if (((s as any).npc_known ?? 0)?.['A32'] === 1) {
    scene.text('Friendship with Zlatek (your great-grandfather):');
    qspCall(s, 'journal', 'relindex', 'A32');
  }
  if (((s as any).npc_known ?? 0)?.['A60'] === 1) {
    scene.text('Friendship with Mira:');
    qspCall(s, 'journal', 'relindex', 'A60');
  }
  if (((s as any).npc_known ?? 0)?.['A61'] === 1) {
    scene.text('Friendship with Kolyamba:');
    qspCall(s, 'journal', 'relindex', 'A61');
  }
  if (((s as any).npc_known ?? 0)?.['A62'] === 1) {
    scene.text('Friendship with Vasyan:');
    qspCall(s, 'journal', 'relindex', 'A62');
  }
  if (((s as any).npc_known ?? 0)?.['A63'] === 1) {
    scene.text('Friendship with Mitka:');
    qspCall(s, 'journal', 'relindex', 'A63');
  }
  if (((s as any).npc_known ?? 0)?.['A64'] === 1) {
    scene.text('Friendship with Afanasiy:');
    qspCall(s, 'journal', 'relindex', 'A64');
  }
  if (((s as any).npc_known ?? 0)?.['A65'] === 1) {
    scene.text('Friendship with Vtialiy:');
    qspCall(s, 'journal', 'relindex', 'A65');
  }
  if (((s as any).npc_known ?? 0)?.['A221'] === 1) {
    scene.text('Friendship with Grigory:');
    qspCall(s, 'journal', 'relindex', 'A221');
  }
  if (((s as any).npc_known ?? 0)?.['A172'] === 1) {
    scene.text('Friendship with Andrei (hunter):');
    qspCall(s, 'journal', 'relindex', 'A172');
  }
  if (((s as any).npc_known ?? 0)?.['A173'] === 1) {
    scene.text('Friendship with Igor (hunter):');
    qspCall(s, 'journal', 'relindex', 'A173');
  }
  if (((s as any).npc_known ?? 0)?.['A174'] === 1) {
    scene.text('Friendship with Sergei (hunter):');
    qspCall(s, 'journal', 'relindex', 'A174');
  }
  scene.text('<center><h2>Saint Petersburg Relations</h2></center>');
  if (((s as any).npc_QW ?? 0)?.['A192']  > 0) {
    scene.text('Friendship with Nastya:');
    qspCall(s, 'journal', 'relindex', 'A192');
  }
  if (((s as any).npc_known ?? 0)?.['A218'] === 1) {
    scene.text('Friendship with Tanya:');
    qspCall(s, 'journal', 'relindex', 'A218');
  }
  if (((s as any).npc_known ?? 0)?.['A219'] === 1) {
    scene.text('Friendship with Kat:');
    qspCall(s, 'journal', 'relindex', 'A219');
  }
  if (((s as any).npc_known ?? 0)?.['A220'] === 1) {
    scene.text('Friendship with Vika:');
    qspCall(s, 'journal', 'relindex', 'A220');
  }
  if (((s as any).npc_known ?? 0)?.['A93'] === 1) {
    scene.text('Friendship with Ira:');
    qspCall(s, 'journal', 'relindex', 'A93');
  }
  if (((s as any).npc_known ?? 0)?.['A43'] === 1) {
    scene.text('Friendship with Tamara:');
    qspCall(s, 'journal', 'relindex', 'A43');
  }
  if (((s as any).npc_known ?? 0)?.['A35'] === 1) {
    scene.text('Friendship with Mikhail Kuznetsov (your biological father):');
    qspCall(s, 'journal', 'relindex', 'A35');
  }
  if (((s as any).npc_known ?? 0)?.['A169'] === 1) {
    scene.text('Friendship with Dima:');
    qspCall(s, 'journal', 'relindex', 'A169');
  }
  if (((s as any).npc_known ?? 0)?.['A89'] === 1) {
    scene.text('Friendship with Eugene:');
    qspCall(s, 'journal', 'relindex', 'A89');
  }
  if (((s as any).npc_known ?? 0)?.['A216'] === 1) {
    scene.text('Friendship with Martin:');
    qspCall(s, 'journal', 'relindex', 'A216');
  }
  if (((s as any).kid ?? 0) > 0  ||  Object.keys((s as any).lover ?? {}).length > 0) {
    scene.text('<center><h2>Lovers & Children</h2></center>');
    if (((s as any).kid ?? 0) > 0) {
      (s as any).i = 0;
      if (((s as any).kid ?? 0) === 1) {
        // TODO-QSP: dynamic text: You have a child, a <<$polreb[0]>> named <<$kidname[0]>>. Born <<daykid[0]>>-<<m...
        scene.text(`You have a child, a ${qspUntranslated(s, "polreb[0]", { location: "journal" })} named ${qspUntranslated(s, "kidname[0]", { location: "journal" })}. Born ${qspUntranslated(s, "daykid[0]", { location: "journal" })}-${qspUntranslated(s, "monthkid[0]", { location: "journal" })}-${qspUntranslated(s, "yearkid[0]", { location: "journal" })}. Aged ${qspUntranslated(s, "kidage[0]", { location: "journal" })}.`);
      } else {
        scene.text('You have children:');
        // TODO-QSP: :LoopKidCounter
        if (((s as any).i ?? 0) < ((s as any).kid ?? 0)) {
          // TODO-QSP: dynamic text: <br> a <<$polreb[i]>> named <<$kidname[i]>>. Born <<daykid[i]>>-<<monthkid[i]>>-...
          scene.text(`<br> a ${((s as any).polreb ?? 0)?.[String((s as any).i ?? 0)]} named ${((s as any).kidname ?? 0)?.[String((s as any).i ?? 0)]}. Born ${((s as any).daykid ?? 0)?.[String((s as any).i ?? 0)]}-${((s as any).monthkid ?? 0)?.[String((s as any).i ?? 0)]}-${((s as any).yearkid ?? 0)?.[String((s as any).i ?? 0)]}. Aged ${((s as any).kidage ?? 0)?.[String((s as any).i ?? 0)]}.`);
          (s as any).i = ((s as any).i ?? 0) + (1);
          // TODO-QSP: jump 'LoopKidCounter'
        }
      }
    }
    (s as any).jnl_i = 0;
    (s as any).jnl_max_i = 0;
    // TODO-QSP: :loverjournalloop
    if (((s as any).jnl_i ?? 0) < ((s as any).jnl_max_i ?? 0)) {
      // TODO-QSP: gs 'npcStat', $lover[jnl_i], 'j'
      if (((((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID10 ?? 0)]).slice((1)-1, ((1)-1)+(2))) === 'ex') {
        (s as any).jnl_i = ((s as any).jnl_i ?? 0) + (1);
        // TODO-QSP: jump 'loverjournalloop'
      }
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID10 ?? 0)] === 'husband') {
        // TODO-QSP: dynamic text: You have been married for <<daystart - spouseVars['marry_day']>> days. Your husb...
        scene.text(`You have been married for ${((s as any).daystart ?? 0) - ((s as any).spouseVars ?? {})?.['marry_day']} days. Your husband ${((s as any).npcdesc10 ?? 0)} is ${((s as any).npcheight10 ?? 0)} and ${((s as any).npcbuild10 ?? 0)} with ${((s as any).npchair10 ?? 0)} hair. ${((s as any).npcdesc10 ?? 0)} is usually wearing ${((s as any).npcClo10 ?? 0)}. Member ${((s as any).dick_desc10 ?? 0)} cock and ${((s as any).dick_girth10 ?? 0)}. Relationship ${((s as any).npc_rel ?? 0)?.[String((s as any).npcID10 ?? 0)]}.`);
      } else {
        // TODO-QSP: dynamic text: Your <<$npcrelat10>> <<$npcdesc10>> is <<$npcheight10>> and <<$npcbuild10>> with...
        scene.text(`Your ${((s as any).npcrelat10 ?? 0)} ${((s as any).npcdesc10 ?? 0)} is ${((s as any).npcheight10 ?? 0)} and ${((s as any).npcbuild10 ?? 0)} with ${((s as any).npchair10 ?? 0)} hair. ${((s as any).npcdesc10 ?? 0)} is usually wearing ${((s as any).npcClo10 ?? 0)}. Your relationship is ${((s as any).npc_rel ?? 0)?.[String((s as any).npcID10 ?? 0)]} after ${((s as any).npc_dates ?? 0)?.[String((s as any).npcID10 ?? 0)]} dates and ${((s as any).daystart ?? 0) - ((s as any).npc_daygenerated ?? 0)?.[String((s as any).npcID10 ?? 0)]} days dating.`);
      }
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID10 ?? 0)] > 1) {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID10 ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$Xec10>> is timid and lacks confidence.
          scene.text(`${((s as any).Xec10 ?? 0)} is timid and lacks confidence.`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID10 ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$Xec10>> has a cheerful and sociable personality.
            scene.text(`${((s as any).Xec10 ?? 0)} has a cheerful and sociable personality.`);
          } else {
            // TODO-QSP: dynamic text: <<$Xec10>> is short-tempered and strict.
            scene.text(`${((s as any).Xec10 ?? 0)} is short-tempered and strict.`);
          }
        }
      }
      (s as any).jnl_i = ((s as any).jnl_i ?? 0) + (1);
      // TODO-QSP: jump 'loverjournalloop'
    }
  }
  scene.build();
}

function enterGeneraltab(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>General Information</h2></center>');
  if (Object.keys((s as any).portfolio_locations ?? {}).length > 0  ||  Object.keys((s as any).portfolio_people ?? {}).length > 0) {
    scene.actions([
      { label: 'View your photography portfolio', goto: ['journal_portfolio', ''] },
    ]);
  }
  scene.text('<br><center><a href="exec: gs \'journal\', \'locations\'">Locations</a></center>');
  scene.text('<br><center><a href="exec: gs \'journal\', \'family\'">Family</a></center>');
  scene.text('<br><center><a href="exec: gs \'journal\', \'pav_res\'">Pavlovsk Residents</a></center>');
  scene.text('<br><center><a href="exec: gs \'journal\', \'gad_res\'">Gadukino Residents</a></center>');
  scene.text('<br><center><a href="exec: gs \'journal\', \'city_res\'">City Residents</a></center>');
  if (((s as any).ballet ?? 0)?.['blocker'] > 0  ||  ((s as any).balletqw ?? 0)?.['school'] > 0) {
    scene.text('<br><center><a href="exec: gs \'journal\', \'ballet\'">Ballet Career</a></center>');
  }
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    scene.text('<br><center><a href="exec: gs \'journal_school\', \'school\'">School</a></center>');
    scene.text('<br><center><a href="exec: gs \'journal_school\', \'coursesinfo\'">School Courses and Grades</a></center>');
  }
  if (((s as any).university ?? 0)?.['student'] === 1) {
    scene.text('<br><center><a href="exec: gs \'journal\', \'uni\'">University</a></center>');
  }
  scene.text('<br><center><a href="exec: gs \'journal\', \'clothing\'">Clothing information</a></center>');
  scene.build();
}

function enterNotestab(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Notes</h2></center>');
  scene.text('Create notes to keep track of any information you need.');
  scene.text('<a href="exec: $zapis[] = input(\'What do you want to record?\') & gt \'journal\',\'notestab\' ">Make a note</a>');
  (s as any).jur_temp = 0;
  // TODO-QSP: :jur_loop
  if (((s as any).jur_temp ?? 0) < Object.keys((s as any).zapis ?? {}).length) {
    // TODO-QSP: dynamic text: <<$zapis[jur_temp]>> <a href="exec: dynamic 'killvar''$zapis'',<<jur_temp>> & gt...
    scene.text(`${((s as any).zapis ?? 0)?.[String((s as any).jur_temp ?? 0)]} <a href="exec: dynamic 'killvar'$zapis',${((s as any).jur_temp ?? 0)} & gt 'journal', 'notestab'' ">Delete</a>`);
    (s as any).jur_temp = ((s as any).jur_temp ?? 0) + (1);
    // TODO-QSP: jump 'jur_loop'
  }
  scene.build();
}

function enterNotificationLog(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Notifications</h2></center>');
  if (Object.keys((s as any).notification_log ?? {}).length === 0) {
    scene.text('Notification log is empty.');
  } else {
    (s as any).notification_log_loop_index = 0;
    // TODO-QSP: :notification_log_loop
    (s as any).notification_log_loop_index = ((s as any).notification_log_loop_index ?? 0) - (1);
    if (((s as any).notification_log_loop_index ?? 0) >= 0) {
      // TODO-QSP: jump 'notification_log_loop'
    }
  }
  scene.build();
}

function enterBallet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h1>Ballet Career</h1></center>');
  scene.img('images/locations/pushkin/ballet_events/dream_ballet.jpg');
  scene.text('Пан или пропал (You become the master or, leave).');
  scene.text('A narrative based mod and activities for the Dancer start. The MC has been given a grant to attend an intensive 6 day summer class with an assessment that, if passed, can lead to a weekly rehearsal and a Winter dance show in December.');
  scene.text('Note: This storyline will play out over a long time span and your actions will have consequences that won\'t initially be obvious. Some of this is dependent on the development of the main Girl Life codebase.');
  scene.text('Current and planned features:');
  scene.text('   • A new dancer start option, with other starts being granted access later or uni/city years paying to join.');
  scene.text('   • A 6 day intensive course during the school summer break - look for the letter in your parents kitchen to notify you.');
  scene.text('   • New pen friend(s), with meet ups and theatre or ballet nights with family or partner.');
  scene.text('   • A new dance instructor, whose intentions may prevent MC from joining the Pushkin Ballet Company or could have far ranging consequences on both herself and NPC characters.');
  scene.text('   • New dance gigs. At each rehearsal, there\'s a chance that you may get a dance job for the local theatre or the city if you pass with merit.');
  scene.text('NB: There is no sex acts in this mod at present. If you wish to write such scenes based on the content, then contact me on the Girl Life Discord.');
  scene.text('<center><h2>In Memoriam — Hooded Silence.</h2></center>');
  scene.text('This content is being maintained as part of Hooded Silence\'s legacy. I have approximately 1-2 years of original content to add but if you wish to contribute, then note that there is no sexual content in this mod until at least year 3 as per his notes.');
  scene.text('This is a narrative driven addition to the game and your actions do and will count towards what happens both for yourself and others. These moments are easily missable but they will represent consequences of your decisions such as:');
  scene.text('   • Failure to adhere to the residential school\'s rules or live up to the high standards of the school.');
  scene.text('   • Get drunk too often or fall pregnant - kicked off the Corp De Ballet.');
  scene.text('   • Fail to maintain your appearance - reprimands or loss of income, leading to expulsion.');
  scene.text('These are the obvious repercussions, but there will be subtle consequences for your interactions with NPCs. This mod is meant to be played blind for your initial playthrough and the only feedback will be the varying conversations.');
  scene.build();
}

function enterClothing(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center>Clothing information</center>');
  scene.text('Clothing has a strength value, which decreases by 1 for every day you wear that outfit. At 0 it is ruined and you will have to throw it away.');
  scene.text('You can attempt to fix outfits when their strength is very low and you have a high enough sewing skill. Clothes you throw away will appear back in the shop.');
  scene.text('Quality of clothing is ranked in this order:');
  scene.text('  Crappy quality outfit');
  scene.text('  Very low quality outfit');
  scene.text('  Low quality outfit');
  scene.text('  Average quality outfit');
  scene.text('  Reasonable quality outfit');
  scene.text('  Good quality outfit');
  scene.text('  Outstanding quality outfit');
  qspCall(s, 'journal', 'leaveactions');
  scene.build();
}

function enterUni(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>University</h2></center>');
  if (((s as any).university ?? 0)?.['diploma'] > 0) {
    // TODO-QSP: dynamic text: You have graduated from the University of St. Petersburg with a degree in ' + $f...
    scene.text('You have graduated from the University of St. Petersburg with a degree in \' + $func(\'uni_programs\', \'get_program_name\') + \'.');
  } else {
    // TODO-QSP: dynamic text: You are currently enrolled in the ' + $func('string', 'parse_number', university...
    scene.text('You are currently enrolled in the \' + $func(\'string\', \'parse_number\', university[\'enrolled_in_semester\'], \'ordinal\') + \' semester of the \' + $func(\'uni_programs\', \'get_program_name\') + \' degree at the University of St. Petersburg.');
  }
  if (((s as any).university ?? 0)?.['elective1'] !== ''  ||  ((s as any).university ?? 0)?.['elective2'] !== ''  ||  ((s as any).university ?? 0)?.['elective3'] !== '') {
    // TODO-QSP: dynamic text: You are taking the following elective classes this semester: <<$university['elec...
    scene.text(`You are taking the following elective classes this semester: ${((s as any).university ?? 0)?.['elective1']}, ${((s as any).university ?? 0)?.['elective2']}, ${((s as any).university ?? 0)?.['elective1']}.`);
  }
  (s as any).j = 1;
  // TODO-QSP: :semester_loop
  if (((s as any).j ?? 0) <= ((s as any).university ?? 0)?.['semester_passed']) {
    qspCall(s, 'grades', 'assign_grade_description', 'uni_' + qspUntranslated(s, "university['enrolled_in']>", { location: "journal" }) + '_semester_<<j>>');
    // TODO-QSP: dynamic text: You passed the ' + $func('string', 'parse_number', j, 'ordinal') + ' semester wi...
    scene.text('You passed the \' + $func(\'string\', \'parse_number\', j, \'ordinal\') + \' semester with the following grades:');
    (s as any).k = 0;
    // TODO-QSP: :class_loop
    if (((s as any).class_list_institution ?? 0)?.[String((s as any).k ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).j ?? 0)) {
      // TODO-QSP: dynamic text: <<$class_list_name[k]>>: <<$class_grade_desc['<<$class_list_institution[k]>>_<<$...
      scene.text(`${((s as any).class_list_name ?? 0)?.[String((s as any).k ?? 0)]}: ${qspUntranslated(s, "class_grade_desc['<<class_list_institution[k]", { location: "journal" })}_${((s as any).class_list_name ?? 0)?.[String((s as any).k ?? 0)]}_grade']>>`);
    }
    (s as any).k = ((s as any).k ?? 0) + (1);
    if (((s as any).k ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
      // TODO-QSP: jump 'class_loop'
    }
  }
  (s as any).j = ((s as any).j ?? 0) + (1);
  if (((s as any).j ?? 0) < 8) {
    // TODO-QSP: jump 'semester_loop'
  }
  if (((s as any).university ?? 0)?.['semester_passed'] === ((s as any).university ?? 0)?.['enrolled_in_semester']  &&  ((s as any).university ?? 0)?.['diploma'] === 0) {
    scene.text('You need to register for your next semester at the university administration building.');
  } else {
    if (((s as any).university ?? 0)?.['break'] === 1) {
      scene.text('You currently have a break between semesters.');
      if (((s as any).university ?? 0)?.['semester_week'] === -1) {
        scene.text('The next semester will start next week.');
      }
      scene.text('<center><h2>Class schedule for Next Semester</h2></center>');
      // TODO-QSP: 'Monday: '    + $func('uni_programs', 'get_first_period', 'monday'  ) + ' ' + $func('uni_programs', ...
      // TODO-QSP: 'Tuesday: '    + $func('uni_programs', 'get_first_period', 'tuesday'  ) + ' ' + $func('uni_programs'...
      // TODO-QSP: 'Wednesday: '  + $func('uni_programs', 'get_first_period', 'wednesday'  ) + ' ' + $func('uni_program...
      // TODO-QSP: 'Thursday: '  + $func('uni_programs', 'get_first_period', 'thursday'  ) + ' ' + $func('uni_programs'...
    } else {
      if (((s as any).university ?? 0)?.['semester_week'] >  0) {
        if (((s as any).university ?? 0)?.['semester_week'] < 11) {
          // TODO-QSP: dynamic text: You are in the ' + $func('string', 'parse_number', university['semester_week'], ...
          scene.text('You are in the \' + $func(\'string\', \'parse_number\', university[\'semester_week\'], \'ordinal\') + \' week of the semester, which last 15 weeks.');
        } else {
          // TODO-QSP: dynamic text: You are in the ' + $str(university['semester_week']) + 'th week of the semester,...
          scene.text('You are in the \' + $str(university[\'semester_week\']) + \'th week of the semester, which last 15 weeks.');
        }
        scene.text('<center><h2>Class schedule</h2></center>');
        // TODO-QSP: 'Monday: '    + $func('uni_programs', 'get_first_period', 'monday'  ) + ' ' + $func('uni_programs', ...
        // TODO-QSP: 'Tuesday: '    + $func('uni_programs', 'get_first_period', 'tuesday'  ) + ' ' + $func('uni_programs'...
        // TODO-QSP: 'Wednesday: '  + $func('uni_programs', 'get_first_period', 'wednesday'  ) + ' ' + $func('uni_program...
        // TODO-QSP: 'Thursday: '  + $func('uni_programs', 'get_first_period', 'thursday'  ) + ' ' + $func('uni_programs'...
        scene.text('<center><h2>Grades</h2></center>');
        qspCall(s, 'grades', 'assign_grade_description', 'uni_' + qspUntranslated(s, "university['enrolled_in']>", { location: "journal" }) + '_semester_<<university[\'enrolled_in_semester\']>>');
        (s as any).j = 0;
        // TODO-QSP: :grade_loop
        if (((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
          if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_grade'] >= (3 * ((s as any).university ?? 0)?.['semester_week'] + 52)) {
            // TODO-QSP: dynamic text: You think you're doing great in <<$class_list_name[j]>> and will probably pass w...
            scene.text(`You think you're doing great in ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} and will probably pass with a top grade if you keep this up.`);
            if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) {
              scene.text('So far you have not done enough work this week an if you don\'t go to more classes and are active there or study more outside classes, you will not just fail to keep up, you will actually make your chances of getting good grade worse.');
            } else {
              if (3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) < 3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_max'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point'])) {
                scene.text('The work you have put in this week so far is not enough to keep up, but at least you are not falling to much behind.');
              } else {
                scene.text('You have so far put in the amount of work this week to keep up.');
              }
            }
          } else {
            if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_grade'] > (2 * ((s as any).university ?? 0)?.['semester_week'] + 32)) {
              // TODO-QSP: dynamic text: You're following the <<$class_list_name[j]>> class well and will probably pass w...
              scene.text(`You're following the ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} class well and will probably pass with a good grade if you keep this up, but to get the top mark you'll need to put in some more effort.`);
              if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) {
                scene.text('So far you have not done enough work this week an if you don\'t go to more classes and are active there or study more outside classes, you will not just fail to keep up, you will actually make your chances of getting good grade worse.');
              } else {
                if (3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) < 2 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_max\'] - class[\'' + ((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point'])) {
                  scene.text('The work you have put in this week so far is not enough to keep up, but at least you are not falling to much behind.');
                } else {
                  if (3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) >= 4 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_max'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point'])) {
                    scene.text('You have so far put in more than enough work this week, and you situation is improving you keeping this up and you might end with good grade instead of a decent one.');
                  } else {
                    scene.text('You have so far put in the amount of work this week to keep up.');
                  }
                }
              }
            } else {
              if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_grade'] >= (1 * ((s as any).university ?? 0)?.['semester_week'] + 32)) {
                // TODO-QSP: dynamic text: You have trouble following the <<$class_list_name[j]>> class, but will probably ...
                scene.text(`You have trouble following the ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} class, but will probably still pass. If you want a good grade, then you'll really need to do something about it.`);
                if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) {
                  scene.text('So far you have not done enough work this week an if you don\'t go to more classes and are active there or study more outside classes, you will not just fail to keep up, you will actually make your chances of getting good grade worse.');
                } else {
                  if (3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) < (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_max'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point'])) {
                    scene.text('The work you have put in this week so far is not enough to keep up, but at least you are not falling to much behind.');
                  } else {
                    if (3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) >= 3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_max'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point'])) {
                      scene.text('You have so far put in more than enough work this week, and you situation is improving you might soon not have trouble following the class anymore.');
                    } else {
                      scene.text('You have so far put in the amount of work this week to keep up.');
                    }
                  }
                }
              } else {
                if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_grade'] < 40) {
                  // TODO-QSP: dynamic text: You will fail your <<$class_list_name[j]>> class unless you do something about i...
                  scene.text(`You will fail your ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} class unless you do something about it right now. It might even be too late to catch up.`);
                  if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) {
                    scene.text('So far you have not done enough work this week an if you don\'t go to more classes and are active there or study more outside classes, you be even further from passing the class.');
                  } else {
                    if (3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) / (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_max'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) >= (40 - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_grade'])) {
                      scene.text('You have put in enough work so far this week that you think you can pass the class if you keep this up for the rest of the semester.');
                    } else {
                      scene.text('The amount of work you have put in this week so far will improve your chance, but it is still not enough to guarantee that you pass the class.');
                    }
                  }
                } else {
                  // TODO-QSP: dynamic text: You are hopelessly behind in your <<$class_list_name[j]>> class, but can probabl...
                  scene.text(`You are hopelessly behind in your ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} class, but can probably still pass. Any hope of getting a good grade will require that you start doing something about it right now.`);
                  if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) {
                    scene.text('So far you have not done enough work this week an if you don\'t go to more classes and are active there or study more outside classes, you will not just fail to keep up, you will actually make your chances of even passing the class worse.');
                  } else {
                    if (3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) < (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_max'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point'])) {
                      scene.text('The work you have put in this week so far is not enough to keep up, but at least you are not falling to much behind.');
                    } else {
                      if (3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain'] + ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_optional_weekly_grade_gain'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point']) >= 3 * (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_max'] - ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_weekly_grade_gain_breakeven_point'])) {
                        scene.text('The work you have put in so far is more than enough work this week, and you situation is improving.');
                      } else {
                        scene.text('You have so far put in the amount of work this week to keep up, but not really improve which is not good in your situation.');
                      }
                    }
                  }
                }
              }
            }
          }
        }
        (s as any).j = ((s as any).j ?? 0) + (1);
        if (((s as any).j ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
          // TODO-QSP: jump 'grade_loop'
        }
      } else {
        if (((s as any).university ?? 0)?.['exam_week'] > 0) {
          // TODO-QSP: 'You are in the ' + iif(university['exam_week'] = 1, 'first', 'second') + ' of the two weeks of exam...
          qspCall(s, 'grades', 'assign_grade_description', 'uni_' + qspUntranslated(s, "university['enrolled_in']>", { location: "journal" }) + '_semester_<<university[\'enrolled_in_semester\']>>');
          (s as any).j = 0;
          // TODO-QSP: :exam_loop
          if (((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
            if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_exam_done'] === 1) {
              // TODO-QSP: dynamic text: You completed your <<$class_list_name[j]>> exam and think you will get an <<$cla...
              scene.text(`You completed your ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} exam and think you will get an ${qspUntranslated(s, "class_grade_desc['<<class_list_institution[j]", { location: "journal" })}_${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]}_grade']>>.`);
            } else {
              if (qspFunc(s, 'uni_programs', 'is_exam_over', ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]) === 1) {
                // TODO-QSP: dynamic text: Your exam <<$class_list_name[j]>> is over, but you did not attend. This means yo...
                scene.text(`Your exam ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} is over, but you did not attend. This means you will fail the class and therefore the semester.`);
              } else {
                if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_grade'] < 40) {
                  // TODO-QSP: dynamic text: If your <<$class_list_name[j]>> exam was today, then you would fail. Time to hit...
                  scene.text(`If your ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} exam was today, then you would fail. Time to hit the books if you don't want to fail the semester.`);
                } else {
                  if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_grade'] < 70) {
                    // TODO-QSP: dynamic text: You think you've prepared enough to pass your <<$class_list_name[j]>> exam, but ...
                    scene.text(`You think you've prepared enough to pass your ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} exam, but if you want a good grade, then you'll need to do some serious studying.`);
                  } else {
                    if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_grade'] < 90) {
                      // TODO-QSP: dynamic text: You think that you've prepared pretty well for your <<$class_list_name[j]>> exam...
                      scene.text(`You think that you've prepared pretty well for your ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} exam and will probably get a 4. With some more studying, you might get a 5.`);
                    } else {
                      if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).j ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)] + '_grade'] < 100) {
                        // TODO-QSP: dynamic text: You think you're well prepared for your <<$class_list_name[j]>> exam and will pr...
                        scene.text(`You think you're well prepared for your ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} exam and will probably pass with a 5, but a little more studying never hurts.`);
                      } else {
                        // TODO-QSP: dynamic text: You think you're well prepared for your <<$class_list_name[j]>> exam and will pr...
                        scene.text(`You think you're well prepared for your ${((s as any).class_list_name ?? 0)?.[String((s as any).j ?? 0)]} exam and will probably pass with the highest mark possible.`);
                      }
                    }
                  }
                }
              }
            }
          }
          (s as any).j = ((s as any).j ?? 0) + (1);
          if (((s as any).j ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
            // TODO-QSP: jump 'exam_loop'
          }
        }
      }
    }
  }
  scene.text('<center><h2>Students and Teachers</h2></center>');
  scene.text('<br><center><a href="exec: gs \'journal_uni\', \'professors\'">Professors</a></center>');
  scene.text('<br><center><a href="exec: gs \'journal_uni\', \'pavlovsk_university_students\'">University Students from Pavlovsk</a></center>');
  scene.text('<br><center><a href="exec: gs \'journal_uni\', \'university_students\'">Other University Students</a></center>');
  scene.text('<br><center><a href="exec: gs \'journal_uni\', \'former_pavlovsk_students\'">Former Pavlovsk Students</a></center>');
  qspCall(s, 'journal', 'leaveactions');
  scene.actions([
    { label: 'Go back', goto: ['journal', 'generaltab'] },
  ]);
  scene.build();
}

function enterLocations(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Pavlovsk</h2></center>');
  scene.text('Pavlovsk is a small town. It is somewhat of a tourist trap thanks to the Catharina Palace and the former palace grounds, which have been converted into a large park centered around the train station. There is an open air market near the train station that is open year round where many bargains can be found. The cafe where your mother works can also be found near the train station. It caters to the visitors coming in by train. The downtown area contains businesses and some middle class housing, while the residential area is a mixture of houses and old Soviet era apartment blocks.');
  scene.text('The wealthier families live in large houses near the park on the outskirts of town, while the poorest homes are found near the old industrial area where several factories have long since been abandoned. The only factory still open is the G&M clothing factory, which also has a local store front and a tailor that can adjust your clothing. The industrial area is now mostly home to prostitutes and drug dealers and is not considered a safe area to walk around at night. Despite being a tourist destination, the area is seen as fairly poor and without many jobs.');
  scene.text('<center><h2>Gadukino</h2></center>');
  scene.text('You\'ve spent several summers at your grandparents\' village. It\'s a small village where everyone is very tightly knit together. You remember spending your days playing with the local children at the river or visiting the little shop that had everything a kid needed. When your great grandparents were younger, they used to take you out into the woods where you picked mushrooms and berries. Your great grandfather also showed you around the hunting grounds and told you all kind of stories about the hunters that visit the area.');
  scene.text('<center><h2>St. Petersburg</h2></center>');
  scene.text('You\'ve heard many rumors about the city from both family members and school friends. They all say it\'s both a great and bad place. The few memories you have are connected to the big park that you and your family visited once, which had a large amusement park with lots of rides. You also know about the University because you\'ve overheard Anya and your mother argue about it. Sometimes, your mother would drag you and Anya along to the city mall while she was visiting the beauty salon. You remember running through the stores asking your mother to buy you clothes.');
  qspCall(s, 'journal', 'leaveactions');
  scene.actions([
    { label: 'Go back', goto: ['journal', 'generaltab'] },
  ]);
  scene.build();
}

function enterFamily(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Family</h2></center>');
  qspCall(s, 'journal_NPC_information', 'A29');
  qspCall(s, 'journal_NPC_information', 'A35');
  qspCall(s, 'journal_NPC_information', 'A28');
  qspCall(s, 'journal_NPC_information', 'A33');
  qspCall(s, 'journal_NPC_information', 'A34');
  qspCall(s, 'journal_NPC_information', 'A30');
  qspCall(s, 'journal_NPC_information', 'A55');
  qspCall(s, 'journal_NPC_information', 'A31');
  qspCall(s, 'journal_NPC_information', 'A32');
  qspCall(s, 'journal_NPC_information', 'A54');
  qspCall(s, 'journal', 'leaveactions');
  if (((s as any).locArgs?.[0] ?? 0) === 'pav_res') {
    qspCall(s, 'journal', 'journalmenu');
    scene.text('<center><h2>Pavlovsk Residents</h2></center>');
    if (((s as any).yearstart ?? 0) > 1) {
      qspCall(s, 'journal_NPC_information', 'A148', 'uni');
      qspCall(s, 'journal_NPC_information', 'A3', 'uni');
      qspCall(s, 'journal_NPC_information', 'A5', 'uni');
      qspCall(s, 'journal_NPC_information', 'A150', 'uni');
      qspCall(s, 'journal_NPC_information', 'A141', 'uni');
      qspCall(s, 'journal_NPC_information', 'A151', 'uni');
      qspCall(s, 'journal_NPC_information', 'A240', 'uni');
      qspCall(s, 'journal_NPC_information', 'A9', 'uni');
      qspCall(s, 'journal_NPC_information', 'A10', 'uni');
      qspCall(s, 'journal_NPC_information', 'A11', 'uni');
      qspCall(s, 'journal_NPC_information', 'A157', 'uni');
      qspCall(s, 'journal_NPC_information', 'A145', 'uni');
      qspCall(s, 'journal_NPC_information', 'A24', 'uni');
      qspCall(s, 'journal_NPC_information', 'A189', 'uni');
      qspCall(s, 'journal_NPC_information', 'A20', 'uni');
      qspCall(s, 'journal_NPC_information', 'A21', 'uni');
      qspCall(s, 'journal_NPC_information', 'A143', 'uni');
    }
    qspCall(s, 'journal_NPC_information', 'A112');
    qspCall(s, 'journal', 'leaveactions');
    scene.actions([
      { label: 'Go back', goto: ['journal', 'generaltab'] },
    ]);
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'gad_res') {
      qspCall(s, 'journal', 'journalmenu');
      scene.text('<center><h2>Gadukino Residents</h2></center>');
      qspCall(s, 'journal_NPC_information', 'A31');
      qspCall(s, 'journal_NPC_information', 'A32');
      if (((s as any).npc_known ?? 0)?.['A60'] === 1) {
        qspCall(s, 'journal_NPC_information', 'A60');
      }
      qspCall(s, 'journal_NPC_information', 'A63');
      if (((s as any).GadBoy ?? 0)?.['first_drink'] > 1) {
        qspCall(s, 'journal_NPC_information', 'A61');
      }
      if (((s as any).GadBoy ?? 0)?.['first_drink'] > 1) {
        qspCall(s, 'journal_NPC_information', 'A62');
      }
      if (((s as any).npc_known ?? 0)?.['A60'] === 1) {
        qspCall(s, 'journal_NPC_information', 'A64');
      }
      if (((s as any).npc_known ?? 0)?.['A60'] === 1) {
        qspCall(s, 'journal_NPC_information', 'A65');
      }
      if (((s as any).npc_QW ?? 0)?.['A221'] > 0) {
        qspCall(s, 'journal_NPC_information', 'A221');
      }
      if (((s as any).hunterVars ?? 0)?.['were_met'] > 0) {
        qspCall(s, 'journal_NPC_information', 'A172');
        qspCall(s, 'journal_NPC_information', 'A173');
        qspCall(s, 'journal_NPC_information', 'A174');
      }
      qspCall(s, 'journal', 'leaveactions');
      scene.actions([
        { label: 'Go back', goto: ['journal', 'generaltab'] },
      ]);
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'city_res') {
        qspCall(s, 'journal', 'journalmenu');
        scene.text('<center><h2>City Residents</h2></center>');
        if (((s as any).yearstart ?? 0) > 1) {
          qspCall(s, 'journal_NPC_information', 'A154', 'uni');
          qspCall(s, 'journal_NPC_information', 'A156', 'uni');
          qspCall(s, 'journal_NPC_information', 'A158', 'uni');
        }
        qspCall(s, 'journal', 'leaveactions');
        scene.actions([
          { label: 'Go back', goto: ['journal', 'generaltab'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Go back', goto: ['journal', 'generaltab'] },
  ]);
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
    case 'relationstab':
      enterRelationstab(s, scene);
      break;
    case 'generaltab':
      enterGeneraltab(s, scene);
      break;
    case 'notestab':
      enterNotestab(s, scene);
      break;
    case 'notification_log':
      enterNotificationLog(s, scene);
      break;
    case 'ballet':
      enterBallet(s, scene);
      break;
    case 'clothing':
      enterClothing(s, scene);
      break;
    case 'uni':
      enterUni(s, scene);
      break;
    case 'locations':
      enterLocations(s, scene);
      break;
    case 'family':
      enterFamily(s, scene);
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
