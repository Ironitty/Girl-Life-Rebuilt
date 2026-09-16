// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $loc_clothestypes[1] = 'gm_outfits'
  // TODO-QSP: $loc_clothestypes[2] = 'gm_dress'
  // TODO-QSP: $loc_clothestypes[3] = 'gm_office'
  // TODO-QSP: $loc_clothestypes[4] = 'gm_school'
  // TODO-QSP: $loc_clothestypes[5] = 'gm_maid'
  // TODO-QSP: $loc_clothestypes[6] = 'gm_server'
  // TODO-QSP: $loc_clothestypes[7] = 'misc_outfits'
  // TODO-QSP: $loc_clothestypes[8] = 'cats_dress'
  // TODO-QSP: $loc_clothestypes[9] = 'cats_outfits'
  // TODO-QSP: $loc_clothestypes[10] = 'flamingos_dress'
  // TODO-QSP: $loc_clothestypes[11] = 'flamingos_outfits'
  // TODO-QSP: $loc_clothestypes[12] = 'gm_coats'
  // TODO-QSP: $loc_clothestypes[13] = 'coco_dress'
  // TODO-QSP: $loc_clothestypes[14] = 'coco_outfits'
  // TODO-QSP: $loc_clothestypes[15] = 'fashionista_dress'
  // TODO-QSP: $loc_clothestypes[16] = 'fashionista_oufits'
  // TODO-QSP: $loc_clothestypes[17] = 'moncheri_dress'
  // TODO-QSP: $loc_clothestypes[18] = 'scandalicious_dress'
  // TODO-QSP: $loc_clothestypes[19] = 'scandalicious_outfits'
  // TODO-QSP: $loc_clothestypes[20] = 'scandalicious_bikinis'
  // TODO-QSP: $loc_clothestypes[21] = 'scandalicious_swimsuit'
  // TODO-QSP: $loc_clothestypes[22] = 'salacious_dress'
  // TODO-QSP: $loc_clothestypes[23] = 'eroto_dress'
  // TODO-QSP: $loc_clothestypes[24] = 'fancy_burlesque'
  // TODO-QSP: $loc_clothestypes[25] = 'dolls_outfits'
  // TODO-QSP: $loc_clothestypes[26] = 'dolls_dress'
  // TODO-QSP: $loc_clothestypes[27] = 'bomba_outfits'
  // TODO-QSP: $loc_clothestypes[28] = 'bomba_dress'
  // TODO-QSP: $loc_clothestypes[29] = 'danilovich_outfits'
  // TODO-QSP: $loc_clothestypes[30] = 'cats_coats'
  // TODO-QSP: $loc_clothestypes[31] = 'moncheri_coats'
  // TODO-QSP: $loc_clothestypes[32] = 'dolls_coats'
  // TODO-QSP: $loc_clothestypes[33] = 'bomba_coats'
  // TODO-QSP: $loc_clothestypes[34] = 'danilovich_coats'
  // TODO-QSP: $loc_clothestypes[35] = 'danilovich_swimsuit'
  // TODO-QSP: $loc_clothestypes[36] = 'allure_bikinis'
  // TODO-QSP: $loc_clothestypes[37] = 'allure_swimsuit'
  // TODO-QSP: $loc_clothestypes[38] = 'market_outfits'
  // TODO-QSP: $loc_clothestypes[39] = 'eroto_outfits'
  // TODO-QSP: $loc_clothestypes[40] = 'eroto_strip'
  // TODO-QSP: $loc_clothestypes[41] = 'moncheri_gown'
  // TODO-QSP: $loc_clothestypes[42] = 'salacious_outfits'
  // TODO-QSP: $loc_clothestypes[43] = 'materinstvo_dress'
  // TODO-QSP: $loc_clothestypes[44] = 'nerdvana_cosplay'
  // TODO-QSP: $loc_clothestypes[45] = 'nerdvana_outfits'
  // TODO-QSP: $loc_clothestypes[46] = 'nerdvana_bikinis'
  // TODO-QSP: $loc_clothestypes[47] = 'nerdvana_swimsuit'
  ((s as any).gm_school_w = (s as any).gm_school_w ?? {})[6] = 0;
  (s as any).j = 1;
  // TODO-QSP: :loopclotype
  (s as any).i = 1;
  // TODO-QSP: :loopclonum
  // TODO-QSP: dynamic "
  const _dynVarName = ((s as any).loc_clothestypes ?? 0)?.[String((s as any).j ?? 0)] + '_w'; if ((s as any)[_dynVarName]?.[String((s as any).i ?? 0)] === 1) {
    // TODO-QSP: <<$loc_clothestypes[j]>>_w[i] = 0
    // TODO-QSP: gs 'clothing', 'decrease_strength', $loc_clothestypes[j], i, 1
  }
  // TODO-QSP: "
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) < Object.keys((s as any)['' + ((s as any).loc_clothestypes ?? 0)?.[String((s as any).j ?? 0)] + '_w'] ?? {}).length) {
    // TODO-QSP: jump 'loopclonum'
  }
  (s as any).j = ((s as any).j ?? 0) + (1);
  if (((s as any).j ?? 0) < Object.keys((s as any).loc_clothestypes ?? {}).length) {
    // TODO-QSP: jump 'loopclotype'
  }
  scene.build();
}

export const starenie: LocationDef = {
  name: 'starenie',
  region: 'other',
  enter: enter,
};
