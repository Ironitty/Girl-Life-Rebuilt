import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'autoservisF', 'start');
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  qspCall(s, 'car_funcs', 'avtonorm');
  scene.text('<center><b>Car Service Center</b></center>');
  scene.img('images/locations/city/industrial/CarServiceSta/autoservis1.jpg');
  if (qspFunc(s, 'car_funcs', 'is_here') === 0) {
    scene.text('The foreman sighs. "Where is your car, girl? I need to look at your car to see if and what is wrong with it. Bring your car, and I\'ll examine it."');
    if (qspFunc(s, 'car_funcs', 'has_wreck')) {
      scene.text('The garage offers a towing service for damaged cars to bring them to this service center. The price: ' + qspFunc(s, 'money', 'string_price', 2500));
      scene.actions([
        { label: 'Pay for the towing service (1:00)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2500) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 2500);
      qspCall(st, 'car_funcs', 'setloc', 'autoservisF', 'start', 'city');
      (st as any).minut = ((st as any).minut ?? 0) + 60;
      scene.img('images/locations/city/industrial/CarServiceSta/autoservis2.jpg');
      scene.text('You sit down and wait at the service station. It takes about an hour until your car arrives, but when it does, it is almost immediately moved into the garage, and it looks like the foreman is about ready to inspect it.');
      scene.actions([
        { label: 'See what the foreman has to say', goto: ['autoservisF', 'start'] },
      ]);
    }
  } },
      ]);
    }
  } else {
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${(((s as any).car ?? 0)?.['name'] ?? '')}</a> is parked just inside.`);
    if (qspFunc(s, 'car_funcs', 'has_wreck')) {
      scene.text('The foreman looks at your car, if this wreckage even qualifies as one, with a professional boredom that tells you he\'s seen vehicles in similar or worse states a million times over.');
      scene.text('He quickly but thoroughly inspects it, murmuring all the while to take mental notes on what needs to be done, and, when he returns to you, simply states that it would cost ' + qspFunc(s, 'money', 'string_price', ((s as any).normrem ?? '')) + ' to repair the damage.');
      scene.actions([
        { label: 'Pay and wait while they repair the car', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).normrem ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 60;
      qspCall(st, 'money', 'pay', ((st as any).normrem ?? 0));
      ((st as any).car = (st as any).car ?? {})['new_condition'] = (((st as any).car ?? {})?.['new_condition'] ?? 0) / 2;
      ((st as any).car = (st as any).car ?? {})['current_condition'] = (((st as any).car ?? 0)?.['new_condition']);
      ((st as any).car = (st as any).car ?? {})['wreck'] = 0;
      qspCall(st, 'stat', '');
      scene.img('images/locations/city/industrial/CarServiceSta/autoservis2.jpg');
      scene.text('Since he tells you that it\'s not gonna take long - at first you think he is being sarcastic but then realize that his no-nonsense attitude doesn\'t leave much room for humour - you go into a waiting room with couches and a TV. After about an hour of flipping through channels, you are called back to the garage and can hardly believe your eyes.');
      scene.text('The car looks brand new! Not a single dent, not one scratch, and when you start the engine to make sure it\'s working, it sounds better than ever before. You ask the foreman how he and his crew managed to repair the car, and that quickly, but his only response is a shrug.');
      scene.text('Before he sends you back into the office to pay the ' + qspFunc(s, 'money', 'string_price', ((st as any).normrem ?? '')) + ', he asks you to not bring them cars in this pitiable state anymore - you\'re not sure whether he is joking or not.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).car ?? 0)?.['current_condition'] >= ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
        scene.text('The foreman inspects your car quickly but thoroughly.');
        scene.text('After only a few minutes, he returns to you and announces that your car doesn\'t need any repairs or maintenance.');
      } else {
        scene.text('The foreman inspects your car quickly but thoroughly.');
        scene.text('Here and there, he seems to be murmuring to himself, maybe assessing a defect. After only a few minutes, he returns to you and points out what needs to be fixed.');
        scene.text('It would cost you ' + qspFunc(s, 'money', 'string_price', ((s as any).normrem ?? '')) + '.');
        scene.actions([
          { label: 'Pay and wait while they repair the car', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).normrem ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 60;
      qspCall(st, 'money', 'pay', ((st as any).normrem ?? 0));
      ((st as any).car = (st as any).car ?? {})['current_condition'] = (((st as any).car ?? 0)?.['new_condition']);
      ((st as any).car = (st as any).car ?? {})['wreck'] = 0;
      qspCall(st, 'stat', '');
      scene.img('images/locations/city/industrial/CarServiceSta/autoservis2.jpg');
      scene.text('\'Since he tells you that it\'s not gonna take long, you go into a waiting room with couches and a TV. After about an hour of flipping through channels, the car is ready, and you pay \' + $func(\'money\', \'string_price\', normrem) + \'.\'');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
      ]);
    }
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterIsOpen(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).week ?? 0) < 7;
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
    default:
      enterDefault(s, scene);
      break;
  }
}

export const autoservisF: LocationDef = {
  name: 'autoservisF',
  title: '<center><b>Car Service Center</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
