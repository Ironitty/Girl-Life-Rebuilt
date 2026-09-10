import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).poshvalldrop = ((s as any).poshvalldrop ?? 0) + (1);
  // TODO-QSP: dynamic 'temp_cloStrength = <<$ARGS[0]>>_h[<<ARGS[1]>>]'
  if (((s as any).temp_cloStrength ?? 0) > 100) {
    // TODO-QSP: gs 'clothing', 'remove_item', $ARGS[0], ARGS[1]
    qspCall(s, 'money', 'earn', 750);
    (s as any).selltot = ((s as any).selltot ?? 0) + (750);
  } else {
    // TODO-QSP: gs 'clothing', 'remove_item', $ARGS[0], ARGS[1]
    qspCall(s, 'money', 'earn', 500);
    (s as any).selltot = ((s as any).selltot ?? 0) + (500);
    if (((s as any).temp_cloStrength ?? 0) > 30) {
      // TODO-QSP: gs 'clothing', 'remove_item', $ARGS[0], ARGS[1]
      qspCall(s, 'money', 'earn', 300);
      (s as any).selltot = ((s as any).selltot ?? 0) + (300);
    } else {
      // TODO-QSP: gs 'clothing', 'remove_item', $ARGS[0], ARGS[1]
      qspCall(s, 'money', 'earn', 100);
      (s as any).selltot = ((s as any).selltot ?? 0) + (100);
      // TODO-QSP: gs 'clothing', 'remove_item', $ARGS[0], ARGS[1]
    }
    (s as any).poshvalldrop = 0;
    (s as any).selltot = 0;
    (s as any).i = 1;
    // TODO-QSP: :gm_outfitsmet
    if (((s as any).gm_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'gm_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).gm_outfits ?? {}).length) {
      // TODO-QSP: jump 'gm_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :gm_dressmet
    if (((s as any).gm_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'gm_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).gm_dress ?? {}).length) {
      // TODO-QSP: jump 'gm_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :officemet
    if (((s as any).gm_office ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_office_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'office', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).office ?? {}).length) {
      // TODO-QSP: jump 'officemet'
    }
    (s as any).i = 1;
    // TODO-QSP: :gm_maidmet
    if (((s as any).gm_maid ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_maid_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'gm_maid', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).gm_maid ?? {}).length) {
      // TODO-QSP: jump 'gm_maidmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :gm_servermet
    if (((s as any).gm_server ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_server_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'gm_server', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).gm_server ?? {}).length) {
      // TODO-QSP: jump 'gm_servermet'
    }
    (s as any).i = 1;
    // TODO-QSP: :schoolmet
    if (((s as any).gm_school ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_school_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'school', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).school ?? {}).length) {
      // TODO-QSP: jump 'schoolmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :misc_outfitsmet
    if (((s as any).misc_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).misc_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'misc_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).misc_outfits ?? {}).length) {
      // TODO-QSP: jump 'misc_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :cats_outfitsmet
    if (((s as any).cats_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).cats_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'cats_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).cats_outfits ?? {}).length) {
      // TODO-QSP: jump 'cats_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :cats_dressmet
    if (((s as any).cats_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).cats_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'cats_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).cats_dress ?? {}).length) {
      // TODO-QSP: jump 'cats_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :flamingos_dressmet
    if (((s as any).flamingos_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).flamingos_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'flamingos_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).flamingos_dress ?? {}).length) {
      // TODO-QSP: jump 'flamingos_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :flamingos_outfitsmet
    if (((s as any).flamingos_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).flamingos_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'flamingos_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).flamingos_outfits ?? {}).length) {
      // TODO-QSP: jump 'flamingos_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :coco_dressmet
    if (((s as any).coco_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).coco_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'coco_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).coco_dress ?? {}).length) {
      // TODO-QSP: jump 'coco_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :coco_outfitsmet
    if (((s as any).coco_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).coco_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'coco_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).coco_outfits ?? {}).length) {
      // TODO-QSP: jump 'coco_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :fashionista_dressmet
    if (((s as any).fashionista_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).fashionista_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'fashionista_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).fashionista_dress ?? {}).length) {
      // TODO-QSP: jump 'fashionista_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :fashionista_outfitsmet
    if (((s as any).fashionista_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).fashionista_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'fashionista_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).fashionista_outfits ?? {}).length) {
      // TODO-QSP: jump 'fashionista_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :moncheri_dressmet
    if (((s as any).moncheri_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).moncheri_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'moncheri_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).moncheri_dress ?? {}).length) {
      // TODO-QSP: jump 'moncheri_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :moncheri_gownmet
    if (((s as any).moncheri_gown ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).moncheri_gown_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'moncheri_gown', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).moncheri_gown ?? {}).length) {
      // TODO-QSP: jump 'moncheri_gownmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :scandalicious_dressmet
    if (((s as any).scandalicious_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).scandalicious_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'scandalicious_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).scandalicious_dress ?? {}).length) {
      // TODO-QSP: jump 'scandalicious_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :scandalicious_outfitsmet
    if (((s as any).scandalicious_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).scandalicious_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'scandalicious_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).scandalicious_outfits ?? {}).length) {
      // TODO-QSP: jump 'scandalicious_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :scandalicious_bikinismet
    if (((s as any).scandalicious_bikinis ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).scandalicious_bikinis_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'scandalicious_bikinis', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).scandalicious_bikinis ?? {}).length) {
      // TODO-QSP: jump 'scandalicious_bikinismet'
    }
    (s as any).i = 1;
    // TODO-QSP: :scandalicious_swimsuitmet
    if (((s as any).scandalicious_swimsuit ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).scandalicious_swimsuit_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'scandalicious_swimsuit', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).scandalicious_swimsuit ?? {}).length) {
      // TODO-QSP: jump 'scandalicious_swimsuitmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :allure_bikinismet
    if (((s as any).allure_bikinis ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).allure_bikinis_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'allure_bikinis', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).allure_bikinis ?? {}).length) {
      // TODO-QSP: jump 'allure_bikinismet'
    }
    (s as any).i = 1;
    // TODO-QSP: :allure_swimsuitmet
    if (((s as any).allure_swimsuit ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).allure_swimsuit_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'allure_swimsuit', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).allure_swimsuit ?? {}).length) {
      // TODO-QSP: jump 'allure_swimsuitmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :fancy_burlesquemet
    if (((s as any).fancy_burlesque ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).fancy_burlesque_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'fancy_burlesque', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).fancy_burlesque ?? {}).length) {
      // TODO-QSP: jump 'fancy_burlesquemet'
    }
    (s as any).i = 1;
    // TODO-QSP: :eroto_dressmet
    if (((s as any).eroto_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).eroto_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'eroto_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).eroto_dress ?? {}).length) {
      // TODO-QSP: jump 'eroto_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :eroto_outfitsmet
    if (((s as any).eroto_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).eroto_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'eroto_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).eroto_outfits ?? {}).length) {
      // TODO-QSP: jump 'eroto_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :eroto_stripmet
    if (((s as any).eroto_strip ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).eroto_strip_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'eroto_strip', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).eroto_strip ?? {}).length) {
      // TODO-QSP: jump 'eroto_stripmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :salacious_dressmet
    if (((s as any).salacious_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).salacious_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'salacious_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).salacious_dress ?? {}).length) {
      // TODO-QSP: jump 'salacious_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :salacious_outfitsmet
    if (((s as any).salacious_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).salacious_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'salacious_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).salacious_outfits ?? {}).length) {
      // TODO-QSP: jump 'salacious_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :dolls_outfitsmet
    if (((s as any).dolls_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).dolls_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'dolls_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).dolls_outfits ?? {}).length) {
      // TODO-QSP: jump 'dolls_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :dolls_dressmet
    if (((s as any).dolls_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).dolls_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'dolls_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).dolls_dress ?? {}).length) {
      // TODO-QSP: jump 'dolls_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :bomba_outfitsmet
    if (((s as any).bomba_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).bomba_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'bomba_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).bomba_outfits ?? {}).length) {
      // TODO-QSP: jump 'bomba_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :bomba_dressmet
    if (((s as any).bomba_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).bomba_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'bomba_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).bomba_dress ?? {}).length) {
      // TODO-QSP: jump 'bomba_dressmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :nerdvana_outfitsmet
    if (((s as any).nerdvana_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).nerdvana_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'nerdvana_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).nerdvana_outfits ?? {}).length) {
      // TODO-QSP: jump 'nerdvana_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :nerdvana_cosplaymet
    if (((s as any).nerdvana_cosplay ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).nerdvana_cosplay_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'nerdvana_cosplay', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).nerdvana_cosplay ?? {}).length) {
      // TODO-QSP: jump 'nerdvana_cosplaymet'
    }
    (s as any).i = 1;
    // TODO-QSP: :nerdvana_bikinismet
    if (((s as any).nerdvana_bikinis ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).nerdvana_bikinis_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'nerdvana_bikinis', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).nerdvana_bikinis ?? {}).length) {
      // TODO-QSP: jump 'nerdvana_bikinismet'
    }
    (s as any).i = 1;
    // TODO-QSP: :nerdvana_swimsuitmet
    if (((s as any).nerdvana_swimsuit ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).nerdvana_swimsuit_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'nerdvana_swimsuit', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).nerdvana_swimsuit ?? {}).length) {
      // TODO-QSP: jump 'nerdvana_swimsuitmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :danilovichmet
    if (((s as any).danilovich_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).danilovich_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'danilovich_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).danilovich_outfits ?? {}).length) {
      // TODO-QSP: jump 'danilovichmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :danilovich_swimsuitmet
    if (((s as any).danilovich_swimsuit ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).danilovich_swimsuit_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'danilovich_swimsuit', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).danilovich_swimsuit ?? {}).length) {
      // TODO-QSP: jump 'danilovich_swimsuitmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :market_outfitsmet
    if (((s as any).market_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).market_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'market_outfits', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).market_outfits ?? {}).length) {
      // TODO-QSP: jump 'market_outfitsmet'
    }
    (s as any).i = 1;
    // TODO-QSP: :materinstvo_dressmet
    if (((s as any).materinstvo_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).materinstvo_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      // TODO-QSP: dynamic($batch_sell, 'materinstvo_dress', i)
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).materinstvo_dress ?? {}).length) {
      // TODO-QSP: jump 'materinstvo_dressmet'
    }
    // TODO-QSP: dynamic text: You sold <<poshvalldrop>> items of unwanted clothing for a total of <<$func('mon...
    scene.text(`You sold ${((s as any).poshvalldrop ?? 0)} items of unwanted clothing for a total of ${qspFunc(s, 'money', 'string_profit', ((s as any).selltot ?? 0))}.`);
  }
  scene.build();
}

export const portnoi: LocationDef = {
  name: 'portnoi',
  region: 'other',
  enter: enter,
};
