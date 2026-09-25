import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'add_types') {
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('ears'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'ears');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('nose'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nose');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('brow'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'brow');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('lip'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'lip');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('tongue'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'tongue');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('navel'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'navel');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('nipples'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nipples');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('pussy'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'pussy');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_exceptions') {
    return;
  }
  return;
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'add') {
    qspCall(s, 'piercing_attributes', '$ARGS[2]', ((s as any).locArgs?.[3] ?? 0));
    if ((!((s as any).PirQuality ?? 0))) {
      return;
    }
    qspCall(s, 'shop_utils', 'sorted', 'add_to_number', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_quality', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).PirQuality ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_price', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).PirPrice ?? 0));
    return;
  }
  return;
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'grid_shop') {
    if (String((s as any).locArgs?.[2] ?? '') === 'header') {
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'main') {
      qspCall(s, 'piercing_attributes', '$ARGS[4]', ((s as any).locArgs?.[5] ?? 0));
      scene.img(`${qspFunc(s, 'piercing_management', ((s as any).locArgs?.[4] ?? '') + '_image', ((s as any).locArgs?.[5] ?? ''))}`);
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'footer') {
      return;
    }
    return;
  }
  return;
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['link'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['number'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount'] = ((s as any).locArgs?.[4] ?? 0);
  qspCall(s, 'piercing_attributes', '$shop_utils_view[\'type\']', (((s as any).shop_utils_view ?? 0)?.['number']));
  scene.img(`${qspFunc(s, 'piercing_management', (((s as any).shop_utils_view ?? 0)?.['type'] ?? '') + '_image', (((s as any).shop_utils_view ?? 0)?.['number'] ?? ''))}`);
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop') {
    qspGoto(s, 'piercing_view', 'view_item_shop');
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
  return;
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'piercing_management', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You already own this piercing.');
    scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
    return;
  }
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount_total'] = (((s as any).shop_utils_view ?? {})?.['discount'] ?? 0) + qspFunc(s, 'shop_utils', 'get_discount', (((s as any).shop_utils_view ?? 0)?.['type']) + '_piercings', (((s as any).shop_utils_view ?? 0)?.['number']));
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['base_price'] = ((s as any).PirPrice ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['base_price'] ?? 0) * Math.max(0, 100 - (((s as any).shop_utils_view ?? {})?.['discount_total'] ?? 0)) / 100;
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['price'] ?? 0) / 50 * 50;
  if (qspFunc(s, 'piercing_management', 'is_pierced', ((s as any).shop_utils_view ?? 0)?.['type']) === 0) {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = ((s as any).shop_utils_view['price'] ?? 0) + (((s as any).PirFirst ?? 0));
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['base_price'] = ((s as any).shop_utils_view['base_price'] ?? 0) + (((s as any).PirFirst ?? 0));
    if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
      ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['price']));
    } else {
      ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['base_price']))) + ' <b>' + qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['price'])) + '</b>';
      scene.text('Now ' + (((s as any).shop_utils_view ?? 0)?.['discount_total'] ?? '') + '% off' + ((((s as any).shop_utils_view ?? 0)?.['discount_total'] <= 10) ? ('') : ('!')));
    }
    scene.text('Price: ' + (((s as any).shop_utils_view ?? 0)?.['price_string'] ?? ''));
    if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
      scene.text(`You cannot afford to get your ${(((s as any).shop_utils_view ?? 0)?.['type'] ?? '')} pierced with this piercing.`);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Get your ' + String((((s as any).shop_utils_view ?? 0)?.['type'] ?? '') ?? '') + ' pierced and buy this piercing (0:05, ' + String((((s as any).shop_utils_view ?? 0)?.['price_string'] ?? '') ?? '') + ')', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img(`${qspFunc(s, 'piercing_management', (((st as any).shop_utils_view ?? 0)?.['type'] ?? '') + '_image', (((st as any).shop_utils_view ?? 0)?.['number'] ?? ''))}`);
    scene.text(`The tattooist disinfects the area, pierces your ${(((st as any).shop_utils_view ?? 0)?.['type'] ?? '')} and inserts your chosen piercing.`);
    qspCall(st, 'money', 'pay', (((st as any).shop_utils_view ?? 0)?.['price']));
    qspCall(st, 'piercing_management', 'add', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspCall(st, 'piercing_management', 'count');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
      ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['price']));
    } else {
      ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['base_price']))) + ' <b>' + qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['price'])) + '</b>';
      scene.text('Now ' + (((s as any).shop_utils_view ?? 0)?.['discount_total'] ?? '') + '% off' + ((((s as any).shop_utils_view ?? 0)?.['discount_total'] <= 10) ? ('') : ('!')));
    }
    scene.text('Price: ' + (((s as any).shop_utils_view ?? 0)?.['price_string'] ?? ''));
    if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
      scene.text('You don\'t have enough money for this piercing.');
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Buy (' + String((((s as any).shop_utils_view ?? 0)?.['price_string'] ?? '') ?? '') + ')', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', (((st as any).shop_utils_view ?? 0)?.['price']));
    qspCall(st, 'piercing_management', 'add', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspCall(st, 'piercing_management', 'count');
    qspCall(st, 'stat', '');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'sorted':
      enterSorted(s, scene);
      break;
    case 'display':
      enterDisplay(s, scene);
      break;
    case 'view_item':
      enterViewItem(s, scene);
      break;
    case 'view_item_shop':
      enterViewItemShop(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const piercing_view: LocationDef = {
  name: 'piercing_view',
  title: 'You already own this piercing.',
  region: 'other',
  enter: enter,
};
