import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'prostitution_functions', 'work_clothes');
  qspCall(s, 'gas_station_gp_117', 'event_check');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'gas_station_gp_117', 'outside');
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/gas_station_gp_117/gas_\'+iif(month > 10 or month < 4, \'winter\', \')+iif(daystage = 5, \'night\', \'day\')+\'.jpg');
  scene.text('The gas station is modern and clean in comparison to other gas stations in the area. To the south of the station is the highway M-10 that goes from St. Petersburg to Moscow. To the north there are small villages and towns similar to Pavlovsk which is even further south than the highway.');
  scene.text('There is a small shop were you can buy something to eat or to drink and a public restroom is also nearby.');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    qspCall(s, 'gas_station_gp_117', 'gas');
  }
  if (((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['gas_station'] === 1  &&  ((s as any).prostitute ?? 0)?.['active'] === 1) {
    if (((s as any).prostitute ?? 0)?.['earnings_day'] > 0) {
      // TODO-QSP: 'You have earned <<$func(''money'', ''string_profit'', prostitute[''earnings_day''])>> today.'+iif(p...
    }
    qspCall(s, 'prostitution_functions', 'work_clothes');
    if (((s as any).prostitute ?? 0)?.['work_clothes']  &&  ((s as any).prostitute ?? 0)?.['changed_for_work']) {
      // TODO-QSP: dynamic text: You are wearing the right outfit to work as a prostitute at the gas station. You...
      scene.text('You are wearing the right outfit to work as a prostitute at the gas station. You can \' + iif(func(\'car_funcs\', \'is_here\'), \'<a href="exec: gt \'prostitution_functions\', \'change_back\' ">change back into your regular clothes</a> in your car or\', \'change back into your regular clothes\') + \' in a restroom.');
    } else {
      // TODO-QSP: dynamic text: You could work as a prostitute, but first you have to ' + iif(func('car_funcs', ...
      scene.text('You could work as a prostitute, but first you have to \' + iif(func(\'car_funcs\', \'is_here\'), \'<a href="exec: gt \'prostitution_functions\', \'change\' ">change into a more appropriate outfit</a> in your car or \', \'change into a more appropriate outfit \') + \'in a restroom.');
      scene.text('You are wearing the right outfit to work as a prostitute at the gas station.');
    }
  }
  if (((s as any).prostitute ?? 0)?.['payment_method'] === 1) {
    // TODO-QSP: '<br>You can take a bus to the '+iif(func('money', 'can_afford', 75) ! 1, 'train station', '<a href=...
  }
  qspCall(s, 'stat', '');
  if (((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['gas_station'] === 1  &&  ((s as any).prostitute ?? 0)?.['work_clothes']) {
    // TODO-QSP: act 'Go to work': gt 'gas_station_gp_117', 'work'
  }
  scene.actions([
    { label: 'Go inside the gas station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gas_station_gp_117', 'shop'] },
    { label: 'Go to the public restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gas_station_gp_117', 'restroom'] },
  ]);
  scene.build();
}

export const gas_station_gp_117: LocationDef = {
  name: 'gas_station_gp_117',
  title: 'The gas station is modern and clean in comparison to other g',
  region: 'other',
  locationType: 'bathroom',
  description: ['The gas station is modern and clean in comparison to other gas stations in the area. To the south of the station is the highway M-10 that goes from St. Petersburg to Moscow. To the north there are small villages and towns similar to Pavlovsk which is even further south than the highway.'],
  enter: enter,
};
