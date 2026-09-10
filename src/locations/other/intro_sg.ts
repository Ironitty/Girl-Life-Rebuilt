import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  (s as any).hour = 6;
  (s as any).grandmaQW['last_month_paid'] = ((s as any).month ?? 0);
  if (((s as any).ARGS ?? 0)[1] === 1) {
    qspCall(s, 'homes_properties', 'give_access', 'parents_home');
    qspCall(s, 'homes_properties', 'give_access', 'grandparents_house');
    qspCall(s, 'homes_properties', 'set_home', 'grandparents_house');
    (s as any).gadstay_day = ((s as any).daystart ?? 0);
    (s as any).gadstay = 1;
    (s as any).display_bb = 1;
    (s as any).minut = 10;
    qspCall(s, 'stat', '');
    scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'quick_start'] }]);
  } else {
    qspCall(s, 'homes_properties', 'give_access', 'parents_home');
    qspCall(s, 'homes_properties', 'rent_property', 'old_town_apartment');
    qspCall(s, 'homes_properties', 'set_home', 'old_town_apartment');
    (s as any).minut = 8;
    (s as any).mc_inventory['dish_plates'] = ((s as any).mc_inventory['dish_plates'] ?? 0) + (5);
    (s as any).mc_inventory['food_basic'] = ((s as any).mc_inventory['food_basic'] ?? 0) + (10);
    (s as any).mc_inventory['dish_soap'] = 10;
    qspCall(s, 'stat', '');
    scene.actions([{ label: 'Continue', goto: ['bedr2x', ''] }]);
    if (((s as any).ARGS ?? 0)[1] === 3) {
      (s as any).motherKnowWhore = 1;
      (s as any).motherKnowSpravka = 2;
      qspCall(s, 'npc_relationship', 'set', 'A29', 0);
      if (((s as any).fame ?? 0)?.['pav_sex'] < 100) {
        (s as any).fame['pav_sex'] = ((s as any).fame['pav_sex'] ?? 0) + (200);
      } else {
        if (((s as any).fame ?? 0)?.['pav_sex'] < 300) {
          (s as any).fame['pav_sex'] = 300;
        }
      }
      (s as any).minut = 8;
      (s as any).mc_inventory['dish_plates'] = ((s as any).mc_inventory['dish_plates'] ?? 0) + (2);
      (s as any).mc_inventory['food_basic'] = ((s as any).mc_inventory['food_basic'] ?? 0) + (2);
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['pav_shared_apt', 'quick_start'] }]);
    } else {
      qspCall(s, 'homes_properties', 'give_access', 'parents_home');
      qspCall(s, 'homes_properties', 'set_home', 'parents_home');
      (s as any).minut = 10;
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['bedrPar', 'start'] }]);
    }
    return;
  }
  scene.build();
}

export const intro_sg: LocationDef = {
  name: 'intro_sg',
  title: 'Your Bedroom',
  region: 'other',
  enter: enter,
};
