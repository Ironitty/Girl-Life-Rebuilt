import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_home_filters') {
    // TODO-QSP: gs 'shop_utils', 'filter_builder', 'init', 'coat_view', 'view_grid', $shop_display['link']
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
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
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
    // TODO-QSP: gs 'coat_attributes', $ARGS[2], ARGS[3]
    if (((s as any).CoatQuality ?? 0) === 0) {
      // TODO-QSP: exit
    }
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $ARGS[2], ARGS[3], ARGS[4]
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_quality', $ARGS[2], ARGS[3], CoatQuality
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_price', $ARGS[2], ARGS[3], CoatPrice
    return;
  }
  return;
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      qspCall(s, 'coat_view', 'filter_builder', 'setup_shop_filter');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'coat_attributes', $ARGS[4], ARGS[5]
      // TODO-QSP: *p '<a href="exec: gt ''coat_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5]>>,...
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
      qspCall(s, 'coat_view', 'filter_builder', 'setup_home_filters');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'coat_attributes', $ARGS[4], ARGS[5]
      // TODO-QSP: *p '<a href="exec: gt ''coat_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5]>>,...
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
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'coats', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'coat_view', 'init', 'add_types', 'all');
    if (((s as any).locArgs?.[1] ?? 0) === 'wardrobe'  ||  ((s as any).locArgs?.[1] ?? 0) === 'storage'  ||  ((s as any).locArgs?.[1] ?? 0) === 'unwanted') {
      qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    } else {
      qspCall(s, 'shop_utils', 'init', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    }
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  if (((s as any).coatworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove coat', handler: (st: GameState) => {
    qspCall(s, 'coats', 'remove');
    // TODO-QSP: gt 'coat_view', 'view_grid', $shop_display['link']
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
  (s as any).shop_utils_view['number'] = qspUntranslated(s, "ARGS[3]", { location: "coat_view" });
  (s as any).shop_utils_view['discount'] = qspUntranslated(s, "ARGS[4]", { location: "coat_view" });
  qspCall(s, 'stat', '');
  scene.img(`${qspFunc(s, '\'$coat_image\'', '$shop_utils_view[\'type\']', ((s as any).shop_utils_view ?? 0)?.['\'number\''])}`);
  // TODO-QSP: gs 'coat_attributes', $shop_utils_view['type'], shop_utils_view['number']
  if (((s as any).CoatWarm ?? 0) === 1) {
    scene.text('It\'ll keep you fairly warm down to -10C.');
  } else {
    scene.text('It will handle temperatures down to -20C.');
    if (((s as any).CoatWarm ?? 0) === 3) {
      scene.text('You will be nice and warm even in the depths of winter.');
    }
    if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
      // TODO-QSP: xgt 'coat_view', 'view_item_shop'
    }
    if (qspFunc(s, 'coats', 'is_wearing', qspUntranslated(s, "\u00000\u0000", { location: "coat_view" }), qspUntranslated(s, "\u00001\u0000", { location: "coat_view" }))) {
      // TODO-QSP: xgt 'coat_view', 'view_item_wearing'
    }
    if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
      // TODO-QSP: xgt 'coat_view', 'view_item_wardrobe'
    }
    if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
      // TODO-QSP: xgt 'coat_view', 'view_item_storage'
    }
    if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
      // TODO-QSP: xgt 'coat_view', 'view_item_unwanted'
    }
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'coat_view', 'view_grid', $shop_utils_view['link']
  } },
    ]);
  }
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
    default:
      enterFilterBuilder(s, scene);
      break;
  }
}

export const coat_view: LocationDef = {
  name: 'coat_view',
  title: 'Throw this coats away',
  region: 'other',
  enter: enter,
};
