import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) !== 'city_canals') {
    qspCall(s, 'city_canals', 'init');
  }
  qspCall(s, 'core_library', 'setloc', 'city_canals', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'stat', '');
  (s as any).setloc['imagepath'] = 'locations/city/canals/';
  if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) < 9) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      (s as any).setloc['StageImage'] = ((s as any).setloc ?? 0)?.['imagepath'] + '((s as any).city_canals_day_ ?? 0)<<((s as any).rand ?? 0)(1, 2)>>.((s as any).jpg ?? 0)';
    } else {
      (s as any).setloc['StageImage'] = ((s as any).setloc ?? 0)?.['imagepath'] + '((s as any).city_canals_night_ ?? 0)<<((s as any).rand ?? 0)(1, 2)>>.((s as any).jpg ?? 0)';
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      (s as any).setloc['StageImage'] = ((s as any).setloc ?? 0)?.['imagepath'] + '((s as any).w_city_canals_day_1?.jpg ?? 0)';
    } else {
      (s as any).setloc['StageImage'] = ((s as any).setloc ?? 0)?.['imagepath'] + '((s as any).w_city_canals_night_1?.jpg ?? 0)';
    }
  }
  qspCall(s, 'core_library', 'stage_title');
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
    scene.actions([{ label: 'Continue', goto: ['city_island', ''] }]);
    if (((s as any).locArgs?.[1] ?? 0) === 'industrial') {
      scene.actions([{ label: 'Continue', goto: ['city_industrial', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_suburbs', 'start'] }]);
      // TODO-QSP: gt $ARGS[1], $ARGS[2]
    }
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'content'  ||  ((s as any).locArgs?.[0] ?? 0) === 'start') {
    (s as any).setloc['StageTitle'] = 'St Petersburg Canals';
    qspCall(s, 'city_canals', 'setup', 'start');
    if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) < 12) {
      scene.text('You stand gazing at St. Petersburg\'s famous Canals of the North, the hustle and bustle of people on the streets against a backdrop of elegant Russian buildings. You see the boatmen plying their trade on the waters below and working on their tour boats.');
      if (((s as any).loc_history ?? 0) !== 'city_suburbs') {
        (s as any).minut = ((s as any).minut ?? 0) + 20;
        qspCall(s, 'money', 'pay', 100);
        qspCall(s, 'stat', '');
        scene.img(`images/${((s as any).setloc ?? 0)?.['\'imagepath\'']}neva_river.jpg`);
        scene.text('You take a boat and travel along the Neva River and up the Malaya Neva to the world renowned Spit of Vaslievs Island. As you pull into the jetty, you can see where the river continues to flow into Neva Bay and the two islands of Dekabristov and Petrosky.');
        scene.actions([
          { label: 'Take a boat to City Suburbia (0:20,  [+$func(\'money\', \'string_price\', 100) + \')...]' }, // TODO-QSP: empty action body
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt $loc, 'exit', 'residential'
  } },
        ]);
      }
    }
    if (((s as any).loc_history ?? 0) !== 'city_island') {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      qspCall(s, 'money', 'pay', 100);
      qspCall(s, 'stat', '');
      scene.img(`images/${((s as any).setloc ?? 0)?.['\'imagepath\'']}island_canal.jpg`);
      scene.text('You take a boat and travel along the Neva River one of the arterial river that forms the lifeblood of St Petersburg. You gaze upon the many bridges as you pass them and elegant buildings that line the river banks lost in your own thoughts.');
      scene.actions([
        { label: 'Take a boat to Vasilyevsky Island (0:20,  [+$func(\'money\', \'string_price\', 100) + \')...]' }, // TODO-QSP: empty action body
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt $loc, 'exit', 'island'
  } },
      ]);
    }
  }
  if (((s as any).loc_history ?? 0) !== 'city_industrial') {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'money', 'pay', 100);
    qspCall(s, 'stat', '');
    scene.img(`images/${((s as any).setloc ?? 0)?.['\'imagepath\'']}chernaya_rechka.jpg`);
    scene.text('You get into the boat and travel along the Chernaya Rechka to the cities industrial district. You muse as you remember your history lessons about the famous poet Alexander Pushkin meeting his end on the banks in a duel.');
    scene.actions([
      { label: 'Take a boat to the Industrial district (0:20,  [+$func(\'money\', \'string_price\', 100) + \')...]' }, // TODO-QSP: empty action body
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt $loc, 'exit', 'industrial'
  } },
    ]);
  }
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
    default:
      enterInit(s, scene);
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
