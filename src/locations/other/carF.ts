import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEnddrive(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['car_funcs', 'goto_car'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'carF', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  // TODO-QSP: dynamic text: <center><b><<$car['name']>></b></center>
  scene.text(`<center><b>${((s as any).car ?? 0)?.['name']}</b></center>`);
  scene.img(`images/pc/items/accessories/car/car${((s as any).car ?? 0)?.['ID']}.jpg`);
  if (((s as any).kanistra ?? 0) > 0) {
    // TODO-QSP: dynamic text: In the trunk ' + iif(kanistra = 1, 'is 1 canister', 'are <<kanistra>> canisters'...
    scene.text(`In the trunk ' + iif(kanistra = 1, 'is 1 canister', 'are ${((s as any).kanistra ?? 0)} canisters') + ' of gasoline. Each canister contains 5 liters of gasoline.`);
    if (((s as any).car ?? 0)?.['tank'] - ((s as any).car ?? 0)?.['fuel'] >= 5) {
      scene.actions([
        { label: 'Pour gasoline into the tank', handler: (st: GameState) => {
    if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = ((s as any).car['fuel'] ?? 0) + (5);
    (s as any).kanistra = ((s as any).kanistra ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.text('You empty the canister of gasoline into the tank.');
    scene.actions([
      { label: 'Move away', goto: ['carF', 'start'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the car', goto: ['car_funcs', 'goto_car'] },
    { label: 'Get in the car', goto: ['carF', 'salon'] },
  ]);
  scene.build();
}

function enterSalon(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><<$car['name']>></b></center>
  scene.text(`<center><b>${((s as any).car ?? 0)?.['name']}</b></center>`);
  scene.img(`images/pc/items/accessories/car/salon${((s as any).car ?? 0)?.['ID']}.jpg`);
  // TODO-QSP: dynamic text: Gasoline - <<car['fuel']>> ' + iif(car['fuel'] = 1, 'liter', 'liters') + ', the ...
  scene.text(`Gasoline - ${((s as any).car ?? 0)?.['fuel']} ' + iif(car['fuel'] = 1, 'liter', 'liters') + ', the fuel tank has a capacity of ${((s as any).car ?? 0)?.['tank']} liters.`);
  qspCall(s, 'carF', 'car_condition');
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_residential', '')) {
    scene.text('Through the windshield, you see St. Petersburg\'s residential area.');
  } else {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_center', '')) {
      scene.text('Through the windshield, you see St. Petersburg\'s city center.');
    } else {
      if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial', '')) {
        scene.text('Through the windshield, you see St. Petersburg\'s industrial region.');
      } else {
        if (qspFunc(s, 'car_funcs', 'is_here', 'city_lake', 'start')) {
          scene.text('Through the windshield, you see the lake.');
        } else {
          if (qspFunc(s, 'car_funcs', 'is_here', 'city_park', 'start')) {
            scene.text('Through the windshield, you can see the park.');
          } else {
            if (qspFunc(s, 'car_funcs', 'is_here', 'fuelstation', 'start', 'city')) {
              scene.text('Through the windshield, you can see the gas station in the city industrial region.');
            } else {
              if (qspFunc(s, 'car_funcs', 'is_here', 'autoservisF', 'start')) {
                scene.text('Through the windshield, you can see the car service center.');
              } else {
                if (qspFunc(s, 'car_funcs', 'is_here', 'city_house_res_misc', 'fronty')) {
                  scene.text('Through the windshield, you see your house in St. Petersburg\'s residential area.');
                } else {
                  if (qspFunc(s, 'car_funcs', 'is_here', 'autotraidF', 'start')) {
                    scene.text('Through the windshield, you can see many of the cars for sale outside the showroom.');
                  } else {
                    if (qspFunc(s, 'car_funcs', 'is_here', 'city_park', 'whore')) {
                      scene.text('Through the windshield, you can see hookers outside the park.');
                    } else {
                      if (qspFunc(s, 'car_funcs', 'is_here', 'city_sauna', '')) {
                        scene.text('Through the windshield, you can see the sauna.');
                      } else {
                        if (qspFunc(s, 'car_funcs', 'is_here', 'obekt', '')) {
                          scene.text('Through the windshield, you see a construction site.');
                        } else {
                          if (qspFunc(s, 'car_funcs', 'is_here', 'dachi', '')) {
                            scene.text('Through the windshield, you can see the suburban cooperative.');
                          } else {
                            if (qspFunc(s, 'car_funcs', 'is_here', 'pushkin', '')) {
                              scene.text('Through the windshield, you see the Old Town district of Pavlovsk.');
                            } else {
                              if (qspFunc(s, 'car_funcs', 'is_here', 'city_mansion_entrance', '')) {
                                scene.text('Through the windshield, you can see your mansion.');
                              } else {
                                if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial_train', 'outside')) {
                                  scene.text('Through the windshield, you see the city industrial region train station.');
                                } else {
                                  if (qspFunc(s, 'car_funcs', 'is_here', 'pav_residential', '')) {
                                    scene.text('Through the windshield, you can see Pavlovsk\'s residential area.');
                                  } else {
                                    if (qspFunc(s, 'car_funcs', 'is_here', 'fuelstation', 'start', 'pav')) {
                                      scene.text('Through the windshield, you can see the gas station near Pavlovsk.');
                                    } else {
                                      if (qspFunc(s, 'car_funcs', 'is_here', 'road', '')) {
                                        scene.text('Through the windshield, you can see the highway.');
                                      } else {
                                        if (qspFunc(s, 'car_funcs', 'is_here', 'gadukino', '')) {
                                          scene.text('Through the windshield, you see the huts of the village of Gadukino.');
                                        } else {
                                          if (qspFunc(s, 'car_funcs', 'is_here', 'pav_commercial', '')) {
                                            scene.text('Through the windshield, you can see Pavlovsk\'s commercial region.');
                                          } else {
                                            if (qspFunc(s, 'car_funcs', 'is_here', 'city_island', '')) {
                                              scene.text('You cross one of the bridges that leads to the island.');
                                            } else {
                                              if (qspFunc(s, 'car_funcs', 'is_here', 'pav_industrial', '')) {
                                                scene.text('Through the windshield, you can see Pavlovsk\'s industrial region.');
                                              } else {
                                                if (qspFunc(s, 'car_funcs', 'is_here', 'city_redlight', 'start')) {
                                                  scene.text('Through the windshield, you see St. Petersburg\'s red light district.');
                                                } else {
                                                  if (qspFunc(s, 'car_funcs', 'is_here', 'city_suburbs', 'start')) {
                                                    scene.text('Through the windshield, you see St. Petersburg\'s suburbs.');
                                                  } else {
                                                    if (qspFunc(s, 'car_funcs', 'is_here', 'gas_station_gp_117', 'outside')) {
                                                      scene.text('Through the windshield, you can see the Gazpromneft gas station on the highway.');
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
  if (((s as any).license ?? 0)?.['drive'] === 0) {
    scene.text('You don\'t have a driver\'s license.');
  }
  if (((s as any).car ?? 0)?.['fuel'] > 0  &&  ((s as any).car ?? 0)?.['wreck'] === 0  &&  ((s as any).license ?? 0)?.['drive'] > 0) {
    if (((s as any).car ?? 0)?.['current_condition'] >= ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
      if ((!(Math.floor(Math.random() * 1000) + 0))) {
        if (!(s as any).car) (s as any).car = {}; (s as any).car['wreck'] = 1;
      }
    } else {
      if (((s as any).car ?? 0)?.['current_condition'] >= ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
        if ((!(Math.floor(Math.random() * 100) + 0))) {
          if (!(s as any).car) (s as any).car = {}; (s as any).car['wreck'] = 1;
        }
      } else {
        if (((s as any).car ?? 0)?.['current_condition'] >= ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
          if ((!(Math.floor(Math.random() * 5) + 0))) {
            if (!(s as any).car) (s as any).car = {}; (s as any).car['wreck'] = 1;
          }
        } else {
          if ((Math.floor(Math.random() * 5) + 0) < 3) {
            if (!(s as any).car) (s as any).car = {}; (s as any).car['wreck'] = 1;
          }
        }
      }
    }
    if (((s as any).car ?? 0)?.['wreck'] === 1) {
      scene.text('Something clatters loudly and the engine stalls.');
      scene.actions([
        { label: 'Fuck', goto: ['carF', 'salon'] },
      ]);
    } else {
      if (((s as any).alko ?? 0) > 0  &&  (Math.floor(Math.random() * 100) + 0) < ((s as any).alko ?? 0)) {
        scene.text('A police officer stops you. He looks at your condition and requests you breathe into a tube. You breathe and a red light brightens up on the instrument panel.');
        scene.text('The officer snorts and writes something down before he hands you a slip of paper with the number 50,000 on it.');
        scene.text('"Or I can write a report, but you\'ll get a permanent record for drunk driving."');
        scene.actions([
          { label: 'Bribe him [+$func(\'money\', \'get_cost_string\', 50000,...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50000, 'cash');
      scene.text('You pay and the officer warns you that you can not keep driving in your drunken state.');
      scene.actions([
        { label: 'Continue', goto: ['carF', 'salon'] },
      ]);
    }
  } },
          { label: 'This is within the law', handler: (st: GameState) => {
    if (!(s as any).license) (s as any).license = {}; (s as any).license['drive'] = 0;
    scene.text('"I can take your license for not driving sober."');
    scene.actions([
      { label: 'Continue', goto: ['carF', 'salon'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).alko ?? 0) >= 10  &&  (Math.floor(Math.random() * 100) + 0) < ((s as any).alko ?? 0) * 5) {
          if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = ((s as any).car ?? {})?.['current_condition']/2;
          if (!(s as any).car) (s as any).car = {}; (s as any).car['wreck'] = 1;
          scene.text('Driving drunk, you crash into a tree and wreck your car.');
          scene.actions([
            { label: 'Continue', goto: ['carF', 'salon'] },
          ]);
        } else {
          if (((s as any).car ?? 0)?.['region'] === 'pav'  ||  ((s as any).car ?? 0)?.['region'] === 'pushkin'  ||  ((s as any).car ?? 0)?.['region'] === 'gadukino') {
            (s as any).car_town = 0;
            scene.actions([
              { label: 'Go to local destination', handler: (st: GameState) => {
    qspCall(st, 'carF', 'pav');
  } },
              { label: 'Go to the city (0:20)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.text('You drive for more than an hour on the highway before you get to the city.');
    if (!(s as any).car) (s as any).car = {}; (s as any).car['city_sup_region'] = '';
    qspCall(s, 'carF', 'city');
  } },
              { label: 'Go to the Highway (0:05)', handler: (st: GameState) => {
    (s as any).nroad = 20;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('You drive for a few minutes to the Highway.');
    qspCall(s, 'carF', 'highway');
  } },
              { label: 'Go to another destination', handler: (st: GameState) => {
    scene.text('You drive out of Pavlovsk.');
    qspCall(s, 'carF', 'other');
  } },
            ]);
          } else {
            if (((s as any).car ?? 0)?.['region'] === 'city') {
              (s as any).car_town = 1;
              if (((s as any).car ?? 0)?.['loc'] === 'city_center'  ||  ((s as any).car ?? 0)?.['loc'] === 'city_island') {
                if (!(s as any).car) (s as any).car = {}; (s as any).car['city_sup_region'] = 'a';
              } else {
                if (((s as any).car ?? 0)?.['loc'] === 'city_residential'  ||  ((s as any).car ?? 0)?.['loc'] === 'city_park'  ||  ((s as any).car ?? 0)?.['loc'] === 'city_house_res_misc'  ||  ((s as any).car ?? 0)?.['loc'] === 'city_sauna') {
                  if (!(s as any).car) (s as any).car = {}; (s as any).car['city_sup_region'] = 'b';
                } else {
                  if (((s as any).car ?? 0)?.['loc'] === 'city_industrial'  ||  ((s as any).car ?? 0)?.['loc'] === 'fuelstation'  ||  ((s as any).car ?? 0)?.['loc'] === 'city_redlight'  ||  ((s as any).car ?? 0)?.['loc'] === 'autoservisF'  ||  ((s as any).car ?? 0)?.['loc'] === 'autotraidF') {
                    if (!(s as any).car) (s as any).car = {}; (s as any).car['city_sup_region'] = 'c';
                  } else {
                    if (((s as any).car ?? 0)?.['loc'] === 'city_lake') {
                      if (!(s as any).car) (s as any).car = {}; (s as any).car['city_sup_region'] = 'd';
                    } else {
                      if (!(s as any).car) (s as any).car = {}; (s as any).car['city_sup_region'] = '';
                    }
                  }
                }
              }
              if (((s as any).car ?? 0)?.['city_sup_region'] === 'a'  ||  ((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
                if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 10;
              } else {
                if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
                  if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 5;
                } else {
                  if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 0;
                }
              }
              // TODO-QSP: $temptime[1] = '(<<(temptime[0] + 20)/60>>:<<((temptime[0]  +20) mod 60)>>)'
              // TODO-QSP: $temptime[1] = '(<<(temptime[0] + 5)/60>>:<<((temptime[0]  +5) mod 60)>>)'
              // TODO-QSP: $temptime[1] = '(<<temptime[0] /60>>:<<(temptime[0]  mod 60)>>)'
              scene.actions([
                { label: 'Go to another city destination', handler: (st: GameState) => {
    qspCall(st, 'carF', 'city');
  } },
                { label: 'Go to Pavlovsk  [+$temptime[1]]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + ((20 + ((s as any).temptime ?? 0)[0]));
    scene.text('You drive for more than an hour on the highway before you get to the town of Pavlovsk.');
    qspCall(s, 'carF', 'pav');
  } },
                { label: 'Go to the Highway  [+$temptime[1]]', handler: (st: GameState) => {
    (s as any).nroad = 0;
    (s as any).minut = ((s as any).minut ?? 0) + ((5 + ((s as any).temptime ?? 0)[0]));
    scene.text('You drive for a few minutes to the Highway.');
    qspCall(s, 'carF', 'highway');
  } },
                { label: 'Go to another destination  [+$temptime[1]]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "temptime[0]", { location: "carF" }));
    scene.text('You drive out of the city.');
    qspCall(s, 'carF', 'other');
  } },
              ]);
            } else {
              if (((s as any).car ?? 0)?.['loc'] === 'road') {
                (s as any).car_town = 2;
                qspCall(s, 'carF', 'highway');
              } else {
                (s as any).car_town = 2;
                scene.actions([
                  { label: 'Go to the Highway (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_mansion_entrance', '') === 1  ||  qspFunc(s, 'car_funcs', 'is_here', 'city_suburbs', 'start') === 1) {
      (s as any).nroad = 1;
    } else {
      if (qspFunc(s, 'car_funcs', 'is_here', 'obekt', '') === 1) {
        (s as any).nroad = 16;
      } else {
        if (qspFunc(s, 'car_funcs', 'is_here', 'dachi', '') === 1) {
          (s as any).nroad = 5;
        } else {
          if (qspFunc(s, 'car_funcs', 'is_here', 'gadukino', '') === 1) {
            (s as any).nroad = 10;
          } else {
            if (qspFunc(s, 'car_funcs', 'is_here', 'gas_station_gp_117', 'outside') === 1) {
              (s as any).nroad = 12;
            } else {
              (s as any).nroad = Math.floor(Math.random() * 21) + 0;
            }
          }
        }
      }
    }
    scene.text('You drive for a few minutes to the Highway.');
    qspCall(s, 'carF', 'highway');
  } },
                  { label: 'Go to a city destination (0:30)', handler: (st: GameState) => {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_mansion_entrance', '') === 1  ||  qspFunc(s, 'car_funcs', 'is_here', 'city_suburbs', 'start') === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
    } else {
      if (qspFunc(s, 'car_funcs', 'is_here', 'obekt', '') === 1) {
        (s as any).minut = ((s as any).minut ?? 0) + 18;
      } else {
        if (qspFunc(s, 'car_funcs', 'is_here', 'dachi', '') === 1) {
          (s as any).minut = ((s as any).minut ?? 0) + 12;
        } else {
          if (qspFunc(s, 'car_funcs', 'is_here', 'gadukino', '') === 1) {
            (s as any).minut = ((s as any).minut ?? 0) + 15;
          } else {
            if (qspFunc(s, 'car_funcs', 'is_here', 'gas_station_gp_117', 'outside') === 1) {
              (s as any).minut = ((s as any).minut ?? 0) + 16;
              (s as any).nroad = 12;
            }
          }
        }
      }
    }
    scene.text('You drive for half an hour on the highway before you get to the city.');
    qspCall(s, 'carF', 'city');
  } },
                  { label: 'Go to a Pavlovsk destination (0:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.text('You drive for half an hour on the highway before you get to the town of Pavlovsk.');
    qspCall(s, 'carF', 'pav');
  } },
                  { label: 'Go to another destination', handler: (st: GameState) => {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_mansion_entrance', '') === 1  ||  qspFunc(s, 'car_funcs', 'is_here', 'city_suburbs', 'start') === 1) {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 5;
      (s as any).nroad = 1;
    } else {
      if (qspFunc(s, 'car_funcs', 'is_here', 'obekt', '') === 1) {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 5;
        (s as any).nroad = 16;
      } else {
        if (qspFunc(s, 'car_funcs', 'is_here', 'dachi', '') === 1) {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 5;
          (s as any).nroad = 5;
        } else {
          if (qspFunc(s, 'car_funcs', 'is_here', 'gadukino', '') === 1) {
            if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 5;
            (s as any).nroad = 10;
          } else {
            if (qspFunc(s, 'car_funcs', 'is_here', 'gas_station_gp_117', 'outside') === 1) {
              if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 5;
              (s as any).nroad = 12;
            }
          }
        }
      }
    }
    qspCall(s, 'carF', 'other');
  } },
                ]);
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of the car', goto: ['car_funcs', 'goto_car'] },
  ]);
  scene.build();
}

function enterHighway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nroad ?? 0) > 0) {
    scene.actions([
      { label: 'Drive toward St. Petersburg', handler: (st: GameState) => {
    (s as any).driving = qspUntranslated(s, "val(driveStr)", { location: "carF" });
    if (((s as any).driving ?? 0) >= 0  &&  ((s as any).driving ?? 0) <= ((s as any).nroad ?? 0)) {
      (s as any).minut = ((s as any).minut ?? 0) + ((((s as any).driving ?? 0)+1)/2);
      (s as any).nroad = ((s as any).nroad ?? 0) - (((s as any).driving ?? 0));
      // TODO-QSP: dynamic text: You drive for <<(driving+1)/2>> minutes along the Highway towards Pavlovsk
      scene.text(`You drive for ${(((s as any).driving ?? 0)+1)/2} minutes along the Highway towards Pavlovsk`);
      qspCall(s, 'stat', '');
    }
    qspCall(s, 'carF', 'highway');
  } },
    ]);
  }
  if (((s as any).nroad ?? 0) < 19) {
    scene.actions([
      { label: 'Drive towards Pavlovsk', handler: (st: GameState) => {
    (s as any).driving = qspUntranslated(s, "val(driveStr)", { location: "carF" });
    if (((s as any).driving ?? 0) >= 0  &&  ((s as any).driving ?? 0) <= 20 - ((s as any).nroad ?? 0)) {
      (s as any).minut = ((s as any).minut ?? 0) + ((((s as any).driving ?? 0)+1)/2);
      (s as any).nroad = ((s as any).nroad ?? 0) + (((s as any).driving ?? 0));
      // TODO-QSP: dynamic text: You drive for <<(driving+1)/2>> minutes along the Highway towards Pavlovsk
      scene.text(`You drive for ${(((s as any).driving ?? 0)+1)/2} minutes along the Highway towards Pavlovsk`);
      qspCall(s, 'stat', '');
    }
    qspCall(s, 'carF', 'highway');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Drive to St. Petersburg (0:<<nroad/2 + 5>>)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You drive along the Highway for <<nroad/2 + 5>> and arrive at the outskirts of S...
    scene.text(`You drive along the Highway for ${((s as any).nroad ?? 0)/2 + 5} and arrive at the outskirts of St. Petersburg.`);
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).nroad ?? 0)/2 + 5);
    if (!(s as any).car) (s as any).car = {}; (s as any).car['city_sup_region'] = '';
    qspCall(s, 'carF', 'city');
  } },
    { label: 'Drive to Pavlovsk (0:<<(20 - nroad)/2 + 5>>)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You drive along the Highway for <<(20 - nroad)/2 + 5>> and arrive at the outskir...
    scene.text(`You drive along the Highway for ${(20 - ((s as any).nroad ?? 0))/2 + 5} and arrive at the outskirts of Pavlovsk.`);
    (s as any).minut = ((s as any).minut ?? 0) + ((20 - ((s as any).nroad ?? 0))/2 + 5);
    qspCall(s, 'carF', 'pav');
  } },
    { label: 'Drive to Pushkin (0:<<(19- nroad)/2 + 1>>)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You drive along the Highway for <<(19 - nroad)/2 + 1>> and arrive at the center ...
    scene.text(`You drive along the Highway for ${(19 - ((s as any).nroad ?? 0))/2 + 1} and arrive at the center of Pushkin.`);
    (s as any).minut = ((s as any).minut ?? 0) + ((19 - ((s as any).nroad ?? 0))/2);
    qspCall(s, 'car_funcs', 'setloc', 'pushkin', '', 'pushkin');
    qspCall(s, 'carF', 'nearby', 1);
    scene.actions([
      { label: 'Park and get out', goto: ['pushkin', ''] },
    ]);
  } },
    { label: 'Park and get out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'car_funcs', 'setloc', 'road', '' + qspUntranslated(s, "nroad>", { location: "carF" }) + '', 'other');
  }, goto: ['road', ''] },
  ]);
  scene.build();
}

function enterOther(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['region'] === 'city') {
    if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 5;
    (s as any).nroad = 1;
  } else {
    if (((s as any).car ?? 0)?.['region'] === 'pav') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 5;
      (s as any).nroad = 20;
    } else {
      if (((s as any).car ?? 0)?.['region'] === 'pushkin') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[0] = 5;
        (s as any).nroad = 19;
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_mansion_entrance', '') === 0) {
    if (qspFunc(s, 'homes_properties', 'can_live_here', 'matryona_mansion') === 1) {
      if (qspFunc(s, 'car_funcs', 'is_here', 'city_suburbs', 'start', 'city') === 1) {
        scene.actions([
          { label: 'Go to Matryona Mansion (0:01)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.text('You drive to your mansion.');
    qspCall(s, 'car_funcs', 'setloc', 'city_mansion_entrance', '', 'city');
    scene.actions([
      { label: 'Park and get out', goto: ['city_mansion_entrance', ''] },
    ]);
  } },
        ]);
      } else {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[2] = ((s as any).temptime ?? 0)[0] + 5 + (((s as any).nroad ?? 0) - 1)/2;
        // TODO-QSP: $temptime[1] = '(<<temptime[2] /60>>:<<(temptime[2] mod 60)>>)'
        scene.actions([
          { label: 'Go to Matryona Mansion  [+$temptime[1]]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "temptime[2]", { location: "carF" }));
    if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = ((s as any).car['fuel'] ?? 0) - (1);
    if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = ((s as any).car['current_condition'] ?? 0) - ((Math.floor(Math.random() * (((s as any).temptime ?? 0)[2]/12 - 0 + 1)) + (0)));
    scene.text('You drive to your mansion.');
    qspCall(s, 'car_funcs', 'setloc', 'city_mansion_entrance', '', 'city');
    scene.actions([
      { label: 'Park and get out', goto: ['city_mansion_entrance', ''] },
    ]);
  } },
        ]);
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_suburbs', 'start') === 0) {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_mansion_entrance', '', 'city')) {
      scene.actions([
        { label: 'Go to the city suburbs (0:01)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.text('You drive to St. Petersburg\'s suburbs.');
    qspCall(s, 'car_funcs', 'setloc', 'city_suburbs', 'start', 'city');
    scene.actions([
      { label: 'Park and get out', goto: ['city_suburbs', 'start'] },
    ]);
  } },
      ]);
    } else {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[3] = ((s as any).temptime ?? 0)[0] + 5 + (((s as any).nroad ?? 0) - 1)/2;
      // TODO-QSP: $temptime[1] = '(<<temptime[3] /60>>:<<(temptime[3] mod 60)>>)'
      scene.actions([
        { label: 'Go to city suburbs  [+$temptime[1]]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "temptime[3]", { location: "carF" }));
    if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = ((s as any).car['fuel'] ?? 0) - (1);
    if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = ((s as any).car['current_condition'] ?? 0) - ((Math.floor(Math.random() * (((s as any).temptime ?? 0)[3]/12 - 0 + 1)) + (0)));
    scene.text('You drive to St. Petersburg\'s suburbs.');
    qspCall(s, 'car_funcs', 'setloc', 'city_suburbs', 'start', 'city');
    scene.actions([
      { label: 'Park and get out', goto: ['city_suburbs', 'start'] },
    ]);
  } },
      ]);
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'obekt', '') === 0) {
    if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[4] = ((s as any).temptime ?? 0)[0] + 5;
    if (((s as any).nroad ?? 0) < 16) {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[4] = ((s as any).temptime[4] ?? 0) + ((16 - ((s as any).nroad ?? 0))/2);
    } else {
      if (((s as any).nroad ?? 0) > 16) {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[4] = ((s as any).temptime[4] ?? 0) + ((((s as any).nroad ?? 0) -16)/2);
      }
    }
    // TODO-QSP: $temptime[1] = '(<<temptime[4] /60>>:<<(temptime[4] mod 60)>>)'
    scene.actions([
      { label: 'Go to the construction site  [+$temptime[1]]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "temptime[4]", { location: "carF" }));
    if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = ((s as any).car['fuel'] ?? 0) - (1);
    if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = ((s as any).car['current_condition'] ?? 0) - ((Math.floor(Math.random() * (((s as any).temptime ?? 0)[4]/12 - 0 + 1)) + (0)));
    // TODO-QSP: dynamic text: <<temptime>> minutes later, you arrive at your destination.
    scene.text(`${((s as any).temptime ?? 0)} minutes later, you arrive at your destination.`);
    qspCall(s, 'car_funcs', 'setloc', 'obekt', '', 'other');
    scene.actions([
      { label: 'Park and get out', goto: ['obekt', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'dachi', '') === 0) {
    if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[5] = ((s as any).temptime ?? 0)[0] + 5;
    if (((s as any).nroad ?? 0) < 5) {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[5] = ((s as any).temptime[5] ?? 0) + ((5 - ((s as any).nroad ?? 0))/2);
    } else {
      if (((s as any).nroad ?? 0) > 5) {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[5] = ((s as any).temptime[5] ?? 0) + ((((s as any).nroad ?? 0) -5)/2);
      }
    }
    // TODO-QSP: $temptime[1] = '(<<temptime[5] /60>>:<<(temptime[5] mod 60)>>)'
    scene.actions([
      { label: 'Go to the Suburban Cooperative  [+$temptime[1]]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "temptime[5]", { location: "carF" }));
    if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = ((s as any).car['fuel'] ?? 0) - (1);
    if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = ((s as any).car['current_condition'] ?? 0) - ((Math.floor(Math.random() * (((s as any).temptime ?? 0)[5]/12 - 0 + 1)) + (0)));
    // TODO-QSP: dynamic text: <<temptime>> minutes later, you arrive at your destination.
    scene.text(`${((s as any).temptime ?? 0)} minutes later, you arrive at your destination.`);
    qspCall(s, 'car_funcs', 'setloc', 'dachi', '', 'other');
    scene.actions([
      { label: 'Park and get out', goto: ['dachi', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'gadukino', '') === 0) {
    if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[6] = ((s as any).temptime ?? 0)[0] + 5;
    if (((s as any).nroad ?? 0) < 10) {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[6] = ((s as any).temptime[6] ?? 0) + ((10 - ((s as any).nroad ?? 0))/2);
    } else {
      if (((s as any).nroad ?? 0) > 10) {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[6] = ((s as any).temptime[6] ?? 0) + ((((s as any).nroad ?? 0) -10)/2);
      }
    }
    // TODO-QSP: $temptime[1] = '(<<temptime[6] /60>>:<<(temptime[6] mod 60)>>)'
    scene.actions([
      { label: 'Go to the village of Gadukino  [+$temptime[1]]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "temptime[6]", { location: "carF" }));
    if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = ((s as any).car['fuel'] ?? 0) - (1);
    if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = ((s as any).car['current_condition'] ?? 0) - ((Math.floor(Math.random() * (((s as any).temptime ?? 0)[6]/12 - 0 + 1)) + (0)));
    // TODO-QSP: dynamic text: <<temptime>> minutes later, you arrive at your destination.
    scene.text(`${((s as any).temptime ?? 0)} minutes later, you arrive at your destination.`);
    qspCall(s, 'car_funcs', 'setloc', 'gadukino', '', 'gad');
    scene.actions([
      { label: 'Park and get out', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'gas_station_gp_117', 'outside') === 0) {
    if (((s as any).prostitute ?? 0)?.['gas_station'] === 1) {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[7] = ((s as any).temptime ?? 0)[0] + 5;
      if (((s as any).nroad ?? 0) < 12) {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[7] = ((s as any).temptime[7] ?? 0) + ((12 - ((s as any).nroad ?? 0))/2);
      } else {
        if (((s as any).nroad ?? 0) > 12) {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[7] = ((s as any).temptime[7] ?? 0) + ((((s as any).nroad ?? 0) -12)/2);
        }
      }
      // TODO-QSP: $temptime[1] = '(<<temptime[7] /60>>:<<(temptime[7] mod 60)>>)'
      scene.actions([
        { label: 'Go to the gas station on M11  [+$temptime[1]]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "temptime[7]", { location: "carF" }));
    if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = ((s as any).car['fuel'] ?? 0) - (1);
    if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = ((s as any).car['current_condition'] ?? 0) - ((Math.floor(Math.random() * (((s as any).temptime ?? 0)[7]/12 - 0 + 1)) + (0)));
    // TODO-QSP: dynamic text: <<temptime>> minutes later, you arrive at your destination.
    scene.text(`${((s as any).temptime ?? 0)} minutes later, you arrive at your destination.`);
    qspCall(s, 'car_funcs', 'setloc', 'gas_station_gp_117', 'outside', 'other');
    scene.actions([
      { label: 'Park and get out', goto: ['gas_station_gp_117', 'outside'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Drive around the local track (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = ((s as any).car['fuel'] ?? 0) - (4);
    if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = ((s as any).car['current_condition'] ?? 0) - (Math.floor(Math.random() * 5) + 2);
    qspCall(s, 'mood', 'raise', 'small');
    scene.text('You go to the track and have fun driving around before leaving.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    // TODO-QSP: xgt 'carF', 'salon'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPav(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'car_funcs', 'is_here', 'pav_industrial', '') === 0) {
    scene.actions([
      { label: 'Go to Pavlovsk\'s Industrial Region (0:05)', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'pav_industrial', '', 'pav');
    qspCall(s, 'carF', 'nearby', 5);
    scene.actions([
      { label: 'Park and get out', goto: ['pav_industrial', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'pav_residential', '') === 0) {
    scene.actions([
      { label: 'Go to Pavlovsk\'s Residential Area (0:05)', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'pav_residential', '', 'pav');
    qspCall(s, 'carF', 'nearby', 5);
    scene.actions([
      { label: 'Park and get out', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'pav_commercial', '') === 0) {
    scene.actions([
      { label: 'Go to Pavlovsk\'s Commercial Region (0:05)', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'pav_commercial', '', 'pav');
    qspCall(s, 'carF', 'nearby', 5);
    scene.actions([
      { label: 'Park and get out', goto: ['pav_commercial', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'pav_market', '') === 0) {
    scene.actions([
      { label: 'Go to Pavlovsk\'s Market and Train Station (0:05)', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'pav_market', '', 'pav');
    qspCall(s, 'carF', 'nearby', 5);
    scene.actions([
      { label: 'Park and get out', goto: ['pav_market', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'pushkin', '') === 0) {
    scene.actions([
      { label: 'Go to Old Town district of Pushkin (0:05)', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'pushkin', '', 'pushkin');
    qspCall(s, 'carF', 'nearby', 5);
    scene.actions([
      { label: 'Park and get out', goto: ['pushkin', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'fuelstation', 'start', 'pav') === 0) {
    scene.actions([
      { label: 'Go to the gas station (0:05)', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'fuelstation', 'start', 'pav');
    qspCall(s, 'carF', 'nearby', 5);
    scene.actions([
      { label: 'Park and get out', handler: (st: GameState) => {
    // TODO-QSP: $region = 'pav'
  }, goto: ['fuelstation', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCity(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_house_res_misc', 'fronty') === 0) {
    if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'city_house')) {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'a'  ||  ((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[1] = 0;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[1] = 0;
        } else {
          if (((s as any).car ?? 0)?.['city_sup_region'] === 'c') {
            if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[1] = 5;
          } else {
            if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[1] = 5;
          }
        }
      }
      // TODO-QSP: $temptime[0] = '(<<(temptime[1] + 5)/60>>:<<((temptime[1]  +5) mod 60)>>)'
      scene.actions([
        { label: 'Go to your house in the residential area  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'city_house_res_misc', 'fronty', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[1]
    scene.actions([
      { label: 'Park and get out', goto: ['city_house_res_misc', 'fronty'] },
    ]);
  } },
      ]);
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial', '') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[2] = 10;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[2] = 5;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'c') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[2] = 0;
        } else {
          if (((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
            if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[2] = 5;
          } else {
            if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[2] = 0;
          }
        }
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[2] + 5)/60>>:<<((temptime[2]  +5) mod 60)>>)'
    scene.actions([
      { label: 'Go to St. Petersburg\'s Industrial Region  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'city_industrial', '', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[2]
    scene.actions([
      { label: 'Park and get out', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_residential', '') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a'  ||  ((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[3] = 0;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[3] = 0;
      } else {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[3] = 5;
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[3] + 5)/60>>:<<((temptime[3]  +5) mod 60)>>)'
    scene.actions([
      { label: 'Go to St. Petersburg\'s residential area  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'city_residential', '', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[3]
    scene.actions([
      { label: 'Park and get out', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_center', '') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[4] = 0;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[4] = 0;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[4] = 5;
        } else {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[4] = 10;
        }
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[4] + 5)/60>>:<<((temptime[4]  +5) mod 60)>>)'
    scene.actions([
      { label: 'Go to St. Petersburg city center  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'city_center', '', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[4]
    scene.actions([
      { label: 'Park and get out', handler: (st: GameState) => {
    qspCall(st, 'car_funcs', 'goto_car');
  } },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial_train', 'outside') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[5] = 10;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[5] = 5;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[5] = 5;
        } else {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[5] = 0;
        }
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[5] + 5)/60>>:<<((temptime[5]  +5) mod 60)>>)'
    scene.actions([
      { label: 'Go to the city industrial train station  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'city_industrial_train', 'outside', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[5]
    scene.actions([
      { label: 'Park and get out', goto: ['city_industrial_train', 'outside'] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_lake', 'start') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[6] = 5;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[6] = 0;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'c') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[6] = 5;
        } else {
          if (((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
            if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[6] = 0;
          } else {
            if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[6] = 5;
          }
        }
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[6] + 5)/60>>:<<((temptime[6]  +5) mod 60)>>)'
    scene.actions([
      { label: 'Go to the city lake  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'city_lake', 'start', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[6]
    scene.actions([
      { label: 'Park and get out', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_park', 'start') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[7] = 0;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[7] = 0;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[7] = 5;
        } else {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[7] = 5;
        }
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[7] + 5)/60>>:<<((temptime[7]  +5) mod 60)>>)'
    scene.actions([
      { label: 'Go to the city park  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'city_park', 'start', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[7]
    scene.actions([
      { label: 'Park and get out', goto: ['city_park', 'start'] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'fuelstation', 'start', 'city') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[8] = 10;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[8] = 5;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[8] = 5;
        } else {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[8] = 0;
        }
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[8] + 5)/60>>:<<((temptime[8]  +5) mod 60)>>)'
    scene.actions([
      { label: 'Go to the gas station  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'fuelstation', 'start', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[8]
    scene.actions([
      { label: 'Park and get out', handler: (st: GameState) => {
    // TODO-QSP: $region = 'city'
  }, goto: ['fuelstation', 'start'] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'autoservisF', 'start') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[9] = 10;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[9] = 5;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[9] = 5;
        } else {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[9] = 0;
        }
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[9] + 5)/60>>:<<((temptime[9]  +5) mod 60)>>)'
    if (qspFunc(s, 'autoservisF', 'is_open')) {
      scene.actions([
        { label: 'Go to the auto repair shop  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'autoservisF', 'start', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[9]
    scene.actions([
      { label: 'Park and get out', goto: ['autoservisF', 'start'] },
    ]);
  } },
      ]);
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'autotraidF', 'start') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[10] = 10;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[10] = 5;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[10] = 5;
        } else {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[10] = 0;
        }
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[10] + 5)/60>>:<<((temptime[10]  +5) mod 60)>>)'
    if (qspFunc(s, 'autotraidF', 'is_open')) {
      scene.actions([
        { label: 'Go to the car dealership  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'autotraidF', 'start', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[10]
    scene.actions([
      { label: 'Park and get out', goto: ['autotraidF', 'start'] },
    ]);
  } },
      ]);
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_island', '') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[11] = 0;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[11] = 0;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[11] = 5;
        } else {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[11] = 10;
        }
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[11] + 5)/60>>:<<((temptime[11]  +5) mod 60)>>)'
    scene.actions([
      { label: 'Go to the island  [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'city_island', '', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[11]
    scene.actions([
      { label: 'Park and get out', goto: ['city_island', ''] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_redlight', 'start') === 0) {
    if (((s as any).car ?? 0)?.['city_sup_region'] === 'a') {
      if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[12] = 10;
    } else {
      if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
        if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[12] = 5;
      } else {
        if (((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[12] = 5;
        } else {
          if (!(s as any).temptime) (s as any).temptime = {}; (s as any).temptime[12] = 0;
        }
      }
    }
    // TODO-QSP: $temptime[0] = '(<<(temptime[12] + 5)/60>>:<<((temptime[12]  +5) mod 60)>>)'
    scene.actions([
      { label: 'Go to the red light district   [+$temptime[0]]', handler: (st: GameState) => {
    qspCall(s, 'car_funcs', 'setloc', 'city_redlight', 'start', 'city');
    // TODO-QSP: gs 'carF', 'nearby', 5 + temptime[12]
    scene.actions([
      { label: 'Park and get out', goto: ['city_redlight', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNearby(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = 5;
  }
  (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "carF" }));
  if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = ((s as any).car['fuel'] ?? 0) - (1);
  if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = ((s as any).car['current_condition'] ?? 0) - (Math.floor(Math.random() * 3) + 1);
  // TODO-QSP: dynamic text: <<ARGS[1]>> minutes later, you arrive at your destination.
  scene.text(`${qspUntranslated(s, "ARGS[1]", { location: "carF" })} minutes later, you arrive at your destination.`);
  // TODO-QSP: end
  scene.build();
}

function enterCarCondition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['current_condition'] <= 0) {
    if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = 0;
    if (!(s as any).car) (s as any).car = {}; (s as any).car['wreck'] = 1;
  }
  if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
    scene.text('The car is in need of repairs and won\'t start.');
  } else {
    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
      scene.text('How this car still runs is a mystery, even to its designers.');
    } else {
      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
        scene.text('The car seems broken and barely drives.');
      } else {
        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
          scene.text('While driving, you occasionally hear some troubling noises.');
        } else {
          scene.text('The car is in excellent condition.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'enddrive':
      enterEnddrive(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'salon':
      enterSalon(s, scene);
      break;
    case 'highway':
      enterHighway(s, scene);
      break;
    case 'other':
      enterOther(s, scene);
      break;
    case 'pav':
      enterPav(s, scene);
      break;
    case 'city':
      enterCity(s, scene);
      break;
    case 'nearby':
      enterNearby(s, scene);
      break;
    case 'car_condition':
      enterCarCondition(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const carF: LocationDef = {
  name: 'carF',
  title: 'Through the windshield, you see St. Petersburg\'s residential',
  region: 'other',
  enter: enter,
};
