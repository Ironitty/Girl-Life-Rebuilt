import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shoplocation ?? 0) !== '') {
    // TODO-QSP: $ARGS[0] = $shoplocation
    // TODO-QSP: gt 'shop', $ARGS[0]
  }
  // TODO-QSP: end
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).loc ?? 0) !== 'shop') {
    (s as any).loc_bak = ((s as any).loc ?? 0);
  }
  qspCall(s, 'core_library', 'setloc', 'shop', 'start');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspGoto(s, 'shop', 'main');
  // TODO-QSP: end
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).loc ?? 0) !== 'shop') {
    (s as any).loc_bak = ((s as any).loc ?? 0);
  }
  qspCall(s, 'core_library', 'setloc', 'shop', 'start');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspGoto(s, 'shop', 'main');
  // TODO-QSP: end
  scene.build();
}

function enterMove(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'main';
  if (((s as any).loc ?? 0) !== 'shop') {
    (s as any).loc_bak = ((s as any).loc ?? 0);
  }
  qspCall(s, 'core_library', 'setloc', 'shop', 'main');
  (s as any).location_type = 'public_indoors';
  scene.text('<center><b>Supermarket</b></center>');
  scene.img('images/locations/shared/store/shop.jpg');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    qspCall(s, 'stat', '');
    scene.text('The supermarket is currently closed.');
    if (((s as any).loc_bak ?? 0) === 'shop') {
      (s as any).loc_bak = 'city_trademission';
    }
    scene.actions([
{ label: 'Leave the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'item_cart', 'shopping_var_clear');
    dynamicGoto(st, 'loc_bak');
  } },
]);
    return;
  }
  // TODO-QSP: dynamic text: An <a href="exec: minut += 1 & gt ''shop'', ''ATM''">ATM</a>, from which you can...
  scene.text('An <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027ATM/u0027); return false;">ATM</a>, from which you can withdraw money from your bank account, stands against a wall.');
  // TODO-QSP: dynamic text: There is a branch of the communications giant <a href="exec: minut += 1 & gt ''s...
  scene.text('There is a branch of the communications giant <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027megafon/u0027); return false;">MegaFon</a>.');
  scene.text('A <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027adverts_manager/u0027, /u0027start/u0027); return false;">Public notice board</a>, where you can check various private and official advertisements, is sitting on a nearby wall.');
  // TODO-QSP: dynamic text: <br>Most of the space in the supermarket is taken up by the <a href="exec: minut...
  scene.text('<br>Most of the space in the supermarket is taken up by the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027grocery/u0027); return false;">grocery department</a>, but the store has many smaller departments as well.');
  // TODO-QSP: dynamic text: These include <a href="exec: minut += 1 & gt ''shop'', ''cosmetics''">cosmetics<...
  scene.text('These include <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027cosmetics/u0027); return false;">cosmetics</a>, <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027hardware/u0027); return false;">hardware</a>, <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027clothing/u0027); return false;">clothing</a> and <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027tech/u0027); return false;">household appliances</a>. Not far from the entrance is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027icecream/u0027); return false;">counter selling ice cream</a>.');
  qspCall(s, 'stat', '');
  qspCall(s, 'family_schedule', '');
  if (((s as any).loc_bak ?? 0) === 'pav_commercial') {
    if (((s as any).locat ?? 0)?.['Anya'] === 7) {
      // TODO-QSP: dynamic text: Your sister <a href="exec: minut += 1 & gt ''shop'', ''Anya''">Anya</a> is sitti...
      scene.text('Your sister <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027Anya/u0027); return false;">Anya</a> is sitting at the cash register.');
    }
  }
  if (((s as any).loc_bak ?? 0) === 'city_residential') {
    if ((Math.floor(Math.random() * 20) + 1) === 20) {
      if ((!((s as any).dimaQW ?? 0))) {
        scene.text('A man is standing by the entrance, looking at you appreciatively.');
        scene.actions([
          { label: 'Return the look', goto: ['event', 'dima'] },
        ]);
      } else {
        if (((s as any).dimaQW ?? 0) === 1) {
          scene.text('You notice Dima nearby and are frozen with fear. You want to run, but your legs won\'t respond.');
          scene.text('Your heart thumps in your chest, your vision narrows and you feel faint.');
          scene.actions([
            { label: 'Pass out', goto: ['event', 'scoreslut1'] },
          ]);
        } else {
          scene.text('You meet the same Dima whose friend fucked and abused you. Dima grins confidently. "Hello there…"');
          scene.actions([
            { label: 'Hello', handler: (st: GameState) => {
    scene.text('"Come with me. My wife\'s away…" he says with a grin.');
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'shop', 'main');
  } },
      ]);
    }
    scene.actions([
      { label: 'I deserve this', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img('images/locations/city/residential/street/sex/gostdt2.jpg');
      scene.text('Dima takes you to his house and orders you to lie across the sofa. You get into position and he calls you a bitch before he starts fucking you in the mouth.');
      scene.text('Dima finally finishes in your mouth. You obediently swallow and lick the remnants of sperm off his cock.');
      qspCall(st, 'arousal', 'bj', 10, 'sub', 'deepthroat', 'humiliation');
      qspCall(st, 'arousal', 'end');
      qspCall(st, 'cum_call', 'mouth_swallow', 'A169', 1);
    } else {
      qspCall(st, 'pain', '', 6, 'asscheeks', 'slap');
      (st as any).spank = ((st as any).spank ?? 0) + (1);
      scene.img('images/locations/city/residential/street/sex/gostanal2.jpg');
      scene.text('Dima brings you to his house and begins to kiss and undress you in the hall. Once you\'re naked, he takes you to the bathroom.');
      scene.text('He unscrews the showerhead and shoves the hose in your ass. You feel the rush of water quickly filling you before Dima sits you on the toilet. After the rough enema, he bends you over and inserts his dick into your ass.');
      scene.text('He fucks and slaps your ass for a few minutes before he moans and you feel a warmth filling your ass.');
      qspCall(st, 'arousal', 'anal', 30, 'sub', 'rough', 'humiliation');
      qspCall(st, 'arousal', 'end');
      qspCall(st, 'cum_call', 'anus', 'A169', 1);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  scene.text('<br>The store is crowded with shoppers.');
  if (((s as any).TorgPredZ ?? 0) > 0) {
    if ((((s as any).loc_bak ?? 0) === 'city_residential'  &&  ((s as any).StreetShopTPday ?? 0) !== ((s as any).daystart ?? 0))  ||  (((s as any).loc_bak ?? 0) === 'city_industrial'  &&  ((s as any).nordShopTPday ?? 0) !== ((s as any).daystart ?? 0))  ||  (((s as any).loc_bak ?? 0) === 'city_mall'  &&  ((s as any).downShopTPday ?? 0) !== ((s as any).daystart ?? 0))) {
      scene.actions([
        { label: 'Promote products', handler: (st: GameState) => {
    if (((st as any).loc_bak ?? 0) === 'city_residential') {
      (st as any).StreetShopTPday = ((st as any).daystart ?? 0);
    }
    if (((st as any).loc_bak ?? 0) === 'city_industrial') {
      (st as any).nordShopTPday = ((st as any).daystart ?? 0);
    }
    if (((st as any).loc_bak ?? 0) === 'city_mall') {
      (st as any).downShopTPday = ((st as any).daystart ?? 0);
    }
    (st as any).mtprand = (Math.floor(Math.random() * 91) + 40);
    (st as any).minut = ((st as any).minut ?? 0) + (((st as any).mtprand ?? 0));
    (st as any).TorgPredZ = ((st as any).TorgPredZ ?? 0) - (1);
    (st as any).TorgPredZV = ((st as any).TorgPredZV ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/store/shop.jpg');
    scene.text('You promote the products for quite a while, and when you finally finish, you go to the cashier and tell them that they sold.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
{ label: 'Leave the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'item_cart', 'shopping_var_clear');
    dynamicGoto(st, 'loc_bak');
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterATM(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'ATM';
  qspCall(s, 'core_library', 'setloc', 'shop', 'ATM');
  qspCall(s, 'stat', '');
  scene.text('<center><b>ATM</b></center>');
  scene.img('images/locations/shared/store/atm.jpg');
  if ((!((s as any).bankAccount ?? 0))) {
    scene.text('You don\'t have a bank account yet!');
  } else {
    if (((s as any).karta ?? 0) >= ((s as any).bankDebtLimit ?? 0)) {
      // TODO-QSP: dynamic text: You have ' + $func('money', 'format', karta - bankDebtLimit) + ' in your account...
      scene.text('You have \' + $func(\'money\', \'format\', karta - bankDebtLimit) + \' in your account.');
      // TODO-QSP: 'You have an overdraft limit of ' + $func('wrap', 'accent',$func('money', 'format', bankDebtLimit) +...
    } else {
      // TODO-QSP: 'You are overdrawn by ' + $func('wrap', 'neg',$func('money', 'format', bankDebtLimit - karta) + '.')
      // TODO-QSP: 'You have a remaining credit limit of ' + $func('wrap', 'accent',$func('money', 'format', karta) + '...
    }
    // TODO-QSP: '<br>ATM Deposit Fee: ' + $func('money', 'string_price', 100)
    if (((s as any).money ?? 0) > 0) {
      scene.actions([
        { label: 'Deposit money into your bank account', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'bank', 'deposit_cash', qspFunc(s, 'money', 'price', 100));
    qspCall(st, 'stat', '');
    scene.text('"Is there anything else I can do for you?"');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
    ]);
  } },
      ]);
    }
    if (((s as any).karta ?? 0) <= 0) {
      scene.text('You have maxed out your overdraft.');
    } else {
      if (((s as any).karta ?? 0) >= 1000) {
        scene.actions([
          { label: 'Withdraw  [+$func(\'money\', \'format\', 1000) + \' from ...]', handler: (st: GameState) => {
    (st as any).karta = ((st as any).karta ?? 0) - (1000);
    (st as any).money = ((st as any).money ?? 0) + (1000);
    qspCall(st, 'bank', 'set_withdraw_text', 1000);
    qspCall(st, 'stat', '');
    scene.text('"Is there anything else I can do for you?"');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Withdraw money from the ATM', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'bank', 'withdraw_cash', 0);
    qspCall(st, 'stat', '');
    scene.text('"Is there anything else I can do for you?"');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
  ]);
  scene.build();
}

function enterGrocery(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'grocery';
  qspCall(s, 'core_library', 'setloc', 'shop', 'grocery');
  (s as any).loc_s = 'shop';
  (s as any).args_s = 'grocery';
  (s as any).location_type = 'public_indoors';
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    qspCall(s, 'stat', '');
    scene.text('The grocery department is currently closed.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
]);
    return;
  }
  qspCall(s, 'item_cart', 'shopping_aisle', 'food');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/store/shop1.jpg');
  if (((s as any).loc_bak ?? 0) === 'city_mall') {
    qspCall(s, 'shoplifting', 'city');
  }
  if (((s as any).loc_bak ?? 0) === 'pav_commercial') {
    qspCall(s, 'shoplifting', 'pav');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the grocery department', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
    { label: 'Go to the pet aisle', goto: ['shop', 'dog_items'] },
  ]);
  scene.build();
}

function enterDogItems(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'dog_items';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'shop', 'dog_items');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/rex/pet_isle.jpg');
  scene.text('You\'re currently in the pet aisle, where you can buy food, treats and other things for your dog.');
  if (((s as any).home ?? 0)?.['current'] === 'parents_home') {
    scene.text('<br>You don\'t need to buy dog food. Your parents pay for it.');
  } else {
    scene.actions([
      { label: 'Buy dog food', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/rex/dog_food.jpg');
    // TODO-QSP: dynamic text: The store sells dog food for ' + $func('money', 'string_price', 600) + '. Inside...
    scene.text(`The store sells dog food for 600₽. Inside each pack is enough food for 20 meals. You have ${((st as any).objects ?? 0)?.['dog_food'] ?? ''}.`);
    scene.actions([
      { label: 'Buy enough for 20 meals', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 600) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 600);
      ((st as any).objects = (st as any).objects ?? {})['dog_food'] = ((st as any).objects['dog_food'] ?? 0) + (20);
      qspGoto(st, 'shop', 'dog_items');
    }
  } },
      { label: 'Buy enough for 40 meals', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1200) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 1200);
      ((st as any).objects = (st as any).objects ?? {})['dog_food'] = ((st as any).objects['dog_food'] ?? 0) + (40);
      qspGoto(st, 'shop', 'dog_items');
    }
  } },
      { label: 'Buy enough for 80 meals', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2400) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 2400);
      ((st as any).objects = (st as any).objects ?? {})['dog_food'] = ((st as any).objects['dog_food'] ?? 0) + (80);
      qspGoto(st, 'shop', 'dog_items');
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).objects ?? 0)?.['toys'] === 0) {
    scene.actions([
      { label: 'Buy fetch balls', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/rex/balls.jpg');
    // TODO-QSP: dynamic text: The store sells rubber balls for ' + $func('money', 'string_price', 900) + ' tha...
    scene.text('The store sells rubber balls for 900₽ that you can use to play fetch with your dog.');
    scene.actions([
      { label: 'Go back', goto: ['shop', 'dog_items'] },
      { label: 'Buy them', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 900) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 900);
      ((st as any).objects = (st as any).objects ?? {})['toys'] = 1;
      qspGoto(st, 'shop', 'dog_items');
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
    { label: 'Buy some dog treats', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/rex/treat_' + (Math.floor(Math.random() * 3) + 0) + '.jpg');
    // TODO-QSP: dynamic text: The store sells dog treats for ' + $func('money', 'string_price', 300) + '. Insi...
    scene.text(`The store sells dog treats for 300₽. Inside each pack are 20 treats. You have ${((st as any).objects ?? 0)?.['treats'] ?? ''}.`);
    scene.actions([
      { label: 'Go back', goto: ['shop', 'dog_items'] },
      { label: 'Buy a pack', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 300);
      ((st as any).objects = (st as any).objects ?? {})['treats'] = ((st as any).objects['treats'] ?? 0) + (20);
      qspGoto(st, 'shop', 'dog_items');
    }
  } },
    ]);
  } },
    { label: 'Buy a chew toy for your dog', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/rex/chew.jpg');
    // TODO-QSP: dynamic text: The store sells a chew toy for ' + $func('money', 'string_price', 800) + '.
    scene.text('The store sells a chew toy for 800₽.');
    scene.actions([
      { label: 'Go back', goto: ['shop', 'dog_items'] },
      { label: 'Buy one', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 800) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 800);
      ((st as any).objects = (st as any).objects ?? {})['chew'] = ((st as any).objects['chew'] ?? 0) + (10);
      qspGoto(st, 'shop', 'dog_items');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCosmetics(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'cosmetics';
  qspCall(s, 'core_library', 'setloc', 'shop', 'cosmetics');
  (s as any).loc_s = 'shop';
  (s as any).args_s = 'cosmetics';
  (s as any).location_type = 'public_indoors';
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    qspCall(s, 'stat', '');
    scene.text('The cosmetics department is currently closed.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
]);
    return;
  }
  qspCall(s, 'item_cart', 'shopping_aisle', 'beauty');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/store/shop2.jpg');
  if (((s as any).loc_bak ?? 0) === 'city_mall') {
    qspCall(s, 'shoplifting', 'city');
  }
  if (((s as any).loc_bak ?? 0) === 'pav_commercial') {
    qspCall(s, 'shoplifting', 'pav');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the cosmetics department', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
  ]);
  scene.build();
}

function enterHardware(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'hardware';
  qspCall(s, 'core_library', 'setloc', 'shop', 'hardware');
  (s as any).loc_s = 'shop';
  (s as any).args_s = 'hardware';
  (s as any).location_type = 'public_indoors';
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    qspCall(s, 'stat', '');
    scene.text('The hardware department is currently closed.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
]);
    return;
  }
  qspCall(s, 'item_cart', 'shopping_aisle', 'hardware');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/store/shop3.jpg');
  if (((s as any).pod_whore_countQW ?? 0) > 15  &&  (!((s as any).paint_blue ?? 0))) {
    scene.actions([
      { label: 'Buy paint to cover graffiti', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 200);
      (st as any).paint_blue = 1;
      // TODO-QSP: gt 'shop', $func('wrap', 'v_pos', 'You bought a tin of paint.')
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the hardware department', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
  ]);
  scene.build();
}

function enterClothing(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'clothing';
  qspCall(s, 'core_library', 'setloc', 'shop', 'clothing');
  (s as any).location_type = 'public_indoors';
  scene.text('<center><b>Department of Women\'s Clothing</b></center>');
  scene.img('images/locations/shared/store/shop4.jpg');
  scene.text('This department only sells cheap underwear and ice skates.');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    qspCall(s, 'stat', '');
    scene.text('The women\'s clothing department is currently closed.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
]);
    return;
  }
  // TODO-QSP: dynamic text: Women''s panties and bras ' + $func('money', 'string_price', 300) + ' each
  scene.text('Women\'s panties and bras 300₽ each');
  qspCall(s, 'stat', '');
  if (((s as any).mc_inventory ?? 0)?.['ice_skates'] !== 1) {
    // TODO-QSP: dynamic text: A pair of ice-skates are available for ' + $func('money', 'string_price', 3000) ...
    scene.text('A pair of ice-skates are available for 3000₽.');
    scene.actions([
      { label: 'Buy ice skates', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 3000);
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['ice_skates'] = 1;
      scene.img('images/locations/pavlovsk/lake/konki_shop.jpg');
      scene.text('You buy a pair of ice skates.');
      scene.actions([
        { label: 'Move away from the counter', goto: ['shop', 'clothing'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['ski'] !== 1) {
    // TODO-QSP: dynamic text: A pair of skis and poles are available for ' + $func('money', 'string_price', 40...
    scene.text('A pair of skis and poles are available for 4000₽.');
    scene.actions([
      { label: 'Buy skis', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 4000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 4000);
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['ski'] = 1;
      scene.img('images/pc/activities/ski_buy.jpg');
      scene.text('You buy a pair of skis and poles.');
      scene.actions([
        { label: 'Move away from the counter', goto: ['shop', 'clothing'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the women\'s clothing department', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
    { label: 'View underwear', goto: ['shop', 'underwear'] },
  ]);
  scene.build();
}

function enterUnderwear(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'underwear';
  if (((s as any).loc ?? 0) !== 'shop') {
    (s as any).loc_bak = ((s as any).loc ?? 0);
  }
  qspCall(s, 'core_library', 'setloc', 'shop', 'underwear');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Click on an item to view details</b></center>');
  if (qspFunc(s, 'panties', 'is_owned', 'gm', 7) === 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027panty_view/u0027, /u0027view_item/u0027, /u0027shop/u0027); return false;"><img height="150" src="images/pc/items/gm/panties/7.jpg"/></a>');
  }
  if (qspFunc(s, 'panties', 'is_owned', 'gm', 9) === 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027panty_view/u0027, /u0027view_item/u0027, /u0027shop/u0027); return false;"><img height="150" src="images/pc/items/gm/panties/9.jpg"/></a>');
  }
  if (qspFunc(s, 'panties', 'is_owned', 'gm', 12) === 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027panty_view/u0027, /u0027view_item/u0027, /u0027shop/u0027); return false;"><img height="150" src="images/pc/items/gm/panties/12.jpg"/></a>');
  }
  if (qspFunc(s, 'panties', 'is_owned', 'gm', 21) === 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027panty_view/u0027, /u0027view_item/u0027, /u0027shop/u0027); return false;"><img height="150" src="images/pc/items/gm/panties/21.jpg"/></a>');
  }
  if (qspFunc(s, 'panties', 'is_owned', 'gm', 37) === 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027panty_view/u0027, /u0027view_item/u0027, /u0027shop/u0027); return false;"><img height="150" src="images/pc/items/gm/panties/37.jpg"/></a>');
  }
  if (qspFunc(s, 'bras', 'is_owned', 'gm', 11) === 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bra_view/u0027, /u0027view_item/u0027, /u0027shop/u0027); return false;"><img height="150" src="images/pc/items/gm/bras/11.jpg"/></a>');
  }
  if (qspFunc(s, 'bras', 'is_owned', 'gm', 12) === 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bra_view/u0027, /u0027view_item/u0027, /u0027shop/u0027); return false;"><img height="150" src="images/pc/items/gm/bras/12.jpg"/></a>');
  }
  if (qspFunc(s, 'bras', 'is_owned', 'gm', 16) === 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bra_view/u0027, /u0027view_item/u0027, /u0027shop/u0027); return false;"><img height="150" src="images/pc/items/gm/bras/16.jpg"/></a>');
  }
  if (qspFunc(s, 'bras', 'is_owned', 'gm', 18) === 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bra_view/u0027, /u0027view_item/u0027, /u0027shop/u0027); return false;"><img height="150" src="images/pc/items/gm/bras/18.jpg"/></a>');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['shop', 'clothing'] },
  ]);
  scene.build();
}

function enterTech(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'tech';
  qspCall(s, 'core_library', 'setloc', 'shop', 'tech');
  (s as any).loc_s = 'shop';
  (s as any).args_s = 'tech';
  (s as any).location_type = 'public_indoors';
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    qspCall(s, 'stat', '');
    scene.text('The household appliance department is currently closed.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
]);
    return;
  }
  qspCall(s, 'item_cart', 'shopping_aisle', 'tech');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/store/shop5.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the appliance department', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
  ]);
  scene.build();
}

function enterIcecream(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'icecream';
  if (((s as any).loc ?? 0) !== 'shop') {
    (s as any).loc_bak = ((s as any).loc ?? 0);
  }
  qspCall(s, 'core_library', 'setloc', 'shop', 'icecream');
  qspCall(s, 'stat', '');
  scene.img('images/shared/store/icecreamcounter.jpg');
  // TODO-QSP: dynamic text: Ice cream is available for ' + $func('money', 'string_price', 50) + '.
  scene.text('Ice cream is available for 50₽.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the counter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
    { label: 'Buy ice cream', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 50);
      (st as any).fat = ((st as any).fat ?? 0) + (3);
      qspCall(st, 'mood', 'raise', 'small');
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (60);
      (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (30);
      (st as any).cumspclnt = 2;
      qspCall(st, 'cum_cleanup', '');
      (st as any).pcs_breath = 0;
      qspCall(st, 'stat', '');
      scene.img('images/shared/food/icecreem.jpg');
      scene.text('You buy some ice cream and eat it.');
      scene.actions([
        { label: 'Move away from the counter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMegafon(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'megafon';
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  if (((s as any).loc ?? 0) !== 'shop') {
    (s as any).loc_bak = ((s as any).loc ?? 0);
  }
  qspCall(s, 'core_library', 'setloc', 'shop', 'megafon');
  qspCall(s, 'stat', '');
  scene.text('<center><b>MegaFon shop</b></center>');
  scene.img('images/system/phone/megafon2.jpg');
  (s as any).tables = '<center><table>';
  (s as any).tablec = '</table></center>';
  if ((!((s as any).bankAccount ?? 0))) {
    scene.text('<center><h4>You need a valid bank account to buy monthly contracts.</h4></center>');
  }
  (s as any).title = '<center><h4>Home Internet Subscription</h4></cemter>';
  (s as any).price = 900;
  if (((s as any).home ?? 0)?.['current'] === 'parents_home') {
    (s as any).line = '<tr><td align="center">Your parents are paying for the internet at home, and you can\'t take out a second internet subscription for the same address</td></tr>';
  } else {
    if (((s as any).home ?? 0)?.['internet_enabled'] === 0) {
      (s as any).line = '<tr><td align="center">You can\'t buy an internet subscription for ' + ((s as any).home ?? 0)?.['display'] + '</td></tr>';
    } else {
      if (((s as any).subscription ?? 0)[((s as any).home ?? 0)?.['current']] === 1) {
        (s as any).temp_home = '' + ((s as any).home ?? 0)?.['current'] + '-date';
        (s as any).line = '<tr><td align="center">You have an active internet subscription at ' + ((s as any).home ?? 0)?.['display'] + ' that will renew next month on day ' + ((s as any).subscription ?? 0)?.[String((s as any).temp_home ?? 0)] + ' for \' + $func(\'money\', \'string_price\', price) + \'</td></tr>';
      } else {
        (s as any).line = '<tr><td style="padding-left: 10px; padding-right: 10px; align: left; ">Monthly internet subscription for \' + $func(\'money\', \'string_price\', price) + \' at your ' + ((s as any).home ?? 0)?.['display'] + '. Automatically renews every month</td>';
        if ((!((s as any).bankAccount ?? 0))) {
          // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;">No bank account</td></tr>'
        } else {
          if (qspFunc(s, 'money', 'can_afford', ((s as any).price ?? 0), 'bank') === 0) {
            // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;">Insufficient balance</td></tr>'
          } else {
            // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;"><a href="exec: gs ''internet_mobile''...
          }
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <<$title>><<$tables>><<$line>><<$tablec>>
  scene.text(`${((s as any).title ?? '')}${((s as any).tables ?? '')}${((s as any).line ?? '')}${((s as any).tablec ?? '')}`);
  qspCall(s, 'homes_properties', 'get_internet_enabled_properties', 'home', 'hasaccess');
  (s as any).count = 0;
  if (((s as any).count ?? 0) > 0) {
    // TODO-QSP: :propertyloop
    if (((s as any).property__is_current_home ?? 0)?.[String((s as any).i ?? 0)] === 0) {
      (s as any).title = '<center><h4>Internet Subscription for your other properties</h4></center>';
      if (((s as any).property_status_label ?? 0)?.[String((s as any).i ?? 0)] === 'tenants') {
        // TODO-QSP: $line += '<tr><td align="center">You have rented out the <<LCASE($property_name[i])>> and you don''t...
      } else {
        if (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)?.[String((s as any).i ?? 0)]] === 0) {
          // TODO-QSP: $line += '<tr><td style="padding-left: 10px; padding-right: 10px; align: left; ">Monthly internet su...
          if ((!((s as any).bankAccount ?? 0))) {
            // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;">No bank account</td></tr>'
          } else {
            if (qspFunc(s, 'money', 'can_afford', ((s as any).price ?? 0), 'bank') === 0) {
              // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;">Insufficient balance</td></tr>'
            } else {
              // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;"><a href="exec: gs ''internet_mobile''...
            }
          }
        } else {
          if (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)?.[String((s as any).i ?? 0)]] > 0) {
            // TODO-QSP: $line += '<tr><td align="center">You have an active internet subscription for the <<LCASE($property_...
          }
        }
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < ((s as any).count ?? 0)) {
      // TODO-QSP: jump 'propertyloop'
    }
    qspCall(s, 'homes_properties', 'clean_up_property_data');
    // TODO-QSP: killvar 'i'
    // TODO-QSP: killvar 'count'
    if (((s as any).title ?? 0) !== '') {
      // TODO-QSP: dynamic text: <<$title>><<$tables>><<$line>><<$tablec>>
      scene.text(`${((s as any).title ?? '')}${((s as any).tables ?? '')}${((s as any).line ?? '')}${((s as any).tablec ?? '')}`);
    }
    // TODO-QSP: killvar 'line'
    // TODO-QSP: killvar 'title'
  }
  (s as any).title = '<center><h4>Mobile Internet Subscription</h4></center>';
  (s as any).price = 1200;
  if (((s as any).subscription ?? 0)?.['mobile'] === 1) {
    (s as any).line = '<tr><td align="center">You have an active mobile internet subscription that will renew next month on day ' + ((s as any).subscription ?? 0)?.['mobile-date'] + ' for \' + $func(\'money\', \'string_price\', price) + \'</td></tr>';
  } else {
    if (((s as any).subscription ?? 0)?.['metered_mobile'] > 0) {
      (s as any).discount = (((s as any).subscription ?? {})?.['metered_mobile'] ?? 0) / 12;
      (s as any).discount_left = Math.max(((s as any).price ?? 0) - ((s as any).discount ?? 0), 0);
      (s as any).line = '<tr><td align="center">You still a have a ' + qspFunc(s, 'money', 'string_price', ((s as any).subscription ?? 0)?.['metered_mobile']) + '  balance for your metered mobile internet which gives you a ' + qspFunc(s, 'money', 'string_price', ((s as any).discount ?? 0)) + ' discount</td></tr>';
    }
    // TODO-QSP: $line += '<tr><td style="padding-left: 10px; padding-right: 10px; align: left; ">Monthly mobile inte...
    if ((!((s as any).bankAccount ?? 0))) {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;">No bank account</td></tr>'
    } else {
      if (qspFunc(s, 'money', 'can_afford', ((s as any).discount_left ?? 0), 'bank') === 0) {
        // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;">Insufficient funds</td></tr>'
      } else {
        // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;"><a href="exec: gs ''internet_mobile''...
      }
    }
  }
  // TODO-QSP: dynamic text: <<$title>><<$tables>><<$line>><<$tablec>>
  scene.text(`${((s as any).title ?? '')}${((s as any).tables ?? '')}${((s as any).line ?? '')}${((s as any).tablec ?? '')}`);
  (s as any).title = '<center><h4>Metered Internet</h4></center>';
  if (((s as any).subscription ?? 0)?.['mobile'] === 1) {
    (s as any).line = '<tr><td align="center">You have an active mobile internet subscription for unlimited use, you can\'t buy extra minutes </td></tr>';
    // TODO-QSP: $line += '<tr><td align="left"><b>300 minutes</b> (5 hours) of mobile internet for ' + $func('money'...
    // TODO-QSP: $line += '<tr><td align="left"><b>600 minutes</b> (10 hours) of mobile internet for ' + $func('money...
    // TODO-QSP: $line += '<tr><td align="left"><b>1200 minutes</b> (20 hours) of mobile internet for ' + $func('mone...
    // TODO-QSP: $line += '<tr><td align="left"><b>3000 minutes</b> (50 hours) of mobile internet for ' + $func('mone...
  } else {
    (s as any).line = '<tr><td style="padding-left: 10px; padding-right: 10px; align: left; "><b>300 minutes</b> (5 hours) of mobile internet for ' + qspFunc(s, 'money', 'string_price', 80) + '</td>';
    if (qspFunc(s, 'money', 'can_afford', 80) === 0) {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2">You can''t afford this</t...
    } else {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2"><a href="exec: gs ''inter...
    }
    // TODO-QSP: $line += '<tr><td style="padding-left: 10px; padding-right: 10px; align: left; "><b>600 minutes</b> ...
    if (qspFunc(s, 'money', 'can_afford', 155) === 0) {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2">You can''t afford this</t...
    } else {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2"><a href="exec: gs ''inter...
    }
    // TODO-QSP: $line += '<tr><td style="padding-left: 10px; padding-right: 10px; align: left; "><b>1200 minutes</b>...
    if (qspFunc(s, 'money', 'can_afford', 295) === 0) {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2">You can''t afford this</t...
    } else {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2"><a href="exec: gs ''inter...
    }
    // TODO-QSP: $line += '<tr><td style="padding-left: 10px; padding-right: 10px; align: left; "><b>3000 minutes</b>...
    if (qspFunc(s, 'money', 'can_afford', 695) === 0) {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2">You can''t afford this</t...
    } else {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2"><a href="exec: gs ''inter...
    }
  }
  // TODO-QSP: dynamic text: <<$title>><<$tables>><<$line>><<$tablec>>
  scene.text(`${((s as any).title ?? '')}${((s as any).tables ?? '')}${((s as any).line ?? '')}${((s as any).tablec ?? '')}`);
  // TODO-QSP: dynamic text: <center>You have <b><<subscription[''metered_mobile'']>></b> minutes for mobile ...
  scene.text(`<center>You have <b>${((s as any).subscription ?? 0)?.['metered_mobile'] ?? ''}</b> minutes for mobile internet use</center>`);
  (s as any).title = '<center><h4>Mobile Calls and Texts</h4></center>';
  (s as any).price = 800;
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 1) {
    // TODO-QSP: $line += '<tr><td align="center">You have an active mobile subscription that will renew next month o...
  } else {
    if (((s as any).subscription ?? 0)?.['metered_calls'] > 0) {
      (s as any).discount = (((s as any).subscription ?? {})?.['metered_calls'] ?? 0) / 2;
      (s as any).discount_left = Math.max(((s as any).price ?? 0) - ((s as any).discount ?? 0), 0);
      // TODO-QSP: $line += '<tr><td align="center">You have ' + $func('money', 'string_price', subscription['metered_c...
    }
    // TODO-QSP: $line += '<tr><td style="padding-left: 10px; padding-right: 10px; align: left;">Monthly mobile subsc...
    if ((!((s as any).bankAccount ?? 0))) {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;">No bank account</td></tr>'
    } else {
      if (qspFunc(s, 'money', 'can_afford', ((s as any).discount_left ?? 0), 'bank') === 0) {
        // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;">Insufficient funds</td></tr>'
      } else {
        // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;"><a href="exec: gs ''internet_mobile''...
      }
    }
  }
  // TODO-QSP: dynamic text: <<$title>><<$tables>><<$line>><<$tablec>>
  scene.text(`${((s as any).title ?? '')}${((s as any).tables ?? '')}${((s as any).line ?? '')}${((s as any).tablec ?? '')}`);
  (s as any).title = '<center><h4>Metered Calls and Texts</h4></center>';
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 1) {
    // TODO-QSP: $line += '<tr><td>You have an active mobile subscription with unlimited minutes and texts, you can''...
  } else {
    // TODO-QSP: $line += '<tr><td style="padding-left: 10px; padding-right: 10px; align: left;">' + $func('money', '...
    if (qspFunc(s, 'money', 'can_afford', 60) === 0) {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2">You can''t afford this</t...
    } else {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2"><a href="exec: gs ''inter...
    }
    // TODO-QSP: $line += '<tr><td style="padding-left: 10px; padding-right: 10px; align: left;">' + $func('money', '...
    if (qspFunc(s, 'money', 'can_afford', 115) === 0) {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2">You can''t afford this</t...
    } else {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2"><a href="exec: gs ''inter...
    }
    // TODO-QSP: $line += '<tr><td style="padding-left: 10px; padding-right: 10px; align: left;">' + $func('money', '...
    if (qspFunc(s, 'money', 'can_afford', 170) === 0) {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2">You can''t afford this</t...
    } else {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2"><a href="exec: gs ''inter...
    }
    // TODO-QSP: $line += '<tr><td style="padding-left: 10px; padding-right: 10px; align: left;">' + $func('money', '...
    if (qspFunc(s, 'money', 'can_afford', 225) === 0) {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2">You can''t afford this</t...
    } else {
      // TODO-QSP: $line += '<td style="padding-left: 10px; padding-right: 10px;" colspan="2"><a href="exec: gs ''inter...
    }
  }
  // TODO-QSP: dynamic text: <<$title>><<$tables>><<$line>><<$tablec>>
  scene.text(`${((s as any).title ?? '')}${((s as any).tables ?? '')}${((s as any).line ?? '')}${((s as any).tablec ?? '')}`);
  // TODO-QSP: dynamic text: <center>You have <b><<subscription[''metered_calls'']>> minutes</b> for mobile c...
  scene.text(`<center>You have <b>${((s as any).subscription ?? 0)?.['metered_calls'] ?? ''} minutes</b> for mobile calls and <b>${((s as any).subscription ?? 0)?.['metered_calls-sms_limit'] ?? ''} text messages</b></center>`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the supermarket', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
  ]);
  scene.build();
}

function enterAnya(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'Anya';
  qspCall(s, 'core_library', 'setloc', 'shop', 'Anya');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/anyabusywork.jpg');
  qspCall(s, 'sister_chat', 'checks');
  // TODO-QSP: dynamic text: "Don''t disturb me at work, <<$pcs_nickname>>! Can''t you see that I have custom...
  scene.text(`"Don't disturb me at work, ${((s as any).pcs_nickname ?? '')}! Can't you see that I have customers?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'move':
      enterMove(s, scene);
      break;
    case 'main':
      enterMain(s, scene);
      break;
    case 'ATM':
      enterATM(s, scene);
      break;
    case 'grocery':
      enterGrocery(s, scene);
      break;
    case 'dog_items':
      enterDogItems(s, scene);
      break;
    case 'cosmetics':
      enterCosmetics(s, scene);
      break;
    case 'hardware':
      enterHardware(s, scene);
      break;
    case 'clothing':
      enterClothing(s, scene);
      break;
    case 'underwear':
      enterUnderwear(s, scene);
      break;
    case 'tech':
      enterTech(s, scene);
      break;
    case 'icecream':
      enterIcecream(s, scene);
      break;
    case 'megafon':
      enterMegafon(s, scene);
      break;
    case 'Anya':
      enterAnya(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop: LocationDef = {
  name: 'shop',
  title: 'Supermarket',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
