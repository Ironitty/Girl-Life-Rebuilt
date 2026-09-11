import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

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
  scene.build();
}

function enterTickets(s: GameState, scene: SceneBuilder): void {
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
