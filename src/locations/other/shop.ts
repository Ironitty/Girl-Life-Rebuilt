import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shoplocation ?? 0) !== '') {
    // TODO-QSP: $ARGS[0] = $shoplocation
    // TODO-QSP: gt 'shop', $ARGS[0]
  }
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) !== 'shop') {
  }
  qspCall(s, 'core_library', 'setloc', 'shop', 'main');
  scene.text('<center><b>Supermarket</b></center>');
  scene.img('images/locations/shared/store/shop.jpg');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    qspCall(s, 'stat', '');
    scene.text('The supermarket is currently closed.');
    if (((s as any).loc_bak ?? 0) === 'shop') {
    }
    return;
    scene.actions([
      { label: 'Leave the store', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'item_cart', 'shopping_var_clear');
    dynamicGoto(st, 'loc_bak');
  } },
    ]);
  }
  // TODO-QSP: dynamic text: An <a href="exec: minut += 1 & gt 'shop', 'ATM'">ATM</a>, from which you can wit...
  scene.text('An <a href="exec: minut += 1 & gt \'shop\', \'ATM\'">ATM</a>, from which you can withdraw money from your bank account, stands against a wall.');
  // TODO-QSP: dynamic text: There is a branch of the communications giant <a href="exec: minut += 1 & gt 'sh...
  scene.text('There is a branch of the communications giant <a href="exec: minut += 1 & gt \'shop\', \'megafon\'">MegaFon</a>.');
  scene.text('A <a href="exec: gs \'adverts_manager\', \'start\'">Public notice board</a>, where you can check various private and official advertisements, is sitting on a nearby wall.');
  // TODO-QSP: dynamic text: <br>Most of the space in the supermarket is taken up by the <a href="exec: minut...
  scene.text('<br>Most of the space in the supermarket is taken up by the <a href="exec: minut += 1 & gt \'shop\', \'grocery\'">grocery department</a>, but the store has many smaller departments as well.');
  // TODO-QSP: dynamic text: These include <a href="exec: minut += 1 & gt 'shop', 'cosmetics'">cosmetics</a>,...
  scene.text('These include <a href="exec: minut += 1 & gt \'shop\', \'cosmetics\'">cosmetics</a>, <a href="exec: minut += 1 & gt \'shop\', \'hardware\'">hardware</a>, <a href="exec: minut += 1 & gt \'shop\', \'clothing\'">clothing</a> and <a href="exec: minut += 1 & gt \'shop\', \'tech\'">household appliances</a>. Not far from the entrance is a <a href="exec: minut += 1 & gt \'shop\', \'icecream\'">counter selling ice cream</a>.');
  qspCall(s, 'stat', '');
  qspCall(s, 'family_schedule', '');
  if (((s as any).loc_bak ?? 0) === 'pav_commercial') {
    if (((s as any).locat ?? 0)?.['Anya'] === 7) {
      // TODO-QSP: dynamic text: Your sister <a href="exec: minut += 1 & gt 'shop', 'Anya'">Anya</a> is sitting a...
      scene.text('Your sister <a href="exec: minut += 1 & gt \'shop\', \'Anya\'">Anya</a> is sitting at the cash register.');
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
        scene.text('You notice Dima nearby and are frozen with fear. You want to run, but your legs won\'t respond.');
        scene.text('Your heart thumps in your chest, your vision narrows and you feel faint.');
        scene.text('You meet the same Dima whose friend fucked and abused you. Dima grins confidently. "Hello there…"');
        scene.actions([
          { label: 'Pass out', goto: ['event', 'scoreslut1'] },
          { label: 'Hello', handler: (st: GameState) => {
    scene.text('"Come with me. My wife\'s away…" he says with a grin.');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
      ]);
    }
    scene.actions([
      { label: 'I deserve this', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img('images/locations/city/residential/street/sex/gostdt2.jpg');
      scene.text('Dima takes you to his house and orders you to lie across the sofa. You get into position and he calls you a bitch before he starts fucking you in the mouth.');
      scene.text('Dima finally finishes in your mouth. You obediently swallow and lick the remnants of sperm off his cock.');
      qspCall(s, 'arousal', 'bj', 10, 'sub', 'deepthroat', 'humiliation');
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'cum_call', 'mouth_swallow', 'A169', 1);
    } else {
      qspCall(s, 'pain', '', 6, 'asscheeks', 'slap');
      (s as any).spank = ((s as any).spank ?? 0) + (1);
      scene.img('images/locations/city/residential/street/sex/gostanal2.jpg');
      scene.text('Dima brings you to his house and begins to kiss and undress you in the hall. Once you\'re naked, he takes you to the bathroom.');
      scene.text('He unscrews the showerhead and shoves the hose in your ass. You feel the rush of water quickly filling you before Dima sits you on the toilet. After the rough enema, he bends you over and inserts his dick into your ass.');
      scene.text('He fucks and slaps your ass for a few minutes before he moans and you feel a warmth filling your ass.');
      qspCall(s, 'arousal', 'anal', 30, 'sub', 'rough', 'humiliation');
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'cum_call', 'anus', 'A169', 1);
    }
    qspCall(s, 'stat', '');
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
  scene.text('<br>The store is crowded with shoppers.');
  if (((s as any).TorgPredZ ?? 0) > 0) {
    if ((((s as any).loc_bak ?? 0) === 'city_residential'  &&  ((s as any).StreetShopTPday ?? 0) !== ((s as any).daystart ?? 0))  ||  (((s as any).loc_bak ?? 0) === 'city_industrial'  &&  ((s as any).nordShopTPday ?? 0) !== ((s as any).daystart ?? 0))  ||  (((s as any).loc_bak ?? 0) === 'city_mall'  &&  ((s as any).downShopTPday ?? 0) !== ((s as any).daystart ?? 0))) {
      scene.actions([
        { label: 'Promote products', handler: (st: GameState) => {
    if (((s as any).loc_bak ?? 0) === 'city_residential') {
      (s as any).StreetShopTPday = ((s as any).daystart ?? 0);
    }
    if (((s as any).loc_bak ?? 0) === 'city_industrial') {
      (s as any).nordShopTPday = ((s as any).daystart ?? 0);
    }
    if (((s as any).loc_bak ?? 0) === 'city_mall') {
      (s as any).downShopTPday = ((s as any).daystart ?? 0);
    }
    (s as any).mtprand = Math.floor(Math.random() * 91) + 40;
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).mtprand ?? 0));
    (s as any).TorgPredZ = ((s as any).TorgPredZ ?? 0) - (1);
    (s as any).TorgPredZV = ((s as any).TorgPredZV ?? 0) + (1);
    qspCall(s, 'stat', '');
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
  return;
  scene.actions([
    { label: 'Leave the store', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'item_cart', 'shopping_var_clear');
    dynamicGoto(st, 'loc_bak');
  } },
  ]);
  scene.build();
}

function enterATM(s: GameState, scene: SceneBuilder): void {
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
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'bank', 'deposit_cash', qspFunc(s, 'money', 'price', 100));
    qspCall(s, 'stat', '');
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
        (s as any).karta = ((s as any).karta ?? 0) - (1000);
        (s as any).money = ((s as any).money ?? 0) + (1000);
        qspCall(s, 'bank', 'set_withdraw_text', 1000);
        qspCall(s, 'stat', '');
        scene.text('"Is there anything else I can do for you?"');
        scene.actions([
          { label: 'Withdraw  [+$func(\'money\', \'format\', 1000) + \' from ...]' }, // TODO-QSP: empty action body
          { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop', 'main'] },
        ]);
      }
      scene.actions([
        { label: 'Withdraw money from the ATM', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'bank', 'withdraw_cash', 0);
    qspCall(s, 'stat', '');
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'main':
      enterMain(s, scene);
      break;
    case 'ATM':
      enterATM(s, scene);
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
