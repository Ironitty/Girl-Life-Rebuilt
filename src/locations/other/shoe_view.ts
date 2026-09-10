import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetWardrobeListHeader(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result +=    '<th></th>'
  // TODO-QSP: $result +=    '<th>Shoe</th>'
  // TODO-QSP: $result +=    '<th>Description</th>'
  // TODO-QSP: $result +=    '<th>Bimbo</th>'
  // TODO-QSP: $result +=    '<th>Stripper</th>'
  // TODO-QSP: $result +=    '<th>Actions</th>'
  // TODO-QSP: $result +=  '</tr>'
  return;
  scene.build();
}

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_home_filters') {
    // TODO-QSP: gs 'shop_utils', 'filter_builder', 'init', 'shoe_view', 'view_list', $shop_display['link']
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_heelsize_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_sport_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_stripper_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_bimbo_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_goth_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_punk_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_alternative_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_heels_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_comfy_heels_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_uncomfy_heels_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_extreme_heels_filter');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_shop_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_price_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_discount_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_heelsize_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_stripper_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_bimbo_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_goth_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_punk_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_alternative_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_heels_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_comfy_heels_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_uncomfy_heels_filter');
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_extreme_heels_filter');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_sport_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sport_filter', 'ShoSport');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_stripper_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_stripper_filter', 'ShoStrip');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_bimbo_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_bimbo_filter', 'ShoBimbo');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_goth_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_goth_filter', 'ShoGoth');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_punk_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_punk_filter', 'ShoPunk');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_alternative_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_alternative_filter', 'ShoStyle = 1');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_heels_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_heels_filter', 'ShoHeels > 1');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_comfy_heels_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_comfy_heels_filter', 'pcs_heels >= ShoPain[\'mild\']');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_uncomfy_heels_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_uncomfy_heels_filter', 'pcs_heels >= ShoPain[\'severe\'] and pcs_heels < ShoPain[\'mild\']');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_extreme_heels_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_extreme_heels_filter', 'pcs_heels < ShoPain[\'severe\']');
    return;
  }
  return;
  scene.build();
}

function enterHomeFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'shoe_view', 'filter', 'stripper')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'bimbo')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'alternative')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'sport')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'heels')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'comfy_heels')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'uncomfy_heels')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'extreme_heels')  === 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  scene.build();
}

function enterShopFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'shoe_view', 'filter', 'stripper')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'bimbo')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'alternative')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'sport')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'heels')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'comfy_heels')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'uncomfy_heels')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'extreme_heels')  === 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  scene.build();
}

function enterFilter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'stripper') {
    if (((s as any).ShoStrip ?? 0)) {
      if (((s as any).outfitfilter ?? 0)?.['stripper'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['stripper'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'bimbo') {
    if (((s as any).ShoBimbo ?? 0)) {
      if (((s as any).outfitfilter ?? 0)?.['bimbo'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['bimbo'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'alternative') {
    if (((s as any).ShoStyle ?? 0) === 1) {
      if (((s as any).outfitfilter ?? 0)?.['alternative'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['alternative'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'sport') {
    if (((s as any).ShoSport ?? 0)) {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'heels') {
    if (((s as any).ShoHeels ?? 0) > 1) {
      if (((s as any).outfitfilter ?? 0)?.['heels'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['heels'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'comfy_heels') {
    if (((s as any).pcs_heels ?? 0) >= ((s as any).ShoPain ?? 0)?.['mild']) {
      if (((s as any).outfitfilter ?? 0)?.['comfy_heels'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['comfy_heels'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'uncomfy_heels') {
    if (((s as any).pcs_heels ?? 0) >= ((s as any).ShoPain ?? 0)?.['severe']  &&  ((s as any).pcs_heels ?? 0) < ((s as any).ShoPain ?? 0)?.['mild']) {
      if (((s as any).outfitfilter ?? 0)?.['uncomfy_heels'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['uncomfy_heels'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'extreme_heels') {
    if (((s as any).pcs_heels ?? 0) < ((s as any).ShoPain ?? 0)?.['severe']) {
      if (((s as any).outfitfilter ?? 0)?.['extreme_heels'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['extreme_heels'] <= 0) {
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
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||  ((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(13))) === 'scandalicious') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'scandalicious');
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
    // TODO-QSP: gs 'shoe_attributes', $ARGS[2], ARGS[3]
    if (((s as any).ShoQuality ?? 0) === 0) {
      // TODO-QSP: exit
    }
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $ARGS[2], ARGS[3], ARGS[4]
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_quality', $ARGS[2], ARGS[3], ShoQuality
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_heelsize', $ARGS[2], ARGS[3], ShoHeels
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_price', $ARGS[2], ARGS[3], ShoPrice
    return;
  }
  return;
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      qspCall(s, 'shoe_view', 'filter_builder', 'setup_shop_filter');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'shoe_attributes', $ARGS[4], ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        // TODO-QSP: *p '<a href="exec: gt ''shoe_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5]>>,...
      }
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'footer') {
      return;
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'list_wardrobe') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      qspCall(s, 'shop_utils', 'display', 'wardrobe_storage_unwanted_header', 'view_list');
      qspCall(s, 'shoe_view', 'filter_builder', 'setup_home_filters');
      // TODO-QSP: *p '<center><table border=0 cellspacing=0 cellpadding=5>'
      // TODO-QSP: *p $func('shoe_view', 'get_wardrobe_list_header')
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'shoe_attributes', $ARGS[4], ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        // TODO-QSP: gs 'shoe_view', 'list_line', $ARGS[3], $ARGS[4], ARGS[5], ARGS[6]
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

function enterDisplayListWardrobe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'list_wardrobe');
  return;
  scene.build();
}

function enterViewList(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'shoe_view', 'init', 'add_types', 'all');
    if (((s as any).locArgs?.[1] ?? 0) === 'wardrobe'  ||  ((s as any).locArgs?.[1] ?? 0) === 'storage'  ||  ((s as any).locArgs?.[1] ?? 0) === 'unwanted') {
      qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    } else {
      qspCall(s, 'shop_utils', 'init', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    }
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  if (((s as any).shop_display ?? 0)?.['link'] !== 'sell') {
    scene.text('<center><b>Select shoes to wear</b> *Bonus to attractiveness only applied in wardrobe and outdoors.</center>');
    if (((s as any).shoeworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Remove shoes', handler: (st: GameState) => {
    qspCall(s, 'shoes', 'strip');
    // TODO-QSP: gt 'shoe_view', 'view_list', $shop_display['link']
  } },
      ]);
    }
  }
  qspCall(s, 'shop_utils', 'display', 'list_wardrobe');
  return;
  scene.actions([
    { label: 'Return', goto: ['shop_utils', 'return'] },
  ]);
  scene.build();
}

function enterListLine(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'clothing');
  // TODO-QSP: gs 'shoe_attributes', $ARGS[2], ARGS[3]
  // TODO-QSP: *p  '<tr bgcolor='+$temp_bcolor+'>'
  // TODO-QSP: *p    '<td><a href="exec:gt ''shoe_view'', ''view_item'', ''wardrobe'', ''<<$ARGS[2]>>'', <<ARGS[3]>...
  // TODO-QSP: *p    '<td><<$func(''$shoe_description'', $ARGS[2], ARGS[3])>></td>'
  // TODO-QSP: *p    '<td><<$func(''$shoe_description2'', $ARGS[2])>></td>'
  // TODO-QSP: *p    '<td>' + iif(ShoBimbo, 'Yes', 'No') + '</td>'
  // TODO-QSP: *p    '<td>' + iif(ShoStrip, 'Yes', 'No') + '</td>'
  // TODO-QSP: *p    '<td><a href="exec:gt ''shoe_view'', ''view_item'', ''wardrobe'', ''<<$ARGS[2]>>'', <<ARGS[3]>...
  // TODO-QSP: *p    '<td>'
  if (qspFunc(s, 'shoes', 'in_wardrobe', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "shoe_view" })) === 0) {
    // TODO-QSP: *p ' <a href="exec: gt ''shoe_view'', ''list_line_move_to_wardrobe'', ''<<$ARGS[1]>>'', ''<<$ARGS[2]...
  }
  if (qspFunc(s, 'shoes', 'in_storage', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "shoe_view" })) === 0) {
    // TODO-QSP: *p ' <a href="exec: gt ''shoe_view'', ''list_line_move_to_storage'', ''<<$ARGS[1]>>'', ''<<$ARGS[2]>...
  }
  if (qspFunc(s, 'shoes', 'in_unwanted', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "shoe_view" })) === 0) {
    // TODO-QSP: *p ' <a href="exec: gt ''shoe_view'', ''list_line_move_to_unwanted'', ''<<$ARGS[1]>>'', ''<<$ARGS[2]...
  }
  // TODO-QSP: *p    '</td>'
  // TODO-QSP: *p  '</tr>'
  return;
  scene.build();
}

function enterListLineMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoes', 'move_to_wardrobe', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'shoe_view', 'view_list', $ARGS[1]
  scene.build();
}

function enterListLineMoveToStorage(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoes', 'move_to_storage', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'shoe_view', 'view_list', $ARGS[1]
  scene.build();
}

function enterListLineMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoes', 'move_to_unwanted', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'shoe_view', 'view_list', $ARGS[1]
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_utils_view['link'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).shop_utils_view['type'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).shop_utils_view['number'] = qspUntranslated(s, "ARGS[3]", { location: "shoe_view" });
  (s as any).shop_utils_view['discount'] = qspUntranslated(s, "ARGS[4]", { location: "shoe_view" });
  qspCall(s, 'stat', '');
  scene.img(`${qspFunc(s, '\'$shoe_image\'', '$shop_utils_view[\'type\']', ((s as any).shop_utils_view ?? 0)?.['\'number\''])}`);
  // TODO-QSP: gs 'shoe_attributes', $shop_utils_view['type'], shop_utils_view['number']
  if (((s as any).ShoStyle ?? 0) === 1) {
    scene.text('This shoe is considered alternative style and makes you feel more assertive and aggressive.');
  }
  if (((s as any).ShoStrip ?? 0)) {
    scene.text('This shoe is considered stripper style and most suitable for stripping or whoring.');
  }
  if (((s as any).ShoBimbo ?? 0)) {
    scene.text('This shoe is considered bimbo style and makes your mind drift toward sexual thoughts.');
  }
  if (((s as any).ShoGoth ?? 0)) {
    scene.text('This shoe is considered goth style.');
  }
  if (((s as any).ShoPunk ?? 0)) {
    scene.text('This shoe is considered punk style.');
  }
  if (((s as any).pcs_heels ?? 0) < ((s as any).ShoSkill ?? 0)) {
    scene.text('You would break your ankles trying to walk in these heels.');
  } else {
    scene.text('You can walk in these heels, but it\'ll hurt <b>a lot</b>.');
    if (((s as any).pcs_heels ?? 0) < ((s as any).ShoPain ?? 0)?.['medium']) {
      scene.text('You can walk in these heels, but it\'ll hurt.');
    } else {
      scene.text('You can walk in these heels, but it\'ll be uncomfortable.');
    }
    if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
      // TODO-QSP: xgt 'shoe_view', 'view_item_shop'
    }
    if (qspFunc(s, 'shoes', 'is_wearing', qspUntranslated(s, "\u00000\u0000", { location: "shoe_view" }), qspUntranslated(s, "\u00001\u0000", { location: "shoe_view" }))) {
      // TODO-QSP: xgt 'shoe_view', 'view_item_wearing'
    }
    if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
      // TODO-QSP: xgt 'shoe_view', 'view_item_wardrobe'
    }
    if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
      // TODO-QSP: xgt 'shoe_view', 'view_item_storage'
    }
    if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
      // TODO-QSP: xgt 'shoe_view', 'view_item_unwanted'
    }
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'shoe_view', 'view_list', $shop_utils_view['link']
  } },
    ]);
  }
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_wardrobe_list_header':
      enterGetWardrobeListHeader(s, scene);
      break;
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
    case 'display_list_wardrobe':
      enterDisplayListWardrobe(s, scene);
      break;
    case 'view_list':
      enterViewList(s, scene);
      break;
    case 'list_line':
      enterListLine(s, scene);
      break;
    case 'list_line_move_to_wardrobe':
      enterListLineMoveToWardrobe(s, scene);
      break;
    case 'list_line_move_to_storage':
      enterListLineMoveToStorage(s, scene);
      break;
    case 'list_line_move_to_unwanted':
      enterListLineMoveToUnwanted(s, scene);
      break;
    case 'view_item':
      enterViewItem(s, scene);
      break;
    default:
      enterGetWardrobeListHeader(s, scene);
      break;
  }
}

export const shoe_view: LocationDef = {
  name: 'shoe_view',
  title: 'Throw these shoes away',
  region: 'other',
  enter: enter,
};
