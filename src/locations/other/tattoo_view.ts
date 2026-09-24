import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'add_types') {
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('ankle'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'ankle');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('arm'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'arm');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('ass'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'ass');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('back'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'back');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('belly'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'belly');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('breast'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'breast');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('chest'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'chest');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('face'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'face');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('hand'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'hand');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('leg'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'leg');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('lip'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'lip');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('neck'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'neck');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('pussy'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'pussy');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('shoulder'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'shoulder');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('side'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'side');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('tramp'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'tramp');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('under'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'under');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('wrist'))) + 1)) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'wrist');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_exceptions') {
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'add') {
    qspCall(s, 'tattoo_attributes', '$ARGS[2]', ((s as any).locArgs?.[3] ?? 0));
    if ((!((s as any).TatQuality ?? 0))) {
      // TODO-QSP: exit
    }
    qspCall(s, 'shop_utils', 'sorted', 'add_to_number', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_quality', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).TatQuality ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_price', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).TatPrice ?? 0));
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'grid_shop') {
    if (String((s as any).locArgs?.[2] ?? '') === 'header') {
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'main') {
      qspCall(s, 'tattoo_attributes', '$ARGS[4]', ((s as any).locArgs?.[5] ?? 0));
      scene.img(`${qspFunc(s, 'tattoo_management', ((s as any).locArgs?.[4] ?? '') + '_image', ((s as any).locArgs?.[5] ?? ''))}`);
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'footer') {
      return;
    }
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['link'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['number'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount'] = ((s as any).locArgs?.[4] ?? 0);
  qspCall(s, 'tattoo_attributes', '$shop_utils_view[\'type\']', (((s as any).shop_utils_view ?? 0)?.['number']));
  scene.img(`${qspFunc(s, 'tattoo_management', (((s as any).shop_utils_view ?? 0)?.['type'] ?? '') + '_image', (((s as any).shop_utils_view ?? 0)?.['number'] ?? ''))}`);
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop') {
    qspGoto(s, 'tattoo_view', 'view_item_shop');
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount_total'] = (((s as any).shop_utils_view ?? {})?.['discount'] ?? 0) + qspFunc(s, 'shop_utils', 'get_discount', (((s as any).shop_utils_view ?? 0)?.['type']) + '_tattoos', (((s as any).shop_utils_view ?? 0)?.['number']));
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['base_price'] = ((s as any).TatPrice ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['base_price'] ?? 0) * Math.max(0, 100 - (((s as any).shop_utils_view ?? {})?.['discount_total'] ?? 0)) / 100;
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['price'] ?? 0) / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['price']));
  } else {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['base_price']))) + ' <b>' + qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['price'])) + '</b>';
    // TODO-QSP: 'Now ' + shop_utils_view['discount_total'] + '% off' + iif(shop_utils_view['discount_total'] <= 10, ...
  }
  // TODO-QSP: 'Price: ' + $shop_utils_view['price_string']
  if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
    scene.text('You cannot afford this tattoo.');
    scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
    return;
  }
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Get this tattoo (' + String((((s as any).shop_utils_view ?? 0)?.['price_string'] ?? '') ?? '') + ')', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'money', 'pay', (((st as any).shop_utils_view ?? 0)?.['price']));
    qspCall(st, 'tattoo_management', 'add', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspCall(st, 'tattoo_management', 'count');
    qspCall(st, 'stat', '');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
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

export const tattoo_view: LocationDef = {
  name: 'tattoo_view',
  title: 'You cannot afford this tattoo.',
  region: 'other',
  enter: enter,
};
