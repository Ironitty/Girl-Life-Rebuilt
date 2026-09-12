import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
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
    if ((!((s as any).sunWeather ?? 0))) {
      scene.text('You can\'t wash cars if it\'s raining outside! Maybe try again on a sunny day?');
    } else {
      if (((s as any).hour ?? 0) < 8) {
        scene.text('It\'s too early to wash cars.');
      } else {
        if (((s as any).hour ?? 0) >= 21) {
          scene.text('It\'s too late to wash cars.');
        } else {
          scene.actions([
            { label: 'Wash car windows (1:00)', goto: ['fuelstation_carwash', 'start'] },
          ]);
        }
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'has_car')) {
    if (((s as any).kanistra ?? 0) < 5) {
      scene.actions([
        { label: 'Buy a canister and fill it with 5 liters of gasoline ( [+$func(\'money\', \'string_price\', 150) + \')...]', handler: (st: GameState) => {
    (s as any).kanistra = ((s as any).kanistra ?? 0) + (1);
    qspCall(s, 'money', 'pay', 150);
    scene.text('You buy a canister of gasoline. (It will automatically be put in the trunk of your car)');
    scene.actions([
      { label: 'Disengage from the pump', goto: ['fuelstation', 'start'] },
    ]);
  } },
      ]);
    }
    if (qspFunc(s, 'car_funcs', 'is_here')) {
      // TODO-QSP: dynamic text: Your <a href="exec: gs 'carF', 'start'"><<$car['name']>></a> is parked here.
      scene.text(`Your <a href="exec: gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> is parked here.`);
      if (((s as any).car ?? 0)?.['fuel'] < ((s as any).car ?? 0)?.['tank']) {
        (s as any).zprbenz = (((s as any).car ?? {})?.['tank'] - ((s as any).car ?? {})?.['fuel']);
        (s as any).zprpay = ((s as any).zprbenz ?? 0) * 30;
        scene.actions([
          { label: 'Fill the tank with petrol [+$func(\'money\', \'get_cost_string\', zprpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).zprpay ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).zprbenz = ((s as any).car ?? {})?.['tank'] - ((s as any).car ?? {})?.['fuel'];
      (s as any).zprpay = ((s as any).zprbenz ?? 0) * 30;
      ((s as any).car ?? {})['fuel'] = ((s as any).car ?? 0)?.['tank'];
      qspCall(s, 'money', 'pay', ((s as any).zprpay ?? 0));
      scene.img('images/locations/shared/gas/zapr1.jpg');
      // TODO-QSP: dynamic text: You fill the tank and pay ' + $func('money', 'string_price', zprpay) + '.
      scene.text('You fill the tank and pay \' + $func(\'money\', \'string_price\', zprpay) + \'.');
      scene.actions([
        { label: 'Disengage from the pump', goto: ['fuelstation', 'start'] },
      ]);
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).region ?? 0) === 'city') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_industrial', ''] }]);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.actions([{ label: 'Continue', goto: ['pav_commercial', ''] }]);
      }
    }
  } },
    { label: 'Go to the toilet', goto: ['fuelstation', 'toilet'] },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'fuelstation', 'toilet');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><h4>Gas station toilet</h4></center>');
  scene.img('images/locations/shared/bathroom/toilet.jpg');
  scene.text('You are in a dirty gas station toilet. At least it provides some privacy.');
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', goto: ['mirror', 'brush'] },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  qspCall(s, 'din_van', 'pblc_pee');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the restroom', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      scene.actions([{ label: 'Continue', goto: ['fuelstation', 'start'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['fuelstation', 'toilet'] }]);
    }
  } },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fuelstation: LocationDef = {
  name: 'fuelstation',
  title: '<center><b>Gas Station</b></center>',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
