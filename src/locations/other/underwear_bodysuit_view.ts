import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_home_filters') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', 'underwear_bodysuit_view', 'view_grid', ((s as any).shop_display ?? 0)?.['link']);
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_sport_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'shop_utils', 'filter_builder', 'finish', 'mini');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_shop_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_price_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_discount_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish', 'mini');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_sport_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sport_filter', 'PanSport');
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHomeFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'underwear_bodysuit_view', 'filter', 'sport') === 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShopFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFilter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'sport') {
    if (((s as any).BraSport ?? 0)) {
      if (((s as any).outfitfilter ?? 0)?.['sport'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['sport'] <= 0) {
        (s as any).result = 1;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'add_types') {
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'lusso') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'lusso');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(13))) === 'scandalicious') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'scandalicious');
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
    qspCall(s, 'underwear_attributes', '', ((s as any).locArgs?.[2] ?? 0) + '_bodysuits', ((s as any).locArgs?.[3] ?? 0));
    if ((!((s as any).BraQuality ?? 0))) {
      // TODO-QSP: exit
    }
    qspCall(s, 'shop_utils', 'sorted', 'add_to_number', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_quality', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).BraQuality ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_price', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).BraPrice ?? 0));
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
      qspCall(s, 'underwear_attributes', '', ((s as any).locArgs?.[4] ?? 0) + '_bodysuits', ((s as any).locArgs?.[5] ?? 0));
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        scene.img(`${qspFunc(s, '$bodysuit_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
      }
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
      qspCall(s, 'underwear_attributes', '', ((s as any).locArgs?.[4] ?? 0) + '_bodysuits', ((s as any).locArgs?.[5] ?? 0));
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        scene.img(`${qspFunc(s, '$bodysuit_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
      }
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
  if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
    // TODO-QSP: dynamic text: '<center><b>You put the '+iif($pursepantytype = '', '', 'panties') + iif($pursep...
    scene.text('<center><b>You put the ' + ((((s as any).pursepantytype ?? 0) === '') ? ('') : ('panties')) + ((((s as any).pursepantytype ?? 0) === ''  ||  ((s as any).pursebratype ?? 0) === '') ? ('') : (' and ')) + ((((s as any).pursebratype ?? 0) === '') ? ('') : ('bra')) + ' from your purse back in the wardrobe.</b></center><br>');
  }
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bodysuits', ((s as any).locArgs?.[1] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_types', 'all']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (String((s as any).locArgs?.[1] ?? '') === 'wardrobe'  ||  String((s as any).locArgs?.[1] ?? '') === 'storage'  ||  String((s as any).locArgs?.[1] ?? '') === 'unwanted') {
      qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    } else {
      qspCall(s, 'shop_utils', 'init', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    }
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  if (((s as any).bodysuitworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove bodysuits', handler: (st: GameState) => {
    qspCall(st, 'underwear_bodysuits', 'strip');
    qspGoto(st, 'underwear_bodysuit_view', 'view_grid', (((st as any).shop_display ?? {})['link']));
  } },
    ]);
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
  scene.img(`${qspFunc(s, '$pcs_outfit_image', '', ((s as any).shop_utils_view ?? 0)?.['type'] ?? '' + '_bodysuits', ((s as any).shop_utils_view ?? 0)?.['number'] ?? '')}`);
  qspCall(s, 'underwear_attributes', '', ((s as any).shop_utils_view ?? 0)?.['type'] + '_bodysuits', ((s as any).shop_utils_view ?? 0)?.['number']);
  qspCall(s, 'underwear_descriptions', 'bodysuit');
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
    qspGoto(s, 'underwear_bodysuit_view', 'view_item_shop');
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    qspGoto(s, 'underwear_bodysuit_view', 'view_item_wearing');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    qspGoto(s, 'underwear_bodysuit_view', 'view_item_wardrobe');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
    qspGoto(s, 'underwear_bodysuit_view', 'view_item_storage');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
    qspGoto(s, 'underwear_bodysuit_view', 'view_item_unwanted');
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'underwear_bodysuit_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You already own this item.');
    return;
  }
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount_total'] = (((s as any).shop_utils_view ?? {})?.['discount'] ?? 0) + qspFunc(s, 'shop_utils', 'get_discount', ((s as any).shop_utils_view ?? 0)?.['type'] + '_bodysuits', ((s as any).shop_utils_view ?? 0)?.['number']);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['base_price'] = ((s as any).BraPrice ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['base_price'] ?? 0) * Math.max(0, 100 - (((s as any).shop_utils_view ?? {})?.['discount_total'] ?? 0)) / 100;
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['price'] ?? 0) / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']);
  } else {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['base_price'])) + ' <b>' + qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']) + '</b>';
    // TODO-QSP: 'Now ' + shop_utils_view['discount_total'] + '% off' + iif(shop_utils_view['discount_total'] <= 10, ...
  }
  // TODO-QSP: 'Price: ' + $shop_utils_view['price_string']
  if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
    scene.text('You do not have enough money to buy this bodysuit.');
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Buy (' + String(((s as any).shop_utils_view ?? 0)?.['price_string'] ?? '' ?? '') + ')', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).shop_utils_view ?? 0)?.['price']);
    qspCall(st, 'underwear_bodysuits', 'add_item', ((st as any).shop_utils_view ?? 0)?.['type'], ((st as any).shop_utils_view ?? 0)?.['number']);
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
  scene.text('You are wearing this bodysuit.');
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    scene.actions([
      { label: 'Take off your bodysuit', handler: (st: GameState) => {
    qspCall(st, 'underwear_bodysuits', 'strip');
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'wardrobe', 'main');
  } },
    ]);
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'underwear_bodysuit_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'underwear_bodysuit_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
{ label: 'Wear', handler: (st: GameState) => {
    // TODO-QSP: xgt 'underwear_bodysuit_view', 'view_item_wear'
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemStorage(s: GameState, scene: SceneBuilder): void {
  scene.text('This bodysuit is in storage.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'underwear_bodysuit_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemUnwanted(s: GameState, scene: SceneBuilder): void {
  scene.text('This bodysuit is unwanted.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'underwear_bodysuit_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloPanties ?? 0) === 1  ||  ((s as any).PCloBra ?? 0) === 1) {
    scene.actions([
{ label: 'Return', goto: ['underwear_bodysuit_view', 'view_item', '(((s as any).shop_utils_view ?? {})[\'action\'])', '(((s as any).shop_utils_view ?? {})[\'type\'])'] },
]);
    return;
  }
  if (((s as any).hypnoPanty ?? 0) > 0  ||  ((s as any).hypnoBra ?? 0) > 0) {
    qspGoto(s, 'underwear_bodysuit_view', 'view_item_wear_hypno');
  }
  qspCall(s, 'underwear_bodysuits', 'wear', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']);
  qspCall(s, 'shop_utils', 'cleanup');
  qspGoto(s, 'wardrobe', 'main');
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWearHypno(s: GameState, scene: SceneBuilder): void {
  scene.text('You pick up the bodysuit and think about trying it on… but you don\'t really like wearing bodysuits.');
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTime ?? 0));
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Put it on anyways', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Put it on anyways', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspCall(st, 'underwear_bodysuits', 'wear', ((st as any).shop_utils_view ?? 0)?.['type'], ((st as any).shop_utils_view ?? 0)?.['number']);
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'wardrobe', 'main');
  } },
    ]);
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'underwear_bodysuit_view', 'view_grid', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'underwear_bodysuits', 'in_wardrobe', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to wardrobe', handler: (st: GameState) => {
    qspCall(st, 'underwear_bodysuits', 'move_to_wardrobe', ((st as any).shop_utils_view ?? 0)?.['type'], ((st as any).shop_utils_view ?? 0)?.['number']);
    qspGoto(st, 'underwear_bodysuit_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'underwear_bodysuits', 'in_storage', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to storage', handler: (st: GameState) => {
    qspCall(st, 'underwear_bodysuits', 'move_to_storage', ((st as any).shop_utils_view ?? 0)?.['type'], ((st as any).shop_utils_view ?? 0)?.['number']);
    qspGoto(st, 'underwear_bodysuit_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'underwear_bodysuits', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to unwanted', handler: (st: GameState) => {
    qspCall(st, 'underwear_bodysuits', 'move_to_unwanted', ((st as any).shop_utils_view ?? 0)?.['type'], ((st as any).shop_utils_view ?? 0)?.['number']);
    qspGoto(st, 'underwear_bodysuit_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  // TODO-QSP: act $func('wrap', 'neg', 'Throw this bodysuit away'):
  qspCall(s, 'underwear_bodysuits', 'remove_item', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']);
  qspGoto(s, 'underwear_bodysuit_view', 'view_grid', (((s as any).shop_utils_view ?? {})['link']));
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
    case 'home_filter':
      enterHomeFilter(s, scene);
      break;
    case 'shop_filter':
      enterShopFilter(s, scene);
      break;
    case 'filter':
      enterFilter(s, scene);
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
    case 'view_item_wear':
      enterViewItemWear(s, scene);
      break;
    case 'view_item_wear_hypno':
      enterViewItemWearHypno(s, scene);
      break;
    case 'storage_options':
      enterStorageOptions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const underwear_bodysuit_view: LocationDef = {
  name: 'underwear_bodysuit_view',
  title: 'Throw this bodysuit away',
  region: 'other',
  enter: enter,
};
