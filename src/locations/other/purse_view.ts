import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_home_filters') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', 'purse_view', 'view_grid', (((s as any).shop_display ?? 0)?.['link']));
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
  // TODO-QSP: end
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
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'coco') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'coco');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'flamingos') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'flamingos');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'nerdvana') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana');
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
    qspCall(s, 'purse_attributes', '$ARGS[2]', ((s as any).locArgs?.[3] ?? 0));
    if ((!((s as any).PurseQuality ?? 0))) {
      // TODO-QSP: exit
    }
    qspCall(s, 'shop_utils', 'sorted', 'add_to_number', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_quality', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).PurseQuality ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_price', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).PursePrice ?? 0));
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'grid_shop') {
    if (String((s as any).locArgs?.[2] ?? '') === 'header') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_shop_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'main') {
      qspCall(s, 'purse_attributes', '$ARGS[4]', ((s as any).locArgs?.[5] ?? 0));
      scene.img(`${qspFunc(s, '$purse_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
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
      qspCall(s, 'purse_attributes', '$ARGS[4]', ((s as any).locArgs?.[5] ?? 0));
      scene.img(`${qspFunc(s, '$purse_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
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

function enterDisplayGridShop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayGridWardrobe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'grid_wardrobe');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewGrid(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', ((s as any).locArgs?.[1] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_types', 'all']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (String((s as any).locArgs?.[1] ?? '') === 'wardrobe'  ||  String((s as any).locArgs?.[1] ?? '') === 'storage'  ||  String((s as any).locArgs?.[1] ?? '') === 'unwanted') {
      qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    } else {
      qspCall(s, 'shop_utils', 'init', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    }
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_wardrobe');
  scene.actions([
{ label: 'Return', goto: ['shop_utils', 'return'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['link'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['number'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount'] = ((s as any).locArgs?.[4] ?? 0);
  qspCall(s, 'stat', '');
  scene.img(`${qspFunc(s, '$purse_image', '', (((s as any).shop_utils_view ?? 0)?.['type'] ?? ''), (((s as any).shop_utils_view ?? 0)?.['number'] ?? ''))}`);
  qspCall(s, 'purse_attributes', '$shop_utils_view[\'type\']', (((s as any).shop_utils_view ?? 0)?.['number']));
  qspCall(s, 'purses', 'descriptions', (((s as any).shop_utils_view ?? 0)?.['type']));
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
    qspGoto(s, 'purse_view', 'view_item_shop');
  }
  if (qspFunc(s, 'purses', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    qspGoto(s, 'purse_view', 'view_item_wearing');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    qspGoto(s, 'purse_view', 'view_item_wardrobe');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
    qspGoto(s, 'purse_view', 'view_item_storage');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
    qspGoto(s, 'purse_view', 'view_item_unwanted');
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'purse_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You already own this purse.');
    return;
  }
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount_total'] = (((s as any).shop_utils_view ?? {})?.['discount'] ?? 0) + qspFunc(s, 'shop_utils', 'get_discount', (((s as any).shop_utils_view ?? 0)?.['type']) + '_purses', (((s as any).shop_utils_view ?? 0)?.['number']));
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['base_price'] = ((s as any).PursePrice ?? 0);
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
    scene.text('You cannot afford this purse.');
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Buy (' + String((((s as any).shop_utils_view ?? 0)?.['price_string'] ?? '') ?? '') + ')', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', (((st as any).shop_utils_view ?? 0)?.['price']));
    qspCall(st, 'purses', 'add_item', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    if ((!((st as any).bag ?? 0))) {
      qspCall(st, 'purses', 'wear', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    }
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
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWearing(s: GameState, scene: SceneBuilder): void {
  scene.text('You are using this purse.');
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'purse_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWardrobe(s: GameState, scene: SceneBuilder): void {
  scene.text('This purse is in your wardrobe.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'purse_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
{ label: 'Use this purse', handler: (st: GameState) => {
    qspCall(st, 'purses', 'wear', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'wardrobe', 'main');
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemStorage(s: GameState, scene: SceneBuilder): void {
  scene.text('This purse is in storage.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'purse_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemUnwanted(s: GameState, scene: SceneBuilder): void {
  scene.text('This purse is unwanted.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'purse_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'purses', 'in_wardrobe', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to wardrobe', handler: (st: GameState) => {
    qspCall(st, 'purses', 'move_to_wardrobe', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'purse_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'purses', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'purses', 'in_storage', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to storage', handler: (st: GameState) => {
    qspCall(st, 'purses', 'move_to_storage', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'purse_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'purses', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to unwanted', handler: (st: GameState) => {
    qspCall(st, 'purses', 'move_to_unwanted', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'purse_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'purses', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    // TODO-QSP: exit
  }
  // TODO-QSP: act $func('wrap', 'neg', 'Throw this purse away'):
  qspCall(s, 'purses', 'remove_item', (((s as any).shop_utils_view ?? 0)?.['type']), (((s as any).shop_utils_view ?? 0)?.['number']));
  qspGoto(s, 'purse_view', 'view_grid', (((s as any).shop_utils_view ?? {})['link']));
  // TODO-QSP: end
  return;
  // TODO-QSP: end
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

export const purse_view: LocationDef = {
  name: 'purse_view',
  title: 'Throw this purse away',
  region: 'other',
  enter: enter,
};
