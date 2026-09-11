import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEnddrive(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['car_funcs', 'goto_car'] }]);
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
    ((s as any).car ?? {})['fuel'] = (((s as any).car ?? {})['fuel'] ?? 0) + (5);
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
        ((s as any).car ?? {})['wreck'] = 1;
      }
    } else {
      if (((s as any).car ?? 0)?.['current_condition'] >= ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
        if ((!(Math.floor(Math.random() * 100) + 0))) {
          ((s as any).car ?? {})['wreck'] = 1;
        }
      } else {
        if (((s as any).car ?? 0)?.['current_condition'] >= ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
          if ((!(Math.floor(Math.random() * 5) + 0))) {
            ((s as any).car ?? {})['wreck'] = 1;
          }
        } else {
          if ((Math.floor(Math.random() * 5) + 0) < 3) {
            ((s as any).car ?? {})['wreck'] = 1;
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
    ((s as any).license ?? {})['drive'] = 0;
    scene.text('"I can take your license for not driving sober."');
    scene.actions([
      { label: 'Continue', goto: ['carF', 'salon'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).alko ?? 0) >= 10  &&  (Math.floor(Math.random() * 100) + 0) < ((s as any).alko ?? 0) * 5) {
          ((s as any).car ?? {})['current_condition'] = ((s as any).car ?? {})?.['current_condition']/2;
          ((s as any).car ?? {})['wreck'] = 1;
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
    ((s as any).car ?? {})['city_sup_region'] = '';
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
                ((s as any).car ?? {})['city_sup_region'] = 'a';
              } else {
                if (((s as any).car ?? 0)?.['loc'] === 'city_residential'  ||  ((s as any).car ?? 0)?.['loc'] === 'city_park'  ||  ((s as any).car ?? 0)?.['loc'] === 'city_house_res_misc'  ||  ((s as any).car ?? 0)?.['loc'] === 'city_sauna') {
                  ((s as any).car ?? {})['city_sup_region'] = 'b';
                } else {
                  if (((s as any).car ?? 0)?.['loc'] === 'city_industrial'  ||  ((s as any).car ?? 0)?.['loc'] === 'fuelstation'  ||  ((s as any).car ?? 0)?.['loc'] === 'city_redlight'  ||  ((s as any).car ?? 0)?.['loc'] === 'autoservisF'  ||  ((s as any).car ?? 0)?.['loc'] === 'autotraidF') {
                    ((s as any).car ?? {})['city_sup_region'] = 'c';
                  } else {
                    if (((s as any).car ?? 0)?.['loc'] === 'city_lake') {
                      ((s as any).car ?? {})['city_sup_region'] = 'd';
                    } else {
                      ((s as any).car ?? {})['city_sup_region'] = '';
                    }
                  }
                }
              }
              if (((s as any).car ?? 0)?.['city_sup_region'] === 'a'  ||  ((s as any).car ?? 0)?.['city_sup_region'] === 'd') {
                ((s as any).temptime ?? {})[0] = 10;
              } else {
                if (((s as any).car ?? 0)?.['city_sup_region'] === 'b') {
                  ((s as any).temptime ?? {})[0] = 5;
                } else {
                  ((s as any).temptime ?? {})[0] = 0;
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
      ((s as any).temptime ?? {})[0] = 5;
      (s as any).nroad = 1;
    } else {
      if (qspFunc(s, 'car_funcs', 'is_here', 'obekt', '') === 1) {
        ((s as any).temptime ?? {})[0] = 5;
        (s as any).nroad = 16;
      } else {
        if (qspFunc(s, 'car_funcs', 'is_here', 'dachi', '') === 1) {
          ((s as any).temptime ?? {})[0] = 5;
          (s as any).nroad = 5;
        } else {
          if (qspFunc(s, 'car_funcs', 'is_here', 'gadukino', '') === 1) {
            ((s as any).temptime ?? {})[0] = 5;
            (s as any).nroad = 10;
          } else {
            if (qspFunc(s, 'car_funcs', 'is_here', 'gas_station_gp_117', 'outside') === 1) {
              ((s as any).temptime ?? {})[0] = 5;
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
  scene.actions([
    { label: 'Get out of the car', goto: ['car_funcs', 'goto_car'] },
  ]);
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
    default:
      enterEnddrive(s, scene);
      break;
  }
}

export const carF: LocationDef = {
  name: 'carF',
  title: 'Through the windshield, you see St. Petersburg\'s residential',
  region: 'other',
  enter: enter,
};
