import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'fuelstation_carwash', 'start');
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 0);
    scene.text('The gas station worker chases you away. "At least wash yourself off first, whore!"');
    scene.actions([
      { label: 'Leave', goto: ['fuelstation', 'start'] },
      { label: 'Go to the toilet', goto: ['fuelstation', 'toilet'] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'wash'] }]);
  }
  scene.build();
}

function enterWash(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'city') {
    (s as any).slut_compare = ((s as any).fame ?? 0)?.['city_slut'];
  } else {
    (s as any).slut_compare = ((s as any).fame ?? 0)?.['pav_slut'];
  }
  if (((s as any).PCloBimbo ?? 0) === 1  ||  ((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
    scene.img(`images/locations/shared/carwash/bimboclean${Math.floor(Math.random() * 4) + 1}.jpg`);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'sweat', 'add', 2);
    if (((s as any).pcs_apprnc ?? 0) >= 60) {
      // TODO-QSP: dynamic text: You wash the windows of several cars and earn <<$func('money', 'string_profit', ...
      scene.text(`You wash the windows of several cars and earn ${qspFunc(s, 'money', 'string_profit', 100)}.`);
      qspCall(s, 'money', 'earn', 100);
      if (Math.floor(Math.random() * 100) + 1 <= ((s as any).min ?? 0)(((s as any).max ?? 0)(20, ((s as any).slut_compare ?? 0)), 80)) {
        scene.text('As you finish washing another car, the driver walks up to you to give you a tip. From the way he\'s looking at you, it\'s obvious he\'s interested in something more as well.');
        (s as any).carwashscene = Math.floor(Math.random() * 100) + 1;
        if (((s as any).carwashscene ?? 0) <= ((s as any).min ?? 0)(((s as any).max ?? 0)(25, ((s as any).slut_compare ?? 0)), 50)  &&  ((s as any).carwashscene ?? 0) >= 25) {
          scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'assQ'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'pussyQ'] }]);
          if (((s as any).carwashscene ?? 0) <= ((s as any).min ?? 0)(((s as any).max ?? 0)(65, ((s as any).slut_compare ?? 0)), 85)  &&  ((s as any).carwashscene ?? 0) >= 65) {
            scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'handQ'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'blowQ'] }]);
            scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'titsQ'] }]);
          }
          qspCall(s, 'fuelstation_carwash', 'flash_passing');
        }
      } else {
        // TODO-QSP: dynamic text: You wash the windows of several cars and earn <<$func('money', 'string_profit', ...
        scene.text(`You wash the windows of several cars and earn ${qspFunc(s, 'money', 'string_profit', 80)}.`);
        qspCall(s, 'money', 'earn', 80);
        qspCall(s, 'fuelstation_carwash', 'flash_passing');
      }
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'mood', 'lower', 'tiny');
      qspCall(s, 'sweat', 'add', 2);
      qspCall(s, 'money', 'earn', 60);
      scene.img(`images/locations/shared/carwash/regular${Math.floor(Math.random() * 4) + 1}.jpg`);
      // TODO-QSP: dynamic text: You wash the windows of several cars and earn <<$func('money', 'string_profit', ...
      scene.text(`You wash the windows of several cars and earn ${qspFunc(s, 'money', 'string_profit', 60)}.`);
      qspCall(s, 'fuelstation_carwash', 'flash_passing');
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'wash':
      enterWash(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const fuelstation_carwash: LocationDef = {
  name: 'fuelstation_carwash',
  title: 'The gas station worker chases you away. "At least wash yours',
  region: 'other',
  description: ['The gas station worker chases you away. "At least wash yourself off first, whore!"'],
  enter: enter,
};
