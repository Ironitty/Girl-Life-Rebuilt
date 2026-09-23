import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterOutside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'prostitution_functions', 'work_clothes');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEventCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'gas_station_gp_117', 'outside');
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/highway/gas_station_gp_117/gas...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/highway/gas_station_gp_117/gas_` + ((((s as any).month ?? 0) > 10  ||  ((s as any).month ?? 0) < 4) ? ('winter') : ('')) + ((((s as any).daystage ?? 0) === 5) ? ('night') : ('day')) + '.jpg"></center>');
  scene.text('The gas station is modern and clean in comparison to other gas stations in the area. To the south of the station is the highway M-10 that goes from St. Petersburg to Moscow. To the north there are small villages and towns similar to Pavlovsk which is even further south than the highway.');
  scene.text('There is a small shop were you can buy something to eat or to drink and a public restroom is also nearby.');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGas(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['gas_station'] === 1  &&  ((s as any).prostitute ?? 0)?.['active'] === 1) {
    if (((s as any).prostitute ?? 0)?.['earnings_day'] > 0) {
      // TODO-QSP: 'You have earned <<$func(''money'', ''string_profit'', prostitute[''earnings_day''])>> today.'+iif(p...
    }
    qspCall(s, 'prostitution_functions', 'work_clothes');
    if (((s as any).prostitute ?? 0)?.['work_clothes']  &&  ((s as any).prostitute ?? 0)?.['changed_for_work']) {
      // TODO-QSP: dynamic text: 'You are wearing the right outfit to work as a prostitute at the gas station. Yo...
      scene.text('You are wearing the right outfit to work as a prostitute at the gas station. You can ' + ((qspFunc(s, 'car_funcs', 'is_here')) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027prostitution_functions/u0027, /u0027change_back/u0027); return false;">change back into your regular clothes</a> in your car or') : ('change back into your regular clothes')) + ' in a restroom.');
    } else {
      if (((s as any).dressed_as_a_prostitute ?? 0) === 0  &&  ((s as any).prostitute ?? 0)?.['outfit_is_set']) {
        // TODO-QSP: dynamic text: 'You could work as a prostitute, but first you have to ' + iif(func('car_funcs',...
        scene.text('You could work as a prostitute, but first you have to ' + ((qspFunc(s, 'car_funcs', 'is_here')) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027prostitution_functions/u0027, /u0027change/u0027); return false;">change into a more appropriate outfit</a> in your car or ') : ('change into a more appropriate outfit ')) + 'in a restroom.');
      } else {
        scene.text('You are wearing the right outfit to work as a prostitute at the gas station.');
      }
    }
  }
  if (((s as any).prostitute ?? 0)?.['payment_method'] === 1) {
    // TODO-QSP: '<br>You can take a bus to the '+iif(func('money', 'can_afford', 75) ! 1, 'train station', '<a href=...
  }
  qspCall(s, 'stat', '');
  if (((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['gas_station'] === 1  &&  ((s as any).prostitute ?? 0)?.['work_clothes']) {
    scene.actions([
      { label: 'Go to work', goto: ['gas_station_gp_117', 'work'] },
    ]);
  }
  // TODO-QSP: end
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

function enterShop(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'gas_station_gp_117', 'shop');
  (s as any).loc_s = 'gas_station_gp_117';
  (s as any).args_s = 'shop';
  (s as any).location_type = 'public_indoors';
  (s as any).gas_shop_inside = 'yes';
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/gas_station_gp_117/gas_interior.jpg');
  scene.text('The shop is stacked with some magazines, cigarettes, different things to eat and drink.');
  if (((s as any).prostitute ?? 0)?.['tomas_timer'] === ((s as any).daystart ?? 0)) {
    scene.text('Behind the counter stands Tomas. He\'s talking to another customer right now.');
  } else {
    if (((s as any).week ?? 0) < 7) {
      // TODO-QSP: 'Behind the counter stands '+iif(prostitute['tomas'] = 0, 'a plump man.', 'Tomas.')
    } else {
      if (((s as any).prostitute ?? 0)?.['tomas'] > 0  &&  ((s as any).week ?? 0) === 7) {
        scene.text('Tomas isn\'t working on Sundays. Another guy you don\'t know is standing behind the counter.');
      }
    }
  }
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'prost_shop');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    // TODO-QSP: $gas_shop_inside = 'no'
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gas_station_gp_117', 'outside'] },
    { label: 'Buy and eat a snack (0:05)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'money', 'pay', 100);
      qspCall(st, 'food', 'snack_stats');
      qspCall(st, 'stat', '');
      scene.img('images/locations/highway/gas_station_gp_117/food.jpg');
      scene.text('You enjoy a tasty snack.');
      scene.actions([
        { label: 'Continue', goto: ['gas_station_gp_117', 'shop'] },
      ]);
    }
  } },
    { label: 'Buy and eat a healthy snack (0:05)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 120) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'money', 'pay', 120);
      qspCall(st, 'food', 'light_snack_stats');
      qspCall(st, 'stat', '');
      scene.img('images/locations/highway/gas_station_gp_117/food.jpg');
      scene.text('You enjoy a healthy snack.');
      scene.actions([
        { label: 'Continue', goto: ['gas_station_gp_117', 'shop'] },
      ]);
    }
  } },
    { label: 'Buy and drink some water (0:05)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 40) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      qspCall(st, 'money', 'pay', 40);
      qspCall(st, 'beverage', 'water_stats');
      qspCall(st, 'stat', '');
      scene.img('images/locations/highway/gas_station_gp_117/water.jpg');
      scene.text('You enjoy a drink of water');
      scene.actions([
        { label: 'Continue', goto: ['gas_station_gp_117', 'shop'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterRestroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'gas_station_gp_117', 'restroom');
  (s as any).location_type = 'public_outdoors';
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/highway/gas_station_gp_117/res...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/highway/gas_station_gp_117/restroom_` + ((((s as any).daystage ?? 0) === 5) ? ('night') : ('day')) + '.jpg"></center>');
  // TODO-QSP: dynamic text: 'The gas station has a public bathroom. '+iif(prostitute_status['restroom_chip']...
  scene.text('The gas station has a public bathroom. \'+iif(prostitute_status[\'restroom_chip\'] = 0, \'It costs ' + qspFunc(s, 'money', 'string_price', 10) + ' to use it.\', \'You have an employee chip and can use it for free.\')+\' On the right side of the restroom is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027gas_station_gp_117/u0027, /u0027condom_dispenser/u0027); return false;">condom dispenser</a>.');
  qspCall(s, 'stat', '');
  if (((s as any).prostitute_status ?? 0)?.['restroom_chip'] === 1) {
    scene.actions([
      { label: 'Enter the women\'s restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gas_station_gp_117', 'restroom_women'] },
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gas_station_gp_117', 'restroom_men'] },
    ]);
  } else {
    scene.actions([
      { label: 'Enter the women\'s restroom', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 10, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 10, 'cash');
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspGoto(st, 'gas_station_gp_117', 'restroom_women');
    }
  } },
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 10, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 10, 'cash');
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspGoto(st, 'gas_station_gp_117', 'restroom_men');
    }
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    scene.actions([
      { label: 'Smoke a joint', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'drugs', 'joint');
    scene.img('images/shared/drugs/joint_smoking.jpg');
    scene.text('You go behind the restrooms and pull a joint out of your purse and light it up. Not before long you\'re starting to feel the relaxing effects as you\'re getting high.');
    scene.actions([
      { label: 'Go back', goto: ['gas_station_gp_117', 'restroom'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gas_station_gp_117', 'outside'] },
  ]);
  scene.build();
}

function enterCondomDispenser(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'gas_station_gp_117', 'condom_dispenser');
  scene.img('images/locations/highway/gas_station_gp_117/condoms.jpg');
  // TODO-QSP: dynamic text: A condom costs <<$func(''money'', ''string_price'', 60)>> and you have <<mc_inve...
  scene.text(`A condom costs ${qspFunc(s, 'money', 'string_price', 60)} and you have ${((s as any).mc_inventory ?? 0)?.['normal_condoms'] ?? ''} condoms.`);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gas_station_gp_117', 'restroom'] },
    { label: 'Buy a condom', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 60) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspCall(st, 'money', 'pay', 60);
      if ((!((st as any).preziktype ?? 0))) {
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['equipped_condoms'] = ((st as any).mc_inventory['equipped_condoms'] ?? 0) + (1);
      } else {
        if (((st as any).preziktype ?? 0) === 1  ||  ((st as any).preziktype ?? 0) === 2) {
          ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['normal_condoms'] = ((st as any).mc_inventory['normal_condoms'] ?? 0) + (1);
        }
      }
      qspGoto(st, 'gas_station_gp_117', 'condom_dispenser');
    }
  } },
    { label: 'Buy five condoms', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspCall(st, 'money', 'pay', 300);
      if ((!((st as any).preziktype ?? 0))) {
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['equipped_condoms'] = ((st as any).mc_inventory['equipped_condoms'] ?? 0) + (5);
      } else {
        if (((st as any).preziktype ?? 0) === 1  ||  ((st as any).preziktype ?? 0) === 2) {
          ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['normal_condoms'] = ((st as any).mc_inventory['normal_condoms'] ?? 0) + (5);
        }
      }
      qspGoto(st, 'gas_station_gp_117', 'condom_dispenser');
    }
  } },
    { label: 'Buy ten condoms', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 600) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspCall(st, 'money', 'pay', 600);
      if ((!((st as any).preziktype ?? 0))) {
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['equipped_condoms'] = ((st as any).mc_inventory['equipped_condoms'] ?? 0) + (10);
      } else {
        if (((st as any).preziktype ?? 0) === 1  ||  ((st as any).preziktype ?? 0) === 2) {
          ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['normal_condoms'] = ((st as any).mc_inventory['normal_condoms'] ?? 0) + (10);
        }
      }
      qspGoto(st, 'gas_station_gp_117', 'condom_dispenser');
    }
  } },
  ]);
  scene.build();
}

function enterRestroomWomen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'gas_station_gp_117', 'restroom_women');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/gas_station_gp_117/restroom_women.jpg');
  scene.text('The women\'s restroom is relatively clean. It has has three bathroom stalls which over only a little privacy.');
  // TODO-QSP: dynamic text: 'A <a href="exec:gt ''mirror'',''start''">mirror</a>, where you can ' + iif(pcs_...
  scene.text('A <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a>, where you can ' + (((!((s as any).pcs_hairbsh ?? 0))) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027brush/u0027); return false;">brush</a>') : ('brush')) + ' your hair hangs over each sink.');
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Do a line of cocaine (0:05)', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'cocaine');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/shared/drugs/cocaine.jpg');
    scene.text('You snort some cocaine, feeling dizzy for just a moment. After that you feel fantastic, horny and full of energy.');
    scene.actions([
      { label: 'Continue', goto: ['gas_station_gp_117', 'restroom_women'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gas_station_gp_117', 'restroom'] },
  ]);
  scene.build();
}

function enterRestroomMen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'gas_station_gp_117', 'restroom_men');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/gas_station_gp_117/restroom_men.jpg');
  scene.text('The men\'s restroom is dirty and smells like urine. It has has three bathroom stalls which over only a little privacy.');
  // TODO-QSP: dynamic text: 'A <a href="exec:gt ''mirror'',''start''">mirror</a>, where you can ' + iif(pcs_...
  scene.text('A <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a>, where you can ' + (((!((s as any).pcs_hairbsh ?? 0))) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027brush/u0027); return false;">brush</a>') : ('brush')) + ' your hair hangs over each sink.');
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Do a line of cocaine (0:05)', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'cocaine');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/shared/drugs/cocaine.jpg');
    scene.text('You snort some cocaine, feeling dizzy for just a moment. After that you feel fantastic, horny and full of energy.');
    scene.actions([
      { label: 'Continue', goto: ['gas_station_gp_117', 'restroom_men'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gas_station_gp_117', 'restroom'] },
  ]);
  scene.build();
}

function enterGas(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Your <a href="exec: gs ''carF'', ''start''"><<$car[''name'']>></a> is parked her...
  scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked here.`);
  // TODO-QSP: dynamic text: You can buy petrol for your car, the price is <<$func(''money'', ''string_price'...
  scene.text(`You can buy petrol for your car, the price is ${qspFunc(s, 'money', 'string_price', 30)} per liter.`);
  if (((s as any).kanistra ?? 0) < 5) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Buy a canister and fill it with 5 liters of gasoline for ' + String(qspFunc(s, 'money', 'string_price', 150) ?? ''), handler: (st: GameState) => {
    (st as any).kanistra = ((st as any).kanistra ?? 0) + (1);
    qspCall(st, 'money', 'pay', 150);
    scene.text('You buy a canister of gasoline. (It will automatically be put in the trunk of your car)');
    scene.actions([
      { label: 'Disengage from the pump', goto: ['gas_station_gp_117', 'outside'] },
    ]);
  } },
    ]);
  }
  if (((s as any).car ?? 0)?.['fuel'] < ((s as any).car ?? 0)?.['tank']) {
    (s as any).zprbenz = (((s as any).car ?? {})?.['tank'] ?? 0) - (((s as any).car ?? {})?.['fuel'] ?? 0);
    if (qspFunc(s, 'money', 'can_afford', ((s as any).zprbenz ?? 0) * 30) === 0) {
      scene.text('You do not have enough money to refuel your car.');
    } else {
      scene.actions([
        { label: 'Fill the tank with petrol', handler: (st: GameState) => {
    (st as any).zprbenz = (((st as any).car ?? {})?.['tank'] ?? 0) - (((st as any).car ?? {})?.['fuel'] ?? 0);
    (st as any).zprpay = ((st as any).zprbenz ?? 0) * 30;
    ((st as any).car = (st as any).car ?? {})['fuel'] = ((st as any).car ?? 0)?.['tank'];
    qspCall(st, 'money', 'pay', ((st as any).zprpay ?? 0));
    scene.img('images/locations/shared/gas/zapr1.jpg');
    // TODO-QSP: dynamic text: You fill the tank and pay <<$func(''money'', ''string_price'', zprpay)>>.
    scene.text(`You fill the tank and pay ${qspFunc(s, 'money', 'string_price', ((st as any).zprpay ?? ''))}.`);
    scene.actions([
      { label: 'Disengage from the pump', goto: ['gas_station_gp_117', 'outside'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'gas_station_gp_117', 'work');
  (s as any).prostitution_location = 'gas_station';
  qspCall(s, 'stat', '');
  qspCall(s, 'prostitution_functions', 'parameters');
  if (((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)] === '') {
    scene.text('If you want, you can tell your clients a different name.');
    // TODO-QSP: $prostitute_names[$prostitution_location] = input("What name do you want to tell your clients? (Leav...
    if (((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)] === '') {
      ((s as any).prostitute_names = (s as any).prostitute_names ?? {})[String((s as any).prostitution_location ?? 0)] = ((s as any).pcs_nickname ?? 0);
    }
  }
  scene.img('images/shared/prostitution/car/normal/negotiation/search.mp4');
  // TODO-QSP: 'You are walking near the gas station waiting for a client. On a scale from 1 to 10 you look like a ...
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('<br>Nearly all men won\'t like dirty anal sex, even with a condom, and it\'s probably a safe bet that they won\'t pay a lot for it. You should start giving yourself an enema before going to work.');
  }
  if (((s as any).mesec ?? 0) > 0) {
    scene.text('<br>You are having your period, most men will pay less for vaginal sex during that time of the month.');
  }
  if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1) {
    scene.text('<br>You have visible cum stains on you. Most clients won\'t like that and will offer less money.');
  }
  if (((s as any).prostitute ?? 0)?.['earnings_day'] > 0) {
    // TODO-QSP: 'You have earned <<$func(''money'', ''string_profit'', prostitute[''earnings_day''])>> today.'+iif(p...
  }
  if (((s as any).prostitute ?? 0)?.['payment_method'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEventCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Look for a client (0:30)', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Look for a client (0:30)', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'prostitution_car_negotiation', 'look_client');
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] === 0) {
    scene.text('<br>You don\'t have any tissues with you to remove cum from your body.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0  &&  (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_undressed'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_vaginal_mod'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_anal_mod'] === 1)) {
      scene.actions([
        { label: 'Remove the cum from your body (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['makeup_wipes'] = ((st as any).mc_inventory['makeup_wipes'] ?? 0) - (1);
    qspCall(st, 'cum_cleanup', '', 20);
    qspGoto(st, 'gas_station_gp_117', 'work');
  } },
      ]);
    }
  }
  qspCall(s, 'prostitution_car_negotiation', 'general_description');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop working', goto: ['gas_station_gp_117', 'outside'] },
  ]);
  scene.build();
}

function enterEventCheck(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterBusEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 87;
  qspCall(s, 'money', 'pay', 75);
  ((s as any).prostitute = (s as any).prostitute ?? {})['earnings_day'] = 0;
  ((s as any).prostitute = (s as any).prostitute ?? {})['customer_day'] = 0;
  qspGoto(s, 'pav_market', '');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'gas_station_gp_117';
  (s as any).locM = 'gas_station_gp_117';
  (s as any).menu_loc = 'gas_station_gp_117';
  const arg = s.locArg;
  switch (arg) {
    case 'outside':
      enterOutside(s, scene);
      break;
    case 'shop':
      enterShop(s, scene);
      break;
    case 'restroom':
      enterRestroom(s, scene);
      break;
    case 'condom_dispenser':
      enterCondomDispenser(s, scene);
      break;
    case 'restroom_women':
      enterRestroomWomen(s, scene);
      break;
    case 'restroom_men':
      enterRestroomMen(s, scene);
      break;
    case 'gas':
      enterGas(s, scene);
      break;
    case 'work':
      enterWork(s, scene);
      break;
    case 'event_check':
      enterEventCheck(s, scene);
      break;
    case 'bus_end':
      enterBusEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gas_station_gp_117: LocationDef = {
  name: 'gas_station_gp_117',
  title: 'The gas station is modern and clean in comparison to other g',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
