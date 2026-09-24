import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'autotraidF', 'start');
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Car Dealership</b></center>');
  scene.img('images/locations/city/industrial/UsedCar/autotraid.jpg');
  scene.text('Upon entering the yard, you see a laminated piece of paper pinned to a wall near the entrance:');
  scene.text('- We only sell to people with valid driver\'s licenses.');
  scene.text('- New State law: No sale if you already own a car.');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: Your <a href="exec:gs ''carF'', ''start''"><<$car[''name'']>></a> is parked just...
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${(((s as any).car ?? 0)?.['name'] ?? '')}</a> is parked just inside.`);
  }
  if (qspFunc(s, 'autotraidF', 'is_open')) {
    if (qspFunc(s, 'car_funcs', 'has_car')) {
      scene.actions([
        { label: 'Ask about selling your car', goto: ['autotraidF', 'manager1'] },
      ]);
    }
    scene.actions([
      { label: 'Look at the new cars for sale', goto: ['autosalonF', 'start'] },
      { label: 'Look at the used cars for sale', goto: ['autotraidF', 'car'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterIsOpen(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) > 1);
  // TODO-QSP: end
  scene.build();
}

function enterManager1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'autotraidF', 'manager1');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Used Car Dealership</b></center>');
  scene.img('images/locations/city/industrial/UsedCar/autotraid.jpg');
  qspCall(s, 'car_funcs', 'avb');
  if (qspFunc(s, 'car_funcs', 'has_car')) {
    if (qspFunc(s, 'car_funcs', 'is_here_area')) {
      // TODO-QSP: dynamic text: 'The shifty-looking salesman circles around your car a couple of times, making e...
      scene.text('The shifty-looking salesman circles around your car a couple of times, making exaggerated displeased noises all the while and pointing out practically every speck of dust as if it is major damage. When he turns to you, he states that the best he can do is \' + $func(\'money\', \'string_profit\', bupay) + \' - while he claims that he\'s taking a risk with that price, you\'re pretty sure he\'s ripping you off.');
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'money', 'earn', ((s as any).bupay ?? 0));
      scene.text('While you are almost certain that he\'s offering less than the car is actually worth, you doubt that you\'re going to find somebody who\'s going to offer you more for it, and your attempts at haggling with the fence fall flat - he\'s just too experienced at this.');
      scene.text('So, as much as you hate it, you give your car one last look before you shake hands with him and follow him into the tiny shed he calls his "office" to sign the papers. He hands you the money in cash and, with a nasty grin, suggests that you look around the yard.');
      scene.text('"Maybe you\'ll see something you like?"');
      scene.actions([
        { label: 'Sell your car ( [+$func(\'money\', \'string_profit\', bupay) +...]', handler: (st: GameState) => {
    // TODO-QSP: 00)':
  } },
        { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['autotraidF', 'start'] },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: 'The salesman tells you, his smile sneering rather than friendly, that he needs ...
    scene.text('The salesman tells you, his smile sneering rather than friendly, that he needs to look at your car before he can tell you how much it\'s worth. "If you want, I can have somebody tow it here. It only costs 3000₽. Very cheap!"');
    if (qspFunc(s, 'money', 'can_afford', 3000) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'money', 'pay', 3000);
      qspCall(s, 'car_funcs', 'setloc', 'autotraidF', 'start', 'city');
      scene.text('You give him the money - certain that he\'s ripping you off - and wait for an hour until the tow truck finally drives into the yard, your car hooked up to the rear of it.');
      scene.actions([
        { label: 'Pay for towing service to the car market ( [3000₽]...]', handler: (st: GameState) => {
    // TODO-QSP: 00)':
  } },
        { label: 'Talk to the car salesman again', handler: (st: GameState) => {
    // TODO-QSP: killvar 'bupay'
  }, goto: ['autotraidF', 'manager1'] },
      ]);
    }
  }
  // TODO-QSP: end
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: killvar 'bupay'
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['autotraidF', 'start'] },
  ]);
  scene.build();
}

function enterCar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'autotraidF', 'car');
  (s as any).carT = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Used Car Dealership</b></center>');
  scene.img('images/locations/city/industrial/UsedCar/autotraid.jpg');
  scene.text('There are so many cars on the parking lot that you could spend a lifetime looking around without ever seeing all of them. According to the salesman, several cars are currently being test-driven or maintained. You doubt that there\'s actually any maintenance going on though: several of the cars are visibly damaged or make awful sounds when they are started.');
  scene.text('It\'s obvious that most, if not all of them have sustained some visible or invisible damage. Buying a car here could be a fantastic bargain… or a complete waste of money. If you are to buy any of them, you know that the first place to visit should be a service center.');
  if (((s as any).hour ?? 0) <= 17) {
    if (((s as any).car ?? 0) === 0  ||  ((s as any).car ?? 0) > 199) {
      (s as any).car = 0;
    }
    if (((s as any).used_car ?? 0)?.['1_condition'] !== -1  &&  ((s as any).used_car ?? 0)?.['1_price'] !== -1) {
      scene.actions([
        { label: 'Inspect a 2107', goto: ['autotraidF', 'inspect', '1', '1'] },
      ]);
    }
    if (((s as any).used_car ?? 0)?.['wrek_condition'] !== -1  &&  ((s as any).used_car ?? 0)?.['wrek_price'] !== -1) {
      scene.actions([
        { label: 'Inspect another 2107 (Broken Engine)', handler: (st: GameState) => {
    qspGoto(st, 'autotraidF', 'inspect_wreck');
  } },
      ]);
    }
    if (((s as any).used_car ?? 0)?.['2_condition'] !== -1  &&  ((s as any).used_car ?? 0)?.['2_price'] !== -1) {
      scene.actions([
        { label: 'Inspect a VAZ 2115', goto: ['autotraidF', 'inspect', '2', '1'] },
      ]);
    }
    if (((s as any).used_car ?? 0)?.['3_condition'] !== -1  &&  ((s as any).used_car ?? 0)?.['3_price'] !== -1) {
      scene.actions([
        { label: 'Inspect a VAZ 2113', goto: ['autotraidF', 'inspect', '3', '1'] },
      ]);
    }
    if (((s as any).used_car ?? 0)?.['4_condition'] !== -1  &&  ((s as any).used_car ?? 0)?.['4_price'] !== -1) {
      scene.actions([
        { label: 'Inspect a VAZ 2114', goto: ['autotraidF', 'inspect', '4', '1'] },
      ]);
    }
    if (((s as any).used_car ?? 0)?.['5_condition'] !== -1  &&  ((s as any).used_car ?? 0)?.['5_price'] !== -1) {
      scene.actions([
        { label: 'Inspect a VAZ 2110', goto: ['autotraidF', 'inspect', '5', '1'] },
      ]);
    }
    if (((s as any).used_car ?? 0)?.['11_condition'] !== -1  &&  ((s as any).used_car ?? 0)?.['11_price'] !== -1) {
      scene.actions([
        { label: 'Inspect a GAZ 3102', goto: ['autotraidF', 'inspect', '11', '2'] },
      ]);
    }
    if (((s as any).used_car ?? 0)?.['12_condition'] !== -1  &&  ((s as any).used_car ?? 0)?.['12_price'] !== -1) {
      scene.actions([
        { label: 'Inspect a GAZ 3110', goto: ['autotraidF', 'inspect', '12', '2'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: killvar 'carT'
    // TODO-QSP: killvar 'bupay'
  }, goto: ['autotraidF', 'start'] },
  ]);
  scene.build();
}

function enterInspect(s: GameState, scene: SceneBuilder): void {
  (s as any).autotraidF_carnum = ((s as any).locArgs?.[1] ?? 0);
  (s as any).autotraidF_benz = ((s as any).locArgs?.[3] ?? 0);
  // TODO-QSP: dynamic text: <center><b><<$autotraidF_carname>></b></center>
  scene.text(`<center><b>${((s as any).autotraidF_carname ?? '')}</b></center>`);
  scene.img(`images/pc/items/accessories/car/car${((s as any).autotraidF_carnum ?? '')}.jpg`);
  if (((s as any).used_car ?? 0)[(((s as any).autotraidF_carnum ?? 0)) + '_condition'] === 0  &&  ((s as any).used_car ?? 0)[(((s as any).autotraidF_carnum ?? 0)) + '_price'] === 0) {
    (s as any).carT = ((s as any).locArgs?.[2] ?? 0);
    qspCall(s, 'car_funcs', 'avt');
  }
  // TODO-QSP: dynamic text: '<<$used_car[''<<autotraidF_carnum>>_condition_desc'']>> The car salesman wants ...
  scene.text(`${qspUntranslated(s, "used_car['<<autotraidF_carnum", { location: "autotraidF" })}_condition_desc']>> The car salesman wants ' + $func('money', 'string_price', used_car['${((s as any).autotraidF_carnum ?? '')}_price']) + ' for it.`);
  if (((s as any).car ?? 0) === 0  &&  ((s as any).license ?? 0)?.['drive'] === 1) {
    scene.actions([
      { label: 'Buy the car', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', qspUntranslated(s, "used_car[\u00000\u0000]", { location: "autotraidF" })) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', (((st as any).used_car ?? 0)?.[String(((st as any).autotraidF_carnum ?? 0)) + '_price']));
      qspGoto(st, 'autotraidF', 'buy_car');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Look around some more', handler: (st: GameState) => {
    qspGoto(st, 'autotraidF', 'car');
  } },
  ]);
  scene.build();
}

function enterBuyCar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'car_funcs', 'add_car', ((s as any).autotraidF_carnum ?? 0));
  ((s as any).car = (s as any).car ?? {})['fuel'] = ((s as any).autotraidF_benz ?? 0);
  qspCall(s, 'car_funcs', 'setloc', 'autotraidF', 'start', 'city');
  ((s as any).car = (s as any).car ?? {})['current_condition'] = (((s as any).used_car ?? 0)?.[String(((s as any).autotraidF_carnum ?? 0)) + '_condition']);
  // TODO-QSP: dynamic text: 'You agree and before you know it, the car salesman and you have signed all the ...
  scene.text(`You agree and before you know it, the car salesman and you have signed all the necessary documents. You pay the ' + $func('money', 'string_price', used_car['${((s as any).autotraidF_carnum ?? '')}_price']) + ', and the car is yours.`);
  scene.text('Since it\'s crammed in between about a million other vehicles, the car salesman moves it outside near the yard\'s entrance for you and warns you that there is very little gas in the tank.');
  ((s as any).used_car = (s as any).used_car ?? {})[String(((s as any).autotraidF_carnum ?? 0)) + '_condition'] = (-1);
  ((s as any).used_car = (s as any).used_car ?? {})[String(((s as any).autotraidF_carnum ?? 0)) + '_price'] = (-1);
  qspCall(s, 'array', 'remove_element', 'car', 'potential_new_condition');
  qspCall(s, 'array', 'remove_element', '$used_car', '' + ((s as any).autotraidF_carnum ?? 0) + '_condition');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['autotraidF', 'start'] },
  ]);
  scene.build();
}

function enterInspectWreck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'car_attributes', '1');
  scene.text('<center><b>2107 (Broken engine)</b></center>');
  scene.img('images/pc/items/accessories/car/car1.jpg');
  if (((s as any).used_car ?? 0)?.['wrek_condition'] === 0  &&  ((s as any).used_car ?? 0)?.['wrek_price'] === 0) {
    ((s as any).used_car = (s as any).used_car ?? {})['wrek_condition'] = (Math.floor(Math.random() * (((s as any).CarCondition ?? 0) - ((s as any).CarCondition ?? 0) / 20 + 1)) + (((s as any).CarCondition ?? 0) / 20));
    ((s as any).used_car = (s as any).used_car ?? {})['wrek_price'] = (Math.floor(Math.random() * (((s as any).CarPrice ?? 0) / 200 - ((s as any).CarPrice ?? 0) / 1000 + 1)) + (((s as any).CarPrice ?? 0) / 1000));
  }
  // TODO-QSP: dynamic text: 'The car is basically a wreck. It doesn''t even start. When you ask the salesman...
  scene.text('The car is basically a wreck. It doesn\'t even start. When you ask the salesman how much it costs, he tells you "\' + $func(\'money\', \'string_price\', used_car[\'wrek_price\']) + \'" without hesitation.');
  if (((s as any).car ?? 0)?.['ID'] === 0  &&  ((s as any).license ?? 0)?.['drive'] === 1) {
    scene.actions([
      { label: 'Buy the car', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).used_car ?? 0)?.['wrek_price']) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', (((st as any).used_car ?? 0)?.['wrek_price']));
      qspGoto(st, 'autotraidF', 'buy_wreck');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Look around some more', goto: ['autotraidf', 'car'] },
  ]);
  scene.build();
}

function enterBuyWreck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'car_funcs', 'add_car', 1);
  qspCall(s, 'car_funcs', 'setloc', 'autotraidF', 'start', 'city');
  ((s as any).car = (s as any).car ?? {})['fuel'] = 3;
  ((s as any).car = (s as any).car ?? {})['wreck'] = 1;
  ((s as any).car = (s as any).car ?? {})['current_condition'] = (((s as any).used_car ?? 0)?.['wrek_condition']);
  // TODO-QSP: dynamic text: 'You agree and before you know it, the car salesman and you have signed all the ...
  scene.text('You agree and before you know it, the car salesman and you have signed all the necessary documents. You pay \' + $func(\'money\', \'string_price\', used_car[\'wrek_price\']) + \', and the car is yours.');
  scene.text('Since it\'s crammed in between about a million other vehicles, the car salesman moves it outside near the yard\'s entrance for you… and that\'s it.');
  scene.text('If you want to get the car to a repair shop, you\'ll have to go there and have it towed.');
  ((s as any).used_car = (s as any).used_car ?? {})['wrek_condition'] = (-1);
  ((s as any).used_car = (s as any).used_car ?? {})['wrek_price'] = (-1);
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['autotraidF', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'is_open':
      enterIsOpen(s, scene);
      break;
    case 'manager1':
      enterManager1(s, scene);
      break;
    case 'car':
      enterCar(s, scene);
      break;
    case 'inspect':
      enterInspect(s, scene);
      break;
    case 'buy_car':
      enterBuyCar(s, scene);
      break;
    case 'inspect_wreck':
      enterInspectWreck(s, scene);
      break;
    case 'buy_wreck':
      enterBuyWreck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const autotraidF: LocationDef = {
  name: 'autotraidF',
  title: '<center><b>Car Dealership</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
