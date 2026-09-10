import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).isnum ?? 0)(((s as any).locArgs?.[0] ?? 0))) {
    if (((s as any).locArgs?.[0] ?? 0) !== ''  &&  ((s as any).isnum ?? 0)(((s as any).locArgs?.[0] ?? 0))) {
      (s as any).nroad = qspUntranslated(s, "val(ARGS[0])", { location: "road" });
    } else {
      // TODO-QSP: $ARGS[0] = '<<nroad>>'
    }
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(s, 'core_library', 'setloc', 'road', ((s as any).locArgs?.[0] ?? 0));
    qspCall(s, 'stat', '');
    scene.text('<center><h2>Main road between St. Petersburg and Pavlovsk</h2></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      scene.img('images/locations/highway/roadwinter.jpg');
    } else {
      scene.img('images/locations/highway/road.jpg');
    }
    // TODO-QSP: dynamic text: <center><<nroad>> km</center>
    scene.text(`<center>${((s as any).nroad ?? 0)} km</center>`);
    scene.text('Calling it a highway would be too much credit, but this road is the main way to get from St. Petersburg to the town of Pavlovsk, 20km away.');
    scene.text('Smaller villages named Gadukino and Pushkin can be found along the way. Cars are driving by you at a high speed.');
    if (qspFunc(s, 'car_funcs', 'is_here')  &&  ((s as any).nroad ?? 0) !== 10) {
      // TODO-QSP: 'You parked <a href="exec:gs ''carF'', ''start''">your <<$car[''name'']>></a>'+iif(prostitute['road'...
    }
    if ((!((s as any).nroad ?? 0))) {
      // TODO-QSP: act 'Walk to the City Industrial Region (0:15)': minut += 15
      scene.actions([{ label: 'Continue', goto: ['city_industrial', ''] }]);
    }
    if (((s as any).nroad ?? 0) === 1) {
      scene.actions([
        { label: 'Walk to the City Suburbs (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['city_suburbs', 'start'] },
      ]);
    }
    if (((s as any).nroad ?? 0) === 16) {
      // TODO-QSP: act 'Check out the construction site (1:00)': minut += 60
      scene.actions([{ label: 'Continue', goto: ['obekt', ''] }]);
    }
    if (((s as any).nroad ?? 0) === 19) {
      scene.actions([
        { label: 'Walk to Pushkin (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin', ''] },
      ]);
    }
    if (((s as any).nroad ?? 0) === 20) {
      scene.actions([
        { label: 'Walk to Pavlovsk train station (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_train_hall', ''] },
        { label: 'Walk to Pavlovsk Commercial area (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_commercial', ''] },
        { label: 'Walk to Pavlovsk Industrial region (0:25)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 25;
  }, goto: ['pav_industrial', ''] },
        { label: 'Walk to Pavlovsk Market (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_market', ''] },
      ]);
    }
    if (((s as any).nroad ?? 0) < 20) {
      scene.actions([
        { label: 'Walk towards Pavlovsk (0:20)', handler: (st: GameState) => {
    if (qspFunc(s, 'road', 'mistake_check')) {
      // TODO-QSP: gt 'road', 'autostop_mistake', 'Pavlovsk'
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      scene.actions([{ label: 'Continue', goto: ['road', '<<nroad + 1>>'] }]);
    }
  } },
      ]);
    }
    if (((s as any).nroad ?? 0) > 0) {
      scene.actions([
        { label: 'Walk towards St. Petersburg (0:20)', handler: (st: GameState) => {
    if (qspFunc(s, 'road', 'mistake_check')) {
      // TODO-QSP: gt 'road', 'autostop_mistake', 'St. Petersburg'
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      scene.actions([{ label: 'Continue', goto: ['road', '<<nroad - 1>>'] }]);
    }
  } },
      ]);
    }
    if (((s as any).nroad ?? 0) > 0  &&  ((s as any).nroad ?? 0) < 20) {
      scene.actions([
        { label: 'Try hitchhiking towards Pavlovsk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    (s as any).gorand = Math.floor(Math.random() * 100) + 1;
    (s as any).picrand = Math.floor(Math.random() * 3) + 1;
    if (qspFunc(s, 'road', 'mistake_check')) {
      // TODO-QSP: gt 'road', 'autostop_mistake', 'Pavlovsk'
    } else {
      scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
      scene.img(`images/locations/highway/autostop (${((s as any).picrand ?? 0)}).jpg`);
      scene.text('You try to catch the attention of people driving towards Pavlovsk, but everyone just rushes by, ignoring you completely.');
      if (((s as any).gorand ?? 0) > 60) {
        qspCall(s, 'road', 'autostop_d');
        if (((s as any).nroad ?? 0) < 10) {
          scene.actions([
            { label: 'Ask the driver to take you to Gadukino', handler: (st: GameState) => {
    // TODO-QSP: gt 'road', 'autostop_money', 0, picrand
  } },
          ]);
        }
        scene.actions([
          { label: 'Ask the driver to take you to Pavlovsk', handler: (st: GameState) => {
    // TODO-QSP: gt 'road', 'autostop_money', 0, picrand
  } },
        ]);
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    if ((!((s as any).nroad ?? 0))) {
      scene.text('You\'re on the outskirts of St. Petersburg. You see a number of crudely made huts near the trees. A bunch of homeless people must have sought shelter here.');
      // TODO-QSP: dynamic text: A <a href="exec:minut += 5 & gt 'furi'">lorry</a> is parked next to the road. Th...
      scene.text('A <a href="exec:minut += 5 & gt \'furi\'">lorry</a> is parked next to the road. The driver is currently taking a break and is having a cigarette. He could probably bring you to Gadukino or Pavlovsk, for a price…');
    } else {
      // TODO-QSP: dynamic text: You're not very far from St. Petersburg. You see a bunch of <a href="exec:minut ...
      scene.text('You\'re not very far from St. Petersburg. You see a bunch of <a href="exec:minut += 15 & gt \'city_suburbs\',\'start\'">luxury houses</a> not far from the road. That settlement looks like it\'s very expensive to live in.');
      if (((s as any).nroad ?? 0) === 2) {
        scene.text('');
      } else {
        // TODO-QSP: dynamic text: You see a sign pointing towards a <a href="exec:minut += 15 & gt 'graveyard'">ce...
        scene.text('You see a sign pointing towards a <a href="exec:minut += 15 & gt \'graveyard\'">cemetery</a>, hidden between lots of trees. You think it\'d be a 15 minute walk from here.');
        if (((s as any).nroad ?? 0) === 4) {
          scene.text('');
        } else {
          // TODO-QSP: dynamic text: You see a <a href="exec:gt 'train', 'communal'">railway platform</a> not far fro...
          scene.text('You see a <a href="exec:gt \'train\', \'communal\'">railway platform</a> not far from the road. A bit further away, someone built <a href="exec:minut += 15 & gt \'dachi\'">a bunch of cottages</a>. Some of them are for sale. This must be a nice place to stay at in the summer!');
          if (((s as any).nroad ?? 0) === 6) {
            scene.text('');
          } else {
            scene.text('');
            if (((s as any).nroad ?? 0) === 8) {
              scene.text('');
            } else {
              scene.text('');
              if (((s as any).nroad ?? 0) === 10) {
                (s as any).display_bb = 1;
                qspCall(s, 'stat', '');
                // TODO-QSP: dynamic text: You see a <a href="exec:gt 'train', 'gadukino'">railway platform</a> not far fro...
                scene.text('You see a <a href="exec:gt \'train\', \'gadukino\'">railway platform</a> not far from the road. In the same direction, a dirt road leads to the village of <a href="exec:minut += 15 & gt \'gadukino\'">Gadukino</a>.');
                // TODO-QSP: dynamic text: A <a href="exec:minut += 5 & gt 'furi'">lorry</a> is parked next to the road. Th...
                scene.text('A <a href="exec:minut += 5 & gt \'furi\'">lorry</a> is parked next to the road. The driver is currently taking a break and is having a cigarette. He could probably bring you to Pavlovsk or St. Petersburg, for a price…');
                if (((s as any).MiraVars ?? 0)?.['QW'] > 15) {
                  scene.text('Mira <a href="exec:gt \'gad_prostitutes\', \'start\'">prostitutes</a> herself around here.');
                }
                if (qspFunc(s, 'car_funcs', 'is_here')) {
                  // TODO-QSP: dynamic text: You parked <a href="exec:gs 'carF', 'start'">your <<$car['name']>></a> in a quie...
                  scene.text(`You parked <a href="exec:gs 'carF', 'start'">your ${((s as any).car ?? 0)?.['name']}</a> in a quieter spot on the side road to Gadukin.`);
                }
                if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).prostitute ?? 0)?.['gadukino'] === 1) {
                  qspCall(s, 'prostitution_functions', 'work_clothes');
                  if (((s as any).prostitute ?? 0)?.['work_clothes']) {
                    if (qspFunc(s, 'car_funcs', 'is_here')  &&  ((s as any).prostitute ?? 0)?.['changed_for_work']) {
                      scene.actions([
                        { label: 'Change into your regular clothes', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_back', 'car'
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Change into your regular clothes', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_back', 'road_side'
  } },
                      ]);
                    }
                    scene.actions([
                      { label: 'You can work as a prostitute here', goto: ['gad_prostitutes', 'start'] },
                    ]);
                  }
                  if (((s as any).prostitute ?? 0)?.['work_clothes'] === 0  &&  ((s as any).prostitute ?? 0)?.['outfit_is_set']) {
                    if (qspFunc(s, 'car_funcs', 'is_here')) {
                      scene.actions([
                        { label: 'Change to work as a prostitute', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_to_work', 'car'
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Change to work as a prostitute', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_to_work', 'road_side'
  } },
                      ]);
                    }
                  }
                } else {
                  qspCall(s, 'prostitution_functions', 'work_clothes');
                  if (((s as any).prostitute ?? 0)?.['work_clothes'] === 0  &&  ((s as any).prostitute ?? 0)?.['outfit_is_set']) {
                    if (qspFunc(s, 'car_funcs', 'is_here')) {
                      scene.actions([
                        { label: 'Change to work as a prostitute', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_to_work', 'car'
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Change to work as a prostitute', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_to_work', 'road_side'
  } },
                      ]);
                    }
                  } else {
                    if (qspFunc(s, 'car_funcs', 'is_here')  &&  ((s as any).prostitute ?? 0)?.['changed_for_work']) {
                      scene.actions([
                        { label: 'Change into your regular clothes', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_back', 'car'
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Change into your regular clothes', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_back', 'road_side'
  } },
                      ]);
                    }
                    scene.actions([
                      { label: 'Work as a prostitute', goto: ['road_prostitution', 'work'] },
                    ]);
                  }
                }
                scene.actions([
                  { label: 'Walk to Gadukino (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gadukino', ''] },
                  { label: 'Walk to the train platform (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['train', 'gadukino'] },
                ]);
              } else {
                scene.text('');
                if (((s as any).nroad ?? 0) === 12) {
                  // TODO-QSP: dynamic text: You see a <a href="exec:minut += 15 & gt 'motel'">trucker motel</a> near the roa...
                  scene.text('You see a <a href="exec:minut += 15 & gt \'motel\'">trucker motel</a> near the road. You have no business there. You\'re no trucker!');
                } else {
                  scene.text('');
                  if (((s as any).nroad ?? 0) === 14) {
                    scene.text('');
                  } else {
                    scene.text('');
                    if (((s as any).nroad ?? 0) === 16) {
                      scene.text('All you see is an abandoned building, not too far from the road. From the look of it, the heavy fences around the building will make it difficult for you to get anywhere near it.');
                      scene.actions([
                        { label: 'Walk to the bus station (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['bus', 'construction'] },
                      ]);
                    } else {
                      scene.text('');
                      if (((s as any).nroad ?? 0) === 18) {
                        scene.text('');
                      } else {
                        // TODO-QSP: dynamic text: You are on the outskirts of the <a href="exec:minut += 5 & gt 'pushkin'">old tow...
                        scene.text('You are on the outskirts of the <a href="exec:minut += 5 & gt \'pushkin\'">old town</a> district of Pavlovsk. About five minutes down a cobblestone road is the old town center. It\'s a fairly popular place for tourists to explore with much of its old architecture still intact.');
                        if (((s as any).nroad ?? 0) === 20) {
                          scene.text('The main road ends at the provincial town of Pavlovsk. You can see the castle in the distance.');
                          // TODO-QSP: dynamic text: A <a href="exec:minut += 5 & gt 'furi'">lorry</a> is parked next to the road. Th...
                          scene.text('A <a href="exec:minut += 5 & gt \'furi\'">lorry</a> is parked next to the road. The driver is currently taking a break and is having a cigarette. He could probably bring you to Gadukino or St. Petersburg, for a price…');
                          scene.text('A small road leads to an almost hidden old <a href="exec:gt \'brothel\', \'lobby\'">hotel</a>. Usually tourists use it when passing by or when visiting the old town of Pavlovsk.');
                          if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 17) {
                            scene.text('You can see a bunch of trucks around the <a href="exec:gt \'NikoSlut\', \'Diner Exterior\'">Boris diner</a>, which is a diner that is frequently visited by both truckers and bikers.');
                          } else {
                            scene.text('You can see a bunch of motorcycles around the <a href="exec:gt \'NikoSlut\', \'Diner Exterior\'">Boris diner</a>, which is a diner that is frequently visited by both truckers and bikers.');
                          }
                          if (((s as any).hour ?? 0) === 22  &&  ((s as any).NikoEv ?? 0) < 21) {
                            // TODO-QSP: dynamic text: You can see <a href="exec:gt 'NikoSlut', 'Yurik Out'">' + iif($YurikEv['Name'] =...
                            scene.text('You can see <a href="exec:gt \'NikoSlut\', \'Yurik Out\'">\' + iif($YurikEv[\'Name\'] = \'Yurik\', \'Yurik\', \'a big burly man\') + \'</a>, clearly drunk, stumbling along the highway with a beer bottle in his hand.');
                          }
                        }
                        if (((s as any).prostitute ?? 0)?.['road'] === 1  &&  ((s as any).nroad ?? 0) !== 10  &&  ((s as any).nroad ?? 0) !== 20  &&  ((((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0)  ||  (((s as any).prostitute ?? 0)?.['wl_block'] === 1  &&  ((s as any).prostitute ?? 0)?.['payment_method'] === 1))) {
                          qspCall(s, 'prostitution_functions', 'work_clothes');
                          if (((s as any).prostitute ?? 0)?.['work_clothes'] === 0  &&  ((s as any).prostitute ?? 0)?.['outfit_is_set']) {
                            if (qspFunc(s, 'car_funcs', 'is_here')) {
                              scene.actions([
                                { label: 'Change to work as a prostitute', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_to_work', 'car'
  } },
                              ]);
                            } else {
                              scene.actions([
                                { label: 'Change to work as a prostitute', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_to_work', 'road_side'
  } },
                              ]);
                            }
                          } else {
                            if (((s as any).prostitute ?? 0)?.['changed_for_work']) {
                              if (qspFunc(s, 'car_funcs', 'is_here')) {
                                scene.actions([
                                  { label: 'Change into your regular clothes', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_back', 'car'
  } },
                                ]);
                              } else {
                                scene.actions([
                                  { label: 'Change into your regular clothes', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_back', 'road_side'
  } },
                                ]);
                              }
                            }
                            scene.actions([
                              { label: 'Work as a prostitute', goto: ['road_prostitution', 'work'] },
                            ]);
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
        scene.actions([
          { label: 'Walk to the bus station (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bus', 'graveyard'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Try hitchhiking towards St. Petersburg', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    (s as any).gorand = Math.floor(Math.random() * 100) + 1;
    (s as any).picrand = Math.floor(Math.random() * 3) + 1;
    if (qspFunc(s, 'road', 'mistake_check')) {
      // TODO-QSP: gt 'road', 'autostop_mistake', 'St. Petersburg'
    } else {
      scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
      scene.img(`images/locations/highway/autostop (${((s as any).picrand ?? 0)}).jpg`);
      scene.text('You try to catch the attention of people driving towards St. Petersburg, but everyone just rushes by, ignoring you completely.');
      if (((s as any).gorand ?? 0) > 60) {
        qspCall(s, 'road', 'autostop_d');
        if (((s as any).nroad ?? 0) > 10) {
          scene.actions([
            { label: 'Ask the driver to take you to Gadukino', handler: (st: GameState) => {
    // TODO-QSP: gt 'road', 'autostop_money', 0, picrand
  } },
          ]);
        }
        scene.actions([
          { label: 'Ask the driver to take you to St. Petersburg', handler: (st: GameState) => {
    // TODO-QSP: gt 'road', 'autostop_money', 0, picrand
  } },
        ]);
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

export const road: LocationDef = {
  name: 'road',
  title: '<center><h2>Main road between St. Petersburg and Pavlovsk</h',
  region: 'other',
  locationType: 'event_outdoors',
  description: ['Calling it a highway would be too much credit, but this road is the main way to get from St. Petersburg to the town of Pavlovsk, 20km away.'],
  enter: enter,
};
