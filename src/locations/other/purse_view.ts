import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_home_filters') {
    // TODO-QSP: gs 'shop_utils', 'filter_builder', 'init', 'purse_view', 'view_grid', $shop_display['link']
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_shop_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_price_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_discount_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  return;
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add_types') {
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'bomba') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'coco') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'coco');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'flamingos') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'flamingos');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'nerdvana') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana');
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
    // TODO-QSP: gs 'purse_attributes', $ARGS[2], ARGS[3]
    if ((!((s as any).PurseQuality ?? 0))) {
      // TODO-QSP: exit
    }
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $ARGS[2], ARGS[3], ARGS[4]
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_quality', $ARGS[2], ARGS[3], PurseQuality
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_price', $ARGS[2], ARGS[3], PursePrice
    return;
  }
  return;
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      qspCall(s, 'purse_view', 'filter_builder', 'setup_shop_filter');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'purse_attributes', $ARGS[4], ARGS[5]
      // TODO-QSP: *p '<a href="exec: gt ''purse_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5]>>...
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'footer') {
      return;
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_wardrobe') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      qspCall(s, 'shop_utils', 'display', 'wardrobe_storage_unwanted_header', 'view_grid');
      qspCall(s, 'purse_view', 'filter_builder', 'setup_home_filters');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'purse_attributes', $ARGS[4], ARGS[5]
      // TODO-QSP: *p '<a href="exec: gt ''purse_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5]>>...
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

function enterDisplayGridShop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  return;
  scene.build();
}

function enterDisplayGridWardrobe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'grid_wardrobe');
  return;
  scene.build();
}

function enterViewGrid(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'purse_view', 'init', 'add_types', 'all');
    if (((s as any).locArgs?.[1] ?? 0) === 'wardrobe'  ||  ((s as any).locArgs?.[1] ?? 0) === 'storage'  ||  ((s as any).locArgs?.[1] ?? 0) === 'unwanted') {
      qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    } else {
      qspCall(s, 'shop_utils', 'init', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    }
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_wardrobe');
  return;
  scene.actions([
    { label: 'Return', goto: ['shop_utils', 'return'] },
  ]);
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_utils_view ?? {})['link'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shop_utils_view ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).shop_utils_view ?? {})['number'] = qspUntranslated(s, "ARGS[3]", { location: "purse_view" });
  ((s as any).shop_utils_view ?? {})['discount'] = qspUntranslated(s, "ARGS[4]", { location: "purse_view" });
  qspCall(s, 'stat', '');
  scene.img(`${qspFunc(s, '$purse_image', '$shop_utils_view[\'type\']', ((s as any).shop_utils_view ?? 0)?.['number'])}`);
  // TODO-QSP: gs 'purse_attributes', $shop_utils_view['type'], shop_utils_view['number']
  // TODO-QSP: gs 'purses', 'descriptions', $shop_utils_view['type']
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
    // TODO-QSP: xgt 'purse_view', 'view_item_shop'
  }
  if (qspFunc(s, 'purses', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    // TODO-QSP: xgt 'purse_view', 'view_item_wearing'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    // TODO-QSP: xgt 'purse_view', 'view_item_wardrobe'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
    // TODO-QSP: xgt 'purse_view', 'view_item_storage'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
    // TODO-QSP: xgt 'purse_view', 'view_item_unwanted'
  }
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'purse_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You already own this purse.');
    return;
  }
  ((s as any).shop_utils_view ?? {})['discount_total'] = ((s as any).shop_utils_view ?? {})?.['discount'] + qspFunc(s, 'shop_utils', 'get_discount', ((s as any).shop_utils_view ?? {})?.['type'] + '_purses', ((s as any).shop_utils_view ?? 0)?.['number']);
  ((s as any).shop_utils_view ?? {})['base_price'] = ((s as any).PursePrice ?? 0);
  ((s as any).shop_utils_view ?? {})['price'] = ((s as any).shop_utils_view ?? {})?.['base_price'] * Math.max(0, 100 - ((s as any).shop_utils_view ?? {})?.['discount_total']) / 100;
  ((s as any).shop_utils_view ?? {})['price'] = ((s as any).shop_utils_view ?? {})?.['price'] / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
    ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']);
  } else {
    ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['base_price'])) + ' <b>' +  qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']) + '</b>';
    // TODO-QSP: 'Now ' + shop_utils_view['discount_total'] + '% off' + iif(shop_utils_view['discount_total'] <= 10, ...
  }
  // TODO-QSP: 'Price: ' + $shop_utils_view['price_string']
  if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
    scene.text('You cannot afford this purse.');
  } else {
    scene.actions([
      { label: 'Buy (<<$shop_utils_view[\'price_string\']>>)', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['price']
    // TODO-QSP: gs 'purses', 'add_item', $shop_utils_view['type'], shop_utils_view['number']
    if ((!((s as any).bag ?? 0))) {
      // TODO-QSP: gs 'purses', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterViewItemWearing(s: GameState, scene: SceneBuilder): void {
  scene.text('You are using this purse.');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'purse_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemWardrobe(s: GameState, scene: SceneBuilder): void {
  scene.text('This purse is in your wardrobe.');
  qspCall(s, 'purse_view', 'storage_options');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'purse_view', 'view_grid', $shop_utils_view['link']
  } },
    { label: 'Use this purse', handler: (st: GameState) => {
    // TODO-QSP: gs 'purses', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['wardrobe', 'main'] },
  ]);
  scene.build();
}

function enterViewItemStorage(s: GameState, scene: SceneBuilder): void {
  scene.text('This purse is in storage.');
  qspCall(s, 'purse_view', 'storage_options');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'purse_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemUnwanted(s: GameState, scene: SceneBuilder): void {
  scene.text('This purse is unwanted.');
  qspCall(s, 'purse_view', 'storage_options');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'purse_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'purses', 'in_wardrobe', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to wardrobe', handler: (st: GameState) => {
    // TODO-QSP: gs 'purses', 'move_to_wardrobe', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'purse_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['n...
  } },
    ]);
  }
  if (qspFunc(s, 'purses', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'purses', 'in_storage', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to storage', handler: (st: GameState) => {
    // TODO-QSP: gs 'purses', 'move_to_storage', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'purse_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['n...
  } },
    ]);
  }
  if (qspFunc(s, 'purses', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to unwanted', handler: (st: GameState) => {
    // TODO-QSP: gs 'purses', 'move_to_unwanted', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'purse_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['n...
  } },
    ]);
  }
  if (qspFunc(s, 'purses', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    // TODO-QSP: exit
  }
  // TODO-QSP: act $func('wrap', 'neg', 'Throw this purse away'):
  // TODO-QSP: gs 'purses', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
  // TODO-QSP: gt 'purse_view', 'view_grid', $shop_utils_view['link']
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'filter_builder':
      enterFilterBuilder(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    case 'sorted':
      enterSorted(s, scene);
      break;
    case 'display':
      enterDisplay(s, scene);
      break;
    case 'display_grid_shop':
      enterDisplayGridShop(s, scene);
      break;
    case 'display_grid_wardrobe':
      enterDisplayGridWardrobe(s, scene);
      break;
    case 'view_grid':
      enterViewGrid(s, scene);
      break;
    case 'view_item':
      enterViewItem(s, scene);
      break;
    case 'view_item_shop':
      enterViewItemShop(s, scene);
      break;
    case 'view_item_wearing':
      enterViewItemWearing(s, scene);
      break;
    case 'view_item_wardrobe':
      enterViewItemWardrobe(s, scene);
      break;
    case 'view_item_storage':
      enterViewItemStorage(s, scene);
      break;
    case 'view_item_unwanted':
      enterViewItemUnwanted(s, scene);
      break;
    case 'storage_options':
      enterStorageOptions(s, scene);
      break;
    default:
      enterFilterBuilder(s, scene);
      break;
  }
}

export const purse_view: LocationDef = {
  name: 'purse_view',
  title: 'Throw this purse away',
  region: 'other',
  enter: enter,
};
