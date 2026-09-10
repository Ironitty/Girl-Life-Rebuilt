import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'fuelstation', 'start');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Gas Station</b></center>');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 21) {
    scene.img('images/locations/shared/gas/gazprom_night.jpg');
  } else {
    scene.img('images/locations/shared/gas/gazprom_day.jpg');
  }
  scene.text('The local gas station, the cheap pumps are limited in functionality and will always fill the tank up completely.');
  // TODO-QSP: dynamic text: The petrol price is ' + $func('money', 'string_price', 30) + ' per liter.
  scene.text('The petrol price is \' + $func(\'money\', \'string_price\', 30) + \' per liter.');
  scene.text('When the weather is nice, girls will sometimes offer a car washing service for some tips. There\'s no structure to it, so you could always try it.');
  if (((s as any).temper ?? 0) < 10) {
    scene.text('It\'s too cold to wash cars. You\'re more likely to get ill than make money. Maybe try again when the weather is warmer?');
  } else {
    scene.text('You can\'t wash cars if it\'s raining outside! Maybe try again on a sunny day?');
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It\'s too early to wash cars.');
    } else {
      scene.text('It\'s too late to wash cars.');
      scene.actions([
        { label: 'Wash car windows (1:00)', goto: ['fuelstation_carwash', 'start'] },
      ]);
    }
    if (qspFunc(s, 'car_funcs', 'has_car')) {
      if (((s as any).kanistra ?? 0) < 5) {
        (s as any).kanistra = ((s as any).kanistra ?? 0) + (1);
        qspCall(s, 'money', 'pay', 150);
        scene.text('You buy a canister of gasoline. (It will automatically be put in the trunk of your car)');
        scene.actions([
          { label: 'Buy a canister and fill it with 5 liters of gasoline ( [+$func(\'money\', \'string_price\', 150) + \')...]' }, // TODO-QSP: empty action body
          { label: 'Disengage from the pump', goto: ['fuelstation', 'start'] },
        ]);
      }
    }
    if (qspFunc(s, 'car_funcs', 'is_here')) {
      // TODO-QSP: dynamic text: Your <a href="exec: gs 'carF', 'start'"><<$car['name']>></a> is parked here.
      scene.text(`Your <a href="exec: gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> is parked here.`);
      if (((s as any).car ?? 0)?.['fuel'] < ((s as any).car ?? 0)?.['tank']) {
        (s as any).zprbenz = (((s as any).car ?? 0)?.['tank'] - ((s as any).car ?? 0)?.['fuel']);
        (s as any).zprpay = ((s as any).zprbenz ?? 0) * 30;
        if (qspFunc(s, 'money', 'can_afford', ((s as any).zprpay ?? 0)) === 0) {
          s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
        } else {
          (s as any).zprbenz = ((s as any).car ?? 0)?.['tank'] - ((s as any).car ?? 0)?.['fuel'];
          (s as any).zprpay = ((s as any).zprbenz ?? 0) * 30;
          (s as any).car['fuel'] = ((s as any).car ?? 0)?.['tank'];
          qspCall(s, 'money', 'pay', ((s as any).zprpay ?? 0));
          scene.img('images/locations/shared/gas/zapr1.jpg');
          // TODO-QSP: dynamic text: You fill the tank and pay ' + $func('money', 'string_price', zprpay) + '.
          scene.text('You fill the tank and pay \' + $func(\'money\', \'string_price\', zprpay) + \'.');
          scene.actions([
            { label: 'Disengage from the pump', goto: ['fuelstation', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Fill the tank with petrol [+$func(\'money\', \'get_cost_string\', zprpay...]' }, // TODO-QSP: empty action body
        ]);
      }
    }
    scene.actions([
      { label: 'Go to the toilet', goto: ['fuelstation', 'toilet'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).region ?? 0) === 'city') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_industrial', ''] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['pav_commercial', ''] }]);
    }
  } },
  ]);
  scene.build();
}

export const fuelstation: LocationDef = {
  name: 'fuelstation',
  title: '<center><b>Gas Station</b></center>',
  region: 'other',
  locationType: 'bathroom',
  description: ['The local gas station, the cheap pumps are limited in functionality and will always fill the tank up completely.'],
  enter: enter,
};
