import { qspCall, qspFunc } from '../_shared/qspBridge';

import type { GameState, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function sellItem(s: GameState, arr: string, idx: number): void {
  (s as any).poshvalldrop = ((s as any).poshvalldrop ?? 0) + 1;
  (s as any).temp_cloStrength = ((s as any)[arr + '_h'] ?? 0)?.[String(idx)];
  const str = (s as any).temp_cloStrength ?? 0;
  qspCall(s, 'clothing', 'remove_item', arr, idx);
  if (str > 100) {
    qspCall(s, 'money', 'earn', 750);
    (s as any).selltot = ((s as any).selltot ?? 0) + 750;
  } else if (str > 45) {
    qspCall(s, 'money', 'earn', 500);
    (s as any).selltot = ((s as any).selltot ?? 0) + 500;
  } else if (str > 30) {
    qspCall(s, 'money', 'earn', 300);
    (s as any).selltot = ((s as any).selltot ?? 0) + 300;
  } else if (str > 0) {
    qspCall(s, 'money', 'earn', 100);
    (s as any).selltot = ((s as any).selltot ?? 0) + 100;
  }
  (s as any).temp_cloStrength = undefined;
}

function sellLoop(s: GameState, arr: string, sellName: string): void {
  (s as any).i = 1;
  do {
    if (((s as any)[arr] ?? 0)?.[String((s as any).i ?? 0)] === 1 && ((s as any)[arr + '_s'] ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      sellItem(s, sellName, (s as any).i ?? 0);
    }
    (s as any).i = ((s as any).i ?? 0) + 1;
  } while (((s as any).i ?? 0) <= Object.keys((s as any)[arr] ?? {}).length);
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).poshvalldrop = 0;
  (s as any).selltot = 0;
  sellLoop(s, 'gm_outfits', 'gm_outfits');
  sellLoop(s, 'gm_dress', 'gm_dress');
  sellLoop(s, 'gm_office', 'office');
  sellLoop(s, 'gm_maid', 'gm_maid');
  sellLoop(s, 'gm_server', 'gm_server');
  sellLoop(s, 'gm_school', 'school');
  sellLoop(s, 'misc_outfits', 'misc_outfits');
  sellLoop(s, 'cats_outfits', 'cats_outfits');
  sellLoop(s, 'cats_dress', 'cats_dress');
  sellLoop(s, 'flamingos_dress', 'flamingos_dress');
  sellLoop(s, 'flamingos_outfits', 'flamingos_outfits');
  sellLoop(s, 'coco_dress', 'coco_dress');
  sellLoop(s, 'coco_outfits', 'coco_outfits');
  sellLoop(s, 'fashionista_dress', 'fashionista_dress');
  sellLoop(s, 'fashionista_outfits', 'fashionista_outfits');
  sellLoop(s, 'moncheri_dress', 'moncheri_dress');
  sellLoop(s, 'moncheri_gown', 'moncheri_gown');
  sellLoop(s, 'scandalicious_dress', 'scandalicious_dress');
  sellLoop(s, 'scandalicious_outfits', 'scandalicious_outfits');
  sellLoop(s, 'scandalicious_bikinis', 'scandalicious_bikinis');
  sellLoop(s, 'scandalicious_swimsuit', 'scandalicious_swimsuit');
  sellLoop(s, 'allure_bikinis', 'allure_bikinis');
  sellLoop(s, 'allure_swimsuit', 'allure_swimsuit');
  sellLoop(s, 'fancy_burlesque', 'fancy_burlesque');
  sellLoop(s, 'eroto_dress', 'eroto_dress');
  sellLoop(s, 'eroto_outfits', 'eroto_outfits');
  sellLoop(s, 'eroto_strip', 'eroto_strip');
  sellLoop(s, 'salacious_dress', 'salacious_dress');
  sellLoop(s, 'salacious_outfits', 'salacious_outfits');
  sellLoop(s, 'dolls_outfits', 'dolls_outfits');
  sellLoop(s, 'dolls_dress', 'dolls_dress');
  sellLoop(s, 'bomba_outfits', 'bomba_outfits');
  sellLoop(s, 'bomba_dress', 'bomba_dress');
  sellLoop(s, 'nerdvana_outfits', 'nerdvana_outfits');
  sellLoop(s, 'nerdvana_cosplay', 'nerdvana_cosplay');
  sellLoop(s, 'nerdvana_bikinis', 'nerdvana_bikinis');
  sellLoop(s, 'nerdvana_swimsuit', 'nerdvana_swimsuit');
  sellLoop(s, 'danilovich_outfits', 'danilovich_outfits');
  sellLoop(s, 'danilovich_swimsuit', 'danilovich_swimsuit');
  sellLoop(s, 'market_outfits', 'market_outfits');
  sellLoop(s, 'materinstvo_dress', 'materinstvo_dress');
  scene.text(`You sold ${((s as any).poshvalldrop ?? '')} items of unwanted clothing for a total of ${qspFunc(s, 'money', 'string_profit', ((s as any).selltot ?? ''))}.`);
  scene.build();
}

export const portnoi: LocationDef = {
  name: 'portnoi',
  region: 'other',
  enter: enter,
};
