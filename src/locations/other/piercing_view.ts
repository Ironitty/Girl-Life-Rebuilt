import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add_types') {
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).indexOf(('ears'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'ears');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).indexOf(('nose'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nose');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).indexOf(('brow'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'brow');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).indexOf(('lip'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'lip');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).indexOf(('tongue'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'tongue');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).indexOf(('navel'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'navel');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).indexOf(('nipples'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nipples');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).indexOf(('pussy'))) + 1) {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'pussy');
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_exceptions') {
    return;
  }
  return;
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add') {
    // TODO-QSP: gs 'piercing_attributes', $ARGS[2], ARGS[3]
    if ((!((s as any).PirQuality ?? 0))) {
      // TODO-QSP: exit
    }
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $ARGS[2], ARGS[3], ARGS[4]
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_quality', $ARGS[2], ARGS[3], PirQuality
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_price', $ARGS[2], ARGS[3], PirPrice
    return;
  }
  return;
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'piercing_attributes', $ARGS[4], ARGS[5]
      // TODO-QSP: *p '<a href="exec: gt ''piercing_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5...
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'footer') {
      return;
    }
    return;
  }
  return;
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_utils_view ?? {})['link'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shop_utils_view ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).shop_utils_view ?? {})['number'] = qspUntranslated(s, "ARGS[3]", { location: "piercing_view" });
  ((s as any).shop_utils_view ?? {})['discount'] = qspUntranslated(s, "ARGS[4]", { location: "piercing_view" });
  // TODO-QSP: gs 'piercing_attributes', $shop_utils_view['type'], shop_utils_view['number']
  scene.img(`${qspFunc(s, '\'piercing_management\'', '$shop_utils_view[\'type\'] + \'_image\'', ((s as any).shop_utils_view ?? 0)?.['number'])}`);
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop') {
    scene.actions([{ label: 'Continue', goto: ['piercing_view', 'view_item_shop'] }]);
  }
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'piercing_management', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You already own this piercing.');
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  ((s as any).shop_utils_view ?? {})['discount_total'] = ((s as any).shop_utils_view ?? {})?.['discount'] + qspFunc(s, 'shop_utils', 'get_discount', ((s as any).shop_utils_view ?? {})?.['type'] + '_piercings', ((s as any).shop_utils_view ?? 0)?.['number']);
  ((s as any).shop_utils_view ?? {})['base_price'] = ((s as any).PirPrice ?? 0);
  ((s as any).shop_utils_view ?? {})['price'] = ((s as any).shop_utils_view ?? {})?.['base_price'] * Math.max(0, 100 - ((s as any).shop_utils_view ?? {})?.['discount_total']) / 100;
  ((s as any).shop_utils_view ?? {})['price'] = ((s as any).shop_utils_view ?? {})?.['price'] / 50 * 50;
  if (qspFunc(s, 'piercing_management', 'is_pierced', ((s as any).shop_utils_view ?? 0)?.['type']) === 0) {
    ((s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})['price'] ?? 0) + (((s as any).PirFirst ?? 0));
    ((s as any).shop_utils_view ?? {})['base_price'] = (((s as any).shop_utils_view ?? {})['base_price'] ?? 0) + (((s as any).PirFirst ?? 0));
    if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
      ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']);
    } else {
      ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['base_price'])) + ' <b>' +  qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']) + '</b>';
      // TODO-QSP: 'Now ' + shop_utils_view['discount_total'] + '% off' + iif(shop_utils_view['discount_total'] <= 10, ...
    }
    // TODO-QSP: 'Price: ' + $shop_utils_view['price_string']
    if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
      // TODO-QSP: dynamic text: You cannot afford to get your <<$shop_utils_view['type']>> pierced with this pie...
      scene.text(`You cannot afford to get your ${((s as any).shop_utils_view ?? 0)?.['type']} pierced with this piercing.`);
    } else {
      scene.actions([
        { label: 'Get your <<$shop_utils_view[\'type\']>> pierced and buy this piercing (0:05, <<$shop_utils_view[\'price_string\']>>)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img(`${qspFunc(s, '\'piercing_management\'', '$shop_utils_view[\'type\'] + \'_image\'', ((s as any).shop_utils_view ?? 0)?.['number'])}`);
    // TODO-QSP: dynamic text: The tattooist disinfects the area, pierces your <<$shop_utils_view['type']>> and...
    scene.text(`The tattooist disinfects the area, pierces your ${((s as any).shop_utils_view ?? 0)?.['type']} and inserts your chosen piercing.`);
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['price']
    // TODO-QSP: gs 'piercing_management', 'add', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'piercing_management', 'count');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
      ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']);
    } else {
      ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['base_price'])) + ' <b>' +  qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']) + '</b>';
      // TODO-QSP: 'Now ' + shop_utils_view['discount_total'] + '% off' + iif(shop_utils_view['discount_total'] <= 10, ...
    }
    // TODO-QSP: 'Price: ' + $shop_utils_view['price_string']
    if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
      scene.text('You don\'t have enough money for this piercing.');
    } else {
      scene.actions([
        { label: 'Buy (<<$shop_utils_view[\'price_string\']>>)', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['price']
    // TODO-QSP: gs 'piercing_management', 'add', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'piercing_management', 'count');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  }
  return;
  scene.actions([
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
      enterInit(s, scene);
      break;
  }
}

export const piercing_view: LocationDef = {
  name: 'piercing_view',
  title: 'You already own this piercing.',
  region: 'other',
  enter: enter,
};
