import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetWardrobeListHeader(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<tr>';
  (s as any).result = ((s as any).result ?? 0) + ('<th></th>');
  (s as any).result = ((s as any).result ?? 0) + ('<th>Shoe</th>');
  (s as any).result = ((s as any).result ?? 0) + ('<th>Description</th>');
  (s as any).result = ((s as any).result ?? 0) + ('<th>Bimbo</th>');
  (s as any).result = ((s as any).result ?? 0) + ('<th>Stripper</th>');
  (s as any).result = ((s as any).result ?? 0) + ('<th>Actions</th>');
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  return;
  scene.build();
}

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_home_filters') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', 'shoe_view', 'view_list', (((s as any).shop_display ?? 0)?.['link']));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_heelsize_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_sport_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_stripper_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_bimbo_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_goth_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_punk_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_alternative_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_heels_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_comfy_heels_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_uncomfy_heels_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_extreme_heels_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_shop_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_price_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_discount_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_heelsize_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_stripper_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_bimbo_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_goth_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_punk_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_alternative_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_heels_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_comfy_heels_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_uncomfy_heels_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_extreme_heels_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_sport_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sport_filter', 'ShoSport');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_stripper_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_stripper_filter', 'ShoStrip');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_bimbo_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_bimbo_filter', 'ShoBimbo');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_goth_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_goth_filter', 'ShoGoth');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_punk_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_punk_filter', 'ShoPunk');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_alternative_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_alternative_filter', 'ShoStyle = 1');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_heels_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_heels_filter', 'ShoHeels > 1');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_comfy_heels_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_comfy_heels_filter', 'pcs_heels >= ShoPain[\'mild\']');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_uncomfy_heels_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_uncomfy_heels_filter', 'pcs_heels >= ShoPain[\'severe\'] and pcs_heels < ShoPain[\'mild\']');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_extreme_heels_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_extreme_heels_filter', 'pcs_heels < ShoPain[\'severe\']');
    return;
  }
  return;
  scene.build();
}

function enterHomeFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'shoe_view', 'filter', 'stripper')    === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'bimbo')      === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'alternative')  === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'sport')      === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'heels')      === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'comfy_heels')  === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'uncomfy_heels')  === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'extreme_heels')  === 0) {
    return;
  }
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  scene.build();
}

function enterShopFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'shoe_view', 'filter', 'stripper')    === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'bimbo')      === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'alternative')  === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'sport')      === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'heels')      === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'comfy_heels')  === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'uncomfy_heels')  === 0) {
    return;
  }
  if (qspFunc(s, 'shoe_view', 'filter', 'extreme_heels')  === 0) {
    return;
  }
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  scene.build();
}

function enterFilter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'stripper') {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'bimbo') {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'alternative') {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'sport') {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'heels') {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'comfy_heels') {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'uncomfy_heels') {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'extreme_heels') {
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
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||  (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
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
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'add') {
    qspCall(s, 'shoe_attributes', '$ARGS[2]', ((s as any).locArgs?.[3] ?? 0));
    if ((!((s as any).ShoQuality ?? 0))) {
      return;
    }
    qspCall(s, 'shop_utils', 'sorted', 'add_to_number', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_quality', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).ShoQuality ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_heelsize', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).ShoHeels ?? 0));
    qspCall(s, 'shop_utils', 'sorted', 'add_to_price', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).ShoPrice ?? 0));
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
      qspCall(s, 'shoe_attributes', '$ARGS[4]', ((s as any).locArgs?.[5] ?? 0));
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        scene.img(`${qspFunc(s, '$shoe_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
      }
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'footer') {
      return;
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'list_wardrobe') {
    if (String((s as any).locArgs?.[2] ?? '') === 'header') {
      qspCall(s, 'shop_utils', 'display', 'wardrobe_storage_unwanted_header', 'view_list');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_home_filters']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.text('<center><table border=0 cellspacing=0 cellpadding=5>');
      scene.text(qspFunc(s, 'shoe_view', 'get_wardrobe_list_header'));
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'main') {
      qspCall(s, 'shoe_attributes', '$ARGS[4]', ((s as any).locArgs?.[5] ?? 0));
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0)]; enterListLine(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
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

function enterDisplayListWardrobe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'list_wardrobe');
  return;
  scene.build();
}

function enterViewList(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', ((s as any).locArgs?.[1] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_types', 'all']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (String((s as any).locArgs?.[1] ?? '') === 'wardrobe'  ||  String((s as any).locArgs?.[1] ?? '') === 'storage'  ||  String((s as any).locArgs?.[1] ?? '') === 'unwanted') {
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
    qspCall(st, 'shoes', 'strip');
    qspGoto(st, 'shoe_view', 'view_list', (((st as any).shop_display ?? {})['link']));
  } },
      ]);
    }
  }
  qspCall(s, 'shop_utils', 'display', 'list_wardrobe');
  scene.actions([
{ label: 'Return', goto: ['shop_utils', 'return'] },
]);
  return;
  scene.build();
}

function enterListLine(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'clothing');
  qspCall(s, 'shoe_attributes', '$ARGS[2]', ((s as any).locArgs?.[3] ?? 0));
  scene.text('<tr bgcolor=' + ((s as any).temp_bcolor ?? '') + '>');
  scene.img(`${qspFunc(s, '$shoe_image', '', ((s as any).locArgs?.[2] ?? ''), ((s as any).locArgs?.[3] ?? ''))}`);
  scene.text(`<td>${qspFunc(s, '$shoe_description', '', ((s as any).locArgs?.[2] ?? ''), ((s as any).locArgs?.[3] ?? ''))}</td>`);
  scene.text(`<td>${qspFunc(s, '$shoe_description2', '', ((s as any).locArgs?.[2] ?? ''))}</td>`);
  scene.text('<td>' + ((((s as any).ShoBimbo ?? 0)) ? ('Yes') : ('No')) + '</td>');
  scene.text('<td>' + ((((s as any).ShoStrip ?? 0)) ? ('Yes') : ('No')) + '</td>');
  scene.text(`<td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027shoe_view/u0027, /u0027view_item/u0027, /u0027wardrobe/u0027); return false;">View</a></td>`);
  scene.text('<td>');
  if (qspFunc(s, 'shoes', 'in_wardrobe', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)) === 0) {
    scene.text(` <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027shoe_view/u0027, /u0027list_line_move_to_wardrobe/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">Wardrobe</a>`);
  }
  if (qspFunc(s, 'shoes', 'in_storage', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)) === 0) {
    scene.text(` <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027shoe_view/u0027, /u0027list_line_move_to_storage/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">Storage</a>`);
  }
  if (qspFunc(s, 'shoes', 'in_unwanted', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)) === 0) {
    scene.text(` <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027shoe_view/u0027, /u0027list_line_move_to_unwanted/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">Unwanted</a>`);
  }
  scene.text('</td>');
  scene.text('</tr>');
  return;
  scene.build();
}

function enterListLineMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoes', 'move_to_wardrobe', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  qspGoto(s, 'shoe_view', 'view_list', String((s as any).locArgs?.[1] ?? ''));
  scene.build();
}

function enterListLineMoveToStorage(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoes', 'move_to_storage', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  qspGoto(s, 'shoe_view', 'view_list', String((s as any).locArgs?.[1] ?? ''));
  scene.build();
}

function enterListLineMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoes', 'move_to_unwanted', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  qspGoto(s, 'shoe_view', 'view_list', String((s as any).locArgs?.[1] ?? ''));
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['link'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['number'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount'] = ((s as any).locArgs?.[4] ?? 0);
  qspCall(s, 'stat', '');
  scene.img(`${qspFunc(s, '$shoe_image', '', (((s as any).shop_utils_view ?? 0)?.['type'] ?? ''), (((s as any).shop_utils_view ?? 0)?.['number'] ?? ''))}`);
  qspCall(s, 'shoe_attributes', '$shop_utils_view[\'type\']', (((s as any).shop_utils_view ?? 0)?.['number']));
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
    if (((s as any).pcs_heels ?? 0) < ((s as any).ShoPain ?? 0)?.['severe']) {
      scene.text('You can walk in these heels, but it\'ll hurt <b>a lot</b>.');
    } else {
      if (((s as any).pcs_heels ?? 0) < ((s as any).ShoPain ?? 0)?.['medium']) {
        scene.text('You can walk in these heels, but it\'ll hurt.');
      } else {
        if (((s as any).pcs_heels ?? 0) < ((s as any).ShoPain ?? 0)?.['mild']) {
          scene.text('You can walk in these heels, but it\'ll be uncomfortable.');
        }
      }
    }
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
    qspGoto(s, 'shoe_view', 'view_item_shop');
  }
  if (qspFunc(s, 'shoes', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    qspGoto(s, 'shoe_view', 'view_item_wearing');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    qspGoto(s, 'shoe_view', 'view_item_wardrobe');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
    qspGoto(s, 'shoe_view', 'view_item_storage');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
    qspGoto(s, 'shoe_view', 'view_item_unwanted');
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'shoe_view', 'view_list', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You already own these shoes.');
    return;
  }
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount_total'] = (((s as any).shop_utils_view ?? {})?.['discount'] ?? 0) + qspFunc(s, 'shop_utils', 'get_discount', (((s as any).shop_utils_view ?? 0)?.['type']) + '_shoe', (((s as any).shop_utils_view ?? 0)?.['number']));
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['base_price'] = ((s as any).ShoPrice ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['base_price'] ?? 0) * Math.max(0, 100 - (((s as any).shop_utils_view ?? {})?.['discount_total'] ?? 0)) / 100;
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['price'] ?? 0) / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['price']));
  } else {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['base_price']))) + ' <b>' + qspFunc(s, 'money', 'string_price', (((s as any).shop_utils_view ?? 0)?.['price'])) + '</b>';
    scene.text('Now ' + (((s as any).shop_utils_view ?? 0)?.['discount_total'] ?? '') + '% off' + ((((s as any).shop_utils_view ?? 0)?.['discount_total'] <= 10) ? ('') : ('!')));
  }
  scene.text('Price: ' + (((s as any).shop_utils_view ?? 0)?.['price_string'] ?? ''));
  if (((s as any).pcs_heels ?? 0) < ((s as any).ShoSkill ?? 0)) {
    scene.text('You can\'t bring yourself to buy them.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
    scene.text('You do not have enough money to buy these shoes.');
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Buy (' + String((((s as any).shop_utils_view ?? 0)?.['price_string'] ?? '') ?? '') + ')', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', (((st as any).shop_utils_view ?? 0)?.['price']));
    qspCall(st, 'shoes', 'add_item', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
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
  scene.text('You are wearing these shoes.');
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    scene.actions([
      { label: 'Strip out of your shoes', handler: (st: GameState) => {
    qspCall(st, 'shoes', 'strip');
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'wardrobe', 'main');
  } },
    ]);
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'shoe_view', 'view_list', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  scene.build();
}

function enterViewItemWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_heels ?? 0) >= ((s as any).ShoSkill ?? 0)) {
    scene.actions([
      { label: 'Wear', handler: (st: GameState) => {
    qspCall(st, 'shoes', 'wear', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'wardrobe', 'main');
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'shoe_view', 'view_list', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  scene.build();
}

function enterViewItemStorage(s: GameState, scene: SceneBuilder): void {
  scene.text('These shoes are in storage.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'shoe_view', 'view_list', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  scene.build();
}

function enterViewItemUnwanted(s: GameState, scene: SceneBuilder): void {
  scene.text('These shoes are unwanted.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'shoe_view', 'view_list', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    return;
  }
  if (qspFunc(s, 'shoes', 'in_wardrobe', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to wardrobe', handler: (st: GameState) => {
    qspCall(st, 'shoes', 'move_to_wardrobe', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'shoe_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'shoes', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    return;
  }
  if (qspFunc(s, 'shoes', 'in_storage', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to storage', handler: (st: GameState) => {
    qspCall(st, 'shoes', 'move_to_storage', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'shoe_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'shoes', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to unwanted', handler: (st: GameState) => {
    qspCall(st, 'shoes', 'move_to_unwanted', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'shoe_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  scene.actions([
{ label: '', labelFn: (s: GameState) => String(qspFunc(s, 'wrap', 'neg', 'Throw these shoes away') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'shoes', 'remove_item', (((st as any).shop_utils_view ?? 0)?.['type']), (((st as any).shop_utils_view ?? 0)?.['number']));
    qspGoto(st, 'shoe_view', 'view_list', (((st as any).shop_utils_view ?? {})['link']));
  } },
]);
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

export const shoe_view: LocationDef = {
  name: 'shoe_view',
  title: 'Throw these shoes away',
  region: 'other',
  enter: enter,
};
