import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 16) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/kiosk/kiosk21.jpg');
    scene.text('It is currently very busy. It looks like you\'ll have to wait to get to the counter.');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.actions([
        { label: 'Flash your tits and pussy to jump the queue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'flash', 'full', 'outdoors', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the counter', goto: ['kiosk', 'counter'] },
    ]);
  } },
      ]);
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
      scene.actions([
        { label: 'Flash your pussy to jump the queue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'flash', 'pussy', 'outdoors', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the counter', goto: ['kiosk', 'counter'] },
    ]);
  } },
      ]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Flash your tits to jump the queue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'flash', 'tits', 'outdoors', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the counter', goto: ['kiosk', 'counter'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'prevLoc');
  } },
      { label: 'Wait in line (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['kiosk', 'counter'] },
    ]);
  } else {
    qspGoto(s, 'kiosk', 'counter');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCounter(s: GameState, scene: SceneBuilder): void {
  (s as any).kioskloc = 'counter';
  (s as any).args_s = 'counter';
  (s as any).loc_s = 'kiosk';
  (s as any).menu_loc = 'kiosk';
  (s as any).menu_arg = 'counter';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'outdoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'kiosk');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/kiosk/kiosk123.jpg');
  if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
    // TODO-QSP: dynamic text: <center><table><TR BGCOLOR="' + $theme_hex['table_bg'] + '"><td><b></b>You don''...
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
      { label: 'Buy a snack ( [100₽])...]', handler: (st: GameState) => {
    // TODO-QSP: 05)':
  } },
      { label: 'Return', goto: ['kiosk', 'start'] },
    ]);
  }
  // TODO-QSP: end
  if (qspFunc(s, 'money', 'can_afford', 40) === 0) {
    // TODO-QSP: dynamic text: <center><table><TR BGCOLOR="' + $theme_hex['table_bg'] + '"><td><b></b>You don''...
    scene.text('<center><table><TR BGCOLOR="\' + $theme_hex[\'table_bg\'] + \'"><td><b></b>You don\'t have enough money to buy water.</td></tr></table></center>');
  } else {
    (s as any).frost = 1;
    if (((s as any).alko ?? 0) > 0) {
      (s as any).alko = ((s as any).alko ?? 0) - (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'pay', 40);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (4);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/brothel/barorderwater.jpg');
    // TODO-QSP: dynamic text: <center><table><TR BGCOLOR="' + $theme_hex['table_bg'] + '"><td><b></b>You enjoy...
    scene.text('<center><table><TR BGCOLOR="\' + $theme_hex[\'table_bg\'] + \'"><td><b></b>You enjoy a drink of water</td></tr></table></center>');
    scene.actions([
      { label: 'Buy some water ( [40₽]) ...]', handler: (st: GameState) => {
    // TODO-QSP: 05)':
  } },
      { label: 'Return', goto: ['kiosk', 'start'] },
    ]);
  }
  // TODO-QSP: end
  if (qspFunc(s, 'money', 'can_afford', 100) === 0  &&  ((s as any).mc_inventory ?? 0)?.['newspaper'] === 0) {
    // TODO-QSP: dynamic text: <center><table><TR BGCOLOR="' + $theme_hex['table_bg'] + '"><td><b></b>You don''...
    scene.text('<center><table><TR BGCOLOR="\' + $theme_hex[\'table_bg\'] + \'"><td><b></b>You don\'t have enough money to buy a newspaper.</td></tr></table></center>');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['newspaper'] === 1) {
      // TODO-QSP: dynamic text: <center><table><TR BGCOLOR="' + $theme_hex['table_bg'] + '"><td><b></b>You alrea...
      scene.text('<center><table><TR BGCOLOR="\' + $theme_hex[\'table_bg\'] + \'"><td><b></b>You already own today\'s newspaper.</td></tr></table></center>');
    } else {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['newspaper'] = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 100);
      qspCall(s, 'stat', '');
      scene.img('images/system/image_needed.png');
      // TODO-QSP: dynamic text: <center><table><TR BGCOLOR="' + $theme_hex['table_bg'] + '"><td><b></b>You buy t...
      scene.text('<center><table><TR BGCOLOR="\' + $theme_hex[\'table_bg\'] + \'"><td><b></b>You buy the weekly newspaper</td></tr></table></center>');
      scene.actions([
        { label: 'Buy a newspaper ( [100₽])...]', handler: (st: GameState) => {
    // TODO-QSP: 05)':
  } },
        { label: 'Return', goto: ['kiosk', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'prevLoc');
  } },
    { label: 'View phone themes', handler: (st: GameState) => {
    // TODO-QSP: $kioskloc = ''
  }, goto: ['kiosk', 'themes'] },
  ]);
  scene.build();
}

function enterThemes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/kiosk/kiosk123.jpg');
  scene.img('images/locations/city/shared/kiosk/ruch.jpg');
  // TODO-QSP: dynamic text: All themes cost ' + $func('money', 'string_price', 500) + '.
  scene.text('All themes cost 500₽.');
  if (qspFunc(s, 'money', 'can_afford', 500)) {
    (s as any).i = 1;
    // TODO-QSP: :phonethemeloop
    if (((s as any).i ?? 0) === 1) {
      (s as any).phoneNameTemp = 'Bimbo';
    }
    if (((s as any).i ?? 0) === 2) {
      (s as any).phoneNameTemp = 'Aluminus';
    }
    if (((s as any).i ?? 0) === 3) {
      (s as any).phoneNameTemp = 'Bottlecapped';
    }
    if (((s as any).i ?? 0) === 4) {
      (s as any).phoneNameTemp = 'Galactic';
    }
    if (((s as any).i ?? 0) === 5) {
      (s as any).phoneNameTemp = 'Vectored';
    }
    if (((s as any).i ?? 0) === 6) {
      (s as any).phoneNameTemp = 'Veneer';
    }
    if (((s as any).i ?? 0) === 7) {
      (s as any).phoneNameTemp = 'Voidwalker';
    }
    if (((s as any).i ?? 0) === 8) {
      (s as any).phoneNameTemp = 'Voidwalker Red';
    }
    if (((s as any).i ?? 0) === 9) {
      (s as any).phoneNameTemp = 'Voidwalker Toxic';
    }
    if (((s as any).i ?? 0) === 10) {
      (s as any).phoneNameTemp = 'Gopnik';
    }
    if (((s as any).i ?? 0) === 11) {
      (s as any).phoneNameTemp = 'Sports';
    }
    if (((s as any).i ?? 0) === 12) {
      (s as any).phoneNameTemp = 'Succubus';
    }
    if (((s as any).i ?? 0) === 13) {
      (s as any).phoneNameTemp = 'Woodshop';
    }
    if (((s as any).phonetheme ?? 0)?.[String((s as any).i ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <a href="exec: VIEW ''images/system/phone/previews/<<$lcase($phoneNameTemp)>>.pn...
      scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: VIEW /u0027images/system/phone/previews/${(String(((s as any).phoneNameTemp || '')).toLowerCase())}.png/u0027 */ return s; }); return false;">Preview</a> <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: phonetheme[${((s as any).i || '')}] = 1 */ return s; }); window.__gameStore.getState().doGoto(/u0027money/u0027, /u0027pay/u0027, String(window.__gameStore.getState().500 ?? /u0027/u0027)); return false;">Buy</a> the <b>${((s as any).phoneNameTemp || '')}</b> theme.`);
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < 14) {
      // TODO-QSP: jump 'phonethemeloop'
    }
  } else {
    // TODO-QSP: dynamic text: <TR BGCOLOR="' + $theme_hex['table_bg'] + '"><td><b></b>You don''t have enough m...
    scene.text('<TR BGCOLOR="\' + $theme_hex[\'table_bg\'] + \'"><td><b></b>You don\'t have enough money to buy a phone theme.</td></tr>');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['kiosk', 'counter'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kioskloc ?? 0) === 'counter'  &&  ((s as any).args ?? 0)[0] !== 'counter') {
    qspGoto(s, 'kiosk', 'counter');
  }
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'counter':
      enterCounter(s, scene);
      break;
    case 'themes':
      enterThemes(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kiosk: LocationDef = {
  name: 'kiosk',
  title: 'It is currently very busy. It looks like you\'ll have to wait',
  region: 'other',
  enter: enter,
};
