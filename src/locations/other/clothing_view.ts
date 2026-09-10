import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetWardrobeListHeader(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_home_list_filters') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', 'clothing_view', 'view_list', ((s as any).ward_list_store ?? 0));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_inhibition_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_prostitution_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_stripper_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_bimbo_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_goth_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_preppy_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_prude_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_punk_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_conservative_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_risque_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_loose_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_sport_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_school_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_maid_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_server_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_swim_filter');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_home_grid_filters') {
    // TODO-QSP: gs 'shop_utils', 'filter_builder', 'init', 'clothing_view', 'view_grid', $shop_utils_view['link'], $...
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_inhibition_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_prostitution_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_stripper_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_bimbo_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_goth_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_preppy_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_prude_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_punk_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_conservative_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_risque_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_loose_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_sport_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_school_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_maid_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_server_filter');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_shop_filters') {
    qspCall(s, 'shop_utils', 'filter_builder', 'init', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_number_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_quality_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_price_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_discount_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_inhibition_sort');
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sort_direction');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_prostitution_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_stripper_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_bimbo_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_goth_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_preppy_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_prude_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_punk_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_conservative_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_risque_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_too_risque_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_loose_filter');
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_school_filter');
    qspCall(s, 'shop_utils', 'filter_builder', 'finish');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_prostitution_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_prostitution_filter', 'CloStyle = 4 or CloProstitute = 1');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_stripper_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_stripper_filter', 'CloStyle2 = 3 or CloStrip = 1');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_bimbo_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_bimbo_filter', 'CloBimbo');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_goth_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_goth_filter', 'CloGoth');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_preppy_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_preppy_filter', 'CloPrep');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_prude_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_prude_filter', 'CloPrude');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_punk_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_punk_filter', 'CloPunk');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_conservative_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_conservative_filter', 'CloInhibit <= pcs_inhib - 10');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_risque_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_risque_filter', '(CloInhibit > pcs_inhib - 10) and (CloInhibit <= pcs_inhib)');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_too_risque_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_too_risque_filter', 'CloInhibit > pcs_inhib');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_loose_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_loose_filter', 'CloStyle = 5');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_sport_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_sport_filter', 'CloStyle2 = 6 or CloSport = 1');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_school_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_school_filter', 'CloStyle2 = 4 or CloSchool = 1');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_maid_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_maid_filter', 'CloStyle2 = 1 or CloMaid = 1');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_server_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_server_filter', 'CloStyle2 = 2 or CloServer = 1');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_swim_filter') {
    qspCall(s, 'shop_utils', 'filter_builder', 'setup_swim_filter', 'CloSwim');
    return;
  }
  return;
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
  scene.build();
}

function enterFilter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'prostitution') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'stripper') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'bimbo') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'conservative') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'risque') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'loose') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'school') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'sport') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'too_risque') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'maid') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'server') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'swim') {
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
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add_types') {
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'swimsuit'  ||   ((s as any).locArgs?.[2] ?? 0) === 'allure'  ||           ((s as any).locArgs?.[2] ?? 0) === 'allure_swimsuit') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'allure_swimsuit');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'bikinis'  ||     ((s as any).locArgs?.[2] ?? 0) === 'allure'  ||           ((s as any).locArgs?.[2] ?? 0) === 'allure_bikinis') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'allure_bikinis');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'bomba'  ||           ((s as any).locArgs?.[2] ?? 0) === 'bomba_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'bomba'  ||           ((s as any).locArgs?.[2] ?? 0) === 'bomba_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'cats'  ||           ((s as any).locArgs?.[2] ?? 0) === 'cats_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'cats_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'cats'  ||           ((s as any).locArgs?.[2] ?? 0) === 'cats_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'cats_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'coco'  ||           ((s as any).locArgs?.[2] ?? 0) === 'coco_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'coco_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'coco'  ||           ((s as any).locArgs?.[2] ?? 0) === 'coco_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'coco_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'danilovich'  ||         ((s as any).locArgs?.[2] ?? 0) === 'danilovich_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'swimsuit'  ||   ((s as any).locArgs?.[2] ?? 0) === 'danilovich_swimwear'  ||     ((s as any).locArgs?.[2] ?? 0) === 'danilovich_swimsuit') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich_swimsuit');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'dolls'  ||           ((s as any).locArgs?.[2] ?? 0) === 'dolls_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'dolls'  ||           ((s as any).locArgs?.[2] ?? 0) === 'dolls_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||                 ((s as any).locArgs?.[2] ?? 0) === 'fancypancy'  ||         ((s as any).locArgs?.[2] ?? 0) === 'fancy_burlesque') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'fancy_burlesque');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'fashionista'  ||         ((s as any).locArgs?.[2] ?? 0) === 'fashionista_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'fashionista'  ||         ((s as any).locArgs?.[2] ?? 0) === 'fashionista_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'flamingos'  ||         ((s as any).locArgs?.[2] ?? 0) === 'flamingos_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'flamingos_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'flamingos'  ||         ((s as any).locArgs?.[2] ?? 0) === 'flamingos_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'flamingos_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'exhibitshop'  ||         ((s as any).locArgs?.[2] ?? 0) === 'salacious_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'exhibitshop'  ||         ((s as any).locArgs?.[2] ?? 0) === 'salacious_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'gm'  ||             ((s as any).locArgs?.[2] ?? 0) === 'gm_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'gm'  ||             ((s as any).locArgs?.[2] ?? 0) === 'gm_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||                                     ((s as any).locArgs?.[2] ?? 0) === 'gm_office') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_office');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||                                     ((s as any).locArgs?.[2] ?? 0) === 'gm_maid') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_maid');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||                                     ((s as any).locArgs?.[2] ?? 0) === 'gm_school') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_school');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||                                     ((s as any).locArgs?.[2] ?? 0) === 'gm_server') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'gm_server');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'market'  ||           ((s as any).locArgs?.[2] ?? 0) === 'market_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'market_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'materinstvo'  ||         ((s as any).locArgs?.[2] ?? 0) === 'materinstvo_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'materinstvo_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'moncheri'  ||         ((s as any).locArgs?.[2] ?? 0) === 'moncheri_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||                 ((s as any).locArgs?.[2] ?? 0) === 'moncheri'  ||         ((s as any).locArgs?.[2] ?? 0) === 'moncheri_gown') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri_gown');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'nerdvana'  ||         ((s as any).locArgs?.[2] ?? 0) === 'nerdvana_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||                 ((s as any).locArgs?.[2] ?? 0) === 'nerdvana'  ||         ((s as any).locArgs?.[2] ?? 0) === 'nerdvana_cosplay') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_cosplay');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'swimsuit'  ||   ((s as any).locArgs?.[2] ?? 0) === 'nerdvana_swimwear'  ||     ((s as any).locArgs?.[2] ?? 0) === 'nerdvana_swimsuit') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_swimsuit');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'bikinis'  ||     ((s as any).locArgs?.[2] ?? 0) === 'nerdvana_swimwear'  ||     ((s as any).locArgs?.[2] ?? 0) === 'nerdvana_bikinis') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_bikinis');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'scandalicious'  ||       ((s as any).locArgs?.[2] ?? 0) === 'scandalicious_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'scandalicious_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'scandalicious'  ||       ((s as any).locArgs?.[2] ?? 0) === 'scandalicious_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'scandalicious_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'swimsuit'  ||   ((s as any).locArgs?.[2] ?? 0) === 'scandalicious_swimwear'  ||   ((s as any).locArgs?.[2] ?? 0) === 'scandalicious_swimsuit') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'scandalicious_swimsuit');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'bikinis'  ||     ((s as any).locArgs?.[2] ?? 0) === 'scandalicious_swimwear'  ||   ((s as any).locArgs?.[2] ?? 0) === 'scandalicious_bikinis') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'scandalicious_bikinis');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'sexshop'  ||           ((s as any).locArgs?.[2] ?? 0) === 'eroto_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_outfits');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'dress'  ||     ((s as any).locArgs?.[2] ?? 0) === 'sexshop'  ||           ((s as any).locArgs?.[2] ?? 0) === 'eroto_dress') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_dress');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||                 ((s as any).locArgs?.[2] ?? 0) === 'sexshop'  ||           ((s as any).locArgs?.[2] ?? 0) === 'eroto_strip') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_strip');
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'all'  ||   ((s as any).locArgs?.[2] ?? 0) === 'outfits'  ||     ((s as any).locArgs?.[2] ?? 0) === 'misc'  ||           ((s as any).locArgs?.[2] ?? 0) === 'misc_outfits') {
      qspCall(s, 'shop_utils', 'init', 'add_type', 'misc_outfits');
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_shop_display_exceptions') {
    (s as any).shop_display_exceptions['danilovich_outfits-161'] = 1;
    (s as any).shop_display_exceptions['danilovich_outfits-162'] = 1;
    (s as any).shop_display_exceptions['danilovich_swimsuit-4'] = 1;
    (s as any).shop_display_exceptions['danilovich_swimsuit-31'] = 1;
    (s as any).shop_display_exceptions['gm_school-6'] = 1;
    (s as any).shop_display_exceptions['cats_dress-221'] = 1;
    return;
  }
  return;
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add') {
    // TODO-QSP: gs 'clothing_attributes', $ARGS[2], ARGS[3]
    if (((s as any).CloQuality ?? 0) === 0) {
      // TODO-QSP: exit
    }
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $ARGS[2], ARGS[3], ARGS[4]
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_quality', $ARGS[2], ARGS[3], CloQuality
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_inhibition', $ARGS[2], ARGS[3], CloInhibit
    // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_price', $ARGS[2], ARGS[3], CloPrice
    return;
  }
  return;
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      qspCall(s, 'clothing_view', 'filter_builder', 'setup_shop_filters');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'clothing_attributes', $ARGS[4], ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        // TODO-QSP: *p '<a href="exec: gt ''clothing_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5...
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
      qspCall(s, 'clothing_view', 'filter_builder', 'setup_home_grid_filters');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'clothing_attributes', $ARGS[4], ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        // TODO-QSP: *p '<a href="exec: gt ''clothing_view'', ''view_item'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', <<ARGS[5...
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
      qspCall(s, 'clothing_view', 'filter_builder', 'setup_home_list_filters');
      // TODO-QSP: *p '<center><table border=0 cellspacing=0 cellpadding=5>'
      // TODO-QSP: *p $func('clothing_view', 'get_wardrobe_list_header')
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'clothing_attributes', $ARGS[4], ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        // TODO-QSP: gs 'clothing_view', 'list_line', $ARGS[3], $ARGS[4], ARGS[5], ARGS[6]
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

function enterDisplayListWardrobe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'list_wardrobe');
  return;
  scene.build();
}

function enterViewListsList(s: GameState, scene: SceneBuilder): void {
  if (((s as any).wloc ?? 0) === '') {
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'wardrobe'  ||  ((s as any).locArgs?.[1] ?? 0) === ''  &&  ((s as any).ward_list_page ?? 0) === 'wardrobe') {
    scene.img('images/system/icons/clothing/clothes.png');
    if (((s as any).wardrobeDefaultPagePref ?? 0) === 'viewClothing') {
    }
    // TODO-QSP: dynamic text: <center><<$wardrobeSetDefault>></center>
    scene.text(`<center>${((s as any).wardrobeSetDefault ?? 0)}</center>`);
  } else {
    scene.text('<center><b>Choose item/s to resize</b></center>');
    if (((s as any).locArgs?.[1] ?? 0) === 'sell') {
    }
    scene.text('<center><b>Choose to view all or select by shop</b></center>');
    qspCall(s, 'clothing_view', 'display_list_link', 'all');
    if (((s as any).arrsize ?? 0)('gm_outfits') + ((s as any).arrsize ?? 0)('gm_dress') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'gm');
    }
    if (((s as any).arrsize ?? 0)('gm_school') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'gm_school');
    }
    if (((s as any).arrsize ?? 0)('gm_office') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'gm_office');
    }
    if (((s as any).arrsize ?? 0)('gm_maid') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'gm_maid');
    }
    if (((s as any).arrsize ?? 0)('gm_server') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'gm_server');
    }
    if (((s as any).arrsize ?? 0)('misc_outfits') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'misc');
    }
    if (((s as any).arrsize ?? 0)('cats_outfits') + ((s as any).arrsize ?? 0)('cats_dress') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'cats');
    }
    if (((s as any).arrsize ?? 0)('flamingos_outfits') + ((s as any).arrsize ?? 0)('flamingos_dress') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'flamingos');
    }
    if (((s as any).arrsize ?? 0)('coco_outfits') + ((s as any).arrsize ?? 0)('coco_dress') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'coco');
    }
    if (((s as any).arrsize ?? 0)('fashionista_dress') + ((s as any).arrsize ?? 0)('fashionista_outfits') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'fashionista');
    }
    if (((s as any).arrsize ?? 0)('moncheri_gown') + ((s as any).arrsize ?? 0)('moncheri_dress') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'moncheri');
    }
    if (((s as any).arrsize ?? 0)('scandalicious_outfits') + ((s as any).arrsize ?? 0)('scandalicious_dress') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'scandalicious');
    }
    if (((s as any).arrsize ?? 0)('scandalicious_bikinis') + ((s as any).arrsize ?? 0)('scandalicious_swimsuit') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'scandalicious_swimwear');
    }
    if (((s as any).arrsize ?? 0)('allure_bikinis') + ((s as any).arrsize ?? 0)('allure_swimsuit') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'allure');
    }
    if (((s as any).arrsize ?? 0)('fancy_burlesque') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'fancypancy');
    }
    if (((s as any).arrsize ?? 0)('eroto_dress') + ((s as any).arrsize ?? 0)('eroto_outfits') + ((s as any).arrsize ?? 0)('eroto_strip') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'sexshop');
    }
    if (((s as any).arrsize ?? 0)('salacious_outfits') + ((s as any).arrsize ?? 0)('salacious_dress') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'exhibitshop');
    }
    if (((s as any).arrsize ?? 0)('dolls_outfits') + ((s as any).arrsize ?? 0)('dolls_dress') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'dolls');
    }
    if (((s as any).arrsize ?? 0)('bomba_outfits') + ((s as any).arrsize ?? 0)('bomba_dress') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'bomba');
    }
    if (((s as any).arrsize ?? 0)('nerdvana_outfits') + ((s as any).arrsize ?? 0)('nerdvana_cosplay') + ((s as any).arrsize ?? 0)('nerdvana_bikinis') + ((s as any).arrsize ?? 0)('nerdvana_swimsuit') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'nerdvana');
    }
    if (((s as any).arrsize ?? 0)('danilovich_outfits') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'danilovich');
    }
    if (((s as any).arrsize ?? 0)('materinstvo_dress') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'materinstvo');
    }
    if (((s as any).arrsize ?? 0)('market_outfits') > 0) {
      qspCall(s, 'clothing_view', 'display_list_link', 'market');
    }
    return;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'wardrobe_exit_check_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Your Clothes', goto: ['wardrobe', 'main'] },
      { label: 'Your sets', handler: (st: GameState) => {
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
    ]);
  }
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
    default:
      enterGetWardrobeListHeader(s, scene);
      break;
  }
}

export const clothing_view: LocationDef = {
  name: 'clothing_view',
  title: 'Choose item/s to resize',
  region: 'other',
  enter: enter,
};
