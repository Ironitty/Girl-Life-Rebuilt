import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_home_filters') {
    // TODO-QSP: gs 'shop_utils', 'filter_builder', 'init', 'bra_view', 'view_grid', $shop_display['link']
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'bra_view', 'filter_builder', 'setup_sport_filter');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish', 'mini');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_shop_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_price_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_discount_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish', 'mini');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_sport_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sport_filter', 'BraSport');
    return;
  }
  return;
  scene.build();
}

function enterHomeFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'bra_view', 'filter', 'sport') === 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  scene.build();
}

function enterShopFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  scene.build();
}

function enterFilter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'sport') {
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
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add_types') {
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'eroto') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'lusso') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'lusso');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious');
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_exceptions') {
    (s as any).shop_display_exceptions['gm_bras-11'] = 1;
    (s as any).shop_display_exceptions['gm_bras-16'] = 1;
    (s as any).shop_display_exceptions['gm_bras-18'] = 1;
    return;
  }
  return;
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add') {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[2] + '_bras', ARGS[3]
    if (((s as any).BraQuality ?? 0) === 0) {
      // TODO-QSP: exit
    }
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $ARGS[2], ARGS[3], ARGS[4]
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_quality', $ARGS[2], ARGS[3], BraQuality
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_price', $ARGS[2], ARGS[3], BraPrice
    return;
  }
  return;
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      qspCall(s, 'bra_view', 'filter_builder', 'setup_shop_filter');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'underwear_attributes', $ARGS[4] + '_bras', ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        // TODO-QSP: *p '<a href="exec: gt ''bra_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5]>>, ...
      }
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
      qspCall(s, 'bra_view', 'filter_builder', 'setup_home_filters');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'underwear_attributes', $ARGS[4] + '_bras', ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        // TODO-QSP: *p '<a href="exec: gt ''bra_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5]>>, ...
      }
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
  if (qspFunc(s, 'bras', 'is_owned', 'gm_bras', 1) === 0) {
    qspCall(s, 'bras', 'add_item', 'gm_bras', 1);
  }
  if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
    // TODO-QSP: dynamic text: <center><b>You put the ' + iif($pursepantytype = ', ', 'panties') + iif($pursepa...
    scene.text('<center><b>You put the \' + iif($pursepantytype = \', \', \'panties\') + iif($pursepantytype = \' or $pursebratype = \', \', \' and \') + iif($pursebratype = \', \', \'bra\') + \' from your purse back in the wardrobe.</b></center><br>');
  }
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bras', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'bra_view', 'init', 'add_types', 'all');
    if (((s as any).locArgs?.[1] ?? 0) === 'wardrobe'  ||  ((s as any).locArgs?.[1] ?? 0) === 'storage'  ||  ((s as any).locArgs?.[1] ?? 0) === 'unwanted') {
      qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    } else {
      qspCall(s, 'shop_utils', 'init', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    }
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  if (((s as any).braworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove bra', handler: (st: GameState) => {
    qspCall(s, 'bras', 'strip');
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_display['link']
  } },
    ]);
  }
  qspCall(s, 'shop_utils', 'display', 'grid_wardrobe');
  return;
  scene.actions([
    { label: 'Return', goto: ['shop_utils', 'return'] },
  ]);
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_utils_view['link'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).shop_utils_view['type'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).shop_utils_view['number'] = qspUntranslated(s, "ARGS[3]", { location: "bra_view" });
  (s as any).shop_utils_view['discount'] = qspUntranslated(s, "ARGS[4]", { location: "bra_view" });
  qspCall(s, 'stat', '');
  scene.img(`${qspFunc(s, '\'$bra_image\'', '$shop_utils_view[\'type\']', ((s as any).shop_utils_view ?? 0)?.['\'number\''])}`);
  // TODO-QSP: gs 'underwear_attributes', $shop_utils_view['type'] + '_bras', shop_utils_view['number']
  qspCall(s, 'underwear_descriptions', 'bras');
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    // TODO-QSP: dynamic text: This bra forms a set with panty #<<underwear['pair']>>.
    scene.text(`This bra forms a set with panty #${((s as any).underwear ?? 0)?.['pair']}.`);
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
    // TODO-QSP: xgt 'bra_view', 'view_item_shop'
  }
  if (qspFunc(s, 'bras', 'is_wearing', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" }), qspUntranslated(s, "\u00001\u0000", { location: "bra_view" }))) {
    // TODO-QSP: xgt 'bra_view', 'view_item_wearing'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    // TODO-QSP: xgt 'bra_view', 'view_item_wardrobe'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'bathroom') {
    // TODO-QSP: xgt 'bra_view', 'view_item_bathroom'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
    // TODO-QSP: xgt 'bra_view', 'view_item_storage'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
    // TODO-QSP: xgt 'bra_view', 'view_item_unwanted'
  }
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'bras', 'is_owned', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" }), qspUntranslated(s, "\u00001\u0000", { location: "bra_view" }))) {
    scene.text('You already own this item.');
    return;
  }
  (s as any).shop_utils_view['bra_discount'] = ((s as any).min ?? 0)(((s as any).max ?? 0)(0, ((s as any).shop_utils_view ?? 0)?.['discount'] + qspFunc(s, 'shop_utils', 'get_discount', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])), 100);
  (s as any).shop_utils_view['bra_price'] = ((s as any).BraPrice ?? 0);
  (s as any).shop_utils_view['price'] = ((s as any).shop_utils_view ?? 0)?.['bra_price'] * (100 - ((s as any).shop_utils_view ?? 0)?.['bra_discount']) / 100;
  (s as any).shop_utils_view['price'] = ((s as any).shop_utils_view ?? 0)?.['price'] / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['bra_price']) {
    (s as any).shop_utils_view['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']);
  } else {
    (s as any).shop_utils_view['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['bra_price'])) + ' <((s as any).b ?? 0)>' +  qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']) + '</((s as any).b ?? 0)>';
    // TODO-QSP: 'Now ' + shop_utils_view['bra_discount'] + '% off' + iif(shop_utils_view['bra_discount'] <= 10, '', ...
  }
  // TODO-QSP: 'Price: ' + $shop_utils_view['price_string']
  if (qspFunc(s, 'money', 'can_afford', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" })) === 0) {
    scene.text('You cannot afford this bra.');
  } else {
    scene.actions([
      { label: 'Buy (<<$shop_utils_view[\'price_string\']>>)', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['price']
    // TODO-QSP: gs 'bras', 'add_item', $shop_utils_view['type'], shop_utils_view['number']
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    if (qspFunc(s, 'panties', 'is_owned', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" }), qspUntranslated(s, "\u00001\u0000", { location: "bra_view" }))) {
      scene.text('You own the matching panties buying this bra will complete the set.');
    } else {
      scene.text('You do not own the matching panties, you can buy this bra and them as a set.');
      // TODO-QSP: gs 'underwear_attributes', $shop_utils_view['type'] + '_panties', underwear['pair']
      (s as any).shop_utils_view['pan_discount'] = ((s as any).min ?? 0)(((s as any).max ?? 0)(0, ((s as any).shop_utils_view ?? 0)?.['discount'] + qspFunc(s, 'shop_utils', 'get_discount', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).underwear ?? 0)?.['pair'])), 100);
      (s as any).shop_utils_view['pan_price'] = ((s as any).PanPrice ?? 0);
      (s as any).shop_utils_view['set_price'] = 9 * (((s as any).shop_utils_view ?? 0)?.['bra_price'] * (100 - ((s as any).shop_utils_view ?? 0)?.['bra_discount']) + ((s as any).shop_utils_view ?? 0)?.['pan_price'] * (100 - ((s as any).shop_utils_view ?? 0)?.['pan_discount'])) / 1000;
      (s as any).shop_utils_view['set_price'] = ((s as any).shop_utils_view ?? 0)?.['set_price'] / 50 * 50;
      (s as any).shop_utils_view['base_price'] = ((s as any).shop_utils_view ?? 0)?.['bra_price'] + ((s as any).shop_utils_view ?? 0)?.['pan_price'];
      (s as any).shop_utils_view['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['base_price'])) + ' <((s as any).b ?? 0)>' +  qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['set_price']) + '</((s as any).b ?? 0)>';
      // TODO-QSP: 'Price for set: ' + $shop_utils_view['price_string']
      if (qspFunc(s, 'money', 'can_afford', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" })) === 0) {
        scene.text('You cannot afford this set.');
      } else {
        scene.actions([
          { label: 'Buy set (<<$shop_utils_view[\'price_string\']>>)', handler: (st: GameState) => {
    // TODO-QSP: gs 'underwear_attributes', $shop_utils_view['type'] + '_bras', shop_utils_view['number']
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['set_price']
    // TODO-QSP: gs 'bras', 'add_item', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gs 'panties', 'add_item', $shop_utils_view['type'], underwear['pair']
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
    }
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
  scene.text('You are wearing this bra.');
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    scene.actions([
      { label: 'Take off your bra', handler: (st: GameState) => {
    qspCall(s, 'bras', 'strip');
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['wardrobe', 'main'] },
    ]);
  }
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    if (qspFunc(s, 'panties', 'is_owned', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" }), qspUntranslated(s, "\u00001\u0000", { location: "bra_view" })) === 0) {
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
  qspCall(s, 'bra_view', 'storage_options');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
    { label: 'Wear', handler: (st: GameState) => {
    // TODO-QSP: xgt 'bra_view', 'view_item_wear_single'
  } },
  ]);
  scene.build();
}

function enterViewItemBathroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloBra ?? 0) === 1) {
  } else {
    scene.actions([
      { label: 'Wear', handler: (st: GameState) => {
    // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'shop_utils', 'cleanup');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hypnoBra ?? 0) > 0) {
    qspCall(s, 'bra_view', 'view_item_wear_single_hypno', 1);
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  }
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    if (qspFunc(s, 'panties', 'is_owned', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" }), qspUntranslated(s, "\u00001\u0000", { location: "bra_view" })) === 0) {
      scene.text('You do not own the matching panties to make this set.');
    } else {
      scene.text('You own these panties and can wear this set.');
      scene.actions([
        { label: 'Wear set', handler: (st: GameState) => {
    qspCall(s, 'bra_view', 'view_item_wear_pair', 1);
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

function enterViewItemStorage(s: GameState, scene: SceneBuilder): void {
  scene.text('This bra is in storage.');
  qspCall(s, 'bra_view', 'storage_options');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemUnwanted(s: GameState, scene: SceneBuilder): void {
  scene.text('This bra is unwanted.');
  qspCall(s, 'bra_view', 'storage_options');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemWearSingle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloBra ?? 0) === 1) {
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['action'], $sho...
  } },
    ]);
  }
  if (((s as any).hypnoBra ?? 0) > 0) {
    // TODO-QSP: xgt 'bra_view', 'view_item_wear_single_hypno'
  }
  // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], shop_utils_view['number']
  qspCall(s, 'shop_utils', 'cleanup');
  scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
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
      { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Put them on anyways', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'shop_utils', 'cleanup');
    if (((s as any).ARGS ?? 0)[1] === 0) {
      scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
    }
  } },
    ]);
  }
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemWearPair(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloBra ?? 0) === 1) {
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['action'], $sho...
  } },
    ]);
  }
  if (((s as any).PCloPanties ?? 0) === 1) {
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['action'], $sho...
  } },
    ]);
  }
  if (((s as any).hypnoBra ?? 0) > 0  ||  ((s as any).hypnoPanty ?? 0) > 0) {
    // TODO-QSP: xgt 'bra_view', 'view_item_wear_pair_hypno'
  }
  // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], shop_utils_view['number']
  // TODO-QSP: gs 'panties', 'wear', $shop_utils_view['type'], underwear['pair']
  qspCall(s, 'shop_utils', 'cleanup');
  if (((s as any).ARGS ?? 0)[1] === 0) {
    scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
  }
  scene.build();
}

function enterViewItemWearPairHypno(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hypnoBra ?? 0) > 0  &&  ((s as any).hypnoPanty ?? 0) > 0) {
    scene.text('You pick up the bra and panties and think about trying them on… but you don\'t really like wearing underwear.');
    qspCall(s, 'willpower', 'misc', 'resist');
  } else {
    scene.text('You pick up the bra and think about trying them on… but you don\'t really like wearing bras.');
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    scene.text('You pick up the panties and think about trying them on… but you don\'t really like wearing panties.');
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  }
  if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTime ?? 0));
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Put them on anyways', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gs 'panties', 'wear', $shop_utils_view['type'], underwear['pair']
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['wardrobe', 'main'] },
    ]);
  }
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'bra_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'bras', 'is_owned', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" }), qspUntranslated(s, "\u00001\u0000", { location: "bra_view" })) === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'bras', 'in_wardrobe', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" }), qspUntranslated(s, "\u00001\u0000", { location: "bra_view" })) === 0) {
    scene.actions([
      { label: 'Move to wardrobe', handler: (st: GameState) => {
    // TODO-QSP: gs 'bras', 'move_to_wardrobe', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['num...
  } },
    ]);
  }
  if (qspFunc(s, 'bras', 'is_immutable', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" }), qspUntranslated(s, "\u00001\u0000", { location: "bra_view" }))) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'bras', 'in_storage', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" }), qspUntranslated(s, "\u00001\u0000", { location: "bra_view" })) === 0) {
    scene.actions([
      { label: 'Move to storage', handler: (st: GameState) => {
    // TODO-QSP: gs 'bras', 'move_to_storage', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'bra_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['num...
  } },
    ]);
  }
  if (qspFunc(s, 'bras', 'in_unwanted', qspUntranslated(s, "\u00000\u0000", { location: "bra_view" }), qspUntranslated(s, "\u00001\u0000", { location: "bra_view" })) === 0) {
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
      enterFilterBuilder(s, scene);
      break;
  }
}

export const bra_view: LocationDef = {
  name: 'bra_view',
  title: 'Throw this bra away',
  region: 'other',
  enter: enter,
};
