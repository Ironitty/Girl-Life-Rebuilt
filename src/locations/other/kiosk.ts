import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 16) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/kiosk/kiosk21.jpg');
    scene.text('It is currently very busy. It looks like you\'ll have to wait to get to the counter.');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.actions([
        { label: 'Flash your tits and pussy to jump the queue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'flash', 'full', 'outdoors', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the counter', goto: ['kiosk', 'counter'] },
    ]);
  } },
      ]);
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
      scene.actions([
        { label: 'Flash your pussy to jump the queue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'flash', 'pussy', 'outdoors', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the counter', goto: ['kiosk', 'counter'] },
    ]);
  } },
      ]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Flash your tits to jump the queue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'flash', 'tits', 'outdoors', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the counter', goto: ['kiosk', 'counter'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'loc');
  } },
      { label: 'Wait in line (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['kiosk', 'counter'] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['kiosk', 'counter'] }]);
  }
  scene.build();
}

function enterCounter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'outdoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'kiosk');
  qspCall(s, 'stat', '');
  if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
    // TODO-QSP: dynamic text: <center><table><TR BGCOLOR="' + $theme_hex['table_bg'] + '"><td><b></b>You don't...
    scene.text('<center><table><TR BGCOLOR="\' + $theme_hex[\'table_bg\'] + \'"><td><b></b>You don\'t have enough money to buy a snack.</td></tr></table></center>');
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'pay', 100);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (6);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/food.jpg');
    // TODO-QSP: dynamic text: <center><table><TR BGCOLOR="' + $theme_hex['table_bg'] + '"><td><b></b>You enjoy...
    scene.text('<center><table><TR BGCOLOR="\' + $theme_hex[\'table_bg\'] + \'"><td><b></b>You enjoy a small and tasty, but somewhat fattening, snack.</td></tr></table></center>');
    scene.actions([
      { label: 'Buy a snack ( [+$func(\'money\', \'string_price\', 100) + \')...]', handler: (st: GameState) => {
    // TODO-QSP: 05)':
  } },
      { label: 'Return', goto: ['kiosk', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'counter':
      enterCounter(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const kiosk: LocationDef = {
  name: 'kiosk',
  title: 'It is currently very busy. It looks like you\'ll have to wait',
  region: 'other',
  description: ['It is currently very busy. It looks like you\'ll have to wait to get to the counter.'],
  enter: enter,
};
