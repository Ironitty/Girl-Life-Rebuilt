import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'setup_home_filters') {
    // TODO-QSP: gs 'shop_utils', 'filter_builder', 'init', 'bra_view', 'view_grid', $shop_display['link']
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_sport_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'shop_utils', 'filter_builder', 'finish', 'mini');
    return;
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'setup_shop_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_price_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_discount_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish', 'mini');
    return;
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'setup_sport_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sport_filter', 'BraSport');
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHomeFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'bra_view', 'filter', 'sport') === 0) {
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
  if (Number((s as any).locArgs?.[1] ?? 0) === 'sport') {
    if (((s as any).BraSport ?? 0)) {
      if (((s as any).outfitfilter ?? 0)?.['sport'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['sport'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'add_types') {
    if (Number((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'eroto') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto');
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista');
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm');
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'lusso') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'lusso');
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious');
    }
    return;
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'set_exceptions') {
    ((s as any).shop_display_exceptions = (s as any).shop_display_exceptions ?? {})['gm_bras-11'] = 1;
    ((s as any).shop_display_exceptions = (s as any).shop_display_exceptions ?? {})['gm_bras-16'] = 1;
    ((s as any).shop_display_exceptions = (s as any).shop_display_exceptions ?? {})['gm_bras-18'] = 1;
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'add') {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[2] + '_bras', ARGS[3]
    if ((!((s as any).BraQuality ?? 0))) {
      // TODO-QSP: exit
    }
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $ARGS[2], ARGS[3], ARGS[4]
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_quality', $ARGS[2], ARGS[3], BraQuality
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_price', $ARGS[2], ARGS[3], BraPrice
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    if (Number((s as any).locArgs?.[2] ?? 0) === 'header') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_shop_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
      return;
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'underwear_attributes', $ARGS[4] + '_bras', ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        scene.img(`${qspFunc(s, '$bra_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
      }
      return;
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'footer') {
      return;
    }
    return;
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'grid_wardrobe') {
    if (Number((s as any).locArgs?.[2] ?? 0) === 'header') {
      qspCall(s, 'shop_utils', 'display', 'wardrobe_storage_unwanted_header', 'view_grid');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_home_filters']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
      return;
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'underwear_attributes', $ARGS[4] + '_bras', ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        scene.img(`${qspFunc(s, '$bra_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
      }
      return;
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'footer') {
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
  if (qspFunc(s, 'bras', 'is_owned', 'gm_bras', 1) === 0) {
    qspCall(s, 'bras', 'add_item', 'gm_bras', 1);
  }
  if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
    // TODO-QSP: dynamic text: <center><b>You put the ' + iif($pursepantytype = '', '', 'panties') + iif($purse...
    scene.text('<center><b>You put the ' + ((((s as any).pursepantytype ?? 0) === '') ? ('') : ('panties')) + ((((s as any).pursepantytype ?? 0) === ''  ||  ((s as any).pursebratype ?? 0) === '') ? ('') : (' and ')) + ((((s as any).pursebratype ?? 0) === '') ? ('') : ('bra')) + ' from your purse back in the wardrobe.</b></center><br>');
  }
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bras', ((s as any).locArgs?.[1] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_types', 'all']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (Number((s as any).locArgs?.[1] ?? 0) === 'wardrobe'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'storage'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'unwanted') {
      qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    } else {
      qspCall(s, 'shop_utils', 'init', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    }
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  if (((s as any).braworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove bra', handler: (st: GameState) => {
    qspCall(st, 'bras', 'strip');
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_display['link']
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
  scene.img(`${qspFunc(s, '$bra_image', '', ((s as any).shop_utils_view ?? 0)?.['type'] ?? '', ((s as any).shop_utils_view ?? 0)?.['number'] ?? '')}`);
  // TODO-QSP: gs 'underwear_attributes', $shop_utils_view['type'] + '_bras', shop_utils_view['number']
  qspCall(s, 'underwear_descriptions', 'bras');
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    // TODO-QSP: dynamic text: This bra forms a set with panty #<<underwear[''pair'']>>.
    scene.text(`This bra forms a set with panty #${((s as any).underwear ?? 0)?.['pair'] ?? ''}.`);
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
    qspGoto(s, 'bra_view', 'view_item_shop');
  }
  if (qspFunc(s, 'bras', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    qspGoto(s, 'bra_view', 'view_item_wearing');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    qspGoto(s, 'bra_view', 'view_item_wardrobe');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'bathroom') {
    qspGoto(s, 'bra_view', 'view_item_bathroom');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
    qspGoto(s, 'bra_view', 'view_item_storage');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
    qspGoto(s, 'bra_view', 'view_item_unwanted');
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You already own this item.');
    return;
  }
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['bra_discount'] = Math.min(Math.max(0, (((s as any).shop_utils_view ?? {})?.['discount'] ?? 0) + qspFunc(s, 'shop_utils', 'get_discount', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])), 100);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['bra_price'] = ((s as any).BraPrice ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['bra_price'] ?? 0) * (100 - (((s as any).shop_utils_view ?? {})?.['bra_discount'] ?? 0)) / 100;
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['price'] ?? 0) / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['bra_price']) {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']);
  } else {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['bra_price'])) + ' <b>' + qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']) + '</b>';
    // TODO-QSP: 'Now ' + shop_utils_view['bra_discount'] + '% off' + iif(shop_utils_view['bra_discount'] <= 10, '', ...
  }
  // TODO-QSP: 'Price: ' + $shop_utils_view['price_string']
  if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
    scene.text('You cannot afford this bra.');
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Buy (' + String(((s as any).shop_utils_view ?? 0)?.['price_string'] ?? '' ?? '') + ')', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['price']
    // TODO-QSP: gs 'bras', 'add_item', $shop_utils_view['type'], shop_utils_view['number']
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    if (qspFunc(s, 'panties', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).underwear ?? 0)?.['pair'])) {
      scene.text('You own the matching panties buying this bra will complete the set.');
    } else {
      scene.text('You do not own the matching panties, you can buy this bra and them as a set.');
      // TODO-QSP: gs 'underwear_attributes', $shop_utils_view['type'] + '_panties', underwear['pair']
      ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['pan_discount'] = Math.min(Math.max(0, (((s as any).shop_utils_view ?? {})?.['discount'] ?? 0) + qspFunc(s, 'shop_utils', 'get_discount', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).underwear ?? 0)?.['pair'])), 100);
      ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['pan_price'] = ((s as any).PanPrice ?? 0);
      ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['set_price'] = 9 * ((((s as any).shop_utils_view ?? {})?.['bra_price'] ?? 0) * (100 - (((s as any).shop_utils_view ?? {})?.['bra_discount'] ?? 0)) + (((s as any).shop_utils_view ?? {})?.['pan_price'] ?? 0) * (100 - (((s as any).shop_utils_view ?? {})?.['pan_discount'] ?? 0))) / 1000;
      ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['set_price'] = (((s as any).shop_utils_view ?? {})?.['set_price'] ?? 0) / 50 * 50;
      ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['base_price'] = (((s as any).shop_utils_view ?? {})?.['bra_price'] ?? 0) + (((s as any).shop_utils_view ?? {})?.['pan_price'] ?? 0);
      ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['base_price'])) + ' <b>' + qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['set_price']) + '</b>';
      // TODO-QSP: 'Price for set: ' + $shop_utils_view['price_string']
      if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['set_price']) === 0) {
        scene.text('You cannot afford this set.');
      } else {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Buy set (' + String(((s as any).shop_utils_view ?? 0)?.['price_string'] ?? '' ?? '') + ')', handler: (st: GameState) => {
    // TODO-QSP: gs 'underwear_attributes', $shop_utils_view['type'] + '_bras', shop_utils_view['number']
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['set_price']
    // TODO-QSP: gs 'bras', 'add_item', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gs 'panties', 'add_item', $shop_utils_view['type'], underwear['pair']
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      }
    }
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
  scene.text('You are wearing this bra.');
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    scene.actions([
      { label: 'Take off your bra', handler: (st: GameState) => {
    qspCall(st, 'bras', 'strip');
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'wardrobe', 'main');
  } },
    ]);
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    if (qspFunc(s, 'panties', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).underwear ?? 0)?.['pair']) === 0) {
      scene.text('You do not own the matching panties to make this set.');
    } else {
      scene.text('You own these panties and can wear this set.');
      scene.actions([
        { label: 'Wear set', handler: (st: GameState) => {
    // TODO-QSP: xgt 'bra_view', 'view_item_wear_pair'
  } },
      ]);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },,
{ label: 'Wear', handler: (st: GameState) => {
    // TODO-QSP: xgt 'bra_view', 'view_item_wear_single'
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemBathroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloBra ?? 0) === 1) {
  } else {
    if (((s as any).hypnoBra ?? 0) <= 0) {
      scene.actions([
        { label: 'Wear', handler: (st: GameState) => {
    // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(st, 'shop_utils', 'cleanup');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  }
  if (((s as any).hypnoBra ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterViewItemWearSingleHypno(s, scene); (s as any).locArgs = __savedLocArgs; }
    dynamicGoto(s, 'prevLoc', 'prevArg');
  }
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    if (qspFunc(s, 'panties', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).underwear ?? 0)?.['pair']) === 0) {
      scene.text('You do not own the matching panties to make this set.');
    } else {
      scene.text('You own these panties and can wear this set.');
      scene.actions([
        { label: 'Wear set', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterViewItemWearPair(s, scene); (st as any).locArgs = __savedLocArgs; }
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
  // TODO-QSP: end
  scene.build();
}

function enterViewItemStorage(s: GameState, scene: SceneBuilder): void {
  scene.text('This bra is in storage.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemUnwanted(s: GameState, scene: SceneBuilder): void {
  scene.text('This bra is unwanted.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWearSingle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloBra ?? 0) === 1) {
    scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['action'], $sho...
  } },
]);
    return;
  }
  if (((s as any).hypnoBra ?? 0) > 0) {
    qspGoto(s, 'bra_view', 'view_item_wear_single_hypno');
  }
  // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], shop_utils_view['number']
  qspCall(s, 'shop_utils', 'cleanup');
  qspGoto(s, 'wardrobe', 'main');
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWearSingleHypno(s: GameState, scene: SceneBuilder): void {
  scene.text('You pick up the bra and think about trying them on… but you don\'t really like wearing bras.');
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTime ?? 0));
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Put them on anyways', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Put them on anyways', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(st, 'shop_utils', 'cleanup');
    if (Number((st as any).locArgs?.[1] ?? 0) === 0) {
      qspGoto(st, 'wardrobe', 'main');
    }
  } },
    ]);
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWearPair(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloBra ?? 0) === 1) {
    scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['action'], $sho...
  } },
]);
    return;
  }
  if (((s as any).PCloPanties ?? 0) === 1) {
    scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['action'], $sho...
  } },
]);
    return;
  }
  if (((s as any).hypnoBra ?? 0) > 0  ||  ((s as any).hypnoPanty ?? 0) > 0) {
    qspGoto(s, 'bra_view', 'view_item_wear_pair_hypno');
  }
  // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], shop_utils_view['number']
  // TODO-QSP: gs 'panties', 'wear', $shop_utils_view['type'], underwear['pair']
  qspCall(s, 'shop_utils', 'cleanup');
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    qspGoto(s, 'wardrobe', 'main');
  }
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWearPairHypno(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hypnoBra ?? 0) > 0  &&  ((s as any).hypnoPanty ?? 0) > 0) {
    scene.text('You pick up the bra and panties and think about trying them on… but you don\'t really like wearing underwear.');
    qspCall(s, 'willpower', 'misc', 'resist');
  } else {
    if (((s as any).hypnoBra ?? 0) > 0) {
      scene.text('You pick up the bra and think about trying them on… but you don\'t really like wearing bras.');
      qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    } else {
      scene.text('You pick up the panties and think about trying them on… but you don\'t really like wearing panties.');
      qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    }
  }
  if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTime ?? 0));
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Put them on anyways', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Put them on anyways', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gs 'panties', 'wear', $shop_utils_view['type'], underwear['pair']
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'wardrobe', 'main');
  } },
    ]);
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'bras', 'in_wardrobe', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to wardrobe', handler: (st: GameState) => {
    // TODO-QSP: gs 'bras', 'move_to_wardrobe', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['num...
  } },
    ]);
  }
  if (qspFunc(s, 'bras', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'bras', 'in_storage', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to storage', handler: (st: GameState) => {
    // TODO-QSP: gs 'bras', 'move_to_storage', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['num...
  } },
    ]);
  }
  if (qspFunc(s, 'bras', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to unwanted', handler: (st: GameState) => {
    // TODO-QSP: gs 'bras', 'move_to_unwanted', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['num...
  } },
    ]);
  }
  // TODO-QSP: act $func('wrap', 'neg', 'Throw this bra away'):
  // TODO-QSP: gs 'bras', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
  // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
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
    case 'view_item_bathroom':
      enterViewItemBathroom(s, scene);
      break;
    case 'view_item_storage':
      enterViewItemStorage(s, scene);
      break;
    case 'view_item_unwanted':
      enterViewItemUnwanted(s, scene);
      break;
    case 'view_item_wear_single':
      enterViewItemWearSingle(s, scene);
      break;
    case 'view_item_wear_single_hypno':
      enterViewItemWearSingleHypno(s, scene);
      break;
    case 'view_item_wear_pair':
      enterViewItemWearPair(s, scene);
      break;
    case 'view_item_wear_pair_hypno':
      enterViewItemWearPairHypno(s, scene);
      break;
    case 'storage_options':
      enterStorageOptions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bra_view: LocationDef = {
  name: 'bra_view',
  title: 'Throw this bra away',
  region: 'other',
  enter: enter,
};
