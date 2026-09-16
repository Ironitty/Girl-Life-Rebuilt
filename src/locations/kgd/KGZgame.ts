import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'KGZdyn', '');
  if (((s as any).KGZVars ?? 0)?.['HP'] <= 0) {
    scene.text('<center><b>GAME OVER</b></center>');
    return;
    scene.actions([
      { label: 'Quit', goto: ['KGZstart', ''] },
    ]);
  }
  if (((s as any).KGZVars ?? 0)?.['hour'] >= 6  &&  ((s as any).KGZVars ?? 0)?.['hour'] <= 21) {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['svet'] = 1;
  } else {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['svet'] = 0;
  }
  if (((s as any).KGZVars ?? 0)?.['last_xp_hour'] !== (((s as any).KGZVars ?? 0)?.['day'] - 1) * 24 + (((s as any).KGZVars ?? 0)?.['hour'] - 8)) {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['last_xp_hour'] = ((((s as any).KGZVars ?? {})?.['day'] ?? 0) - 1) * 24 + ((((s as any).KGZVars ?? {})?.['hour'] ?? 0) - 8);
    qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 4) + 0);
  }
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027KGZstart\\u0027, \\u0027\\u0027); return false;">Exit the game</a>');
  // TODO-QSP: dynamic text: Day <<KGZVars['day']>>
  scene.text(`Day ${((s as any).KGZVars ?? 0)?.['day'] ?? ''}`);
  // TODO-QSP: dynamic text: Time <<KGZVars['hour']>>h.
  scene.text(`Time ${((s as any).KGZVars ?? 0)?.['hour'] ?? ''}h.`);
  // TODO-QSP: dynamic text: Health <<KGZVars['HP']>>
  scene.text(`Health ${((s as any).KGZVars ?? 0)?.['HP'] ?? ''}`);
  if (((s as any).KGZVars ?? 0)?.['sup'] <= 0) {
    scene.text('You have no provisions and are starving!');
  }
  // TODO-QSP: dynamic text: Weapon: <<$KGZVars['weapon_text']>>
  scene.text(`Weapon: ${((s as any).KGZVars ?? 0)?.['weapon_text'] ?? ''}`);
  if (((s as any).KGZVars ?? 0)?.['gun_text'] !== '') {
    // TODO-QSP: dynamic text: l $KGZVars['gun_text']
    scene.text('l $KGZVars[\'gun_text\']');
  }
  if (((s as any).KGZVars ?? 0)?.['gun2_text'] !== '') {
    // TODO-QSP: dynamic text: l $KGZVars['gun2_text']
    scene.text('l $KGZVars[\'gun2_text\']');
  }
  if (((s as any).KGZVars ?? 0)?.['gun3_text'] !== '') {
    // TODO-QSP: dynamic text: l $KGZVars['gun3_text']
    scene.text('l $KGZVars[\'gun3_text\']');
  }
  if (((s as any).KGZVars ?? 0)?.['bolgarka'] > 0) {
    scene.text('You have a battery operated angle grinder, useful for cutting through locks and other sturdy materials.');
  }
  if (((s as any).KGZVars ?? 0)?.['ratia'] === 1) {
    scene.text('You have a radio. Useful for communication, but you never know who is on the other end.');
  }
  if (((s as any).KGZVars ?? 0)?.['place'] === 0) {
    scene.text('<center><b>Your Apartment</b></center>');
    // TODO-QSP: dynamic text: Your apartment is a safe place. You have enough provisions to last <<KGZVars['su...
    scene.text(`Your apartment is a safe place. You have enough provisions to last ${((s as any).KGZVars ?? 0)?.['sup'] ?? ''} day(s).`);
    if (((s as any).KGZVars ?? 0)?.['medkit'] > 0) {
      // TODO-QSP: dynamic text: You have <<KGZVars['medkit']>> first aid kits.
      scene.text(`You have ${((s as any).KGZVars ?? 0)?.['medkit'] ?? ''} first aid kits.`);
      if (((s as any).KGZVars ?? 0)?.['HP'] < 100) {
        scene.actions([
          { label: 'Treat your wounds', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['HP'] = 100;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['medkit'] = ((s as any).KGZVars['medkit'] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You heal your wounds using a first aid kit.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Rest', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You rest on the couch while listening out for any intruders or zombies.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
      { label: 'Leave the apartment', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['place'] = 1;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously leave the apartment while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).KGZVars ?? 0)?.['place'] === 1) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0)));
      scene.text('<center><b>City Streets</b></center>');
      scene.text('Corpses and abandoned vehicles litter the streets of this once bustling city.');
      if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
        // TODO-QSP: dynamic text: You carefully roam the streets, spotting <<KGZVars['dead']>> zombies.
        scene.text(`You carefully roam the streets, spotting ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies.`);
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
        if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
          scene.text('Sensing you, the dead immediately rush to attack.');
          scene.actions([
            { label: 'Defend yourself', handler: (st: GameState) => {
    if (((s as any).KGZVars ?? 0)?.['svet'] === 1) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 26) + 5;
    }
    if (((s as any).KGZVars ?? 0)?.['svet'] === 2) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 8) + 3;
    }
    qspGoto(s, 'KGZfight', '');
  } },
          ]);
        } else {
          scene.text('Fortunately, the dead don\'t notice you.');
          qspCall(s, 'KGZdyn', 'KGZvihod');
        }
      } else {
        scene.text('You don\'t see any zombies, but that doesn\'t mean they aren\'t out there…');
        qspCall(s, 'KGZdyn', 'KGZvihod');
      }
    } else {
      if (((s as any).KGZVars ?? 0)?.['place'] === 2) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0)));
        scene.text('<center><b>Abandoned Store</b></center>');
        scene.text('The stale air from spoiled food and rotten flesh overwhelms you as you enter this abandoned store.');
        if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
          // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies as you make your way further into the store...
          scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies as you make your way further into the store.`);
          ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
          if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
            scene.text('Sensing you, the dead immediately rush to attack.');
            scene.actions([
              { label: 'Defend yourself', handler: (st: GameState) => {
    if (((s as any).KGZVars ?? 0)?.['svet'] === 1) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 8) + 3;
    }
    if (((s as any).KGZVars ?? 0)?.['svet'] === 2) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 7) + 2;
    }
    qspGoto(s, 'KGZfight', '');
  } },
            ]);
          } else {
            scene.text('Fortunately, the dead don\'t notice you.');
            qspCall(s, 'KGZdyn', 'KGZvihod2');
          }
        } else {
          scene.text('You don\'t see any zombies, but that doesn\'t mean there aren\'t any hiding in here…');
          qspCall(s, 'KGZdyn', 'KGZvihod2');
        }
      } else {
        if (((s as any).KGZVars ?? 0)?.['place'] === 3) {
          ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0)));
          scene.text('<center><b>Abandoned Hospital</b></center>');
          scene.text('The floor is littered with multiple dead bodies. Once a place of healing, it now stinks of death.');
          if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
            // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies as you make your way further into the hospi...
            scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies as you make your way further into the hospital.`);
            ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
            if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
              scene.text('Sensing you, the dead immediately rush to attack.');
              scene.actions([
                { label: 'Defend yourself', handler: (st: GameState) => {
    if (((s as any).KGZVars ?? 0)?.['svet'] === 1) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 8) + 3;
    }
    if (((s as any).KGZVars ?? 0)?.['svet'] === 2) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 7) + 2;
    }
    qspGoto(s, 'KGZfight', '');
  } },
              ]);
            } else {
              scene.text('Fortunately, the dead don\'t notice you.');
              qspCall(s, 'KGZdyn', 'KGZvihod3');
            }
          } else {
            scene.text('You don\'t see any zombies, but that doesn\'t mean there aren\'t any hiding in here…');
            qspCall(s, 'KGZdyn', 'KGZvihod3');
          }
        } else {
          if (((s as any).KGZVars ?? 0)?.['place'] === 4) {
            ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0)));
            scene.text('<center><b>Boulevard</b></center>');
            scene.text('Wrecked vehicles and rotten corpses litter the streets of the boulevard.');
            if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
              // TODO-QSP: dynamic text: Wandering along the boulevard, you spot <<KGZVars['dead']>> zombies.
              scene.text(`Wandering along the boulevard, you spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies.`);
              ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
              if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                scene.text('Sensing you, the dead immediately rush to attack.');
                scene.actions([
                  { label: 'Defend yourself', handler: (st: GameState) => {
    if (((s as any).KGZVars ?? 0)?.['svet'] === 1) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 26) + 5;
    }
    if (((s as any).KGZVars ?? 0)?.['svet'] === 2) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 8) + 3;
    }
    qspGoto(s, 'KGZfight', '');
  } },
                ]);
              } else {
                scene.text('Fortunately, the dead don\'t notice you.');
                qspCall(s, 'KGZdyn', 'KGZvihod4');
              }
            } else {
              scene.text('You don\'t see any zombies, but that doesn\'t mean they aren\'t out there…');
              qspCall(s, 'KGZdyn', 'KGZvihod4');
            }
          } else {
            if (((s as any).KGZVars ?? 0)?.['place'] === 5) {
              ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0)));
              scene.text('<center><b>Wrecked Hunting Store</b></center>');
              scene.text('This hunting gear store has been looted for almost everything it once contained. The display shelves and counters have been smashed and flipped and a few corpses are strewn around.');
              if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies as you make your way further into the store...
                scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies as you make your way further into the store.`);
                ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                  scene.text('Sensing you, the dead immediately rush to attack.');
                  scene.actions([
                    { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(2, 6)
  }, goto: ['KGZfight', ''] },
                  ]);
                } else {
                  scene.text('Fortunately, the dead don\'t notice you.');
                  qspCall(s, 'KGZdyn', 'KGZvihod5');
                }
              } else {
                scene.text('You don\'t see any zombies, but that doesn\'t mean there aren\'t any hiding in here…');
                qspCall(s, 'KGZdyn', 'KGZvihod5');
              }
            } else {
              if (((s as any).KGZVars ?? 0)?.['place'] === 6) {
                ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0)));
                scene.text('<center><b>Overrun Police Station</b></center>');
                scene.text('The bodies of both civilians and police officers alike are scattered across the floor, with overturned tables used as makeshift barricades.');
                scene.text('This former bastion of justice was once a safe haven for survivors and one of the last holdouts against the zombie hordes, but was eventually overwhelmed by the dead and later looted by the living.');
                if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                  // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies as you make your way further into the stati...
                  scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies as you make your way further into the station.`);
                  ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                  if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                    scene.text('Sensing you, the dead immediately rush to attack.');
                    scene.actions([
                      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(2, 5)
  }, goto: ['KGZfight', ''] },
                    ]);
                  } else {
                    scene.text('Fortunately, the dead don\'t notice you.');
                    qspCall(s, 'KGZdyn', 'KGZvihod6');
                  }
                } else {
                  scene.text('You don\'t see any zombies, but that doesn\'t mean there aren\'t any hiding in here…');
                  qspCall(s, 'KGZdyn', 'KGZvihod6');
                }
              } else {
                if (((s as any).KGZVars ?? 0)?.['place'] === 7) {
                  ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0)));
                  scene.text('<center><b>Ransacked Drug Store</b></center>');
                  scene.text('This drug store was one of the first places to be looted in the early days of the outbreak. There is barely anything left on the ransacked shelves.');
                  if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                    // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies as you make your way further into the store...
                    scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies as you make your way further into the store.`);
                    ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                    if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                      scene.text('Sensing you, the dead immediately rush to attack.');
                      scene.actions([
                        { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(2, 5)
  }, goto: ['KGZfight', ''] },
                      ]);
                    } else {
                      scene.text('Fortunately, the dead don\'t notice you.');
                      qspCall(s, 'KGZdyn', 'KGZvihod7');
                    }
                  } else {
                    scene.text('You don\'t see any zombies, but that doesn\'t mean there aren\'t any hiding in here…');
                    qspCall(s, 'KGZdyn', 'KGZvihod7');
                  }
                } else {
                  if (((s as any).KGZVars ?? 0)?.['place'] === 8) {
                    ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 4 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2));
                    scene.text('<center><b>Blocked Highway</b></center>');
                    scene.text('The rush of people desperate to escape the city amidst the outbreak resulted in a traffic jam that all but blocked this highway, forcing many to flee on foot to outrun the pursuing dead.');
                    scene.text('These abandoned vehicles now offer plentiful amounts of loot to survivors, but also allow zombies to easily ambush those caught off guard.');
                    if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                      // TODO-QSP: dynamic text: As you wander along the highway, you spot <<KGZVars['dead']>> zombies.
                      scene.text(`As you wander along the highway, you spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies.`);
                      ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                      if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                        scene.text('Sensing you, the dead immediately rush to attack.');
                        scene.actions([
                          { label: 'Defend yourself', handler: (st: GameState) => {
    if (((s as any).KGZVars ?? 0)?.['svet'] === 1) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 26) + 5;
    }
    if (((s as any).KGZVars ?? 0)?.['svet'] === 2) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 8) + 3;
    }
    qspGoto(s, 'KGZfight', '');
  } },
                        ]);
                      } else {
                        scene.text('Fortunately, the dead don\'t notice you.');
                        qspCall(s, 'KGZdyn', 'KGZvihod8');
                      }
                    } else {
                      scene.text('You don\'t see any zombies, but that doesn\'t mean they aren\'t out there…');
                      qspCall(s, 'KGZdyn', 'KGZvihod8');
                    }
                  } else {
                    if (((s as any).KGZVars ?? 0)?.['place'] === 9) {
                      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0)));
                      scene.text('<center><b>Abandoned Gas Station</b></center>');
                      scene.text('This abandoned gas station has long been looted of its fuel supply and anything else valuable. It now serves as nothing more than a milemarker landmark on the road.');
                      if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                        // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies roaming around.
                        scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies roaming around.`);
                        ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                        if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                          scene.text('Sensing you, the dead immediately rush to attack.');
                          scene.actions([
                            { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(2, 5)
  }, goto: ['KGZfight', ''] },
                          ]);
                        } else {
                          scene.text('Fortunately, the dead don\'t notice you.');
                          qspCall(s, 'KGZdyn', 'KGZvihod9');
                        }
                      } else {
                        scene.text('You don\'t see any zombies, but that doesn\'t mean they aren\'t out there…');
                        qspCall(s, 'KGZdyn', 'KGZvihod9');
                      }
                    } else {
                      if (((s as any).KGZVars ?? 0)?.['place'] === 10) {
                        ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 5 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 5));
                        if (((s as any).KGZVars ?? 0)?.['placeA'] === 20) {
                          ((s as any).KGZVars = (s as any).KGZVars ?? {})['place'] = 100;
                          // TODO-QSP: gt $curloc
                        }
                        if (((s as any).KGZVars ?? 0)?.['placeA'] === 10) {
                          ((s as any).KGZVars = (s as any).KGZVars ?? {})['place'] = 11;
                          // TODO-QSP: gt $curloc
                        }
                        if (((s as any).KGZVars ?? 0)?.['placeA'] === 0) {
                          ((s as any).KGZVars = (s as any).KGZVars ?? {})['place'] = 8;
                          // TODO-QSP: gt $curloc
                        }
                        scene.text('<center><b>Road to Fort Bragg</b></center>');
                        scene.text('A road that apparently leads to a military base right on the outskirts of the established quarantine zone. It is littered with abandoned cars and is all but impassable by vehicle.');
                        scene.text('Given how far away it is from the city, combined with the threat of possibly being shot by the military for straying too close to the edge of the quarantine zone, very few survivors ever venture there.');
                        if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                          // TODO-QSP: dynamic text: You see <<KGZVars['dead']>> zombies roaming around as you wander along the road.
                          scene.text(`You see ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies roaming around as you wander along the road.`);
                          ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                          if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                            scene.text('Sensing you, the dead immediately rush to attack.');
                            scene.actions([
                              { label: 'Defend yourself', handler: (st: GameState) => {
    if (((s as any).KGZVars ?? 0)?.['svet'] === 1) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 26) + 5;
    }
    if (((s as any).KGZVars ?? 0)?.['svet'] === 2) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = Math.floor(Math.random() * 8) + 3;
    }
    qspGoto(s, 'KGZfight', '');
  } },
                            ]);
                          } else {
                            scene.text('Fortunately, the dead don\'t notice you.');
                            qspCall(s, 'KGZdyn', 'KGZvihod10');
                          }
                        } else {
                          scene.text('You don\'t see any zombies, but that doesn\'t mean they aren\'t out there…');
                          qspCall(s, 'KGZdyn', 'KGZvihod10');
                        }
                      } else {
                        if (((s as any).KGZVars ?? 0)?.['place'] === 11) {
                          ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10));
                          scene.text('<center><b>Fort Bragg</b></center>');
                          scene.text('Fort Bragg is a small, but heavily fortified military base surrounded by a fence.');
                          if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                            // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies roaming around as you approach.
                            scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies roaming around as you approach.`);
                            ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                            if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                              scene.text('Sensing you, the dead immediately rush to attack.');
                              scene.actions([
                                { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(3, 10)
  }, goto: ['KGZfight', ''] },
                              ]);
                            } else {
                              scene.text('Fortunately, the dead don\'t notice you.');
                              qspCall(s, 'KGZdyn', 'KGZvihod11');
                            }
                          } else {
                            scene.text('You don\'t see any zombies, but that doesn\'t mean they aren\'t out there…');
                            qspCall(s, 'KGZdyn', 'KGZvihod11');
                          }
                        } else {
                          if (((s as any).KGZVars ?? 0)?.['place'] === 12) {
                            if (((s as any).KGZVars ?? 0)?.['dost'] === 0) {
                              ((s as any).KGZVars = (s as any).KGZVars ?? {})['dost'] = 1;
                            }
                            ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10));
                            scene.text('<center><b>Fort Bragg Roof</b></center>');
                            scene.text('The roof is covered in rotting bodies and a number of spent bullet casings.');
                            // TODO-QSP: dynamic text: There are enough provisions here for <<KGZVars['sup']>> day(s).
                            scene.text(`There are enough provisions here for ${((s as any).KGZVars ?? 0)?.['sup'] ?? ''} day(s).`);
                            if (((s as any).KGZVars ?? 0)?.['fortQW'] > 0) {
                              scene.text('A <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027KGZdyn\\u0027, \\u0027KGZvincent\\u0027); return false;">young man</a> leans on a sniper rifle.');
                            }
                            if (((s as any).KGZVars ?? 0)?.['medkit'] > 0) {
                              // TODO-QSP: dynamic text: There are <<KGZVars['medkit']>> first aid kits available.
                              scene.text(`There are ${((s as any).KGZVars ?? 0)?.['medkit'] ?? ''} first aid kits available.`);
                              if (((s as any).KGZVars ?? 0)?.['HP'] < 100) {
                                scene.actions([
                                  { label: 'Treat your wounds', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['HP'] = 100;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['medkit'] = ((s as any).KGZVars['medkit'] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You heal your wounds with a first aid kit.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
                                ]);
                              }
                            }
                            scene.actions([
                              { label: 'Rest', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You settle on the roof, but don\'t take your eyes off the barricaded staircase which the dead can still climb.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
                              { label: 'Enter the fort', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['place'] = 11;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You slowly make your way down the staircase while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
                            ]);
                          } else {
                            if (((s as any).KGZVars ?? 0)?.['place'] === 13) {
                              ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10));
                              scene.text('<center><b>Fort Bragg Rations Warehouse</b></center>');
                              scene.text('A warehouse once used to stockpile rations. It\'s dark and you hear various noises coming from within.');
                              if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                                // TODO-QSP: dynamic text: You're able to make out <<KGZVars['dead']>> zombies wandering around.
                                scene.text(`You're able to make out ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies wandering around.`);
                                ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                                if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                                  scene.text('Sensing you, the dead immediately rush to attack.');
                                  scene.actions([
                                    { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(2, 3)
  }, goto: ['KGZfight', ''] },
                                  ]);
                                } else {
                                  scene.text('Fortunately, the dead don\'t notice you.');
                                  qspCall(s, 'KGZdyn', 'KGZvihod13');
                                }
                              } else {
                                scene.text('You don\'t see any zombies, but that doesn\'t mean there aren\'t any hiding in here…');
                                qspCall(s, 'KGZdyn', 'KGZvihod13');
                              }
                            } else {
                              if (((s as any).KGZVars ?? 0)?.['place'] === 14) {
                                ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10));
                                scene.text('<center><b>Fort Bragg Infirmary</b></center>');
                                scene.text('The infirmary is poorly lit and you can hear various noises coming from within.');
                                if (((s as any).KGZVars ?? 0)?.['batl']=== 0) {
                                  // TODO-QSP: dynamic text: <<KGZVars['dead']>> zombies are roaming around.
                                  scene.text(`${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies are roaming around.`);
                                  ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                                  if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                                    scene.text('Sensing you, the dead immediately rush to attack.');
                                    scene.actions([
                                      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(2, 3)
  }, goto: ['KGZfight', ''] },
                                    ]);
                                  } else {
                                    scene.text('Fortunately, the dead don\'t notice you.');
                                    qspCall(s, 'KGZdyn', 'KGZvihod14');
                                  }
                                } else {
                                  scene.text('You don\'t see any zombies, but that doesn\'t mean there aren\'t any hiding in here…');
                                  qspCall(s, 'KGZdyn', 'KGZvihod14');
                                }
                              } else {
                                if (((s as any).KGZVars ?? 0)?.['place'] === 15) {
                                  ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10));
                                  scene.text('<center><b>Fort Bragg Armory</b></center>');
                                  scene.text('The once fortified armory has been busted wide open.');
                                  if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                                    // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies wandering around.
                                    scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies wandering around.`);
                                    ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                                    if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                                      scene.text('Sensing you, the dead immediately rush to attack.');
                                      scene.actions([
                                        { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(2, 3)
  }, goto: ['KGZfight', ''] },
                                      ]);
                                    } else {
                                      scene.text('Fortunately, the dead don\'t notice you.');
                                      qspCall(s, 'KGZdyn', 'KGZvihod15');
                                    }
                                  } else {
                                    scene.text('You don\'t see any zombies, but that doesn\'t mean there aren\'t any hiding in here…');
                                    qspCall(s, 'KGZdyn', 'KGZvihod15');
                                  }
                                } else {
                                  if (((s as any).KGZVars ?? 0)?.['place'] === 16) {
                                    ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10));
                                    scene.text('<center><b>Fort Bragg Garage</b></center>');
                                    scene.text('The garage still contains both civilian and military vehicles, but you can hear disturbing noises coming from within the poorly lit structure.');
                                    if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                                      // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies roaming around.
                                      scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies roaming around.`);
                                      ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                                      if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                                        scene.text('Sensing you, the dead immediately rush to attack.');
                                        scene.actions([
                                          { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(2, 3)
  }, goto: ['KGZfight', ''] },
                                        ]);
                                      } else {
                                        scene.text('Fortunately, the dead don\'t notice you.');
                                        qspCall(s, 'KGZdyn', 'KGZvihod16');
                                      }
                                    } else {
                                      scene.text('You don\'t see any zombies, but that doesn\'t mean there aren\'t any hiding in here…');
                                      qspCall(s, 'KGZdyn', 'KGZvihod16');
                                    }
                                  } else {
                                    if (((s as any).KGZVars ?? 0)?.['place'] === 100) {
                                      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 30 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20));
                                      scene.text('<center><b>City Suburbs</b></center>');
                                      scene.text('The burnt out rubble of what was once the sprawling suburbs on the edge of the city.');
                                      scene.text('They were firebombed by the military in an effort to contain the outbreak, but a few of the more sturdy houses managed to escape the flames and are still standing.');
                                      if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                                        // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies roaming the ruins of the streets.
                                        scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies roaming the ruins of the streets.`);
                                        ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                                        if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                                          scene.text('Sensing you, the dead immediately rush to attack.');
                                          scene.actions([
                                            { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(10, 30)
  }, goto: ['KGZfight', ''] },
                                          ]);
                                        } else {
                                          scene.text('Fortunately, the dead don\'t notice you.');
                                          qspCall(s, 'KGZdyn', 'KGZvihod100');
                                        }
                                      } else {
                                        scene.text('You don\'t see any zombies, but that doesn\'t mean they aren\'t out there…');
                                        qspCall(s, 'KGZdyn', 'KGZvihod100');
                                      }
                                    } else {
                                      if (((s as any).KGZVars ?? 0)?.['place'] === 101) {
                                        scene.text('<center><b>Abandoned Suburban House</b></center>');
                                        // TODO-QSP: dynamic text: This house is a safe place. There are enough provisions here to last <<KGZVars['...
                                        scene.text(`This house is a safe place. There are enough provisions here to last ${((s as any).KGZVars ?? 0)?.['sup'] ?? ''} day(s).`);
                                        if (((s as any).KGZVars ?? 0)?.['medkit'] > 0) {
                                          // TODO-QSP: dynamic text: There are <<KGZVars['medkit']>> first aid kits available.
                                          scene.text(`There are ${((s as any).KGZVars ?? 0)?.['medkit'] ?? ''} first aid kits available.`);
                                          if (((s as any).KGZVars ?? 0)?.['HP'] < 100) {
                                            scene.actions([
                                              { label: 'Treat your wounds', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['HP'] = 100;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['medkit'] = ((s as any).KGZVars['medkit'] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You heal your wounds with a first aid kit.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
                                            ]);
                                          }
                                        }
                                        scene.actions([
                                          { label: 'Rest', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You rest on the couch while listening out for any intruders or zombies.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
                                          { label: 'Out of the house', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['place'] = 100;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously leave the house while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
                                        ]);
                                      } else {
                                        if (((s as any).KGZVars ?? 0)?.['place'] === 102) {
                                          ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 5 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 5));
                                          scene.text('<center><b>Abandoned Supermarket</b></center>');
                                          scene.text('This abandoned supermarket stands imposingly tall over the surrounding buildings.');
                                          if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                                            // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> roaming around.
                                            scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} roaming around.`);
                                            ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                                            if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                                              scene.text('Sensing you, the dead immediately rush to attack.');
                                              scene.actions([
                                                { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 10)
  }, goto: ['KGZfight', ''] },
                                              ]);
                                            } else {
                                              scene.text('Fortunately, the dead don\'t notice you.');
                                              qspCall(s, 'KGZdyn', 'KGZvihod102');
                                            }
                                          } else {
                                            scene.text('You don\'t see any zombies, but that doesn\'t mean there aren\'t any hiding in there…');
                                            qspCall(s, 'KGZdyn', 'KGZvihod102');
                                          }
                                        } else {
                                          if (((s as any).KGZVars ?? 0)?.['place'] === 200) {
                                            ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 2 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0)));
                                            scene.text('<center><b>Forest</b></center>');
                                            scene.text('The haunting sounds of animals and the wind whistle through the trees of this forest.');
                                            if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                                              // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies roaming through the trees.
                                              scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies roaming through the trees.`);
                                              ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                                              if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                                                scene.text('Sensing you, the dead immediately rush to attack.');
                                                scene.actions([
                                                  { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(10, 30)
  }, goto: ['KGZfight', ''] },
                                                ]);
                                              } else {
                                                scene.text('Fortunately, the dead don\'t notice you.');
                                                qspCall(s, 'KGZdyn', 'KGZvihod200');
                                              }
                                            } else {
                                              scene.text('You don\'t see any zombies, but that doesn\'t mean they aren\'t out there…');
                                              qspCall(s, 'KGZdyn', 'KGZvihod200');
                                            }
                                          } else {
                                            if (((s as any).KGZVars ?? 0)?.['place'] === 201) {
                                              ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 3 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0)));
                                              scene.text('<center><b>Farm</b></center>');
                                              scene.text('A large, sturdy fence surrounds this deceptively quaint farm. Any animals that once resided here have long since disappeared.');
                                              if (((s as any).KGZVars ?? 0)?.['batl'] === 0) {
                                                // TODO-QSP: dynamic text: You spot <<KGZVars['dead']>> zombies wandering through the fields.
                                                scene.text(`You spot ${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies wandering through the fields.`);
                                                ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = Math.floor(Math.random() * 11) + 0;
                                                if (((s as any).KGZVars ?? 0)?.['agr'] <= 8) {
                                                  scene.text('Sensing you, the dead immediately rush to attack.');
                                                  scene.actions([
                                                    { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(10, 30)
  }, goto: ['KGZfight', ''] },
                                                  ]);
                                                } else {
                                                  scene.text('Fortunately, the dead don\'t notice you.');
                                                  qspCall(s, 'KGZdyn', 'KGZvihod201');
                                                }
                                              } else {
                                                scene.text('You don\'t see any zombies, but that doesn\'t mean they aren\'t out there…');
                                                qspCall(s, 'KGZdyn', 'KGZvihod201');
                                              }
                                            } else {
                                              if (((s as any).KGZVars ?? 0)?.['place'] === 202) {
                                                scene.text('<center><b>Old Farmhouse</b></center>');
                                                // TODO-QSP: dynamic text: This old farmhouse is a safe place. There are enough provisions here to last <<K...
                                                scene.text(`This old farmhouse is a safe place. There are enough provisions here to last ${((s as any).KGZVars ?? 0)?.['sup'] ?? ''} day(s).`);
                                                if (((s as any).KGZVars ?? 0)?.['medkit'] > 0) {
                                                  // TODO-QSP: dynamic text: There are <<KGZVars['medkit']>> first aid kits available.
                                                  scene.text(`There are ${((s as any).KGZVars ?? 0)?.['medkit'] ?? ''} first aid kits available.`);
                                                  if (((s as any).KGZVars ?? 0)?.['HP'] < 100) {
                                                    scene.actions([
                                                      { label: 'Treat your wounds', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['HP'] = 100;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['medkit'] = ((s as any).KGZVars['medkit'] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You heal your wounds with a first aid kit.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
                                                    ]);
                                                  }
                                                }
                                                scene.actions([
                                                  { label: 'Rest', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You rest on the couch while listening out for any intruders or zombies.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
                                                  { label: 'Leave', handler: (st: GameState) => {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['place'] = 201;
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously leave the farmhouse while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
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

export const KGZgame: LocationDef = {
  name: 'KGZgame',
  title: '<center><b>GAME OVER</b></center>',
  region: 'kgd',
  description: ['You have no provisions and are starving!'],
  enter: enter,
};
