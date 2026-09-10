import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHasCar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] > 0) {
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterHasWreck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] > 0  &&  ((s as any).car ?? 0)?.['wreck'] === 1) {
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsHere(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 1) {
    (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 2) {
    (s as any).ARGS[2] = ((s as any).loc_arg ?? 0);
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 3) {
    (s as any).ARGS[3] = ((s as any).region ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).car ?? 0)?.['loc']  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).car ?? 0)?.['loc_arg']  &&  ((s as any).locArgs?.[3] ?? 0) === ((s as any).car ?? 0)?.['region']) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterIsHereArea(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 1) {
    (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 2) {
    (s as any).ARGS[2] = ((s as any).region ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).car ?? 0)?.['loc']  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).car ?? 0)?.['region']) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterSetloc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 1) {
    (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 2) {
    (s as any).ARGS[2] = ((s as any).loc_arg ?? 0);
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 3) {
    (s as any).ARGS[3] = ((s as any).region ?? 0);
  }
  (s as any).car['loc'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).car['loc_arg'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).car['region'] = ((s as any).locArgs?.[3] ?? 0);
  scene.build();
}

function enterAddCar(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'car_attributes', ARGS[1]
  (s as any).car['ID'] = qspUntranslated(s, "ARGS[1]", { location: "car_funcs" });
  (s as any).car['name'] = ((s as any).CarName ?? 0);
  (s as any).car['new_condition'] = ((s as any).CarCondition ?? 0);
  (s as any).car['current_condition'] = ((s as any).CarCondition ?? 0);
  (s as any).car['tank'] = ((s as any).CarTank ?? 0);
  (s as any).car['fuel'] = ((s as any).CarTank ?? 0);
  (s as any).car['wreck'] = 0;
  scene.build();
}

function enterGotoCar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gt $car['loc'], $car['loc_arg']
  scene.build();
}

function enterAvtonorm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] >= 1  &&  ((s as any).car ?? 0)?.['ID'] <= 8) {
    (s as any).normhour = 20;
  } else {
    (s as any).normhour = 15;
    if (((s as any).car ?? 0)?.['ID'] === 10) {
      (s as any).normhour = 18;
    } else {
      (s as any).normhour = 15;
      if (((s as any).car ?? 0)?.['ID'] === 13  ||  ((s as any).car ?? 0)?.['ID'] >= 95) {
        (s as any).normhour = 50;
      }
      if (((s as any).car ?? 0)?.['wreck'] === 0) {
        (s as any).normneed = 0 - (((s as any).car ?? 0)?.['current_condition'] - ((s as any).car ?? 0)?.['new_condition']);
        (s as any).normrem = ((s as any).normneed ?? 0) * ((s as any).normhour ?? 0);
      } else {
        (s as any).normneed = 0 - (((s as any).car ?? 0)?.['current_condition'] - ((s as any).car ?? 0)?.['new_condition']);
        (s as any).normrem = (((s as any).normneed ?? 0) * ((s as any).normhour ?? 0)) * 8;
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'has_car':
      enterHasCar(s, scene);
      break;
    case 'has_wreck':
      enterHasWreck(s, scene);
      break;
    case 'is_here':
      enterIsHere(s, scene);
      break;
    case 'is_here_area':
      enterIsHereArea(s, scene);
      break;
    case 'setloc':
      enterSetloc(s, scene);
      break;
    case 'add_car':
      enterAddCar(s, scene);
      break;
    case 'goto_car':
      enterGotoCar(s, scene);
      break;
    case 'avtonorm':
      enterAvtonorm(s, scene);
      break;
    default:
      enterHasCar(s, scene);
      break;
  }
}

export const car_funcs: LocationDef = {
  name: 'car_funcs',
  region: 'other',
  enter: enter,
};
