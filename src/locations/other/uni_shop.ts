import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'uni_shop';
  (s as any).loc_arg = 'start';
  (s as any).menu_loc = 'uni_shop';
  (s as any).menu_arg = 'start';
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = undefined;
  (s as any).shoplocation = undefined;
  qspCall(s, 'themes', 'indoors');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) >= 23) {
    scene.text('The store is currently closed.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_island', ''] },
]);
    return;
  }
  scene.text('In the store is an <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027uni_shop\u0027, \u0027atm\u0027); return false;">ATM</a>, from which you can withdraw money and deposit money into your bank account.');
  scene.actions([
    { label: 'Browse the aisles', goto: ['uni_shop', 'cart'] },
    { label: 'Leave the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_island', ''] },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'uni_shop';
  (s as any).loc_arg = 'start';
  (s as any).menu_loc = 'uni_shop';
  (s as any).menu_arg = 'start';
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = undefined;
  (s as any).shoplocation = undefined;
  qspCall(s, 'themes', 'indoors');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) >= 23) {
    scene.text('The store is currently closed.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_island', ''] },
]);
    return;
  }
  scene.text('In the store is an <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027uni_shop\u0027, \u0027atm\u0027); return false;">ATM</a>, from which you can withdraw money and deposit money into your bank account.');
  scene.actions([
    { label: 'Browse the aisles', goto: ['uni_shop', 'cart'] },
    { label: 'Leave the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_island', ''] },
  ]);
  scene.build();
}

function enterAtm(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>ATM</b></center>');
  scene.img('images/locations/shared/store/atm.jpg');
  if ((!((s as any).bankAccount ?? 0))) {
    scene.text('You don\'t have a bank account yet!');
  } else {
    if (((s as any).karta ?? 0) >= ((s as any).bankDebtLimit ?? 0)) {
      scene.text(`You have ${qspFunc(s, 'money', 'format_balance', 'bank')} in your account.`);
      scene.text('You have an overdraft limit of ' + qspFunc(s, 'wrap', 'accent', '' + qspFunc(s, 'money', 'format', ((s as any).bankDebtLimit ?? '')) + '!'));
    } else {
      scene.text('You are overdrawn by ' + qspFunc(s, 'wrap', 'neg', '' + qspFunc(s, 'money', ((s as any).format ?? ''), ((s as any).bankDebtLimit ?? '') - ((s as any).karta ?? '')) + ' <b>₽</b>.'));
      scene.text('You have a remaining credit limit of ' + qspFunc(s, 'wrap', 'accent', '' + qspFunc(s, 'money', 'format', ((s as any).karta ?? '')) + '!'));
    }
    scene.text(`<br>ATM Deposit Fee: ${qspFunc(s, 'money', 'string_price', 100)}`);
    if (((s as any).money ?? 0) > 0) {
      scene.actions([
        { label: 'Deposit money into your bank account', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'bank', 'deposit_cash', qspFunc(s, 'money', 'price', 100));
    qspCall(st, 'stat', '');
    scene.text('"Is there anything else I can do for you?"');
    scene.actions([
      { label: 'Move away', goto: ['uni_shop', 'start'] },
    ]);
  } },
      ]);
    }
    if (((s as any).karta ?? 0) <= 0) {
      scene.text('You have maxed out your overdraft.');
    } else {
      if (((s as any).karta ?? 0) >= 1000) {
        scene.actions([
          { label: 'Withdraw 1000<b>₽</b> from the ATM', handler: (st: GameState) => {
    (st as any).karta = ((st as any).karta ?? 0) - (1000);
    (st as any).money = ((st as any).money ?? 0) + (1000);
    qspCall(st, 'bank', 'set_withdraw_text', 1000);
    qspCall(st, 'stat', '');
    scene.text('"Is there anything else I can do for you?"');
    scene.actions([
      { label: 'Move away', goto: ['uni_shop', 'start'] },
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
      { label: 'Move away', goto: ['uni_shop', 'start'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Move away', goto: ['uni_shop', 'start'] },
  ]);
  scene.build();
}

function enterCart(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_s = 'uni_shop';
  (s as any).args_s = 'cart';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'uni');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/unimarket.jpg');
  scene.actions([
    { label: 'Exit shopping cart', goto: ['uni_shop', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'atm':
      enterAtm(s, scene);
      break;
    case 'cart':
      enterCart(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_shop: LocationDef = {
  name: 'uni_shop',
  title: 'ATM',
  region: 'other',
  locationType: 'public_indoors',
  description: ['The store is currently closed.'],
  enter: enter,
};
