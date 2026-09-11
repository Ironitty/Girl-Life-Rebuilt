import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) !== 'city_canals') {
    qspCall(s, 'city_canals', 'init');
  }
  qspCall(s, 'core_library', 'setloc', 'city_canals', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'stat', '');
  ((s as any).setloc ?? {})['imagepath'] = 'locations/city/canals/';
  if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) < 9) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      ((s as any).setloc ?? {})['StageImage'] = ((s as any).setloc ?? {})?.['imagepath'] + 'city_canals_day_' + Math.floor(Math.random() * 2) + 1 + '.jpg';
    } else {
      ((s as any).setloc ?? {})['StageImage'] = ((s as any).setloc ?? {})?.['imagepath'] + 'city_canals_night_' + Math.floor(Math.random() * 2) + 1 + '.jpg';
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      ((s as any).setloc ?? {})['StageImage'] = ((s as any).setloc ?? {})?.['imagepath'] + 'w_city_canals_day_1.jpg';
    } else {
      ((s as any).setloc ?? {})['StageImage'] = ((s as any).setloc ?? {})?.['imagepath'] + 'w_city_canals_night_1.jpg';
    }
  }
  qspCall(s, 'core_library', 'stage_title');
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'arts') {
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'island') {
      scene.actions([{ label: 'Continue', goto: ['city_island', ''] }]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'industrial') {
        scene.actions([{ label: 'Continue', goto: ['city_industrial', ''] }]);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'residential') {
          scene.actions([{ label: 'Continue', goto: ['city_suburbs', 'start'] }]);
        } else {
          // TODO-QSP: gt $ARGS[1], $ARGS[2]
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc ?? {})['StageTitle'] = 'St Petersburg Canals';
  qspCall(s, 'city_canals', 'setup', 'start');
  if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) < 12) {
    scene.text('You stand gazing at St. Petersburg\'s famous Canals of the North, the hustle and bustle of people on the streets against a backdrop of elegant Russian buildings. You see the boatmen plying their trade on the waters below and working on their tour boats.');
    if (((s as any).loc_history ?? 0) !== 'city_suburbs') {
      scene.actions([
        { label: 'Take a boat to City Suburbia (0:20,  [+$func(\'money\', \'string_price\', 100) + \')...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'money', 'pay', 100);
    qspCall(s, 'stat', '');
    scene.img(`images/${((s as any).setloc ?? 0)?.['imagepath']}neva_river.jpg`);
    scene.text('You take a boat and travel along the Neva River and up the Malaya Neva to the world renowned Spit of Vaslievs Island. As you pull into the jetty, you can see where the river continues to flow into Neva Bay and the two islands of Dekabristov and Petrosky.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt $loc, 'exit', 'residential'
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).loc_history ?? 0) !== 'city_island') {
      scene.actions([
        { label: 'Take a boat to Vasilyevsky Island (0:20,  [+$func(\'money\', \'string_price\', 100) + \')...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'money', 'pay', 100);
    qspCall(s, 'stat', '');
    scene.img(`images/${((s as any).setloc ?? 0)?.['imagepath']}island_canal.jpg`);
    scene.text('You take a boat and travel along the Neva River one of the arterial river that forms the lifeblood of St Petersburg. You gaze upon the many bridges as you pass them and elegant buildings that line the river banks lost in your own thoughts.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt $loc, 'exit', 'island'
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).loc_history ?? 0) !== 'city_industrial') {
      scene.actions([
        { label: 'Take a boat to the Industrial district (0:20,  [+$func(\'money\', \'string_price\', 100) + \')...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'money', 'pay', 100);
    qspCall(s, 'stat', '');
    scene.img(`images/${((s as any).setloc ?? 0)?.['imagepath']}chernaya_rechka.jpg`);
    scene.text('You get into the boat and travel along the Chernaya Rechka to the cities industrial district. You muse as you remember your history lessons about the famous poet Alexander Pushkin meeting his end on the banks in a duel.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt $loc, 'exit', 'industrial'
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take a boat trip (1:20,  [+$func(\'money\', \'string_price\', 150) + \')...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'money', 'pay', 150);
    qspCall(s, 'stat', '');
    scene.img(`images/${((s as any).setloc ?? 0)?.['imagepath']}tour_boat_${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('You take a boat ride. Description of the boat tour goes here');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Leave the canals', handler: (st: GameState) => {
    // TODO-QSP: gt $loc, 'exit', $loc_history, $loc_args_history
  } },
    ]);
  } else {
    scene.text('You can\'t take a boat trip in the winter. The Canal ways are frozen over.');
    scene.actions([
      { label: 'Leave the canals', handler: (st: GameState) => {
    // TODO-QSP: gt $loc, 'exit', $loc_history, $loc_args_history
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTickets(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Pay the boatman [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 100);
      (s as any).canals_ticket = ((s as any).daystart ?? 0);
      // TODO-QSP: dynamic text: You pay the boatman ' + $func('money', 'string_price', 100) + ' for your ticket.
      scene.text('You pay the boatman \' + $func(\'money\', \'string_price\', 100) + \' for your ticket.');
      scene.actions([{ label: 'Continue', goto: ['city_canals', 'start'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterDates(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'tickets':
      enterTickets(s, scene);
      break;
    case 'dates':
      enterDates(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_canals: LocationDef = {
  name: 'city_canals',
  title: 'You stand gazing at St. Petersburg\'s famous Canals of the No',
  region: 'city',
  locationType: 'public_outdoors',
  enter: enter,
};
