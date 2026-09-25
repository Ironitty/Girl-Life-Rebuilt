import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_home_filters') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', 'coat_view', 'view_grid', (((s as any).shop_display ?? 0)?.['link']));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_shop_filter') {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'add_types') {
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'bomba') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
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
    qspCall(s, 'coat_attributes', '$ARGS[2]', ((s as any).locArgs?.[3] ?? 0));
    if ((!((s as any).CoatQuality ?? 0))) {
      return;
    }
    qspCall(s, 'shop_utils', 'sorted', 'add_to_number', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_quality', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).CoatQuality ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_price', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).CoatPrice ?? 0));
    return;
  }
  return;
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'grid_shop') {
    if (String((s as any).locArgs?.[2] ?? '') === 'header') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_shop_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'main') {
      qspCall(s, 'coat_attributes', '$ARGS[4]', ((s as any).locArgs?.[5] ?? 0));
      scene.img(`${qspFunc(s, '$coat_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'footer') {
      return;
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'grid_wardrobe') {
    if (String((s as any).locArgs?.[2] ?? '') === 'header') {
      qspCall(s, 'shop_utils', 'display', 'wardrobe_storage_unwanted_header', 'view_grid');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_home_filters']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'main') {
      qspCall(s, 'coat_attributes', '$ARGS[4]', ((s as any).locArgs?.[5] ?? 0));
      scene.img(`${qspFunc(s, '$coat_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
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
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'coats', ((s as any).locArgs?.[1] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_types', 'all']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (String((s as any).locArgs?.[1] ?? '') === 'wardrobe'  ||  String((s as any).locArgs?.[1] ?? '') === 'storage'  ||  String((s as any).locArgs?.[1] ?? '') === 'unwanted') {
      qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    } else {
      qspCall(s, 'shop_utils', 'init', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    }
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  if (((s as any).coatworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove coat', handler: (st: GameState) => {
    qspCall(st, 'coats', 'remove');
    qspGoto(st, 'coat_view', 'view_grid', (((st as any).shop_display ?? {})['link']));
  } },
    ]);
  }
  qspCall(s, 'shop_utils', 'display', 'grid_wardrobe');
  scene.actions([
{ label: 'Return', goto: ['shop_utils', 'return'] },
]);
  return;
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['link'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['number'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount'] = ((s as any).locArgs?.[4] ?? 0);
  qspCall(s, 'stat', '');
  scene.img(`${qspFunc(s, '$coat_image', '', (((s as any).shop_utils_view ?? 0)?.['type'] ?? ''), (((s as any).shop_utils_view ?? 0)?.['number'] ?? ''))}`);
  qspCall(s, 'coat_attributes', '$shop_utils_view[\'type\']', (((s as any).shop_utils_view ?? 0)?.['number']));
  if (((s as any).CoatWarm ?? 0) === 1) {
    scene.text('It\'ll keep you fairly warm down to -10C.');
  } else {
    if (((s as any).CoatWarm ?? 0) === 2) {
      scene.text('It will handle temperatures down to -20C.');
    } else {
      if (((s as any).CoatWarm ?? 0) === 3) {
        scene.text('You will be nice and warm even in the depths of winter.');
      }
    }
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
    qspGoto(s, 'coat_view', 'view_item_shop');
  }
  if (qspFunc(s, 'coats', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    qspGoto(s, 'coat_view', 'view_item_wearing');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    qspGoto(s, 'coat_view', 'view_item_wardrobe');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
    qspGoto(s, 'coat_view', 'view_item_storage');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
    qspGoto(s, 'coat_view', 'view_item_unwanted');
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'coat_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You already own this item.');
    return;
  }
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount_total'] = (((s as any).shop_utils_view ?? {})?.['discount'] ?? 0) + qspFunc(s, 'shop_utils', 'get_discount', (((s as any).shop_utils_view ?? 0)?.['type']) + '_coats', (((s as any).shop_utils_view ?? 0)?.['number']));
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['base_price'] = ((s as any).CoatPrice ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['base_price'] ?? 0) * Math.max(0, 100 - (((s as any).shop_utils_view ?? {})?.['discount_total'] ?? 0)) / 100;
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['price'] ?? 0) / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['price']));
  } else {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['base_price']))) + ' <b>' + qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['price'])) + '</b>';
    scene.text('Now ' + (((s as any).shop_utils_view ?? 0)?.['discount_total'] ?? '') + '% off' + ((((s as any).shop_utils_view ?? 0)?.['discount_total'] <= 10) ? ('') : ('!')));
  }
  scene.text('Price: ' + (((s as any).shop_utils_view ?? 0)?.['price_string'] ?? ''));
  if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
    scene.text('You cannot afford this coat.');
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Buy (' + String((((s as any).shop_utils_view ?? 0)?.['price_string'] ?? '') ?? '') + ')', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', (((st as any).shop_utils_view ?? 0)?.['price']));
    qspCall(st, 'coats', 'add_item', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
  return;
  scene.build();
}

function enterViewItemWearing(s: GameState, scene: SceneBuilder): void {
  scene.text('You are wearing this coat.');
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    scene.actions([
      { label: 'Strip out of your coat', handler: (st: GameState) => {
    qspCall(st, 'coats', 'strip');
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'wardrobe', 'main');
  } },
    ]);
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'coat_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  scene.build();
}

function enterViewItemWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'coat_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
{ label: 'Wear', handler: (st: GameState) => {
    qspCall(st, 'coats', 'wear', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'wardrobe', 'main');
  } },
]);
  return;
  scene.build();
}

function enterViewItemStorage(s: GameState, scene: SceneBuilder): void {
  scene.text('This coat is in storage.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'coat_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  scene.build();
}

function enterViewItemUnwanted(s: GameState, scene: SceneBuilder): void {
  scene.text('This coat is unwanted.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'coat_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    return;
  }
  if (qspFunc(s, 'coats', 'in_wardrobe', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to wardrobe', handler: (st: GameState) => {
    qspCall(st, 'coats', 'move_to_wardrobe', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'coat_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'coats', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    return;
  }
  if (qspFunc(s, 'coats', 'in_storage', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to storage', handler: (st: GameState) => {
    qspCall(st, 'coats', 'move_to_storage', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'coat_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'coats', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to unwanted', handler: (st: GameState) => {
    qspCall(st, 'coats', 'move_to_unwanted', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'coat_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  scene.actions([
{ label: '', labelFn: (s: GameState) => String(qspFunc(s, 'wrap', 'neg', 'Throw this coats away') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'coats', 'remove_item', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'coat_view', 'view_grid', (((st as any).shop_utils_view ?? {})['link']));
  } },
]);
  return;
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
      enterDefault(s, scene);
      break;
  }
}

export const coat_view: LocationDef = {
  name: 'coat_view',
  title: 'Throw this coats away',
  region: 'other',
  enter: enter,
};
