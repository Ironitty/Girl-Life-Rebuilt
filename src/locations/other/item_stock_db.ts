import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBeauty(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Cosmetics department';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cosmetics';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cosmetics';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A collection of lotions, powders and potions that make you look Fabulous. This isn\'t witchcraft honest!';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 50;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1300;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Moisturiser';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Moisturiser';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cream that pampers and improves your skin condition.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 2100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Lipbalm';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'lipbalm';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'To improve your looks and give your lips that extra oomph.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 127;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Plain false lashes';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'eyelash_fake';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'For a subtle eyelash enhancement for a naturally beautiful look.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Mink false lashes';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'eyelash_mink';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Luxurious eyelashes that make your eyes pop, screams glamour baby.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 3;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 900;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Razors';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'razor';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A basic necessity for all body health care, good for 25 shaves.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 25;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 350;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 7;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Sunblock';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'suncream';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Keeps the nasty sun from damaging your skin.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 8;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Deodorant';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'deodorant';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Helps prevents the obnoxious sweat pits condition.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 40;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 200;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 9;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Tampons';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tampons';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A discrete version that helps with that time of the month.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 10;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Sanitary napkins';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'sanitary_pads';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cheap product that helps with that time of month.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 11;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Shampoo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'shampoo';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'To keep your hair luxurious and shiny.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 250;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 12;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Hair scrunchies';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'scrunchies';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Simple hair bands to do ponytails, pigtails and other styles.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 80;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 13;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Hair pins';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'kirbygrips';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'The old classic bobby pins for when you want to go the extra mile with hairstyles.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 14;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cosmetic Wipes';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'makeup_wipes';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Wipe away those sins and remove your make up.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 50;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 15;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Portable makeup';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'travel_makeup';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'For those moments when you need to touch up your make up.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 700;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 16;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Mouthwash';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mouthwash';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Keeps your breath fresh and minty!';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 17;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Comb';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'comb';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Prevents you getting entangled in your hair, and other hair disasters.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 18;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Compact Mirror';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'travel_mirror';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'For when you need touch up your make up, spy or send an SOS.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterFood(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Grocery department';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Regular food';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_basic';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Basic food, might be nourishing.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 80;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Diet food';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_diet';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Special diet food to help you lose weight.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 80;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Tea biscuits';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_biscuits';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A packet of biscuits to accompany your favourite beverage.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Bottle of water';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_water';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A bottle of water to quench your thirst.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Sandwich';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_sandwich';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A sandwich to fill those hunger cravings.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Bottle of wine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_wine';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A cheap bottle of wine.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 200;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterHardware(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Hardware department';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Dishwashing detergent';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dish_soap';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cleans dishes effectively.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Clothing detergent';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'laundry_soap';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cleans and refreshes clothing.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Plates';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dish_plates';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Durable and versatile plates.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 450;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Fabric';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'sewing_fabric';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'High-quality fabric for sewing projects.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 250;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Sewing kit';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'sewing_kit';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Convenient sewing kit for all your sewing and mending needs.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Umbrella';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'umbrella';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Reliable umbrella for rainy days.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterChemist(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Pharmacy';
  (s as any).item_idx = 1;
  if ((!((s as any).preziktype ?? 0))) {
    ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Condoms';
    ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'equipped_condoms';
    ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Male contraceptive';
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
    ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  } else {
    if (((s as any).preziktype ?? 0) === 1  ||  ((s as any).preziktype ?? 0) === 2) {
      ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Condoms';
      ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'normal_condoms';
      ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Male contraceptive';
      ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
      ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
      ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
      ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
      ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
      ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
    }
  }
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    ((s as any).event_curr_aisle = (s as any).event_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'gt \'pav_pharmacy\', \'buy_condoms\'';
  }
  (s as any).item_idx = 2;
  if (((s as any).therapistFuckedPussyStage ?? 0) < 2) {
    ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Birth Control Pills';
    ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'contraceptive_pill';
    ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'The female pill to reduce the risk of pregnancy';
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1870;
    ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  } else {
    ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
    ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
    ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'This section appears to be empty';
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  }
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    ((s as any).event_curr_aisle = (s as any).event_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'gt \'pav_pharmacy\', \'buy_birth_control\'';
  }
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Pregnancy test';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'pregnancy_test';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Simple wee here test';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 530;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    ((s as any).event_curr_aisle = (s as any).event_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'gt \'pav_pharmacy\', \'buy_preg_test\'';
  }
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Morning after pill';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'morning_after_pill';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'For those moments when you forgot you weren\'t on the pill';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 740;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    ((s as any).event_curr_aisle = (s as any).event_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'gt \'pav_pharmacy\', \'buy_morning_after\'';
  }
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Antibiotics';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'antibiotics';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'The modern day wonder cure';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 580;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Vitamins';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'vitamins';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Feeling down? Stay healthy with these supplements';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 130;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 7;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Painkillers';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'painkillers';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Make those painful blues fade away';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 50;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 435;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 8;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'chafing Cream';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'chafing_cream';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'To make tender skin soft again';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 372;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    ((s as any).event_curr_aisle = (s as any).event_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'gt \'pav_pharmacy\', \'ointment\'';
  }
  (s as any).item_idx = 9;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Lubricant';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'lubricant';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'For those intimate moments';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 145;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    ((s as any).event_curr_aisle = (s as any).event_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'gt \'pav_pharmacy\', \'buy_lube\'';
  }
  (s as any).item_idx = 10;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Lipbalm';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'lipbalm';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'To improve your looks and give your lips that extra oomph.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 127;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 11;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Weight loss pill';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'weight_loss_pill';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'When you do not have time to exercise try these Acme Weight Loss pills';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 12;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 248;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 12;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Tampons';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tampons';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A discrete version that helps with that time of the month.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 13;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Sanitary napkins';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'sanitary_pads';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cheap product that helps with that time of the month.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 14;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Enema kit';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'enema_kit';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'To clean up the mess from the mess';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1250;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 15;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Breast pump';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'breast_pump';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Extract and store milk for babies both old and young';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 2500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 16;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Breastmilk bottle S';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'bottle_s';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'small bottle for your milk';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 3;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 930;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 17;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Breastmilk bottle M';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'bottle_m';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Medium storage bottle for your milk';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 2;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 930;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  if (((s as any).pcs_knows_nipplecream ?? 0) === 1) {
    (s as any).item_idx = 18;
    ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Nipple Cream';
    ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'nipple_cream';
    ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'to reduce the pain from breastfeeding';
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 600;
    ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  }
  // TODO-QSP: end
  scene.build();
}

function enterKiosk(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Kiosk';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cigarettes';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'cigarettes';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Paper-wrapped tobacco for smoking, containing nicotine and harmful chemicals.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 115;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Fashion magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_fashion';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Glossy publications showcasing the latest trends, clothing, accessories, beauty tips, and celebrity styles, offering inspiration and insights for fashion enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Computer magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_computer';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Trendy tech publications featuring hardware, software, and industry insights for tech enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Biographical magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_biography';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Publications featuring in-depth profiles and life stories of notable individuals, offering inspiration and insight into their lives.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cooking magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_cooking';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Culinary publications filled with recipes, cooking tips, food photography, and gastronomic inspiration for home chefs and food enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Knitting magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_knitting';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A publication filled with knitting patterns, techniques, and creative ideas for knitting enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 7;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Fitness magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_fitness';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A publication offering workout routines, nutrition advice, and health tips for those seeking an active and healthy lifestyle.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 8;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Umbrella';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'umbrella';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Reliable umbrella for rainy days.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterSexshop(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Sexshop';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Lubricant';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'lubricant';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A lubricant for personal use.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 145;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Porn magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_porn';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'An adult magazine for mature audiences.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Vibrator';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'vibe';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A vibrating device for personal pleasure.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 800;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Butt plug';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'buttplug';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A sex toy that is designed to be inserted into the rectum for sexual pleasure';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 800;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '15cm suction dildo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dildo_suction';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A suction-based dildo for intimate use.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Strap-on harness';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'strapon';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A strap-on harness securely holds a dildo for hands-free pleasure.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 7;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '10cm dildo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dildo_small';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A smaller-sized dildo.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 800;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 8;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '15cm dildo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dildo_normal';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A standard-sized dildo.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 850;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 9;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '20cm dildo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dildo_big';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A big-sized dildo.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 900;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 10;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '25cm dildo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dildo_large';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A sizable dildo.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 950;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 11;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '30cm dildo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dildo_huge';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A very large dildo.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 12;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '35cm dildo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dildo_enormous';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'An enormous dildo.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 13;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '40cm dildo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dildo_gigantic';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A gigantic dildo.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1200;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterTech(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Household Appliances';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Small TV';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tech_tv';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A compact television perfect for small spaces and small budgets.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 15000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Large Plasma TV';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'plasma_tv';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'An expansive plasma television with stunning picture quality.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Computer';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tech_computer';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A powerful computer for work and play.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 40000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Dead City video game';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tech_game_ds';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A survival game set in the ruins of a city overrun with zombies.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 800;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Dishwasher';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tech_dishwasher';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A modern dishwasher to simplify your kitchen chores.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 28000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Washing machine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tech_washing_machine';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A high-capacity washing machine for your laundry needs.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 7;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Camera';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tech_camera';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A versatile camera for capturing memories.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 8;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Mini camera disguised as a cigarette pack';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tech_hidden_cam';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A discreet mini camera cleverly concealed as a cigarette pack.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 9;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Webcam';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tech_webcam';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A high-quality webcam for video conferencing and streaming.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 2000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterSports(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Sport Equipment';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Skipping Rope';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'skipping_rope';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A versatile fitness accessory for cardio workouts and jumping rope exercises.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Hula Hoop';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'hula_hoop';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A fun and effective way to work on your core and balance with rhythmic waist spinning.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Book on yoga';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'book_yoga';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A comprehensive guide to yoga practices and techniques for enhancing physical and mental well-being.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Ice Skates';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'ice_skates';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Perfect for gliding gracefully on ice, whether for figure skating or recreational winter sports.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 3000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Skis';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'ski';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Essential equipment for downhill and cross-country skiing adventures on snow-covered slopes.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 4000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Refillable Water Bottle';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'refill_bottle';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'An eco-friendly and reusable water bottle for staying hydrated on the go, reducing plastic waste.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterUni(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Convenience store';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Regular food';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_basic';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Basic food, might be nourishing.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 80;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Regular food';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_basic';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Basic food, might be nourishing.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 80;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Tea biscuits';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_biscuits';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A packet of biscuits to accompany your favourite beverage.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Tea biscuits';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_biscuits';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A packet of biscuits to accompany your favourite beverage.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Bottle of water';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_water';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A bottle of water to quench your thirst.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Bottle of water';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_water';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A bottle of water to quench your thirst.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Sandwich';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_sandwich';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A sandwich to fill those hunger cravings.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Sandwich';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_sandwich';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A sandwich to fill those hunger cravings.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Bottle of wine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_wine';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A cheap bottle of wine.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 200;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Tampons';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tampons';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A discrete version that helps with that time of the month.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  (s as any).item_idx = 7;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Sanitary napkins';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'sanitary_pads';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cheap product that helps with that time of the month.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 8;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Shampoo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'shampoo';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'To keep your hair luxurious and shiny.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 250;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterMothershop(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Mommy style';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Morning Sickness Pills';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'meds_morning_sick';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 12;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 80;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Pregnancy Ball';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'preg_ball';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 2475;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Pregnancy Brace';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'preg_brace';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 975;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Pregnancy Pillow';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'preg_pillow';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 2475;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterMarket(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Market';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Dishwashing detergent';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dish_soap';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cleans dishes effectively.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 225;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Clothing detergent';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'laundry_soap';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cleans and refreshes clothing.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 15;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 225;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Plates';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'dish_plates';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Durable and versatile plates.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cosmetics';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cosmetics';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A collection of lotions, powders and potions that make you look Fabulous. This isn\'t witchcraft honest!';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 25;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 600;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Razors';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'razor';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A basic necessity for all body health care, good for 25 shaves.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 100;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Tampons';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tampons';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A discrete version that helps with that time of the month.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 175;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 7;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Sanitary napkins';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'sanitary_pads';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cheap product that helps with that time of month.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 40;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 8;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Umbrella';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'umbrella';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Reliable umbrella for rainy days.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1000;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterGadStore(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Village shop';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Tea biscuits';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_biscuits';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A packet of biscuits to accompany your favourite beverage.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cigarettes';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'cigarettes';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Paper-wrapped tobacco for smoking, containing nicotine and harmful chemicals.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 115;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Fashion magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_fashion';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Glossy publications showcasing the latest trends, clothing, accessories, beauty tips, and celebrity styles, offering inspiration and insights for fashion enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Computer magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_computer';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Trendy tech publications featuring hardware, software, and industry insights for tech enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Biographical magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_biography';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Publications featuring in-depth profiles and life stories of notable individuals, offering inspiration and insight into their lives.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cooking magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_cooking';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Culinary publications filled with recipes, cooking tips, food photography, and gastronomic inspiration for home chefs and food enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 7;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Knitting magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_knitting';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A publication filled with knitting patterns, techniques, and creative ideas for knitting enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 8;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Fitness magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_fitness';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A publication offering workout routines, nutrition advice, and health tips for those seeking an active and healthy lifestyle.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 9;
  if ((!((s as any).preziktype ?? 0))) {
    ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Condoms';
    ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'equipped_condoms';
    ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Male contraceptive';
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
    ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  } else {
    if (((s as any).preziktype ?? 0) === 1  ||  ((s as any).preziktype ?? 0) === 2) {
      ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Condoms';
      ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'normal_condoms';
      ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Male contraceptive';
      ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
      ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
      ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 5;
      ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
      ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
      ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
    }
  }
  (s as any).item_idx = 10;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Shampoo';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'shampoo';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'To keep your hair luxurious and shiny.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 250;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 11;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Clothing detergent';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'laundry_soap';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cleans and refreshes clothing.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 30;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 600;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 12;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Razors';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'razor';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A basic necessity for all body health care, good for 25 shaves.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 25;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 350;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 13;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Tampons';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tampons';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A discrete version that helps with that time of the month.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 160;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterGadMarketHunter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['were_met'] === 1) {
    (s as any).shop_title = 'Hunters stand';
  } else {
    (s as any).shop_title = 'Dried food stand';
  }
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Regular food';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'food_basic';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Basic food, might be nourishing.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 80;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Mushrooms';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mushrooms';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A collection of mushrooms, might be nourishing.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Berries';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'berries';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A collection of berries, might be nourishing.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 500;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  // TODO-QSP: end
  scene.build();
}

function enterProstShop(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Gas station';
  (s as any).item_idx = 1;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cigarettes';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'cigarettes';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Paper-wrapped tobacco for smoking, containing nicotine and harmful chemicals.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 115;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 2;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Fashion magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_fashion';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Glossy publications showcasing the latest trends, clothing, accessories, beauty tips, and celebrity styles, offering inspiration and insights for fashion enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 3;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Computer magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_computer';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Trendy tech publications featuring hardware, software, and industry insights for tech enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 4;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Biographical magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_biography';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Publications featuring in-depth profiles and life stories of notable individuals, offering inspiration and insight into their lives.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 5;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cooking magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_cooking';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Culinary publications filled with recipes, cooking tips, food photography, and gastronomic inspiration for home chefs and food enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 6;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Knitting magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_knitting';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A publication filled with knitting patterns, techniques, and creative ideas for knitting enthusiasts.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 7;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Fitness magazine';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'mag_fitness';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A publication offering workout routines, nutrition advice, and health tips for those seeking an active and healthy lifestyle.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 150;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 8;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Tampons';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'tampons';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A discrete version that helps with that time of the month.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 20;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 400;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  (s as any).item_idx = 9;
  ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Cosmetic Wipes';
  ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'makeup_wipes';
  ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Wipe away those sins and remove your make up.';
  ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
  ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
  ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 50;
  ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  if (((s as any).mc_inventory ?? 0)?.['umbrella'] === 0) {
    (s as any).item_idx = 10;
    ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Umbrella';
    ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'umbrella';
    ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Reliable umbrella for rainy days.';
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1;
    ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1000;
    ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  }
  // TODO-QSP: end
  scene.build();
}

function enterExperimentalTrials(s: GameState, scene: SceneBuilder): void {
  (s as any).shop_title = 'Pharmacy';
  (s as any).item_idx = 0;
  if (((s as any).experimentQW ?? 0)?.['times_participated_1'] > 0) {
    (s as any).item_idx = ((s as any).item_idx ?? 0) + (1);
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_big', 'body_tits_huge')) {
      ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Breast Cream';
    } else {
      ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '<b>Breast Cream</b>';
    }
    ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'breastcream';
    ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A cream that enhances your breast mass.';
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 3000;
    ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  }
  if (((s as any).experimentQW ?? 0)?.['times_participated_2'] > 0) {
    (s as any).item_idx = ((s as any).item_idx ?? 0) + (1);
    ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Hair extension shampoo';
    ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'hair_extensioncream';
    ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A shampoo that lengthens your hair.';
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 3000;
    ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  }
  if (((s as any).experimentQW ?? 0)?.['times_participated_3'] > 0) {
    (s as any).item_idx = ((s as any).item_idx ?? 0) + (1);
    ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Aphrodesiac pills';
    ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'aphrodisiac';
    ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A pill that enhances your libido';
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 1500;
    ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  }
  if (((s as any).experimentQW ?? 0)?.['times_participated_4'] > 0) {
    (s as any).item_idx = ((s as any).item_idx ?? 0) + (1);
    ((s as any).item_curr_aisle = (s as any).item_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'Butt growth injection';
    ((s as any).var_curr_aisle = (s as any).var_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'butt_injection';
    ((s as any).desc_curr_aisle = (s as any).desc_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 'A patented KBI shot that enhances your butt mass.';
    ((s as any).quantity_curr_aisle = (s as any).quantity_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 10;
    ((s as any).max_curr_aisle = (s as any).max_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 0;
    ((s as any).cost_curr_aisle = (s as any).cost_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = 3000;
    ((s as any).img_curr_aisle = (s as any).img_curr_aisle ?? {})[String(((s as any).item_idx ?? 0))] = '';
  }
  // TODO-QSP: end
  scene.build();
}

function enterCleanup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'beauty':
      enterBeauty(s, scene);
      break;
    case 'food':
      enterFood(s, scene);
      break;
    case 'hardware':
      enterHardware(s, scene);
      break;
    case 'chemist':
      enterChemist(s, scene);
      break;
    case 'kiosk':
      enterKiosk(s, scene);
      break;
    case 'sexshop':
      enterSexshop(s, scene);
      break;
    case 'tech':
      enterTech(s, scene);
      break;
    case 'sports':
      enterSports(s, scene);
      break;
    case 'uni':
      enterUni(s, scene);
      break;
    case 'mothershop':
      enterMothershop(s, scene);
      break;
    case 'market':
      enterMarket(s, scene);
      break;
    case 'gad_store':
      enterGadStore(s, scene);
      break;
    case 'gad_market_hunter':
      enterGadMarketHunter(s, scene);
      break;
    case 'prost_shop':
      enterProstShop(s, scene);
      break;
    case 'experimental_trials':
      enterExperimentalTrials(s, scene);
      break;
    case 'cleanup':
      enterCleanup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const item_stock_db: LocationDef = {
  name: 'item_stock_db',
  region: 'other',
  enter: enter,
};
