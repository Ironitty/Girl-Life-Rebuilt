import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
    ((s as any).shop_display_exceptions ?? {})['danilovich_outfits-161'] = 1;
    ((s as any).shop_display_exceptions ?? {})['danilovich_outfits-162'] = 1;
    ((s as any).shop_display_exceptions ?? {})['danilovich_swimsuit-4'] = 1;
    ((s as any).shop_display_exceptions ?? {})['danilovich_swimsuit-31'] = 1;
    ((s as any).shop_display_exceptions ?? {})['gm_school-6'] = 1;
    ((s as any).shop_display_exceptions ?? {})['cats_dress-221'] = 1;
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'add') {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    if (((s as any).locArgs?.[2] ?? 0) === 'header') {
      qspCall(s, 'clothing_view', 'filter_builder', 'setup_shop_filters');
      return;
    }
    if (((s as any).locArgs?.[2] ?? 0) === 'main') {
      // TODO-QSP: gs 'clothing_attributes', $ARGS[4], ARGS[5]
      if (qspFunc(s, 'shop_utils', 'filter', 'apply')) {
        scene.img(`${qspFunc(s, '$clothing_image', '$ARGS[4]', qspUntranslated(s, "ARGS[5]", { location: "clothing_view" }))}`);
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
        scene.img(`${qspFunc(s, '$clothing_image', '$ARGS[4]', qspUntranslated(s, "ARGS[5]", { location: "clothing_view" }))}`);
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
      scene.text('<center><table border=0 cellspacing=0 cellpadding=5>');
      // TODO-QSP: dynamic text: $func('clothing_view', 'get_wardrobe_list_header')
      scene.text('$func(\'clothing_view\', \'get_wardrobe_list_header\')');
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
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'wardrobe'  ||  ((s as any).locArgs?.[1] ?? 0) === ''  &&  ((s as any).ward_list_page ?? 0) === 'wardrobe') {
    scene.img('images/system/icons/clothing/clothes.png');
    if (((s as any).wardrobeDefaultPagePref ?? 0) === 'viewClothing') {
    }
    // TODO-QSP: dynamic text: <center><<$wardrobeSetDefault>></center>
    scene.text(`<center>${((s as any).wardrobeSetDefault ?? 0)}</center>`);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'resize'  ||  ((s as any).locArgs?.[1] ?? 0) === ''  &&  ((s as any).ward_list_page ?? 0) === 'resize') {
      scene.text('<center><b>Choose item/s to resize</b></center>');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'sell') {
      }
    }
  }
  scene.text('<center><b>Choose to view all or select by shop</b></center>');
  qspCall(s, 'clothing_view', 'display_list_link', 'all');
  if (Object.keys((s as any).gm_outfits ?? {}).length + Object.keys((s as any).gm_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'gm');
  }
  if (Object.keys((s as any).gm_school ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'gm_school');
  }
  if (Object.keys((s as any).gm_office ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'gm_office');
  }
  if (Object.keys((s as any).gm_maid ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'gm_maid');
  }
  if (Object.keys((s as any).gm_server ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'gm_server');
  }
  if (Object.keys((s as any).misc_outfits ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'misc');
  }
  if (Object.keys((s as any).cats_outfits ?? {}).length + Object.keys((s as any).cats_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'cats');
  }
  if (Object.keys((s as any).flamingos_outfits ?? {}).length + Object.keys((s as any).flamingos_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'flamingos');
  }
  if (Object.keys((s as any).coco_outfits ?? {}).length + Object.keys((s as any).coco_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'coco');
  }
  if (Object.keys((s as any).fashionista_dress ?? {}).length + Object.keys((s as any).fashionista_outfits ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'fashionista');
  }
  if (Object.keys((s as any).moncheri_gown ?? {}).length + Object.keys((s as any).moncheri_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'moncheri');
  }
  if (Object.keys((s as any).scandalicious_outfits ?? {}).length + Object.keys((s as any).scandalicious_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'scandalicious');
  }
  if (Object.keys((s as any).scandalicious_bikinis ?? {}).length + Object.keys((s as any).scandalicious_swimsuit ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'scandalicious_swimwear');
  }
  if (Object.keys((s as any).allure_bikinis ?? {}).length + Object.keys((s as any).allure_swimsuit ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'allure');
  }
  if (Object.keys((s as any).fancy_burlesque ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'fancypancy');
  }
  if (Object.keys((s as any).eroto_dress ?? {}).length + Object.keys((s as any).eroto_outfits ?? {}).length + Object.keys((s as any).eroto_strip ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'sexshop');
  }
  if (Object.keys((s as any).salacious_outfits ?? {}).length + Object.keys((s as any).salacious_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'exhibitshop');
  }
  if (Object.keys((s as any).dolls_outfits ?? {}).length + Object.keys((s as any).dolls_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'dolls');
  }
  if (Object.keys((s as any).bomba_outfits ?? {}).length + Object.keys((s as any).bomba_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'bomba');
  }
  if (Object.keys((s as any).nerdvana_outfits ?? {}).length + Object.keys((s as any).nerdvana_cosplay ?? {}).length + Object.keys((s as any).nerdvana_bikinis ?? {}).length + Object.keys((s as any).nerdvana_swimsuit ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'nerdvana');
  }
  if (Object.keys((s as any).danilovich_outfits ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'danilovich');
  }
  if (Object.keys((s as any).materinstvo_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'materinstvo');
  }
  if (Object.keys((s as any).market_outfits ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_list_link', 'market');
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'wardrobe_exit_check_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Your Clothes', goto: ['wardrobe', 'main'] },
    { label: 'Your sets', goto: ['wardrobe', 'wloc'] },
  ]);
  scene.build();
}

function enterDisplayListLink(s: GameState, scene: SceneBuilder): void {
  scene.img(`${0}')>>`);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewList(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'owned');
    qspCall(s, 'clothing_view', 'init', 'add_types', ((s as any).ward_list_store ?? 0));
    qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  ((s as any).shop_display ?? {})['hub_loc'] = 'view_lists_list';
  ((s as any).shop_display ?? {})['hub_subloc'] = 'view_list';
  qspCall(s, 'shop_utils', 'display', 'list_wardrobe');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['clothing_view', 'view_lists_list'] },
  ]);
  scene.build();
}

function enterViewGridsList(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Wardrobe - Brand Selection</b></center>');
  scene.text('<center><b>Choose to view all or select by shop</b></center>');
  qspCall(s, 'clothing_view', 'display_grid_link', 'all');
  if (Object.keys((s as any).gm_outfits ?? {}).length + Object.keys((s as any).gm_dress ?? {}).length) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'gm');
  }
  if (Object.keys((s as any).gm_school ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'gm_school');
  }
  if (Object.keys((s as any).gm_office ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'gm_office');
  }
  if (Object.keys((s as any).gm_maid ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'gm_maid');
  }
  if (Object.keys((s as any).gm_server ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'gm_server');
  }
  if (Object.keys((s as any).cats_outfits ?? {}).length + Object.keys((s as any).cats_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'cats');
  }
  if (Object.keys((s as any).flamingos_outfits ?? {}).length + Object.keys((s as any).flamingos_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'flamingos');
  }
  if (Object.keys((s as any).coco_outfits ?? {}).length + Object.keys((s as any).coco_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'coco');
  }
  if (Object.keys((s as any).fashionista_dress ?? {}).length + Object.keys((s as any).fashionista_outfits ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'fashionista');
  }
  if (Object.keys((s as any).moncheri_gown ?? {}).length + Object.keys((s as any).moncheri_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'moncheri');
  }
  if (Object.keys((s as any).scandalicious_outfits ?? {}).length + Object.keys((s as any).scandalicious_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'scandalicious');
  }
  if (Object.keys((s as any).fancy_burlesque ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'fancypancy');
  }
  if (Object.keys((s as any).eroto_dress ?? {}).length + Object.keys((s as any).eroto_outfits ?? {}).length + Object.keys((s as any).eroto_strip ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'sexshop');
  }
  if (Object.keys((s as any).salacious_outfits ?? {}).length + Object.keys((s as any).salacious_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'exhibitshop');
  }
  if (Object.keys((s as any).dolls_outfits ?? {}).length + Object.keys((s as any).dolls_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'dolls');
  }
  if (Object.keys((s as any).bomba_outfits ?? {}).length + Object.keys((s as any).bomba_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'bomba');
  }
  if (Object.keys((s as any).nerdvana_cosplay ?? {}).length + Object.keys((s as any).nerdvana_outfits ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'nerdvana');
  }
  if (Object.keys((s as any).danilovich_outfits ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'danilovich');
  }
  if (Object.keys((s as any).materinstvo_dress ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'materinstvo');
  }
  if (Object.keys((s as any).market_outfits ?? {}).length > 0) {
    qspCall(s, 'clothing_view', 'display_grid_link', 'market');
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
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
  }
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'clothing_view', 'init', 'add_types', ((s as any).ward_list_store ?? 0));
    qspCall(s, 'shop_utils', 'init', 'set_return', 'wardrobe', 'main');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  ((s as any).shop_display ?? {})['hub_loc'] = 'view_grids_list';
  ((s as any).shop_display ?? {})['hub_subloc'] = 'view_grid';
  qspCall(s, 'shop_utils', 'display', 'grid_wardrobe');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['clothing_view', 'view_grids_list'] },
  ]);
  scene.build();
}

function enterListLine(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'clothing');
  // TODO-QSP: gs 'clothing_attributes', $ARGS[2], ARGS[3]
  // TODO-QSP: dynamic text: '<tr bgcolor='+$temp_bcolor+'>'
  scene.text('\'<tr bgcolor=\'+$temp_bcolor+\'>\'');
  scene.img(`${qspFunc(s, '$clothing_image', '$ARGS[2]', qspUntranslated(s, "ARGS[3]", { location: "clothing_view" }))}`);
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" }))) {
    scene.text('<td colspan="2"></td>');
  } else {
    scene.text('<td>');
    // TODO-QSP: dynamic text: dyneval('result = <<$ARGS[2]>>_h[<<ARGS[3]>>]')
    scene.text(`dyneval('result = ${((s as any).locArgs?.[2] ?? 0)}_h[${qspUntranslated(s, "ARGS[3]", { location: "clothing_view" })}]')`);
    scene.text('</td><td>');
    if (((s as any).CloStyle ?? 0) !== 5  &&  ((s as any).CloStyle2 ?? 0) !== 6) {
      // TODO-QSP: dynamic text: dyneval('result = <<$ARGS[2]>>_b[<<ARGS[3]>>]')
      scene.text(`dyneval('result = ${((s as any).locArgs?.[2] ?? 0)}_b[${qspUntranslated(s, "ARGS[3]", { location: "clothing_view" })}]')`);
    }
    scene.text('</td>');
  }
  scene.text('<td>');
  if (((s as any).locArgs?.[2] ?? 0) === 'misc_outfits'  &&  ((s as any).locArgs?.[3] ?? 0) === 1) {
    scene.text('A hessian sack the hunters gave you.');
  } else {
    if (((s as any).swimwear_description ?? 0) !== '') {
      // TODO-QSP: dynamic text: $swimwear_description
      scene.text('$swimwear_description');
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
  if (((s as any).locArgs?.[1] ?? 0) === 'resize') {
    scene.text('<td colspan="4"></td>');
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'does_fit', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" }))  ||  (! qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" })))  ||  ((s as any).pcs_sewng ?? 0) < 50  ||  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] <= 0) {
      scene.img('images/system/icons/clothing/resize_off.png');
    } else {
      scene.img('images/system/icons/clothing/resize.png');
    }
    scene.text('</center></td>');
    scene.text('<td></td>');
  } else {
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'in_wardrobe', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" }))) {
      scene.img('images/system/icons/clothing/wardrobe.png');
    } else {
      scene.img('images/system/icons/clothing/wardrobe_off.png');
    }
    scene.text('</center></td>');
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'in_storage', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" }))) {
      scene.img('images/system/icons/clothing/storage.png');
    } else {
      scene.img('images/system/icons/clothing/storage_off.png');
    }
    scene.text('</center></td>');
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'in_unwanted', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" }))) {
      scene.img('images/system/icons/clothing/unwanted.png');
    } else {
      scene.img('images/system/icons/clothing/unwanted_off.png');
    }
    scene.text('</center></td>');
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" }))  ||  qspFunc(s, 'clothing', 'is_strength_low', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" })) === 0  ||  ((s as any).pcs_sewng ?? 0) < 60  ||  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] <= 0) {
      scene.img('images/system/icons/clothing/repair_off.png');
    } else {
      scene.img('images/system/icons/clothing/repair.png');
    }
    scene.text('</center></td>');
    scene.text('<td><center>');
    if (qspFunc(s, 'clothing', 'does_fit', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" }))  ||  (! qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" })))  ||  ((s as any).pcs_sewng ?? 0) < 50  ||  qspFunc(s, 'money', 'can_afford', 500) === 0) {
      scene.img('images/system/icons/clothing/resize_off.png');
    } else {
      scene.img('images/system/icons/clothing/resize.png');
    }
    scene.text('</center></td>');
    scene.text('<td><center>');
    if (! qspFunc(s, 'clothing', 'is_immutable', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "clothing_view" }))) {
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
  // TODO-QSP: gt 'clothing_view', 'view_list', $ward_list_store
  // TODO-QSP: end
  scene.build();
}

function enterListLineMoveToStorage(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'move_to_storage', $ARGS[1], ARGS[2]
  // TODO-QSP: gt 'clothing_view', 'view_list', $ward_list_store
  // TODO-QSP: end
  scene.build();
}

function enterListLineMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'move_to_unwanted', $ARGS[1], ARGS[2]
  // TODO-QSP: gt 'clothing_view', 'view_list', $ward_list_store
  // TODO-QSP: end
  scene.build();
}

function enterListLineResize(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).mc_inventory ?? {})['sewing_fabric'] = (((s as any).mc_inventory ?? {})['sewing_fabric'] ?? 0) - (1);
  // TODO-QSP: gs 'clothing', 'resize_clothes', $ARGS[1], ARGS[2]
  scene.text('You resize the outfit yourself.');
  // TODO-QSP: gt 'clothing_view', 'view_list', $ward_list_store
  // TODO-QSP: end
  scene.build();
}

function enterListLineRepair(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing_attributes', $ARGS[1], ARGS[2]
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).temp_rand = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_rand ?? 0) < ((s as any).pcs_sewng ?? 0) / 4) {
    ((s as any).mc_inventory ?? {})['sewing_fabric'] = (((s as any).mc_inventory ?? {})['sewing_fabric'] ?? 0) - (1);
    // TODO-QSP: gs 'clothing', 'increase_strength', $ARGS[1], ARGS[2], CloMaxStrength / 3
  } else {
    if (((s as any).temp_rand ?? 0) < ((s as any).pcs_sewng ?? 0) / 2) {
      ((s as any).mc_inventory ?? {})['sewing_fabric'] = (((s as any).mc_inventory ?? {})['sewing_fabric'] ?? 0) - (1);
      // TODO-QSP: gs 'clothing', 'increase_strength', $ARGS[1], ARGS[2], CloMaxStrength / 6
    } else {
      ((s as any).mc_inventory ?? {})['sewing_fabric'] = (((s as any).mc_inventory ?? {})['sewing_fabric'] ?? 0) + (3);
      // TODO-QSP: gs 'clothing', 'remove_item', $ARGS[1], ARGS[2]
    }
  }
  // TODO-QSP: gt 'clothing_view', 'view_list', $ward_list_store
  // TODO-QSP: end
  scene.build();
}

function enterListLineDelete(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'remove_item', $ARGS[1], ARGS[2]
  // TODO-QSP: gt 'clothing_view', 'view_list', $ward_list_store
  // TODO-QSP: end
  scene.build();
}

function enterListLineTailorResize(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'pay', 500);
  // TODO-QSP: gs 'clothing', 'resize_clothes', $ARGS[1], ARGS[2]
  // TODO-QSP: dynamic text: You have the outfit resized for ' + $func('money', 'string_price', 500) + '.
  scene.text('You have the outfit resized for \' + $func(\'money\', \'string_price\', 500) + \'.');
  // TODO-QSP: gt 'clothing_view', 'view_list', $ward_list_store
  // TODO-QSP: end
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_utils_view ?? {})['link'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shop_utils_view ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).shop_utils_view ?? {})['number'] = qspUntranslated(s, "ARGS[3]", { location: "clothing_view" });
  ((s as any).shop_utils_view ?? {})['discount'] = qspUntranslated(s, "ARGS[4]", { location: "clothing_view" });
  qspCall(s, 'stat', '');
  scene.img(`${qspFunc(s, '$clothing_image', '$shop_utils_view[\'type\']', ((s as any).shop_utils_view ?? 0)?.['number'])}`);
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
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_shop'] }]);
  }
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    // TODO-QSP: dynamic text: '(dirty ' + min(max(0, CloDirt / 24), 100) + ', strength ' + CloStrength
    scene.text('\'(dirty \' + min(max(0, CloDirt / 24), 100) + \', strength \' + CloStrength');
    if (((s as any).CloSport ?? 0) === 0  &&  ((s as any).CloStyle ?? 0) !== 5) {
      // TODO-QSP: dynamic text: ', hip size ' + $dyneval("$result = <<$shop_utils_view['type']>>_b[<<shop_utils_...
      scene.text(`', hip size ' + $dyneval("$result = ${((s as any).shop_utils_view ?? 0)?.['type']}_b[${((s as any).shop_utils_view ?? 0)?.['number']}]")`);
    }
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'resize') {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_resize'] }]);
  }
  if (qspFunc(s, 'clothing', 'is_wearing', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_wearing'] }]);
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'sell') {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_sell'] }]);
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_wardrobe'] }]);
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'storage') {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_storage'] }]);
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'unwanted') {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_unwanted'] }]);
  }
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'owned') {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_owned'] }]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_...
  } },
  ]);
  scene.build();
}

function enterViewItemShop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You already own this item.');
    return;
  }
  ((s as any).shop_utils_view ?? {})['discount_total'] = ((s as any).shop_utils_view ?? {})?.['discount'] + qspFunc(s, 'shop_utils', 'get_discount', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']);
  ((s as any).shop_utils_view ?? {})['base_price'] = ((s as any).CloPrice ?? 0);
  ((s as any).shop_utils_view ?? {})['price'] = ((s as any).shop_utils_view ?? {})?.['base_price'] * Math.max(0, 100 - ((s as any).shop_utils_view ?? {})?.['discount_total']) / 100;
  ((s as any).shop_utils_view ?? {})['price'] = ((s as any).shop_utils_view ?? {})?.['price'] / 50 * 50;
  if (((s as any).shop_utils_view ?? 0)?.['price'] === ((s as any).shop_utils_view ?? 0)?.['base_price']) {
    ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']);
  } else {
    ((s as any).shop_utils_view ?? {})['price_string'] = qspFunc(s, 'wrap', 'neg s', qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['base_price'])) + ' <b>' +  qspFunc(s, 'money', 'string_price', ((s as any).shop_utils_view ?? 0)?.['price']) + '</b>';
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
      { label: 'Buy (<<$shop_utils_view[\'price_string\']>>)', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'pay', shop_utils_view['price']
    // TODO-QSP: gs 'clothing', 'add_item', $shop_utils_view['type'], shop_utils_view['number']
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterViewItemResize(s: GameState, scene: SceneBuilder): void {
  if (((s as any).CloSport ?? 0) === 0  &&  ((s as any).CloStyle ?? 0) !== 5) {
    if ((0 as any) !== ((s as any).pcs_hips ?? 0)  &&  qspFunc(s, 'money', 'can_afford', 500)) {
      // TODO-QSP: dynamic text: You can have this resized for ' + $func('money', 'string_price', 500) + '.
      scene.text('You can have this resized for \' + $func(\'money\', \'string_price\', 500) + \'.');
      scene.actions([
        { label: 'Resize', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 500);
    // TODO-QSP: gs 'clothing', 'resize_clothes', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_loc'], 'resize'
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave item alone', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_loc'], $ward_list_pag...
  } },
  ]);
  scene.build();
}

function enterViewItemWearing(s: GameState, scene: SceneBuilder): void {
  scene.text('You are wearing these clothes.');
  if (((s as any).shop_utils_view ?? 0)?.['link'] === 'wardrobe') {
    scene.actions([
      { label: 'Strip out of your clothes', handler: (st: GameState) => {
    qspCall(s, 'clothing', 'strip');
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['wardrobe', 'main'] },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', 'view_list', $shop_utils_view['link']
  } },
  ]);
  scene.build();
}

function enterViewItemSell(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.text('You can\'t sell these clothes.');
    return;
  }
  (s as any).temp_cloStrength = 0;
  if (((s as any).temp_cloStrength ?? 0) > 45) {
    // TODO-QSP: dynamic text: You can sell this item for ' + $func('money', 'string_profit', 500) + '.
    scene.text('You can sell this item for \' + $func(\'money\', \'string_profit\', 500) + \'.');
    scene.actions([
      { label: 'Sell', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'money', 'earn', 500);
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_store
  } },
    ]);
  } else {
    if (((s as any).temp_cloStrength ?? 0) > 30) {
      // TODO-QSP: dynamic text: You can sell this item for ' + $func('money', 'string_profit', 300) + '.
      scene.text('You can sell this item for \' + $func(\'money\', \'string_profit\', 300) + \'.');
      scene.actions([
        { label: 'Sell', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'money', 'earn', 300);
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_store
  } },
      ]);
    } else {
      if (((s as any).temp_cloStrength ?? 0) > 0) {
        // TODO-QSP: dynamic text: You can sell this item for ' + $func('money', 'string_profit', 100) + '.
        scene.text('You can sell this item for \' + $func(\'money\', \'string_profit\', 100) + \'.');
        scene.actions([
          { label: 'Sell', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
    qspCall(s, 'money', 'earn', 100);
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_store
  } },
        ]);
      } else {
        scene.text('This item is too worn to have any sale value.');
        scene.actions([
          { label: 'Throw it away', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_store
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep item', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_...
  } },
  ]);
  scene.build();
}

function enterViewItemWardrobe(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    if (qspFunc(s, 'clothing', 'is_strength_low', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
      scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_wear_strength_low'] }]);
    }
    if (((s as any).CloSport ?? 0) === 0  &&  ((s as any).CloStyle ?? 0) !== 5) {
      if (! qspFunc(s, 'clothing', 'does_fit', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
        scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_wear_size_wrong'] }]);
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
  qspCall(s, 'clothing_view', 'storage_options');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_...
  } },
  ]);
  scene.build();
}

function enterViewItemStorage(s: GameState, scene: SceneBuilder): void {
  scene.text('These clothes are in storage.');
  qspCall(s, 'clothing_view', 'storage_options');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_...
  } },
  ]);
  scene.build();
}

function enterViewItemUnwanted(s: GameState, scene: SceneBuilder): void {
  scene.text('These clothes are unwanted.');
  qspCall(s, 'clothing_view', 'storage_options');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_...
  } },
  ]);
  scene.build();
}

function enterViewItemOwned(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'in_storage', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_storage'] }]);
  }
  if (qspFunc(s, 'clothing', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number'])) {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_unwanted'] }]);
  }
  scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_wardrobe'] }]);
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
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/pc/activities/sewing/fix\' + rand(1, 2) + \'.jpg');
    if ((Math.floor(Math.random() * 100) + 1) < 30) {
      ((s as any).mc_inventory ?? {})['sewing_fabric'] = (((s as any).mc_inventory ?? {})['sewing_fabric'] ?? 0) - (1);
      // TODO-QSP: gs 'clothing_attributes', $shop_utils_view['type'], shop_utils_view['number']
      // TODO-QSP: gs 'clothing', 'increase_strength', $shop_utils_view['type'], shop_utils_view['number'], CloMaxStren...
      scene.text('You spend 30 minutes fixing the outfit.');
    } else {
      ((s as any).mc_inventory ?? {})['sewing_fabric'] = (((s as any).mc_inventory ?? {})['sewing_fabric'] ?? 0) + (3);
      // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
      scene.text('Despite your skill with a needle, this outfit has proved beyond repair. All that is left of it is only good for your cloth pile.');
    }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_...
  } },
    ]);
  } },
      ]);
    }
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_...
  } },
  ]);
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
    ((s as any).mc_inventory ?? {})['sewing_fabric'] = (((s as any).mc_inventory ?? {})['sewing_fabric'] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    // TODO-QSP: gs 'clothing', 'resize_clothes', $shop_utils_view['type'], shop_utils_view['number']
    scene.text('You spend 30 minutes resizing the outfit.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_...
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).loc_arg ?? 0) === 'tailor') {
      if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
        scene.text('You cannot afford to have this resized.');
      } else {
        // TODO-QSP: dynamic text: You can pay to have this resized for ' + $func('money', 'string_price', 500) + '...
        scene.text('You can pay to have this resized for \' + $func(\'money\', \'string_price\', 500) + \'.');
        scene.actions([
          { label: 'Resize item', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'money', 'pay', 500);
    // TODO-QSP: gs 'clothing', 'resize_clothes', $shop_utils_view['type'], shop_utils_view['number']
    scene.text('You hand the clothing over to the tailor who takes it into the back. Fifteen minutes later, he presents your clothing back to you, adjusted to fit you perfectly.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_...
  } },
    ]);
  } },
        ]);
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', $shop_display['hub_subloc'], $ward_list_...
  } },
  ]);
  scene.build();
}

function enterViewItemWear(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'is_hypno_approved', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_item_wear_hypno'] }]);
  }
  // TODO-QSP: gs 'clothing', 'wear', $shop_utils_view['type'], shop_utils_view['number']
  if (((s as any).shop_display ?? 0)?.['hub_subloc'] === 'view_grid') {
    qspCall(s, 'shop_utils', 'cleanup');
    scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
  } else {
    qspCall(s, 'shop_utils', 'cleanup');
    // TODO-QSP: gt 'clothing_view', 'view_lists_list', $ward_list_page
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
      { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: gs 'clothing', 'wear', $shop_utils_view['type'], shop_utils_view['number']
    if (((s as any).shop_display ?? 0)?.['hub_subloc'] === 'view_grid') {
      qspCall(s, 'shop_utils', 'cleanup');
      scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
    } else {
      qspCall(s, 'shop_utils', 'cleanup');
      // TODO-QSP: gt 'clothing_view', 'view_lists_list', $ward_list_page
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    if (((s as any).shop_display ?? 0)?.['hub_subloc'] === 'view_grid') {
      qspCall(s, 'shop_utils', 'cleanup');
      scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
    } else {
      qspCall(s, 'shop_utils', 'cleanup');
      // TODO-QSP: gt 'clothing_view', 'view_lists_list', $ward_list_page
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
    // TODO-QSP: gt 'clothing_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view...
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
    // TODO-QSP: gt 'clothing_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view...
  } },
    ]);
  }
  if (qspFunc(s, 'clothing', 'in_unwanted', ((s as any).shop_utils_view ?? 0)?.['type'], ((s as any).shop_utils_view ?? 0)?.['number']) === 0) {
    scene.actions([
      { label: 'Move to unwanted', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'move_to_unwanted', $shop_utils_view['type'], shop_utils_view['number']
    // TODO-QSP: gt 'clothing_view', 'view_item', $shop_utils_view['link'], $shop_utils_view['type'], shop_utils_view...
  } },
    ]);
  }
  // TODO-QSP: act $func('wrap', 'neg', 'Throw these clothes away'):
  // TODO-QSP: gs 'clothing', 'remove_item', $shop_utils_view['type'], shop_utils_view['number']
  // TODO-QSP: gt 'clothing_view', 'view_list', $shop_utils_view['link']
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
