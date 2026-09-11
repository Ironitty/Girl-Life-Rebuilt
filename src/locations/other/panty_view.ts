import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_home_filters') {
    // TODO-QSP: gs 'shop_utils', 'filter_builder', 'init', 'panty_view', 'view_grid', $shop_display['link']
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'panty_view', 'filter_builder', 'setup_sport_filter');
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
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sport_filter', 'PanSport');
    return;
  }
  return;
  scene.build();
}

function enterHomeFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'panty_view', 'filter', 'sport') === 0) {
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
    if (((s as any).PanSport ?? 0)) {
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
    ((s as any).shop_display_exceptions ?? {})['gm_panties-7'] = 1;
    ((s as any).shop_display_exceptions ?? {})['gm_panties-9'] = 1;
    ((s as any).shop_display_exceptions ?? {})['gm_panties-21'] = 1;
    ((s as any).shop_display_exceptions ?? {})['gm_panties-37'] = 1;
    return;
  }
  return;
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add') {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[2] + '_panties', ARGS[3]
    if ((!((s as any).PanQuality ?? 0))) {
      // TODO-QSP: exit
    }
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $ARGS[2], ARGS[3], ARGS[4]
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_quality', $ARGS[2], ARGS[3], PanQuality
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_price', $ARGS[2], ARGS[3], PanPrice
    return;
  }
  return;
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      qspCall(s, 'panty_view', 'filter_builder', 'setup_shop_filter');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'underwear_attributes', $ARGS[4] + '_panties', ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        // TODO-QSP: *p '<a href="exec: gt ''panty_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5]>>...
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
      qspCall(s, 'panty_view', 'filter_builder', 'setup_home_filters');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'underwear_attributes', $ARGS[4] + '_panties', ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        // TODO-QSP: *p '<a href="exec: gt ''panty_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5]>>...
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
  if (qspFunc(s, 'panties', 'is_owned', 'gm', 1) === 0) {
    qspCall(s, 'panties', 'add_item', 'gm', 1);
  }
  if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
    // TODO-QSP: dynamic text: <center><b>You put the ' + iif($pursepantytype = ', ', 'panties') + iif($pursepa...
    scene.text('<center><b>You put the \' + iif($pursepantytype = \', \', \'panties\') + iif($pursepantytype = \' or $pursebratype = \', \', \' and \') + iif($pursebratype = \', \', \'bra\') + \' from your purse back in the wardrobe.</b></center><br>');
  }
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'panties', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'panty_view', 'init', 'add_types', 'all');
    if (((s as any).locArgs?.[1] ?? 0) === 'wardrobe'  ||  ((s as any).locArgs?.[1] ?? 0) === 'storage'  ||  ((s as any).locArgs?.[1] ?? 0) === 'unwanted') {
      qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    } else {
      qspCall(s, 'shop_utils', 'init', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    }
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove panties', handler: (st: GameState) => {
    qspCall(s, 'panties', 'strip');
    // TODO-QSP: gt 'panty_view', 'view_grid', $shop_display['link']
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
  ((s as any).shop_utils_view ?? {})['link'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shop_utils_view ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).shop_utils_view ?? {})['number'] = qspUntranslated(s, "ARGS[3]", { location: "panty_view" });
  ((s as any).shop_utils_view ?? {})['discount'] = qspUntranslated(s, "ARGS[4]", { location: "panty_view" });
  qspCall(s, 'stat', '');
  scene.img(`${qspFunc(s, '$panty_image', '$shop_utils_view[\'type\']', ((s as any).shop_utils_view ?? 0)?.['number'])}`);
  // TODO-QSP: gs 'underwear_attributes', $shop_utils_view['type'] + '_panties', shop_utils_view['number']
  qspCall(s, 'underwear_descriptions', 'panties');
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    // TODO-QSP: dynamic text: These panties form a set with bra #<<underwear['pair']>>.
    scene.text(`These panties form a set with bra #${((s as any).underwear ?? 0)?.['pair']}.`);
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
    // TODO-QSP: xgt 'panty_view', 'view_item_shop'
  }
  if (qspFunc(s, 'panties', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    // TODO-QSP: xgt 'panty_view', 'view_item_wearing'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    // TODO-QSP: xgt 'panty_view', 'view_item_wardrobe'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'bathroom') {
    // TODO-QSP: xgt 'panty_view', 'view_item_bathroom'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
    // TODO-QSP: xgt 'panty_view', 'view_item_storage'
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
    // TODO-QSP: xgt 'panty_view', 'view_item_unwanted'
  }
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'panty_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 1) {
    scene.text('You already own this item.');
    return;
  }
  ((s as any).shop_utils_view ?? {})['pan_discount'] = Math.min(Math.max(0, ((s as any).shop_utils_view ?? {})?.['discount'] + ((s as any).shop_utils_view ?? {})?.['discount']), 100);
  ((s as any).shop_utils_view ?? {})['pan_price'] = ((s as any).PanPrice ?? 0);
  ((s as any).shop_utils_view ?? {})['price'] = ((s as any).shop_utils_view ?? {})?.['pan_price'] * Math.max(0, 100 - ((s as any).shop_utils_view ?? {})?.['pan_discount']) / 100;
  ((s as any).shop_utils_view ?? {})['price'] = ((s as any).shop_utils_view ?? {})?.['price'] / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['pan_price']) {
    ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']);
  } else {
    ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['pan_price'])) + ' <b>' +  qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']) + '</b>';
    // TODO-QSP: 'Now ' + shop_utils_view['pan_discount'] + '% off' + iif(shop_utils_view['pan_discount'] <= 10, '', ...
  }
  // TODO-QSP: 'Price: ' + $shop_utils_view['price_string']
  if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
    scene.text('You cannot afford these panties.');
  } else {
    scene.actions([
      { label: 'Buy (<<$shop_utils_view[\'price_string\']>>)', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['price']
    // TODO-QSP: gs 'panties', 'add_item', $shop_utils_view['type'], shop_utils_view['number']
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    if (qspFunc(s, 'bras', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).underwear ?? 0)?.['pair'])) {
      scene.text('You own the matching bra buying these panties will complete the set.');
    } else {
      scene.text('You do not own the matching bra, you can buy it and these panties together as a set.');
      // TODO-QSP: gs 'underwear_attributes', $shop_utils_view['type'] + '_bras', underwear['pair']
      ((s as any).shop_utils_view ?? {})['bra_discount'] = Math.min(Math.max(0, ((s as any).shop_utils_view ?? {})?.['discount'] + ((s as any).shop_utils_view ?? {})?.['discount']), 100);
      ((s as any).shop_utils_view ?? {})['bra_price'] = ((s as any).BraPrice ?? 0);
      ((s as any).shop_utils_view ?? {})['set_price'] = 9 * (((s as any).shop_utils_view ?? {})?.['bra_price'] * (100 - ((s as any).shop_utils_view ?? {})?.['bra_discount']) + ((s as any).shop_utils_view ?? {})?.['pan_price'] * (100 - ((s as any).shop_utils_view ?? {})?.['pan_discount'])) / 1000;
      ((s as any).shop_utils_view ?? {})['set_price'] = ((s as any).shop_utils_view ?? {})?.['set_price'] / 50 * 50;
      ((s as any).shop_utils_view ?? {})['base_price'] = ((s as any).shop_utils_view ?? {})?.['bra_price'] + ((s as any).shop_utils_view ?? {})?.['pan_price'];
      ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['set_price']);
      ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['base_price'])) + ' <b>' +  qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['set_price']) + '</b>';
      // TODO-QSP: 'Price for set: ' + $shop_utils_view['price_string']
      if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['set_price']) === 0) {
        scene.text('You cannot afford this set.');
      } else {
        scene.actions([
          { label: 'Buy set (<<$shop_utils_view[\'price_string\']>>)', handler: (st: GameState) => {
    // TODO-QSP: gs 'underwear_attributes', $shop_utils_view['type'] + '_panties', shop_utils_view['number']
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['set_price']
    // TODO-QSP: gs 'panties', 'add_item', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gs 'bras', 'add_item', $shop_utils_view['type'], underwear['pair']
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
  scene.text('You are wearing these panties.');
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    scene.actions([
      { label: 'Take off your panties', handler: (st: GameState) => {
    qspCall(s, 'panties', 'strip');
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['wardrobe', 'main'] },
    ]);
  }
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'panty_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    if (qspFunc(s, 'bras', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).underwear ?? 0)?.['pair']) === 0) {
      scene.text('You do not own the matching bra to make this set.');
    } else {
      scene.text('You own this bra and can wear this set.');
      scene.actions([
        { label: 'Wear set', handler: (st: GameState) => {
    // TODO-QSP: xgt 'panty_view', 'view_item_wear_pair'
  } },
      ]);
    }
  }
  qspCall(s, 'panty_view', 'storage_options');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'panty_view', 'view_grid', $shop_utils_view['link']
  } },
    { label: 'Wear', handler: (st: GameState) => {
    // TODO-QSP: xgt 'panty_view', 'view_item_wear_single'
  } },
  ]);
  scene.build();
}

function enterViewItemBathroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloPanties ?? 0) === 1) {
  } else {
    if (((s as any).hypnoPanty ?? 0) <= 0) {
      scene.actions([
        { label: 'Wear', handler: (st: GameState) => {
    // TODO-QSP: gs 'panties', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'shop_utils', 'cleanup');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  }
  if (((s as any).hypnoPanty ?? 0) > 0) {
    qspCall(s, 'panty_view', 'view_item_wear_single_hypno', 1);
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  }
  if (((s as any).underwear ?? 0)?.['pair'] > 0) {
    if (qspFunc(s, 'bras', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).underwear ?? 0)?.['pair']) === 0) {
      scene.text('You do not own the matching bra to make this set.');
    } else {
      scene.text('You own this bra and can wear this set.');
      scene.actions([
        { label: 'Wear set', handler: (st: GameState) => {
    qspCall(s, 'panty_view', 'view_item_wear_pair', 1);
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
  scene.text('These panties are in storage.');
  qspCall(s, 'panty_view', 'storage_options');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'panty_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemUnwanted(s: GameState, scene: SceneBuilder): void {
  scene.text('These panties are unwanted.');
  qspCall(s, 'panty_view', 'storage_options');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'panty_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemWearSingle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloPanties ?? 0) === 1) {
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'panty_view', 'view_item', $shop_utils_view['action'], $s...
  } },
    ]);
  }
  if (((s as any).hypnoPanty ?? 0) > 0) {
    // TODO-QSP: xgt 'panty_view', 'view_item_wear_single_hypno'
  }
  // TODO-QSP: gs 'panties', 'wear', $shop_utils_view['type'], shop_utils_view['number']
  qspCall(s, 'shop_utils', 'cleanup');
  scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
  scene.build();
}

function enterViewItemWearSingleHypno(s: GameState, scene: SceneBuilder): void {
  scene.text('You pick up the panties and think about trying them on… but you don\'t really like wearing panties.');
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTime ?? 0));
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: gs 'panties', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'shop_utils', 'cleanup');
    if ((!((s as any).locArgs?.[1] ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
    }
  } },
    ]);
  }
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'panty_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemWearPair(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloPanties ?? 0) === 1) {
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'panty_view', 'view_item', $shop_utils_view['action'], $s...
  } },
    ]);
  }
  if (((s as any).PCloBra ?? 0) === 1) {
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'panty_view', 'view_item', $shop_utils_view['action'], $s...
  } },
    ]);
  }
  if (((s as any).hypnoBra ?? 0) > 0  ||  ((s as any).hypnoPanty ?? 0) > 0) {
    // TODO-QSP: xgt 'panty_view', 'view_item_wear_pair_hypno'
  }
  // TODO-QSP: gs 'panties', 'wear', $shop_utils_view['type'], shop_utils_view['number']
  // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], underwear['pair']
  qspCall(s, 'shop_utils', 'cleanup');
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
  }
  return;
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
      if (((s as any).hypnoPanty ?? 0) > 0) {
        scene.text('You pick up the panties and think about trying them on… but you don\'t really like wearing panties.');
        qspCall(s, 'willpower', 'misc', 'resist', 'easy');
      }
    }
  }
  if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTime ?? 0));
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: gs 'panties', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gs 'bras', 'wear', $shop_utils_view['type'], underwear['pair']
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['wardrobe', 'main'] },
    ]);
  }
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'panty_view', 'view_grid', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'panties', 'in_wardrobe', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to wardrobe', handler: (st: GameState) => {
    // TODO-QSP: gs 'panties', 'move_to_wardrobe', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'panty_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['n...
  } },
    ]);
  }
  if (qspFunc(s, 'panties', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'panties', 'in_storage', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to storage', handler: (st: GameState) => {
    // TODO-QSP: gs 'panties', 'move_to_storage', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'panty_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['n...
  } },
    ]);
  }
  if (qspFunc(s, 'panties', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to unwanted', handler: (st: GameState) => {
    // TODO-QSP: gs 'panties', 'move_to_unwanted', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'panty_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view['n...
  } },
    ]);
  }
  // TODO-QSP: act $func('wrap', 'neg', 'Throw these panties away'):
  // TODO-QSP: gs 'panties', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
  // TODO-QSP: gt 'panty_view', 'view_grid', $shop_utils_view['link']
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

export const panty_view: LocationDef = {
  name: 'panty_view',
  title: 'Throw these panties away',
  region: 'other',
  enter: enter,
};
