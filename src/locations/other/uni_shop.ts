import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAtm(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>ATM</b></center>');
  scene.img('images/locations/shared/store/atm.jpg');
  if (((s as any).bankAccount ?? 0) === 0) {
    scene.text('You don\'t have a bank account yet!');
  } else {
    if (((s as any).karta ?? 0) >= ((s as any).bankDebtLimit ?? 0)) {
      // TODO-QSP: dynamic text: You have <<$func('money', 'format_balance', 'bank')>> in your account.
      scene.text(`You have ${qspFunc(s, 'money', 'format_balance', 'bank')} in your account.`);
      // TODO-QSP: 'You have an overdraft limit of ' + $func('wrap', 'accent','<<$func(''money'', ''format'', bankDebtL...
    } else {
      // TODO-QSP: 'You are overdrawn by ' + $func('wrap', 'neg', '<<$func(''money'', ''format'', bankDebtLimit - karta...
      // TODO-QSP: 'You have a remaining credit limit of ' + $func('wrap', 'accent','<<$func(''money'', ''format'', kar...
    }
    // TODO-QSP: dynamic text: <br>ATM Deposit Fee: <<$func('money', 'string_price', 100)>>
    scene.text(`<br>ATM Deposit Fee: ${qspFunc(s, 'money', 'string_price', 100)}`);
    if (((s as any).money ?? 0) > 0) {
      scene.actions([
        { label: 'Deposit money into your bank account', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'bank', 'deposit_cash', qspFunc(s, 'money', 'price', 100));
    qspCall(s, 'stat', '');
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
    (s as any).karta = ((s as any).karta ?? 0) - (1000);
    (s as any).money = ((s as any).money ?? 0) + (1000);
    qspCall(s, 'bank', 'set_withdraw_text', 1000);
    qspCall(s, 'stat', '');
    scene.text('"Is there anything else I can do for you?"');
    scene.actions([
      { label: 'Move away', goto: ['uni_shop', 'start'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Withdraw money from the ATM', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'bank', 'withdraw_cash', 0);
    qspCall(s, 'stat', '');
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
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'uni');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Exit shopping cart', goto: ['uni_shop', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'atm':
      enterAtm(s, scene);
      break;
    case 'cart':
      enterCart(s, scene);
      break;
    default:
      enterAtm(s, scene);
      break;
  }
}

export const uni_shop: LocationDef = {
  name: 'uni_shop',
  title: 'ATM',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You don\'t have a bank account yet!'],
  enter: enter,
};
