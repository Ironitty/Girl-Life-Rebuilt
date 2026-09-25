import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter_Dynamic__(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc_clothestypes ?? 0)?.[String((s as any).j ?? 0)]((s as any)._w ?? 0)?.[String((s as any).i ?? 0)] === 1) {
    // TODO-QSP: <<$loc_clothestypes[j]>>_w[i] = 0
    qspCall(s, 'clothing', 'decrease_strength', (((s as any).loc_clothestypes ?? 0)?.[String((s as any).j ?? 0)] ?? 0), ((s as any).i ?? 0), 1);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[1] = 'gm_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[2] = 'gm_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[3] = 'gm_office';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[4] = 'gm_school';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[5] = 'gm_maid';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[6] = 'gm_server';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[7] = 'misc_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[8] = 'cats_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[9] = 'cats_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[10] = 'flamingos_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[11] = 'flamingos_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[12] = 'gm_coats';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[13] = 'coco_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[14] = 'coco_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[15] = 'fashionista_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[16] = 'fashionista_oufits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[17] = 'moncheri_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[18] = 'scandalicious_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[19] = 'scandalicious_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[20] = 'scandalicious_bikinis';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[21] = 'scandalicious_swimsuit';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[22] = 'salacious_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[23] = 'eroto_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[24] = 'fancy_burlesque';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[25] = 'dolls_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[26] = 'dolls_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[27] = 'bomba_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[28] = 'bomba_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[29] = 'danilovich_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[30] = 'cats_coats';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[31] = 'moncheri_coats';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[32] = 'dolls_coats';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[33] = 'bomba_coats';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[34] = 'danilovich_coats';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[35] = 'danilovich_swimsuit';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[36] = 'allure_bikinis';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[37] = 'allure_swimsuit';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[38] = 'market_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[39] = 'eroto_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[40] = 'eroto_strip';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[41] = 'moncheri_gown';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[42] = 'salacious_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[43] = 'materinstvo_dress';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[44] = 'nerdvana_cosplay';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[45] = 'nerdvana_outfits';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[46] = 'nerdvana_bikinis';
  ((s as any).loc_clothestypes = (s as any).loc_clothestypes ?? {})[47] = 'nerdvana_swimsuit';
  ((s as any).gm_school_w = (s as any).gm_school_w ?? {})[6] = 0;
  (s as any).j = 1;
  do {
    (s as any).i = 1;
    do {
      (s as any).i = ((s as any).i ?? 0) + (1);
      delete (s as any)['$' + (((s as any).loc_clothestypes ?? 0)?.[String((s as any).j ?? 0)] ?? 0) + '_w'];
      (s as any).j = ((s as any).j ?? 0) + (1);
      (s as any).loc_clothestypes = undefined;
    } while (((s as any).i ?? 0) < Object.keys((s as any)['' + (((s as any).loc_clothestypes ?? 0)?.[String((s as any).j ?? 0)] ?? 0) + '_w'] ?? {}).length);
  } while (((s as any).j ?? 0) < Object.keys((s as any).loc_clothestypes ?? {}).length);
  const arg = s.locArg;
  switch (arg) {
    case '__dynamic__':
      enter_Dynamic__(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const starenie: LocationDef = {
  name: 'starenie',
  region: 'other',
  enter: enter,
};
