import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'pav_park') {
    (s as any).chance = 75;
  } else {
    (s as any).ml_approach = (Math.floor(Math.random() * 101) + 0 > 80  &&  (((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0)) >= 120  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).ml_delparcoQW ?? 0)?.['stage'] === 0);
  }
  (s as any).ml_approach = Math.floor(Math.random() * 100) + 1 > ((s as any).chance ?? 0)  &&  (((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0)) >= 120  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).ml_delparcoQW ?? 0)?.['stage'] === 0;
  if (((s as any).ml_approach ?? 0)) {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 250  ||  ((s as any).fame ?? 0)?.['pav_prostitute'] > 250  ||  ((s as any).fame ?? 0)?.['pav_sex'] > 250  ||  ((s as any).fame ?? 0)?.['pav_porn'] > 500  ||  ((s as any).fame ?? 0)?.['pav_stripping'] > 500) {
      (s as any).ml_delparcoQW['Stage'] = 100;
    } else {
      (s as any).ml_delparcoQW['Stage'] = 100;
      if (((s as any).alko ?? 0) > 6) {
        (s as any).ml_approach = 0;
        (s as any).ml_delparcoQW['Zariyah_Trust'] = ((s as any).ml_delparcoQW['Zariyah_Trust'] ?? 0) - (10);
      } else {
        (s as any).ml_approach = 0;
        (s as any).ml_delparcoQW['Zariyah Trust'] = ((s as any).ml_delparcoQW['Zariyah Trust'] ?? 0) - (20);
      }
      if (((s as any).alko ?? 0) > 4  &&  ((s as any).alko ?? 0) < 7) {
        (s as any).ml_delparcoQW['Drinking Rule'] = 1;
        (s as any).ml_delparcoQW['Zariyah Trust'] = ((s as any).ml_delparcoQW['Zariyah Trust'] ?? 0) - (5);
      }
      if (((s as any).drugVars ?? 0)?.['weed_high'] > 0) {
        (s as any).ml_delparcoQW['Weed Rule'] = 1;
        (s as any).ml_delparcoQW['Zariyah Trust'] = ((s as any).ml_delparcoQW['Zariyah Trust'] ?? 0) - (5);
      }
      if (((s as any).PCloStyle ?? 0) > 3  ||  ((s as any).PCloStyle2 ?? 0) === 3  ||  ((s as any).PCloThinness ?? 0) > 4  ||  ((s as any).PCloTopCut ?? 0) > 3  ||  ((s as any).PCloSkirt ?? 0) > 4  ||  ((s as any).PCloPants ?? 0) > 5  ||  ((s as any).PCloPanties ?? 0) > 0) {
        (s as any).ml_delparcoQW['Outfit Rule'] = 1;
        (s as any).ml_delparcoQW['Zariyah Trust'] = ((s as any).ml_delparcoQW['Zariyah Trust'] ?? 0) - (5);
      }
      if (((s as any).pregChem ?? 0) > 3450) {
        if (((s as any).alko ?? 0) > 4  ||  ((s as any).drugVars ?? 0)?.['weed_high'] > 0  ||  ((s as any).drugVars ?? 0)?.['heroin_high'] > 20  ||  ((s as any).ml_delparcoQW ?? 0)?.['Outfit Rule'] === 1) {
          (s as any).ml_delparcoQW['Stage'] = 100;
        } else {
          (s as any).ml_delparcoQW['Stage'] = 99;
        }
      }
      qspCall(s, 'music_checks', 'check_for_trust');
      if (((s as any).ml_delparcoQW ?? 0)?.['Stage'] === 100) {
        (s as any).ml_approach = 0;
      }
    }
  }
  scene.build();
}

export const music_checks: LocationDef = {
  name: 'music_checks',
  region: 'other',
  enter: enter,
};
