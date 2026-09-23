import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetWardrobeListHeader(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<tr>';
  // TODO-QSP: $result +=    '<th></th>'
  // TODO-QSP: $result +=    '<th>Strength</th>'
  // TODO-QSP: $result +=    '<th>Hip size</th>'
  // TODO-QSP: $result +=    '<th>Description</th>'
  // TODO-QSP: $result +=    '<th>Specials</th>'
  // TODO-QSP: $result +=    '<th>Wardrobe</th>'
  // TODO-QSP: $result +=    '<th>Storage</th>'
  // TODO-QSP: $result +=    '<th>Unwanted (Sell)</th>'
  // TODO-QSP: $result +=    '<th>Attempt Repair (0:30)</th>'
  // TODO-QSP: $result +=    '<th>Resize(0:30)</th>'
  // TODO-QSP: $result +=    '<th>Throw Out</th>'
  // TODO-QSP: $result +=  '</tr>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_home_list_filters') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', 'clothing_view', 'view_list', ((s as any).ward_list_store ?? 0));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_inhibition_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_prostitution_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_stripper_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_bimbo_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_goth_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_preppy_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_prude_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_punk_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_conservative_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_risque_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_loose_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_sport_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_school_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_maid_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_server_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_swim_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_home_grid_filters') {
    // TODO-QSP: gs 'shop_utils', 'filter_builder', 'init', 'clothing_view', 'view_grid', $shop_utils_view['link'], $...
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_inhibition_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_prostitution_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_stripper_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_bimbo_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_goth_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_preppy_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_prude_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_punk_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_conservative_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_risque_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_loose_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_sport_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_school_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_maid_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_server_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_shop_filters') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_price_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_discount_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_inhibition_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_prostitution_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_stripper_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_bimbo_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_goth_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_preppy_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_prude_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_punk_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_conservative_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_risque_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_too_risque_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_loose_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_school_filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_prostitution_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_prostitution_filter', 'CloStyle = 4 or CloProstitute = 1');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_stripper_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_stripper_filter', 'CloStyle2 = 3 or CloStrip = 1');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_bimbo_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_bimbo_filter', 'CloBimbo');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_goth_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_goth_filter', 'CloGoth');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_preppy_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_preppy_filter', 'CloPrep');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_prude_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_prude_filter', 'CloPrude');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_punk_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_punk_filter', 'CloPunk');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_conservative_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_conservative_filter', 'CloInhibit <= pcs_inhib - 10');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_risque_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_risque_filter', '(CloInhibit > pcs_inhib - 10) and (CloInhibit <= pcs_inhib)');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_too_risque_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_too_risque_filter', 'CloInhibit > pcs_inhib');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_loose_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_loose_filter', 'CloStyle = 5');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_sport_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sport_filter', 'CloStyle2 = 6 or CloSport = 1');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_school_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_school_filter', 'CloStyle2 = 4 or CloSchool = 1');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_maid_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_maid_filter', 'CloStyle2 = 1 or CloMaid = 1');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_server_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_server_filter', 'CloStyle2 = 2 or CloServer = 1');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_swim_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_swim_filter', 'CloSwim');
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHomeListFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'clothing_view', 'filter', 'prostitution')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'stripper')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'bimbo')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'conservative')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'risque')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'loose')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'school')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'sport')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'maid')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'server')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'swim')      === 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHomeGridFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'clothing_view', 'filter', 'prostitution')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'stripper')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'bimbo')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'conservative')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'risque')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'loose')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'school')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'sport')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'maid')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'server')    === 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShopFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'filter', 'set_block');
  if (qspFunc(s, 'clothing_view', 'filter', 'prostitution')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'stripper')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'bimbo')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'conservative')  === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'risque')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'loose')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'school')    === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'sport')      === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing_view', 'filter', 'too_risque')  === 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'shop_utils', 'filter', 'set_pass');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFilter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'prostitution') {
    if (((s as any).CloStyle ?? 0) === 4  ||  ((s as any).CloProstitute ?? 0) === 1) {
      if (((s as any).outfitfilter ?? 0)?.['prostitution'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['prostitution'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'stripper') {
    if (((s as any).CloStyle2 ?? 0) === 3  ||  ((s as any).CloStrip ?? 0) === 1) {
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
    if (((s as any).CloBimbo ?? 0)) {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'conservative') {
    if (((s as any).CloInhibit ?? 0) <= ((s as any).pcs_inhib ?? 0) - 10) {
      if (((s as any).outfitfilter ?? 0)?.['conservative'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['conservative'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'risque') {
    if ((((s as any).CloInhibit ?? 0) > ((s as any).pcs_inhib ?? 0) - 10)  &&  (((s as any).CloInhibit ?? 0) <= ((s as any).pcs_inhib ?? 0))) {
      if (((s as any).outfitfilter ?? 0)?.['risque'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['risque'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'loose') {
    if (((s as any).CloStyle ?? 0) === 5) {
      if (((s as any).outfitfilter ?? 0)?.['loose'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['loose'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    if (((s as any).CloStyle2 ?? 0) === 4  ||  ((s as any).CloSchool ?? 0) === 1) {
      if (((s as any).outfitfilter ?? 0)?.['school'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['school'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'sport') {
    if (((s as any).CloStyle2 ?? 0) === 6  ||  ((s as any).CloSport ?? 0) === 1) {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'too_risque') {
    if (((s as any).CloInhibit ?? 0) > ((s as any).pcs_inhib ?? 0)) {
      if (((s as any).outfitfilter ?? 0)?.['too_risque'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['too_risque'] <= 0) {
        (s as any).result = 1;
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'maid') {
    if (((s as any).CloStyle2 ?? 0) === 1  ||  ((s as any).CloMaid ?? 0) === 1) {
      if (((s as any).outfitfilter ?? 0)?.['maid'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['maid'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'server') {
    if (((s as any).CloStyle2 ?? 0) === 2  ||  ((s as any).CloServer ?? 0) === 1) {
      if (((s as any).outfitfilter ?? 0)?.['server'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['server'] <= 0) {
        (s as any).result = 1;
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'swim') {
    if (((s as any).CloSwim ?? 0)) {
      if (((s as any).outfitfilter ?? 0)?.['swim'] >= 0) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).outfitfilter ?? 0)?.['swim'] <= 0) {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'add_types') {
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'swimsuit'  ||   String((s as any).locArgs?.[2] ?? '') === 'allure'  ||           String((s as any).locArgs?.[2] ?? '') === 'allure_swimsuit') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'allure_swimsuit');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'bikinis'  ||     String((s as any).locArgs?.[2] ?? '') === 'allure'  ||           String((s as any).locArgs?.[2] ?? '') === 'allure_bikinis') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'allure_bikinis');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'bomba'  ||           String((s as any).locArgs?.[2] ?? '') === 'bomba_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'bomba'  ||           String((s as any).locArgs?.[2] ?? '') === 'bomba_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'cats'  ||           String((s as any).locArgs?.[2] ?? '') === 'cats_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'cats_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'cats'  ||           String((s as any).locArgs?.[2] ?? '') === 'cats_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'cats_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'coco'  ||           String((s as any).locArgs?.[2] ?? '') === 'coco_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'coco_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'coco'  ||           String((s as any).locArgs?.[2] ?? '') === 'coco_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'coco_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'danilovich'  ||         String((s as any).locArgs?.[2] ?? '') === 'danilovich_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'swimsuit'  ||   String((s as any).locArgs?.[2] ?? '') === 'danilovich_swimwear'  ||     String((s as any).locArgs?.[2] ?? '') === 'danilovich_swimsuit') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich_swimsuit');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'dolls'  ||           String((s as any).locArgs?.[2] ?? '') === 'dolls_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'dolls'  ||           String((s as any).locArgs?.[2] ?? '') === 'dolls_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||                 String((s as any).locArgs?.[2] ?? '') === 'fancypancy'  ||         String((s as any).locArgs?.[2] ?? '') === 'fancy_burlesque') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'fancy_burlesque');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'fashionista'  ||         String((s as any).locArgs?.[2] ?? '') === 'fashionista_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'fashionista'  ||         String((s as any).locArgs?.[2] ?? '') === 'fashionista_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'flamingos'  ||         String((s as any).locArgs?.[2] ?? '') === 'flamingos_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'flamingos_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'flamingos'  ||         String((s as any).locArgs?.[2] ?? '') === 'flamingos_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'flamingos_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'exhibitshop'  ||         String((s as any).locArgs?.[2] ?? '') === 'salacious_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'exhibitshop'  ||         String((s as any).locArgs?.[2] ?? '') === 'salacious_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'gm'  ||             String((s as any).locArgs?.[2] ?? '') === 'gm_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'gm'  ||             String((s as any).locArgs?.[2] ?? '') === 'gm_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||                                     String((s as any).locArgs?.[2] ?? '') === 'gm_office') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_office');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||                                     String((s as any).locArgs?.[2] ?? '') === 'gm_maid') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_maid');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||                                     String((s as any).locArgs?.[2] ?? '') === 'gm_school') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_school');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||                                     String((s as any).locArgs?.[2] ?? '') === 'gm_server') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_server');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'market'  ||           String((s as any).locArgs?.[2] ?? '') === 'market_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'market_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'materinstvo'  ||         String((s as any).locArgs?.[2] ?? '') === 'materinstvo_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'materinstvo_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'moncheri'  ||         String((s as any).locArgs?.[2] ?? '') === 'moncheri_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||                 String((s as any).locArgs?.[2] ?? '') === 'moncheri'  ||         String((s as any).locArgs?.[2] ?? '') === 'moncheri_gown') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri_gown');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'nerdvana'  ||         String((s as any).locArgs?.[2] ?? '') === 'nerdvana_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||                 String((s as any).locArgs?.[2] ?? '') === 'nerdvana'  ||         String((s as any).locArgs?.[2] ?? '') === 'nerdvana_cosplay') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_cosplay');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'swimsuit'  ||   String((s as any).locArgs?.[2] ?? '') === 'nerdvana_swimwear'  ||     String((s as any).locArgs?.[2] ?? '') === 'nerdvana_swimsuit') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_swimsuit');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'bikinis'  ||     String((s as any).locArgs?.[2] ?? '') === 'nerdvana_swimwear'  ||     String((s as any).locArgs?.[2] ?? '') === 'nerdvana_bikinis') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_bikinis');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'scandalicious'  ||       String((s as any).locArgs?.[2] ?? '') === 'scandalicious_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'scandalicious_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'scandalicious'  ||       String((s as any).locArgs?.[2] ?? '') === 'scandalicious_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'scandalicious_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'swimsuit'  ||   String((s as any).locArgs?.[2] ?? '') === 'scandalicious_swimwear'  ||   String((s as any).locArgs?.[2] ?? '') === 'scandalicious_swimsuit') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'scandalicious_swimsuit');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'bikinis'  ||     String((s as any).locArgs?.[2] ?? '') === 'scandalicious_swimwear'  ||   String((s as any).locArgs?.[2] ?? '') === 'scandalicious_bikinis') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'scandalicious_bikinis');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'sexshop'  ||           String((s as any).locArgs?.[2] ?? '') === 'eroto_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_outfits');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'dress'  ||     String((s as any).locArgs?.[2] ?? '') === 'sexshop'  ||           String((s as any).locArgs?.[2] ?? '') === 'eroto_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_dress');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||                 String((s as any).locArgs?.[2] ?? '') === 'sexshop'  ||           String((s as any).locArgs?.[2] ?? '') === 'eroto_strip') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_strip');
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'all'  ||   String((s as any).locArgs?.[2] ?? '') === 'outfits'  ||     String((s as any).locArgs?.[2] ?? '') === 'misc'  ||           String((s as any).locArgs?.[2] ?? '') === 'misc_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'misc_outfits');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_shop_display_exceptions') {
    ((s as any).shop_display_exceptions = (s as any).shop_display_exceptions ?? {})['danilovich_outfits-161'] = 1;
    ((s as any).shop_display_exceptions = (s as any).shop_display_exceptions ?? {})['danilovich_outfits-162'] = 1;
    ((s as any).shop_display_exceptions = (s as any).shop_display_exceptions ?? {})['danilovich_swimsuit-4'] = 1;
    ((s as any).shop_display_exceptions = (s as any).shop_display_exceptions ?? {})['danilovich_swimsuit-31'] = 1;
    ((s as any).shop_display_exceptions = (s as any).shop_display_exceptions ?? {})['gm_school-6'] = 1;
    ((s as any).shop_display_exceptions = (s as any).shop_display_exceptions ?? {})['cats_dress-221'] = 1;
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'add') {
    // TODO-QSP: gs 'clothing_attributes', $ARGS[2], ARGS[3]
    if ((!((s as any).CloQuality ?? 0))) {
      // TODO-QSP: exit
    }
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $ARGS[2], ARGS[3], ARGS[4]
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_quality', $ARGS[2], ARGS[3], CloQuality
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_inhibition', $ARGS[2], ARGS[3], CloInhibit
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_price', $ARGS[2], ARGS[3], CloPrice
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'grid_shop') {
    if (String((s as any).locArgs?.[2] ?? '') === 'header') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_shop_filters']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'main') {
      // TODO-QSP: gs 'clothing_attributes', $ARGS[4], ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        scene.img(`${qspFunc(s, '$clothing_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_home_grid_filters']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'main') {
      // TODO-QSP: gs 'clothing_attributes', $ARGS[4], ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        scene.img(`${qspFunc(s, '$clothing_image', '', ((s as any).locArgs?.[4] ?? ''), ((s as any).locArgs?.[5] ?? ''))}`);
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'setup_home_list_filters']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.text('<center><table border=0 cellspacing=0 cellpadding=5>');
      // TODO-QSP: dynamic text: $func('clothing_view', 'get_wardrobe_list_header')
      scene.text(qspFunc(s, 'clothing_view', 'get_wardrobe_list_header'));
      return;
    }
    if (String((s as any).locArgs?.[2] ?? '') === 'main') {
      // TODO-QSP: gs 'clothing_attributes', $ARGS[4], ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        // TODO-QSP: gs 'clothing_view', 'list_line', $ARGS[3], $ARGS[4], ARGS[5], ARGS[6]
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

function enterDisplayListWardrobe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'list_wardrobe');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewListsList(s: GameState, scene: SceneBuilder): void {
  if (((s as any).wloc ?? 0) === '') {
    (s as any).wloc = 'default1';
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'wardrobe'  ||  String((s as any).locArgs?.[1] ?? '') === ''  &&  ((s as any).ward_list_page ?? 0) === 'wardrobe') {
    (s as any).ward_list_page = 'wardrobe';
    scene.img('images/system/icons/clothing/clothes.png');
    if (((s as any).wardrobeDefaultPagePref ?? 0) === 'viewClothing') {
      (s as any).wardrobeSetDefault = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $wardrobeDefaultPagePref = /u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027clothing_view/u0027, /u0027view_lists_list/u0027, /u0027wardrobe/u0027); return false;">Unset as default wardrobe page</a>';
    } else {
      (s as any).wardrobeSetDefault = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $wardrobeDefaultPagePref = /u0027viewClothing/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027clothing_view/u0027, /u0027view_lists_list/u0027, /u0027wardrobe/u0027); return false;">Set here as default wardrobe page</a>';
    }
    // TODO-QSP: dynamic text: <center><<$wardrobeSetDefault>></center>
    scene.text(`<center>${((s as any).wardrobeSetDefault ?? '')}</center>`);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'resize'  ||  String((s as any).locArgs?.[1] ?? '') === ''  &&  ((s as any).ward_list_page ?? 0) === 'resize') {
      (s as any).ward_list_page = 'resize';
      scene.text('<center><b>Choose item/s to resize</b></center>');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'sell') {
        (s as any).ward_list_page = 'sell';
      }
    }
  }
  scene.text('<center><b>Choose to view all or select by shop</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'all']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (Object.keys((s as any).gm_outfits ?? {}).length + Object.keys((s as any).gm_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gm']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).gm_school ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gm_school']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).gm_office ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gm_office']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).gm_maid ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gm_maid']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).gm_server ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gm_server']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).misc_outfits ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'misc']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).cats_outfits ?? {}).length + Object.keys((s as any).cats_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cats']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).flamingos_outfits ?? {}).length + Object.keys((s as any).flamingos_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'flamingos']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).coco_outfits ?? {}).length + Object.keys((s as any).coco_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'coco']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).fashionista_dress ?? {}).length + Object.keys((s as any).fashionista_outfits ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fashionista']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).moncheri_gown ?? {}).length + Object.keys((s as any).moncheri_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'moncheri']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).scandalicious_outfits ?? {}).length + Object.keys((s as any).scandalicious_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'scandalicious']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).scandalicious_bikinis ?? {}).length + Object.keys((s as any).scandalicious_swimsuit ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'scandalicious_swimwear']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).allure_bikinis ?? {}).length + Object.keys((s as any).allure_swimsuit ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'allure']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).fancy_burlesque ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fancypancy']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).eroto_dress ?? {}).length + Object.keys((s as any).eroto_outfits ?? {}).length + Object.keys((s as any).eroto_strip ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sexshop']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).salacious_outfits ?? {}).length + Object.keys((s as any).salacious_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitshop']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).dolls_outfits ?? {}).length + Object.keys((s as any).dolls_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dolls']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).bomba_outfits ?? {}).length + Object.keys((s as any).bomba_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bomba']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).nerdvana_outfits ?? {}).length + Object.keys((s as any).nerdvana_cosplay ?? {}).length + Object.keys((s as any).nerdvana_bikinis ?? {}).length + Object.keys((s as any).nerdvana_swimsuit ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nerdvana']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).danilovich_outfits ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'danilovich']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).materinstvo_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'materinstvo']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).market_outfits ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'market']; enterDisplayListLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'wardrobe', 'wardrobe_exit_check_outfit');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
{ label: 'Your Clothes', goto: ['wardrobe', 'main'] },
{ label: 'Your sets', handler: (st: GameState) => { qspGoto(st, 'wardrobe', ((st as any).wloc ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayListLink(s: GameState, scene: SceneBuilder): void {
  scene.img(`${0}')>>`);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewList(s: GameState, scene: SceneBuilder): void {
  (s as any).ward_list_store = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'owned');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_types', ((s as any).ward_list_store ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  ((s as any).shop_display = (s as any).shop_display ?? {})['hub_loc'] = 'view_lists_list';
  ((s as any).shop_display = (s as any).shop_display ?? {})['hub_subloc'] = 'view_list';
  qspCall(s, 'shop_utils', 'display', 'list_wardrobe');
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'clothing_view', 'view_lists_list');
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewGridsList(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Wardrobe - Brand Selection</b></center>');
  scene.text('<center><b>Choose to view all or select by shop</b></center>');
  (s as any).regularwornclothingtype = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'all']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (Object.keys((s as any).gm_outfits ?? {}).length + Object.keys((s as any).gm_dress ?? {}).length) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gm']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).gm_school ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gm_school']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).gm_office ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gm_office']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).gm_maid ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gm_maid']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).gm_server ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gm_server']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).cats_outfits ?? {}).length + Object.keys((s as any).cats_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cats']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).flamingos_outfits ?? {}).length + Object.keys((s as any).flamingos_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'flamingos']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).coco_outfits ?? {}).length + Object.keys((s as any).coco_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'coco']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).fashionista_dress ?? {}).length + Object.keys((s as any).fashionista_outfits ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fashionista']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).moncheri_gown ?? {}).length + Object.keys((s as any).moncheri_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'moncheri']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).scandalicious_outfits ?? {}).length + Object.keys((s as any).scandalicious_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'scandalicious']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).fancy_burlesque ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fancypancy']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).eroto_dress ?? {}).length + Object.keys((s as any).eroto_outfits ?? {}).length + Object.keys((s as any).eroto_strip ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sexshop']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).salacious_outfits ?? {}).length + Object.keys((s as any).salacious_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitshop']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).dolls_outfits ?? {}).length + Object.keys((s as any).dolls_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dolls']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).bomba_outfits ?? {}).length + Object.keys((s as any).bomba_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bomba']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).nerdvana_cosplay ?? {}).length + Object.keys((s as any).nerdvana_outfits ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nerdvana']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).danilovich_outfits ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'danilovich']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).materinstvo_dress ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'materinstvo']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (Object.keys((s as any).market_outfits ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'market']; enterDisplayGridLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['wardrobe', 'main'] },
  ]);
  scene.build();
}

function enterDisplayGridLink(s: GameState, scene: SceneBuilder): void {
  scene.img(`${0}')>>`);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewGrid(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') !== '') {
    (s as any).ward_list_store = ((s as any).locArgs?.[2] ?? 0);
  }
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', ((s as any).locArgs?.[1] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_types', ((s as any).ward_list_store ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  ((s as any).shop_display = (s as any).shop_display ?? {})['hub_loc'] = 'view_grids_list';
  ((s as any).shop_display = (s as any).shop_display ?? {})['hub_subloc'] = 'view_grid';
  qspCall(s, 'shop_utils', 'display', 'grid_wardrobe');
  scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'clothing_view', 'view_grids_list');
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterListLine(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'clothing');
  // TODO-QSP: gs 'clothing_attributes', $ARGS[2], ARGS[3]
  // TODO-QSP: dynamic text: '<tr bgcolor='+$temp_bcolor+'>'
  scene.text('\'<tr bgcolor=\'+$temp_bcolor+\'>\'');
  scene.img(`${qspFunc(s, '$clothing_image', '', ((s as any).locArgs?.[2] ?? ''), ((s as any).locArgs?.[3] ?? ''))}`);
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0))) {
    scene.text('<td colspan="2"></td>');
  } else {
    scene.text('<td>');
    // TODO-QSP: dynamic text: dyneval('result = <<$ARGS[2]>>_h[<<ARGS[3]>>]')
    scene.text(`dyneval('result = ${((s as any).locArgs?.[2] ?? '')}_h[${((s as any).locArgs?.[3] ?? '')}]')`);
    scene.text('</td><td>');
    if (((s as any).CloStyle ?? 0) !== 5  &&  ((s as any).CloStyle2 ?? 0) !== 6) {
      // TODO-QSP: dynamic text: dyneval('result = <<$ARGS[2]>>_b[<<ARGS[3]>>]')
      scene.text(`dyneval('result = ${((s as any).locArgs?.[2] ?? '')}_b[${((s as any).locArgs?.[3] ?? '')}]')`);
    }
    scene.text('</td>');
  }
  scene.text('<td>');
  if (String((s as any).locArgs?.[2] ?? '') === 'misc_outfits'  &&  String((s as any).locArgs?.[3] ?? '') === 1) {
    scene.text('A hessian sack the hunters gave you.');
  } else {
    if (((s as any).swimwear_description ?? 0) !== '') {
      // TODO-QSP: dynamic text: $swimwear_description
      scene.text(String((s as any).swimwear_description ?? ''));
    } else {
      qspCall(s, 'clothing_descriptions', '');
      // TODO-QSP: dynamic text: $func('$short_description', $ARGS[2], ARGS[3]) + '<br/>' + $description
      scene.text('$func(\'$short_description\', $ARGS[2], ARGS[3]) + \'<br/>\' + $description');
    }
  }
  if (((s as any).CloInhibit ?? 0) > ((s as any).pcs_inhib ?? 0)) {
    scene.text('<br>You don\'t feel confident enough to wear an outfit this revealing.');
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).CloBimbo ?? 0)) {
    scene.text('<img src="images/system/icons/clothing/bimbo_exc.png"><br>');
  }
  if (((s as any).CloGoth ?? 0)) {
    scene.text('<img src="images/system/icons/clothing/goth_exc.png"><br>');
  }
  if (((s as any).CloPunk ?? 0)) {
    scene.text('<img src="images/system/icons/clothing/punk_exc.png"><br>');
  }
  if (((s as any).CloPrep ?? 0)) {
    scene.text('<img src="images/system/icons/clothing/preppy_exc.png"><br>');
  }
  if (((s as any).CloPrude ?? 0)) {
    scene.text('<img src="images/system/icons/clothing/prude_exc.png"><br>');
  }
  if (((s as any).CloProstitute ?? 0)) {
    scene.text('<img src="images/system/icons/clothing/prostitute_exc.png"><br>');
  }
  if (((s as any).CloStrip ?? 0)) {
    // TODO-QSP: dynamic text: '<img src="images/system/icons/clothing/stripper_exc.png"><br>'
    scene.text('\'<img src="images/system/icons/clothing/stripper_exc.png"><br>\'');
  }
  if (((s as any).CloServer ?? 0)) {
    // TODO-QSP: dynamic text: '<img src="images/system/icons/clothing/server_exc.png"><br>'
    scene.text('\'<img src="images/system/icons/clothing/server_exc.png"><br>\'');
  }
  if (((s as any).CloMaid ?? 0)) {
    // TODO-QSP: dynamic text: '<img src="images/system/icons/clothing/maid_exc.png"><br>'
    scene.text('\'<img src="images/system/icons/clothing/maid_exc.png"><br>\'');
  }
  scene.text('</td>');
  if (String((s as any).locArgs?.[1] ?? '') === 'resize') {
    scene.text('<td colspan="4"></td>');
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'does_fit', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0))  ||  (! qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)))  ||  ((s as any).pcs_sewng ?? 0) < 50  ||  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] <= 0) {
      scene.img('images/system/icons/clothing/resize_off.png');
    } else {
      scene.img('images/system/icons/clothing/resize.png');
    }
    scene.text('</center></td>');
    scene.text('<td></td>');
  } else {
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'in_wardrobe', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0))) {
      scene.img('images/system/icons/clothing/wardrobe.png');
    } else {
      scene.img('images/system/icons/clothing/wardrobe_off.png');
    }
    scene.text('</center></td>');
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'in_storage', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0))) {
      scene.img('images/system/icons/clothing/storage.png');
    } else {
      scene.img('images/system/icons/clothing/storage_off.png');
    }
    scene.text('</center></td>');
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'in_unwanted', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0))) {
      scene.img('images/system/icons/clothing/unwanted.png');
    } else {
      scene.img('images/system/icons/clothing/unwanted_off.png');
    }
    scene.text('</center></td>');
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0))  ||  qspFunc(s, 'clothing', 'is_strength_low', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)) === 0  ||  ((s as any).pcs_sewng ?? 0) < 60  ||  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] <= 0) {
      scene.img('images/system/icons/clothing/repair_off.png');
    } else {
      scene.img('images/system/icons/clothing/repair.png');
    }
    scene.text('</center></td>');
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'does_fit', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0))  ||  (! qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)))  ||  ((s as any).pcs_sewng ?? 0) < 50  ||  qspFunc(s, 'money', 'can_afford', 500) === 0) {
      scene.img('images/system/icons/clothing/resize_off.png');
    } else {
      scene.img('images/system/icons/clothing/resize.png');
    }
    scene.text('</center></td>');
    scene.text('<td><center>');
    if (! qspFunc(s, 'clothing', 'is_immutable', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0))) {
      scene.img('images/system/icons/clothing/delete_on.png');
    }
    scene.text('</center></td>');
  }
  scene.text('</tr>');
  // TODO-QSP: end
  scene.build();
}

function enterListLineMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'move_to_wardrobe', $ARGS[1], ARGS[2]
  qspGoto(s, 'clothing_view', 'view_list', ((s as any).ward_list_store ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterListLineMoveToStorage(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'move_to_storage', $ARGS[1], ARGS[2]
  qspGoto(s, 'clothing_view', 'view_list', ((s as any).ward_list_store ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterListLineMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'move_to_unwanted', $ARGS[1], ARGS[2]
  qspGoto(s, 'clothing_view', 'view_list', ((s as any).ward_list_store ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterListLineResize(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sewing_fabric'] = ((s as any).mc_inventory['sewing_fabric'] ?? 0) - (1);
  // TODO-QSP: gs 'clothing', 'resize_clothes', $ARGS[1], ARGS[2]
  scene.text('You resize the outfit yourself.');
  qspGoto(s, 'clothing_view', 'view_list', ((s as any).ward_list_store ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterListLineRepair(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing_attributes', $ARGS[1], ARGS[2]
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).temp_rand = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_rand ?? 0) < ((s as any).pcs_sewng ?? 0) / 4) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sewing_fabric'] = ((s as any).mc_inventory['sewing_fabric'] ?? 0) - (1);
    // TODO-QSP: gs 'clothing', 'increase_strength', $ARGS[1], ARGS[2], CloMaxStrength / 3
  } else {
    if (((s as any).temp_rand ?? 0) < ((s as any).pcs_sewng ?? 0) / 2) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sewing_fabric'] = ((s as any).mc_inventory['sewing_fabric'] ?? 0) - (1);
      // TODO-QSP: gs 'clothing', 'increase_strength', $ARGS[1], ARGS[2], CloMaxStrength / 6
    } else {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sewing_fabric'] = ((s as any).mc_inventory['sewing_fabric'] ?? 0) + (3);
      // TODO-QSP: gs 'clothing', 'remove_item', $ARGS[1], ARGS[2]
    }
  }
  qspGoto(s, 'clothing_view', 'view_list', ((s as any).ward_list_store ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterListLineDelete(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'remove_item', $ARGS[1], ARGS[2]
  qspGoto(s, 'clothing_view', 'view_list', ((s as any).ward_list_store ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterListLineTailorResize(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'pay', 500);
  // TODO-QSP: gs 'clothing', 'resize_clothes', $ARGS[1], ARGS[2]
  // TODO-QSP: dynamic text: 'You have the outfit resized for ' + $func('money', 'string_price', 500) + '.'
  scene.text('You have the outfit resized for 500₽.');
  qspGoto(s, 'clothing_view', 'view_list', ((s as any).ward_list_store ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['link'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['number'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount'] = ((s as any).locArgs?.[4] ?? 0);
  qspCall(s, 'stat', '');
  (s as any).swimwear_description = '';
  scene.img(`${qspFunc(s, '$clothing_image', '', ((s as any).shop_utils_view ?? 0)?.['type'] ?? '', ((s as any).shop_utils_view ?? 0)?.['number'] ?? '')}`);
  // TODO-QSP: gs 'clothing_attributes', $shop_utils_view['type'], shop_utils_view['number']
  if (((s as any).shop_utils_view ?? 0)?.['type'] === 'misc_outfits'  &&  ((s as any).shop_utils_view ?? 0)?.['number'] === 1) {
    scene.text('A hessian sack the hunters gave you.');
  } else {
    if (((s as any).swimwear_description ?? 0) !== '') {
    } else {
      qspCall(s, 'clothing_descriptions', '');
      if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
        if (((s as any).hypnoClothes ?? 0) > 0  &&  qspFunc(s, 'clothing', 'is_hypno_approved', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
          scene.text('<i>You have a strange feeling about this outfit. You <b>really</b> want to wear it.</i>');
        }
      }
    }
  }
  if (((s as any).CloBimbo ?? 0)) {
    scene.text('This item is considered bimbo clothing.');
  }
  if (((s as any).CloGoth ?? 0)) {
    scene.text('This item is considered goth clothing.');
  }
  if (((s as any).CloPunk ?? 0)) {
    scene.text('This item is considered punk clothing.');
  }
  if (((s as any).CloPrep ?? 0)) {
    scene.text('This item is considered preppy clothing.');
  }
  if (((s as any).CloPrude ?? 0)) {
    scene.text('This item is considered prude clothing.');
  }
  if (((s as any).CloStyle ?? 0) === 4  ||  ((s as any).CloProstitute ?? 0)) {
    scene.text('This outfit can be used for prostitution.');
  }
  if (((s as any).CloInhibit ?? 0) > 10) {
    if (((s as any).pcs_inhib ?? 0) >= ((s as any).CloInhibit ?? 0)  &&  ((s as any).pcs_inhib ?? 0) < ((s as any).CloInhibit ?? 0) + 10) {
      scene.text('You find this outfit more revealing than you are completely comfortable with but that makes it quite exciting too.');
    }
  }
  if (((s as any).CloMaid ?? 0)) {
    scene.text('This is a maid outfit.');
  }
  if (((s as any).CloServer ?? 0)) {
    scene.text('This outfit is a server uniform.');
  }
  if (((s as any).CloStrip ?? 0)) {
    scene.text('This outfit is a stripper uniform, suitable for jobs that require one.');
  }
  if (((s as any).CloSchool ?? 0)) {
    qspCall(s, 'clothing', 'school_check', 'check');
  }
  if (((s as any).CloOffice ?? 0)) {
    scene.text('This outfit is an office uniform, suitable for jobs that require one.');
  }
  if (((s as any).CloSport ?? 0)) {
    scene.text('This is sport clothing.');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'shop'  ||  ((s as any).shop_utils_view ?? 0)?.['link'] === 'cheat') {
    qspGoto(s, 'clothing_view', 'view_item_shop');
  }
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    // TODO-QSP: dynamic text: '(dirty ' + min(max(0, CloDirt / 24), 100) + ', strength ' + CloStrength
    scene.text('(dirty ' + Math.min(Math.max(0, ((s as any).CloDirt ?? '') / 24), 100) + ', strength ' + ((s as any).CloStrength ?? ''));
    if (((s as any).CloSport ?? 0) === 0  &&  ((s as any).CloStyle ?? 0) !== 5) {
      // TODO-QSP: dynamic text: ', hip size ' + $dyneval("$result = <<$shop_utils_view['type']>>_b[<<shop_utils_...
      scene.text(`', hip size ' + $dyneval("$result = ${((s as any).shop_utils_view ?? 0)?.['type'] ?? ''}_b[${((s as any).shop_utils_view ?? 0)?.['number'] ?? ''}]")`);
    }
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'resize') {
    qspGoto(s, 'clothing_view', 'view_item_resize');
  }
  if (qspFunc(s, 'clothing', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    qspGoto(s, 'clothing_view', 'view_item_wearing');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'sell') {
    qspGoto(s, 'clothing_view', 'view_item_sell');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    qspGoto(s, 'clothing_view', 'view_item_wardrobe');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
    qspGoto(s, 'clothing_view', 'view_item_storage');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
    qspGoto(s, 'clothing_view', 'view_item_unwanted');
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'owned') {
    qspGoto(s, 'clothing_view', 'view_item_owned');
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_subloc'] ?? ''), ((st as any).ward_list_store ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You already own this item.');
    return;
  }
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['discount_total'] = (((s as any).shop_utils_view ?? {})?.['discount'] ?? 0) + qspFunc(s, 'shop_utils', 'get_discount', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['base_price'] = ((s as any).CloPrice ?? 0);
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['base_price'] ?? 0) * Math.max(0, 100 - (((s as any).shop_utils_view ?? {})?.['discount_total'] ?? 0)) / 100;
  ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price'] = (((s as any).shop_utils_view ?? {})?.['price'] ?? 0) / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']);
  } else {
    ((s as any).shop_utils_view = (s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['base_price'])) + ' <b>' + qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']) + '</b>';
    // TODO-QSP: 'Now ' + shop_utils_view['discount_total'] + '% off' + iif(shop_utils_view['discount_total'] <= 10, ...
  }
  // TODO-QSP: 'Price: ' + $shop_utils_view['price_string']
  if (((s as any).pcs_inhib ?? 0) < ((s as any).CloInhibit ?? 0)) {
    scene.text('You don\'t feel daring enough to wear an outfit this revealing and can\'t bring yourself to buy it.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', ((s as any).shop_utils_view ?? 0)?.['price']) === 0) {
    scene.text('You cannot afford this outfit.');
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Buy (' + String(((s as any).shop_utils_view ?? 0)?.['price_string'] ?? '' ?? '') + ')', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['price']
    // TODO-QSP: gs 'clothing', 'add_item', $shop_utils_view['type'], shop_utils_view['number']
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

function enterViewItemResize(s: GameState, scene: SceneBuilder): void {
  if (((s as any).CloSport ?? 0) === 0  &&  ((s as any).CloStyle ?? 0) !== 5) {
    if ((0 as any) !== ((s as any).pcs_hips ?? 0)  &&  qspFunc(s, 'money', 'can_afford', 500)) {
      // TODO-QSP: dynamic text: 'You can have this resized for ' + $func('money', 'string_price', 500) + '.'
      scene.text('You can have this resized for 500₽.');
      scene.actions([
        { label: 'Resize', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 500);
    // TODO-QSP: gs 'clothing', 'resize_clothes', $shop_utils_view['type'], shop_utils_view['number']
    qspGoto(st, 'clothing_view', (((st as any).shop_display ?? {})['hub_loc']), 'resize');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave item alone', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_loc'] ?? ''), ((st as any).ward_list_page ?? '')); } },
  ]);
  scene.build();
}

function enterViewItemWearing(s: GameState, scene: SceneBuilder): void {
  scene.text('You are wearing these clothes.');
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    scene.actions([
      { label: 'Strip out of your clothes', handler: (st: GameState) => {
    qspCall(st, 'clothing', 'strip');
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'wardrobe', 'main');
  } },
    ]);
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'clothing_view', 'view_list', ((st as any).shop_utils_view['link'] ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemSell(s: GameState, scene: SceneBuilder): void {
  (s as any).ward_list_page = ((s as any).shop_utils_view ?? 0)?.['link'];
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You can\'t sell these clothes.');
    return;
  }
  (s as any).temp_cloStrength = 0;
  if (((s as any).temp_cloStrength ?? 0) > 45) {
    // TODO-QSP: dynamic text: 'You can sell this item for ' + $func('money', 'string_profit', 500) + '.'
    scene.text('You can sell this item for \' + $func(\'money\', \'string_profit\', 500) + \'.');
    scene.actions([
      { label: 'Sell', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(st, 'money', 'earn', 500);
    qspGoto(st, 'clothing_view', (((st as any).shop_display ?? {})['hub_subloc']), ((st as any).ward_list_store ?? ''));
  } },
    ]);
  } else {
    if (((s as any).temp_cloStrength ?? 0) > 30) {
      // TODO-QSP: dynamic text: 'You can sell this item for ' + $func('money', 'string_profit', 300) + '.'
      scene.text('You can sell this item for \' + $func(\'money\', \'string_profit\', 300) + \'.');
      scene.actions([
        { label: 'Sell', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(st, 'money', 'earn', 300);
    qspGoto(st, 'clothing_view', (((st as any).shop_display ?? {})['hub_subloc']), ((st as any).ward_list_store ?? ''));
  } },
      ]);
    } else {
      if (((s as any).temp_cloStrength ?? 0) > 0) {
        // TODO-QSP: dynamic text: 'You can sell this item for ' + $func('money', 'string_profit', 100) + '.'
        scene.text('You can sell this item for \' + $func(\'money\', \'string_profit\', 100) + \'.');
        scene.actions([
          { label: 'Sell', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(st, 'money', 'earn', 100);
    qspGoto(st, 'clothing_view', (((st as any).shop_display ?? {})['hub_subloc']), ((st as any).ward_list_store ?? ''));
  } },
        ]);
      } else {
        scene.text('This item is too worn to have any sale value.');
        scene.actions([
          { label: 'Throw it away', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
    qspGoto(st, 'clothing_view', (((st as any).shop_display ?? {})['hub_subloc']), ((st as any).ward_list_store ?? ''));
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep item', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_subloc'] ?? ''), ((st as any).ward_list_store ?? '')); } },
  ]);
  scene.build();
}

function enterViewItemWardrobe(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    if (qspFunc(s, 'clothing', 'is_strength_low', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
      qspGoto(s, 'clothing_view', 'view_item_wear_strength_low');
    }
    if (((s as any).CloSport ?? 0) === 0  &&  ((s as any).CloStyle ?? 0) !== 5) {
      if (! qspFunc(s, 'clothing', 'does_fit', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
        qspGoto(s, 'clothing_view', 'view_item_wear_size_wrong');
      }
    }
  }
  if ((!((s as any).CloSwim ?? 0))) {
    if (((s as any).CloInhibit ?? 0) > ((s as any).pcs_inhib ?? 0)) {
      scene.text('You don\'t feel daring enough to wear an outfit this revealing.');
    } else {
      if ((Array.isArray((s as any).CloLosTyp) ? ((s as any).CloLosTyp as any[]).indexOf(((s as any).shop_utils_view ?? 0)?.['type']) : -1) >= 0  &&  (Array.isArray((s as any).CloLosNum) ? ((s as any).CloLosNum as any[]).indexOf(((s as any).shop_utils_view ?? 0)?.['number']) : -1) >= 0) {
        scene.text('You lost these clothes somewhere, maybe you can find them again?.');
      } else {
        scene.actions([
          { label: 'Wear', handler: (st: GameState) => {
    // TODO-QSP: xgt 'clothing_view', 'view_item_wear'
  } },
        ]);
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_subloc'] ?? ''), ((st as any).ward_list_store ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemStorage(s: GameState, scene: SceneBuilder): void {
  scene.text('These clothes are in storage.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_subloc'] ?? ''), ((st as any).ward_list_store ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemUnwanted(s: GameState, scene: SceneBuilder): void {
  scene.text('These clothes are unwanted.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStorageOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_subloc'] ?? ''), ((st as any).ward_list_store ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemOwned(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'in_storage', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    qspGoto(s, 'clothing_view', 'view_item_storage');
  }
  if (qspFunc(s, 'clothing', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    qspGoto(s, 'clothing_view', 'view_item_unwanted');
  }
  qspGoto(s, 'clothing_view', 'view_item_wardrobe');
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWearStrengthLow(s: GameState, scene: SceneBuilder): void {
  scene.text('This item is worn and is not suitable for further wear.');
  if (((s as any).pcs_sewng ?? 0) < 60) {
    scene.text('Your sewing skill isn\'t good enough to repair this');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['sewing_fabric'] <= 0) {
      scene.text('You lack the fabric needed to repair this.');
    } else {
      scene.text('You can repair this thanks to your sewing skill.');
      scene.actions([
        { label: 'Repair item', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/activities/sewing/fix' + rand(1, 2) +...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/activities/sewing/fix` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    if ((Math.floor(Math.random() * 100) + 1) < 30) {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['sewing_fabric'] = ((st as any).mc_inventory['sewing_fabric'] ?? 0) - (1);
      // TODO-QSP: gs 'clothing_attributes', $shop_utils_view['type'], shop_utils_view['number']
      // TODO-QSP: gs 'clothing', 'increase_strength', $shop_utils_view['type'], shop_utils_view['number'], CloMaxStren...
      scene.text('You spend 30 minutes fixing the outfit.');
    } else {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['sewing_fabric'] = ((st as any).mc_inventory['sewing_fabric'] ?? 0) + (3);
      // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
      scene.text('Despite your skill with a needle, this outfit has proved beyond repair. All that is left of it is only good for your cloth pile.');
    }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_subloc'] ?? ''), ((st as any).ward_list_store ?? '')); } },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_subloc'] ?? ''), ((st as any).ward_list_store ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWearSizeWrong(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'is_too_small', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('This item is too small for you to wear.');
  } else {
    scene.text('This item is too large for you to wear.');
  }
  if (((s as any).pcs_sewng ?? 0) >= 50  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] > 0) {
    scene.text('You can resize this thanks to your sewing skill.');
    scene.actions([
      { label: 'Resize item', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['sewing_fabric'] = ((st as any).mc_inventory['sewing_fabric'] ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    // TODO-QSP: gs 'clothing', 'resize_clothes', $shop_utils_view['type'], shop_utils_view['number']
    scene.text('You spend 30 minutes resizing the outfit.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_subloc'] ?? ''), ((st as any).ward_list_store ?? '')); } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).loc_arg ?? 0) === 'tailor') {
      if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
        scene.text('You cannot afford to have this resized.');
      } else {
        // TODO-QSP: dynamic text: 'You can pay to have this resized for ' + $func('money', 'string_price', 500) + ...
        scene.text('You can pay to have this resized for 500₽.');
        scene.actions([
          { label: 'Resize item', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'money', 'pay', 500);
    // TODO-QSP: gs 'clothing', 'resize_clothes', $shop_utils_view['type'], shop_utils_view['number']
    scene.text('You hand the clothing over to the tailor who takes it into the back. Fifteen minutes later, he presents your clothing back to you, adjusted to fit you perfectly.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_subloc'] ?? ''), ((st as any).ward_list_store ?? '')); } },
    ]);
  } },
        ]);
      }
    }
  }
  scene.actions([
{ label: 'Return', handler: (st: GameState) => { qspGoto(st, 'clothing_view', ((st as any).shop_display['hub_subloc'] ?? ''), ((st as any).ward_list_store ?? '')); } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWear(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'is_hypno_approved', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    qspGoto(s, 'clothing_view', 'view_item_wear_hypno');
  }
  // TODO-QSP: gs 'clothing', 'wear', $shop_utils_view['type'], shop_utils_view['number']
  if (((s as any).shop_display ?? 0)?.['hub_subloc'] === 'view_grid') {
    qspCall(s, 'shop_utils', 'cleanup');
    qspGoto(s, 'wardrobe', 'main');
  } else {
    qspCall(s, 'shop_utils', 'cleanup');
    qspGoto(s, 'clothing_view', 'view_lists_list', ((s as any).ward_list_page ?? ''));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItemWearHypno(s: GameState, scene: SceneBuilder): void {
  scene.text('You pick up the outfit and think about trying them on… but you don\'t really like wearing these type of outfits');
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
    // TODO-QSP: gs 'clothing', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    if (((st as any).shop_display ?? 0)?.['hub_subloc'] === 'view_grid') {
      qspCall(st, 'shop_utils', 'cleanup');
      qspGoto(st, 'wardrobe', 'main');
    } else {
      qspCall(st, 'shop_utils', 'cleanup');
      qspGoto(st, 'clothing_view', 'view_lists_list', ((st as any).ward_list_page ?? ''));
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    if (((st as any).shop_display ?? 0)?.['hub_subloc'] === 'view_grid') {
      qspCall(st, 'shop_utils', 'cleanup');
      qspGoto(st, 'wardrobe', 'main');
    } else {
      qspCall(st, 'shop_utils', 'cleanup');
      qspGoto(st, 'clothing_view', 'view_lists_list', ((st as any).ward_list_page ?? ''));
    }
  } },
  ]);
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing', 'in_wardrobe', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to wardrobe', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'move_to_wardrobe', $shop_utils_view['type'], shop_utils_view['number']
    qspGoto(st, 'clothing_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing', 'in_storage', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to storage', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'move_to_storage', $shop_utils_view['type'], shop_utils_view['number']
    qspGoto(st, 'clothing_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  if (qspFunc(s, 'clothing', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to unwanted', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'move_to_unwanted', $shop_utils_view['type'], shop_utils_view['number']
    qspGoto(st, 'clothing_view', 'view_item', (((st as any).shop_utils_view ?? {})['link']), (((st as any).shop_utils_view ?? {})['type']));
  } },
    ]);
  }
  // TODO-QSP: act $func('wrap', 'neg', 'Throw these clothes away'):
  // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
  qspGoto(s, 'clothing_view', 'view_list', (((s as any).shop_utils_view ?? {})['link']));
  // TODO-QSP: end
  return;
  // TODO-QSP: end
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
    case 'home_list_filter':
      enterHomeListFilter(s, scene);
      break;
    case 'home_grid_filter':
      enterHomeGridFilter(s, scene);
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
    case 'display_list_wardrobe':
      enterDisplayListWardrobe(s, scene);
      break;
    case 'view_lists_list':
      enterViewListsList(s, scene);
      break;
    case 'display_list_link':
      enterDisplayListLink(s, scene);
      break;
    case 'view_list':
      enterViewList(s, scene);
      break;
    case 'view_grids_list':
      enterViewGridsList(s, scene);
      break;
    case 'display_grid_link':
      enterDisplayGridLink(s, scene);
      break;
    case 'view_grid':
      enterViewGrid(s, scene);
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
    case 'list_line_resize':
      enterListLineResize(s, scene);
      break;
    case 'list_line_repair':
      enterListLineRepair(s, scene);
      break;
    case 'list_line_delete':
      enterListLineDelete(s, scene);
      break;
    case 'list_line_tailor_resize':
      enterListLineTailorResize(s, scene);
      break;
    case 'view_item':
      enterViewItem(s, scene);
      break;
    case 'view_item_shop':
      enterViewItemShop(s, scene);
      break;
    case 'view_item_resize':
      enterViewItemResize(s, scene);
      break;
    case 'view_item_wearing':
      enterViewItemWearing(s, scene);
      break;
    case 'view_item_sell':
      enterViewItemSell(s, scene);
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
    case 'view_item_owned':
      enterViewItemOwned(s, scene);
      break;
    case 'view_item_wear_strength_low':
      enterViewItemWearStrengthLow(s, scene);
      break;
    case 'view_item_wear_size_wrong':
      enterViewItemWearSizeWrong(s, scene);
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

export const clothing_view: LocationDef = {
  name: 'clothing_view',
  title: 'Choose item/s to resize',
  region: 'other',
  enter: enter,
};
