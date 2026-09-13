import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add_types') {
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('ankle'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'ankle');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('arm'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'arm');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('ass'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'ass');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('back'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'back');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('belly'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'belly');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('breast'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'breast');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('chest'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'chest');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('face'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'face');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('hand'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'hand');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('leg'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'leg');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('lip'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'lip');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('neck'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'neck');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('pussy'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'pussy');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('shoulder'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'shoulder');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('side'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'side');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('tramp'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'tramp');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('under'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'under');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('wrist'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'wrist');
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_exceptions') {
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add') {
    // TODO-QSP: gs 'tattoo_attributes', $ARGS[2], ARGS[3]
    if ((!((s as any).TatQuality ?? 0))) {
      // TODO-QSP: exit
    }
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $ARGS[2], ARGS[3], ARGS[4]
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_quality', $ARGS[2], ARGS[3], TatQuality
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_price', $ARGS[2], ARGS[3], TatPrice
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'tattoo_attributes', $ARGS[4], ARGS[5]
      scene.img(`${qspFunc(s, 'tattoo_management', '$ARGS[4] + \'_image', qspUntranslated(s, "ARGS[5]", { location: "tattoo_view" }))}`);
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'footer') {
      return;
    }
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).shop_utils_view) (s as any).shop_utils_view = {}; (s as any).shop_utils_view['link'] = ((s as any).locArgs?.[1] ?? 0);
  if (!(s as any).shop_utils_view) (s as any).shop_utils_view = {}; (s as any).shop_utils_view['type'] = ((s as any).locArgs?.[2] ?? 0);
  if (!(s as any).shop_utils_view) (s as any).shop_utils_view = {}; (s as any).shop_utils_view['number'] = qspUntranslated(s, "ARGS[3]", { location: "tattoo_view" });
  if (!(s as any).shop_utils_view) (s as any).shop_utils_view = {}; (s as any).shop_utils_view['discount'] = qspUntranslated(s, "ARGS[4]", { location: "tattoo_view" });
  // TODO-QSP: gs 'tattoo_attributes', $shop_utils_view['type'], shop_utils_view['number']
  scene.img(`${qspFunc(s, '\'tattoo_management\'', '$shop_utils_view[\'type\'] + \'_image\'', ((s as any).shop_utils_view ?? 0)?.['number'])}`);
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop') {
    scene.actions([{ label: 'Continue', goto: ['tattoo_view', 'view_item_shop'] }]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).shop_utils_view) (s as any).shop_utils_view = {}; (s as any).shop_utils_view['discount_total'] = ((s as any).shop_utils_view ?? {})?.['discount'] + qspFunc(s, 'shop_utils', 'get_discount', ((s as any).shop_utils_view ?? {})?.['type'] + '_tattoos', ((s as any).shop_utils_view ?? 0)?.['number']);
  if (!(s as any).shop_utils_view) (s as any).shop_utils_view = {}; (s as any).shop_utils_view['base_price'] = ((s as any).TatPrice ?? 0);
  if (!(s as any).shop_utils_view) (s as any).shop_utils_view = {}; (s as any).shop_utils_view['price'] = ((s as any).shop_utils_view ?? {})?.['base_price'] * Math.max(0, 100 - ((s as any).shop_utils_view ?? {})?.['discount_total']) / 100;
  if (!(s as any).shop_utils_view) (s as any).shop_utils_view = {}; (s as any).shop_utils_view['price'] = ((s as any).shop_utils_view ?? {})?.['price'] / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
    if (!(s as any).shop_utils_view) (s as any).shop_utils_view = {}; (s as any).shop_utils_view['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']);
  } else {
    if (!(s as any).shop_utils_view) (s as any).shop_utils_view = {}; (s as any).shop_utils_view['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['base_price'])) + ' <b>' +  qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']) + '</b>';
    // TODO-QSP: 'Now ' + shop_utils_view['discount_total'] + '% off' + iif(shop_utils_view['discount_total'] <= 10, ...
  }
  // TODO-QSP: 'Price: ' + $shop_utils_view['price_string']
  if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
    scene.text('You cannot afford this tattoo.');
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get this tattoo (<<$shop_utils_view[\'price_string\']>>)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['price']
    // TODO-QSP: gs 'tattoo_management', 'add', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'tattoo_management', 'count');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
