import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKitch(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'city_house_res_kitch', 'kitch');
  (s as any).location_type = 'private';
  (s as any).locclass = 'kitr';
  qspCall(s, 'kit_din', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/city/residential/house/crh_kitchen.jpg');
  scene.text('A well stocked kitchen containing all the necessities to make whatever meal you please.');
  if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0) {
    // TODO-QSP: dynamic text: You have <b><<mc_inventory[''dish_plates'']>></b> clean plates left.
    scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['dish_plates'] ?? ''}</b> clean plates left.`);
  } else {
    scene.text('<center><b>You don\'t have any clean plates left.</b></center>');
  }
  if (((s as any).dirttarelka ?? 0) > 0) {
    // TODO-QSP: dynamic text: There are <b><<dirttarelka>></b> dirty dishes in the sink. <a href="exec:gs ''ki...
    scene.text(`There are <b>${((s as any).dirttarelka ?? '')}</b> dirty dishes in the sink. <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kit_din/u0027, /u0027dirtarm/u0027); return false;">Wash the dishes</a>.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['dish_soap'] > 0) {
    // TODO-QSP: 'Under the sink is some dishwashing detergent, which is enough for <b><<mc_inventory[''dish_soap'']>...
  } else {
    scene.text('<center><b>You have nothing to wash dishes with. You should buy some detergent.</b></center>');
  }
  if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] === 0  ||  ((s as any).edahot ?? 0) > 0) {
      (s as any).edagot = '';
    }
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0  &&  (!((s as any).edahot ?? 0))) {
      (s as any).edagot = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kit_din/u0027, /u0027edagotd/u0027); return false;">Cook a meal</a>';
    }
    // TODO-QSP: dynamic text: There''s enough food for <b><<mc_inventory[''food_basic'']>></b> ' + iif(mc_inve...
    scene.text('There\'s enough food for <b>' + ((s as any).mc_inventory ?? 0)?.['food_basic'] ?? '' + '</b> \' + iif(mc_inventory[\'food_basic\'] = 1, \'serving\', \'servings\') + \'. ' + ((s as any).edagot ?? '') + '');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['food_diet'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['food_basic'] === 0) {
      scene.text('<center><b>The fridge is empty. You have nothing to eat.</b></center>');
    }
  }
  qspCall(s, 'kit_din', 'edahota');
  qspCall(s, 'lover_living', 'kitchen');
  qspCall(s, 'core_library', 'kitchen', 'full');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['city_house_res_misc', 'hallw'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'kitch':
      enterKitch(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_house_res_kitch: LocationDef = {
  name: 'city_house_res_kitch',
  title: 'Kitchen',
  region: 'city',
  locationType: 'private',
  locclass: 'kitr',
  enter: enter,
};
