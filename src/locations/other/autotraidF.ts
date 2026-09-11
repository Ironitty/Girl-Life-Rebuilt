import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'autotraidF', 'start');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Car Dealership</b></center>');
  scene.img('images/locations/city/industrial/UsedCar/autotraid.jpg');
  scene.text('Upon entering the yard, you see a laminated piece of paper pinned to a wall near the entrance:');
  scene.text('- We only sell to people with valid driver\'s licenses.');
  scene.text('- New State law: No sale if you already own a car.');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: Your <a href="exec:gs 'carF', 'start'"><<$car['name']>></a> is parked just insid...
    scene.text(`Your <a href="exec:gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> is parked just inside.`);
  }
  if (qspFunc(s, 'autotraidF', 'is_open')) {
    if (qspFunc(s, 'car_funcs', 'has_car')) {
      // TODO-QSP: act 'Ask about selling your car': gt 'autotraidF', 'manager1'
    }
    scene.actions([
      { label: 'Look at the new cars for sale', goto: ['autosalonF', 'start'] },
      { label: 'Look at the used cars for sale', goto: ['autotraidF', 'car'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterIsOpen(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) > 1);
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
      // TODO-QSP: dynamic text: The shifty-looking salesman circles around your car a couple of times, making ex...
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
    // TODO-QSP: dynamic text: The salesman tells you, his smile sneering rather than friendly, that he needs t...
    scene.text('The salesman tells you, his smile sneering rather than friendly, that he needs to look at your car before he can tell you how much it\'s worth. "If you want, I can have somebody tow it here. It only costs \' + $func(\'money\', \'string_price\', 3000) + \'. Very cheap!"');
    if (qspFunc(s, 'money', 'can_afford', 3000) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'money', 'pay', 3000);
      qspCall(s, 'car_funcs', 'setloc', 'autotraidF', 'start', 'city');
      scene.text('You give him the money - certain that he\'s ripping you off - and wait for an hour until the tow truck finally drives into the yard, your car hooked up to the rear of it.');
      scene.actions([
        { label: 'Pay for towing service to the car market ( [+$func(\'money\', \'string_price\', 3000) + \'...]', handler: (st: GameState) => {
    // TODO-QSP: 00)':
  } },
        { label: 'Talk to the car salesman again', handler: (st: GameState) => {
    // TODO-QSP: killvar 'bupay'
  }, goto: ['autotraidF', 'manager1'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: killvar 'bupay'
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
